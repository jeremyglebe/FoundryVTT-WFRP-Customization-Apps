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
}, d = Object.prototype.hasOwnProperty, f = (e, t) => d.call(e, t), p = Array.isArray, m = (e) => C(e) === "[object Map]", h = (e) => C(e) === "[object Set]", g = (e) => C(e) === "[object Date]", _ = (e) => typeof e == "function", v = (e) => typeof e == "string", y = (e) => typeof e == "symbol", b = (e) => typeof e == "object" && !!e, x = (e) => (b(e) || _(e)) && _(e.then) && _(e.catch), S = Object.prototype.toString, C = (e) => S.call(e), ee = (e) => C(e).slice(8, -1), te = (e) => C(e) === "[object Object]", ne = (e) => v(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, re = /* @__PURE__ */ n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ie = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ae = /-\w/g, w = ie((e) => e.replace(ae, (e) => e.slice(1).toUpperCase())), oe = /\B([A-Z])/g, se = ie((e) => e.replace(oe, "-$1").toLowerCase()), ce = ie((e) => e.charAt(0).toUpperCase() + e.slice(1)), le = ie((e) => e ? `on${ce(e)}` : ""), T = (e, t) => !Object.is(e, t), ue = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, de = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, fe = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, pe, me = () => pe ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function he(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = v(r) ? ye(r) : he(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (v(e) || b(e)) return e;
}
var ge = /;(?![^(]*\))/g, _e = /:([^]+)/, ve = /\/\*[^]*?\*\//g;
function ye(e) {
	let t = {};
	return e.replace(ve, "").split(ge).forEach((e) => {
		if (e) {
			let n = e.split(_e);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function E(e) {
	let t = "";
	if (v(e)) t = e;
	else if (p(e)) for (let n = 0; n < e.length; n++) {
		let r = E(e[n]);
		r && (t += r + " ");
	}
	else if (b(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var be = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xe = /* @__PURE__ */ n(be);
be + "";
function Se(e) {
	return !!e || e === "";
}
function Ce(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = we(e[r], t[r]);
	return n;
}
function we(e, t) {
	if (e === t) return !0;
	let n = g(e), r = g(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = y(e), r = y(t), n || r) return e === t;
	if (n = p(e), r = p(t), n || r) return n && r ? Ce(e, t) : !1;
	if (n = b(e), r = b(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !we(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function Te(e, t) {
	return e.findIndex((e) => we(e, t));
}
var Ee = (e) => !!(e && e.__v_isRef === !0), D = (e) => v(e) ? e : e == null ? "" : p(e) || b(e) && (e.toString === S || !_(e.toString)) ? Ee(e) ? D(e.value) : JSON.stringify(e, De, 2) : String(e), De = (e, t) => Ee(t) ? De(e, t.value) : m(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Oe(t, r) + " =>"] = n, e), {}) } : h(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Oe(e)) } : y(t) ? Oe(t) : b(t) && !p(t) && !te(t) ? String(t) : t, Oe = (e, t = "") => y(e) ? `Symbol(${e.description ?? t})` : e, ke, Ae = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && ke && (ke.active ? (this.parent = ke, this.index = (ke.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = ke;
			try {
				return ke = this, e();
			} finally {
				ke = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = ke, ke = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (ke === this) ke = this.prevScope;
			else {
				let e = ke;
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
function je(e) {
	return new Ae(e);
}
function Me() {
	return ke;
}
function Ne(e, t = !1) {
	ke && ke.cleanups.push(e);
}
var Pe, Fe = /* @__PURE__ */ new WeakSet(), Ie = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ke && (ke.active ? ke.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Fe.has(this) && (Fe.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Be(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, $e(this), Ue(this);
		let e = Pe, t = Ye;
		Pe = this, Ye = !0;
		try {
			return this.fn();
		} finally {
			We(this), Pe = e, Ye = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) qe(e);
			this.deps = this.depsTail = void 0, $e(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Fe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ge(this) && this.run();
	}
	get dirty() {
		return Ge(this);
	}
}, Le = 0, Re, ze;
function Be(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = ze, ze = e;
		return;
	}
	e.next = Re, Re = e;
}
function Ve() {
	Le++;
}
function He() {
	if (--Le > 0) return;
	if (ze) {
		let e = ze;
		for (ze = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Re;) {
		let t = Re;
		for (Re = void 0; t;) {
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
function Ue(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function We(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), qe(r), Je(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ge(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ke(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ke(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === et) || (e.globalVersion = et, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ge(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = Pe, r = Ye;
	Pe = e, Ye = !0;
	try {
		Ue(e);
		let n = e.fn(e._value);
		(t.version === 0 || T(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		Pe = n, Ye = r, We(e), e.flags &= -3;
	}
}
function qe(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) qe(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Je(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Ye = !0, Xe = [];
function Ze() {
	Xe.push(Ye), Ye = !1;
}
function Qe() {
	let e = Xe.pop();
	Ye = e === void 0 ? !0 : e;
}
function $e(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = Pe;
		Pe = void 0;
		try {
			t();
		} finally {
			Pe = e;
		}
	}
}
var et = 0, tt = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, nt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!Pe || !Ye || Pe === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== Pe) t = this.activeLink = new tt(Pe, this), Pe.deps ? (t.prevDep = Pe.depsTail, Pe.depsTail.nextDep = t, Pe.depsTail = t) : Pe.deps = Pe.depsTail = t, rt(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = Pe.depsTail, t.nextDep = void 0, Pe.depsTail.nextDep = t, Pe.depsTail = t, Pe.deps === t && (Pe.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, et++, this.notify(e);
	}
	notify(e) {
		Ve();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			He();
		}
	}
};
function rt(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) rt(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var it = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ Symbol(""), ot = /* @__PURE__ */ Symbol(""), st = /* @__PURE__ */ Symbol("");
function ct(e, t, n) {
	if (Ye && Pe) {
		let t = it.get(e);
		t || it.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new nt()), r.map = t, r.key = n), r.track();
	}
}
function lt(e, t, n, r, i, a) {
	let o = it.get(e);
	if (!o) {
		et++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ve(), t === "clear") o.forEach(s);
	else {
		let i = p(e), a = i && ne(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === st || !y(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(st)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(at)), m(e) && s(o.get(ot)));
				break;
			case "delete":
				i || (s(o.get(at)), m(e) && s(o.get(ot)));
				break;
			case "set":
				m(e) && s(o.get(at));
				break;
		}
	}
	He();
}
function ut(e, t) {
	let n = it.get(e);
	return n && n.get(t);
}
function dt(e) {
	let t = /* @__PURE__ */ Qt(e);
	return t === e ? t : (ct(t, "iterate", st), /* @__PURE__ */ Xt(e) ? t : t.map(en));
}
function ft(e) {
	return ct(e = /* @__PURE__ */ Qt(e), "iterate", st), e;
}
function pt(e, t) {
	return /* @__PURE__ */ Yt(e) ? tn(/* @__PURE__ */ Jt(e) ? en(t) : t) : en(t);
}
var mt = {
	__proto__: null,
	[Symbol.iterator]() {
		return ht(this, Symbol.iterator, (e) => pt(this, e));
	},
	concat(...e) {
		return dt(this).concat(...e.map((e) => p(e) ? dt(e) : e));
	},
	entries() {
		return ht(this, "entries", (e) => (e[1] = pt(this, e[1]), e));
	},
	every(e, t) {
		return _t(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return _t(this, "filter", e, t, (e) => e.map((e) => pt(this, e)), arguments);
	},
	find(e, t) {
		return _t(this, "find", e, t, (e) => pt(this, e), arguments);
	},
	findIndex(e, t) {
		return _t(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return _t(this, "findLast", e, t, (e) => pt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return _t(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return _t(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return yt(this, "includes", e);
	},
	indexOf(...e) {
		return yt(this, "indexOf", e);
	},
	join(e) {
		return dt(this).join(e);
	},
	lastIndexOf(...e) {
		return yt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return _t(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return bt(this, "pop");
	},
	push(...e) {
		return bt(this, "push", e);
	},
	reduce(e, ...t) {
		return vt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return vt(this, "reduceRight", e, t);
	},
	shift() {
		return bt(this, "shift");
	},
	some(e, t) {
		return _t(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return bt(this, "splice", e);
	},
	toReversed() {
		return dt(this).toReversed();
	},
	toSorted(e) {
		return dt(this).toSorted(e);
	},
	toSpliced(...e) {
		return dt(this).toSpliced(...e);
	},
	unshift(...e) {
		return bt(this, "unshift", e);
	},
	values() {
		return ht(this, "values", (e) => pt(this, e));
	}
};
function ht(e, t, n) {
	let r = ft(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ Xt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var gt = Array.prototype;
function _t(e, t, n, r, i, a) {
	let o = ft(e), s = o !== e && !/* @__PURE__ */ Xt(e), c = o[t];
	if (c !== gt[t]) {
		let t = c.apply(e, a);
		return s ? en(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, pt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function vt(e, t, n, r) {
	let i = ft(e), a = i !== e && !/* @__PURE__ */ Xt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = pt(e, t)), n.call(this, t, pt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? pt(e, c) : c;
}
function yt(e, t, n) {
	let r = /* @__PURE__ */ Qt(e);
	ct(r, "iterate", st);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Zt(n[0]) ? (n[0] = /* @__PURE__ */ Qt(n[0]), r[t](...n)) : i;
}
function bt(e, t, n = []) {
	Ze(), Ve();
	let r = (/* @__PURE__ */ Qt(e))[t].apply(e, n);
	return He(), Qe(), r;
}
var xt = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), St = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function Ct(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ Qt(this);
	return ct(t, "has", e), t.hasOwnProperty(e);
}
var wt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Ht : Vt : i ? Bt : zt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = p(e);
		if (!r) {
			let e;
			if (a && (e = mt[t])) return e;
			if (t === "hasOwnProperty") return Ct;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ nn(e) ? e : n);
		if ((y(t) ? St.has(t) : xt(t)) || (r || ct(e, "get", t), i)) return o;
		if (/* @__PURE__ */ nn(o)) {
			let e = a && ne(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ Kt(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ Kt(o) : /* @__PURE__ */ Wt(o) : o;
	}
}, Tt = class extends wt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && ne(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Yt(i);
			if (!/* @__PURE__ */ Xt(n) && !/* @__PURE__ */ Yt(n) && (i = /* @__PURE__ */ Qt(i), n = /* @__PURE__ */ Qt(n)), !a && /* @__PURE__ */ nn(i) && !/* @__PURE__ */ nn(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ nn(e) ? e : r);
		return e === /* @__PURE__ */ Qt(r) && (o ? T(n, i) && lt(e, "set", t, n, i) : lt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && lt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!y(t) || !St.has(t)) && ct(e, "has", t), n;
	}
	ownKeys(e) {
		return ct(e, "iterate", p(e) ? "length" : at), Reflect.ownKeys(e);
	}
}, Et = class extends wt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Dt = /* @__PURE__ */ new Tt(), Ot = /* @__PURE__ */ new Et(), kt = /* @__PURE__ */ new Tt(!0), At = (e) => e, jt = (e) => Reflect.getPrototypeOf(e);
function Mt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ Qt(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, u = i[e](...r), d = n ? At : t ? tn : en;
		return !t && ct(a, "iterate", c ? ot : at), l(Object.create(u), { next() {
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
function Nt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Pt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ Qt(r), a = /* @__PURE__ */ Qt(n);
			e || (T(n, a) && ct(i, "get", n), ct(i, "get", a));
			let { has: o } = jt(i), s = t ? At : e ? tn : en;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && ct(/* @__PURE__ */ Qt(t), "iterate", at), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ Qt(n), i = /* @__PURE__ */ Qt(t);
			return e || (T(t, i) && ct(r, "has", t), ct(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ Qt(a), s = t ? At : e ? tn : en;
			return !e && ct(o, "iterate", at), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return l(n, e ? {
		add: Nt("add"),
		set: Nt("set"),
		delete: Nt("delete"),
		clear: Nt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ Qt(this), r = jt(n), i = /* @__PURE__ */ Qt(e), a = !t && !/* @__PURE__ */ Xt(e) && !/* @__PURE__ */ Yt(e) ? i : e;
			return r.has.call(n, a) || T(e, a) && r.has.call(n, e) || T(i, a) && r.has.call(n, i) || (n.add(a), lt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Xt(n) && !/* @__PURE__ */ Yt(n) && (n = /* @__PURE__ */ Qt(n));
			let r = /* @__PURE__ */ Qt(this), { has: i, get: a } = jt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ Qt(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? T(n, s) && lt(r, "set", e, n, s) : lt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ Qt(this), { has: n, get: r } = jt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ Qt(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && lt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ Qt(this), t = e.size !== 0, n = e.clear();
			return t && lt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Mt(r, e, t);
	}), n;
}
function Ft(e, t) {
	let n = Pt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(f(n, r) && r in t ? n : t, r, i);
}
var It = { get: /* @__PURE__ */ Ft(!1, !1) }, Lt = { get: /* @__PURE__ */ Ft(!1, !0) }, Rt = { get: /* @__PURE__ */ Ft(!0, !1) }, zt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap();
function Ut(e) {
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
function Wt(e) {
	return /* @__PURE__ */ Yt(e) ? e : qt(e, !1, Dt, It, zt);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return qt(e, !1, kt, Lt, Bt);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return qt(e, !0, Ot, Rt, Vt);
}
function qt(e, t, n, r, i) {
	if (!b(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Ut(ee(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return /* @__PURE__ */ Yt(e) ? /* @__PURE__ */ Jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ Qt(t) : e;
}
function $t(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && de(e, "__v_skip", !0), e;
}
var en = (e) => b(e) ? /* @__PURE__ */ Wt(e) : e, tn = (e) => b(e) ? /* @__PURE__ */ Kt(e) : e;
// @__NO_SIDE_EFFECTS__
function nn(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function O(e) {
	return rn(e, !1);
}
function rn(e, t) {
	return /* @__PURE__ */ nn(e) ? e : new an(e, t);
}
var an = class {
	constructor(e, t) {
		this.dep = new nt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ Qt(e), this._value = t ? e : en(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Xt(e) || /* @__PURE__ */ Yt(e);
		e = n ? e : /* @__PURE__ */ Qt(e), T(e, t) && (this._rawValue = e, this._value = n ? e : en(e), this.dep.trigger());
	}
};
function k(e) {
	return /* @__PURE__ */ nn(e) ? e.value : e;
}
var on = {
	get: (e, t, n) => t === "__v_raw" ? e : k(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ nn(i) && !/* @__PURE__ */ nn(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function sn(e) {
	return /* @__PURE__ */ Jt(e) ? e : new Proxy(e, on);
}
// @__NO_SIDE_EFFECTS__
function cn(e) {
	let t = p(e) ? Array(e.length) : {};
	for (let n in e) t[n] = fn(e, n);
	return t;
}
var ln = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = y(t) ? t : String(t), this._raw = /* @__PURE__ */ Qt(e);
		let r = !0, i = e;
		if (!p(e) || y(this._key) || !ne(this._key)) do
			r = !/* @__PURE__ */ Zt(i) || /* @__PURE__ */ Xt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = k(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ nn(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ nn(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return ut(this._raw, this._key);
	}
}, un = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function dn(e, t, n) {
	return /* @__PURE__ */ nn(e) ? e : _(e) ? new un(e) : b(e) && arguments.length > 1 ? fn(e, t, n) : /* @__PURE__ */ O(e);
}
function fn(e, t, n) {
	return new ln(e, t, n);
}
var pn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new nt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = et - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && Pe !== this) return Be(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ke(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function mn(e, t, n = !1) {
	let r, i;
	return _(e) ? r = e : (r = e.get, i = e.set), new pn(r, i, n);
}
var hn = {}, gn = /* @__PURE__ */ new WeakMap(), _n = void 0;
function vn(e, t = !1, n = _n) {
	if (n) {
		let t = gn.get(n);
		t || gn.set(n, t = []), t.push(e);
	}
}
function yn(e, t, n = r) {
	let { immediate: i, deep: o, once: s, scheduler: c, augmentJob: l, call: d } = n, f = (e) => o ? e : /* @__PURE__ */ Xt(e) || o === !1 || o === 0 ? bn(e, 1) : bn(e), m, h, g, v, y = !1, b = !1;
	if (/* @__PURE__ */ nn(e) ? (h = () => e.value, y = /* @__PURE__ */ Xt(e)) : /* @__PURE__ */ Jt(e) ? (h = () => f(e), y = !0) : p(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Jt(e) || /* @__PURE__ */ Xt(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ nn(e)) return e.value;
		if (/* @__PURE__ */ Jt(e)) return f(e);
		if (_(e)) return d ? d(e, 2) : e();
	})) : h = _(e) ? t ? d ? () => d(e, 2) : e : () => {
		if (g) {
			Ze();
			try {
				g();
			} finally {
				Qe();
			}
		}
		let t = _n;
		_n = m;
		try {
			return d ? d(e, 3, [v]) : e(v);
		} finally {
			_n = t;
		}
	} : a, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => bn(e(), t);
	}
	let x = Me(), S = () => {
		m.stop(), x && x.active && u(x.effects, m);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = b ? Array(e.length).fill(hn) : hn, ee = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (t) {
			let n = m.run();
			if (e || o || y || (b ? n.some((e, t) => T(e, C[t])) : T(n, C))) {
				g && g();
				let e = _n;
				_n = m;
				try {
					let e = [
						n,
						C === hn ? void 0 : b && C[0] === hn ? [] : C,
						v
					];
					C = n, d ? d(t, 3, e) : t(...e);
				} finally {
					_n = e;
				}
			}
		} else m.run();
	};
	return l && l(ee), m = new Ie(h), m.scheduler = c ? () => c(ee, !1) : ee, v = (e) => vn(e, !1, m), g = m.onStop = () => {
		let e = gn.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			gn.delete(m);
		}
	}, t ? i ? ee(!0) : C = m.run() : c ? c(ee.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function bn(e, t = Infinity, n) {
	if (t <= 0 || !b(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ nn(e)) bn(e.value, t, n);
	else if (p(e)) for (let r = 0; r < e.length; r++) bn(e[r], t, n);
	else if (h(e) || m(e)) e.forEach((e) => {
		bn(e, t, n);
	});
	else if (te(e)) {
		for (let r in e) bn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && bn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function xn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Cn(e, t, n);
	}
}
function Sn(e, t, n, r) {
	if (_(e)) {
		let i = xn(e, t, n, r);
		return i && x(i) && i.catch((e) => {
			Cn(e, t, n);
		}), i;
	}
	if (p(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(Sn(e[a], t, n, r));
		return i;
	}
}
function Cn(e, t, n, i = !0) {
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
			Ze(), xn(o, null, 10, [
				e,
				i,
				a
			]), Qe();
			return;
		}
	}
	wn(e, n, a, i, s);
}
function wn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var Tn = [], En = -1, Dn = [], On = null, kn = 0, An = /* @__PURE__ */ Promise.resolve(), jn = null;
function Mn(e) {
	let t = jn || An;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Nn(e) {
	let t = En + 1, n = Tn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = Tn[r], a = zn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Pn(e) {
	if (!(e.flags & 1)) {
		let t = zn(e), n = Tn[Tn.length - 1];
		!n || !(e.flags & 2) && t >= zn(n) ? Tn.push(e) : Tn.splice(Nn(t), 0, e), e.flags |= 1, Fn();
	}
}
function Fn() {
	jn ||= An.then(Bn);
}
function In(e) {
	p(e) ? Dn.push(...e) : On && e.id === -1 ? On.splice(kn + 1, 0, e) : e.flags & 1 || (Dn.push(e), e.flags |= 1), Fn();
}
function Ln(e, t, n = En + 1) {
	for (; n < Tn.length; n++) {
		let t = Tn[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			Tn.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Rn(e) {
	if (Dn.length) {
		let e = [...new Set(Dn)].sort((e, t) => zn(e) - zn(t));
		if (Dn.length = 0, On) {
			On.push(...e);
			return;
		}
		for (On = e, kn = 0; kn < On.length; kn++) {
			let e = On[kn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		On = null, kn = 0;
	}
}
var zn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Bn(e) {
	try {
		for (En = 0; En < Tn.length; En++) {
			let e = Tn[En];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), xn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; En < Tn.length; En++) {
			let e = Tn[En];
			e && (e.flags &= -2);
		}
		En = -1, Tn.length = 0, Rn(e), jn = null, (Tn.length || Dn.length) && Bn(e);
	}
}
var Vn = null, Hn = null;
function Un(e) {
	let t = Vn;
	return Vn = e, Hn = e && e.type.__scopeId || null, t;
}
function A(e, t = Vn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && va(-1);
		let i = Un(t), a;
		try {
			a = e(...n);
		} finally {
			Un(i), r._d && va(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Wn(e, t) {
	if (Vn === null) return e;
	let n = Qa(Vn), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = r] = t[e];
		a && (_(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && bn(o), i.push({
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
function Gn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Ze(), Sn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Qe());
	}
}
function Kn(e, t) {
	if (Ia) {
		let n = Ia.provides, r = Ia.parent && Ia.parent.provides;
		r === n && (n = Ia.provides = Object.create(r)), n[e] = t;
	}
}
function qn(e, t, n = !1) {
	let r = La();
	if (r || xi) {
		let i = xi ? xi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
function Jn() {
	return !!(La() || xi);
}
var Yn = /* @__PURE__ */ Symbol.for("v-scx"), Xn = () => qn(Yn);
function Zn(e, t, n) {
	return Qn(e, t, n);
}
function Qn(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (Ua) {
		if (s === "sync") {
			let e = Xn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = Ia;
	u.call = (e, t, n) => Sn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		Qi(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Pn(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = yn(e, t, u);
	return Ua && (f ? f.push(h) : d && h()), h;
}
function $n(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? er(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = Ba(this), s = Qn(i, a.bind(r), n);
	return o(), s;
}
function er(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var tr = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ Symbol("_vte"), rr = (e) => e.__isTeleport, ir = (e) => e && (e.disabled || e.disabled === ""), ar = (e) => e && (e.defer || e.defer === ""), or = (e) => typeof SVGElement < "u" && e instanceof SVGElement, sr = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, cr = (e, t) => {
	let n = e && e.to;
	return v(n) ? t ? t(n) : null : n;
}, lr = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = ir(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = ir(e.props), r = e.target = cr(e.props, m), a = mr(r, e, h, p);
			r && (o !== "svg" && or(r) ? o = "svg" : o !== "mathml" && sr(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), pr(e, !1)));
		}, S = (e) => {
			let t = () => {
				tr.get(e) === t && (tr.delete(e), ir(e.props) && (b(e, _(e.el) || n, e.anchor), pr(e, !0)), x(e));
			};
			tr.set(e, t), Qi(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), ar(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), pr(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = tr.get(e);
			if (u) {
				u.flags |= 8, tr.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = ir(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || or(p) ? o = "svg" : (o === "mathml" || sr(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), ia(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ur(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = cr(t.props, m);
				e && ur(t, e, null, l, 0);
			} else g && ur(t, p, h, l, 1);
			pr(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = a || !ir(f), m = tr.get(e);
		if (m && (m.flags |= 8, tr.delete(e)), d && (i(l), i(u)), a && i(c), !m && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, p, !!i.dynamicChildren);
		}
	},
	move: ur,
	hydrate: dr
};
function ur(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && r(e.targetAnchor, t, n);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !tr.has(e) && (!d || ir(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function dr(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
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
	let m = t.target = cr(t.props, c), h = ir(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || mr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || mr(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), pr(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var fr = lr;
function pr(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function mr(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[nr] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var hr = /* @__PURE__ */ Symbol("_leaveCb");
function gr(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, gr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function j(e, t) {
	return _(e) ? /* @__PURE__ */ l({ name: e.name }, t, { setup: e }) : e;
}
function _r() {
	let e = La();
	return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function vr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function yr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var br = /* @__PURE__ */ new WeakMap();
function xr(e, t, n, i, a = !1) {
	if (p(e)) {
		e.forEach((e, r) => xr(e, t && (p(t) ? t[r] : t), n, i, a));
		return;
	}
	if (Cr(i) && !a) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && xr(e, t, n, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? Qa(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ Qt(g), b = g === r ? o : (e) => yr(h, e) ? !1 : f(y, e), x = (e, t) => !(t && yr(h, t));
	if (m != null && m !== d) {
		if (Sr(t), v(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ nn(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (_(d)) xn(d, l, 12, [c, h]);
	else {
		let t = v(d), r = /* @__PURE__ */ nn(d);
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
					i(), br.delete(e);
				};
				t.id = -1, br.set(e, t), Qi(t, n);
			} else Sr(e), i();
		}
	}
}
function Sr(e) {
	let t = br.get(e);
	t && (t.flags |= 8, br.delete(e));
}
me().requestIdleCallback, me().cancelIdleCallback;
var Cr = (e) => !!e.type.__asyncLoader, wr = (e) => e.type.__isKeepAlive;
function Tr(e, t) {
	Dr(e, "a", t);
}
function Er(e, t) {
	Dr(e, "da", t);
}
function Dr(e, t, n = Ia) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (kr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) wr(e.parent.vnode) && Or(r, t, n, e), e = e.parent;
	}
}
function Or(e, t, n, r) {
	let i = kr(t, e, r, !0);
	Ir(() => {
		u(r[t], i);
	}, n);
}
function kr(e, t, n = Ia, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Ze();
			let i = Ba(n), a = Sn(t, n, e, r);
			return i(), Qe(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Ar = (e) => (t, n = Ia) => {
	(!Ua || e === "sp") && kr(e, (...e) => t(...e), n);
}, jr = Ar("bm"), Mr = Ar("m"), Nr = Ar("bu"), Pr = Ar("u"), Fr = Ar("bum"), Ir = Ar("um"), Lr = Ar("sp"), Rr = Ar("rtg"), zr = Ar("rtc");
function Br(e, t = Ia) {
	kr("ec", e, t);
}
var Vr = "components", Hr = /* @__PURE__ */ Symbol.for("v-ndc");
function Ur(e) {
	return v(e) ? Wr(Vr, e, !1) || e : e || Hr;
}
function Wr(e, t, n = !0, r = !1) {
	let i = Vn || Ia;
	if (i) {
		let n = i.type;
		if (e === Vr) {
			let e = $a(n, !1);
			if (e && (e === t || e === w(t) || e === ce(w(t)))) return n;
		}
		let a = Gr(i[e] || n[e], t) || Gr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Gr(e, t) {
	return e && (e[t] || e[w(t)] || e[ce(w(t))]);
}
function M(e, t, n, r) {
	let i, a = n && n[r], o = p(e);
	if (o || v(e)) {
		let n = o && /* @__PURE__ */ Jt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Xt(e), s = /* @__PURE__ */ Yt(e), e = ft(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? tn(en(e[n])) : en(e[n]) : e[n], n, void 0, a && a[n]);
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
function Kr(e, t, n = {}, r, i) {
	if (Vn.ce || Vn.parent && Cr(Vn.parent) && Vn.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), P(), I(N, null, [R("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), P();
	let o = a && qr(a(n)), s = n.key || o && o.key, c = I(N, { key: (s && !y(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function qr(e) {
	return e.some((e) => ba(e) ? !(e.type === fa || e.type === N && !qr(e.children)) : !0) ? e : null;
}
function Jr(e, t) {
	let n = {};
	for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : le(r)] = e[r];
	return n;
}
var Yr = (e) => e ? Ha(e) ? Qa(e) : Yr(e.parent) : null, Xr = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Yr(e.parent),
	$root: (e) => Yr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => si(e),
	$forceUpdate: (e) => e.f ||= () => {
		Pn(e.update);
	},
	$nextTick: (e) => e.n ||= Mn.bind(e.proxy),
	$watch: (e) => $n.bind(e)
}), Zr = (e, t) => e !== r && !e.__isScriptSetup && f(e, t), Qr = {
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
			else if (Zr(i, t)) return s[t] = 1, i[t];
			else if (a !== r && f(a, t)) return s[t] = 2, a[t];
			else if (f(o, t)) return s[t] = 3, o[t];
			else if (n !== r && f(n, t)) return s[t] = 4, n[t];
			else ni && (s[t] = 0);
		}
		let u = Xr[t], d, p;
		if (u) return t === "$attrs" && ct(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== r && f(n, t)) return s[t] = 4, n[t];
		if (p = l.config.globalProperties, f(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: i, setupState: a, ctx: o } = e;
		return Zr(a, t) ? (a[t] = n, !0) : i !== r && f(i, t) ? (i[t] = n, !0) : f(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== r && c[0] !== "$" && f(e, c) || Zr(t, c) || f(o, c) || f(i, c) || f(Xr, c) || f(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? f(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function $r() {
	return ei("useSlots").slots;
}
function ei(e) {
	let t = La();
	return t.setupContext ||= Za(t);
}
function ti(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var ni = !0;
function ri(e) {
	let t = si(e), n = e.proxy, r = e.ctx;
	ni = !1, t.beforeCreate && ai(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: ee, render: te, renderTracked: ne, renderTriggered: re, errorCaptured: ie, serverPrefetch: ae, expose: w, inheritAttrs: oe, components: se, directives: ce, filters: le } = t;
	if (u && ii(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Wt(t));
	}
	if (ni = !0, o) for (let e in o) {
		let t = o[e], i = V({
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
	if (c) for (let e in c) oi(c[e], r, n, e);
	if (l) {
		let e = _(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Kn(t, e[t]);
		});
	}
	d && ai(d, e, "c");
	function T(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (T(jr, f), T(Mr, m), T(Nr, h), T(Pr, g), T(Tr, v), T(Er, y), T(Br, ie), T(zr, ne), T(Rr, re), T(Fr, S), T(Ir, ee), T(Lr, ae), p(w)) if (w.length) {
		let t = e.exposed ||= {};
		w.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	te && e.render === a && (e.render = te), oe != null && (e.inheritAttrs = oe), se && (e.components = se), ce && (e.directives = ce), ae && vr(e);
}
function ii(e, t, n = a) {
	p(e) && (e = pi(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? qn(r.from || n, r.default, !0) : qn(r.from || n) : qn(r), /* @__PURE__ */ nn(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function ai(e, t, n) {
	Sn(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function oi(e, t, n, r) {
	let i = r.includes(".") ? er(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		_(n) && Zn(i, n);
	} else if (_(e)) Zn(i, e.bind(n));
	else if (b(e)) if (p(e)) e.forEach((e) => oi(e, t, n, r));
	else {
		let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
		_(r) && Zn(i, r, e);
	}
}
function si(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => ci(c, e, o, !0)), ci(c, t, o)), b(t) && a.set(t, c), c;
}
function ci(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && ci(e, a, n, !0), i && i.forEach((t) => ci(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = li[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var li = {
	data: di,
	props: gi,
	emits: gi,
	methods: hi,
	computed: hi,
	beforeCreate: mi,
	created: mi,
	beforeMount: mi,
	mounted: mi,
	beforeUpdate: mi,
	updated: mi,
	beforeDestroy: mi,
	beforeUnmount: mi,
	destroyed: mi,
	unmounted: mi,
	activated: mi,
	deactivated: mi,
	errorCaptured: mi,
	serverPrefetch: mi,
	components: hi,
	directives: hi,
	watch: _i,
	provide: di,
	inject: fi
};
function di(e, t) {
	return t ? e ? function() {
		return l(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function fi(e, t) {
	return hi(pi(e), pi(t));
}
function pi(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function mi(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function hi(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function gi(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), ti(e), ti(t ?? {})) : t;
}
function _i(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = mi(e[r], t[r]);
	return n;
}
function vi() {
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
var yi = 0;
function bi(e, t) {
	return function(n, r = null) {
		_(n) || (n = l({}, n)), r != null && !b(r) && (r = null);
		let i = vi(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: yi++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: to,
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
					let u = c._ceVNode || R(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Qa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (Sn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = xi;
				xi = c;
				try {
					return e();
				} finally {
					xi = t;
				}
			}
		};
		return c;
	};
}
var xi = null, Si = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${w(t)}Modifiers`] || e[`${se(t)}Modifiers`];
function Ci(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && Si(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = n.map(fe)));
	let c, l = i[c = le(t)] || i[c = le(w(t))];
	!l && o && (l = i[c = le(se(t))]), l && Sn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, Sn(u, e, 6, a);
	}
}
var wi = /* @__PURE__ */ new WeakMap();
function Ti(e, t, n = !1) {
	let r = n ? wi : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!_(e)) {
		let r = (e) => {
			let n = Ti(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), b(e) && r.set(e, o), o);
}
function Ei(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, se(t)) || f(e, t));
}
function Di(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Un(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Oa(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = Oa(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : Oi(s);
		}
	} catch (t) {
		ma.length = 0, Cn(t, e, 1), v = R(fa);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = ki(y, a)), b = Ea(b, y, !1, !0));
	}
	return n.dirs && (b = Ea(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && gr(b, n.transition), v = b, Un(_), v;
}
var Oi = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, ki = (e, t) => {
	let n = {};
	for (let r in e) (!c(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Ai(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? ji(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Mi(o, r, n) && !Ei(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? ji(r, o, l) : !0 : !!o;
	return !1;
}
function ji(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Mi(t, e, a) && !Ei(n, a)) return !0;
	}
	return !1;
}
function Mi(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !we(r, i) : r !== i;
}
function Ni({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Pi = {}, Fi = () => Object.create(Pi), Ii = (e) => Object.getPrototypeOf(e) === Pi;
function Li(e, t, n, r = !1) {
	let i = {}, a = Fi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), zi(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Gt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Ri(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ Qt(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Ei(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = w(o);
					i[t] = Bi(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		zi(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = se(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Bi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && lt(e.attrs, "set", "");
}
function zi(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (re(r)) continue;
		let l = t[r], u;
		a && f(a, u = w(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : Ei(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ Qt(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = Bi(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function Bi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = f(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && _(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Ba(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === se(n)) && (r = !0));
	}
	return r;
}
var Vi = /* @__PURE__ */ new WeakMap();
function Hi(e, t, n = !1) {
	let a = n ? Vi : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!_(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = Hi(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return b(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = w(s[e]);
		Ui(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = w(e);
		if (Ui(t)) {
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
function Ui(e) {
	return e[0] !== "$" && !re(e);
}
var Wi = (e) => e === "_" || e === "_ctx" || e === "$stable", Gi = (e) => p(e) ? e.map(Oa) : [Oa(e)], Ki = (e, t, n) => {
	if (t._n) return t;
	let r = A((...e) => Gi(t(...e)), n);
	return r._c = !1, r;
}, qi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Wi(n)) continue;
		let i = e[n];
		if (_(i)) t[n] = Ki(n, i, r);
		else if (i != null) {
			let e = Gi(i);
			t[n] = () => e;
		}
	}
}, Ji = (e, t) => {
	let n = Gi(t);
	e.slots.default = () => n;
}, Yi = (e, t, n) => {
	for (let r in t) (n || !Wi(r)) && (e[r] = t[r]);
}, Xi = (e, t, n) => {
	let r = e.slots = Fi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Yi(r, t, n), n && de(r, "_", e, !0)) : qi(t, r);
	} else t && Ji(e, t);
}, Zi = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : Yi(a, t, n) : (o = !t.$stable, qi(t, a)), s = t;
	} else t && (Ji(e, t), s = { default: 1 });
	if (o) for (let e in a) !Wi(e) && s[e] == null && delete a[e];
}, Qi = ua;
function $i(e) {
	return ea(e);
}
function ea(e, t) {
	let n = me();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !xa(e, t) && (r = Se(e), ve(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case da:
				y(e, t, n, r);
				break;
			case fa:
				b(e, t, n, r);
				break;
			case pa:
				e ?? x(t, n, r, o);
				break;
			case N:
				se(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? ee(e, t, n, r, i, a, o, s, c) : d & 6 ? ce(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, Te);
		}
		u != null && i ? xr(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && xr(e.ref, null, a, e, !0);
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
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) te(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ae(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, te = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && ie(e.children, d, null, r, i, ta(e, a), s, u), _ && Gn(e, null, r, "created"), ne(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !re(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Ma(f, r, e);
		}
		_ && Gn(e, null, r, "beforeMount");
		let v = ra(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Qi(() => {
			try {
				f && Ma(f, r, e), v && g.enter(d), _ && Gn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ne = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || la(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, ie = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? ka(e[l]) : Oa(e[l]), t, n, r, i, a, o, s);
	}, ae = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && na(n, !1), (g = h.onVnodeBeforeUpdate) && Ma(g, n, t, e), f && Gn(t, e, n, "beforeUpdate"), n && na(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? w(e.dynamicChildren, d, l, n, i, ta(t, a), o) : s || pe(e, t, l, null, n, i, ta(t, a), o, !1), u > 0) {
			if (u & 16) oe(l, m, h, n, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], i = m[r], o = h[r];
					(o !== i || r === "value") && c(l, r, i, o, a, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && oe(l, m, h, n, a);
		((g = h.onVnodeUpdated) || f) && Qi(() => {
			g && Ma(g, n, t, e), f && Gn(t, e, n, "updated");
		}, i);
	}, w = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === N || !xa(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, oe = (e, t, n, i, a) => {
		if (t !== n) {
			if (t !== r) for (let r in t) !re(r) && !(r in n) && c(e, r, t[r], null, a, i);
			for (let r in n) {
				if (re(r)) continue;
				let o = n[r], s = t[r];
				o !== s && r !== "value" && c(e, r, s, o, a, i);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, se = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), ie(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (w(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && ia(e, t, !0)) : pe(e, t, n, f, i, a, s, c, l);
	}, ce = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : le(t, n, r, i, a, o, c) : T(e, t, c);
	}, le = (e, t, n, r, i, a, o) => {
		let s = e.component = Fa(e, r, i);
		if (wr(e) && (s.ctx.renderer = Te), Wa(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, de, o), !e.el) {
				let r = s.subTree = R(fa);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else de(s, e, t, n, i, a, o);
	}, T = (e, t, n) => {
		let r = t.component = e.component;
		if (Ai(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			fe(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, de = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = oa(e);
					if (n) {
						t && (t.el = c.el, fe(e, t, o)), n.asyncDep.then(() => {
							Qi(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				na(e, !1), t ? (t.el = c.el, fe(e, t, o)) : t = c, n && ue(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Ma(d, s, t, c), na(e, !0);
				let f = Di(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), Se(p), e, i, a), t.el = f.el, u === null && Ni(e, f.el), r && Qi(r, i), (d = t.props && t.props.onVnodeUpdated) && Qi(() => Ma(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Cr(t);
				if (na(e, !1), l && ue(l), !m && (o = c && c.onVnodeBeforeMount) && Ma(o, d, t), na(e, !0), s && D) {
					let t = () => {
						e.subTree = Di(e), D(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Di(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Qi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Qi(() => Ma(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Cr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Qi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ie(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Pn(u), na(e, !0), l();
	}, fe = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Ri(e, t.props, r, n), Zi(e, t.children, n), Ze(), Ln(e), Qe();
	}, pe = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				ge(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				he(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && xe(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? ge(l, d, n, r, i, a, o, s, c) : xe(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && ie(d, n, r, i, a, o, s, c));
	}, he = (e, t, n, r, a, o, s, c, l) => {
		e ||= i, t ||= i;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? ka(t[p]) : Oa(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? xe(e, a, o, !0, !1, f) : ie(t, n, r, a, o, s, c, l, f);
	}, ge = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? ka(t[u]) : Oa(t[u]);
			if (xa(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? ka(t[p]) : Oa(t[p]);
			if (xa(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? ka(t[u]) : Oa(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) ve(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ka(t[u]) : Oa(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					ve(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && xa(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? ve(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let ee = x ? aa(C) : i;
			for (_ = ee.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || ca(f) : r;
				C[u] === 0 ? v(null, i, n, p, a, o, s, c, l) : x && (_ < 0 || u !== ee[_] ? _e(i, n, p, 2) : _--);
			}
		}
	}, _e = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			_e(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, Te);
			return;
		}
		if (c === N) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) _e(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === pa) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.persisted && !a[hr] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Qi(() => l.enter(a), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				let e = a._isLeaving || !!a[hr];
				a._isLeaving && a[hr](!0), l.persisted && !e ? u() : r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, ve = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Ze(), xr(s, null, n, e, !0), Qe()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Cr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Ma(_, t, e), u & 6) be(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Gn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Te, r) : l && !l.hasOnce && (a !== N || d > 0 && d & 64) ? xe(l, t, n, !1, !0) : (a === N && d & 384 || !i && u & 16) && xe(c, t, n), r && ye(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Qi(() => {
			_ && Ma(_, t, e), h && Gn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ye = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === N) {
			E(n, r);
			return;
		}
		if (t === pa) {
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
	}, E = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, be = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		sa(c), sa(l), r && ue(r), i.stop(), a && (a.flags |= 8, ve(o, e, t, n)), s && Qi(s, t), Qi(() => {
			e.isUnmounted = !0;
		}, t);
	}, xe = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) ve(e[o], t, n, r, i);
	}, Se = (e) => {
		if (e.shapeFlag & 6) return Se(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[nr];
		return n ? h(n) : t;
	}, Ce = !1, we = (e, t, n) => {
		let r;
		e == null ? t._vnode && (ve(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, Ce ||= (Ce = !0, Ln(r), Rn(), !1);
	}, Te = {
		p: v,
		um: ve,
		m: _e,
		r: ye,
		mt: le,
		mc: ie,
		pc: pe,
		pbc: w,
		n: Se,
		o: e
	}, Ee, D;
	return t && ([Ee, D] = t(Te)), {
		render: we,
		hydrate: Ee,
		createApp: bi(we, Ee)
	};
}
function ta({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function na({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ra(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ia(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ka(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && ia(t, a)), a.type === da && (a.patchFlag === -1 && (a = i[e] = ka(a)), a.el = t.el), a.type === fa && !a.el && (a.el = t.el);
	}
}
function aa(e) {
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
function oa(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : oa(t);
}
function sa(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function ca(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? ca(t.subTree) : null;
}
var la = (e) => e.__isSuspense;
function ua(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : In(e);
}
var N = /* @__PURE__ */ Symbol.for("v-fgt"), da = /* @__PURE__ */ Symbol.for("v-txt"), fa = /* @__PURE__ */ Symbol.for("v-cmt"), pa = /* @__PURE__ */ Symbol.for("v-stc"), ma = [], ha = null;
function P(e = !1) {
	ma.push(ha = e ? null : []);
}
function ga() {
	ma.pop(), ha = ma[ma.length - 1] || null;
}
var _a = 1;
function va(e, t = !1) {
	_a += e, e < 0 && ha && t && (ha.hasOnce = !0);
}
function ya(e) {
	return e.dynamicChildren = _a > 0 ? ha || i : null, ga(), _a > 0 && ha && ha.push(e), e;
}
function F(e, t, n, r, i, a) {
	return ya(L(e, t, n, r, i, a, !0));
}
function I(e, t, n, r, i) {
	return ya(R(e, t, n, r, i, !0));
}
function ba(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function xa(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Sa = ({ key: e }) => e ?? null, Ca = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ nn(e) || _(e) ? {
	i: Vn,
	r: e,
	k: t,
	f: !!n
} : e);
function L(e, t = null, n = null, r = 0, i = null, a = e === N ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Sa(t),
		ref: t && Ca(t),
		scopeId: Hn,
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
		ctx: Vn
	};
	return s ? (Aa(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), _a > 0 && !o && ha && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && ha.push(c), c;
}
var R = wa;
function wa(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Hr) && (e = fa), ba(e)) {
		let r = Ea(e, t, !0);
		return n && Aa(r, n), _a > 0 && !a && ha && (r.shapeFlag & 6 ? ha[ha.indexOf(e)] = r : ha.push(r)), r.patchFlag = -2, r;
	}
	if (eo(e) && (e = e.__vccOpts), t) {
		t = Ta(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = E(e)), b(n) && (/* @__PURE__ */ Zt(n) && !p(n) && (n = l({}, n)), t.style = he(n));
	}
	let o = v(e) ? 1 : la(e) ? 128 : rr(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return L(e, t, n, r, i, o, a, !0);
}
function Ta(e) {
	return e ? /* @__PURE__ */ Zt(e) || Ii(e) ? l({}, e) : e : null;
}
function Ea(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ja(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Sa(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(Ca(t)) : [a, Ca(t)] : Ca(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== N ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ea(e.ssContent),
		ssFallback: e.ssFallback && Ea(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && gr(u, c.clone(u)), u;
}
function z(e = " ", t = 0) {
	return R(da, null, e, t);
}
function Da(e, t) {
	let n = R(pa, null, e);
	return n.staticCount = t, n;
}
function B(e = "", t = !1) {
	return t ? (P(), I(fa, null, e)) : R(fa, null, e);
}
function Oa(e) {
	return e == null || typeof e == "boolean" ? R(fa) : p(e) ? R(N, null, e.slice()) : ba(e) ? ka(e) : R(da, null, String(e));
}
function ka(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ea(e);
}
function Aa(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (p(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), Aa(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !Ii(t) ? t._ctx = Vn : r === 3 && Vn && (Vn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: Vn
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [z(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function ja(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = E([t.class, r.class]));
		else if (e === "style") t.style = he([t.style, r.style]);
		else if (s(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(p(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !c(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Ma(e, t, n, r = null) {
	Sn(e, t, 7, [n, r]);
}
var Na = vi(), Pa = 0;
function Fa(e, t, n) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || Na, o = {
		uid: Pa++,
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
		scope: new Ae(!0),
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
		propsOptions: Hi(i, a),
		emitsOptions: Ti(i, a),
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
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Ci.bind(null, o), e.ce && e.ce(o), o;
}
var Ia = null, La = () => Ia || Vn, Ra, za;
{
	let e = me(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Ra = t("__VUE_INSTANCE_SETTERS__", (e) => Ia = e), za = t("__VUE_SSR_SETTERS__", (e) => Ua = e);
}
var Ba = (e) => {
	let t = Ia;
	return Ra(e), e.scope.on(), () => {
		e.scope.off(), Ra(t);
	};
}, Va = () => {
	Ia && Ia.scope.off(), Ra(null);
};
function Ha(e) {
	return e.vnode.shapeFlag & 4;
}
var Ua = !1;
function Wa(e, t = !1, n = !1) {
	t && za(t);
	let { props: r, children: i } = e.vnode, a = Ha(e);
	Li(e, r, a, t), Xi(e, i, n || t);
	let o = a ? Ga(e, t) : void 0;
	return t && za(!1), o;
}
function Ga(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Qr);
	let { setup: r } = n;
	if (r) {
		Ze();
		let n = e.setupContext = r.length > 1 ? Za(e) : null, i = Ba(e), a = xn(r, e, 0, [e.props, n]), o = x(a);
		if (Qe(), i(), (o || e.sp) && !Cr(e) && vr(e), o) {
			if (a.then(Va, Va), t) return a.then((n) => {
				Ka(e, n, t);
			}).catch((t) => {
				Cn(t, e, 0);
			});
			e.asyncDep = a;
		} else Ka(e, a, t);
	} else Ya(e, t);
}
function Ka(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = sn(t)), Ya(e, n);
}
var qa, Ja;
function Ya(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && qa && !r.render) {
			let t = r.template || si(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = qa(t, l(l({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || a, Ja && Ja(e);
	}
	{
		let t = Ba(e);
		Ze();
		try {
			ri(e);
		} finally {
			Qe(), t();
		}
	}
}
var Xa = { get(e, t) {
	return ct(e, "get", ""), e[t];
} };
function Za(e) {
	return {
		attrs: new Proxy(e.attrs, Xa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Qa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(sn($t(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Xr) return Xr[n](e);
		},
		has(e, t) {
			return t in e || t in Xr;
		}
	}) : e.proxy;
}
function $a(e, t = !0) {
	return _(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function eo(e) {
	return _(e) && "__vccOpts" in e;
}
var V = (e, t) => /* @__PURE__ */ mn(e, t, Ua), to = "3.5.38", no = void 0, ro = typeof window < "u" && window.trustedTypes;
if (ro) try {
	no = /* @__PURE__ */ ro.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var io = no ? (e) => no.createHTML(e) : (e) => e, ao = "http://www.w3.org/2000/svg", oo = "http://www.w3.org/1998/Math/MathML", so = typeof document < "u" ? document : null, co = so && /* @__PURE__ */ so.createElement("template"), lo = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? so.createElementNS(ao, e) : t === "mathml" ? so.createElementNS(oo, e) : n ? so.createElement(e, { is: n }) : so.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => so.createTextNode(e),
	createComment: (e) => so.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => so.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			co.innerHTML = io(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = co.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, uo = /* @__PURE__ */ Symbol("_vtc");
function fo(e, t, n) {
	let r = e[uo];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var po = /* @__PURE__ */ Symbol("_vod"), mo = /* @__PURE__ */ Symbol("_vsh"), ho = /* @__PURE__ */ Symbol(""), go = /(?:^|;)\s*display\s*:/;
function _o(e, t, n) {
	let r = e.style, i = v(n), a = !1;
	if (n && !i) {
		if (t) if (v(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? yo(r, t, "");
		}
		else for (let e in t) n[e] ?? yo(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? yo(r, i, "") : Co(e, i, !v(t) && t ? t[i] : void 0, o) || yo(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[ho];
			e && (n += ";" + e), r.cssText = n, a = go.test(n);
		}
	} else t && e.removeAttribute("style");
	po in e && (e[po] = a ? r.display : "", e[mo] && (r.display = "none"));
}
var vo = /\s*!important$/;
function yo(e, t, n) {
	if (p(n)) n.forEach((n) => yo(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = So(e, t);
		vo.test(n) ? e.setProperty(se(r), n.replace(vo, ""), "important") : e[r] = n;
	}
}
var bo = [
	"Webkit",
	"Moz",
	"ms"
], xo = {};
function So(e, t) {
	let n = xo[t];
	if (n) return n;
	let r = w(t);
	if (r !== "filter" && r in e) return xo[t] = r;
	r = ce(r);
	for (let n = 0; n < bo.length; n++) {
		let i = bo[n] + r;
		if (i in e) return xo[t] = i;
	}
	return t;
}
function Co(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && v(r) && n === r;
}
var wo = "http://www.w3.org/1999/xlink";
function To(e, t, n, r, i, a = xe(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(wo, t.slice(6, t.length)) : e.setAttributeNS(wo, t, n) : n == null || a && !Se(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
}
function Eo(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? io(n) : n);
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
		r === "boolean" ? n = Se(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Do(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Oo(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var ko = /* @__PURE__ */ Symbol("_vei");
function Ao(e, t, n, r, i = null) {
	let a = e[ko] || (e[ko] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Mo(t);
		r ? Do(e, n, a[t] = Io(r, i), s) : o && (Oo(e, n, o, s), a[t] = void 0);
	}
}
var jo = /(?:Once|Passive|Capture)$/;
function Mo(e) {
	let t;
	if (jo.test(e)) {
		t = {};
		let n;
		for (; n = e.match(jo);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : se(e.slice(2)), t];
}
var No = 0, Po = /* @__PURE__ */ Promise.resolve(), Fo = () => No ||= (Po.then(() => No = 0), Date.now());
function Io(e, t) {
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
				e && Sn(e, t, 5, a);
			}
		} else Sn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Fo(), n;
}
var Lo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ro = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? fo(e, r, o) : t === "style" ? _o(e, n, r) : s(t) ? c(t) || Ao(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : zo(e, t, r, o)) ? (Eo(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && To(e, t, r, o, a, t !== "value")) : e._isVueCE && (Bo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? Eo(e, w(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), To(e, t, r, o));
};
function zo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Lo(t) && _(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Lo(t) && v(n) ? !1 : t in e;
}
function Bo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = w(t);
	return Array.isArray(n) ? n.some((e) => w(e) === r) : Object.keys(n).some((e) => w(e) === r);
}
var Vo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => ue(t, e) : t;
};
function Ho(e) {
	e.target.composing = !0;
}
function Uo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Wo = /* @__PURE__ */ Symbol("_assign");
function Go(e, t, n) {
	return t && (e = e.trim()), n && (e = fe(e)), e;
}
var Ko = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[Wo] = Vo(i);
		let a = r || i.props && i.props.type === "number";
		Do(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Wo](Go(e.value, n, a));
		}), (n || a) && Do(e, "change", () => {
			e.value = Go(e.value, n, a);
		}), t || (Do(e, "compositionstart", Ho), Do(e, "compositionend", Uo), Do(e, "change", Uo));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Wo] = Vo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? fe(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, qo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		Do(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? fe(Yo(e)) : Yo(e));
			e[Wo](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, Mn(() => {
				e._assigning = !1;
			});
		}), e[Wo] = Vo(r);
	},
	mounted(e, { value: t }) {
		Jo(e, t);
	},
	beforeUpdate(e, t, n) {
		e[Wo] = Vo(n);
	},
	updated(e, { value: t }) {
		e._assigning || Jo(e, t);
	}
};
function Jo(e, t) {
	let n = e.multiple, r = p(t);
	if (!(n && !r && !h(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = Yo(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = Te(t, o) > -1;
			} else a.selected = t.has(o);
			else if (we(Yo(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Yo(e) {
	return "_value" in e ? e._value : e.value;
}
var Xo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Zo = {
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
	exact: (e, t) => Xo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Qo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Zo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, $o = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, es = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = se(n.key);
		if (t.some((e) => e === r || $o[e] === r)) return e(n);
	}));
}, ts = /* @__PURE__ */ l({ patchProp: Ro }, lo), ns;
function rs() {
	return ns ||= $i(ts);
}
var is = ((...e) => {
	let t = rs().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = os(e);
		if (!r) return;
		let i = t._component;
		!_(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, as(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function as(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function os(e) {
	return v(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/functions/species-builder/config-keys.ts
function ss(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[^\da-z]+/g, "-").replaceAll(/^-+|-+$/g, "");
}
//#endregion
//#region src/functions/species-builder/editor/field-values.ts
function cs(e) {
	let t = e.split(/\r?\n/).map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function ls(e) {
	let t = _s(e).flatMap(([e, t]) => t ? [[e, t]] : []);
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function us(e) {
	let t = _s(e).flatMap(([e, t]) => {
		let n = gs(t);
		return n === void 0 ? [] : [[e, n]];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function ds(e) {
	let t = _s(e).flatMap(([e, t]) => {
		let n = t.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
		return n.length > 0 ? [[e, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function fs(e) {
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}
function ps(e) {
	return e.length > 0 ? e : void 0;
}
function ms(e) {
	let t = fs(e);
	return t ? { formula: t } : void 0;
}
function hs(e) {
	let t = e.map((e) => {
		let t = { name: e.name }, n = fs(e.journalUuid ?? "");
		return n && (t.journalUuid = n), t;
	});
	return t.length > 0 ? { rows: t } : void 0;
}
function gs(e) {
	let t = e.trim();
	if (!t) return;
	let n = Number(t);
	return Number.isFinite(n) ? n : void 0;
}
function _s(e) {
	return e.split(/\r?\n/).flatMap((e) => {
		let t = e.indexOf(":");
		if (t < 0) return [];
		let n = e.slice(0, t).trim(), r = e.slice(t + 1).trim();
		return n ? [[n, r]] : [];
	});
}
//#endregion
//#region src/functions/species-builder/editor/draft.ts
function vs(e, t) {
	return e === "careerReplacements" ? ds(t) : e === "randomTalents" ? us(t) : ls(t);
}
function ys(e, t) {
	return e === "randomTalents" ? us(t) : ls(t);
}
function bs(e, t, n) {
	let r = { ...e };
	return n === void 0 ? delete r[t] : r[t] = n, r;
}
function xs(e) {
	let t = /* @__PURE__ */ new Set();
	return e.map((e) => {
		let n = ks(e);
		return Cs(e) ? (n.key = e.key.trim(), e.subspecies && (n.subspecies = Ss(e.subspecies, e.runtimeSubspeciesCount)), n) : (n.key = ws(e.key, e.name, "new-species", t), e.subspecies && (n.subspecies = Ss(e.subspecies)), n);
	});
}
function Ss(e, t = 0) {
	let n = new Set(e.slice(0, t).map(({ key: e }) => e.trim()).filter(Boolean));
	return e.map((e, r) => ({
		...ks(e),
		key: r < t ? e.key.trim() : ws(e.key, e.name, "new-subspecies", n)
	}));
}
function Cs(e) {
	return "origin" in e && e.origin === "runtime";
}
function ws(e, t, n, r) {
	let i = ss(e);
	if (i) return r.add(i), i;
	let a = Ts(ss(t) || n, r);
	return r.add(a), a;
}
function Ts(e, t) {
	if (!t.has(e)) return e;
	let n = 2, r = `${e}-${n}`;
	for (; t.has(r);) n += 1, r = `${e}-${n}`;
	return r;
}
function Es(e) {
	return JSON.stringify(Ds(e));
}
function Ds(e) {
	return Array.isArray(e) ? e.map(Ds) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, Ds(t)])) : e;
}
function Os(e) {
	return JSON.stringify(e, null, 2);
}
function ks(e) {
	return JSON.parse(JSON.stringify(e));
}
function As(e) {
	return e instanceof Error ? e.message : "Unknown Species Builder error.";
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var js = typeof window < "u", Ms, Ns = (e) => Ms = e, Ps = Symbol();
function Fs(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Is;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Is ||= {});
var Ls = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Rs(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function zs(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Ws(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Bs(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Vs(e) {
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
var Hs = typeof navigator == "object" ? navigator : { userAgent: "" }, Us = /Macintosh/.test(Hs.userAgent) && /AppleWebKit/.test(Hs.userAgent) && !/Safari/.test(Hs.userAgent), Ws = js ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Us ? Gs : "msSaveOrOpenBlob" in Hs ? Ks : qs : () => {};
function Gs(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Vs(r) : Bs(r.href) ? zs(e, t, n) : (r.target = "_blank", Vs(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Vs(r);
	}, 0));
}
function Ks(e, t = "download", n) {
	if (typeof e == "string") if (Bs(e)) zs(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			Vs(t);
		});
	}
	else navigator.msSaveOrOpenBlob(Rs(e, n), t);
}
function qs(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return zs(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Ls.HTMLElement)) || "safari" in Ls, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Us) && typeof FileReader < "u") {
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
var { assign: Js } = Object;
function Ys() {
	let e = je(!0), t = e.run(() => /* @__PURE__ */ O({})), n = [], r = [], i = $t({
		install(e) {
			Ns(i), i._a = e, e.provide(Ps, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var Xs = () => {};
function Zs(e, t, n, r = Xs) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Me() && Ne(i), i;
}
function Qs(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var $s = (e) => e(), ec = Symbol(), tc = Symbol();
function nc(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		Fs(i) && Fs(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ nn(r) && !/* @__PURE__ */ Jt(r) ? e[n] = nc(i, r) : e[n] = r;
	}
	return e;
}
var rc = Symbol();
function ic(e) {
	return !Fs(e) || !Object.prototype.hasOwnProperty.call(e, rc);
}
var { assign: ac } = Object;
function oc(e) {
	return !!(/* @__PURE__ */ nn(e) && e.effect);
}
function sc(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), ac(/* @__PURE__ */ cn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = $t(V(() => {
			Ns(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = cc(e, l, t, n, r, !0), c;
}
function cc(e, t, n = {}, r, i, a) {
	let o, s = ac({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: Is.patchFunction,
			storeId: e,
			events: void 0
		}) : (nc(r.state.value[e], t), n = {
			type: Is.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		Mn().then(() => {
			m === i && (l = !0);
		}), u = !0, Qs(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			ac(e, t);
		});
	} : Xs;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (ec in t) return t[tc] = n, t;
		let i = function() {
			Ns(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Qs(f, {
				args: n,
				name: i[tc],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw Qs(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Qs(a, e), e)).catch((e) => (Qs(o, e), Promise.reject(e))) : (Qs(a, l), l);
		};
		return i[ec] = !0, i[tc] = n, i;
	}, y = /* @__PURE__ */ Wt({
		_p: r,
		$id: e,
		$onAction: Zs.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = Zs(d, t, n.detached, () => a()), a = o.run(() => Zn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: Is.direct,
					events: void 0
				}, r);
			}, ac({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || $s)(() => r._e.run(() => (o = je()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ nn(n) && !oc(n) || /* @__PURE__ */ Jt(n) ? a || (p && ic(n) && (/* @__PURE__ */ nn(n) ? n.value = p[t] : nc(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return ac(y, b), ac(/* @__PURE__ */ Qt(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				ac(t, e);
			});
		}
	}), r._p.forEach((e) => {
		ac(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function lc(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Jn();
		return n ||= o ? qn(Ps, null) : null, n && Ns(n), n = Ms, n._s.has(e) || (i ? cc(e, t, r, n) : sc(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function uc(e) {
	let t = /* @__PURE__ */ Qt(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = V({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ nn(i) || /* @__PURE__ */ Jt(i)) && (n[r] = /* @__PURE__ */ dn(e, r));
	}
	return n;
}
//#endregion
//#region src/shared/assign-if-present.ts
function H(e, t, n) {
	n !== void 0 && (e[t] = n);
}
//#endregion
//#region src/functions/species-builder/item-reference-names.ts
function dc(e) {
	return pc(e.name, e.specification);
}
function fc(e) {
	let t = e.name.trim();
	if (!e.item) return t;
	if (!t) return dc(e.item);
	if (!hc(t)) {
		if (e.item.specification) return pc(t, e.item.specification);
		if (hc(e.item.name) && gc(t) === gc(e.item.name)) return e.item.name.trim();
	}
	return t;
}
function pc(e, t) {
	let n = e.trim(), r = t?.trim();
	return !n || !r || mc(n) ? n : `${n} (${r})`;
}
function mc(e) {
	return /\(([^()]*)\)\s*$/.exec(e.trim())?.[1]?.trim() ?? "";
}
function hc(e) {
	return /\([^()]*\)\s*$/.test(e.trim());
}
function gc(e) {
	return e.split("(")[0]?.trim().toLocaleLowerCase() ?? "";
}
//#endregion
//#region src/functions/species-builder/replacement-row-records.ts
function _c(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = fc(e.rolled), n = fc(e.replacement);
		return t && n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function vc(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = fc(e.rolled), n = e.replacements.map(fc).filter((e) => e.length > 0);
		return t && n.length > 0 ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
//#endregion
//#region src/functions/species-builder/linked-grant-records.ts
function yc(e) {
	if (!e || e.length === 0) return;
	let t = e.map(fc).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function bc(e) {
	if (!e || e.length === 0) return;
	let t = e.flatMap((e) => {
		let t = e.choices.map(fc).filter((e) => e.length > 0);
		return t.length > 0 ? [t.join(", ")] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/subspecies-list-fields.ts
function xc(e) {
	return yc(e.linkedSkills) ?? e.skills;
}
function Sc(e, t) {
	return Ac(xc(e), t.skillsAdded, t.skillsRemoved);
}
function Cc(e, t) {
	return Sc(e, t) ?? xc(e) ?? [];
}
function wc(e) {
	return bc(e.linkedTalents) ?? e.talents;
}
function Tc(e, t) {
	return Ac(wc(e), t.talentsAdded, t.talentsRemoved);
}
function Ec(e, t) {
	return kc(yc(e.linkedTraits) ?? e.traits, t);
}
function Dc(e, t, n = {}) {
	let r = n.subspecies ?? n.parent, i = Ac(Ec(e), t.traitsAdded, t.traitsRemoved);
	return i ? kc(i, r) : n.subspecies ? kc(Ec(e), n.subspecies) : void 0;
}
function Oc(e, t, n = {}) {
	return Dc(e, t, n) ?? Ec(e, n.parent) ?? [];
}
function kc(e, t) {
	if (!t) return e;
	let n = e ? [...e] : [];
	return n.includes(t) || n.push(t), n;
}
function Ac(e, t, n) {
	if (!t && !n) return;
	let r = new Set(n ?? []), i = (e ?? []).filter((e) => !r.has(e));
	for (let e of t ?? []) i.includes(e) || i.push(e);
	return i;
}
//#endregion
//#region src/functions/species-builder/definition-plans.ts
function jc(e, t = []) {
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
var U = {
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
}, Mc = {
	[U.Agility]: "Agility",
	[U.BallisticSkill]: "Ballistic Skill",
	[U.Dexterity]: "Dexterity",
	[U.Fellowship]: "Fellowship",
	[U.Initiative]: "Initiative",
	[U.Intelligence]: "Intelligence",
	[U.Strength]: "Strength",
	[U.Toughness]: "Toughness",
	[U.WeaponSkill]: "Weapon Skill",
	[U.Willpower]: "Willpower"
}, Nc = {
	agility: U.Agility,
	"ballistic skill": U.BallisticSkill,
	dexterity: U.Dexterity,
	fellowship: U.Fellowship,
	initiative: U.Initiative,
	intelligence: U.Intelligence,
	strength: U.Strength,
	toughness: U.Toughness,
	"weapon skill": U.WeaponSkill,
	willpower: U.Willpower
};
function Pc(e) {
	return e in Mc;
}
//#endregion
//#region src/functions/species-builder/wound-formula/compiler.ts
function Fc(e) {
	let t = [], n = /* @__PURE__ */ new Set(), r = e.trim();
	return r = r.replaceAll(/@([A-Za-z][\dA-Za-z]*)/g, (e, t) => {
		let r = Ic(t);
		return n.add(r), r;
	}), r = r.replaceAll(/{([^{}]+)}/g, (e, n) => Lc(t, n, "total")), r = r.replaceAll(/\[([^[\]]+)]/g, (e, n) => Lc(t, n, "bonus")), {
		expression: r,
		references: t,
		usedKeywords: n
	};
}
function Ic(e) {
	if ((/* @__PURE__ */ "ablaze.advantage.age.bleeding.blinded.broken.corruption.deafened.entangled.fate.fatigued.fortune.height.poisoned.rank.resilience.resolve.sb.sbMultiplier.scale.sin.size.status.stunned.tb.tbMultiplier.weight.wpb.wpbMultiplier.xp".split(".")).includes(e)) return e;
	throw Error(`Unknown wound formula keyword: @${e}`);
}
function Lc(e, t, n) {
	let r = Rc(t, n, e), i = e.find((e) => zc(e, r));
	return i ? i.variableName : (e.push(r), r.variableName);
}
function Rc(e, t, n) {
	let [r, i] = Bc(e), a = Vc(r), o = Gc(Wc(r, i, t), n);
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
	return i && (s.characteristicOverride = Hc(i)), s;
}
function zc(e, t) {
	return e.characteristicKey === t.characteristicKey && e.characteristicOverride === t.characteristicOverride && e.kind === t.kind && e.name === t.name && e.source === t.source;
}
function Bc(e) {
	let t = e.split("|").map((e) => e.trim());
	if (t.length > 2 || !t[0]) throw Error(`Invalid wound formula attribute reference: ${e}`);
	return [t[0], t[1]];
}
function Vc(e) {
	let t = e.trim().toLocaleLowerCase();
	return Pc(t) ? t : Nc[t] ?? Uc[t];
}
function Hc(e) {
	let t = Vc(e);
	if (!t) throw Error(`Unknown wound formula characteristic: ${e}`);
	return t;
}
var Uc = {
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
function Wc(e, t, n) {
	let [r, ...i] = [e, t].flatMap((e) => e ? e.match(/\d+|[A-Za-z]+/g) ?? [] : []), a = r ? [r.toLocaleLowerCase(), ...i.map((e) => e.charAt(0).toLocaleUpperCase() + e.slice(1))].join("") : "attribute";
	return n === "bonus" ? `${a}Bonus` : a;
}
function Gc(e, t) {
	let n = new Set(t.map((e) => e.variableName));
	if (!n.has(e)) return e;
	let r = 2, i = `${e}${r}`;
	for (; n.has(i);) r += 1, i = `${e}${r}`;
	return i;
}
//#endregion
//#region src/functions/species-builder/wound-formula/script-lines.ts
function Kc(e) {
	let t = [];
	if (Yc(e, [
		"sb",
		"tb",
		"wpb"
	]) && (t.push(...Xc(e, "sb", "preWoundArgs.sb")), t.push(...Xc(e, "tb", "preWoundArgs.tb")), t.push(...Xc(e, "wpb", "preWoundArgs.wpb"))), Yc(e, [
		"sbMultiplier",
		"tbMultiplier",
		"wpbMultiplier"
	]) && (t.push("const multiplier = preWoundArgs.multiplier;"), t.push(...Xc(e, "sbMultiplier", "multiplier.sb")), t.push(...Xc(e, "tbMultiplier", "multiplier.tb")), t.push(...Xc(e, "wpbMultiplier", "multiplier.wpb"))), Yc(e, ["scale", "size"]) && (t.push(...Zc()), t.push("const size = actorSizeStep();"), t.push(...Xc(e, "scale", "2 ** size"))), Yc(e, nl) && (t.push(...Xc(e, "age", "Number(actor.system.details.age.value)")), t.push(...Xc(e, "height", "Number(actor.system.details.height.value)")), t.push(...Xc(e, "weight", "Number(actor.system.details.weight.value)")), t.push(...al(e))), Yc(e, rl) && (t.push(...Xc(e, "xp", "actor.system.details.experience.total")), t.push(...Xc(e, "fate", "actor.system.status.fate.value")), t.push(...Xc(e, "fortune", "actor.system.status.fortune.value")), t.push(...Xc(e, "resilience", "actor.system.status.resilience.value")), t.push(...Xc(e, "resolve", "actor.system.status.resolve.value")), t.push(...Xc(e, "corruption", "actor.system.status.corruption.value")), t.push(...Xc(e, "sin", "actor.system.status.sin.value")), t.push(...Xc(e, "advantage", "actor.system.status.advantage.value"))), Yc(e, il)) {
		t.push(...ol());
		for (let n of il) t.push(...Xc(e, n, `conditionValue("${n}")`));
	}
	return t.length ? [...t, ""] : [];
}
function qc(e) {
	let t = e.length > 0, n = e.some((e) => e.source === "skill");
	return [...Qc(t), ...$c(n)];
}
function Jc(e) {
	return e.map((e) => e.source === "characteristic" ? el(e) : tl(e));
}
function Yc(e, t) {
	return t.some((t) => e.has(t));
}
function Xc(e, t, n) {
	return e.has(t) ? [`const ${t} = ${n};`] : [];
}
function Zc() {
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
function Qc(e) {
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
function $c(e) {
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
function el(e) {
	let t = e.kind === "bonus" ? "characteristicBonus" : "characteristicTotal";
	return `const ${e.variableName} = ${t}(${JSON.stringify(e.characteristicKey)});`;
}
function tl(e) {
	let t = e.kind === "bonus" ? "skillBonus" : "skillTotal", n = e.characteristicOverride ? JSON.stringify(e.characteristicOverride) : "undefined";
	return `const ${e.variableName} = ${t}(${JSON.stringify(e.name)}, ${n});`;
}
var nl = [
	"age",
	"height",
	"rank",
	"status",
	"weight"
], rl = [
	"advantage",
	"corruption",
	"fate",
	"fortune",
	"resilience",
	"resolve",
	"sin",
	"xp"
], il = [
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
function al(e) {
	let t = [];
	return e.has("status") && t.push("function statusTierValue() {", "  const statusTiers = { brass: 1, silver: 2, gold: 3 };", "  const tier = actor.system.details.status.tier;", "  return statusTiers[String(tier).toLocaleLowerCase()] || Number(tier);", "}", "const status = statusTierValue();"), t.push(...Xc(e, "rank", "Number(actor.system.details.status.standing)")), t;
}
function ol() {
	return [
		"function conditionValue(key) {",
		"  return actor.hasCondition(key)?.conditionValue || 0;",
		"}"
	];
}
//#endregion
//#region src/functions/species-builder/wound-formula/index.ts
function sl(e) {
	let t = Fc(e);
	return [
		...Kc(t.usedKeywords),
		...qc(t.references),
		...Jc(t.references),
		"",
		`args.wounds = ${t.expression};`
	];
}
//#endregion
//#region src/functions/species-builder/wound-formula-traits.ts
var cl = "generatedSpeciesWoundFormulaEffect", ll = "generatedSpeciesWoundFormulaTrait";
function ul(e, t = []) {
	return jc(e, t).flatMap((e) => [...e.emitBaseDefinition ? vl(e.definition) : [], ...yl(e.definition, e.subspecies)]);
}
function dl(e) {
	return `__${e.name.trim()}__`;
}
function fl(e, t) {
	return `__${e.name.trim()} / ${t.name.trim()}__`;
}
function pl({ flagScope: e, spec: t }) {
	return {
		effects: [ml({
			flagScope: e,
			spec: t
		})],
		flags: { [e]: { [ll]: {
			speciesKey: t.speciesKey,
			subspeciesKey: t.subspeciesKey ?? ""
		} } },
		img: "icons/svg/aura.svg",
		name: t.name,
		system: { description: { value: _l(t) } },
		type: "trait"
	};
}
function ml({ flagScope: e, spec: t }) {
	return {
		changes: [],
		disabled: !1,
		flags: { [e]: { [cl]: {
			speciesKey: t.speciesKey,
			subspeciesKey: t.subspeciesKey ?? ""
		} } },
		img: "icons/svg/aura.svg",
		name: `${t.ownerName} Wound Formula`,
		system: {
			scriptData: [{
				label: `${t.ownerName} Wound Formula Capture`,
				script: hl(),
				trigger: "preWoundCalc"
			}, {
				label: `${t.ownerName} Wound Formula`,
				script: gl(t),
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
function hl() {
	return [
		"// Generated by Drowsy's WFRP4e Customizers.",
		"const storageKey = \"__wfrp4eCustomizerWoundFormulaArgs\";",
		"const sourceId = this.item?.id || this.effect.id;",
		"this.actor[storageKey] ||= {};",
		"this.actor[storageKey][sourceId] = args;"
	].join("\n");
}
function gl(e) {
	return [
		"// Generated by Drowsy's WFRP4e Customizers.",
		"const storageKey = \"__wfrp4eCustomizerWoundFormulaArgs\";",
		"const sourceId = this.item?.id || this.effect.id;",
		"const preWoundArgs = this.actor[storageKey][sourceId];",
		"const actor = this.actor;",
		"",
		...sl(e.formula)
	].join("\n");
}
function _l(e) {
	return ["<p>Generated by Drowsy's WFRP4e Customizers. This Trait applies a custom Species Builder wound formula.</p>", `<p>${bl(e.formula)}</p>`].join("");
}
function vl(e) {
	return e.woundFormula?.formula ? [{
		formula: e.woundFormula.formula,
		name: dl(e),
		ownerName: e.name,
		speciesKey: e.key
	}] : [];
}
function yl(e, t) {
	return t.flatMap((t) => t.woundFormula?.formula ? [{
		formula: t.woundFormula.formula,
		name: fl(e, t),
		ownerName: `${e.name} / ${t.name}`,
		speciesKey: e.key,
		subspeciesKey: t.key
	}] : []);
}
function bl(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/functions/species-builder/species-config.ts
function xl(e, t = []) {
	let n = Sl();
	for (let r of jc(e, t)) r.emitBaseDefinition && Cl(n, r.definition), wl(n, r.definition, r.subspecies);
	return n;
}
function Sl() {
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
function Cl(e, t) {
	e.species[t.key] = t.name, H(e.speciesCharacteristics, t.key, t.characteristics), e.speciesSkills[t.key] = xc(t) ?? [], e.speciesTalents[t.key] = wc(t) ?? [], H(e.speciesRandomTalents, t.key, t.randomTalents), H(e.speciesTalentReplacement, t.key, Ol(t)), H(e.speciesTraits, t.key, Ec(t, t.woundFormula ? dl(t) : void 0)), H(e.speciesMovement, t.key, t.movement), H(e.speciesFate, t.key, t.fate), H(e.speciesRes, t.key, t.resilience), H(e.speciesExtra, t.key, t.extra), H(e.speciesAge, t.key, t.age), H(e.speciesHeight, t.key, t.height), H(e.speciesCareerReplacements, t.key, kl(t)), t.includeInExtraSpecies && e.extraSpecies.push(t.key);
}
function wl(e, t, n) {
	for (let r of n) {
		let n = e.subspecies[t.key] ?? {}, i = r.woundFormula ? fl(t, r) : void 0, a = r.careerTable ? Dl(t, r) : void 0;
		n[r.key] = Tl(t, r, i, a), e.subspecies[t.key] = n;
	}
}
function Tl(e, t, n, r) {
	let i = { name: t.name };
	return H(i, "characteristics", t.characteristics ? {
		...e.characteristics,
		...t.characteristics
	} : void 0), H(i, "skills", Sc(e, t)), H(i, "talents", Tc(e, t)), H(i, "speciesTraits", Dc(e, t, {
		parent: e.woundFormula ? dl(e) : void 0,
		subspecies: n
	})), H(i, "randomTalents", t.randomTalents), H(i, "talentReplacement", Ol(t)), H(i, "movement", t.movement), H(i, "fate", t.fate), H(i, "resilience", t.resilience), H(i, "extra", t.extra), H(i, "careerTable", r), i;
}
function El(e) {
	return e.key;
}
function Dl(e, t) {
	return `${e.key}-${t.key}`;
}
function Ol(e) {
	return _c(e.talentReplacementRows) ?? e.talentReplacements;
}
function kl(e) {
	return vc(e.careerReplacementRows) ?? e.careerReplacements;
}
//#endregion
//#region src/functions/species-builder/editing-definitions.ts
function Al(e, t) {
	let n = t.definitions.map(Nl), r = e.findIndex((e) => e.origin === "runtime"), i = r < 0 ? e.length : r, a = [
		...e.slice(0, i),
		...n,
		...e.slice(i)
	], o = n.length > 0 ? i + n.length - 1 : -1;
	for (let e of t.runtimeSpeciesExtensions) {
		let t = Rl(e.speciesKey), n = a.findIndex((e) => e.origin === "runtime" && Rl(e.key) === t);
		if (n >= 0) {
			let t = a[n];
			t && (a[n] = {
				...t,
				subspecies: zl([...t.subspecies ?? [], ...ks(e.subspecies)])
			}, o = n);
			continue;
		}
		a.push({
			includeInExtraSpecies: !1,
			key: e.speciesKey,
			name: e.speciesName,
			origin: "runtime",
			runtimeSubspeciesCount: 0,
			runtimeUnavailable: !0,
			subspecies: zl(ks(e.subspecies))
		}), o = a.length - 1;
	}
	return {
		definitions: a,
		selectedIndex: o
	};
}
function jl(e, t, n) {
	let r = e.map(Nl), i = Ll(n), a = /* @__PURE__ */ new Set(), o = t.flatMap((e) => {
		let t = Rl(e.key);
		if (!t || a.has(t)) return [];
		a.add(t);
		let n = ks(e.subspecies ?? []), r = i.get(t)?.flatMap((e) => ks(e.subspecies));
		return [{
			...ks(e),
			origin: "runtime",
			runtimeSubspeciesCount: n.length,
			subspecies: zl([...n, ...r ?? []])
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
			subspecies: zl(t.flatMap((e) => ks(e.subspecies)))
		}] : [];
	});
	return [
		...r,
		...o,
		...s
	];
}
function Ml(e) {
	let t = [], n = [];
	for (let r of e) {
		if (r.origin === "custom") {
			t.push(Il(r));
			continue;
		}
		let e = ks((r.subspecies ?? []).slice(r.runtimeSubspeciesCount));
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
function Nl(e) {
	return {
		...Il(e),
		origin: "custom",
		runtimeSubspeciesCount: 0
	};
}
function Pl(e) {
	return e?.origin === "custom";
}
function Fl(e, t) {
	return e !== void 0 && t >= 0 && (e.origin === "custom" || t >= e.runtimeSubspeciesCount);
}
function Il(e) {
	let t = ks(e);
	return delete t.origin, delete t.runtimeSubspeciesCount, delete t.runtimeUnavailable, t;
}
function Ll(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = Rl(n.speciesKey);
		e && t.set(e, [...t.get(e) ?? [], n]);
	}
	return t;
}
function Rl(e) {
	return e.trim();
}
function zl(e) {
	return e.length > 0 ? e : void 0;
}
//#endregion
//#region src/shared/object-readers.ts
function W(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function G(e, t) {
	let n = e;
	for (let e of t) {
		if (!W(n) || !(e in n)) return;
		n = n[e];
	}
	return n;
}
function K(e, t) {
	let n = G(e, t);
	return typeof n == "string" ? n.trim() : "";
}
function Bl(e, t) {
	let n = G(e, t);
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function Vl(e, t, n = 0) {
	return Hl(e, t) ?? n;
}
function Hl(e, t) {
	for (let n of t) {
		let t = Number(G(e, n));
		if (Number.isFinite(t)) return t;
	}
	return null;
}
function Ul(e, t, n = !1) {
	for (let n of t) {
		let t = G(e, n);
		if (typeof t == "boolean") return t;
	}
	return n;
}
function Wl(e) {
	return Array.isArray(e) ? e.flatMap(Wl) : typeof e == "string" ? e.split(/[\n\r,;]/).map((e) => e.trim()).filter(Boolean) : W(e) ? Object.values(e).flatMap(Wl) : [];
}
function Gl(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) {
		let t = r[e];
		W(t) || (r[e] = {}), r = r[e];
	}
	r[t[t.length - 1] ?? ""] = n;
}
//#endregion
//#region src/functions/species-builder/career-table-normalization.ts
function Kl(e) {
	if (!W(e)) return;
	let t = ql(e.rows) ?? Jl(e.careers);
	return t ? { rows: t } : void 0;
}
function ql(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!W(e)) return [];
		let t = Xl(e.name);
		if (!t) return [];
		let n = { name: t };
		return H(n, "journalUuid", Xl(e.journalUuid)), [n];
	});
	return t.length > 0 ? t : void 0;
}
function Jl(e) {
	return Yl(e)?.map((e) => ({ name: e }));
}
function Yl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		let t = Xl(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? t : void 0;
}
function Xl(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
//#endregion
//#region src/functions/species-builder/replacement-row-normalization.ts
function Zl(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!W(e)) return [];
		let t = $l(e.rolled, "talent"), n = $l(e.replacement, "talent");
		return !t.name || !n.name ? [] : [{
			replacement: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function Ql(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!W(e)) return [];
		let t = $l(e.rolled, "career"), n = Array.isArray(e.replacements) ? e.replacements.flatMap((e) => {
			let t = $l(e, "career");
			return t.name ? [t] : [];
		}) : [];
		return !t.name || n.length === 0 ? [] : [{
			replacements: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function $l(e, t) {
	if (typeof e == "string") return { name: nu(e) ?? "" };
	if (!W(e)) return { name: "" };
	let n = eu(e.item, t), r = nu(e.name) ?? n?.name ?? "";
	return n ? {
		item: n,
		name: r
	} : { name: r };
}
function eu(e, t) {
	if (!W(e)) return;
	let n = nu(e.name), r = tu(e.type), i = nu(e.uuid);
	if (!n || r !== t || !i) return;
	let a = {
		name: n,
		type: r,
		uuid: i
	}, o = nu(e.specification) ?? nu(e.specifier);
	o && (a.specification = o);
	let s = nu(e.img);
	return s && (a.img = s), a;
}
function tu(e) {
	return e === "career" || e === "skill" || e === "talent" || e === "trait" ? e : void 0;
}
function nu(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
//#endregion
//#region src/functions/species-builder/linked-grant-normalization.ts
function ru(e, t) {
	if (!Array.isArray(e)) return;
	let n = e.flatMap((e) => {
		let n = $l(e, t);
		return n.name ? [n] : [];
	});
	return n.length > 0 ? n : void 0;
}
function iu(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!W(e) || !Array.isArray(e.choices)) return [];
		let t = e.choices.flatMap((e) => {
			let t = $l(e, "talent");
			return t.name ? [t] : [];
		});
		return t.length > 0 ? [{ choices: t }] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/settings-normalization/values.ts
var au = Object.values(U);
function ou(e) {
	return typeof e == "string" ? ss(e) : "";
}
function su(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
function cu(e) {
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function lu(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		let t = su(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? t : void 0;
}
function uu(e) {
	if (!W(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = su(e), r = su(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function du(e) {
	if (!W(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = su(e), r = cu(t);
		return n && r !== void 0 ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function fu(e) {
	if (!W(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = su(e), r = lu(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function pu(e) {
	if (!W(e)) return;
	let t = au.flatMap((t) => {
		let n = su(e[t]);
		return n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function mu(e) {
	if (!W(e)) return;
	let t = {};
	return H(t, "die", su(e.die)), H(t, "feet", cu(e.feet)), H(t, "inches", cu(e.inches)), Object.keys(t).length > 0 ? t : void 0;
}
function hu(e) {
	if (!W(e)) return;
	let t = su(e.formula);
	return t ? { formula: t } : void 0;
}
//#endregion
//#region src/functions/species-builder/species-settings-normalization.ts
function gu(e) {
	return !W(e) || !Array.isArray(e.definitions) ? {
		autoRegisterSpeciesTable: !1,
		definitions: [],
		runtimeSpeciesExtensions: [],
		showGeneratedConfigTab: !1
	} : {
		autoRegisterSpeciesTable: e.autoRegisterSpeciesTable === !0,
		definitions: e.definitions.flatMap(vu),
		runtimeSpeciesExtensions: _u(e.runtimeSpeciesExtensions),
		showGeneratedConfigTab: e.showGeneratedConfigTab === !0
	};
}
function _u(e) {
	return Array.isArray(e) ? e.flatMap((e) => {
		if (!W(e)) return [];
		let t = su(e.speciesKey), n = su(e.speciesName), r = yu(e.subspecies) ?? [];
		return t && n && r.length > 0 ? [{
			speciesKey: t,
			speciesName: n,
			subspecies: r
		}] : [];
	}) : [];
}
function vu(e) {
	return xu(e, (e, t, n) => ({
		includeInExtraSpecies: n.includeInExtraSpecies === !0,
		key: e,
		name: t
	})).map((t) => (Su(t, e), Cu(t, e), t));
}
function yu(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap(bu);
	return t.length > 0 ? t : void 0;
}
function bu(e) {
	return xu(e, (e, t, n) => {
		let r = {
			key: e,
			name: t
		};
		return H(r, "skillsAdded", lu(n.skillsAdded)), H(r, "skillsRemoved", lu(n.skillsRemoved)), H(r, "talentsAdded", lu(n.talentsAdded)), H(r, "talentsRemoved", lu(n.talentsRemoved)), H(r, "traitsAdded", lu(n.traitsAdded)), H(r, "traitsRemoved", lu(n.traitsRemoved)), r;
	});
}
function xu(e, t) {
	if (!W(e)) return [];
	let n = ou(e.key), r = su(e.name);
	if (!n || !r) return [];
	let i = t(n, r, e);
	return H(i, "characteristics", pu(e.characteristics)), H(i, "randomTalents", du(e.randomTalents)), H(i, "talentReplacementRows", Zl(e.talentReplacementRows)), H(i, "talentReplacements", uu(e.talentReplacements)), H(i, "movement", cu(e.movement)), H(i, "fate", cu(e.fate)), H(i, "resilience", cu(e.resilience)), H(i, "extra", cu(e.extra)), H(i, "woundFormula", hu(e.woundFormula)), H(i, "careerTable", Kl(e.careerTable)), [i];
}
function Su(e, t) {
	W(t) && (H(e, "skills", lu(t.skills)), H(e, "linkedSkills", ru(t.linkedSkills, "skill")), H(e, "talents", lu(t.talents)), H(e, "linkedTalents", iu(t.linkedTalents)), H(e, "traits", lu(t.traits)), H(e, "linkedTraits", ru(t.linkedTraits, "trait")));
}
function Cu(e, t) {
	W(t) && (H(e, "age", su(t.age)), H(e, "height", mu(t.height)), H(e, "careerReplacements", fu(t.careerReplacements)), H(e, "careerReplacementRows", Ql(t.careerReplacementRows)), H(e, "subspecies", yu(t.subspecies)));
}
//#endregion
//#region src/functions/species-builder/world-table.ts
var wu = "managedSpeciesTable";
function Tu() {
	return {
		isRegistered: !1,
		name: "Species",
		ownership: "new",
		requiresLinkRepair: !1,
		rows: []
	};
}
function Eu(e, t) {
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
function Du(e, t) {
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
function Ou(e, t, n) {
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
function ku(e) {
	let t = e.map((e) => Number.isInteger(e.weight) && e.weight > 0 ? e.weight : 0), n = t.reduce((e, t) => e + t, 0), r = 1;
	return t.map((e) => {
		let t = r, i = e > 0 ? t + e - 1 : t;
		return r = i + 1, {
			chance: n > 0 ? e / n : 0,
			range: [t, i]
		};
	});
}
function Au(e, t, n) {
	let r = n.find((e) => e.label === t.trim());
	if (r) return r.key;
	let i = e.trim();
	return n.some((e) => e.key === i) ? i : "";
}
function ju(e) {
	let t = /@UUID\[([^\]]+)\]\{([^}]*)\}/u.exec(e), n = t?.[1]?.trim() ?? "", r = t?.[2]?.trim() ?? "";
	return n && r ? {
		label: r,
		uuid: n
	} : void 0;
}
function Mu(e) {
	let t = G(e, ["range"]), n = Array.isArray(t) ? Number(t[0]) : 0, r = Array.isArray(t) ? Number(t[1]) : 0;
	if (Number.isInteger(n) && Number.isInteger(r) && r >= n) return r - n + 1;
	let i = Number(G(e, ["weight"]));
	return Number.isInteger(i) && i > 0 ? i : 1;
}
function Nu(e) {
	return JSON.stringify(e.rows.map((e) => ({
		name: e.name.trim(),
		speciesKey: e.speciesKey.trim(),
		weight: e.weight
	})));
}
function Pu(e, t) {
	let n = ku(e.rows), r = e.rows.reduce((e, t) => e + (Number.isInteger(t.weight) && t.weight > 0 ? t.weight : 0), 0);
	return {
		displayRoll: !0,
		flags: {
			wfrp4e: { key: "species" },
			[t]: { [wu]: !0 }
		},
		formula: `1d${Math.max(r, 1)}`,
		img: "systems/wfrp4e/ui/buttons/d10.webp",
		name: Iu(e),
		replacement: !0,
		results: e.rows.map((e, t) => ({
			description: Fu(e),
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
function Fu(e) {
	let t = e.journalUuid?.trim() ?? "", n = e.name.trim();
	if (!t) throw Error(`Species "${n || e.speciesKey}" does not have a Journal link target.`);
	if (/[{}]/u.test(n)) throw Error(`Species "${n}" cannot be encoded in WFRP's UUID-link label.`);
	return `@UUID[${t}]{${n}}`;
}
function Iu(e) {
	let t = e.name.trim() || "Species";
	return e.ownership === "external" && !t.includes("Species Builder") ? `${t} (Species Builder)` : t;
}
//#endregion
//#region src/functions/species-builder/editor/career-table-rows.ts
function Lu(e) {
	return [...e ?? [], { name: "" }];
}
function Ru(e, t) {
	return (e ?? []).filter((e, n) => n !== t);
}
function zu(e, t, n) {
	return (e ?? []).map((e, r) => r === t ? Hu(e, n) : e);
}
function Bu(e, t, n) {
	let r = { name: n.name };
	return n.careerJournalUuid && (r.journalUuid = n.careerJournalUuid), zu(e, t, r);
}
function Vu(e, t, n) {
	return zu(e, t, { journalUuid: n });
}
function Hu(e, t) {
	let n = {
		...e,
		...t
	};
	return n.journalUuid || delete n.journalUuid, n;
}
//#endregion
//#region src/state/species-builder/career-table-drop-actions.ts
function Uu(e) {
	async function t(t, n) {
		let r = e.selectedDefinition.value;
		if (!r) return;
		let i = await e.resolveDroppedItem("career", n);
		e.definitionActions.updateCareerTableRows(Bu(r.careerTable?.rows, t, i));
	}
	async function n(t, n) {
		let r = e.selectedDefinition.value;
		if (!r) return;
		let i = await Wu(e, n);
		e.definitionActions.updateCareerTableRows(Vu(r.careerTable?.rows, t, i.uuid));
	}
	async function r(t, n, r) {
		let i = e.selectedDefinition.value?.subspecies?.[t];
		if (!i) return;
		let a = await e.resolveDroppedItem("career", r);
		e.subspeciesActions.updateSubspeciesCareerTableRows(t, Bu(i.careerTable?.rows, n, a));
	}
	async function i(t, n, r) {
		let i = e.selectedDefinition.value?.subspecies?.[t];
		if (!i) return;
		let a = await Wu(e, r);
		e.subspeciesActions.updateSubspeciesCareerTableRows(t, Vu(i.careerTable?.rows, n, a.uuid));
	}
	return {
		setCareerTableCareerDrop: t,
		setCareerTableJournalDrop: n,
		setSubspeciesCareerTableCareerDrop: r,
		setSubspeciesCareerTableJournalDrop: i
	};
}
async function Wu(e, t) {
	try {
		return await e.bridge.resolveJournalDrop(t);
	} catch (t) {
		throw e.loadError.value = As(t), t;
	}
}
//#endregion
//#region src/state/species-builder/bridge-access.ts
function Gu() {
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
function Ku() {
	return {
		includeInExtraSpecies: !0,
		key: "",
		name: "New Species"
	};
}
function qu(e, t) {
	let n = ks(e);
	return n.key = nd(`${n.key}-copy`, t), n.name = `${n.name} Copy`, n;
}
function Ju(e, t, n) {
	return bs(e, t, ps(n));
}
function Yu(e, t, n) {
	return bs(e, t, gs(n));
}
function Xu(e, t, n) {
	let r = e.height ? { ...e.height } : {}, i = t === "die" ? fs(n) : gs(n);
	return i === void 0 ? delete r[t] : r[t] = i, bs(e, "height", Object.keys(r).length > 0 ? r : void 0);
}
function Zu(e, t, n) {
	let r = e.characteristics ? { ...e.characteristics } : {}, i = fs(n);
	return i ? r[t] = i : delete r[t], bs(e, "characteristics", Object.keys(r).length > 0 ? r : void 0);
}
function Qu(e, t, n) {
	return bs(e, t, cs(n));
}
function $u(e, t, n) {
	return bs(e, t, vs(t, n));
}
function ed(e, t) {
	return bs(e, "woundFormula", ms(t));
}
function td(e, t) {
	return bs(e, "careerTable", hs(t));
}
function nd(e, t) {
	let n = new Set(t.map((e) => e.key));
	if (!n.has(e)) return e;
	let r = 2, i = `${e}-${r}`;
	for (; n.has(i);) r += 1, i = `${e}-${r}`;
	return i;
}
//#endregion
//#region src/state/species-builder/selected-definition.ts
function rd(e, t, n = {}) {
	let r = e.definitions.value[e.selectedIndex.value];
	!r || !n.allowRuntimeBase && !Pl(r) || (e.definitions.value = e.definitions.value.map((n, i) => i === e.selectedIndex.value ? {
		...t(ks(r)),
		origin: r.origin,
		runtimeSubspeciesCount: r.runtimeSubspeciesCount,
		...r.runtimeUnavailable ? { runtimeUnavailable: !0 } : {}
	} : n), e.message.value = "");
}
//#endregion
//#region src/state/species-builder/definition-actions.ts
function id(e) {
	function t() {
		r(Ku());
	}
	function n() {
		let t = e.selectedDefinition.value;
		Pl(t) && r(qu(t, e.definitions.value));
	}
	function r(e) {
		i([e]);
	}
	function i(t) {
		if (t.length === 0) return;
		let n = t.map(Nl), r = e.definitions.value.findIndex((e) => e.origin === "runtime"), i = r < 0 ? e.definitions.value.length : r;
		e.definitions.value = [
			...e.definitions.value.slice(0, i),
			...n,
			...e.definitions.value.slice(i)
		], e.selectedIndex.value = i + n.length - 1, e.message.value = "";
	}
	function a(t) {
		let n = Al(e.definitions.value, t);
		n.selectedIndex < 0 || (e.definitions.value = n.definitions, e.selectedIndex.value = n.selectedIndex, e.message.value = "");
	}
	function o() {
		Pl(e.selectedDefinition.value) && (e.definitions.value = e.definitions.value.filter((t, n) => n !== e.selectedIndex.value), e.selectedIndex.value = e.definitions.value.length === 0 ? -1 : Math.min(e.selectedIndex.value, e.definitions.value.length - 1), e.message.value = "");
	}
	function s(t) {
		e.selectedIndex.value = t;
	}
	function c(e, t) {
		_((n) => Ju(n, e, t));
	}
	function l(e, t) {
		_((n) => ({
			...n,
			[e]: t
		}));
	}
	function u(e, t) {
		_((n) => Yu(n, e, t));
	}
	function d(e, t) {
		_((n) => Xu(n, e, t));
	}
	function f(e, t) {
		_((n) => Zu(n, e, t));
	}
	function p(e, t) {
		_((n) => Qu(n, e, t));
	}
	function m(e, t) {
		_((n) => $u(n, e, t));
	}
	function h(e) {
		_((t) => ed(t, e));
	}
	function g(e) {
		_((t) => td(t, e));
	}
	function _(t) {
		rd(e, t);
	}
	return {
		addBlankDefinition: t,
		addDefinition: r,
		addDefinitions: i,
		addExamplePackage: a,
		deleteSelectedDefinition: o,
		duplicateSelectedDefinition: n,
		selectDefinition: s,
		updateArrayField: p,
		updateBooleanField: l,
		updateCareerTableRows: g,
		updateCharacteristic: f,
		updateHeightField: d,
		updateNumberField: u,
		updateStringField: c,
		updateSelectedDefinition: _,
		updateTextMapField: m,
		updateWoundFormula: h
	};
}
//#endregion
//#region src/functions/species-builder/editor/linked-grants.ts
function ad(e) {
	return e === "traits" ? "traits" : "skills";
}
function od(e, t) {
	return t && t.length > 0 ? t.map(xd) : (e ?? []).map((e) => ({ name: e }));
}
function sd(e, t) {
	return t && t.length > 0 ? t.map((e) => ({ choices: e.choices.map(xd) })) : (e ?? []).map((e) => ({ choices: bd(e).map((e) => ({ name: e })) }));
}
function cd(e) {
	return e.map(fc).filter((e) => e.length > 0);
}
function ld(e) {
	return e.flatMap((e) => {
		let t = cd(e.choices);
		return t.length > 0 ? [t.join(", ")] : [];
	});
}
function ud(e, t, n) {
	return e.map((e, r) => r === t ? { name: n } : xd(e));
}
function dd(e, t, n) {
	return e.map((e, r) => r === t ? {
		item: n,
		name: dc(n)
	} : xd(e));
}
function fd(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: ud(e.choices, n, r) } : Sd(e));
}
function pd(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: dd(e.choices, n, r) } : Sd(e));
}
function md(e, t) {
	let n = t === "skills" ? "New Skill" : "New Trait";
	return [...e.map(xd), { name: n }];
}
function hd(e, t) {
	return e.filter((e, n) => n !== t).map(xd);
}
function gd(e, t) {
	let n = [{ name: "New Talent" }];
	return t === "choice" && n.push({ name: "Alternative Talent" }), [...e.map(Sd), { choices: n }];
}
function _d(e, t) {
	return e.map((e, n) => n === t ? { choices: [...e.choices.map(xd), { name: "Alternative Talent" }] } : Sd(e));
}
function vd(e, t) {
	return e.filter((e, n) => n !== t).map(Sd);
}
function yd(e, t, n) {
	let r = e[t];
	return !r || r.choices.length === 1 ? vd(e, t) : e.map((e, r) => r === t ? { choices: e.choices.filter((e, t) => t !== n).map(xd) } : Sd(e));
}
function bd(e) {
	let t = e.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : [e];
}
function xd(e) {
	return e.item ? {
		item: { ...e.item },
		name: e.name
	} : { name: e.name };
}
function Sd(e) {
	return { choices: e.choices.map(xd) };
}
//#endregion
//#region src/functions/species-builder/editor/subspecies-fields.ts
function Cd(e) {
	return {
		...e,
		subspecies: [...e.subspecies ?? [], {
			key: "",
			name: "New Subspecies"
		}]
	};
}
function wd(e, t) {
	let n = (e.subspecies ?? []).filter((e, n) => n !== t);
	return bs(e, "subspecies", n.length > 0 ? n : void 0);
}
function Td(e, t, n) {
	let r = e.subspecies ?? [], i = r[t];
	return i ? {
		...e,
		subspecies: r.map((e, r) => r === t ? n(ks(i)) : e)
	} : e;
}
function Ed(e, t, n) {
	return {
		...e,
		[t]: ps(n) ?? ""
	};
}
function Dd(e, t, n) {
	return bs(e, t, gs(n));
}
function Od(e, t, n) {
	let r = e.characteristics ? { ...e.characteristics } : {}, i = fs(n);
	return i ? r[t] = i : delete r[t], bs(e, "characteristics", Object.keys(r).length > 0 ? r : void 0);
}
function kd(e, t, n) {
	return bs(e, t, cs(n));
}
function Ad(e, t, n) {
	return bs(e, t, ys(t, n));
}
function jd(e, t) {
	return bs(e, "woundFormula", ms(t));
}
function Md(e, t) {
	return bs(e, "careerTable", hs(t));
}
//#endregion
//#region src/functions/species-builder/editor/linked-definition.ts
function Nd(e, t) {
	let n = t === "skills" ? e.linkedSkills : e.linkedTraits;
	return od(e[t], n);
}
function Pd(e) {
	return sd(e.talents, e.linkedTalents);
}
function Fd(e, t) {
	return qd(e, t, md(Nd(e, t), t));
}
function Id(e, t, n, r) {
	return qd(e, t, ud(Nd(e, t), n, r));
}
function Ld(e, t, n) {
	return qd(e, t, hd(Nd(e, t), n));
}
function Rd(e, t, n, r) {
	return qd(e, t, dd(Nd(e, t), n, r));
}
function zd(e, t) {
	return Jd(e, gd(Pd(e), t));
}
function Bd(e, t) {
	return Jd(e, _d(Pd(e), t));
}
function Vd(e, t, n, r) {
	return Jd(e, fd(Pd(e), t, n, r));
}
function Hd(e, t) {
	return Jd(e, vd(Pd(e), t));
}
function Ud(e, t, n) {
	return Jd(e, yd(Pd(e), t, n));
}
function Wd(e, t, n, r) {
	return Jd(e, pd(Pd(e), t, n, r));
}
function Gd(e, t, n) {
	let r = dc(n);
	if (t === "talents") {
		let t = Pd(e);
		return ld(t).includes(r) ? e : Jd(e, [...t, { choices: [{
			item: n,
			name: r
		}] }]);
	}
	let i = Nd(e, t);
	return cd(i).includes(r) ? e : qd(e, t, [...i, {
		item: n,
		name: r
	}]);
}
function Kd(e, t, n) {
	let r = dc(n), i = ld(Pd(e));
	return Td(e, t, (e) => {
		if (Yd(i, r)) {
			let t = Xd((e.talentsAdded ?? []).filter((e) => e !== r)), n = Xd((e.talentsRemoved ?? []).filter((e) => e !== r));
			return bs(bs(e, "talentsAdded", t), "talentsRemoved", n);
		}
		return (e.talentsAdded ?? []).includes(r) ? e : bs(e, "talentsAdded", [...e.talentsAdded ?? [], r]);
	});
}
function qd(e, t, n) {
	let r = t === "skills" ? "linkedSkills" : "linkedTraits", i = cd(n);
	return bs(bs(e, r, n.length > 0 ? n : void 0), t, i.length > 0 ? i : void 0);
}
function Jd(e, t) {
	let n = ld(t);
	return bs(bs(e, "linkedTalents", t.length > 0 ? t : void 0), "talents", n.length > 0 ? n : void 0);
}
function Yd(e, t) {
	return e.includes(t) && !/\([^()]*\)/.test(t);
}
function Xd(e) {
	return e.length > 0 ? e : void 0;
}
//#endregion
//#region src/state/species-builder/linked-grant-actions.ts
var Zd = {
	skills: "skill",
	talents: "talent",
	traits: "trait"
};
function Qd(e) {
	async function t(t, n) {
		let r = await e.resolveDroppedItem(Zd[t], n);
		p((e) => Gd(e, t, r));
	}
	async function n(t, n, r) {
		let i = await e.resolveDroppedItem(Zd[t], r);
		p((e) => Rd(e, t, n, i));
	}
	async function r(t, n, r) {
		let i = await e.resolveDroppedItem("talent", r);
		p((e) => Wd(e, t, n, i));
	}
	async function i(t, n) {
		if (!e.subspeciesActions.canEditSubspecies(t)) return;
		let r = await e.resolveDroppedItem("talent", n);
		e.subspeciesActions.updateDefinitionForSubspecies(t, (e) => Kd(e, t, r));
	}
	function a(e) {
		p((t) => Fd(t, e));
	}
	function o(e, t, n) {
		p((r) => Id(r, e, t, n));
	}
	function s(e, t) {
		p((n) => Ld(n, e, t));
	}
	function c(e) {
		p((t) => zd(t, e));
	}
	function l(e) {
		p((t) => Bd(t, e));
	}
	function u(e, t, n) {
		p((r) => Vd(r, e, t, n));
	}
	function d(e) {
		p((t) => Hd(t, e));
	}
	function f(e, t) {
		p((n) => Ud(n, e, t));
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
function $d() {
	return { name: "" };
}
function ef() {
	return {
		replacement: $d(),
		rolled: $d()
	};
}
function tf() {
	return {
		replacements: [$d()],
		rolled: $d()
	};
}
function nf(e) {
	return [...e, ef()];
}
function rf(e, t) {
	return e.filter((e, n) => n !== t);
}
function af(e) {
	return [...e, tf()];
}
function of(e, t) {
	return e.map((e, n) => n === t ? {
		...e,
		replacements: [...e.replacements, $d()]
	} : e);
}
function sf(e, t, n) {
	return e.map((e, r) => r === t ? {
		...e,
		replacements: e.replacements.filter((e, t) => t !== n)
	} : e).filter((e) => e.replacements.length > 0);
}
function cf(e, t) {
	return e.filter((e, n) => n !== t);
}
function lf(e) {
	return e.talentReplacementRows?.length ? bf(e.talentReplacementRows) : df(e.talentReplacements);
}
function uf(e) {
	return e.careerReplacementRows?.length ? bf(e.careerReplacementRows) : ff(e.careerReplacements);
}
function df(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacement: { name: t },
		rolled: { name: e }
	}));
}
function ff(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacements: t.map((e) => ({ name: e })),
		rolled: { name: e }
	}));
}
function pf(e, t, n, r) {
	return e.map((e, i) => i === t ? {
		...e,
		[n]: gf(r)
	} : e);
}
function mf(e, t, n) {
	return e.map((e, r) => r === t ? {
		...e,
		rolled: gf(n)
	} : e);
}
function hf(e, t, n, r) {
	return e.map((e, i) => {
		if (i !== t) return e;
		let a = e.replacements.map((e, t) => t === n ? gf(r) : e);
		return {
			...e,
			replacements: a
		};
	});
}
function gf(e) {
	return {
		item: e,
		name: dc(e)
	};
}
function _f(e, t) {
	return bs(bs(e, "talentReplacementRows", t.length > 0 ? t : void 0), "talentReplacements", _c(t));
}
function vf(e, t) {
	return bs(bs(e, "careerReplacementRows", t.length > 0 ? t : void 0), "careerReplacements", vc(t));
}
function yf(e, t) {
	return bs(bs(e, "talentReplacementRows", t.length > 0 ? t : void 0), "talentReplacements", _c(t));
}
function bf(e) {
	return JSON.parse(JSON.stringify(e));
}
//#endregion
//#region src/state/species-builder/replacement-actions.ts
function xf(e) {
	function t(t) {
		e.definitionActions.updateSelectedDefinition((e) => _f(e, t));
	}
	function n(t) {
		e.definitionActions.updateSelectedDefinition((e) => vf(e, t));
	}
	function r(t, n) {
		e.subspeciesActions.updateSubspecies(t, (e) => yf(e, n));
	}
	async function i(n, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("talent", i);
		t(pf(lf(a), n, r, o));
	}
	async function a(t, n, i, a) {
		let o = e.selectedDefinition.value?.subspecies?.[t];
		if (!o) return;
		let s = await l("talent", a);
		r(t, pf(lf(o), n, i, s));
	}
	async function o(t, r) {
		let i = e.selectedDefinition.value;
		if (!i) return;
		let a = await l("career", r);
		n(mf(uf(i), t, a));
	}
	async function s(t, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("career", i);
		n(hf(uf(a), t, r, o));
	}
	async function c(t) {
		try {
			await e.bridge.openItemSheet(t);
		} catch (t) {
			e.loadError.value = As(t);
		}
	}
	async function l(t, n) {
		try {
			return await e.bridge.resolveItemDrop(n, t);
		} catch (t) {
			throw e.loadError.value = As(t), t;
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
function Sf(e) {
	let t = !e.isLoading && !e.isSaving && !e.hasLoadError && e.hasUnsavedChanges;
	return {
		canSave: t,
		requiresUnsafeSaveConfirmation: t && e.validationErrorCount > 0
	};
}
//#endregion
//#region src/state/species-builder/save-state.ts
function Cf(e) {
	let t = V(() => e.savedSettingsSnapshot.value !== Es(e.normalizedSettings.value)), n = V(() => wf(e.normalizedSettings.value)), r = V(() => e.savedDefinitionsSnapshot.value !== n.value), i = V(() => e.autoRegisterSpeciesTable.value && (e.speciesTable.value.ownership !== "managed" || !e.speciesTable.value.isRegistered)), a = V(() => e.savedSpeciesTableSnapshot.value !== e.speciesTableSnapshot.value || i.value || e.speciesTable.value.requiresLinkRepair), o = V(() => t.value || a.value), s = V(() => a.value || t.value && e.autoRegisterSpeciesTable.value), c = V(() => s.value ? e.speciesTableValidationMessages.value : []), l = V(() => e.validationIssues.value.filter((e) => e.severity === "error" && (e.scope !== "species-table" || s.value))), u = V(() => Sf({
		hasLoadError: !!e.loadError.value,
		hasUnsavedChanges: o.value,
		isLoading: e.isLoading.value,
		isSaving: e.isSaving.value,
		validationErrorCount: l.value.length + c.value.length
	}));
	return {
		blockingSpeciesTableValidationMessages: c,
		blockingValidationIssues: l,
		canSave: V(() => u.value.canSave),
		definitionsHaveUnsavedChanges: r,
		hasUnsavedChanges: o,
		requiresUnsafeSaveConfirmation: V(() => u.value.requiresUnsafeSaveConfirmation),
		settingsHaveUnsavedChanges: t,
		speciesTableWillSave: s
	};
}
function wf(e) {
	return JSON.stringify({
		definitions: e.definitions,
		runtimeSpeciesExtensions: e.runtimeSpeciesExtensions
	});
}
//#endregion
//#region src/state/species-builder/save-actions.ts
function Tf(e) {
	async function t(t = {}) {
		if (!e.canSave.value || e.requiresUnsafeSaveConfirmation.value && !t.allowValidationErrors) return !1;
		e.isSaving.value = !0, e.loadError.value = "", e.saveError.value = "", e.message.value = "";
		let n = e.settingsHaveUnsavedChanges.value, r = e.speciesTableWillSave.value, i = !1, a = [];
		try {
			if (n) {
				let t = e.definitionsHaveUnsavedChanges.value, n = await e.requireBridge().saveSettings(e.normalizedSettings.value, t), r = n.settings;
				e.autoRegisterSpeciesTable.value = r.autoRegisterSpeciesTable, e.definitions.value = jl(r.definitions, e.runtimeDefinitions.value, r.runtimeSpeciesExtensions), e.showGeneratedConfigTab.value = r.showGeneratedConfigTab, e.selectedIndex.value = e.definitions.value.length > 0 ? Math.min(e.selectedIndex.value, e.definitions.value.length - 1) : -1, e.savedSettingsSnapshot.value = Es(e.normalizedSettings.value), e.savedDefinitionsSnapshot.value = wf(e.normalizedSettings.value), i = t, n.syncError && a.push(n.syncError);
			}
			if (r) {
				let t = await e.requireBridge().saveSpeciesTable(e.preparedSpeciesTable.value, e.autoRegisterSpeciesTable.value);
				e.hydrateSpeciesTable(t), e.savedSpeciesTableSnapshot.value = Nu(t.draft), t.registrationError && a.push(t.registrationError);
			}
			return Ef(e, a, i, r), i;
		} catch (t) {
			return e.saveError.value = As(t), i;
		} finally {
			e.isSaving.value = !1;
		}
	}
	return { saveChanges: t };
}
function Ef(e, t, n, r) {
	t.length > 0 ? e.saveError.value = t.join(" ") : n ? e.message.value = "Saved. Refresh Foundry before using changed species in character generation." : r ? e.message.value = "Saved the world Species table." : e.message.value = "Saved Species Builder settings.";
}
//#endregion
//#region src/state/species-builder/species-table-actions.ts
function Df(e) {
	let t = /* @__PURE__ */ O(Tu()), n = /* @__PURE__ */ O([]), r = V(() => Eu(n.value, e.definitions.value)), i = V(() => Du(t.value, r.value)), a = V(() => Nu(i.value)), o = V(() => ku(i.value.rows)), s = V(() => Ou(i.value, r.value, e.autoRegisterSpeciesTable.value || i.value.ownership !== "new"));
	function c(e) {
		t.value = ks(e.draft), n.value = ks(e.runtimeOptions);
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
function Of(e) {
	function t() {
		p(Cd, !0);
	}
	function n(e) {
		f(e) && p((t) => wd(t, e), !0);
	}
	function r(e, t, n) {
		u(e, (e) => Ed(e, t, n));
	}
	function i(e, t, n) {
		u(e, (e) => Dd(e, t, n));
	}
	function a(e, t, n) {
		u(e, (e) => Od(e, t, n));
	}
	function o(e, t, n) {
		u(e, (e) => kd(e, t, n));
	}
	function s(e, t, n) {
		u(e, (e) => Ad(e, t, n));
	}
	function c(e, t) {
		u(e, (e) => jd(e, t));
	}
	function l(e, t) {
		u(e, (e) => Md(e, t));
	}
	function u(e, t) {
		d(e, (n) => Td(n, e, t));
	}
	function d(e, t) {
		f(e) && p(t, !0);
	}
	function f(t) {
		let n = e.definitions.value[e.selectedIndex.value];
		return n?.subspecies?.[t] !== void 0 && Fl(n, t);
	}
	function p(t, n = !1) {
		rd(e, t, { allowRuntimeBase: n });
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
function kf(e) {
	return {
		careerGroups: If(e.careerGroupNames),
		randomTalentSources: new Map(e.randomTalentSources.map((e) => [e.key.trim(), e])),
		skills: If(e.itemBaseNames.skill),
		talents: If(e.itemBaseNames.talent),
		traits: If(e.itemBaseNames.trait)
	};
}
function q(e, t, n) {
	return {
		...e,
		code: t,
		message: n,
		severity: "error"
	};
}
function Af(e) {
	return e.trim().toLocaleLowerCase();
}
function jf(e) {
	return (e.split("(")[0] ?? "").trim();
}
function Mf(e, t) {
	return t.has(jf(e));
}
function Nf(e, t) {
	let n = e.trim();
	if (!n || !/^\d+(?:d\d+)?(?:\s*[+-]\s*\d+(?:d\d+)?)*$/iu.test(n)) return !1;
	let r = [...n.matchAll(/(\d+)d(\d+)/giu)];
	return t && r.length === 0 ? !1 : r.every((e) => Number(e[1]) > 0 && Number(e[2]) > 0);
}
function Pf(e) {
	let t = /^(?:(\d+)|(\d*)d(\d+))(?:\s*\+\s*(-?\d+))?$/iu.exec(e.trim());
	return t ? t[1] ? Number.isSafeInteger(Number(t[1])) : (t[2] ? Number(t[2]) : 1) > 0 && Number(t[3]) > 0 : !1;
}
function Ff(e) {
	return Number.isInteger(e) && (e ?? -1) >= 0;
}
function If(e) {
	return new Set(e.map((e) => e.trim()).filter(Boolean));
}
//#endregion
//#region src/functions/species-builder/validation/career-tables.ts
function Lf(e, t) {
	let n = [];
	return e.forEach((e, r) => {
		Rf(e.careerTable, zf(r), !0, t, n), (e.subspecies ?? []).forEach((e, i) => {
			e.careerTable !== void 0 && Rf(e.careerTable, Bf(r, i), !0, t, n);
		});
	}), n;
}
function Rf(e, t, n, r, i) {
	if (!e || e.rows.length === 0) {
		n && i.push(q(t, "career-table-required", "Add at least one Career group so character creation can roll a Career."));
		return;
	}
	e.rows.forEach((e, n) => {
		let a = e.name.trim(), o = {
			...t,
			field: "name",
			rowIndex: n
		};
		a ? r.careerGroups.has(a) || i.push(q(o, "career-table-career-missing", `Career group “${a}” does not match an available WFRP Career group.`)) : i.push(q(o, "career-table-row-blank", `Career Table row ${n + 1} needs a Career group name.`));
	});
}
function zf(e) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: "careerTable"
	};
}
function Bf(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "careerTable",
		subspeciesIndex: t
	};
}
//#endregion
//#region src/functions/species-builder/validation/definitions.ts
var Vf = Object.keys(Mc), Hf = [
	"movement",
	"fate",
	"resilience",
	"extra"
];
function Uf(e) {
	let t = [];
	return e.forEach((e, n) => {
		let r = Xf(n);
		Wf(e.characteristics, r, !0, t), Gf(e, r, !0, t), Kf(e, r, t), Jf(e.woundFormula?.formula, r, t), Yf(e, n, t);
	}), t;
}
function Wf(e, t, n, r) {
	for (let i of Vf) {
		let a = e?.[i]?.trim() ?? "", o = `characteristics.${i}`;
		!a && n ? r.push(q({
			...t,
			field: o,
			section: "attributes"
		}, "characteristic-required", `${Mc[i]} needs a roll formula.`)) : a && !Pf(a) && r.push(q({
			...t,
			field: o,
			section: "attributes"
		}, "characteristic-formula-invalid", `${Mc[i]} needs a valid WFRP roll formula, such as 0, d10, or 2d10+20.`));
	}
}
function Gf(e, t, n, r) {
	for (let i of Hf) {
		let a = e[i];
		a === void 0 && n ? r.push(q({
			...t,
			field: i,
			section: "attributes"
		}, "stat-required", `${Qf(i)} is required for character creation.`)) : a !== void 0 && !Ff(a) && r.push(q({
			...t,
			field: i,
			section: "attributes"
		}, "stat-invalid", `${Qf(i)} must be a non-negative whole number.`));
	}
}
function Kf(e, t, n) {
	let r = e.age?.trim() ?? "";
	r ? Nf(r, !1) || n.push(q({
		...t,
		field: "age"
	}, "age-formula-invalid", "Age must use whole numbers and dice joined by + or -, such as 15+1d10.")) : n.push(q({
		...t,
		field: "age"
	}, "age-required", "Enter an age roll formula."));
	let i = e.height;
	if (!i) {
		for (let e of [
			"die",
			"feet",
			"inches"
		]) n.push(q({
			...t,
			field: `height.${e}`
		}, "height-required", `Height ${e} is required for character creation.`));
		return;
	}
	(!i.die?.trim() || !Nf(i.die, !0)) && n.push(q({
		...t,
		field: "height.die"
	}, "height-die-invalid", "Height die must be a valid dice formula, such as 1d10.")), qf(i.feet, "feet", t, n), qf(i.inches, "inches", t, n);
}
function qf(e, t, n, r) {
	Ff(e) || r.push(q({
		...n,
		field: `height.${t}`
	}, `height-${t}-invalid`, `Height ${t} must be a non-negative whole number.`));
}
function Jf(e, t, n) {
	if (e !== void 0) try {
		if (!e.trim() || !$f(e)) throw Error("The formula is blank or has unmatched brackets.");
		Fc(e);
	} catch (e) {
		let r = e instanceof Error ? e.message : "The formula could not be compiled.";
		n.push(q({
			...t,
			field: "woundFormula",
			section: "wounds"
		}, "wound-formula-invalid", `Wound formula is invalid: ${r}`));
	}
}
function Yf(e, t, n) {
	(e.subspecies ?? []).forEach((r, i) => {
		let a = Zf(t, i);
		r.characteristics && Wf({
			...e.characteristics,
			...r.characteristics
		}, a, !0, n), Gf(r, a, !1, n), Jf(r.woundFormula?.formula, a, n);
	});
}
function Xf(e) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: "details"
	};
}
function Zf(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "subspecies",
		subspeciesIndex: t
	};
}
function Qf(e) {
	return e.charAt(0).toLocaleUpperCase() + e.slice(1);
}
function $f(e) {
	return ep(e, "{", "}") && ep(e, "[", "]") && ep(e, "(", ")");
}
function ep(e, t, n) {
	let r = 0;
	for (let i of e) if (i === t ? r += 1 : i === n && --r, r < 0) return !1;
	return r === 0;
}
//#endregion
//#region src/functions/species-builder/validation/grant-talents.ts
function tp(e, t, n, r, i, a) {
	e.forEach((e, o) => {
		if (e.length === 0) {
			a.push(q({
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
			l ? e.length === 1 && op(l) ? rp(l, u, r, i, a) : e.length > 1 && sp(l) ? ip(l, u, r, i, a) : Mf(l, i.talents) || a.push(q(u, "grant-unresolved", `Talent “${l}” does not match an available WFRP Talent Item.`)) : a.push(q(u, "grant-blank", `Talent choice ${c + 1} is blank.`));
		});
	});
}
function np(e) {
	return new Set(Object.keys(e ?? { talents: 0 }));
}
function rp(e, t, n, r, i) {
	let a = Number(e);
	(!Number.isInteger(a) || a < 0) && i.push(q(t, "talent-random-count-invalid", "A numeric Talent grant must be a non-negative whole number.")), ap("talents", `Numeric Talent grant “${e}”`, t, n, r, i);
}
function ip(e, t, n, r, i) {
	ap(/^random\[(\d)\](?:\[([a-zA-Z-_]+)\])?$/iu.exec(e)?.[2] ?? "talents", `Random Talent choice “${e}”`, t, n, r, i);
}
function ap(e, t, n, r, i, a) {
	if (!r.has(e)) {
		a.push(q(n, "random-talent-source-unconfigured", `${t} uses table key “${e}”, but that key is not configured in Random Talents.`));
		return;
	}
	let o = i.randomTalentSources.get(e);
	o ? o.readyForCharacterCreation || a.push(q(n, "random-talent-source-not-ready", `Random Talent table “${o.key}” is not ready: ${o.reason ?? "its results are invalid"}.`)) : a.push(q(n, "random-talent-source-missing", `${t} uses missing table key “${e}”.`));
}
function op(e) {
	return /^-?\d+(?:\.\d+)?$/u.test(e);
}
function sp(e) {
	return /^random\[\d\](?:\[[a-zA-Z-_]+\])?$/iu.test(e);
}
//#endregion
//#region src/functions/species-builder/validation/grants.ts
function cp(e, t) {
	let n = [];
	return e.forEach((e, r) => {
		up(dp(e.linkedSkills, e.skills), "skills", "Skill", t.skills, mp(r, "skills"), n), tp(fp(e), "talents", mp(r, "talents"), np(e.randomTalents), t, n), up(dp(e.linkedTraits, e.traits), "traits", "Trait", t.traits, mp(r, "traits"), n), (e.subspecies ?? []).forEach((i, a) => lp(e, i, r, a, t, n));
	}), n;
}
function lp(e, t, n, r, i, a) {
	up(t.skillsAdded ?? [], "skillsAdded", "Skill", i.skills, hp(n, r, "skills"), a), tp((t.talentsAdded ?? []).map(pp), "talentsAdded", hp(n, r, "talents"), np(t.randomTalents ?? e.randomTalents), i, a), up(t.traitsAdded ?? [], "traitsAdded", "Trait", i.traits, hp(n, r, "traits"), a);
}
function up(e, t, n, r, i, a) {
	e.forEach((e, o) => {
		let s = e.trim(), c = {
			...i,
			field: t,
			rowIndex: o
		};
		s ? Mf(s, r) || a.push(q(c, "grant-unresolved", `${n} “${s}” does not match an available WFRP ${n} Item.`)) : a.push(q(c, "grant-blank", `${n} row ${o + 1} is blank.`));
	});
}
function dp(e, t) {
	return e?.length ? e.map(fc) : t ?? [];
}
function fp(e) {
	return e.linkedTalents?.length ? e.linkedTalents.map((e) => e.choices.map(fc)) : (e.talents ?? []).map(pp);
}
function pp(e) {
	return e.split(",").map((e) => e.trim());
}
function mp(e, t) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: t
	};
}
function hp(e, t, n) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: n,
		subspeciesIndex: t
	};
}
//#endregion
//#region src/functions/species-builder/validation/identity.ts
function gp(e, t) {
	let n = [], r = new Set(t.runtimeSpecies.map((e) => Af(e.name)).filter(Boolean)), i = new Set(t.runtimeSpecies.map((e) => e.key.trim()).filter(Boolean)), a = Sp(e.map(Cp)), o = xp(e.map((e) => e.name));
	return e.forEach((e, t) => {
		_p(e, t, a, o, i, r, n), vp(e, t, n);
	}), n;
}
function _p(e, t, n, r, i, a, o) {
	let s = yp(t), c = Cp(e), l = e.name.trim();
	if (c ? (n.get(c) ?? 0) > 1 ? o.push(q({
		...s,
		field: "key"
	}, "species-key-duplicate", `Species key “${c}” is used more than once.`)) : i.has(c) && o.push(q({
		...s,
		field: "key"
	}, "species-key-runtime-collision", `Species key “${c}” is already used by an external WFRP species.`)) : o.push(q({
		...s,
		field: "key"
	}, "species-key-required", "Enter a species key.")), !l) {
		o.push(q({
			...s,
			field: "name"
		}, "species-name-required", "Enter a species name."));
		return;
	}
	let u = Af(l);
	((r.get(u) ?? 0) > 1 || a.has(u)) && o.push(q({
		...s,
		field: "name"
	}, "species-name-duplicate", `Species name “${l}” must be unique because WFRP identifies table results by name.`)), /[{}]/u.test(l) && o.push(q({
		...s,
		field: "name"
	}, "species-name-unsafe", "Species names cannot contain { or }; WFRP parses the name from a UUID-link label."));
}
function vp(e, t, n) {
	let r = e.subspecies ?? [], i = Sp(r.map((t, n) => wp(e, t.key, n))), a = xp(r.map((e) => e.name));
	r.forEach((r, o) => {
		let s = bp(t, o), c = wp(e, r.key, o), l = r.name.trim();
		c ? (i.get(c) ?? 0) > 1 && n.push(q({
			...s,
			field: "key"
		}, "subspecies-key-duplicate", `Subspecies key “${c}” is used more than once for this species.`)) : n.push(q({
			...s,
			field: "key"
		}, "subspecies-key-required", "Enter a subspecies key.")), l ? (a.get(Af(l)) ?? 0) > 1 && n.push(q({
			...s,
			field: "name"
		}, "subspecies-name-duplicate", `Subspecies name “${l}” is used more than once for this species.`)) : n.push(q({
			...s,
			field: "name"
		}, "subspecies-name-required", "Enter a subspecies name."));
	});
}
function yp(e) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: "details"
	};
}
function bp(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "subspecies",
		subspeciesIndex: t
	};
}
function xp(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = Af(n);
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return t;
}
function Sp(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.trim();
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return t;
}
function Cp(e) {
	return Tp(e) ? e.key.trim() : ss(e.key);
}
function wp(e, t, n) {
	return Tp(e) && n < e.runtimeSubspeciesCount ? t.trim() : ss(t);
}
function Tp(e) {
	return "origin" in e && e.origin === "runtime";
}
//#endregion
//#region src/functions/species-builder/validation/issue-severity.ts
function Ep(e, t) {
	let n = new Map(t.runtimeSpecies.map((e) => [e.key.trim(), e]));
	return e.flatMap((e, t) => {
		if (e.origin !== "runtime") return [];
		let r = n.get(e.key.trim());
		if (!r || r.readyForCharacterCreation) return [];
		let i = r.reason ? `: ${r.reason}` : ".";
		return [q({
			definitionIndex: t,
			scope: "definition",
			section: "details"
		}, "runtime-species-not-ready", `Runtime species “${r.name}” is not ready for character creation${i}`)];
	});
}
function Dp(e, t, n) {
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
function Op(e, t) {
	let n = [];
	return e.forEach((e, r) => {
		jp(e.randomTalents ?? { talents: 0 }, Np(r), t, n), (e.subspecies ?? []).forEach((i, a) => {
			i.randomTalents !== void 0 && (jp(i.randomTalents, Pp(r, a), t, n), kp(e, i, r, a, n));
		});
	}), n;
}
function kp(e, t, n, r, i) {
	let a = new Set(Object.keys(t.randomTalents ?? {})), o = new Set(t.talentsRemoved ?? []), s = /* @__PURE__ */ new Set();
	for (let t of wc(e) ?? []) if (!o.has(t)) for (let e of Ap(t)) a.has(e) || s.add(e);
	for (let e of s) i.push(q(Pp(n, r), "inherited-random-talent-source-unconfigured", `Inherited Talent grants use table key “${e}”, but this subspecies Random Talents override does not configure it.`));
}
function Ap(e) {
	return /^-?\d+(?:\.\d+)?$/u.test(e.trim()) ? ["talents"] : e.includes(",") ? e.split(",").flatMap((e) => {
		let t = /^random\[(\d)\](?:\[([a-zA-Z-_]+)\])?$/iu.exec(e.trim());
		return t ? [t[2] ?? "talents"] : [];
	}) : [];
}
function jp(e, t, n, r) {
	Object.entries(e).forEach(([e, i], a) => {
		let o = e.trim();
		o ? Mp(o, a, t, n, r) : r.push(q({
			...t,
			field: "key",
			rowIndex: a
		}, "random-talent-source-required", `Random Talent row ${a + 1} needs a table key.`)), (!Number.isInteger(i) || i < 0) && r.push(q({
			...t,
			field: "count",
			rowIndex: a
		}, "random-talent-count-invalid", `Random Talent count for “${o || "row " + (a + 1)}” must be a non-negative whole number.`));
	});
}
function Mp(e, t, n, r, i) {
	let a = r.randomTalentSources.get(e);
	a ? a.readyForCharacterCreation || i.push(q({
		...n,
		field: "key",
		rowIndex: t
	}, "random-talent-source-not-ready", `Random Talent table “${a.key}” is not ready: ${a.reason ?? "its results are invalid"}.`)) : i.push(q({
		...n,
		field: "key",
		rowIndex: t
	}, "random-talent-source-missing", `No WFRP RollTable is registered with key “${e}”. WFRP looks it up even when the count is 0.`));
}
function Np(e) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: "randomTalents"
	};
}
function Pp(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "randomTalents",
		subspeciesIndex: t
	};
}
//#endregion
//#region src/functions/species-builder/validation/replacements.ts
function Fp(e, t) {
	let n = [];
	return e.forEach((e, r) => {
		Ip(e, Bp(r, "talentReplacement"), t, n), Rp(e, Bp(r, "careerReplacement"), t, n), (e.subspecies ?? []).forEach((e, i) => Ip(e, Vp(r, i), t, n));
	}), n;
}
function Ip(e, t, n, r) {
	let i = lf(e), a = Hp(i.map((e) => fc(e.rolled)));
	i.forEach((e, i) => {
		let o = fc(e.rolled);
		Lp(e.rolled, "rolled", i, t, n, r), Lp(e.replacement, "replacement", i, t, n, r), o && (a.get(Af(o)) ?? 0) > 1 && r.push(q({
			...t,
			field: "rolled",
			rowIndex: i
		}, "talent-replacement-duplicate", `Talent “${o}” appears in more than one replacement row; only the last row would be used.`));
	});
}
function Lp(e, t, n, r, i, a) {
	let o = fc(e), s = {
		...r,
		field: t,
		rowIndex: n
	};
	o ? Mf(o, i.talents) || a.push(q(s, "talent-replacement-unresolved", `Talent “${o}” does not match an available WFRP Talent Item.`)) : a.push(q(s, "talent-replacement-blank", `Talent Replacement row ${n + 1} needs a ${t} Talent.`));
}
function Rp(e, t, n, r) {
	let i = uf(e), a = Hp(i.map((e) => fc(e.rolled)));
	i.forEach((e, i) => {
		let o = fc(e.rolled);
		zp(o, "rolled", i, void 0, t, n, r), o && (a.get(Af(o)) ?? 0) > 1 && r.push(q({
			...t,
			field: "rolled",
			rowIndex: i
		}, "career-replacement-duplicate", `Career group “${o}” appears in more than one replacement row; only the last row would be used.`)), e.replacements.length === 0 ? zp("", "replacement", i, 0, t, n, r) : e.replacements.forEach((e, a) => zp(fc(e), "replacement", i, a, t, n, r));
	});
}
function zp(e, t, n, r, i, a, o) {
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
	e.trim() ? a.careerGroups.has(e.trim()) || o.push(q(s, "career-replacement-unresolved", `Career group “${e}” does not match an available WFRP Career group.`)) : o.push(q(s, "career-replacement-blank", `Career Replacement row ${n + 1} needs a ${t} Career group.`));
}
function Bp(e, t) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: t
	};
}
function Vp(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "talentReplacement",
		subspeciesIndex: t
	};
}
function Hp(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = Af(n);
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return t;
}
//#endregion
//#region src/functions/species-builder/validation/runtime-extensions.ts
function Up(e, t, n) {
	let r = new Set(n.map(Jp));
	return e.flatMap((e, n) => e.origin !== "runtime" || e.runtimeUnavailable ? [] : (e.subspecies ?? []).flatMap((i, a) => a < e.runtimeSubspeciesCount ? [] : Wp(e, i, t).flatMap((e) => {
		let t = qp(e, n, a, i.name);
		return r.has(Jp(t)) ? [] : [t];
	})));
}
function Wp(e, t, n) {
	let r = Gp(e, t), i = [];
	return r.skills === void 0 && i.push(q({
		definitionIndex: 0,
		scope: "definition",
		section: "skills"
	}, "effective-skills-required", "The effective Skill list is missing. WFRP character creation requires an array, even when it is empty.")), r.talents === void 0 && i.push(q({
		definitionIndex: 0,
		scope: "definition",
		section: "talents"
	}, "effective-talents-required", "The effective Talent list is missing. WFRP character creation requires an array, even when it is empty.")), [
		...i,
		...Uf([r]),
		...cp([r], n),
		...Op([r], n),
		...Lf([r], n),
		...Fp([r], n)
	];
}
function Gp(e, t) {
	let n = {
		includeInExtraSpecies: !1,
		key: t.key,
		name: t.name
	};
	return H(n, "age", e.age), H(n, "height", e.height), H(n, "characteristics", t.characteristics ? {
		...e.characteristics,
		...t.characteristics
	} : e.characteristics), H(n, "movement", t.movement ?? e.movement), H(n, "fate", t.fate ?? e.fate), H(n, "resilience", t.resilience ?? e.resilience), H(n, "extra", t.extra ?? e.extra), H(n, "skills", Sc(e, t) ?? xc(e)), H(n, "talents", Tc(e, t) ?? wc(e)), H(n, "traits", Dc(e, t) ?? Ec(e)), H(n, "randomTalents", t.randomTalents ?? e.randomTalents), H(n, "careerTable", t.careerTable ?? e.careerTable), H(n, "careerReplacements", t.careerReplacements), H(n, "careerReplacementRows", t.careerReplacementRows), Kp(n, e, t), H(n, "woundFormula", t.woundFormula), n;
}
function Kp(e, t, n) {
	let r = n.talentReplacementRows !== void 0 || n.talentReplacements !== void 0;
	H(e, "talentReplacementRows", r ? n.talentReplacementRows : t.talentReplacementRows), H(e, "talentReplacements", r ? n.talentReplacements : t.talentReplacements);
}
function qp(e, t, n, r) {
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
function Jp(e) {
	return [
		e.definitionIndex ?? "",
		e.subspeciesIndex ?? "",
		e.section,
		e.code
	].join(":");
}
//#endregion
//#region src/functions/species-builder/validation/species-table.ts
function Yp(e, t, n, r) {
	if (!t) return [];
	let i = [], a = e.autoRegisterSpeciesTable || t.isRegistered;
	if (t.rows.length === 0) return a ? [q(em(), "species-table-empty", "Add at least one species while this table is registered for character creation.")] : [];
	let o = new Map(e.definitions.map((e, t) => [ss(e.key), {
		definition: e,
		definitionIndex: t
	}])), s = new Map(n.runtimeSpecies.map((e) => [e.key.trim(), e])), c = nm(t.rows.map((e) => e.speciesKey)), l = nm(t.rows.map((e) => e.name));
	return t.rows.forEach((e, t) => {
		let n = e.speciesKey.trim(), a = e.name.trim(), u = tm(t);
		if (Xp(n, a, c, l, u, i), n) {
			let e = o.get(n);
			e ? Zp(a, e.definition.name.trim(), e.definitionIndex, r, u, i) : Qp(a, s.get(n), n, u, i);
		}
		(!Number.isInteger(e.weight) || e.weight < 1) && i.push(q({
			...u,
			field: "weight"
		}, "species-table-weight-invalid", `Species Table row ${t + 1} needs a whole-number weight of at least 1.`));
	}), i;
}
function Xp(e, t, n, r, i, a) {
	e ? (n.get(Af(e)) ?? 0) > 1 && a.push(q({
		...i,
		field: "speciesKey"
	}, "species-table-species-duplicate", `Species key “${e}” appears more than once in the Species Table.`)) : a.push(q({
		...i,
		field: "speciesKey"
	}, "species-table-species-required", `Species Table row ${(i.rowIndex ?? 0) + 1} must select a species.`));
	let o = Af(t);
	o && (r.get(o) ?? 0) > 1 && a.push(q({
		...i,
		field: "speciesKey"
	}, "species-table-name-duplicate", `Species name “${t}” appears more than once in the Species Table.`)), /[{}]/u.test(t) && a.push(q({
		...i,
		field: "speciesKey"
	}, "species-table-name-unsafe", `Species name “${t}” cannot be encoded in WFRP's UUID-link label.`));
}
function Zp(e, t, n, r, i, a) {
	$p(e, t, i, a), r.some((e) => e.definitionIndex === n) && a.push(q({
		...i,
		field: "speciesKey"
	}, "species-table-definition-not-ready", `Custom species “${t || "unnamed species"}” has character-creation errors.`));
}
function Qp(e, t, n, r, i) {
	if (!t) {
		i.push(q({
			...r,
			field: "speciesKey"
		}, "species-table-species-missing", `Species key “${n}” is not registered in the current WFRP world.`));
		return;
	}
	if ($p(e, t.name, r, i), !t.readyForCharacterCreation) {
		let e = t.reason ? `: ${t.reason}` : ".";
		i.push(q({
			...r,
			field: "speciesKey"
		}, "species-table-runtime-not-ready", `Runtime species “${t.name}” is not ready for character creation${e}`));
	}
}
function $p(e, t, n, r) {
	(!e || e !== t) && r.push(q({
		...n,
		field: "speciesKey"
	}, "species-table-name-mismatch", `WFRP reads the UUID-link label as the species name; this row must use “${t}”.`));
}
function em() {
	return {
		scope: "species-table",
		section: "species-table"
	};
}
function tm(e) {
	return {
		...em(),
		rowIndex: e
	};
}
function nm(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = Af(n);
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return t;
}
//#endregion
//#region src/functions/species-builder/validation/index.ts
function rm(e, t, n, r) {
	let i = kf(t), a = r ?? e.definitions, o = [
		...gp(a, t),
		...Uf(a),
		...cp(a, i),
		...Op(a, i),
		...Lf(a, i),
		...Fp(a, i)
	], s = r ? im(o, r) : o, c = Dp(r ? [
		...s,
		...Up(r, i, s),
		...Ep(r, t)
	] : s, a, n);
	return [...c, ...Yp(e, n, t, c)];
}
function im(e, t) {
	let n = t.flatMap((e, t) => e.origin !== "runtime" || !e.runtimeUnavailable || (e.subspecies?.length ?? 0) <= e.runtimeSubspeciesCount ? [] : [q({
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
function am(e) {
	return { validationIssues: V(() => rm(e.settings.value, e.catalog.value, e.speciesTable.value, e.editingDefinitions.value)) };
}
function om() {
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
var sm = lc("species-builder", () => {
	let { configure: e, configuredBridge: t, requireBridge: n } = Gu(), r = /* @__PURE__ */ O([]), i = /* @__PURE__ */ O([]), a = /* @__PURE__ */ O(!1), o = /* @__PURE__ */ O(!1), s = /* @__PURE__ */ O(0), c = /* @__PURE__ */ O(!0), l = /* @__PURE__ */ O(!1), u = /* @__PURE__ */ O(""), d = /* @__PURE__ */ O(""), f = /* @__PURE__ */ O(""), p = /* @__PURE__ */ O([]), m = /* @__PURE__ */ O(om()), h = /* @__PURE__ */ O(""), g = /* @__PURE__ */ O(""), _ = /* @__PURE__ */ O(""), v = V(() => r.value[s.value]), y = V(() => xs(r.value)), b = V(() => y.value.filter((e) => !e.runtimeUnavailable)), x = V(() => Ml(y.value)), S = V(() => ({
		autoRegisterSpeciesTable: a.value,
		...x.value,
		showGeneratedConfigTab: o.value
	})), C = V(() => gu(S.value)), ee = V(() => Os(xl(C.value, i.value))), te = Df({
		autoRegisterSpeciesTable: a,
		definitions: b,
		message: u
	}), { validationIssues: ne } = am({
		catalog: m,
		editingDefinitions: y,
		settings: S,
		speciesTable: te.preparedSpeciesTable
	}), { blockingSpeciesTableValidationMessages: re, blockingValidationIssues: ie, canSave: ae, definitionsHaveUnsavedChanges: w, hasUnsavedChanges: oe, requiresUnsafeSaveConfirmation: se, settingsHaveUnsavedChanges: ce, speciesTableWillSave: le } = Cf({
		autoRegisterSpeciesTable: a,
		isLoading: c,
		isSaving: l,
		loadError: d,
		normalizedSettings: C,
		savedDefinitionsSnapshot: g,
		savedSettingsSnapshot: h,
		savedSpeciesTableSnapshot: _,
		speciesTable: te.speciesTable,
		speciesTableSnapshot: te.speciesTableSnapshot,
		speciesTableValidationMessages: te.speciesTableValidationMessages,
		validationIssues: ne
	}), { saveChanges: T } = Tf({
		autoRegisterSpeciesTable: a,
		canSave: ae,
		definitions: r,
		definitionsHaveUnsavedChanges: w,
		hydrateSpeciesTable: te.hydrateSpeciesTable,
		isSaving: l,
		loadError: d,
		message: u,
		normalizedSettings: C,
		preparedSpeciesTable: te.preparedSpeciesTable,
		requireBridge: n,
		requiresUnsafeSaveConfirmation: se,
		runtimeDefinitions: i,
		savedDefinitionsSnapshot: g,
		savedSettingsSnapshot: h,
		savedSpeciesTableSnapshot: _,
		saveError: f,
		selectedIndex: s,
		settingsHaveUnsavedChanges: ce,
		showGeneratedConfigTab: o,
		speciesTableWillSave: le
	}), ue = id({
		definitions: r,
		message: u,
		selectedDefinition: v,
		selectedIndex: s
	}), { updateDefinitionForSubspecies: de, ...fe } = Of({
		definitions: r,
		message: u,
		selectedIndex: s
	}), { resolveDroppedItem: pe, ...me } = xf({
		bridge: t,
		definitionActions: ue,
		loadError: d,
		selectedDefinition: v,
		subspeciesActions: fe
	}), he = Qd({
		definitionActions: ue,
		resolveDroppedItem: pe,
		selectedDefinition: v,
		subspeciesActions: {
			canEditSubspecies: fe.canEditSubspecies,
			updateDefinitionForSubspecies: de
		}
	}), ge = Uu({
		bridge: t,
		definitionActions: ue,
		loadError: d,
		resolveDroppedItem: pe,
		selectedDefinition: v,
		subspeciesActions: fe
	});
	async function _e() {
		c.value = !0, d.value = "", f.value = "", u.value = "";
		try {
			let e = await n().loadSettings(), [t, c, l, u] = await Promise.all([
				n().loadRuntimeSpecies(),
				n().loadRandomTalentSources(),
				n().loadSpeciesTable(),
				n().loadValidationCatalog(e.definitions.map(({ key: e }) => e))
			]);
			a.value = e.autoRegisterSpeciesTable, i.value = ks(t), r.value = jl(e.definitions, t, e.runtimeSpeciesExtensions), p.value = c, o.value = e.showGeneratedConfigTab, s.value = r.value.length > 0 ? 0 : -1, te.hydrateSpeciesTable(l), m.value = u, h.value = Es(C.value), g.value = wf(C.value), _.value = Nu(l.draft);
		} catch (e) {
			d.value = getErrorMessage(e);
		} finally {
			c.value = !1;
		}
	}
	function ve(e) {
		o.value = e, u.value = "";
	}
	function ye(e) {
		a.value = e, u.value = "";
	}
	return {
		...ue,
		...ge,
		...he,
		...me,
		...te,
		...fe,
		autoRegisterSpeciesTable: a,
		blockingSpeciesTableValidationMessages: re,
		blockingValidationIssues: ie,
		canSave: ae,
		configure: e,
		definitions: r,
		generatedConfigText: ee,
		hasUnsavedChanges: oe,
		isLoading: c,
		isSaving: l,
		loadError: d,
		loadSettings: _e,
		message: u,
		randomTalentSources: p,
		requiresUnsafeSaveConfirmation: se,
		saveChanges: T,
		saveError: f,
		selectedDefinition: v,
		selectedIndex: s,
		showGeneratedConfigTab: o,
		updateAutoRegisterSpeciesTable: ye,
		updateShowGeneratedConfigTab: ve,
		validationIssues: ne
	};
});
//#endregion
//#region src/state/species-builder/editor.ts
function cm(e, t = {}) {
	let n = sm();
	n.configure(e);
	async function r(e = {}) {
		await n.saveChanges(e) && t.onSettingsSaved?.();
	}
	return {
		...n,
		...uc(n),
		saveChanges: r
	};
}
//#endregion
//#region src/view/apps/species-builder/components/dialog-focus.ts
function lm() {
	let e;
	function t() {
		let t = document.activeElement;
		e = t instanceof HTMLElement && t !== document.body ? t : void 0;
	}
	function n() {
		let t = e;
		e = void 0, Mn(() => {
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
var um = ["onKeydown"], dm = {
	key: 0,
	class: "dui-modal-box"
}, fm = { id: "species-builder-delete-message" }, pm = { class: "dui-modal-action" }, mm = /* @__PURE__ */ j({
	__name: "DeleteConfirmationSubView",
	props: { message: {} },
	emits: ["close", "confirm"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ O(), a = lm();
		function o() {
			i.value?.close();
		}
		function s() {
			n.message && r("close"), a.restore();
		}
		return Zn(() => n.message, async (e) => {
			e ? (a.capture(), await Mn(), n.message && !i.value?.open && i.value?.showModal()) : i.value?.open && i.value.close();
		}, {
			flush: "post",
			immediate: !0
		}), (t, n) => (P(), F("dialog", {
			ref_key: "dialog",
			ref: i,
			class: "dui-modal",
			"aria-describedby": "species-builder-delete-message",
			"aria-labelledby": "species-builder-delete-title",
			onClose: s,
			onKeydown: es(Qo(o, ["stop", "prevent"]), ["esc"]),
			onKeyup: n[1] ||= es(Qo(() => {}, ["stop"]), ["esc"])
		}, [e.message ? (P(), F("div", dm, [
			n[2] ||= L("h2", { id: "species-builder-delete-title" }, "Confirm Deletion", -1),
			L("p", fm, D(e.message), 1),
			L("div", pm, [L("button", {
				class: "dui-btn dui-btn-error",
				type: "button",
				onClick: n[0] ||= (e) => r("confirm")
			}, "Delete"), L("button", {
				autofocus: "",
				class: "dui-btn",
				type: "button",
				onClick: o
			}, "Cancel")])
		])) : B("", !0), n[3] ||= L("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [L("button", {
			"aria-label": "Cancel deletion",
			type: "submit"
		}, "Close")], -1)], 40, um));
	}
});
//#endregion
//#region src/view/apps/species-builder/tabs/species/species-key-suggestions.ts
function hm(e) {
	return ss(e.name) || "new-species";
}
function gm(e) {
	return ss(e.name) || "new-subspecies";
}
//#endregion
//#region src/view/apps/species-builder/components/SpeciesBuilderEditorContext.vue?vue&type=script&setup=true&lang.ts
var _m = {
	"aria-label": "Current species and save state",
	class: "dui-footer dui-footer-horizontal app:sticky app:bottom-0 app:z-10 app:items-center app:justify-between app:gap-3 app:bg-base-200 app:px-3 app:py-2"
}, vm = { class: "app:flex app:min-w-0 app:items-center app:gap-2" }, ym = {
	key: 0,
	class: "dui-badge dui-badge-ghost"
}, bm = {
	"aria-atomic": "true",
	"aria-live": "polite",
	role: "status"
}, xm = ["disabled"], Sm = /* @__PURE__ */ j({
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
		let n = e, r = t, i = V(() => n.entityName?.trim() || n.definition?.name.trim() || n.definition?.key.trim() || (n.definition ? "Untitled Species" : "Species Builder")), a = V(() => n.entityKey?.trim() ? n.entityKey.trim() : n.definition ? n.definition.key.trim() || hm(n.definition) : ""), o = V(() => n.isLoading ? {
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
		return (t, n) => (P(), F("footer", _m, [L("div", vm, [
			L("span", {
				"aria-hidden": "true",
				class: E(["dui-status", o.value.statusClass])
			}, null, 2),
			L("strong", null, D(i.value), 1),
			a.value ? (P(), F("span", ym, D(a.value), 1)) : B("", !0),
			L("span", bm, D(o.value.label), 1)
		]), L("button", {
			class: "dui-btn dui-btn-primary dui-btn-sm",
			disabled: !e.canSave,
			type: "button",
			onClick: n[0] ||= (e) => r("save")
		}, [n[1] ||= L("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-floppy-disk"
		}, null, -1), z(" " + D(e.isSaving ? "Saving..." : "Save Changes"), 1)], 8, xm)]));
	}
}), Cm = { class: "dui-navbar-start app:min-w-0 app:flex-1" }, wm = { class: "app:min-w-0" }, Tm = {
	"aria-label": "Current location",
	class: "dui-breadcrumbs app:py-0 app:text-sm"
}, Em = { class: "app:m-0 app:p-0" }, Dm = { key: 0 }, Om = { key: 1 }, km = { "aria-current": "page" }, Am = { class: "dui-navbar-end" }, jm = { class: "dui-dropdown-content dui-card dui-card-border app:z-30 app:w-52 app:bg-base-100" }, Mm = { class: "dui-menu dui-menu-sm app:w-full" }, Nm = ["disabled"], Pm = { key: 0 }, Fm = ["disabled"], Im = { key: 1 }, Lm = ["disabled"], Rm = /* @__PURE__ */ j({
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
		let n = t, r = /* @__PURE__ */ O(), i = /* @__PURE__ */ O(), a = !1;
		function o(e) {
			l(), n(e);
		}
		function s() {
			l(), n("reload");
		}
		async function c(e) {
			let t = e.currentTarget instanceof HTMLElement ? e.currentTarget.closest(".wfrp4e-customizer-apps-root") : null;
			l(), n("selectSpecies"), await Mn(), t?.scrollTo({ top: 0 }), t?.querySelector("#species-builder-species-list-heading")?.focus();
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
		return (t, n) => (P(), F("header", {
			class: "dui-navbar app:sticky app:top-0 app:z-20 app:bg-base-200",
			onKeydown: es(u, ["esc"]),
			onKeyup: es(d, ["esc"])
		}, [
			L("div", Cm, [L("div", wm, [n[2] ||= L("h1", { class: "app:m-0 app:text-xl app:leading-tight" }, "Species Builder", -1), L("nav", Tm, [L("ul", Em, [
				e.definitionName ? (P(), F("li", Dm, [L("button", {
					class: "dui-btn dui-btn-link dui-btn-xs",
					type: "button",
					onClick: c
				}, " Species List ")])) : B("", !0),
				e.definitionName ? (P(), F("li", Om, [L("span", null, D(e.definitionName), 1)])) : B("", !0),
				L("li", null, [L("span", km, D(e.contextLabel), 1)])
			])])])]),
			L("div", Am, [L("details", {
				ref_key: "actionsDropdown",
				ref: r,
				class: "dui-dropdown dui-dropdown-end"
			}, [n[6] ||= L("summary", { class: "dui-btn dui-btn-outline dui-btn-sm" }, [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-ellipsis"
			}), z(" Actions ")], -1), L("div", jm, [L("ul", Mm, [
				L("li", { onClick: l }, [Kr(t.$slots, "actions", { dialogHost: i.value })]),
				L("li", null, [L("button", {
					disabled: e.isBusy,
					type: "button",
					onClick: s
				}, [...n[3] ||= [L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-rotate-right"
				}, null, -1), z(" Reload ", -1)]], 8, Nm)]),
				e.canManageDefinition ? (P(), F("li", Pm, [L("button", {
					disabled: e.isBusy,
					type: "button",
					onClick: n[0] ||= (e) => o("duplicate")
				}, [...n[4] ||= [L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-copy"
				}, null, -1), z(" Duplicate ", -1)]], 8, Fm)])) : B("", !0),
				e.canManageDefinition ? (P(), F("li", Im, [L("button", {
					class: "app:text-error",
					disabled: e.isBusy,
					type: "button",
					onClick: n[1] ||= (e) => o("delete")
				}, [...n[5] ||= [L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), z(" Delete ", -1)]], 8, Lm)])) : B("", !0)
			])])], 512)]),
			L("div", {
				ref_key: "portabilityDialogHost",
				ref: i
			}, null, 512)
		], 32));
	}
});
//#endregion
//#region src/view/apps/species-builder/components/validation/validation-presentation.ts
function zm(e, t) {
	return {
		count: (e?.count ?? 0) + 1,
		severity: e?.severity === "error" || Hm(t) === "error" ? "error" : "warning"
	};
}
function Bm(e) {
	return e.reduce((e, t) => zm(e, t), void 0);
}
function Vm(e) {
	if (!e) return "";
	let t = e.severity === "error" ? "error" : "warning";
	return `${e.count} character-creation ${t}${e.count === 1 ? "" : "s"}`;
}
function Hm(e) {
	return e.severity === "warning" ? "warning" : "error";
}
//#endregion
//#region src/view/apps/species-builder/components/species-builder-navigation.ts
var Um = {
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
}, Wm = {
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
function Gm(e) {
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
function Km(e, t) {
	return e.kind === "project" ? t.activeTab === e.tab && (e.tab !== "species" || !t.isEditorOpen) : !t.isEditorOpen || t.activeTab !== "species" ? !1 : e.kind === "editor" ? t.activeEditorTab === e.tab : t.activeEditorTab === "tables" && t.activeTableTab === e.tab;
}
function qm(e, t) {
	return t.isBusy || e.kind !== "project" && !t.hasSelectedDefinition;
}
function Jm(e) {
	return e.kind === "project" ? e.tab === "species" || e.tab === "species-table" ? e.tab : void 0 : e.tab;
}
function Ym(e, t) {
	let n = {};
	for (let r of e) {
		if (r.scope === "species-table") {
			Xm(n, "species-table", r);
			continue;
		}
		Xm(n, "species", r), r.definitionIndex === t && Xm(n, r.scope === "subspecies" ? "subspecies" : r.section, r);
	}
	return n;
}
function Xm(e, t, n) {
	e[t] = zm(e[t], n);
}
function Zm(e, t, n, r) {
	return e === "settings" ? {
		description: "Control optional authoring tools and sample definitions.",
		label: "Settings"
	} : e === "species-table" ? {
		description: "Configure the weighted world table WFRP uses to roll a character's species.",
		label: "Species Table"
	} : e === "wfrp-config" ? {
		description: "Review the WFRP config generated from the current draft.",
		label: "WFRP Config"
	} : t ? n === "tables" ? Wm[r] : Um[n] : {
		description: "Choose a species to edit or create a new definition.",
		label: "Custom Species"
	};
}
//#endregion
//#region src/view/apps/species-builder/components/SpeciesBuilderValidationDot.vue?vue&type=script&setup=true&lang.ts
var Qm = ["title"], $m = { class: "app:sr-only" }, eh = /* @__PURE__ */ j({
	__name: "SpeciesBuilderValidationDot",
	props: { indicator: {} },
	setup(e) {
		return (t, n) => e.indicator ? (P(), F("span", {
			key: 0,
			class: "app:ml-auto app:inline-flex app:items-center",
			title: k(Vm)(e.indicator)
		}, [L("span", {
			"aria-hidden": "true",
			class: E(["dui-status dui-status-sm", e.indicator.severity === "error" ? "dui-status-error" : "dui-status-warning"])
		}, null, 2), L("span", $m, D(k(Vm)(e.indicator)), 1)], 8, Qm)) : B("", !0);
	}
}), th = { class: "app:w-48 app:shrink-0" }, nh = {
	"aria-label": "Species Builder sections",
	class: "app:sticky app:top-20"
}, rh = { class: "dui-menu dui-menu-sm app:w-full app:rounded-box app:bg-base-200" }, ih = { class: "dui-menu-title" }, ah = [
	"aria-current",
	"disabled",
	"onClick"
], oh = /* @__PURE__ */ j({
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
		let n = e, r = t, i = V(() => Gm(n.showGeneratedConfigTab)), a = V(() => ({
			activeEditorTab: n.activeEditorTab,
			activeTableTab: n.activeTableTab,
			activeTab: n.activeTab,
			hasSelectedDefinition: n.hasSelectedDefinition,
			isBusy: n.isBusy,
			isEditorOpen: n.isEditorOpen
		}));
		async function o(e, t) {
			if (qm(e, a.value)) return;
			let n = t.currentTarget instanceof HTMLElement ? t.currentTarget.closest(".wfrp4e-customizer-apps-root") : null;
			e.kind === "project" ? r("selectTab", e.tab) : e.kind === "editor" ? r("selectEditorTab", e.tab) : r("selectTableTab", e.tab), await Mn(), n?.scrollTo({ top: 0 });
		}
		function s(e) {
			let t = Jm(e);
			return t ? n.validationCounts[t] : void 0;
		}
		return (e, t) => (P(), F("aside", th, [L("nav", nh, [L("ul", rh, [(P(!0), F(N, null, M(i.value, (e) => (P(), F(N, { key: e.key }, [L("li", ih, [L("span", null, D(e.label), 1)]), (P(!0), F(N, null, M(e.entries, (e) => (P(), F("li", { key: `${e.kind}-${e.tab}` }, [L("button", {
			"aria-current": k(Km)(e, a.value) ? "page" : void 0,
			class: E({ "dui-menu-active": k(Km)(e, a.value) }),
			disabled: k(qm)(e, a.value),
			type: "button",
			onClick: (t) => o(e, t)
		}, [
			L("i", {
				"aria-hidden": "true",
				class: E(e.icon)
			}, null, 2),
			L("span", null, D(e.label), 1),
			R(eh, { indicator: s(e) }, null, 8, ["indicator"])
		], 10, ah)]))), 128))], 64))), 128))])])]));
	}
}), sh = { "aria-live": "polite" }, ch = {
	key: 0,
	role: "alert",
	class: "dui-alert dui-alert-error app:m-0"
}, lh = { class: "app:flex-1" }, uh = {
	key: 2,
	role: "alert",
	class: "dui-alert dui-alert-error app:m-0"
}, dh = {
	key: 3,
	class: "dui-alert dui-alert-info app:m-0"
}, fh = /* @__PURE__ */ j({
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
		let n = e, r = t, i = V(() => n.chargenErrorCount + n.chargenWarningCount);
		return (t, n) => (P(), F("section", sh, [e.loadError ? (P(), F("p", ch, [n[1] ||= L("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-exclamation"
		}, null, -1), L("span", null, D(e.loadError), 1)])) : i.value > 0 ? (P(), F("div", {
			key: 1,
			role: "alert",
			class: E(["dui-alert app:m-0", e.chargenErrorCount > 0 ? "dui-alert-error" : "dui-alert-warning"])
		}, [
			L("i", {
				"aria-hidden": "true",
				class: E(["fa-solid", e.chargenErrorCount > 0 ? "fa-circle-exclamation" : "fa-triangle-exclamation"])
			}, null, 2),
			L("span", lh, [e.chargenErrorCount > 0 ? (P(), F(N, { key: 0 }, [z(D(e.chargenErrorCount) + " character-creation " + D(e.chargenErrorCount === 1 ? "error affects" : "errors affect") + " species that can be rolled or selected. ", 1)], 64)) : B("", !0), e.chargenWarningCount > 0 ? (P(), F(N, { key: 1 }, [z(D(e.chargenWarningCount) + " validation " + D(e.chargenWarningCount === 1 ? "warning applies" : "warnings apply") + " to species that are not currently rollable or selectable. ", 1)], 64)) : B("", !0)]),
			L("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: n[0] ||= (e) => r("reviewIssues")
			}, [z(" Review " + D(i.value === 1 ? "Issue" : "Issues") + " ", 1), n[2] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-chevron-right"
			}, null, -1)])
		], 2)) : e.validationMessage ? (P(), F("p", uh, [n[3] ||= L("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-exclamation"
		}, null, -1), L("span", null, D(e.validationMessage), 1)])) : e.message ? (P(), F("p", dh, [n[4] ||= L("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), L("span", null, D(e.message), 1)])) : B("", !0)]));
	}
}), ph = new Set(Object.values(U));
function mh(e, t) {
	if (!W(e)) return `${t} must be a JSON object.`;
	for (let [n, r] of Object.entries(e)) {
		if (!ph.has(n)) return `${t}.${n} is not a supported WFRP characteristic.`;
		let e = Nh(r, `${t}.${n}`, "string formula");
		if (e) return e;
	}
	return "";
}
function hh(e, t) {
	return jh(e, t, [
		"die",
		"feet",
		"inches"
	], (e, t) => Ah(e, t, [
		["die", Nh],
		["feet", Ph],
		["inches", Ph]
	], /* @__PURE__ */ new Set()));
}
function gh(e, t) {
	return jh(e, t, ["formula"], (e, t) => Ah(e, t, [["formula", (e, t) => Nh(e, t, "string formula")]], new Set(["formula"])));
}
function _h(e, t) {
	return jh(e, t, ["rows"], (e, t) => Ah(e, t, [["rows", vh]], new Set(["rows"])));
}
function vh(e, t) {
	return Mh(e, t, (e, t) => bh(e, t));
}
function yh(e, t) {
	return Mh(e, t, (e, t) => bh(e, t));
}
function bh(e, t) {
	return jh(e, t, ["name"], (e, t) => Ah(e, t, [["name", Nh]], new Set(["name"])));
}
function xh(e, t) {
	return Mh(e, t, (e, t) => jh(e, t, ["choices"], (e, t) => Ah(e, t, [["choices", (e, t) => wh(e, t, !0)]], new Set(["choices"]))));
}
function Sh(e, t) {
	return Mh(e, t, (e, t) => jh(e, t, ["replacement", "rolled"], (e, t) => Ah(e, t, [["replacement", bh], ["rolled", bh]], new Set(["replacement", "rolled"]))));
}
function Ch(e, t) {
	return Mh(e, t, (e, t) => jh(e, t, ["replacements", "rolled"], (e, t) => Ah(e, t, [["replacements", (e, t) => wh(e, t, !0)], ["rolled", bh]], new Set(["replacements", "rolled"]))));
}
function wh(e, t, n) {
	return n && Array.isArray(e) && e.length === 0 ? `${t} must contain at least one entry.` : yh(e, t);
}
function Th(e, t) {
	return Mh(e, t, Nh);
}
function Eh(e, t) {
	return kh(e, t, Nh);
}
function Dh(e, t) {
	return kh(e, t, Ph);
}
function Oh(e, t) {
	return kh(e, t, Th);
}
function kh(e, t, n) {
	if (!W(e)) return `${t} must be a JSON object.`;
	for (let [r, i] of Object.entries(e)) {
		if (!r.trim()) return `${t} must not contain an empty key.`;
		let e = n(i, `${t}[${JSON.stringify(r)}]`);
		if (e) return e;
	}
	return "";
}
function Ah(e, t, n, r) {
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
function jh(e, t, n, r) {
	if (!W(e)) return `${t} must be a JSON object.`;
	let i = Object.keys(e).find((e) => !n.includes(e));
	return i ? `${t}.${i} is not supported by species definition export version 1.` : r(e, t);
}
function Mh(e, t, n) {
	if (!Array.isArray(e)) return `${t} must be an array.`;
	for (let [r, i] of e.entries()) {
		let e = n(i, `${t}[${r}]`);
		if (e) return e;
	}
	return "";
}
function Nh(e, t, n = "non-empty string") {
	return typeof e == "string" && e.trim() ? "" : `${t} must be a ${n}.`;
}
function Ph(e, t) {
	return typeof e == "number" && Number.isFinite(e) ? "" : `${t} must be a finite number.`;
}
function Fh(e, t) {
	return typeof e == "boolean" ? "" : `${t} must be a boolean.`;
}
//#endregion
//#region src/functions/species-builder/definition-portability/validation.ts
var Ih = [
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
], Lh = [
	...Ih,
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
], Rh = [
	...Ih,
	"skillsAdded",
	"skillsRemoved",
	"talentsAdded",
	"talentsRemoved",
	"traitsAdded",
	"traitsRemoved"
];
function zh(e) {
	return jh(e, "definition", Lh, Bh);
}
function Bh(e, t) {
	return Vh(e, t) || Ah(e, t, [
		["includeInExtraSpecies", Fh],
		["age", Nh],
		["height", hh],
		["careerReplacementRows", Ch],
		["careerReplacements", Oh],
		["linkedSkills", yh],
		["linkedTalents", xh],
		["linkedTraits", yh],
		["skills", Th],
		["talents", Th],
		["traits", Th],
		["subspecies", Hh]
	], new Set(["includeInExtraSpecies"]));
}
function Vh(e, t) {
	return Ah(e, t, [
		["key", Uh],
		["name", Nh],
		["characteristics", mh],
		["randomTalents", Dh],
		["talentReplacementRows", Sh],
		["talentReplacements", Eh],
		["movement", Ph],
		["fate", Ph],
		["resilience", Ph],
		["extra", Ph],
		["woundFormula", gh],
		["careerTable", _h]
	], new Set(["key", "name"]));
}
function Hh(e, t) {
	let n = Mh(e, t, (e, t) => jh(e, t, Rh, (e, t) => Vh(e, t) || Ah(e, t, [
		["skillsAdded", Th],
		["skillsRemoved", Th],
		["talentsAdded", Th],
		["talentsRemoved", Th],
		["traitsAdded", Th],
		["traitsRemoved", Th]
	], /* @__PURE__ */ new Set())));
	if (n || !Array.isArray(e)) return n;
	let r = /* @__PURE__ */ new Set();
	for (let [n, i] of e.entries()) {
		let e = ss(i.key);
		if (r.has(e)) return `${t}[${n}].key duplicates normalized subspecies key ${JSON.stringify(e)}.`;
		r.add(e);
	}
	return "";
}
function Uh(e, t) {
	return Nh(e, t) || (ss(e) ? "" : `${t} must contain at least one ASCII letter or number.`);
}
//#endregion
//#region src/functions/species-builder/definition-portability/index.ts
var Wh = "wfrp4e-customizer-species-definition";
function Gh(e) {
	let t = qh(e);
	if (!t.ok) throw Error(`Species definition cannot be exported: ${t.error}`);
	let n = {
		definition: Yh(t.definition),
		format: Wh,
		version: 1
	};
	return JSON.stringify(n, null, 2);
}
function Kh(e) {
	let t;
	try {
		t = JSON.parse(e);
	} catch (e) {
		return ng(`Import is not valid JSON: ${e instanceof Error ? e.message : "Unknown JSON error."}`);
	}
	if (!W(t)) return ng("Import payload must be a JSON object.");
	let n = Object.keys(t).find((e) => ![
		"definition",
		"format",
		"version"
	].includes(e));
	if (n) return ng(`${n} is not supported by species definition export version 1.`);
	if (t.format !== "wfrp4e-customizer-species-definition") return ng(`Import payload format must be "${Wh}".`);
	if (t.version !== 1) return ng("Import payload version must be 1.");
	if (!("definition" in t)) return ng("Import payload must include a definition object.");
	let r = zh(t.definition);
	if (r) return ng(r);
	let i = qh(t.definition);
	return i.ok ? {
		definition: Yh(i.definition),
		ok: !0
	} : i;
}
function qh(e) {
	let t = Jh(e);
	if (t) return ng(t);
	let n = gu({
		definitions: [e],
		showGeneratedConfigTab: !1
	}).definitions[0];
	return n ? {
		definition: n,
		ok: !0
	} : ng("definition could not be normalized as a Species Builder definition.");
}
function Jh(e) {
	if (!W(e)) return "definition must be a JSON object.";
	if (typeof e.key != "string" || !e.key.trim()) return "definition.key must be a non-empty string.";
	if (typeof e.name != "string" || !e.name.trim()) return "definition.name must be a non-empty string.";
	if ("includeInExtraSpecies" in e && typeof e.includeInExtraSpecies != "boolean") return "definition.includeInExtraSpecies must be a boolean.";
	if ("subspecies" in e && !Array.isArray(e.subspecies)) return "definition.subspecies must be an array.";
	let t = e.subspecies ?? [];
	for (let [e, n] of t.entries()) {
		if (!W(n)) return `definition.subspecies[${e}] must be a JSON object.`;
		if (typeof n.key != "string" || !n.key.trim()) return `definition.subspecies[${e}].key must be a non-empty string.`;
		if (typeof n.name != "string" || !n.name.trim()) return `definition.subspecies[${e}].name must be a non-empty string.`;
	}
	return "";
}
function Yh(e) {
	let t = {
		...e,
		careerTable: tg(e.careerTable),
		subspecies: e.subspecies?.map(Xh)
	};
	return e.linkedSkills && (t.linkedSkills = e.linkedSkills.map(Zh), t.skills = yc(t.linkedSkills)), e.linkedTalents && (t.linkedTalents = e.linkedTalents.map(Qh), t.talents = bc(t.linkedTalents)), e.linkedTraits && (t.linkedTraits = e.linkedTraits.map(Zh), t.traits = yc(t.linkedTraits)), e.talentReplacementRows && (t.talentReplacementRows = e.talentReplacementRows.map($h), t.talentReplacements = _c(t.talentReplacementRows)), e.careerReplacementRows && (t.careerReplacementRows = e.careerReplacementRows.map(eg), t.careerReplacements = vc(t.careerReplacementRows)), t;
}
function Xh(e) {
	let t = {
		...e,
		careerTable: tg(e.careerTable)
	};
	return e.talentReplacementRows && (t.talentReplacementRows = e.talentReplacementRows.map($h), t.talentReplacements = _c(t.talentReplacementRows)), t;
}
function Zh(e) {
	return { name: fc(e) };
}
function Qh(e) {
	return { choices: e.choices.map(Zh) };
}
function $h(e) {
	return {
		replacement: Zh(e.replacement),
		rolled: Zh(e.rolled)
	};
}
function eg(e) {
	return {
		replacements: e.replacements.map(Zh),
		rolled: Zh(e.rolled)
	};
}
function tg(e) {
	return e ? { rows: e.rows.map((e) => ({ name: e.name })) } : void 0;
}
function ng(e) {
	return {
		error: e,
		ok: !1
	};
}
//#endregion
//#region src/view/apps/species-builder/components/SpeciesDefinitionPortability.vue?vue&type=script&setup=true&lang.ts
var rg = ["disabled"], ig = ["onKeydown"], ag = { class: "dui-modal-box" }, og = { id: "species-portability-title" }, sg = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "note"
}, cg = {
	key: 1,
	class: "dui-fieldset"
}, lg = {
	key: 0,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, ug = ["disabled", "value"], dg = ["disabled"], fg = {
	key: 2,
	class: "dui-divider"
}, pg = { class: "dui-fieldset" }, mg = ["disabled"], hg = ["disabled", "value"], gg = ["disabled"], _g = {
	key: 3,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, vg = {
	key: 4,
	class: "dui-alert dui-alert-info"
}, yg = {
	key: 5,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, bg = { "aria-live": "polite" }, xg = { class: "dui-modal-action" }, Sg = ["disabled"], Cg = /* @__PURE__ */ j({
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
		let n = e, r = t, i = /* @__PURE__ */ O(), a = lm(), o = /* @__PURE__ */ O(""), s = /* @__PURE__ */ O(""), c = /* @__PURE__ */ O(""), l = /* @__PURE__ */ O(), u = V(() => {
			if (!n.definition) return {
				error: "Select a species before exporting.",
				text: ""
			};
			try {
				return {
					error: "",
					text: Gh(n.definition)
				};
			} catch (e) {
				return {
					error: e instanceof Error ? e.message : "The selected species cannot be exported.",
					text: ""
				};
			}
		}), d = V(() => !!l.value && n.existingKeys.includes(ss(l.value?.key ?? "")));
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
			let e = Kh(s.value);
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
		return (t, n) => (P(), F(N, null, [L("button", {
			class: "app:w-full app:whitespace-nowrap",
			disabled: e.isDisabled,
			type: "button",
			onClick: f
		}, [L("i", {
			"aria-hidden": "true",
			class: E(e.isImportOnly ? "fa-solid fa-file-import" : "fa-solid fa-arrow-right-arrow-left")
		}, null, 2), z(" " + D(e.isImportOnly ? "Import Species" : "Import / Export"), 1)], 8, rg), e.dialogHost ? (P(), I(fr, {
			key: 0,
			to: e.dialogHost
		}, [L("dialog", {
			ref_key: "dialog",
			ref: i,
			"aria-labelledby": "species-portability-title",
			class: "dui-modal",
			onClose: m,
			onKeydown: es(Qo(p, ["stop", "prevent"]), ["esc"]),
			onKeyup: n[0] ||= es(Qo(() => {}, ["stop"]), ["esc"])
		}, [L("section", ag, [
			L("h2", og, D(e.isImportOnly ? "Import Species Definition" : "Transfer Species Definition"), 1),
			n[7] ||= L("p", null, " Imports are staged here and never replace the current draft. Exported JSON contains only project-owned authoring data and names, without Foundry document links. ", -1),
			e.isImportOnly ? (P(), F("div", sg, [...n[1] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-lock"
			}, null, -1), L("span", null, " Installed species cannot be exported because their source package owns the definition. You can still import a separate custom species below. ", -1)]])) : (P(), F("fieldset", cg, [
				n[3] ||= L("legend", { class: "dui-fieldset-legend" }, "Export selected species", -1),
				u.value.error ? (P(), F("p", lg, D(u.value.error), 1)) : (P(), F("textarea", {
					key: 1,
					"aria-label": "Species definition export JSON",
					class: "dui-textarea",
					disabled: e.isDisabled,
					readonly: "",
					rows: "10",
					value: u.value.text
				}, null, 8, ug)),
				L("button", {
					class: "dui-btn",
					disabled: e.isDisabled || !u.value.text,
					type: "button",
					onClick: v
				}, [...n[2] ||= [L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-copy"
				}, null, -1), z(" Copy Export ", -1)]], 8, dg)
			])),
			e.isImportOnly ? B("", !0) : (P(), F("div", fg, "Import")),
			L("fieldset", pg, [
				n[4] ||= L("legend", { class: "dui-fieldset-legend" }, "Choose or paste a species export", -1),
				L("input", {
					accept: "application/json,.json",
					"aria-label": "Choose species definition JSON",
					class: "dui-file-input",
					disabled: e.isDisabled,
					type: "file",
					onChange: _
				}, null, 40, mg),
				L("textarea", {
					"aria-label": "Species definition import JSON",
					class: "dui-textarea",
					disabled: e.isDisabled,
					placeholder: "Paste a Species Builder export here",
					rows: "8",
					value: s.value,
					onInput: h
				}, null, 40, hg),
				L("button", {
					class: "dui-btn",
					disabled: e.isDisabled || !s.value.trim(),
					type: "button",
					onClick: g
				}, " Validate Import ", 8, gg)
			]),
			o.value ? (P(), F("p", _g, [n[5] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), L("span", null, D(o.value), 1)])) : l.value ? (P(), F("section", vg, [n[6] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-eye"
			}, null, -1), L("div", null, [
				L("strong", null, D(l.value.name), 1),
				L("p", null, "Key: " + D(l.value.key), 1),
				L("p", null, D(l.value.subspecies?.length ?? 0) + " subspecies", 1)
			])])) : B("", !0),
			d.value ? (P(), F("p", yg, " A species with key " + D(l.value?.key) + " already exists. Change the key in the import JSON and validate it again. ", 1)) : B("", !0),
			L("p", bg, D(c.value), 1),
			L("div", xg, [L("button", {
				class: "dui-btn dui-btn-primary",
				disabled: e.isDisabled || !l.value || d.value,
				type: "button",
				onClick: y
			}, " Add Imported Species ", 8, Sg), L("button", {
				class: "dui-btn dui-btn-ghost",
				type: "button",
				onClick: p
			}, "Close")])
		]), n[8] ||= L("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [L("button", {
			"aria-label": "Close transfer dialog",
			type: "submit"
		}, "Close")], -1)], 40, ig)], 8, ["to"])) : B("", !0)], 64));
	}
}), wg = ["onKeydown"], Tg = {
	key: 0,
	class: "dui-modal-box"
}, Eg = { class: "dui-modal-action" }, Dg = /* @__PURE__ */ j({
	__name: "UnsafeSaveConfirmationSubView",
	props: { isOpen: { type: Boolean } },
	emits: ["close", "confirm"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ O(), a = lm();
		function o() {
			i.value?.close();
		}
		function s() {
			n.isOpen && r("close"), a.restore();
		}
		return Zn(() => n.isOpen, async (e) => {
			e ? (a.capture(), await Mn(), n.isOpen && !i.value?.open && i.value?.showModal()) : i.value?.open && i.value.close();
		}, {
			flush: "post",
			immediate: !0
		}), (t, n) => (P(), F("dialog", {
			ref_key: "dialog",
			ref: i,
			class: "dui-modal",
			"aria-describedby": "species-builder-unsafe-save-message",
			"aria-labelledby": "species-builder-unsafe-save-title",
			onClose: s,
			onKeydown: es(Qo(o, ["stop", "prevent"]), ["esc"]),
			onKeyup: n[1] ||= es(Qo(() => {}, ["stop"]), ["esc"])
		}, [e.isOpen ? (P(), F("section", Tg, [
			n[2] ||= L("h2", { id: "species-builder-unsafe-save-title" }, "Save Despite Character-Creation Errors?", -1),
			n[3] ||= L("div", {
				id: "species-builder-unsafe-save-message",
				class: "dui-alert dui-alert-warning app:mt-3",
				role: "alert"
			}, [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-triangle-exclamation"
			}), L("span", null, " These changes contain errors for species that can be rolled or selected. Saving is unsafe and may cause species selection or character creation to fail. ")], -1),
			L("div", Eg, [L("button", {
				class: "dui-btn dui-btn-warning",
				type: "button",
				onClick: n[0] ||= (e) => r("confirm")
			}, " Save Anyway "), L("button", {
				autofocus: "",
				class: "dui-btn",
				type: "button",
				onClick: o
			}, "Cancel")])
		])) : B("", !0), n[4] ||= L("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [L("button", {
			"aria-label": "Cancel unsafe save",
			type: "submit"
		}, "Close")], -1)], 40, wg));
	}
});
//#endregion
//#region src/view/apps/species-builder/components/unsafe-save.ts
function Og(e) {
	let t = /* @__PURE__ */ O(!1);
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
function kg(e) {
	let t = /* @__PURE__ */ O(null);
	function n() {
		let n = e.selectedDefinition.value;
		n && (t.value = {
			kind: "species",
			message: `Delete species "${Ag(n)}"?`
		});
	}
	function r(n) {
		let r = e.selectedDefinition.value?.subspecies?.[n];
		r && (t.value = {
			index: n,
			kind: "subspecies",
			message: `Delete subspecies "${Ag(r)}"?`
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
function Ag(e) {
	return e.name.trim() || e.key.trim() || "Untitled Species";
}
//#endregion
//#region src/view/apps/species-builder/components/validation/species-builder-validation-summary.ts
var jg = [
	"careerTable",
	"randomTalents",
	"talentReplacement",
	"careerReplacement"
], Mg = {
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
function Ng(e) {
	return e.filter((e) => e.code !== "species-table-definition-not-ready" && e.code !== "species-table-runtime-not-ready");
}
function Pg(e) {
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
		subspeciesTab: Bg(e.section),
		tableTab: Hg(e.section) ? e.section : void 0
	} : Hg(e.section) ? {
		definitionIndex: e.definitionIndex,
		editorTab: "tables",
		kind: "definition",
		tableTab: e.section
	} : {
		definitionIndex: e.definitionIndex,
		editorTab: zg(e.section),
		kind: "definition"
	};
}
function Fg(e, t) {
	return e.map((e, t) => ({
		index: t,
		issue: e
	})).sort((e, t) => Ug(e.issue) - Ug(t.issue) || e.index - t.index).map(({ issue: e }) => ({
		context: Lg(e, t),
		issue: e
	}));
}
function Ig(e, t) {
	let n = e?.destination;
	return n?.kind === "subspecies" && n.subspeciesIndex === t ? {
		tab: n.subspeciesTab,
		tableTab: n.tableTab
	} : void 0;
}
function Lg(e, t) {
	if (e.scope === "species-table") return e.rowIndex === void 0 ? "Species Table" : `Species Table · Row ${e.rowIndex + 1}`;
	let n = t[e.definitionIndex ?? -1], r = Rg(n, "Unknown Species");
	if (e.scope !== "subspecies") return `${r} · ${Mg[e.section]}`;
	let i = n?.subspecies?.[e.subspeciesIndex ?? -1];
	return `${r} / ${Rg(i, "Unknown Subspecies")} · ${Vg(e.section)}`;
}
function Rg(e, t) {
	return e?.name.trim() || e?.key.trim() || t;
}
function zg(e) {
	return e === "subspecies" ? "subspecies" : e === "species-table" || Hg(e) ? "details" : e;
}
function Bg(e) {
	return Hg(e) ? "tables" : e === "skills" || e === "traits" ? "changes" : e === "talents" || e === "wounds" ? e : "details";
}
function Vg(e) {
	return e === "subspecies" || e === "attributes" || e === "details" ? "Details" : e === "skills" || e === "traits" ? "Skills & Traits" : Mg[e];
}
function Hg(e) {
	return jg.includes(e);
}
function Ug(e) {
	return Hm(e) === "error" ? 0 : 1;
}
//#endregion
//#region src/view/apps/species-builder/components/validation/SpeciesBuilderValidationSummaryDialog.vue?vue&type=script&setup=true&lang.ts
var Wg = ["onKeydown"], Gg = { class: "dui-modal-box app:max-w-3xl" }, Kg = { class: "app:flex app:items-start app:justify-between app:gap-4" }, qg = { class: "app:flex app:flex-wrap app:gap-2" }, Jg = {
	key: 0,
	class: "dui-badge dui-badge-error"
}, Yg = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, Xg = { class: "dui-list app:max-h-96 app:overflow-y-auto" }, Zg = ["autofocus", "onClick"], Qg = {
	key: 0,
	"aria-hidden": "true",
	class: "fa-solid fa-circle-exclamation app:text-error"
}, $g = {
	key: 1,
	"aria-hidden": "true",
	class: "fa-solid fa-triangle-exclamation app:text-warning"
}, e_ = { class: "app:flex app:min-w-0 app:flex-1 app:flex-col app:items-start" }, t_ = { class: "app:sr-only" }, n_ = /* @__PURE__ */ j({
	__name: "SpeciesBuilderValidationSummaryDialog",
	props: {
		definitions: {},
		isOpen: { type: Boolean },
		issues: {}
	},
	emits: ["close", "selectIssue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ O(), a = lm(), o = /* @__PURE__ */ O(), s = V(() => Fg(n.issues, n.definitions)), c = V(() => n.issues.filter((e) => Hm(e) === "error").length), l = V(() => n.issues.length - c.value);
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
		return Zn(() => n.isOpen, async (e) => {
			e ? (a.capture(), await Mn(), n.isOpen && !i.value?.open && i.value?.showModal()) : i.value?.open && i.value.close();
		}, {
			flush: "post",
			immediate: !0
		}), (e, t) => (P(), F("dialog", {
			ref_key: "dialog",
			ref: i,
			"aria-describedby": "species-builder-validation-description",
			"aria-labelledby": "species-builder-validation-title",
			class: "dui-modal",
			onClose: f,
			onKeydown: es(Qo(u, ["stop", "prevent"]), ["esc"]),
			onKeyup: t[0] ||= es(Qo(() => {}, ["stop"]), ["esc"])
		}, [L("section", Gg, [
			L("header", Kg, [L("div", null, [L("div", qg, [c.value > 0 ? (P(), F("span", Jg, D(c.value) + " " + D(c.value === 1 ? "error" : "errors"), 1)) : B("", !0), l.value > 0 ? (P(), F("span", Yg, D(l.value) + " " + D(l.value === 1 ? "warning" : "warnings"), 1)) : B("", !0)]), t[1] ||= L("h2", { id: "species-builder-validation-title" }, "Character-Creation Validation", -1)]), L("button", {
				"aria-label": "Close validation summary",
				class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square",
				type: "button",
				onClick: u
			}, [...t[2] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-xmark"
			}, null, -1)]])]),
			t[4] ||= L("p", { id: "species-builder-validation-description" }, " Errors affect species that can currently be rolled or selected. Warnings mark inactive draft or reference data. Choose an item to open the most relevant editor section. ", -1),
			L("ul", Xg, [(P(!0), F(N, null, M(s.value, (e, n) => (P(), F("li", {
				key: `${e.issue.code}-${n}`,
				class: "dui-list-row app:p-0"
			}, [L("button", {
				autofocus: n === 0,
				class: E(["dui-btn dui-btn-outline app:h-auto app:w-full app:justify-start app:whitespace-normal app:p-3 app:text-left", k(Hm)(e.issue) === "error" ? "dui-btn-error" : "dui-btn-warning"]),
				type: "button",
				onClick: (t) => d(e.issue)
			}, [
				k(Hm)(e.issue) === "error" ? (P(), F("i", Qg)) : (P(), F("i", $g)),
				L("span", e_, [
					L("strong", null, D(e.context), 1),
					L("span", t_, D(k(Hm)(e.issue) === "error" ? "Error:" : "Warning:"), 1),
					L("span", null, D(e.issue.message), 1)
				]),
				t[3] ||= L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-chevron-right"
				}, null, -1)
			], 10, Zg)]))), 128))]),
			L("div", { class: "dui-modal-action" }, [L("button", {
				class: "dui-btn dui-btn-ghost",
				type: "button",
				onClick: u
			}, "Close")])
		]), t[5] ||= L("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [L("button", {
			"aria-label": "Close validation summary",
			type: "submit"
		}, "Close")], -1)], 40, Wg));
	}
});
//#endregion
//#region src/view/apps/species-builder/components/validation/use-validation-summary.ts
function r_(e) {
	let t = /* @__PURE__ */ O(!1), n = /* @__PURE__ */ O(), r = V(() => Ng(e.issues.value)), i = 0;
	function a() {
		r.value.length > 0 && (t.value = !0);
	}
	function o() {
		t.value = !1;
	}
	async function s(t) {
		let r = Pg(t);
		if (o(), n.value = void 0, r.kind === "project") {
			e.selectProjectTab(r.tab);
			return;
		}
		if (e.selectDefinition(r.definitionIndex), r.kind === "definition") {
			r.tableTab ? e.openTableTab(r.tableTab) : e.openEditorTab(r.editorTab);
			return;
		}
		e.openEditorTab("subspecies"), await Mn(), n.value = {
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
//#region src/functions/species-builder/example-species/monster-species/shared.ts
function J(e, t, n, r) {
	return {
		characteristics: a_(...n),
		key: e,
		name: t,
		...r
	};
}
function Y(e, t, n, r = {}) {
	return {
		...n ? { characteristics: a_(...n) } : {},
		key: e,
		name: t,
		...r
	};
}
function X(...e) {
	return { rows: e.map((e) => ({ name: e })) };
}
function i_(...e) {
	return {
		definitions: e,
		runtimeSpeciesExtensions: []
	};
}
function a_(e, t, n, r, i, a, o, s, c, l) {
	return {
		ag: o_(a),
		bs: o_(t),
		dex: o_(o),
		fel: o_(l),
		i: o_(i),
		int: o_(s),
		s: o_(n),
		t: o_(r),
		wp: o_(c),
		ws: o_(e)
	};
}
function o_(e) {
	return e === -1 ? "0" : `2d10+${e}`;
}
//#endregion
//#region src/functions/species-builder/example-species/monster-species/backlog/beastfolk.ts
function s_() {
	return J("apeman", "Apeman", [
		30,
		5,
		35,
		30,
		20,
		25,
		15,
		20,
		25,
		10
	], {
		age: "4d10+12",
		careerTable: X("Herbalist", "Hunter", "Scout", "Warrior", "Warden"),
		extra: 1,
		fate: 1,
		height: {
			die: "1d10",
			feet: 5,
			inches: 6
		},
		includeInExtraSpecies: !0,
		movement: 5,
		resilience: 2,
		skills: [
			"Athletics",
			"Climb",
			"Endurance",
			"Intimidate",
			"Language (Apeman)",
			"Melee (Brawling)",
			"Outdoor Survival",
			"Perception",
			"Stealth (Rural)"
		],
		talents: [
			"Arboreal",
			"Hardy",
			"Strong Back",
			"Very Strong"
		],
		traits: [
			"Arboreal",
			"Bite (3)",
			"Night Vision"
		]
	});
}
function c_() {
	return J("hawk-person", "Hawk Person", [
		20,
		25,
		20,
		20,
		35,
		35,
		15,
		20,
		25,
		10
	], {
		age: "3d10+12",
		careerTable: X("Hunter", "Messenger", "Scout", "Soldier", "Warden"),
		extra: 1,
		fate: 1,
		height: {
			die: "1d10",
			feet: 4,
			inches: 8
		},
		includeInExtraSpecies: !0,
		movement: 3,
		resilience: 2,
		skills: [
			"Athletics",
			"Cool",
			"Dodge",
			"Language (Reikspiel)",
			"Navigation",
			"Outdoor Survival",
			"Perception",
			"Ranged (Bow)",
			"Track"
		],
		talents: [
			"Acute Sense (Sight)",
			"Orientation",
			"Rover",
			"Sharpshooter"
		],
		traits: [
			"Beak (2)",
			"Flight (60)",
			"Talons (3)"
		]
	});
}
function l_() {
	return J("monkey-person", "Monkey Person", [
		20,
		20,
		20,
		20,
		30,
		35,
		30,
		25,
		20,
		20
	], {
		age: "4d10+10",
		careerTable: X("Entertainer", "Envoy", "Hunter", "Scout", "Thief", "Warrior"),
		extra: 2,
		fate: 1,
		height: {
			die: "1d10",
			feet: 4,
			inches: 0
		},
		includeInExtraSpecies: !0,
		movement: 5,
		resilience: 1,
		skills: [
			"Athletics",
			"Climb",
			"Dodge",
			"Entertain (Any)",
			"Language (Cathayan)",
			"Melee (Polearm)",
			"Outdoor Survival",
			"Perception",
			"Sleight of Hand",
			"Stealth (Any)"
		],
		talents: [
			"Alley Cat",
			"Orientation",
			"Rover",
			"Trick Riding"
		],
		traits: ["Arboreal", "Prehensile Tail"]
	});
}
function u_() {
	return J("satyr", "Satyr", [
		25,
		15,
		25,
		25,
		30,
		30,
		20,
		20,
		25,
		25
	], {
		age: "5d10+15",
		careerTable: X("Entertainer", "Hunter", "Mystic", "Outlaw", "Scout"),
		extra: 2,
		fate: 1,
		height: {
			die: "1d10",
			feet: 5,
			inches: 0
		},
		includeInExtraSpecies: !0,
		movement: 5,
		resilience: 1,
		skills: [
			"Athletics",
			"Charm",
			"Consume Alcohol",
			"Entertain (Music)",
			"Language (Beast Tongue)",
			"Lore (Woodlands)",
			"Outdoor Survival",
			"Perception",
			"Stealth (Rural)"
		],
		talents: [
			"Musician",
			"Night Vision",
			"Rover",
			"Suave"
		],
		traits: [
			"Horns (3)",
			"Skittish",
			"Stride"
		]
	});
}
function d_() {
	return J("tigerman", "Tigerman", [
		35,
		15,
		35,
		30,
		35,
		35,
		15,
		20,
		30,
		15
	], {
		age: "4d10+12",
		careerTable: X("Envoy", "Hunter", "Mercenary", "Scout", "Warrior"),
		extra: 1,
		fate: 1,
		height: {
			die: "1d10",
			feet: 6,
			inches: 0
		},
		includeInExtraSpecies: !0,
		movement: 5,
		resilience: 2,
		skills: [
			"Athletics",
			"Cool",
			"Intimidate",
			"Language (Cathayan)",
			"Melee (Brawling)",
			"Outdoor Survival",
			"Perception",
			"Stealth (Rural)",
			"Swim",
			"Track"
		],
		talents: [
			"Acute Sense (Sight)",
			"Combat Reflexes",
			"Night Vision",
			"Rover"
		],
		traits: [
			"Bite (4)",
			"Claws (5)",
			"Stride"
		]
	});
}
//#endregion
//#region src/functions/species-builder/example-species/monster-species/backlog/other-peoples.ts
function f_() {
	return J("albion-giant", "Albion Giant", [
		25,
		20,
		40,
		40,
		25,
		15,
		10,
		25,
		30,
		15
	], {
		age: "10d10+40",
		careerTable: X("Druid", "Hunter", "Labourer", "Mystic", "Warrior"),
		extra: 1,
		fate: 1,
		height: {
			die: "2d10",
			feet: 12,
			inches: 0
		},
		includeInExtraSpecies: !0,
		movement: 6,
		resilience: 3,
		skills: [
			"Athletics",
			"Endurance",
			"Intimidate",
			"Language (Albion)",
			"Lore (Albion)",
			"Melee (Two-Handed)",
			"Outdoor Survival",
			"Perception"
		],
		talents: [
			"Hardy",
			"Second Sight",
			"Strong Back",
			"Very Strong"
		],
		traits: [
			"Armour (1)",
			"Magic Resistance (1)",
			"Size (Enormous)",
			"Stride"
		],
		woundFormula: { formula: "@sb * 4 + @tb * 8 + @wpb * 2" }
	});
}
function p_() {
	return J("centaur", "Centaur", [
		25,
		20,
		25,
		30,
		25,
		20,
		15,
		20,
		25,
		20
	], {
		age: "5d10+15",
		careerTable: X("Entertainer", "Herder", "Hunter", "Scout", "Warrior"),
		extra: 1,
		fate: 1,
		height: {
			die: "1d10",
			feet: 6,
			inches: 6
		},
		includeInExtraSpecies: !0,
		movement: 8,
		resilience: 2,
		skills: [
			"Athletics",
			"Entertain (Music)",
			"Language (Centaur)",
			"Lore (Woodlands)",
			"Melee (Polearm)",
			"Outdoor Survival",
			"Perception",
			"Ranged (Bow)",
			"Track"
		],
		talents: [
			"Musician",
			"Orientation",
			"Rover",
			"Roughrider"
		],
		traits: [
			"Size (Large)",
			"Stride",
			"Trample (4)"
		],
		woundFormula: { formula: "@sb * 3 + @tb * 6 + @wpb * 2" }
	});
}
function m_() {
	return J("half-orc", "Half-Orc", [
		25,
		15,
		25,
		25,
		20,
		20,
		20,
		20,
		25,
		15
	], {
		age: "3d10+15",
		careerTable: X("Guard", "Mercenary", "Outlaw", "Scout", "Soldier", "Warrior"),
		extra: 1,
		fate: 1,
		height: {
			die: "1d10",
			feet: 5,
			inches: 2
		},
		includeInExtraSpecies: !0,
		movement: 4,
		resilience: 2,
		skills: [
			"Athletics",
			"Cool",
			"Endurance",
			"Intimidate",
			"Language (Goblin Tongue)",
			"Melee (Basic)",
			"Outdoor Survival",
			"Perception"
		],
		talents: [
			"Hardy",
			"Night Vision",
			"Resolute",
			"Very Strong"
		],
		traits: ["Animosity (Orcs)", "Belligerent"]
	});
}
function h_() {
	return J("mossling", "Mossling", [
		15,
		25,
		15,
		20,
		30,
		30,
		30,
		25,
		25,
		20
	], {
		age: "5d10+15",
		careerTable: X("Herbalist", "Hunter", "Mystic", "Scout", "Trader"),
		extra: 2,
		fate: 2,
		height: {
			die: "1d10",
			feet: 3,
			inches: 0
		},
		includeInExtraSpecies: !0,
		movement: 4,
		resilience: 1,
		skills: [
			"Climb",
			"Heal",
			"Language (Mossling)",
			"Lore (Herbs)",
			"Outdoor Survival",
			"Perception",
			"Ranged (Sling)",
			"Stealth (Rural)",
			"Trade (Herbalist)"
		],
		talents: [
			"Acute Sense (Smell)",
			"Resistance (Poison)",
			"Rover",
			"Small"
		],
		traits: [
			"Arboreal",
			"Camouflage",
			"Size (Small)"
		]
	});
}
//#endregion
//#region src/functions/species-builder/example-species/monster-species/beastmen.ts
function g_() {
	return J("beastman", "Beastman", [
		30,
		20,
		20,
		30,
		20,
		25,
		15,
		15,
		25,
		15
	], {
		age: "2d10+16",
		careerTable: X("Warrior", "Outlaw", "Hunter", "Scout", "Trapper", "Zealot", "Mystic", "Pit Fighter"),
		extra: 2,
		fate: 1,
		height: {
			die: "1d10",
			feet: 5,
			inches: 6
		},
		includeInExtraSpecies: !0,
		movement: 4,
		resilience: 1,
		skills: [
			"Athletics",
			"Dodge",
			"Haggle",
			"Language (Beast Tongue)",
			"Lore (Beastmen)",
			"Lore (Chaos)",
			"Melee (Basic)",
			"Outdoor Survival",
			"Perception",
			"Perform (Dancing)",
			"Play (Drums)",
			"Pray",
			"Set Trap",
			"Stealth (Rural)"
		],
		subspecies: [Y("gor", "Gor", [
			35,
			15,
			25,
			35,
			20,
			20,
			10,
			15,
			30,
			10
		], {
			careerTable: X("Warrior", "Pit Fighter", "Outlaw", "Hunter", "Zealot"),
			skillsAdded: [
				"Consume Alcohol",
				"Intimidate",
				"Play (Horn)"
			],
			skillsRemoved: [
				"Haggle",
				"Play (Drums)",
				"Set Trap"
			],
			talentsAdded: ["Furious Assault", "Menacing"],
			traitsAdded: ["Horns (3)"]
		}), Y("ungor", "Ungor", [
			25,
			30,
			15,
			25,
			30,
			30,
			20,
			15,
			25,
			10
		], {
			careerTable: X("Scout", "Hunter", "Trapper", "Outlaw", "Servant"),
			skillsAdded: [
				"Play (Horn)",
				"Ranged (Bow)",
				"Track"
			],
			skillsRemoved: [
				"Haggle",
				"Melee (Basic)",
				"Play (Drums)"
			],
			talentsAdded: ["Acute Sense (Hearing), Acute Sense (Smell)", "Rover"]
		})],
		talents: ["Night Vision", "Ruinous Mark"],
		traits: ["Arboreal"]
	});
}
function __() {
	return J("lakeman", "Lakeman", [
		25,
		15,
		25,
		30,
		25,
		20,
		15,
		15,
		25,
		5
	], {
		age: "2d10+12",
		careerTable: X("Hunter", "Scout", "Outlaw", "Riverwarden", "Trapper"),
		extra: 2,
		fate: 1,
		height: {
			die: "1d10",
			feet: 5,
			inches: 2
		},
		includeInExtraSpecies: !0,
		movement: 4,
		resilience: 1,
		skills: [
			"Athletics",
			"Dodge",
			"Language (Beast Tongue)",
			"Lore (Bretonnia)",
			"Navigation",
			"Outdoor Survival",
			"Perception",
			"Row",
			"Stealth (Rural)",
			"Swim",
			"Track"
		],
		talents: [
			"Acute Sense (Smell)",
			"Night Vision",
			"Rover"
		],
		traits: [
			"Amphibious",
			"Bite (3)",
			"Cold Blooded",
			"Swamp-strider"
		]
	});
}
function v_() {
	return J("menfish", "Menfish", [
		20,
		10,
		10,
		10,
		20,
		15,
		20,
		15,
		20,
		5
	], {
		age: "2d10+10",
		careerTable: X("Hunter", "Outlaw", "Riverwarden", "Boatman", "Scout"),
		extra: 2,
		fate: 1,
		height: {
			die: "1d10",
			feet: 5,
			inches: 0
		},
		includeInExtraSpecies: !0,
		movement: 4,
		resilience: 1,
		skills: [
			"Dodge",
			"Intuition",
			"Language (Menfish)",
			"Lore (Coasts)",
			"Navigation",
			"Outdoor Survival",
			"Perception",
			"Row",
			"Sail",
			"Stealth (Rural)",
			"Swim"
		],
		talents: [
			"Acute Sense (Vibration)",
			"Night Vision",
			"Orientation"
		],
		traits: [
			"Afraid (Fire, Sunlight)",
			"Amphibious",
			"Animosity (Other Species)",
			"Bite (4)",
			"Cold Blooded",
			"Swamp-strider"
		]
	});
}
function y_() {
	return J("minotaur", "Minotaur", [
		35,
		15,
		35,
		35,
		10,
		25,
		15,
		10,
		20,
		5
	], {
		age: "3d10+15",
		careerTable: X("Warrior", "Pit Fighter", "Guard", "Hunter", "Outlaw"),
		extra: 1,
		fate: 0,
		height: {
			die: "1d10",
			feet: 7,
			inches: 0
		},
		includeInExtraSpecies: !0,
		movement: 6,
		resilience: 2,
		skills: [
			"Athletics",
			"Consume Alcohol",
			"Endurance",
			"Intimidate",
			"Language (Beast Tongue)",
			"Lore (Beastmen)",
			"Melee (Basic)",
			"Outdoor Survival",
			"Perception",
			"Track"
		],
		talents: [
			"Furious Assault",
			"Hardy",
			"Menacing",
			"Night Vision",
			"Very Strong"
		],
		traits: [
			"Arboreal",
			"Horns (5)",
			"Hungry",
			"Mutation",
			"Size (Large)"
		]
	});
}
//#endregion
//#region src/functions/species-builder/example-species/monster-species/discoveries.ts
function b_() {
	return J("medusa", "Medusa", [
		25,
		35,
		25,
		35,
		35,
		15,
		25,
		35,
		35,
		10
	], {
		age: "8d10+20",
		careerTable: X("Hunter", "Mystic", "Outlaw", "Spy", "Warrior", "Wizard"),
		extra: 1,
		fate: 1,
		height: {
			die: "1d10",
			feet: 5,
			inches: 2
		},
		includeInExtraSpecies: !0,
		movement: 4,
		resilience: 2,
		skills: [
			"Cool",
			"Dodge",
			"Intimidate",
			"Intuition",
			"Lore (Monsters)",
			"Melee (Basic)",
			"Perception",
			"Ranged (Sling)",
			"Stealth (Any)"
		],
		subspecies: [Y("armoured-medusa", "Armoured Medusa", void 0, {
			skillsAdded: ["Endurance"],
			talentsAdded: ["Hardy", "Very Resilient"],
			traitsAdded: ["Armour (2)"]
		}), Y("serpentine-medusa", "Serpentine Medusa", void 0, {
			movement: 3,
			skillsAdded: ["Athletics", "Swim"],
			talentsAdded: ["Resistance (Poison)"],
			traitsAdded: ["Snake Body", "Tail Attack (5)"]
		})],
		talents: [
			"Menacing",
			"Night Vision",
			"Resistance (Poison)",
			"Strong-minded"
		],
		traits: [
			"Fear (1)",
			"Petrifying Gaze",
			"Snake Hair (4)",
			"Venom"
		]
	});
}
function x_() {
	return J("pegasus", "Pegasus", [
		25,
		0,
		35,
		30,
		25,
		35,
		10,
		20,
		25,
		15
	], {
		age: "5d10+10",
		careerTable: X("Entertainer", "Hunter", "Messenger", "Scout", "Warden"),
		extra: 1,
		fate: 1,
		height: {
			die: "1d10",
			feet: 5,
			inches: 4
		},
		includeInExtraSpecies: !0,
		movement: 8,
		resilience: 2,
		skills: [
			"Athletics",
			"Cool",
			"Endurance",
			"Intuition",
			"Navigation",
			"Outdoor Survival",
			"Perception",
			"Stealth (Rural)"
		],
		subspecies: [Y("dark-pegasus", "Dark Pegasus", [
			35,
			0,
			35,
			30,
			15,
			30,
			10,
			15,
			25,
			10
		], {
			skillsAdded: ["Intimidate", "Lore (Chaos)"],
			talentsAdded: [
				"Dark Vision",
				"Menacing",
				"Resistance (Chaos)"
			],
			traitsAdded: ["Horns (4)"]
		})],
		talents: [
			"Acute Sense (Sight)",
			"Orientation",
			"Rover",
			"Strong-minded"
		],
		traits: [
			"Flight (100)",
			"Size (Large)",
			"Stride",
			"Telepathy",
			"Weapon (3)"
		],
		woundFormula: { formula: "@sb * 3 + @tb * 6 + @wpb * 2" }
	});
}
function S_() {
	return J("great-eagle", "Great Eagle", [
		35,
		5,
		30,
		25,
		35,
		35,
		5,
		25,
		30,
		15
	], {
		age: "6d10+15",
		careerTable: X("Envoy", "Hunter", "Messenger", "Scout", "Warden"),
		extra: 1,
		fate: 1,
		height: {
			die: "1d10",
			feet: 5,
			inches: 0
		},
		includeInExtraSpecies: !0,
		movement: 2,
		resilience: 2,
		skills: [
			"Athletics",
			"Cool",
			"Intuition",
			"Language (Eltharin)",
			"Navigation",
			"Outdoor Survival",
			"Perception",
			"Track"
		],
		talents: [
			"Acute Sense (Sight)",
			"Orientation",
			"Rover",
			"Strong-minded"
		],
		traits: [
			"Flight (120)",
			"Size (Large)",
			"Talons (5)"
		]
	});
}
function C_() {
	return J("naiad", "Naiad", [
		35,
		20,
		30,
		25,
		30,
		55,
		30,
		50,
		35,
		50
	], {
		age: "10d10+20",
		careerTable: X("Advisor", "Envoy", "Herbalist", "Mystic", "Scout", "Wizard"),
		extra: 1,
		fate: 1,
		height: {
			die: "1d10",
			feet: 5,
			inches: 0
		},
		includeInExtraSpecies: !0,
		movement: 8,
		resilience: 1,
		skills: [
			"Athletics",
			"Charm",
			"Dodge",
			"Intuition",
			"Lore (Rivers)",
			"Outdoor Survival",
			"Perception",
			"Swim"
		],
		talents: [
			"Attractive",
			"Rover",
			"Second Sight",
			"Strong-minded"
		],
		traits: [
			"Amphibious",
			"Cunning",
			"Magical",
			"Ward (10+)"
		]
	});
}
//#endregion
//#region src/functions/species-builder/example-species/monster-species/elves.ts
function w_() {
	return J("sea-elf", "Sea Elf", [
		30,
		30,
		20,
		20,
		40,
		30,
		30,
		30,
		30,
		20
	], {
		age: "10d10+30",
		careerTable: X("Boatman", "Envoy", "Merchant", "Navigator", "Seaman", "Wizard"),
		extra: 0,
		fate: 0,
		height: {
			die: "1d10",
			feet: 5,
			inches: 8
		},
		includeInExtraSpecies: !0,
		movement: 5,
		resilience: 0,
		skills: [
			"Athletics",
			"Cool",
			"Language (Eltharin)",
			"Lore (Elves)",
			"Navigation",
			"Perception",
			"Row",
			"Sail",
			"Swim",
			"Trade (Shipwright)"
		],
		talents: [
			"Acute Sense (Sight)",
			"Night Vision",
			"Read/Write",
			"Sea Legs",
			"Seasoned Traveller"
		],
		traits: ["Aquatic", "Sailor"]
	});
}
//#endregion
//#region src/functions/species-builder/example-species/monster-species/greenskins.ts
var T_ = X("Thief", "Outlaw", "Scout", "Hunter", "Rat Catcher", "Smuggler", "Beggar", "Entertainer", "Servant");
function E_() {
	return J("goblin", "Goblin", [
		15,
		25,
		20,
		20,
		10,
		25,
		20,
		20,
		10,
		10
	], {
		age: "2d10+8",
		careerTable: T_,
		extra: 3,
		fate: 2,
		height: {
			die: "1d10",
			feet: 3,
			inches: 8
		},
		includeInExtraSpecies: !0,
		movement: 4,
		randomTalents: {
			talents: 0,
			"talents-cowardly-goblins": 1
		},
		resilience: 1,
		skills: [
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
		],
		subspecies: D_(),
		talents: [
			"Night Vision",
			"Snivel",
			"Step Aside, Beneath Notice, Flee!"
		],
		traits: ["Afraid (Elves)"]
	});
}
function D_() {
	return [
		Y("forest", "Forest Goblin", [
			15,
			25,
			20,
			20,
			15,
			30,
			20,
			20,
			15,
			10
		], {
			careerTable: X("Hunter", "Scout", "Trapper", "Outlaw", "Herbalist"),
			skillsAdded: [
				"Animal Care",
				"Charm Animal",
				"Lore (Poison)",
				"Set Trap",
				"Stealth (Rural)"
			],
			talentsAdded: [
				"Rover",
				"Strider (Woodlands)",
				"Resistance (Poison)"
			],
			traitsAdded: ["Arboreal", "Venom (Challenging)"]
		}),
		Y("night", "Night Goblin", [
			20,
			25,
			20,
			25,
			10,
			25,
			20,
			20,
			10,
			10
		], {
			careerTable: X("Miner", "Herbalist", "Scout", "Hunter", "Outlaw"),
			skillsAdded: [
				"Charm Animal",
				"Ranged (Entangling)",
				"Set Trap",
				"Stealth (Underground)"
			],
			skillsRemoved: ["Gamble", "Stealth (Rural)"],
			talentsAdded: ["Resistance (Poison)", "Orientation, Sixth Sense"],
			traitsAdded: [
				"Dark Vision",
				"Infected",
				"Sun-Sick"
			]
		}),
		Y("hobgoblin", "Hobgoblin", [
			20,
			30,
			25,
			25,
			30,
			30,
			25,
			25,
			20,
			15
		], {
			careerTable: X("Cavalryman", "Scout", "Spy", "Assassin", "Outlaw", "Duellist"),
			skillsAdded: [
				"Language (Dark Tongue)",
				"Lore (Steppes)",
				"Melee (Basic)",
				"Ride (Wolf)",
				"Stealth (Rural)"
			],
			talentsAdded: [
				"Cat-tongued",
				"Rover",
				"Strike to Injure"
			],
			traitsAdded: ["Animosity (Greenskins)"]
		}),
		Y("gnoblar", "Gnoblar", [
			10,
			25,
			15,
			15,
			10,
			25,
			25,
			20,
			10,
			10
		], {
			careerTable: X("Servant", "Beggar", "Thief", "Rat Catcher", "Entertainer", "Pedlar"),
			randomTalents: { talents: 1 },
			skillsAdded: [
				"Charm",
				"Entertain (Sports)",
				"Language (Grumbarth)",
				"Lore (Ogres)",
				"Ranged (Throwing)",
				"Set Trap"
			],
			talentsAdded: [
				"Small",
				"Beneath Notice, Step Aside, Flee!",
				"Acute Sense (Hearing)",
				"Acute Sense (Smell)",
				"Strong Back, Strong Legs, Sturdy"
			]
		}),
		Y("fire-kobold", "Fire Kobold", [
			15,
			30,
			20,
			25,
			15,
			30,
			25,
			20,
			20,
			10
		], {
			careerTable: X("Hunter", "Scout", "Outlaw", "Miner", "Engineer"),
			skillsAdded: [
				"Endurance",
				"Lore (Volcanoes)",
				"Ranged (Throwing)",
				"Set Trap"
			],
			talentsAdded: ["Resistance (Fire)", "Very Resilient"],
			traitsAdded: ["Breath (Fire)", "Ward (8+)"]
		}),
		Y("troglagob", "Troglagob", [
			15,
			25,
			20,
			20,
			20,
			30,
			20,
			20,
			15,
			10
		], {
			careerTable: X("Boatman", "Riverwarden", "Hunter", "Scout", "Outlaw"),
			skillsAdded: [
				"Navigation",
				"Row",
				"Sail",
				"Swim",
				"Ranged (Throwing)"
			],
			skillsRemoved: ["Stealth (Rural)"],
			talentsAdded: ["Orientation", "Resistance (Poison)"],
			traitsAdded: [
				"Amphibious",
				"Cold Blooded",
				"Swamp-strider",
				"Venom (Challenging)"
			]
		})
	];
}
function O_() {
	return J("orc", "Orc", [
		25,
		20,
		25,
		35,
		10,
		15,
		10,
		15,
		25,
		10
	], {
		age: "2d10+10",
		careerTable: X("Warrior", "Soldier", "Guard", "Pit Fighter", "Outlaw", "Hunter"),
		extra: 2,
		fate: 1,
		height: {
			die: "1d10",
			feet: 5,
			inches: 10
		},
		includeInExtraSpecies: !0,
		movement: 4,
		randomTalents: {
			talents: 0,
			"talents-gorky-orcs": 1,
			"talents-morky-orcs": 1
		},
		resilience: 1,
		skills: [
			"Athletics",
			"Dodge",
			"Endurance",
			"Gamble",
			"Intimidate",
			"Language (Goblin Tongue)",
			"Lore (Greenskins)",
			"Melee (Basic)",
			"Melee (Brawling)",
			"Outdoor Survival",
			"Ranged (Throwing)",
			"Ride (Boar)"
		],
		subspecies: [Y("savage", "Savage Orc", void 0, {
			careerTable: X("Warrior", "Hunter", "Scout", "Pit Fighter", "Mystic"),
			skillsAdded: [
				"Charm Animal",
				"Entertain (Drums)",
				"Lore (Spirits)",
				"Pray"
			],
			skillsRemoved: ["Gamble"],
			talentsAdded: [
				"Frenzy",
				"Furious Assault",
				"Strider (Any)"
			],
			traitsAdded: ["Ward (10+)"]
		}), Y("black", "Black Orc", [
			30,
			20,
			25,
			35,
			20,
			15,
			10,
			15,
			30,
			5
		], {
			careerTable: X("Soldier", "Guard", "Pit Fighter", "Bodyguard", "Sergeant"),
			randomTalents: {
				talents: 0,
				"talents-gorky-orcs": 1,
				"talents-iron-orcs": 1,
				"talents-morky-orcs": 1
			},
			skillsAdded: [
				"Cool",
				"Language (Zharralid)",
				"Leadership",
				"Lore (Warfare)"
			],
			skillsRemoved: [
				"Gamble",
				"Melee (Brawling)",
				"Ranged (Throwing)",
				"Ride (Boar)"
			],
			talentsAdded: [
				"Combat Aware",
				"Drilled",
				"Robust"
			]
		})],
		talents: ["Menacing", "Night Vision"],
		traits: ["Die Hard"]
	});
}
//#endregion
//#region src/functions/species-builder/example-species/monster-species/humans.ts
function k_(e) {
	let t = e ? new Set(e) : void 0;
	return {
		definitions: [],
		runtimeSpeciesExtensions: [{
			speciesKey: "human",
			speciesName: "Human",
			subspecies: A_().filter((e) => !t || t.has(e.key))
		}]
	};
}
function A_() {
	return [
		Y("amazonian", "Amazonian", void 0, {
			careerTable: X("Hunter", "Herbalist", "Scholar", "Scout", "Wizard"),
			skillsAdded: [
				"Heal",
				"Language (Amazonian)",
				"Lore (Lustria)",
				"Outdoor Survival",
				"Ranged (Bow)",
				"Swim"
			],
			talentsAdded: [
				"Read/Write",
				"Resistance (Poison)",
				"Rover",
				"Savvy"
			]
		}),
		Y("anathema", "Anathema", void 0, {
			careerTable: X("Witch Hunter", "Zealot", "Warrior Priest", "Outlaw", "Flagellant"),
			skillsAdded: [
				"Cool",
				"Intuition",
				"Lore (Chaos)",
				"Pray"
			],
			talentsAdded: [
				"Pure Soul",
				"Resistance (Chaos)",
				"Strong-minded"
			],
			traitsAdded: ["Ward (10+)"]
		}),
		Y("bestial-mutant", "Bestial Mutant", void 0, {
			careerTable: X("Outlaw", "Hunter", "Scout", "Warrior", "Mystic", "Entertainer"),
			skillsAdded: [
				"Language (Beast Tongue)",
				"Lore (Beastmen)",
				"Outdoor Survival",
				"Perform (Dancing)",
				"Pray"
			],
			talentsAdded: [
				"Doomed",
				"Mutation",
				"Night Vision",
				"Ruinous Mark"
			],
			traitsAdded: ["Bestial Mutant"]
		}),
		Y("borderlander", "Borderlander", void 0, {
			careerTable: X("Mercenary", "Outlaw", "Scout", "Soldier", "Trader", "Warden"),
			skillsAdded: [
				"Language (Tilean)",
				"Lore (Border Princes)",
				"Outdoor Survival",
				"Ride (Horse)"
			],
			talentsAdded: ["Rover", "Warrior Born"]
		}),
		Y("bretonnian", "Bretonnian", void 0, {
			careerTable: X("Peasant", "Servant", "Hunter", "Knight", "Priest", "Soldier"),
			skillsAdded: [
				"Animal Care",
				"Language (Bretonnian)",
				"Lore (Bretonnia)",
				"Pray",
				"Ride (Horse)"
			],
			talentsAdded: ["Etiquette (Nobles), Etiquette (Rural)", "Roughrider"]
		}),
		Y("kislevite", "Kislevite", void 0, {
			careerTable: X("Cavalryman", "Hunter", "Scout", "Soldier", "Warden", "Wizard"),
			skillsAdded: [
				"Endurance",
				"Language (Kislevian)",
				"Lore (Kislev)",
				"Outdoor Survival",
				"Ranged (Bow)",
				"Ride (Horse)"
			],
			talentsAdded: [
				"Hardy",
				"Orientation",
				"Resistance (Cold)"
			]
		}),
		Y("norscan", "Norscan", void 0, {
			careerTable: X("Boatman", "Hunter", "Outlaw", "Seaman", "Warrior", "Wrecker"),
			skillsAdded: [
				"Consume Alcohol",
				"Endurance",
				"Language (Norse)",
				"Lore (Norsca)",
				"Outdoor Survival",
				"Row",
				"Sail"
			],
			talentsAdded: [
				"Hardy",
				"Sea Legs",
				"Very Strong"
			]
		}),
		Y("strigany", "Strigany", void 0, {
			careerTable: X("Entertainer", "Merchant", "Mystic", "Outlaw", "Pedlar", "Witch"),
			skillsAdded: [
				"Entertain (Any)",
				"Language (Strigany)",
				"Lore (Strigos)",
				"Ride (Horse)",
				"Trade (Horse Trader)"
			],
			talentsAdded: [
				"Blather",
				"Rover",
				"Seasoned Traveller"
			]
		}),
		Y("sworn-to-malal", "Sworn to Malal", void 0, {
			careerTable: X("Flagellant", "Outlaw", "Witch Hunter", "Warrior", "Zealot"),
			skillsAdded: [
				"Cool",
				"Intimidate",
				"Lore (Chaos)",
				"Melee (Basic)",
				"Pray"
			],
			talentsAdded: [
				"Frenzy",
				"Resistance (Chaos)",
				"Strong-minded"
			],
			traitsAdded: ["Hatred (Chaos)"]
		}),
		Y("sworn-to-the-horned-rat", "Sworn to The Horned Rat", void 0, {
			careerTable: X("Cultist", "Outlaw", "Spy", "Thief", "Zealot"),
			skillsAdded: [
				"Language (Queekish)",
				"Lore (Skaven)",
				"Pray",
				"Sleight of Hand",
				"Stealth (Underground)"
			],
			talentsAdded: [
				"Night Vision",
				"Resistance (Disease)",
				"Tunnel Rat"
			],
			traitsAdded: ["Corruption (Minor)"]
		}),
		Y("sworn-to-the-ruinous-powers", "Sworn to the Ruinous Powers", void 0, {
			careerTable: X("Cultist", "Marauder", "Outlaw", "Warrior", "Wizard", "Zealot"),
			skillsAdded: [
				"Intimidate",
				"Language (Dark Tongue)",
				"Lore (Chaos)",
				"Pray"
			],
			talentsAdded: ["Mutation", "Ruinous Mark"],
			traitsAdded: ["Corruption (Minor)"]
		})
	];
}
//#endregion
//#region src/functions/species-builder/example-species/monster-species/lizardmen.ts
function j_() {
	return J("skink", "Skink", [
		10,
		25,
		20,
		15,
		30,
		30,
		20,
		20,
		15,
		15
	], {
		age: "4d10+10",
		careerTable: X("Artisan", "Hunter", "Scout", "Servant", "Steward", "Wizard"),
		extra: 2,
		fate: 2,
		height: {
			die: "1d10",
			feet: 4,
			inches: 0
		},
		includeInExtraSpecies: !0,
		movement: 6,
		resilience: 1,
		skills: [
			"Athletics",
			"Dodge",
			"Language (Saurian)",
			"Lore (Lustria)",
			"Melee (Basic)",
			"Outdoor Survival",
			"Perception",
			"Ranged (Throwing)",
			"Stealth (Rural)",
			"Swim",
			"Trade (Any)"
		],
		talents: [
			"Acute Sense (Sight)",
			"Night Vision",
			"Resistance (Poison)",
			"Rover"
		],
		traits: [
			"Amphibious",
			"Arboreal",
			"Armour (2)",
			"Cold Blooded",
			"Size (Small)"
		]
	});
}
function M_() {
	return J("saurus", "Saurus", [
		25,
		-1,
		35,
		35,
		5,
		10,
		8,
		15,
		55,
		10
	], {
		age: "10d10+30",
		careerTable: X("Guard", "Pit Fighter", "Soldier", "Warrior", "Warden"),
		extra: 1,
		fate: 0,
		height: {
			die: "1d10",
			feet: 6,
			inches: 2
		},
		includeInExtraSpecies: !0,
		movement: 4,
		resilience: 2,
		skills: [
			"Athletics",
			"Cool",
			"Dodge",
			"Endurance",
			"Intimidate",
			"Language (Saurian)",
			"Lore (Lustria)",
			"Melee (Basic)",
			"Melee (Polearm)",
			"Outdoor Survival",
			"Perception"
		],
		talents: [
			"Combat Aware",
			"Drilled",
			"Hardy",
			"Implacable",
			"Resolute"
		],
		traits: [
			"Armour (3)",
			"Bite (3)",
			"Cold Blooded",
			"Night Vision",
			"Tail Attack (3)"
		]
	});
}
function N_() {
	return J("snakeman", "Chaos Snakeman", [
		30,
		20,
		25,
		35,
		20,
		30,
		20,
		20,
		35,
		15
	], {
		age: "6d10+20",
		careerTable: X("Guard", "Hunter", "Mystic", "Warrior", "Wizard"),
		extra: 1,
		fate: 1,
		height: {
			die: "1d10",
			feet: 6,
			inches: 0
		},
		includeInExtraSpecies: !0,
		movement: 4,
		resilience: 2,
		skills: [
			"Athletics",
			"Channelling (Dhar)",
			"Cool",
			"Dodge",
			"Endurance",
			"Language (Dark Tongue)",
			"Lore (Chaos Wastes)",
			"Melee (Basic)",
			"Outdoor Survival",
			"Perception",
			"Stealth (Rural)"
		],
		talents: [
			"Night Vision",
			"Resistance (Chaos)",
			"Resistance (Poison)",
			"Strong-minded"
		],
		traits: [
			"Armour (1)",
			"Cold Blooded",
			"Constrictor",
			"Tail Attack (5)"
		]
	});
}
function P_() {
	return J("kroxigor", "Kroxigor", [
		20,
		-1,
		35,
		35,
		5,
		10,
		10,
		10,
		20,
		5
	], {
		age: "6d10+20",
		careerTable: X("Labourer", "Pit Fighter", "Soldier", "Warrior", "Warden"),
		extra: 1,
		fate: 0,
		height: {
			die: "1d10",
			feet: 7,
			inches: 0
		},
		includeInExtraSpecies: !0,
		movement: 6,
		resilience: 2,
		skills: [
			"Athletics",
			"Endurance",
			"Intimidate",
			"Language (Saurian)",
			"Melee (Two-Handed)",
			"Outdoor Survival",
			"Swim"
		],
		talents: [
			"Hardy",
			"Strong Back",
			"Very Resilient",
			"Very Strong"
		],
		traits: [
			"Amphibious",
			"Armour (4)",
			"Bite (1)",
			"Cold Blooded",
			"Size (Large)",
			"Tail Attack (3)"
		]
	});
}
function F_() {
	return J("coatl", "Coatl", [
		40,
		-1,
		25,
		45,
		25,
		10,
		-1,
		65,
		75,
		10
	], {
		age: "20d10+100",
		careerTable: X("Advisor", "Mystic", "Priest", "Scholar", "Wizard"),
		extra: 1,
		fate: 2,
		height: {
			die: "1d10",
			feet: 10,
			inches: 0
		},
		includeInExtraSpecies: !0,
		movement: 2,
		resilience: 3,
		skills: [
			"Channelling (Any)",
			"Cool",
			"Intuition",
			"Language (Magick)",
			"Language (Saurian)",
			"Lore (Magic)",
			"Lore (Old Ones)",
			"Perception"
		],
		talents: [
			"Aethyric Attunement",
			"Arcane Magic (Any)",
			"Second Sight",
			"Strong-minded"
		],
		traits: [
			"Armour (4)",
			"Constrictor",
			"Flight (90)",
			"Magical",
			"Size (Large)",
			"Telepathy",
			"Terror (1)"
		]
	});
}
//#endregion
//#region src/functions/species-builder/example-species/monster-species/oddities.ts
function I_() {
	return J("beastfiend", "Beastfiend", [
		30,
		20,
		30,
		30,
		30,
		25,
		15,
		20,
		35,
		10
	], {
		age: "3d10+10",
		careerTable: X("Hunter", "Mystic", "Outlaw", "Warrior", "Zealot"),
		extra: 1,
		fate: 1,
		height: {
			die: "1d10",
			feet: 6,
			inches: 0
		},
		includeInExtraSpecies: !0,
		movement: 4,
		resilience: 2,
		skills: [
			"Athletics",
			"Cool",
			"Endurance",
			"Intimidate",
			"Language (Dark Tongue)",
			"Lore (Chaos)",
			"Melee (Basic)",
			"Outdoor Survival",
			"Perception",
			"Pray",
			"Track"
		],
		subspecies: L_(),
		talents: [
			"Hardy",
			"Night Vision",
			"Resistance (Chaos)",
			"Ruinous Mark"
		],
		traits: [
			"Armour (1)",
			"Corruption (Minor)",
			"Mutation",
			"Painless"
		]
	});
}
function L_() {
	return [
		Y("bloodborn", "Bloodborn Beastfiend", [
			45,
			15,
			35,
			30,
			40,
			25,
			15,
			15,
			45,
			5
		], {
			careerTable: X("Pit Fighter", "Soldier", "Warrior", "Zealot"),
			skillsAdded: ["Intimidate", "Melee (Two-Handed)"],
			talentsAdded: [
				"Berserk Charge",
				"Frenzy",
				"Furious Assault",
				"Very Strong"
			],
			traitsAdded: [
				"Armour (3)",
				"Champion",
				"Horns (4)"
			]
		}),
		Y("delightborn", "Delightborn Beastfiend", [
			40,
			30,
			25,
			20,
			45,
			45,
			25,
			25,
			40,
			30
		], {
			careerTable: X("Assassin", "Duellist", "Entertainer", "Spy", "Warrior"),
			skillsAdded: [
				"Charm",
				"Dodge",
				"Entertain (Any)",
				"Intuition"
			],
			talentsAdded: [
				"Attractive",
				"Combat Reflexes",
				"Lightning Reflexes",
				"Step Aside"
			],
			traitsAdded: ["Champion", "Distracting"]
		}),
		Y("plagueborn", "Plagueborn Beastfiend", [
			25,
			15,
			25,
			45,
			20,
			15,
			15,
			20,
			40,
			10
		], {
			careerTable: X("Flagellant", "Herbalist", "Physician", "Warrior", "Zealot"),
			skillsAdded: [
				"Heal",
				"Lore (Disease)",
				"Lore (Poison)"
			],
			talentsAdded: [
				"Hardy",
				"Resistance (Disease)",
				"Resistance (Poison)",
				"Very Resilient"
			],
			traitsAdded: [
				"Disease (Packer's Pox)",
				"Infected",
				"Regenerate"
			]
		}),
		Y("changeborn", "Changeborn Beastfiend", [
			25,
			30,
			20,
			25,
			35,
			30,
			25,
			35,
			40,
			15
		], {
			careerTable: X("Alchemist", "Mystic", "Scholar", "Witch", "Wizard"),
			skillsAdded: [
				"Channelling (Dhar)",
				"Language (Magick)",
				"Lore (Magic)"
			],
			talentsAdded: [
				"Aethyric Attunement",
				"Petty Magic",
				"Second Sight",
				"Savvy"
			],
			traitsAdded: ["Breath (Warpfire)", "Spellcaster (Tzeentch)"]
		})
	];
}
function R_() {
	return J("dragon-ogre", "Dragon Ogre", [
		40,
		10,
		50,
		50,
		20,
		15,
		10,
		25,
		35,
		10
	], {
		age: "20d10+100",
		careerTable: X("Guard", "Mystic", "Pit Fighter", "Warrior", "Zealot"),
		extra: 1,
		fate: 0,
		height: {
			die: "1d10",
			feet: 8,
			inches: 0
		},
		includeInExtraSpecies: !0,
		movement: 7,
		resilience: 3,
		skills: [
			"Athletics",
			"Cool",
			"Endurance",
			"Intimidate",
			"Language (Dark Tongue)",
			"Lore (Chaos)",
			"Lore (Storms)",
			"Melee (Two-Handed)",
			"Outdoor Survival",
			"Perception"
		],
		talents: [
			"Hardy",
			"Implacable",
			"Resistance (Lightning)",
			"Very Resilient",
			"Very Strong"
		],
		traits: [
			"Armour (3)",
			"Size (Large)",
			"Stride",
			"Tail Attack (6)"
		],
		woundFormula: { formula: "@sb * 3 + @tb * 6 + @wpb * 2" }
	});
}
function z_() {
	return J("fimir", "Fimir", [
		25,
		10,
		35,
		30,
		20,
		10,
		10,
		20,
		20,
		5
	], {
		age: "6d10+20",
		careerTable: X("Hunter", "Mystic", "Outlaw", "Warrior", "Wizard"),
		extra: 1,
		fate: 1,
		height: {
			die: "1d10",
			feet: 6,
			inches: 2
		},
		includeInExtraSpecies: !0,
		movement: 5,
		resilience: 2,
		skills: [
			"Endurance",
			"Intimidate",
			"Language (Dark Tongue)",
			"Lore (Fimir)",
			"Melee (Basic)",
			"Outdoor Survival",
			"Perception",
			"Stealth (Rural)",
			"Swim"
		],
		subspecies: [
			Y("shearl", "Shearl", [
				18,
				5,
				30,
				25,
				20,
				15,
				15,
				15,
				15,
				5
			], {
				talentsAdded: ["Beneath Notice", "Strong Back"],
				traitsRemoved: ["Size (Large)"]
			}),
			Y("fimm", "Fimm Warrior", [
				35,
				10,
				45,
				35,
				20,
				15,
				10,
				15,
				25,
				5
			], {
				talentsAdded: [
					"Hardy",
					"Menacing",
					"Very Strong"
				],
				traitsAdded: ["Tail Attack (5)"]
			}),
			Y("dirach", "Dirach", [
				25,
				10,
				30,
				30,
				30,
				20,
				20,
				40,
				40,
				15
			], {
				skillsAdded: [
					"Channelling (Dhar)",
					"Language (Magick)",
					"Lore (Magic)"
				],
				talentsAdded: [
					"Aethyric Attunement",
					"Arcane Magic (Daemonology)",
					"Second Sight"
				],
				traitsAdded: ["Spellcaster (Daemonology)"]
			})
		],
		talents: [
			"Dark Vision",
			"Resistance (Poison)",
			"Strong-minded"
		],
		traits: [
			"Armour (2)",
			"Cold Blooded",
			"Size (Large)",
			"Swamp-strider",
			"Tail Attack (3)"
		]
	});
}
function B_() {
	return J("giant", "Giant", [
		20,
		20,
		45,
		45,
		20,
		10,
		5,
		15,
		20,
		10
	], {
		age: "10d10+30",
		careerTable: X("Entertainer", "Hunter", "Labourer", "Outlaw", "Pit Fighter", "Warrior"),
		extra: 1,
		fate: 0,
		height: {
			die: "2d10",
			feet: 14,
			inches: 0
		},
		includeInExtraSpecies: !0,
		movement: 6,
		resilience: 3,
		skills: [
			"Athletics",
			"Consume Alcohol",
			"Endurance",
			"Intimidate",
			"Language (Grumbarth)",
			"Melee (Two-Handed)",
			"Outdoor Survival",
			"Perception"
		],
		talents: [
			"Hardy",
			"Strong Back",
			"Very Resilient",
			"Very Strong"
		],
		traits: [
			"Armour (1)",
			"Hungry",
			"Night Vision",
			"Size (Enormous)",
			"Stride"
		],
		woundFormula: { formula: "@sb * 4 + @tb * 8 + @wpb * 2" }
	});
}
function V_() {
	return J("zoat", "Zoat", [
		20,
		10,
		30,
		30,
		20,
		15,
		10,
		25,
		30,
		10
	], {
		age: "2d10+50",
		careerTable: X("Herbalist", "Hunter", "Mystic", "Scholar", "Wizard"),
		extra: 1,
		fate: 1,
		height: {
			die: "1d10",
			feet: 6,
			inches: 6
		},
		includeInExtraSpecies: !0,
		movement: 7,
		resilience: 1,
		skills: [
			"Athletics",
			"Channelling (Ghyran)",
			"Cool",
			"Endurance",
			"Intuition",
			"Language (Eltharin)",
			"Language (Magick)",
			"Language (Rumbling Tongue)",
			"Lore (Magic)",
			"Lore (Zoats)",
			"Outdoor Survival",
			"Perception"
		],
		talents: [
			"Arcane Magic (Life)",
			"Dark Vision",
			"Hardy",
			"Instinctive Arcana",
			"Second Sight",
			"Zoat Growth"
		],
		traits: [
			"Arboreal",
			"Armour (2)",
			"Size (Large)",
			"Stride"
		]
	});
}
//#endregion
//#region src/functions/species-builder/example-species/monster-species/skaven.ts
function H_() {
	return J("skaven", "Skaven", [
		20,
		20,
		20,
		20,
		30,
		25,
		20,
		20,
		10,
		10
	], {
		age: "1d10+5",
		careerTable: X("Thief", "Outlaw", "Scout", "Rat Catcher", "Smuggler", "Beggar", "Servant", "Messenger", "Spy", "Soldier"),
		extra: 2,
		fate: 3,
		height: {
			die: "1d10",
			feet: 4,
			inches: 5
		},
		includeInExtraSpecies: !0,
		movement: 5,
		resilience: 0,
		skills: [
			"Athletics",
			"Bribery",
			"Dodge",
			"Gamble",
			"Language (Queekish)",
			"Lore (Skaven)",
			"Melee (Basic)",
			"Perception",
			"Ranged (Sling)",
			"Sleight of Hand",
			"Stealth (Underground)",
			"Stealth (Urban)"
		],
		subspecies: U_(),
		talents: [
			"Night Vision",
			"Acute Sense (Smell)",
			"Snivel, Beneath Notice, Flee!",
			"Tunnel Rat, Enclosed Fighter"
		],
		traits: []
	});
}
function U_() {
	return [
		Y("skryre", "Clan Skryre", void 0, {
			careerTable: X("Engineer", "Artisan", "Alchemist", "Scholar", "Wizard"),
			skillsAdded: [
				"Cool",
				"Evaluate",
				"Lore (Engineering)",
				"Trade (Engineer)"
			],
			talentsAdded: [
				"Craftsman (Engineer)",
				"Savvy",
				"Tinker"
			]
		}),
		Y("moulder", "Clan Moulder", void 0, {
			careerTable: X("Animal Trainer", "Physician", "Pit Fighter", "Slaver", "Artisan"),
			skillsAdded: [
				"Animal Care",
				"Endurance",
				"Intimidate",
				"Trade (Tanner)"
			],
			talentsAdded: [
				"Hardy",
				"Menacing",
				"Resistance (Disease)"
			]
		}),
		Y("pestilens", "Clan Pestilens", void 0, {
			careerTable: X("Zealot", "Physician", "Herbalist", "Alchemist", "Flagellant"),
			skillsAdded: [
				"Heal",
				"Lore (Medicine)",
				"Lore (Poison)",
				"Pray"
			],
			talentsAdded: ["Resistance (Disease)", "Resistance (Poison)"],
			traitsAdded: ["Disease (Ratte Fever)", "Infected"]
		}),
		Y("eshin", "Clan Eshin", void 0, {
			careerTable: X("Thief", "Assassin", "Spy", "Scout", "Duellist", "Messenger"),
			skillsAdded: [
				"Climb",
				"Intuition",
				"Melee (Basic)",
				"Sleight of Hand"
			],
			talentsAdded: [
				"Alley Cat, Lightning Reflexes",
				"Catfall",
				"Step Aside"
			]
		}),
		Y("mors", "Clan Mors", [
			25,
			20,
			20,
			20,
			30,
			25,
			20,
			20,
			15,
			10
		], {
			careerTable: X("Soldier", "Guard", "Sergeant", "Bodyguard", "Pit Fighter"),
			skillsAdded: [
				"Cool",
				"Endurance",
				"Intimidate",
				"Leadership"
			],
			talentsAdded: [
				"Careful Strike, Strike Mighty Blow",
				"Drilled",
				"Menacing"
			]
		}),
		Y("rictus", "Clan Rictus", [
			30,
			20,
			30,
			30,
			30,
			30,
			20,
			20,
			20,
			10
		], {
			careerTable: X("Soldier", "Guard", "Bodyguard", "Pit Fighter", "Sergeant"),
			skillsAdded: [
				"Cool",
				"Endurance",
				"Intimidate",
				"Leadership"
			],
			talentsAdded: [
				"Hardy",
				"Implacable",
				"Menacing",
				"Strong Back"
			]
		}),
		Y("female", "Female Skaven", [
			30,
			20,
			35,
			35,
			30,
			30,
			20,
			20,
			20,
			10
		], {
			careerTable: X("Bodyguard", "Guard", "Soldier", "Pit Fighter", "Champion"),
			skillsAdded: [
				"Cool",
				"Endurance",
				"Intimidate",
				"Leadership"
			],
			talentsAdded: [
				"Hardy",
				"Implacable",
				"Large",
				"Menacing",
				"Robust"
			]
		}),
		Y("grey-seer", "Grey Seer Ratling", [
			20,
			20,
			15,
			20,
			30,
			25,
			25,
			35,
			35,
			20
		], {
			careerTable: X("Wizard", "Priest", "Scholar", "Advisor", "Mystic"),
			skillsAdded: [
				"Channelling (Warp)",
				"Language (Magick)",
				"Lore (Magic)",
				"Pray"
			],
			talentsAdded: [
				"Aethyric Attunement",
				"Arcane Magic (Warp)",
				"Petty Magic",
				"Second Sight",
				"Sixth Sense"
			],
			traitsAdded: ["Corruption (Minor)"]
		}),
		Y("albino-guard", "Albino Guard Ratling", [
			35,
			25,
			30,
			30,
			35,
			30,
			20,
			20,
			30,
			15
		], {
			careerTable: X("Bodyguard", "Guard", "Soldier", "Sergeant", "Champion"),
			skillsAdded: [
				"Cool",
				"Endurance",
				"Intimidate",
				"Leadership",
				"Melee (Polearm)"
			],
			talentsAdded: [
				"Combat Aware",
				"Drilled",
				"Implacable",
				"Resolute",
				"Strong-minded"
			]
		})
	];
}
//#endregion
//#region src/functions/species-builder/example-species/monster-species/undead.ts
function W_() {
	return J("ghoul", "Ghoul", [
		20,
		0,
		25,
		20,
		20,
		25,
		15,
		15,
		20,
		5
	], {
		age: "4d10+10",
		careerTable: X("Grave Robber", "Hunter", "Outlaw", "Scout", "Thief"),
		extra: 1,
		fate: 1,
		height: {
			die: "1d10",
			feet: 4,
			inches: 10
		},
		includeInExtraSpecies: !0,
		movement: 4,
		resilience: 2,
		skills: [
			"Athletics",
			"Cool",
			"Endurance",
			"Intimidate",
			"Melee (Brawling)",
			"Outdoor Survival",
			"Perception",
			"Stealth (Any)",
			"Track"
		],
		talents: [
			"Acute Sense (Smell)",
			"Hardy",
			"Night Vision",
			"Resistance (Disease)"
		],
		traits: [
			"Bite (4)",
			"Hungry",
			"Infected",
			"Painless"
		]
	});
}
function G_() {
	return J("risen-corpse", "Risen Corpse", [
		10,
		0,
		20,
		20,
		10,
		10,
		10,
		10,
		20,
		0
	], {
		age: "5d10+10",
		careerTable: X("Guard", "Labourer", "Outlaw", "Soldier", "Warrior"),
		extra: 0,
		fate: 0,
		height: {
			die: "2d10",
			feet: 4,
			inches: 9
		},
		includeInExtraSpecies: !0,
		movement: 3,
		resilience: 3,
		skills: [
			"Cool",
			"Endurance",
			"Intimidate",
			"Melee (Basic)",
			"Perception"
		],
		subspecies: [Y("skeleton", "Skeleton", [
			15,
			15,
			20,
			20,
			10,
			10,
			15,
			5,
			20,
			0
		], {
			skillsAdded: ["Ranged (Bow)"],
			talentsAdded: ["Resistance (Poison)"],
			traitsAdded: ["Construct", "Ranged (Bow) (7)"],
			traitsRemoved: ["Infected"]
		}), Y("zombie", "Zombie", [
			5,
			0,
			20,
			20,
			0,
			5,
			5,
			5,
			15,
			0
		], {
			movement: 2,
			talentsAdded: ["Hardy", "Very Resilient"],
			traitsAdded: ["Infected", "Mindless"]
		})],
		talents: [
			"Hardy",
			"Night Vision",
			"Resistance (Disease)",
			"Strong-minded"
		],
		traits: [
			"Dark Vision",
			"Painless",
			"Undead"
		]
	});
}
function K_() {
	return J("vampire", "Vampire", [
		35,
		20,
		30,
		25,
		35,
		35,
		20,
		25,
		35,
		20
	], {
		age: "20d10+20",
		careerTable: X("Advisor", "Duellist", "Noble", "Spy", "Warrior", "Wizard"),
		extra: 1,
		fate: 1,
		height: {
			die: "2d10",
			feet: 4,
			inches: 10
		},
		includeInExtraSpecies: !0,
		movement: 4,
		resilience: 2,
		skills: [
			"Charm",
			"Cool",
			"Dodge",
			"Intimidate",
			"Intuition",
			"Language (Classical)",
			"Lore (Undead)",
			"Melee (Basic)",
			"Perception",
			"Stealth (Any)"
		],
		subspecies: [Y("strigoi", "Strigoi", [
			40,
			5,
			40,
			35,
			30,
			30,
			10,
			15,
			35,
			5
		], {
			careerTable: X("Hunter", "Outlaw", "Pit Fighter", "Warrior"),
			skillsAdded: [
				"Athletics",
				"Outdoor Survival",
				"Track"
			],
			skillsRemoved: ["Charm", "Language (Classical)"],
			talentsAdded: [
				"Frenzy",
				"Menacing",
				"Very Strong"
			],
			traitsAdded: [
				"Bestial",
				"Claws (6)",
				"Size (Large)"
			]
		})],
		talents: [
			"Night Vision",
			"Resistance (Disease)",
			"Sixth Sense",
			"Strong-minded"
		],
		traits: [
			"Bite (5)",
			"Hungry",
			"Undead",
			"Vampiric"
		]
	});
}
//#endregion
//#region src/functions/species-builder/example-species/monster-species/catalog.ts
var q_ = nv(E_), J_ = nv(O_), Y_ = nv(g_), X_ = nv(H_), Z_ = nv(K_), Q_ = [
	Z("albion-giant", "Albion Giant", f_),
	Z("amazonian", "Amazonian", rv("amazonian")),
	Z("anathema", "Anathema", rv("anathema")),
	Z("apeman", "Apeman", s_),
	Z("beastfiend", "Beastfiend", I_),
	Z("beastman", "Beastman family", Y_),
	Z("bestial-mutant", "Bestial Mutant", rv("bestial-mutant")),
	Z("black-orc", "Black Orc (Orc family)", J_),
	Z("borderlander", "Borderlander", rv("borderlander")),
	Z("bretonnian", "Bretonnian", rv("bretonnian")),
	Z("centaur", "Centaur", p_),
	Z("chaos-snakeman", "Chaos Snakeman", N_),
	Z("clan-eshin", "Clan Eshin (Skaven family)", X_),
	Z("clan-mors", "Clan Mors (Skaven family)", X_),
	Z("clan-moulder", "Clan Moulder (Skaven family)", X_),
	Z("clan-pestilens", "Clan Pestilens (Skaven family)", X_),
	Z("clan-rictus", "Clan Rictus (Skaven family)", X_),
	Z("clan-skryre", "Clan Skryre (Skaven family)", X_),
	Z("dragon-ogre", "Dragon Ogre", R_),
	Z("female-skaven", "Female Skaven (Skaven family)", X_),
	Z("fimir", "Fimir", z_),
	Z("fire-kobold", "Fire Kobold (Goblin family)", q_),
	Z("forest-goblin", "Forest Goblin (Goblin family)", q_),
	Z("ghoul", "Ghoul", W_),
	Z("giant", "Giant", B_),
	Z("gnoblar", "Gnoblar (Goblin family)", q_),
	Z("goblin", "Goblin family", q_),
	Z("gor", "Gor (Beastman family)", Y_),
	Z("grey-seer", "Grey Seer Ratling (Skaven family)", X_),
	Z("half-orc", "Half-Orc", m_),
	Z("hawk-person", "Hawk Person", c_),
	Z("hobgoblin", "Hobgoblin (Goblin family)", q_),
	Z("kislevite", "Kislevite", rv("kislevite")),
	Z("lakeman", "Lakeman", __),
	Z("menfish", "Menfish", v_),
	Z("minotaur", "Minotaur", y_),
	Z("monkey-person", "Monkey Person", l_),
	Z("mossling", "Mossling", h_),
	Z("night-goblin", "Night Goblin (Goblin family)", q_),
	Z("norscan", "Norscan", rv("norscan")),
	Z("orc", "Orc family", J_),
	Z("risen-corpse", "Risen Corpse", G_),
	Z("satyr", "Satyr", u_),
	Z("saurus", "Saurus", M_),
	Z("savage-orc", "Savage Orc (Orc family)", J_),
	Z("sea-elf", "Sea Elf", w_),
	Z("skaven", "Skaven family", X_),
	Z("skink", "Skink", j_),
	Z("strigany", "Strigany", rv("strigany")),
	Z("strigoi", "Strigoi (Vampire family)", Z_),
	Z("sworn-horned-rat", "Sworn to the Horned Rat", rv("sworn-to-the-horned-rat")),
	Z("sworn-malal", "Sworn to Malal", rv("sworn-to-malal")),
	Z("sworn-ruinous-powers", "Sworn to the Ruinous Powers", rv("sworn-to-the-ruinous-powers")),
	Z("tigerman", "Tigerman", d_),
	Z("troglagob", "Troglagob (Goblin family)", q_),
	Z("ungor", "Ungor (Beastman family)", Y_),
	Z("vampire", "Vampire family", Z_),
	Z("zoat", "Zoat", V_),
	Z("albino-guard-ratling", "Albino Guard Ratling (Skaven family)", X_),
	tv("coatl", "Coatl", F_),
	tv("great-eagle", "Great Eagle", S_),
	tv("kroxigor", "Kroxigor", P_),
	tv("medusa", "Medusa", b_),
	tv("naiad", "Naiad", C_),
	tv("pegasus", "Pegasus", x_)
].sort((e, t) => e.label.localeCompare(t.label));
function $_() {
	return {
		definitions: ev(),
		runtimeSpeciesExtensions: k_().runtimeSpeciesExtensions
	};
}
function ev() {
	return [
		f_(),
		s_(),
		I_(),
		g_(),
		p_(),
		N_(),
		F_(),
		R_(),
		z_(),
		W_(),
		B_(),
		E_(),
		S_(),
		m_(),
		c_(),
		P_(),
		__(),
		b_(),
		v_(),
		y_(),
		l_(),
		h_(),
		C_(),
		O_(),
		x_(),
		G_(),
		u_(),
		M_(),
		w_(),
		H_(),
		j_(),
		d_(),
		K_(),
		V_()
	];
}
function Z(e, t, n) {
	return {
		createPackage: () => iv(n()),
		description: `Adds the researched ${t} sample species definition.`,
		id: e,
		label: t
	};
}
function tv(e, t, n) {
	return {
		...Z(e, `${t} (discovery)`, n),
		label: `${t} (discovery)`
	};
}
function nv(e) {
	return () => i_(e());
}
function rv(e) {
	return () => k_([e]);
}
function iv(e) {
	return "definitions" in e ? e : i_(e);
}
//#endregion
//#region src/functions/species-builder/example-species/viltrumite.ts
function av() {
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
var ov = [...Q_, {
	createPackage: () => i_(av()),
	description: "A deliberately extreme species for stress-testing formulas and generated Traits.",
	id: "viltrumite",
	label: "Viltrumite (stress test)"
}].sort((e, t) => e.label.localeCompare(t.label)), sv = ov.map(({ description: e, id: t, label: n }) => ({
	description: e,
	id: t,
	label: n
}));
function cv() {
	let e = $_();
	return {
		definitions: [av(), ...e.definitions],
		runtimeSpeciesExtensions: e.runtimeSpeciesExtensions
	};
}
function lv(e) {
	return ov.find((t) => t.id === e)?.createPackage();
}
//#endregion
//#region src/view/apps/species-builder/tabs/settings/SpeciesBuilderSettingsPanel.vue?vue&type=script&setup=true&lang.ts
var uv = { class: "dui-card dui-card-border dui-card-sm" }, dv = { class: "dui-card-body" }, fv = { class: "dui-fieldset" }, pv = { class: "dui-label" }, mv = ["checked", "disabled"], hv = { class: "dui-fieldset" }, gv = { class: "dui-fieldset-legend" }, _v = { class: "dui-badge dui-badge-sm" }, vv = { class: "dui-label app:w-full app:items-start app:justify-between app:gap-3 app:whitespace-normal" }, yv = ["checked", "disabled"], bv = { class: "dui-fieldset" }, xv = ["disabled", "value"], Sv = ["value"], Cv = { class: "dui-fieldset-label" }, wv = { class: "dui-join" }, Tv = ["disabled"], Ev = ["disabled"], Dv = /* @__PURE__ */ j({
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
		let n = t, r = e, i = V(() => r.exampleSpeciesOptions.find((e) => e.id === r.selectedExampleSpeciesId));
		function a(e) {
			return e.target instanceof HTMLInputElement && e.target.checked;
		}
		function o(e) {
			return e.target instanceof HTMLSelectElement ? e.target.value : "";
		}
		function s() {
			return r.speciesTable.ownership === "external" ? r.speciesTable.isRegistered ? "External table active" : "External table" : r.speciesTable.ownership === "managed" ? r.speciesTable.isRegistered ? "Registered" : "Not registered" : "No managed table yet";
		}
		return (t, r) => (P(), F("section", uv, [L("div", dv, [
			r[15] ||= L("header", null, [L("h2", { class: "dui-card-title" }, "Species Builder Settings"), L("p", null, "Control optional tools and add sample definitions to the current draft.")], -1),
			L("fieldset", fv, [
				r[6] ||= L("legend", { class: "dui-fieldset-legend" }, "Generated config", -1),
				r[7] ||= L("p", { class: "dui-fieldset-label" }, " Expose the read-only WFRP config generated from the current draft. ", -1),
				L("label", pv, [L("input", {
					class: "dui-checkbox",
					checked: e.showGeneratedConfigTab,
					disabled: e.isDisabled,
					type: "checkbox",
					onChange: r[0] ||= (e) => n("updateShowGeneratedConfigTab", a(e))
				}, null, 40, mv), r[5] ||= L("span", null, "Show WFRP config tab", -1)])
			]),
			L("fieldset", hv, [L("legend", gv, [r[8] ||= z(" World Species Table ", -1), L("span", _v, D(s()), 1)]), L("label", vv, [r[9] ||= L("span", null, [L("strong", null, "Register managed table on save"), L("span", { class: "app:block app:text-base-content/70" }, " When enabled, Save Changes points WFRP’s world Species table setting to the Builder-managed table. Turning this off stops future registration; it does not change or delete the table currently selected by WFRP. ")], -1), L("input", {
				class: "dui-toggle dui-toggle-primary app:shrink-0",
				checked: e.autoRegisterSpeciesTable,
				disabled: e.isDisabled,
				type: "checkbox",
				onChange: r[1] ||= (e) => n("updateAutoRegisterSpeciesTable", a(e))
			}, null, 40, yv)])]),
			r[16] ||= L("div", { class: "dui-divider" }, "Sample Definitions", -1),
			L("fieldset", bv, [
				r[12] ||= L("legend", { class: "dui-fieldset-legend" }, "Example Species", -1),
				r[13] ||= L("p", { class: "dui-fieldset-label" }, " Add preconfigured species definitions matching sample species Journal material. ", -1),
				r[14] ||= L("label", {
					class: "dui-label",
					for: "species-builder-example"
				}, "Sample definition", -1),
				L("select", {
					id: "species-builder-example",
					class: "dui-select",
					disabled: e.isDisabled,
					value: e.selectedExampleSpeciesId,
					onChange: r[2] ||= (e) => n("updateSelectedExampleSpeciesId", o(e))
				}, [(P(!0), F(N, null, M(e.exampleSpeciesOptions, (e) => (P(), F("option", {
					key: e.id,
					value: e.id
				}, D(e.label), 9, Sv))), 128))], 40, xv),
				L("p", Cv, D(i.value?.description), 1),
				L("div", wv, [L("button", {
					class: "dui-btn dui-join-item",
					disabled: e.isDisabled || !e.selectedExampleSpeciesId,
					type: "button",
					onClick: r[3] ||= (t) => n("generateExampleSpecies", e.selectedExampleSpeciesId)
				}, [...r[10] ||= [L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-scroll"
				}, null, -1), z(" Generate Selected ", -1)]], 8, Tv), L("button", {
					class: "dui-btn dui-join-item",
					disabled: e.isDisabled || e.exampleSpeciesOptions.length === 0,
					type: "button",
					onClick: r[4] ||= (e) => n("generateAllExampleSpecies")
				}, [...r[11] ||= [L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-layer-group"
				}, null, -1), z(" Generate All ", -1)]], 8, Ev)])
			])
		])]));
	}
}), Ov = { class: "dui-card-actions" }, kv = { class: "dui-badge" }, Av = ["disabled", "title"], jv = /* @__PURE__ */ j({
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
		return (t, r) => (P(), F("header", null, [
			(P(), I(Ur(e.headingLevel), { class: "dui-card-title" }, {
				default: A(() => [z(D(e.title), 1)]),
				_: 1
			})),
			L("p", null, D(e.description), 1),
			L("div", Ov, [L("span", kv, D(e.count), 1), L("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: e.actionTitle,
				type: "button",
				onClick: r[0] ||= (e) => n("add")
			}, [r[1] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), z(" " + D(e.actionLabel), 1)], 8, Av)])
		]));
	}
}), Mv = { class: "dui-card dui-card-border dui-card-sm" }, Nv = { class: "dui-card-body" }, Pv = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, Fv = { class: "dui-badge dui-badge-sm" }, Iv = { class: "app:text-base-content/70" }, Lv = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "status"
}, Rv = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, zv = ["role"], Bv = {
	key: 3,
	class: "app:overflow-x-auto"
}, Vv = { class: "dui-table dui-table-sm" }, Hv = { scope: "row" }, Uv = ["for"], Wv = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onChange"
], Gv = { value: "" }, Kv = ["disabled", "value"], qv = ["id"], Jv = ["for"], Yv = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], Xv = ["for"], Zv = [
	"disabled",
	"title",
	"onClick"
], Qv = { class: "app:sr-only" }, $v = {
	key: 4,
	class: "dui-alert dui-alert-info",
	role: "status"
}, ey = /* @__PURE__ */ j({
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
		return (t, n) => (P(), F("section", Mv, [L("div", Nv, [
			R(jv, {
				"action-label": "Add Species",
				"action-title": "Add a weighted species result",
				count: e.draft.rows.length,
				description: "Weights set each species' share of random character-creation rolls.",
				"is-disabled": e.isDisabled,
				"heading-level": "h2",
				title: "Random Species Table",
				onAdd: n[0] ||= (e) => r("addRow")
			}, null, 8, ["count", "is-disabled"]),
			L("div", Pv, [L("span", Fv, D(h()), 1), L("span", Iv, D(e.draft.name), 1)]),
			e.draft.ownership === "external" ? (P(), F("div", Lv, [...n[1] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-copy"
			}, null, -1), L("span", null, " This is the current WFRP source table. On Save, table changes create a Species Builder-managed copy and leave the imported source unchanged. ", -1)]])) : B("", !0),
			e.draft.requiresLinkRepair ? (P(), F("div", Rv, [...n[2] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-link-slash"
			}, null, -1), L("span", null, " One or more results lack WFRP's required UUID-link description. Save to generate or reuse species Journals and repair both the result name and link label. ", -1)]])) : B("", !0),
			f()[0] ? (P(), F("div", {
				key: 2,
				class: E(["dui-alert", p() ? "dui-alert-error" : "dui-alert-info"]),
				role: p() ? "alert" : "status"
			}, [n[3] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-triangle-exclamation"
			}, null, -1), L("span", null, [z(D(p() ? "Fix before saving:" : "Imported table needs attention:") + " " + D(f()[0]) + " ", 1), f().length > 1 ? (P(), F(N, { key: 0 }, [z(" (" + D(f().length) + " issues total) ", 1)], 64)) : B("", !0)])], 10, zv)) : B("", !0),
			e.draft.rows.length ? (P(), F("div", Bv, [L("table", Vv, [
				n[5] ||= L("caption", { class: "app:sr-only" }, " Weighted results for the world WFRP Species table ", -1),
				n[6] ||= L("thead", null, [L("tr", null, [
					L("th", { scope: "col" }, "#"),
					L("th", { scope: "col" }, "Species"),
					L("th", { scope: "col" }, "Weight"),
					L("th", { scope: "col" }, "Chance / range"),
					L("th", { scope: "col" }, [L("span", { class: "app:sr-only" }, "Actions")])
				])], -1),
				L("tbody", null, [(P(!0), F(N, null, M(e.draft.rows, (t, d) => (P(), F("tr", {
					key: t.resultId ?? `new-${d}`,
					class: E({ "app:outline app:outline-1 app:outline-error": u(d).length > 0 })
				}, [
					L("th", Hv, D(d + 1), 1),
					L("td", null, [
						L("label", {
							class: "app:sr-only",
							for: `species-table-species-${d}`
						}, " Species for row " + D(d + 1), 9, Uv),
						L("select", {
							id: `species-table-species-${d}`,
							"aria-describedby": l(t, d) ? `species-table-row-error-${d}` : void 0,
							"aria-invalid": s(t, d) || void 0,
							class: E(["dui-select dui-select-sm app:min-w-48 app:w-full", { "dui-select-error": s(t, d) }]),
							disabled: e.isDisabled,
							value: t.speciesKey,
							onChange: (e) => r("updateRowKey", d, i(e))
						}, [L("option", Gv, D(t.name ? `Unrecognized: ${t.name}` : "Choose a species"), 1), (P(!0), F(N, null, M(e.options, (e) => (P(), F("option", {
							key: e.key,
							disabled: o(e.key, d),
							value: e.key
						}, D(e.label), 9, Kv))), 128))], 42, Wv),
						l(t, d) ? (P(), F("span", {
							key: 0,
							id: `species-table-row-error-${d}`,
							class: "app:mt-1 app:block app:text-xs app:text-error"
						}, D(l(t, d)), 9, qv)) : B("", !0)
					]),
					L("td", null, [L("label", {
						class: "app:sr-only",
						for: `species-table-weight-${d}`
					}, " Weight for row " + D(d + 1), 9, Jv), L("input", {
						id: `species-table-weight-${d}`,
						"aria-describedby": l(t, d) ? `species-table-row-error-${d}` : void 0,
						"aria-invalid": c(t, d) || void 0,
						class: E(["dui-input dui-input-sm app:w-24", { "dui-input-error": c(t, d) }]),
						disabled: e.isDisabled,
						inputmode: "numeric",
						min: "1",
						step: "1",
						type: "number",
						value: t.weight,
						onInput: (e) => r("updateRowWeight", d, a(e))
					}, null, 42, Yv)]),
					L("td", null, [L("output", { for: `species-table-weight-${d}` }, D(m(e.summaries[d])), 9, Xv)]),
					L("td", null, [L("button", {
						class: "dui-btn dui-btn-error dui-btn-outline dui-btn-sm",
						disabled: e.isDisabled,
						title: `Remove ${t.name || `row ${d + 1}`}`,
						type: "button",
						onClick: (e) => r("removeRow", d)
					}, [n[4] ||= L("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-trash"
					}, null, -1), L("span", Qv, "Remove row " + D(d + 1), 1)], 8, Zv)])
				], 2))), 128))])
			])])) : (P(), F("div", $v, [...n[7] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), L("span", null, "Add at least one species to create a managed world table.", -1)]]))
		])]));
	}
}), ty = ["aria-current"], ny = { class: "dui-list-col-grow app:flex app:min-w-0 app:flex-col app:gap-1" }, ry = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, iy = { class: "app:flex app:flex-wrap app:items-center app:gap-1" }, ay = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, oy = {
	key: 1,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, sy = ["title"], cy = { class: "app:sr-only" }, ly = ["aria-label", "disabled"], uy = /* @__PURE__ */ j({
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
		return (t, r) => (P(), F("li", {
			class: E(["dui-list-row", {
				"app:outline app:outline-1 app:outline-error": e.validationIndicator?.severity === "error",
				"app:outline app:outline-1 app:outline-warning": e.validationIndicator?.severity === "warning"
			}]),
			"aria-current": e.isSelected ? "true" : void 0
		}, [
			L("i", {
				"aria-hidden": "true",
				class: E(e.iconClass)
			}, null, 2),
			L("span", ny, [L("span", ry, [L("strong", null, D(e.title), 1), L("span", { class: E(["dui-badge dui-badge-outline dui-badge-sm", {
				"dui-badge-info": e.isSelected,
				"dui-badge-ghost": !e.isSelected
			}]) }, D(e.entryKey), 3)]), L("span", iy, [
				e.isReadOnly ? (P(), F("span", ay, [r[1] ||= L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-lock"
				}, null, -1), z(" " + D(e.readOnlyLabel), 1)])) : B("", !0),
				e.meta ? (P(), F("span", oy, D(e.meta), 1)) : B("", !0),
				e.validationIndicator ? (P(), F("span", {
					key: 2,
					class: E(["dui-badge dui-badge-sm", e.validationIndicator.severity === "error" ? "dui-badge-error" : "dui-badge-warning"]),
					title: k(Vm)(e.validationIndicator)
				}, [
					L("span", {
						"aria-hidden": "true",
						class: E(["dui-status dui-status-xs", e.validationIndicator.severity === "error" ? "dui-status-error" : "dui-status-warning"])
					}, null, 2),
					z(" " + D(e.validationIndicator.count) + " ", 1),
					L("span", cy, D(k(Vm)(e.validationIndicator)), 1)
				], 10, sy)) : B("", !0)
			])]),
			L("button", {
				"aria-label": `${e.actionLabel}: ${e.title}`,
				class: "dui-btn dui-btn-outline dui-btn-sm",
				disabled: e.isDisabled,
				type: "button",
				onClick: r[0] ||= (e) => n("open")
			}, [L("i", {
				"aria-hidden": "true",
				class: E(e.editIconClass)
			}, null, 2), z(" " + D(e.actionLabel), 1)], 8, ly)
		], 10, ty));
	}
}), dy = { class: "dui-card dui-card-border dui-card-sm" }, fy = { class: "dui-card-body" }, py = { class: "app:flex app:items-start app:justify-between app:gap-4" }, my = { class: "dui-card-actions app:items-center" }, hy = ["disabled"], gy = {
	key: 0,
	class: "dui-input app:w-full"
}, _y = {
	key: 1,
	role: "status",
	class: "dui-alert dui-alert-info"
}, vy = {
	key: 2,
	class: "app:flex app:flex-col app:gap-4"
}, yy = { "aria-labelledby": "species-builder-custom-species-heading" }, by = { class: "app:flex app:items-center app:justify-between app:gap-2" }, xy = { class: "dui-badge dui-badge-sm" }, Sy = {
	key: 0,
	role: "status",
	class: "dui-alert"
}, Cy = {
	key: 1,
	class: "dui-list"
}, wy = { "aria-labelledby": "species-builder-installed-species-heading" }, Ty = { class: "app:flex app:items-center app:justify-between app:gap-2" }, Ey = { class: "dui-badge dui-badge-ghost dui-badge-sm" }, Dy = {
	key: 0,
	role: "status",
	class: "dui-alert"
}, Oy = {
	key: 1,
	class: "dui-list"
}, ky = {
	key: 0,
	"aria-labelledby": "species-builder-unavailable-species-heading"
}, Ay = { class: "app:flex app:items-center app:justify-between app:gap-2" }, jy = { class: "dui-badge dui-badge-warning dui-badge-sm" }, My = { class: "dui-list" }, Ny = /* @__PURE__ */ j({
	__name: "SpeciesBuilderOverview",
	props: {
		definitions: {},
		isDisabled: { type: Boolean },
		selectedIndex: {},
		validationIndicators: {}
	},
	emits: ["addSpecies", "editSpecies"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ O(""), a = V(() => i.value.trim().toLocaleLowerCase()), o = V(() => n.definitions.map((e, t) => ({
			definition: e,
			index: t
		})).filter(({ definition: e }) => m(e))), s = V(() => o.value.filter(({ definition: e }) => e.origin === "custom")), c = V(() => o.value.filter(({ definition: e }) => e.origin === "runtime" && !e.runtimeUnavailable)), l = V(() => o.value.filter(({ definition: e }) => e.runtimeUnavailable)), u = V(() => n.definitions.filter((e) => e.origin === "runtime" && !e.runtimeUnavailable).length), d = V(() => n.definitions.filter((e) => e.origin === "custom").length);
		function f(e) {
			return e.name.trim() || e.key.trim() || "Untitled Species";
		}
		function p(e) {
			return e.key.trim() || hm(e);
		}
		function m(e) {
			let t = a.value;
			return !t || e.name.toLocaleLowerCase().includes(t) || e.key.toLocaleLowerCase().includes(t);
		}
		return (t, n) => (P(), F("section", dy, [L("div", fy, [
			L("header", py, [n[3] ||= L("div", null, [L("h2", {
				id: "species-builder-species-list-heading",
				class: "dui-card-title",
				tabindex: "-1"
			}, " Species Catalog "), L("p", { class: "app:m-0" }, " Manage your custom species or inspect species supplied by WFRP and active modules. ")], -1), L("div", my, [L("button", {
				class: "dui-btn dui-btn-primary",
				disabled: e.isDisabled,
				type: "button",
				onClick: n[0] ||= (e) => r("addSpecies")
			}, [...n[2] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), z(" New Species ", -1)]], 8, hy)])]),
			e.definitions.length > 0 ? (P(), F("label", gy, [n[4] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-magnifying-glass"
			}, null, -1), Wn(L("input", {
				"onUpdate:modelValue": n[1] ||= (e) => i.value = e,
				type: "search",
				placeholder: "Filter by species name or key"
			}, null, 512), [[Ko, i.value]])])) : B("", !0),
			e.definitions.length === 0 ? (P(), F("div", _y, [...n[5] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), L("span", null, "No species yet. Add one to begin.", -1)]])) : (P(), F("div", vy, [
				L("section", yy, [L("header", by, [n[6] ||= L("div", null, [L("h3", {
					id: "species-builder-custom-species-heading",
					class: "dui-card-title"
				}, " Custom Species "), L("p", { class: "app:m-0" }, "Species owned and editable by this world.")], -1), L("span", xy, D(d.value), 1)]), s.value.length === 0 ? (P(), F("div", Sy, [n[7] ||= L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-circle-info"
				}, null, -1), L("span", null, D(a.value ? "No custom species match this filter." : "No custom species yet."), 1)])) : (P(), F("ul", Cy, [(P(!0), F(N, null, M(s.value, (t) => (P(), I(uy, {
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
				L("section", wy, [L("header", Ty, [n[8] ||= L("div", null, [L("h3", {
					id: "species-builder-installed-species-heading",
					class: "dui-card-title"
				}, " Installed Species "), L("p", { class: "app:m-0" }, " Read-only reference data. You can add custom subspecies to these entries. ")], -1), L("span", Ey, D(u.value), 1)]), c.value.length === 0 ? (P(), F("div", Dy, [n[9] ||= L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-circle-info"
				}, null, -1), L("span", null, D(a.value ? "No installed species match this filter." : "No installed species were found."), 1)])) : (P(), F("ul", Oy, [(P(!0), F(N, null, M(c.value, (t) => (P(), I(uy, {
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
				l.value.length > 0 ? (P(), F("section", ky, [L("header", Ay, [n[10] ||= L("div", null, [L("h3", {
					id: "species-builder-unavailable-species-heading",
					class: "dui-card-title"
				}, " Unavailable Sources "), L("p", { class: "app:m-0" }, " The source package is inactive; custom variants are retained for recovery. ")], -1), L("span", jy, D(l.value.length), 1)]), L("ul", My, [(P(!0), F(N, null, M(l.value, (t) => (P(), I(uy, {
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
				]))), 128))])])) : B("", !0)
			]))
		])]));
	}
}), Py = { class: "dui-card dui-card-border dui-card-sm" }, Fy = { class: "dui-card-body" }, Iy = { class: "dui-mockup-code" }, Ly = { tabindex: "0" }, Ry = /* @__PURE__ */ j({
	__name: "WfrpConfigPanel",
	props: { generatedConfigText: {} },
	setup(e) {
		return (t, n) => (P(), F("section", Py, [L("div", Fy, [
			n[0] ||= L("h2", { class: "dui-card-title" }, "WFRP Config", -1),
			n[1] ||= L("p", null, " Read-only config generated from the current draft. This view grows with the outer application scroll area. ", -1),
			L("div", Iy, [L("pre", Ly, [L("code", null, D(e.generatedConfigText), 1)])])
		])]));
	}
}), zy = {
	key: 0,
	id: "species-builder-panel-settings",
	"aria-label": "Species Builder settings",
	role: "region"
}, By = {
	key: 1,
	id: "species-builder-panel-species-table",
	"aria-label": "Random Species table",
	role: "region"
}, Vy = {
	key: 2,
	id: "species-builder-panel-wfrp-config",
	"aria-label": "Generated WFRP configuration",
	role: "region"
}, Hy = {
	key: 3,
	id: "species-builder-panel-species",
	"aria-label": "Species definitions",
	role: "region"
}, Uy = /* @__PURE__ */ j({
	__name: "SpeciesBuilderProjectPages",
	props: {
		activeTab: {},
		isDisabled: { type: Boolean }
	},
	emits: ["editSpecies"],
	setup(e, { emit: t }) {
		let n = t, r = sm(), i = /* @__PURE__ */ O(sv[0]?.id ?? ""), a = V(() => r.definitions.map((e, t) => Bm(r.validationIssues.filter((e) => e.definitionIndex === t)))), o = V(() => r.validationIssues.filter((e) => e.scope === "species-table"));
		function s() {
			r.addBlankDefinition(), n("editSpecies", r.selectedIndex);
		}
		function c(e) {
			let t = lv(e);
			t && (r.addExamplePackage(t), n("editSpecies", r.selectedIndex));
		}
		function l() {
			r.addExamplePackage(cv()), n("editSpecies", r.selectedIndex);
		}
		return (t, u) => e.activeTab === "settings" ? (P(), F("section", zy, [R(Dv, {
			"auto-register-species-table": k(r).autoRegisterSpeciesTable,
			"example-species-options": k(sv),
			"is-disabled": e.isDisabled,
			"selected-example-species-id": i.value,
			"show-generated-config-tab": k(r).showGeneratedConfigTab,
			"species-table": k(r).speciesTable,
			onGenerateAllExampleSpecies: l,
			onGenerateExampleSpecies: c,
			onUpdateAutoRegisterSpeciesTable: k(r).updateAutoRegisterSpeciesTable,
			onUpdateSelectedExampleSpeciesId: u[0] ||= (e) => i.value = e,
			onUpdateShowGeneratedConfigTab: k(r).updateShowGeneratedConfigTab
		}, null, 8, [
			"auto-register-species-table",
			"example-species-options",
			"is-disabled",
			"selected-example-species-id",
			"show-generated-config-tab",
			"species-table",
			"onUpdateAutoRegisterSpeciesTable",
			"onUpdateShowGeneratedConfigTab"
		])])) : e.activeTab === "species-table" ? (P(), F("section", By, [R(ey, {
			draft: k(r).preparedSpeciesTable,
			"is-disabled": e.isDisabled,
			"is-validation-blocking": k(r).blockingValidationIssues.some((e) => e.scope === "species-table"),
			issues: o.value,
			options: k(r).speciesTableOptions,
			summaries: k(r).speciesTableSummaries,
			"validation-messages": k(r).speciesTableValidationMessages,
			onAddRow: k(r).addSpeciesTableRow,
			onRemoveRow: k(r).removeSpeciesTableRow,
			onUpdateRowKey: k(r).updateSpeciesTableRowKey,
			onUpdateRowWeight: k(r).updateSpeciesTableRowWeight
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
		])])) : e.activeTab === "wfrp-config" ? (P(), F("section", Vy, [R(Ry, { "generated-config-text": k(r).generatedConfigText }, null, 8, ["generated-config-text"])])) : (P(), F("section", Hy, [R(Ny, {
			definitions: k(r).definitions,
			"is-disabled": e.isDisabled,
			"selected-index": k(r).selectedIndex,
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
function Wy(e, t) {
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
var Gy = "wfrp4e-customizer-apps.document-drop", Ky = { class: "dui-list" }, qy = [
	"aria-label",
	"disabled",
	"title",
	"onClick"
], Jy = ["src"], Yy = {
	key: 1,
	"aria-hidden": "true",
	class: "fa-solid fa-scroll"
}, Xy = {
	key: 1,
	class: "dui-list-row"
}, Zy = /* @__PURE__ */ j({
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
		return (t, n) => (P(), F("ul", Ky, [e.documents.length > 0 ? (P(!0), F(N, { key: 0 }, M(e.documents, (t) => (P(), F("li", {
			key: t.uuid,
			class: "dui-list-row"
		}, [L("button", {
			"aria-label": e.isClickable ? `Use ${t.name}` : void 0,
			class: "dui-btn dui-btn-ghost",
			disabled: !e.isClickable,
			title: e.isClickable ? t.name : void 0,
			type: "button",
			onClick: Qo((e) => r(t), ["stop"])
		}, [t.img ? (P(), F("img", {
			key: 0,
			alt: "",
			"aria-hidden": "true",
			src: t.img
		}, null, 8, Jy)) : (P(), F("i", Yy)), L("span", null, D(t.name), 1)], 8, qy)]))), 128)) : (P(), F("li", Xy, [n[0] ||= L("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-arrow-down"
		}, null, -1), L("span", null, D(e.emptyLabel), 1)]))]));
	}
}), Qy = { class: "dui-card-body dui-fieldset" }, $y = ["for"], eb = ["id", "value"], tb = ["for"], nb = ["id", "value"], rb = { class: "dui-card-actions" }, ib = /* @__PURE__ */ j({
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
		let n = t, r = _r(), i = _r();
		function a(e) {
			let t = e.target instanceof HTMLSelectElement ? e.target.value : "auto";
			(t === "Actor" || t === "auto" || t === "Item" || t === "JournalEntry" || t === "JournalEntryPage") && n("updateDocumentType", t);
		}
		function o(e) {
			n("updateDocumentValue", e.target instanceof HTMLInputElement ? e.target.value : "");
		}
		return (t, s) => (P(), F("form", {
			class: "dui-card dui-card-border dui-card-sm",
			onClick: s[2] ||= Qo(() => {}, ["stop"]),
			onSubmit: s[3] ||= Qo((e) => n("submit"), ["prevent"])
		}, [L("fieldset", Qy, [
			s[6] ||= L("legend", { class: "dui-fieldset-legend" }, "Manual document entry", -1),
			L("label", {
				class: "dui-label",
				for: k(r)
			}, "Document type", 8, $y),
			L("select", {
				id: k(r),
				class: "dui-select",
				value: e.documentType,
				onChange: a
			}, [...s[4] ||= [Da("<option value=\"auto\">Auto</option><option value=\"Item\">Item</option><option value=\"Actor\">Actor</option><option value=\"JournalEntry\">Journal Entry</option><option value=\"JournalEntryPage\">Journal Page</option>", 5)]], 40, eb),
			L("label", {
				class: "dui-label",
				for: k(i)
			}, "UUID or drop JSON", 8, tb),
			L("input", {
				id: k(i),
				class: "dui-input",
				value: e.documentValue,
				placeholder: "Compendium.package.pack.id",
				type: "text",
				onInput: o
			}, null, 40, nb),
			L("div", rb, [
				s[5] ||= L("button", {
					class: "dui-btn dui-btn-primary",
					type: "submit"
				}, "Use", -1),
				L("button", {
					class: "dui-btn",
					type: "button",
					onClick: s[0] ||= (e) => n("startPick")
				}, D(e.isPickingDocument ? "Waiting..." : "Pick Next Click"), 1),
				L("button", {
					class: "dui-btn dui-btn-ghost",
					type: "button",
					onClick: s[1] ||= (e) => n("close")
				}, "Cancel")
			])
		])], 32));
	}
}), ab = ["aria-label", "aria-disabled"], ob = { key: 0 }, sb = {
	key: 1,
	class: "dui-alert dui-alert-info",
	role: "status"
}, cb = { key: 2 }, lb = {
	key: 4,
	class: "dui-card-actions"
}, ub = ["disabled"], db = /* @__PURE__ */ j({
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
		let n = e, r = qn(Gy);
		if (!r) throw Error("DocumentDrop requires a document drop bridge from its application host.");
		let i = $r(), a = t, o = /* @__PURE__ */ O(!1), s = /* @__PURE__ */ O(!1), c = /* @__PURE__ */ O(!1), l = /* @__PURE__ */ O("auto"), u = /* @__PURE__ */ O(""), d, f = V(() => !!i.prompt), p = V(() => !!i.default), m = V(() => n.showPrompt && (f.value || n.title.length > 0)), h = V(() => n.showDocuments ? n.documents : []), g = V(() => n.manualEntryTrigger === "button"), _ = V(() => n.variant === "bare" ? [] : [
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
			e.preventDefault(), e.stopPropagation(), o.value = !1, !n.disabled && a("dropData", e.dataTransfer?.getData("text/plain") ?? "");
		}
		function x() {
			n.manualEntryTrigger !== "none" && (s.value = !0);
		}
		function S() {
			s.value = !1, ne();
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
		function te() {
			n.disabled || d || (c.value = !0, d = r.startDocumentPick(re));
		}
		function ne() {
			let e = d;
			d = void 0, c.value = !1, e?.();
		}
		function re(e) {
			a("dropData", e), S();
		}
		return Fr(() => {
			ne();
		}), Zn(() => n.disabled, (e) => {
			e && (o.value = !1, S());
		}), (t, n) => (P(), F("div", ja(t.$attrs, {
			class: _.value,
			"aria-label": e.title,
			"aria-disabled": e.disabled,
			role: "group",
			onDragenter: Qo(y, ["prevent"]),
			onDragover: Qo(y, ["prevent"]),
			onDragleave: v,
			onDrop: b
		}), [L("div", { class: E(e.variant === "bare" ? void 0 : "dui-card-body") }, [
			m.value ? (P(), F("div", {
				key: 0,
				class: E(["dui-alert dui-alert-info", { "dui-alert-outline": !o.value }])
			}, [
				n[3] ||= L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-arrow-down"
				}, null, -1),
				L("div", null, [Kr(t.$slots, "prompt", {}, () => [L("strong", null, D(e.title), 1), e.description ? (P(), F("p", ob, D(e.description), 1)) : B("", !0)])]),
				L("span", { class: E(["dui-badge", { "dui-badge-info": o.value }]) }, D(o.value ? "Release to add" : "Drop zone"), 3)
			], 2)) : o.value ? (P(), F("div", sb, [n[4] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-arrow-down"
			}, null, -1), L("span", null, "Release to add " + D(e.title.toLowerCase()) + ".", 1)])) : B("", !0),
			p.value ? (P(), F("div", cb, [Kr(t.$slots, "default")])) : B("", !0),
			e.showDocuments ? (P(), I(Zy, {
				key: 3,
				documents: h.value,
				"empty-label": e.emptyDocumentLabel,
				"is-clickable": e.documentsClickable,
				onDocumentClicked: n[0] ||= (e) => a("documentClicked", e)
			}, null, 8, [
				"documents",
				"empty-label",
				"is-clickable"
			])) : B("", !0),
			g.value ? (P(), F("div", lb, [L("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: Qo(C, ["stop"])
			}, D(s.value ? "Close Manual Entry" : "Manual Entry"), 9, ub)])) : B("", !0),
			s.value && !e.disabled ? (P(), I(ib, {
				key: 5,
				"document-type": l.value,
				"document-value": u.value,
				"is-picking-document": c.value,
				onClose: S,
				onStartPick: te,
				onSubmit: ee,
				onUpdateDocumentType: n[1] ||= (e) => l.value = e,
				onUpdateDocumentValue: n[2] ||= (e) => u.value = e
			}, null, 8, [
				"document-type",
				"document-value",
				"is-picking-document"
			])) : B("", !0)
		], 2)], 16, ab));
	}
}), fb = [
	U.WeaponSkill,
	U.BallisticSkill,
	U.Strength,
	U.Toughness,
	U.Initiative,
	U.Agility,
	U.Dexterity,
	U.Intelligence,
	U.Willpower,
	U.Fellowship
], pb = [
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
], mb = [
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
], hb = {
	skills: "Skills granted during character creation. Drop Skill items to link their sheets, or add names manually.",
	talents: "Talents granted during character creation. Multiple choices in one grant become WFRP's comma-separated either/or entry.",
	traits: "Traits granted by this species or subspecies. Drop Trait items to link their sheets, or add names manually."
};
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/validation-presentation.ts
function gb(e) {
	return typeof e == "string" ? [e] : e;
}
function _b(e, t, n, r) {
	return e.filter((e) => gb(t).includes(e.field ?? "") && e.rowIndex === n && e.choiceIndex === r);
}
function vb(e, t) {
	return e.filter((e) => gb(t).includes(e.field ?? ""));
}
function yb(e, t) {
	return e.filter((e) => e.rowIndex === t);
}
function bb(e, t, n) {
	return e.filter((e) => gb(t).includes(e.field ?? "") && e.rowIndex === n);
}
function xb(e, t, n) {
	return e.filter((e) => e.rowIndex === t && e.choiceIndex === n);
}
function Sb(e) {
	return e.filter((e) => e.rowIndex === void 0 && e.field === void 0);
}
function Cb(e) {
	return e.filter((e) => e.rowIndex === void 0);
}
function wb(e) {
	return [...new Set(e.map((e) => e.message))];
}
function Tb(e) {
	return e.some((e) => e.severity !== "warning") ? "error" : e.length > 0 ? "warning" : void 0;
}
function Eb(e) {
	return Tb(e) === "error";
}
function Q(e, t, n) {
	let r = Tb(e);
	return r === "error" ? t : r === "warning" ? n : void 0;
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/components/LinkedItemDropValue.vue?vue&type=script&setup=true&lang.ts
var Db = [
	"aria-invalid",
	"disabled",
	"title",
	"value"
], Ob = {
	key: 3,
	class: "app:grid app:gap-1",
	role: "alert"
}, kb = /* @__PURE__ */ j({
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
			return wb(n.issues);
		}
		return (t, n) => (P(), I(db, {
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
			default: A(() => [!e.value.item?.uuid && e.isEditable ? (P(), F("input", {
				key: 0,
				"aria-invalid": k(Eb)(e.issues) || void 0,
				class: E(["dui-input", k(Q)(e.issues, "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				title: e.inputTitle,
				value: e.value.name,
				type: "text",
				onInput: n[0] ||= (e) => r("updateName", i(e))
			}, null, 42, Db)) : e.value.name ? (P(), F("div", {
				key: 1,
				class: E(["dui-alert", k(Q)(e.issues, "dui-alert-error", "dui-alert-warning") ?? "dui-alert-info"])
			}, [L("strong", null, D(e.value.name), 1), n[3] ||= L("span", null, "Stored by name. Drop the matching Item to link its sheet.", -1)], 2)) : (P(), F("div", {
				key: 2,
				class: E(["dui-alert", k(Q)(e.issues, "dui-alert-error", "dui-alert-warning")])
			}, [...n[4] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-arrow-down"
			}, null, -1), L("span", null, "No item selected.", -1)]], 2)), a().length ? (P(), F("div", Ob, [(P(!0), F(N, null, M(a(), (t) => (P(), F("p", {
				key: t,
				class: E(["app:m-0 app:text-xs", k(Q)(e.issues, "app:text-error", "app:text-warning")])
			}, D(t), 3))), 128))])) : B("", !0)]),
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
}), Ab = ["disabled", "title"], jb = /* @__PURE__ */ j({
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
		return (t, r) => (P(), F("li", { class: E(["dui-list-row", k(Q)(e.issues, "app:border app:border-error", "app:border app:border-warning")]) }, [R(kb, {
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
		]), L("button", {
			disabled: e.isDisabled,
			title: e.removeTitle,
			class: "dui-btn dui-btn-error dui-btn-sm",
			type: "button",
			onClick: r[3] ||= (e) => n("remove")
		}, [...r[4] ||= [L("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-trash"
		}, null, -1), z(" Remove ", -1)]], 8, Ab)], 2));
	}
}), Mb = { class: "app:grid app:gap-3" }, Nb = { class: "dui-card-body" }, Pb = { class: "app:flex app:items-start app:justify-between app:gap-4" }, Fb = { class: "dui-card-title" }, Ib = { class: "app:m-0" }, Lb = { class: "dui-card-actions app:items-center" }, Rb = { class: "dui-badge" }, zb = [
	"disabled",
	"title",
	"onClick"
], Bb = {
	key: 1,
	class: "dui-join"
}, Vb = ["disabled"], Hb = ["disabled"], Ub = {
	key: 1,
	class: "dui-list"
}, Wb = {
	key: 2,
	class: "dui-list"
}, Gb = { class: "dui-badge dui-badge-ghost" }, Kb = { class: "dui-list-col-grow" }, qb = { key: 0 }, Jb = { class: "dui-list" }, Yb = { class: "dui-join" }, Xb = ["disabled", "onClick"], Zb = ["disabled", "onClick"], Qb = {
	key: 3,
	class: "dui-alert",
	role: "status"
}, $b = /* @__PURE__ */ j({
	__name: "ArrayFields",
	props: {
		fields: {},
		isDisabled: { type: Boolean },
		issues: {},
		values: {}
	},
	setup(e) {
		let t = e, n = sm(), r = V(() => mb.filter((e) => !t.fields || t.fields.includes(e.field)));
		function i(e) {
			return od(t.values[e], a(e));
		}
		function a(e) {
			return e === "skills" ? t.values.linkedSkills : t.values.linkedTraits;
		}
		function o() {
			return sd(t.values.talents, t.values.linkedTalents);
		}
		function s(e) {
			return e === "talents" ? o().length : i(e).length;
		}
		function c(e) {
			return _b(t.issues, e);
		}
		function l(e) {
			return wb(c(e));
		}
		function u(e, n) {
			return bb(t.issues, e, n);
		}
		function d(e, n) {
			return _b(t.issues, "talents", e, n);
		}
		return (t, a) => (P(), F("div", Mb, [(P(!0), F(N, null, M(r.value, (t) => (P(), F("section", {
			key: t.field,
			class: "dui-card dui-card-border dui-card-sm"
		}, [L("div", Nb, [
			L("header", Pb, [L("div", null, [L("h3", Fb, D(t.label), 1), L("p", Ib, D(k(hb)[t.field]), 1)]), L("div", Lb, [L("span", Rb, D(s(t.field)), 1), t.field === "talents" ? (P(), F("div", Bb, [L("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				disabled: e.isDisabled,
				title: "Add one guaranteed Talent",
				type: "button",
				onClick: a[0] ||= (e) => k(n).addTalentGrant("single")
			}, [...a[5] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), z(" Talent ", -1)]], 8, Vb), L("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				disabled: e.isDisabled,
				title: "Add a Talent choice set. WFRP stores this as one comma-separated Talent entry.",
				type: "button",
				onClick: a[1] ||= (e) => k(n).addTalentGrant("choice")
			}, [...a[6] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-list-check"
			}, null, -1), z(" Choice Set ", -1)]], 8, Hb)])) : (P(), F("button", {
				key: 0,
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: `Add a ${t.label.slice(0, -1)} row`,
				type: "button",
				onClick: (e) => k(n).addLinkedItem(k(ad)(t.field))
			}, [...a[4] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), z(" Add ", -1)]], 8, zb))])]),
			R(db, {
				description: `Drop a WFRP ${t.label.slice(0, -1)} item to add it to this list.`,
				disabled: e.isDisabled,
				title: `Drop ${t.label}`,
				variant: "compact",
				onDropData: (e) => k(n).appendArrayFieldDrop(t.field, e)
			}, null, 8, [
				"description",
				"disabled",
				"title",
				"onDropData"
			]),
			l(t.field).length ? (P(), F("div", {
				key: 0,
				class: E(["dui-alert", k(Q)(c(t.field), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [a[7] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), L("div", null, [(P(!0), F(N, null, M(l(t.field), (e) => (P(), F("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, D(e), 1))), 128))])], 2)) : B("", !0),
			t.field !== "talents" && i(t.field).length > 0 ? (P(), F("ul", Ub, [(P(!0), F(N, null, M(i(t.field), (r, i) => (P(), I(jb, {
				key: `${t.field}-${i}`,
				"drop-description": `Drop a WFRP ${t.label.slice(0, -1)} item to link or replace this row.`,
				"drop-title": `Link ${t.label.slice(0, -1)}`,
				"input-title": `${t.label.slice(0, -1)} name used by WFRP item lookup`,
				"is-disabled": e.isDisabled,
				issues: u(t.field, i),
				"remove-title": `Remove ${r.name}`,
				value: r,
				onDropData: (e) => k(n).setLinkedItemDrop(k(ad)(t.field), i, e),
				onOpenItem: a[2] ||= (e) => k(n).openItemSheet(e),
				onRemove: (e) => k(n).removeLinkedItem(k(ad)(t.field), i),
				onUpdateName: (e) => k(n).renameLinkedItem(k(ad)(t.field), i, e)
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
			]))), 128))])) : t.field === "talents" && o().length > 0 ? (P(), F("ul", Wb, [(P(!0), F(N, null, M(o(), (t, r) => (P(), F("li", {
				key: `talent-${r}`,
				class: E(["dui-list-row", k(Q)(u("talents", r), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				L("span", Gb, "Grant " + D(r + 1), 1),
				L("div", Kb, [
					L("strong", null, D(t.choices.length > 1 ? "Talent Choice" : "Guaranteed Talent"), 1),
					t.choices.length > 1 ? (P(), F("p", qb, "Choose one of these alternatives.")) : B("", !0),
					L("ul", Jb, [(P(!0), F(N, null, M(t.choices, (i, o) => (P(), I(jb, {
						key: `${r}-${o}`,
						"drop-description": "Drop a WFRP Talent item to link or replace this option.",
						"drop-title": "Link Talent",
						"input-title": t.choices.length > 1 ? "One Talent option offered for this choice set" : "Guaranteed Talent name",
						"is-disabled": e.isDisabled,
						issues: d(r, o),
						"remove-title": `Remove ${i.name}`,
						value: i,
						onDropData: (e) => k(n).setTalentChoiceDrop(r, o, e),
						onOpenItem: a[3] ||= (e) => k(n).openItemSheet(e),
						onRemove: (e) => k(n).removeTalentChoice(r, o),
						onUpdateName: (e) => k(n).renameTalentChoice(r, o, e)
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
				L("div", Yb, [L("button", {
					class: "dui-btn dui-btn-sm dui-join-item",
					disabled: e.isDisabled,
					title: "Add another alternative to this Talent choice",
					type: "button",
					onClick: (e) => k(n).addTalentChoice(r)
				}, [...a[8] ||= [L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-plus"
				}, null, -1), z(" Choice ", -1)]], 8, Xb), L("button", {
					disabled: e.isDisabled,
					title: "Remove this Talent grant",
					class: "dui-btn dui-btn-error dui-btn-sm dui-join-item",
					type: "button",
					onClick: (e) => k(n).removeTalentGrant(r)
				}, [...a[9] ||= [L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), z(" Remove ", -1)]], 8, Zb)])
			], 2))), 128))])) : (P(), F("div", Qb, [a[10] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), L("span", null, "No " + D(t.label.toLowerCase()) + " yet.", 1)]))
		])]))), 128))]));
	}
}), ex = { class: "dui-table dui-table-sm" }, tx = { scope: "row" }, nx = ["for"], rx = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], ix = ["id"], ax = /* @__PURE__ */ j({
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
			return _b(n.issues, `characteristics.${e}`);
		}
		function o(e) {
			return wb(a(e));
		}
		return (t, n) => (P(), F("table", ex, [n[0] ||= L("thead", null, [L("tr", null, [L("th", { scope: "col" }, "Characteristic"), L("th", { scope: "col" }, "Starting formula")])], -1), L("tbody", null, [(P(!0), F(N, null, M(k(fb), (t) => (P(), F("tr", { key: t }, [L("th", tx, [L("label", { for: `species-characteristic-${t}` }, D(k(Mc)[t]), 9, nx)]), L("td", null, [L("input", {
			id: `species-characteristic-${t}`,
			"aria-describedby": a(t).length ? `species-characteristic-${t}-errors` : void 0,
			"aria-invalid": k(Eb)(a(t)) || void 0,
			class: E(["dui-input dui-input-sm", k(Q)(a(t), "dui-input-error", "dui-input-warning")]),
			disabled: e.isDisabled,
			placeholder: "2d10+20",
			value: e.characteristics?.[t] ?? "",
			type: "text",
			onInput: (e) => r("update", t, i(e))
		}, null, 42, rx), o(t).length ? (P(), F("div", {
			key: 0,
			id: `species-characteristic-${t}-errors`
		}, [(P(!0), F(N, null, M(o(t), (e) => (P(), F("p", {
			key: e,
			class: E(["app:m-0 app:text-xs", k(Q)(a(t), "app:text-error", "app:text-warning")])
		}, D(e), 3))), 128))], 8, ix)) : B("", !0)])]))), 128))])]));
	}
}), ox = { class: "dui-table dui-table-sm" }, sx = { scope: "row" }, cx = ["for"], lx = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], ux = ["id"], dx = /* @__PURE__ */ j({
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
			return _b(n.issues, e);
		}
		function o(e) {
			return wb(a(e));
		}
		return (t, n) => (P(), F("table", ox, [n[0] ||= L("thead", null, [L("tr", null, [L("th", { scope: "col" }, "Stat"), L("th", { scope: "col" }, "Value")])], -1), L("tbody", null, [(P(!0), F(N, null, M(k(pb).filter(({ field: t }) => e.fields.includes(t)), (t) => (P(), F("tr", { key: t.field }, [L("th", sx, [L("label", { for: `species-stat-${t.field}` }, D(t.label), 9, cx)]), L("td", null, [L("input", {
			id: `species-stat-${t.field}`,
			"aria-describedby": a(t.field).length ? `species-stat-${t.field}-errors` : void 0,
			"aria-invalid": k(Eb)(a(t.field)) || void 0,
			class: E(["dui-input dui-input-sm", k(Q)(a(t.field), "dui-input-error", "dui-input-warning")]),
			disabled: e.isDisabled,
			value: e.values[t.field] ?? "",
			type: "number",
			onInput: (e) => r("update", t.field, i(e))
		}, null, 42, lx), o(t.field).length ? (P(), F("div", {
			key: 0,
			id: `species-stat-${t.field}-errors`
		}, [(P(!0), F(N, null, M(o(t.field), (e) => (P(), F("p", {
			key: e,
			class: E(["app:m-0 app:text-xs", k(Q)(a(t.field), "app:text-error", "app:text-warning")])
		}, D(e), 3))), 128))], 8, ux)) : B("", !0)])]))), 128))])]));
	}
}), fx = { class: "app:grid app:gap-3" }, px = { class: "dui-card dui-card-border dui-card-sm" }, mx = { class: "dui-card-body" }, hx = { class: "dui-fieldset" }, gx = { class: "dui-card dui-card-border dui-card-sm" }, _x = { class: "dui-card-body" }, vx = { class: "dui-fieldset" }, yx = /* @__PURE__ */ j({
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
		return (t, i) => (P(), F("section", fx, [L("section", px, [L("div", mx, [L("fieldset", hx, [
			i[2] ||= L("legend", { class: "dui-fieldset-legend" }, "Characteristic Roll Formulas", -1),
			i[3] ||= L("p", { class: "dui-fieldset-label" }, " Starting formulas used by WFRP character creation, usually values such as 2d10+20. ", -1),
			R(ax, {
				characteristics: e.definition.characteristics,
				"is-disabled": e.isDisabled,
				issues: e.issues,
				onUpdate: i[0] ||= (e, t) => r("updateCharacteristic", e, t)
			}, null, 8, [
				"characteristics",
				"is-disabled",
				"issues"
			])
		])])]), L("section", gx, [L("div", _x, [L("fieldset", vx, [
			i[4] ||= L("legend", { class: "dui-fieldset-legend" }, "Movement, Fate And Resilience", -1),
			i[5] ||= L("p", { class: "dui-fieldset-label" }, " Set base Movement plus starting Fate, Resilience, and extra points distributed between them. ", -1),
			R(dx, {
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
}), bx = { class: "app:flex app:flex-wrap app:gap-3" }, xx = { class: "dui-fieldset app:min-w-56 app:flex-1" }, Sx = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Cx = {
	key: 0,
	id: "species-age-errors"
}, wx = { class: "dui-fieldset app:min-w-56 app:flex-1" }, Tx = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Ex = {
	key: 0,
	id: "species-height-die-errors"
}, Dx = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Ox = {
	key: 1,
	id: "species-height-feet-errors"
}, kx = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Ax = {
	key: 2,
	id: "species-height-inches-errors"
}, jx = /* @__PURE__ */ j({
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
			return _b(n.issues, e);
		}
		function o(e) {
			return wb(a(e));
		}
		return (t, n) => (P(), F("div", bx, [L("fieldset", xx, [
			n[4] ||= L("legend", { class: "dui-fieldset-legend" }, "Age", -1),
			n[5] ||= L("p", { class: "dui-fieldset-label" }, "Formula used by character creation to roll age.", -1),
			n[6] ||= L("label", {
				class: "dui-label",
				for: "species-age"
			}, "Age formula", -1),
			L("input", {
				id: "species-age",
				"aria-describedby": a("age").length ? "species-age-errors" : void 0,
				"aria-invalid": k(Eb)(a("age")) || void 0,
				class: E(["dui-input dui-input-sm app:w-full", k(Q)(a("age"), "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				placeholder: "2d10+15",
				value: e.definition.age ?? "",
				type: "text",
				onInput: n[0] ||= (e) => r("updateStringField", "age", i(e))
			}, null, 42, Sx),
			o("age").length ? (P(), F("div", Cx, [(P(!0), F(N, null, M(o("age"), (e) => (P(), F("p", {
				key: e,
				class: E(["app:m-0 app:text-xs", k(Q)(a("age"), "app:text-error", "app:text-warning")])
			}, D(e), 3))), 128))])) : B("", !0)
		]), L("fieldset", wx, [
			n[7] ||= L("legend", { class: "dui-fieldset-legend" }, "Height", -1),
			n[8] ||= L("p", { class: "dui-fieldset-label" }, "Formula and base measurements used to roll random height.", -1),
			n[9] ||= L("label", {
				class: "dui-label",
				for: "species-height-die"
			}, "Height die", -1),
			L("input", {
				id: "species-height-die",
				"aria-describedby": a("height.die").length ? "species-height-die-errors" : void 0,
				"aria-invalid": k(Eb)(a("height.die")) || void 0,
				class: E(["dui-input dui-input-sm app:w-full", k(Q)(a("height.die"), "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				placeholder: "1d10",
				value: e.definition.height?.die ?? "",
				type: "text",
				onInput: n[1] ||= (e) => r("updateHeightField", "die", i(e))
			}, null, 42, Tx),
			o("height.die").length ? (P(), F("div", Ex, [(P(!0), F(N, null, M(o("height.die"), (e) => (P(), F("p", {
				key: e,
				class: E(["app:m-0 app:text-xs", k(Q)(a("height.die"), "app:text-error", "app:text-warning")])
			}, D(e), 3))), 128))])) : B("", !0),
			n[10] ||= L("label", {
				class: "dui-label",
				for: "species-height-feet"
			}, "Base feet", -1),
			L("input", {
				id: "species-height-feet",
				"aria-describedby": a("height.feet").length ? "species-height-feet-errors" : void 0,
				"aria-invalid": k(Eb)(a("height.feet")) || void 0,
				class: E(["dui-input dui-input-sm app:w-full", k(Q)(a("height.feet"), "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				value: e.definition.height?.feet ?? "",
				type: "number",
				onInput: n[2] ||= (e) => r("updateHeightField", "feet", i(e))
			}, null, 42, Dx),
			o("height.feet").length ? (P(), F("div", Ox, [(P(!0), F(N, null, M(o("height.feet"), (e) => (P(), F("p", {
				key: e,
				class: E(["app:m-0 app:text-xs", k(Q)(a("height.feet"), "app:text-error", "app:text-warning")])
			}, D(e), 3))), 128))])) : B("", !0),
			n[11] ||= L("label", {
				class: "dui-label",
				for: "species-height-inches"
			}, "Base inches", -1),
			L("input", {
				id: "species-height-inches",
				"aria-describedby": a("height.inches").length ? "species-height-inches-errors" : void 0,
				"aria-invalid": k(Eb)(a("height.inches")) || void 0,
				class: E(["dui-input dui-input-sm app:w-full", k(Q)(a("height.inches"), "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				value: e.definition.height?.inches ?? "",
				type: "number",
				onInput: n[3] ||= (e) => r("updateHeightField", "inches", i(e))
			}, null, 42, kx),
			o("height.inches").length ? (P(), F("div", Ax, [(P(!0), F(N, null, M(o("height.inches"), (e) => (P(), F("p", {
				key: e,
				class: E(["app:m-0 app:text-xs", k(Q)(a("height.inches"), "app:text-error", "app:text-warning")])
			}, D(e), 3))), 128))])) : B("", !0)
		])]));
	}
}), Mx = { class: "app:grid app:gap-3" }, Nx = { class: "app:flex app:flex-wrap app:gap-3" }, Px = { class: "dui-card dui-card-border dui-card-sm app:min-w-64 app:flex-1" }, Fx = { class: "dui-card-body" }, Ix = { class: "dui-fieldset" }, Lx = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Rx = {
	key: 0,
	id: "species-name-errors"
}, zx = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"placeholder",
	"value"
], Bx = {
	key: 1,
	id: "species-key-errors"
}, Vx = { class: "dui-card dui-card-border dui-card-sm app:min-w-64 app:flex-1" }, Hx = { class: "dui-card-body" }, Ux = { class: "dui-fieldset" }, Wx = { class: "dui-label" }, Gx = ["checked", "disabled"], Kx = { class: "dui-card dui-card-border dui-card-sm" }, qx = { class: "dui-card-body" }, Jx = /* @__PURE__ */ j({
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
			return _b(n.issues, e);
		}
		function s(e) {
			return wb(o(e));
		}
		function c() {
			return Sb(n.issues);
		}
		return (t, n) => (P(), F("section", Mx, [
			c().length ? (P(), F("div", {
				key: 0,
				class: E(["dui-alert", k(Q)(c(), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [L("i", {
				"aria-hidden": "true",
				class: E(["fa-solid", k(Eb)(c()) ? "fa-circle-exclamation" : "fa-triangle-exclamation"])
			}, null, 2), L("div", null, [(P(!0), F(N, null, M(k(wb)(c()), (e) => (P(), F("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, D(e), 1))), 128))])], 2)) : B("", !0),
			L("div", Nx, [L("section", Px, [L("div", Fx, [L("fieldset", Ix, [
				n[5] ||= L("legend", { class: "dui-fieldset-legend" }, "Identity", -1),
				n[6] ||= L("p", { class: "dui-fieldset-label" }, " The name is shown to users. The key identifies this species in generated WFRP config. ", -1),
				n[7] ||= L("label", {
					class: "dui-label",
					for: "species-name"
				}, "Name", -1),
				L("input", {
					id: "species-name",
					"aria-describedby": o("name").length ? "species-name-errors" : void 0,
					"aria-invalid": k(Eb)(o("name")) || void 0,
					class: E(["dui-input dui-input-sm app:w-full", k(Q)(o("name"), "dui-input-error", "dui-input-warning")]),
					disabled: e.isDisabled,
					value: e.definition.name,
					type: "text",
					onInput: n[0] ||= (e) => r("updateStringField", "name", i(e))
				}, null, 42, Lx),
				s("name").length ? (P(), F("div", Rx, [(P(!0), F(N, null, M(s("name"), (e) => (P(), F("p", {
					key: e,
					class: E(["app:m-0 app:text-xs", k(Q)(o("name"), "app:text-error", "app:text-warning")])
				}, D(e), 3))), 128))])) : B("", !0),
				n[8] ||= L("label", {
					class: "dui-label",
					for: "species-key"
				}, "Key", -1),
				L("input", {
					id: "species-key",
					"aria-describedby": o("key").length ? "species-key-errors" : void 0,
					"aria-invalid": k(Eb)(o("key")) || void 0,
					class: E(["dui-input dui-input-sm app:w-full", k(Q)(o("key"), "dui-input-error", "dui-input-warning")]),
					disabled: e.isDisabled,
					placeholder: k(hm)(e.definition),
					value: e.definition.key,
					type: "text",
					onInput: n[1] ||= (e) => r("updateStringField", "key", i(e))
				}, null, 42, zx),
				s("key").length ? (P(), F("div", Bx, [(P(!0), F(N, null, M(s("key"), (e) => (P(), F("p", {
					key: e,
					class: E(["app:m-0 app:text-xs", k(Q)(o("key"), "app:text-error", "app:text-warning")])
				}, D(e), 3))), 128))])) : B("", !0)
			])])]), L("section", Vx, [L("div", Hx, [L("fieldset", Ux, [
				n[10] ||= L("legend", { class: "dui-fieldset-legend" }, "WFRP Availability", -1),
				n[11] ||= L("p", { class: "dui-fieldset-label" }, " Choose whether character creation lists this custom species. ", -1),
				L("label", Wx, [L("input", {
					class: "dui-checkbox",
					checked: e.definition.includeInExtraSpecies,
					disabled: e.isDisabled,
					type: "checkbox",
					onChange: n[2] ||= (e) => r("updateBooleanField", "includeInExtraSpecies", a(e))
				}, null, 40, Gx), n[9] ||= L("span", null, "Show in WFRP extra species options", -1)])
			])])])]),
			L("section", Kx, [L("div", qx, [n[12] ||= L("h3", { class: "dui-card-title" }, "Character Creation", -1), R(jx, {
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
}), Yx = { class: "dui-fieldset" }, Xx = { class: "dui-fieldset-legend" }, Zx = /* @__PURE__ */ j({
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
		return (t, r) => (P(), F("fieldset", Yx, [L("legend", Xx, D(e.label), 1), R(kb, {
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
}), Qx = { class: "dui-card dui-card-border dui-card-sm" }, $x = { class: "dui-card-body" }, eS = {
	key: 1,
	class: "dui-list"
}, tS = { class: "dui-badge dui-badge-ghost" }, nS = { class: "dui-list-col-grow" }, rS = { class: "dui-list" }, iS = { class: "dui-badge dui-badge-ghost" }, aS = ["disabled", "onClick"], oS = { class: "dui-join" }, sS = ["disabled", "onClick"], cS = ["disabled", "onClick"], lS = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, uS = /* @__PURE__ */ j({
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
			return n.rows?.length ? n.rows : ff(n.values);
		}
		function a() {
			r("updateRows", af(i()));
		}
		function o(e) {
			r("updateRows", of(i(), e));
		}
		function s(e, t) {
			r("updateRows", sf(i(), e, t));
		}
		function c(e) {
			r("updateRows", cf(i(), e));
		}
		function l() {
			return wb(Cb(n.issues));
		}
		return (t, n) => (P(), F("section", Qx, [L("div", $x, [
			R(jv, {
				"action-label": "Add Rule",
				"action-title": "Add a rolled Career and replacement choices",
				count: i().length,
				description: "Offer one or more replacement Careers for a rolled Career group.",
				"is-disabled": e.isDisabled,
				title: "Career Replacements",
				onAdd: a
			}, null, 8, ["count", "is-disabled"]),
			l().length ? (P(), F("div", {
				key: 0,
				class: E(["dui-alert", k(Q)(k(Cb)(e.issues), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[2] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), L("div", null, [(P(!0), F(N, null, M(l(), (e) => (P(), F("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, D(e), 1))), 128))])], 2)) : B("", !0),
			i().length > 0 ? (P(), F("ul", eS, [(P(!0), F(N, null, M(i(), (t, i) => (P(), F("li", {
				key: `career-replacement-${i}`,
				class: E(["dui-list-row", k(Q)(k(yb)(e.issues, i), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				L("span", tS, "Rule " + D(i + 1), 1),
				L("div", nS, [
					R(Zx, {
						description: "Drop the Career result that should allow replacement choices.",
						"is-disabled": e.isDisabled,
						issues: k(_b)(e.issues, "rolled", i),
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
					n[4] ||= L("strong", null, "Replacement choices", -1),
					L("ul", rS, [(P(!0), F(N, null, M(t.replacements, (t, a) => (P(), F("li", {
						key: `${i}-${a}`,
						class: E(["dui-list-row", k(Q)(k(xb)(e.issues, i, a), "app:border app:border-error", "app:border app:border-warning")])
					}, [
						L("span", iS, D(a + 1), 1),
						R(Zx, {
							class: "dui-list-col-grow",
							description: "Drop one Career offered instead of the rolled Career.",
							"is-disabled": e.isDisabled,
							issues: k(_b)(e.issues, "replacement", i, a),
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
						L("button", {
							disabled: e.isDisabled,
							title: "Remove this replacement Career choice",
							class: "dui-btn dui-btn-error dui-btn-sm",
							type: "button",
							onClick: (e) => s(i, a)
						}, [...n[3] ||= [L("i", {
							"aria-hidden": "true",
							class: "fa-solid fa-xmark"
						}, null, -1), z(" Remove ", -1)]], 8, aS)
					], 2))), 128))])
				]),
				L("div", oS, [L("button", {
					class: "dui-btn dui-btn-sm dui-join-item",
					disabled: e.isDisabled,
					title: "Add another replacement Career choice",
					type: "button",
					onClick: (e) => o(i)
				}, [...n[5] ||= [L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-plus"
				}, null, -1), z(" Choice ", -1)]], 8, sS), L("button", {
					disabled: e.isDisabled,
					title: "Remove this Career replacement rule",
					class: "dui-btn dui-btn-error dui-btn-sm dui-join-item",
					type: "button",
					onClick: (e) => c(i)
				}, [...n[6] ||= [L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), z(" Remove Rule ", -1)]], 8, cS)])
			], 2))), 128))])) : (P(), F("div", lS, [...n[7] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), L("span", null, "No Career replacements.", -1)]]))
		])]));
	}
}), dS = { class: "dui-card dui-card-border dui-card-sm" }, fS = { class: "dui-card-body" }, pS = {
	key: 1,
	class: "dui-list"
}, mS = { class: "dui-badge dui-badge-ghost" }, hS = { class: "dui-list-col-grow" }, gS = {
	key: 0,
	class: "app:flex app:flex-wrap app:gap-1"
}, _S = {
	key: 0,
	class: "dui-badge dui-badge-outline dui-badge-sm"
}, vS = {
	key: 1,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, yS = { class: "dui-fieldset" }, bS = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], xS = ["id"], SS = { class: "dui-fieldset" }, CS = [
	"disabled",
	"value",
	"onInput"
], wS = ["disabled", "onClick"], TS = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, ES = /* @__PURE__ */ j({
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
			r("updateRows", Lu(n.rows));
		}
		function o(e) {
			r("updateRows", Ru(n.rows, e));
		}
		function s(e, t) {
			r("updateRows", zu(n.rows, e, t));
		}
		function c(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function l(e) {
			return _b(n.issues, "name", e);
		}
		function u(e) {
			return wb(l(e));
		}
		function d() {
			return wb(Cb(n.issues));
		}
		return (t, n) => (P(), F("section", dS, [L("div", fS, [
			R(jv, {
				"action-label": "Add Career",
				"action-title": "Add a Career table row",
				count: i().length,
				description: "Career group names drive character generation. Journal links provide the result link; blank links use the generated fallback journal.",
				"is-disabled": e.isDisabled,
				title: "Career Table",
				onAdd: a
			}, null, 8, ["count", "is-disabled"]),
			d().length ? (P(), F("div", {
				key: 0,
				class: E(["dui-alert", k(Q)(k(Cb)(e.issues), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[0] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), L("div", null, [(P(!0), F(N, null, M(d(), (e) => (P(), F("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, D(e), 1))), 128))])], 2)) : B("", !0),
			i().length > 0 ? (P(), F("ul", pS, [(P(!0), F(N, null, M(i(), (t, i) => (P(), F("li", {
				key: i,
				class: E(["dui-list-row", k(Q)(k(yb)(e.issues, i), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				L("span", mS, D(i + 1), 1),
				L("div", hS, [
					t.sourceRange || t.sourceWeight ? (P(), F("div", gS, [t.sourceRange ? (P(), F("span", _S, " Range " + D(t.sourceRange[0]) + "–" + D(t.sourceRange[1]), 1)) : B("", !0), t.sourceWeight ? (P(), F("span", vS, " Weight " + D(t.sourceWeight), 1)) : B("", !0)])) : B("", !0),
					R(db, {
						description: "Drop a WFRP Career item.",
						disabled: e.isDisabled,
						"manual-entry-trigger": "none",
						title: "Career",
						variant: "bare",
						onDropData: (e) => r("dropCareer", i, e)
					}, {
						default: A(() => [L("fieldset", yS, [
							n[1] ||= L("legend", { class: "dui-fieldset-legend" }, "Career Group", -1),
							L("input", {
								"aria-describedby": l(i).length ? `career-table-name-${i}-errors` : void 0,
								"aria-invalid": k(Eb)(l(i)) || void 0,
								class: E(["dui-input", k(Q)(l(i), "dui-input-error", "dui-input-warning")]),
								disabled: e.isDisabled,
								value: t.name,
								placeholder: "Pit Fighter",
								type: "text",
								onInput: (e) => s(i, { name: c(e) })
							}, null, 42, bS),
							u(i).length ? (P(), F("div", {
								key: 0,
								id: `career-table-name-${i}-errors`
							}, [(P(!0), F(N, null, M(u(i), (e) => (P(), F("p", {
								key: e,
								class: E(["app:m-0 app:text-xs", k(Q)(l(i), "app:text-error", "app:text-warning")])
							}, D(e), 3))), 128))], 8, xS)) : B("", !0)
						])]),
						_: 2
					}, 1032, ["disabled", "onDropData"]),
					R(db, {
						description: "Drop a Journal Entry or Journal Page.",
						disabled: e.isDisabled,
						"manual-entry-trigger": "button",
						title: "Journal Link",
						variant: "bare",
						onDropData: (e) => r("dropJournal", i, e)
					}, {
						default: A(() => [L("fieldset", SS, [n[2] ||= L("legend", { class: "dui-fieldset-legend" }, "Journal Entry/Page UUID", -1), L("input", {
							class: "dui-input",
							disabled: e.isDisabled,
							value: t.journalUuid ?? "",
							placeholder: "Compendium.package.journals.entry.JournalEntryPage.page",
							type: "text",
							onInput: (e) => s(i, { journalUuid: c(e) })
						}, null, 40, CS)])]),
						_: 2
					}, 1032, ["disabled", "onDropData"])
				]),
				L("button", {
					class: "dui-btn dui-btn-error dui-btn-sm",
					disabled: e.isDisabled,
					type: "button",
					onClick: (e) => o(i)
				}, [...n[3] ||= [L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), z(" Remove ", -1)]], 8, wS)
			], 2))), 128))])) : (P(), F("div", TS, [...n[4] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), L("span", null, "No Career rows yet.", -1)]]))
		])]));
	}
});
//#endregion
//#region src/functions/species-builder/editor/random-talents.ts
function DS(e) {
	return Object.entries(e ?? {});
}
function OS(e, t) {
	let n = t[0]?.key ?? "talents";
	return NS([...e, [n, 1]]);
}
function kS(e, t, n) {
	return NS(e.map(([e, r], i) => i === t ? [n, r] : [e, r]));
}
function AS(e, t, n) {
	let r = Number(n);
	return NS(e.map(([e, n], i) => i === t && Number.isFinite(r) ? [e, r] : [e, n]));
}
function jS(e, t) {
	return NS(e.filter((e, n) => n !== t));
}
function MS(e, t) {
	return e.some((e) => e.key === t) ? e : [...e, {
		key: t,
		label: `Saved source missing from this world (${t})`
	}];
}
function NS(e) {
	return e.flatMap(([e, t]) => e.trim() ? [`${e.trim()}: ${t}`] : []).join("\n");
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/tables/tabs/random-talents/RandomTalentRows.vue?vue&type=script&setup=true&lang.ts
var PS = { class: "dui-card dui-card-border dui-card-sm" }, FS = { class: "dui-card-body" }, IS = {
	key: 1,
	class: "dui-list"
}, LS = { class: "dui-badge dui-badge-ghost" }, RS = { class: "dui-list-col-grow" }, zS = { class: "dui-fieldset" }, BS = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], VS = ["value"], HS = ["id"], US = { class: "dui-fieldset" }, WS = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], GS = ["id"], KS = ["disabled", "onClick"], qS = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, JS = /* @__PURE__ */ j({
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
			return DS(n.values);
		}
		function a() {
			r("update", OS(i(), n.sources));
		}
		function o(e, t) {
			r("update", kS(i(), e, t));
		}
		function s(e, t) {
			r("update", AS(i(), e, t));
		}
		function c(e) {
			return MS(n.sources, e);
		}
		function l(e) {
			r("update", jS(i(), e));
		}
		function u(e) {
			return e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement ? e.target.value : "";
		}
		function d(e, t) {
			return _b(n.issues, e, t);
		}
		function f(e, t) {
			return wb(d(e, t));
		}
		function p() {
			return wb(Cb(n.issues));
		}
		return (t, n) => (P(), F("section", PS, [L("div", FS, [
			R(jv, {
				"action-label": "Add Source",
				"action-title": "Add a random Talent source and draw count",
				count: i().length,
				description: "Choose an available Talent table and the number of draws from that source.",
				"is-disabled": e.isDisabled,
				title: "Random Talents",
				onAdd: a
			}, null, 8, ["count", "is-disabled"]),
			p().length ? (P(), F("div", {
				key: 0,
				class: E(["dui-alert", k(Q)(k(Cb)(e.issues), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[0] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), L("div", null, [(P(!0), F(N, null, M(p(), (e) => (P(), F("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, D(e), 1))), 128))])], 2)) : B("", !0),
			i().length > 0 ? (P(), F("ul", IS, [(P(!0), F(N, null, M(i(), ([t, r], i) => (P(), F("li", {
				key: `random-${i}`,
				class: E(["dui-list-row", k(Q)(k(yb)(e.issues, i), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				L("span", LS, D(i + 1), 1),
				L("div", RS, [L("fieldset", zS, [
					n[1] ||= L("legend", { class: "dui-fieldset-legend" }, "Talent source", -1),
					L("select", {
						"aria-describedby": d("key", i).length ? `random-talents-key-${i}-errors` : void 0,
						"aria-invalid": k(Eb)(d("key", i)) || void 0,
						class: E(["dui-select", k(Q)(d("key", i), "dui-select-error", "dui-select-warning")]),
						disabled: e.isDisabled,
						title: "Random Talent table source available in this world.",
						value: t,
						onInput: (e) => o(i, u(e))
					}, [(P(!0), F(N, null, M(c(t), (e) => (P(), F("option", {
						key: e.key,
						value: e.key
					}, D(e.label), 9, VS))), 128))], 42, BS),
					f("key", i).length ? (P(), F("div", {
						key: 0,
						id: `random-talents-key-${i}-errors`
					}, [(P(!0), F(N, null, M(f("key", i), (e) => (P(), F("p", {
						key: e,
						class: E(["app:m-0 app:text-xs", k(Q)(d("key", i), "app:text-error", "app:text-warning")])
					}, D(e), 3))), 128))], 8, HS)) : B("", !0)
				]), L("fieldset", US, [
					n[2] ||= L("legend", { class: "dui-fieldset-legend" }, "Draws", -1),
					L("input", {
						"aria-describedby": d("count", i).length ? `random-talents-count-${i}-errors` : void 0,
						"aria-invalid": k(Eb)(d("count", i)) || void 0,
						class: E(["dui-input", k(Q)(d("count", i), "dui-input-error", "dui-input-warning")]),
						disabled: e.isDisabled,
						min: "0",
						title: "How many random Talents this species draws from that table.",
						value: r,
						type: "number",
						onInput: (e) => s(i, u(e))
					}, null, 42, WS),
					f("count", i).length ? (P(), F("div", {
						key: 0,
						id: `random-talents-count-${i}-errors`
					}, [(P(!0), F(N, null, M(f("count", i), (e) => (P(), F("p", {
						key: e,
						class: E(["app:m-0 app:text-xs", k(Q)(d("count", i), "app:text-error", "app:text-warning")])
					}, D(e), 3))), 128))], 8, GS)) : B("", !0)
				])]),
				L("button", {
					disabled: e.isDisabled,
					title: "Remove this random Talent source",
					class: "dui-btn dui-btn-error dui-btn-sm",
					type: "button",
					onClick: (e) => l(i)
				}, [...n[3] ||= [L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), z(" Remove ", -1)]], 8, KS)
			], 2))), 128))])) : (P(), F("div", qS, [...n[4] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), L("span", null, "No random Talent draws.", -1)]]))
		])]));
	}
}), YS = { class: "dui-card dui-card-border dui-card-sm" }, XS = { class: "dui-card-body" }, ZS = {
	key: 1,
	class: "dui-list"
}, QS = { class: "dui-badge dui-badge-ghost" }, $S = { class: "dui-list-col-grow" }, eC = ["disabled", "onClick"], tC = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, nC = /* @__PURE__ */ j({
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
			return n.rows?.length ? n.rows : df(n.values);
		}
		function a() {
			r("updateRows", nf(i()));
		}
		function o(e) {
			r("updateRows", rf(i(), e));
		}
		function s() {
			return wb(Cb(n.issues));
		}
		return (t, n) => (P(), F("section", YS, [L("div", XS, [
			R(jv, {
				"action-label": "Add Rule",
				"action-title": "Add a rolled Talent and replacement Talent",
				count: i().length,
				description: "Offer a specific alternative when character creation rolls a Talent.",
				"is-disabled": e.isDisabled,
				title: "Talent Replacements",
				onAdd: a
			}, null, 8, ["count", "is-disabled"]),
			s().length ? (P(), F("div", {
				key: 0,
				class: E(["dui-alert", k(Q)(k(Cb)(e.issues), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[2] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), L("div", null, [(P(!0), F(N, null, M(s(), (e) => (P(), F("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, D(e), 1))), 128))])], 2)) : B("", !0),
			i().length > 0 ? (P(), F("ul", ZS, [(P(!0), F(N, null, M(i(), (t, i) => (P(), F("li", {
				key: `talent-replacement-${i}`,
				class: E(["dui-list-row", k(Q)(k(yb)(e.issues, i), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				L("span", QS, D(i + 1), 1),
				L("div", $S, [R(Zx, {
					description: "Drop the Talent result that may be replaced.",
					"is-disabled": e.isDisabled,
					issues: k(_b)(e.issues, "rolled", i),
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
				]), R(Zx, {
					description: "Drop the Talent offered instead of the rolled Talent.",
					"is-disabled": e.isDisabled,
					issues: k(_b)(e.issues, "replacement", i),
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
				L("button", {
					disabled: e.isDisabled,
					title: "Remove this Talent replacement",
					class: "dui-btn dui-btn-error dui-btn-sm",
					type: "button",
					onClick: (e) => o(i)
				}, [...n[3] ||= [L("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), z(" Remove ", -1)]], 8, eC)
			], 2))), 128))])) : (P(), F("div", tC, [...n[4] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), L("span", null, "No Talent replacements.", -1)]]))
		])]));
	}
}), rC = { class: "dui-card dui-card-border dui-card-sm" }, iC = { class: "dui-card-body" }, aC = { key: 0 }, oC = { class: "app:m-0" }, sC = {
	key: 1,
	class: "app:m-0"
}, cC = {
	key: 2,
	"aria-label": "Table editor",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, lC = [
	"id",
	"aria-controls",
	"aria-selected",
	"disabled",
	"onClick"
], uC = ["title"], dC = { class: "app:sr-only" }, fC = /* @__PURE__ */ j({
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
		let n = e, r = t, i = V(() => {
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
			let t = Bm(d(e));
			return t ? Vm(t) : "";
		}
		function p(e) {
			return d(e).some((e) => e.severity !== "warning");
		}
		return (t, n) => (P(), F("section", rC, [L("div", iC, [
			e.showNavigation ? (P(), F("header", aC, [n[8] ||= L("h3", { class: "dui-card-title" }, "Tables And Replacements", -1), L("p", oC, D(e.help), 1)])) : (P(), F("p", sC, D(e.help), 1)),
			e.showNavigation ? (P(), F("div", cC, [(P(!0), F(N, null, M(i.value, (t) => (P(), F("button", {
				id: `random-table-tab-${t.tab}`,
				key: t.tab,
				"aria-controls": `random-table-panel-${t.tab}`,
				"aria-selected": e.activeTab === t.tab,
				class: E(["dui-tab", { "dui-tab-active": e.activeTab === t.tab }]),
				disabled: e.isNavigationDisabled,
				role: "tab",
				type: "button",
				onClick: (e) => l(t.tab)
			}, [z(D(t.label) + " ", 1), d(t.tab).length > 0 ? (P(), F("span", {
				key: 0,
				class: E(["dui-status dui-status-sm", p(t.tab) ? "dui-status-error" : "dui-status-warning"]),
				title: f(t.tab)
			}, [L("span", dC, D(f(t.tab)), 1)], 10, uC)) : B("", !0)], 10, lC))), 128))])) : B("", !0),
			e.activeTab === "careerTable" ? (P(), I(ES, {
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
			])) : e.activeTab === "randomTalents" ? (P(), I(JS, {
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
			])) : e.activeTab === "talentReplacement" ? (P(), I(nC, {
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
			])) : e.includeCareerReplacements ? (P(), I(uS, {
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
			])) : B("", !0)
		])]));
	}
}), pC = { class: "dui-card dui-card-border dui-card-sm" }, mC = { class: "dui-card-body" }, hC = { class: "dui-fieldset" }, gC = { class: "dui-collapse dui-collapse-arrow" }, _C = { class: "dui-collapse-content" }, vC = { "aria-label": "Wound formula keywords" }, yC = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], bC = {
	key: 0,
	id: "species-wound-formula-errors"
}, xC = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, SC = /* @__PURE__ */ j({
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
			return _b(n.issues, "woundFormula");
		}
		function s() {
			return wb(o());
		}
		return (t, n) => (P(), F("section", pC, [L("div", mC, [L("fieldset", hC, [
			n[3] ||= Da("<legend class=\"dui-fieldset-legend\">Wound Calculation</legend><p class=\"dui-fieldset-label\"> Use <code>{Skill or Characteristic}</code> for a total value, <code>[Skill or Characteristic]</code> for its bonus, and <code>{Skill|Characteristic}</code> or <code>[Skill|Characteristic]</code> to base a skill on another characteristic. You can also use keywords such as <code>@tb</code>, <code>@scale</code>, and <code>@xp</code>. </p>", 2),
			L("details", gC, [n[2] ||= L("summary", { class: "dui-collapse-title" }, "Formula keyword guide", -1), L("div", _C, [n[1] ||= L("p", null, [
				z(" Keywords pull values from the current Actor during Wound calculation. Size uses "),
				L("code", null, "@size"),
				z(" as steps from Average and "),
				L("code", null, "@scale"),
				z(" as powers of two. ")
			], -1), L("div", vC, [(P(), F(N, null, M(i, (e) => L("code", {
				key: e,
				class: "dui-badge"
			}, D(e), 1)), 64))])])]),
			n[4] ||= L("label", {
				class: "dui-label",
				for: "species-wound-formula"
			}, "Formula", -1),
			L("textarea", {
				id: "species-wound-formula",
				"aria-describedby": o().length ? "species-wound-formula-errors" : void 0,
				"aria-invalid": k(Eb)(o()) || void 0,
				class: E(["dui-textarea app:w-full", k(Q)(o(), "dui-textarea-error", "dui-textarea-warning")]),
				disabled: e.isDisabled,
				value: e.formula ?? "",
				placeholder: "@sb * (1 + @sbMultiplier) + @tb * (2 + @tbMultiplier) + @wpb * (1 + @wpbMultiplier)",
				rows: "4",
				onInput: n[0] ||= (e) => r("updateWoundFormula", a(e))
			}, null, 42, yC),
			s().length ? (P(), F("div", bC, [(P(!0), F(N, null, M(s(), (e) => (P(), F("p", {
				key: e,
				class: E(["app:m-0 app:text-xs", k(Q)(o(), "app:text-error", "app:text-warning")])
			}, D(e), 3))), 128))])) : B("", !0),
			e.generatedTraitName ? (P(), F("p", xC, " Generated Trait item: " + D(e.generatedTraitName), 1)) : B("", !0)
		])])]));
	}
}), CC = { class: "dui-card dui-card-border dui-card-sm" }, wC = { class: "dui-card-body" }, TC = { class: "dui-collapse-title" }, EC = { class: "dui-badge" }, DC = { class: "dui-collapse-content" }, OC = { class: "dui-fieldset" }, kC = [
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], AC = { class: "dui-collapse dui-collapse-arrow" }, jC = { class: "dui-collapse-title" }, MC = { class: "dui-badge" }, NC = { class: "dui-collapse-content" }, PC = {
	key: 0,
	class: "dui-list"
}, FC = {
	key: 1,
	class: "dui-alert"
}, IC = { class: "dui-collapse dui-collapse-arrow" }, LC = { class: "dui-collapse-title" }, RC = { class: "dui-badge" }, zC = { class: "dui-collapse-content" }, BC = {
	key: 0,
	class: "dui-list"
}, VC = {
	key: 1,
	class: "dui-alert"
}, HC = /* @__PURE__ */ j({
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
		let s = V(() => Cc(r.parentDefinition, r.subspecies)), c = V(() => Oc(r.parentDefinition, r.subspecies, {
			parent: r.parentDefinition.woundFormula ? dl(r.parentDefinition) : void 0,
			subspecies: r.subspecies.woundFormula ? r.woundFormulaTraitName : void 0
		})), l = V(() => wb(r.issues));
		function u(e) {
			return vb(r.issues, e);
		}
		return (t, r) => (P(), F("section", CC, [L("div", wC, [
			r[6] ||= L("h3", { class: "dui-card-title" }, "Skill And Trait Changes", -1),
			r[7] ||= L("p", null, " These changes are applied to the parent lists and exported as complete WFRP subspecies lists. Open only the list you need to edit. ", -1),
			l.value.length ? (P(), F("div", {
				key: 0,
				class: E(["dui-alert", k(Q)(e.issues, "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [r[0] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), L("div", null, [(P(!0), F(N, null, M(l.value, (e) => (P(), F("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, D(e), 1))), 128))])], 2)) : B("", !0),
			(P(), F(N, null, M(n, (t) => L("details", {
				key: t.field,
				class: "dui-collapse dui-collapse-arrow"
			}, [L("summary", TC, [z(D(t.label) + " ", 1), L("span", EC, D(e.subspecies[t.field]?.length ?? 0), 1)]), L("div", DC, [L("fieldset", OC, [r[1] ||= L("legend", { class: "dui-fieldset-legend" }, "One name per line", -1), L("textarea", {
				class: E(["dui-textarea", k(Q)(u(t.field), "dui-textarea-error", "dui-textarea-warning")]),
				"aria-invalid": k(Eb)(u(t.field)) || void 0,
				disabled: e.isDisabled,
				value: o(e.subspecies[t.field]),
				rows: "5",
				onInput: (e) => i("updateArrayField", t.field, a(e))
			}, null, 42, kC)])])])), 64)),
			r[8] ||= L("div", { class: "dui-divider" }, "Compiled Preview", -1),
			r[9] ||= L("div", { class: "dui-alert dui-alert-info" }, [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-eye"
			}), L("span", null, "Read-only previews show the final inherited lists WFRP will receive.")], -1),
			L("details", AC, [L("summary", jC, [r[2] ||= z(" Compiled Skills ", -1), L("span", MC, D(s.value.length), 1)]), L("div", NC, [s.value.length > 0 ? (P(), F("ul", PC, [(P(!0), F(N, null, M(s.value, (e) => (P(), F("li", {
				key: e,
				class: "dui-list-row"
			}, [r[3] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-check"
			}, null, -1), L("span", null, D(e), 1)]))), 128))])) : (P(), F("p", FC, "The compiled Skill list is empty."))])]),
			L("details", IC, [L("summary", LC, [r[4] ||= z(" Compiled Traits ", -1), L("span", RC, D(c.value.length), 1)]), L("div", zC, [c.value.length > 0 ? (P(), F("ul", BC, [(P(!0), F(N, null, M(c.value, (e) => (P(), F("li", {
				key: e,
				class: "dui-list-row"
			}, [r[5] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-check"
			}, null, -1), L("span", null, D(e), 1)]))), 128))])) : (P(), F("p", VC, "The compiled Trait list is empty."))])])
		])]));
	}
}), UC = { class: "dui-card dui-card-border dui-card-sm" }, WC = { class: "dui-card-body" }, GC = { class: "dui-fieldset" }, KC = { class: "dui-table dui-table-sm" }, qC = { scope: "row" }, JC = ["for"], YC = [
	"id",
	"aria-invalid",
	"disabled",
	"value"
], XC = { scope: "row" }, ZC = ["for"], QC = [
	"id",
	"aria-invalid",
	"disabled",
	"placeholder",
	"value"
], $C = { class: "dui-fieldset" }, ew = { class: "dui-fieldset" }, tw = /* @__PURE__ */ j({
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
		let n = e, r = t, i = V(() => wb(n.issues));
		function a(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function o(e) {
			return _b(n.issues, e);
		}
		function s(e) {
			return wb(o(e));
		}
		return (t, n) => (P(), F("section", UC, [L("div", WC, [
			i.value.length ? (P(), F("div", {
				key: 0,
				class: E(["dui-alert", k(Q)(e.issues, "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[4] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), L("div", null, [(P(!0), F(N, null, M(i.value, (e) => (P(), F("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, D(e), 1))), 128))])], 2)) : B("", !0),
			L("fieldset", GC, [
				n[5] ||= L("legend", { class: "dui-fieldset-legend" }, "Identity", -1),
				n[6] ||= L("p", { class: "dui-fieldset-label" }, " Name this variant and give it a unique key under its parent species. ", -1),
				L("table", KC, [L("tbody", null, [L("tr", null, [L("th", qC, [L("label", { for: `subspecies-${e.index}-name` }, "Name", 8, JC)]), L("td", null, [L("input", {
					id: `subspecies-${e.index}-name`,
					class: E(["dui-input dui-input-sm", k(Q)(o("name"), "dui-input-error", "dui-input-warning")]),
					"aria-invalid": k(Eb)(o("name")) || void 0,
					disabled: e.isDisabled,
					value: e.subspecies.name,
					type: "text",
					onInput: n[0] ||= (e) => r("updateStringField", "name", a(e))
				}, null, 42, YC), (P(!0), F(N, null, M(s("name"), (e) => (P(), F("p", {
					key: e,
					class: E(["app:m-0 app:text-xs", k(Q)(o("name"), "app:text-error", "app:text-warning")])
				}, D(e), 3))), 128))])]), L("tr", null, [L("th", XC, [L("label", { for: `subspecies-${e.index}-key` }, "Key", 8, ZC)]), L("td", null, [L("input", {
					id: `subspecies-${e.index}-key`,
					class: E(["dui-input dui-input-sm", k(Q)(o("key"), "dui-input-error", "dui-input-warning")]),
					"aria-invalid": k(Eb)(o("key")) || void 0,
					disabled: e.isDisabled,
					placeholder: k(gm)(e.subspecies),
					value: e.subspecies.key,
					type: "text",
					onInput: n[1] ||= (e) => r("updateStringField", "key", a(e))
				}, null, 42, QC), (P(!0), F(N, null, M(s("key"), (e) => (P(), F("p", {
					key: e,
					class: E(["app:m-0 app:text-xs", k(Q)(o("key"), "app:text-error", "app:text-warning")])
				}, D(e), 3))), 128))])])])])
			]),
			L("fieldset", $C, [
				n[7] ||= L("legend", { class: "dui-fieldset-legend" }, "Characteristic Overrides", -1),
				n[8] ||= L("p", { class: "dui-fieldset-label" }, " Enter only formulas that replace the parent species characteristic value. ", -1),
				R(ax, {
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
			L("fieldset", ew, [
				n[9] ||= L("legend", { class: "dui-fieldset-legend" }, "Resource Overrides", -1),
				n[10] ||= L("p", { class: "dui-fieldset-label" }, "Leave a value blank to keep the parent species value.", -1),
				R(dx, {
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
}), nw = { class: "app:flex app:flex-wrap app:items-start app:justify-between app:gap-3" }, rw = { class: "app:flex app:flex-col app:gap-1" }, iw = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, aw = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, ow = {
	id: "species-builder-subspecies-title",
	class: "app:m-0"
}, sw = { class: "dui-card-actions" }, cw = ["disabled"], lw = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "note"
}, uw = /* @__PURE__ */ j({
	__name: "SubspeciesEditorHeader",
	props: {
		isBusy: { type: Boolean },
		isReadOnly: { type: Boolean },
		name: {}
	},
	emits: ["close", "delete"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (P(), F(N, null, [L("header", nw, [L("div", rw, [L("span", iw, [r[3] ||= L("span", { class: "dui-badge dui-badge-ghost" }, "Subspecies", -1), e.isReadOnly ? (P(), F("span", aw, [...r[2] ||= [L("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-lock"
		}, null, -1), z(" Installed ", -1)]])) : B("", !0)]), L("h2", ow, D(e.name), 1)]), L("div", sw, [e.isReadOnly ? B("", !0) : (P(), F("button", {
			key: 0,
			class: "dui-btn dui-btn-error dui-btn-sm",
			disabled: e.isBusy,
			type: "button",
			onClick: r[0] ||= (e) => n("delete")
		}, [...r[4] ||= [L("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-trash"
		}, null, -1), z(" Delete ", -1)]], 8, cw)), L("button", {
			class: "dui-btn dui-btn-sm",
			type: "button",
			onClick: r[1] ||= (e) => n("close")
		}, "Close")])]), e.isReadOnly ? (P(), F("div", lw, [...r[5] ||= [L("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-lock"
		}, null, -1), L("span", null, " This installed subspecies is available for reference. Its controls are locked because the source module owns the data. ", -1)]])) : B("", !0)], 64));
	}
}), dw = [
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
], fw = {
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
function pw(e, t) {
	return e.filter((e) => fw[t].includes(e.section));
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/subspecies/SubspeciesEditorTabs.vue?vue&type=script&setup=true&lang.ts
var mw = {
	"aria-label": "Edit subspecies section",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, hw = [
	"id",
	"aria-controls",
	"aria-selected",
	"autofocus",
	"disabled",
	"onClick"
], gw = ["title"], _w = { class: "app:sr-only" }, vw = /* @__PURE__ */ j({
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
			return Bm(pw(n.issues, e));
		}
		return (t, n) => (P(), F("div", mw, [(P(!0), F(N, null, M(k(dw), (t) => (P(), F("button", {
			id: `subspecies-editor-tab-${t.tab}`,
			key: t.tab,
			"aria-controls": `subspecies-editor-panel-${t.tab}`,
			"aria-selected": e.activeTab === t.tab,
			autofocus: t.tab === e.activeTab,
			class: E(["dui-tab", { "dui-tab-active": e.activeTab === t.tab }]),
			disabled: e.isBusy,
			role: "tab",
			type: "button",
			onClick: (e) => r("select", t.tab)
		}, [z(D(t.label) + " ", 1), i(t.tab) ? (P(), F("span", {
			key: 0,
			class: E(["dui-status dui-status-sm", i(t.tab)?.severity === "error" ? "dui-status-error" : "dui-status-warning"]),
			title: k(Vm)(i(t.tab))
		}, [L("span", _w, D(k(Vm)(i(t.tab))), 1)], 10, gw)) : B("", !0)], 10, hw))), 128))]));
	}
});
//#endregion
//#region src/functions/species-builder/editor/subspecies-talents.ts
function yw(e, t, n) {
	let r = Sw(e), i = Sw(t), a = Sw(n), o = r.filter((e) => !a.includes(e)).map((e) => ({
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
function bw(e, t) {
	return e.source === "added" ? {
		field: "talentsAdded",
		value: Cw(t.addedTalents.filter((t) => t !== e.name))
	} : {
		field: "talentsRemoved",
		value: Cw([...t.removedTalents, e.name])
	};
}
function xw(e, t) {
	return {
		field: "talentsRemoved",
		value: Cw(t.removedTalents.filter((t) => t !== e))
	};
}
function Sw(e) {
	let t = [];
	for (let n of e ?? []) {
		let e = n.trim();
		e && !t.includes(e) && t.push(e);
	}
	return t;
}
function Cw(e) {
	return Sw(e).join("\n");
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/subspecies/SubspeciesTalentInheritance.vue?vue&type=script&setup=true&lang.ts
var ww = { class: "dui-card dui-card-border dui-card-sm" }, Tw = { class: "dui-card-body" }, Ew = {
	key: 1,
	class: "dui-list"
}, Dw = { class: "dui-list-col-grow" }, Ow = { class: "dui-badge" }, kw = [
	"disabled",
	"title",
	"onClick"
], Aw = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, jw = { key: 3 }, Mw = { class: "dui-card-actions" }, Nw = [
	"disabled",
	"title",
	"onClick"
], Pw = /* @__PURE__ */ j({
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
		let n = e, r = t, i = V(() => yw(n.parentTalents, n.subspecies.talentsAdded, n.subspecies.talentsRemoved)), a = V(() => wb(n.issues));
		function o(e) {
			c(bw(e, i.value));
		}
		function s(e) {
			c(xw(e, i.value));
		}
		function c(e) {
			r("updateArrayField", n.index, e.field, e.value);
		}
		function l(e) {
			if (e.source !== "added") return [];
			let t = n.subspecies.talentsAdded?.findIndex((t) => t.trim() === e.name);
			return t === void 0 || t < 0 ? [] : bb(n.issues, "talentsAdded", t);
		}
		function u(e) {
			return wb(l(e));
		}
		return (t, n) => (P(), F("section", ww, [L("div", Tw, [
			n[6] ||= L("h3", { class: "dui-card-title" }, "Talent Inheritance", -1),
			n[7] ||= L("p", null, " Parent Talents are shown here as the subspecies Talent list. Removing an inherited Talent records it as removed; dropping a new Talent records it as added. ", -1),
			a.value.length ? (P(), F("div", {
				key: 0,
				class: E(["dui-alert", k(Q)(e.issues, "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[1] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), L("div", null, [(P(!0), F(N, null, M(a.value, (e) => (P(), F("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, D(e), 1))), 128))])], 2)) : B("", !0),
			R(db, {
				description: "Drop a WFRP Talent item to add it to this subspecies.",
				disabled: e.isDisabled,
				title: "Drop Added Talent",
				variant: "compact",
				onDropData: n[0] ||= (t) => r("talentDrop", e.index, t)
			}, null, 8, ["disabled"]),
			i.value.activeRows.length > 0 ? (P(), F("ul", Ew, [(P(!0), F(N, null, M(i.value.activeRows, (t) => (P(), F("li", {
				key: `${t.source}-${t.name}`,
				class: E(["dui-list-row", k(Q)(l(t), "app:border app:border-error", "app:border app:border-warning")])
			}, [L("div", Dw, [
				L("strong", null, D(t.name), 1),
				L("span", Ow, D(t.source === "inherited" ? "Inherited" : "Added"), 1),
				(P(!0), F(N, null, M(u(t), (e) => (P(), F("p", {
					key: e,
					class: E(["app:m-0 app:text-xs", k(Q)(l(t), "app:text-error", "app:text-warning")])
				}, D(e), 3))), 128))
			]), L("button", {
				disabled: e.isDisabled,
				class: "dui-btn dui-btn-error dui-btn-sm",
				title: `Remove ${t.name}`,
				type: "button",
				onClick: (e) => o(t)
			}, [...n[2] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), z(" Remove ", -1)]], 8, kw)], 2))), 128))])) : (P(), F("div", Aw, [...n[3] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), L("span", null, "No Talents in the compiled list.", -1)]])),
			i.value.removedParentTalents.length > 0 ? (P(), F("div", jw, [n[5] ||= L("h4", null, "Removed Parent Talents", -1), L("div", Mw, [(P(!0), F(N, null, M(i.value.removedParentTalents, (t) => (P(), F("button", {
				key: t,
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: `Restore ${t}`,
				type: "button",
				onClick: (e) => s(t)
			}, [n[4] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-rotate-left"
			}, null, -1), z(" " + D(t), 1)], 8, Nw))), 128))])])) : B("", !0)
		])]));
	}
}), Fw = ["onKeydown"], Iw = ["aria-busy"], Lw = /* @__PURE__ */ j({
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
		let n = e, r = t, i = /* @__PURE__ */ O("details"), a = /* @__PURE__ */ O("careerTable"), o = /* @__PURE__ */ O(-1), s = /* @__PURE__ */ O(), c = lm(), l = sm(), u = V(() => n.isLoading || n.isSaving), d = V(() => u.value || n.isReadOnly), f = V(() => l.blockingValidationIssues.length > 0 || l.blockingSpeciesTableValidationMessages.length > 0), p = V(() => l.validationIssues.some((e) => e.severity === "warning"));
		function m(e, t) {
			e !== "careerReplacements" && r("updateTextMapField", n.index, e, t);
		}
		function h(e) {
			return pw(n.issues, e);
		}
		function g() {
			s.value?.close();
		}
		function _() {
			n.isOpen && r("close"), c.restore();
		}
		return Zn(() => n.isOpen, async (e) => {
			if (e) {
				let e = n.validationNavigationRequest, t = e?.sequence === o.value ? void 0 : Ig(e, n.index);
				o.value = e?.sequence ?? o.value, i.value = t?.tab ?? "details", a.value = t?.tableTab ?? "careerTable", c.capture(), await Mn(), n.isOpen && !s.value?.open && s.value?.showModal();
			} else s.value?.open && s.value.close();
		}, {
			flush: "post",
			immediate: !0
		}), (t, n) => (P(), F("dialog", {
			ref_key: "dialog",
			ref: s,
			class: "dui-modal",
			"aria-labelledby": "species-builder-subspecies-title",
			onClose: _,
			onKeydown: es(Qo(g, ["stop", "prevent"]), ["esc"]),
			onKeyup: n[18] ||= es(Qo(() => {}, ["stop"]), ["esc"])
		}, [e.subspecies ? (P(), F("div", {
			key: 0,
			class: "dui-modal-box app:max-w-5xl",
			"aria-busy": u.value
		}, [
			R(uw, {
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
			R(vw, {
				"active-tab": i.value,
				"is-busy": u.value,
				issues: e.issues,
				onSelect: n[1] ||= (e) => i.value = e
			}, null, 8, [
				"active-tab",
				"is-busy",
				"issues"
			]),
			i.value === "details" ? (P(), I(tw, {
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
			])) : i.value === "talents" ? (P(), I(Pw, {
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
			])) : i.value === "changes" ? (P(), I(HC, {
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
			])) : i.value === "wounds" ? (P(), I(SC, {
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
			])) : (P(), I(fC, {
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
			e.isReadOnly ? B("", !0) : (P(), I(Sm, {
				key: 5,
				"can-save": k(l).canSave,
				"entity-key": e.subspecies.key,
				"entity-name": e.subspecies.name || "Untitled Subspecies",
				"has-unsaved-changes": k(l).hasUnsavedChanges,
				"has-validation-errors": f.value,
				"has-validation-warnings": p.value,
				"is-loading": k(l).isLoading,
				"is-saving": k(l).isSaving,
				"load-error": k(l).loadError,
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
		], 8, Iw)) : B("", !0), n[19] ||= L("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [L("button", {
			"aria-label": "Close subspecies editor",
			type: "submit"
		}, "Close")], -1)], 40, Fw));
	}
}), Rw = /* @__PURE__ */ j({
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
		return (t, i) => (P(), I(Lw, {
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
function zw(e, t) {
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
var Bw = { class: "dui-card dui-card-border dui-card-sm" }, Vw = { class: "dui-card-body" }, Hw = { class: "app:flex app:items-start app:justify-between app:gap-4" }, Uw = { class: "dui-card-actions app:items-center" }, Ww = ["disabled"], Gw = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "note"
}, Kw = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, qw = {
	key: 2,
	"aria-labelledby": "custom-variants-heading"
}, Jw = { class: "app:flex app:items-center app:justify-between app:gap-2" }, Yw = { class: "dui-badge dui-badge-sm" }, Xw = {
	key: 0,
	class: "dui-alert",
	role: "status"
}, Zw = {
	key: 1,
	class: "dui-list"
}, Qw = {
	key: 3,
	"aria-labelledby": "installed-variants-heading"
}, $w = { class: "app:flex app:items-center app:justify-between app:gap-2" }, eT = { class: "dui-badge dui-badge-ghost dui-badge-sm" }, tT = { class: "dui-list" }, nT = {
	key: 4,
	class: "dui-alert",
	role: "status"
}, rT = {
	key: 5,
	class: "dui-list"
}, iT = /* @__PURE__ */ j({
	__name: "SubspeciesSection",
	props: {
		definition: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		validationIndicators: {}
	},
	emits: ["addSubspecies", "editSubspecies"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = V(() => n.definition.subspecies ?? []), a = V(() => i.value.slice(0, n.definition.runtimeSubspeciesCount)), o = V(() => i.value.slice(n.definition.runtimeSubspeciesCount)), s = V(() => !n.isLoading && !n.isSaving && !n.definition.runtimeUnavailable);
		function c(e) {
			return e.name.trim() || e.key.trim() || "Untitled Subspecies";
		}
		function l(e) {
			return e.key.trim() || gm(e);
		}
		return (t, n) => (P(), F("section", Bw, [L("div", Vw, [
			L("header", Hw, [n[2] ||= L("div", null, [L("h3", { class: "dui-card-title" }, "Subspecies"), L("p", { class: "app:m-0" }, "Variants inherit this species and store only their changes.")], -1), L("div", Uw, [L("button", {
				class: "dui-btn dui-btn-primary dui-btn-sm",
				disabled: !s.value,
				type: "button",
				onClick: n[0] ||= (e) => r("addSubspecies")
			}, [...n[1] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), z(" New Subspecies ", -1)]], 8, Ww)])]),
			e.definition.origin === "runtime" && !e.definition.runtimeUnavailable ? (P(), F("div", Gw, [...n[3] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-lock"
			}, null, -1), L("span", null, " Installed variants are read-only. New subspecies are saved by this module without changing the installed parent species. ", -1)]])) : B("", !0),
			e.definition.runtimeUnavailable ? (P(), F("div", Kw, [...n[4] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-triangle-exclamation"
			}, null, -1), L("span", null, " The installed parent species is currently unavailable. Saved custom variants are being preserved, but new variants cannot be added until the source returns. ", -1)]])) : B("", !0),
			e.definition.origin === "runtime" ? (P(), F("section", qw, [L("header", Jw, [n[5] ||= L("div", null, [L("h4", {
				id: "custom-variants-heading",
				class: "dui-card-title"
			}, "Custom Additions"), L("p", { class: "app:m-0" }, "Editable variants owned by this world.")], -1), L("span", Yw, D(o.value.length), 1)]), o.value.length === 0 ? (P(), F("div", Xw, [...n[6] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), L("span", null, "No custom variants yet. Add one without altering the installed species.", -1)]])) : (P(), F("ul", Zw, [(P(!0), F(N, null, M(o.value, (t, n) => (P(), I(uy, {
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
			]))), 128))]))])) : B("", !0),
			a.value.length > 0 ? (P(), F("section", Qw, [L("header", $w, [n[7] ||= L("div", null, [L("h4", {
				id: "installed-variants-heading",
				class: "dui-card-title"
			}, "Installed Variants"), L("p", { class: "app:m-0" }, "Provided by WFRP or an active module.")], -1), L("span", eT, D(a.value.length), 1)]), L("ul", tT, [(P(!0), F(N, null, M(a.value, (t, n) => (P(), I(uy, {
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
			]))), 128))])])) : B("", !0),
			e.definition.origin === "custom" && i.value.length === 0 ? (P(), F("div", nT, [...n[8] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), L("span", null, "No subspecies yet.", -1)]])) : e.definition.origin === "custom" ? (P(), F("ul", rT, [(P(!0), F(N, null, M(i.value, (t, n) => (P(), I(uy, {
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
			]))), 128))])) : B("", !0)
		])]));
	}
}), aT = /* @__PURE__ */ j({
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
		let n = e, r = t, i = /* @__PURE__ */ O(-1), a = /* @__PURE__ */ O(null), o = V(() => n.definition.subspecies?.[i.value]), s = V(() => n.definition.origin === "runtime"), c = V(() => n.isLoading || n.isSaving || s.value), l = V(() => n.definition.origin === "runtime" && i.value >= 0 && i.value < n.definition.runtimeSubspeciesCount), u = V(() => ld(sd(n.definition.talents, n.definition.linkedTalents))), d = V(() => dl(n.definition)), f = V(() => {
			let e = o.value;
			return e ? fl(n.definition, e) : "";
		}), p = V(() => n.issues.filter((e) => e.scope === "definition")), m = V(() => n.issues.filter((e) => e.scope === "subspecies" && e.subspeciesIndex === i.value)), h = V(() => (n.definition.subspecies ?? []).map((e, t) => Bm(n.issues.filter((e) => e.scope === "subspecies" && e.subspeciesIndex === t)))), g = V(() => n.activeEditorTab === "skills" || n.activeEditorTab === "talents" || n.activeEditorTab === "traits" ? [n.activeEditorTab] : []);
		Zn(() => n.definition.key, () => {
			i.value = -1;
		}), Zn(() => n.definition.subspecies?.length ?? 0, (e) => {
			i.value >= e && (i.value = -1);
		}), Zn(() => n.validationNavigationRequest, async (e) => {
			e?.destination.kind === "subspecies" && await v(e.destination.subspeciesIndex);
		}, { flush: "post" });
		async function _() {
			let e = n.definition.subspecies?.length ?? 0;
			r("addSubspecies"), await Mn(), await v(e);
		}
		async function v(e) {
			i.value = e, await Mn(), x();
		}
		function y(e) {
			r("deleteSubspecies", e), i.value = -1;
		}
		let b = zw(r, {
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
		return (t, n) => (P(), F("section", {
			ref_key: "detailPanelElement",
			ref: a
		}, [R(Rw, ja({
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
		}, Jr(k(b))), null, 16, [
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
		]), e.activeEditorTab === "details" ? (P(), I(Jx, {
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
		])) : e.activeEditorTab === "attributes" ? (P(), I(yx, {
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
		])) : e.activeEditorTab === "wounds" ? (P(), I(SC, {
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
		])) : g.value.length > 0 ? (P(), I($b, {
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
		])) : e.activeEditorTab === "tables" ? (P(), I(fC, {
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
		])) : (P(), I(iT, {
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
}), oT = { class: "app:mb-3 app:flex app:flex-col app:gap-2" }, sT = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, cT = { class: "dui-card-title" }, lT = { class: "app:m-0" }, uT = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "note"
}, dT = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, fT = {
	key: 1,
	role: "status",
	class: "dui-alert dui-alert-warning"
}, pT = /* @__PURE__ */ j({
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
		let n = e, r = t, i = V(() => Zm("species", !0, n.activeEditorTab, n.activeTableTab)), a = V(() => n.activeEditorTab !== "subspecies" && n.definition?.origin === "runtime" && !n.definition.runtimeUnavailable), o = V(() => n.activeEditorTab !== "subspecies" && n.definition?.runtimeUnavailable);
		return (t, n) => (P(), F("section", null, [L("header", oT, [
			L("div", sT, [L("h2", cT, D(i.value.label), 1), e.definition?.origin === "runtime" ? (P(), F("span", {
				key: 0,
				class: E(["dui-badge dui-badge-sm", e.definition.runtimeUnavailable ? "dui-badge-warning" : "dui-badge-ghost"])
			}, [L("i", {
				"aria-hidden": "true",
				class: E(e.definition.runtimeUnavailable ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-lock")
			}, null, 2), z(" " + D(e.definition.runtimeUnavailable ? "Unavailable source" : "Installed species"), 1)], 2)) : B("", !0)]),
			L("p", lT, D(i.value.description), 1),
			a.value ? (P(), F("div", uT, [...n[33] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), L("span", null, " This species comes from WFRP or an active module, so its setup is read-only. You can inspect every section and add editable custom variants from Subspecies. ", -1)]])) : o.value ? (P(), F("div", dT, [...n[34] ||= [L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-triangle-exclamation"
			}, null, -1), L("span", null, " This species source is no longer active. Its saved custom variants are preserved until the source returns. ", -1)]])) : B("", !0)
		]), e.definition ? (P(), I(aT, {
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
		])) : (P(), F("section", fT, "No species selected."))]));
	}
}), mT = ["aria-busy"], hT = { class: "app:flex app:flex-1 app:items-start app:gap-3 app:p-3" }, gT = { class: "app:flex app:min-w-0 app:flex-1 app:flex-col app:gap-3" }, _T = /* @__PURE__ */ j({
	__name: "SpeciesBuilderApp",
	props: {
		bridge: {},
		onSettingsSaved: { type: Function }
	},
	setup(e) {
		let t = e, n = cm(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = /* @__PURE__ */ O("species"), i = /* @__PURE__ */ O(!1), a = /* @__PURE__ */ O("details"), o = /* @__PURE__ */ O("careerTable"), s = Og(n), c = V(() => n.isLoading.value || n.isSaving.value), l = V(() => i.value && n.selectedDefinition.value?.origin === "custom"), u = V(() => Zm(r.value, i.value, a.value, o.value)), d = V(() => i.value ? n.selectedDefinition.value?.name.trim() || n.selectedDefinition.value?.key.trim() || "Untitled Species" : ""), f = V(() => xs(n.definitions.value).map((e) => e.key)), { close: p, isOpen: m, navigationRequest: h, open: g, selectIssue: _, summaryIssues: v } = r_({
			definitions: n.definitions,
			issues: n.validationIssues,
			openEditorTab: oe,
			openTableTab: se,
			selectDefinition: n.selectDefinition,
			selectProjectTab: ce
		}), y = V(() => n.blockingValidationIssues.value.length > 0 || n.blockingSpeciesTableValidationMessages.value.length > 0), b = V(() => ({
			errors: v.value.filter((e) => e.severity === "error").length,
			warnings: v.value.filter((e) => e.severity === "warning").length
		})), x = V(() => b.value.warnings > 0), S = V(() => n.validationIssues.value.filter((e) => e.definitionIndex === n.selectedIndex.value)), C = V(() => Ym(n.validationIssues.value, n.selectedIndex.value)), ee = V(() => !!n.loadError.value || !!n.saveError.value || !!n.message.value || n.validationIssues.value.length > 0 || y.value), { confirmPendingDelete: te, pendingDelete: ne, requestDeleteDefinition: re, requestDeleteSubspecies: ie } = kg({
			deleteDefinition: n.deleteSelectedDefinition,
			deleteSubspecies: n.deleteSubspecies,
			selectedDefinition: n.selectedDefinition
		});
		Mr(() => {
			n.loadSettings();
		}), Zn(() => n.showGeneratedConfigTab.value, (e) => {
			!e && r.value === "wfrp-config" && (r.value = "species");
		}), Zn(() => n.selectedDefinition.value, (e) => {
			e || (i.value = !1);
		});
		function ae(e) {
			(e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.target instanceof HTMLTextAreaElement) && e.stopPropagation();
		}
		function w(e, t = "details") {
			n.selectDefinition(e), oe(t);
		}
		function oe(e) {
			r.value = "species", a.value = e, i.value = !0;
		}
		function se(e) {
			o.value = e, oe("tables");
		}
		function ce(e) {
			r.value = e, i.value = !1;
		}
		function le(e) {
			n.addDefinition(e), oe("details");
		}
		let T = Wy(n, {
			requestDeleteSubspecies: ie,
			requestSave: s.requestSave
		});
		return (e, t) => (P(), F("section", {
			class: "app:flex app:min-h-full app:flex-col",
			"aria-busy": c.value,
			onKeydown: ae,
			onKeyup: ae
		}, [
			R(Rm, {
				"can-manage-definition": l.value,
				"context-label": u.value.label,
				"definition-name": d.value,
				"is-busy": c.value,
				onDelete: k(re),
				onDuplicate: k(n).duplicateSelectedDefinition,
				onReload: k(n).loadSettings,
				onSelectSpecies: t[0] ||= (e) => ce("species")
			}, {
				actions: A(({ dialogHost: e }) => [R(Cg, {
					definition: k(n).selectedDefinition.value?.origin === "custom" ? k(n).selectedDefinition.value : void 0,
					"dialog-host": e,
					"existing-keys": f.value,
					"is-disabled": c.value,
					"is-import-only": k(n).selectedDefinition.value?.origin === "runtime",
					onImportDefinition: le
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
			R(mm, {
				message: k(ne)?.message,
				onClose: t[1] ||= (e) => ne.value = null,
				onConfirm: k(te)
			}, null, 8, ["message", "onConfirm"]),
			R(Dg, {
				"is-open": k(s).isConfirmationOpen.value,
				onClose: k(s).closeConfirmation,
				onConfirm: k(s).confirmSave
			}, null, 8, [
				"is-open",
				"onClose",
				"onConfirm"
			]),
			R(n_, {
				definitions: k(n).definitions.value,
				"is-open": k(m),
				issues: k(v),
				onClose: k(p),
				onSelectIssue: k(_)
			}, null, 8, [
				"definitions",
				"is-open",
				"issues",
				"onClose",
				"onSelectIssue"
			]),
			L("main", hT, [R(oh, {
				"active-editor-tab": a.value,
				"active-table-tab": o.value,
				"active-tab": r.value,
				"has-selected-definition": !!k(n).selectedDefinition.value,
				"is-busy": c.value,
				"is-editor-open": i.value,
				"show-generated-config-tab": k(n).showGeneratedConfigTab.value,
				"validation-counts": C.value,
				onSelectEditorTab: oe,
				onSelectTableTab: se,
				onSelectTab: ce
			}, null, 8, [
				"active-editor-tab",
				"active-table-tab",
				"active-tab",
				"has-selected-definition",
				"is-busy",
				"is-editor-open",
				"show-generated-config-tab",
				"validation-counts"
			]), L("div", gT, [ee.value ? (P(), I(fh, {
				key: 0,
				"chargen-error-count": b.value.errors,
				"chargen-warning-count": b.value.warnings,
				"load-error": k(n).loadError.value || k(n).saveError.value,
				message: k(n).message.value,
				"validation-message": k(n).blockingSpeciesTableValidationMessages.value[0] ?? "",
				onReviewIssues: k(g)
			}, null, 8, [
				"chargen-error-count",
				"chargen-warning-count",
				"load-error",
				"message",
				"validation-message",
				"onReviewIssues"
			])) : B("", !0), i.value ? (P(), I(pT, ja({
				key: 2,
				id: "species-builder-panel-species",
				"active-editor-tab": a.value,
				"active-table-tab": o.value,
				"aria-label": "Species editor",
				definition: k(n).selectedDefinition.value,
				"is-loading": k(n).isLoading.value,
				"is-saving": k(n).isSaving.value,
				issues: S.value,
				"random-talent-sources": k(n).randomTalentSources.value,
				"validation-navigation-request": k(h),
				role: "region"
			}, Jr(k(T))), null, 16, [
				"active-editor-tab",
				"active-table-tab",
				"definition",
				"is-loading",
				"is-saving",
				"issues",
				"random-talent-sources",
				"validation-navigation-request"
			])) : (P(), I(Uy, {
				key: 1,
				"active-tab": r.value,
				"is-disabled": c.value,
				onEditSpecies: w
			}, null, 8, ["active-tab", "is-disabled"]))])]),
			R(Sm, {
				"can-save": k(n).canSave.value,
				definition: i.value ? k(n).selectedDefinition.value : void 0,
				"has-unsaved-changes": k(n).hasUnsavedChanges.value,
				"has-validation-errors": y.value,
				"has-validation-warnings": x.value,
				"is-loading": k(n).isLoading.value,
				"is-saving": k(n).isSaving.value,
				"load-error": k(n).loadError.value || k(n).saveError.value,
				"entity-name": r.value === "species-table" ? "Species Table" : void 0,
				onSave: k(s).requestSave
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
		], 40, mT));
	}
}), $ = "wfrp4e-customizer-apps", vT = "Drowsy's WFRP4e Customizers", yT = "wfrp4e", bT = Ys();
//#endregion
//#region src/module/foundry/document-drop.ts
function xT(e) {
	let t = e.value.trim();
	if (!t) return "";
	if (kT(t)) return t;
	let n = TT(t), r = DT(n, e.documentType);
	return r ? AT(n) ? JSON.stringify({
		type: r,
		uuid: n
	}) : JSON.stringify({
		id: n,
		type: r
	}) : "";
}
function ST(e) {
	let t = !0;
	function n() {
		t && (t = !1, document.removeEventListener("click", r, !0));
	}
	function r(t) {
		let r = t.target;
		if (!(r instanceof Element)) return;
		let i = CT(r);
		i && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), n(), e(i));
	}
	return document.addEventListener("click", r, !0), n;
}
function CT(e) {
	let t = e.closest("[data-uuid], [data-document-uuid], [data-entry-uuid], [data-document-id], [data-entry-id], [data-pack]");
	if (!t) return "";
	let n = t.dataset.uuid || t.dataset.documentUuid || t.dataset.entryUuid || "";
	if (n) return wT(n);
	let r = t.dataset.documentId || t.dataset.entryId || "", i = ET(t);
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
function wT(e) {
	let t = DT(e, "auto");
	return t ? JSON.stringify({
		type: t,
		uuid: e
	}) : "";
}
function TT(e) {
	return /@UUID\[([^\]]+)]/.exec(e)?.[1]?.trim() ?? e;
}
function ET(e) {
	let t = e.dataset.documentName || e.dataset.type || e.closest("[data-document-name]")?.dataset.documentName || "";
	return OT(t) ? t : e.classList.contains("actor") ? "Actor" : e.classList.contains("item") ? "Item" : e.classList.contains("journal") ? "JournalEntry" : e.closest("#actors") ? "Actor" : e.closest("#items") ? "Item" : e.closest("#journal") ? "JournalEntry" : "";
}
function DT(e, t) {
	return /^actor\./i.test(e) || /\.actors(\.|$)/i.test(e) ? "Actor" : /^item\./i.test(e) || /\.items(\.|$)/i.test(e) ? "Item" : /journalentrypage\./i.test(e) || /\.journalentrypage\./i.test(e) ? "JournalEntryPage" : /^journalentry\./i.test(e) || /\.journals(\.|$)/i.test(e) ? "JournalEntry" : t === "auto" ? "Item" : t;
}
function OT(e) {
	return e === "Actor" || e === "Item" || e === "JournalEntry" || e === "JournalEntryPage";
}
function kT(e) {
	if (!e.startsWith("{")) return !1;
	try {
		return typeof JSON.parse(e).type == "string";
	} catch {
		return !1;
	}
}
function AT(e) {
	return /^(actor|item|journalentry|journalentrypage|compendium)\./i.test(e);
}
var jT = {
	createDropData: xT,
	startDocumentPick: ST
}, MT = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-customizer-apps-root"), n.dataset.theme = "wfrp4e-customizer-apps", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-customizer-apps-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = is(this.getVueComponent(), r), this.#e.use(bT), this.#e.provide(Gy, jT), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, NT = "generatedSpeciesCareerTable", PT = "Compendium.wfrp4e-core.journals.JournalEntry.wczCPcuHT4VQDLpL";
function FT(e, t = []) {
	return jc(e, t).flatMap((e) => [...e.emitBaseDefinition ? LT(e.definition) : [], ...RT(e.definition, e.subspecies)]);
}
function IT({ fallbackJournalUuid: e = PT, flagScope: t, spec: n }) {
	return {
		displayRoll: !0,
		flags: {
			wfrp4e: {
				column: n.column,
				key: "career"
			},
			[t]: { [NT]: {
				speciesKey: n.speciesKey,
				subspeciesKey: n.subspeciesKey ?? ""
			} }
		},
		formula: `1d${n.rows.length}`,
		img: "systems/wfrp4e/ui/buttons/d10.webp",
		name: n.name,
		replacement: !0,
		results: n.rows.map((t, n) => ({
			description: zT(t, e),
			drawn: !1,
			img: "icons/svg/d20-grey.svg",
			name: t.name,
			range: [n + 1, n + 1],
			type: "text",
			weight: 1
		}))
	};
}
function LT(e) {
	return e.careerTable?.rows.length ? [{
		column: El(e),
		name: `Career - ${e.name}`,
		rows: e.careerTable.rows,
		speciesKey: e.key
	}] : [];
}
function RT(e, t) {
	return t.flatMap((t) => t.careerTable?.rows.length ? [{
		column: Dl(e, t),
		name: `Career - ${e.name} / ${t.name}`,
		rows: t.careerTable.rows,
		speciesKey: e.key,
		subspeciesKey: t.key
	}] : []);
}
function zT(e, t) {
	return `@UUID[${e.journalUuid?.trim() || t}]{${BT(e.name)}}`;
}
function BT(e) {
	return e.replaceAll("{", "").replaceAll("}", "").trim();
}
//#endregion
//#region src/functions/species-builder/default-species-builder-settings.ts
function VT() {
	return {
		autoRegisterSpeciesTable: !1,
		definitions: [],
		runtimeSpeciesExtensions: [],
		showGeneratedConfigTab: !1
	};
}
//#endregion
//#region src/module/settings/foundry-setting-adapter.ts
function HT(e) {
	return e;
}
function UT(e) {
	game.settings.register($, e.key, {
		config: e.config ?? !1,
		default: e.defaultValue,
		name: e.name,
		scope: e.scope ?? "world",
		type: Object
	});
}
function WT(e) {
	return e.normalize(game.settings.get($, e.key));
}
async function GT(e, t) {
	let n = e.normalize(t);
	return await game.settings.set($, e.key, n), n;
}
//#endregion
//#region src/module/apps/species-builder/settings.ts
var KT = HT({
	defaultValue: VT(),
	key: "speciesBuilderSettings",
	name: "Species Builder Settings",
	normalize: gu
});
function qT() {
	UT(KT);
}
function JT() {
	return WT(KT);
}
async function YT(e) {
	return await GT(KT, e);
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/config-snapshot.ts
var XT = [
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
function ZT(e) {
	let t = W(e) ? e : {}, n = Object.fromEntries(XT.map((e) => [e, nE(t[e])]));
	return {
		extraSpecies: iE(t.extraSpecies),
		records: n
	};
}
function QT(e, t, n) {
	let r = Object.fromEntries(XT.map((r) => [r, eE(r, e.records[r], t.records[r], n)]));
	return {
		extraSpecies: aE([...e.extraSpecies, ...t.extraSpecies]).filter((t) => !n.has(t) || e.extraSpecies.includes(t)),
		records: r
	};
}
function $T(e, t, n) {
	return e.records[t][n];
}
function eE(e, t, n, r) {
	let i = e === "subspecies" ? tE(t, n) : {
		...t,
		...n
	};
	for (let e of r) Object.hasOwn(t, e) ? i[e] = rE(t[e]) : delete i[e];
	return i;
}
function tE(e, t) {
	let n = new Set([...Object.keys(e), ...Object.keys(t)]);
	return Object.fromEntries([...n].map((n) => {
		let r = W(e[n]) ? e[n] : {}, i = W(t[n]) ? t[n] : {};
		return [n, {
			...r,
			...i
		}];
	}));
}
function nE(e) {
	return W(e) ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, rE(t)])) : {};
}
function rE(e) {
	return Array.isArray(e) ? e.map(rE) : W(e) ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, rE(t)])) : e;
}
function iE(e) {
	return Array.isArray(e) ? e.flatMap((e) => typeof e == "string" && e.trim() ? [e.trim()] : []) : [];
}
function aE(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/career-table.ts
function oE(e, t, n) {
	let r = cE(e, t, typeof n == "string" ? n.trim() : "");
	for (let e of r) {
		let t = game.wfrp4e?.tables?.findTable?.("career", e);
		if (!t) continue;
		let n = lE(t, e);
		if (n) return sE(n);
	}
}
function sE(e) {
	if (!W(e)) return;
	let t = gE(e.results).flatMap((e) => {
		let t = dE(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? { rows: t } : void 0;
}
function cE(e, t, n) {
	let r = t ? [
		n,
		`${e}-${t}`,
		e
	] : [e];
	return e === "human" && r.push("human-reiklander"), [...new Set(r.filter(Boolean))];
}
function lE(e, t) {
	return !W(e) || !Array.isArray(e.columns) ? e : e.columns.find((e) => uE(e) === t);
}
function uE(e) {
	if (!W(e) || typeof e.getFlag != "function") return "";
	let t = e.getFlag.call(e, "wfrp4e", "column");
	return typeof t == "string" ? t : "";
}
function dE(e) {
	if (!W(e)) return;
	let t = mE(e), n = /@UUID\[([^\]]+)\]\{([^}]+)\}/u.exec(t), r = hE(n?.[2] ?? ""), i = hE(t) || hE(e.name), a = r || i;
	if (!a) return;
	let o = n?.[1]?.trim(), s = fE(e.range), c = pE(e.weight), l = { name: a };
	return o && (l.journalUuid = o), s && (l.sourceRange = s), c !== void 0 && (l.sourceWeight = c), l;
}
function fE(e) {
	if (!Array.isArray(e) || e.length < 2) return;
	let t = Number(e[0]), n = Number(e[1]);
	return Number.isFinite(t) && Number.isFinite(n) ? [t, n] : void 0;
}
function pE(e) {
	let t = Number(e);
	return Number.isFinite(t) && t > 0 ? t : void 0;
}
function mE(e) {
	if (e.type === "document") {
		let t = e.documentUuid, n = e.name;
		return typeof t == "string" && typeof n == "string" ? `@UUID[${t}]{${n}}` : "";
	}
	let t = e.description ?? e.text;
	return typeof t == "string" ? t : "";
}
function hE(e) {
	return typeof e == "string" ? e.replace(/@UUID\[[^\]]+\]\{([^}]+)\}/gu, "$1").replace(/<[^>]*>/gu, "").trim() : "";
}
function gE(e) {
	return Array.isArray(e) ? e : typeof e == "object" && e && Symbol.iterator in e ? [...e] : [];
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/values.ts
var _E = Object.values(U);
function vE(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
function yE(e) {
	return typeof e == "number" && Number.isFinite(e) ? e : void 0;
}
function bE(e) {
	if (Array.isArray(e)) return e.flatMap((e) => {
		let t = vE(e);
		return t ? [t] : [];
	});
}
function xE(e) {
	if (!Array.isArray(e)) return;
	let t, n = [];
	for (let r of e) {
		let e = SE(r);
		if (e !== void 0) {
			t = e;
			continue;
		}
		let i = vE(r);
		i && n.push(i);
	}
	return t === void 0 ? { talents: n } : {
		randomTalentCount: t,
		talents: n
	};
}
function SE(e) {
	if (typeof e == "number") return yE(e);
	if (typeof e != "string" || !e.trim()) return;
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function CE(e) {
	if (W(e)) return Object.fromEntries(Object.entries(e).flatMap(([e, t]) => {
		let n = vE(e), r = vE(t);
		return n && r ? [[n, r]] : [];
	}));
}
function wE(e) {
	if (W(e)) return Object.fromEntries(Object.entries(e).flatMap(([e, t]) => {
		let n = vE(e), r = SE(t);
		return n && r !== void 0 ? [[n, r]] : [];
	}));
}
function TE(e) {
	if (W(e)) return Object.fromEntries(Object.entries(e).flatMap(([e, t]) => {
		let n = vE(e), r = bE(t);
		return n && r ? [[n, r]] : [];
	}));
}
function EE(e) {
	if (!W(e)) return;
	let t = _E.flatMap((t) => {
		let n = vE(e[t]);
		return n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : {};
}
function DE(e) {
	if (!W(e)) return;
	let t = {};
	return H(t, "die", vE(e.die)), H(t, "feet", yE(e.feet)), H(t, "inches", yE(e.inches)), Object.keys(t).length > 0 ? t : {};
}
function OE(e, t, n = void 0) {
	if (!e && t === void 0) return;
	let r = { ...e ?? n };
	return t !== void 0 && (r.talents = t), r;
}
function kE(e, t) {
	let n = t.filter((t) => !e.includes(t)), r = e.filter((e) => !t.includes(e)), i = {};
	return H(i, "added", n.length > 0 ? n : void 0), H(i, "removed", r.length > 0 ? r : void 0), i;
}
function AE(e, t) {
	let n = Object.fromEntries(Object.entries(t).filter(([t, n]) => e?.[t] !== n));
	return Object.keys(n).length > 0 ? n : void 0;
}
function jE(e, t) {
	let n = Object.entries(e ?? {}), r = Object.entries(t ?? {});
	return n.length === r.length && n.every(([e, n]) => t?.[e] === n);
}
function ME(e, t, n, r) {
	let i = yE(r);
	i !== void 0 && i !== n && (e[t] = i);
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/definition-adapter.ts
function NE(e, t) {
	let n = new Set(e.extraSpecies);
	return Object.entries(e.records.species).flatMap(([r, i]) => {
		let a = r.trim();
		return a ? [PE(e, a, i, n, t)] : [];
	}).sort(HE);
}
function PE(e, t, n, r, i) {
	let a = {
		includeInExtraSpecies: r.has(t),
		key: t,
		name: vE(n) ?? t
	}, o = xE($T(e, "speciesTalents", t));
	H(a, "characteristics", EE($T(e, "speciesCharacteristics", t))), H(a, "skills", bE($T(e, "speciesSkills", t))), H(a, "talents", o?.talents), H(a, "randomTalents", OE(wE($T(e, "speciesRandomTalents", t)), o?.randomTalentCount)), H(a, "talentReplacements", CE($T(e, "speciesTalentReplacement", t))), H(a, "traits", bE($T(e, "speciesTraits", t))), FE(a, e, t), H(a, "careerTable", i.resolveCareerTable(t, void 0, void 0));
	let s = IE(e, a, i);
	return H(a, "subspecies", s.length > 0 ? s : void 0), a;
}
function FE(e, t, n) {
	H(e, "movement", yE($T(t, "speciesMovement", n))), H(e, "fate", yE($T(t, "speciesFate", n))), H(e, "resilience", yE($T(t, "speciesRes", n))), H(e, "extra", yE($T(t, "speciesExtra", n))), H(e, "age", vE($T(t, "speciesAge", n))), H(e, "height", DE($T(t, "speciesHeight", n))), H(e, "careerReplacements", TE($T(t, "speciesCareerReplacements", n)));
}
function IE(e, t, n) {
	let r = $T(e, "subspecies", t.key);
	return W(r) ? Object.entries(r).flatMap(([r, i]) => r.trim() && W(i) ? [LE(e, t, r.trim(), i, n)] : []).sort(HE) : [];
}
function LE(e, t, n, r, i) {
	let a = {
		key: n,
		name: vE(r.name) ?? n
	}, o = EE(r.characteristics);
	o && H(a, "characteristics", AE(t.characteristics, o)), RE(a, t, r), BE(a, t, r), VE(a, t, r), H(a, "careerReplacements", TE($T(e, "speciesCareerReplacements", `${t.key}-${n}`)));
	let s = CE(r.talentReplacement);
	return jE(t.talentReplacements, s) || H(a, "talentReplacements", s), H(a, "careerTable", i.resolveCareerTable(t.key, n, r.careerTable)), a;
}
function RE(e, t, n) {
	zE(e, "skills", t.skills ?? [], bE(n.skills));
	let r = xE(n.talents);
	zE(e, "talents", t.talents ?? [], r?.talents), zE(e, "traits", t.traits ?? [], bE(n.speciesTraits));
}
function zE(e, t, n, r) {
	if (!r) return;
	let i = kE(n, r);
	H(e, `${t}Added`, i.added), H(e, `${t}Removed`, i.removed);
}
function BE(e, t, n) {
	let r = xE(n.talents), i = OE(wE(n.randomTalents), r?.randomTalentCount, t.randomTalents);
	jE(t.randomTalents, i) || H(e, "randomTalents", i);
}
function VE(e, t, n) {
	ME(e, "movement", t.movement, n.movement), ME(e, "fate", t.fate, n.fate), ME(e, "resilience", t.resilience, n.resilience), ME(e, "extra", t.extra, n.extra);
}
function HE(e, t) {
	return e.name.localeCompare(t.name);
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/index.ts
var UE, WE = [];
function GE() {
	UE = ZT(game.wfrp4e?.config), WE = [];
}
async function KE(e) {
	WE = NE(QT(UE ?? ZT(void 0), ZT(game.wfrp4e?.config), new Set(e.map((e) => e.trim()).filter(Boolean))), { resolveCareerTable: oE });
}
async function qE() {
	return structuredClone(WE);
}
//#endregion
//#region src/module/apps/species-builder/career-tables.ts
var JE = "WFRP Customizer Generated Career Tables", YE = "WFRP Customizer Career Table Link Fallback";
async function XE(t = JT()) {
	let n = FT(t, await qE()), r = await ZE(), i = await eD();
	await QE(r);
	for (let e of n) {
		let t = IT({
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
async function ZE() {
	let e = game.folders.contents.find((e) => e.type === "RollTable" && e.name === JE);
	if (e) return e;
	let t = await Folder.create({
		name: JE,
		type: "RollTable"
	});
	if (!t) throw Error("Foundry did not create the generated career table folder.");
	return t;
}
async function QE(e) {
	let t = (game.tables?.contents ?? []).filter((t) => t.folder?.id === e.id || $E(t));
	for (let e of t) await e.delete();
}
function $E(e) {
	return W(G(e.toObject(), [
		"flags",
		$,
		NT
	]));
}
async function eD() {
	let e = game.journal?.contents.find((e) => e.name === YE);
	if (e) return e.uuid;
	let t = await JournalEntry.create({
		name: YE,
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
function tD(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
function nD(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Item";
}
function rD(e, t = "Expected a Foundry Actor.") {
	if (!tD(e)) throw Error(t);
	return e;
}
function iD(e, t = "Expected a Foundry Item.") {
	if (!nD(e)) throw Error(t);
	return e;
}
function aD(e, t, n = `Expected a Foundry ${t} Item.`) {
	let r = iD(e, n);
	if (r.type !== t) throw Error(n);
	return r;
}
//#endregion
//#region src/module/foundry/drop-data.ts
function oD(e) {
	try {
		return JSON.parse(e);
	} catch {
		throw Error("Foundry drop data could not be read.");
	}
}
//#endregion
//#region src/module/apps/species-builder/item-drops.ts
async function sD(e, t) {
	let n = oD(e);
	if (n.type !== "Item" || !n.uuid) throw Error(`Drop a Foundry ${t} item here.`);
	let r = iD(await fromUuid(n.uuid), `Drop a Foundry ${t} item here.`);
	if (r.type !== t) throw Error(`Drop a Foundry ${t} item here.`);
	let i = {
		name: t === "career" && dD(r) || r.name,
		type: t,
		uuid: r.uuid
	};
	if (t === "career") {
		let e = fD(r);
		e && (i.careerJournalUuid = e);
	}
	let a = uD(r);
	return a && (i.specification = a), r.img && (i.img = r.img), i;
}
async function cD(e) {
	let t = oD(e);
	if (t.type !== "JournalEntry" && t.type !== "JournalEntryPage" || !t.uuid) throw Error("Drop a Foundry Journal Entry or Journal Entry Page here.");
	let n = await fromUuid(t.uuid);
	if (!hD(n)) throw Error("Drop a Foundry Journal Entry or Journal Entry Page here.");
	return {
		name: n.name,
		uuid: n.uuid
	};
}
async function lD(e) {
	iD(await fromUuid(e), "The linked Foundry Item was not found.").sheet?.render(!0);
}
function uD(e) {
	let t = [
		G(e.system, ["specification", "value"]),
		G(e, ["specifier"]),
		G(e.system, ["specifier"]),
		G(e.system, ["specifier", "value"])
	];
	for (let e of t) {
		if (typeof e == "string" && e.trim()) return e.trim();
		if (typeof e == "number") return String(e);
	}
	return "";
}
function dD(e) {
	let t = G(e.system, ["careergroup", "value"]);
	return typeof t == "string" ? t.trim() : "";
}
function fD(e) {
	let t = G(e.system, ["description", "value"]);
	return typeof t == "string" ? /^@UUID\[([^\]]+)]{[^{}]+}$/.exec(pD(t))?.[1]?.trim() ?? "" : "";
}
function pD(e) {
	let t = e.trim();
	t = t.replaceAll(/<(p|div)>(?:\s|&nbsp;|<br\s*\/?>)*<\/\1>/gi, "").trim();
	let n = /^<(p|div)>([\S\s]*)<\/\1>$/i.exec(t);
	return n?.[2] !== void 0 && (t = n[2].trim()), mD(t.replaceAll(/<br\s*\/?>/gi, "").trim());
}
function mD(e) {
	return e.replaceAll("&nbsp;", " ").replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", "\"").replaceAll("&#39;", "'").trim();
}
function hD(e) {
	return typeof e == "object" && !!e && "documentName" in e && (e.documentName === "JournalEntry" || e.documentName === "JournalEntryPage") && "name" in e && typeof e.name == "string" && "uuid" in e && typeof e.uuid == "string";
}
//#endregion
//#region src/module/apps/species-builder/random-talent-sources.ts
var gD = {
	key: "talents",
	label: "Talents - Character Creation"
};
function _D() {
	let e = /* @__PURE__ */ new Map();
	e.set(gD.key, gD);
	for (let t of game.tables?.contents ?? []) {
		let n = t.getFlag("wfrp4e", "key");
		if (typeof n != "string" || !n.trim()) continue;
		let r = vD(n, t);
		e.set(n, {
			key: n,
			label: r
		});
	}
	return [...e.values()].sort(yD);
}
function vD(e, t) {
	let n = game.wfrp4e?.tables?.findTable?.(e);
	return (W(n) && typeof n.name == "string" ? n.name : t.name).trim() || e;
}
function yD(e, t) {
	return e.key === gD.key ? -1 : t.key === gD.key ? 1 : e.label.localeCompare(t.label);
}
//#endregion
//#region src/module/apps/species-builder/world-table/journals.ts
var bD = "generatedSpeciesJournal", xD = "WFRP Customizer Species Journals";
async function SD(e) {
	let t = game.journal?.contents ?? [], n = CD(t), r, i = [];
	for (let a of e.rows) {
		let e = wD(a.journalUuid, a.speciesKey, t) || n.get(a.speciesKey)?.uuid;
		if (!e) {
			r ??= await ED();
			let t = await JournalEntry.create({
				flags: { [$]: { [bD]: { speciesKey: a.speciesKey } } },
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
function CD(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = TD(n);
		if (e) {
			if (t.has(e)) throw Error(`Multiple Species Builder Journals exist for "${e}". Remove the duplicate and retry.`);
			t.set(e, n);
		}
	}
	return t;
}
function wD(e, t, n) {
	let r = e?.trim() ?? "";
	if (!r) return "";
	let i = n.find((e) => e.uuid === r);
	if (!i) return r.startsWith("JournalEntry.") && r.split(".").length === 2 ? "" : r;
	let a = TD(i);
	return a && a !== t ? "" : r;
}
function TD(e) {
	let t = e.getFlag($, bD);
	return W(t) ? K(t, ["speciesKey"]).trim() : "";
}
async function ED() {
	let e = game.folders.contents.find((e) => e.type === "JournalEntry" && e.name === xD);
	if (e) return e;
	let t = await Folder.create({
		name: xD,
		type: "JournalEntry"
	});
	if (!t) throw Error("Foundry did not create the generated Species Journal folder.");
	return t;
}
//#endregion
//#region src/module/apps/species-builder/world-table/persistence.ts
var DD = "species", OD = "tableSettings";
async function kD(e) {
	let t = await SD(e), n = Pu(t, $);
	return e.ownership === "managed" ? await ND(t, n) : await MD(t, n);
}
async function AD(e) {
	let t = game.settings.get(yT, OD);
	if (!W(t)) throw Error("WFRP table settings are unavailable; the Species table was not registered.");
	await game.settings.set(yT, OD, {
		...t,
		[DD]: e
	});
}
function jD(e) {
	return e.getFlag($, wu) === !0;
}
async function MD(e, t) {
	if (e.ownership === "external") {
		let t = e.tableId ? game.tables?.get(e.tableId) : void 0;
		if (!t || jD(t)) throw Error("The source Species table changed. Reload before saving a managed copy.");
	}
	if ((game.tables?.contents ?? []).some(jD)) throw Error("A managed Species table already exists. Reload before saving.");
	let n = await RollTable.create(t);
	if (!n) throw Error("Foundry did not create the managed Species table.");
	return n;
}
async function ND(e, t) {
	let n = e.tableId ? game.tables?.get(e.tableId) : void 0;
	if (!n || !jD(n)) throw Error("The managed Species table changed. Reload before saving again.");
	let r = Array.isArray(t.results) ? t.results.filter(W) : [];
	return await n.update({
		displayRoll: t.displayRoll,
		[`flags.${$}.${wu}`]: !0,
		[`flags.${yT}.key`]: DD,
		formula: t.formula,
		name: t.name,
		replacement: t.replacement
	}), await PD(n, e.rows, r), n;
}
async function PD(e, t, n) {
	let r = e.toObject(), i = Array.isArray(r.results) ? r.results.filter(W) : [], a = new Set(i.map((e) => K(e, ["_id"]))), o = /* @__PURE__ */ new Set(), s = [], c = [];
	n.forEach((e, n) => {
		let r = FD(t[n], i, a, o);
		r ? (o.add(r), s.push({
			...e,
			_id: r
		})) : c.push(e);
	});
	let l = [...a].filter((e) => e && !o.has(e));
	s.length > 0 && await e.updateEmbeddedDocuments("TableResult", s), c.length > 0 && await e.createEmbeddedDocuments("TableResult", c), l.length > 0 && await e.deleteEmbeddedDocuments("TableResult", l);
}
function FD(e, t, n, r) {
	if (e?.resultId && n.has(e.resultId) && !r.has(e.resultId)) return e.resultId;
	let i = t.find((t) => K(t, [
		"flags",
		"wfrp4e",
		"species"
	]) === e?.speciesKey && !r.has(K(t, ["_id"])));
	return i ? K(i, ["_id"]) : "";
}
//#endregion
//#region src/module/apps/species-builder/world-table/index.ts
var ID = "species", LD = "tableSettings";
function RD() {
	let e = JT(), t = new Set(e.definitions.map((e) => e.key)), n = BD().filter((e) => !t.has(e.key)), r = Eu(n, e.definitions), i = game.tables?.contents ?? [], a = VD(), o = HD(i, i.filter(jD), a);
	return {
		draft: o ? UD(o, r, a[0] === o.id) : KD(),
		runtimeOptions: n
	};
}
async function zD(e, t) {
	let n = await kD(e);
	if (t) try {
		await AD(n.id);
	} catch (e) {
		return {
			...RD(),
			registrationError: e instanceof Error ? e.message : "The Species table could not be registered."
		};
	}
	return RD();
}
function BD() {
	let e = game.wfrp4e?.config?.species;
	return W(e) ? Object.entries(e).flatMap(([e, t]) => {
		let n = typeof t == "string" ? t.trim() : "";
		return e.trim() && n ? [{
			key: e.trim(),
			label: n
		}] : [];
	}) : [];
}
function VD() {
	let e = game.settings.get(yT, LD), t = W(e) ? e[ID] : void 0;
	return typeof t == "string" ? t.split(",").map((e) => e.trim()).filter(Boolean) : [];
}
function HD(e, t, n) {
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
	return e.find((e) => e.getFlag(yT, "key") === ID);
}
function UD(e, t, n) {
	let r = e.toObject(), i = (Array.isArray(r.results) ? r.results : []).flatMap((e) => WD(e, t));
	return i.sort((e, t) => GD(e.source) - GD(t.source)), {
		isRegistered: n,
		name: e.name,
		ownership: jD(e) ? "managed" : "external",
		requiresLinkRepair: i.some((e) => e.requiresLinkRepair),
		rows: i.map(({ row: e }) => e),
		tableId: e.id
	};
}
function WD(e, t) {
	if (!W(e)) return [];
	let n = K(e, ["name"]), r = ju(K(e, ["description"])), i = K(e, [
		"flags",
		yT,
		"species"
	]), a = r?.label || n, o = Au(i, a, t), s = K(e, ["_id"]), c = K(e, ["type"]);
	return [{
		requiresLinkRepair: !r || r.label !== n.trim() || c !== "text",
		row: {
			...r ? { journalUuid: r.uuid } : {},
			name: a,
			...s ? { resultId: s } : {},
			speciesKey: o,
			weight: Mu(e)
		},
		source: e
	}];
}
function GD(e) {
	let t = G(e, ["range"]), n = Array.isArray(t) ? Number(t[0]) : 0;
	return Number.isInteger(n) ? n : 0;
}
function KD() {
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
function qD(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function JD(e) {
	return e.documentName === "Item" || K(e, ["metadata", "type"]) === "Item" || K(e, ["metadata", "documentName"]) === "Item";
}
function YD(e) {
	return e.documentName === "Actor" || K(e, ["metadata", "type"]) === "Actor" || K(e, ["metadata", "documentName"]) === "Actor";
}
function XD(e) {
	return Array.isArray(e) ? e.filter(QD) : W(e) && Array.isArray(e.contents) ? e.contents.filter(QD) : $D(e) ? [...e].flatMap((e) => {
		let t = Array.isArray(e) ? e[1] : e;
		return QD(t) ? [t] : [];
	}) : [];
}
function ZD() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
function QD(e) {
	return W(e);
}
function $D(e) {
	return W(e) && Symbol.iterator in e;
}
//#endregion
//#region src/module/apps/species-builder/validation/table-results.ts
function eO(e, t) {
	let n = nO(e);
	if (n.reason) return uO(n.reason);
	let r = n.texts.filter((e) => !t.has(sO(e)));
	return r.length > 0 ? uO(`these result labels do not match Talent Items exactly: ${cO(r).join(", ")}`) : lO();
}
function tO(e, t) {
	let n = nO(e);
	if (n.reason) return uO(n.reason);
	let r = n.texts.filter((e) => !t.has(e));
	return r.length > 0 ? uO(`these result labels do not match tier-1 Career groups exactly: ${cO(r).join(", ")}`) : lO();
}
function nO(e) {
	if (!W(e)) return {
		reason: "the table could not be found",
		texts: []
	};
	if (Array.isArray(e.columns)) return {
		reason: "the table key resolves to multiple columns instead of one RollTable",
		texts: []
	};
	let t = oO(e.results);
	if (t.length === 0) return {
		reason: "the table has no results",
		texts: []
	};
	let n = t.map(iO);
	return n.filter((e) => !e).length > 0 ? {
		reason: "one or more results have no usable WFRP result text",
		texts: n
	} : { texts: n };
}
function rO(e) {
	return /\{(.+?)\}/u.exec(e)?.[1] ?? e;
}
function iO(e) {
	if (!W(e)) return "";
	let t = e.type === "document" ? aO(e) : e.description;
	return typeof t == "string" ? rO(t) : "";
}
function aO(e) {
	let t = e.documentUuid, n = e.name;
	return typeof t == "string" && typeof n == "string" ? `@UUID[${t}]{${n}}` : "";
}
function oO(e) {
	return Array.isArray(e) ? e : W(e) && Symbol.iterator in e ? [...e] : [];
}
function sO(e) {
	return e.split("(")[0]?.trim() ?? "";
}
function cO(e) {
	return [...new Set(e.map((e) => e || "(blank result)"))];
}
function lO() {
	return { readyForCharacterCreation: !0 };
}
function uO(e) {
	return {
		readyForCharacterCreation: !1,
		reason: e
	};
}
//#endregion
//#region src/module/apps/species-builder/validation/career-table.ts
function dO(e, t, n, r) {
	let i = fO(e, t, typeof n == "string" ? n.trim() : "");
	for (let e of i) {
		let t = mO(e);
		if (!t) continue;
		let n = hO(t, e);
		if (n) return pO(e, n, r);
	}
	return pO(i.at(-1) ?? e, void 0, r);
}
function fO(e, t, n) {
	let r = t ? [
		n,
		`${e}-${t}`,
		e
	] : [e];
	return e === "human" && r.push("human-reiklander"), [...new Set(r.filter(Boolean))];
}
function pO(e, t, n) {
	let r = tO(t, n);
	return r.readyForCharacterCreation ? r : {
		readyForCharacterCreation: !1,
		reason: `career table column ${e} is not ready: ${r.reason ?? "invalid table"}`
	};
}
function mO(e) {
	return game.wfrp4e?.tables?.findTable?.("career", e);
}
function hO(e, t) {
	return !W(e) || !Array.isArray(e.columns) ? e : e.columns.find((e) => gO(e) === t);
}
function gO(e) {
	if (!W(e) || typeof e.getFlag != "function") return "";
	let t = e.getFlag.call(e, "wfrp4e", "column");
	return typeof t == "string" ? t : "";
}
//#endregion
//#region src/module/apps/species-builder/validation/runtime-grants.ts
function _O(e, t, n) {
	let r = yO(e.randomTalents, t.randomTalentSources, n);
	bO(e.skills, "skills", t.skills, n), xO(e.talents, r, t, n), bO(e.traits, "traits", t.traits, n), CO(e.talentReplacement, t.talents, n);
}
function vO(e, t, n) {
	if (e) {
		if (!W(e)) {
			n.push("Career replacements are not an object");
			return;
		}
		for (let [r, i] of Object.entries(e)) {
			if (t.has(r) || n.push(`Career replacement source ${kO(r)} does not match exactly`), !Array.isArray(i) || i.length === 0) {
				n.push(`Career replacements for ${kO(r)} must be a non-empty array`);
				continue;
			}
			for (let e of i) (typeof e != "string" || !t.has(e.trim())) && n.push(`Career replacement ${kO(e)} does not match exactly`);
		}
	}
}
function yO(e, t, n) {
	let r = e || { talents: 0 };
	if (!W(r)) return n.push("random Talents configuration is not an object"), /* @__PURE__ */ new Set();
	let i = new Set(Object.keys(r));
	for (let [e, i] of Object.entries(r)) {
		EO(i) || n.push(`random Talent count for ${kO(e)} is not a non-negative whole number`);
		let r = t.get(e);
		r ? r.readyForCharacterCreation || n.push(`random Talent table ${kO(e)} is not ready: ${r.reason ?? "invalid results"}`) : n.push(`random Talent table is missing for ${kO(e)}`);
	}
	return i;
}
function bO(e, t, n, r) {
	if (!Array.isArray(e)) {
		r.push(`${t} must be an array of names`);
		return;
	}
	let i = e.filter((e) => typeof e != "string" || !n.has(DO(e)));
	i.length > 0 && r.push(`${t} do not match available Items exactly: ${OO(i)}`);
}
function xO(e, t, n, r) {
	if (!Array.isArray(e)) {
		r.push("talents must be an array of names or numeric random Talent counts");
		return;
	}
	for (let i of e) {
		if (TO(i)) {
			EO(i) || r.push(`numeric Talent grant ${kO(i)} is not a non-negative whole number`), SO("talents", t, n, r);
			continue;
		}
		if (typeof i != "string") {
			r.push(`Talent grant ${kO(i)} is not a name or numeric count`);
			continue;
		}
		let e = i.includes(",") ? i.split(",") : [i];
		for (let a of e) {
			let e = a.trim(), o = i.includes(",") ? wO(e) : void 0;
			o ? SO(o.key, t, n, r) : n.talents.has(DO(e)) || r.push(`Talent ${kO(e)} does not match an available Item exactly`);
		}
	}
}
function SO(e, t, n, r) {
	if (!t.has(e)) {
		r.push(`Talent grant uses random table ${kO(e)} without configuring that key`);
		return;
	}
	let i = n.randomTalentSources.get(e);
	i ? i.readyForCharacterCreation || r.push(`Talent grant uses unready random table ${kO(e)}`) : r.push(`Talent grant uses missing random table ${kO(e)}`);
}
function CO(e, t, n) {
	if (e) {
		if (!W(e)) {
			n.push("Talent replacements are not an object");
			return;
		}
		for (let [r, i] of Object.entries(e)) t.has(DO(r)) || n.push(`Talent replacement source ${kO(r)} does not match exactly`), (typeof i != "string" || !t.has(DO(i))) && n.push(`Talent replacement ${kO(i)} does not match exactly`);
	}
}
function wO(e) {
	let t = /random\[(\d)\](?:\[?([a-zA-Z-_]+)\])?/iu.exec(e);
	return t ? { key: t[2] ?? "talents" } : void 0;
}
function TO(e) {
	return typeof e == "number" && Number.isFinite(e) || typeof e == "string" && e.trim() !== "" && Number.isFinite(Number(e));
}
function EO(e) {
	return TO(e) && Number.isInteger(Number(e)) && Number(e) >= 0;
}
function DO(e) {
	return e.split("(")[0]?.trim() ?? "";
}
function OO(e) {
	return [...new Set(e.map(kO))].join(", ");
}
function kO(e) {
	return `“${typeof e == "string" ? e.trim() || "(blank)" : String(e)}”`;
}
//#endregion
//#region src/module/apps/species-builder/validation/runtime-species.ts
var AO = Object.values(U), jO = [
	["speciesMovement", "movement"],
	["speciesFate", "fate"],
	["speciesRes", "resilience"],
	["speciesExtra", "extra points"]
];
function MO(e, t, n = []) {
	let r = W(e.species) ? e.species : {}, i = new Set(n.map((e) => e.trim()).filter(Boolean));
	return Object.entries(r).filter(([e]) => !i.has(e)).map(([n, r]) => {
		let i = typeof r == "string" && r.trim() ? r.trim() : n, a = NO(e, n, r, t);
		return a.length > 0 ? {
			key: n,
			name: i,
			readyForCharacterCreation: !1,
			reason: PO(a)
		} : {
			key: n,
			name: i,
			readyForCharacterCreation: !0
		};
	}).sort((e, t) => e.name.localeCompare(t.name));
}
function NO(e, t, n, r) {
	let i = [];
	t.trim() || i.push("species key is missing"), (typeof n != "string" || !n.trim()) && i.push("display name is missing");
	let a = BO(e, t);
	_O(a, r, i);
	let o = GO(e, "speciesCharacteristics", t);
	return IO(o, i), LO(HO(e, t), i), RO(e, t, i), vO(GO(e, "speciesCareerReplacements", t), r.careerGroups, i), zO(r.validateCareerTable(t, void 0, void 0), i), FO(e, t, o, a, r, i), i;
}
function PO(e) {
	let t = e[0] ?? "runtime configuration is incomplete", n = e.length - 1;
	return n > 0 ? `${t} (+${n} more)` : t;
}
function FO(e, t, n, r, i, a) {
	let o = e.subspecies, s = W(o) ? o[t] : void 0;
	if (s) {
		if (!W(s)) {
			a.push("subspecies configuration is not an object");
			return;
		}
		for (let [o, c] of Object.entries(s)) {
			let s = [];
			if (!W(c)) {
				a.push(`subspecies ${o} is not an object`);
				continue;
			}
			(typeof c.name != "string" || !c.name.trim()) && s.push("display name is missing"), IO(c.characteristics || n, s), LO(UO(e, t, c), s), _O(VO(c, r), i, s), vO(GO(e, "speciesCareerReplacements", `${t}-${o}`), i.careerGroups, s), zO(i.validateCareerTable(t, o, c.careerTable), s), a.push(...s.map((e) => `subspecies ${o}: ${e}`));
		}
	}
}
function IO(e, t) {
	if (!W(e)) {
		t.push("characteristic formulas are missing");
		return;
	}
	let n = AO.filter((t) => {
		let n = e[t];
		return typeof n != "string" || !Pf(n);
	});
	n.length > 0 && t.push(`characteristic formulas are invalid or missing for ${n.join(", ")}`);
}
function LO(e, t) {
	for (let [n, r] of Object.entries(e)) (!Number.isInteger(r) || Number(r) < 0) && t.push(`${n} is missing or not a non-negative whole number`);
}
function RO(e, t, n) {
	let r = GO(e, "speciesAge", t);
	(typeof r != "string" || !Nf(r, !1)) && n.push("age formula is missing or invalid");
	let i = GO(e, "speciesHeight", t);
	(!W(i) || typeof i.die != "string" || !Nf(i.die, !0) || !KO(i.feet) || !KO(i.inches)) && n.push("height needs a valid die formula and non-negative whole feet and inches");
}
function zO(e, t) {
	e.readyForCharacterCreation || t.push(e.reason ?? "Career table is not ready");
}
function BO(e, t) {
	return {
		randomTalents: GO(e, "speciesRandomTalents", t),
		skills: GO(e, "speciesSkills", t),
		talentReplacement: GO(e, "speciesTalentReplacement", t) || {},
		talents: GO(e, "speciesTalents", t),
		traits: GO(e, "speciesTraits", t) || []
	};
}
function VO(e, t) {
	return {
		randomTalents: e.randomTalents || t.randomTalents,
		skills: e.skills || t.skills,
		talentReplacement: e.talentReplacement || t.talentReplacement,
		talents: e.talents || t.talents,
		traits: e.speciesTraits || t.traits
	};
}
function HO(e, t) {
	return Object.fromEntries(jO.map(([n, r]) => [r, GO(e, n, t)]));
}
function UO(e, t, n) {
	return Object.fromEntries(jO.map(([r, i]) => [i, n[WO(r)] ?? GO(e, r, t)]));
}
function WO(e) {
	return e === "speciesRes" ? "resilience" : e.replace("species", "").toLowerCase();
}
function GO(e, t, n) {
	let r = e[t];
	return W(r) ? r[n] : void 0;
}
function KO(e) {
	return typeof e == "number" && Number.isInteger(e) && e >= 0;
}
//#endregion
//#region src/module/apps/species-builder/validation/catalog.ts
var qO = [
	"skill",
	"talent",
	"trait"
], JO = [
	"name",
	"type",
	"system.careergroup.value",
	"system.level.value"
];
async function YO(e = []) {
	let t = W(game.wfrp4e?.config) ? game.wfrp4e.config : {}, n = {
		careerGroups: /* @__PURE__ */ new Map(),
		itemNames: {
			skill: /* @__PURE__ */ new Map(),
			talent: /* @__PURE__ */ new Map(),
			trait: /* @__PURE__ */ new Map()
		}
	};
	for (let e of game.items?.contents ?? []) XO(n, e);
	for (let e of ZO()) {
		if (!e.getIndex) continue;
		let t = await e.getIndex({ fields: JO });
		for (let e of XD(t)) XO(n, e);
	}
	let r = QO(t, n.itemNames.talent), i = new Set(n.careerGroups.keys());
	return {
		careerGroupNames: ok(n.careerGroups),
		itemBaseNames: {
			skill: ok(n.itemNames.skill),
			talent: ok(n.itemNames.talent),
			trait: ok(n.itemNames.trait)
		},
		randomTalentSources: r,
		runtimeSpecies: MO(t, {
			careerGroups: i,
			randomTalentSources: new Map(r.map((e) => [e.key, e])),
			skills: new Set(n.itemNames.skill.keys()),
			talents: new Set(n.itemNames.talent.keys()),
			traits: new Set(n.itemNames.trait.keys()),
			validateCareerTable: (e, t, n) => dO(e, t, n, i)
		}, e)
	};
}
function XO(e, t) {
	if (!W(t) || typeof t.type != "string" || typeof t.name != "string") return;
	if (nk(t.type)) {
		ik(e.itemNames[t.type], rk(t.name));
		return;
	}
	let n = Number(G(t, [
		"system",
		"level",
		"value"
	]));
	if (t.type !== "career" || n !== 1) return;
	let r = G(t, [
		"system",
		"careergroup",
		"value"
	]);
	typeof r == "string" && ik(e.careerGroups, r);
}
function ZO() {
	let e = game.wfrp4e?.tags?.getPacksWithTag?.([...qO, "career"]);
	return e ? [...new Set(e)].filter(JD) : (game.packs ?? []).filter(JD);
}
function QO(e, t) {
	let n = [];
	for (let r of $O(e)) {
		let e = game.wfrp4e?.tables?.findTable?.(r);
		if (!e) continue;
		let i = eO(e, new Set(t.keys()));
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
function $O(e) {
	let t = new Set(["talents"]);
	for (let e of game.tables?.contents ?? []) ak(t, e.getFlag("wfrp4e", "key"));
	let n = game.settings.get("wfrp4e", "tableSettings");
	W(n) && Object.keys(n).forEach((e) => t.add(e)), ek(e.speciesRandomTalents, t);
	let r = e.subspecies;
	if (W(r)) {
		for (let e of Object.values(r)) if (W(e)) for (let n of Object.values(e)) W(n) && tk(n.randomTalents, t);
	}
	return [...t];
}
function ek(e, t) {
	W(e) && Object.values(e).forEach((e) => tk(e, t));
}
function tk(e, t) {
	W(e) && Object.keys(e).forEach((e) => t.add(e));
}
function nk(e) {
	return qO.some((t) => t === e);
}
function rk(e) {
	return e.split("(", 1)[0]?.trim() ?? "";
}
function ik(e, t) {
	let n = t.trim();
	n && !e.has(n) && e.set(n, n);
}
function ak(e, t) {
	typeof t == "string" && t.trim() && e.add(t.trim());
}
function ok(e) {
	return [...e.values()].sort((e, t) => e.localeCompare(t));
}
//#endregion
//#region src/module/apps/species-builder/wound-formula-traits.ts
var sk = "WFRP Customizer Generated Species Traits";
async function ck(t = JT()) {
	let n = ul(t, await qE()), r = await lk();
	await uk(r);
	for (let e of n) {
		let t = pl({
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
async function lk() {
	let e = game.folders.contents.find((e) => e.type === "Item" && e.name === sk);
	if (e) return e;
	let t = await Folder.create({
		name: sk,
		type: "Item"
	});
	if (!t) throw Error("Foundry did not create the generated Species Trait folder.");
	return t;
}
async function uk(e) {
	let t = (game.items?.contents ?? []).filter((t) => t.folder?.id === e.id || dk(t));
	for (let e of t) await e.delete();
}
function dk(e) {
	return W(G(e.toObject(), [
		"flags",
		$,
		ll
	]));
}
//#endregion
//#region src/module/apps/species-builder/foundry-bridge.ts
async function fk(e, t) {
	let n = await YT(e);
	if (!t) return { settings: n };
	let r = (await Promise.allSettled([XE(n), ck(n)])).flatMap((e) => e.status === "rejected" ? [mk(e.reason)] : []);
	return r.length > 0 ? {
		settings: n,
		syncError: r.join(" ")
	} : { settings: n };
}
var pk = {
	loadSettings: async () => JT(),
	loadRandomTalentSources: async () => _D(),
	loadRuntimeSpecies: qE,
	loadValidationCatalog: YO,
	loadSpeciesTable: async () => RD(),
	openItemSheet: lD,
	resolveItemDrop: sD,
	resolveJournalDrop: cD,
	saveSettings: fk,
	saveSpeciesTable: zD
};
function mk(e) {
	return e instanceof Error ? e.message : "Generated document synchronization failed.";
}
//#endregion
//#region src/module/apps/species-builder/reload-confirmation.ts
function hk() {
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
var gk = class extends MT {
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
		return _T;
	}
	getVueProps() {
		return {
			bridge: pk,
			onSettingsSaved: () => {
				this.#e = !0;
			}
		};
	}
	async _preClose(e) {
		let t = this.#e;
		this.#e = !1, t && await hk() && window.location.reload(), await super._preClose(e);
	}
};
//#endregion
//#region src/functions/npc-builder/create-default-trait-config.ts
function _k() {
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
function vk(e, t) {
	return `${e}:${wk(t)}`;
}
function yk(e) {
	let t = e.level ?? 1;
	return Number.isFinite(t) ? Math.max(1, Math.floor(t)) * 5 : 5;
}
function bk(e) {
	return e.name;
}
function xk(e, t) {
	return e === "characteristic" ? t.allowBaseActorCharacteristics : e === "skill" ? t.allowBaseActorSkills : t.allowBaseActorTalents;
}
function Sk(e, t) {
	return {
		..._k(),
		...e,
		...t
	};
}
function Ck(e, t) {
	return wk(e) === wk(t);
}
function wk(e) {
	return e.trim().toLocaleLowerCase();
}
function Tk(e) {
	return Number.isFinite(e) ? Math.max(1, Math.floor(e)) : 1;
}
function Ek(e) {
	let t = 0;
	for (let n of e) t += n.count;
	return t;
}
function Dk(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = wk(r);
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/skill-specialization.ts
function Ok(e, t, n) {
	return `${e}:${Nk(t)}:${n}`;
}
function kk(e, t) {
	let n = e.trim(), r = t.trim();
	return r ? `${n} (${r})` : n;
}
function Ak(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "";
	return !n || !r || jk(e) ? null : {
		baseName: n,
		originalName: e,
		specialization: r
	};
}
function jk(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "", i = Fk(r);
	return !n || !r || !Pk(r, i) ? null : {
		baseName: n,
		options: i,
		originalName: e,
		specialization: r
	};
}
function Mk(e, t) {
	let n = /* @__PURE__ */ new Map();
	return t.map((t) => {
		let r = Nk(t), i = n.get(r) ?? 0;
		return n.set(r, i + 1), {
			occurrence: i,
			originalName: t,
			resolutionKey: Ok(e, t, i)
		};
	});
}
function Nk(e) {
	return e.trim().replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function Pk(e, t) {
	return e.trim().toLocaleLowerCase() === "any" || t.length > 1;
}
function Fk(e) {
	return e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
}
//#endregion
//#region src/functions/npc-builder/advancements/source-counts.ts
function Ik(e, t) {
	return t <= 0 ? [] : [{
		count: t,
		kind: "career",
		label: `${e} extra time`
	}];
}
function Lk(e, t) {
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
function Rk(e, t, n, r) {
	let i = Bk(zk(e, r), n);
	return i.value === null ? t : Math.min(t, Math.max(0, i.value - e.baseAdvances));
}
function zk(e, t) {
	let n = t[wk(e.name)];
	return {
		maximumFormula: e.talentMaximumFormula ?? n?.maximumFormula ?? "",
		maximumKey: e.talentMaximumKey ?? n?.maximumKey ?? ""
	};
}
function Bk(e, t) {
	let n = e.maximumKey.trim().toLocaleLowerCase();
	if (!n) return {
		label: "Unknown",
		value: null
	};
	if (n === "none") return {
		label: "-",
		value: null
	};
	if (n === "custom") return Vk(e.maximumFormula, t);
	let r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	if (Pc(n)) {
		let e = t[n] ?? 0, r = Math.max(0, Math.floor(e / 10));
		return {
			label: `${Mc[n]} Bonus (${r})`,
			value: r
		};
	}
	return {
		label: e.maximumKey || "Unknown",
		value: null
	};
}
function Vk(e, t) {
	let n = e.trim(), r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	let i = /@characteristics\.([a-z]+)\.bonus/i.exec(n)?.[1]?.toLocaleLowerCase();
	if (i && Pc(i)) {
		let e = t[i] ?? 0, n = Math.max(0, Math.floor(e / 10));
		return {
			label: `${Mc[i]} Bonus (${n})`,
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
function Hk(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.careers) {
		let i = Dk(Gk(r, t, e.skillGrantResolutions)), a = yk(r) / 5, o = Math.max(0, Tk(r.quantity) - 1) * 5;
		for (let e of i) {
			let i = vk(t, e), s = n.get(i);
			if (s) {
				a > s.highestLevel && (s.highestLevel = a, s.highestLevelSource = bk(r)), o > 0 && s.extraSources.push({
					count: o,
					kind: "career",
					label: `${r.name} extra time`
				});
				continue;
			}
			n.set(i, {
				extraSources: Ik(r.name, o),
				highestLevel: a,
				highestLevelSource: bk(r),
				name: e
			});
		}
	}
	for (let r of n.values()) Wk(e, {
		careerValue: r.highestLevel * 5 + Ek(r.extraSources),
		kind: t,
		name: r.name,
		sources: [{
			count: r.highestLevel * 5,
			kind: "career",
			label: r.highestLevelSource
		}, ...r.extraSources]
	});
}
function Uk(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.careers) {
		let r = Dk(Gk(n, "talent", e.skillGrantResolutions)), i = Math.max(0, Tk(n.quantity) - 1);
		for (let e of r) {
			let r = vk("talent", e), a = t.get(r);
			if (a) {
				i > 0 && a.extraSources.push({
					count: i,
					kind: "career",
					label: `${n.name} extra time`
				});
				continue;
			}
			t.set(r, {
				extraSources: Ik(n.name, i),
				firstSource: n.name,
				name: e
			});
		}
	}
	for (let n of t.values()) Wk(e, {
		careerValue: 1 + Ek(n.extraSources),
		kind: "talent",
		name: n.name,
		sources: [{
			count: 1,
			kind: "career",
			label: n.firstSource
		}, ...n.extraSources]
	}, e.characteristicTotals);
}
function Wk(e, t, n = {}) {
	let r = vk(t.kind, t.name), i = e.entries.get(r);
	if (i) {
		let r = t.kind === "talent" && i.includedFromBase ? t.sources.slice(1) : t.sources, a = t.kind === "talent" ? Rk(i, Ek(r), n, e.talentMaximums) : t.careerValue;
		i.careerValue = a, i.includedFromCareer = !0, i.sources = [...i.sources.filter((e) => e.kind === "base"), ...Lk(r, a)];
		return;
	}
	let a = {
		baseAdvances: 0,
		baseValue: 0,
		careerValue: t.careerValue,
		current: t.careerValue,
		includedFromBase: !1,
		includedFromCareer: !0,
		includedFromCustom: !1,
		kind: t.kind,
		minimumCurrent: 0,
		minimumTotal: 0,
		name: t.name,
		sources: t.sources
	};
	t.kind === "talent" && (a.careerValue = Rk(a, t.careerValue, n, e.talentMaximums), a.current = a.careerValue, a.sources = Lk(t.sources, a.careerValue)), e.entries.set(r, { ...a });
}
function Gk(e, t, n) {
	return t === "characteristic" ? e.grants.characteristics : t === "skill" ? Mk(e.uuid, e.grants.skills).map((e) => n[e.resolutionKey] || e.originalName) : e.grants.talents;
}
//#endregion
//#region src/functions/npc-builder/advancements/entry-context.ts
function Kk(e, t) {
	let n = {};
	for (let r of e.values()) {
		if (r.kind !== "characteristic") continue;
		let e = Nc[wk(r.name)];
		if (!e) continue;
		let i = t[vk(r.kind, r.name)] ?? 0, a = Math.max(r.minimumCurrent, Math.floor(r.careerValue + i));
		n[e] = Math.max(0, r.baseValue + a);
	}
	return n;
}
function qk(e, t, n) {
	return e.kind === "skill" ? Jk(e, t, n) : e.kind === "talent" ? Yk(e, t, n) : e;
}
function Jk(e, t, n) {
	let r = Xk(e) ?? Zk(e.name, n.skillCharacteristics) ?? Qk(e.name, n.baseActorDraftData);
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
function Yk(e, t, n) {
	let r = zk(e, n.talentMaximums), i = Bk(r, t);
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
function Xk(e) {
	return !e.characteristicKey || !e.characteristicName ? null : {
		characteristicKey: e.characteristicKey,
		characteristicName: e.characteristicName,
		skillName: e.name
	};
}
function Zk(e, t) {
	return t[wk(e)] ?? null;
}
function Qk(e, t) {
	let n = t.advancements.find((t) => t.kind === "skill" && Ck(t.name, e));
	return n?.characteristicKey ? {
		characteristicKey: n.characteristicKey,
		characteristicName: n.characteristicName ?? Mc[n.characteristicKey],
		skillName: e
	} : null;
}
//#endregion
//#region src/functions/npc-builder/advancements/derive-advancements.ts
function $k(e) {
	let t = iA(e.baseActorDraftData), n = {
		careers: e.careers,
		entries: t,
		skillGrantResolutions: e.skillGrantResolutions,
		talentMaximums: e.talentMaximums
	};
	Hk(n, "characteristic"), Hk(n, "skill");
	let r = Kk(t, e.manualAdvancementDeltas);
	return Uk({
		...n,
		characteristicTotals: r
	}), aA(t, e.customAdvancements), [...t.values()].filter((t) => t.includedFromCareer || t.includedFromCustom || xk(t.kind, e.settings)).map((t) => {
		let n = qk(t, r, e), i = vk(t.kind, t.name), a = e.manualAdvancementDeltas[i] ?? 0, o = n.careerValue + a;
		return {
			...n,
			current: Math.max(n.minimumCurrent, Math.floor(o))
		};
	}).sort(oA);
}
function eA(e, t) {
	let n = Number.isFinite(t) ? t : 0;
	return Math.max(e.minimumCurrent, Math.floor(n)) - e.careerValue;
}
function tA(e, t) {
	let n = Number.isFinite(t) ? t : 0;
	return eA(e, Math.max(e.minimumTotal, Math.floor(n)) - e.baseValue);
}
function nA(e, t) {
	return {
		...e,
		...Object.fromEntries(t.map((e) => [wk(e.skillName), e]))
	};
}
function rA(e, t) {
	return {
		...e,
		...Object.fromEntries(t.map((e) => [wk(e.talentName), e]))
	};
}
function iA(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.advancements) {
		let e = vk(n.kind, n.name), r = {
			baseAdvances: n.baseAdvances,
			baseValue: n.current,
			careerValue: 0,
			current: 0,
			includedFromBase: !0,
			includedFromCareer: !1,
			includedFromCustom: !1,
			kind: n.kind,
			minimumCurrent: -n.current,
			minimumTotal: 0,
			name: n.name,
			sources: []
		};
		n.baseModifier !== void 0 && (r.baseModifier = n.baseModifier), n.characteristicKey && (r.characteristicKey = n.characteristicKey, r.characteristicName = n.characteristicName ?? Mc[n.characteristicKey]), n.kind === "talent" && n.baseAdvances > 0 && r.sources.push({
			count: n.baseAdvances,
			kind: "base",
			label: "Base"
		}), n.talentMaximumFormula && (r.talentMaximumFormula = n.talentMaximumFormula), n.talentMaximumKey && (r.talentMaximumKey = n.talentMaximumKey), t.set(e, r);
	}
	return t;
}
function aA(e, t) {
	for (let n of t) {
		let t = vk(n.kind, n.name), r = {
			count: n.advances,
			kind: "custom",
			label: "Dropped"
		}, i = e.get(t);
		if (i) {
			i.careerValue += n.advances, i.includedFromCustom = !0, i.sources.push(r), i.sourceUuid = i.sourceUuid ?? n.sourceUuid;
			continue;
		}
		e.set(t, {
			baseAdvances: 0,
			baseValue: 0,
			careerValue: n.advances,
			characteristicKey: n.characteristicKey,
			characteristicName: n.characteristicName,
			current: n.advances,
			includedFromBase: !1,
			includedFromCareer: !1,
			includedFromCustom: !0,
			kind: n.kind,
			minimumCurrent: 0,
			minimumTotal: 0,
			name: n.name,
			sourceUuid: n.sourceUuid,
			sources: [r],
			talentMaximumFormula: n.talentMaximumFormula,
			talentMaximumKey: n.talentMaximumKey
		});
	}
}
function oA(e, t) {
	return e.kind === t.kind ? e.name.localeCompare(t.name) : e.kind.localeCompare(t.kind);
}
//#endregion
//#region src/functions/npc-builder/advancements/advancement-actions.ts
function sA(e) {
	return e.kind === "talent" ? 1 : 5;
}
function cA(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function lA(e, t) {
	return cA(e) + t * sA(e);
}
function uA(e) {
	return cA(e);
}
function dA(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && uA(e) < t;
}
function fA(e) {
	return e.filter((e) => e.kind === "talent" && dA(e)).map((e) => ({
		kind: e.kind,
		name: e.name,
		total: e.talentMaximumValue
	}));
}
function pA(e, t) {
	let n = new Map(e.map((e) => [hA(e), e])), r = [];
	for (let e of t) {
		let t = n.get(hA(e));
		!t || t.current === e.current || r.push({
			current: e.current,
			kind: t.kind,
			name: t.name
		});
	}
	return r;
}
function mA(e, t) {
	return e.find((e) => e.kind === t.kind && e.name === t.name) ?? null;
}
function hA(e) {
	return `${e.kind}:${e.name}`;
}
//#endregion
//#region src/functions/npc-builder/xp-cost.ts
var gA = {
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
function _A(e) {
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
		let e = DA(r), i = e + r.current;
		if (r.kind === "characteristic") {
			let a = Nc[wk(r.name)];
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
	return vA(n, t);
}
function vA(e, t) {
	let n = SA(e, t), r = CA(e.skills, t.skills, gA.skill), i = wA(e.talents, t.talents);
	return {
		characteristics: n,
		skills: r,
		talents: i,
		total: n + r + i
	};
}
function yA(e) {
	let t = Math.max(0, Math.floor(e.current));
	return e.kind === "talent" ? xA(t) : bA(t, e.kind === "characteristic" ? gA.characteristic : gA.skill);
}
function bA(e, t) {
	let n = Math.max(0, Math.floor(e)), r = 0;
	for (let e = 0; e < n; e += 1) {
		let n = Math.min(Math.floor(e / 5), t.length - 1);
		r += t[n] ?? 0;
	}
	return r;
}
function xA(e, t = 0) {
	let n = Math.max(0, Math.floor(e)), r = Math.max(0, Math.floor(t)), i = 0;
	for (let e = 0; e < n; e += 1) i += (r + e + 1) * 100;
	return i;
}
function SA(e, t) {
	let n = 0;
	for (let r of Object.keys(Mc)) {
		let i = r, a = EA(e.characteristics[i] ?? 0, t.characteristics[i] ?? 0);
		n += bA(a, gA.characteristic);
	}
	return n;
}
function CA(e, t, n) {
	let r = TA(e), i = TA(t), a = 0;
	for (let [e, t] of r) {
		let r = EA(t, i.get(e) ?? 0);
		a += bA(r, n);
	}
	return a;
}
function wA(e, t) {
	let n = TA(e), r = TA(t), i = 0;
	for (let [e, t] of n) {
		let n = EA(t, r.get(e) ?? 0);
		i += xA(n);
	}
	return i;
}
function TA(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = wk(n.name), r = Math.floor(n.value);
		e && t.set(e, (t.get(e) ?? 0) + r);
	}
	return t;
}
function EA(e, t) {
	return Math.max(0, Math.floor(e) - Math.floor(t));
}
function DA(e) {
	return e.kind === "characteristic" ? Math.floor(e.baseValue) : e.kind === "skill" ? Math.floor(e.baseAdvances + (e.baseModifier ?? 0)) : Math.floor(e.baseAdvances);
}
//#endregion
//#region src/state/npc-builder/advancements/index.ts
function OA(e) {
	let { baseActorDraftData: t, careers: n, customAdvancements: r, manualAdvancementDeltas: i, settings: a, skillCharacteristics: o, skillGrantResolutions: s, talentMaximums: c } = e, l = V(() => $k({
		baseActorDraftData: t.value,
		careers: n.value,
		customAdvancements: r.value,
		manualAdvancementDeltas: i.value,
		settings: a.value,
		skillCharacteristics: o.value,
		skillGrantResolutions: s.value,
		talentMaximums: c.value
	})), u = V(() => _A(l.value)), d = V(() => fA(l.value).length);
	function f(e) {
		let t = vk(e.kind, e.name);
		r.value.some((e) => vk(e.kind, e.name) === t) || r.value.push(e);
	}
	function p(e) {
		let t = vk(e.kind, e.name);
		r.value = r.value.filter((e) => vk(e.kind, e.name) !== t), delete i.value[t];
	}
	function m(e, t) {
		x(e, lA(e, t));
	}
	function h() {
		for (let e of fA(l.value)) {
			let t = mA(l.value, e);
			t && x(t, e.total);
		}
	}
	function g(e, t) {
		let n = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), r = e.run({ advancements: l.value }, n), i = pA(l.value, r.advancements);
		for (let e of i) {
			let t = mA(l.value, e);
			t && b(t, e.current);
		}
	}
	function _(e) {
		return s.value[e] ?? "";
	}
	function v(e) {
		o.value = nA(o.value, e);
	}
	function y(e) {
		c.value = rA(c.value, e);
	}
	function b(e, t) {
		let n = vk(e.kind, e.name);
		i.value[n] = eA(e, t);
	}
	function x(e, t) {
		let n = vk(e.kind, e.name);
		i.value[n] = tA(e, t);
	}
	function S(e) {
		let t = vk(e.kind, e.name);
		delete i.value[t];
	}
	function C() {
		i.value = {};
	}
	function ee(e, t) {
		let n = t.trim();
		if (!n) {
			delete s.value[e];
			return;
		}
		s.value[e] = n;
	}
	function te(e) {
		let t = `${e}:`;
		for (let e of Object.keys(s.value)) e.startsWith(t) && delete s.value[e];
	}
	return {
		addCustomAdvancement: f,
		adjustAdvancementCurrent: m,
		applyAutoAdvance: g,
		advancements: l,
		estimatedNpcXp: u,
		getSkillGrantResolution: _,
		hydrateSkillCharacteristics: v,
		hydrateTalentMaximums: y,
		maximizableTalentCount: d,
		maximizeTalents: h,
		removeCustomAdvancement: p,
		removeSkillGrantResolutionsForCareer: te,
		resetAdvancementCurrent: S,
		resetAllAdvancementCurrents: C,
		setAdvancementCurrent: b,
		setAdvancementTotal: x,
		setSkillGrantResolution: ee
	};
}
//#endregion
//#region src/functions/npc-builder/draft-summary.ts
function kA(e, t) {
	return e.find((e) => e.uuid === t) ?? null;
}
function AA(e) {
	return e.at(-1) ?? null;
}
function jA(e) {
	let t = e.finalCareer?.name, n = e.settings.includeSpeciesInName && e.selectedBaseActor?.species ? e.selectedBaseActor.species : "";
	return t && n ? `${n} ${t}` : t || (e.selectedBaseActor ? `${e.selectedBaseActor.name} NPC` : "New NPC");
}
function MA(e, t) {
	return e.trim() || t;
}
function NA(e) {
	return e.finalCareer?.img || e.selectedBaseActor?.prototypeTokenImg || e.selectedBaseActor?.img || "";
}
function PA(e, t) {
	return e || t;
}
function FA(e) {
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
function IA(e) {
	let { actorName: t, baseActors: n, careers: r, clearBaseDraftData: i, clearMountSelection: a, customAdvancements: o, customSpells: s, customTraits: c, customTrappings: l, detectedSpells: u, ignoredBaseTraitKeys: d, magicLoreResolutions: f, removeSkillGrantResolutionsForCareer: p, selectedBaseActorUuid: m, selectedPortraitPath: h, settings: g, skillGrantResolutions: _, spellSelectionOverrides: v } = e, y = V(() => kA(n.value, m.value)), b = V(() => AA(r.value)), x = V(() => jA({
		finalCareer: b.value,
		selectedBaseActor: y.value,
		settings: g.value
	})), S = V(() => MA(t.value, x.value)), C = V(() => NA({
		finalCareer: b.value,
		selectedBaseActor: y.value
	})), ee = V(() => PA(h.value, C.value)), te = V(() => FA(r.value));
	function ne(e) {
		let t = r.value.find((t) => t.uuid === e.uuid);
		if (t) {
			t.quantity = Tk(t.quantity + 1);
			return;
		}
		r.value.push({
			...e,
			quantity: 1
		});
	}
	function re(e) {
		return r.value.some((t) => t.uuid === e.uuid) ? !1 : (r.value.push({
			...e,
			quantity: 1
		}), !0);
	}
	function ie(e, t) {
		let n = e + t, i = r.value[e];
		!i || n < 0 || n >= r.value.length || (r.value.splice(e, 1), r.value.splice(n, 0, i));
	}
	function ae(e, t) {
		let n = r.value[e];
		!n || e === t || t < 0 || t >= r.value.length || (r.value.splice(e, 1), r.value.splice(t, 0, n));
	}
	function w(e) {
		let [t] = r.value.splice(e, 1);
		t && p(t.uuid);
	}
	function oe() {
		for (let e of r.value) p(e.uuid);
		r.value = [];
	}
	function se() {
		t.value = "", oe(), o.value = [], c.value = [], l.value = [], s.value = [], u.value = [], d.value = {}, f.value = {}, h.value = "", _.value = {}, v.value = {}, m.value = "", i(), a();
	}
	function ce(e) {
		n.value.some((t) => t.uuid === e.uuid) || n.value.push(e), le(e.uuid);
	}
	function le(e) {
		let t = e.trim();
		m.value !== t && (h.value = ""), m.value = t;
	}
	function T(e) {
		h.value = e;
	}
	function ue(e, t) {
		let n = r.value[e];
		n && (n.quantity = Tk(t));
	}
	return {
		addCareer: ne,
		addCareerIfMissing: re,
		clearCareers: oe,
		finalActorName: S,
		finalCareer: b,
		finalPortraitPath: ee,
		grantTotals: te,
		moveCareer: ie,
		moveCareerToIndex: ae,
		removeCareer: w,
		resetDraft: se,
		selectBaseActor: ce,
		selectBaseActorUuid: le,
		selectedBaseActor: y,
		selectPortrait: T,
		setCareerQuantity: ue,
		suggestedActorName: x
	};
}
//#endregion
//#region src/state/npc-builder/hydration.ts
function LA(e) {
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
//#region src/state/npc-builder/mount.ts
function RA(e) {
	let { baseActorCombatProfile: t, mountActorProfile: n, mountActors: r, selectedMountActorUuid: i } = e;
	function a() {
		i.value = "", n.value = null;
	}
	function o(e) {
		t.value = e;
	}
	function s(e) {
		n.value = e;
	}
	function c(e) {
		r.value = [...e].sort((e, t) => e.name.localeCompare(t.name)), i.value && !r.value.some((e) => e.uuid === i.value) && a();
	}
	function l(e) {
		r.value.some((t) => t.uuid === e.uuid) || (r.value = [...r.value, e].sort((e, t) => e.name.localeCompare(t.name))), u(e.uuid);
	}
	function u(e) {
		i.value = e, n.value = null;
	}
	return {
		clearMountSelection: a,
		hydrateBaseActorCombatProfile: o,
		hydrateMountActorProfile: s,
		hydrateMountActors: c,
		selectMountActor: l,
		selectMountActorUuid: u
	};
}
//#endregion
//#region src/functions/npc-builder/portrait-candidates.ts
var zA = new Set([
	"and",
	"any",
	"the",
	"with",
	"without",
	"of",
	"or",
	"npc"
]), BA = "npc-builder-portrait-filter:", VA = "application/x-wfrp4e-customizer-portrait-filter-tag";
function HA(e) {
	let t = [];
	for (let n of [...e.careers].reverse()) n.img && t.push({
		img: n.img,
		key: `career:${n.uuid}`,
		label: `${n.name} icon`,
		source: "career",
		sourceGroup: "career",
		sourceLabel: "Career"
	});
	return e.selectedBaseActor?.img && t.push({
		img: e.selectedBaseActor.img,
		key: `base-actor:${e.selectedBaseActor.uuid}`,
		label: `${e.selectedBaseActor.name} image`,
		source: "base-actor",
		sourceGroup: "world",
		sourceLabel: "Base Actor"
	}), e.selectedBaseActor?.prototypeTokenImg && e.selectedBaseActor.prototypeTokenImg !== e.selectedBaseActor.img && t.push({
		img: e.selectedBaseActor.prototypeTokenImg,
		key: `base-token:${e.selectedBaseActor.uuid}`,
		label: `${e.selectedBaseActor.name} token`,
		source: "base-token",
		sourceGroup: "world",
		sourceLabel: "Base Token"
	}), ZA(t);
}
function UA(e) {
	let t = [];
	e.selectedBaseActor && t.push(e.selectedBaseActor.species, e.selectedBaseActor.name);
	for (let n of e.careers) t.push(n.name, n.careerGroup);
	return oj(t.flatMap((e) => aj(e)).filter((e) => e.length >= 3 && !zA.has(e)));
}
function WA(e) {
	return oj(aj(e).filter((e) => e.length >= 3 && !zA.has(e)));
}
function GA(e, t, n) {
	return e.filter((e) => (t[e] ?? "search") === n);
}
function KA(e, t) {
	let n = ij(e);
	return n ? t.some((e) => n.includes(e)) : !1;
}
function qA(e, t) {
	let n = rj(e), r = t.mustIncludeSourceGroups.length === 0 || e.sourceGroup !== void 0 && t.mustIncludeSourceGroups.includes(e.sourceGroup), i = e.sourceGroup !== void 0 && t.mustExcludeSourceGroups.includes(e.sourceGroup);
	return t.mustIncludeTerms.every((e) => n.includes(e)) && t.mustExcludeTerms.every((e) => !n.includes(e)) && r && !i;
}
function JA(e) {
	return {
		career: "Career",
		compendiums: "Compendiums",
		"dig-down": "Dig Down",
		world: "World"
	}[e];
}
function YA(e) {
	return `${BA}${e}`;
}
function XA(e) {
	return e.startsWith(BA) ? e.slice(28) : null;
}
function ZA(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.img.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
function QA(e) {
	let t = ZA([...HA(e), ...e.assetCandidates]);
	return !e.selectedPortraitPath || t.some((t) => nj(t.img) === nj(e.selectedPortraitPath)) ? t : [{
		img: e.selectedPortraitPath,
		key: `selected:${e.selectedPortraitPath}`,
		label: "Selected portrait",
		source: "foundry-asset",
		sourceLabel: "Selected"
	}, ...t];
}
function $A(e) {
	let t = e.settings.searchCompendiumPortraitAssets || e.settings.searchFoundryPortraitAssets, n = !!e.selectedBaseActor || e.careers.length > 0;
	return t && n && e.searchTerms.length > 0;
}
function ej(e) {
	return e ? e.maxDirectories <= 0 ? e.phase === "ready" ? 100 : 4 : Math.min(100, Math.round(e.directoriesVisited / e.maxDirectories * 100)) : 0;
}
function tj(e) {
	return e ? e.phase === "ready" ? `${e.candidatesFound} options found` : e.phase === "filesystem" ? e.maxDirectories <= 0 ? `${e.directoriesVisited} directories - ${e.currentLocation}` : `${e.directoriesVisited}/${e.maxDirectories} directories - ${e.currentLocation}` : e.currentLocation : "";
}
function nj(e) {
	return e.trim().toLocaleLowerCase();
}
function rj(e) {
	return ij([
		e.label,
		e.img,
		e.sourceLabel ?? ""
	].filter(Boolean).join(" "));
}
function ij(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[_-]/g, " ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\s+/g, " ");
}
function aj(e) {
	return ij(e).split(" ").filter(Boolean);
}
function oj(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/state/npc-builder/portraits.ts
function sj() {
	let e = /* @__PURE__ */ O([]), t = /* @__PURE__ */ O({}), n = /* @__PURE__ */ O({});
	function r(t) {
		let r = new Set(e.value), i = WA(t).filter((e) => !r.has(e));
		i.length && (e.value = [...e.value, ...i]);
		for (let e of i) n.value[e] = "search";
	}
	function i() {
		e.value = [], t.value = {}, n.value = {};
	}
	function a(e, n) {
		n !== "removed" && (t.value[e] = n);
	}
	function o(t, r) {
		if (r === "removed" && e.value.includes(t)) {
			e.value = e.value.filter((e) => e !== t), delete n.value[t];
			return;
		}
		n.value[t] = r;
	}
	function s(t) {
		let r = new Set([...t, ...e.value]);
		for (let e of Object.keys(n.value)) r.has(e) || delete n.value[e];
	}
	return {
		addCustomPortraitSearchTerm: r,
		customPortraitSearchTerms: e,
		portraitSourceTagSections: t,
		portraitTermSections: n,
		resetPortraitFilters: i,
		retainAvailablePortraitFilterTerms: s,
		setPortraitSourceTagSection: a,
		setPortraitTermSection: o
	};
}
//#endregion
//#region src/functions/npc-builder/default-npc-builder-settings.ts
function cj() {
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
var lj = cj(), uj = {
	advancements: [],
	optionalTraits: [],
	traits: [],
	trappings: []
}, dj = /\(([^)]+)\)/, fj = [
	"beasts",
	"death",
	"fire",
	"heavens",
	"metal",
	"life",
	"light",
	"shadow"
], pj = [
	"daemonology",
	"necromancy",
	"nurgle",
	"slaanesh",
	"tzeentch",
	"undivided"
];
function mj(e, t) {
	let n = e.trim(), r = n.toLocaleLowerCase();
	return r === "petty magic" ? xj({
		kind: "petty-magic",
		rawLore: "Petty Magic",
		source: t,
		sourceName: n
	}) : r.startsWith("arcane magic") ? xj({
		kind: "arcane-magic",
		rawLore: Sj(n),
		source: t,
		sourceName: n
	}) : r.startsWith("spellcaster") ? xj({
		kind: "spellcaster",
		rawLore: Sj(n),
		source: t,
		sourceName: n
	}) : null;
}
function hj(e) {
	return e.trim().replace(/^any\s+/i, "").replace(/^arcane\s+lore\s+of\s+/i, "").replace(/^arcane\s+lore$/i, "").replace(/^lore\s+of\s+/i, "").replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function gj(e) {
	return `${e.source}:${e.kind}:${e.sourceName}:${e.rawLore}`;
}
function _j(e, t) {
	return {
		...e,
		isAmbiguous: !1,
		normalizedLore: hj(t),
		rawLore: t.trim()
	};
}
function vj(e) {
	let t = hj(e);
	return t === "petty" ? "petty" : fj.includes(t) ? "eight-wind" : pj.includes(t) ? "dark" : "other";
}
function yj(e, t) {
	if (e.kind === "petty-magic") return t.filter((e) => e.category === "petty");
	let n = e.rawLore.trim().toLocaleLowerCase();
	return n.includes("dark") ? t.filter((e) => e.category === "dark") : n.includes("eight winds") ? t.filter((e) => e.category === "eight-wind") : t.filter((e) => e.category !== "petty");
}
function bj(e) {
	let t = e.trim().toLocaleLowerCase();
	return !t || t === "any" || t.includes("any ");
}
function xj(e) {
	let t = e.rawLore.trim();
	return {
		isAmbiguous: bj(t),
		kind: e.kind,
		normalizedLore: hj(t),
		rawLore: t,
		resolutionKey: gj({
			kind: e.kind,
			rawLore: t,
			source: e.source,
			sourceName: e.sourceName
		}),
		source: e.source,
		sourceName: e.sourceName
	};
}
function Sj(e) {
	return dj.exec(e)?.[1]?.trim() ?? "";
}
//#endregion
//#region src/functions/npc-builder/spells/derive-magic-grants.ts
function Cj(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.advancements) n.kind !== "talent" || n.baseAdvances + n.current <= 0 || wj(t, mj(n.name, "talent"), e);
	for (let n of e.traits) wj(t, mj(n.name, "trait"), e);
	return [...t.values()];
}
function wj(e, t, n) {
	if (!t) return;
	let r = n.loreResolutions[t.resolutionKey];
	e.set(t.resolutionKey, r ? _j(t, r) : t);
}
//#endregion
//#region src/functions/npc-builder/spells/derive-spells.ts
function Tj(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.detectedSpells) t.set(n.key, {
		...n,
		selected: e.selectionOverrides[n.key] ?? e.autoSelectDetectedSpells
	});
	for (let n of e.customSpells) t.set(n.key, {
		...n,
		selected: e.selectionOverrides[n.key] ?? n.selected
	});
	return [...t.values()].sort(Aj);
}
function Ej(e) {
	return e.filter((e) => e.selected);
}
function Dj(e) {
	return e.spells.map((t) => ({
		...t,
		selected: e.selectionOverrides[t.key] ?? e.autoSelectDetectedSpells
	}));
}
function Oj(e) {
	let t = e.detectedSpells.find((t) => kj(t, e.spell));
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
function kj(e, t) {
	return e.sourceUuid && e.sourceUuid === t.sourceUuid ? !0 : Ck(e.name, t.name);
}
function Aj(e, t) {
	return e.loreName === t.loreName ? e.name.localeCompare(t.name) : e.loreName.localeCompare(t.loreName);
}
//#endregion
//#region src/state/npc-builder/spells.ts
function jj(e) {
	let { advancements: t, customSpells: n, detectedSpells: r, magicLoreResolutions: i, settings: a, spellSelectionOverrides: o, traits: s } = e, c = V(() => Cj({
		advancements: t.value,
		loreResolutions: i.value,
		traits: s.value
	})), l = V(() => c.value.length > 0), u = V(() => Tj({
		autoSelectDetectedSpells: a.value.autoSelectGrantedSpells,
		customSpells: n.value,
		detectedSpells: r.value,
		selectionOverrides: o.value
	})), d = V(() => Ej(u.value));
	function f(e) {
		let t = Oj({
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
		r.value = Dj({
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
function Mj(e) {
	let t = /* @__PURE__ */ new Map();
	if (e.allowBaseActorTraits) for (let n of e.baseActorDraftData.traits) {
		let r = Ij(n);
		e.ignoredBaseTraitKeys[r] || t.set(r, zj(n, r, !1));
	}
	for (let n of e.customTraits) Rj([...t.values()], n.name) || t.set(n.key, { ...n });
	return [...t.values()].map((t) => ({
		...t,
		config: Sk(t.config, e.traitConfigOverrides[t.key])
	})).sort(Bj);
}
function Nj(e) {
	return e.allowBaseActorTraits ? [...e.baseActorDraftData.traits.filter((t) => e.ignoredBaseTraitKeys[Ij(t)]).map((t) => {
		let n = Ij(t);
		return {
			...zj(t, n, !0),
			config: Sk(t.config, e.traitConfigOverrides[n])
		};
	}), ...e.selectedTraits] : e.selectedTraits;
}
function Pj(e) {
	return e.optionalTraits.map((e) => ({
		config: e.config,
		img: e.img,
		name: e.name,
		uuid: e.uuid
	})).sort((e, t) => e.name.localeCompare(t.name));
}
function Fj(e, t) {
	return {
		config: t.config,
		ignored: !1,
		key: `${e}:${t.uuid || wk(t.name)}`,
		name: t.name,
		source: e,
		sourceUuid: t.uuid
	};
}
function Ij(e) {
	return `base:${e.uuid || wk(e.name)}`;
}
function Lj(e, t) {
	return e.find((e) => Ck(e.name, t));
}
function Rj(e, t) {
	return Lj(e, t) !== void 0;
}
function zj(e, t, n) {
	return {
		config: e.config,
		ignored: n,
		key: t,
		name: e.name,
		source: "base",
		sourceUuid: e.uuid
	};
}
function Bj(e, t) {
	return e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source);
}
//#endregion
//#region src/state/npc-builder/traits.ts
function Vj(e) {
	let { baseActorDraftData: t, customTraits: n, ignoredBaseTraitKeys: r, quickTraits: i, settings: a, traitConfigOverrides: o } = e, s = V(() => Mj({
		allowBaseActorTraits: a.value.allowBaseActorTraits,
		baseActorDraftData: t.value,
		customTraits: n.value,
		ignoredBaseTraitKeys: r.value,
		traitConfigOverrides: o.value
	})), c = V(() => Nj({
		allowBaseActorTraits: a.value.allowBaseActorTraits,
		baseActorDraftData: t.value,
		ignoredBaseTraitKeys: r.value,
		selectedTraits: s.value,
		traitConfigOverrides: o.value
	})), l = V(() => Pj(t.value));
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
		let i = Fj(e, t);
		if (!r) {
			d(i.key), x(t.name, !0);
			return;
		}
		x(t.name, !1) || n.value.find((e) => e.key === i.key) || h(i);
	}
	function h(e) {
		Rj(s.value, e.name) || n.value.some((t) => t.key === e.key) || n.value.push(e);
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
		return Lj(l.value, e);
	}
	function y(e) {
		return Lj(i.value, e);
	}
	function b(e) {
		let n = Lj(t.value.traits, e);
		if (!n) return null;
		let i = Ij(n);
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
function Hj(e, t = "trapping") {
	return {
		candidates: [],
		searchTerms: Kj(e),
		selectedCandidateUuid: "",
		selectedItemType: t,
		selectedName: e.trim(),
		status: "fallback"
	};
}
function Uj(e) {
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
function Wj(e) {
	return {
		candidates: [],
		searchTerms: Kj(e),
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "unresolved"
	};
}
function Gj(e, t) {
	let n = Kj(e), r = Jj(n, t), i = r.filter((e) => e.matchKind === "exact");
	return i.length === 1 ? Xj("matched", n, i[0]) : i.length > 1 ? Xj("ambiguous", n, i[0], { candidates: r }) : r.length ? {
		candidates: r,
		searchTerms: n,
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "ambiguous"
	} : Hj(e);
}
function Kj(e) {
	let t = e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
	return t.length ? eM(t) : [e.trim()].filter(Boolean);
}
function qj(e, t) {
	if (Zj(e) === Zj(t)) return "exact";
	let n = Qj(e), r = Qj(t);
	if (!n || !r) return null;
	if (n === r || n.includes(r) || r.includes(n)) return "near";
	let i = n.split(" "), a = new Set(r.split(" "));
	return i.every((e) => a.has(e)) ? "near" : null;
}
function Jj(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) for (let e of t) {
		let t = qj(r, e.name);
		t && n.get(e.uuid)?.matchKind !== "exact" && n.set(e.uuid, {
			itemType: e.itemType,
			matchKind: t,
			name: e.name,
			searchTerm: r,
			sourceLabel: e.sourceLabel,
			uuid: e.uuid
		});
	}
	return [...n.values()].sort(Yj);
}
function Yj(e, t) {
	return e.matchKind === t.matchKind ? e.name.localeCompare(t.name) : e.matchKind === "exact" ? -1 : 1;
}
function Xj(e, t, n, r = {}) {
	return {
		candidates: r.candidates ?? (n ? [n] : []),
		searchTerms: t,
		selectedCandidateUuid: n?.uuid ?? "",
		selectedItemType: n?.itemType ?? "trapping",
		selectedName: n?.name ?? "",
		status: e
	};
}
function Zj(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/\s+/g, " ");
}
function Qj(e) {
	return Zj(e).replaceAll("&", " and ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\b(a|an|the|some|pair of|pairs of)\b/g, " ").split(/\s+/).map($j).filter(Boolean).join(" ");
}
function $j(e) {
	return e.endsWith("ies") && e.length > 4 ? `${e.slice(0, -3)}y` : e.endsWith("s") && !e.endsWith("ss") && e.length > 3 ? e.slice(0, -1) : e;
}
function eM(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/functions/npc-builder/trappings/derive-trappings.ts
function tM(e) {
	let t = /* @__PURE__ */ new Map();
	iM(t, e), aM(t, e);
	for (let n of e.customTrappings) t.set(n.key, { ...n });
	return [...t.values()].map((t) => oM(t, e)).sort(sM);
}
function nM(e, t) {
	let n = e.resolution.candidates.find((e) => e.uuid === t);
	return n ? {
		...e.resolution,
		selectedCandidateUuid: n.uuid,
		selectedItemType: n.itemType,
		selectedName: n.name,
		status: e.resolution.status === "matched" ? "matched" : "ambiguous"
	} : null;
}
function rM(e) {
	return {
		...Hj(e.name, e.itemType),
		candidates: e.resolution.candidates,
		searchTerms: e.resolution.searchTerms
	};
}
function iM(e, t) {
	if (t.settings.allowBaseActorTrappings) for (let n of t.baseActorDraftData.trappings) {
		let t = `base:${n.uuid || wk(n.name)}`;
		e.set(t, {
			ignored: !1,
			itemType: n.itemType,
			key: t,
			name: n.name,
			quantity: n.quantity,
			resolution: Uj({
				itemType: n.itemType,
				name: n.name,
				uuid: n.uuid
			}),
			source: "base",
			sourceUuid: n.uuid
		});
	}
}
function aM(e, t) {
	for (let n of t.careers) for (let r of n.grants.trappings) {
		let i = `career:${wk(r)}`, a = e.get(i);
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
			resolution: t.trappingResolutionOverrides[i] ?? Wj(r),
			source: "career",
			sourceUuid: ""
		});
	}
}
function oM(e, t) {
	let n = t.trappingOverrides[e.key];
	return {
		...e,
		ignored: n?.ignored ?? e.ignored,
		quantity: Tk(n?.quantity ?? e.quantity),
		resolution: t.trappingResolutionOverrides[e.key] ?? e.resolution
	};
}
function sM(e, t) {
	return e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source);
}
//#endregion
//#region src/state/npc-builder/trappings.ts
function cM(e) {
	let { baseActorDraftData: t, careers: n, customTrappings: r, settings: i, trappingOverrides: a, trappingResolutionOverrides: o } = e, s = V(() => tM({
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
			quantity: Tk(t)
		};
	}
	function f(e, t) {
		let n = s.value.find((t) => t.key === e), r = n ? nM(n, t) : null;
		r && (o.value[e] = r);
	}
	function p(e) {
		let t = s.value.find((t) => t.key === e);
		t && (o.value[e] = rM(t));
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
var lM = lc("npc-builder", () => {
	let e = /* @__PURE__ */ O(""), t = /* @__PURE__ */ O([]), n = /* @__PURE__ */ O({}), r = /* @__PURE__ */ O(null), i = /* @__PURE__ */ O({ ...uj }), a = /* @__PURE__ */ O([]), o = /* @__PURE__ */ O([]), s = /* @__PURE__ */ O([]), c = /* @__PURE__ */ O([]), l = /* @__PURE__ */ O([]), u = /* @__PURE__ */ O(null), d = /* @__PURE__ */ O([]), f = /* @__PURE__ */ O([]), p = /* @__PURE__ */ O(""), m = /* @__PURE__ */ O({ ...lj }), h = /* @__PURE__ */ O(""), g = /* @__PURE__ */ O(""), _ = /* @__PURE__ */ O({}), v = /* @__PURE__ */ O({}), y = /* @__PURE__ */ O({}), b = /* @__PURE__ */ O([]), x = /* @__PURE__ */ O([]), S = /* @__PURE__ */ O([]), C = /* @__PURE__ */ O({}), ee = /* @__PURE__ */ O({}), te = /* @__PURE__ */ O({}), ne = /* @__PURE__ */ O({}), re = /* @__PURE__ */ O({}), ie = /* @__PURE__ */ O({}), ae = OA({
		baseActorDraftData: i,
		careers: o,
		customAdvancements: S,
		manualAdvancementDeltas: n,
		settings: m,
		skillCharacteristics: _,
		skillGrantResolutions: y,
		talentMaximums: v
	}), w = sj(), oe = LA({
		actorFolders: t,
		baseActorDraftData: i,
		baseActors: a,
		ignoredBaseTraitKeys: C,
		itemFolders: l,
		manualAdvancementDeltas: n,
		quickTraits: f,
		selectedBaseActorUuid: h,
		settings: m,
		traitConfigOverrides: ne,
		trappingOverrides: re,
		trappingResolutionOverrides: ie
	}), se = RA({
		baseActorCombatProfile: r,
		mountActorProfile: u,
		mountActors: d,
		selectedMountActorUuid: g
	}), ce = IA({
		actorName: e,
		baseActors: a,
		careers: o,
		clearBaseDraftData: oe.clearBaseDraftData,
		clearMountSelection: se.clearMountSelection,
		customAdvancements: S,
		customSpells: x,
		customTraits: s,
		customTrappings: c,
		detectedSpells: b,
		ignoredBaseTraitKeys: C,
		magicLoreResolutions: ee,
		removeSkillGrantResolutionsForCareer: ae.removeSkillGrantResolutionsForCareer,
		selectedBaseActorUuid: h,
		selectedPortraitPath: p,
		settings: m,
		skillGrantResolutions: y,
		spellSelectionOverrides: te
	}), le = Vj({
		baseActorDraftData: i,
		customTraits: s,
		ignoredBaseTraitKeys: C,
		quickTraits: f,
		settings: m,
		traitConfigOverrides: ne
	}), T = cM({
		baseActorDraftData: i,
		careers: o,
		customTrappings: c,
		settings: m,
		trappingOverrides: re,
		trappingResolutionOverrides: ie
	}), ue = jj({
		advancements: ae.advancements,
		customSpells: x,
		detectedSpells: b,
		magicLoreResolutions: ee,
		settings: m,
		spellSelectionOverrides: te,
		traits: le.traits
	});
	function de() {
		ce.resetDraft(), w.resetPortraitFilters();
	}
	return {
		actorName: e,
		actorFolders: t,
		addCareer: ce.addCareer,
		addCareerIfMissing: ce.addCareerIfMissing,
		addCustomAdvancement: ae.addCustomAdvancement,
		addCustomPortraitSearchTerm: w.addCustomPortraitSearchTerm,
		addCustomSpell: ue.addCustomSpell,
		addCustomTrait: le.addCustomTrait,
		addCustomTrapping: T.addCustomTrapping,
		adjustAdvancementCurrent: ae.adjustAdvancementCurrent,
		advancements: ae.advancements,
		applyAutoAdvance: ae.applyAutoAdvance,
		baseActorCombatProfile: r,
		baseActorDraftData: i,
		baseActors: a,
		buildTraits: le.buildTraits,
		careers: o,
		clearCareers: ce.clearCareers,
		clearBaseDraftData: oe.clearBaseDraftData,
		clearMountSelection: se.clearMountSelection,
		customSpells: x,
		customAdvancements: S,
		customPortraitSearchTerms: w.customPortraitSearchTerms,
		customTraits: s,
		customTrappings: c,
		estimatedNpcXp: ae.estimatedNpcXp,
		finalActorName: ce.finalActorName,
		finalCareer: ce.finalCareer,
		finalPortraitPath: ce.finalPortraitPath,
		getSkillGrantResolution: ae.getSkillGrantResolution,
		grantTotals: ce.grantTotals,
		hasMagicAccess: ue.hasMagicAccess,
		hydrateActorFolders: oe.hydrateActorFolders,
		hydrateBaseActorCombatProfile: se.hydrateBaseActorCombatProfile,
		hydrateBaseActorDraftData: oe.hydrateBaseActorDraftData,
		hydrateBaseActors: oe.hydrateBaseActors,
		hydrateDetectedSpells: ue.hydrateDetectedSpells,
		hydrateItemFolders: oe.hydrateItemFolders,
		hydrateMountActorProfile: se.hydrateMountActorProfile,
		hydrateMountActors: se.hydrateMountActors,
		hydrateQuickTraits: oe.hydrateQuickTraits,
		hydrateSettings: oe.hydrateSettings,
		hydrateSkillCharacteristics: ae.hydrateSkillCharacteristics,
		hydrateTalentMaximums: ae.hydrateTalentMaximums,
		itemFolders: l,
		magicGrants: ue.magicGrants,
		magicLoreResolutions: ee,
		mountActorProfile: u,
		mountActors: d,
		maximizableTalentCount: ae.maximizableTalentCount,
		maximizeTalents: ae.maximizeTalents,
		moveCareer: ce.moveCareer,
		moveCareerToIndex: ce.moveCareerToIndex,
		optionalTraits: le.optionalTraits,
		quickTraits: f,
		removeCareer: ce.removeCareer,
		removeCustomAdvancement: ae.removeCustomAdvancement,
		removeCustomSpell: ue.removeCustomSpell,
		removeCustomTrait: le.removeCustomTrait,
		removeCustomTrapping: T.removeCustomTrapping,
		resetAdvancementCurrent: ae.resetAdvancementCurrent,
		resetAllAdvancementCurrents: ae.resetAllAdvancementCurrents,
		portraitSourceTagSections: w.portraitSourceTagSections,
		portraitTermSections: w.portraitTermSections,
		resetDraft: de,
		retainAvailablePortraitFilterTerms: w.retainAvailablePortraitFilterTerms,
		selectBaseActor: ce.selectBaseActor,
		selectBaseActorUuid: ce.selectBaseActorUuid,
		selectMountActor: se.selectMountActor,
		selectMountActorUuid: se.selectMountActorUuid,
		selectedBaseActor: ce.selectedBaseActor,
		selectedBaseActorUuid: h,
		selectedMountActorUuid: g,
		selectedPortraitPath: p,
		selectedSpells: ue.selectedSpells,
		selectPortrait: ce.selectPortrait,
		selectTrappingResolutionCandidate: T.selectTrappingResolutionCandidate,
		setAdvancementCurrent: ae.setAdvancementCurrent,
		setAdvancementTotal: ae.setAdvancementTotal,
		setBaseTraitIgnored: le.setBaseTraitIgnored,
		setCareerQuantity: ce.setCareerQuantity,
		setMagicGrantLoreResolution: ue.setMagicGrantLoreResolution,
		setOptionalTraitSelected: le.setOptionalTraitSelected,
		setPortraitSourceTagSection: w.setPortraitSourceTagSection,
		setPortraitTermSection: w.setPortraitTermSection,
		setQuickTraitSelected: le.setQuickTraitSelected,
		setSkillGrantResolution: ae.setSkillGrantResolution,
		setSpellSelected: ue.setSpellSelected,
		setTraitConfig: le.setTraitConfig,
		setTrappingFallback: T.setTrappingFallback,
		setTrappingIgnored: T.setTrappingIgnored,
		setTrappingQuantity: T.setTrappingQuantity,
		setTrappingResolution: T.setTrappingResolution,
		settings: m,
		spells: ue.spells,
		suggestedActorName: ce.suggestedActorName,
		traits: le.traits,
		trappings: T.trappings
	};
}), uM = { class: "dui-fieldset-legend" }, dM = [
	"checked",
	"disabled",
	"onChange"
], fM = { class: "dui-card-actions" }, pM = /* @__PURE__ */ j({
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
		return (t, i) => (P(), F("section", null, [
			L("p", null, D(e.prompt.droppedCareer.name) + " appears to belong to the " + D(e.prompt.droppedCareer.careerGroup) + " career track. The following lower-tier candidates were found. ", 1),
			(P(!0), F(N, null, M(e.candidateGroups, (t) => (P(), F("fieldset", {
				key: t.level,
				class: "dui-fieldset"
			}, [L("legend", uM, "Tier " + D(t.level || "Unknown"), 1), (P(!0), F(N, null, M(t.candidates, (t) => (P(), F("label", {
				key: t.uuid,
				class: "dui-label"
			}, [L("input", {
				class: "dui-checkbox dui-checkbox-sm",
				checked: e.isCareerQueued(t.uuid) || e.isLowerCareerSelected(t.uuid),
				disabled: e.isCareerQueued(t.uuid),
				type: "checkbox",
				onChange: (e) => r(t, e)
			}, null, 40, dM), L("span", null, [L("strong", null, D(t.name), 1), L("small", null, [z(D(t.careerGroup || "Career") + " ", 1), e.isCareerQueued(t.uuid) ? (P(), F(N, { key: 0 }, [z(" already queued ")], 64)) : B("", !0)])])]))), 128))]))), 128)),
			L("div", fM, [L("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: i[0] ||= (e) => n("addDroppedOnly")
			}, " Add Dropped Only "), L("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: i[1] ||= (e) => n("addSelected")
			}, " Add Selected ")])
		]));
	}
}), mM = ["aria-labelledby"], hM = ["id"], gM = { class: "dui-modal-action" }, _M = /* @__PURE__ */ j({
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
		let n = e, r = t, i = /* @__PURE__ */ O(null), a = _r();
		return Zn(() => n.open, async (e) => {
			await Mn();
			let t = i.value;
			if (e && !t?.open) {
				t?.showModal();
				return;
			}
			!e && t?.open && t.close();
		}, { immediate: !0 }), Fr(() => {
			i.value?.open && i.value.close();
		}), (t, n) => (P(), F("dialog", {
			ref_key: "dialogElement",
			ref: i,
			"aria-labelledby": k(a),
			"aria-modal": "true",
			class: "dui-modal",
			onCancel: n[1] ||= Qo((e) => r("close"), ["prevent"])
		}, [L("section", { class: E(["dui-modal-box", { "app:max-w-5xl": e.wide }]) }, [
			L("h2", {
				id: k(a),
				class: "dui-card-title"
			}, D(e.title), 9, hM),
			Kr(t.$slots, "default"),
			L("div", gM, [L("button", {
				class: "dui-btn",
				type: "button",
				onClick: n[0] ||= (e) => r("close")
			}, D(e.closeLabel), 1)])
		], 2)], 40, mM));
	}
}), vM = /* @__PURE__ */ new Map();
function yM(e) {
	let t = e.id.trim();
	if (!t) throw Error("NPC auto-advance strategies must have an id.");
	vM.set(t, {
		...e,
		id: t
	});
}
function bM() {
	return [...vM.values()].sort((e, t) => e.name.localeCompare(t.name));
}
function xM(e) {
	return vM.get(e) ?? null;
}
function SM(e, t) {
	return TM(e, t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function CM(e, t) {
	return TM(TM(e, t, {
		kinds: ["talent"],
		respectTalentMaximums: !0
	}), t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function wM(e, t) {
	return TM(e, t, {
		kinds: ["characteristic"],
		respectTalentMaximums: !1
	});
}
function TM(e, t, n) {
	let r = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), i = OM(e.advancements), a = _A(i).total;
	if (a >= r) return { advancements: i };
	let o = !0;
	for (; o;) {
		o = !1;
		for (let e of i) {
			if (!n.kinds.includes(e.kind)) continue;
			let t = EM(e, n);
			if (!t) continue;
			let i = yA(t) - yA(e);
			i <= 0 || a + i > r || (e.current = t.current, a += i, o = !0);
		}
	}
	return { advancements: i };
}
function EM(e, t) {
	return t.respectTalentMaximums && e.kind === "talent" && !DM(e) ? null : {
		...e,
		current: e.current + sA(e)
	};
}
function DM(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" ? cA(e) < t : !1;
}
function OM(e) {
	return e.map((e) => ({
		...e,
		sources: e.sources.map((e) => ({ ...e }))
	}));
}
yM({
	description: "Cycles visible Skill rows evenly until no next skill increase fits the target XP.",
	id: "skill-master",
	name: "Skill Master",
	run: SM
}), yM({
	description: "Raises visible Talent rows evenly up to known maximums, then spends any remaining XP like Skill Master.",
	id: "gifted-and-talented",
	name: "Gifted & Talented",
	run: CM
}), yM({
	description: "Cycles visible Characteristic rows evenly until no next characteristic increase fits the target XP.",
	id: "all-natural",
	name: "All Natural",
	run: wM
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/advancement-display.ts
function kM(e) {
	let t = e.current - e.careerValue, n = [...e.sources].sort((e, t) => LM(e.kind) - LM(t.kind)).map((e) => AM(e));
	return t !== 0 && n.push(`Manual ${RM(t)}`), n.length ? n.join(", ") : e.includedFromBase ? "Base actor" : "-";
}
function AM(e) {
	return e.kind === "custom" && e.count === 0 ? e.label : `${e.label} ${RM(e.count)}`;
}
function jM(e) {
	return jk(e) !== null;
}
function MM(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function NM(e) {
	return MM(e);
}
function PM(e) {
	return e.talentMaximumLabel ?? "Unknown";
}
function FM(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && NM(e) > t;
}
function IM(e) {
	return yA(e);
}
function LM(e) {
	return e === "characteristic" ? 0 : e === "career" ? 1 : 2;
}
function RM(e) {
	return e > 0 ? `+${e}` : `${e}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/AdvancementRowTailActions.vue?vue&type=script&setup=true&lang.ts
var zM = ["disabled"], BM = /* @__PURE__ */ j({
	__name: "AdvancementRowTailActions",
	props: { entry: {} },
	emits: ["removeCustom", "resetCurrent"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (P(), F(N, null, [L("button", {
			class: "dui-join-item dui-btn dui-btn-sm",
			disabled: e.entry.current === e.entry.careerValue,
			title: "Reset to career value",
			type: "button",
			onClick: r[0] ||= (e) => n("resetCurrent")
		}, " Reset ", 8, zM), e.entry.includedFromCustom ? (P(), F("button", {
			key: 0,
			class: "dui-join-item dui-btn dui-btn-sm",
			title: "Remove dropped entry",
			type: "button",
			onClick: r[1] ||= (e) => n("removeCustom")
		}, " Remove Dropped ")) : B("", !0)], 64));
	}
}), VM = { class: "dui-card dui-card-border dui-card-sm" }, HM = { class: "dui-card-body" }, UM = { class: "dui-card-title" }, WM = {
	key: 0,
	class: "dui-badge dui-badge-primary"
}, GM = { key: 0 }, KM = /* @__PURE__ */ j({
	__name: "NpcBuilderSection",
	props: {
		description: { default: "" },
		number: { default: "" },
		title: {}
	},
	setup(e) {
		return (t, n) => (P(), F("section", VM, [L("div", HM, [
			L("h2", UM, [e.number ? (P(), F("span", WM, D(e.number), 1)) : B("", !0), z(" " + D(e.title), 1)]),
			e.description ? (P(), F("p", GM, D(e.description), 1)) : B("", !0),
			Kr(t.$slots, "default")
		])]));
	}
}), qM = {
	key: 0,
	class: "dui-card-actions"
}, JM = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, YM = { class: "dui-list" }, XM = { class: "dui-list-col-grow" }, ZM = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, QM = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, $M = { class: "dui-join" }, eN = ["disabled", "onClick"], tN = [
	"aria-label",
	"value",
	"onInput"
], nN = ["onClick"], rN = {
	key: 2,
	class: "dui-alert"
}, iN = /* @__PURE__ */ j({
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
		"removeCustom",
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
		return (t, i) => (P(), I(KM, {
			number: e.sectionNumber,
			title: e.title
		}, {
			default: A(() => [
				e.manualAdvanceCount ? (P(), F("div", qM, [L("span", null, D(e.manualAdvanceCount) + " manual edits", 1), L("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: i[0] ||= (e) => n("resetAll")
				}, " Reset All Advances ")])) : B("", !0),
				e.estimatedNpcXp ? (P(), F("div", JM, [
					L("strong", null, "Estimated NPC XP " + D(e.estimatedNpcXp.total), 1),
					L("span", null, D(e.estimatedNpcXp.characteristics) + " characteristics", 1),
					L("span", null, D(e.estimatedNpcXp.skills) + " skills", 1),
					L("span", null, D(e.estimatedNpcXp.talents) + " talents", 1)
				])) : B("", !0),
				L("ul", YM, [(P(!0), F(N, null, M(e.entries, (t) => (P(), F("li", {
					key: `${t.kind}:${t.name}`,
					class: "dui-list-row"
				}, [L("div", XM, [
					L("strong", null, D(t.name), 1),
					t.current === t.careerValue ? B("", !0) : (P(), F("span", ZM, " Manual edit ")),
					e.showSkillSpecializationBadges && k(jM)(t.name) ? (P(), F("span", QM, " Needs specialization ")) : B("", !0),
					L("span", null, " Base " + D(t.baseValue) + " · Advances " + D(t.current) + " · XP " + D(k(IM)(t)), 1),
					L("small", null, "Sources: " + D(k(kM)(t)), 1)
				]), L("div", $M, [
					L("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: k(MM)(t) <= t.minimumTotal,
						title: "Decrease by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, -1)
					}, " -5 ", 8, eN),
					L("input", {
						class: "dui-join-item dui-input dui-input-sm",
						"aria-label": `Total ${t.name}`,
						value: k(MM)(t),
						min: "0",
						type: "number",
						onInput: (e) => r(t, e)
					}, null, 40, tN),
					L("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						title: "Increase by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, 1)
					}, " +5 ", 8, nN),
					R(BM, {
						entry: t,
						onRemoveCustom: (e) => n("removeCustom", t),
						onResetCurrent: (e) => n("resetCurrent", t)
					}, null, 8, [
						"entry",
						"onRemoveCustom",
						"onResetCurrent"
					])
				])]))), 128))]),
				e.entries.length ? B("", !0) : (P(), F("p", rN, "No " + D(e.title.toLowerCase()) + " to advance yet.", 1))
			]),
			_: 1
		}, 8, ["number", "title"]));
	}
}), aN = { class: "dui-fieldset" }, oN = ["value"], sN = { class: "dui-fieldset" }, cN = ["value"], lN = ["value"], uN = { key: 0 }, dN = { class: "dui-card-actions" }, fN = ["disabled"], pN = /* @__PURE__ */ j({
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
		return (t, a) => (P(), I(KM, {
			description: "Spend toward a target without exceeding it. Existing manual edits are preserved.",
			number: "4",
			title: "Auto Advance"
		}, {
			default: A(() => [
				L("fieldset", aN, [a[1] ||= L("legend", { class: "dui-fieldset-legend" }, "Target XP", -1), L("input", {
					"aria-label": "Target XP",
					class: "dui-input dui-input-sm",
					value: e.targetXp,
					min: "0",
					type: "number",
					onInput: r
				}, null, 40, oN)]),
				L("fieldset", sN, [a[2] ||= L("legend", { class: "dui-fieldset-legend" }, "Strategy", -1), L("select", {
					"aria-label": "Auto advance strategy",
					class: "dui-select dui-select-sm",
					value: e.selectedAutoAdvanceStrategyId,
					onChange: i
				}, [(P(!0), F(N, null, M(e.autoAdvanceStrategies, (e) => (P(), F("option", {
					key: e.id,
					value: e.id
				}, D(e.name), 9, lN))), 128))], 40, cN)]),
				e.selectedAutoAdvanceStrategy ? (P(), F("p", uN, D(e.selectedAutoAdvanceStrategy.description), 1)) : B("", !0),
				L("div", dN, [L("button", {
					class: "dui-btn dui-btn-primary dui-btn-sm",
					disabled: !e.canRunAutoAdvance,
					title: "Advance rows as close to the target XP as possible without going over",
					type: "button",
					onClick: a[0] ||= (e) => n("runAutoAdvance")
				}, " Auto Advance ", 8, fN)])
			]),
			_: 1
		}));
	}
}), mN = { class: "dui-card-actions" }, hN = ["disabled"], gN = { class: "dui-list" }, _N = { class: "dui-list-col-grow" }, vN = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, yN = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, bN = { class: "dui-join" }, xN = ["disabled", "onClick"], SN = [
	"aria-label",
	"value",
	"onInput"
], CN = ["onClick"], wN = {
	key: 0,
	class: "dui-alert"
}, TN = /* @__PURE__ */ j({
	__name: "TalentRowsPanel",
	props: {
		maximizableTalentCount: {},
		talents: {}
	},
	emits: [
		"adjustCurrent",
		"maximizeTalents",
		"removeCustom",
		"resetCurrent",
		"totalChange"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e, t) {
			let r = t.target;
			r && n("totalChange", e, Number(r.value));
		}
		return (t, i) => (P(), I(KM, {
			number: "3",
			title: "Talents"
		}, {
			default: A(() => [
				L("div", mN, [L("span", null, D(e.maximizableTalentCount) + " below maximum", 1), L("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.maximizableTalentCount === 0,
					title: "Raise talents with known maximums to their maximum ranks",
					type: "button",
					onClick: i[0] ||= (e) => n("maximizeTalents")
				}, " Maximize Talents ", 8, hN)]),
				L("ul", gN, [(P(!0), F(N, null, M(e.talents, (e) => (P(), F("li", {
					key: `${e.kind}:${e.name}`,
					class: "dui-list-row"
				}, [L("div", _N, [
					L("strong", null, D(e.name), 1),
					e.current === e.careerValue ? B("", !0) : (P(), F("span", vN, " Manual edit ")),
					L("span", null, " Ranks " + D(k(NM)(e)) + " · Maximum " + D(k(PM)(e)) + " · XP " + D(k(IM)(e)), 1),
					L("small", null, "Sources: " + D(k(kM)(e)), 1),
					k(FM)(e) ? (P(), F("span", yN, " Over maximum ")) : B("", !0)
				]), L("div", bN, [
					L("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: k(NM)(e) <= e.minimumTotal,
						title: "Decrease by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, -1)
					}, " -1 ", 8, xN),
					L("input", {
						class: "dui-join-item dui-input dui-input-sm",
						"aria-label": `Ranks ${e.name}`,
						value: k(NM)(e),
						min: "0",
						type: "number",
						onInput: (t) => r(e, t)
					}, null, 40, SN),
					L("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						title: "Increase by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, 1)
					}, " +1 ", 8, CN),
					R(BM, {
						entry: e,
						onRemoveCustom: (t) => n("removeCustom", e),
						onResetCurrent: (t) => n("resetCurrent", e)
					}, null, 8, [
						"entry",
						"onRemoveCustom",
						"onResetCurrent"
					])
				])]))), 128))]),
				e.talents.length ? B("", !0) : (P(), F("p", wN, "No talents to advance yet."))
			]),
			_: 1
		}));
	}
}), EN = /* @__PURE__ */ j({
	__name: "NpcBuilderAdvancementsTab",
	props: { page: {} },
	setup(e) {
		let t = lM(), { advancements: n, estimatedNpcXp: r, maximizableTalentCount: i } = uc(t), a = bM(), o = /* @__PURE__ */ O("skill-master"), s = /* @__PURE__ */ O(0), c = V(() => n.value.filter((e) => e.kind === "characteristic")), l = V(() => n.value.filter((e) => e.kind === "skill")), u = V(() => n.value.filter((e) => e.kind === "talent")), d = V(() => n.value.filter((e) => e.current !== e.careerValue).length), f = V(() => xM(o.value) ?? a[0] ?? null), p = V(() => f.value !== null && s.value > r.value.total);
		Zn(() => r.value.total, (e) => {
			s.value < e && (s.value = e);
		}, { immediate: !0 });
		function m() {
			let e = f.value;
			e && t.applyAutoAdvance(e, s.value);
		}
		return (n, h) => (P(), F("section", null, [e.page === "detail-characteristics" ? (P(), I(iN, {
			key: 0,
			entries: c.value,
			"estimated-npc-xp": k(r),
			"manual-advance-count": d.value,
			"section-number": "",
			title: "Characteristics",
			onAdjustCurrent: k(t).adjustAdvancementCurrent,
			onRemoveCustom: k(t).removeCustomAdvancement,
			onResetAll: k(t).resetAllAdvancementCurrents,
			onResetCurrent: k(t).resetAdvancementCurrent,
			onTotalChange: k(t).setAdvancementTotal
		}, null, 8, [
			"entries",
			"estimated-npc-xp",
			"manual-advance-count",
			"onAdjustCurrent",
			"onRemoveCustom",
			"onResetAll",
			"onResetCurrent",
			"onTotalChange"
		])) : e.page === "detail-skills" ? (P(), I(iN, {
			key: 1,
			entries: l.value,
			"section-number": "",
			"show-skill-specialization-badges": "",
			title: "Skills",
			onAdjustCurrent: k(t).adjustAdvancementCurrent,
			onRemoveCustom: k(t).removeCustomAdvancement,
			onResetCurrent: k(t).resetAdvancementCurrent,
			onTotalChange: k(t).setAdvancementTotal
		}, null, 8, [
			"entries",
			"onAdjustCurrent",
			"onRemoveCustom",
			"onResetCurrent",
			"onTotalChange"
		])) : e.page === "detail-talents" ? (P(), I(TN, {
			key: 2,
			"maximizable-talent-count": k(i),
			talents: u.value,
			onAdjustCurrent: k(t).adjustAdvancementCurrent,
			onMaximizeTalents: k(t).maximizeTalents,
			onRemoveCustom: k(t).removeCustomAdvancement,
			onResetCurrent: k(t).resetAdvancementCurrent,
			onTotalChange: k(t).setAdvancementTotal
		}, null, 8, [
			"maximizable-talent-count",
			"talents",
			"onAdjustCurrent",
			"onMaximizeTalents",
			"onRemoveCustom",
			"onResetCurrent",
			"onTotalChange"
		])) : (P(), I(pN, {
			key: 3,
			"auto-advance-strategies": k(a),
			"can-run-auto-advance": p.value,
			"selected-auto-advance-strategy": f.value,
			"selected-auto-advance-strategy-id": o.value,
			"target-xp": s.value,
			onRunAutoAdvance: m,
			onStrategyChange: h[0] ||= (e) => o.value = e,
			onTargetXpChange: h[1] ||= (e) => s.value = e
		}, null, 8, [
			"auto-advance-strategies",
			"can-run-auto-advance",
			"selected-auto-advance-strategy",
			"selected-auto-advance-strategy-id",
			"target-xp"
		]))]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/labels.ts
function DN(e) {
	return [
		`Ch ${e.grants.characteristics.length}`,
		`Sk ${e.grants.skills.length}`,
		`Ta ${e.grants.talents.length}`,
		`Tr ${e.grants.trappings.length}`
	].join(" / ");
}
function ON(e) {
	let t = e.slice(0, 3).join(", "), n = e.length - 3;
	return e.length ? n > 0 ? `${t}, +${n}` : t : "-";
}
function kN(e) {
	return e.split(/\s+/).map((e) => e.at(0)).filter(Boolean).slice(0, 2).join("").toLocaleUpperCase();
}
function AN(e) {
	return `${e.label}\n${e.img}`;
}
function jN(e) {
	return `Use ${e.label} (${MN(e)})`;
}
function MN(e) {
	return e.sourceLabel ?? {
		"base-actor": "Base Actor",
		"base-token": "Base Token",
		career: "Career",
		"foundry-asset": "Foundry",
		web: "Web"
	}[e.source];
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/BaseActorPanel.vue?vue&type=script&setup=true&lang.ts
var NN = { class: "dui-fieldset" }, PN = ["value"], FN = { class: "dui-fieldset" }, IN = ["disabled", "value"], LN = { value: "" }, RN = ["value"], zN = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, BN = {
	key: 1,
	class: "dui-alert"
}, VN = {
	key: 0,
	class: "dui-avatar"
}, HN = { class: "app:size-16 app:shrink-0 app:rounded-lg" }, UN = ["src"], WN = {
	key: 1,
	class: "dui-badge"
}, GN = /* @__PURE__ */ j({
	__name: "BaseActorPanel",
	props: {
		actorFilter: {},
		description: { default: "Choose a world Actor as the starting statblock." },
		errorMessage: {},
		filteredActors: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean },
		number: { default: "1" },
		selectedBaseActor: {},
		selectedBaseActorUuid: {},
		title: { default: "Base Actor" }
	},
	emits: ["actorFilterChange", "baseActorChange"],
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
		return (t, n) => (P(), I(KM, {
			description: e.description,
			number: e.number,
			title: e.title
		}, {
			default: A(() => [
				L("fieldset", NN, [n[0] ||= L("legend", { class: "dui-fieldset-legend" }, "Search world actors", -1), L("input", {
					"aria-label": "Search world actors",
					class: "dui-input dui-input-sm",
					value: e.actorFilter,
					placeholder: "Filter actors",
					type: "search",
					onInput: r
				}, null, 40, PN)]),
				L("fieldset", FN, [n[1] ||= L("legend", { class: "dui-fieldset-legend" }, "Base statblock", -1), L("select", {
					"aria-label": "Base statblock",
					class: "dui-select dui-select-sm",
					disabled: e.isLoadingActors,
					value: e.selectedBaseActorUuid,
					onChange: i
				}, [L("option", LN, D(e.isLoadingActors ? "Loading actors..." : "Choose an actor"), 1), (P(!0), F(N, null, M(e.filteredActors, (e) => (P(), F("option", {
					key: e.uuid,
					value: e.uuid
				}, D(e.name), 9, RN))), 128))], 40, IN)]),
				e.errorMessage ? (P(), F("p", zN, D(e.errorMessage), 1)) : B("", !0),
				e.selectedBaseActor ? (P(), F("article", BN, [e.selectedBaseActor.img ? (P(), F("div", VN, [L("div", HN, [L("img", {
					src: e.selectedBaseActor.img,
					alt: "",
					class: "app:h-full app:w-full app:object-cover",
					height: "64",
					width: "64"
				}, null, 8, UN)])])) : (P(), F("span", WN, D(k(kN)(e.selectedBaseActor.name)), 1)), L("div", null, [L("strong", null, D(e.selectedBaseActor.name), 1), L("span", null, [
					z(D(e.selectedBaseActor.species || "Species not found") + " ", 1),
					e.selectedBaseActor.type ? (P(), F(N, { key: 0 }, [z(" - " + D(e.selectedBaseActor.type), 1)], 64)) : B("", !0),
					e.isLoadingBaseDraft ? (P(), F(N, { key: 1 }, [z(" - loading details...")], 64)) : B("", !0)
				])])])) : B("", !0)
			]),
			_: 1
		}, 8, [
			"description",
			"number",
			"title"
		]));
	}
}), KN = { class: "dui-card-actions" }, qN = { class: "dui-stats dui-stats-vertical app:w-full" }, JN = { class: "dui-stat" }, YN = { class: "dui-stat-value" }, XN = {
	key: 0,
	class: "dui-stat-desc"
}, ZN = { class: "dui-stat" }, QN = { class: "dui-stat-value" }, $N = {
	key: 0,
	class: "dui-stat-desc"
}, eP = {
	key: 1,
	class: "dui-stat-desc"
}, tP = { class: "dui-stat" }, nP = { class: "dui-stat-value" }, rP = { class: "dui-stat" }, iP = { class: "dui-stat-value" }, aP = { class: "dui-stat" }, oP = { class: "dui-stat-value" }, sP = { class: "dui-stat-desc" }, cP = {
	key: 0,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, lP = { key: 1 }, uP = /* @__PURE__ */ j({
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
		return (t, n) => (P(), I(KM, {
			number: "4",
			title: "Build Preview"
		}, {
			default: A(() => [
				L("div", KN, [L("span", { class: E(["dui-badge", e.buildPreviewStatus === "Ready" ? "dui-badge-success" : "dui-badge-warning"]) }, D(e.buildPreviewStatus), 3)]),
				L("div", qN, [
					L("div", JN, [
						n[0] ||= L("span", { class: "dui-stat-title" }, "Advances", -1),
						L("strong", YN, D(e.advancementCount), 1),
						e.editedAdvanceCount ? (P(), F("small", XN, D(e.editedAdvanceCount) + " manually edited ", 1)) : B("", !0)
					]),
					L("div", ZN, [
						n[1] ||= L("span", { class: "dui-stat-title" }, "Trappings", -1),
						L("strong", QN, D(e.visibleTrappingCount), 1),
						e.fallbackTrappingCount ? (P(), F("small", $N, D(e.fallbackTrappingCount) + " blank fallback ", 1)) : B("", !0),
						e.ignoredTrappingCount ? (P(), F("small", eP, D(e.ignoredTrappingCount) + " ignored ", 1)) : B("", !0)
					]),
					L("div", tP, [n[2] ||= L("span", { class: "dui-stat-title" }, "Traits", -1), L("strong", nP, D(e.traitCount), 1)]),
					L("div", rP, [n[3] ||= L("span", { class: "dui-stat-title" }, "Spells", -1), L("strong", iP, D(e.selectedSpellCount), 1)]),
					L("div", aP, [
						n[4] ||= L("span", { class: "dui-stat-title" }, "Estimated NPC XP", -1),
						L("strong", oP, D(e.estimatedNpcXp.total), 1),
						L("small", sP, D(e.estimatedNpcXp.characteristics) + " char / " + D(e.estimatedNpcXp.skills) + " skill / " + D(e.estimatedNpcXp.talents) + " talent ", 1)
					])
				]),
				e.buildPreviewWarnings.length ? (P(), F("div", cP, [L("div", null, [(P(!0), F(N, null, M(e.buildPreviewWarnings, (e) => (P(), F("p", { key: e }, D(e), 1))), 128))])])) : (P(), F("p", lP, " The draft has a base Actor, queued Career data, resolved trappings, and a portrait ready to apply. "))
			]),
			_: 1
		}));
	}
}), dP = { class: "dui-list" }, fP = { class: "dui-list-row" }, pP = { class: "dui-list-row" }, mP = { class: "dui-list-row" }, hP = { class: "dui-list-row" }, gP = { class: "dui-list-row" }, _P = { class: "dui-list-row" }, vP = { class: "dui-list-row" }, yP = /* @__PURE__ */ j({
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
		return (t, n) => (P(), F("dl", dP, [
			L("div", fP, [n[0] ||= L("dt", null, "Build name", -1), L("dd", null, D(e.finalActorName), 1)]),
			L("div", pP, [n[1] ||= L("dt", null, "Base actor", -1), L("dd", null, D(e.baseActorName), 1)]),
			L("div", mP, [n[2] ||= L("dt", null, "Final career", -1), L("dd", null, D(e.finalCareerName), 1)]),
			L("div", hP, [n[3] ||= L("dt", null, "Career items", -1), L("dd", null, D(e.careerItemCount), 1)]),
			L("div", gP, [n[4] ||= L("dt", null, "Apply", -1), L("dd", null, D(e.advancementCount) + " advance rows, " + D(e.visibleTrappingCount) + " trappings, " + D(e.traitCount) + " traits, " + D(e.selectedSpellCount) + " spells ", 1)]),
			L("div", _P, [n[5] ||= L("dt", null, "Extracted grants", -1), L("dd", null, D(e.grantTotals.characteristics) + " characteristics, " + D(e.grantTotals.skills) + " skills, " + D(e.grantTotals.talents) + " talents, " + D(e.grantTotals.trappings) + " trappings ", 1)]),
			L("div", vP, [n[6] ||= L("dt", null, "Estimated NPC XP", -1), L("dd", null, D(e.estimatedNpcXpTotal), 1)])
		]));
	}
}), bP = { class: "app:grid app:gap-3" }, xP = { class: "app:flex app:flex-wrap app:items-start app:gap-3" }, SP = ["aria-label", "disabled"], CP = ["src"], wP = { key: 1 }, TP = { key: 2 }, EP = { class: "app:flex app:min-w-48 app:flex-1 app:flex-col app:items-start app:gap-2" }, DP = ["title"], OP = {
	key: 1,
	class: "app:text-base-content/70"
}, kP = ["disabled"], AP = {
	key: 0,
	"aria-live": "polite",
	role: "status"
}, jP = ["value"], MP = {
	key: 1,
	class: "dui-fieldset"
}, NP = { class: "dui-fieldset-legend" }, PP = { key: 0 }, FP = { key: 1 }, IP = { class: "app:flex app:flex-wrap app:gap-2" }, LP = [
	"aria-label",
	"aria-pressed",
	"title",
	"onClick"
], RP = ["src"], zP = ["aria-label"], BP = /* @__PURE__ */ j({
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
		return (t, r) => (P(), F("section", bP, [
			L("div", xP, [L("button", {
				"aria-label": e.portraitCandidates.length ? "Open portrait gallery" : "No portraits available",
				class: "dui-btn dui-btn-square app:h-32 app:w-32 app:shrink-0 app:overflow-hidden app:p-1",
				disabled: !e.portraitCandidates.length,
				title: "Open portrait gallery",
				type: "button",
				onClick: r[0] ||= (e) => n("openGallery")
			}, [e.finalPortraitPath ? (P(), F("img", {
				key: 0,
				alt: "",
				class: "app:h-full app:w-full app:rounded-box app:object-cover",
				height: "192",
				src: e.finalPortraitPath,
				width: "192"
			}, null, 8, CP)) : e.finalCareer ? (P(), F("strong", wP, D(k(kN)(e.finalCareer.name)), 1)) : (P(), F("span", TP, "No portrait"))], 8, SP), L("div", EP, [
				r[3] ||= L("span", { class: "dui-badge dui-badge-outline" }, "Current portrait", -1),
				L("strong", null, D(e.selectedPortraitCandidate?.label ?? "No portrait selected"), 1),
				e.finalPortraitPath ? (P(), F("small", {
					key: 0,
					class: "app:break-all app:text-base-content/70",
					title: e.finalPortraitPath
				}, D(e.finalPortraitPath), 9, DP)) : (P(), F("span", OP, " A Career or base Actor image will be used when available. ")),
				L("button", {
					class: "dui-btn dui-btn-outline dui-btn-sm",
					disabled: !e.portraitCandidates.length,
					type: "button",
					onClick: r[1] ||= (e) => n("openGallery")
				}, " Browse " + D(e.portraitCandidates.length) + " portraits ", 9, kP)
			])]),
			e.isLoadingPortraitCandidates && e.portraitSearchProgress ? (P(), F("div", AP, [L("progress", {
				"aria-label": "Portrait search progress",
				class: "dui-progress dui-progress-info app:w-full",
				value: e.portraitSearchProgressValue,
				max: "100"
			}, null, 8, jP), L("small", null, D(e.portraitSearchProgressLabel), 1)])) : B("", !0),
			e.portraitCandidates.length || e.isLoadingPortraitCandidates ? (P(), F("fieldset", MP, [L("legend", NP, [r[4] ||= L("span", null, "Quick picks", -1), e.isLoadingPortraitCandidates ? (P(), F("span", PP, "Updating...")) : (P(), F("span", FP, D(e.portraitCandidates.length) + " options", 1))]), L("div", IP, [(P(!0), F(N, null, M(e.compactPortraitCandidates, (t) => (P(), F("button", {
				key: t.key,
				"aria-label": k(jN)(t),
				"aria-pressed": t.key === e.selectedPortraitCandidateKey,
				class: E(["dui-btn dui-btn-square app:overflow-hidden app:p-1", { "dui-btn-active dui-btn-outline": t.key === e.selectedPortraitCandidateKey }]),
				title: k(AN)(t),
				type: "button",
				onClick: (e) => n("selectPortrait", t)
			}, [L("img", {
				alt: "",
				class: "app:h-full app:w-full app:rounded-box app:object-cover",
				height: "64",
				loading: "lazy",
				src: t.img,
				width: "64"
			}, null, 8, RP)], 10, LP))), 128)), e.hiddenPortraitCandidateCount > 0 ? (P(), F("button", {
				key: 0,
				"aria-label": `Open ${e.hiddenPortraitCandidateCount} more portrait options`,
				class: "dui-btn dui-btn-square",
				type: "button",
				onClick: r[2] ||= (e) => n("openGallery")
			}, " +" + D(e.hiddenPortraitCandidateCount), 9, zP)) : B("", !0)])])) : B("", !0)
		]));
	}
}), VP = { class: "app:grid app:gap-3 md:app:sticky md:app:top-28 md:app:max-h-[calc(100vh-10rem)] md:app:self-start md:app:overflow-y-auto" }, HP = { class: "dui-fieldset" }, UP = ["placeholder", "value"], WP = { class: "app:hidden md:app:grid md:app:gap-3" }, GP = { class: "dui-collapse dui-collapse-arrow dui-card-border" }, KP = { class: "dui-collapse-content" }, qP = /* @__PURE__ */ j({
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
		portraitCandidates: {},
		portraitSearchProgress: {},
		portraitSearchProgressLabel: {},
		portraitSearchProgressValue: {},
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
		"selectPortrait"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("actorNameChange", t?.value ?? "");
		}
		return (t, i) => (P(), F("aside", VP, [R(KM, {
			description: "The generated Actor identity stays visible while Build NPC controls change.",
			title: "Preview"
		}, {
			default: A(() => [R(BP, {
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
			]), L("fieldset", HP, [i[2] ||= L("legend", { class: "dui-fieldset-legend" }, "NPC name", -1), L("input", {
				"aria-label": "NPC name",
				class: "dui-input dui-input-sm",
				placeholder: e.suggestedActorName,
				value: e.actorName,
				type: "text",
				onInput: r
			}, null, 40, UP)])]),
			_: 1
		}), L("div", WP, [R(uP, {
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
		]), L("details", GP, [i[3] ||= L("summary", { class: "dui-collapse-title" }, "Complete build details", -1), L("div", KP, [R(yP, {
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
		])])])])]));
	}
}), JP = {
	key: 0,
	class: "dui-list app:gap-1"
}, YP = [
	"onDragenter",
	"onDragover",
	"onDrop"
], XP = ["onDragstart"], ZP = {
	key: 0,
	class: "dui-avatar"
}, QP = { class: "app:size-10 app:rounded-md" }, $P = ["src"], eF = {
	key: 1,
	class: "dui-badge dui-badge-sm"
}, tF = { class: "dui-list-col-grow app:min-w-0" }, nF = { class: "app:flex app:min-w-0 app:flex-wrap app:items-center app:gap-1" }, rF = { class: "app:truncate" }, iF = {
	key: 0,
	class: "dui-badge dui-badge-info dui-badge-xs"
}, aF = {
	key: 1,
	class: "dui-badge dui-badge-info dui-badge-xs"
}, oF = { class: "app:flex app:min-w-0 app:items-center app:gap-2 app:text-xs" }, sF = { class: "app:shrink-0" }, cF = ["title"], lF = { class: "app:flex app:items-center app:justify-end app:gap-1" }, uF = { class: "app:flex app:items-center app:gap-1 app:text-xs" }, dF = ["value", "onInput"], fF = { class: "dui-join" }, pF = ["disabled", "onClick"], mF = ["disabled", "onClick"], hF = ["onClick"], gF = {
	key: 1,
	class: "dui-alert"
}, _F = /* @__PURE__ */ j({
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
		return (t, n) => (P(), I(KM, {
			description: "Careers are applied in this order. Drag rows or use the buttons to reorder them.",
			number: "2",
			title: "Career Queue"
		}, {
			default: A(() => [e.careers.length ? (P(), F("ol", JP, [(P(!0), F(N, null, M(e.careers, (t, a) => (P(), F("li", {
				key: t.uuid,
				class: E(["dui-list-row app:grid-cols-[auto_auto_minmax(0,1fr)_auto] app:items-center app:gap-2 app:rounded-md app:px-2 app:py-2", {
					"app:border-t-2 app:border-dashed app:border-info": i(a) === "before",
					"app:border-b-2 app:border-dashed app:border-info": i(a) === "after",
					"app:opacity-60": e.draggedCareerIndex === a
				}]),
				onDragenter: Qo((e) => r("careerDragEnter", a), ["prevent", "stop"]),
				onDragover: (e) => r("careerDragOver", a, e),
				onDrop: (e) => r("careerDropOnRow", a, e)
			}, [
				L("span", {
					"aria-hidden": "true",
					class: E(["dui-badge dui-badge-ghost dui-badge-sm app:cursor-grab", { "app:cursor-grabbing": e.draggedCareerIndex === a }]),
					draggable: "true",
					title: "Drag to reorder",
					onDragend: n[0] ||= (e) => r("careerDragEnd"),
					onDragstart: (e) => r("careerDragStart", a, e)
				}, " Drag ", 42, XP),
				t.img ? (P(), F("div", ZP, [L("div", QP, [L("img", {
					src: t.img,
					alt: "",
					class: "app:h-full app:w-full app:object-cover",
					height: "40",
					width: "40"
				}, null, 8, $P)])])) : (P(), F("span", eF, D(k(kN)(t.name)), 1)),
				L("div", tF, [L("div", nF, [L("strong", rF, D(t.name), 1), e.draggedCareerIndex === a ? (P(), F("span", iF, " Dragging ")) : i(a) ? (P(), F("span", aF, " Place " + D(i(a)), 1)) : B("", !0)]), L("div", oF, [L("span", sF, [z(D(t.careerGroup || "Career") + " ", 1), t.level === null ? B("", !0) : (P(), F(N, { key: 0 }, [z(" level " + D(t.level), 1)], 64))]), L("small", {
					class: "dui-badge dui-badge-ghost dui-badge-sm app:min-w-0 app:truncate",
					title: [
						`Characteristics: ${k(ON)(t.grants.characteristics)}`,
						`Skills: ${k(ON)(t.grants.skills)}`,
						`Talents: ${k(ON)(t.grants.talents)}`,
						`Trappings: ${k(ON)(t.grants.trappings)}`
					].join("\n")
				}, D(k(DN)(t)), 9, cF)])]),
				L("div", lF, [L("label", uF, [n[1] ||= z(" Qty ", -1), L("input", {
					class: "dui-input dui-input-xs app:w-14",
					value: t.quantity,
					min: "1",
					type: "number",
					onInput: (e) => r("careerQuantityInput", a, e)
				}, null, 40, dF)]), L("div", fF, [
					L("button", {
						class: "dui-join-item dui-btn dui-btn-xs",
						disabled: a === 0,
						title: "Move career earlier",
						type: "button",
						onClick: (e) => r("moveCareer", a, -1)
					}, " Up ", 8, pF),
					L("button", {
						class: "dui-join-item dui-btn dui-btn-xs",
						disabled: a === e.careers.length - 1,
						title: "Move career later",
						type: "button",
						onClick: (e) => r("moveCareer", a, 1)
					}, " Down ", 8, mF),
					L("button", {
						class: "dui-join-item dui-btn dui-btn-xs",
						type: "button",
						onClick: (e) => r("removeCareer", a)
					}, " Remove ", 8, hF)
				])])
			], 42, YP))), 128))])) : (P(), F("p", gF, "No careers queued yet."))]),
			_: 1
		}));
	}
}), vF = { class: "app:grid app:gap-3" }, yF = { class: "dui-fieldset" }, bF = ["for"], xF = { class: "dui-join app:w-full" }, SF = ["id", "onKeydown"], CF = { class: "app:grid app:gap-2 md:app:grid-cols-3" }, wF = [
	"onDragenter",
	"onDragleave",
	"onDragover",
	"onDrop"
], TF = { class: "dui-fieldset-legend app:flex app:items-center app:gap-2" }, EF = { class: "app:flex app:flex-wrap app:gap-2" }, DF = [
	"title",
	"onClick",
	"onDragstart",
	"onKeydown"
], OF = { "aria-live": "polite" }, kF = /* @__PURE__ */ j({
	__name: "PortraitFilterTags",
	props: { tags: {} },
	emits: ["createSearchTerm", "filterTagSectionChange"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ O(""), a = _r(), o = /* @__PURE__ */ O(null), s = /* @__PURE__ */ O(null), c = [
			{
				id: "search",
				title: "Search"
			},
			{
				id: "must-include",
				title: "Must Include"
			},
			{
				id: "must-exclude",
				title: "Mustn't Include"
			}
		], l = V(() => Object.fromEntries(c.map((e) => [e.id, n.tags.filter((t) => t.section === e.id)])));
		function u() {
			let e = i.value;
			r("createSearchTerm", e), i.value = "";
		}
		function d(e, t) {
			t.stopPropagation(), o.value = e, t.dataTransfer?.setData("text/plain", YA(e.id)), t.dataTransfer?.setData(VA, e.id), t.dataTransfer && (t.dataTransfer.effectAllowed = "move");
		}
		function f(e, t) {
			t.preventDefault(), t.stopPropagation(), s.value = e, t.dataTransfer && (t.dataTransfer.dropEffect = v(o.value, e) ? "move" : "none");
		}
		function p(e, t) {
			t.stopPropagation(), !(t.currentTarget instanceof Node && t.relatedTarget instanceof Node && t.currentTarget.contains(t.relatedTarget)) && s.value === e && (s.value = null);
		}
		function m(e, t) {
			t.preventDefault(), t.stopPropagation();
			let i = t.dataTransfer?.getData("application/x-wfrp4e-customizer-portrait-filter-tag") || XA(t.dataTransfer?.getData("text/plain") ?? ""), a = o.value ?? n.tags.find((e) => e.id === i) ?? null;
			_(), v(a, e) && r("filterTagSectionChange", a, e);
		}
		function h(e) {
			let t = c[(c.findIndex((t) => t.id === e.section) + 1) % c.length];
			t && r("filterTagSectionChange", e, t.id);
		}
		function g(e) {
			e.canRemove && r("filterTagSectionChange", e, "removed");
		}
		function _() {
			o.value = null, s.value = null;
		}
		function v(e, t) {
			return !!(e && (t !== "removed" || e.canRemove));
		}
		function y(e) {
			return s.value === e ? e === "removed" && !o.value?.canRemove ? "Protected" : o.value?.section === e ? "Already here" : "Drop here" : "";
		}
		let b = V(() => s.value === "removed" ? o.value?.canRemove ? "Drop to remove this tag" : "Source tags stay available" : "Trash");
		return (e, t) => (P(), F("section", vF, [
			L("fieldset", yF, [
				t[5] ||= L("legend", { class: "dui-fieldset-legend" }, "Add search terms", -1),
				L("label", {
					class: "app:text-sm",
					for: k(a)
				}, "Search terms", 8, bF),
				L("div", xF, [Wn(L("input", {
					id: k(a),
					"onUpdate:modelValue": t[0] ||= (e) => i.value = e,
					"aria-label": "Portrait search terms",
					class: "dui-input dui-input-sm dui-join-item app:flex-1",
					placeholder: "Search terms",
					type: "search",
					onKeydown: es(Qo(u, ["prevent"]), ["enter"])
				}, null, 40, SF), [[Ko, i.value]]), L("button", {
					class: "dui-btn dui-btn-sm dui-join-item",
					type: "button",
					onClick: u
				}, " Add ")])
			]),
			t[7] ||= L("p", { class: "app:m-0 app:text-sm app:text-base-content/70" }, " Drag tags between groups. Select a tag to move it to the next group; press Delete to remove a custom text tag. ", -1),
			L("div", CF, [(P(), F(N, null, M(c, (e) => L("fieldset", {
				key: e.id,
				class: E(["dui-fieldset app:min-h-24 app:rounded-box app:border app:border-base-300 app:p-2", { "app:border-info app:bg-info/10 app:ring-2 app:ring-info": s.value === e.id }]),
				onDragenter: (t) => f(e.id, t),
				onDragleave: (t) => p(e.id, t),
				onDragover: (t) => f(e.id, t),
				onDrop: (t) => m(e.id, t)
			}, [L("legend", TF, [L("span", null, D(e.title), 1), L("span", {
				"aria-live": "polite",
				class: E(["dui-badge dui-badge-info dui-badge-sm", { "app:invisible": s.value !== e.id }])
			}, D(y(e.id) || "Drop here"), 3)]), L("div", EF, [(P(!0), F(N, null, M(l.value[e.id], (e) => (P(), F("button", {
				key: e.id,
				class: E(["dui-badge app:h-auto app:cursor-grab app:whitespace-normal app:py-2", [e.kind === "source" ? "dui-badge-outline" : "dui-badge-primary", o.value?.id === e.id ? "app:opacity-50" : ""]]),
				draggable: "true",
				title: `Drag ${e.label} to another group, or select it to move it to the next group.`,
				type: "button",
				onClick: (t) => h(e),
				onDragend: _,
				onDragstart: (t) => d(e, t),
				onKeydown: es(Qo((t) => g(e), ["prevent"]), ["delete"])
			}, D(e.label), 43, DF))), 128))])], 42, wF)), 64))]),
			L("div", {
				"aria-label": "Remove search tag",
				class: E(["dui-alert app:justify-center", {
					"dui-alert-error app:ring-2 app:ring-error": s.value === "removed" && !o.value?.canRemove,
					"dui-alert-warning app:ring-2 app:ring-warning": s.value === "removed" && o.value?.canRemove
				}]),
				onDragenter: t[1] ||= (e) => f("removed", e),
				onDragleave: t[2] ||= (e) => p("removed", e),
				onDragover: t[3] ||= (e) => f("removed", e),
				onDrop: t[4] ||= (e) => m("removed", e)
			}, [t[6] ||= L("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), L("span", OF, D(b.value), 1)], 34)
		]));
	}
}), AF = ["aria-busy"], jF = { class: "app:flex app:flex-wrap app:items-start app:justify-between app:gap-2" }, MF = { class: "dui-badge dui-badge-outline" }, NF = {
	key: 0,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, PF = { class: "app:flex-1" }, FF = ["value"], IF = {
	key: 1,
	class: "dui-alert dui-alert-warning"
}, LF = {
	key: 2,
	class: "app:max-h-[26rem] app:overflow-y-auto app:pr-1"
}, RF = { class: "dui-list app:m-0 app:grid app:grid-cols-[repeat(auto-fill,minmax(8.5rem,1fr))] app:gap-3 app:p-0" }, zF = [
	"aria-label",
	"aria-pressed",
	"title",
	"onClick"
], BF = ["src"], VF = { class: "app:flex app:flex-wrap app:items-center app:justify-between app:gap-1" }, HF = {
	key: 0,
	class: "dui-badge dui-badge-success dui-badge-sm"
}, UF = { class: "app:text-sm" }, WF = {
	key: 3,
	class: "dui-alert"
}, GF = /* @__PURE__ */ j({
	__name: "PortraitGallery",
	props: {
		isLoadingPortraitCandidates: { type: Boolean },
		open: { type: Boolean },
		portraitCandidates: {},
		portraitFilterTags: {},
		portraitSearchProgressLabel: {},
		portraitSearchProgressValue: {},
		portraitSearchTerms: {},
		selectedPortraitCandidateKey: {}
	},
	emits: [
		"close",
		"createSearchTerm",
		"filterTagSectionChange",
		"selectPortrait"
	],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (P(), I(_M, {
			"close-label": "Done",
			open: e.open,
			title: "Choose an NPC Portrait",
			wide: "",
			onClose: r[2] ||= (e) => n("close")
		}, {
			default: A(() => [L("section", {
				"aria-busy": e.isLoadingPortraitCandidates,
				class: "app:grid app:gap-3"
			}, [
				L("header", jF, [r[3] ||= L("div", null, [L("p", { class: "app:m-0" }, "Select a portrait to apply it immediately to this draft."), L("small", { class: "app:text-base-content/70" }, " Career and base Actor images remain available regardless of search terms. ")], -1), L("span", MF, D(e.portraitCandidates.length) + " options ", 1)]),
				R(kF, {
					tags: e.portraitFilterTags,
					onCreateSearchTerm: r[0] ||= (e) => n("createSearchTerm", e),
					onFilterTagSectionChange: r[1] ||= (e, t) => n("filterTagSectionChange", e, t)
				}, null, 8, ["tags"]),
				e.isLoadingPortraitCandidates ? (P(), F("div", NF, [L("div", PF, [
					r[4] ||= L("strong", null, "Updating portrait results...", -1),
					L("progress", {
						"aria-label": "Portrait search progress",
						class: "dui-progress dui-progress-info app:w-full",
						value: e.portraitSearchProgressValue,
						max: "100"
					}, null, 8, FF),
					L("small", null, D(e.portraitSearchProgressLabel), 1)
				])])) : e.portraitSearchTerms.length && !e.portraitCandidates.length ? (P(), F("p", IF, " No portraits match the current filter tags. ")) : B("", !0),
				e.portraitCandidates.length ? (P(), F("div", LF, [L("ul", RF, [(P(!0), F(N, null, M(e.portraitCandidates, (t) => (P(), F("li", { key: t.key }, [L("button", {
					"aria-label": k(jN)(t),
					"aria-pressed": t.key === e.selectedPortraitCandidateKey,
					class: E(["dui-btn app:h-auto app:min-h-0 app:w-full app:flex-col app:items-stretch app:justify-start app:gap-2 app:overflow-hidden app:whitespace-normal app:p-2 app:text-left", t.key === e.selectedPortraitCandidateKey ? "dui-btn-active dui-btn-outline" : "dui-btn-ghost"]),
					title: k(AN)(t),
					type: "button",
					onClick: (e) => n("selectPortrait", t)
				}, [
					L("img", {
						alt: "",
						class: "app:aspect-square app:w-full app:rounded-box app:bg-base-300 app:object-cover",
						height: "192",
						loading: "lazy",
						src: t.img,
						width: "192"
					}, null, 8, BF),
					L("span", VF, [L("small", null, D(k(MN)(t)), 1), t.key === e.selectedPortraitCandidateKey ? (P(), F("span", HF, " Selected ")) : B("", !0)]),
					L("strong", UF, D(t.label), 1)
				], 10, zF)]))), 128))])])) : e.isLoadingPortraitCandidates ? B("", !0) : (P(), F("p", WF, " No portraits are available yet. Choose a base Actor or queue a Career to start the search. "))
			], 8, AF)]),
			_: 1
		}, 8, ["open"]));
	}
}), KF = {
	key: 0,
	class: "dui-alert"
}, qF = {
	key: 0,
	class: "dui-avatar"
}, JF = { class: "app:size-14 app:shrink-0 app:rounded-lg" }, YF = ["src"], XF = {
	key: 1,
	class: "dui-badge"
}, ZF = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, QF = { class: "dui-card-actions" }, $F = ["disabled"], eI = {
	key: 2,
	class: "dui-alert"
}, tI = /* @__PURE__ */ j({
	__name: "QuickCareerPanel",
	props: {
		careers: {},
		finalCareer: {}
	},
	emits: ["clearCareers"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (P(), I(KM, {
			description: "Quick Build keeps one chosen Career chain instead of a manual queue.",
			number: "2",
			title: "Career"
		}, {
			default: A(() => [
				e.finalCareer ? (P(), F("article", KF, [e.finalCareer.img ? (P(), F("div", qF, [L("div", JF, [L("img", {
					src: e.finalCareer.img,
					alt: "",
					class: "app:h-full app:w-full app:object-cover",
					height: "56",
					width: "56"
				}, null, 8, YF)])])) : (P(), F("span", XF, D(k(kN)(e.finalCareer.name)), 1)), L("div", null, [
					L("strong", null, D(e.finalCareer.name), 1),
					L("span", null, [z(D(e.finalCareer.careerGroup || "Career") + " ", 1), e.finalCareer.level === null ? B("", !0) : (P(), F(N, { key: 0 }, [z(" level " + D(e.finalCareer.level), 1)], 64))]),
					L("small", null, D(k(DN)(e.finalCareer)), 1)
				])])) : B("", !0),
				e.careers.length > 1 ? (P(), F("div", ZF, [L("span", null, D(e.careers.length - 1) + " lower-tier Career" + D(e.careers.length === 2 ? "" : "s"), 1), L("span", null, "Included before " + D(e.finalCareer?.name) + ".", 1)])) : B("", !0),
				L("div", QF, [L("button", {
					class: "dui-btn dui-btn-sm",
					disabled: !e.careers.length,
					type: "button",
					onClick: r[0] ||= (e) => n("clearCareers")
				}, " Clear Career ", 8, $F)]),
				e.careers.length ? B("", !0) : (P(), F("p", eI, "No Career selected."))
			]),
			_: 1
		}));
	}
}), nI = {
	key: 0,
	class: "dui-fieldset"
}, rI = { class: "dui-fieldset-legend" }, iI = { class: "dui-card-actions" }, aI = ["aria-pressed", "onClick"], oI = /* @__PURE__ */ j({
	__name: "TraitButtonGroup",
	props: {
		caption: {},
		title: {},
		traits: {}
	},
	emits: ["toggleTrait"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => e.traits.length ? (P(), F("fieldset", nI, [L("legend", rI, [L("span", null, D(e.title), 1), L("span", null, D(e.caption), 1)]), L("div", iI, [(P(!0), F(N, null, M(e.traits, (e) => (P(), F("button", {
			key: e.uuid,
			"aria-pressed": e.isSelected,
			class: E(["dui-btn dui-btn-sm", { "dui-btn-active": e.isSelected }]),
			type: "button",
			onClick: (t) => n("toggleTrait", e)
		}, D(e.name), 11, aI))), 128))])])) : B("", !0);
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/errors.ts
function sI(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not resolve that Actor drop.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useBaseActorSelection.ts
function cI(e, t) {
	let n = lM(), { baseActors: r, selectedBaseActorUuid: i } = uc(n), a = /* @__PURE__ */ O(""), o = V(() => {
		let e = a.value.trim().toLocaleLowerCase();
		return e ? r.value.filter((t) => t.name.toLocaleLowerCase().includes(e)) : r.value;
	}), s = V({
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
			t.value = sI(e);
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
function lI() {
	let { advancements: e, careers: t, finalPortraitPath: n, selectedBaseActor: r, trappings: i } = uc(lM()), a = V(() => {
		let e = 0;
		for (let n of t.value) e += n.quantity;
		return e;
	}), o = V(() => i.value.filter((e) => !e.ignored).length), s = V(() => e.value.filter((e) => e.current !== e.careerValue).length), c = V(() => i.value.filter((e) => !e.ignored && e.resolution.status === "fallback").length), l = V(() => i.value.filter((e) => e.ignored).length), u = V(() => e.value.filter((e) => e.kind === "skill" && jk(e.name) !== null).length), d = V(() => i.value.filter((e) => !e.ignored && e.resolution.status === "unresolved").length), f = V(() => {
		let e = [];
		return r.value || e.push("Choose a base Actor before building."), t.value.length || e.push("No Careers are queued."), u.value && e.push(`${u.value} skill rows still need a specialization.`), d.value && e.push(`${d.value} trappings have no item resolution yet.`), n.value || e.push("No portrait is selected."), e;
	});
	return {
		buildPreviewStatus: V(() => f.value.length ? "Review" : "Ready"),
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
function uI() {
	let e = lM(), { optionalTraits: t, quickTraits: n, traits: r } = uc(e), i = V(() => new Set(r.value.map((e) => dI(e.name)))), a = V(() => t.value.map(s)), o = V(() => {
		let e = new Set(t.value.map((e) => dI(e.name)));
		return n.value.filter((t) => !e.has(dI(t.name))).map(s);
	});
	function s(e) {
		return {
			...e,
			isSelected: i.value.has(dI(e.name))
		};
	}
	function c(t) {
		let n = i.value.has(dI(t.name));
		e.setQuickTraitSelected(t, !n);
	}
	function l(t) {
		let n = i.value.has(dI(t.name));
		e.setOptionalTraitSelected(t, !n);
	}
	return {
		displayedQuickTraitOptions: o,
		optionalTraitOptions: a,
		toggleOptionalTrait: l,
		toggleQuickTrait: c
	};
}
function dI(e) {
	return e.trim().toLocaleLowerCase();
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useCareerQueue.ts
function fI() {
	let e = lM(), t = /* @__PURE__ */ O(null), n = /* @__PURE__ */ O(null);
	function r(t, n) {
		let r = n.target;
		r && e.setCareerQuantity(t, Number(r.value));
	}
	function i(e, r) {
		t.value = e, n.value = e, r.dataTransfer?.setData("text/plain", `npc-builder-career:${e}`), r.dataTransfer && (r.dataTransfer.effectAllowed = "move");
	}
	function a(e, t) {
		t.preventDefault(), t.stopPropagation(), n.value = e, t.dataTransfer && (t.dataTransfer.dropEffect = "move");
	}
	function o(n, r) {
		r.preventDefault(), r.stopPropagation(), t.value !== null && e.moveCareerToIndex(t.value, n), s();
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
//#region src/state/npc-builder/workflows/portrait-candidates-workflow.ts
function pI(e, t) {
	let n = lM(), { careers: r, customPortraitSearchTerms: i, finalPortraitPath: a, portraitSourceTagSections: o, portraitTermSections: s, selectedBaseActor: c, selectedPortraitPath: l, settings: u } = uc(n), d = /* @__PURE__ */ O([]), f = /* @__PURE__ */ O(!1), p = /* @__PURE__ */ O(null), m = 0, h = V(() => QA({
		assetCandidates: d.value,
		careers: r.value,
		selectedBaseActor: c.value,
		selectedPortraitPath: l.value
	})), g = V(() => UA({
		careers: r.value,
		selectedBaseActor: c.value
	})), _ = V(() => mI([...g.value, ...i.value])), v = V(() => GA(_.value, s.value, "search")), y = V(() => GA(_.value, s.value, "must-include")), b = V(() => GA(_.value, s.value, "must-exclude")), x = V(() => mI([...v.value, ...y.value])), S = V(() => mI(h.value.map((e) => e.sourceGroup).filter((e) => !!e))), C = V(() => [..._.value.flatMap(de), ...S.value.map(fe)]), ee = V(() => pe("must-include")), te = V(() => pe("must-exclude")), ne = V(() => h.value.filter((e) => qA(e, {
		mustExcludeSourceGroups: te.value,
		mustExcludeTerms: b.value,
		mustIncludeSourceGroups: ee.value,
		mustIncludeTerms: y.value
	}))), re = V(() => ne.value.slice(0, 4)), ie = V(() => Math.max(0, ne.value.length - re.value.length)), ae = V(() => ne.value.find((e) => e.img === a.value) ?? null), w = V(() => ae.value?.key ?? ""), oe = V(() => tj(p.value)), se = V(() => ej(p.value));
	Zn(_, (e) => {
		n.retainAvailablePortraitFilterTerms(e);
	}, { immediate: !0 }), Zn(() => [
		c.value?.uuid ?? "",
		u.value.searchCompendiumPortraitAssets,
		u.value.searchFoundryPortraitAssets,
		r.value.map((e) => e.uuid).join("|"),
		i.value.join("|"),
		x.value.join("|"),
		b.value.join("|")
	], (e, t, n) => {
		m += 1;
		let r = setTimeout(() => {
			ue();
		}, 150);
		n(() => {
			clearTimeout(r);
		});
	}, { immediate: !0 });
	function ce(e) {
		n.selectPortrait(e.img);
	}
	function le(e) {
		n.addCustomPortraitSearchTerm(e);
	}
	function T(e, t) {
		if (e.kind === "source") {
			n.setPortraitSourceTagSection(e.value, t);
			return;
		}
		n.setPortraitTermSection(e.value, t);
	}
	async function ue() {
		let n = m + 1;
		if (m = n, !$A({
			careers: r.value,
			searchTerms: x.value,
			selectedBaseActor: c.value,
			settings: u.value
		})) {
			d.value = [], f.value = !1, p.value = null;
			return;
		}
		f.value = !0, d.value = [], p.value = {
			candidatesFound: 0,
			currentLocation: "Preparing portrait search",
			directoriesVisited: 0,
			maxDirectories: 0,
			phase: "world-documents"
		};
		try {
			let t = await e.listFoundryPortraitCandidates({
				includeCompendiumAssets: u.value.searchCompendiumPortraitAssets,
				includeFilePickerAssets: u.value.searchFoundryPortraitAssets,
				mustExcludeTerms: b.value,
				mustIncludeTerms: y.value,
				searchTerms: x.value
			}, (e) => {
				m === n && (p.value = e);
			});
			m === n && (d.value = t);
		} catch (e) {
			m === n && (t.value = hI(e));
		} finally {
			m === n && (f.value = !1);
		}
	}
	return {
		activePortraitSearchTerms: x,
		addPortraitSearchTerm: le,
		compactPortraitCandidates: re,
		hiddenPortraitCandidateCount: ie,
		isLoadingPortraitCandidates: f,
		portraitCandidates: ne,
		portraitFilterTags: C,
		portraitSearchTerms: _,
		portraitSearchProgress: p,
		portraitSearchProgressLabel: oe,
		portraitSearchProgressValue: se,
		selectedPortraitCandidate: ae,
		selectedPortraitCandidateKey: w,
		selectPortrait: ce,
		setPortraitFilterTagSection: T
	};
	function de(e) {
		let t = s.value[e] ?? "search";
		return t === "removed" ? [] : [{
			canRemove: !0,
			id: `term:${e}`,
			kind: "term",
			label: e,
			section: t,
			value: e
		}];
	}
	function fe(e) {
		return {
			canRemove: !1,
			id: `source:${e}`,
			kind: "source",
			label: `Sourced From ${JA(e)}`,
			section: o.value[e] ?? "search",
			value: e
		};
	}
	function pe(e) {
		return S.value.filter((t) => (o.value[t] ?? "search") === e);
	}
}
function mI(e) {
	return [...new Set(e)];
}
function hI(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish searching for portraits.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/usePortraitCandidates.ts
function gI(e, t) {
	let n = pI(e, t), r = /* @__PURE__ */ O(!1);
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
var _I = { class: "app:grid app:gap-3" }, vI = { class: "app:grid app:items-start app:gap-3 md:app:grid-cols-[minmax(0,1fr)_minmax(17rem,22rem)]" }, yI = { class: "app:grid app:min-w-0 app:gap-3" }, bI = /* @__PURE__ */ j({
	__name: "NpcBuilderBuildTab",
	props: {
		bridge: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean },
		page: {}
	},
	setup(e) {
		let t = e, n = lM(), { actorName: r, advancements: i, careers: a, estimatedNpcXp: o, finalActorName: s, finalCareer: c, finalPortraitPath: l, grantTotals: u, selectedBaseActor: d, selectedSpells: f, suggestedActorName: p, traits: m } = uc(n), h = /* @__PURE__ */ O(""), { actorFilter: g, filteredActors: _, selectedBaseActorSelectValue: v } = cI(t.bridge, h), { clearCareerDragState: y, draggedCareerIndex: b, dragOverCareerIndex: x, handleCareerDragOver: S, handleCareerDragStart: C, handleCareerDrop: ee, moveCareer: te, removeCareer: ne, setCareerQuantity: re, setDragOverCareerIndex: ie } = fI(), { displayedQuickTraitOptions: ae, optionalTraitOptions: w, toggleOptionalTrait: oe, toggleQuickTrait: se } = uI(), { buildPreviewStatus: ce, buildPreviewWarnings: le, careerItemCount: T, editedAdvanceCount: ue, fallbackTrappingCount: de, ignoredTrappingCount: fe, visibleTrappingCount: pe } = lI(), { addPortraitSearchTerm: me, compactPortraitCandidates: he, hiddenPortraitCandidateCount: ge, isLoadingPortraitCandidates: _e, isPortraitGalleryOpen: ve, portraitCandidates: ye, portraitFilterTags: E, portraitSearchProgress: be, portraitSearchProgressLabel: xe, portraitSearchProgressValue: Se, portraitSearchTerms: Ce, selectedPortraitCandidate: we, selectedPortraitCandidateKey: Te, selectPortrait: Ee, selectPortraitFromGallery: D, setPortraitFilterTagSection: De } = gI(t.bridge, h);
		return (t, Oe) => (P(), F("section", _I, [L("div", vI, [L("div", yI, [
			e.page === "build-quick" || e.page === "build-actor" ? (P(), I(GN, {
				key: 0,
				"actor-filter": k(g),
				description: e.page === "build-quick" ? "Choose the base statblock for this fast NPC draft." : "Choose the base statblock before reviewing detailed build pages.",
				"error-message": h.value,
				"filtered-actors": k(_),
				"is-loading-actors": e.isLoadingActors,
				"is-loading-base-draft": e.isLoadingBaseDraft,
				number: e.page === "build-quick" ? "1" : "",
				"selected-base-actor": k(d),
				"selected-base-actor-uuid": k(v),
				onActorFilterChange: Oe[0] ||= (e) => g.value = e,
				onBaseActorChange: Oe[1] ||= (e) => v.value = e
			}, null, 8, [
				"actor-filter",
				"description",
				"error-message",
				"filtered-actors",
				"is-loading-actors",
				"is-loading-base-draft",
				"number",
				"selected-base-actor",
				"selected-base-actor-uuid"
			])) : B("", !0),
			e.page === "build-quick" ? (P(), I(tI, {
				key: 1,
				careers: k(a),
				"final-career": k(c),
				onClearCareers: k(n).clearCareers
			}, null, 8, [
				"careers",
				"final-career",
				"onClearCareers"
			])) : B("", !0),
			e.page === "build-quick" ? (P(), I(KM, {
				key: 2,
				description: "Apply optional base traits and configured quick traits to the draft.",
				number: "3",
				title: "Quick Traits"
			}, {
				default: A(() => [R(oI, {
					caption: `${k(w).length} from base statblock`,
					traits: k(w),
					title: "Optional Traits",
					onToggleTrait: k(oe)
				}, null, 8, [
					"caption",
					"traits",
					"onToggleTrait"
				]), R(oI, {
					caption: `${k(ae).length} configured`,
					traits: k(ae),
					title: "Quick Traits",
					onToggleTrait: k(se)
				}, null, 8, [
					"caption",
					"traits",
					"onToggleTrait"
				])]),
				_: 1
			})) : B("", !0),
			e.page === "build-careers" ? (P(), I(_F, {
				key: 3,
				careers: k(a),
				"drag-over-career-index": k(x),
				"dragged-career-index": k(b),
				onCareerDragEnd: k(y),
				onCareerDragEnter: k(ie),
				onCareerDragOver: k(S),
				onCareerDragStart: k(C),
				onCareerDropOnRow: k(ee),
				onCareerQuantityInput: k(re),
				onMoveCareer: k(te),
				onRemoveCareer: k(ne)
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
			])) : B("", !0)
		]), R(qP, {
			class: "app:min-w-0",
			"actor-name": k(r),
			"advancement-count": k(i).length,
			"build-preview-status": k(ce),
			"build-preview-warnings": k(le),
			"career-item-count": k(T),
			"compact-portrait-candidates": k(he),
			"edited-advance-count": k(ue),
			"estimated-npc-xp": k(o),
			"fallback-trapping-count": k(de),
			"final-actor-name": k(s),
			"final-career": k(c),
			"final-portrait-path": k(l),
			"grant-totals": k(u),
			"hidden-portrait-candidate-count": k(ge),
			"ignored-trapping-count": k(fe),
			"is-loading-portrait-candidates": k(_e),
			"portrait-candidates": k(ye),
			"portrait-search-progress": k(be),
			"portrait-search-progress-label": k(xe),
			"portrait-search-progress-value": k(Se),
			"selected-base-actor": k(d),
			"selected-portrait-candidate": k(we),
			"selected-portrait-candidate-key": k(Te),
			"selected-spell-count": k(f).length,
			"suggested-actor-name": k(p),
			"trait-count": k(m).length,
			"visible-trapping-count": k(pe),
			onActorNameChange: Oe[2] ||= (e) => r.value = e,
			onOpenPortraitGallery: Oe[3] ||= (e) => ve.value = !0,
			onSelectPortrait: k(Ee)
		}, null, 8, /* @__PURE__ */ "actor-name.advancement-count.build-preview-status.build-preview-warnings.career-item-count.compact-portrait-candidates.edited-advance-count.estimated-npc-xp.fallback-trapping-count.final-actor-name.final-career.final-portrait-path.grant-totals.hidden-portrait-candidate-count.ignored-trapping-count.is-loading-portrait-candidates.portrait-candidates.portrait-search-progress.portrait-search-progress-label.portrait-search-progress-value.selected-base-actor.selected-portrait-candidate.selected-portrait-candidate-key.selected-spell-count.suggested-actor-name.trait-count.visible-trapping-count.onSelectPortrait".split("."))]), R(GF, {
			"is-loading-portrait-candidates": k(_e),
			open: k(ve),
			"portrait-candidates": k(ye),
			"portrait-filter-tags": k(E),
			"portrait-search-progress-label": k(xe),
			"portrait-search-progress-value": k(Se),
			"portrait-search-terms": k(Ce),
			"selected-portrait-candidate-key": k(Te),
			onCreateSearchTerm: k(me),
			onClose: Oe[4] ||= (e) => ve.value = !1,
			onFilterTagSectionChange: k(De),
			onSelectPortrait: k(D)
		}, null, 8, [
			"is-loading-portrait-candidates",
			"open",
			"portrait-candidates",
			"portrait-filter-tags",
			"portrait-search-progress-label",
			"portrait-search-progress-value",
			"portrait-search-terms",
			"selected-portrait-candidate-key",
			"onCreateSearchTerm",
			"onFilterTagSectionChange",
			"onSelectPortrait"
		])]));
	}
}), xI = {
	Average: "avg",
	Enormous: "enor",
	Large: "lrg",
	Little: "ltl",
	Monstrous: "mnst",
	Small: "sml",
	Tiny: "tiny"
}, SI = new Set(["bestial", "skittish"]);
function CI(e) {
	let t = e.some((e) => OI(e, "skittish")), n = e.some((e) => kI(e, "trained", "war")), r = jI(e.filter((e) => OI(e, "weapon")));
	return e.map((e) => {
		let i = TI(e.name);
		return SI.has(i) ? DI(e, `${e.name} is removed from combined mounts.`) : i === "weapon" ? !n || t ? DI(e, "Weapon requires Trained (War) and a mount that was not Skittish.") : e.uuid === r ? EI(e, "Weapon (Mount)") : DI(e, "Only the strongest Weapon trait is retained for the combined profile.") : EI(e, e.damage ? AI(e.name) : e.name);
	});
}
function wI(e) {
	return TI(e) === "armour";
}
function TI(e) {
	return e.trim().replace(/\s*\(mount\)\s*$/i, "").toLocaleLowerCase();
}
function EI(e, t) {
	return {
		fixedDamage: e.fixedDamage,
		included: !0,
		name: e.name,
		outputName: t,
		reason: "",
		sourceUuid: e.uuid
	};
}
function DI(e, t) {
	return {
		fixedDamage: e.fixedDamage,
		included: !1,
		name: e.name,
		outputName: "",
		reason: t,
		sourceUuid: e.uuid
	};
}
function OI(e, t) {
	return TI(e.name) === t;
}
function kI(e, t, n) {
	return OI(e, t) ? e.specification.trim().toLocaleLowerCase() === n : e.name.trim().toLocaleLowerCase() === `${t} (${n})`;
}
function AI(e) {
	return /\(mount\)\s*$/i.test(e.trim()) ? e.trim() : `${e.trim()} (Mount)`;
}
function jI(e) {
	return [...e].sort((e, t) => (t.fixedDamage ?? 0) - (e.fixedDamage ?? 0) || e.uuid.localeCompare(t.uuid))[0]?.uuid ?? "";
}
//#endregion
//#region src/functions/npc-builder/combined-profile/calculate.ts
var MI = [
	xI.Tiny,
	xI.Little,
	xI.Small,
	xI.Average,
	xI.Large,
	xI.Enormous,
	xI.Monstrous
], NI = {
	[xI.Average]: "Average",
	[xI.Enormous]: "Enormous",
	[xI.Large]: "Large",
	[xI.Little]: "Little",
	[xI.Monstrous]: "Monstrous",
	[xI.Small]: "Small",
	[xI.Tiny]: "Tiny"
};
function PI(e, t) {
	return {
		chargeStrengthBonus: Math.max(t.characteristics.strengthBonus - e.characteristics.strengthBonus, 0),
		initiative: Math.max(e.characteristics.initiative, t.characteristics.initiative),
		movement: t.movement,
		size: II(e.size, t.size),
		strength: e.characteristics.strength,
		toughness: Math.max(e.characteristics.toughness, t.characteristics.toughness),
		traits: CI(t.traits),
		wounds: FI(e.wounds, t.wounds)
	};
}
function FI(e, t) {
	return Math.max(1, Math.max(e, t) + Math.ceil(Math.min(e, t) * .25));
}
function II(e, t) {
	return LI(t) > LI(e) ? t : e;
}
function LI(e) {
	return MI.indexOf(e);
}
//#endregion
//#region src/functions/npc-builder/combined-profile/trait-source.ts
function RI({ flagScope: e, mount: t, plan: n, rider: r }) {
	let i = "Combined Profile";
	return {
		effects: [{
			changes: [],
			disabled: !1,
			flags: { [e]: { generatedCombinedProfileEffect: !0 } },
			img: t.img || "icons/svg/wing.svg",
			name: i,
			system: {
				scriptData: zI(e, n),
				transferData: {
					documentType: "Actor",
					type: "document"
				}
			},
			transfer: !0
		}],
		flags: { [e]: { generatedCombinedProfileTrait: {
			mountUuid: t.uuid,
			riderUuid: r.uuid
		} } },
		img: t.img || "icons/svg/wing.svg",
		name: i,
		system: {
			description: { value: VI(r, t, n) },
			specification: { value: `${r.name} + ${t.name}` }
		},
		type: "trait"
	};
}
function zI(e, t) {
	let n = [{
		label: "Combined Profile Wounds",
		script: ["// Generated by Drowsy's WFRP4e Customizers.", `args.wounds = ${t.wounds};`].join("\n"),
		trigger: "woundCalc"
	}, {
		label: "Combined Profile Size",
		script: ["// Generated by Drowsy's WFRP4e Customizers.", `args.size = ${JSON.stringify(t.size)};`].join("\n"),
		trigger: "calculateSize"
	}];
	return t.chargeStrengthBonus > 0 && n.push({
		label: "Combined Profile Charge",
		script: BI(e, t.chargeStrengthBonus),
		trigger: "preRollTest"
	}), n;
}
function BI(e, t) {
	return [
		"// Generated by Drowsy's WFRP4e Customizers.",
		"const test = args.test;",
		"const attackType = test.item?.attackType || test.item?.system?.attackType || test.item?.system?.rollable?.attackType;",
		`const isMountAttack = Boolean(test.item?.flags?.[${JSON.stringify(e)}]?.generatedMountTrait);`,
		"",
		"if (!test.preData.charging || attackType !== \"melee\" || isMountAttack) {",
		"  return;",
		"}",
		"",
		`test.preData.additionalDamage = Number(test.preData.additionalDamage || 0) + ${t};`,
		"test.preData.other ||= [];",
		`test.preData.other.push("Combined Profile: +${t} mount Strength Bonus on the charge");`
	].join("\n");
}
function VI(e, t, n) {
	return [
		"<p>Generated by Drowsy's WFRP4e Customizers. This Actor combines a rider and mount into one simplified NPC profile.</p>",
		`<p><strong>Rider:</strong> ${HI(e.name)}<br><strong>Mount:</strong> ${HI(t.name)}</p>`,
		`<p><strong>Movement:</strong> ${n.movement}; <strong>Wounds:</strong> ${n.wounds}; <strong>Charge SB:</strong> +${n.chargeStrengthBonus}.</p>`,
		"<p>Mount attack Traits use fixed damage captured from the mount. Skittish and Bestial are removed.</p>"
	].join("");
}
function HI(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/errors.ts
function UI(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderMountTab/CombinedProfilePreview.vue?vue&type=script&setup=true&lang.ts
var WI = { class: "app:max-w-full app:overflow-x-auto" }, GI = { class: "dui-table dui-table-sm" }, KI = { class: "dui-alert" }, qI = { class: "app:flex app:flex-wrap app:gap-2" }, JI = { key: 0 }, YI = {
	key: 1,
	class: "app:grid app:gap-2"
}, XI = /* @__PURE__ */ j({
	__name: "CombinedProfilePreview",
	props: {
		mount: {},
		plan: {},
		rider: {}
	},
	setup(e) {
		let t = e, n = V(() => t.plan.traits.filter((e) => e.included)), r = V(() => t.plan.traits.filter((e) => !e.included)), i = V(() => [
			{
				field: "Strength",
				mount: t.mount.characteristics.strength,
				result: t.plan.strength,
				rider: t.rider.characteristics.strength,
				rule: "Rider"
			},
			{
				field: "Toughness",
				mount: t.mount.characteristics.toughness,
				result: t.plan.toughness,
				rider: t.rider.characteristics.toughness,
				rule: "Higher"
			},
			{
				field: "Initiative",
				mount: t.mount.characteristics.initiative,
				result: t.plan.initiative,
				rider: t.rider.characteristics.initiative,
				rule: "Higher"
			},
			{
				field: "Movement",
				mount: t.mount.movement,
				result: t.plan.movement,
				rider: t.rider.movement,
				rule: "Mount"
			},
			{
				field: "Wounds",
				mount: t.mount.wounds,
				result: t.plan.wounds,
				rider: t.rider.wounds,
				rule: "Higher + 25% lower"
			},
			{
				field: "Size",
				mount: NI[t.mount.size],
				result: NI[t.plan.size],
				rider: NI[t.rider.size],
				rule: "Larger"
			}
		]);
		function a(e) {
			return e.fixedDamage === null ? e.outputName : `${e.outputName} (fixed Damage ${e.fixedDamage})`;
		}
		return (t, o) => (P(), F(N, null, [R(KM, {
			description: "This preview uses the Actors' current prepared values. The build recalculates after applying the rider's Career advances.",
			number: "2",
			title: "Combined Profile Preview"
		}, {
			default: A(() => [L("div", WI, [L("table", GI, [o[0] ||= L("thead", null, [L("tr", null, [
				L("th", null, "Field"),
				L("th", null, "Rider"),
				L("th", null, "Mount"),
				L("th", null, "Combined"),
				L("th", null, "Rule")
			])], -1), L("tbody", null, [(P(!0), F(N, null, M(i.value, (e) => (P(), F("tr", { key: e.field }, [
				L("th", null, D(e.field), 1),
				L("td", null, D(e.rider), 1),
				L("td", null, D(e.mount), 1),
				L("td", null, D(e.result), 1),
				L("td", null, D(e.rule), 1)
			]))), 128))])])]), L("p", KI, " Charge attacks gain +" + D(e.plan.chargeStrengthBonus) + " Damage from the mount's Strength Bonus. The combined profile also gains at least Armour (1). ", 1)]),
			_: 1
		}), R(KM, {
			description: "Mount attack damage is frozen before the traits are copied to the rider.",
			number: "3",
			title: "Mount Traits"
		}, {
			default: A(() => [
				L("div", qI, [(P(!0), F(N, null, M(n.value, (e) => (P(), F("span", {
					key: e.sourceUuid,
					class: "dui-badge dui-badge-sm"
				}, D(a(e)), 1))), 128))]),
				n.value.length ? B("", !0) : (P(), F("p", JI, "The mount contributes no traits.")),
				r.value.length ? (P(), F("div", YI, [o[1] ||= L("p", null, [L("strong", null, "Removed or consolidated")], -1), (P(!0), F(N, null, M(r.value, (e) => (P(), F("p", {
					key: e.sourceUuid,
					class: "dui-alert dui-alert-warning"
				}, [L("strong", null, D(e.name) + ":", 1), z(" " + D(e.reason), 1)]))), 128))])) : B("", !0)
			]),
			_: 1
		})], 64));
	}
}), ZI = { class: "app:grid app:gap-3" }, QI = { class: "app:grid app:gap-3 md:app:grid-cols-2" }, $I = { class: "dui-fieldset" }, eL = ["for"], tL = ["id"], nL = { class: "dui-fieldset" }, rL = ["for"], iL = [
	"id",
	"disabled",
	"value"
], aL = ["value"], oL = {
	key: 0,
	class: "dui-card-actions"
}, sL = {
	key: 1,
	class: "dui-alert dui-alert-warning"
}, cL = {
	key: 2,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, lL = {
	key: 3,
	"aria-live": "polite",
	class: "dui-alert",
	role: "status"
}, uL = {
	key: 4,
	class: "dui-alert"
}, dL = {
	key: 0,
	class: "dui-avatar"
}, fL = { class: "app:size-16 app:shrink-0 app:rounded-lg" }, pL = ["src"], mL = /* @__PURE__ */ j({
	__name: "NpcBuilderMountTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = lM(), { baseActorCombatProfile: r, mountActorProfile: i, mountActors: a, selectedBaseActorUuid: o, selectedMountActorUuid: s } = uc(n), c = /* @__PURE__ */ O(""), l = /* @__PURE__ */ O(""), u = /* @__PURE__ */ O(!1), d = _r(), f = 0, p = V(() => {
			let e = c.value.trim().toLocaleLowerCase();
			return a.value.filter((t) => t.uuid !== o.value && (!e || t.name.toLocaleLowerCase().includes(e)));
		}), m = V(() => a.value.find((e) => e.uuid === s.value) ?? null), h = V(() => !r.value || !i.value ? null : PI(r.value, i.value));
		Zn(s, async (e) => {
			let r = ++f;
			if (l.value = "", !e) {
				n.hydrateMountActorProfile(null), u.value = !1;
				return;
			}
			if (e === o.value) {
				n.clearMountSelection(), l.value = "The rider and mount must be different Actors.";
				return;
			}
			u.value = !0;
			try {
				let i = await t.bridge.loadActorCombatProfile(e);
				r === f && n.hydrateMountActorProfile(i);
			} catch (e) {
				r === f && (n.hydrateMountActorProfile(null), l.value = UI(e));
			} finally {
				r === f && (u.value = !1);
			}
		}, { immediate: !0 });
		function g(e) {
			let t = e.target;
			n.selectMountActorUuid(t?.value ?? "");
		}
		async function _(e) {
			l.value = "";
			try {
				let r = await t.bridge.resolveActorDrop(e);
				if (r.uuid === o.value) throw Error("The rider and mount must be different Actors.");
				n.selectMountActor(r);
			} catch (e) {
				l.value = UI(e);
			}
		}
		return (e, t) => (P(), F("div", ZI, [
			t[5] ||= L("p", { class: "dui-alert dui-alert-info" }, " Mounts are optional. A selected mount is folded into one simplified NPC profile during build. ", -1),
			R(KM, {
				description: "Choose any world Actor as the mount. This selection does not create a live WFRP mount relationship.",
				number: "1",
				title: "Mount Actor"
			}, {
				default: A(() => [
					L("div", QI, [L("fieldset", $I, [
						t[2] ||= L("legend", { class: "dui-fieldset-legend" }, "Search mounts", -1),
						L("label", {
							class: "dui-label",
							for: `${k(d)}-filter`
						}, "Actor name", 8, eL),
						Wn(L("input", {
							id: `${k(d)}-filter`,
							"onUpdate:modelValue": t[0] ||= (e) => c.value = e,
							"aria-label": "Filter mount actors by name",
							class: "dui-input dui-input-sm",
							placeholder: "Filter world actors",
							type: "search"
						}, null, 8, tL), [[Ko, c.value]])
					]), L("fieldset", nL, [
						t[4] ||= L("legend", { class: "dui-fieldset-legend" }, "Selected mount", -1),
						L("label", {
							class: "dui-label",
							for: `${k(d)}-mount`
						}, "Mount statblock", 8, rL),
						L("select", {
							id: `${k(d)}-mount`,
							"aria-label": "Selected mount actor",
							class: "dui-select dui-select-sm",
							disabled: !k(o),
							value: k(s),
							onChange: g
						}, [t[3] ||= L("option", { value: "" }, "No combined mount", -1), (P(!0), F(N, null, M(p.value, (e) => (P(), F("option", {
							key: e.uuid,
							value: e.uuid
						}, D(e.name), 9, aL))), 128))], 40, iL)
					])]),
					R(db, {
						disabled: !k(o),
						description: "Drop a world Actor to use as the mount.",
						title: "Drop Mount Actor",
						variant: "compact",
						onDropData: _
					}, null, 8, ["disabled"]),
					k(s) ? (P(), F("div", oL, [L("button", {
						class: "dui-btn dui-btn-ghost dui-btn-sm",
						type: "button",
						onClick: t[1] ||= (...e) => k(n).clearMountSelection && k(n).clearMountSelection(...e)
					}, " Clear Mount ")])) : B("", !0),
					k(o) ? l.value ? (P(), F("p", cL, D(l.value), 1)) : u.value ? (P(), F("p", lL, " Loading mount profile... ")) : m.value && k(i) ? (P(), F("article", uL, [m.value.img ? (P(), F("div", dL, [L("div", fL, [L("img", {
						src: m.value.img,
						alt: "",
						class: "app:h-full app:w-full app:object-cover",
						height: "64",
						width: "64"
					}, null, 8, pL)])])) : B("", !0), L("div", null, [L("strong", null, D(m.value.name), 1), L("span", null, " Movement " + D(k(i).movement) + " | Wounds " + D(k(i).wounds) + " | " + D(k(NI)[k(i).size]), 1)])])) : B("", !0) : (P(), F("p", sL, " Choose the rider on the Build tab before selecting a mount. "))
				]),
				_: 1
			}),
			h.value && k(r) && k(i) ? (P(), I(XI, {
				key: 0,
				mount: k(i),
				plan: h.value,
				rider: k(r)
			}, null, 8, [
				"mount",
				"plan",
				"rider"
			])) : B("", !0)
		]));
	}
});
//#endregion
//#region src/functions/npc-builder/settings/portrait-search-status.ts
function hL(e) {
	return e ? e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down cache ready with ${e.digDownIndexedFileCount} indexed files.` : "Dig Down is active; its file cache is still building or unavailable." : "Dig Down is active, but its Deep File Search setting is disabled." : "Install and enable Dig Down to search local files for portrait suggestions." : "Checking Dig Down integration.";
}
//#endregion
//#region src/functions/npc-builder/settings/settings-payload.ts
function gL(e) {
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
function _L(e) {
	let t = lM(), { actorFolders: n, itemFolders: r, settings: i } = uc(t), a = /* @__PURE__ */ O(""), o = /* @__PURE__ */ O(""), s = /* @__PURE__ */ O(!1), c = /* @__PURE__ */ O(""), l = /* @__PURE__ */ O(null), u = /* @__PURE__ */ O(""), d = /* @__PURE__ */ O(""), f = V(() => l.value?.digDownActive ?? !0), p = V(() => hL(l.value));
	Zn(l, (e) => {
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
			await n.refresh(), n.setFolderUuid(r.uuid), t.hydrateSettings(await e.saveSettings(ne())), d.value = `Using folder "${r.name}".`;
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
			t.hydrateSettings(await e.saveSettings(ne())), t.hydrateQuickTraits(await e.importRecommendedQuickTraits(i.value)), d.value = "Recommended quick traits imported.";
		});
	}
	async function S() {
		await ee(async () => {
			t.hydrateSettings(await e.saveSettings(ne())), await te(), d.value = "Settings saved.";
		});
	}
	async function C() {
		await ee(async () => {
			t.hydrateSettings(await e.saveSettings(cj())), await te(), d.value = "Settings reset to defaults.";
		});
	}
	async function ee(e) {
		s.value = !0, o.value = "", d.value = "";
		try {
			await e();
		} catch (e) {
			o.value = vL(e);
		} finally {
			s.value = !1;
		}
	}
	async function te() {
		let [n, r] = await Promise.all([e.listBaseActors(i.value), e.listQuickTraits(i.value)]);
		t.hydrateBaseActors(n), t.hydrateQuickTraits(r);
	}
	function ne() {
		return gL({
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
function vL(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/FolderSetting.vue?vue&type=script&setup=true&lang.ts
var yL = { class: "dui-fieldset" }, bL = { class: "dui-fieldset-legend" }, xL = ["aria-label", "value"], SL = { value: "" }, CL = ["value"], wL = { class: "dui-fieldset" }, TL = ["aria-label", "value"], EL = { class: "dui-card-actions" }, DL = ["disabled"], OL = /* @__PURE__ */ j({
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
		return (t, a) => (P(), F("section", null, [
			L("fieldset", yL, [L("legend", bL, D(e.folderLabel), 1), L("select", {
				"aria-label": e.folderLabel,
				class: "dui-select dui-select-sm",
				value: e.selectedUuid,
				onChange: r
			}, [L("option", SL, D(e.defaultOptionLabel), 1), (P(!0), F(N, null, M(e.folders, (e) => (P(), F("option", {
				key: e.uuid,
				value: e.uuid
			}, D(e.name), 9, CL))), 128))], 40, xL)]),
			L("fieldset", wL, [a[1] ||= L("legend", { class: "dui-fieldset-legend" }, "Create or use by name", -1), L("input", {
				"aria-label": `Create or use ${e.folderLabel} by name`,
				class: "dui-input dui-input-sm",
				value: e.createName,
				placeholder: "Folder name",
				type: "text",
				onInput: i
			}, null, 40, TL)]),
			L("div", EL, [L("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.disabled || !e.createName.trim(),
				type: "button",
				onClick: a[0] ||= (e) => n("saveFolderName")
			}, D(e.buttonLabel ?? "Save Folder"), 9, DL)])
		]));
	}
}), kL = /* @__PURE__ */ j({
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
		return (t, r) => (P(), I(KM, {
			description: "Limit the source picker or choose where generated Actors are stored.",
			number: "1",
			title: "Actor Sources"
		}, {
			default: A(() => [R(OL, {
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
			]), R(OL, {
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
}), AL = {
	key: 0,
	class: "dui-label"
}, jL = ["checked"], ML = {
	key: 1,
	class: "dui-label"
}, NL = ["checked"], PL = {
	key: 2,
	class: "dui-label"
}, FL = ["checked"], IL = {
	key: 3,
	class: "dui-label"
}, LL = ["checked"], RL = {
	key: 4,
	class: "dui-label"
}, zL = ["checked"], BL = /* @__PURE__ */ j({
	__name: "BaseActorFeatureSettings",
	props: {
		allowCharacteristics: { type: Boolean },
		allowSkills: { type: Boolean },
		allowTalents: { type: Boolean },
		allowTraits: { type: Boolean },
		allowTrappings: { type: Boolean },
		showAdvancementFeatures: { type: Boolean },
		showTraitFeature: { type: Boolean },
		showTrappingFeature: { type: Boolean }
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
		return (t, i) => (P(), I(KM, {
			description: "Choose which base-only data is included in the editable draft.",
			title: "Base Actor Features"
		}, {
			default: A(() => [
				e.showAdvancementFeatures === !1 ? B("", !0) : (P(), F("label", AL, [L("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowCharacteristics,
					type: "checkbox",
					onChange: i[0] ||= (e) => n("allowCharacteristicsChange", r(e))
				}, null, 40, jL), i[5] ||= L("span", null, "Show base actor characteristics", -1)])),
				e.showAdvancementFeatures === !1 ? B("", !0) : (P(), F("label", ML, [L("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowSkills,
					type: "checkbox",
					onChange: i[1] ||= (e) => n("allowSkillsChange", r(e))
				}, null, 40, NL), i[6] ||= L("span", null, "Show base actor skills", -1)])),
				e.showAdvancementFeatures === !1 ? B("", !0) : (P(), F("label", PL, [L("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTalents,
					type: "checkbox",
					onChange: i[2] ||= (e) => n("allowTalentsChange", r(e))
				}, null, 40, FL), i[7] ||= L("span", null, "Show base actor talents", -1)])),
				e.showTrappingFeature ? (P(), F("label", IL, [L("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTrappings,
					type: "checkbox",
					onChange: i[3] ||= (e) => n("allowTrappingsChange", r(e))
				}, null, 40, LL), i[8] ||= L("span", null, "Show base actor trappings", -1)])) : B("", !0),
				e.showTraitFeature === !1 ? B("", !0) : (P(), F("label", RL, [L("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTraits,
					type: "checkbox",
					onChange: i[4] ||= (e) => n("allowTraitsChange", r(e))
				}, null, 40, zL), i[9] ||= L("span", null, "Show base actor traits", -1)]))
			]),
			_: 1
		}));
	}
}), VL = { class: "dui-label" }, HL = ["checked"], UL = /* @__PURE__ */ j({
	__name: "MagicSpellSettings",
	props: { autoSelectGrantedSpells: { type: Boolean } },
	emits: ["autoSelectGrantedSpellsChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("autoSelectGrantedSpellsChange", !!t?.checked);
		}
		return (t, n) => (P(), I(KM, {
			number: "6",
			title: "Magic and Spells"
		}, {
			default: A(() => [L("label", VL, [L("input", {
				class: "dui-toggle dui-toggle-sm",
				checked: e.autoSelectGrantedSpells,
				type: "checkbox",
				onChange: r
			}, null, 40, HL), n[0] ||= L("span", null, "Select detected Lore spells by default", -1)])]),
			_: 1
		}));
	}
}), WL = { class: "dui-label" }, GL = ["checked"], KL = /* @__PURE__ */ j({
	__name: "NamingSettings",
	props: { includeSpeciesInName: { type: Boolean } },
	emits: ["includeSpeciesInNameChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("includeSpeciesInNameChange", !!t?.checked);
		}
		return (t, n) => (P(), I(KM, {
			number: "3",
			title: "Default Naming"
		}, {
			default: A(() => [L("label", WL, [L("input", {
				class: "dui-toggle dui-toggle-sm",
				checked: e.includeSpeciesInName,
				type: "checkbox",
				onChange: r
			}, null, 40, GL), n[0] ||= L("span", null, "Include species in suggested names", -1)])]),
			_: 1
		}));
	}
}), qL = { class: "dui-fieldset" }, JL = ["value"], YL = { class: "dui-label" }, XL = ["checked"], ZL = /* @__PURE__ */ j({
	__name: "OtherSettingsPanel",
	props: {
		askForLinkedSkillSpecializations: { type: Boolean },
		lowerCareerMode: {}
	},
	emits: ["askForLinkedSkillSpecializationsChange", "lowerCareerModeChange"],
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
		return (t, n) => (P(), I(KM, { title: "Career Resolution" }, {
			default: A(() => [L("fieldset", qL, [n[1] ||= L("legend", { class: "dui-fieldset-legend" }, "Lower career handling", -1), L("select", {
				"aria-label": "Lower career handling",
				class: "dui-select dui-select-sm",
				value: e.lowerCareerMode,
				onChange: r
			}, [...n[0] ||= [
				L("option", { value: "prompt" }, "Prompt when candidates are found", -1),
				L("option", { value: "auto-add-all" }, "Automatically add all lower-tier matches", -1),
				L("option", { value: "never" }, "Only add dropped careers", -1)
			]], 40, JL)]), L("label", YL, [L("input", {
				class: "dui-toggle dui-toggle-sm",
				checked: e.askForLinkedSkillSpecializations,
				type: "checkbox",
				onChange: i
			}, null, 40, XL), n[2] ||= L("span", null, "Resolve linked career skill repeats separately", -1)])]),
			_: 1
		}));
	}
}), QL = { class: "dui-label" }, $L = ["checked", "disabled"], eR = {
	"aria-live": "polite",
	class: "dui-alert",
	role: "status"
}, tR = { class: "dui-label" }, nR = ["checked"], rR = { class: "dui-label" }, iR = ["checked"], aR = /* @__PURE__ */ j({
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
		return (t, n) => (P(), I(KM, {
			description: "Choose which local Foundry sources can suggest portraits.",
			number: "4",
			title: "Portrait Suggestions"
		}, {
			default: A(() => [
				L("label", QL, [L("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchFoundryPortraitAssets,
					disabled: !e.canUseDigDownPortraitSearch,
					type: "checkbox",
					onChange: r
				}, null, 40, $L), n[0] ||= L("span", null, "Search Dig Down's file cache for portrait suggestions", -1)]),
				L("p", eR, D(e.statusLabel), 1),
				L("label", tR, [L("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchCompendiumPortraitAssets,
					type: "checkbox",
					onChange: i
				}, null, 40, nR), n[1] ||= L("span", null, "Search Actor and Item compendiums for portrait suggestions", -1)]),
				L("label", rR, [L("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchWebPortraitAssets,
					disabled: "",
					type: "checkbox"
				}, null, 8, iR), n[2] ||= L("span", null, "Search the web for portrait suggestions (later)", -1)])
			]),
			_: 1
		}));
	}
}), oR = { class: "dui-card-actions" }, sR = ["disabled"], cR = /* @__PURE__ */ j({
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
		return (t, r) => (P(), I(KM, {
			description: "Items in this folder become one-click Trait choices on the Build tab.",
			number: "2",
			title: "Quick Traits"
		}, {
			default: A(() => [R(OL, {
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
			]), L("div", oR, [L("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isBusy || !e.quickTraitFolderUuid,
				type: "button",
				onClick: r[3] ||= (e) => n("importRecommendedQuickTraits")
			}, " Import Recommended Quick Traits ", 8, sR)])]),
			_: 1
		}));
	}
}), lR = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, uR = {
	key: 1,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, dR = /* @__PURE__ */ j({
	__name: "SettingsMessages",
	props: {
		errorMessage: {},
		settingsMessage: {}
	},
	setup(e) {
		return (t, n) => e.errorMessage ? (P(), F("p", lR, D(e.errorMessage), 1)) : e.settingsMessage ? (P(), F("p", uR, D(e.settingsMessage), 1)) : B("", !0);
	}
}), fR = { class: "app:grid app:gap-3" }, pR = { class: "app:grid app:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] app:gap-3" }, mR = { class: "dui-card-actions" }, hR = ["disabled"], gR = ["disabled"], _R = /* @__PURE__ */ j({
	__name: "NpcBuilderSettingsTab",
	props: {
		bridge: {},
		page: {}
	},
	setup(e) {
		let { actorFolders: t, baseActorFolderName: n, canUseDigDownPortraitSearch: r, errorMessage: i, importRecommendedQuickTraits: a, isBusy: o, itemFolders: s, outputActorFolderName: c, portraitSearchStatusLabel: l, quickTraitFolderName: u, refreshPortraitSearchAvailability: d, resetSettingsToDefaults: f, saveBaseActorFolderName: p, saveOutputActorFolderName: m, saveQuickTraitFolderName: h, saveSettings: g, settings: _, settingsMessage: v } = _L(e.bridge);
		return Mr(() => {
			d();
		}), (d, y) => (P(), F("section", fR, [
			R(dR, {
				"error-message": k(i),
				"settings-message": k(v)
			}, null, 8, ["error-message", "settings-message"]),
			L("div", pR, [
				e.page === "settings-folders" ? (P(), I(kL, {
					key: 0,
					class: "app:col-span-full",
					"actor-folders": k(t),
					"base-actor-folder-name": k(n),
					"base-actor-folder-uuid": k(_).baseActorFolderUuid,
					"is-busy": k(o),
					"output-actor-folder-name": k(c),
					"output-actor-folder-uuid": k(_).outputActorFolderUuid,
					onBaseActorFolderNameChange: y[0] ||= (e) => n.value = e,
					onBaseActorFolderUuidChange: y[1] ||= (e) => k(_).baseActorFolderUuid = e,
					onOutputActorFolderNameChange: y[2] ||= (e) => c.value = e,
					onOutputActorFolderUuidChange: y[3] ||= (e) => k(_).outputActorFolderUuid = e,
					onSaveBaseActorFolderName: k(p),
					onSaveOutputActorFolderName: k(m)
				}, null, 8, [
					"actor-folders",
					"base-actor-folder-name",
					"base-actor-folder-uuid",
					"is-busy",
					"output-actor-folder-name",
					"output-actor-folder-uuid",
					"onSaveBaseActorFolderName",
					"onSaveOutputActorFolderName"
				])) : B("", !0),
				e.page === "settings-folders" ? (P(), I(cR, {
					key: 1,
					"is-busy": k(o),
					"item-folders": k(s),
					"quick-trait-folder-name": k(u),
					"quick-trait-folder-uuid": k(_).quickTraitFolderUuid,
					onImportRecommendedQuickTraits: k(a),
					onQuickTraitFolderNameChange: y[4] ||= (e) => u.value = e,
					onQuickTraitFolderUuidChange: y[5] ||= (e) => k(_).quickTraitFolderUuid = e,
					onSaveQuickTraitFolderName: k(h)
				}, null, 8, [
					"is-busy",
					"item-folders",
					"quick-trait-folder-name",
					"quick-trait-folder-uuid",
					"onImportRecommendedQuickTraits",
					"onSaveQuickTraitFolderName"
				])) : B("", !0),
				e.page === "settings-suggestions" ? (P(), I(KL, {
					key: 2,
					"include-species-in-name": k(_).includeSpeciesInName,
					onIncludeSpeciesInNameChange: y[6] ||= (e) => k(_).includeSpeciesInName = e
				}, null, 8, ["include-species-in-name"])) : B("", !0),
				e.page === "settings-suggestions" ? (P(), I(aR, {
					key: 3,
					"can-use-dig-down-portrait-search": k(r),
					"search-compendium-portrait-assets": k(_).searchCompendiumPortraitAssets,
					"search-foundry-portrait-assets": k(_).searchFoundryPortraitAssets,
					"search-web-portrait-assets": k(_).searchWebPortraitAssets,
					"status-label": k(l),
					onSearchCompendiumPortraitAssetsChange: y[7] ||= (e) => k(_).searchCompendiumPortraitAssets = e,
					onSearchFoundryPortraitAssetsChange: y[8] ||= (e) => k(_).searchFoundryPortraitAssets = e
				}, null, 8, [
					"can-use-dig-down-portrait-search",
					"search-compendium-portrait-assets",
					"search-foundry-portrait-assets",
					"search-web-portrait-assets",
					"status-label"
				])) : B("", !0),
				e.page === "settings-advancement" ? (P(), I(BL, {
					key: 4,
					"allow-characteristics": k(_).allowBaseActorCharacteristics,
					"allow-skills": k(_).allowBaseActorSkills,
					"allow-talents": k(_).allowBaseActorTalents,
					"allow-traits": k(_).allowBaseActorTraits,
					"allow-trappings": k(_).allowBaseActorTrappings,
					"show-trapping-feature": !1,
					onAllowCharacteristicsChange: y[9] ||= (e) => k(_).allowBaseActorCharacteristics = e,
					onAllowSkillsChange: y[10] ||= (e) => k(_).allowBaseActorSkills = e,
					onAllowTalentsChange: y[11] ||= (e) => k(_).allowBaseActorTalents = e,
					onAllowTraitsChange: y[12] ||= (e) => k(_).allowBaseActorTraits = e,
					onAllowTrappingsChange: y[13] ||= (e) => k(_).allowBaseActorTrappings = e
				}, null, 8, [
					"allow-characteristics",
					"allow-skills",
					"allow-talents",
					"allow-traits",
					"allow-trappings"
				])) : B("", !0),
				e.page === "settings-resolution" ? (P(), I(UL, {
					key: 5,
					"auto-select-granted-spells": k(_).autoSelectGrantedSpells,
					onAutoSelectGrantedSpellsChange: y[14] ||= (e) => k(_).autoSelectGrantedSpells = e
				}, null, 8, ["auto-select-granted-spells"])) : B("", !0),
				e.page === "settings-resolution" ? (P(), I(BL, {
					key: 6,
					"allow-characteristics": k(_).allowBaseActorCharacteristics,
					"allow-skills": k(_).allowBaseActorSkills,
					"allow-talents": k(_).allowBaseActorTalents,
					"allow-traits": k(_).allowBaseActorTraits,
					"allow-trappings": k(_).allowBaseActorTrappings,
					"show-advancement-features": !1,
					"show-trait-feature": !1,
					"show-trapping-feature": "",
					onAllowCharacteristicsChange: y[15] ||= (e) => k(_).allowBaseActorCharacteristics = e,
					onAllowSkillsChange: y[16] ||= (e) => k(_).allowBaseActorSkills = e,
					onAllowTalentsChange: y[17] ||= (e) => k(_).allowBaseActorTalents = e,
					onAllowTraitsChange: y[18] ||= (e) => k(_).allowBaseActorTraits = e,
					onAllowTrappingsChange: y[19] ||= (e) => k(_).allowBaseActorTrappings = e
				}, null, 8, [
					"allow-characteristics",
					"allow-skills",
					"allow-talents",
					"allow-traits",
					"allow-trappings"
				])) : B("", !0),
				e.page === "settings-resolution" ? (P(), I(ZL, {
					key: 7,
					class: "app:col-span-full",
					"ask-for-linked-skill-specializations": k(_).askForLinkedSkillSpecializations,
					"lower-career-mode": k(_).lowerCareerMode,
					onAskForLinkedSkillSpecializationsChange: y[20] ||= (e) => k(_).askForLinkedSkillSpecializations = e,
					onLowerCareerModeChange: y[21] ||= (e) => k(_).lowerCareerMode = e
				}, null, 8, ["ask-for-linked-skill-specializations", "lower-career-mode"])) : B("", !0)
			]),
			L("div", mR, [L("button", {
				class: "dui-btn dui-btn-primary dui-btn-sm",
				disabled: k(o),
				type: "button",
				onClick: y[22] ||= (...e) => k(g) && k(g)(...e)
			}, " Save Settings ", 8, hR), L("button", {
				class: "dui-btn dui-btn-sm",
				disabled: k(o),
				type: "button",
				onClick: y[23] ||= (...e) => k(f) && k(f)(...e)
			}, " Reset to Defaults ", 8, gR)])
		]));
	}
});
//#endregion
//#region src/functions/npc-builder/magic-lore-resolution.ts
function vR(e) {
	return e.map((e) => `${e.kind}:${e.sourceName}:${e.rawLore}`).sort().join("|");
}
function yR(e) {
	return e.filter((e) => e.isAmbiguous);
}
function bR(e, t) {
	return { rows: yR(e).map((e) => ({
		grantLabel: SR(e),
		options: yj(e, t),
		rawLore: e.rawLore,
		resolutionKey: e.resolutionKey,
		selectedLore: "",
		sourceLabel: CR(e)
	})) };
}
function xR(e) {
	return e.kind === "arcane-magic" ? "Arcane Magic" : e.kind === "petty-magic" ? "Petty Magic" : "Spellcaster";
}
function SR(e) {
	return `${xR(e)} from ${e.sourceName}`;
}
function CR(e) {
	return e.source === "talent" ? "Talent" : "Trait";
}
//#endregion
//#region src/state/npc-builder/workflows/spells-workflow.ts
function wR(e) {
	let t = lM(), { magicGrants: n, spells: r, selectedSpells: i } = uc(t), a = /* @__PURE__ */ O(""), o = /* @__PURE__ */ O(!1), s = /* @__PURE__ */ O(!1), c = /* @__PURE__ */ O([]), l = /* @__PURE__ */ O(null), u = 0, d = V(() => yR(n.value)), f = V(() => n.value.length - d.value.length);
	Zn(() => vR(n.value), () => {
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
			u === r && (a.value = TR(e));
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
				a.value = TR(e);
			} finally {
				o.value = !1;
			}
		}
	}
	async function g() {
		a.value = "", await h(), l.value = bR(n.value, c.value);
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
			a.value = TR(e);
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
function TR(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that spell action.";
}
//#endregion
//#region src/view/apps/npc-builder/components/MagicLoreResolutionPromptContent.vue?vue&type=script&setup=true&lang.ts
var ER = { class: "dui-card-body" }, DR = { class: "dui-card-title" }, OR = { class: "dui-fieldset" }, kR = ["onUpdate:modelValue", "aria-label"], AR = ["value"], jR = { class: "dui-card-actions" }, MR = /* @__PURE__ */ j({
	__name: "MagicLoreResolutionPromptContent",
	props: { prompt: {} },
	emits: ["applyLores", "keepUnresolved"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (P(), F("section", null, [
			r[4] ||= L("p", null, " Choose concrete magic Lores for ambiguous grants before automatic spells are detected. Unresolved grants can still use manually dropped spells. ", -1),
			(P(!0), F(N, null, M(e.prompt.rows, (e) => (P(), F("section", {
				key: e.resolutionKey,
				class: "dui-card dui-card-border dui-card-sm"
			}, [L("div", ER, [
				L("h3", DR, D(e.grantLabel), 1),
				L("span", null, D(e.sourceLabel) + " - " + D(e.rawLore || "Any Lore"), 1),
				L("fieldset", OR, [r[3] ||= L("legend", { class: "dui-fieldset-legend" }, "Lore", -1), Wn(L("select", {
					"onUpdate:modelValue": (t) => e.selectedLore = t,
					"aria-label": `Lore for ${e.grantLabel}`,
					class: "dui-select dui-select-sm"
				}, [r[2] ||= L("option", { value: "" }, "Leave unresolved", -1), (P(!0), F(N, null, M(e.options, (e) => (P(), F("option", {
					key: e.key,
					value: e.value
				}, D(e.label) + D(e.wind && e.wind !== "None" ? ` (${e.wind})` : ""), 9, AR))), 128))], 8, kR), [[qo, e.selectedLore]])])
			])]))), 128)),
			L("div", jR, [L("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: r[0] ||= (e) => n("keepUnresolved")
			}, " Keep Unresolved "), L("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: r[1] ||= (e) => n("applyLores")
			}, " Apply Lores ")])
		]));
	}
}), NR = {
	key: 0,
	class: "dui-alert"
}, PR = {
	key: 1,
	class: "dui-list"
}, FR = { class: "dui-list-col-grow" }, IR = { key: 0 }, LR = { key: 1 }, RR = {
	key: 2,
	class: "dui-card-actions"
}, zR = ["disabled"], BR = /* @__PURE__ */ j({
	__name: "MagicAccessPanel",
	props: {
		ambiguousGrantCount: {},
		isLoadingLoreOptions: { type: Boolean },
		magicGrants: {}
	},
	emits: ["resolveLores"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (P(), I(KM, {
			description: "Magic Talents and Traits determine which spell Lores are available.",
			number: "1",
			title: "Magic Access"
		}, {
			default: A(() => [e.magicGrants.length ? (P(), F("ul", PR, [(P(!0), F(N, null, M(e.magicGrants, (e) => (P(), F("li", {
				key: `${e.source}:${e.sourceName}:${e.rawLore}`,
				class: "dui-list-row"
			}, [L("div", FR, [
				L("strong", null, D(k(xR)(e)), 1),
				L("span", null, D(k(CR)(e)) + " - " + D(e.sourceName), 1),
				e.isAmbiguous ? (P(), F("small", IR, " Needs Lore resolution before automatic spells can be found. ")) : (P(), F("small", LR, " Lore: " + D(e.rawLore || e.normalizedLore), 1))
			])]))), 128))])) : (P(), F("p", NR, " No magic-enabling Talent or Trait is selected. ")), e.ambiguousGrantCount ? (P(), F("div", RR, [L("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isLoadingLoreOptions,
				type: "button",
				onClick: r[0] ||= (e) => n("resolveLores")
			}, D(e.isLoadingLoreOptions ? "Loading Lores..." : "Resolve Lores"), 9, zR)])) : B("", !0)]),
			_: 1
		}));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/labels.ts
function VR(e) {
	return e.source === "custom" ? "Dropped" : e.sourceLabel;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/SpellSelectionPanel.vue?vue&type=script&setup=true&lang.ts
var HR = { class: "dui-card-actions" }, UR = ["disabled"], WR = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, GR = {
	key: 1,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, KR = {
	key: 2,
	class: "dui-list"
}, qR = [
	"aria-label",
	"checked",
	"onChange"
], JR = { class: "dui-list-col-grow" }, YR = {
	key: 0,
	class: "dui-avatar"
}, XR = ["src"], ZR = ["onClick"], QR = {
	key: 3,
	class: "dui-alert"
}, $R = /* @__PURE__ */ j({
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
		return (t, r) => (P(), I(KM, {
			description: "Select detected Lore spells or drop specific Spell Items.",
			number: "2",
			title: "Spells"
		}, {
			default: A(() => [
				R(db, {
					description: "Add a specific Spell item regardless of detected Lores.",
					title: "Drop Spell Items",
					onDropData: r[0] ||= (e) => n("spellDrop", e)
				}),
				L("div", HR, [L("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.isLoadingSpells || !e.resolvedGrantCount,
					type: "button",
					onClick: r[1] ||= (e) => n("refreshSpells")
				}, D(e.isLoadingSpells ? "Finding spells..." : "Refresh Spells"), 9, UR), L("span", null, D(e.selectedSpellCount) + " selected / " + D(e.spells.length) + " found", 1)]),
				e.errorMessage ? (P(), F("p", WR, D(e.errorMessage), 1)) : B("", !0),
				e.ambiguousGrantCount ? (P(), F("p", GR, D(e.ambiguousGrantCount) + " magic grant" + D(e.ambiguousGrantCount === 1 ? "" : "s") + " still need Lore resolution. You can still drop specific spells for now. ", 1)) : B("", !0),
				e.spells.length ? (P(), F("ul", KR, [(P(!0), F(N, null, M(e.spells, (e) => (P(), F("li", {
					key: e.key,
					class: "dui-list-row"
				}, [
					L("input", {
						"aria-label": `Use ${e.name}`,
						class: "dui-checkbox dui-checkbox-sm",
						checked: e.selected,
						type: "checkbox",
						onChange: (t) => n("spellSelectedChange", e, t)
					}, null, 40, qR),
					L("div", JR, [
						e.img ? (P(), F("div", YR, [L("div", null, [L("img", {
							src: e.img,
							alt: ""
						}, null, 8, XR)])])) : B("", !0),
						L("strong", null, D(e.name), 1),
						L("span", null, D(e.loreName || "Unknown Lore") + " · " + D(k(VR)(e)), 1)
					]),
					e.source === "custom" ? (P(), F("button", {
						key: 0,
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: (t) => n("removeCustomSpell", e.key)
					}, " Remove ", 8, ZR)) : B("", !0)
				]))), 128))])) : (P(), F("p", QR, " No matching spells found yet. Drop specific spells here, or resolve a non-ambiguous magic Lore. "))
			]),
			_: 1
		}));
	}
}), ez = /* @__PURE__ */ j({
	__name: "NpcBuilderSpellsTab",
	props: { bridge: {} },
	setup(e) {
		let { ambiguousGrants: t, confirmMagicLorePrompt: n, dismissMagicLorePrompt: r, errorMessage: i, handleSpellDrop: a, initialize: o, isLoadingLoreOptions: s, isLoadingSpells: c, loadDetectedSpells: l, magicGrants: u, openMagicLorePrompt: d, pendingMagicLorePrompt: f, removeCustomSpell: p, resolvedGrantCount: m, selectedSpells: h, setSpellSelected: g, spells: _ } = wR(e.bridge);
		Mr(() => {
			o();
		});
		function v(e, t) {
			let n = t.target;
			n && g(e.key, n.checked);
		}
		return (e, o) => (P(), F("section", null, [
			R(_M, {
				open: k(f) !== null,
				title: "Resolve Magic Lores",
				onClose: k(r)
			}, {
				default: A(() => [k(f) ? (P(), I(MR, {
					key: 0,
					prompt: k(f),
					onApplyLores: k(n),
					onKeepUnresolved: k(r)
				}, null, 8, [
					"prompt",
					"onApplyLores",
					"onKeepUnresolved"
				])) : B("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			R(BR, {
				"ambiguous-grant-count": k(t).length,
				"is-loading-lore-options": k(s),
				"magic-grants": k(u),
				onResolveLores: k(d)
			}, null, 8, [
				"ambiguous-grant-count",
				"is-loading-lore-options",
				"magic-grants",
				"onResolveLores"
			]),
			o[0] ||= L("div", { class: "dui-divider" }, null, -1),
			R($R, {
				"ambiguous-grant-count": k(t).length,
				"error-message": k(i),
				"is-loading-spells": k(c),
				"resolved-grant-count": k(m),
				"selected-spell-count": k(h).length,
				spells: k(_),
				onRefreshSpells: k(l),
				onRemoveCustomSpell: k(p),
				onSpellDrop: k(a),
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
}), tz = { class: "dui-collapse-title" }, nz = { class: "dui-badge" }, rz = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, iz = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, az = { class: "dui-collapse-content" }, oz = { class: "dui-fieldset" }, sz = { class: "dui-fieldset-legend" }, cz = [
	"aria-label",
	"value",
	"onInput"
], lz = {
	key: 0,
	class: "dui-fieldset"
}, uz = [
	"aria-label",
	"value",
	"onChange"
], dz = ["value"], fz = {
	key: 1,
	class: "dui-fieldset"
}, pz = [
	"aria-label",
	"value",
	"onInput"
], mz = ["onClick"], hz = {
	key: 0,
	class: "dui-alert"
}, gz = /* @__PURE__ */ j({
	__name: "NpcBuilderTraitsTab",
	props: { difficultyOptions: {} },
	setup(e) {
		let t = lM(), { traits: n } = uc(t);
		function r(e) {
			return e.source === "base" ? "Base" : e.source === "quick" ? "Quick" : e.source === "optional" ? "Optional" : "Custom";
		}
		function i(e) {
			if (e.source === "base") {
				t.setBaseTraitIgnored(e.key, !0);
				return;
			}
			t.removeCustomTrait(e.key);
		}
		function a(e, n, r) {
			let i = r.target;
			i && t.setTraitConfig(e.key, { [n]: i.value });
		}
		return (t, o) => (P(), I(KM, {
			description: "Open a Trait to review its WFRP configuration before building.",
			title: "Traits"
		}, {
			default: A(() => [(P(!0), F(N, null, M(k(n), (t) => (P(), F("details", {
				key: t.key,
				class: "dui-collapse dui-collapse-arrow dui-card-border"
			}, [L("summary", tz, [
				L("strong", null, D(t.name), 1),
				L("span", nz, D(r(t)), 1),
				t.config.rollable ? (P(), F("span", rz, "Rollable")) : B("", !0),
				t.config.damage ? (P(), F("span", iz, "Damage")) : B("", !0)
			]), L("div", az, [
				L("fieldset", oz, [L("legend", sz, D(t.config.damage ? "Damage" : "Specification"), 1), L("input", {
					"aria-label": `${t.config.damage ? "Damage" : "Specification"} for ${t.name}`,
					class: "dui-input dui-input-sm",
					value: t.config.specification,
					placeholder: "None",
					type: "text",
					onInput: (e) => a(t, "specification", e)
				}, null, 40, cz)]),
				t.config.rollable && !t.config.damage ? (P(), F("fieldset", lz, [o[0] ||= L("legend", { class: "dui-fieldset-legend" }, "Difficulty", -1), L("select", {
					"aria-label": `Difficulty for ${t.name}`,
					class: "dui-select dui-select-sm",
					value: t.config.defaultDifficulty,
					onChange: (e) => a(t, "defaultDifficulty", e)
				}, [(P(!0), F(N, null, M(e.difficultyOptions, (e) => (P(), F("option", {
					key: e.value,
					value: e.value
				}, D(e.label), 9, dz))), 128))], 40, uz)])) : B("", !0),
				t.config.damage && t.config.dice ? (P(), F("fieldset", fz, [o[1] ||= L("legend", { class: "dui-fieldset-legend" }, "Dice", -1), L("input", {
					"aria-label": `Dice for ${t.name}`,
					class: "dui-input dui-input-sm",
					value: t.config.dice,
					placeholder: "Optional",
					type: "text",
					onInput: (e) => a(t, "dice", e)
				}, null, 40, pz)])) : B("", !0),
				L("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: (e) => i(t)
				}, "Remove", 8, mz)
			])]))), 128)), k(n).length ? B("", !0) : (P(), F("p", hz, "No traits are selected yet."))]),
			_: 1
		}));
	}
}), _z = "__blank-item__";
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/resolution-labels.ts
function vz(e) {
	return e.source === "base" ? "Base" : e.source === "career" ? "Career" : "Custom";
}
function yz(e) {
	return e.resolution.status === "matched" ? `Matched ${e.resolution.selectedName}` : e.resolution.status === "fallback" ? `Blank ${e.resolution.selectedName || e.name}` : e.resolution.candidates.length ? "Choose a match" : "Needs resolution";
}
function bz(e) {
	return e.ignored ? "Ignored" : e.resolution.status === "matched" ? "Matched" : e.resolution.status === "fallback" ? "Blank item" : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? "Choose" : "Needs resolution";
}
function xz(e) {
	let t = "dui-badge";
	return e.ignored ? [t, "dui-badge-ghost"] : e.resolution.status === "matched" ? [t, "dui-badge-success"] : e.resolution.status === "fallback" ? [t, "dui-badge-info"] : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? [t, "dui-badge-warning"] : [t, "dui-badge-error"];
}
function Sz(e) {
	return e.resolution.status === "fallback" ? _z : e.resolution.selectedCandidateUuid;
}
function Cz(e) {
	return e.source === "career";
}
function wz(e) {
	return e.resolution.candidates.length > 0 || Cz(e);
}
function Tz(e) {
	return e.resolution.searchTerms.length <= 1 ? "" : `Options: ${e.resolution.searchTerms.join(" / ")}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/TrappingsTable.vue?vue&type=script&setup=true&lang.ts
var Ez = {
	key: 0,
	class: "dui-list"
}, Dz = [
	"aria-label",
	"checked",
	"onChange"
], Oz = { class: "dui-list-col-grow app:grid app:gap-2" }, kz = { key: 0 }, Az = {
	key: 1,
	class: "dui-fieldset"
}, jz = [
	"aria-label",
	"value",
	"onChange"
], Mz = {
	key: 0,
	value: ""
}, Nz = ["value"], Pz = ["value"], Fz = { key: 2 }, Iz = { class: "dui-card-actions" }, Lz = { class: "dui-fieldset" }, Rz = [
	"aria-label",
	"value",
	"onInput"
], zz = ["onClick"], Bz = {
	key: 1,
	class: "dui-alert"
}, Vz = /* @__PURE__ */ j({
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
		return (t, r) => e.trappings.length ? (P(), F("ul", Ez, [(P(!0), F(N, null, M(e.trappings, (e) => (P(), F("li", {
			key: e.key,
			class: "dui-list-row"
		}, [L("input", {
			"aria-label": `Use ${e.name}`,
			class: "dui-checkbox dui-checkbox-sm",
			checked: !e.ignored,
			type: "checkbox",
			onChange: (t) => n("useChange", e.key, t)
		}, null, 40, Dz), L("div", Oz, [
			L("strong", null, D(e.name), 1),
			L("span", null, D(e.resolution.selectedItemType || e.itemType || "trapping") + " · " + D(k(vz)(e)), 1),
			k(Tz)(e) ? (P(), F("span", kz, D(k(Tz)(e)), 1)) : B("", !0),
			L("span", { class: E(k(xz)(e)) }, D(k(bz)(e)), 3),
			k(wz)(e) ? (P(), F("fieldset", Az, [r[0] ||= L("legend", { class: "dui-fieldset-legend" }, "Resolution", -1), L("select", {
				"aria-label": `Resolution for ${e.name}`,
				class: "dui-select dui-select-sm",
				value: k(Sz)(e),
				onChange: (t) => n("resolutionChange", e.key, t)
			}, [
				e.resolution.candidates.length ? (P(), F("option", Mz, "Choose match")) : B("", !0),
				(P(!0), F(N, null, M(e.resolution.candidates, (e) => (P(), F("option", {
					key: e.uuid,
					value: e.uuid
				}, D(e.name) + " (" + D(e.sourceLabel) + ") ", 9, Nz))), 128)),
				k(Cz)(e) ? (P(), F("option", {
					key: 1,
					value: k(_z)
				}, " Blank Item ", 8, Pz)) : B("", !0)
			], 40, jz)])) : (P(), F("span", Fz, D(k(yz)(e)), 1)),
			L("div", Iz, [L("fieldset", Lz, [r[1] ||= L("legend", { class: "dui-fieldset-legend" }, "Quantity", -1), L("input", {
				"aria-label": `Quantity for ${e.name}`,
				class: "dui-input dui-input-sm",
				value: e.quantity,
				min: "1",
				type: "number",
				onInput: (t) => n("quantityInput", e.key, t)
			}, null, 40, Rz)]), e.source === "custom" ? (P(), F("button", {
				key: 0,
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: (t) => n("removeCustomTrapping", e.key)
			}, " Remove ", 8, zz)) : B("", !0)])
		])]))), 128))])) : (P(), F("p", Bz, "No trappings are selected yet."));
	}
}), Hz = { class: "dui-card-actions" }, Uz = ["disabled"], Wz = { key: 0 }, Gz = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, Kz = /* @__PURE__ */ j({
	__name: "NpcBuilderTrappingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = lM(), { trappings: r } = uc(n), i = /* @__PURE__ */ O(""), a = /* @__PURE__ */ O(!1), o = V(() => r.value.filter((e) => !e.ignored && e.resolution.status === "unresolved"));
		Mr(() => {
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
					i.value = d(e);
				} finally {
					a.value = !1;
				}
			}
		}
		function d(e) {
			return e instanceof Error ? e.message : "The NPC Builder could not resolve that Trapping drop.";
		}
		return (e, t) => (P(), I(KM, {
			description: "Review the Items that will be embedded in the generated NPC.",
			title: "Trappings"
		}, {
			default: A(() => [
				L("div", Hz, [L("button", {
					class: "dui-btn dui-btn-sm",
					disabled: a.value || !o.value.length,
					type: "button",
					onClick: u
				}, D(a.value ? "Resolving..." : "Resolve Trappings"), 9, Uz), o.value.length ? (P(), F("span", Wz, D(o.value.length) + " unresolved ", 1)) : B("", !0)]),
				i.value ? (P(), F("p", Gz, D(i.value), 1)) : B("", !0),
				R(Vz, {
					trappings: k(r),
					onQuantityInput: s,
					onRemoveCustomTrapping: k(n).removeCustomTrapping,
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
function qz(e, t) {
	let n = /* @__PURE__ */ new Map(), r = [], i = [];
	for (let a of e) {
		let e = /* @__PURE__ */ new Map();
		for (let o of Mk(a.career.uuid, a.career.grants.skills)) {
			let s = jk(o.originalName);
			if (!s) continue;
			let c = Nk(o.originalName), l = n.get(c) ?? [], u = e.get(c) ?? 0, d = t.enableLinkedSkillResolution && l[u] ? l[u] : "";
			if (e.set(c, u + 1), d) {
				r.push({
					linkedFromKey: d,
					resolutionKey: o.resolutionKey
				});
				continue;
			}
			i.push({
				alreadyGrantedSpecializations: Qz(a.career.grants.skills, s.baseName),
				baseName: s.baseName,
				careerLabel: $z(a.career),
				isLoadingSuggestions: !1,
				occurrence: o.occurrence,
				options: s.options,
				originalName: s.originalName,
				resolvedSpecialization: eB(s),
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
function Jz(e) {
	return e.resolvedSpecialization.trim() ? kk(e.baseName, e.resolvedSpecialization) : "";
}
function Yz(e) {
	return e.occurrence > 0 ? `${e.originalName}, choice ${e.occurrence + 1}` : e.originalName;
}
function Xz(e) {
	return e.options.length <= 1 && e.specialization.trim().toLocaleLowerCase() === "any";
}
function Zz(e, t) {
	let n = Nk(t);
	return e.alreadyGrantedSpecializations.some((e) => Nk(e) === n);
}
function Qz(e, t) {
	let n = Nk(t), r = /* @__PURE__ */ new Set(), i = [];
	for (let t of e) {
		let e = Ak(t);
		if (!e || Nk(e.baseName) !== n) continue;
		let a = Nk(e.specialization);
		r.has(a) || (r.add(a), i.push(e.specialization));
	}
	return i;
}
function $z(e) {
	return e.level === null ? e.name : `${e.name}, tier ${e.level}`;
}
function eB(e) {
	return e.specialization.trim().toLocaleLowerCase() === "any" ? "" : e.options[0] ?? "";
}
//#endregion
//#region src/view/apps/npc-builder/components/SkillResolutionPromptContent.vue?vue&type=script&setup=true&lang.ts
var tB = { class: "dui-card-body" }, nB = { class: "dui-card-title" }, rB = { class: "dui-badge" }, iB = { class: "dui-fieldset" }, aB = { class: "app:grid app:gap-1" }, oB = ["onUpdate:modelValue", "aria-label"], sB = ["value"], cB = [
	"onUpdate:modelValue",
	"aria-label",
	"placeholder"
], lB = {
	key: 0,
	class: "dui-label app:text-error"
}, uB = {
	key: 0,
	class: "dui-card-actions"
}, dB = { key: 0 }, fB = ["onClick"], pB = {
	key: 0,
	class: "dui-badge dui-badge-error dui-badge-xs"
}, mB = {
	key: 0,
	class: "dui-alert dui-alert-info"
}, hB = { class: "dui-card-actions" }, gB = /* @__PURE__ */ j({
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
			return !!e.resolvedSpecialization && Zz(e, e.resolvedSpecialization);
		}
		return (t, i) => (P(), F("section", null, [
			i[5] ||= L("p", null, " Some Career skills need a specialization before they become concrete WFRP skills. Blank rows can be left unresolved and edited later. ", -1),
			(P(!0), F(N, null, M(e.prompt.rows, (t) => (P(), F("section", {
				key: t.resolutionKey,
				class: "dui-card dui-card-border dui-card-sm"
			}, [L("div", tB, [
				L("h3", nB, D(e.getSkillResolutionLabel(t)), 1),
				L("span", rB, D(t.careerLabel), 1),
				L("fieldset", iB, [
					i[4] ||= L("legend", { class: "dui-fieldset-legend" }, "Specialization", -1),
					L("label", aB, [i[3] ||= L("span", { class: "dui-label" }, "Choice", -1), t.options.length > 1 ? Wn((P(), F("select", {
						key: 0,
						"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
						"aria-label": `Specialization for ${e.getSkillResolutionLabel(t)}`,
						class: E(["dui-select dui-select-sm", { "dui-select-error": k(Zz)(t, t.resolvedSpecialization) }])
					}, [i[2] ||= L("option", { value: "" }, "Leave unresolved", -1), (P(!0), F(N, null, M(t.options, (e) => (P(), F("option", {
						key: e,
						class: E({ "app:text-error": k(Zz)(t, e) }),
						value: e
					}, D(e) + D(k(Zz)(t, e) ? " — already granted" : ""), 11, sB))), 128))], 10, oB)), [[qo, t.resolvedSpecialization]]) : Wn((P(), F("input", {
						key: 1,
						"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
						"aria-label": `Specialization for ${e.getSkillResolutionLabel(t)}`,
						class: E(["dui-input dui-input-sm", { "dui-input-error": k(Zz)(t, t.resolvedSpecialization) }]),
						placeholder: t.suggestedSpecializations.length ? "Type or choose below" : t.specialization,
						type: "text"
					}, null, 10, cB)), [[Ko, t.resolvedSpecialization]])]),
					r(t) ? (P(), F("p", lB, " Already granted by this Career. ")) : B("", !0)
				]),
				e.usesFreeformSkillSpecialization(t) ? (P(), F("div", uB, [t.isLoadingSuggestions ? (P(), F("small", dB, "Finding known choices.")) : B("", !0), (P(!0), F(N, null, M(t.suggestedSpecializations, (e) => (P(), F("button", {
					key: `${t.resolutionKey}:${e}`,
					class: E(["dui-btn dui-btn-sm", { "dui-btn-error dui-btn-outline": k(Zz)(t, e) }]),
					type: "button",
					onClick: (r) => n("chooseSkillSpecialization", t, e)
				}, [z(D(e) + " ", 1), k(Zz)(t, e) ? (P(), F("span", pB, " Already granted ")) : B("", !0)], 10, fB))), 128))])) : B("", !0)
			])]))), 128)),
			e.prompt.linkedRows.length ? (P(), F("div", mB, D(e.prompt.linkedRows.length) + " linked skill specialization" + D(e.prompt.linkedRows.length === 1 ? "" : "s") + " will reuse earlier choices from this career chain. ", 1)) : B("", !0),
			L("div", hB, [L("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: i[0] ||= (e) => n("addWithoutResolving")
			}, " Add Without Resolving "), L("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: i[1] ||= (e) => n("applySpecializations")
			}, " Apply Specializations ")])
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/types.ts
function _B(e) {
	return e === "build-actor" || e === "build-careers" || e === "build-quick";
}
function vB(e) {
	return e === "settings-advancement" || e === "settings-folders" || e === "settings-resolution" || e === "settings-suggestions";
}
function yB(e) {
	return e === "automatic-xp" || e === "detail-characteristics" || e === "detail-skills" || e === "detail-talents";
}
function bB(e) {
	return {
		"automatic-xp": "Automatic XP Advancement",
		"build-actor": "Choose Actor",
		"build-careers": "Queue Careers",
		"build-quick": "Quick Build",
		"detail-characteristics": "Characteristics",
		"detail-skills": "Skills",
		"detail-spells": "Spells",
		"detail-talents": "Talents",
		mount: "Combined Profile",
		"settings-advancement": "Advancement Settings",
		"settings-folders": "Folder Settings",
		"settings-resolution": "Resolution Settings",
		"settings-suggestions": "Suggestion Settings",
		traits: "Traits",
		trappings: "Trappings"
	}[e];
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/NpcBuilderMegaMenuContent.vue?vue&type=script&setup=true&lang.ts
var xB = ["aria-current", "onClick"], SB = ["aria-current", "popovertarget"], CB = ["id"], wB = ["onClick"], TB = /* @__PURE__ */ j({
	__name: "NpcBuilderMegaMenuContent",
	props: {
		activePage: {},
		groups: {}
	},
	emits: ["pageSelect"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (P(), F(N, null, [r[0] ||= L("span", { class: "dui-megamenu-active" }, null, -1), (P(!0), F(N, null, M(e.groups, (t) => (P(), F(N, { key: t.key }, ["page" in t ? (P(), F("button", {
			key: 0,
			"aria-current": t.isActive ? "page" : void 0,
			type: "button",
			onClick: (e) => n("pageSelect", t.page, e)
		}, D(t.label), 9, xB)) : (P(), F(N, { key: 1 }, [L("button", {
			"aria-current": t.isActive ? "page" : void 0,
			popovertarget: t.popoverId,
			type: "button"
		}, D(t.label), 9, SB), L("div", {
			id: t.popoverId,
			popover: ""
		}, [L("ul", { class: E(["dui-menu app:min-w-56 app:p-2", t.columnsClass]) }, [(P(!0), F(N, null, M(t.pages, (t) => (P(), F("li", { key: t.page }, [L("button", {
			class: E({ "dui-menu-active": e.activePage === t.page }),
			type: "button",
			onClick: (e) => n("pageSelect", t.page, e)
		}, D(k(bB)(t.page)), 11, wB)]))), 128))], 2)], 8, CB)], 64))], 64))), 128))], 64));
	}
}), EB = { class: "dui-navbar app:sticky app:top-0 app:z-20 app:flex-wrap app:gap-2 app:bg-base-200 app:px-3 app:py-2" }, DB = { class: "dui-navbar-start app:min-w-64 app:flex-1" }, OB = { class: "app:min-w-0" }, kB = { class: "app:text-base-content/70" }, AB = {
	"aria-label": "NPC Builder pages",
	class: "app:order-3 app:flex app:w-full app:flex-wrap app:items-center app:justify-start app:gap-2"
}, jB = {
	id: "npc-builder-megamenu",
	class: "dui-megamenu max-sm:dui-megamenu-vertical dui-megamenu-sm app:ml-0 app:mr-auto app:border app:border-base-300 app:bg-base-100 app:p-2",
	popover: ""
}, MB = { class: "dui-navbar-end app:w-auto app:shrink-0" }, NB = ["disabled"], PB = /* @__PURE__ */ j({
	__name: "NpcBuilderMegaMenu",
	props: {
		activePage: {},
		canBuild: { type: Boolean },
		finalActorName: {},
		hasSpellPage: { type: Boolean },
		selectedBaseActorName: {}
	},
	emits: ["buildNpc", "pageChange"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = [
			{
				page: "build-quick",
				summary: "Actor, one Career chain, quick Traits"
			},
			{
				page: "build-actor",
				summary: "Base Actor selection and summary"
			},
			{
				page: "build-careers",
				summary: "Ordered Career queue"
			}
		], a = [
			{
				page: "detail-characteristics",
				summary: "Characteristic totals and advances"
			},
			{
				page: "detail-skills",
				summary: "Skill advances and specializations"
			},
			{
				page: "detail-talents",
				summary: "Talent ranks and maximums"
			},
			{
				page: "traits",
				summary: "Creature and NPC Trait tuning"
			},
			{
				page: "trappings",
				summary: "Equipment resolution and quantities"
			},
			{
				page: "mount",
				summary: "Combined rider and mount profile"
			}
		], o = {
			page: "detail-spells",
			summary: "Magic grants and dropped spells"
		}, s = [
			{
				page: "settings-folders",
				summary: "Base, output, and source folders"
			},
			{
				page: "settings-suggestions",
				summary: "Names and portrait suggestions"
			},
			{
				page: "settings-resolution",
				summary: "Career, trapping, and magic defaults"
			},
			{
				page: "settings-advancement",
				summary: "Base Actor advancement inclusion"
			}
		], c = V(() => [
			{
				columnsClass: "",
				isActive: n.activePage.startsWith("build-"),
				key: "build",
				label: "Build NPC",
				pages: i,
				popoverId: "npc-builder-megamenu-build"
			},
			{
				columnsClass: "",
				isActive: n.activePage.startsWith("detail-") || n.activePage === "traits" || n.activePage === "trappings" || n.activePage === "mount",
				key: "detailed",
				label: "Detailed Build",
				pages: n.hasSpellPage ? [...a, o] : a,
				popoverId: "npc-builder-megamenu-detailed"
			},
			{
				isActive: n.activePage === "automatic-xp",
				key: "automatic-xp",
				label: "Automatic XP Advancement",
				page: "automatic-xp"
			},
			{
				columnsClass: "",
				isActive: n.activePage.startsWith("settings-"),
				key: "settings",
				label: "Settings",
				pages: s,
				popoverId: "npc-builder-megamenu-settings"
			}
		]);
		function l(e, t) {
			r("pageChange", e), u(t.currentTarget);
		}
		function u(e) {
			e instanceof HTMLElement && (d(e.closest("[popover]")), d(e.closest(".dui-megamenu")));
		}
		function d(e) {
			e instanceof HTMLElement && e.matches(":popover-open") && e.hidePopover();
		}
		return (t, n) => (P(), F("header", EB, [
			L("div", DB, [L("div", OB, [
				n[1] ||= L("span", { class: "dui-badge dui-badge-outline" }, "WFRP4e Customizer", -1),
				n[2] ||= L("h1", { class: "app:m-0 app:text-xl app:leading-tight" }, "NPC Builder", -1),
				L("small", kB, [e.selectedBaseActorName ? (P(), F(N, { key: 0 }, [z(D(e.selectedBaseActorName) + " base · " + D(e.finalActorName), 1)], 64)) : (P(), F(N, { key: 1 }, [z("Choose a base character, then shape the final NPC.")], 64))])
			])]),
			L("nav", AB, [n[3] ||= L("button", {
				"aria-label": "Open NPC Builder navigation",
				class: "dui-btn dui-btn-sm sm:app:hidden",
				popovertarget: "npc-builder-megamenu",
				type: "button"
			}, " Menu ", -1), L("div", jB, [R(TB, {
				"active-page": e.activePage,
				groups: c.value,
				onPageSelect: l
			}, null, 8, ["active-page", "groups"])])]),
			L("div", MB, [L("button", {
				class: "dui-btn dui-btn-primary",
				disabled: !e.canBuild,
				type: "button",
				onClick: n[0] ||= (e) => r("buildNpc")
			}, " Build NPC ", 8, NB)])
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderApplicationDrop.ts
function FB(e, t, n, r) {
	let i = lM(), a = /* @__PURE__ */ O(!1);
	function o(e) {
		IB(e) || (e.preventDefault(), a.value = !0);
	}
	function s(e) {
		if (IB(e)) return;
		let t = e.currentTarget, n = e.relatedTarget;
		t instanceof Node && n instanceof Node && t.contains(n) || (a.value = !1);
	}
	function c(e) {
		IB(e) || (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "copy"));
	}
	async function l(o) {
		if (!IB(o)) {
			o.preventDefault(), a.value = !1, r.value = "";
			try {
				let r = await e.resolveApplicationDrop(o.dataTransfer?.getData("text/plain") ?? "");
				r.kind === "actor" ? i.selectBaseActor(r.actor) : r.kind === "career" ? await n(r.career, { replaceQueue: t.value === "build-quick" }) : r.kind === "advancement" ? i.addCustomAdvancement(r.advancement) : r.kind === "trapping" ? i.addCustomTrapping(r.trapping) : r.kind === "trait" ? i.addCustomTrait(r.trait) : i.addCustomSpell(r.spell);
			} catch (e) {
				r.value = UI(e);
			}
		}
	}
	return {
		handleApplicationDragEnter: o,
		handleApplicationDragLeave: s,
		handleApplicationDragOver: c,
		handleApplicationDrop: l,
		isApplicationDragOver: a
	};
}
function IB(e) {
	let t = e.dataTransfer, n = t?.getData("text/plain") ?? "", r = Array.from(t?.types ?? []);
	return n.startsWith("npc-builder-career:") || XA(n) !== null || r.includes("application/x-wfrp4e-customizer-portrait-filter-tag");
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderBuild.ts
function LB(e, t, n, r, i) {
	let a = lM(), { advancements: o, buildTraits: s, careers: c, finalActorName: l, finalPortraitPath: u, selectedMountActorUuid: d, selectedBaseActor: f, selectedSpells: p, settings: m, trappings: h } = uc(a), g = /* @__PURE__ */ O(!1), _ = V(() => !!(f.value && c.value.length && !g.value && !i.value));
	async function v() {
		if (!f.value || !c.value.length) return;
		g.value = !0, r.value = "", n.value = "Building actor from the selected draft.";
		let i = {
			actorName: l.value,
			advancements: o.value,
			baseActorUuid: f.value.uuid,
			careers: c.value,
			mountActorUuid: d.value,
			portraitPath: u.value,
			settings: m.value,
			spells: p.value,
			traits: s.value,
			trappings: h.value
		};
		try {
			n.value = `Created ${(await e.buildNpc(i)).name}.`, a.resetDraft(), t.value = "build-quick";
		} catch (e) {
			r.value = UI(e), n.value = "";
		} finally {
			g.value = !1;
		}
	}
	return {
		buildNpc: v,
		canBuild: _,
		isBusy: g
	};
}
//#endregion
//#region src/functions/npc-builder/career-workflow/lower-careers.ts
function RB(e) {
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
function zB(e) {
	return [{
		career: e,
		mode: "add-or-increment"
	}];
}
function BB(e) {
	return [...e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).map((e) => ({
		career: e,
		mode: "add-if-missing"
	})), {
		career: e.droppedCareer,
		mode: "add-or-increment"
	}];
}
function VB(e) {
	let t = e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).length;
	return t === 0 ? "" : `Added ${t} lower-tier career candidate${t === 1 ? "" : "s"}.`;
}
function HB(e, t) {
	return e?.selectedUuids.includes(t) ?? !1;
}
function UB(e) {
	let { candidateUuid: t, isAlreadyQueued: n, prompt: r, selected: i } = e;
	return !r || n ? null : i ? [...new Set([...r.selectedUuids, t])] : r.selectedUuids.filter((e) => e !== t);
}
//#endregion
//#region src/state/npc-builder/workflows/skill-suggestions.ts
async function WB(e, t) {
	await Promise.all(t.rows.map(async (t) => {
		if (Xz(t)) {
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
function GB(e) {
	let t = lM(), { careers: n, settings: r } = uc(t), i = /* @__PURE__ */ O(""), a = /* @__PURE__ */ O(""), o = /* @__PURE__ */ O(!1), s = /* @__PURE__ */ O(null), c = /* @__PURE__ */ O(null), l = V(() => RB(s.value));
	async function u(t, n = {}) {
		a.value = "";
		try {
			await d(await e.resolveCareerDrop(t), n);
		} catch (e) {
			a.value = KB(e);
		}
	}
	async function d(e, n = {}) {
		if (n.replaceQueue && t.clearCareers(), r.value.lowerCareerMode === "never") {
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
		m(zB(e), {
			enableLinkedSkillResolution: !1,
			message: ""
		});
	}
	function m(t, n) {
		let r = qz(t, n);
		if (r.rows.length) {
			c.value = r, WB(e, c.value);
			return;
		}
		b(t, n.message);
	}
	function h() {
		let e = s.value;
		e && (s.value = null, m(BB(e), {
			enableLinkedSkillResolution: !r.value.askForLinkedSkillSpecializations,
			message: VB(e)
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
			for (let n of e.rows) t.setSkillGrantResolution(n.resolutionKey, Jz(n));
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
		return HB(s.value, e);
	}
	function C(e, t) {
		let n = UB({
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
		getSkillResolutionLabel: Yz,
		addCareerSummaryWithLowerCareerMode: d,
		handleCareerDrop: u,
		isCareerQueued: x,
		isFindingLowerCareers: o,
		isLowerCareerSelected: S,
		lowerCareerCandidateGroups: l,
		pendingLowerCareerPrompt: s,
		pendingSkillResolutionPrompt: c,
		setLowerCareerSelected: C,
		usesFreeformSkillSpecialization: Xz
	};
}
function KB(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderCareerDropWorkflow.ts
function qB(e) {
	return GB(e);
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderInitialData.ts
function JB(e, t) {
	let n = lM(), { selectedBaseActorUuid: r, selectedMountActorUuid: i, settings: a } = uc(n), o = /* @__PURE__ */ O(!1), s = /* @__PURE__ */ O(!1), c = /* @__PURE__ */ O([]);
	Mr(async () => {
		o.value = !0;
		try {
			let [t, r, i, a] = await Promise.all([
				e.loadSettings(),
				e.listActorFolders(),
				e.listItemFolders(),
				e.listTraitDifficultyOptions()
			]);
			n.hydrateSettings(t), n.hydrateActorFolders(r), n.hydrateItemFolders(i), c.value = a, await Promise.all([
				l(),
				d(),
				u()
			]);
		} catch (e) {
			t.value = UI(e);
		} finally {
			o.value = !1;
		}
	}), Zn(r, async (r) => {
		if (t.value = "", !r) {
			n.clearBaseDraftData(), n.hydrateBaseActorCombatProfile(null);
			return;
		}
		r === i.value && n.clearMountSelection(), n.hydrateBaseActorCombatProfile(null), s.value = !0;
		try {
			let [t, i] = await Promise.all([e.loadBaseActorDraftData(r), e.loadActorCombatProfile(r)]);
			n.hydrateBaseActorDraftData(t), n.hydrateBaseActorCombatProfile(i);
		} catch (e) {
			t.value = UI(e), n.clearBaseDraftData(), n.hydrateBaseActorCombatProfile(null);
		} finally {
			s.value = !1;
		}
	});
	async function l() {
		n.hydrateBaseActors(await e.listBaseActors(a.value));
	}
	async function u() {
		n.hydrateQuickTraits(await e.listQuickTraits(a.value));
	}
	async function d() {
		n.hydrateMountActors(await e.listMountActors());
	}
	return {
		isLoadingActors: o,
		isLoadingBaseDraft: s,
		refreshBaseActors: l,
		refreshMountActors: d,
		refreshQuickTraits: u,
		traitDifficultyOptions: c
	};
}
//#endregion
//#region src/functions/npc-builder/metadata-lookups.ts
function YB() {
	return {
		inFlightNames: [],
		successfulNames: []
	};
}
function XB(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) n.kind === "skill" && !n.characteristicKey && !jk(n.name) && t.add(n.name);
	return [...t];
}
function ZB(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) n.kind === "talent" && !n.talentMaximumKey && t.add(n.name);
	return [...t];
}
function QB(e, t) {
	let n = new Set([...t.inFlightNames, ...t.successfulNames]);
	return e.filter((e) => {
		let t = Nk(e);
		return n.has(t) ? !1 : (n.add(t), !0);
	});
}
function $B(e, t) {
	return {
		...e,
		inFlightNames: nV([...e.inFlightNames, ...t])
	};
}
function eV(e, t) {
	let n = new Set(nV(t));
	return {
		inFlightNames: e.inFlightNames.filter((e) => !n.has(e)),
		successfulNames: nV([...e.successfulNames, ...n])
	};
}
function tV(e, t) {
	let n = new Set(nV(t));
	return {
		...e,
		inFlightNames: e.inFlightNames.filter((e) => !n.has(e))
	};
}
function nV(e) {
	return [...new Set([...e].map(Nk).filter(Boolean))];
}
//#endregion
//#region src/state/npc-builder/workflows/metadata-lookups-workflow.ts
function rV(e) {
	let t = lM(), { advancements: n } = uc(t), r = /* @__PURE__ */ O(YB()), i = /* @__PURE__ */ O(YB()), a = /* @__PURE__ */ O(""), o = /* @__PURE__ */ O(""), s = V(() => XB(n.value)), c = V(() => ZB(n.value)), l = V(() => [a.value, o.value].filter(Boolean).join(" ")), u = V(() => l.value ? "degraded" : r.value.inFlightNames.length + i.value.inFlightNames.length > 0 ? "loading" : "ready");
	Zn(s, (e) => {
		d(e);
	}, { immediate: !0 }), Zn(c, (e) => {
		f(e);
	}, { immediate: !0 });
	async function d(n) {
		if (!n.length) {
			a.value = "";
			return;
		}
		let i = QB(n, r.value);
		if (i.length) {
			r.value = $B(r.value, i), a.value = "";
			try {
				let n = await e.listSkillCharacteristics(i);
				r.value = eV(r.value, i), t.hydrateSkillCharacteristics(n);
			} catch (e) {
				r.value = tV(r.value, i), a.value = iV("skill characteristics", e);
			}
		}
	}
	async function f(n) {
		if (!n.length) {
			o.value = "";
			return;
		}
		let r = QB(n, i.value);
		if (r.length) {
			i.value = $B(i.value, r), o.value = "";
			try {
				let n = await e.listTalentMaximums(r);
				i.value = eV(i.value, r), t.hydrateTalentMaximums(n);
			} catch (e) {
				i.value = tV(i.value, r), o.value = iV("Talent maximums", e);
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
function iV(e, t) {
	return `Could not load ${e}.${t instanceof Error ? ` ${t.message}` : ""}`;
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderMetadataLookups.ts
function aV(e) {
	return rV(e);
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp.vue?vue&type=script&setup=true&lang.ts
var oV = ["id", "aria-label"], sV = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, cV = {
	key: 1,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, lV = {
	key: 2,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, uV = {
	key: 3,
	"aria-live": "polite",
	class: "dui-alert dui-alert-warning",
	role: "status"
}, dV = /* @__PURE__ */ j({
	__name: "NpcBuilderApp",
	props: { bridge: {} },
	setup(e) {
		let t = e, { finalActorName: n, hasMagicAccess: r, selectedBaseActor: i, selectedSpells: a } = uc(lM()), o = /* @__PURE__ */ O("build-quick"), s = _r(), c = V(() => r.value || a.value.length > 0), { addCareerSummaryWithLowerCareerMode: l, buildMessage: u, chooseSkillSpecialization: d, confirmLowerCareerPrompt: f, confirmSkillResolutionPrompt: p, dismissLowerCareerPrompt: m, dismissSkillResolutionPrompt: h, errorMessage: g, getSkillResolutionLabel: _, isCareerQueued: v, isFindingLowerCareers: y, isLowerCareerSelected: b, lowerCareerCandidateGroups: x, pendingLowerCareerPrompt: S, pendingSkillResolutionPrompt: C, setLowerCareerSelected: ee, usesFreeformSkillSpecialization: te } = qB(t.bridge), { buildNpc: ne, canBuild: re } = LB(t.bridge, o, u, g, y), { isLoadingActors: ie, isLoadingBaseDraft: ae, traitDifficultyOptions: w } = JB(t.bridge, g), { metadataLookupError: oe, metadataLookupStatus: se, retryMetadataLookups: ce } = aV(t.bridge), { handleApplicationDragEnter: le, handleApplicationDragLeave: T, handleApplicationDragOver: ue, handleApplicationDrop: de, isApplicationDragOver: fe } = FB(t.bridge, o, l, g);
		return (e, r) => (P(), F("section", {
			"aria-label": "NPC Builder",
			class: E(["app:flex app:min-h-full app:flex-col", { "app:ring-2 app:ring-info": k(fe) }]),
			onDragenter: r[2] ||= (...e) => k(le) && k(le)(...e),
			onDragleave: r[3] ||= (...e) => k(T) && k(T)(...e),
			onDragover: r[4] ||= (...e) => k(ue) && k(ue)(...e),
			onDrop: r[5] ||= (...e) => k(de) && k(de)(...e)
		}, [
			R(PB, {
				"active-page": o.value,
				"can-build": k(re),
				"final-actor-name": k(n),
				"has-spell-page": c.value,
				"selected-base-actor-name": k(i)?.name ?? "",
				onBuildNpc: k(ne),
				onPageChange: r[0] ||= (e) => o.value = e
			}, null, 8, [
				"active-page",
				"can-build",
				"final-actor-name",
				"has-spell-page",
				"selected-base-actor-name",
				"onBuildNpc"
			]),
			R(_M, {
				open: k(S) !== null,
				title: "Add Lower-Tier Careers?",
				onClose: k(m)
			}, {
				default: A(() => [k(S) ? (P(), I(pM, {
					key: 0,
					"candidate-groups": k(x),
					"is-career-queued": k(v),
					"is-lower-career-selected": k(b),
					prompt: k(S),
					onAddDroppedOnly: k(m),
					onAddSelected: k(f),
					onLowerCareerSelected: k(ee)
				}, null, 8, [
					"candidate-groups",
					"is-career-queued",
					"is-lower-career-selected",
					"prompt",
					"onAddDroppedOnly",
					"onAddSelected",
					"onLowerCareerSelected"
				])) : B("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			R(_M, {
				open: k(C) !== null,
				title: "Resolve Skill Specializations",
				onClose: k(h)
			}, {
				default: A(() => [k(C) ? (P(), I(gB, {
					key: 0,
					"get-skill-resolution-label": k(_),
					prompt: k(C),
					"uses-freeform-skill-specialization": k(te),
					onAddWithoutResolving: k(h),
					onApplySpecializations: k(p),
					onChooseSkillSpecialization: k(d)
				}, null, 8, [
					"get-skill-resolution-label",
					"prompt",
					"uses-freeform-skill-specialization",
					"onAddWithoutResolving",
					"onApplySpecializations",
					"onChooseSkillSpecialization"
				])) : B("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			L("section", {
				id: `${k(s)}-panel`,
				"aria-label": k(bB)(o.value),
				class: "app:grid app:flex-1 app:content-start app:gap-3 app:p-3"
			}, [
				k(g) ? (P(), F("p", sV, D(k(g)), 1)) : k(u) ? (P(), F("p", cV, D(k(u)), 1)) : k(fe) ? (P(), F("p", lV, " Release to add this document to the NPC draft. ")) : B("", !0),
				k(se) === "degraded" ? (P(), F("div", uV, [
					L("span", null, D(k(oe)), 1),
					r[6] ||= L("span", null, "Advancement rows remain editable with reduced metadata.", -1),
					L("button", {
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: r[1] ||= (...e) => k(ce) && k(ce)(...e)
					}, " Retry Metadata ")
				])) : B("", !0),
				k(vB)(o.value) ? (P(), I(_R, {
					key: 4,
					bridge: t.bridge,
					page: o.value
				}, null, 8, ["bridge", "page"])) : k(yB)(o.value) ? (P(), I(EN, {
					key: 5,
					page: o.value
				}, null, 8, ["page"])) : o.value === "trappings" ? (P(), I(Kz, {
					key: 6,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : o.value === "traits" ? (P(), I(gz, {
					key: 7,
					"difficulty-options": k(w)
				}, null, 8, ["difficulty-options"])) : o.value === "detail-spells" ? (P(), I(ez, {
					key: 8,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : o.value === "mount" ? (P(), I(mL, {
					key: 9,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : k(_B)(o.value) ? (P(), I(bI, {
					key: 10,
					bridge: t.bridge,
					"is-loading-actors": k(ie),
					"is-loading-base-draft": k(ae),
					page: o.value
				}, null, 8, [
					"bridge",
					"is-loading-actors",
					"is-loading-base-draft",
					"page"
				])) : B("", !0)
			], 8, oV)
		], 34));
	}
});
//#endregion
//#region src/functions/npc-builder/extract-career-grants.ts
function fV(e) {
	return {
		characteristics: pV(e),
		skills: mV(e),
		talents: gV(e, [["talents", "value"], ["talents"]]),
		trappings: gV(e, [["trappings", "value"], ["trappings"]])
	};
}
function pV(e) {
	let t = gV(e, [["characteristics", "value"], ["characteristics"]]);
	if (t.length) return t.map(hV);
	let n = G(e, ["characteristics"]);
	if (!W(n)) return [];
	let r = [];
	for (let [e, t] of Object.entries(n)) t && r.push(hV(e));
	return vV(r);
}
function mV(e) {
	return gV(e, [["skills", "value"], ["skills"]], { preserveDuplicates: !0 });
}
function hV(e) {
	let t = e.trim().toLocaleLowerCase();
	if (Pc(t)) return Mc[t];
	let n = Nc[t];
	return n ? Mc[n] : e.trim();
}
function gV(e, t, n = {}) {
	for (let r of t) {
		let t = Wl(G(e, r));
		if (t.length) return n.preserveDuplicates ? _V(t) : vV(t);
	}
	return [];
}
function _V(e) {
	return e.map((e) => e.trim()).filter(Boolean);
}
function vV(e) {
	return [...new Set(_V(e))].sort((e, t) => e.localeCompare(t));
}
//#endregion
//#region src/module/wfrp4e/career-summary.ts
function yV(e) {
	return {
		careerGroup: bV(e),
		grants: fV(e.system),
		img: e.img ?? "",
		level: xV(e),
		name: e.name,
		uuid: e.uuid
	};
}
function bV(e) {
	return K(e.system, ["careergroup", "value"]);
}
function xV(e) {
	let t = G(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
//#endregion
//#region src/module/wfrp4e/career-index.ts
var SV = [
	"name",
	"type",
	"img",
	"system.careergroup.value",
	"system.characteristics",
	"system.level.value",
	"system.skills",
	"system.talents",
	"system.trappings"
], CV = /* @__PURE__ */ new Map(), wV = "idle", TV = null;
function EV() {
	return TV || (wV = "indexing", CV.clear(), TV = OV().then(() => {
		wV = "ready";
	}).catch((e) => {
		wV = "error", t("wfrp4e-customizer-apps | Career indexing failed.", e);
	}), TV);
}
async function DV(e) {
	return wV === "idle" && EV(), !e.careerGroup || e.level === null ? [] : [...CV.values()].filter((t) => NV(t, e)).sort(FV);
}
async function OV() {
	kV(), await ZD();
	for (let e of game.packs ?? []) {
		if (!JD(e) || !e.getIndex) continue;
		let t = await e.getIndex({ fields: SV });
		for (let n of XD(t)) {
			let t = AV(e, n);
			t && CV.set(t.uuid, t);
		}
		await ZD();
	}
}
function kV() {
	for (let e of game.items?.contents ?? []) e.type === "career" && CV.set(e.uuid, yV(e));
}
function AV(e, t) {
	let n = qD(e, t);
	if (t.type !== "career" || !t.name || !n) return null;
	let r = G(t, ["system"]);
	return {
		careerGroup: jV(t),
		grants: fV(r),
		img: t.img ?? "",
		level: MV(t),
		name: t.name,
		uuid: n
	};
}
function jV(e) {
	let t = G(e, [
		"system",
		"careergroup",
		"value"
	]);
	return typeof t == "string" ? t.trim() : "";
}
function MV(e) {
	let t = G(e, [
		"system",
		"level",
		"value"
	]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function NV(e, t) {
	return e.uuid !== t.uuid && e.level !== null && t.level !== null && e.level < t.level && PV(e.careerGroup) === PV(t.careerGroup);
}
function PV(e) {
	return e.trim().toLocaleLowerCase();
}
function FV(e, t) {
	let n = e.level ?? 0, r = t.level ?? 0;
	return n === r ? e.name.localeCompare(t.name) : n - r;
}
//#endregion
//#region src/module/wfrp4e/skill-specializations.ts
var IV = [
	"name",
	"type",
	"system.characteristic.value"
], LV = /* @__PURE__ */ new Map(), RV = /* @__PURE__ */ new Map(), zV = /* @__PURE__ */ new Map(), BV = "idle", VV = null;
async function HV(e) {
	let t = Nk(e);
	return t ? (BV === "idle" && WV(), VV && await VV, [...LV.get(t) ?? []].sort((e, t) => e.localeCompare(t))) : [];
}
async function UV(e) {
	return BV === "idle" && WV(), VV && await VV, e.flatMap((e) => {
		let t = XV(e);
		return t ? [{
			...t,
			skillName: e
		}] : [];
	});
}
function WV() {
	return VV || (BV = "indexing", LV.clear(), RV.clear(), zV.clear(), VV = GV().then(() => {
		BV = "ready";
	}).catch((e) => {
		BV = "error", t("wfrp4e-customizer-apps | Skill specialization indexing failed.", e);
	}), VV);
}
async function GV() {
	ZV(), await ZD();
	for (let e of game.packs ?? []) {
		if (!JD(e) || !e.getIndex) continue;
		let t = await e.getIndex({ fields: IV });
		for (let e of XD(t)) qV(e);
		await ZD();
	}
}
function KV(e) {
	if (e.type !== "skill") return;
	JV(e);
	let t = Ak(e.name);
	if (!t) return;
	let n = Nk(t.baseName), r = LV.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), LV.set(n, r);
}
function qV(e) {
	if (e.type !== "skill" || !e.name) return;
	YV(e);
	let t = Ak(e.name);
	if (!t) return;
	let n = Nk(t.baseName), r = LV.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), LV.set(n, r);
}
function JV(e) {
	let t = K(e.system, ["characteristic", "value"]);
	if (!Pc(t)) return;
	let n = {
		characteristicKey: t,
		characteristicName: Mc[t],
		skillName: e.name
	}, r = Nk(e.name), i = Nk(Ak(e.name)?.baseName ?? e.name);
	RV.set(r, n), zV.has(i) || zV.set(i, n);
}
function YV(e) {
	let t = K(e, [
		"system",
		"characteristic",
		"value"
	]);
	if (!Pc(t) || !e.name) return;
	let n = {
		characteristicKey: t,
		characteristicName: Mc[t],
		skillName: e.name
	}, r = Nk(e.name), i = Nk(Ak(e.name)?.baseName ?? e.name);
	RV.set(r, n), zV.has(i) || zV.set(i, n);
}
function XV(e) {
	let t = Nk(e), n = Nk(Ak(e)?.baseName ?? e);
	return RV.get(t) ?? zV.get(n) ?? null;
}
function ZV() {
	for (let e of game.items?.contents ?? []) KV(e);
}
//#endregion
//#region src/module/foundry/item-sources.ts
function QV(e, t) {
	return {
		img: "systems/wfrp4e/icons/blank.png",
		name: e,
		system: {},
		type: t
	};
}
function $V(e, t, n) {
	let r = e ? e.toObject() : QV(t, n);
	return delete r._id, r;
}
function eH(e, t, n) {
	return tH(e, t, n)[0] ?? null;
}
function tH(e, t, n) {
	return e.items?.contents.filter((e) => e.type === n && iH(e.name, t)) ?? [];
}
function nH(e, t, n) {
	return e.items?.contents.find((e) => t && e.uuid === t ? !0 : iH(e.name, n)) ?? null;
}
function rH(e, t) {
	return game.items?.contents.find((n) => t.includes(n.type) && iH(n.name, e)) ?? null;
}
function iH(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/wfrp4e/item-lookup.ts
async function aH(e, t) {
	return await game.wfrp4e?.utility?.findItem?.(e, t) || rH(e, t);
}
//#endregion
//#region src/module/wfrp4e/talent-maximums.ts
async function oH(e) {
	let t = [];
	for (let n of sH(e)) {
		let e = await aH(n, ["talent"]);
		e && t.push({
			maximumFormula: K(e.system, ["max", "formula"]),
			maximumKey: K(e.system, ["max", "value"]),
			talentName: n
		});
	}
	return t;
}
function sH(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/normalize-npc-builder-settings.ts
var cH = {
	...cj(),
	allowBaseActorCharacteristics: !0,
	allowBaseActorSkills: !0,
	allowBaseActorTalents: !0
};
function lH(e) {
	let t = cj();
	return dH(e) ? {
		allowBaseActorCharacteristics: fH(e.allowBaseActorCharacteristics, cH.allowBaseActorCharacteristics),
		allowBaseActorSkills: fH(e.allowBaseActorSkills, cH.allowBaseActorSkills),
		allowBaseActorTalents: fH(e.allowBaseActorTalents, cH.allowBaseActorTalents),
		allowBaseActorTraits: fH(e.allowBaseActorTraits, cH.allowBaseActorTraits),
		allowBaseActorTrappings: fH(e.allowBaseActorTrappings, cH.allowBaseActorTrappings),
		askForLinkedSkillSpecializations: fH(e.askForLinkedSkillSpecializations, cH.askForLinkedSkillSpecializations),
		autoSelectGrantedSpells: fH(e.autoSelectGrantedSpells, cH.autoSelectGrantedSpells),
		baseActorFolderUuid: pH(e.baseActorFolderUuid, cH.baseActorFolderUuid),
		includeSpeciesInName: fH(e.includeSpeciesInName, cH.includeSpeciesInName),
		lowerCareerMode: uH(e.lowerCareerMode) ? e.lowerCareerMode : cH.lowerCareerMode,
		outputActorFolderUuid: pH(e.outputActorFolderUuid, cH.outputActorFolderUuid),
		quickTraitFolderUuid: pH(e.quickTraitFolderUuid, cH.quickTraitFolderUuid),
		searchCompendiumPortraitAssets: fH(e.searchCompendiumPortraitAssets, cH.searchCompendiumPortraitAssets),
		searchFoundryPortraitAssets: fH(e.searchFoundryPortraitAssets, cH.searchFoundryPortraitAssets),
		searchWebPortraitAssets: fH(e.searchWebPortraitAssets, cH.searchWebPortraitAssets)
	} : t;
}
function uH(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
function dH(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function fH(e, t) {
	return typeof e == "boolean" ? e : t;
}
function pH(e, t) {
	return typeof e == "string" ? e : t;
}
//#endregion
//#region src/module/apps/npc-builder/settings.ts
var mH = HT({
	defaultValue: cj(),
	key: "npcBuilderSettings",
	name: "NPC Builder Settings",
	normalize: lH
});
function hH() {
	UT(mH);
}
function gH() {
	return WT(mH);
}
async function _H(e) {
	return await GT(mH, e);
}
//#endregion
//#region src/module/foundry/embedded-items.ts
function vH() {
	return {
		creates: [],
		deletes: [],
		updates: []
	};
}
async function yH(e, t) {
	t.deletes.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", t.deletes), t.updates.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", t.updates), t.creates.length && await e.createEmbeddedDocuments("Item", t.creates);
}
//#endregion
//#region src/module/apps/npc-builder/xp-source-values.ts
function bH(e, t) {
	return Vl(e, [[
		"characteristics",
		t,
		"initial",
		"value"
	], [
		"characteristics",
		t,
		"initial"
	]]) + Vl(e, [[
		"characteristics",
		t,
		"modifier",
		"value"
	], [
		"characteristics",
		t,
		"modifier"
	]]) + Vl(e, [[
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
async function xH(e, t) {
	let n = {}, r = vH();
	for (let i of t) {
		let t = Math.floor(i.current);
		if (i.kind === "talent") {
			await kH(e, i, t, r);
			continue;
		}
		let a = i.baseAdvances + t;
		if (i.kind === "characteristic") {
			if (t === 0) continue;
			OH(n, i, a);
			continue;
		}
		let o = eH(e, i.name, i.kind);
		if (t === 0 && !i.includedFromCustom && !o) continue;
		if (o) {
			r.updates.push({
				_id: o.id,
				"system.advances.value": a
			});
			continue;
		}
		let s = $V(await AH(i), i.name, i.kind);
		s.type = i.kind, Gl(s, [
			"system",
			"advances",
			"value"
		], a), r.creates.push(s);
	}
	Object.keys(n).length && await e.update(n), await yH(e, r);
}
function SH(e) {
	let t = e.toObject().system, n = Vl(t, [["advances", "value"], ["advances"]]);
	if (e.type === "talent") return {
		advances: Math.max(1, n),
		kind: "talent",
		name: e.name,
		sourceUuid: e.uuid,
		talentMaximumFormula: K(t, ["max", "formula"]),
		talentMaximumKey: K(t, ["max", "value"])
	};
	let r = DH(t), i = {
		advances: n,
		kind: "skill",
		name: e.name,
		sourceUuid: e.uuid
	};
	return r && (i.characteristicKey = r, i.characteristicName = Mc[r]), i;
}
function CH(e) {
	let t = e.toObject().system, n = [];
	for (let [e, r] of Object.entries(Mc)) {
		let i = Vl(t, [[
			"characteristics",
			e,
			"advances",
			"value"
		], [
			"characteristics",
			e,
			"advances"
		]]), a = Vl(t, [[
			"characteristics",
			e,
			"modifier",
			"value"
		], [
			"characteristics",
			e,
			"modifier"
		]]), o = Vl(t, [[
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
function wH(e, t) {
	return t === "talent" ? TH(e) : e.items?.contents.filter((e) => e.type === t).map((n) => EH(e, n, t)) ?? [];
}
function TH(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.items?.contents.filter((e) => e.type === "talent") ?? []) {
		let e = n.toObject().system, r = n.name.trim().toLocaleLowerCase(), i = Vl(e, [["advances", "value"], ["advances"]]), a = t.get(r);
		if (a) {
			a.baseAdvances += i, a.current += i;
			continue;
		}
		t.set(r, {
			baseAdvances: i,
			current: i,
			kind: "talent",
			name: n.name,
			talentMaximumFormula: K(e, ["max", "formula"]),
			talentMaximumKey: K(e, ["max", "value"])
		});
	}
	return [...t.values()];
}
function EH(e, t, n) {
	let r = t.toObject().system, i = Vl(r, [["advances", "value"], ["advances"]]);
	if (n === "talent") return {
		baseAdvances: i,
		current: i,
		kind: n,
		name: t.name,
		talentMaximumFormula: K(r, ["max", "formula"]),
		talentMaximumKey: K(r, ["max", "value"])
	};
	let a = Vl(r, [["modifier", "value"], ["modifier"]]), o = DH(r), s = {
		baseAdvances: i,
		baseModifier: a,
		current: (o ? bH(e.toObject().system, o) : 0) + i + a,
		kind: n,
		name: t.name
	};
	return o && (s.characteristicKey = o, s.characteristicName = Mc[o]), s;
}
function DH(e) {
	let t = K(e, ["characteristic", "value"]);
	return Pc(t) ? t : void 0;
}
function OH(e, t, n) {
	let r = Nc[t.name.trim().toLocaleLowerCase()];
	r && (e[`system.characteristics.${r}.advances`] = n);
}
async function kH(e, t, n, r) {
	let i = Math.max(0, t.baseAdvances + n), a = tH(e, t.name, "talent"), o = a[0] ?? await AH(t);
	r.deletes.push(...a.map((e) => e.id));
	for (let e = 0; e < i; e += 1) {
		let e = $V(o, t.name, "talent");
		e.type = "talent", Gl(e, [
			"system",
			"advances",
			"value"
		], 1), r.creates.push(e);
	}
}
async function AH(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		if (nD(t)) return t;
	}
	return aH(e.name, [e.kind]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/config.ts
function jH(e, t) {
	Gl(e, [
		"system",
		"specification",
		"value"
	], t.specification), t.rollable && !t.damage && Gl(e, [
		"system",
		"rollable",
		"defaultDifficulty"
	], t.defaultDifficulty), t.damage && t.dice && Gl(e, [
		"system",
		"rollable",
		"dice"
	], t.dice);
}
function MH(e, t) {
	return {
		_id: e,
		"system.specification.value": t.specification,
		...t.rollable && !t.damage ? { "system.rollable.defaultDifficulty": t.defaultDifficulty } : {},
		...t.damage && t.dice ? { "system.rollable.dice": t.dice } : {}
	};
}
function NH(e) {
	return {
		..._k(),
		attackType: LH(e.system, ["rollable", "attackType"]) || "melee",
		bonusCharacteristic: LH(e.system, ["rollable", "bonusCharacteristic"]),
		damage: Ul(e.system, [["rollable", "damage"]]),
		defaultDifficulty: LH(e.system, ["rollable", "defaultDifficulty"]) || "challenging",
		dice: LH(e.system, ["rollable", "dice"]),
		rollable: Ul(e.system, [["rollable", "value"]]),
		skill: LH(e.system, ["rollable", "skill"]),
		sl: Ul(e.system, [["rollable", "SL"]], !0),
		specification: LH(e.system, ["specification", "value"])
	};
}
function PH(e) {
	return IH(e.system);
}
function FH(e) {
	return IH(e.system);
}
function IH(e) {
	return Ul(e, [["disabled"], ["disabled", "value"]]);
}
function LH(e, t) {
	let n = G(e, t);
	return typeof n == "string" ? n.trim() : typeof n == "number" ? String(n) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/apply.ts
async function RH(e, t) {
	let n = vH();
	for (let r of t) {
		let t = r.source === "base" ? nH(e, r.sourceUuid, r.name) : eH(e, r.name, "trait");
		if (r.ignored) {
			t && n.deletes.push(t.id);
			continue;
		}
		if (t) {
			n.updates.push(MH(t.id, r.config));
			continue;
		}
		let i = $V(r.sourceUuid ? await zH(r.sourceUuid) : await aH(r.name, ["trait"]), r.name, "trait");
		i.type = "trait", Gl(i, ["system", "disabled"], !1), jH(i, r.config), n.creates.push(i);
	}
	await yH(e, n);
}
async function zH(e) {
	let t = await fromUuid(e);
	return nD(t) ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/actor-traits.ts
function BH(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !PH(e)).map(UH) ?? [];
}
function VH(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && PH(e)).map(UH) ?? [];
}
function HH(e) {
	Array.isArray(e.items) && (e.items = e.items.filter((e) => {
		if (typeof e != "object" || !e) return !0;
		let t = e;
		return t.type !== "trait" || !FH(t);
	}));
}
function UH(e) {
	return {
		config: NH(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/difficulty-options.ts
var WH = [
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
async function GH() {
	let e = G(game.wfrp4e?.config, ["difficultyLabels"]);
	if (!W(e)) return WH;
	let t = Object.entries(e).filter((e) => {
		let [t, n] = e;
		return !!t.trim() && typeof n == "string";
	}).map(([e, t]) => ({
		label: t,
		value: e
	}));
	return t.length ? t : WH;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/drops.ts
async function KH(e) {
	let t = oD(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Trait item here.");
	let n = aD(await fromUuid(t.uuid), "trait", "Drop a Foundry Trait item here.");
	return {
		config: NH(n),
		ignored: !1,
		key: `custom:${n.uuid}`,
		name: n.name,
		source: "custom",
		sourceUuid: n.uuid
	};
}
//#endregion
//#region src/functions/npc-builder/recommended-quick-traits.ts
var qH = [
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
async function JH(e) {
	return tU(await eU(e, "Actor"));
}
async function YH(e) {
	return tU(await eU(e, "Item"));
}
function XH() {
	return game.folders.contents.filter((e) => e.type === "Actor").map(tU).sort((e, t) => e.name.localeCompare(t.name));
}
function ZH() {
	return game.folders.contents.filter((e) => e.type === "Item").map(tU).sort((e, t) => e.name.localeCompare(t.name));
}
function QH(e) {
	return e ? game.folders.contents.find((t) => t.uuid === e) ?? null : null;
}
function $H(e) {
	let t = QH(e);
	return t?.type === "Item" ? t : null;
}
async function eU(e, t) {
	let n = e.trim();
	if (!n) throw Error("Enter a folder name first.");
	let r = game.folders.contents.find((e) => e.type === t && nU(e.name, n));
	if (r) return r;
	let i = await Folder.create({
		name: n,
		type: t
	});
	if (!i) throw Error("Foundry did not create the folder.");
	return i;
}
function tU(e) {
	return {
		name: e.name,
		uuid: e.uuid
	};
}
function nU(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/quick-traits.ts
async function rU(e) {
	let t = $H(e.quickTraitFolderUuid);
	if (!t) throw Error("Choose a Quick Traits item folder before importing traits.");
	let n = new Set(oU(e).map((e) => e.name.trim().toLocaleLowerCase()));
	for (let e of qH) {
		if (n.has(e.trim().toLocaleLowerCase())) continue;
		let r = $V(await aH(e, ["trait"]), e, "trait");
		r.folder = t.id, r.type = "trait", await Item.create(r);
	}
	return ui.notifications?.info("Imported recommended quick traits."), await iU(e);
}
async function iU(e) {
	return oU(e).map(sU).sort((e, t) => e.name.localeCompare(t.name));
}
function aU(e, t) {
	return t.quickTraitFolderUuid ? e.folder?.uuid === t.quickTraitFolderUuid : !1;
}
function oU(e) {
	return game.items?.contents.filter((t) => t.type === "trait" && aU(t, e)) ?? [];
}
function sU(e) {
	return {
		config: NH(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/trappings.ts
var cU = [
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
];
async function lU(e, t) {
	let n = vH();
	for (let r of t) {
		let t = r.source === "base" ? nH(e, r.sourceUuid, r.name) : null;
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
		let i = await hU(r), a = r.resolution.selectedItemType || r.itemType || "trapping", o = $V(i, r.resolution.selectedName || r.name, a);
		o.type = a || o.type || "trapping", Gl(o, [
			"system",
			"quantity",
			"value"
		], r.quantity), n.creates.push(o);
	}
	await yH(e, n);
}
async function uU(e) {
	return Gj(e, await gU());
}
async function dU(e) {
	let t = oD(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Item here.");
	let n = iD(await fromUuid(t.uuid), "Drop a Foundry Item here.");
	return {
		ignored: !1,
		itemType: n.type,
		key: `custom:${n.uuid}`,
		name: n.name,
		quantity: pU(n),
		resolution: Uj({
			itemType: n.type,
			name: n.name,
			uuid: n.uuid
		}),
		source: "custom",
		sourceUuid: n.uuid
	};
}
function fU(e) {
	let t = mU();
	return e.items?.contents.filter((e) => t.includes(e.type)).map((e) => ({
		itemType: e.type,
		name: e.name,
		quantity: pU(e),
		uuid: e.uuid
	})) ?? [];
}
function pU(e) {
	return Vl(e.system, [["quantity", "value"], ["quantity"]]) || 1;
}
function mU() {
	let e = Bl(game.wfrp4e?.config, ["trappingItems"]);
	return e.length ? e : cU;
}
async function hU(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		return nD(t) ? t : null;
	}
	if (e.resolution.selectedCandidateUuid) {
		let t = await fromUuid(e.resolution.selectedCandidateUuid);
		return nD(t) ? t : null;
	}
	return e.resolution.status === "fallback" ? null : await aH(e.resolution.selectedName || e.name, mU());
}
async function gU() {
	let e = [], t = mU();
	for (let n of game.items?.contents ?? []) t.includes(n.type) && e.push(vU(n, "World"));
	for (let n of game.packs ?? []) {
		if (!JD(n)) continue;
		let r = await _U(n, t);
		if (r.length) {
			e.push(...r);
			continue;
		}
		if (!n.getDocuments) continue;
		let i = await n.getDocuments();
		for (let r of i) nD(r) && t.includes(r.type) && e.push(vU(r, n.title ?? "Compendium"));
	}
	return e;
}
async function _U(e, t) {
	return e.getIndex ? XD(await e.getIndex({ fields: ["name", "type"] })).filter((n) => !!(n.name && n.type && qD(e, n) && t.includes(n.type))).map((t) => ({
		itemType: t.type ?? "trapping",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		uuid: qD(e, t)
	})) : [];
}
function vU(e, t) {
	return {
		itemType: e.type,
		name: e.name,
		sourceLabel: t,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/actors.ts
function yU(e) {
	return game.actors.contents.filter((t) => TU(t, e)).map(SU);
}
async function bU(e) {
	let t = rD(await fromUuid(e));
	return {
		advancements: [
			...CH(t),
			...wH(t, "skill"),
			...wH(t, "talent")
		],
		optionalTraits: VH(t),
		traits: BH(t),
		trappings: fU(t)
	};
}
async function xU(e) {
	let t = oD(e);
	if (t.type !== "Actor") throw Error("Drop a Foundry Actor here.");
	let n = null;
	return t.uuid ? n = await fromUuid(t.uuid) : t.id && (n = game.actors.get(t.id)), SU(rD(n));
}
function SU(e) {
	return {
		img: e.img ?? "",
		name: e.name,
		prototypeTokenImg: wU(e),
		species: CU(e),
		type: e.type,
		uuid: e.uuid
	};
}
function CU(e) {
	return K(e.system, [
		"details",
		"species",
		"value"
	]) || K(e.system, ["details", "species"]) || K(e.system, [
		"details",
		"race",
		"value"
	]) || K(e.system, [
		"details",
		"ancestry",
		"value"
	]);
}
function wU(e) {
	return K(e, [
		"prototypeToken",
		"texture",
		"src"
	]) || K(e.toObject(), [
		"prototypeToken",
		"texture",
		"src"
	]);
}
function TU(e, t) {
	return t.baseActorFolderUuid ? e.folder?.uuid === t.baseActorFolderUuid : !0;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/careers.ts
async function EU(e) {
	let t = oD(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a WFRP Career item here.");
	return yV(aD(await fromUuid(t.uuid), "career", "Drop a WFRP Career item here."));
}
async function DU(e) {
	let t = [];
	for (let n of e) {
		let e = aD(await fromUuid(n.uuid), "career", `Career “${n.name}” is no longer available.`);
		for (let r = 0; r < Tk(n.quantity); r += 1) {
			let n = e.toObject();
			delete n._id, Gl(n, [
				"system",
				"complete",
				"value"
			], !0), Gl(n, [
				"system",
				"current",
				"value"
			], !1), t.push(n);
		}
	}
	return t;
}
async function OU(e, t) {
	t.length && await e.createEmbeddedDocuments("Item", t);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/constants.ts
var kU = "spell", AU = new Set(fj), jU = new Set(pj);
async function MU() {
	return NU().map((e) => ({
		category: vj(e.key),
		key: e.key,
		label: e.name,
		value: e.name,
		wind: e.wind
	})).sort((e, t) => e.category === t.category ? e.label.localeCompare(t.label) : e.category.localeCompare(t.category));
}
function NU() {
	let e = G(game.wfrp4e?.config, ["magicLores"]), t = G(game.wfrp4e?.config, ["magicWind"]), n = [];
	if (!W(e)) return [LU()];
	for (let [r, i] of Object.entries(e)) {
		let e = WU(i) || r, a = UU(t, r);
		n.push({
			key: r,
			matchTerms: HU(r, e, a),
			name: e,
			wind: a
		});
	}
	return n.some((e) => e.key === "petty") || n.push(LU()), n;
}
function PU(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		if (r.isAmbiguous) continue;
		if (r.kind === "petty-magic") {
			let e = VU("petty magic", t);
			e && n.set(e.key, e);
			continue;
		}
		let e = VU(r.rawLore, t);
		e && n.set(e.key, e);
	}
	return [...n.values()];
}
function FU(e, t) {
	let n = [...IU(e.system), BU(e.name)].filter(Boolean);
	for (let e of n) {
		let n = zU(e, t);
		if (n) return n;
		let r = VU(e, t);
		if (r) return r;
	}
	return null;
}
function IU(e) {
	return [
		...Wl(G(e, ["lore", "value"])),
		...Wl(G(e, ["lore"])),
		...Wl(G(e, ["magicLore", "value"])),
		...Wl(G(e, ["magicLore"])),
		...Wl(G(e, ["category", "value"])),
		...Wl(G(e, [
			"system",
			"lore",
			"value"
		])),
		...Wl(G(e, ["system", "lore"])),
		...Wl(G(e, ["system.lore.value"])),
		...Wl(G(e, ["system.lore"]))
	];
}
function LU() {
	return {
		key: "petty",
		matchTerms: ["petty", "petty magic"],
		name: "Petty Magic",
		wind: ""
	};
}
function RU(e) {
	let t = e.trim() || "Unknown Lore";
	return {
		key: hj(t) || "unknown",
		matchTerms: [t],
		name: t,
		wind: ""
	};
}
function zU(e, t) {
	let n = hj(e);
	return n === "lore" ? t.find((e) => e.key !== "petty") ?? null : n === "the eight winds" || n === "eight winds" ? t.find((e) => AU.has(e.key)) ?? null : n === "dark lore" ? t.find((e) => jU.has(e.key)) ?? null : null;
}
function BU(e) {
	return /\(([^)]+)\)\s*$/.exec(e)?.[1]?.trim() ?? "";
}
function VU(e, t) {
	let n = hj(e);
	return n ? t.find((e) => e.matchTerms.some((e) => hj(e) === n)) ?? null : null;
}
function HU(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = hj(e), a = hj(t);
	for (let i of [
		e,
		t,
		n
	]) i.trim() && r.add(i.trim());
	return (i === "petty" || a === "petty") && r.add("Petty Magic"), (i === "shadow" || a === "shadow") && r.add("Shadows"), t && !/^lore of /i.test(t) && r.add(`Lore of ${t}`), [...r];
}
function UU(e, t) {
	return W(e) ? WU(e[t]) : "";
}
function WU(e) {
	return typeof e == "string" ? e.trim() : W(e) ? K(e, ["name"]) || K(e, ["label"]) || K(e, ["value"]) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/debug.ts
var GU = "[Drowsy's WFRP4e Customizers][Spell Lookup]";
function KU(t, n) {
	if (n) {
		e(`${GU} ${t}`, n);
		return;
	}
	e(`${GU} ${t}`);
}
function qU(e, n) {
	t(`${GU} ${e}`, n);
}
function JU(e) {
	return [
		e.title ?? "",
		e.collection ?? "",
		K(e, ["metadata", "type"]),
		K(e, ["metadata", "documentName"]),
		e.documentName
	].filter(Boolean).join(" | ");
}
function YU(e) {
	return {
		loreTerms: IU(e.system),
		name: e.name,
		sourceLabel: e.sourceLabel,
		uuid: e.uuid
	};
}
function XU(e) {
	return typeof e == "string" ? {
		kind: "uuid-string",
		value: e
	} : W(e) ? {
		documentName: K(e, ["documentName"]),
		hasSystem: W(G(e, ["system"])),
		loreTerms: IU(G(e, ["system"])),
		name: K(e, ["name"]),
		type: K(e, ["type"]),
		uuid: K(e, ["uuid"])
	} : { kind: typeof e };
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-input-conversion.ts
function ZU(e, t) {
	return {
		img: e.img ?? "",
		name: e.name,
		sourceLabel: t,
		system: e.system,
		uuid: e.uuid
	};
}
function QU(e) {
	return /^item\./i.test(e.uuid) ? "World" : $U(e.uuid, "WFRP Item Lookup");
}
function $U(e, t) {
	let n = /^Compendium\.([^.]+\.[^.]+)\./.exec(e)?.[1];
	return n ? [...game.packs ?? []].find((e) => e.collection === n)?.title ?? n : t;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/compendium-spell-inputs.ts
async function eW(e) {
	if (KU("Compendium index scan start", { pack: JU(e) }), !e.getIndex) return KU("Compendium has no index; loading documents", { pack: JU(e) }), await rW(e);
	let t = XD(await e.getIndex({ fields: [
		"name",
		"type",
		"img",
		"system.lore.value"
	] }));
	if (KU("Compendium index loaded", {
		entries: t.length,
		pack: JU(e),
		samples: t.slice(0, 5).map((t) => ({
			hasLoreTerms: IU(t).length > 0,
			name: t.name,
			type: t.type,
			uuid: qD(e, t)
		}))
	}), !t.length) return KU("Compendium index empty; loading documents", { pack: JU(e) }), await rW(e);
	let n = t.filter(nW);
	KU("Compendium index spell candidates", {
		pack: JU(e),
		spellEntries: n.length
	});
	let r = n.filter((e) => e.name).map((t) => aW(e, t));
	return r.length || !iW(e) ? r : await rW(e);
}
function tW(e) {
	return JD(e);
}
function nW(e) {
	return e.type === "spell" ? !0 : !!(e.name && (IU(e).length || BU(e.name)));
}
async function rW(e) {
	if (!e.getDocuments) return KU("Compendium has no document loader", { pack: JU(e) }), [];
	KU("Compendium document load start", { pack: JU(e) });
	let t = await e.getDocuments(), n = t.filter((e) => nD(e) && e.type === "spell");
	return KU("Compendium document load complete", {
		documents: t.length,
		pack: JU(e),
		spellDocuments: n.length,
		spellSamples: n.slice(0, 5).map((e) => ({
			loreTerms: IU(e.system),
			name: e.name,
			uuid: e.uuid
		}))
	}), n.map((t) => ZU(t, e.title ?? "Compendium"));
}
function iW(e) {
	return e.collection === "wfrp4e-core.items" || e.collection === "wfrp4e-wom.items";
}
function aW(e, t) {
	return {
		img: t.img ?? t.thumb ?? "",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		system: t,
		uuid: qD(e, t)
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/warhammer-spell-inputs.ts
async function oW() {
	let e = cW();
	if (!e) return KU("WFRP helper unavailable"), [];
	try {
		let t = await e.findAllItems(kU, "Loading Spells", !0, ["system.lore.value"]);
		return KU("WFRP helper raw result", {
			count: t.length,
			samples: t.slice(0, 10).map(XU)
		}), (await Promise.all(t.map((e) => sW(e)))).filter((e) => e !== null);
	} catch (e) {
		return qU("WFRP helper lookup failed.", e), [];
	}
}
async function sW(e) {
	if (typeof e == "string") {
		let t = await fromUuid(e);
		return nD(t) && t.type === "spell" ? ZU(t, QU(t)) : null;
	}
	if (nD(e)) return e.type === "spell" ? ZU(e, QU(e)) : null;
	if (K(e, ["type"]) !== "spell") return null;
	let t = K(e, ["name"]);
	return t ? {
		img: K(e, ["img"]) || K(e, ["thumb"]),
		name: t,
		sourceLabel: $U(K(e, ["uuid"]), "WFRP Item Lookup"),
		system: G(e, ["system"]),
		uuid: K(e, ["uuid"])
	} : null;
}
function cW() {
	let e = G(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
	return typeof e == "function" ? { findAllItems: e } : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-resolution-inputs.ts
async function lW() {
	let e = [], n = [...game.packs ?? []];
	KU("Candidate lookup start", {
		itemPacks: n.filter(tW).length,
		totalPacks: n.length,
		warhammerUtilityAvailable: !!fW(),
		worldItems: game.items?.contents.length ?? 0
	});
	let r = await oW();
	KU("WFRP helper lookup complete", {
		utilityInputs: r.length,
		utilitySamples: r.slice(0, 10).map(YU)
	}), e.push(...r), e.push(...uW()), KU("World spell scan complete", { worldSpellCount: e.filter((e) => e.sourceLabel === "World").length });
	for (let r of n) if (tW(r)) try {
		let t = await eW(r);
		e.push(...t), KU("Compendium spell scan complete", {
			inputCount: t.length,
			pack: JU(r),
			samples: t.slice(0, 5).map(YU)
		});
	} catch (e) {
		t(`wfrp4e-customizer-apps | Spell lookup skipped compendium "${r.title ?? r.collection ?? "unknown"}".`, e);
	}
	let i = dW(e);
	return KU("Candidate lookup complete", {
		rawInputCount: e.length,
		uniqueInputCount: i.length
	}), i;
}
function uW() {
	let e = [];
	for (let t of game.items?.contents ?? []) t.type === "spell" && e.push(ZU(t, "World"));
	return e;
}
function dW(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.uuid || n.name.trim().toLocaleLowerCase();
		t.has(e) || t.set(e, n);
	}
	return [...t.values()];
}
function fW() {
	return G(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/index.ts
async function pW(e, t) {
	let n = [];
	for (let r of t) {
		if (!r.selected || eH(e, r.name, "spell")) continue;
		let t = $V(r.sourceUuid ? await gW(r.sourceUuid) : null, r.name, kU);
		t.type = kU, n.push(t);
	}
	n.length && await e.createEmbeddedDocuments("Item", n);
}
async function mW(e) {
	let t = PU(e, NU());
	if (KU("Grant resolution start", {
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
	let n = await lW(), r = /* @__PURE__ */ new Map(), i = [];
	for (let e of n) {
		let n = FU(e, t);
		if (!n) {
			i.length < 20 && i.push({
				loreTerms: IU(e.system),
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
	return KU("Grant resolution complete", {
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
async function hW(e) {
	let t = oD(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Spell item here.");
	let n = aD(await fromUuid(t.uuid), kU, "Drop a Foundry Spell item here."), r = FU(ZU(n, "Dropped"), [...NU(), LU()]) ?? RU(IU(n.system)[0] ?? "");
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
async function gW(e) {
	let t = await fromUuid(e);
	return nD(t) && t.type === "spell" ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/mounts/trait-sources.ts
var _W = "generatedMountTrait";
function vW(e, t) {
	return t.traits.flatMap((t) => {
		if (!t.included || wI(t.name)) return [];
		let n = yW(e, t);
		if (!n) return [];
		let r = n.toObject();
		return delete r._id, r.name = t.outputName, Gl(r, ["system", "disabled"], !1), Gl(r, [
			"flags",
			$,
			_W
		], {
			mountUuid: e.uuid,
			sourceTraitUuid: t.sourceUuid
		}), t.fixedDamage !== null && bW(r, t.fixedDamage), [r];
	});
}
function yW(e, t) {
	return e.items?.contents.find((e) => e.type === "trait" && e.uuid === t.sourceUuid) ?? null;
}
function bW(e, t) {
	Gl(e, [
		"system",
		"specification",
		"value"
	], String(t)), Gl(e, [
		"system",
		"rollable",
		"bonusCharacteristic"
	], ""), Gl(e, [
		"system",
		"rollable",
		"rollCharacteristic"
	], "ws"), Gl(e, [
		"system",
		"rollable",
		"skill"
	], "");
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/mounts/armour.ts
async function xW(e, t, n, r) {
	let i = e.items?.contents.filter(wW) ?? [], a = r.traits.filter((e) => e.included && wI(e.name)), o = SW(i), s = CW(n, a), c = Math.max(o.value, s.value) + 1;
	if (o.item && e.updateEmbeddedDocuments) {
		await e.updateEmbeddedDocuments("Item", [{
			_id: o.item.id,
			"system.specification.value": String(c)
		}]);
		return;
	}
	let l = $V((s.contribution ? yW(t, s.contribution) : null) ?? await aH("Armour", ["trait"]), "Armour", "trait");
	l.name = "Armour", l.type = "trait", Gl(l, ["system", "disabled"], !1), Gl(l, [
		"system",
		"specification",
		"value"
	], String(c)), await e.createEmbeddedDocuments("Item", [l]);
}
function SW(e) {
	return e.reduce((e, t) => {
		let n = Vl(t.system, [["specification", "value"]]);
		return n > e.value ? {
			item: t,
			value: n
		} : e;
	}, {
		item: null,
		value: 0
	});
}
function CW(e, t) {
	return t.reduce((t, n) => {
		let r = e.traits.find((e) => e.uuid === n.sourceUuid), i = Number(r?.specification);
		return Number.isFinite(i) && i > t.value ? {
			contribution: n,
			value: i
		} : t;
	}, {
		contribution: null,
		value: 0
	});
}
function wW(e) {
	return e.type === "trait" && wI(e.name);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/mounts/profile.ts
var TW = new Set(Object.values(xI));
async function EW(e) {
	return DW(rD(await fromUuid(e)));
}
function DW(e) {
	return {
		characteristics: {
			initiative: jW(e, "i"),
			strength: jW(e, "s"),
			strengthBonus: MW(e, "s"),
			toughness: jW(e, "t")
		},
		img: e.img ?? "",
		movement: Vl(e.system, [[
			"details",
			"move",
			"value"
		]]),
		name: e.name,
		size: NW(e),
		traits: OW(e),
		uuid: e.uuid,
		wounds: Vl(e.system, [[
			"status",
			"wounds",
			"max"
		], [
			"status",
			"wounds",
			"value"
		]])
	};
}
function OW(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !PW(e)).map((t) => kW(e, t)).sort((e, t) => e.name.localeCompare(t.name)) ?? [];
}
function kW(e, t) {
	let n = Ul(t.system, [["rollable", "damage"]]), r = K(t.system, ["specification", "value"]);
	return {
		damage: n,
		fixedDamage: n ? AW(e, t, r) : null,
		name: t.name,
		specification: r,
		uuid: t.uuid
	};
}
function AW(e, t, n) {
	let r = Hl(t, [["Damage"]]);
	if (r !== null) return r;
	let i = Number(n), a = K(t.system, ["rollable", "bonusCharacteristic"]);
	return (Number.isFinite(i) ? i : 0) + (a ? MW(e, a) : 0);
}
function jW(e, t) {
	return Vl(e.system, [[
		"characteristics",
		t,
		"value"
	], [
		"characteristics",
		t,
		"initial"
	]]);
}
function MW(e, t) {
	return Hl(e.system, [[
		"characteristics",
		t,
		"bonus"
	]]) ?? Math.floor(jW(e, t) / 10);
}
function NW(e) {
	let t = K(e.system, [
		"details",
		"size",
		"value"
	]);
	return TW.has(t) ? t : xI.Average;
}
function PW(e) {
	return Ul(e.system, [["disabled"], ["disabled", "value"]]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/mounts/apply.ts
var FW = {
	avg: 1,
	enor: 3,
	lrg: 2,
	ltl: .5,
	mnst: 4,
	sml: .8,
	tiny: .3
};
async function IW(e, t) {
	let n = rD(await fromUuid(t));
	if (e.uuid === n.uuid) throw Error("The rider and mount must be different Actors.");
	let r = DW(e), i = DW(n), a = PI(r, i);
	await e.update(LW(e, a));
	let o = vW(n, a);
	o.length && await e.createEmbeddedDocuments("Item", o), await xW(e, n, i, a), await e.createEmbeddedDocuments("Item", [RI({
		flagScope: $,
		mount: i,
		plan: a,
		rider: r
	})]), await e.update({
		"system.status.wounds.max": a.wounds,
		"system.status.wounds.value": a.wounds
	});
}
function LW(e, t) {
	let n = FW[t.size] ?? 1;
	return {
		"prototypeToken.height": n,
		"prototypeToken.width": n,
		"system.characteristics.i.modifier": RW(e, "i") + t.initiative - zW(e, "i"),
		"system.characteristics.t.modifier": RW(e, "t") + t.toughness - zW(e, "t"),
		"system.details.move.value": t.movement
	};
}
function RW(e, t) {
	return Vl(e.system, [[
		"characteristics",
		t,
		"modifier"
	]]);
}
function zW(e, t) {
	return Vl(e.system, [[
		"characteristics",
		t,
		"value"
	]]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/mounts/actors.ts
function BW() {
	return game.actors.contents.map(SU).sort((e, t) => e.name.localeCompare(t.name));
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/build-npc.ts
async function VW(e) {
	if (e.mountActorUuid && e.mountActorUuid === e.baseActorUuid) throw Error("The rider and mount must be different Actors.");
	let t = await DU(e.careers), n = await UW(e);
	if (!n) throw Error("Foundry did not create the NPC Actor.");
	let r = WW(e), i = e.careers.at(-1), a = {
		name: r,
		"prototypeToken.name": r
	}, o = K(n.system, [
		"details",
		"gmnotes",
		"value"
	]), s = HW(o);
	s !== o && (a["system.details.gmnotes.value"] = s);
	let c = e.portraitPath || i?.img || "";
	return c && (a.img = c, a["prototypeToken.texture.src"] = c), await n.update(a), await OU(n, t), await xH(n, e.advancements), await RH(n, e.traits), e.mountActorUuid && await IW(n, e.mountActorUuid), await lU(n, e.trappings), await pW(n, e.spells), n.sheet?.render(!0), ui.notifications?.info(`Created NPC "${r}".`), {
		name: r,
		uuid: n.uuid
	};
}
function HW(e) {
	return e.replaceAll(/(?:<hr\s*\/?>)?<section data-wfrp-customizer-npc-xp="true">[\S\s]*?<\/section>/g, "").trim();
}
async function UW(e) {
	let t = rD(await fromUuid(e.baseActorUuid)).toObject(), n = QH(e.settings.outputActorFolderUuid);
	return delete t._id, delete t.folder, t.type = "npc", HH(t), n && (t.folder = n.id), await Actor.create(t);
}
function WW(e) {
	if (!e.settings.includeSpeciesInName) return e.actorName;
	let t = game.actors.contents.find((t) => t.uuid === e.baseActorUuid), n = t ? CU(t) : "";
	return !n || e.actorName.toLocaleLowerCase().includes(n.toLocaleLowerCase()) ? e.actorName : `${n} ${e.actorName}`;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/document-drops.ts
async function GW(e) {
	let t = oD(e);
	if (t.type === "Actor") return {
		actor: await xU(e),
		kind: "actor"
	};
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Actor or WFRP Item.");
	let n = iD(await fromUuid(t.uuid), "Drop a Foundry Item.");
	if (n.type === "career") return {
		career: await EU(e),
		kind: "career"
	};
	if (n.type === "skill" || n.type === "talent") return {
		advancement: SH(n),
		kind: "advancement"
	};
	if (n.type === "trait") return {
		kind: "trait",
		trait: await KH(e)
	};
	if (n.type === "spell") return {
		kind: "spell",
		spell: await hW(e)
	};
	if (mU().includes(n.type)) return {
		kind: "trapping",
		trapping: await dU(e)
	};
	throw Error("Drop an Actor, Career, Skill, Talent, Trait, Trapping, or Spell Item.");
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/candidate-utils.ts
function KW(e, t) {
	let n = t.img.trim().toLocaleLowerCase();
	!n || e.seenPaths.has(n) || (e.seenPaths.add(n), e.candidates.push(t));
}
function qW(e, t) {
	let n = t.imagePaths.filter(({ path: e }) => !!e);
	if (eG(t.name, n, e.searchTerms)) for (let r of n) {
		let n = {
			img: r.path,
			key: `foundry-asset:${t.sourceKey}:${r.label}`,
			label: `${t.name || ZW(r.path)} ${r.label} (${t.sourceLabel})`,
			source: "foundry-asset",
			sourceGroup: t.sourceGroup,
			sourceLabel: t.sourceLabel
		};
		tG(n, e) && KW(e, n);
	}
}
function JW(e, t, n) {
	e?.({
		candidatesFound: t.candidates.length,
		currentLocation: n.currentLocation,
		directoriesVisited: t.visitedDirectories,
		maxDirectories: n.maxDirectories,
		phase: n.phase
	});
}
function YW(e) {
	return K(e, [
		"prototypeToken",
		"texture",
		"src"
	]) || K(e.toObject(), [
		"prototypeToken",
		"texture",
		"src"
	]);
}
function XW(e, t) {
	return `${ZW(e)} (${t})`;
}
function ZW(e) {
	return e.split(/[/\\]/).at(-1) ?? e;
}
function QW(e) {
	return typeof e == "object" && !!e;
}
function $W(e) {
	return QW(e) && Object.values(e).every((e) => Array.isArray(e) && e.every((e) => typeof e == "string"));
}
function eG(e, t, n) {
	return KA(e, n) || t.some(({ path: e }) => KA(e, n));
}
function tG(e, t) {
	return qA(e, {
		mustExcludeSourceGroups: [],
		mustExcludeTerms: t.mustExcludeTerms,
		mustIncludeSourceGroups: [],
		mustIncludeTerms: t.mustIncludeTerms
	});
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/dig-down.ts
var nG = "fuzzy-foundry", rG = .3, iG = new Set([
	".webp",
	".png",
	".jpg",
	".jpeg",
	".gif"
]);
function aG(e, t) {
	let n = oG();
	if (JW(t, e, {
		currentLocation: cG(n),
		maxDirectories: 0,
		phase: "filesystem"
	}), !n.digDownActive || !n.digDownCacheReady) return;
	let r = dG();
	if (!(!r?._fileIndexCache || !r.fs)) {
		for (let t of lG(r, e.searchTerms)) uG(e, r, t);
		JW(t, e, {
			currentLocation: "Dig Down file cache search complete",
			maxDirectories: 0,
			phase: "filesystem"
		});
	}
}
function oG() {
	let e = game.modules.get(nG)?.active === !0, t = sG(), n = dG(), r = Object.values(n?._fileIndexCache ?? {}).reduce((e, t) => e + t.length, 0);
	return {
		digDownActive: e,
		digDownCacheReady: !!(n?._fileIndexCache && n.fs),
		digDownDeepFileSearchEnabled: t,
		digDownIndexedFileCount: r
	};
}
function sG() {
	try {
		return game.settings.get(nG, "deepFile") === !0;
	} catch {
		return !1;
	}
}
function cG(e) {
	return e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down file cache (${e.digDownIndexedFileCount} files)` : "Waiting for Dig Down file cache" : "Dig Down Deep File Search is disabled" : "Dig Down is not active";
}
function lG(e, t) {
	let n = /* @__PURE__ */ new Set(), r = Object.keys(e._fileIndexCache ?? {});
	for (let i of t) {
		let t = i.toLocaleLowerCase();
		for (let e of r) e.toLocaleLowerCase().includes(t) && n.add(e);
		let a = e.fs?.get(i, [], rG) ?? [];
		for (let [, e] of a) n.add(e);
	}
	return [...n].sort((e, t) => e.toLocaleLowerCase().localeCompare(t.toLocaleLowerCase()));
}
function uG(e, t, n) {
	let r = t._fileIndexCache?.[n] ?? [];
	for (let t of r) {
		if (!fG(t)) continue;
		let n = {
			img: t,
			key: `foundry-asset:${t}`,
			label: XW(t, "Dig Down"),
			source: "foundry-asset",
			sourceGroup: "dig-down",
			sourceLabel: "Dig Down"
		};
		tG(n, e) && KW(e, n);
	}
}
function dG() {
	let e = canvas.deepSearchCache;
	if (!QW(e)) return null;
	let t = e._fileIndexCache, n = e.fs, r = {};
	return $W(t) && (r._fileIndexCache = t), QW(n) && typeof n.get == "function" && (r.fs = { get: n.get.bind(n) }), r;
}
function fG(e) {
	let t = `.${e.split(/[#?]/)[0]?.split(".").pop() ?? ""}`;
	return iG.has(t.toLocaleLowerCase());
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/documents.ts
function pG(e, t) {
	JW(t, e, {
		currentLocation: "World Actors and Items",
		maxDirectories: 0,
		phase: "world-documents"
	});
	for (let t of game.actors.contents) qW(e, {
		imagePaths: [{
			label: "actor image",
			path: t.img ?? ""
		}, {
			label: "token image",
			path: YW(t)
		}],
		name: t.name,
		sourceGroup: "world",
		sourceLabel: "World Actors",
		sourceKey: t.uuid
	});
	for (let t of game.items?.contents ?? []) qW(e, {
		imagePaths: [{
			label: "item image",
			path: t.img ?? ""
		}],
		name: t.name,
		sourceGroup: "world",
		sourceLabel: "World Items",
		sourceKey: t.uuid
	});
}
async function mG(e, t) {
	JW(t, e, {
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
		] }).catch(() => void 0), r = n ? XD(n) : [];
		for (let n of r) qW(e, {
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
					path: K(n, [
						"prototypeToken",
						"texture",
						"src"
					])
				}
			],
			name: n.name ?? "",
			sourceGroup: "compendiums",
			sourceLabel: t.title ?? "Compendium",
			sourceKey: `${t.collection ?? t.title ?? "pack"}:${n._id ?? n.name ?? ""}`
		});
	}
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/index.ts
async function hG(e, t) {
	if (!e.searchTerms.length) return [];
	let n = {
		candidates: [],
		maxDirectoryBudget: 0,
		mustExcludeTerms: e.mustExcludeTerms,
		mustIncludeTerms: e.mustIncludeTerms,
		searchTerms: e.searchTerms,
		seenPaths: /* @__PURE__ */ new Set(),
		visitedDirectories: 0
	};
	return e.includeCompendiumAssets && (pG(n, t), await mG(n, t)), e.includeFilePickerAssets && aG(n, t), JW(t, n, {
		currentLocation: "Portrait search complete",
		maxDirectories: n.maxDirectoryBudget,
		phase: "ready"
	}), n.candidates;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/index.ts
var gG = {
	buildNpc: VW,
	ensureActorFolder: JH,
	ensureItemFolder: YH,
	findLowerCareerCandidates: DV,
	getPortraitSearchAvailability: async () => oG(),
	importRecommendedQuickTraits: rU,
	listActorFolders: async () => XH(),
	listBaseActors: async (e) => yU(e),
	listFoundryPortraitCandidates: hG,
	listMagicLoreOptions: MU,
	listMountActors: async () => BW(),
	listSpellsForMagicGrants: mW,
	listItemFolders: async () => ZH(),
	listQuickTraits: iU,
	listSkillCharacteristics: UV,
	listSkillSpecializations: HV,
	listTalentMaximums: oH,
	listTraitDifficultyOptions: GH,
	loadBaseActorDraftData: bU,
	loadActorCombatProfile: EW,
	loadSettings: async () => gH(),
	resolveActorDrop: xU,
	resolveApplicationDrop: GW,
	resolveCareerDrop: EU,
	resolveSpellDrop: hW,
	resolveTraitDrop: KH,
	resolveTrapping: uU,
	resolveTrappingDrop: dU,
	saveSettings: _H
}, _G = class extends MT {
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
		return dV;
	}
	getVueProps() {
		return { bridge: gG };
	}
}, vG = "wfrp4e-customizer-open-npc-builder", yG = "wfrp4e-customizer-open-species-builder";
function bG() {
	Hooks.on("renderActorDirectory", (e, t) => {
		let n = TG(t);
		n && xG(n);
	});
}
function xG(e) {
	let n = wG(e);
	if (!n) {
		t("wfrp4e-customizer-apps | Could not find Actor Directory button container.");
		return;
	}
	SG(e, n), CG(e, n);
}
function SG(e, t) {
	if (e.querySelector(`.${vG}`)) return;
	let n = document.createElement("button");
	n.classList.add(vG, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-user-plus\" inert></i><span>NPC Builder App</span>", n.addEventListener("click", () => {
		new _G().render(!0);
	}), t.append(n);
}
function CG(e, t) {
	if (e.querySelector(`.${yG}`)) return;
	let n = document.createElement("button");
	n.classList.add(yG, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-people-group\" inert></i><span>Species Builder</span>", n.addEventListener("click", () => {
		new gk().render(!0);
	}), t.append(n);
}
function wG(e) {
	return e.querySelector(".directory-header .header-actions") ?? e.querySelector(".directory-header .action-buttons") ?? e.querySelector(".header-actions") ?? e.querySelector(".action-buttons");
}
function TG(e) {
	return e instanceof HTMLElement ? e : EG(e) && e[0] instanceof HTMLElement ? e[0] : null;
}
function EG(e) {
	return typeof e == "object" && !!e && "length" in e;
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/actor-profile.ts
function DG(e) {
	let t = e.toObject(), n = {};
	for (let e of Object.keys(Mc)) {
		let r = e;
		n[r] = bH(t.system, r);
	}
	return {
		characteristics: n,
		skills: OG(e, "skill"),
		talents: OG(e, "talent")
	};
}
function OG(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((e) => ({
		name: e.name,
		value: t === "skill" ? kG(e.toObject().system) : AG(e.toObject().system)
	})) ?? [];
}
function kG(e) {
	return Vl(e, [["advances", "value"], ["advances"]]) + Vl(e, [["modifier", "value"], ["modifier"]]);
}
function AG(e) {
	return Vl(e, [["advances", "value"], ["advances"]]);
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/species-actor.ts
var jG = null;
async function MG(e, t, n) {
	let r = game.actors.contents, i = NG(n ? r.filter((e) => e.folder?.uuid === n) : [], e);
	if (i) return {
		actor: i,
		source: i.folder?.name ?? "Configured NPC Base Actors folder"
	};
	let a = NG(r.filter((e) => e.uuid !== t.uuid), e);
	if (a) return {
		actor: a,
		source: "World Actors"
	};
	let o = PG(await IG(), e);
	if (!o) return null;
	let s = await fromUuid(o.uuid);
	if (!RG(s)) throw Error(`The species Actor ${o.uuid} is no longer available.`);
	return {
		actor: s,
		source: o.source
	};
}
function NG(e, t) {
	return FG(e, t, (e) => e.name);
}
function PG(e, t) {
	return FG(e, t, (e) => e.name);
}
function FG(e, t, n) {
	let r = t.trim();
	return e.find((e) => n(e).trim() === r) ?? e.find((e) => wk(n(e)) === wk(t)) ?? null;
}
function IG() {
	return jG ??= LG(), jG;
}
async function LG() {
	let e = [];
	for (let t of game.packs ?? []) {
		if (!YD(t) || !t.getIndex) continue;
		let n = await t.getIndex({ fields: ["name"] });
		for (let r of XD(n)) {
			let n = qD(t, r);
			r.name && n && e.push({
				name: r.name,
				source: t.title ?? t.collection ?? "Actor Compendium",
				uuid: n
			});
		}
	}
	return e;
}
function RG(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/estimate.ts
async function zG(e) {
	let t = rD(await fromUuid(e), "Expected an NPC Actor.");
	if (t.type !== "npc") throw Error(`Expected an NPC Actor, but received Actor type “${t.type}”.`);
	return await BG(t);
}
async function BG(e) {
	let t = CU(e);
	if (!t) return { status: "missing-species" };
	let n = await MG(t, e, gH().baseActorFolderUuid);
	return n ? {
		baselineName: n.actor.name,
		baselineSource: n.source,
		baselineUuid: n.actor.uuid,
		breakdown: vA(DG(e), DG(n.actor)),
		species: t,
		status: "ready"
	} : {
		species: t,
		status: "baseline-not-found"
	};
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/sheet.ts
var VG = "[data-wfrp-customizer-npc-xp=\"true\"]", HG = /* @__PURE__ */ new Set(), UG = !1, WG = !1;
function GG() {
	if (!UG) {
		UG = !0, Hooks.on("renderApplicationV2", (e, t) => {
			if (!(t instanceof HTMLElement)) return;
			let n = XG(e);
			n && KG(n, t);
		});
		for (let e of [
			"createActor",
			"updateActor",
			"deleteActor",
			"createItem",
			"updateItem",
			"deleteItem",
			"updateSetting"
		]) Hooks.on(e, ZG);
	}
}
function KG(e, t) {
	let n = t.matches("section[data-tab=\"careers\"]") ? t : t.querySelector("section[data-tab=\"careers\"]");
	if (!n) return;
	n.querySelector(VG)?.remove();
	let r = qG(e, t), i = n.querySelector(".sheet-list.careers");
	i ? n.insertBefore(r.container, i) : n.append(r.container), QG(), JG(r), globalThis.setTimeout(() => {
		r.root.isConnected && r.root.contains(r.container) && (QG(), HG.add(r));
	}, 0);
}
function qG(e, t) {
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
async function JG(e) {
	let n = ++e.generation;
	e.output.value = "Calculating…";
	try {
		let t = await BG(e.actor);
		n === e.generation && e.root.contains(e.container) && YG(e, t);
	} catch (r) {
		n === e.generation && e.root.contains(e.container) && (e.output.value = "Unavailable", e.details.textContent = "XP calculation failed; see the console for details."), t("wfrp4e-customizer-apps | NPC XP calculation failed.", r);
	}
}
function YG(e, t) {
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
function XG(e) {
	if (typeof e != "object" || !e) return null;
	let t = "actor" in e ? e.actor : void 0, n = "document" in e ? e.document : void 0, r = tD(t) ? t : tD(n) ? n : null;
	return r?.type === "npc" ? r : null;
}
function ZG() {
	WG || (WG = !0, globalThis.setTimeout(() => {
		WG = !1, QG();
		for (let e of HG) JG(e);
	}, 0));
}
function QG() {
	for (let e of HG) (!e.root.isConnected || !e.root.contains(e.container)) && HG.delete(e);
}
//#endregion
//#region src/module/apps/species-builder/apply-species-config.ts
var $G = [
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
function eK() {
	let n = game.wfrp4e?.config;
	if (!W(n)) {
		t(`${$} | WFRP config was unavailable; custom species were not applied.`);
		return;
	}
	let r = JT(), i = new Set(W(n.species) ? Object.keys(n.species) : []), a = r.definitions.filter((e) => !i.has(e.key.trim()));
	nK(n, xl({
		...r,
		definitions: a
	})), a.length > 0 && e(`${$} | Applied ${a.length} custom species definition(s).`);
}
async function tK() {
	let n = game.wfrp4e?.config;
	if (!W(n)) {
		t(`${$} | WFRP config was unavailable; runtime species extensions were not applied.`);
		return;
	}
	let r = xl({
		...JT(),
		definitions: []
	}, await qE());
	nK(n, r);
	let i = Object.values(r.subspecies).reduce((e, t) => e + Object.keys(t).length, 0);
	i > 0 && e(`${$} | Applied ${i} custom runtime-parent subspecies definition(s).`);
}
function nK(e, t) {
	for (let n of $G) rK(e, n, t[n]);
	iK(e, t.extraSpecies), aK(e, t.subspecies);
}
function rK(e, t, n) {
	if (Object.keys(n).length === 0) return;
	let r = e[t];
	if (!W(r)) {
		e[t] = { ...n };
		return;
	}
	Object.assign(r, n);
}
function iK(e, t) {
	if (t.length === 0) return;
	let n = Array.isArray(e.extraSpecies) ? e.extraSpecies : [], r = /* @__PURE__ */ new Set();
	for (let e of n) typeof e == "string" && r.add(e);
	for (let e of t) r.add(e);
	e.extraSpecies = [...r];
}
function aK(e, t) {
	if (Object.keys(t).length === 0) return;
	let n = W(e.subspecies) ? e.subspecies : {};
	for (let [e, r] of Object.entries(t)) {
		let t = W(n[e]) ? n[e] : {};
		Object.assign(t, r), n[e] = t;
	}
	e.subspecies = n;
}
//#endregion
//#region src/functions/species-builder/characteristic-roll-formulas.ts
var oK = "2d10";
function sK(e) {
	let t = e?.split("+")[0]?.trim();
	return t ? lK(t) : oK;
}
function cK(e, t) {
	return sK(e) === sK(t);
}
function lK(e) {
	return e.replaceAll(/\s+/g, "").toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/species-builder/chargen-roll-swap-feedback.ts
var uK = "data-wfrp4e-customizer-roll-swap-feedback", dK = `[${uK}="blocked"]`, fK = /* @__PURE__ */ new WeakMap();
function pK(e, t) {
	let n = bK(e);
	if (n) for (let e of yK(n)) e.addEventListener("dragstart", () => {
		let r = e.dataset.ch;
		r && mK(n, r, t);
	}), e.addEventListener("dragend", () => {
		gK(n);
	}), e.addEventListener("drop", () => {
		gK(n);
	});
}
function mK(e, t, n) {
	gK(e);
	for (let r of yK(e)) {
		let e = r.dataset.ch;
		e && (e === t || n(t, e) || hK(r));
	}
}
function hK(e) {
	fK.set(e, {
		ariaDisabled: e.getAttribute("aria-disabled"),
		borderColor: e.style.getPropertyValue("border-color"),
		borderColorPriority: e.style.getPropertyPriority("border-color"),
		hadDisabledClass: e.classList.contains("disabled")
	}), e.setAttribute(uK, "blocked"), e.setAttribute("aria-disabled", "true"), e.classList.add("disabled"), e.style.setProperty("border-color", "transparent");
}
function gK(e) {
	for (let t of e.querySelectorAll(dK)) {
		let e = fK.get(t);
		e && (e.hadDisabledClass || t.classList.remove("disabled"), _K(t, "aria-disabled", e.ariaDisabled), vK(t, "border-color", e.borderColor, e.borderColorPriority), t.removeAttribute(uK), fK.delete(t));
	}
}
function _K(e, t, n) {
	if (n === null) {
		e.removeAttribute(t);
		return;
	}
	e.setAttribute(t, n);
}
function vK(e, t, n, r) {
	if (!n) {
		e.style.removeProperty(t);
		return;
	}
	e.style.setProperty(t, n, r);
}
function yK(e) {
	return [...e.querySelectorAll(".ch-roll.ch-drag")];
}
function bK(e) {
	if (e instanceof HTMLElement) return e;
	if (!W(e)) return;
	let t = e[0];
	return t instanceof HTMLElement ? t : void 0;
}
//#endregion
//#region src/module/apps/species-builder/chargen-roll-swap-guard.ts
var xK = Symbol("wfrp4e-customizer-guarded-attributes-stage");
function SK() {
	Hooks.on("wfrp4e:chargen", (e) => {
		CK(e);
	});
}
function CK(n) {
	let r = wK(n);
	if (!r) {
		t(`${$} | Could not inspect WFRP character generation stages.`);
		return;
	}
	let i = TK(r);
	if (!i) {
		t(`${$} | Could not find the WFRP Attributes character generation stage.`);
		return;
	}
	if (EK(i.class)) return;
	let a = DK(i.class);
	typeof r.replaceStage == "function" ? r.replaceStage("attributes", a) : i.class = a, e(`${$} | Guarded WFRP characteristic roll swapping for custom species.`);
}
function wK(e) {
	if (!W(e)) return;
	let t = {}, n = e.replaceStage;
	return typeof n == "function" && (t.replaceStage = (t, r) => {
		n.call(e, t, r);
	}), Array.isArray(e.stages) && (t.stages = e.stages), t;
}
function TK(e) {
	for (let t of e.stages ?? []) if (W(t) && t.key === "attributes") return typeof t.class == "function" ? t : void 0;
}
function EK(e) {
	return !!e[xK];
}
function DK(e) {
	class t extends e {
		static [xK] = !0;
		activateListeners(e) {
			let t = super.activateListeners(e);
			return pK(e, (e, t) => cK(OK(this, e), OK(this, t))), t;
		}
		swap(e, t) {
			let n = OK(this, e), r = OK(this, t);
			if (cK(n, r)) return super.swap(e, t);
			kK(e, n, t, r);
		}
	}
	return t;
}
function OK(e, t) {
	let n = W(e.context) ? e.context : void 0, r = W(n?.characteristics) ? n.characteristics : void 0, i = (W(r?.[t]) ? r[t] : void 0)?.formula;
	return typeof i == "string" ? i : void 0;
}
function kK(e, t, n, r) {
	let i = AK(e), a = AK(n), o = sK(t), s = sK(r);
	ui.notifications?.warn?.(`Cannot swap ${i} and ${a}: ${i} uses ${o}, while ${a} uses ${s}.`);
}
function AK(e) {
	let t = game.wfrp4e?.config?.characteristics;
	if (!W(t)) return e;
	let n = t[e];
	return typeof n == "string" ? n : e;
}
//#endregion
//#region src/module/debug/shape-inspector/constants.ts
var jK = `${$}.debugShapeProbes`, MK = "wfrp4eCustomizerShapeProbes", NK = "wfrp4eCustomizerShapePreset";
//#endregion
//#region src/module/debug/shape-inspector/utils.ts
function PK(e, t, n) {
	let r = Number(e);
	return Number.isFinite(r) ? Math.max(0, Math.min(n, Math.floor(r))) : t;
}
function FK(e) {
	return typeof e == "object" && !!e;
}
function IK(e) {
	return typeof e == "string" ? e.trim().toLocaleLowerCase() : "";
}
function LK(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
//#endregion
//#region src/module/debug/shape-inspector/path-resolver.ts
function RK(e) {
	let t = WK(e), n = zK(globalThis, t.root);
	for (let e of t.tokens) {
		if (e.type === "property") {
			n = zK(n, e.key);
			continue;
		}
		if (e.type === "index") {
			n = zK(n, String(e.index));
			continue;
		}
		n = BK(n, e.name, e.args);
	}
	return n;
}
function zK(e, t) {
	if (!(!FK(e) && typeof e != "function")) try {
		return e[t];
	} catch {
		return;
	}
}
function BK(e, t, n) {
	if (t === "at") {
		let t = Number(n[0] ?? 0), r = Number.isFinite(t) ? t : 0;
		return GK(e).at(r);
	}
	if (t === "findByName") {
		let t = IK(n[0] ?? "");
		return GK(e).find((e) => IK(zK(e, "name")) === t);
	}
	if (t === "findByType") {
		let t = IK(n[0] ?? "");
		return GK(e).find((e) => IK(zK(e, "type")) === t);
	}
	if (t === "get") {
		let t = n[0] ?? "";
		if (e instanceof Map) return e.get(t);
		let r = zK(e, "get");
		if (typeof r == "function") return r.call(e, t);
	}
	if (t === "sample") {
		let t = PK(n[0], 3, 60);
		return GK(e).slice(0, t);
	}
	throw Error(`Unsupported path method "${t}".`);
}
function VK(e) {
	return e.trim() ? e.split(",").map((e) => UK(e.trim())).map(String) : [];
}
function HK(e) {
	let t = e.trim();
	return /^-?\d+$/.test(t) ? Number(t) : UK(t);
}
function UK(e) {
	let t = /^["'](?<value>.*)["']$/.exec(e);
	return t?.groups ? t.groups.value ?? "" : e;
}
function WK(e) {
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
				args: VK(e.groups.args ?? ""),
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
				index: HK(e),
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
function GK(e) {
	if (Array.isArray(e)) return e;
	let t = zK(e, "contents");
	return Array.isArray(t) ? t : [];
}
//#endregion
//#region src/module/debug/shape-inspector/presets.ts
var KK = { "npc-builder": [
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
function qK() {
	return window.location.href.includes("wfrp4eCustomizerShapeProbes") || window.location.href.includes("wfrp4eCustomizerShapePreset");
}
function JK(e) {
	let t = {
		hook: e.hook ?? "ready",
		maxDepth: PK(e.maxDepth, 2, 6),
		maxEntries: PK(e.maxEntries, 12, 60),
		path: e.path.trim()
	};
	return e.label && (t.label = e.label), t;
}
function YK() {
	return [...XK(), ...ZK()].map(JK);
}
function XK() {
	let e = LK(jK);
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter($K).map(JK) : [];
	} catch {
		return [];
	}
}
function ZK() {
	let e = [], t = [new URLSearchParams(window.location.search), new URLSearchParams(window.location.hash.replace(/^#/, ""))];
	for (let n of t) {
		let t = n.get(NK), r = n.get(MK);
		t && e.push(...KK[t] ?? []), r && e.push(...QK(r));
	}
	return window.location.href.includes("wfrp4eCustomizerShapePreset=npc-builder") && !e.length && e.push(...KK["npc-builder"] ?? []), e;
}
function QK(e) {
	try {
		let t = JSON.parse(decodeURIComponent(e));
		return Array.isArray(t) ? t.filter($K) : [];
	} catch (e) {
		return t(`${$} | Could not parse URL shape probes.`, e), [];
	}
}
function $K(e) {
	return typeof e != "object" || !e ? !1 : "path" in e && typeof e.path == "string";
}
//#endregion
//#region src/module/debug/shape-inspector/summary.ts
function eq(e, t) {
	return !FK(e) && typeof e != "function" ? aq(e) : typeof e == "function" ? rq(e) : Array.isArray(e) ? tq(e, t) : e instanceof Map ? nq(e, t) : iq(e, t);
}
function tq(e, t) {
	return {
		length: e.length,
		sample: e.slice(0, t.maxEntries).map((e) => eq(e, sq(t))),
		type: "array"
	};
}
function nq(e, t) {
	return {
		sample: [...e.entries()].slice(0, t.maxEntries).map(([e, n]) => ({
			key: eq(e, sq(t)),
			value: eq(n, sq(t))
		})),
		size: e.size,
		type: "Map"
	};
}
function rq(e) {
	return {
		name: e.name,
		type: "function"
	};
}
function iq(e, t) {
	if (t.seen.has(e)) return { type: "circular" };
	t.seen.add(e);
	let n = oq(e, t.maxEntries), r = zK(e, "constructor"), i = {
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
		let n = zK(e, t);
		typeof n == "string" && (i[t] = n);
	}
	if (t.maxDepth <= 0) return i;
	let a = {};
	for (let r of n) a[r] = eq(zK(e, r), sq(t));
	i.properties = a;
	let o = zK(e, "toObject");
	if (typeof o == "function") try {
		i.source = eq(o.call(e), sq(t));
	} catch (e) {
		i.source = {
			error: e instanceof Error ? e.message : String(e),
			type: "error"
		};
	}
	return i;
}
function aq(e) {
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
function oq(e, t) {
	return Object.keys(e).sort().slice(0, t);
}
function sq(e) {
	return {
		maxDepth: e.maxDepth - 1,
		maxEntries: e.maxEntries,
		seen: e.seen
	};
}
//#endregion
//#region src/module/debug/shape-inspector/index.ts
function cq() {
	localStorage.removeItem(jK), e(`${$} | Cleared debug shape probes.`);
}
function lq() {
	return YK();
}
function uq(e, t = {}) {
	let n = pq(e, t);
	return hq(n), n;
}
function dq() {
	let t = YK();
	for (let e of ["init", "setup"]) {
		let n = t.filter((t) => t.hook === e);
		n.length && Hooks.once(e, () => {
			for (let t of n) mq(t, e);
		});
	}
	Hooks.once("ready", () => {
		let t = YK().filter((e) => (e.hook ?? "ready") === "ready");
		qK() && e(`${$} | Debug shape ready probes discovered: ${t.length}`, window.location.href);
		for (let e of t) mq(e, "ready");
	});
}
function fq(t) {
	let n = t.map(JK);
	localStorage.setItem(jK, JSON.stringify(n)), e(`${$} | Stored ${n.length} debug shape probe(s). Reload Foundry to run init/setup probes.`);
}
function pq(e, t = {}, n) {
	let r = PK(t.maxDepth, 2, 6), i = PK(t.maxEntries, 12, 60), a = RK(e), o = {
		inspectedAt: (/* @__PURE__ */ new Date()).toISOString(),
		label: t.label || e,
		maxDepth: r,
		maxEntries: i,
		path: e,
		value: eq(a, {
			maxDepth: r,
			maxEntries: i,
			seen: /* @__PURE__ */ new WeakSet()
		})
	};
	return n && (o.hook = n), o;
}
function mq(e, n) {
	try {
		hq(pq(e.path, e, n));
	} catch (n) {
		t(`${$} | Debug shape probe failed for "${e.path}".`, n);
	}
}
function hq(t) {
	e(`${$} | Debug shape probe: ${t.label}`, JSON.stringify(t, null, 2));
}
//#endregion
//#region src/view/components/ApplicationShell.vue?vue&type=script&setup=true&lang.ts
var gq = ["aria-label"], _q = { class: "dui-card-body" }, vq = { class: "dui-card-title" }, yq = { key: 0 }, bq = {
	key: 0,
	class: "dui-card-actions"
}, xq = /* @__PURE__ */ j({
	__name: "ApplicationShell",
	props: {
		description: {},
		title: {}
	},
	setup(e) {
		return (t, n) => (P(), F("section", {
			"aria-label": e.title,
			class: "dui-card"
		}, [L("div", _q, [
			L("header", null, [
				L("h1", vq, D(e.title), 1),
				e.description ? (P(), F("p", yq, D(e.description), 1)) : B("", !0),
				Kr(t.$slots, "header")
			]),
			Kr(t.$slots, "default"),
			t.$slots.actions ? (P(), F("div", bq, [Kr(t.$slots, "actions")])) : B("", !0)
		])], 8, gq));
	}
}), Sq = { class: "dui-list" }, Cq = /* @__PURE__ */ j({
	__name: "DaisyExampleApp",
	setup(e) {
		let t = [
			"button",
			"badge",
			"card",
			"alert"
		];
		return (e, n) => (P(), I(xq, {
			description: "A quick visual check of the module's isolated Daisy component theme.",
			title: "Daisy Probe"
		}, {
			header: A(() => [...n[0] ||= [L("span", { class: "dui-badge dui-badge-primary" }, "Scoped", -1), L("span", { class: "dui-badge dui-badge-outline" }, "Foundry-safe", -1)]]),
			actions: A(() => [...n[1] ||= [L("span", { class: "dui-badge dui-badge-success" }, "Ready", -1)]]),
			default: A(() => [n[2] ||= L("div", { class: "dui-alert dui-alert-info" }, [L("span", null, "DaisyUI is available inside this Vue application root.")], -1), L("ul", Sq, [(P(), F(N, null, M(t, (e) => L("li", {
				key: e,
				class: "dui-list-row"
			}, D(e), 1)), 64))])]),
			_: 1
		}));
	}
}), wq = class extends MT {
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
		return Cq;
	}
}, Tq = { class: "dui-list" }, Eq = { class: "dui-list-row" }, Dq = { class: "dui-list-row" }, Oq = { class: "dui-list-row" }, kq = /* @__PURE__ */ j({
	__name: "WorkbenchApp",
	props: {
		openDaisyProbe: { type: Function },
		openNpcBuilder: { type: Function },
		openSpeciesBuilder: { type: Function }
	},
	setup(e) {
		return (t, n) => (P(), I(xq, {
			description: "Open a focused WFRP4e authoring workflow.",
			title: "Customizer Workbench"
		}, {
			default: A(() => [L("ul", Tq, [
				L("li", Eq, [n[3] ||= L("div", { class: "dui-list-col-grow" }, [L("strong", null, "NPC Builder"), L("p", null, "Build an NPC from a base Actor, Careers, traits, trappings, and spells.")], -1), L("button", {
					"aria-label": "Open NPC Builder",
					class: "dui-btn dui-btn-primary",
					type: "button",
					onClick: n[0] ||= (...t) => e.openNpcBuilder && e.openNpcBuilder(...t)
				}, " Open ")]),
				L("li", Dq, [n[4] ||= L("div", { class: "dui-list-col-grow" }, [L("strong", null, "Species Builder"), L("p", null, "Author custom species and apply them to WFRP character generation.")], -1), L("button", {
					"aria-label": "Open Species Builder",
					class: "dui-btn",
					type: "button",
					onClick: n[1] ||= (...t) => e.openSpeciesBuilder && e.openSpeciesBuilder(...t)
				}, " Open ")]),
				L("li", Oq, [n[5] ||= L("div", { class: "dui-list-col-grow" }, [L("strong", null, "DaisyUI Probe"), L("p", null, "Check the module's scoped component theme.")], -1), L("button", {
					"aria-label": "Open DaisyUI Probe",
					class: "dui-btn dui-btn-ghost",
					type: "button",
					onClick: n[2] ||= (...t) => e.openDaisyProbe && e.openDaisyProbe(...t)
				}, " Open ")])
			])]),
			_: 1
		}));
	}
}), Aq = class extends MT {
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
			title: vT
		}
	};
	getVueComponent() {
		return kq;
	}
	getVueProps() {
		return {
			openDaisyProbe: () => new wq().render(!0),
			openNpcBuilder: () => new _G().render(!0),
			openSpeciesBuilder: () => new gk().render(!0)
		};
	}
};
//#endregion
//#region src/module/register-module-menus.ts
function jq() {
	game.settings.registerMenu($, "workbench", {
		hint: `Open the ${vT} workbench.`,
		icon: "fa-solid fa-screwdriver-wrench",
		label: "Open Workbench",
		name: vT,
		restricted: !0,
		type: Aq
	}), game.settings.registerMenu($, "npc-builder", {
		hint: "Build a WFRP4e NPC from a base Actor and Career items.",
		icon: "fa-solid fa-user-plus",
		label: "Open NPC Builder",
		name: "WFRP4e NPC Builder",
		restricted: !0,
		type: _G
	}), game.settings.registerMenu($, "species-builder", {
		hint: "Create custom WFRP4e species definitions for character generation.",
		icon: "fa-solid fa-people-group",
		label: "Open Species Builder",
		name: "WFRP4e Species Builder",
		restricted: !0,
		type: gk
	}), game.settings.registerMenu($, "daisy-example", {
		hint: "Open a small isolated DaisyUI component probe.",
		icon: "fa-solid fa-flask",
		label: "Open Daisy Probe",
		name: "WFRP4e Daisy Probe",
		restricted: !0,
		type: wq
	});
}
//#endregion
//#region src/module/register-module-settings.ts
function Mq() {
	hH(), qT();
}
//#endregion
//#region src/functions/item-grants/wfrp-grant-effect.ts
var Nq = "generatedGrantItemsEffect", Pq = {
	grantMode: "all",
	lifetime: "linked-to-effect",
	ownerAction: "keep"
};
function Fq(e) {
	let t = e.recipe ?? Pq;
	Iq(t);
	let n = e.items.map((e) => e.uuid);
	return {
		changes: [],
		description: Rq(e.effectName, e.items, t),
		disabled: !1,
		flags: { [e.flagScope]: {
			[Nq]: !0,
			itemUuids: n,
			recipe: t
		} },
		img: e.items[0]?.img ?? "icons/svg/aura.svg",
		name: e.effectName,
		system: {
			scriptData: [{
				label: e.effectName,
				script: Lq(n, t),
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
function Iq(e) {
	if (e.lifetime === "linked-to-effect" && e.ownerAction === "delete-after-grant") throw Error("Self-removing grant effects must create detached item copies.");
}
function Lq(e, t) {
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
		"// Generated by Drowsy's WFRP4e Customizers.",
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
function Rq(e, t, n) {
	let r = zq(e), i = t.map((e) => `<li>${zq(e.name)}</li>`).join("");
	return `<p><strong>${r}</strong>: grants item copies; ${n.lifetime === "linked-to-effect" ? "granted item copies are removed with this effect" : "granted item copies remain after this effect is removed"}.${n.ownerAction === "delete-after-grant" ? " The source Item removes itself after granting." : ""}</p><ul>${i}</ul>`;
}
function zq(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/view/apps/grant-builder/GrantBuilderApp.vue?vue&type=script&setup=true&lang.ts
var Bq = { class: "dui-card dui-card-border dui-card-sm" }, Vq = { class: "dui-card-body" }, Hq = { class: "dui-list" }, Uq = {
	key: 0,
	class: "dui-list-row"
}, Wq = ["src"], Gq = { class: "dui-list-col-grow" }, Kq = ["title", "onClick"], qq = { class: "dui-card dui-card-border dui-card-sm" }, Jq = { class: "dui-card-body" }, Yq = { class: "dui-fieldset" }, Xq = { class: "dui-label" }, Zq = ["value"], Qq = { class: "dui-card-body" }, $q = { class: "dui-fieldset" }, eJ = { class: "dui-label" }, tJ = ["checked"], nJ = { class: "dui-label" }, rJ = ["checked"], iJ = { class: "dui-label" }, aJ = ["checked", "disabled"], oJ = ["disabled"], sJ = /* @__PURE__ */ j({
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
		return (n, r) => (P(), I(xq, {
			description: `Build an item-granting Active Effect on ${e.carrierName}.`,
			title: "Grant Builder"
		}, {
			actions: A(() => [L("button", {
				class: "dui-btn dui-btn-ghost",
				type: "button",
				onClick: r[5] ||= (...t) => e.onCancel && e.onCancel(...t)
			}, "Cancel"), L("button", {
				class: "dui-btn dui-btn-primary",
				type: "button",
				disabled: e.items.length === 0,
				onClick: r[6] ||= (...t) => e.onCreate && e.onCreate(...t)
			}, " Create Grant Effect ", 8, oJ)]),
			default: A(() => [
				L("section", Bq, [L("div", Vq, [
					r[8] ||= L("h2", { class: "dui-card-title" }, "Granted Items", -1),
					R(db, {
						description: "World and compendium Items can be added one at a time.",
						"manual-entry-trigger": "button",
						title: "Drop Items Here",
						onDropData: e.onDropData
					}, null, 8, ["onDropData"]),
					L("ul", Hq, [e.items.length === 0 ? (P(), F("li", Uq, "No granted items configured.")) : (P(!0), F(N, { key: 1 }, M(e.items, (t) => (P(), F("li", {
						key: t.uuid,
						class: "dui-list-row"
					}, [
						t.img ? (P(), F("img", {
							key: 0,
							alt: "",
							src: t.img
						}, null, 8, Wq)) : B("", !0),
						L("div", Gq, [L("strong", null, D(t.name), 1), L("small", null, D(t.uuid), 1)]),
						L("button", {
							class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square",
							type: "button",
							title: `Remove ${t.name}`,
							onClick: (n) => e.onRemoveItem(t.uuid)
						}, [...r[7] ||= [L("i", {
							class: "fa-solid fa-times",
							"aria-hidden": "true"
						}, null, -1)]], 8, Kq)
					]))), 128))])
				])]),
				L("section", qq, [L("div", Jq, [L("fieldset", Yq, [r[10] ||= L("legend", { class: "dui-fieldset-legend" }, "Effect", -1), L("label", Xq, [r[9] ||= L("span", null, "Effect name", -1), L("input", {
					class: "dui-input",
					value: e.effectName,
					type: "text",
					onInput: r[0] ||= (n) => e.onEffectNameInput(t(n))
				}, null, 40, Zq)])])])]),
				L("form", {
					class: "dui-card dui-card-border dui-card-sm",
					onSubmit: r[4] ||= Qo(() => {}, ["prevent"])
				}, [L("div", Qq, [L("fieldset", $q, [
					r[14] ||= L("legend", { class: "dui-fieldset-legend" }, "Granted Item Lifetime", -1),
					L("label", eJ, [L("input", {
						class: "dui-radio",
						name: "grant-lifetime",
						type: "radio",
						value: "linked-to-effect",
						checked: e.lifetime === "linked-to-effect",
						onChange: r[1] ||= (t) => e.onLifetimeChange("linked-to-effect")
					}, null, 40, tJ), r[11] ||= L("span", null, [
						L("strong", null, "Linked to this effect"),
						L("br"),
						z(" Granted Items are removed when this effect is deleted. ")
					], -1)]),
					L("label", nJ, [L("input", {
						class: "dui-radio",
						name: "grant-lifetime",
						type: "radio",
						value: "detached",
						checked: e.lifetime === "detached",
						onChange: r[2] ||= (t) => e.onLifetimeChange("detached")
					}, null, 40, rJ), r[12] ||= L("span", null, [
						L("strong", null, "Detached copies"),
						L("br"),
						z(" Granted Items remain after this effect or source Item is removed. ")
					], -1)]),
					L("label", iJ, [L("input", {
						class: "dui-checkbox",
						type: "checkbox",
						checked: e.ownerAction === "delete-after-grant",
						disabled: e.lifetime !== "detached",
						onChange: r[3] ||= (t) => e.onOwnerActionChange(e.ownerAction === "delete-after-grant" ? "keep" : "delete-after-grant")
					}, null, 40, aJ), r[13] ||= z(" Remove the source Item after granting. ", -1)])
				])])], 32)
			]),
			_: 1
		}, 8, ["description"]));
	}
});
//#endregion
//#region src/module/wfrp4e/grant/item-documents.ts
function cJ(e) {
	let t = e.dataTransfer?.getData("text/plain") ?? "";
	if (!t) return null;
	try {
		return oD(t).type === "Item" ? t : null;
	} catch {
		return null;
	}
}
async function lJ(e) {
	let t = oD(e);
	if (!t.uuid) throw Error("Drop an Item with a resolvable UUID.");
	return iD(await fromUuid(t.uuid), "The dropped Item was not found.");
}
function uJ(e) {
	let t = {
		name: e.name,
		uuid: e.uuid
	};
	return e.img && (t.img = e.img), t;
}
//#endregion
//#region src/module/apps/grant-builder/GrantBuilderApplication.ts
var dJ = "detached", fJ = class extends MT {
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
		return sJ;
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
		this.#r = e, e !== dJ && (this.#i = "keep"), this.render();
	}
	changeOwnerAction(e) {
		this.#i = e, this.render();
	}
	removeItem(e) {
		this.#n = this.#n.filter((t) => t.uuid !== e), this.render();
	}
	async handleDrop(e) {
		try {
			let t = await lJ(e);
			if (t.uuid === this.carrierItem.uuid) throw Error("An Item cannot grant itself.");
			if (this.#n.some((e) => e.uuid === t.uuid)) {
				ui.notifications?.warn?.(`"${t.name}" is already in this grant effect.`);
				return;
			}
			this.#n = [...this.#n, uJ(t)], this.updateDefaultEffectName(), this.render();
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
			}, n = Fq({
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
}, pJ = new Set(["talent", "trait"]), mJ = /* @__PURE__ */ new WeakSet(), hJ = !1, gJ = "wfrp4e-customizer-grant-builder-button", _J = [
	"section[data-application-part=\"effects\"].active",
	"section[data-tab=\"effects\"].active",
	".tab[data-tab=\"effects\"].active",
	".tab.effects.active"
].join(","), vJ = [
	"section[data-application-part=\"effects\"]",
	"section[data-tab=\"effects\"]",
	".tab[data-tab=\"effects\"]",
	".tab.effects"
].join(",");
function yJ() {
	hJ || (hJ = !0, Hooks.on("renderApplicationV2", (e, t) => {
		if (!(t instanceof HTMLElement)) return;
		let n = CJ(e);
		!n || !pJ.has(n.type) || (bJ(n, t), xJ(n, t));
	}));
}
function bJ(e, t) {
	mJ.has(t) || (mJ.add(t), t.addEventListener("dragover", (e) => {
		wJ(t, e.target) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "copy"));
	}, !0), t.addEventListener("drop", (n) => {
		SJ(e, t, n);
	}, !0));
}
function xJ(e, t) {
	if (t.querySelector(`.${gJ}`)) return;
	let n = EJ(t, { includeInactive: !0 });
	if (!n) return;
	let r = document.createElement("div");
	r.classList.add("wfrp4e-customizer-grant-builder-toolbar");
	let i = document.createElement("button");
	i.type = "button", i.classList.add(gJ), i.title = "Open the advanced item grant builder", i.innerHTML = "<i class=\"fa-solid fa-sitemap\" aria-hidden=\"true\"></i><span>Grant Builder</span>", i.addEventListener("click", () => {
		new fJ(e).render(!0);
	}), r.append(i), n.prepend(r);
}
async function SJ(e, t, n) {
	if (!wJ(t, n.target)) return;
	let r = cJ(n);
	if (r) {
		n.preventDefault(), n.stopPropagation();
		try {
			let t = await lJ(r);
			if (t.uuid === e.uuid) throw Error("An Item cannot grant itself.");
			let n = uJ(t), i = Fq({
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
function CJ(e) {
	if (typeof e != "object" || !e) return null;
	let t = "item" in e ? e.item : void 0;
	if (nD(t)) return t;
	let n = "document" in e ? e.document : void 0;
	return nD(n) ? n : null;
}
function wJ(e, t) {
	return !(t instanceof Element) || !e.contains(t) ? !1 : !!TJ(e);
}
function TJ(e) {
	return e.querySelector(_J) || EJ(e, { includeInactive: !1 });
}
function EJ(e, t) {
	return [...e.querySelectorAll(vJ)].find((e) => t.includeInactive || e.offsetParent !== null) ?? null;
}
//#endregion
//#region src/module/api/create-module-api.ts
function DJ() {
	return {
		clearDebugShapeProbes: cq,
		estimateNpcXp: zG,
		getDebugShapeProbes: lq,
		inspectPath: uq,
		listNpcAutoAdvanceStrategies: bM,
		async openDaisyExample() {
			await new wq().render(!0);
		},
		async openNpcBuilder() {
			await new _G().render(!0);
		},
		async openSpeciesBuilder() {
			await new gk().render(!0);
		},
		async openWorkbench() {
			await new Aq().render(!0);
		},
		registerNpcAutoAdvanceStrategy: yM,
		setDebugShapeProbes: fq
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function OJ() {
	let e = game.modules.get($);
	if (!e) throw Error(`Foundry module registry entry was not found for ${$}.`);
	e.api = DJ();
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function kJ() {
	dq(), Hooks.once("init", () => {
		e(`${$} | Initializing`), Mq(), game.system.id === "wfrp4e" && (GE(), eK(), GG(), SK(), yJ()), jq(), bG();
	}), Hooks.once("ready", () => {
		if (game.system.id !== "wfrp4e") {
			t(`${$} | Loaded outside ${yT}; skipping module API registration.`);
			return;
		}
		AJ();
	});
}
async function AJ() {
	await Promise.resolve();
	try {
		await KE(JT().definitions.map(({ key: e }) => e)), await tK();
	} catch (e) {
		t(`${$} | Runtime species catalog could not be prepared: ${e instanceof Error ? e.message : "Unknown runtime adaptation error."}`);
	}
	OJ(), EV(), WV(), XE(), ck(), e(`${$} | Ready`);
}
//#endregion
//#region src/main.ts
kJ();
//#endregion

//# sourceMappingURL=wfrp4e-customizer-apps.mjs.map