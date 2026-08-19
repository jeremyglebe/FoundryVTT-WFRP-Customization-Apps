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
}, w = /-\w/g, T = ie((e) => e.replace(w, (e) => e.slice(1).toUpperCase())), ae = /\B([A-Z])/g, oe = ie((e) => e.replace(ae, "-$1").toLowerCase()), se = ie((e) => e.charAt(0).toUpperCase() + e.slice(1)), ce = ie((e) => e ? `on${se(e)}` : ""), E = (e, t) => !Object.is(e, t), le = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ue = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, de = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, fe, pe = () => fe ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function me(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = v(r) ? ve(r) : me(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (v(e) || b(e)) return e;
}
var he = /;(?![^(]*\))/g, ge = /:([^]+)/, _e = /\/\*[^]*?\*\//g;
function ve(e) {
	let t = {};
	return e.replace(_e, "").split(he).forEach((e) => {
		if (e) {
			let n = e.split(ge);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function D(e) {
	let t = "";
	if (v(e)) t = e;
	else if (p(e)) for (let n = 0; n < e.length; n++) {
		let r = D(e[n]);
		r && (t += r + " ");
	}
	else if (b(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var ye = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", be = /* @__PURE__ */ n(ye);
ye + "";
function xe(e) {
	return !!e || e === "";
}
function Se(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = Ce(e[r], t[r]);
	return n;
}
function Ce(e, t) {
	if (e === t) return !0;
	let n = g(e), r = g(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = y(e), r = y(t), n || r) return e === t;
	if (n = p(e), r = p(t), n || r) return n && r ? Se(e, t) : !1;
	if (n = b(e), r = b(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !Ce(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function we(e, t) {
	return e.findIndex((e) => Ce(e, t));
}
var Te = (e) => !!(e && e.__v_isRef === !0), O = (e) => v(e) ? e : e == null ? "" : p(e) || b(e) && (e.toString === S || !_(e.toString)) ? Te(e) ? O(e.value) : JSON.stringify(e, Ee, 2) : String(e), Ee = (e, t) => Te(t) ? Ee(e, t.value) : m(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[De(t, r) + " =>"] = n, e), {}) } : h(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => De(e)) } : y(t) ? De(t) : b(t) && !p(t) && !te(t) ? String(t) : t, De = (e, t = "") => y(e) ? `Symbol(${e.description ?? t})` : e, Oe, ke = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Oe && (Oe.active ? (this.parent = Oe, this.index = (Oe.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = Oe;
			try {
				return Oe = this, e();
			} finally {
				Oe = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = Oe, Oe = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (Oe === this) Oe = this.prevScope;
			else {
				let e = Oe;
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
function Ae(e) {
	return new ke(e);
}
function je() {
	return Oe;
}
function Me(e, t = !1) {
	Oe && Oe.cleanups.push(e);
}
var Ne, Pe = /* @__PURE__ */ new WeakSet(), Fe = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Oe && (Oe.active ? Oe.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Pe.has(this) && (Pe.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ze(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Qe(this), He(this);
		let e = Ne, t = Je;
		Ne = this, Je = !0;
		try {
			return this.fn();
		} finally {
			Ue(this), Ne = e, Je = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ke(e);
			this.deps = this.depsTail = void 0, Qe(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Pe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		We(this) && this.run();
	}
	get dirty() {
		return We(this);
	}
}, Ie = 0, Le, Re;
function ze(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Re, Re = e;
		return;
	}
	e.next = Le, Le = e;
}
function Be() {
	Ie++;
}
function Ve() {
	if (--Ie > 0) return;
	if (Re) {
		let e = Re;
		for (Re = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Le;) {
		let t = Le;
		for (Le = void 0; t;) {
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
function He(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ue(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ke(r), qe(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function We(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ge(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ge(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === $e) || (e.globalVersion = $e, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !We(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = Ne, r = Je;
	Ne = e, Je = !0;
	try {
		He(e);
		let n = e.fn(e._value);
		(t.version === 0 || E(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		Ne = n, Je = r, Ue(e), e.flags &= -3;
	}
}
function Ke(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ke(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function qe(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Je = !0, Ye = [];
function Xe() {
	Ye.push(Je), Je = !1;
}
function Ze() {
	let e = Ye.pop();
	Je = e === void 0 ? !0 : e;
}
function Qe(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = Ne;
		Ne = void 0;
		try {
			t();
		} finally {
			Ne = e;
		}
	}
}
var $e = 0, et = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, tt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!Ne || !Je || Ne === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== Ne) t = this.activeLink = new et(Ne, this), Ne.deps ? (t.prevDep = Ne.depsTail, Ne.depsTail.nextDep = t, Ne.depsTail = t) : Ne.deps = Ne.depsTail = t, nt(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = Ne.depsTail, t.nextDep = void 0, Ne.depsTail.nextDep = t, Ne.depsTail = t, Ne.deps === t && (Ne.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, $e++, this.notify(e);
	}
	notify(e) {
		Be();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ve();
		}
	}
};
function nt(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) nt(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var rt = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ Symbol(""), at = /* @__PURE__ */ Symbol(""), ot = /* @__PURE__ */ Symbol("");
function st(e, t, n) {
	if (Je && Ne) {
		let t = rt.get(e);
		t || rt.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new tt()), r.map = t, r.key = n), r.track();
	}
}
function ct(e, t, n, r, i, a) {
	let o = rt.get(e);
	if (!o) {
		$e++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Be(), t === "clear") o.forEach(s);
	else {
		let i = p(e), a = i && ne(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === ot || !y(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(ot)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(it)), m(e) && s(o.get(at)));
				break;
			case "delete":
				i || (s(o.get(it)), m(e) && s(o.get(at)));
				break;
			case "set":
				m(e) && s(o.get(it));
				break;
		}
	}
	Ve();
}
function lt(e, t) {
	let n = rt.get(e);
	return n && n.get(t);
}
function ut(e) {
	let t = /* @__PURE__ */ Zt(e);
	return t === e ? t : (st(t, "iterate", ot), /* @__PURE__ */ Yt(e) ? t : t.map($t));
}
function dt(e) {
	return st(e = /* @__PURE__ */ Zt(e), "iterate", ot), e;
}
function ft(e, t) {
	return /* @__PURE__ */ Jt(e) ? en(/* @__PURE__ */ qt(e) ? $t(t) : t) : $t(t);
}
var pt = {
	__proto__: null,
	[Symbol.iterator]() {
		return mt(this, Symbol.iterator, (e) => ft(this, e));
	},
	concat(...e) {
		return ut(this).concat(...e.map((e) => p(e) ? ut(e) : e));
	},
	entries() {
		return mt(this, "entries", (e) => (e[1] = ft(this, e[1]), e));
	},
	every(e, t) {
		return gt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return gt(this, "filter", e, t, (e) => e.map((e) => ft(this, e)), arguments);
	},
	find(e, t) {
		return gt(this, "find", e, t, (e) => ft(this, e), arguments);
	},
	findIndex(e, t) {
		return gt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return gt(this, "findLast", e, t, (e) => ft(this, e), arguments);
	},
	findLastIndex(e, t) {
		return gt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return gt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return vt(this, "includes", e);
	},
	indexOf(...e) {
		return vt(this, "indexOf", e);
	},
	join(e) {
		return ut(this).join(e);
	},
	lastIndexOf(...e) {
		return vt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return gt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return yt(this, "pop");
	},
	push(...e) {
		return yt(this, "push", e);
	},
	reduce(e, ...t) {
		return _t(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return _t(this, "reduceRight", e, t);
	},
	shift() {
		return yt(this, "shift");
	},
	some(e, t) {
		return gt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return yt(this, "splice", e);
	},
	toReversed() {
		return ut(this).toReversed();
	},
	toSorted(e) {
		return ut(this).toSorted(e);
	},
	toSpliced(...e) {
		return ut(this).toSpliced(...e);
	},
	unshift(...e) {
		return yt(this, "unshift", e);
	},
	values() {
		return mt(this, "values", (e) => ft(this, e));
	}
};
function mt(e, t, n) {
	let r = dt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ Yt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var ht = Array.prototype;
function gt(e, t, n, r, i, a) {
	let o = dt(e), s = o !== e && !/* @__PURE__ */ Yt(e), c = o[t];
	if (c !== ht[t]) {
		let t = c.apply(e, a);
		return s ? $t(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, ft(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function _t(e, t, n, r) {
	let i = dt(e), a = i !== e && !/* @__PURE__ */ Yt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = ft(e, t)), n.call(this, t, ft(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? ft(e, c) : c;
}
function vt(e, t, n) {
	let r = /* @__PURE__ */ Zt(e);
	st(r, "iterate", ot);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Xt(n[0]) ? (n[0] = /* @__PURE__ */ Zt(n[0]), r[t](...n)) : i;
}
function yt(e, t, n = []) {
	Xe(), Be();
	let r = (/* @__PURE__ */ Zt(e))[t].apply(e, n);
	return Ve(), Ze(), r;
}
var bt = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), xt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function St(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ Zt(this);
	return st(t, "has", e), t.hasOwnProperty(e);
}
var Ct = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Vt : Bt : i ? zt : Rt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = p(e);
		if (!r) {
			let e;
			if (a && (e = pt[t])) return e;
			if (t === "hasOwnProperty") return St;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ tn(e) ? e : n);
		if ((y(t) ? xt.has(t) : bt(t)) || (r || st(e, "get", t), i)) return o;
		if (/* @__PURE__ */ tn(o)) {
			let e = a && ne(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ Gt(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ Gt(o) : /* @__PURE__ */ Ut(o) : o;
	}
}, wt = class extends Ct {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && ne(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Jt(i);
			if (!/* @__PURE__ */ Yt(n) && !/* @__PURE__ */ Jt(n) && (i = /* @__PURE__ */ Zt(i), n = /* @__PURE__ */ Zt(n)), !a && /* @__PURE__ */ tn(i) && !/* @__PURE__ */ tn(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ tn(e) ? e : r);
		return e === /* @__PURE__ */ Zt(r) && (o ? E(n, i) && ct(e, "set", t, n, i) : ct(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && ct(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!y(t) || !xt.has(t)) && st(e, "has", t), n;
	}
	ownKeys(e) {
		return st(e, "iterate", p(e) ? "length" : it), Reflect.ownKeys(e);
	}
}, Tt = class extends Ct {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, Et = /* @__PURE__ */ new wt(), Dt = /* @__PURE__ */ new Tt(), Ot = /* @__PURE__ */ new wt(!0), kt = (e) => e, At = (e) => Reflect.getPrototypeOf(e);
function jt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ Zt(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, u = i[e](...r), d = n ? kt : t ? en : $t;
		return !t && st(a, "iterate", c ? at : it), l(Object.create(u), { next() {
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
function Mt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Nt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ Zt(r), a = /* @__PURE__ */ Zt(n);
			e || (E(n, a) && st(i, "get", n), st(i, "get", a));
			let { has: o } = At(i), s = t ? kt : e ? en : $t;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && st(/* @__PURE__ */ Zt(t), "iterate", it), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ Zt(n), i = /* @__PURE__ */ Zt(t);
			return e || (E(t, i) && st(r, "has", t), st(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ Zt(a), s = t ? kt : e ? en : $t;
			return !e && st(o, "iterate", it), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return l(n, e ? {
		add: Mt("add"),
		set: Mt("set"),
		delete: Mt("delete"),
		clear: Mt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ Zt(this), r = At(n), i = /* @__PURE__ */ Zt(e), a = !t && !/* @__PURE__ */ Yt(e) && !/* @__PURE__ */ Jt(e) ? i : e;
			return r.has.call(n, a) || E(e, a) && r.has.call(n, e) || E(i, a) && r.has.call(n, i) || (n.add(a), ct(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Yt(n) && !/* @__PURE__ */ Jt(n) && (n = /* @__PURE__ */ Zt(n));
			let r = /* @__PURE__ */ Zt(this), { has: i, get: a } = At(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ Zt(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? E(n, s) && ct(r, "set", e, n, s) : ct(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ Zt(this), { has: n, get: r } = At(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ Zt(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && ct(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ Zt(this), t = e.size !== 0, n = e.clear();
			return t && ct(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = jt(r, e, t);
	}), n;
}
function Pt(e, t) {
	let n = Nt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(f(n, r) && r in t ? n : t, r, i);
}
var Ft = { get: /* @__PURE__ */ Pt(!1, !1) }, It = { get: /* @__PURE__ */ Pt(!1, !0) }, Lt = { get: /* @__PURE__ */ Pt(!0, !1) }, Rt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap();
function Ht(e) {
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
function Ut(e) {
	return /* @__PURE__ */ Jt(e) ? e : Kt(e, !1, Et, Ft, Rt);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return Kt(e, !1, Ot, It, zt);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return Kt(e, !0, Dt, Lt, Bt);
}
function Kt(e, t, n, r, i) {
	if (!b(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Ht(ee(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return /* @__PURE__ */ Jt(e) ? /* @__PURE__ */ qt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ Zt(t) : e;
}
function Qt(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && ue(e, "__v_skip", !0), e;
}
var $t = (e) => b(e) ? /* @__PURE__ */ Ut(e) : e, en = (e) => b(e) ? /* @__PURE__ */ Gt(e) : e;
// @__NO_SIDE_EFFECTS__
function tn(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function k(e) {
	return nn(e, !1);
}
function nn(e, t) {
	return /* @__PURE__ */ tn(e) ? e : new rn(e, t);
}
var rn = class {
	constructor(e, t) {
		this.dep = new tt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ Zt(e), this._value = t ? e : $t(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Yt(e) || /* @__PURE__ */ Jt(e);
		e = n ? e : /* @__PURE__ */ Zt(e), E(e, t) && (this._rawValue = e, this._value = n ? e : $t(e), this.dep.trigger());
	}
};
function A(e) {
	return /* @__PURE__ */ tn(e) ? e.value : e;
}
var an = {
	get: (e, t, n) => t === "__v_raw" ? e : A(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ tn(i) && !/* @__PURE__ */ tn(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function on(e) {
	return /* @__PURE__ */ qt(e) ? e : new Proxy(e, an);
}
// @__NO_SIDE_EFFECTS__
function sn(e) {
	let t = p(e) ? Array(e.length) : {};
	for (let n in e) t[n] = dn(e, n);
	return t;
}
var cn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = y(t) ? t : String(t), this._raw = /* @__PURE__ */ Zt(e);
		let r = !0, i = e;
		if (!p(e) || y(this._key) || !ne(this._key)) do
			r = !/* @__PURE__ */ Xt(i) || /* @__PURE__ */ Yt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = A(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ tn(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ tn(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return lt(this._raw, this._key);
	}
}, ln = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function un(e, t, n) {
	return /* @__PURE__ */ tn(e) ? e : _(e) ? new ln(e) : b(e) && arguments.length > 1 ? dn(e, t, n) : /* @__PURE__ */ k(e);
}
function dn(e, t, n) {
	return new cn(e, t, n);
}
var fn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new tt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = $e - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && Ne !== this) return ze(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ge(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function pn(e, t, n = !1) {
	let r, i;
	return _(e) ? r = e : (r = e.get, i = e.set), new fn(r, i, n);
}
var mn = {}, hn = /* @__PURE__ */ new WeakMap(), gn = void 0;
function _n(e, t = !1, n = gn) {
	if (n) {
		let t = hn.get(n);
		t || hn.set(n, t = []), t.push(e);
	}
}
function vn(e, t, n = r) {
	let { immediate: i, deep: o, once: s, scheduler: c, augmentJob: l, call: d } = n, f = (e) => o ? e : /* @__PURE__ */ Yt(e) || o === !1 || o === 0 ? yn(e, 1) : yn(e), m, h, g, v, y = !1, b = !1;
	if (/* @__PURE__ */ tn(e) ? (h = () => e.value, y = /* @__PURE__ */ Yt(e)) : /* @__PURE__ */ qt(e) ? (h = () => f(e), y = !0) : p(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ qt(e) || /* @__PURE__ */ Yt(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ tn(e)) return e.value;
		if (/* @__PURE__ */ qt(e)) return f(e);
		if (_(e)) return d ? d(e, 2) : e();
	})) : h = _(e) ? t ? d ? () => d(e, 2) : e : () => {
		if (g) {
			Xe();
			try {
				g();
			} finally {
				Ze();
			}
		}
		let t = gn;
		gn = m;
		try {
			return d ? d(e, 3, [v]) : e(v);
		} finally {
			gn = t;
		}
	} : a, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => yn(e(), t);
	}
	let x = je(), S = () => {
		m.stop(), x && x.active && u(x.effects, m);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = b ? Array(e.length).fill(mn) : mn, ee = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (t) {
			let n = m.run();
			if (e || o || y || (b ? n.some((e, t) => E(e, C[t])) : E(n, C))) {
				g && g();
				let e = gn;
				gn = m;
				try {
					let e = [
						n,
						C === mn ? void 0 : b && C[0] === mn ? [] : C,
						v
					];
					C = n, d ? d(t, 3, e) : t(...e);
				} finally {
					gn = e;
				}
			}
		} else m.run();
	};
	return l && l(ee), m = new Fe(h), m.scheduler = c ? () => c(ee, !1) : ee, v = (e) => _n(e, !1, m), g = m.onStop = () => {
		let e = hn.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			hn.delete(m);
		}
	}, t ? i ? ee(!0) : C = m.run() : c ? c(ee.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function yn(e, t = Infinity, n) {
	if (t <= 0 || !b(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ tn(e)) yn(e.value, t, n);
	else if (p(e)) for (let r = 0; r < e.length; r++) yn(e[r], t, n);
	else if (h(e) || m(e)) e.forEach((e) => {
		yn(e, t, n);
	});
	else if (te(e)) {
		for (let r in e) yn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && yn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function bn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Sn(e, t, n);
	}
}
function xn(e, t, n, r) {
	if (_(e)) {
		let i = bn(e, t, n, r);
		return i && x(i) && i.catch((e) => {
			Sn(e, t, n);
		}), i;
	}
	if (p(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(xn(e[a], t, n, r));
		return i;
	}
}
function Sn(e, t, n, i = !0) {
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
			Xe(), bn(o, null, 10, [
				e,
				i,
				a
			]), Ze();
			return;
		}
	}
	Cn(e, n, a, i, s);
}
function Cn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var wn = [], Tn = -1, En = [], Dn = null, On = 0, kn = /* @__PURE__ */ Promise.resolve(), An = null;
function jn(e) {
	let t = An || kn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Mn(e) {
	let t = Tn + 1, n = wn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = wn[r], a = Rn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Nn(e) {
	if (!(e.flags & 1)) {
		let t = Rn(e), n = wn[wn.length - 1];
		!n || !(e.flags & 2) && t >= Rn(n) ? wn.push(e) : wn.splice(Mn(t), 0, e), e.flags |= 1, Pn();
	}
}
function Pn() {
	An ||= kn.then(zn);
}
function Fn(e) {
	p(e) ? En.push(...e) : Dn && e.id === -1 ? Dn.splice(On + 1, 0, e) : e.flags & 1 || (En.push(e), e.flags |= 1), Pn();
}
function In(e, t, n = Tn + 1) {
	for (; n < wn.length; n++) {
		let t = wn[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			wn.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Ln(e) {
	if (En.length) {
		let e = [...new Set(En)].sort((e, t) => Rn(e) - Rn(t));
		if (En.length = 0, Dn) {
			Dn.push(...e);
			return;
		}
		for (Dn = e, On = 0; On < Dn.length; On++) {
			let e = Dn[On];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Dn = null, On = 0;
	}
}
var Rn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function zn(e) {
	try {
		for (Tn = 0; Tn < wn.length; Tn++) {
			let e = wn[Tn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), bn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Tn < wn.length; Tn++) {
			let e = wn[Tn];
			e && (e.flags &= -2);
		}
		Tn = -1, wn.length = 0, Ln(e), An = null, (wn.length || En.length) && zn(e);
	}
}
var Bn = null, Vn = null;
function Hn(e) {
	let t = Bn;
	return Bn = e, Vn = e && e.type.__scopeId || null, t;
}
function j(e, t = Bn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && _a(-1);
		let i = Hn(t), a;
		try {
			a = e(...n);
		} finally {
			Hn(i), r._d && _a(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Un(e, t) {
	if (Bn === null) return e;
	let n = Za(Bn), i = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = r] = t[e];
		a && (_(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && yn(o), i.push({
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
function Wn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Xe(), xn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ze());
	}
}
function Gn(e, t) {
	if (Fa) {
		let n = Fa.provides, r = Fa.parent && Fa.parent.provides;
		r === n && (n = Fa.provides = Object.create(r)), n[e] = t;
	}
}
function Kn(e, t, n = !1) {
	let r = Ia();
	if (r || bi) {
		let i = bi ? bi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
function qn() {
	return !!(Ia() || bi);
}
var Jn = /* @__PURE__ */ Symbol.for("v-scx"), Yn = () => Kn(Jn);
function Xn(e, t, n) {
	return Zn(e, t, n);
}
function Zn(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (Ha) {
		if (s === "sync") {
			let e = Yn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = Fa;
	u.call = (e, t, n) => xn(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		Zi(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Nn(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = vn(e, t, u);
	return Ha && (f ? f.push(h) : d && h()), h;
}
function Qn(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? $n(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = za(this), s = Zn(i, a.bind(r), n);
	return o(), s;
}
function $n(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var er = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ Symbol("_vte"), nr = (e) => e.__isTeleport, rr = (e) => e && (e.disabled || e.disabled === ""), ir = (e) => e && (e.defer || e.defer === ""), ar = (e) => typeof SVGElement < "u" && e instanceof SVGElement, or = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, sr = (e, t) => {
	let n = e && e.to;
	return v(n) ? t ? t(n) : null : n;
}, cr = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = rr(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = rr(e.props), r = e.target = sr(e.props, m), a = pr(r, e, h, p);
			r && (o !== "svg" && ar(r) ? o = "svg" : o !== "mathml" && or(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), fr(e, !1)));
		}, S = (e) => {
			let t = () => {
				er.get(e) === t && (er.delete(e), rr(e.props) && (b(e, _(e.el) || n, e.anchor), fr(e, !0)), x(e));
			};
			er.set(e, t), Zi(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), ir(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), fr(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = er.get(e);
			if (u) {
				u.flags |= 8, er.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = rr(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || ar(p) ? o = "svg" : (o === "mathml" || or(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), ra(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : lr(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = t.target = sr(t.props, m);
				e && lr(t, e, null, l, 0);
			} else g && lr(t, p, h, l, 1);
			fr(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = a || !rr(f), m = er.get(e);
		if (m && (m.flags |= 8, er.delete(e)), d && (i(l), i(u)), a && i(c), !m && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, p, !!i.dynamicChildren);
		}
	},
	move: lr,
	hydrate: ur
};
function lr(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && r(e.targetAnchor, t, n);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !er.has(e) && (!d || rr(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function ur(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
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
	let m = t.target = sr(t.props, c), h = rr(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || pr(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || pr(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), fr(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var dr = cr;
function fr(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function pr(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[tr] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var mr = /* @__PURE__ */ Symbol("_leaveCb");
function hr(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, hr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function M(e, t) {
	return _(e) ? /* @__PURE__ */ l({ name: e.name }, t, { setup: e }) : e;
}
function gr() {
	let e = Ia();
	return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function _r(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function vr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var yr = /* @__PURE__ */ new WeakMap();
function br(e, t, n, i, a = !1) {
	if (p(e)) {
		e.forEach((e, r) => br(e, t && (p(t) ? t[r] : t), n, i, a));
		return;
	}
	if (Sr(i) && !a) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && br(e, t, n, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? Za(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ Zt(g), b = g === r ? o : (e) => vr(h, e) ? !1 : f(y, e), x = (e, t) => !(t && vr(h, t));
	if (m != null && m !== d) {
		if (xr(t), v(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ tn(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (_(d)) bn(d, l, 12, [c, h]);
	else {
		let t = v(d), r = /* @__PURE__ */ tn(d);
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
					i(), yr.delete(e);
				};
				t.id = -1, yr.set(e, t), Zi(t, n);
			} else xr(e), i();
		}
	}
}
function xr(e) {
	let t = yr.get(e);
	t && (t.flags |= 8, yr.delete(e));
}
pe().requestIdleCallback, pe().cancelIdleCallback;
var Sr = (e) => !!e.type.__asyncLoader, Cr = (e) => e.type.__isKeepAlive;
function wr(e, t) {
	Er(e, "a", t);
}
function Tr(e, t) {
	Er(e, "da", t);
}
function Er(e, t, n = Fa) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Or(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) Cr(e.parent.vnode) && Dr(r, t, n, e), e = e.parent;
	}
}
function Dr(e, t, n, r) {
	let i = Or(t, e, r, !0);
	Fr(() => {
		u(r[t], i);
	}, n);
}
function Or(e, t, n = Fa, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Xe();
			let i = za(n), a = xn(t, n, e, r);
			return i(), Ze(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var kr = (e) => (t, n = Fa) => {
	(!Ha || e === "sp") && Or(e, (...e) => t(...e), n);
}, Ar = kr("bm"), jr = kr("m"), Mr = kr("bu"), Nr = kr("u"), Pr = kr("bum"), Fr = kr("um"), Ir = kr("sp"), Lr = kr("rtg"), Rr = kr("rtc");
function zr(e, t = Fa) {
	Or("ec", e, t);
}
var Br = "components", Vr = /* @__PURE__ */ Symbol.for("v-ndc");
function Hr(e) {
	return v(e) ? Ur(Br, e, !1) || e : e || Vr;
}
function Ur(e, t, n = !0, r = !1) {
	let i = Bn || Fa;
	if (i) {
		let n = i.type;
		if (e === Br) {
			let e = Qa(n, !1);
			if (e && (e === t || e === T(t) || e === se(T(t)))) return n;
		}
		let a = Wr(i[e] || n[e], t) || Wr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function Wr(e, t) {
	return e && (e[t] || e[T(t)] || e[se(T(t))]);
}
function N(e, t, n, r) {
	let i, a = n && n[r], o = p(e);
	if (o || v(e)) {
		let n = o && /* @__PURE__ */ qt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Yt(e), s = /* @__PURE__ */ Jt(e), e = dt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? en($t(e[n])) : $t(e[n]) : e[n], n, void 0, a && a[n]);
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
function Gr(e, t, n = {}, r, i) {
	if (Bn.ce || Bn.parent && Sr(Bn.parent) && Bn.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), F(), L(P, null, [z("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), F();
	let o = a && Kr(a(n)), s = n.key || o && o.key, c = L(P, { key: (s && !y(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Kr(e) {
	return e.some((e) => ya(e) ? !(e.type === da || e.type === P && !Kr(e.children)) : !0) ? e : null;
}
function qr(e, t) {
	let n = {};
	for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : ce(r)] = e[r];
	return n;
}
var Jr = (e) => e ? Va(e) ? Za(e) : Jr(e.parent) : null, Yr = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Jr(e.parent),
	$root: (e) => Jr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => oi(e),
	$forceUpdate: (e) => e.f ||= () => {
		Nn(e.update);
	},
	$nextTick: (e) => e.n ||= jn.bind(e.proxy),
	$watch: (e) => Qn.bind(e)
}), Xr = (e, t) => e !== r && !e.__isScriptSetup && f(e, t), Zr = {
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
			else if (Xr(i, t)) return s[t] = 1, i[t];
			else if (a !== r && f(a, t)) return s[t] = 2, a[t];
			else if (f(o, t)) return s[t] = 3, o[t];
			else if (n !== r && f(n, t)) return s[t] = 4, n[t];
			else ti && (s[t] = 0);
		}
		let u = Yr[t], d, p;
		if (u) return t === "$attrs" && st(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== r && f(n, t)) return s[t] = 4, n[t];
		if (p = l.config.globalProperties, f(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: i, setupState: a, ctx: o } = e;
		return Xr(a, t) ? (a[t] = n, !0) : i !== r && f(i, t) ? (i[t] = n, !0) : f(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== r && c[0] !== "$" && f(e, c) || Xr(t, c) || f(o, c) || f(i, c) || f(Yr, c) || f(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? f(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Qr() {
	return $r("useSlots").slots;
}
function $r(e) {
	let t = Ia();
	return t.setupContext ||= Xa(t);
}
function ei(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var ti = !0;
function ni(e) {
	let t = oi(e), n = e.proxy, r = e.ctx;
	ti = !1, t.beforeCreate && ii(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: ee, render: te, renderTracked: ne, renderTriggered: re, errorCaptured: ie, serverPrefetch: w, expose: T, inheritAttrs: ae, components: oe, directives: se, filters: ce } = t;
	if (u && ri(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Ut(t));
	}
	if (ti = !0, o) for (let e in o) {
		let t = o[e], i = H({
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
	if (c) for (let e in c) ai(c[e], r, n, e);
	if (l) {
		let e = _(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Gn(t, e[t]);
		});
	}
	d && ii(d, e, "c");
	function E(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (E(Ar, f), E(jr, m), E(Mr, h), E(Nr, g), E(wr, v), E(Tr, y), E(zr, ie), E(Rr, ne), E(Lr, re), E(Pr, S), E(Fr, ee), E(Ir, w), p(T)) if (T.length) {
		let t = e.exposed ||= {};
		T.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	te && e.render === a && (e.render = te), ae != null && (e.inheritAttrs = ae), oe && (e.components = oe), se && (e.directives = se), w && _r(e);
}
function ri(e, t, n = a) {
	p(e) && (e = fi(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? Kn(r.from || n, r.default, !0) : Kn(r.from || n) : Kn(r), /* @__PURE__ */ tn(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function ii(e, t, n) {
	xn(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ai(e, t, n, r) {
	let i = r.includes(".") ? $n(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		_(n) && Xn(i, n);
	} else if (_(e)) Xn(i, e.bind(n));
	else if (b(e)) if (p(e)) e.forEach((e) => ai(e, t, n, r));
	else {
		let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
		_(r) && Xn(i, r, e);
	}
}
function oi(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => si(c, e, o, !0)), si(c, t, o)), b(t) && a.set(t, c), c;
}
function si(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && si(e, a, n, !0), i && i.forEach((t) => si(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = ci[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var ci = {
	data: li,
	props: hi,
	emits: hi,
	methods: mi,
	computed: mi,
	beforeCreate: pi,
	created: pi,
	beforeMount: pi,
	mounted: pi,
	beforeUpdate: pi,
	updated: pi,
	beforeDestroy: pi,
	beforeUnmount: pi,
	destroyed: pi,
	unmounted: pi,
	activated: pi,
	deactivated: pi,
	errorCaptured: pi,
	serverPrefetch: pi,
	components: mi,
	directives: mi,
	watch: gi,
	provide: li,
	inject: di
};
function li(e, t) {
	return t ? e ? function() {
		return l(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function di(e, t) {
	return mi(fi(e), fi(t));
}
function fi(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function pi(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function mi(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function hi(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), ei(e), ei(t ?? {})) : t;
}
function gi(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = pi(e[r], t[r]);
	return n;
}
function _i() {
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
var vi = 0;
function yi(e, t) {
	return function(n, r = null) {
		_(n) || (n = l({}, n)), r != null && !b(r) && (r = null);
		let i = _i(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: vi++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: eo,
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
					let u = c._ceVNode || z(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Za(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (xn(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = bi;
				bi = c;
				try {
					return e();
				} finally {
					bi = t;
				}
			}
		};
		return c;
	};
}
var bi = null, xi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${T(t)}Modifiers`] || e[`${oe(t)}Modifiers`];
function Si(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && xi(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = n.map(de)));
	let c, l = i[c = ce(t)] || i[c = ce(T(t))];
	!l && o && (l = i[c = ce(oe(t))]), l && xn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, xn(u, e, 6, a);
	}
}
var Ci = /* @__PURE__ */ new WeakMap();
function wi(e, t, n = !1) {
	let r = n ? Ci : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!_(e)) {
		let r = (e) => {
			let n = wi(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), b(e) && r.set(e, o), o);
}
function Ti(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, oe(t)) || f(e, t));
}
function Ei(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Hn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Da(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = Da(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : Di(s);
		}
	} catch (t) {
		pa.length = 0, Sn(t, e, 1), v = z(da);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = Oi(y, a)), b = Ta(b, y, !1, !0));
	}
	return n.dirs && (b = Ta(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && hr(b, n.transition), v = b, Hn(_), v;
}
var Di = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Oi = (e, t) => {
	let n = {};
	for (let r in e) (!c(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function ki(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Ai(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (ji(o, r, n) && !Ti(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Ai(r, o, l) : !0 : !!o;
	return !1;
}
function Ai(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (ji(t, e, a) && !Ti(n, a)) return !0;
	}
	return !1;
}
function ji(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !Ce(r, i) : r !== i;
}
function Mi({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Ni = {}, Pi = () => Object.create(Ni), Fi = (e) => Object.getPrototypeOf(e) === Ni;
function Ii(e, t, n, r = !1) {
	let i = {}, a = Pi();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Ri(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Wt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function Li(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ Zt(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Ti(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
				else {
					let t = T(o);
					i[t] = zi(c, s, t, u, e, !1);
				}
				else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Ri(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !f(t, a) && ((r = oe(a)) === a || !f(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = zi(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !f(t, e)) && (delete a[e], l = !0);
	}
	l && ct(e.attrs, "set", "");
}
function Ri(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (re(r)) continue;
		let l = t[r], u;
		a && f(a, u = T(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : Ti(e.emitsOptions, r) || (!(r in i) || l !== i[r]) && (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ Zt(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = zi(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function zi(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = f(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && _(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = za(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === oe(n)) && (r = !0));
	}
	return r;
}
var Bi = /* @__PURE__ */ new WeakMap();
function Vi(e, t, n = !1) {
	let a = n ? Bi : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!_(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = Vi(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return b(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = T(s[e]);
		Hi(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = T(e);
		if (Hi(t)) {
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
function Hi(e) {
	return e[0] !== "$" && !re(e);
}
var Ui = (e) => e === "_" || e === "_ctx" || e === "$stable", Wi = (e) => p(e) ? e.map(Da) : [Da(e)], Gi = (e, t, n) => {
	if (t._n) return t;
	let r = j((...e) => Wi(t(...e)), n);
	return r._c = !1, r;
}, Ki = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ui(n)) continue;
		let i = e[n];
		if (_(i)) t[n] = Gi(n, i, r);
		else if (i != null) {
			let e = Wi(i);
			t[n] = () => e;
		}
	}
}, qi = (e, t) => {
	let n = Wi(t);
	e.slots.default = () => n;
}, Ji = (e, t, n) => {
	for (let r in t) (n || !Ui(r)) && (e[r] = t[r]);
}, Yi = (e, t, n) => {
	let r = e.slots = Pi();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (Ji(r, t, n), n && ue(r, "_", e, !0)) : Ki(t, r);
	} else t && qi(e, t);
}, Xi = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : Ji(a, t, n) : (o = !t.$stable, Ki(t, a)), s = t;
	} else t && (qi(e, t), s = { default: 1 });
	if (o) for (let e in a) !Ui(e) && s[e] == null && delete a[e];
}, Zi = la;
function Qi(e) {
	return $i(e);
}
function $i(e, t) {
	let n = pe();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !ba(e, t) && (r = xe(e), _e(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case ua:
				y(e, t, n, r);
				break;
			case da:
				b(e, t, n, r);
				break;
			case fa:
				e ?? x(t, n, r, o);
				break;
			case P:
				oe(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? ee(e, t, n, r, i, a, o, s, c) : d & 6 ? se(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, we);
		}
		u != null && i ? br(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && br(e.ref, null, a, e, !0);
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
				n && n._beginPatch(), w(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, te = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && ie(e.children, d, null, r, i, ea(e, a), s, u), _ && Wn(e, null, r, "created"), ne(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !re(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ja(f, r, e);
		}
		_ && Wn(e, null, r, "beforeMount");
		let v = na(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && Zi(() => {
			try {
				f && ja(f, r, e), v && g.enter(d), _ && Wn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ne = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || ca(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, ie = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? Oa(e[l]) : Da(e[l]), t, n, r, i, a, o, s);
	}, w = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && ta(n, !1), (g = h.onVnodeBeforeUpdate) && ja(g, n, t, e), f && Wn(t, e, n, "beforeUpdate"), n && ta(n, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? T(e.dynamicChildren, d, l, n, i, ea(t, a), o) : s || fe(e, t, l, null, n, i, ea(t, a), o, !1), u > 0) {
			if (u & 16) ae(l, m, h, n, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], i = m[r], o = h[r];
					(o !== i || r === "value") && c(l, r, i, o, a, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && ae(l, m, h, n, a);
		((g = h.onVnodeUpdated) || f) && Zi(() => {
			g && ja(g, n, t, e), f && Wn(t, e, n, "updated");
		}, i);
	}, T = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === P || !ba(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, ae = (e, t, n, i, a) => {
		if (t !== n) {
			if (t !== r) for (let r in t) !re(r) && !(r in n) && c(e, r, t[r], null, a, i);
			for (let r in n) {
				if (re(r)) continue;
				let o = n[r], s = t[r];
				o !== s && r !== "value" && c(e, r, s, o, a, i);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, oe = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), ie(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (T(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && ra(e, t, !0)) : fe(e, t, n, f, i, a, s, c, l);
	}, se = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ce(t, n, r, i, a, o, c) : E(e, t, c);
	}, ce = (e, t, n, r, i, a, o) => {
		let s = e.component = Pa(e, r, i);
		if (Cr(e) && (s.ctx.renderer = we), Ua(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ue, o), !e.el) {
				let r = s.subTree = z(da);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ue(s, e, t, n, i, a, o);
	}, E = (e, t, n) => {
		let r = t.component = e.component;
		if (ki(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			de(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, ue = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = aa(e);
					if (n) {
						t && (t.el = c.el, de(e, t, o)), n.asyncDep.then(() => {
							Zi(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				ta(e, !1), t ? (t.el = c.el, de(e, t, o)) : t = c, n && le(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ja(d, s, t, c), ta(e, !0);
				let f = Ei(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), xe(p), e, i, a), t.el = f.el, u === null && Mi(e, f.el), r && Zi(r, i), (d = t.props && t.props.onVnodeUpdated) && Zi(() => ja(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Sr(t);
				if (ta(e, !1), l && le(l), !m && (o = c && c.onVnodeBeforeMount) && ja(o, d, t), ta(e, !0), s && O) {
					let t = () => {
						e.subTree = Ei(e), O(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Ei(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && Zi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Zi(() => ja(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Sr(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Zi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Fe(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Nn(u), ta(e, !0), l();
	}, de = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Li(e, t.props, r, n), Xi(e, t.children, n), Xe(), In(e), Ze();
	}, fe = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				he(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				me(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && be(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? he(l, d, n, r, i, a, o, s, c) : be(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && ie(d, n, r, i, a, o, s, c));
	}, me = (e, t, n, r, a, o, s, c, l) => {
		e ||= i, t ||= i;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? Oa(t[p]) : Da(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? be(e, a, o, !0, !1, f) : ie(t, n, r, a, o, s, c, l, f);
	}, he = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? Oa(t[u]) : Da(t[u]);
			if (ba(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? Oa(t[p]) : Da(t[p]);
			if (ba(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? Oa(t[u]) : Da(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) _e(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Oa(t[u]) : Da(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					_e(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && ba(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? _e(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let ee = x ? ia(C) : i;
			for (_ = ee.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || sa(f) : r;
				C[u] === 0 ? v(null, i, n, p, a, o, s, c, l) : x && (_ < 0 || u !== ee[_] ? ge(i, n, p, 2) : _--);
			}
		}
	}, ge = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			ge(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, we);
			return;
		}
		if (c === P) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) ge(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === fa) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.persisted && !a[mr] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Zi(() => l.enter(a), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				let e = a._isLeaving || !!a[mr];
				a._isLeaving && a[mr](!0), l.persisted && !e ? u() : r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, _e = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (Xe(), br(s, null, n, e, !0), Ze()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Sr(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ja(_, t, e), u & 6) ye(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Wn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, we, r) : l && !l.hasOnce && (a !== P || d > 0 && d & 64) ? be(l, t, n, !1, !0) : (a === P && d & 384 || !i && u & 16) && be(c, t, n), r && ve(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Zi(() => {
			_ && ja(_, t, e), h && Wn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, ve = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === P) {
			D(n, r);
			return;
		}
		if (t === fa) {
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
	}, D = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ye = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		oa(c), oa(l), r && le(r), i.stop(), a && (a.flags |= 8, _e(o, e, t, n)), s && Zi(s, t), Zi(() => {
			e.isUnmounted = !0;
		}, t);
	}, be = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) _e(e[o], t, n, r, i);
	}, xe = (e) => {
		if (e.shapeFlag & 6) return xe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[tr];
		return n ? h(n) : t;
	}, Se = !1, Ce = (e, t, n) => {
		let r;
		e == null ? t._vnode && (_e(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, Se ||= (Se = !0, In(r), Ln(), !1);
	}, we = {
		p: v,
		um: _e,
		m: ge,
		r: ve,
		mt: ce,
		mc: ie,
		pc: fe,
		pbc: T,
		n: xe,
		o: e
	}, Te, O;
	return t && ([Te, O] = t(we)), {
		render: Ce,
		hydrate: Te,
		createApp: yi(Ce, Te)
	};
}
function ea({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ta({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function na(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ra(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Oa(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && ra(t, a)), a.type === ua && (a.patchFlag === -1 && (a = i[e] = Oa(a)), a.el = t.el), a.type === da && !a.el && (a.el = t.el);
	}
}
function ia(e) {
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
function aa(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : aa(t);
}
function oa(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function sa(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? sa(t.subTree) : null;
}
var ca = (e) => e.__isSuspense;
function la(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : Fn(e);
}
var P = /* @__PURE__ */ Symbol.for("v-fgt"), ua = /* @__PURE__ */ Symbol.for("v-txt"), da = /* @__PURE__ */ Symbol.for("v-cmt"), fa = /* @__PURE__ */ Symbol.for("v-stc"), pa = [], ma = null;
function F(e = !1) {
	pa.push(ma = e ? null : []);
}
function ha() {
	pa.pop(), ma = pa[pa.length - 1] || null;
}
var ga = 1;
function _a(e, t = !1) {
	ga += e, e < 0 && ma && t && (ma.hasOnce = !0);
}
function va(e) {
	return e.dynamicChildren = ga > 0 ? ma || i : null, ha(), ga > 0 && ma && ma.push(e), e;
}
function I(e, t, n, r, i, a) {
	return va(R(e, t, n, r, i, a, !0));
}
function L(e, t, n, r, i) {
	return va(z(e, t, n, r, i, !0));
}
function ya(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function ba(e, t) {
	return e.type === t.type && e.key === t.key;
}
var xa = ({ key: e }) => e ?? null, Sa = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ tn(e) || _(e) ? {
	i: Bn,
	r: e,
	k: t,
	f: !!n
} : e);
function R(e, t = null, n = null, r = 0, i = null, a = e === P ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && xa(t),
		ref: t && Sa(t),
		scopeId: Vn,
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
		ctx: Bn
	};
	return s ? (ka(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), ga > 0 && !o && ma && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && ma.push(c), c;
}
var z = Ca;
function Ca(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Vr) && (e = da), ya(e)) {
		let r = Ta(e, t, !0);
		return n && ka(r, n), ga > 0 && !a && ma && (r.shapeFlag & 6 ? ma[ma.indexOf(e)] = r : ma.push(r)), r.patchFlag = -2, r;
	}
	if ($a(e) && (e = e.__vccOpts), t) {
		t = wa(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = D(e)), b(n) && (/* @__PURE__ */ Xt(n) && !p(n) && (n = l({}, n)), t.style = me(n));
	}
	let o = v(e) ? 1 : ca(e) ? 128 : nr(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return R(e, t, n, r, i, o, a, !0);
}
function wa(e) {
	return e ? /* @__PURE__ */ Xt(e) || Fi(e) ? l({}, e) : e : null;
}
function Ta(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Aa(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && xa(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(Sa(t)) : [a, Sa(t)] : Sa(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== P ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ta(e.ssContent),
		ssFallback: e.ssFallback && Ta(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && hr(u, c.clone(u)), u;
}
function B(e = " ", t = 0) {
	return z(ua, null, e, t);
}
function Ea(e, t) {
	let n = z(fa, null, e);
	return n.staticCount = t, n;
}
function V(e = "", t = !1) {
	return t ? (F(), L(da, null, e)) : z(da, null, e);
}
function Da(e) {
	return e == null || typeof e == "boolean" ? z(da) : p(e) ? z(P, null, e.slice()) : ya(e) ? Oa(e) : z(ua, null, String(e));
}
function Oa(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ta(e);
}
function ka(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (p(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), ka(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !Fi(t) ? t._ctx = Bn : r === 3 && Bn && (Bn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else _(t) ? (t = {
		default: t,
		_ctx: Bn
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [B(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function Aa(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = D([t.class, r.class]));
		else if (e === "style") t.style = me([t.style, r.style]);
		else if (s(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(p(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !c(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function ja(e, t, n, r = null) {
	xn(e, t, 7, [n, r]);
}
var Ma = _i(), Na = 0;
function Pa(e, t, n) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || Ma, o = {
		uid: Na++,
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
		scope: new ke(!0),
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
		propsOptions: Vi(i, a),
		emitsOptions: wi(i, a),
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
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Si.bind(null, o), e.ce && e.ce(o), o;
}
var Fa = null, Ia = () => Fa || Bn, La, Ra;
{
	let e = pe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	La = t("__VUE_INSTANCE_SETTERS__", (e) => Fa = e), Ra = t("__VUE_SSR_SETTERS__", (e) => Ha = e);
}
var za = (e) => {
	let t = Fa;
	return La(e), e.scope.on(), () => {
		e.scope.off(), La(t);
	};
}, Ba = () => {
	Fa && Fa.scope.off(), La(null);
};
function Va(e) {
	return e.vnode.shapeFlag & 4;
}
var Ha = !1;
function Ua(e, t = !1, n = !1) {
	t && Ra(t);
	let { props: r, children: i } = e.vnode, a = Va(e);
	Ii(e, r, a, t), Yi(e, i, n || t);
	let o = a ? Wa(e, t) : void 0;
	return t && Ra(!1), o;
}
function Wa(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Zr);
	let { setup: r } = n;
	if (r) {
		Xe();
		let n = e.setupContext = r.length > 1 ? Xa(e) : null, i = za(e), a = bn(r, e, 0, [e.props, n]), o = x(a);
		if (Ze(), i(), (o || e.sp) && !Sr(e) && _r(e), o) {
			if (a.then(Ba, Ba), t) return a.then((n) => {
				Ga(e, n, t);
			}).catch((t) => {
				Sn(t, e, 0);
			});
			e.asyncDep = a;
		} else Ga(e, a, t);
	} else Ja(e, t);
}
function Ga(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = on(t)), Ja(e, n);
}
var Ka, qa;
function Ja(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && Ka && !r.render) {
			let t = r.template || oi(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r;
				r.render = Ka(t, l(l({
					isCustomElement: n,
					delimiters: a
				}, i), o));
			}
		}
		e.render = r.render || a, qa && qa(e);
	}
	{
		let t = za(e);
		Xe();
		try {
			ni(e);
		} finally {
			Ze(), t();
		}
	}
}
var Ya = { get(e, t) {
	return st(e, "get", ""), e[t];
} };
function Xa(e) {
	return {
		attrs: new Proxy(e.attrs, Ya),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Za(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(on(Qt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in Yr) return Yr[n](e);
		},
		has(e, t) {
			return t in e || t in Yr;
		}
	}) : e.proxy;
}
function Qa(e, t = !0) {
	return _(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function $a(e) {
	return _(e) && "__vccOpts" in e;
}
var H = (e, t) => /* @__PURE__ */ pn(e, t, Ha), eo = "3.5.38", to = void 0, no = typeof window < "u" && window.trustedTypes;
if (no) try {
	to = /* @__PURE__ */ no.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var ro = to ? (e) => to.createHTML(e) : (e) => e, io = "http://www.w3.org/2000/svg", ao = "http://www.w3.org/1998/Math/MathML", oo = typeof document < "u" ? document : null, so = oo && /* @__PURE__ */ oo.createElement("template"), co = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? oo.createElementNS(io, e) : t === "mathml" ? oo.createElementNS(ao, e) : n ? oo.createElement(e, { is: n }) : oo.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => oo.createTextNode(e),
	createComment: (e) => oo.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => oo.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			so.innerHTML = ro(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = so.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, lo = /* @__PURE__ */ Symbol("_vtc");
function uo(e, t, n) {
	let r = e[lo];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var fo = /* @__PURE__ */ Symbol("_vod"), po = /* @__PURE__ */ Symbol("_vsh"), mo = /* @__PURE__ */ Symbol(""), ho = /(?:^|;)\s*display\s*:/;
function go(e, t, n) {
	let r = e.style, i = v(n), a = !1;
	if (n && !i) {
		if (t) if (v(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? vo(r, t, "");
		}
		else for (let e in t) n[e] ?? vo(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? vo(r, i, "") : So(e, i, !v(t) && t ? t[i] : void 0, o) || vo(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[mo];
			e && (n += ";" + e), r.cssText = n, a = ho.test(n);
		}
	} else t && e.removeAttribute("style");
	fo in e && (e[fo] = a ? r.display : "", e[po] && (r.display = "none"));
}
var _o = /\s*!important$/;
function vo(e, t, n) {
	if (p(n)) n.forEach((n) => vo(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = xo(e, t);
		_o.test(n) ? e.setProperty(oe(r), n.replace(_o, ""), "important") : e[r] = n;
	}
}
var yo = [
	"Webkit",
	"Moz",
	"ms"
], bo = {};
function xo(e, t) {
	let n = bo[t];
	if (n) return n;
	let r = T(t);
	if (r !== "filter" && r in e) return bo[t] = r;
	r = se(r);
	for (let n = 0; n < yo.length; n++) {
		let i = yo[n] + r;
		if (i in e) return bo[t] = i;
	}
	return t;
}
function So(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && v(r) && n === r;
}
var Co = "http://www.w3.org/1999/xlink";
function wo(e, t, n, r, i, a = be(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Co, t.slice(6, t.length)) : e.setAttributeNS(Co, t, n) : n == null || a && !xe(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
}
function To(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? ro(n) : n);
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
		r === "boolean" ? n = xe(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Eo(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Do(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Oo = /* @__PURE__ */ Symbol("_vei");
function ko(e, t, n, r, i = null) {
	let a = e[Oo] || (e[Oo] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = jo(t);
		r ? Eo(e, n, a[t] = Fo(r, i), s) : o && (Do(e, n, o, s), a[t] = void 0);
	}
}
var Ao = /(?:Once|Passive|Capture)$/;
function jo(e) {
	let t;
	if (Ao.test(e)) {
		t = {};
		let n;
		for (; n = e.match(Ao);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : oe(e.slice(2)), t];
}
var Mo = 0, No = /* @__PURE__ */ Promise.resolve(), Po = () => Mo ||= (No.then(() => Mo = 0), Date.now());
function Fo(e, t) {
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
				e && xn(e, t, 5, a);
			}
		} else xn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Po(), n;
}
var Io = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Lo = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? uo(e, r, o) : t === "style" ? go(e, n, r) : s(t) ? c(t) || ko(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ro(e, t, r, o)) ? (To(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && wo(e, t, r, o, a, t !== "value")) : e._isVueCE && (zo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? To(e, T(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), wo(e, t, r, o));
};
function Ro(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Io(t) && _(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Io(t) && v(n) ? !1 : t in e;
}
function zo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = T(t);
	return Array.isArray(n) ? n.some((e) => T(e) === r) : Object.keys(n).some((e) => T(e) === r);
}
var Bo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return p(t) ? (e) => le(t, e) : t;
};
function Vo(e) {
	e.target.composing = !0;
}
function Ho(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Uo = /* @__PURE__ */ Symbol("_assign");
function Wo(e, t, n) {
	return t && (e = e.trim()), n && (e = de(e)), e;
}
var Go = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[Uo] = Bo(i);
		let a = r || i.props && i.props.type === "number";
		Eo(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Uo](Wo(e.value, n, a));
		}), (n || a) && Eo(e, "change", () => {
			e.value = Wo(e.value, n, a);
		}), t || (Eo(e, "compositionstart", Vo), Eo(e, "compositionend", Ho), Eo(e, "change", Ho));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Uo] = Bo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? de(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Ko = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = h(t);
		Eo(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? de(Jo(e)) : Jo(e));
			e[Uo](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, jn(() => {
				e._assigning = !1;
			});
		}), e[Uo] = Bo(r);
	},
	mounted(e, { value: t }) {
		qo(e, t);
	},
	beforeUpdate(e, t, n) {
		e[Uo] = Bo(n);
	},
	updated(e, { value: t }) {
		e._assigning || qo(e, t);
	}
};
function qo(e, t) {
	let n = e.multiple, r = p(t);
	if (!(n && !r && !h(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = Jo(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = we(t, o) > -1;
			} else a.selected = t.has(o);
			else if (Ce(Jo(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function Jo(e) {
	return "_value" in e ? e._value : e.value;
}
var Yo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Xo = {
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
	exact: (e, t) => Yo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Zo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Xo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Qo = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, $o = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = oe(n.key);
		if (t.some((e) => e === r || Qo[e] === r)) return e(n);
	}));
}, es = /* @__PURE__ */ l({ patchProp: Lo }, co), ts;
function ns() {
	return ts ||= Qi(es);
}
var rs = ((...e) => {
	let t = ns().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = as(e);
		if (!r) return;
		let i = t._component;
		!_(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, is(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function is(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function as(e) {
	return v(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var os = typeof window < "u", ss, cs = (e) => ss = e, ls = Symbol();
function us(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ds;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ds ||= {});
var fs = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function ps(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function ms(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		ys(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function hs(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function gs(e) {
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
var _s = typeof navigator == "object" ? navigator : { userAgent: "" }, vs = /Macintosh/.test(_s.userAgent) && /AppleWebKit/.test(_s.userAgent) && !/Safari/.test(_s.userAgent), ys = os ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !vs ? bs : "msSaveOrOpenBlob" in _s ? xs : Ss : () => {};
function bs(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? gs(r) : hs(r.href) ? ms(e, t, n) : (r.target = "_blank", gs(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		gs(r);
	}, 0));
}
function xs(e, t = "download", n) {
	if (typeof e == "string") if (hs(e)) ms(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			gs(t);
		});
	}
	else navigator.msSaveOrOpenBlob(ps(e, n), t);
}
function Ss(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return ms(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(fs.HTMLElement)) || "safari" in fs, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || vs) && typeof FileReader < "u") {
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
var { assign: Cs } = Object;
function ws() {
	let e = Ae(!0), t = e.run(() => /* @__PURE__ */ k({})), n = [], r = [], i = Qt({
		install(e) {
			cs(i), i._a = e, e.provide(ls, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
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
var Ts = () => {};
function Es(e, t, n, r = Ts) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && je() && Me(i), i;
}
function Ds(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Os = (e) => e(), ks = Symbol(), As = Symbol();
function js(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		us(i) && us(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ tn(r) && !/* @__PURE__ */ qt(r) ? e[n] = js(i, r) : e[n] = r;
	}
	return e;
}
var Ms = Symbol();
function Ns(e) {
	return !us(e) || !Object.prototype.hasOwnProperty.call(e, Ms);
}
var { assign: Ps } = Object;
function Fs(e) {
	return !!(/* @__PURE__ */ tn(e) && e.effect);
}
function Is(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), Ps(/* @__PURE__ */ sn(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Qt(H(() => {
			cs(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = Ls(e, l, t, n, r, !0), c;
}
function Ls(e, t, n = {}, r, i, a) {
	let o, s = Ps({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: ds.patchFunction,
			storeId: e,
			events: void 0
		}) : (js(r.state.value[e], t), n = {
			type: ds.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		jn().then(() => {
			m === i && (l = !0);
		}), u = !0, Ds(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Ps(e, t);
		});
	} : Ts;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if (ks in t) return t[As] = n, t;
		let i = function() {
			cs(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Ds(f, {
				args: n,
				name: i[As],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw Ds(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Ds(a, e), e)).catch((e) => (Ds(o, e), Promise.reject(e))) : (Ds(a, l), l);
		};
		return i[ks] = !0, i[As] = n, i;
	}, y = /* @__PURE__ */ Ut({
		_p: r,
		$id: e,
		$onAction: Es.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = Es(d, t, n.detached, () => a()), a = o.run(() => Xn(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: ds.direct,
					events: void 0
				}, r);
			}, Ps({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || Os)(() => r._e.run(() => (o = Ae()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ tn(n) && !Fs(n) || /* @__PURE__ */ qt(n) ? a || (p && Ns(n) && (/* @__PURE__ */ tn(n) ? n.value = p[t] : js(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return Ps(y, b), Ps(/* @__PURE__ */ Zt(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				Ps(t, e);
			});
		}
	}), r._p.forEach((e) => {
		Ps(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function Rs(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = qn();
		return n ||= o ? Kn(ls, null) : null, n && cs(n), n = ss, n._s.has(e) || (i ? Ls(e, t, r, n) : Is(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
function zs(e) {
	let t = /* @__PURE__ */ Zt(e), n = {};
	for (let r in t) {
		let i = t[r];
		i.effect ? n[r] = H({
			get: () => e[r],
			set(t) {
				e[r] = t;
			}
		}) : (/* @__PURE__ */ tn(i) || /* @__PURE__ */ qt(i)) && (n[r] = /* @__PURE__ */ un(e, r));
	}
	return n;
}
//#endregion
//#region src/state/pinia.ts
var Bs = ws();
//#endregion
//#region src/shared/assign-if-present.ts
function U(e, t, n) {
	n !== void 0 && (e[t] = n);
}
//#endregion
//#region src/functions/species-builder/item-reference-names.ts
function Vs(e) {
	return Us(e.name, e.specification);
}
function Hs(e) {
	let t = e.name.trim();
	if (!e.item) return t;
	if (!t) return Vs(e.item);
	if (!Gs(t)) {
		if (e.item.specification) return Us(t, e.item.specification);
		if (Gs(e.item.name) && Ks(t) === Ks(e.item.name)) return e.item.name.trim();
	}
	return t;
}
function Us(e, t) {
	let n = e.trim(), r = t?.trim();
	return !n || !r || Ws(n) ? n : `${n} (${r})`;
}
function Ws(e) {
	return /\(([^()]*)\)\s*$/.exec(e.trim())?.[1]?.trim() ?? "";
}
function Gs(e) {
	return /\([^()]*\)\s*$/.test(e.trim());
}
function Ks(e) {
	return e.split("(")[0]?.trim().toLocaleLowerCase() ?? "";
}
//#endregion
//#region src/functions/species-builder/replacement-row-records.ts
function qs(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = Hs(e.rolled), n = Hs(e.replacement);
		return t && n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function Js(e) {
	if (!e) return;
	let t = e.flatMap((e) => {
		let t = Hs(e.rolled), n = e.replacements.map(Hs).filter((e) => e.length > 0);
		return t && n.length > 0 ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
//#endregion
//#region src/functions/species-builder/linked-grant-records.ts
function Ys(e) {
	if (!e || e.length === 0) return;
	let t = e.map(Hs).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function Xs(e) {
	if (!e || e.length === 0) return;
	let t = e.flatMap((e) => {
		let t = e.choices.map(Hs).filter((e) => e.length > 0);
		return t.length > 0 ? [t.join(", ")] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/subspecies-list-fields.ts
function Zs(e) {
	return Ys(e.linkedSkills) ?? e.skills;
}
function Qs(e, t) {
	return oc(Zs(e), t.skillsAdded, t.skillsRemoved);
}
function $s(e, t) {
	return Qs(e, t) ?? Zs(e) ?? [];
}
function ec(e) {
	return Xs(e.linkedTalents) ?? e.talents;
}
function tc(e, t) {
	return oc(ec(e), t.talentsAdded, t.talentsRemoved);
}
function nc(e, t) {
	return ac(Ys(e.linkedTraits) ?? e.traits, t);
}
function rc(e, t, n = {}) {
	let r = n.subspecies ?? n.parent, i = oc(nc(e), t.traitsAdded, t.traitsRemoved);
	return i ? ac(i, r) : n.subspecies ? ac(nc(e), n.subspecies) : void 0;
}
function ic(e, t, n = {}) {
	return rc(e, t, n) ?? nc(e, n.parent) ?? [];
}
function ac(e, t) {
	if (!t) return e;
	let n = e ? [...e] : [];
	return n.includes(t) || n.push(t), n;
}
function oc(e, t, n) {
	if (!t && !n) return;
	let r = new Set(n ?? []), i = (e ?? []).filter((e) => !r.has(e));
	for (let e of t ?? []) i.includes(e) || i.push(e);
	return i;
}
//#endregion
//#region src/functions/species-builder/definition-plans.ts
function sc(e, t = []) {
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
var W = {
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
}, cc = {
	[W.Agility]: "Agility",
	[W.BallisticSkill]: "Ballistic Skill",
	[W.Dexterity]: "Dexterity",
	[W.Fellowship]: "Fellowship",
	[W.Initiative]: "Initiative",
	[W.Intelligence]: "Intelligence",
	[W.Strength]: "Strength",
	[W.Toughness]: "Toughness",
	[W.WeaponSkill]: "Weapon Skill",
	[W.Willpower]: "Willpower"
}, lc = {
	agility: W.Agility,
	"ballistic skill": W.BallisticSkill,
	dexterity: W.Dexterity,
	fellowship: W.Fellowship,
	initiative: W.Initiative,
	intelligence: W.Intelligence,
	strength: W.Strength,
	toughness: W.Toughness,
	"weapon skill": W.WeaponSkill,
	willpower: W.Willpower
};
function uc(e) {
	return e in cc;
}
//#endregion
//#region src/functions/species-builder/familiar-correction.ts
var dc = "constructfamiliar", fc = "Familiar", pc = "Compendium.wfrp4e-wom.items.Item.GWEA2m8FN3IbV7Su", mc = "Compendium.wfrp4e-wom.items.Item.6wTQe3nFr1j64D6s", hc = [
	"Athletics",
	"Channelling (Wind)",
	"Dodge",
	"Intuition",
	"Lore (Magick)",
	"Melee (Basic)",
	"Perception",
	"Language (Classical)",
	"Language (Magick)",
	"Stealth (Urban)",
	"Stealth (Rural)",
	"Research"
], gc = [
	"Petty Magic",
	"Read/Write",
	"Second Sight",
	"Savvy, Coolheaded",
	"Small",
	"Suffuse with (Wind)"
], _c = [
	"Climb",
	"Cool",
	"Endurance",
	"Intimidate",
	"Melee (Fencing)",
	"Melee (Flail)",
	"Melee (Parrying)",
	"Melee (Two-handed)"
], vc = [
	"Channelling (Wind)",
	"Intuition",
	"Lore (Magick)",
	"Language (Classical)",
	"Language (Magick)",
	"Stealth (Urban)",
	"Stealth (Rural)",
	"Research"
], yc = [
	"Fearless (Size Large or Smaller)",
	"Lightning Reflexes, Very Strong",
	"Sturdy",
	"Very Resilient, Warrior Born"
], bc = [
	"Petty Magic",
	"Read/Write",
	"Second Sight",
	"Savvy, Coolheaded"
];
function xc(e = dc) {
	return {
		careerTable: { rows: [{
			journalUuid: mc,
			name: "Spell Familiar"
		}] },
		characteristics: {
			[W.WeaponSkill]: "2d10+10",
			[W.BallisticSkill]: "2d10+10",
			[W.Strength]: "2d10+10",
			[W.Toughness]: "2d10+10",
			[W.Initiative]: "2d10+20",
			[W.Agility]: "2d10+20",
			[W.Dexterity]: "2d10+20",
			[W.Intelligence]: "1d10+30",
			[W.Willpower]: "1d10+30",
			[W.Fellowship]: "2d10+10"
		},
		extra: 0,
		fate: 2,
		includeInExtraSpecies: !0,
		key: e,
		movement: 4,
		name: fc,
		randomTalents: { talents: 0 },
		resilience: 1,
		skills: [...hc],
		subspecies: [
			{
				careerTable: { rows: [{
					journalUuid: pc,
					name: "Combat Familiar"
				}] },
				characteristics: {
					[W.WeaponSkill]: "1d10+30",
					[W.Strength]: "1d10+30",
					[W.Toughness]: "2d10+20",
					[W.Intelligence]: "2d10+10",
					[W.Willpower]: "2d10+10"
				},
				fate: 1,
				key: "combat",
				name: "Combat Familiar",
				resilience: 2,
				skillsAdded: [..._c],
				skillsRemoved: [...vc],
				talentsAdded: [...yc],
				talentsRemoved: [...bc]
			},
			{
				careerTable: { rows: [{
					journalUuid: mc,
					name: "Spell Familiar"
				}] },
				key: "spell",
				name: "Spell Familiar"
			},
			{
				careerTable: { rows: [{
					journalUuid: mc,
					name: "Spell Familiar"
				}] },
				key: "power",
				name: "Power Familiar",
				skillsRemoved: ["Channelling (Wind)", "Language (Magick)"],
				talentsAdded: ["Magical Assistant"],
				talentsRemoved: ["Petty Magic"]
			}
		],
		talents: [...gc],
		traits: ["Magical"],
		woundFormula: { formula: "2 * @tb + @wpb" }
	};
}
//#endregion
//#region src/functions/species-builder/wound-formula/compiler.ts
function Sc(e) {
	let t = [], n = /* @__PURE__ */ new Set(), r = e.trim();
	return r = r.replaceAll(/@([A-Za-z][\dA-Za-z]*)/g, (e, t) => {
		let r = Cc(t);
		return n.add(r), r;
	}), r = r.replaceAll(/{([^{}]+)}/g, (e, n) => wc(t, n, "total")), r = r.replaceAll(/\[([^[\]]+)]/g, (e, n) => wc(t, n, "bonus")), {
		expression: r,
		references: t,
		usedKeywords: n
	};
}
function Cc(e) {
	if ((/* @__PURE__ */ "ablaze.advantage.age.bleeding.blinded.broken.corruption.deafened.entangled.fate.fatigued.fortune.height.poisoned.rank.resilience.resolve.sb.sbMultiplier.scale.sin.size.status.stunned.tb.tbMultiplier.weight.wpb.wpbMultiplier.xp".split(".")).includes(e)) return e;
	throw Error(`Unknown wound formula keyword: @${e}`);
}
function wc(e, t, n) {
	let r = Tc(t, n, e), i = e.find((e) => Ec(e, r));
	return i ? i.variableName : (e.push(r), r.variableName);
}
function Tc(e, t, n) {
	let [r, i] = Dc(e), a = Oc(r), o = Mc(jc(r, i, t), n);
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
	return i && (s.characteristicOverride = kc(i)), s;
}
function Ec(e, t) {
	return e.characteristicKey === t.characteristicKey && e.characteristicOverride === t.characteristicOverride && e.kind === t.kind && e.name === t.name && e.source === t.source;
}
function Dc(e) {
	let t = e.split("|").map((e) => e.trim());
	if (t.length > 2 || !t[0]) throw Error(`Invalid wound formula attribute reference: ${e}`);
	return [t[0], t[1]];
}
function Oc(e) {
	let t = e.trim().toLocaleLowerCase();
	return uc(t) ? t : lc[t] ?? Ac[t];
}
function kc(e) {
	let t = Oc(e);
	if (!t) throw Error(`Unknown wound formula characteristic: ${e}`);
	return t;
}
var Ac = {
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
function jc(e, t, n) {
	let [r, ...i] = [e, t].flatMap((e) => e ? e.match(/\d+|[A-Za-z]+/g) ?? [] : []), a = r ? [r.toLocaleLowerCase(), ...i.map((e) => e.charAt(0).toLocaleUpperCase() + e.slice(1))].join("") : "attribute";
	return n === "bonus" ? `${a}Bonus` : a;
}
function Mc(e, t) {
	let n = new Set(t.map((e) => e.variableName));
	if (!n.has(e)) return e;
	let r = 2, i = `${e}${r}`;
	for (; n.has(i);) r += 1, i = `${e}${r}`;
	return i;
}
//#endregion
//#region src/functions/species-builder/wound-formula/script-lines.ts
function Nc(e) {
	let t = [];
	if (Ic(e, [
		"sb",
		"tb",
		"wpb"
	]) && (t.push(...Lc(e, "sb", "preWoundArgs.sb")), t.push(...Lc(e, "tb", "preWoundArgs.tb")), t.push(...Lc(e, "wpb", "preWoundArgs.wpb"))), Ic(e, [
		"sbMultiplier",
		"tbMultiplier",
		"wpbMultiplier"
	]) && (t.push("const multiplier = preWoundArgs.multiplier;"), t.push(...Lc(e, "sbMultiplier", "multiplier.sb")), t.push(...Lc(e, "tbMultiplier", "multiplier.tb")), t.push(...Lc(e, "wpbMultiplier", "multiplier.wpb"))), Ic(e, ["scale", "size"]) && (t.push(...Rc()), t.push("const size = actorSizeStep();"), t.push(...Lc(e, "scale", "2 ** size"))), Ic(e, Uc) && (t.push(...Lc(e, "age", "Number(actor.system.details.age.value)")), t.push(...Lc(e, "height", "Number(actor.system.details.height.value)")), t.push(...Lc(e, "weight", "Number(actor.system.details.weight.value)")), t.push(...Kc(e))), Ic(e, Wc) && (t.push(...Lc(e, "xp", "actor.system.details.experience.total")), t.push(...Lc(e, "fate", "actor.system.status.fate.value")), t.push(...Lc(e, "fortune", "actor.system.status.fortune.value")), t.push(...Lc(e, "resilience", "actor.system.status.resilience.value")), t.push(...Lc(e, "resolve", "actor.system.status.resolve.value")), t.push(...Lc(e, "corruption", "actor.system.status.corruption.value")), t.push(...Lc(e, "sin", "actor.system.status.sin.value")), t.push(...Lc(e, "advantage", "actor.system.status.advantage.value"))), Ic(e, Gc)) {
		t.push(...qc());
		for (let n of Gc) t.push(...Lc(e, n, `conditionValue("${n}")`));
	}
	return t.length ? [...t, ""] : [];
}
function Pc(e) {
	let t = e.length > 0, n = e.some((e) => e.source === "skill");
	return [...zc(t), ...Bc(n)];
}
function Fc(e) {
	return e.map((e) => e.source === "characteristic" ? Vc(e) : Hc(e));
}
function Ic(e, t) {
	return t.some((t) => e.has(t));
}
function Lc(e, t, n) {
	return e.has(t) ? [`const ${t} = ${n};`] : [];
}
function Rc() {
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
function zc(e) {
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
function Bc(e) {
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
function Vc(e) {
	let t = e.kind === "bonus" ? "characteristicBonus" : "characteristicTotal";
	return `const ${e.variableName} = ${t}(${JSON.stringify(e.characteristicKey)});`;
}
function Hc(e) {
	let t = e.kind === "bonus" ? "skillBonus" : "skillTotal", n = e.characteristicOverride ? JSON.stringify(e.characteristicOverride) : "undefined";
	return `const ${e.variableName} = ${t}(${JSON.stringify(e.name)}, ${n});`;
}
var Uc = [
	"age",
	"height",
	"rank",
	"status",
	"weight"
], Wc = [
	"advantage",
	"corruption",
	"fate",
	"fortune",
	"resilience",
	"resolve",
	"sin",
	"xp"
], Gc = [
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
function Kc(e) {
	let t = [];
	return e.has("status") && t.push("function statusTierValue() {", "  const statusTiers = { brass: 1, silver: 2, gold: 3 };", "  const tier = actor.system.details.status.tier;", "  return statusTiers[String(tier).toLocaleLowerCase()] || Number(tier);", "}", "const status = statusTierValue();"), t.push(...Lc(e, "rank", "Number(actor.system.details.status.standing)")), t;
}
function qc() {
	return [
		"function conditionValue(key) {",
		"  return actor.hasCondition(key)?.conditionValue || 0;",
		"}"
	];
}
//#endregion
//#region src/functions/species-builder/wound-formula/index.ts
function Jc(e) {
	let t = Sc(e);
	return [
		...Nc(t.usedKeywords),
		...Pc(t.references),
		...Fc(t.references),
		"",
		`args.wounds = ${t.expression};`
	];
}
//#endregion
//#region src/functions/species-builder/wound-formula-traits.ts
var Yc = "generatedSpeciesWoundFormulaEffect", Xc = "generatedSpeciesWoundFormulaTrait";
function Zc(e, t = []) {
	return [...sc(e, t).flatMap((e) => [...e.emitBaseDefinition ? al(e.definition) : [], ...ol(e.definition, e.subspecies)]), ...sl(e, t)];
}
function Qc(e) {
	return `__${e.name.trim()}__`;
}
function $c(e, t) {
	return `__${e.name.trim()} / ${t.name.trim()}__`;
}
function el({ flagScope: e, spec: t }) {
	return {
		effects: [tl({
			flagScope: e,
			spec: t
		})],
		flags: { [e]: { [Xc]: {
			speciesKey: t.speciesKey,
			subspeciesKey: t.subspeciesKey ?? ""
		} } },
		img: "icons/svg/aura.svg",
		name: t.name,
		system: { description: { value: il(t) } },
		type: "trait"
	};
}
function tl({ flagScope: e, spec: t }) {
	return {
		changes: [],
		disabled: !1,
		flags: { [e]: { [Yc]: {
			speciesKey: t.speciesKey,
			subspeciesKey: t.subspeciesKey ?? ""
		} } },
		img: "icons/svg/aura.svg",
		name: `${t.ownerName} Wound Formula`,
		system: {
			scriptData: [{
				label: `${t.ownerName} Wound Formula Capture`,
				script: nl(),
				trigger: "preWoundCalc"
			}, {
				label: `${t.ownerName} Wound Formula`,
				script: rl(t),
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
function nl() {
	return [
		"// Generated by Drowsy's WFRP4e Customizers.",
		"const storageKey = \"__wfrp4eCustomizerWoundFormulaArgs\";",
		"const sourceId = this.item?.id || this.effect.id;",
		"this.actor[storageKey] ||= {};",
		"this.actor[storageKey][sourceId] = args;"
	].join("\n");
}
function rl(e) {
	return [
		"// Generated by Drowsy's WFRP4e Customizers.",
		"const storageKey = \"__wfrp4eCustomizerWoundFormulaArgs\";",
		"const sourceId = this.item?.id || this.effect.id;",
		"const preWoundArgs = this.actor[storageKey][sourceId];",
		"const actor = this.actor;",
		"",
		...Jc(e.formula)
	].join("\n");
}
function il(e) {
	return ["<p>Generated by Drowsy's WFRP4e Customizers. This Trait applies a custom Species Builder wound formula.</p>", `<p>${cl(e.formula)}</p>`].join("");
}
function al(e) {
	return e.woundFormula?.formula ? [{
		formula: e.woundFormula.formula,
		name: Qc(e),
		ownerName: e.name,
		speciesKey: e.key
	}] : [];
}
function ol(e, t) {
	return t.flatMap((t) => t.woundFormula?.formula ? [{
		formula: t.woundFormula.formula,
		name: $c(e, t),
		ownerName: `${e.name} / ${t.name}`,
		speciesKey: e.key,
		subspeciesKey: t.key
	}] : []);
}
function sl(e, t) {
	if (!e.correctExistingWfrpSpecies) return [];
	let n = t.find((e) => e.name.trim() === fc);
	return n ? al(xc(n.key)) : [];
}
function cl(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/functions/species-builder/species-config.ts
function ll(e, t = []) {
	let n = ul();
	for (let r of sc(e, t)) r.emitBaseDefinition && dl(n, r.definition), fl(n, r.definition, r.subspecies);
	return n;
}
function ul() {
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
function dl(e, t) {
	e.species[t.key] = t.name, U(e.speciesCharacteristics, t.key, t.characteristics), e.speciesSkills[t.key] = Zs(t) ?? [], e.speciesTalents[t.key] = ec(t) ?? [], U(e.speciesRandomTalents, t.key, t.randomTalents), U(e.speciesTalentReplacement, t.key, gl(t)), U(e.speciesTraits, t.key, nc(t, t.woundFormula ? Qc(t) : void 0)), U(e.speciesMovement, t.key, t.movement), U(e.speciesFate, t.key, t.fate), U(e.speciesRes, t.key, t.resilience), U(e.speciesExtra, t.key, t.extra), U(e.speciesAge, t.key, t.age), U(e.speciesHeight, t.key, t.height), U(e.speciesCareerReplacements, t.key, _l(t)), t.includeInExtraSpecies && e.extraSpecies.push(t.key);
}
function fl(e, t, n) {
	for (let r of n) {
		let n = e.subspecies[t.key] ?? {}, i = r.woundFormula ? $c(t, r) : void 0, a = r.careerTable ? hl(t, r) : void 0;
		n[r.key] = pl(t, r, i, a), e.subspecies[t.key] = n;
	}
}
function pl(e, t, n, r) {
	let i = { name: t.name };
	return U(i, "characteristics", t.characteristics ? {
		...e.characteristics,
		...t.characteristics
	} : void 0), U(i, "skills", Qs(e, t)), U(i, "talents", tc(e, t)), U(i, "speciesTraits", rc(e, t, {
		parent: e.woundFormula ? Qc(e) : void 0,
		subspecies: n
	})), U(i, "randomTalents", t.randomTalents), U(i, "talentReplacement", gl(t)), U(i, "movement", t.movement), U(i, "fate", t.fate), U(i, "resilience", t.resilience), U(i, "extra", t.extra), U(i, "careerTable", r), i;
}
function ml(e) {
	return e.key;
}
function hl(e, t) {
	return `${e.key}-${t.key}`;
}
function gl(e) {
	return qs(e.talentReplacementRows) ?? e.talentReplacements;
}
function _l(e) {
	return Js(e.careerReplacementRows) ?? e.careerReplacements;
}
//#endregion
//#region src/functions/species-builder/config-keys.ts
function vl(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[^\da-z]+/g, "-").replaceAll(/^-+|-+$/g, "");
}
//#endregion
//#region src/functions/species-builder/editor/field-values.ts
function yl(e) {
	let t = e.split(/\r?\n/).map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : void 0;
}
function bl(e) {
	let t = Ol(e).flatMap(([e, t]) => t ? [[e, t]] : []);
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function xl(e) {
	let t = Ol(e).flatMap(([e, t]) => {
		let n = Dl(t);
		return n === void 0 ? [] : [[e, n]];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function Sl(e) {
	let t = Ol(e).flatMap(([e, t]) => {
		let n = t.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
		return n.length > 0 ? [[e, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function Cl(e) {
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}
function wl(e) {
	return e.length > 0 ? e : void 0;
}
function Tl(e) {
	let t = Cl(e);
	return t ? { formula: t } : void 0;
}
function El(e) {
	let t = e.map((e) => {
		let t = { name: e.name }, n = Cl(e.journalUuid ?? "");
		return n && (t.journalUuid = n), t;
	});
	return t.length > 0 ? { rows: t } : void 0;
}
function Dl(e) {
	let t = e.trim();
	if (!t) return;
	let n = Number(t);
	return Number.isFinite(n) ? n : void 0;
}
function Ol(e) {
	return e.split(/\r?\n/).flatMap((e) => {
		let t = e.indexOf(":");
		if (t < 0) return [];
		let n = e.slice(0, t).trim(), r = e.slice(t + 1).trim();
		return n ? [[n, r]] : [];
	});
}
//#endregion
//#region src/functions/species-builder/editor/draft.ts
function kl(e, t) {
	return e === "careerReplacements" ? Sl(t) : e === "randomTalents" ? xl(t) : bl(t);
}
function Al(e, t) {
	return e === "randomTalents" ? xl(t) : bl(t);
}
function jl(e, t, n) {
	let r = { ...e };
	return n === void 0 ? delete r[t] : r[t] = n, r;
}
function Ml(e) {
	let t = /* @__PURE__ */ new Set();
	return e.map((e) => {
		let n = Bl(e);
		return Pl(e) ? (n.key = e.key.trim(), e.subspecies && (n.subspecies = Nl(e.subspecies, e.runtimeSubspeciesCount)), n) : (n.key = Fl(e.key, e.name, "new-species", t), e.subspecies && (n.subspecies = Nl(e.subspecies)), n);
	});
}
function Nl(e, t = 0) {
	let n = new Set(e.slice(0, t).map(({ key: e }) => e.trim()).filter(Boolean));
	return e.map((e, r) => ({
		...Bl(e),
		key: r < t ? e.key.trim() : Fl(e.key, e.name, "new-subspecies", n)
	}));
}
function Pl(e) {
	return "origin" in e && e.origin === "runtime";
}
function Fl(e, t, n, r) {
	let i = vl(e);
	if (i) return r.add(i), i;
	let a = Il(vl(t) || n, r);
	return r.add(a), a;
}
function Il(e, t) {
	if (!t.has(e)) return e;
	let n = 2, r = `${e}-${n}`;
	for (; t.has(r);) n += 1, r = `${e}-${n}`;
	return r;
}
function Ll(e) {
	return JSON.stringify(Rl(e));
}
function Rl(e) {
	return Array.isArray(e) ? e.map(Rl) : e && typeof e == "object" ? Object.fromEntries(Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, Rl(t)])) : e;
}
function zl(e) {
	return JSON.stringify(e, null, 2);
}
function Bl(e) {
	return JSON.parse(JSON.stringify(e));
}
function Vl(e) {
	return e instanceof Error ? e.message : "Unknown Species Builder error.";
}
//#endregion
//#region src/functions/species-builder/editing-definitions.ts
function Hl(e, t) {
	let n = t.definitions.map(Gl), r = e.findIndex((e) => e.origin === "runtime"), i = r < 0 ? e.length : r, a = [
		...e.slice(0, i),
		...n,
		...e.slice(i)
	], o = n.length > 0 ? i + n.length - 1 : -1;
	for (let e of t.runtimeSpeciesExtensions) {
		let t = Xl(e.speciesKey), n = a.findIndex((e) => e.origin === "runtime" && Xl(e.key) === t);
		if (n >= 0) {
			let t = a[n];
			t && (a[n] = {
				...t,
				subspecies: Zl([...t.subspecies ?? [], ...Bl(e.subspecies)])
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
			subspecies: Zl(Bl(e.subspecies))
		}), o = a.length - 1;
	}
	return {
		definitions: a,
		selectedIndex: o
	};
}
function Ul(e, t, n) {
	let r = e.map(Gl), i = Yl(n), a = /* @__PURE__ */ new Set(), o = t.flatMap((e) => {
		let t = Xl(e.key);
		if (!t || a.has(t)) return [];
		a.add(t);
		let n = Bl(e.subspecies ?? []), r = i.get(t)?.flatMap((e) => Bl(e.subspecies));
		return [{
			...Bl(e),
			origin: "runtime",
			runtimeSubspeciesCount: n.length,
			subspecies: Zl([...n, ...r ?? []])
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
			subspecies: Zl(t.flatMap((e) => Bl(e.subspecies)))
		}] : [];
	});
	return [
		...r,
		...o,
		...s
	];
}
function Wl(e) {
	let t = [], n = [];
	for (let r of e) {
		if (r.origin === "custom") {
			t.push(Jl(r));
			continue;
		}
		let e = Bl((r.subspecies ?? []).slice(r.runtimeSubspeciesCount));
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
function Gl(e) {
	return {
		...Jl(e),
		origin: "custom",
		runtimeSubspeciesCount: 0
	};
}
function Kl(e) {
	return e?.origin === "custom";
}
function ql(e, t) {
	return e !== void 0 && t >= 0 && (e.origin === "custom" || t >= e.runtimeSubspeciesCount);
}
function Jl(e) {
	let t = Bl(e);
	return delete t.origin, delete t.runtimeSubspeciesCount, delete t.runtimeUnavailable, t;
}
function Yl(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = Xl(n.speciesKey);
		e && t.set(e, [...t.get(e) ?? [], n]);
	}
	return t;
}
function Xl(e) {
	return e.trim();
}
function Zl(e) {
	return e.length > 0 ? e : void 0;
}
//#endregion
//#region src/shared/object-readers.ts
function G(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function K(e, t) {
	let n = e;
	for (let e of t) {
		if (!G(n) || !(e in n)) return;
		n = n[e];
	}
	return n;
}
function q(e, t) {
	let n = K(e, t);
	return typeof n == "string" ? n.trim() : "";
}
function Ql(e, t) {
	let n = K(e, t);
	return Array.isArray(n) ? n.filter((e) => typeof e == "string") : [];
}
function $l(e, t, n = 0) {
	return eu(e, t) ?? n;
}
function eu(e, t) {
	for (let n of t) {
		let t = Number(K(e, n));
		if (Number.isFinite(t)) return t;
	}
	return null;
}
function tu(e, t, n = !1) {
	for (let n of t) {
		let t = K(e, n);
		if (typeof t == "boolean") return t;
	}
	return n;
}
function nu(e) {
	return Array.isArray(e) ? e.flatMap(nu) : typeof e == "string" ? e.split(/[\n\r,;]/).map((e) => e.trim()).filter(Boolean) : G(e) ? Object.values(e).flatMap(nu) : [];
}
function ru(e, t, n) {
	let r = e;
	for (let e of t.slice(0, -1)) {
		let t = r[e];
		G(t) || (r[e] = {}), r = r[e];
	}
	r[t[t.length - 1] ?? ""] = n;
}
//#endregion
//#region src/functions/species-builder/career-table-normalization.ts
function iu(e) {
	if (!G(e)) return;
	let t = au(e.rows) ?? ou(e.careers);
	return t ? { rows: t } : void 0;
}
function au(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!G(e)) return [];
		let t = cu(e.name);
		if (!t) return [];
		let n = { name: t };
		return U(n, "journalUuid", cu(e.journalUuid)), [n];
	});
	return t.length > 0 ? t : void 0;
}
function ou(e) {
	return su(e)?.map((e) => ({ name: e }));
}
function su(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		let t = cu(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? t : void 0;
}
function cu(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
//#endregion
//#region src/functions/species-builder/replacement-row-normalization.ts
function lu(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!G(e)) return [];
		let t = du(e.rolled, "talent"), n = du(e.replacement, "talent");
		return !t.name || !n.name ? [] : [{
			replacement: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function uu(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!G(e)) return [];
		let t = du(e.rolled, "career"), n = Array.isArray(e.replacements) ? e.replacements.flatMap((e) => {
			let t = du(e, "career");
			return t.name ? [t] : [];
		}) : [];
		return !t.name || n.length === 0 ? [] : [{
			replacements: n,
			rolled: t
		}];
	});
	return t.length > 0 ? t : void 0;
}
function du(e, t) {
	if (typeof e == "string") return { name: mu(e) ?? "" };
	if (!G(e)) return { name: "" };
	let n = fu(e.item, t), r = mu(e.name) ?? n?.name ?? "";
	return n ? {
		item: n,
		name: r
	} : { name: r };
}
function fu(e, t) {
	if (!G(e)) return;
	let n = mu(e.name), r = pu(e.type), i = mu(e.uuid);
	if (!n || r !== t || !i) return;
	let a = {
		name: n,
		type: r,
		uuid: i
	}, o = mu(e.specification) ?? mu(e.specifier);
	o && (a.specification = o);
	let s = mu(e.img);
	return s && (a.img = s), a;
}
function pu(e) {
	return e === "career" || e === "skill" || e === "talent" || e === "trait" ? e : void 0;
}
function mu(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
//#endregion
//#region src/functions/species-builder/linked-grant-normalization.ts
function hu(e, t) {
	if (!Array.isArray(e)) return;
	let n = e.flatMap((e) => {
		let n = du(e, t);
		return n.name ? [n] : [];
	});
	return n.length > 0 ? n : void 0;
}
function gu(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		if (!G(e) || !Array.isArray(e.choices)) return [];
		let t = e.choices.flatMap((e) => {
			let t = du(e, "talent");
			return t.name ? [t] : [];
		});
		return t.length > 0 ? [{ choices: t }] : [];
	});
	return t.length > 0 ? t : void 0;
}
//#endregion
//#region src/functions/species-builder/settings-normalization/values.ts
var _u = Object.values(W);
function vu(e) {
	return typeof e == "string" ? vl(e) : "";
}
function yu(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
function bu(e) {
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function xu(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap((e) => {
		let t = yu(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? t : void 0;
}
function Su(e) {
	if (!G(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = yu(e), r = yu(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function Cu(e) {
	if (!G(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = yu(e), r = bu(t);
		return n && r !== void 0 ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function wu(e) {
	if (!G(e)) return;
	let t = Object.entries(e).flatMap(([e, t]) => {
		let n = yu(e), r = xu(t);
		return n && r ? [[n, r]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function Tu(e) {
	if (!G(e)) return;
	let t = _u.flatMap((t) => {
		let n = yu(e[t]);
		return n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function Eu(e) {
	if (!G(e)) return;
	let t = {};
	return U(t, "die", yu(e.die)), U(t, "feet", bu(e.feet)), U(t, "inches", bu(e.inches)), Object.keys(t).length > 0 ? t : void 0;
}
function Du(e) {
	if (!G(e)) return;
	let t = yu(e.formula);
	return t ? { formula: t } : void 0;
}
//#endregion
//#region src/functions/species-builder/species-settings-normalization.ts
function Ou(e) {
	return !G(e) || !Array.isArray(e.definitions) ? {
		autoRegisterSpeciesTable: !1,
		correctExistingWfrpSpecies: !1,
		definitions: [],
		runtimeSpeciesExtensions: [],
		showGeneratedConfigTab: !1
	} : {
		autoRegisterSpeciesTable: e.autoRegisterSpeciesTable === !0,
		correctExistingWfrpSpecies: e.correctExistingWfrpSpecies === !0,
		definitions: e.definitions.flatMap(Au),
		runtimeSpeciesExtensions: ku(e.runtimeSpeciesExtensions),
		showGeneratedConfigTab: e.showGeneratedConfigTab === !0
	};
}
function ku(e) {
	return Array.isArray(e) ? e.flatMap((e) => {
		if (!G(e)) return [];
		let t = yu(e.speciesKey), n = yu(e.speciesName), r = ju(e.subspecies) ?? [];
		return t && n && r.length > 0 ? [{
			speciesKey: t,
			speciesName: n,
			subspecies: r
		}] : [];
	}) : [];
}
function Au(e) {
	return Nu(e, (e, t, n) => ({
		includeInExtraSpecies: n.includeInExtraSpecies === !0,
		key: e,
		name: t
	})).map((t) => (Pu(t, e), Fu(t, e), t));
}
function ju(e) {
	if (!Array.isArray(e)) return;
	let t = e.flatMap(Mu);
	return t.length > 0 ? t : void 0;
}
function Mu(e) {
	return Nu(e, (e, t, n) => {
		let r = {
			key: e,
			name: t
		};
		return U(r, "skillsAdded", xu(n.skillsAdded)), U(r, "skillsRemoved", xu(n.skillsRemoved)), U(r, "talentsAdded", xu(n.talentsAdded)), U(r, "talentsRemoved", xu(n.talentsRemoved)), U(r, "traitsAdded", xu(n.traitsAdded)), U(r, "traitsRemoved", xu(n.traitsRemoved)), r;
	});
}
function Nu(e, t) {
	if (!G(e)) return [];
	let n = vu(e.key), r = yu(e.name);
	if (!n || !r) return [];
	let i = t(n, r, e);
	return U(i, "characteristics", Tu(e.characteristics)), U(i, "randomTalents", Cu(e.randomTalents)), U(i, "talentReplacementRows", lu(e.talentReplacementRows)), U(i, "talentReplacements", Su(e.talentReplacements)), U(i, "movement", bu(e.movement)), U(i, "fate", bu(e.fate)), U(i, "resilience", bu(e.resilience)), U(i, "extra", bu(e.extra)), U(i, "woundFormula", Du(e.woundFormula)), U(i, "careerTable", iu(e.careerTable)), [i];
}
function Pu(e, t) {
	G(t) && (U(e, "skills", xu(t.skills)), U(e, "linkedSkills", hu(t.linkedSkills, "skill")), U(e, "talents", xu(t.talents)), U(e, "linkedTalents", gu(t.linkedTalents)), U(e, "traits", xu(t.traits)), U(e, "linkedTraits", hu(t.linkedTraits, "trait")));
}
function Fu(e, t) {
	G(t) && (U(e, "age", yu(t.age)), U(e, "height", Eu(t.height)), U(e, "careerReplacements", wu(t.careerReplacements)), U(e, "careerReplacementRows", uu(t.careerReplacementRows)), U(e, "subspecies", ju(t.subspecies)));
}
//#endregion
//#region src/functions/species-builder/world-table.ts
var Iu = "managedSpeciesTable";
function Lu() {
	return {
		isRegistered: !1,
		name: "Species",
		ownership: "new",
		requiresLinkRepair: !1,
		rows: []
	};
}
function Ru(e, t) {
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
function zu(e, t) {
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
function Bu(e, t, n) {
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
function Vu(e) {
	let t = e.map((e) => Number.isInteger(e.weight) && e.weight > 0 ? e.weight : 0), n = t.reduce((e, t) => e + t, 0), r = 1;
	return t.map((e) => {
		let t = r, i = e > 0 ? t + e - 1 : t;
		return r = i + 1, {
			chance: n > 0 ? e / n : 0,
			range: [t, i]
		};
	});
}
function Hu(e, t, n) {
	let r = n.find((e) => e.label === t.trim());
	if (r) return r.key;
	let i = e.trim();
	return n.some((e) => e.key === i) ? i : "";
}
function Uu(e) {
	let t = /@UUID\[([^\]]+)\]\{([^}]*)\}/u.exec(e), n = t?.[1]?.trim() ?? "", r = t?.[2]?.trim() ?? "";
	return n && r ? {
		label: r,
		uuid: n
	} : void 0;
}
function Wu(e) {
	let t = K(e, ["range"]), n = Array.isArray(t) ? Number(t[0]) : 0, r = Array.isArray(t) ? Number(t[1]) : 0;
	if (Number.isInteger(n) && Number.isInteger(r) && r >= n) return r - n + 1;
	let i = Number(K(e, ["weight"]));
	return Number.isInteger(i) && i > 0 ? i : 1;
}
function Gu(e) {
	return JSON.stringify(e.rows.map((e) => ({
		name: e.name.trim(),
		speciesKey: e.speciesKey.trim(),
		weight: e.weight
	})));
}
function Ku(e, t) {
	let n = Vu(e.rows), r = e.rows.reduce((e, t) => e + (Number.isInteger(t.weight) && t.weight > 0 ? t.weight : 0), 0);
	return {
		displayRoll: !0,
		flags: {
			wfrp4e: { key: "species" },
			[t]: { [Iu]: !0 }
		},
		formula: `1d${Math.max(r, 1)}`,
		img: "systems/wfrp4e/ui/buttons/d10.webp",
		name: Ju(e),
		replacement: !0,
		results: e.rows.map((e, t) => ({
			description: qu(e),
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
function qu(e) {
	let t = e.journalUuid?.trim() ?? "", n = e.name.trim();
	if (!t) throw Error(`Species "${n || e.speciesKey}" does not have a Journal link target.`);
	if (/[{}]/u.test(n)) throw Error(`Species "${n}" cannot be encoded in WFRP's UUID-link label.`);
	return `@UUID[${t}]{${n}}`;
}
function Ju(e) {
	let t = e.name.trim() || "Species";
	return e.ownership === "external" && !t.includes("Species Builder") ? `${t} (Species Builder)` : t;
}
//#endregion
//#region src/functions/species-builder/editor/career-table-rows.ts
function Yu(e, t) {
	return e.flatMap((e, n) => {
		let r = e.careerTable?.rows;
		return !r?.length || r === t ? [] : [{
			id: `definition-${n}`,
			label: e.name.trim() || e.key.trim() || `Species ${n + 1}`,
			rows: r
		}];
	});
}
function Xu(e) {
	return e.map((e) => {
		let t = { ...e };
		return e.sourceRange && (t.sourceRange = [...e.sourceRange]), t;
	});
}
function Zu(e) {
	return [...e ?? [], { name: "" }];
}
function Qu(e, t) {
	return (e ?? []).filter((e, n) => n !== t);
}
function $u(e, t, n) {
	return (e ?? []).map((e, r) => r === t ? nd(e, n) : e);
}
function ed(e, t, n) {
	let r = { name: n.name };
	return n.careerJournalUuid && (r.journalUuid = n.careerJournalUuid), $u(e, t, r);
}
function td(e, t, n) {
	return $u(e, t, { journalUuid: n });
}
function nd(e, t) {
	let n = {
		...e,
		...t
	};
	return n.journalUuid || delete n.journalUuid, n;
}
//#endregion
//#region src/state/species-builder/career-table-drop-actions.ts
function rd(e) {
	async function t(t, n) {
		let r = e.selectedDefinition.value;
		if (!r) return;
		let i = await e.resolveDroppedItem("career", n);
		e.definitionActions.updateCareerTableRows(ed(r.careerTable?.rows, t, i));
	}
	async function n(t, n) {
		let r = e.selectedDefinition.value;
		if (!r) return;
		let i = await id(e, n);
		e.definitionActions.updateCareerTableRows(td(r.careerTable?.rows, t, i.uuid));
	}
	async function r(t, n, r) {
		let i = e.selectedDefinition.value?.subspecies?.[t];
		if (!i) return;
		let a = await e.resolveDroppedItem("career", r);
		e.subspeciesActions.updateSubspeciesCareerTableRows(t, ed(i.careerTable?.rows, n, a));
	}
	async function i(t, n, r) {
		let i = e.selectedDefinition.value?.subspecies?.[t];
		if (!i) return;
		let a = await id(e, r);
		e.subspeciesActions.updateSubspeciesCareerTableRows(t, td(i.careerTable?.rows, n, a.uuid));
	}
	return {
		setCareerTableCareerDrop: t,
		setCareerTableJournalDrop: n,
		setSubspeciesCareerTableCareerDrop: r,
		setSubspeciesCareerTableJournalDrop: i
	};
}
async function id(e, t) {
	try {
		return await e.bridge.resolveJournalDrop(t);
	} catch (t) {
		throw e.loadError.value = Vl(t), t;
	}
}
//#endregion
//#region src/state/species-builder/bridge-access.ts
function ad() {
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
function od() {
	return {
		includeInExtraSpecies: !0,
		key: "",
		name: "New Species"
	};
}
function sd(e, t) {
	let n = Bl(e);
	return n.key = gd(`${n.key}-copy`, t), n.name = `${n.name} Copy`, n;
}
function cd(e, t, n) {
	return jl(e, t, wl(n));
}
function ld(e, t, n) {
	return jl(e, t, Dl(n));
}
function ud(e, t, n) {
	let r = e.height ? { ...e.height } : {}, i = t === "die" ? Cl(n) : Dl(n);
	return i === void 0 ? delete r[t] : r[t] = i, jl(e, "height", Object.keys(r).length > 0 ? r : void 0);
}
function dd(e, t, n) {
	let r = e.characteristics ? { ...e.characteristics } : {}, i = Cl(n);
	return i ? r[t] = i : delete r[t], jl(e, "characteristics", Object.keys(r).length > 0 ? r : void 0);
}
function fd(e, t, n) {
	return jl(e, t, yl(n));
}
function pd(e, t, n) {
	return jl(e, t, kl(t, n));
}
function md(e, t) {
	return jl(e, "woundFormula", Tl(t));
}
function hd(e, t) {
	return jl(e, "careerTable", El(t));
}
function gd(e, t) {
	let n = new Set(t.map((e) => e.key));
	if (!n.has(e)) return e;
	let r = 2, i = `${e}-${r}`;
	for (; n.has(i);) r += 1, i = `${e}-${r}`;
	return i;
}
//#endregion
//#region src/state/species-builder/selected-definition.ts
function _d(e, t, n = {}) {
	let r = e.definitions.value[e.selectedIndex.value];
	!r || !n.allowRuntimeBase && !Kl(r) || (e.definitions.value = e.definitions.value.map((n, i) => i === e.selectedIndex.value ? {
		...t(Bl(r)),
		origin: r.origin,
		runtimeSubspeciesCount: r.runtimeSubspeciesCount,
		...r.runtimeUnavailable ? { runtimeUnavailable: !0 } : {}
	} : n), e.message.value = "");
}
//#endregion
//#region src/state/species-builder/definition-actions.ts
function vd(e) {
	function t() {
		r(od());
	}
	function n() {
		let t = e.selectedDefinition.value;
		Kl(t) && r(sd(t, e.definitions.value));
	}
	function r(e) {
		i([e]);
	}
	function i(t) {
		if (t.length === 0) return;
		let n = t.map(Gl), r = e.definitions.value.findIndex((e) => e.origin === "runtime"), i = r < 0 ? e.definitions.value.length : r;
		e.definitions.value = [
			...e.definitions.value.slice(0, i),
			...n,
			...e.definitions.value.slice(i)
		], e.selectedIndex.value = i + n.length - 1, e.message.value = "";
	}
	function a(t) {
		let n = Hl(e.definitions.value, t);
		n.selectedIndex < 0 || (e.definitions.value = n.definitions, e.selectedIndex.value = n.selectedIndex, e.message.value = "");
	}
	function o() {
		Kl(e.selectedDefinition.value) && (e.definitions.value = e.definitions.value.filter((t, n) => n !== e.selectedIndex.value), e.selectedIndex.value = e.definitions.value.length === 0 ? -1 : Math.min(e.selectedIndex.value, e.definitions.value.length - 1), e.message.value = "");
	}
	function s(t) {
		e.selectedIndex.value = t;
	}
	function c(e, t) {
		_((n) => cd(n, e, t));
	}
	function l(e, t) {
		_((n) => ({
			...n,
			[e]: t
		}));
	}
	function u(e, t) {
		_((n) => ld(n, e, t));
	}
	function d(e, t) {
		_((n) => ud(n, e, t));
	}
	function f(e, t) {
		_((n) => dd(n, e, t));
	}
	function p(e, t) {
		_((n) => fd(n, e, t));
	}
	function m(e, t) {
		_((n) => pd(n, e, t));
	}
	function h(e) {
		_((t) => md(t, e));
	}
	function g(e) {
		_((t) => hd(t, e));
	}
	function _(t) {
		_d(e, t);
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
function yd(e) {
	return e === "traits" ? "traits" : "skills";
}
function bd(e, t) {
	return t && t.length > 0 ? t.map(Fd) : (e ?? []).map((e) => ({ name: e }));
}
function xd(e, t) {
	return t && t.length > 0 ? t.map((e) => ({ choices: e.choices.map(Fd) })) : (e ?? []).map((e) => ({ choices: Pd(e).map((e) => ({ name: e })) }));
}
function Sd(e) {
	return e.map(Hs).filter((e) => e.length > 0);
}
function Cd(e) {
	return e.flatMap((e) => {
		let t = Sd(e.choices);
		return t.length > 0 ? [t.join(", ")] : [];
	});
}
function wd(e, t, n) {
	return e.map((e, r) => r === t ? { name: n } : Fd(e));
}
function Td(e, t, n) {
	return e.map((e, r) => r === t ? {
		item: n,
		name: Vs(n)
	} : Fd(e));
}
function Ed(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: wd(e.choices, n, r) } : Id(e));
}
function Dd(e, t, n, r) {
	return e.map((e, i) => i === t ? { choices: Td(e.choices, n, r) } : Id(e));
}
function Od(e, t) {
	let n = t === "skills" ? "New Skill" : "New Trait";
	return [...e.map(Fd), { name: n }];
}
function kd(e, t) {
	return e.filter((e, n) => n !== t).map(Fd);
}
function Ad(e, t) {
	let n = [{ name: "New Talent" }];
	return t === "choice" && n.push({ name: "Alternative Talent" }), [...e.map(Id), { choices: n }];
}
function jd(e, t) {
	return e.map((e, n) => n === t ? { choices: [...e.choices.map(Fd), { name: "Alternative Talent" }] } : Id(e));
}
function Md(e, t) {
	return e.filter((e, n) => n !== t).map(Id);
}
function Nd(e, t, n) {
	let r = e[t];
	return !r || r.choices.length === 1 ? Md(e, t) : e.map((e, r) => r === t ? { choices: e.choices.filter((e, t) => t !== n).map(Fd) } : Id(e));
}
function Pd(e) {
	let t = e.split(",").map((e) => e.trim()).filter((e) => e.length > 0);
	return t.length > 0 ? t : [e];
}
function Fd(e) {
	return e.item ? {
		item: { ...e.item },
		name: e.name
	} : { name: e.name };
}
function Id(e) {
	return { choices: e.choices.map(Fd) };
}
//#endregion
//#region src/functions/species-builder/editor/subspecies-fields.ts
function Ld(e) {
	return {
		...e,
		subspecies: [...e.subspecies ?? [], {
			key: "",
			name: "New Subspecies"
		}]
	};
}
function Rd(e, t) {
	let n = (e.subspecies ?? []).filter((e, n) => n !== t);
	return jl(e, "subspecies", n.length > 0 ? n : void 0);
}
function zd(e, t, n) {
	let r = e.subspecies ?? [], i = r[t];
	return i ? {
		...e,
		subspecies: r.map((e, r) => r === t ? n(Bl(i)) : e)
	} : e;
}
function Bd(e, t, n) {
	return {
		...e,
		[t]: wl(n) ?? ""
	};
}
function Vd(e, t, n) {
	return jl(e, t, Dl(n));
}
function Hd(e, t, n) {
	let r = e.characteristics ? { ...e.characteristics } : {}, i = Cl(n);
	return i ? r[t] = i : delete r[t], jl(e, "characteristics", Object.keys(r).length > 0 ? r : void 0);
}
function Ud(e, t, n) {
	return jl(e, t, yl(n));
}
function Wd(e, t, n) {
	return jl(e, t, Al(t, n));
}
function Gd(e, t) {
	return jl(e, "woundFormula", Tl(t));
}
function Kd(e, t) {
	return jl(e, "careerTable", El(t));
}
//#endregion
//#region src/functions/species-builder/editor/linked-definition.ts
function qd(e, t) {
	let n = t === "skills" ? e.linkedSkills : e.linkedTraits;
	return bd(e[t], n);
}
function Jd(e) {
	return xd(e.talents, e.linkedTalents);
}
function Yd(e, t) {
	return cf(e, t, Od(qd(e, t), t));
}
function Xd(e, t, n, r) {
	return cf(e, t, wd(qd(e, t), n, r));
}
function Zd(e, t, n) {
	return cf(e, t, kd(qd(e, t), n));
}
function Qd(e, t, n, r) {
	return cf(e, t, Td(qd(e, t), n, r));
}
function $d(e, t) {
	return lf(e, Ad(Jd(e), t));
}
function ef(e, t) {
	return lf(e, jd(Jd(e), t));
}
function tf(e, t, n, r) {
	return lf(e, Ed(Jd(e), t, n, r));
}
function nf(e, t) {
	return lf(e, Md(Jd(e), t));
}
function rf(e, t, n) {
	return lf(e, Nd(Jd(e), t, n));
}
function af(e, t, n, r) {
	return lf(e, Dd(Jd(e), t, n, r));
}
function of(e, t, n) {
	let r = Vs(n);
	if (t === "talents") {
		let t = Jd(e);
		return Cd(t).includes(r) ? e : lf(e, [...t, { choices: [{
			item: n,
			name: r
		}] }]);
	}
	let i = qd(e, t);
	return Sd(i).includes(r) ? e : cf(e, t, [...i, {
		item: n,
		name: r
	}]);
}
function sf(e, t, n) {
	let r = Vs(n), i = Cd(Jd(e));
	return zd(e, t, (e) => {
		if (uf(i, r)) {
			let t = df((e.talentsAdded ?? []).filter((e) => e !== r)), n = df((e.talentsRemoved ?? []).filter((e) => e !== r));
			return jl(jl(e, "talentsAdded", t), "talentsRemoved", n);
		}
		return (e.talentsAdded ?? []).includes(r) ? e : jl(e, "talentsAdded", [...e.talentsAdded ?? [], r]);
	});
}
function cf(e, t, n) {
	let r = t === "skills" ? "linkedSkills" : "linkedTraits", i = Sd(n);
	return jl(jl(e, r, n.length > 0 ? n : void 0), t, i.length > 0 ? i : void 0);
}
function lf(e, t) {
	let n = Cd(t);
	return jl(jl(e, "linkedTalents", t.length > 0 ? t : void 0), "talents", n.length > 0 ? n : void 0);
}
function uf(e, t) {
	return e.includes(t) && !/\([^()]*\)/.test(t);
}
function df(e) {
	return e.length > 0 ? e : void 0;
}
//#endregion
//#region src/state/species-builder/linked-grant-actions.ts
var ff = {
	skills: "skill",
	talents: "talent",
	traits: "trait"
};
function pf(e) {
	async function t(t, n) {
		let r = await e.resolveDroppedItem(ff[t], n);
		p((e) => of(e, t, r));
	}
	async function n(t, n, r) {
		let i = await e.resolveDroppedItem(ff[t], r);
		p((e) => Qd(e, t, n, i));
	}
	async function r(t, n, r) {
		let i = await e.resolveDroppedItem("talent", r);
		p((e) => af(e, t, n, i));
	}
	async function i(t, n) {
		if (!e.subspeciesActions.canEditSubspecies(t)) return;
		let r = await e.resolveDroppedItem("talent", n);
		e.subspeciesActions.updateDefinitionForSubspecies(t, (e) => sf(e, t, r));
	}
	function a(e) {
		p((t) => Yd(t, e));
	}
	function o(e, t, n) {
		p((r) => Xd(r, e, t, n));
	}
	function s(e, t) {
		p((n) => Zd(n, e, t));
	}
	function c(e) {
		p((t) => $d(t, e));
	}
	function l(e) {
		p((t) => ef(t, e));
	}
	function u(e, t, n) {
		p((r) => tf(r, e, t, n));
	}
	function d(e) {
		p((t) => nf(t, e));
	}
	function f(e, t) {
		p((n) => rf(n, e, t));
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
function mf() {
	return { name: "" };
}
function hf() {
	return {
		replacement: mf(),
		rolled: mf()
	};
}
function gf() {
	return {
		replacements: [mf()],
		rolled: mf()
	};
}
function _f(e) {
	return [...e, hf()];
}
function vf(e, t) {
	return e.filter((e, n) => n !== t);
}
function yf(e) {
	return [...e, gf()];
}
function bf(e, t) {
	return e.map((e, n) => n === t ? {
		...e,
		replacements: [...e.replacements, mf()]
	} : e);
}
function xf(e, t, n) {
	return e.map((e, r) => r === t ? {
		...e,
		replacements: e.replacements.filter((e, t) => t !== n)
	} : e).filter((e) => e.replacements.length > 0);
}
function Sf(e, t) {
	return e.filter((e, n) => n !== t);
}
function Cf(e) {
	return e.talentReplacementRows?.length ? Pf(e.talentReplacementRows) : Tf(e.talentReplacements);
}
function wf(e) {
	return e.careerReplacementRows?.length ? Pf(e.careerReplacementRows) : Ef(e.careerReplacements);
}
function Tf(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacement: { name: t },
		rolled: { name: e }
	}));
}
function Ef(e) {
	return Object.entries(e ?? {}).map(([e, t]) => ({
		replacements: t.map((e) => ({ name: e })),
		rolled: { name: e }
	}));
}
function Df(e, t, n, r) {
	return e.map((e, i) => i === t ? {
		...e,
		[n]: Af(r)
	} : e);
}
function Of(e, t, n) {
	return e.map((e, r) => r === t ? {
		...e,
		rolled: Af(n)
	} : e);
}
function kf(e, t, n, r) {
	return e.map((e, i) => {
		if (i !== t) return e;
		let a = e.replacements.map((e, t) => t === n ? Af(r) : e);
		return {
			...e,
			replacements: a
		};
	});
}
function Af(e) {
	return {
		item: e,
		name: Vs(e)
	};
}
function jf(e, t) {
	return jl(jl(e, "talentReplacementRows", t.length > 0 ? t : void 0), "talentReplacements", qs(t));
}
function Mf(e, t) {
	return jl(jl(e, "careerReplacementRows", t.length > 0 ? t : void 0), "careerReplacements", Js(t));
}
function Nf(e, t) {
	return jl(jl(e, "talentReplacementRows", t.length > 0 ? t : void 0), "talentReplacements", qs(t));
}
function Pf(e) {
	return JSON.parse(JSON.stringify(e));
}
//#endregion
//#region src/state/species-builder/replacement-actions.ts
function Ff(e) {
	function t(t) {
		e.definitionActions.updateSelectedDefinition((e) => jf(e, t));
	}
	function n(t) {
		e.definitionActions.updateSelectedDefinition((e) => Mf(e, t));
	}
	function r(t, n) {
		e.subspeciesActions.updateSubspecies(t, (e) => Nf(e, n));
	}
	async function i(n, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("talent", i);
		t(Df(Cf(a), n, r, o));
	}
	async function a(t, n, i, a) {
		let o = e.selectedDefinition.value?.subspecies?.[t];
		if (!o) return;
		let s = await l("talent", a);
		r(t, Df(Cf(o), n, i, s));
	}
	async function o(t, r) {
		let i = e.selectedDefinition.value;
		if (!i) return;
		let a = await l("career", r);
		n(Of(wf(i), t, a));
	}
	async function s(t, r, i) {
		let a = e.selectedDefinition.value;
		if (!a) return;
		let o = await l("career", i);
		n(kf(wf(a), t, r, o));
	}
	async function c(t) {
		try {
			await e.bridge.openItemSheet(t);
		} catch (t) {
			e.loadError.value = Vl(t);
		}
	}
	async function l(t, n) {
		try {
			return await e.bridge.resolveItemDrop(n, t);
		} catch (t) {
			throw e.loadError.value = Vl(t), t;
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
function If(e) {
	let t = !e.isLoading && !e.isSaving && !e.hasLoadError && e.hasUnsavedChanges;
	return {
		canSave: t,
		requiresUnsafeSaveConfirmation: t && e.validationErrorCount > 0
	};
}
//#endregion
//#region src/state/species-builder/save-state.ts
function Lf(e) {
	let t = H(() => e.savedSettingsSnapshot.value !== Ll(e.normalizedSettings.value)), n = H(() => Rf(e.normalizedSettings.value)), r = H(() => e.savedDefinitionsSnapshot.value !== n.value), i = H(() => e.autoRegisterSpeciesTable.value && (e.speciesTable.value.ownership !== "managed" || !e.speciesTable.value.isRegistered)), a = H(() => e.savedSpeciesTableSnapshot.value !== e.speciesTableSnapshot.value || i.value || e.speciesTable.value.requiresLinkRepair), o = H(() => t.value || a.value), s = H(() => a.value || t.value && e.autoRegisterSpeciesTable.value), c = H(() => s.value ? e.speciesTableValidationMessages.value : []), l = H(() => e.validationIssues.value.filter((e) => e.severity === "error" && (e.scope !== "species-table" || s.value))), u = H(() => If({
		hasLoadError: !!e.loadError.value,
		hasUnsavedChanges: o.value,
		isLoading: e.isLoading.value,
		isSaving: e.isSaving.value,
		validationErrorCount: l.value.length + c.value.length
	}));
	return {
		blockingSpeciesTableValidationMessages: c,
		blockingValidationIssues: l,
		canSave: H(() => u.value.canSave),
		definitionsHaveUnsavedChanges: r,
		hasUnsavedChanges: o,
		requiresUnsafeSaveConfirmation: H(() => u.value.requiresUnsafeSaveConfirmation),
		settingsHaveUnsavedChanges: t,
		speciesTableWillSave: s
	};
}
function Rf(e) {
	return JSON.stringify({
		definitions: e.definitions,
		runtimeSpeciesExtensions: e.runtimeSpeciesExtensions
	});
}
//#endregion
//#region src/state/species-builder/save-actions.ts
function zf(e) {
	async function t(t = {}) {
		if (!e.canSave.value || e.requiresUnsafeSaveConfirmation.value && !t.allowValidationErrors) return !1;
		e.isSaving.value = !0, e.loadError.value = "", e.saveError.value = "", e.message.value = "";
		let n = e.settingsHaveUnsavedChanges.value, r = e.speciesTableWillSave.value, i = !1, a = [];
		try {
			if (n) {
				let t = e.definitionsHaveUnsavedChanges.value || e.correctionSettingHasUnsavedChanges.value, n = await e.requireBridge().saveSettings(e.normalizedSettings.value, t), r = n.settings;
				e.autoRegisterSpeciesTable.value = r.autoRegisterSpeciesTable, e.correctExistingWfrpSpecies.value = r.correctExistingWfrpSpecies, e.definitions.value = Ul(r.definitions, e.runtimeDefinitions.value, r.runtimeSpeciesExtensions), e.showGeneratedConfigTab.value = r.showGeneratedConfigTab, e.selectedIndex.value = e.definitions.value.length > 0 ? Math.min(e.selectedIndex.value, e.definitions.value.length - 1) : -1, e.savedSettingsSnapshot.value = Ll(e.normalizedSettings.value), e.savedDefinitionsSnapshot.value = Rf(e.normalizedSettings.value), e.savedCorrectExistingWfrpSpecies.value = r.correctExistingWfrpSpecies, i = t, n.syncError && a.push(n.syncError);
			}
			if (r) {
				let t = await e.requireBridge().saveSpeciesTable(e.preparedSpeciesTable.value, e.autoRegisterSpeciesTable.value);
				e.hydrateSpeciesTable(t), e.savedSpeciesTableSnapshot.value = Gu(t.draft), t.registrationError && a.push(t.registrationError);
			}
			return Bf(e, a, i, r), i;
		} catch (t) {
			return e.saveError.value = Vl(t), i;
		} finally {
			e.isSaving.value = !1;
		}
	}
	return { saveChanges: t };
}
function Bf(e, t, n, r) {
	t.length > 0 ? e.saveError.value = t.join(" ") : n ? e.message.value = "Saved. Refresh Foundry before using changed species in character generation." : r ? e.message.value = "Saved the world Species table." : e.message.value = "Saved Species Builder settings.";
}
//#endregion
//#region src/state/species-builder/species-table-actions.ts
function Vf(e) {
	let t = /* @__PURE__ */ k(Lu()), n = /* @__PURE__ */ k([]), r = H(() => Ru(n.value, e.definitions.value)), i = H(() => zu(t.value, r.value)), a = H(() => Gu(i.value)), o = H(() => Vu(i.value.rows)), s = H(() => Bu(i.value, r.value, e.autoRegisterSpeciesTable.value || i.value.ownership !== "new"));
	function c(e) {
		t.value = Bl(e.draft), n.value = Bl(e.runtimeOptions);
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
function Hf(e) {
	function t() {
		p(Ld, !0);
	}
	function n(e) {
		f(e) && p((t) => Rd(t, e), !0);
	}
	function r(e, t, n) {
		u(e, (e) => Bd(e, t, n));
	}
	function i(e, t, n) {
		u(e, (e) => Vd(e, t, n));
	}
	function a(e, t, n) {
		u(e, (e) => Hd(e, t, n));
	}
	function o(e, t, n) {
		u(e, (e) => Ud(e, t, n));
	}
	function s(e, t, n) {
		u(e, (e) => Wd(e, t, n));
	}
	function c(e, t) {
		u(e, (e) => Gd(e, t));
	}
	function l(e, t) {
		u(e, (e) => Kd(e, t));
	}
	function u(e, t) {
		d(e, (n) => zd(n, e, t));
	}
	function d(e, t) {
		f(e) && p(t, !0);
	}
	function f(t) {
		let n = e.definitions.value[e.selectedIndex.value];
		return n?.subspecies?.[t] !== void 0 && ql(n, t);
	}
	function p(t, n = !1) {
		_d(e, t, { allowRuntimeBase: n });
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
function Uf(e) {
	return {
		careerGroups: Xf(e.careerGroupNames),
		randomTalentSources: new Map(e.randomTalentSources.map((e) => [e.key.trim(), e])),
		skills: Xf(e.itemBaseNames.skill),
		talents: Xf(e.itemBaseNames.talent),
		traits: Xf(e.itemBaseNames.trait)
	};
}
function J(e, t, n) {
	return {
		...e,
		code: t,
		message: n,
		severity: "error"
	};
}
function Wf(e) {
	return e.trim().toLocaleLowerCase();
}
function Gf(e) {
	return (e.split("(")[0] ?? "").trim();
}
function Kf(e, t) {
	return t.has(Gf(e));
}
function qf(e, t) {
	let n = e.trim();
	if (!n || !/^\d+(?:d\d+)?(?:\s*[+-]\s*\d+(?:d\d+)?)*$/iu.test(n)) return !1;
	let r = [...n.matchAll(/(\d+)d(\d+)/giu)];
	return t && r.length === 0 ? !1 : r.every((e) => Number(e[1]) > 0 && Number(e[2]) > 0);
}
function Jf(e) {
	let t = /^(?:(\d+)|(\d*)d(\d+))(?:\s*\+\s*(-?\d+))?$/iu.exec(e.trim());
	return t ? t[1] ? Number.isSafeInteger(Number(t[1])) : (t[2] ? Number(t[2]) : 1) > 0 && Number(t[3]) > 0 : !1;
}
function Yf(e) {
	return Number.isInteger(e) && (e ?? -1) >= 0;
}
function Xf(e) {
	return new Set(e.map((e) => e.trim()).filter(Boolean));
}
//#endregion
//#region src/functions/species-builder/validation/career-tables.ts
function Zf(e, t) {
	let n = [];
	return e.forEach((e, r) => {
		Qf(e.careerTable, $f(r), !0, t, n), (e.subspecies ?? []).forEach((e, i) => {
			e.careerTable !== void 0 && Qf(e.careerTable, ep(r, i), !0, t, n);
		});
	}), n;
}
function Qf(e, t, n, r, i) {
	if (!e || e.rows.length === 0) {
		n && i.push(J(t, "career-table-required", "Add at least one Career group so character creation can roll a Career."));
		return;
	}
	e.rows.forEach((e, n) => {
		let a = e.name.trim(), o = {
			...t,
			field: "name",
			rowIndex: n
		};
		a ? r.careerGroups.has(a) || i.push(J(o, "career-table-career-missing", `Career group “${a}” does not match an available WFRP Career group.`)) : i.push(J(o, "career-table-row-blank", `Career Table row ${n + 1} needs a Career group name.`));
	});
}
function $f(e) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: "careerTable"
	};
}
function ep(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "careerTable",
		subspeciesIndex: t
	};
}
//#endregion
//#region src/functions/species-builder/validation/definitions.ts
var tp = Object.keys(cc), np = [
	"movement",
	"fate",
	"resilience",
	"extra"
];
function rp(e) {
	let t = [];
	return e.forEach((e, n) => {
		let r = up(n);
		ip(e.characteristics, r, !0, t), ap(e, r, !0, t), op(e, r, t), cp(e.woundFormula?.formula, r, t), lp(e, n, t);
	}), t;
}
function ip(e, t, n, r) {
	for (let i of tp) {
		let a = e?.[i]?.trim() ?? "", o = `characteristics.${i}`;
		!a && n ? r.push(J({
			...t,
			field: o,
			section: "attributes"
		}, "characteristic-required", `${cc[i]} needs a roll formula.`)) : a && !Jf(a) && r.push(J({
			...t,
			field: o,
			section: "attributes"
		}, "characteristic-formula-invalid", `${cc[i]} needs a valid WFRP roll formula, such as 0, d10, or 2d10+20.`));
	}
}
function ap(e, t, n, r) {
	for (let i of np) {
		let a = e[i];
		a === void 0 && n ? r.push(J({
			...t,
			field: i,
			section: "attributes"
		}, "stat-required", `${fp(i)} is required for character creation.`)) : a !== void 0 && !Yf(a) && r.push(J({
			...t,
			field: i,
			section: "attributes"
		}, "stat-invalid", `${fp(i)} must be a non-negative whole number.`));
	}
}
function op(e, t, n) {
	let r = e.age?.trim() ?? "";
	r ? qf(r, !1) || n.push(J({
		...t,
		field: "age"
	}, "age-formula-invalid", "Age must use whole numbers and dice joined by + or -, such as 15+1d10.")) : n.push(J({
		...t,
		field: "age"
	}, "age-required", "Enter an age roll formula."));
	let i = e.height;
	if (!i) {
		for (let e of [
			"die",
			"feet",
			"inches"
		]) n.push(J({
			...t,
			field: `height.${e}`
		}, "height-required", `Height ${e} is required for character creation.`));
		return;
	}
	(!i.die?.trim() || !qf(i.die, !0)) && n.push(J({
		...t,
		field: "height.die"
	}, "height-die-invalid", "Height die must be a valid dice formula, such as 1d10.")), sp(i.feet, "feet", t, n), sp(i.inches, "inches", t, n);
}
function sp(e, t, n, r) {
	Yf(e) || r.push(J({
		...n,
		field: `height.${t}`
	}, `height-${t}-invalid`, `Height ${t} must be a non-negative whole number.`));
}
function cp(e, t, n) {
	if (e !== void 0) try {
		if (!e.trim() || !pp(e)) throw Error("The formula is blank or has unmatched brackets.");
		Sc(e);
	} catch (e) {
		let r = e instanceof Error ? e.message : "The formula could not be compiled.";
		n.push(J({
			...t,
			field: "woundFormula",
			section: "wounds"
		}, "wound-formula-invalid", `Wound formula is invalid: ${r}`));
	}
}
function lp(e, t, n) {
	(e.subspecies ?? []).forEach((r, i) => {
		let a = dp(t, i);
		r.characteristics && ip({
			...e.characteristics,
			...r.characteristics
		}, a, !0, n), ap(r, a, !1, n), cp(r.woundFormula?.formula, a, n);
	});
}
function up(e) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: "details"
	};
}
function dp(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "subspecies",
		subspeciesIndex: t
	};
}
function fp(e) {
	return e.charAt(0).toLocaleUpperCase() + e.slice(1);
}
function pp(e) {
	return mp(e, "{", "}") && mp(e, "[", "]") && mp(e, "(", ")");
}
function mp(e, t, n) {
	let r = 0;
	for (let i of e) if (i === t ? r += 1 : i === n && --r, r < 0) return !1;
	return r === 0;
}
//#endregion
//#region src/functions/species-builder/validation/grant-talents.ts
function hp(e, t, n, r, i, a) {
	e.forEach((e, o) => {
		if (e.length === 0) {
			a.push(J({
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
			l ? e.length === 1 && bp(l) ? _p(l, u, r, i, a) : e.length > 1 && xp(l) ? vp(l, u, r, i, a) : Kf(l, i.talents) || a.push(J(u, "grant-unresolved", `Talent “${l}” does not match an available WFRP Talent Item.`)) : a.push(J(u, "grant-blank", `Talent choice ${c + 1} is blank.`));
		});
	});
}
function gp(e) {
	return new Set(Object.keys(e ?? { talents: 0 }));
}
function _p(e, t, n, r, i) {
	let a = Number(e);
	(!Number.isInteger(a) || a < 0) && i.push(J(t, "talent-random-count-invalid", "A numeric Talent grant must be a non-negative whole number.")), yp("talents", `Numeric Talent grant “${e}”`, t, n, r, i);
}
function vp(e, t, n, r, i) {
	yp(/^random\[(\d)\](?:\[([a-zA-Z-_]+)\])?$/iu.exec(e)?.[2] ?? "talents", `Random Talent choice “${e}”`, t, n, r, i);
}
function yp(e, t, n, r, i, a) {
	if (!r.has(e)) {
		a.push(J(n, "random-talent-source-unconfigured", `${t} uses table key “${e}”, but that key is not configured in Random Talents.`));
		return;
	}
	let o = i.randomTalentSources.get(e);
	o ? o.readyForCharacterCreation || a.push(J(n, "random-talent-source-not-ready", `Random Talent table “${o.key}” is not ready: ${o.reason ?? "its results are invalid"}.`)) : a.push(J(n, "random-talent-source-missing", `${t} uses missing table key “${e}”.`));
}
function bp(e) {
	return /^-?\d+(?:\.\d+)?$/u.test(e);
}
function xp(e) {
	return /^random\[\d\](?:\[[a-zA-Z-_]+\])?$/iu.test(e);
}
//#endregion
//#region src/functions/species-builder/validation/grants.ts
function Sp(e, t) {
	let n = [];
	return e.forEach((e, r) => {
		wp(Tp(e.linkedSkills, e.skills), "skills", "Skill", t.skills, Op(r, "skills"), n), hp(Ep(e), "talents", Op(r, "talents"), gp(e.randomTalents), t, n), wp(Tp(e.linkedTraits, e.traits), "traits", "Trait", t.traits, Op(r, "traits"), n), (e.subspecies ?? []).forEach((i, a) => Cp(e, i, r, a, t, n));
	}), n;
}
function Cp(e, t, n, r, i, a) {
	wp(t.skillsAdded ?? [], "skillsAdded", "Skill", i.skills, kp(n, r, "skills"), a), hp((t.talentsAdded ?? []).map(Dp), "talentsAdded", kp(n, r, "talents"), gp(t.randomTalents ?? e.randomTalents), i, a), wp(t.traitsAdded ?? [], "traitsAdded", "Trait", i.traits, kp(n, r, "traits"), a);
}
function wp(e, t, n, r, i, a) {
	e.forEach((e, o) => {
		let s = e.trim(), c = {
			...i,
			field: t,
			rowIndex: o
		};
		s ? Kf(s, r) || a.push(J(c, "grant-unresolved", `${n} “${s}” does not match an available WFRP ${n} Item.`)) : a.push(J(c, "grant-blank", `${n} row ${o + 1} is blank.`));
	});
}
function Tp(e, t) {
	return e?.length ? e.map(Hs) : t ?? [];
}
function Ep(e) {
	return e.linkedTalents?.length ? e.linkedTalents.map((e) => e.choices.map(Hs)) : (e.talents ?? []).map(Dp);
}
function Dp(e) {
	return e.split(",").map((e) => e.trim());
}
function Op(e, t) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: t
	};
}
function kp(e, t, n) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: n,
		subspeciesIndex: t
	};
}
//#endregion
//#region src/functions/species-builder/validation/identity.ts
function Ap(e, t) {
	let n = [], r = new Set(t.runtimeSpecies.map((e) => Wf(e.name)).filter(Boolean)), i = new Set(t.runtimeSpecies.map((e) => e.key.trim()).filter(Boolean)), a = Ip(e.map(Lp)), o = Fp(e.map((e) => e.name));
	return e.forEach((e, t) => {
		jp(e, t, a, o, i, r, n), Mp(e, t, n);
	}), n;
}
function jp(e, t, n, r, i, a, o) {
	let s = Np(t), c = Lp(e), l = e.name.trim();
	if (c ? (n.get(c) ?? 0) > 1 ? o.push(J({
		...s,
		field: "key"
	}, "species-key-duplicate", `Species key “${c}” is used more than once.`)) : i.has(c) && o.push(J({
		...s,
		field: "key"
	}, "species-key-runtime-collision", `Species key “${c}” is already used by an external WFRP species.`)) : o.push(J({
		...s,
		field: "key"
	}, "species-key-required", "Enter a species key.")), !l) {
		o.push(J({
			...s,
			field: "name"
		}, "species-name-required", "Enter a species name."));
		return;
	}
	let u = Wf(l);
	((r.get(u) ?? 0) > 1 || a.has(u)) && o.push(J({
		...s,
		field: "name"
	}, "species-name-duplicate", `Species name “${l}” must be unique because WFRP identifies table results by name.`)), /[{}]/u.test(l) && o.push(J({
		...s,
		field: "name"
	}, "species-name-unsafe", "Species names cannot contain { or }; WFRP parses the name from a UUID-link label."));
}
function Mp(e, t, n) {
	let r = e.subspecies ?? [], i = Ip(r.map((t, n) => Rp(e, t.key, n))), a = Fp(r.map((e) => e.name));
	r.forEach((r, o) => {
		let s = Pp(t, o), c = Rp(e, r.key, o), l = r.name.trim();
		c ? (i.get(c) ?? 0) > 1 && n.push(J({
			...s,
			field: "key"
		}, "subspecies-key-duplicate", `Subspecies key “${c}” is used more than once for this species.`)) : n.push(J({
			...s,
			field: "key"
		}, "subspecies-key-required", "Enter a subspecies key.")), l ? (a.get(Wf(l)) ?? 0) > 1 && n.push(J({
			...s,
			field: "name"
		}, "subspecies-name-duplicate", `Subspecies name “${l}” is used more than once for this species.`)) : n.push(J({
			...s,
			field: "name"
		}, "subspecies-name-required", "Enter a subspecies name."));
	});
}
function Np(e) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: "details"
	};
}
function Pp(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "subspecies",
		subspeciesIndex: t
	};
}
function Fp(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = Wf(n);
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return t;
}
function Ip(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.trim();
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return t;
}
function Lp(e) {
	return zp(e) ? e.key.trim() : vl(e.key);
}
function Rp(e, t, n) {
	return zp(e) && n < e.runtimeSubspeciesCount ? t.trim() : vl(t);
}
function zp(e) {
	return "origin" in e && e.origin === "runtime";
}
//#endregion
//#region src/functions/species-builder/validation/issue-severity.ts
var Bp = new Set([
	"age-formula-invalid",
	"age-required",
	"career-replacement-blank",
	"career-replacement-duplicate",
	"career-replacement-unresolved",
	"grant-blank",
	"grant-unresolved",
	"height-die-invalid",
	"height-feet-invalid",
	"height-inches-invalid",
	"height-required",
	"talent-replacement-blank",
	"talent-replacement-duplicate",
	"talent-replacement-unresolved"
]), Vp = new Set(["runtime-species-import-required"]);
function Hp(e, t) {
	let n = new Map(t.runtimeSpecies.map((e) => [e.key.trim(), e]));
	return e.flatMap((e, t) => {
		if (e.origin !== "runtime") return [];
		let r = n.get(e.key.trim());
		if (!r) return [];
		let i = [];
		if (!r.readyForCharacterCreation) {
			let e = Up(r.errorReasons, r.reason);
			i.push(...(e.length > 0 ? e : [void 0]).map((e) => J({
				definitionIndex: t,
				scope: "definition",
				section: "details"
			}, r.requiresWorldTableImport ? "runtime-species-import-required" : "runtime-species-not-ready", `Runtime species “${r.name}” is not ready for character creation${e ? `: ${e}` : "."}`)));
		}
		return i.push(...Up(r.warningReasons, r.warningReason).map((e) => ({
			...J({
				definitionIndex: t,
				scope: "definition",
				section: "details"
			}, "runtime-species-incomplete", `Runtime species “${r.name}” is playable but incomplete: ${e}`),
			severity: "warning"
		}))), i;
	});
}
function Up(e, t) {
	return e?.length ? e : t ? [t] : [];
}
function Wp(e, t, n) {
	let r = new Set((n?.rows ?? []).map((e) => e.speciesKey.trim()).filter(Boolean));
	return e.map((e) => {
		if (Vp.has(e.code)) return {
			...e,
			severity: "error"
		};
		if (e.severity === "warning" || Bp.has(e.code)) return {
			...e,
			severity: "warning"
		};
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
function Gp(e, t) {
	let n = [];
	return e.forEach((e, r) => {
		Jp(e.randomTalents ?? { talents: 0 }, Xp(r), t, n), (e.subspecies ?? []).forEach((i, a) => {
			i.randomTalents !== void 0 && (Jp(i.randomTalents, Zp(r, a), t, n), Kp(e, i, r, a, n));
		});
	}), n;
}
function Kp(e, t, n, r, i) {
	let a = new Set(Object.keys(t.randomTalents ?? {})), o = new Set(t.talentsRemoved ?? []), s = /* @__PURE__ */ new Set();
	for (let t of ec(e) ?? []) if (!o.has(t)) for (let e of qp(t)) a.has(e) || s.add(e);
	for (let e of s) i.push(J(Zp(n, r), "inherited-random-talent-source-unconfigured", `Inherited Talent grants use table key “${e}”, but this subspecies Random Talents override does not configure it.`));
}
function qp(e) {
	return /^-?\d+(?:\.\d+)?$/u.test(e.trim()) ? ["talents"] : e.includes(",") ? e.split(",").flatMap((e) => {
		let t = /^random\[(\d)\](?:\[([a-zA-Z-_]+)\])?$/iu.exec(e.trim());
		return t ? [t[2] ?? "talents"] : [];
	}) : [];
}
function Jp(e, t, n, r) {
	Object.entries(e).forEach(([e, i], a) => {
		let o = e.trim();
		o ? Yp(o, a, t, n, r) : r.push(J({
			...t,
			field: "key",
			rowIndex: a
		}, "random-talent-source-required", `Random Talent row ${a + 1} needs a table key.`)), (!Number.isInteger(i) || i < 0) && r.push(J({
			...t,
			field: "count",
			rowIndex: a
		}, "random-talent-count-invalid", `Random Talent count for “${o || "row " + (a + 1)}” must be a non-negative whole number.`));
	});
}
function Yp(e, t, n, r, i) {
	let a = r.randomTalentSources.get(e);
	a ? a.readyForCharacterCreation || i.push(J({
		...n,
		field: "key",
		rowIndex: t
	}, "random-talent-source-not-ready", `Random Talent table “${a.key}” is not ready: ${a.reason ?? "its results are invalid"}.`)) : i.push(J({
		...n,
		field: "key",
		rowIndex: t
	}, "random-talent-source-missing", `No WFRP RollTable is registered with key “${e}”. WFRP looks it up even when the count is 0.`));
}
function Xp(e) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: "randomTalents"
	};
}
function Zp(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "randomTalents",
		subspeciesIndex: t
	};
}
//#endregion
//#region src/functions/species-builder/validation/replacements.ts
function Qp(e, t) {
	let n = [];
	return e.forEach((e, r) => {
		$p(e, rm(r, "talentReplacement"), t, n), tm(e, rm(r, "careerReplacement"), t, n), (e.subspecies ?? []).forEach((e, i) => $p(e, im(r, i), t, n));
	}), n;
}
function $p(e, t, n, r) {
	let i = Cf(e), a = am(i.map((e) => Hs(e.rolled)));
	i.forEach((e, i) => {
		let o = Hs(e.rolled);
		em(e.rolled, "rolled", i, t, n, r), em(e.replacement, "replacement", i, t, n, r), o && (a.get(Wf(o)) ?? 0) > 1 && r.push(J({
			...t,
			field: "rolled",
			rowIndex: i
		}, "talent-replacement-duplicate", `Talent “${o}” appears in more than one replacement row; only the last row would be used.`));
	});
}
function em(e, t, n, r, i, a) {
	let o = Hs(e), s = {
		...r,
		field: t,
		rowIndex: n
	};
	o ? Kf(o, i.talents) || a.push(J(s, "talent-replacement-unresolved", `Talent “${o}” does not match an available WFRP Talent Item.`)) : a.push(J(s, "talent-replacement-blank", `Talent Replacement row ${n + 1} needs a ${t} Talent.`));
}
function tm(e, t, n, r) {
	let i = wf(e), a = am(i.map((e) => Hs(e.rolled)));
	i.forEach((e, i) => {
		let o = Hs(e.rolled);
		nm(o, "rolled", i, void 0, t, n, r), o && (a.get(Wf(o)) ?? 0) > 1 && r.push(J({
			...t,
			field: "rolled",
			rowIndex: i
		}, "career-replacement-duplicate", `Career group “${o}” appears in more than one replacement row; only the last row would be used.`)), e.replacements.length === 0 ? nm("", "replacement", i, 0, t, n, r) : e.replacements.forEach((e, a) => nm(Hs(e), "replacement", i, a, t, n, r));
	});
}
function nm(e, t, n, r, i, a, o) {
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
	e.trim() ? a.careerGroups.has(e.trim()) || o.push(J(s, "career-replacement-unresolved", `Career group “${e}” does not match an available WFRP Career group.`)) : o.push(J(s, "career-replacement-blank", `Career Replacement row ${n + 1} needs a ${t} Career group.`));
}
function rm(e, t) {
	return {
		definitionIndex: e,
		scope: "definition",
		section: t
	};
}
function im(e, t) {
	return {
		definitionIndex: e,
		scope: "subspecies",
		section: "talentReplacement",
		subspeciesIndex: t
	};
}
function am(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = Wf(n);
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return t;
}
//#endregion
//#region src/functions/species-builder/validation/runtime-extensions.ts
function om(e, t, n) {
	let r = new Set(n.map(dm));
	return e.flatMap((e, n) => e.origin !== "runtime" || e.runtimeUnavailable ? [] : (e.subspecies ?? []).flatMap((i, a) => a < e.runtimeSubspeciesCount ? [] : sm(e, i, t).flatMap((e) => {
		let t = um(e, n, a, i.name);
		return r.has(dm(t)) ? [] : [t];
	})));
}
function sm(e, t, n) {
	let r = cm(e, t), i = [];
	return r.skills === void 0 && i.push(J({
		definitionIndex: 0,
		scope: "definition",
		section: "skills"
	}, "effective-skills-required", "The effective Skill list is missing. WFRP character creation requires an array, even when it is empty.")), r.talents === void 0 && i.push(J({
		definitionIndex: 0,
		scope: "definition",
		section: "talents"
	}, "effective-talents-required", "The effective Talent list is missing. WFRP character creation requires an array, even when it is empty.")), [
		...i,
		...rp([r]),
		...Sp([r], n),
		...Gp([r], n),
		...Zf([r], n),
		...Qp([r], n)
	];
}
function cm(e, t) {
	let n = {
		includeInExtraSpecies: !1,
		key: t.key,
		name: t.name
	};
	return U(n, "age", e.age), U(n, "height", e.height), U(n, "characteristics", t.characteristics ? {
		...e.characteristics,
		...t.characteristics
	} : e.characteristics), U(n, "movement", t.movement ?? e.movement), U(n, "fate", t.fate ?? e.fate), U(n, "resilience", t.resilience ?? e.resilience), U(n, "extra", t.extra ?? e.extra), U(n, "skills", Qs(e, t) ?? Zs(e)), U(n, "talents", tc(e, t) ?? ec(e)), U(n, "traits", rc(e, t) ?? nc(e)), U(n, "randomTalents", t.randomTalents ?? e.randomTalents), U(n, "careerTable", t.careerTable ?? e.careerTable), U(n, "careerReplacements", t.careerReplacements), U(n, "careerReplacementRows", t.careerReplacementRows), lm(n, e, t), U(n, "woundFormula", t.woundFormula), n;
}
function lm(e, t, n) {
	let r = n.talentReplacementRows !== void 0 || n.talentReplacements !== void 0;
	U(e, "talentReplacementRows", r ? n.talentReplacementRows : t.talentReplacementRows), U(e, "talentReplacements", r ? n.talentReplacements : t.talentReplacements);
}
function um(e, t, n, r) {
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
function dm(e) {
	return [
		e.definitionIndex ?? "",
		e.subspeciesIndex ?? "",
		e.section,
		e.code
	].join(":");
}
//#endregion
//#region src/functions/species-builder/validation/species-table.ts
function fm(e, t, n, r) {
	if (!t) return [];
	let i = [], a = e.autoRegisterSpeciesTable || t.isRegistered;
	if (t.rows.length === 0) return a ? [J(_m(), "species-table-empty", "Add at least one species while this table is registered for character creation.")] : [];
	let o = new Map(e.definitions.map((e, t) => [vl(e.key), {
		definition: e,
		definitionIndex: t
	}])), s = new Map(n.runtimeSpecies.map((e) => [e.key.trim(), e])), c = ym(t.rows.map((e) => e.speciesKey)), l = ym(t.rows.map((e) => e.name));
	return t.rows.forEach((e, t) => {
		let n = e.speciesKey.trim(), a = e.name.trim(), u = vm(t);
		if (pm(n, a, c, l, u, i), n) {
			let e = o.get(n);
			e ? mm(a, e.definition.name.trim(), e.definitionIndex, r, u, i) : hm(a, s.get(n), n, u, i);
		}
		(!Number.isInteger(e.weight) || e.weight < 1) && i.push(J({
			...u,
			field: "weight"
		}, "species-table-weight-invalid", `Species Table row ${t + 1} needs a whole-number weight of at least 1.`));
	}), i;
}
function pm(e, t, n, r, i, a) {
	e ? (n.get(Wf(e)) ?? 0) > 1 && a.push(J({
		...i,
		field: "speciesKey"
	}, "species-table-species-duplicate", `Species key “${e}” appears more than once in the Species Table.`)) : a.push(J({
		...i,
		field: "speciesKey"
	}, "species-table-species-required", `Species Table row ${(i.rowIndex ?? 0) + 1} must select a species.`));
	let o = Wf(t);
	o && (r.get(o) ?? 0) > 1 && a.push(J({
		...i,
		field: "speciesKey"
	}, "species-table-name-duplicate", `Species name “${t}” appears more than once in the Species Table.`)), /[{}]/u.test(t) && a.push(J({
		...i,
		field: "speciesKey"
	}, "species-table-name-unsafe", `Species name “${t}” cannot be encoded in WFRP's UUID-link label.`));
}
function mm(e, t, n, r, i, a) {
	gm(e, t, i, a), r.some((e) => e.definitionIndex === n && e.severity === "error") && a.push(J({
		...i,
		field: "speciesKey"
	}, "species-table-definition-not-ready", `Custom species “${t || "unnamed species"}” has character-creation errors.`));
}
function hm(e, t, n, r, i) {
	if (!t) {
		i.push(J({
			...r,
			field: "speciesKey"
		}, "species-table-species-missing", `Species key “${n}” is not registered in the current WFRP world.`));
		return;
	}
	if (gm(e, t.name, r, i), !t.readyForCharacterCreation) {
		let e = t.reason ? `: ${t.reason}` : ".";
		i.push(J({
			...r,
			field: "speciesKey"
		}, "species-table-runtime-not-ready", `Runtime species “${t.name}” is not ready for character creation${e}`));
	}
}
function gm(e, t, n, r) {
	(!e || e !== t) && r.push(J({
		...n,
		field: "speciesKey"
	}, "species-table-name-mismatch", `WFRP reads the UUID-link label as the species name; this row must use “${t}”.`));
}
function _m() {
	return {
		scope: "species-table",
		section: "species-table"
	};
}
function vm(e) {
	return {
		..._m(),
		rowIndex: e
	};
}
function ym(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = Wf(n);
		e && t.set(e, (t.get(e) ?? 0) + 1);
	}
	return t;
}
//#endregion
//#region src/functions/species-builder/validation/index.ts
function bm(e, t, n, r) {
	let i = Uf(t), a = r ?? e.definitions, o = [
		...Ap(a, t),
		...rp(a),
		...Sp(a, i),
		...Gp(a, i),
		...Zf(a, i),
		...Qp(a, i)
	], s = r ? xm(o, r) : o, c = Wp(r ? [
		...s,
		...om(r, i, s),
		...Hp(r, t)
	] : s, a, n);
	return [...c, ...fm(e, n, t, c)];
}
function xm(e, t) {
	let n = t.flatMap((e, t) => e.origin !== "runtime" || !e.runtimeUnavailable || (e.subspecies?.length ?? 0) <= e.runtimeSubspeciesCount ? [] : [J({
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
function Sm(e) {
	return { validationIssues: H(() => bm(e.settings.value, e.catalog.value, e.speciesTable.value, e.editingDefinitions.value)) };
}
function Cm() {
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
var wm = Rs("species-builder", () => {
	let { configure: e, configuredBridge: t, requireBridge: n } = ad(), r = /* @__PURE__ */ k([]), i = /* @__PURE__ */ k([]), a = /* @__PURE__ */ k(!1), o = /* @__PURE__ */ k(!1), s = /* @__PURE__ */ k(!1), c = /* @__PURE__ */ k(0), l = /* @__PURE__ */ k(!1), u = /* @__PURE__ */ k(!0), d = /* @__PURE__ */ k(!1), f = /* @__PURE__ */ k(""), p = /* @__PURE__ */ k(""), m = /* @__PURE__ */ k(""), h = /* @__PURE__ */ k([]), g = /* @__PURE__ */ k(Cm()), _ = /* @__PURE__ */ k(""), v = /* @__PURE__ */ k(""), y = /* @__PURE__ */ k(""), b = /* @__PURE__ */ k(!1), x = H(() => r.value[c.value]), S = H(() => Ml(r.value)), C = H(() => S.value.filter((e) => !e.runtimeUnavailable)), ee = H(() => Wl(S.value)), te = H(() => ({
		autoRegisterSpeciesTable: a.value,
		correctExistingWfrpSpecies: o.value,
		...ee.value,
		showGeneratedConfigTab: s.value
	})), ne = H(() => Ou(te.value)), re = H(() => zl(ll(ne.value, i.value))), ie = H(() => o.value !== b.value), w = Vf({
		autoRegisterSpeciesTable: a,
		definitions: C,
		message: f
	}), { validationIssues: T } = Sm({
		catalog: g,
		editingDefinitions: S,
		settings: te,
		speciesTable: w.preparedSpeciesTable
	}), { blockingSpeciesTableValidationMessages: ae, blockingValidationIssues: oe, canSave: se, definitionsHaveUnsavedChanges: ce, hasUnsavedChanges: E, requiresUnsafeSaveConfirmation: le, settingsHaveUnsavedChanges: ue, speciesTableWillSave: de } = Lf({
		autoRegisterSpeciesTable: a,
		isLoading: u,
		isSaving: d,
		loadError: p,
		normalizedSettings: ne,
		savedDefinitionsSnapshot: v,
		savedSettingsSnapshot: _,
		savedSpeciesTableSnapshot: y,
		speciesTable: w.speciesTable,
		speciesTableSnapshot: w.speciesTableSnapshot,
		speciesTableValidationMessages: w.speciesTableValidationMessages,
		validationIssues: T
	}), { saveChanges: fe } = zf({
		autoRegisterSpeciesTable: a,
		canSave: se,
		correctionSettingHasUnsavedChanges: ie,
		correctExistingWfrpSpecies: o,
		definitions: r,
		definitionsHaveUnsavedChanges: ce,
		hydrateSpeciesTable: w.hydrateSpeciesTable,
		isSaving: d,
		loadError: p,
		message: f,
		normalizedSettings: ne,
		preparedSpeciesTable: w.preparedSpeciesTable,
		requireBridge: n,
		requiresUnsafeSaveConfirmation: le,
		runtimeDefinitions: i,
		savedDefinitionsSnapshot: v,
		savedCorrectExistingWfrpSpecies: b,
		savedSettingsSnapshot: _,
		savedSpeciesTableSnapshot: y,
		saveError: m,
		selectedIndex: c,
		settingsHaveUnsavedChanges: ue,
		showGeneratedConfigTab: s,
		speciesTableWillSave: de
	}), pe = vd({
		definitions: r,
		message: f,
		selectedDefinition: x,
		selectedIndex: c
	}), { updateDefinitionForSubspecies: me, ...he } = Hf({
		definitions: r,
		message: f,
		selectedIndex: c
	}), { resolveDroppedItem: ge, ..._e } = Ff({
		bridge: t,
		definitionActions: pe,
		loadError: p,
		selectedDefinition: x,
		subspeciesActions: he
	}), ve = pf({
		definitionActions: pe,
		resolveDroppedItem: ge,
		selectedDefinition: x,
		subspeciesActions: {
			canEditSubspecies: he.canEditSubspecies,
			updateDefinitionForSubspecies: me
		}
	}), D = rd({
		bridge: t,
		definitionActions: pe,
		loadError: p,
		resolveDroppedItem: ge,
		selectedDefinition: x,
		subspeciesActions: he
	});
	async function ye() {
		u.value = !0, p.value = "", m.value = "", f.value = "";
		try {
			let e = await n().loadSettings(), [t, u, d, f] = await Promise.all([
				n().loadRuntimeSpecies(),
				n().loadRandomTalentSources(),
				n().loadSpeciesTable(),
				n().loadValidationCatalog(e.definitions.map(({ key: e }) => e))
			]);
			a.value = e.autoRegisterSpeciesTable, o.value = e.correctExistingWfrpSpecies, i.value = Bl(t), r.value = Ul(e.definitions, t, e.runtimeSpeciesExtensions), h.value = u, s.value = e.showGeneratedConfigTab, c.value = r.value.length > 0 ? 0 : -1, w.hydrateSpeciesTable(d), g.value = f, _.value = Ll(ne.value), v.value = Rf(ne.value), b.value = e.correctExistingWfrpSpecies, y.value = Gu(d.draft), l.value = !0;
		} catch (e) {
			l.value = !1, p.value = getErrorMessage(e);
		} finally {
			u.value = !1;
		}
	}
	async function be() {
		l.value || await ye();
	}
	function xe(e) {
		s.value = e, f.value = "";
	}
	function Se(e) {
		a.value = e, f.value = "";
	}
	function Ce(e) {
		o.value = e, f.value = "";
	}
	return {
		...pe,
		...D,
		...ve,
		..._e,
		...w,
		...he,
		autoRegisterSpeciesTable: a,
		blockingSpeciesTableValidationMessages: ae,
		blockingValidationIssues: oe,
		canSave: se,
		configure: e,
		correctExistingWfrpSpecies: o,
		definitions: r,
		ensureSettingsLoaded: be,
		generatedConfigText: re,
		hasUnsavedChanges: E,
		isLoading: u,
		isLoaded: l,
		isSaving: d,
		loadError: p,
		loadSettings: ye,
		message: f,
		randomTalentSources: h,
		requiresUnsafeSaveConfirmation: le,
		saveChanges: fe,
		saveError: m,
		selectedDefinition: x,
		selectedIndex: c,
		showGeneratedConfigTab: s,
		updateAutoRegisterSpeciesTable: Se,
		updateCorrectExistingWfrpSpecies: Ce,
		updateShowGeneratedConfigTab: xe,
		validationIssues: T
	};
});
//#endregion
//#region src/state/species-builder/editor.ts
function Tm(e, t = {}) {
	let n = wm();
	n.configure(e);
	async function r(e = {}) {
		await n.saveChanges(e) && t.onSettingsSaved?.();
	}
	return {
		...n,
		...zs(n),
		saveChanges: r
	};
}
//#endregion
//#region src/view/apps/species-builder/components/SpeciesBuilderStatus.vue?vue&type=script&setup=true&lang.ts
var Em = { "aria-live": "polite" }, Dm = {
	key: 0,
	role: "alert",
	class: "dui-alert dui-alert-error app:m-0"
}, Om = { class: "app:flex-1" }, km = {
	key: 2,
	role: "alert",
	class: "dui-alert dui-alert-error app:m-0"
}, Am = {
	key: 3,
	class: "dui-alert dui-alert-info app:m-0"
}, jm = /* @__PURE__ */ M({
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
		let n = e, r = t, i = H(() => n.chargenErrorCount + n.chargenWarningCount);
		return (t, n) => (F(), I("section", Em, [e.loadError ? (F(), I("p", Dm, [n[1] ||= R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-exclamation"
		}, null, -1), R("span", null, O(e.loadError), 1)])) : i.value > 0 ? (F(), I("div", {
			key: 1,
			role: "alert",
			class: D(["dui-alert app:m-0", e.chargenErrorCount > 0 ? "dui-alert-error" : "dui-alert-warning"])
		}, [
			R("i", {
				"aria-hidden": "true",
				class: D(["fa-solid", e.chargenErrorCount > 0 ? "fa-circle-exclamation" : "fa-triangle-exclamation"])
			}, null, 2),
			R("span", Om, [e.chargenErrorCount > 0 ? (F(), I(P, { key: 0 }, [B(O(e.chargenErrorCount) + " character-creation " + O(e.chargenErrorCount === 1 ? "error affects" : "errors affect") + " species that can be rolled or selected. ", 1)], 64)) : V("", !0), e.chargenWarningCount > 0 ? (F(), I(P, { key: 1 }, [B(O(e.chargenWarningCount) + " validation " + O(e.chargenWarningCount === 1 ? "warning identifies" : "warnings identify") + " playable incomplete or inactive species data. ", 1)], 64)) : V("", !0)]),
			R("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: n[0] ||= (e) => r("reviewIssues")
			}, [B(" Review " + O(i.value === 1 ? "Issue" : "Issues") + " ", 1), n[2] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-chevron-right"
			}, null, -1)])
		], 2)) : e.validationMessage ? (F(), I("p", km, [n[3] ||= R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-exclamation"
		}, null, -1), R("span", null, O(e.validationMessage), 1)])) : e.message ? (F(), I("p", Am, [n[4] ||= R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-circle-info"
		}, null, -1), R("span", null, O(e.message), 1)])) : V("", !0)]));
	}
}), Mm = new Set(Object.values(W));
function Nm(e, t) {
	if (!G(e)) return `${t} must be a JSON object.`;
	for (let [n, r] of Object.entries(e)) {
		if (!Mm.has(n)) return `${t}.${n} is not a supported WFRP characteristic.`;
		let e = Qm(r, `${t}.${n}`, "string formula");
		if (e) return e;
	}
	return "";
}
function Pm(e, t) {
	return Xm(e, t, [
		"die",
		"feet",
		"inches"
	], (e, t) => Ym(e, t, [
		["die", Qm],
		["feet", $m],
		["inches", $m]
	], /* @__PURE__ */ new Set()));
}
function Fm(e, t) {
	return Xm(e, t, ["formula"], (e, t) => Ym(e, t, [["formula", (e, t) => Qm(e, t, "string formula")]], new Set(["formula"])));
}
function Im(e, t) {
	return Xm(e, t, ["rows"], (e, t) => Ym(e, t, [["rows", Lm]], new Set(["rows"])));
}
function Lm(e, t) {
	return Zm(e, t, (e, t) => zm(e, t));
}
function Rm(e, t) {
	return Zm(e, t, (e, t) => zm(e, t));
}
function zm(e, t) {
	return Xm(e, t, ["name"], (e, t) => Ym(e, t, [["name", Qm]], new Set(["name"])));
}
function Bm(e, t) {
	return Zm(e, t, (e, t) => Xm(e, t, ["choices"], (e, t) => Ym(e, t, [["choices", (e, t) => Um(e, t, !0)]], new Set(["choices"]))));
}
function Vm(e, t) {
	return Zm(e, t, (e, t) => Xm(e, t, ["replacement", "rolled"], (e, t) => Ym(e, t, [["replacement", zm], ["rolled", zm]], new Set(["replacement", "rolled"]))));
}
function Hm(e, t) {
	return Zm(e, t, (e, t) => Xm(e, t, ["replacements", "rolled"], (e, t) => Ym(e, t, [["replacements", (e, t) => Um(e, t, !0)], ["rolled", zm]], new Set(["replacements", "rolled"]))));
}
function Um(e, t, n) {
	return n && Array.isArray(e) && e.length === 0 ? `${t} must contain at least one entry.` : Rm(e, t);
}
function Wm(e, t) {
	return Zm(e, t, Qm);
}
function Gm(e, t) {
	return Jm(e, t, Qm);
}
function Km(e, t) {
	return Jm(e, t, $m);
}
function qm(e, t) {
	return Jm(e, t, Wm);
}
function Jm(e, t, n) {
	if (!G(e)) return `${t} must be a JSON object.`;
	for (let [r, i] of Object.entries(e)) {
		if (!r.trim()) return `${t} must not contain an empty key.`;
		let e = n(i, `${t}[${JSON.stringify(r)}]`);
		if (e) return e;
	}
	return "";
}
function Ym(e, t, n, r) {
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
function Xm(e, t, n, r) {
	if (!G(e)) return `${t} must be a JSON object.`;
	let i = Object.keys(e).find((e) => !n.includes(e));
	return i ? `${t}.${i} is not supported by species definition export version 1.` : r(e, t);
}
function Zm(e, t, n) {
	if (!Array.isArray(e)) return `${t} must be an array.`;
	for (let [r, i] of e.entries()) {
		let e = n(i, `${t}[${r}]`);
		if (e) return e;
	}
	return "";
}
function Qm(e, t, n = "non-empty string") {
	return typeof e == "string" && e.trim() ? "" : `${t} must be a ${n}.`;
}
function $m(e, t) {
	return typeof e == "number" && Number.isFinite(e) ? "" : `${t} must be a finite number.`;
}
function eh(e, t) {
	return typeof e == "boolean" ? "" : `${t} must be a boolean.`;
}
//#endregion
//#region src/functions/species-builder/definition-portability/validation.ts
var th = [
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
], nh = [
	...th,
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
], rh = [
	...th,
	"skillsAdded",
	"skillsRemoved",
	"talentsAdded",
	"talentsRemoved",
	"traitsAdded",
	"traitsRemoved"
];
function ih(e) {
	return Xm(e, "definition", nh, ah);
}
function ah(e, t) {
	return oh(e, t) || Ym(e, t, [
		["includeInExtraSpecies", eh],
		["age", Qm],
		["height", Pm],
		["careerReplacementRows", Hm],
		["careerReplacements", qm],
		["linkedSkills", Rm],
		["linkedTalents", Bm],
		["linkedTraits", Rm],
		["skills", Wm],
		["talents", Wm],
		["traits", Wm],
		["subspecies", sh]
	], new Set(["includeInExtraSpecies"]));
}
function oh(e, t) {
	return Ym(e, t, [
		["key", ch],
		["name", Qm],
		["characteristics", Nm],
		["randomTalents", Km],
		["talentReplacementRows", Vm],
		["talentReplacements", Gm],
		["movement", $m],
		["fate", $m],
		["resilience", $m],
		["extra", $m],
		["woundFormula", Fm],
		["careerTable", Im]
	], new Set(["key", "name"]));
}
function sh(e, t) {
	let n = Zm(e, t, (e, t) => Xm(e, t, rh, (e, t) => oh(e, t) || Ym(e, t, [
		["skillsAdded", Wm],
		["skillsRemoved", Wm],
		["talentsAdded", Wm],
		["talentsRemoved", Wm],
		["traitsAdded", Wm],
		["traitsRemoved", Wm]
	], /* @__PURE__ */ new Set())));
	if (n || !Array.isArray(e)) return n;
	let r = /* @__PURE__ */ new Set();
	for (let [n, i] of e.entries()) {
		let e = vl(i.key);
		if (r.has(e)) return `${t}[${n}].key duplicates normalized subspecies key ${JSON.stringify(e)}.`;
		r.add(e);
	}
	return "";
}
function ch(e, t) {
	return Qm(e, t) || (vl(e) ? "" : `${t} must contain at least one ASCII letter or number.`);
}
//#endregion
//#region src/functions/species-builder/definition-portability/index.ts
var lh = "wfrp4e-customizer-species-definition";
function uh(e) {
	let t = fh(e);
	if (!t.ok) throw Error(`Species definition cannot be exported: ${t.error}`);
	let n = {
		definition: mh(t.definition),
		format: lh,
		version: 1
	};
	return JSON.stringify(n, null, 2);
}
function dh(e) {
	let t;
	try {
		t = JSON.parse(e);
	} catch (e) {
		return xh(`Import is not valid JSON: ${e instanceof Error ? e.message : "Unknown JSON error."}`);
	}
	if (!G(t)) return xh("Import payload must be a JSON object.");
	let n = Object.keys(t).find((e) => ![
		"definition",
		"format",
		"version"
	].includes(e));
	if (n) return xh(`${n} is not supported by species definition export version 1.`);
	if (t.format !== "wfrp4e-customizer-species-definition") return xh(`Import payload format must be "${lh}".`);
	if (t.version !== 1) return xh("Import payload version must be 1.");
	if (!("definition" in t)) return xh("Import payload must include a definition object.");
	let r = ih(t.definition);
	if (r) return xh(r);
	let i = fh(t.definition);
	return i.ok ? {
		definition: mh(i.definition),
		ok: !0
	} : i;
}
function fh(e) {
	let t = ph(e);
	if (t) return xh(t);
	let n = Ou({
		definitions: [e],
		showGeneratedConfigTab: !1
	}).definitions[0];
	return n ? {
		definition: n,
		ok: !0
	} : xh("definition could not be normalized as a Species Builder definition.");
}
function ph(e) {
	if (!G(e)) return "definition must be a JSON object.";
	if (typeof e.key != "string" || !e.key.trim()) return "definition.key must be a non-empty string.";
	if (typeof e.name != "string" || !e.name.trim()) return "definition.name must be a non-empty string.";
	if ("includeInExtraSpecies" in e && typeof e.includeInExtraSpecies != "boolean") return "definition.includeInExtraSpecies must be a boolean.";
	if ("subspecies" in e && !Array.isArray(e.subspecies)) return "definition.subspecies must be an array.";
	let t = e.subspecies ?? [];
	for (let [e, n] of t.entries()) {
		if (!G(n)) return `definition.subspecies[${e}] must be a JSON object.`;
		if (typeof n.key != "string" || !n.key.trim()) return `definition.subspecies[${e}].key must be a non-empty string.`;
		if (typeof n.name != "string" || !n.name.trim()) return `definition.subspecies[${e}].name must be a non-empty string.`;
	}
	return "";
}
function mh(e) {
	let t = {
		...e,
		careerTable: bh(e.careerTable),
		subspecies: e.subspecies?.map(hh)
	};
	return e.linkedSkills && (t.linkedSkills = e.linkedSkills.map(gh), t.skills = Ys(t.linkedSkills)), e.linkedTalents && (t.linkedTalents = e.linkedTalents.map(_h), t.talents = Xs(t.linkedTalents)), e.linkedTraits && (t.linkedTraits = e.linkedTraits.map(gh), t.traits = Ys(t.linkedTraits)), e.talentReplacementRows && (t.talentReplacementRows = e.talentReplacementRows.map(vh), t.talentReplacements = qs(t.talentReplacementRows)), e.careerReplacementRows && (t.careerReplacementRows = e.careerReplacementRows.map(yh), t.careerReplacements = Js(t.careerReplacementRows)), t;
}
function hh(e) {
	let t = {
		...e,
		careerTable: bh(e.careerTable)
	};
	return e.talentReplacementRows && (t.talentReplacementRows = e.talentReplacementRows.map(vh), t.talentReplacements = qs(t.talentReplacementRows)), t;
}
function gh(e) {
	return { name: Hs(e) };
}
function _h(e) {
	return { choices: e.choices.map(gh) };
}
function vh(e) {
	return {
		replacement: gh(e.replacement),
		rolled: gh(e.rolled)
	};
}
function yh(e) {
	return {
		replacements: e.replacements.map(gh),
		rolled: gh(e.rolled)
	};
}
function bh(e) {
	return e ? { rows: e.rows.map((e) => ({ name: e.name })) } : void 0;
}
function xh(e) {
	return {
		error: e,
		ok: !1
	};
}
//#endregion
//#region src/view/apps/species-builder/components/dialog-focus.ts
function Sh() {
	let e;
	function t() {
		let t = document.activeElement;
		e = t instanceof HTMLElement && t !== document.body ? t : void 0;
	}
	function n() {
		let t = e;
		e = void 0, jn(() => {
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
//#region src/view/apps/species-builder/components/SpeciesDefinitionPortability.vue?vue&type=script&setup=true&lang.ts
var Ch = ["disabled"], wh = ["onKeydown"], Th = { class: "dui-modal-box" }, Eh = { id: "species-portability-title" }, Dh = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "note"
}, Oh = {
	key: 1,
	class: "dui-fieldset"
}, kh = {
	key: 0,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, Ah = ["disabled", "value"], jh = ["disabled"], Mh = {
	key: 2,
	class: "dui-divider"
}, Nh = { class: "dui-fieldset" }, Ph = ["disabled"], Fh = ["disabled", "value"], Ih = ["disabled"], Lh = {
	key: 3,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, Rh = {
	key: 4,
	class: "dui-alert dui-alert-info"
}, zh = {
	key: 5,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, Bh = { "aria-live": "polite" }, Vh = { class: "dui-modal-action" }, Hh = ["disabled"], Uh = /* @__PURE__ */ M({
	__name: "SpeciesDefinitionPortability",
	props: {
		definition: {},
		buttonClass: {},
		dialogHost: {},
		existingKeys: {},
		isDisabled: { type: Boolean },
		isImportOnly: { type: Boolean }
	},
	emits: ["importDefinition"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ k(), a = Sh(), o = /* @__PURE__ */ k(""), s = /* @__PURE__ */ k(""), c = /* @__PURE__ */ k(""), l = /* @__PURE__ */ k(), u = H(() => {
			if (!n.definition) return {
				error: "Select a species before exporting.",
				text: ""
			};
			try {
				return {
					error: "",
					text: uh(n.definition)
				};
			} catch (e) {
				return {
					error: e instanceof Error ? e.message : "The selected species cannot be exported.",
					text: ""
				};
			}
		}), d = H(() => !!l.value && n.existingKeys.includes(vl(l.value?.key ?? "")));
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
			let e = dh(s.value);
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
		return (t, n) => (F(), I(P, null, [R("button", {
			class: D(["app:w-full app:whitespace-nowrap", e.buttonClass]),
			disabled: e.isDisabled,
			type: "button",
			onClick: f
		}, [R("i", {
			"aria-hidden": "true",
			class: D(e.isImportOnly ? "fa-solid fa-file-import" : "fa-solid fa-arrow-right-arrow-left")
		}, null, 2), B(" " + O(e.isImportOnly ? "Import Species" : "Import / Export"), 1)], 10, Ch), e.dialogHost ? (F(), L(dr, {
			key: 0,
			to: e.dialogHost
		}, [R("dialog", {
			ref_key: "dialog",
			ref: i,
			"aria-labelledby": "species-portability-title",
			class: "dui-modal",
			onClose: m,
			onKeydown: $o(Zo(p, ["stop", "prevent"]), ["esc"]),
			onKeyup: n[0] ||= $o(Zo(() => {}, ["stop"]), ["esc"])
		}, [R("section", Th, [
			R("h2", Eh, O(e.isImportOnly ? "Import Species Definition" : "Transfer Species Definition"), 1),
			n[7] ||= R("p", null, " Imports are staged here and never replace the current draft. Exported JSON contains only project-owned authoring data and names, without Foundry document links. ", -1),
			e.isImportOnly ? (F(), I("div", Dh, [...n[1] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-lock"
			}, null, -1), R("span", null, " Installed species cannot be exported because their source package owns the definition. You can still import a separate custom species below. ", -1)]])) : (F(), I("fieldset", Oh, [
				n[3] ||= R("legend", { class: "dui-fieldset-legend" }, "Export selected species", -1),
				u.value.error ? (F(), I("p", kh, O(u.value.error), 1)) : (F(), I("textarea", {
					key: 1,
					"aria-label": "Species definition export JSON",
					class: "dui-textarea",
					disabled: e.isDisabled,
					readonly: "",
					rows: "10",
					value: u.value.text
				}, null, 8, Ah)),
				R("button", {
					class: "dui-btn",
					disabled: e.isDisabled || !u.value.text,
					type: "button",
					onClick: v
				}, [...n[2] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-copy"
				}, null, -1), B(" Copy Export ", -1)]], 8, jh)
			])),
			e.isImportOnly ? V("", !0) : (F(), I("div", Mh, "Import")),
			R("fieldset", Nh, [
				n[4] ||= R("legend", { class: "dui-fieldset-legend" }, "Choose or paste a species export", -1),
				R("input", {
					accept: "application/json,.json",
					"aria-label": "Choose species definition JSON",
					class: "dui-file-input",
					disabled: e.isDisabled,
					type: "file",
					onChange: _
				}, null, 40, Ph),
				R("textarea", {
					"aria-label": "Species definition import JSON",
					class: "dui-textarea",
					disabled: e.isDisabled,
					placeholder: "Paste a Species Builder export here",
					rows: "8",
					value: s.value,
					onInput: h
				}, null, 40, Fh),
				R("button", {
					class: "dui-btn",
					disabled: e.isDisabled || !s.value.trim(),
					type: "button",
					onClick: g
				}, " Validate Import ", 8, Ih)
			]),
			o.value ? (F(), I("p", Lh, [n[5] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), R("span", null, O(o.value), 1)])) : l.value ? (F(), I("section", Rh, [n[6] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-eye"
			}, null, -1), R("div", null, [
				R("strong", null, O(l.value.name), 1),
				R("p", null, "Key: " + O(l.value.key), 1),
				R("p", null, O(l.value.subspecies?.length ?? 0) + " subspecies", 1)
			])])) : V("", !0),
			d.value ? (F(), I("p", zh, " A species with key " + O(l.value?.key) + " already exists. Change the key in the import JSON and validate it again. ", 1)) : V("", !0),
			R("p", Bh, O(c.value), 1),
			R("div", Vh, [R("button", {
				class: "dui-btn dui-btn-primary",
				disabled: e.isDisabled || !l.value || d.value,
				type: "button",
				onClick: y
			}, " Add Imported Species ", 8, Hh), R("button", {
				class: "dui-btn dui-btn-ghost",
				type: "button",
				onClick: p
			}, "Close")])
		]), n[8] ||= R("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [R("button", {
			"aria-label": "Close transfer dialog",
			type: "submit"
		}, "Close")], -1)], 40, wh)], 8, ["to"])) : V("", !0)], 64));
	}
}), Wh = ["onKeydown"], Gh = {
	key: 0,
	class: "dui-modal-box"
}, Kh = { class: "dui-modal-action" }, qh = /* @__PURE__ */ M({
	__name: "UnsafeSaveConfirmationSubView",
	props: { isOpen: { type: Boolean } },
	emits: ["close", "confirm"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ k(), a = Sh();
		function o() {
			i.value?.close();
		}
		function s() {
			n.isOpen && r("close"), a.restore();
		}
		return Xn(() => n.isOpen, async (e) => {
			e ? (a.capture(), await jn(), n.isOpen && !i.value?.open && i.value?.showModal()) : i.value?.open && i.value.close();
		}, {
			flush: "post",
			immediate: !0
		}), (t, n) => (F(), I("dialog", {
			ref_key: "dialog",
			ref: i,
			class: "dui-modal",
			"aria-describedby": "species-builder-unsafe-save-message",
			"aria-labelledby": "species-builder-unsafe-save-title",
			onClose: s,
			onKeydown: $o(Zo(o, ["stop", "prevent"]), ["esc"]),
			onKeyup: n[1] ||= $o(Zo(() => {}, ["stop"]), ["esc"])
		}, [e.isOpen ? (F(), I("section", Gh, [
			n[2] ||= R("h2", { id: "species-builder-unsafe-save-title" }, "Save Despite Character-Creation Errors?", -1),
			n[3] ||= R("div", {
				id: "species-builder-unsafe-save-message",
				class: "dui-alert dui-alert-warning app:mt-3",
				role: "alert"
			}, [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-triangle-exclamation"
			}), R("span", null, " These changes contain errors for species that can be rolled or selected. Saving is unsafe and may cause species selection or character creation to fail. ")], -1),
			R("div", Kh, [R("button", {
				class: "dui-btn dui-btn-warning",
				type: "button",
				onClick: n[0] ||= (e) => r("confirm")
			}, " Save Anyway "), R("button", {
				autofocus: "",
				class: "dui-btn",
				type: "button",
				onClick: o
			}, "Cancel")])
		])) : V("", !0), n[4] ||= R("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [R("button", {
			"aria-label": "Cancel unsafe save",
			type: "submit"
		}, "Close")], -1)], 40, Wh));
	}
});
//#endregion
//#region src/view/apps/species-builder/components/unsafe-save.ts
function Jh(e) {
	let t = /* @__PURE__ */ k(!1);
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
//#region src/view/apps/species-builder/components/validation/validation-presentation.ts
function Yh(e, t) {
	return {
		count: (e?.count ?? 0) + 1,
		severity: e?.severity === "error" || Qh(t) === "error" ? "error" : "warning"
	};
}
function Xh(e) {
	return e.reduce((e, t) => Yh(e, t), void 0);
}
function Zh(e) {
	if (!e) return "";
	let t = e.severity === "error" ? "error" : "warning";
	return `${e.count} character-creation ${t}${e.count === 1 ? "" : "s"}`;
}
function Qh(e) {
	return e.severity === "warning" ? "warning" : "error";
}
//#endregion
//#region src/view/apps/species-builder/components/validation/species-builder-validation-summary.ts
var $h = [
	"careerTable",
	"randomTalents",
	"talentReplacement",
	"careerReplacement"
], eg = {
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
function tg(e) {
	return e.filter((e) => e.code !== "species-table-definition-not-ready" && e.code !== "species-table-runtime-not-ready");
}
function ng(e) {
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
		subspeciesTab: cg(e.section),
		tableTab: ug(e.section) ? e.section : void 0
	} : ug(e.section) ? {
		definitionIndex: e.definitionIndex,
		editorTab: "tables",
		kind: "definition",
		tableTab: e.section
	} : {
		definitionIndex: e.definitionIndex,
		editorTab: sg(e.section),
		kind: "definition"
	};
}
function rg(e, t) {
	return e.map((e, t) => ({
		index: t,
		issue: e
	})).sort((e, t) => dg(e.issue) - dg(t.issue) || e.index - t.index).map(({ issue: e }) => ({
		context: ag(e, t),
		issue: e
	}));
}
function ig(e, t) {
	let n = e?.destination;
	return n?.kind === "subspecies" && n.subspeciesIndex === t ? {
		tab: n.subspeciesTab,
		tableTab: n.tableTab
	} : void 0;
}
function ag(e, t) {
	if (e.scope === "species-table") return e.rowIndex === void 0 ? "Species Table" : `Species Table · Row ${e.rowIndex + 1}`;
	let n = t[e.definitionIndex ?? -1], r = og(n, "Unknown Species");
	if (e.scope !== "subspecies") return `${r} · ${eg[e.section]}`;
	let i = n?.subspecies?.[e.subspeciesIndex ?? -1];
	return `${r} / ${og(i, "Unknown Subspecies")} · ${lg(e.section)}`;
}
function og(e, t) {
	return e?.name.trim() || e?.key.trim() || t;
}
function sg(e) {
	return e === "subspecies" ? "subspecies" : e === "species-table" || ug(e) ? "details" : e;
}
function cg(e) {
	return ug(e) ? "tables" : e === "skills" || e === "traits" ? "changes" : e === "talents" || e === "wounds" ? e : "details";
}
function lg(e) {
	return e === "subspecies" || e === "attributes" || e === "details" ? "Details" : e === "skills" || e === "traits" ? "Skills & Traits" : eg[e];
}
function ug(e) {
	return $h.includes(e);
}
function dg(e) {
	return Qh(e) === "error" ? 0 : 1;
}
//#endregion
//#region src/view/apps/species-builder-suite/components/SpeciesSuiteHeader.vue?vue&type=script&setup=true&lang.ts
var fg = { class: "dui-navbar app:sticky app:top-0 app:z-20 app:border-b app:border-base-300 app:bg-base-200 app:px-3" }, pg = { class: "dui-navbar-start app:min-w-0 app:flex-1" }, mg = { class: "app:min-w-0" }, hg = {
	key: 0,
	"aria-label": "Current location",
	class: "dui-breadcrumbs app:py-0 app:text-xs"
}, gg = { key: 0 }, _g = { key: 1 }, vg = { "aria-current": "page" }, yg = { class: "app:flex app:min-w-0 app:flex-wrap app:items-center app:gap-2" }, bg = { class: "app:m-0 app:truncate app:text-lg app:leading-tight" }, xg = {
	key: 0,
	class: "dui-badge dui-badge-warning dui-badge-sm"
}, Sg = { class: "dui-navbar-end app:flex-wrap app:gap-1" }, Cg = { class: "dui-badge dui-badge-sm" }, wg = ["disabled"], Tg = ["disabled"], Eg = /* @__PURE__ */ M({
	__name: "SpeciesSuiteHeader",
	props: {
		canSave: {
			type: Boolean,
			default: !1
		},
		context: { default: "" },
		errorCount: { default: 0 },
		hasUnsavedChanges: {
			type: Boolean,
			default: !1
		},
		isBusy: { type: Boolean },
		parentLabel: { default: "Species List" },
		showIssues: {
			type: Boolean,
			default: !0
		},
		showParent: {
			type: Boolean,
			default: !0
		},
		showReload: {
			type: Boolean,
			default: !0
		},
		showSave: {
			type: Boolean,
			default: !0
		},
		title: {},
		warningCount: { default: 0 }
	},
	emits: [
		"openIssues",
		"openParent",
		"reload",
		"save"
	],
	setup(e) {
		return (t, n) => (F(), I("header", fg, [R("div", pg, [R("div", mg, [e.showParent || e.context ? (F(), I("nav", hg, [R("ul", null, [e.showParent ? (F(), I("li", gg, [R("button", {
			class: "dui-btn dui-btn-link dui-btn-xs",
			type: "button",
			onClick: n[0] ||= (e) => t.$emit("openParent")
		}, O(e.parentLabel), 1)])) : V("", !0), e.context ? (F(), I("li", _g, [R("span", vg, O(e.context), 1)])) : V("", !0)])])) : V("", !0), R("div", yg, [R("h1", bg, O(e.title), 1), e.hasUnsavedChanges ? (F(), I("span", xg, " Unsaved ")) : V("", !0)])])]), R("div", Sg, [
			e.showIssues && e.errorCount + e.warningCount > 0 ? (F(), I("button", {
				key: 0,
				class: "dui-btn dui-btn-outline dui-btn-sm",
				type: "button",
				onClick: n[1] ||= (e) => t.$emit("openIssues")
			}, [
				n[4] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-triangle-exclamation"
				}, null, -1),
				n[5] ||= B(" Issues ", -1),
				R("span", Cg, O(e.errorCount + e.warningCount), 1)
			])) : V("", !0),
			e.showReload ? (F(), I("button", {
				key: 1,
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.isBusy,
				type: "button",
				onClick: n[2] ||= (e) => t.$emit("reload")
			}, [...n[6] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-rotate-right"
			}, null, -1), B(" Reload ", -1)]], 8, wg)) : V("", !0),
			e.showSave ? (F(), I("button", {
				key: 2,
				class: "dui-btn dui-btn-primary dui-btn-sm",
				disabled: !e.canSave,
				type: "button",
				onClick: n[3] ||= (e) => t.$emit("save")
			}, [n[7] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-floppy-disk"
			}, null, -1), B(" " + O(e.isBusy ? "Working…" : "Save Changes"), 1)], 8, Tg)) : V("", !0)
		])]));
	}
}), Dg = ["aria-busy"], Og = { class: "app:flex app:flex-1 app:flex-col app:gap-3 app:p-3" }, kg = {
	class: "app:flex app:flex-wrap app:items-center app:gap-2",
	"aria-label": "Species tools"
}, Ag = ["disabled"], jg = ["disabled"], Mg = ["disabled"], Ng = ["disabled"], Pg = {
	key: 0,
	class: "dui-input dui-input-sm app:w-full"
}, Fg = {
	key: 1,
	class: "dui-alert",
	role: "status"
}, Ig = {
	key: 2,
	class: "dui-alert dui-alert-info",
	role: "status"
}, Lg = {
	key: 3,
	class: "dui-alert",
	role: "status"
}, Rg = {
	key: 4,
	class: "app:max-w-full app:overflow-x-auto app:rounded-box app:border app:border-base-300 app:bg-base-100"
}, zg = { class: "dui-table dui-table-sm" }, Bg = { scope: "row" }, Vg = ["onClick"], Hg = { class: "app:block" }, Ug = { class: "app:block app:text-xs app:font-normal app:text-base-content/60" }, Wg = { class: "dui-badge dui-badge-ghost dui-badge-sm" }, Gg = ["title", "onClick"], Kg = { class: "app:sr-only" }, qg = {
	key: 1,
	class: "dui-badge dui-badge-success dui-badge-sm"
}, Jg = ["disabled", "onClick"], Yg = /* @__PURE__ */ M({
	__name: "SpeciesDirectoryApp",
	props: {
		bridge: {},
		onOpenConfigurator: { type: Function },
		onOpenIssues: { type: Function },
		onOpenSpecies: { type: Function },
		onOpenSpeciesTable: { type: Function },
		onOpenWfrpConfig: { type: Function },
		onSettingsSaved: { type: Function }
	},
	setup(e) {
		let t = e, n = Tm(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = Jh(n), i = /* @__PURE__ */ k(""), a = /* @__PURE__ */ k(), o = H(() => n.isLoading.value || n.isSaving.value), s = H(() => tg(n.validationIssues.value)), c = H(() => s.value.filter((e) => e.severity === "error").length), l = H(() => s.value.length - c.value), u = H(() => Ml(n.definitions.value).map(({ key: e }) => e)), d = H(() => {
			let e = i.value.trim().toLocaleLowerCase();
			return n.definitions.value.map((e, t) => ({
				definition: e,
				index: t
			})).filter(({ definition: t }) => !e || t.name.toLocaleLowerCase().includes(e) || t.key.toLocaleLowerCase().includes(e));
		});
		jr(() => void n.ensureSettingsLoaded());
		function f(e) {
			return e.name.trim() || e.key.trim() || "Untitled Species";
		}
		function p(e) {
			return e.runtimeUnavailable ? "Source unavailable" : e.origin === "runtime" ? "Installed" : "Custom";
		}
		function m(e) {
			return Xh(n.validationIssues.value.filter((t) => t.definitionIndex === e));
		}
		function h() {
			n.addBlankDefinition(), t.onOpenSpecies(n.selectedIndex.value);
		}
		function g(e) {
			n.addDefinition(e), t.onOpenSpecies(n.selectedIndex.value);
		}
		function _(e) {
			e.target instanceof HTMLInputElement && e.stopPropagation();
		}
		return (t, s) => (F(), I("section", {
			class: "app:flex app:min-h-full app:flex-col",
			"aria-busy": o.value,
			onKeydown: _,
			onKeyup: _
		}, [
			z(Eg, {
				"can-save": A(n).canSave.value,
				"error-count": c.value,
				"has-unsaved-changes": A(n).hasUnsavedChanges.value,
				"is-busy": o.value,
				"show-parent": !1,
				title: "Species",
				"warning-count": l.value,
				onOpenIssues: s[0] ||= (t) => e.onOpenIssues(),
				onReload: A(n).loadSettings,
				onSave: A(r).requestSave
			}, null, 8, [
				"can-save",
				"error-count",
				"has-unsaved-changes",
				"is-busy",
				"warning-count",
				"onReload",
				"onSave"
			]),
			z(qh, {
				"is-open": A(r).isConfirmationOpen.value,
				onClose: A(r).closeConfirmation,
				onConfirm: A(r).confirmSave
			}, null, 8, [
				"is-open",
				"onClose",
				"onConfirm"
			]),
			R("div", {
				ref_key: "portabilityHost",
				ref: a
			}, null, 512),
			R("main", Og, [
				z(jm, {
					"chargen-error-count": c.value,
					"chargen-warning-count": l.value,
					"load-error": A(n).loadError.value || A(n).saveError.value,
					message: A(n).message.value,
					"validation-message": A(n).blockingSpeciesTableValidationMessages.value[0] ?? "",
					onReviewIssues: s[1] ||= (t) => e.onOpenIssues()
				}, null, 8, [
					"chargen-error-count",
					"chargen-warning-count",
					"load-error",
					"message",
					"validation-message"
				]),
				R("section", kg, [
					R("button", {
						class: "dui-btn dui-btn-primary dui-btn-sm",
						disabled: o.value,
						type: "button",
						onClick: h
					}, [...s[6] ||= [R("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-plus"
					}, null, -1), B(" New Species ", -1)]], 8, Ag),
					z(Uh, {
						"button-class": "dui-btn dui-btn-sm",
						definition: void 0,
						"dialog-host": a.value,
						"existing-keys": u.value,
						"is-disabled": o.value,
						"is-import-only": "",
						onImportDefinition: g
					}, null, 8, [
						"dialog-host",
						"existing-keys",
						"is-disabled"
					]),
					R("button", {
						class: "dui-btn dui-btn-sm",
						disabled: o.value,
						type: "button",
						onClick: s[2] ||= (...t) => e.onOpenSpeciesTable && e.onOpenSpeciesTable(...t)
					}, [...s[7] ||= [R("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-dice-d20"
					}, null, -1), B(" Species Table ", -1)]], 8, jg),
					R("button", {
						class: "dui-btn dui-btn-sm",
						disabled: o.value,
						type: "button",
						onClick: s[3] ||= (...t) => e.onOpenConfigurator && e.onOpenConfigurator(...t)
					}, [...s[8] ||= [R("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-sliders"
					}, null, -1), B(" Configurator ", -1)]], 8, Mg),
					A(n).showGeneratedConfigTab.value ? (F(), I("button", {
						key: 0,
						class: "dui-btn dui-btn-sm",
						disabled: o.value,
						type: "button",
						onClick: s[4] ||= (...t) => e.onOpenWfrpConfig && e.onOpenWfrpConfig(...t)
					}, [...s[9] ||= [R("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-code"
					}, null, -1), B(" WFRP Config ", -1)]], 8, Ng)) : V("", !0)
				]),
				A(n).definitions.value.length ? (F(), I("label", Pg, [s[10] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-magnifying-glass"
				}, null, -1), Un(R("input", {
					"onUpdate:modelValue": s[5] ||= (e) => i.value = e,
					type: "search",
					placeholder: "Find a species by name or key"
				}, null, 512), [[Go, i.value]])])) : V("", !0),
				o.value && !A(n).isLoaded.value ? (F(), I("div", Fg, [...s[11] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-spinner fa-spin"
				}, null, -1), R("span", null, "Loading installed and custom species…", -1)]])) : A(n).definitions.value.length === 0 ? (F(), I("div", Ig, [...s[12] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-circle-info"
				}, null, -1), R("span", null, "No species were found. Create a custom species to begin.", -1)]])) : d.value.length === 0 ? (F(), I("div", Lg, [s[13] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-magnifying-glass"
				}, null, -1), R("span", null, "No species match “" + O(i.value.trim()) + "”. Clear the search to see all species.", 1)])) : (F(), I("div", Rg, [R("table", zg, [
					s[16] ||= R("caption", { class: "app:sr-only" }, " Installed and custom WFRP species ", -1),
					s[17] ||= R("thead", null, [R("tr", null, [
						R("th", { scope: "col" }, "Species"),
						R("th", { scope: "col" }, "Source"),
						R("th", { scope: "col" }, "Subspecies"),
						R("th", { scope: "col" }, "Validation"),
						R("th", { scope: "col" }, [R("span", { class: "app:sr-only" }, "Open")])
					])], -1),
					R("tbody", null, [(F(!0), I(P, null, N(d.value, (t) => (F(), I("tr", { key: `${t.definition.origin}-${t.definition.key}-${t.index}` }, [
						R("th", Bg, [R("button", {
							class: "dui-btn dui-btn-link dui-btn-sm app:h-auto app:justify-start app:p-0 app:text-left",
							type: "button",
							onClick: (n) => e.onOpenSpecies(t.index)
						}, [R("span", null, [R("span", Hg, O(f(t.definition)), 1), R("code", Ug, O(t.definition.key || "Key not set"), 1)])], 8, Vg)]),
						R("td", null, [R("span", Wg, [R("i", {
							"aria-hidden": "true",
							class: D(t.definition.origin === "runtime" ? "fa-solid fa-lock" : "fa-solid fa-pen")
						}, null, 2), B(" " + O(p(t.definition)), 1)])]),
						R("td", null, O(t.definition.subspecies?.length ?? 0), 1),
						R("td", null, [m(t.index) ? (F(), I("button", {
							key: 0,
							class: D(["dui-btn dui-btn-outline dui-btn-xs", m(t.index)?.severity === "error" ? "dui-btn-error" : "dui-btn-warning"]),
							title: A(Zh)(m(t.index)),
							type: "button",
							onClick: (n) => e.onOpenIssues(t.index)
						}, [
							R("i", {
								"aria-hidden": "true",
								class: D(m(t.index)?.severity === "error" ? "fa-solid fa-circle-exclamation" : "fa-solid fa-triangle-exclamation")
							}, null, 2),
							B(" " + O(m(t.index)?.count) + " ", 1),
							R("span", Kg, O(A(Zh)(m(t.index))), 1)
						], 10, Gg)) : (F(), I("span", qg, [...s[14] ||= [R("i", {
							"aria-hidden": "true",
							class: "fa-solid fa-check"
						}, null, -1), B(" Good ", -1)]]))]),
						R("td", null, [R("button", {
							class: "dui-btn dui-btn-sm",
							disabled: o.value,
							type: "button",
							onClick: (n) => e.onOpenSpecies(t.index)
						}, [B(O(t.definition.origin === "runtime" ? "Inspect" : "Edit") + " ", 1), s[15] ||= R("i", {
							"aria-hidden": "true",
							class: "fa-solid fa-arrow-up-right-from-square"
						}, null, -1)], 8, Jg)])
					]))), 128))])
				])]))
			])
		], 40, Dg));
	}
}), Y = "wfrp4e-customizer-apps", Xg = "Drowsy's WFRP4e Customizers", Zg = "wfrp4e";
//#endregion
//#region src/functions/species-builder/example-species/monster-species/shared.ts
function Qg(e, t, n, r) {
	return {
		characteristics: e_(...n),
		key: e,
		name: t,
		...r
	};
}
function X(e, t, n, r = {}) {
	return {
		...n ? { characteristics: e_(...n) } : {},
		key: e,
		name: t,
		...r
	};
}
function Z(...e) {
	return { rows: e.map((e) => ({ name: e })) };
}
function $g(...e) {
	return {
		definitions: e,
		runtimeSpeciesExtensions: []
	};
}
function e_(e, t, n, r, i, a, o, s, c, l) {
	return {
		ag: t_(a),
		bs: t_(t),
		dex: t_(o),
		fel: t_(l),
		i: t_(i),
		int: t_(s),
		s: t_(n),
		t: t_(r),
		wp: t_(c),
		ws: t_(e)
	};
}
function t_(e) {
	return e === -1 ? "0" : `2d10+${e}`;
}
//#endregion
//#region src/functions/species-builder/example-species/monster-species/backlog/beastfolk.ts
function n_() {
	return Qg("apeman", "Apeman", [
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
		careerTable: Z("Herbalist", "Hunter", "Scout", "Warrior", "Warden"),
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
function r_() {
	return Qg("hawk-person", "Hawk Person", [
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
		careerTable: Z("Hunter", "Messenger", "Scout", "Soldier", "Warden"),
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
function i_() {
	return Qg("monkey-person", "Monkey Person", [
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
		careerTable: Z("Entertainer", "Envoy", "Hunter", "Scout", "Thief", "Warrior"),
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
function a_() {
	return Qg("satyr", "Satyr", [
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
		careerTable: Z("Entertainer", "Hunter", "Mystic", "Outlaw", "Scout"),
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
function o_() {
	return Qg("tigerman", "Tigerman", [
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
		careerTable: Z("Envoy", "Hunter", "Mercenary", "Scout", "Warrior"),
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
function s_() {
	return Qg("albion-giant", "Albion Giant", [
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
		careerTable: Z("Druid", "Hunter", "Labourer", "Mystic", "Warrior"),
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
function c_() {
	return Qg("centaur", "Centaur", [
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
		careerTable: Z("Entertainer", "Herder", "Hunter", "Scout", "Warrior"),
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
function l_() {
	return Qg("half-orc", "Half-Orc", [
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
		careerTable: Z("Guard", "Mercenary", "Outlaw", "Scout", "Soldier", "Warrior"),
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
function u_() {
	return Qg("mossling", "Mossling", [
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
		careerTable: Z("Herbalist", "Hunter", "Mystic", "Scout", "Trader"),
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
function d_() {
	return Qg("beastman", "Beastman", [
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
		careerTable: Z("Warrior", "Outlaw", "Hunter", "Scout", "Trapper", "Zealot", "Mystic", "Pit Fighter"),
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
		subspecies: [X("gor", "Gor", [
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
			careerTable: Z("Warrior", "Pit Fighter", "Outlaw", "Hunter", "Zealot"),
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
		}), X("ungor", "Ungor", [
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
			careerTable: Z("Scout", "Hunter", "Trapper", "Outlaw", "Servant"),
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
function f_() {
	return Qg("lakeman", "Lakeman", [
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
		careerTable: Z("Hunter", "Scout", "Outlaw", "Riverwarden", "Trapper"),
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
function p_() {
	return Qg("menfish", "Menfish", [
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
		careerTable: Z("Hunter", "Outlaw", "Riverwarden", "Boatman", "Scout"),
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
function m_() {
	return Qg("minotaur", "Minotaur", [
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
		careerTable: Z("Warrior", "Pit Fighter", "Guard", "Hunter", "Outlaw"),
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
function h_() {
	return Qg("medusa", "Medusa", [
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
		careerTable: Z("Hunter", "Mystic", "Outlaw", "Spy", "Warrior", "Wizard"),
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
		subspecies: [X("armoured-medusa", "Armoured Medusa", void 0, {
			skillsAdded: ["Endurance"],
			talentsAdded: ["Hardy", "Very Resilient"],
			traitsAdded: ["Armour (2)"]
		}), X("serpentine-medusa", "Serpentine Medusa", void 0, {
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
function g_() {
	return Qg("pegasus", "Pegasus", [
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
		careerTable: Z("Entertainer", "Hunter", "Messenger", "Scout", "Warden"),
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
		subspecies: [X("dark-pegasus", "Dark Pegasus", [
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
function __() {
	return Qg("great-eagle", "Great Eagle", [
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
		careerTable: Z("Envoy", "Hunter", "Messenger", "Scout", "Warden"),
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
function v_() {
	return Qg("naiad", "Naiad", [
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
		careerTable: Z("Advisor", "Envoy", "Herbalist", "Mystic", "Scout", "Wizard"),
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
function y_() {
	return Qg("sea-elf", "Sea Elf", [
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
		careerTable: Z("Boatman", "Envoy", "Merchant", "Navigator", "Seaman", "Wizard"),
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
var b_ = Z("Thief", "Outlaw", "Scout", "Hunter", "Rat Catcher", "Smuggler", "Beggar", "Entertainer", "Servant");
function x_() {
	return Qg("goblin", "Goblin", [
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
		careerTable: b_,
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
		subspecies: S_(),
		talents: [
			"Night Vision",
			"Snivel",
			"Step Aside, Beneath Notice, Flee!"
		],
		traits: ["Afraid (Elves)"]
	});
}
function S_() {
	return [
		X("forest", "Forest Goblin", [
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
			careerTable: Z("Hunter", "Scout", "Trapper", "Outlaw", "Herbalist"),
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
		X("night", "Night Goblin", [
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
			careerTable: Z("Miner", "Herbalist", "Scout", "Hunter", "Outlaw"),
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
		X("hobgoblin", "Hobgoblin", [
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
			careerTable: Z("Cavalryman", "Scout", "Spy", "Assassin", "Outlaw", "Duellist"),
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
		X("gnoblar", "Gnoblar", [
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
			careerTable: Z("Servant", "Beggar", "Thief", "Rat Catcher", "Entertainer", "Pedlar"),
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
		X("fire-kobold", "Fire Kobold", [
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
			careerTable: Z("Hunter", "Scout", "Outlaw", "Miner", "Engineer"),
			skillsAdded: [
				"Endurance",
				"Lore (Volcanoes)",
				"Ranged (Throwing)",
				"Set Trap"
			],
			talentsAdded: ["Resistance (Fire)", "Very Resilient"],
			traitsAdded: ["Breath (Fire)", "Ward (8+)"]
		}),
		X("troglagob", "Troglagob", [
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
			careerTable: Z("Boatman", "Riverwarden", "Hunter", "Scout", "Outlaw"),
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
function C_() {
	return Qg("orc", "Orc", [
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
		careerTable: Z("Warrior", "Soldier", "Guard", "Pit Fighter", "Outlaw", "Hunter"),
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
		subspecies: [X("savage", "Savage Orc", void 0, {
			careerTable: Z("Warrior", "Hunter", "Scout", "Pit Fighter", "Mystic"),
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
		}), X("black", "Black Orc", [
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
			careerTable: Z("Soldier", "Guard", "Pit Fighter", "Bodyguard", "Sergeant"),
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
function w_(e) {
	let t = e ? new Set(e) : void 0;
	return {
		definitions: [],
		runtimeSpeciesExtensions: [{
			speciesKey: "human",
			speciesName: "Human",
			subspecies: T_().filter((e) => !t || t.has(e.key))
		}]
	};
}
function T_() {
	return [
		X("amazonian", "Amazonian", void 0, {
			careerTable: Z("Hunter", "Herbalist", "Scholar", "Scout", "Wizard"),
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
		X("anathema", "Anathema", void 0, {
			careerTable: Z("Witch Hunter", "Zealot", "Warrior Priest", "Outlaw", "Flagellant"),
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
		X("bestial-mutant", "Bestial Mutant", void 0, {
			careerTable: Z("Outlaw", "Hunter", "Scout", "Warrior", "Mystic", "Entertainer"),
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
		X("borderlander", "Borderlander", void 0, {
			careerTable: Z("Mercenary", "Outlaw", "Scout", "Soldier", "Trader", "Warden"),
			skillsAdded: [
				"Language (Tilean)",
				"Lore (Border Princes)",
				"Outdoor Survival",
				"Ride (Horse)"
			],
			talentsAdded: ["Rover", "Warrior Born"]
		}),
		X("bretonnian", "Bretonnian", void 0, {
			careerTable: Z("Peasant", "Servant", "Hunter", "Knight", "Priest", "Soldier"),
			skillsAdded: [
				"Animal Care",
				"Language (Bretonnian)",
				"Lore (Bretonnia)",
				"Pray",
				"Ride (Horse)"
			],
			talentsAdded: ["Etiquette (Nobles), Etiquette (Rural)", "Roughrider"]
		}),
		X("kislevite", "Kislevite", void 0, {
			careerTable: Z("Cavalryman", "Hunter", "Scout", "Soldier", "Warden", "Wizard"),
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
		X("norscan", "Norscan", void 0, {
			careerTable: Z("Boatman", "Hunter", "Outlaw", "Seaman", "Warrior", "Wrecker"),
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
		X("strigany", "Strigany", void 0, {
			careerTable: Z("Entertainer", "Merchant", "Mystic", "Outlaw", "Pedlar", "Witch"),
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
		X("sworn-to-malal", "Sworn to Malal", void 0, {
			careerTable: Z("Flagellant", "Outlaw", "Witch Hunter", "Warrior", "Zealot"),
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
		X("sworn-to-the-horned-rat", "Sworn to The Horned Rat", void 0, {
			careerTable: Z("Cultist", "Outlaw", "Spy", "Thief", "Zealot"),
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
		X("sworn-to-the-ruinous-powers", "Sworn to the Ruinous Powers", void 0, {
			careerTable: Z("Cultist", "Marauder", "Outlaw", "Warrior", "Wizard", "Zealot"),
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
function E_() {
	return Qg("skink", "Skink", [
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
		careerTable: Z("Artisan", "Hunter", "Scout", "Servant", "Steward", "Wizard"),
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
function D_() {
	return Qg("saurus", "Saurus", [
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
		careerTable: Z("Guard", "Pit Fighter", "Soldier", "Warrior", "Warden"),
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
function O_() {
	return Qg("snakeman", "Chaos Snakeman", [
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
		careerTable: Z("Guard", "Hunter", "Mystic", "Warrior", "Wizard"),
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
function k_() {
	return Qg("kroxigor", "Kroxigor", [
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
		careerTable: Z("Labourer", "Pit Fighter", "Soldier", "Warrior", "Warden"),
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
function A_() {
	return Qg("coatl", "Coatl", [
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
		careerTable: Z("Advisor", "Mystic", "Priest", "Scholar", "Wizard"),
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
function j_() {
	return Qg("beastfiend", "Beastfiend", [
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
		careerTable: Z("Hunter", "Mystic", "Outlaw", "Warrior", "Zealot"),
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
		subspecies: M_(),
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
function M_() {
	return [
		X("bloodborn", "Bloodborn Beastfiend", [
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
			careerTable: Z("Pit Fighter", "Soldier", "Warrior", "Zealot"),
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
		X("delightborn", "Delightborn Beastfiend", [
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
			careerTable: Z("Assassin", "Duellist", "Entertainer", "Spy", "Warrior"),
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
		X("plagueborn", "Plagueborn Beastfiend", [
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
			careerTable: Z("Flagellant", "Herbalist", "Physician", "Warrior", "Zealot"),
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
		X("changeborn", "Changeborn Beastfiend", [
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
			careerTable: Z("Alchemist", "Mystic", "Scholar", "Witch", "Wizard"),
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
function N_() {
	return Qg("dragon-ogre", "Dragon Ogre", [
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
		careerTable: Z("Guard", "Mystic", "Pit Fighter", "Warrior", "Zealot"),
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
function P_() {
	return Qg("fimir", "Fimir", [
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
		careerTable: Z("Hunter", "Mystic", "Outlaw", "Warrior", "Wizard"),
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
			X("shearl", "Shearl", [
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
			X("fimm", "Fimm Warrior", [
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
			X("dirach", "Dirach", [
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
function F_() {
	return Qg("giant", "Giant", [
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
		careerTable: Z("Entertainer", "Hunter", "Labourer", "Outlaw", "Pit Fighter", "Warrior"),
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
function I_() {
	return Qg("zoat", "Zoat", [
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
		careerTable: Z("Herbalist", "Hunter", "Mystic", "Scholar", "Wizard"),
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
function L_() {
	return Qg("skaven", "Skaven", [
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
		careerTable: Z("Thief", "Outlaw", "Scout", "Rat Catcher", "Smuggler", "Beggar", "Servant", "Messenger", "Spy", "Soldier"),
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
		subspecies: R_(),
		talents: [
			"Night Vision",
			"Acute Sense (Smell)",
			"Snivel, Beneath Notice, Flee!",
			"Tunnel Rat, Enclosed Fighter"
		],
		traits: []
	});
}
function R_() {
	return [
		X("skryre", "Clan Skryre", void 0, {
			careerTable: Z("Engineer", "Artisan", "Alchemist", "Scholar", "Wizard"),
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
		X("moulder", "Clan Moulder", void 0, {
			careerTable: Z("Animal Trainer", "Physician", "Pit Fighter", "Slaver", "Artisan"),
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
		X("pestilens", "Clan Pestilens", void 0, {
			careerTable: Z("Zealot", "Physician", "Herbalist", "Alchemist", "Flagellant"),
			skillsAdded: [
				"Heal",
				"Lore (Medicine)",
				"Lore (Poison)",
				"Pray"
			],
			talentsAdded: ["Resistance (Disease)", "Resistance (Poison)"],
			traitsAdded: ["Disease (Ratte Fever)", "Infected"]
		}),
		X("eshin", "Clan Eshin", void 0, {
			careerTable: Z("Thief", "Assassin", "Spy", "Scout", "Duellist", "Messenger"),
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
		X("mors", "Clan Mors", [
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
			careerTable: Z("Soldier", "Guard", "Sergeant", "Bodyguard", "Pit Fighter"),
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
		X("rictus", "Clan Rictus", [
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
			careerTable: Z("Soldier", "Guard", "Bodyguard", "Pit Fighter", "Sergeant"),
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
		X("female", "Female Skaven", [
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
			careerTable: Z("Bodyguard", "Guard", "Soldier", "Pit Fighter", "Champion"),
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
		X("grey-seer", "Grey Seer Ratling", [
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
			careerTable: Z("Wizard", "Priest", "Scholar", "Advisor", "Mystic"),
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
		X("albino-guard", "Albino Guard Ratling", [
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
			careerTable: Z("Bodyguard", "Guard", "Soldier", "Sergeant", "Champion"),
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
function z_() {
	return Qg("ghoul", "Ghoul", [
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
		careerTable: Z("Grave Robber", "Hunter", "Outlaw", "Scout", "Thief"),
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
function B_() {
	return Qg("risen-corpse", "Risen Corpse", [
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
		careerTable: Z("Guard", "Labourer", "Outlaw", "Soldier", "Warrior"),
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
		subspecies: [X("skeleton", "Skeleton", [
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
		}), X("zombie", "Zombie", [
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
function V_() {
	return Qg("vampire", "Vampire", [
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
		careerTable: Z("Advisor", "Duellist", "Noble", "Spy", "Warrior", "Wizard"),
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
		subspecies: [X("strigoi", "Strigoi", [
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
			careerTable: Z("Hunter", "Outlaw", "Pit Fighter", "Warrior"),
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
var H_ = Z_(x_), U_ = Z_(C_), W_ = Z_(d_), G_ = Z_(L_), K_ = Z_(V_), q_ = [
	Q("albion-giant", "Albion Giant", s_),
	Q("amazonian", "Amazonian", Q_("amazonian")),
	Q("anathema", "Anathema", Q_("anathema")),
	Q("apeman", "Apeman", n_),
	Q("beastfiend", "Beastfiend", j_),
	Q("beastman", "Beastman family", W_),
	Q("bestial-mutant", "Bestial Mutant", Q_("bestial-mutant")),
	Q("black-orc", "Black Orc (Orc family)", U_),
	Q("borderlander", "Borderlander", Q_("borderlander")),
	Q("bretonnian", "Bretonnian", Q_("bretonnian")),
	Q("centaur", "Centaur", c_),
	Q("chaos-snakeman", "Chaos Snakeman", O_),
	Q("clan-eshin", "Clan Eshin (Skaven family)", G_),
	Q("clan-mors", "Clan Mors (Skaven family)", G_),
	Q("clan-moulder", "Clan Moulder (Skaven family)", G_),
	Q("clan-pestilens", "Clan Pestilens (Skaven family)", G_),
	Q("clan-rictus", "Clan Rictus (Skaven family)", G_),
	Q("clan-skryre", "Clan Skryre (Skaven family)", G_),
	Q("dragon-ogre", "Dragon Ogre", N_),
	Q("female-skaven", "Female Skaven (Skaven family)", G_),
	Q("fimir", "Fimir", P_),
	Q("fire-kobold", "Fire Kobold (Goblin family)", H_),
	Q("forest-goblin", "Forest Goblin (Goblin family)", H_),
	Q("ghoul", "Ghoul", z_),
	Q("giant", "Giant", F_),
	Q("gnoblar", "Gnoblar (Goblin family)", H_),
	Q("goblin", "Goblin family", H_),
	Q("gor", "Gor (Beastman family)", W_),
	Q("grey-seer", "Grey Seer Ratling (Skaven family)", G_),
	Q("half-orc", "Half-Orc", l_),
	Q("hawk-person", "Hawk Person", r_),
	Q("hobgoblin", "Hobgoblin (Goblin family)", H_),
	Q("kislevite", "Kislevite", Q_("kislevite")),
	Q("lakeman", "Lakeman", f_),
	Q("menfish", "Menfish", p_),
	Q("minotaur", "Minotaur", m_),
	Q("monkey-person", "Monkey Person", i_),
	Q("mossling", "Mossling", u_),
	Q("night-goblin", "Night Goblin (Goblin family)", H_),
	Q("norscan", "Norscan", Q_("norscan")),
	Q("orc", "Orc family", U_),
	Q("risen-corpse", "Risen Corpse", B_),
	Q("satyr", "Satyr", a_),
	Q("saurus", "Saurus", D_),
	Q("savage-orc", "Savage Orc (Orc family)", U_),
	Q("sea-elf", "Sea Elf", y_),
	Q("skaven", "Skaven family", G_),
	Q("skink", "Skink", E_),
	Q("strigany", "Strigany", Q_("strigany")),
	Q("strigoi", "Strigoi (Vampire family)", K_),
	Q("sworn-horned-rat", "Sworn to the Horned Rat", Q_("sworn-to-the-horned-rat")),
	Q("sworn-malal", "Sworn to Malal", Q_("sworn-to-malal")),
	Q("sworn-ruinous-powers", "Sworn to the Ruinous Powers", Q_("sworn-to-the-ruinous-powers")),
	Q("tigerman", "Tigerman", o_),
	Q("troglagob", "Troglagob (Goblin family)", H_),
	Q("ungor", "Ungor (Beastman family)", W_),
	Q("vampire", "Vampire family", K_),
	Q("zoat", "Zoat", I_),
	Q("albino-guard-ratling", "Albino Guard Ratling (Skaven family)", G_),
	X_("coatl", "Coatl", A_),
	X_("great-eagle", "Great Eagle", __),
	X_("kroxigor", "Kroxigor", k_),
	X_("medusa", "Medusa", h_),
	X_("naiad", "Naiad", v_),
	X_("pegasus", "Pegasus", g_)
].sort((e, t) => e.label.localeCompare(t.label));
function J_() {
	return {
		definitions: Y_(),
		runtimeSpeciesExtensions: w_().runtimeSpeciesExtensions
	};
}
function Y_() {
	return [
		s_(),
		n_(),
		j_(),
		d_(),
		c_(),
		O_(),
		A_(),
		N_(),
		P_(),
		z_(),
		F_(),
		x_(),
		__(),
		l_(),
		r_(),
		k_(),
		f_(),
		h_(),
		p_(),
		m_(),
		i_(),
		u_(),
		v_(),
		C_(),
		g_(),
		B_(),
		a_(),
		D_(),
		y_(),
		L_(),
		E_(),
		o_(),
		V_(),
		I_()
	];
}
function Q(e, t, n) {
	return {
		createPackage: () => $_(n()),
		description: `Adds the researched ${t} sample species definition.`,
		id: e,
		label: t
	};
}
function X_(e, t, n) {
	return {
		...Q(e, `${t} (discovery)`, n),
		label: `${t} (discovery)`
	};
}
function Z_(e) {
	return () => $g(e());
}
function Q_(e) {
	return () => w_([e]);
}
function $_(e) {
	return "definitions" in e ? e : $g(e);
}
//#endregion
//#region src/functions/species-builder/example-species/viltrumite.ts
function ev() {
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
var tv = [...q_, {
	createPackage: () => $g(ev()),
	description: "A deliberately extreme species for stress-testing formulas and generated Traits.",
	id: "viltrumite",
	label: "Viltrumite (stress test)"
}].sort((e, t) => e.label.localeCompare(t.label)), nv = tv.map(({ description: e, id: t, label: n }) => ({
	description: e,
	id: t,
	label: n
}));
function rv() {
	let e = J_();
	return {
		definitions: [ev(), ...e.definitions],
		runtimeSpeciesExtensions: e.runtimeSpeciesExtensions
	};
}
function iv(e) {
	return tv.find((t) => t.id === e)?.createPackage();
}
//#endregion
//#region src/view/apps/species-builder/tabs/settings/SpeciesBuilderSettingsPanel.vue?vue&type=script&setup=true&lang.ts
var av = { class: "dui-card dui-card-border dui-card-sm" }, ov = { class: "dui-card-body" }, sv = { class: "dui-fieldset" }, cv = { class: "dui-label" }, lv = ["checked", "disabled"], uv = { class: "dui-fieldset" }, dv = { class: "dui-label app:w-full app:items-start app:justify-between app:gap-3 app:whitespace-normal" }, fv = ["checked", "disabled"], pv = { class: "dui-fieldset" }, mv = { class: "dui-fieldset-legend" }, hv = { class: "dui-badge dui-badge-sm" }, gv = { class: "dui-label app:w-full app:items-start app:justify-between app:gap-3 app:whitespace-normal" }, _v = ["checked", "disabled"], vv = { class: "dui-fieldset" }, yv = ["disabled", "value"], bv = ["value"], xv = { class: "dui-fieldset-label" }, Sv = { class: "dui-join" }, Cv = ["disabled"], wv = ["disabled"], Tv = /* @__PURE__ */ M({
	__name: "SpeciesBuilderSettingsPanel",
	props: {
		autoRegisterSpeciesTable: { type: Boolean },
		correctExistingWfrpSpecies: { type: Boolean },
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
		"updateCorrectExistingWfrpSpecies",
		"updateSelectedExampleSpeciesId",
		"updateShowGeneratedConfigTab"
	],
	setup(e, { emit: t }) {
		let n = t, r = e, i = H(() => r.exampleSpeciesOptions.find((e) => e.id === r.selectedExampleSpeciesId));
		function a(e) {
			return e.target instanceof HTMLInputElement && e.target.checked;
		}
		function o(e) {
			return e.target instanceof HTMLSelectElement ? e.target.value : "";
		}
		function s() {
			return r.speciesTable.ownership === "external" ? r.speciesTable.isRegistered ? "External table active" : "External table" : r.speciesTable.ownership === "managed" ? r.speciesTable.isRegistered ? "Registered" : "Not registered" : "No managed table yet";
		}
		return (t, r) => (F(), I("section", av, [R("div", ov, [
			r[18] ||= R("header", null, [R("h2", { class: "dui-card-title" }, "Species Builder Settings"), R("p", null, "Control optional tools and add sample definitions to the current draft.")], -1),
			R("fieldset", sv, [
				r[7] ||= R("legend", { class: "dui-fieldset-legend" }, "Generated config", -1),
				r[8] ||= R("p", { class: "dui-fieldset-label" }, " Expose the read-only WFRP config generated from the current draft. ", -1),
				R("label", cv, [R("input", {
					class: "dui-checkbox",
					checked: e.showGeneratedConfigTab,
					disabled: e.isDisabled,
					type: "checkbox",
					onChange: r[0] ||= (e) => n("updateShowGeneratedConfigTab", a(e))
				}, null, 40, lv), r[6] ||= R("span", null, "Show WFRP config tab", -1)])
			]),
			R("fieldset", uv, [r[10] ||= R("legend", { class: "dui-fieldset-legend" }, "Installed WFRP species", -1), R("label", dv, [r[9] ||= R("span", null, [R("strong", null, "Correct known species data"), R("span", { class: "app:block app:text-base-content/70" }, " Fills known missing details and repairs malformed references in installed WFRP content. Badger, Cat, Crow, Fox, Owl, and Stoat remain Animal Familiar subspecies instead of also appearing as top-level species. Takes effect after reloading Foundry. ")], -1), R("input", {
				class: "dui-toggle dui-toggle-primary app:shrink-0",
				checked: e.correctExistingWfrpSpecies,
				disabled: e.isDisabled,
				type: "checkbox",
				onChange: r[1] ||= (e) => n("updateCorrectExistingWfrpSpecies", a(e))
			}, null, 40, fv)])]),
			R("fieldset", pv, [R("legend", mv, [r[11] ||= B(" World Species Table ", -1), R("span", hv, O(s()), 1)]), R("label", gv, [r[12] ||= R("span", null, [R("strong", null, "Register managed table on save"), R("span", { class: "app:block app:text-base-content/70" }, " When enabled, Save Changes points WFRP’s world Species table setting to the Builder-managed table. Turning this off stops future registration; it does not change or delete the table currently selected by WFRP. ")], -1), R("input", {
				class: "dui-toggle dui-toggle-primary app:shrink-0",
				checked: e.autoRegisterSpeciesTable,
				disabled: e.isDisabled,
				type: "checkbox",
				onChange: r[2] ||= (e) => n("updateAutoRegisterSpeciesTable", a(e))
			}, null, 40, _v)])]),
			r[19] ||= R("div", { class: "dui-divider" }, "Sample Definitions", -1),
			R("fieldset", vv, [
				r[15] ||= R("legend", { class: "dui-fieldset-legend" }, "Example Species", -1),
				r[16] ||= R("p", { class: "dui-fieldset-label" }, " Add preconfigured species definitions matching sample species Journal material. ", -1),
				r[17] ||= R("label", {
					class: "dui-label",
					for: "species-builder-example"
				}, "Sample definition", -1),
				R("select", {
					id: "species-builder-example",
					class: "dui-select",
					disabled: e.isDisabled,
					value: e.selectedExampleSpeciesId,
					onChange: r[3] ||= (e) => n("updateSelectedExampleSpeciesId", o(e))
				}, [(F(!0), I(P, null, N(e.exampleSpeciesOptions, (e) => (F(), I("option", {
					key: e.id,
					value: e.id
				}, O(e.label), 9, bv))), 128))], 40, yv),
				R("p", xv, O(i.value?.description), 1),
				R("div", Sv, [R("button", {
					class: "dui-btn dui-join-item",
					disabled: e.isDisabled || !e.selectedExampleSpeciesId,
					type: "button",
					onClick: r[4] ||= (t) => n("generateExampleSpecies", e.selectedExampleSpeciesId)
				}, [...r[13] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-scroll"
				}, null, -1), B(" Generate Selected ", -1)]], 8, Cv), R("button", {
					class: "dui-btn dui-join-item",
					disabled: e.isDisabled || e.exampleSpeciesOptions.length === 0,
					type: "button",
					onClick: r[5] ||= (e) => n("generateAllExampleSpecies")
				}, [...r[14] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-layer-group"
				}, null, -1), B(" Generate All ", -1)]], 8, wv)])
			])
		])]));
	}
}), Ev = ["aria-busy"], Dv = { class: "app:flex app:flex-1 app:flex-col app:gap-3 app:p-3" }, Ov = /* @__PURE__ */ M({
	__name: "SpeciesConfiguratorApp",
	props: {
		bridge: {},
		onOpenDirectory: { type: Function },
		onOpenSpecies: { type: Function },
		onSettingsSaved: { type: Function }
	},
	setup(e) {
		let t = e, n = Tm(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = Jh(n), i = /* @__PURE__ */ k(nv[0]?.id ?? ""), a = H(() => n.isLoading.value || n.isSaving.value);
		jr(() => void n.ensureSettingsLoaded());
		function o(e) {
			let r = iv(e);
			r && (n.addExamplePackage(r), t.onOpenSpecies(n.selectedIndex.value));
		}
		function s() {
			n.addExamplePackage(rv()), t.onOpenSpecies(n.selectedIndex.value);
		}
		return (t, c) => (F(), I("section", {
			class: "app:flex app:min-h-full app:flex-col",
			"aria-busy": a.value
		}, [
			z(Eg, {
				"can-save": A(n).canSave.value,
				context: "Project settings",
				"has-unsaved-changes": A(n).hasUnsavedChanges.value,
				"is-busy": a.value,
				"show-issues": !1,
				title: "Configurator",
				onOpenParent: e.onOpenDirectory,
				onReload: A(n).loadSettings,
				onSave: A(r).requestSave
			}, null, 8, [
				"can-save",
				"has-unsaved-changes",
				"is-busy",
				"onOpenParent",
				"onReload",
				"onSave"
			]),
			z(qh, {
				"is-open": A(r).isConfirmationOpen.value,
				onClose: A(r).closeConfirmation,
				onConfirm: A(r).confirmSave
			}, null, 8, [
				"is-open",
				"onClose",
				"onConfirm"
			]),
			R("main", Dv, [z(jm, {
				"chargen-error-count": 0,
				"chargen-warning-count": 0,
				"load-error": A(n).loadError.value || A(n).saveError.value,
				message: A(n).message.value,
				"validation-message": ""
			}, null, 8, ["load-error", "message"]), z(Tv, {
				"auto-register-species-table": A(n).autoRegisterSpeciesTable.value,
				"correct-existing-wfrp-species": A(n).correctExistingWfrpSpecies.value,
				"example-species-options": A(nv),
				"is-disabled": a.value,
				"selected-example-species-id": i.value,
				"show-generated-config-tab": A(n).showGeneratedConfigTab.value,
				"species-table": A(n).speciesTable.value,
				onGenerateAllExampleSpecies: s,
				onGenerateExampleSpecies: o,
				onUpdateAutoRegisterSpeciesTable: A(n).updateAutoRegisterSpeciesTable,
				onUpdateCorrectExistingWfrpSpecies: A(n).updateCorrectExistingWfrpSpecies,
				onUpdateSelectedExampleSpeciesId: c[0] ||= (e) => i.value = e,
				onUpdateShowGeneratedConfigTab: A(n).updateShowGeneratedConfigTab
			}, null, 8, [
				"auto-register-species-table",
				"correct-existing-wfrp-species",
				"example-species-options",
				"is-disabled",
				"selected-example-species-id",
				"show-generated-config-tab",
				"species-table",
				"onUpdateAutoRegisterSpeciesTable",
				"onUpdateCorrectExistingWfrpSpecies",
				"onUpdateShowGeneratedConfigTab"
			])])
		], 8, Ev));
	}
}), kv = "wfrp4e-customizer-apps.document-drop";
//#endregion
//#region src/module/foundry/document-drop.ts
function Av(e) {
	let t = e.value.trim();
	if (!t) return "";
	if (Rv(t)) return t;
	let n = Pv(t), r = Iv(n, e.documentType);
	return r ? zv(n) ? JSON.stringify({
		type: r,
		uuid: n
	}) : JSON.stringify({
		id: n,
		type: r
	}) : "";
}
function jv(e) {
	let t = !0;
	function n() {
		t && (t = !1, document.removeEventListener("click", r, !0));
	}
	function r(t) {
		let r = t.target;
		if (!(r instanceof Element)) return;
		let i = Mv(r);
		i && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), n(), e(i));
	}
	return document.addEventListener("click", r, !0), n;
}
function Mv(e) {
	let t = e.closest("[data-uuid], [data-document-uuid], [data-entry-uuid], [data-document-id], [data-entry-id], [data-pack]");
	if (!t) return "";
	let n = t.dataset.uuid || t.dataset.documentUuid || t.dataset.entryUuid || "";
	if (n) return Nv(n);
	let r = t.dataset.documentId || t.dataset.entryId || "", i = Fv(t);
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
function Nv(e) {
	let t = Iv(e, "auto");
	return t ? JSON.stringify({
		type: t,
		uuid: e
	}) : "";
}
function Pv(e) {
	return /@UUID\[([^\]]+)]/.exec(e)?.[1]?.trim() ?? e;
}
function Fv(e) {
	let t = e.dataset.documentName || e.dataset.type || e.closest("[data-document-name]")?.dataset.documentName || "";
	return Lv(t) ? t : e.classList.contains("actor") ? "Actor" : e.classList.contains("item") ? "Item" : e.classList.contains("journal") ? "JournalEntry" : e.closest("#actors") ? "Actor" : e.closest("#items") ? "Item" : e.closest("#journal") ? "JournalEntry" : "";
}
function Iv(e, t) {
	return /^actor\./i.test(e) || /\.actors(\.|$)/i.test(e) ? "Actor" : /^item\./i.test(e) || /\.items(\.|$)/i.test(e) ? "Item" : /journalentrypage\./i.test(e) || /\.journalentrypage\./i.test(e) ? "JournalEntryPage" : /^journalentry\./i.test(e) || /\.journals(\.|$)/i.test(e) ? "JournalEntry" : t === "auto" ? "Item" : t;
}
function Lv(e) {
	return e === "Actor" || e === "Item" || e === "JournalEntry" || e === "JournalEntryPage";
}
function Rv(e) {
	if (!e.startsWith("{")) return !1;
	try {
		return typeof JSON.parse(e).type == "string";
	} catch {
		return !1;
	}
}
function zv(e) {
	return /^(actor|item|journalentry|journalentrypage|compendium)\./i.test(e);
}
var Bv = {
	createDropData: Av,
	startDocumentPick: jv
}, Vv = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("wfrp4e-customizer-apps-root"), n.dataset.theme = "wfrp4e-customizer-apps", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("wfrp4e-customizer-apps-app"), t.replaceChildren(e);
		let r = this.getVueProps() ?? {};
		this.#e = rs(this.getVueComponent(), r), this.#e.use(Bs), this.#e.provide(kv, Bv), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, Hv = "generatedSpeciesCareerTable", Uv = "Compendium.wfrp4e-core.journals.JournalEntry.wczCPcuHT4VQDLpL", Wv = "Compendium.wfrp4e-archives3.journals.JournalEntry.jnN5JqDCI8T1epzs.JournalEntryPage.yByG9MMGFjml7sRQ";
function Gv(e, t = []) {
	return [
		...sc(e, t).flatMap((e) => [...e.emitBaseDefinition ? qv(e.definition) : [], ...Zv(e.definition, e.subspecies)]),
		...Jv(e, t),
		...Yv(e, t)
	];
}
function Kv({ fallbackJournalUuid: e = Uv, flagScope: t, spec: n }) {
	return {
		displayRoll: !0,
		flags: {
			wfrp4e: {
				column: n.column,
				key: "career"
			},
			[t]: { [Hv]: {
				speciesKey: n.speciesKey,
				subspeciesKey: n.subspeciesKey ?? ""
			} }
		},
		formula: `1d${n.rows.length}`,
		img: "systems/wfrp4e/ui/buttons/d10.webp",
		name: n.name,
		replacement: !0,
		results: n.rows.map((t, n) => ({
			description: Qv(t, e),
			drawn: !1,
			img: "icons/svg/d20-grey.svg",
			name: t.name,
			range: [n + 1, n + 1],
			type: "text",
			weight: 1
		}))
	};
}
function qv(e) {
	return e.careerTable?.rows.length ? [{
		column: ml(e),
		name: `Career - ${e.name}`,
		rows: e.careerTable.rows,
		speciesKey: e.key
	}] : [];
}
function Jv(e, t) {
	if (!e.correctExistingWfrpSpecies) return [];
	let n = t.find((e) => e.name.trim() === "Animal Familiar");
	return n ? [{
		column: n.key,
		name: "Career - Animal Familiar",
		rows: [{
			journalUuid: Wv,
			name: "Power Familiar"
		}],
		speciesKey: n.key
	}] : [];
}
function Yv(e, t) {
	if (!e.correctExistingWfrpSpecies) return [];
	let n = t.find((e) => e.name.trim() === fc);
	if (!n) return [];
	let r = xc(n.key);
	return [...qv(r), ...Zv(r, r.subspecies ?? [])];
}
function Xv(e) {
	return e === "Compendium.wfrp4e-wom.items.Item.GWEA2m8FN3IbV7Su" || e === "Compendium.wfrp4e-wom.items.Item.6wTQe3nFr1j64D6s";
}
function Zv(e, t) {
	return t.flatMap((t) => t.careerTable?.rows.length ? [{
		column: hl(e, t),
		name: `Career - ${e.name} / ${t.name}`,
		rows: t.careerTable.rows,
		speciesKey: e.key,
		subspeciesKey: t.key
	}] : []);
}
function Qv(e, t) {
	return `@UUID[${e.journalUuid?.trim() || t}]{${$v(e.name)}}`;
}
function $v(e) {
	return e.replaceAll("{", "").replaceAll("}", "").trim();
}
//#endregion
//#region src/functions/species-builder/default-species-builder-settings.ts
function ey() {
	return {
		autoRegisterSpeciesTable: !1,
		correctExistingWfrpSpecies: !1,
		definitions: [],
		runtimeSpeciesExtensions: [],
		showGeneratedConfigTab: !1
	};
}
//#endregion
//#region src/module/settings/foundry-setting-adapter.ts
function ty(e) {
	return e;
}
function ny(e) {
	game.settings.register(Y, e.key, {
		config: e.config ?? !1,
		default: e.defaultValue,
		name: e.name,
		scope: e.scope ?? "world",
		type: Object
	});
}
function ry(e) {
	return e.normalize(game.settings.get(Y, e.key));
}
async function iy(e, t) {
	let n = e.normalize(t);
	return await game.settings.set(Y, e.key, n), n;
}
//#endregion
//#region src/module/apps/species-builder/settings.ts
var ay = ty({
	defaultValue: ey(),
	key: "speciesBuilderSettings",
	name: "Species Builder Settings",
	normalize: Ou
});
function oy() {
	ny(ay);
}
function sy() {
	return ry(ay);
}
async function cy(e) {
	return await iy(ay, e);
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/config-snapshot.ts
var ly = [
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
function uy(e) {
	let t = G(e) ? e : {}, n = Object.fromEntries(ly.map((e) => [e, hy(t[e])]));
	return {
		extraSpecies: _y(t.extraSpecies),
		records: n
	};
}
function dy(e, t, n) {
	let r = Object.fromEntries(ly.map((r) => [r, py(r, e.records[r], t.records[r], n)]));
	return {
		extraSpecies: vy([...e.extraSpecies, ...t.extraSpecies]).filter((t) => !n.has(t) || e.extraSpecies.includes(t)),
		records: r
	};
}
function fy(e, t, n) {
	return e.records[t][n];
}
function py(e, t, n, r) {
	let i = e === "subspecies" ? my(t, n) : {
		...t,
		...n
	};
	for (let e of r) Object.hasOwn(t, e) ? i[e] = gy(t[e]) : delete i[e];
	return i;
}
function my(e, t) {
	let n = new Set([...Object.keys(e), ...Object.keys(t)]);
	return Object.fromEntries([...n].map((n) => {
		let r = G(e[n]) ? e[n] : {}, i = G(t[n]) ? t[n] : {};
		return [n, {
			...r,
			...i
		}];
	}));
}
function hy(e) {
	return G(e) ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, gy(t)])) : {};
}
function gy(e) {
	return Array.isArray(e) ? e.map(gy) : G(e) ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, gy(t)])) : e;
}
function _y(e) {
	return Array.isArray(e) ? e.flatMap((e) => typeof e == "string" && e.trim() ? [e.trim()] : []) : [];
}
function vy(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/career-table.ts
function yy(e, t, n) {
	let r = xy(e, t, typeof n == "string" ? n.trim() : "");
	for (let e of r) {
		let t = game.wfrp4e?.tables?.findTable?.("career", e);
		if (!t) continue;
		let n = Sy(t, e);
		if (n) return by(n);
	}
}
function by(e) {
	if (!G(e)) return;
	let t = ky(e.results).flatMap((e) => {
		let t = wy(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? { rows: t } : void 0;
}
function xy(e, t, n) {
	let r = t ? [
		n,
		`${e}-${t}`,
		e
	] : [e];
	return e === "human" && r.push("human-reiklander"), [...new Set(r.filter(Boolean))];
}
function Sy(e, t) {
	return !G(e) || !Array.isArray(e.columns) ? e : e.columns.find((e) => Cy(e) === t);
}
function Cy(e) {
	if (!G(e) || typeof e.getFlag != "function") return "";
	let t = e.getFlag.call(e, "wfrp4e", "column");
	return typeof t == "string" ? t : "";
}
function wy(e) {
	if (!G(e)) return;
	let t = Dy(e), n = /@UUID\[([^\]]+)\]\{([^}]+)\}/u.exec(t), r = Oy(n?.[2] ?? ""), i = Oy(t) || Oy(e.name), a = r || i;
	if (!a) return;
	let o = n?.[1]?.trim(), s = Ty(e.range), c = Ey(e.weight), l = { name: a };
	return o && (l.journalUuid = o), s && (l.sourceRange = s), c !== void 0 && (l.sourceWeight = c), l;
}
function Ty(e) {
	if (!Array.isArray(e) || e.length < 2) return;
	let t = Number(e[0]), n = Number(e[1]);
	return Number.isFinite(t) && Number.isFinite(n) ? [t, n] : void 0;
}
function Ey(e) {
	let t = Number(e);
	return Number.isFinite(t) && t > 0 ? t : void 0;
}
function Dy(e) {
	if (e.type === "document") {
		let t = e.documentUuid, n = e.name;
		return typeof t == "string" && typeof n == "string" ? `@UUID[${t}]{${n}}` : "";
	}
	let t = e.description ?? e.text;
	return typeof t == "string" ? t : "";
}
function Oy(e) {
	return typeof e == "string" ? e.replace(/@UUID\[[^\]]+\]\{([^}]+)\}/gu, "$1").replace(/<[^>]*>/gu, "").trim() : "";
}
function ky(e) {
	return Array.isArray(e) ? e : typeof e == "object" && e && Symbol.iterator in e ? [...e] : [];
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/values.ts
var Ay = Object.values(W);
function jy(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
function My(e) {
	return typeof e == "number" && Number.isFinite(e) ? e : void 0;
}
function Ny(e) {
	if (Array.isArray(e)) return e.flatMap((e) => {
		let t = jy(e);
		return t ? [t] : [];
	});
}
function Py(e) {
	if (!Array.isArray(e)) return;
	let t, n = [];
	for (let r of e) {
		let e = Fy(r);
		if (e !== void 0) {
			t = e;
			continue;
		}
		let i = jy(r);
		i && n.push(i);
	}
	return t === void 0 ? { talents: n } : {
		randomTalentCount: t,
		talents: n
	};
}
function Fy(e) {
	if (typeof e == "number") return My(e);
	if (typeof e != "string" || !e.trim()) return;
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function Iy(e) {
	if (G(e)) return Object.fromEntries(Object.entries(e).flatMap(([e, t]) => {
		let n = jy(e), r = jy(t);
		return n && r ? [[n, r]] : [];
	}));
}
function Ly(e) {
	if (G(e)) return Object.fromEntries(Object.entries(e).flatMap(([e, t]) => {
		let n = jy(e), r = Fy(t);
		return n && r !== void 0 ? [[n, r]] : [];
	}));
}
function Ry(e) {
	if (G(e)) return Object.fromEntries(Object.entries(e).flatMap(([e, t]) => {
		let n = jy(e), r = Ny(t);
		return n && r ? [[n, r]] : [];
	}));
}
function zy(e) {
	if (!G(e)) return;
	let t = Ay.flatMap((t) => {
		let n = jy(e[t]);
		return n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : {};
}
function By(e) {
	if (!G(e)) return;
	let t = {};
	return U(t, "die", jy(e.die)), U(t, "feet", My(e.feet)), U(t, "inches", My(e.inches)), Object.keys(t).length > 0 ? t : {};
}
function Vy(e, t, n = void 0) {
	if (!e && t === void 0) return;
	let r = { ...e ?? n };
	return t !== void 0 && (r.talents = t), r;
}
function Hy(e, t) {
	let n = t.filter((t) => !e.includes(t)), r = e.filter((e) => !t.includes(e)), i = {};
	return U(i, "added", n.length > 0 ? n : void 0), U(i, "removed", r.length > 0 ? r : void 0), i;
}
function Uy(e, t) {
	let n = Object.fromEntries(Object.entries(t).filter(([t, n]) => e?.[t] !== n));
	return Object.keys(n).length > 0 ? n : void 0;
}
function Wy(e, t) {
	let n = Object.entries(e ?? {}), r = Object.entries(t ?? {});
	return n.length === r.length && n.every(([e, n]) => t?.[e] === n);
}
function Gy(e, t, n, r) {
	let i = My(r);
	i !== void 0 && i !== n && (e[t] = i);
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/definition-adapter.ts
function Ky(e, t) {
	let n = new Set(e.extraSpecies);
	return Object.entries(e.records.species).flatMap(([r, i]) => {
		let a = r.trim();
		return a ? [qy(e, a, i, n, t)] : [];
	}).sort(tb);
}
function qy(e, t, n, r, i) {
	let a = {
		includeInExtraSpecies: r.has(t),
		key: t,
		name: jy(n) ?? t
	}, o = Py(fy(e, "speciesTalents", t));
	U(a, "characteristics", zy(fy(e, "speciesCharacteristics", t))), U(a, "skills", Ny(fy(e, "speciesSkills", t))), U(a, "talents", o?.talents), U(a, "randomTalents", Vy(Ly(fy(e, "speciesRandomTalents", t)), o?.randomTalentCount)), U(a, "talentReplacements", Iy(fy(e, "speciesTalentReplacement", t))), U(a, "traits", Ny(fy(e, "speciesTraits", t))), Jy(a, e, t), U(a, "careerTable", i.resolveCareerTable(t, void 0, void 0));
	let s = Yy(e, a, i);
	return U(a, "subspecies", s.length > 0 ? s : void 0), a;
}
function Jy(e, t, n) {
	U(e, "movement", My(fy(t, "speciesMovement", n))), U(e, "fate", My(fy(t, "speciesFate", n))), U(e, "resilience", My(fy(t, "speciesRes", n))), U(e, "extra", My(fy(t, "speciesExtra", n))), U(e, "age", jy(fy(t, "speciesAge", n))), U(e, "height", By(fy(t, "speciesHeight", n))), U(e, "careerReplacements", Ry(fy(t, "speciesCareerReplacements", n)));
}
function Yy(e, t, n) {
	let r = fy(e, "subspecies", t.key);
	return G(r) ? Object.entries(r).flatMap(([r, i]) => r.trim() && G(i) ? [Xy(e, t, r.trim(), i, n)] : []).sort(tb) : [];
}
function Xy(e, t, n, r, i) {
	let a = {
		key: n,
		name: jy(r.name) ?? n
	}, o = zy(r.characteristics);
	o && U(a, "characteristics", Uy(t.characteristics, o)), Zy(a, t, r), $y(a, t, r), eb(a, t, r), U(a, "careerReplacements", Ry(fy(e, "speciesCareerReplacements", `${t.key}-${n}`)));
	let s = Iy(r.talentReplacement);
	return Wy(t.talentReplacements, s) || U(a, "talentReplacements", s), U(a, "careerTable", i.resolveCareerTable(t.key, n, r.careerTable)), a;
}
function Zy(e, t, n) {
	Qy(e, "skills", t.skills ?? [], Ny(n.skills));
	let r = Py(n.talents);
	Qy(e, "talents", t.talents ?? [], r?.talents), Qy(e, "traits", t.traits ?? [], Ny(n.speciesTraits));
}
function Qy(e, t, n, r) {
	if (!r) return;
	let i = Hy(n, r);
	U(e, `${t}Added`, i.added), U(e, `${t}Removed`, i.removed);
}
function $y(e, t, n) {
	let r = Py(n.talents), i = Vy(Ly(n.randomTalents), r?.randomTalentCount, t.randomTalents);
	Wy(t.randomTalents, i) || U(e, "randomTalents", i);
}
function eb(e, t, n) {
	Gy(e, "movement", t.movement, n.movement), Gy(e, "fate", t.fate, n.fate), Gy(e, "resilience", t.resilience, n.resilience), Gy(e, "extra", t.extra, n.extra);
}
function tb(e, t) {
	return e.name.localeCompare(t.name);
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/index.ts
var nb, rb = [];
function ib() {
	nb = uy(game.wfrp4e?.config), rb = [];
}
async function ab(e, t = []) {
	let n = dy(nb ?? uy(void 0), uy(game.wfrp4e?.config), new Set(e.map((e) => e.trim()).filter(Boolean)));
	for (let e of t) delete n.records.species[e];
	rb = Ky(n, { resolveCareerTable: yy });
}
async function ob() {
	return structuredClone(rb);
}
//#endregion
//#region src/module/apps/species-builder/career-tables.ts
var sb = "WFRP Customizer Generated Career Tables", cb = "WFRP Customizer Career Table Link Fallback";
async function lb(t = sy()) {
	let n = Gv(t, await ob()).filter((e) => !ub(e) || !db(e.column)), r = await fb(), i = await hb();
	await pb(r);
	for (let e of n) {
		let t = Kv({
			fallbackJournalUuid: i,
			flagScope: Y,
			spec: e
		});
		await RollTable.create({
			...t,
			folder: r.id
		});
	}
	e(`${Y} | Regenerated ${n.length} Species Builder career table(s).`);
}
function ub(e) {
	return e.rows.some((e) => e.journalUuid === "Compendium.wfrp4e-archives3.journals.JournalEntry.jnN5JqDCI8T1epzs.JournalEntryPage.yByG9MMGFjml7sRQ" || Xv(e.journalUuid));
}
function db(e) {
	return (game.tables?.contents ?? []).some((t) => !mb(t) && t.getFlag("wfrp4e", "key") === "career" && t.getFlag("wfrp4e", "column") === e);
}
async function fb() {
	let e = game.folders.contents.find((e) => e.type === "RollTable" && e.name === sb);
	if (e) return e;
	let t = await Folder.create({
		name: sb,
		type: "RollTable"
	});
	if (!t) throw Error("Foundry did not create the generated career table folder.");
	return t;
}
async function pb(e) {
	let t = (game.tables?.contents ?? []).filter((t) => t.folder?.id === e.id || mb(t));
	for (let e of t) await e.delete();
}
function mb(e) {
	return G(K(e.toObject(), [
		"flags",
		Y,
		Hv
	]));
}
async function hb() {
	let e = game.journal?.contents.find((e) => e.name === cb);
	if (e) return e.uuid;
	let t = await JournalEntry.create({
		name: cb,
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
function gb(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
function _b(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Item";
}
function vb(e, t = "Expected a Foundry Actor.") {
	if (!gb(e)) throw Error(t);
	return e;
}
function yb(e, t = "Expected a Foundry Item.") {
	if (!_b(e)) throw Error(t);
	return e;
}
function bb(e, t, n = `Expected a Foundry ${t} Item.`) {
	let r = yb(e, n);
	if (r.type !== t) throw Error(n);
	return r;
}
//#endregion
//#region src/module/foundry/drop-data.ts
function xb(e) {
	try {
		return JSON.parse(e);
	} catch {
		throw Error("Foundry drop data could not be read.");
	}
}
//#endregion
//#region src/module/apps/species-builder/item-drops.ts
async function Sb(e, t) {
	let n = xb(e);
	if (n.type !== "Item" || !n.uuid) throw Error(`Drop a Foundry ${t} item here.`);
	let r = yb(await fromUuid(n.uuid), `Drop a Foundry ${t} item here.`);
	if (r.type !== t) throw Error(`Drop a Foundry ${t} item here.`);
	let i = {
		name: t === "career" && Eb(r) || r.name,
		type: t,
		uuid: r.uuid
	};
	if (t === "career") {
		let e = Db(r);
		e && (i.careerJournalUuid = e);
	}
	let a = Tb(r);
	return a && (i.specification = a), r.img && (i.img = r.img), i;
}
async function Cb(e) {
	let t = xb(e);
	if (t.type !== "JournalEntry" && t.type !== "JournalEntryPage" || !t.uuid) throw Error("Drop a Foundry Journal Entry or Journal Entry Page here.");
	let n = await fromUuid(t.uuid);
	if (!Ab(n)) throw Error("Drop a Foundry Journal Entry or Journal Entry Page here.");
	return {
		name: n.name,
		uuid: n.uuid
	};
}
async function wb(e) {
	yb(await fromUuid(e), "The linked Foundry Item was not found.").sheet?.render(!0);
}
function Tb(e) {
	let t = [
		K(e.system, ["specification", "value"]),
		K(e, ["specifier"]),
		K(e.system, ["specifier"]),
		K(e.system, ["specifier", "value"])
	];
	for (let e of t) {
		if (typeof e == "string" && e.trim()) return e.trim();
		if (typeof e == "number") return String(e);
	}
	return "";
}
function Eb(e) {
	let t = K(e.system, ["careergroup", "value"]);
	return typeof t == "string" ? t.trim() : "";
}
function Db(e) {
	let t = K(e.system, ["description", "value"]);
	return typeof t == "string" ? /^@UUID\[([^\]]+)]{[^{}]+}$/.exec(Ob(t))?.[1]?.trim() ?? "" : "";
}
function Ob(e) {
	let t = e.trim();
	t = t.replaceAll(/<(p|div)>(?:\s|&nbsp;|<br\s*\/?>)*<\/\1>/gi, "").trim();
	let n = /^<(p|div)>([\S\s]*)<\/\1>$/i.exec(t);
	return n?.[2] !== void 0 && (t = n[2].trim()), kb(t.replaceAll(/<br\s*\/?>/gi, "").trim());
}
function kb(e) {
	return e.replaceAll("&nbsp;", " ").replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", "\"").replaceAll("&#39;", "'").trim();
}
function Ab(e) {
	return typeof e == "object" && !!e && "documentName" in e && (e.documentName === "JournalEntry" || e.documentName === "JournalEntryPage") && "name" in e && typeof e.name == "string" && "uuid" in e && typeof e.uuid == "string";
}
//#endregion
//#region src/module/apps/species-builder/random-talent-sources.ts
var jb = {
	key: "talents",
	label: "Talents - Character Creation"
};
function Mb() {
	let e = /* @__PURE__ */ new Map();
	e.set(jb.key, jb);
	for (let t of game.tables?.contents ?? []) {
		let n = t.getFlag("wfrp4e", "key");
		if (typeof n != "string" || !n.trim()) continue;
		let r = Nb(n, t);
		e.set(n, {
			key: n,
			label: r
		});
	}
	return [...e.values()].sort(Pb);
}
function Nb(e, t) {
	let n = game.wfrp4e?.tables?.findTable?.(e);
	return (G(n) && typeof n.name == "string" ? n.name : t.name).trim() || e;
}
function Pb(e, t) {
	return e.key === jb.key ? -1 : t.key === jb.key ? 1 : e.label.localeCompare(t.label);
}
//#endregion
//#region src/module/apps/species-builder/world-table/journals.ts
var Fb = "generatedSpeciesJournal", Ib = "WFRP Customizer Species Journals";
async function Lb(e) {
	let t = game.journal?.contents ?? [], n = Rb(t), r, i = [];
	for (let a of e.rows) {
		let e = zb(a.journalUuid, a.speciesKey, t) || n.get(a.speciesKey)?.uuid;
		if (!e) {
			r ??= await Vb();
			let t = await JournalEntry.create({
				flags: { [Y]: { [Fb]: { speciesKey: a.speciesKey } } },
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
function Rb(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = Bb(n);
		if (e) {
			if (t.has(e)) throw Error(`Multiple Species Builder Journals exist for "${e}". Remove the duplicate and retry.`);
			t.set(e, n);
		}
	}
	return t;
}
function zb(e, t, n) {
	let r = e?.trim() ?? "";
	if (!r) return "";
	let i = n.find((e) => e.uuid === r);
	if (!i) return r.startsWith("JournalEntry.") && r.split(".").length === 2 ? "" : r;
	let a = Bb(i);
	return a && a !== t ? "" : r;
}
function Bb(e) {
	let t = e.getFlag(Y, Fb);
	return G(t) ? q(t, ["speciesKey"]).trim() : "";
}
async function Vb() {
	let e = game.folders.contents.find((e) => e.type === "JournalEntry" && e.name === Ib);
	if (e) return e;
	let t = await Folder.create({
		name: Ib,
		type: "JournalEntry"
	});
	if (!t) throw Error("Foundry did not create the generated Species Journal folder.");
	return t;
}
//#endregion
//#region src/module/apps/species-builder/world-table/persistence.ts
var Hb = "species", Ub = "tableSettings";
async function Wb(e) {
	let t = await Lb(e), n = Ku(t, Y);
	return e.ownership === "managed" ? await Jb(t, n) : await qb(t, n);
}
async function Gb(e) {
	let t = game.settings.get(Zg, Ub);
	if (!G(t)) throw Error("WFRP table settings are unavailable; the Species table was not registered.");
	await game.settings.set(Zg, Ub, {
		...t,
		[Hb]: e
	});
}
function Kb(e) {
	return e.getFlag(Y, Iu) === !0;
}
async function qb(e, t) {
	if (e.ownership === "external") {
		let t = e.tableId ? game.tables?.get(e.tableId) : void 0;
		if (!t || Kb(t)) throw Error("The source Species table changed. Reload before saving a managed copy.");
	}
	if ((game.tables?.contents ?? []).some(Kb)) throw Error("A managed Species table already exists. Reload before saving.");
	let n = await RollTable.create(t);
	if (!n) throw Error("Foundry did not create the managed Species table.");
	return n;
}
async function Jb(e, t) {
	let n = e.tableId ? game.tables?.get(e.tableId) : void 0;
	if (!n || !Kb(n)) throw Error("The managed Species table changed. Reload before saving again.");
	let r = Array.isArray(t.results) ? t.results.filter(G) : [];
	return await n.update({
		displayRoll: t.displayRoll,
		[`flags.${Y}.${Iu}`]: !0,
		[`flags.${Zg}.key`]: Hb,
		formula: t.formula,
		name: t.name,
		replacement: t.replacement
	}), await Yb(n, e.rows, r), n;
}
async function Yb(e, t, n) {
	let r = e.toObject(), i = Array.isArray(r.results) ? r.results.filter(G) : [], a = new Set(i.map((e) => q(e, ["_id"]))), o = /* @__PURE__ */ new Set(), s = [], c = [];
	n.forEach((e, n) => {
		let r = Xb(t[n], i, a, o);
		r ? (o.add(r), s.push({
			...e,
			_id: r
		})) : c.push(e);
	});
	let l = [...a].filter((e) => e && !o.has(e));
	s.length > 0 && await e.updateEmbeddedDocuments("TableResult", s), c.length > 0 && await e.createEmbeddedDocuments("TableResult", c), l.length > 0 && await e.deleteEmbeddedDocuments("TableResult", l);
}
function Xb(e, t, n, r) {
	if (e?.resultId && n.has(e.resultId) && !r.has(e.resultId)) return e.resultId;
	let i = t.find((t) => q(t, [
		"flags",
		"wfrp4e",
		"species"
	]) === e?.speciesKey && !r.has(q(t, ["_id"])));
	return i ? q(i, ["_id"]) : "";
}
//#endregion
//#region src/module/apps/species-builder/world-table/index.ts
var Zb = "species", Qb = "tableSettings";
function $b() {
	let e = sy(), t = new Set(e.definitions.map((e) => e.key)), n = tx().filter((e) => !t.has(e.key)), r = Ru(n, e.definitions), i = game.tables?.contents ?? [], a = nx(), o = rx(i, i.filter(Kb), a);
	return {
		draft: o ? ix(o, r, a[0] === o.id) : sx(),
		runtimeOptions: n
	};
}
async function ex(e, t) {
	let n = await Wb(e);
	if (t) try {
		await Gb(n.id);
	} catch (e) {
		return {
			...$b(),
			registrationError: e instanceof Error ? e.message : "The Species table could not be registered."
		};
	}
	return $b();
}
function tx() {
	let e = game.wfrp4e?.config?.species;
	return G(e) ? Object.entries(e).flatMap(([e, t]) => {
		let n = typeof t == "string" ? t.trim() : "";
		return e.trim() && n ? [{
			key: e.trim(),
			label: n
		}] : [];
	}) : [];
}
function nx() {
	let e = game.settings.get(Zg, Qb), t = G(e) ? e[Zb] : void 0;
	return typeof t == "string" ? t.split(",").map((e) => e.trim()).filter(Boolean) : [];
}
function rx(e, t, n) {
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
	return e.find((e) => e.getFlag(Zg, "key") === Zb);
}
function ix(e, t, n) {
	let r = e.toObject(), i = (Array.isArray(r.results) ? r.results : []).flatMap((e) => ax(e, t));
	return i.sort((e, t) => ox(e.source) - ox(t.source)), {
		isRegistered: n,
		name: e.name,
		ownership: Kb(e) ? "managed" : "external",
		requiresLinkRepair: i.some((e) => e.requiresLinkRepair),
		rows: i.map(({ row: e }) => e),
		tableId: e.id
	};
}
function ax(e, t) {
	if (!G(e)) return [];
	let n = q(e, ["name"]), r = Uu(q(e, ["description"])), i = q(e, [
		"flags",
		Zg,
		"species"
	]), a = r?.label || n, o = Hu(i, a, t), s = q(e, ["_id"]), c = q(e, ["type"]);
	return [{
		requiresLinkRepair: !r || r.label !== n.trim() || c !== "text",
		row: {
			...r ? { journalUuid: r.uuid } : {},
			name: a,
			...s ? { resultId: s } : {},
			speciesKey: o,
			weight: Wu(e)
		},
		source: e
	}];
}
function ox(e) {
	let t = K(e, ["range"]), n = Array.isArray(t) ? Number(t[0]) : 0;
	return Number.isInteger(n) ? n : 0;
}
function sx() {
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
function cx(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function lx(e) {
	return e.documentName === "Item" || q(e, ["metadata", "type"]) === "Item" || q(e, ["metadata", "documentName"]) === "Item";
}
function ux(e) {
	return e.documentName === "Actor" || q(e, ["metadata", "type"]) === "Actor" || q(e, ["metadata", "documentName"]) === "Actor";
}
function dx(e) {
	return e.documentName === "RollTable" || q(e, ["metadata", "type"]) === "RollTable" || q(e, ["metadata", "documentName"]) === "RollTable";
}
function fx(e) {
	return Array.isArray(e) ? e.filter(mx) : G(e) && Array.isArray(e.contents) ? e.contents.filter(mx) : hx(e) ? [...e].flatMap((e) => {
		let t = Array.isArray(e) ? e[1] : e;
		return mx(t) ? [t] : [];
	}) : [];
}
function px() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
function mx(e) {
	return G(e);
}
function hx(e) {
	return G(e) && Symbol.iterator in e;
}
//#endregion
//#region src/module/apps/species-builder/validation/table-results.ts
function gx(e, t) {
	let n = vx(e);
	if (n.reason) return Ex(n.reason);
	let r = n.texts.filter((e) => !t.has(Cx(e)));
	return r.length > 0 ? Ex(`these result labels do not match Talent Items exactly: ${wx(r).join(", ")}`) : Tx();
}
function _x(e, t) {
	let n = vx(e);
	if (n.reason) return Ex(n.reason);
	let r = n.texts.filter((e) => !t.has(e));
	return r.length > 0 ? Ex(`these result labels do not match tier-1 Career groups exactly: ${wx(r).join(", ")}`) : Tx();
}
function vx(e) {
	if (!G(e)) return {
		reason: "the table could not be found",
		texts: []
	};
	if (Array.isArray(e.columns)) return {
		reason: "the table key resolves to multiple columns instead of one RollTable",
		texts: []
	};
	let t = Sx(e.results);
	if (t.length === 0) return {
		reason: "the table has no results",
		texts: []
	};
	let n = t.map(bx);
	return n.filter((e) => !e).length > 0 ? {
		reason: "one or more results have no usable WFRP result text",
		texts: n
	} : { texts: n };
}
function yx(e) {
	return /\{(.+?)\}/u.exec(e)?.[1] ?? e;
}
function bx(e) {
	if (!G(e)) return "";
	let t = e.type === "document" ? xx(e) : e.description;
	return typeof t == "string" ? yx(t) : "";
}
function xx(e) {
	let t = e.documentUuid, n = e.name;
	return typeof t == "string" && typeof n == "string" ? `@UUID[${t}]{${n}}` : "";
}
function Sx(e) {
	return Array.isArray(e) ? e : G(e) && Symbol.iterator in e ? [...e] : [];
}
function Cx(e) {
	return e.split("(")[0]?.trim() ?? "";
}
function wx(e) {
	return [...new Set(e.map((e) => e || "(blank result)"))];
}
function Tx() {
	return { readyForCharacterCreation: !0 };
}
function Ex(e) {
	return {
		readyForCharacterCreation: !1,
		reason: e
	};
}
//#endregion
//#region src/module/apps/species-builder/validation/career-table.ts
function Dx(e, t, n, r, i = /* @__PURE__ */ new Map()) {
	let a = Ox(e, t, typeof n == "string" ? n.trim() : "");
	for (let e of a) {
		let t = Ax(e);
		if (!t) continue;
		let n = jx(t, e);
		if (n) return kx(e, n, r);
	}
	for (let e of a) {
		let t = i.get(e);
		if (t) return {
			readyForCharacterCreation: !1,
			reason: `career table column ${e} is not active in this world; import “${t.name}” from “${t.packTitle}”`,
			requiresWorldTableImport: !0
		};
	}
	return kx(a.at(-1) ?? e, void 0, r);
}
function Ox(e, t, n) {
	let r = t ? [
		n,
		`${e}-${t}`,
		e
	] : [e];
	return e === "human" && r.push("human-reiklander"), [...new Set(r.filter(Boolean))];
}
function kx(e, t, n) {
	let r = _x(t, n);
	return r.readyForCharacterCreation ? r : {
		readyForCharacterCreation: !1,
		reason: `career table column ${e} is not ready: ${r.reason ?? "invalid table"}`
	};
}
function Ax(e) {
	return game.wfrp4e?.tables?.findTable?.("career", e);
}
function jx(e, t) {
	return !G(e) || !Array.isArray(e.columns) ? e : e.columns.find((e) => Mx(e) === t);
}
function Mx(e) {
	if (!G(e) || typeof e.getFlag != "function") return "";
	let t = e.getFlag.call(e, "wfrp4e", "column");
	return typeof t == "string" ? t : "";
}
//#endregion
//#region src/module/apps/species-builder/validation/runtime-grants.ts
function Nx(e, t, n, r) {
	let i = Fx(e.randomTalents, t.randomTalentSources, n);
	Ix(e.skills, "skills", t.skills, n, r), Lx(e.talents, i, t, n, r), Ix(e.traits, "traits", t.traits, n, r), zx(e.talentReplacement, t.talents, r);
}
function Px(e, t, n) {
	if (e) {
		if (!G(e)) {
			n.push("Career replacements are not an object");
			return;
		}
		for (let [r, i] of Object.entries(e)) {
			if (t.has(r) || n.push(`Career replacement source ${Gx(r)} does not match exactly`), !Array.isArray(i) || i.length === 0) {
				n.push(`Career replacements for ${Gx(r)} must be a non-empty array`);
				continue;
			}
			for (let e of i) (typeof e != "string" || !t.has(e.trim())) && n.push(`Career replacement ${Gx(e)} does not match exactly`);
		}
	}
}
function Fx(e, t, n) {
	let r = e || { talents: 0 };
	if (!G(r)) return n.push("random Talents configuration is not an object"), /* @__PURE__ */ new Set();
	let i = new Set(Object.keys(r));
	for (let [e, i] of Object.entries(r)) {
		Hx(i) || n.push(`random Talent count for ${Gx(e)} is not a non-negative whole number`);
		let r = t.get(e);
		r ? r.readyForCharacterCreation || n.push(`random Talent table ${Gx(e)} is not ready: ${r.reason ?? "invalid results"}`) : n.push(`random Talent table is missing for ${Gx(e)}`);
	}
	return i;
}
function Ix(e, t, n, r, i) {
	if (!Array.isArray(e)) {
		r.push(`${t} must be an array of names`);
		return;
	}
	let a = e.filter((e) => typeof e != "string" || !n.has(Ux(e)));
	a.length > 0 && i.push(`${t} do not match available Items exactly: ${Wx(a)}`);
}
function Lx(e, t, n, r, i) {
	if (!Array.isArray(e)) {
		r.push("talents must be an array of names or numeric random Talent counts");
		return;
	}
	for (let a of e) {
		if (Vx(a)) {
			Hx(a) || r.push(`numeric Talent grant ${Gx(a)} is not a non-negative whole number`), Rx("talents", t, n, r);
			continue;
		}
		if (typeof a != "string") {
			r.push(`Talent grant ${Gx(a)} is not a name or numeric count`);
			continue;
		}
		let e = a.includes(",") ? a.split(",") : [a];
		for (let o of e) {
			let e = o.trim(), s = a.includes(",") ? Bx(e) : void 0;
			s ? Rx(s.key, t, n, r) : n.talents.has(Ux(e)) || i.push(`Talent ${Gx(e)} does not match an available Item exactly`);
		}
	}
}
function Rx(e, t, n, r) {
	if (!t.has(e)) {
		r.push(`Talent grant uses random table ${Gx(e)} without configuring that key`);
		return;
	}
	let i = n.randomTalentSources.get(e);
	i ? i.readyForCharacterCreation || r.push(`Talent grant uses unready random table ${Gx(e)}`) : r.push(`Talent grant uses missing random table ${Gx(e)}`);
}
function zx(e, t, n) {
	if (e) {
		if (!G(e)) {
			n.push("Talent replacements are not an object");
			return;
		}
		for (let [r, i] of Object.entries(e)) t.has(Ux(r)) || n.push(`Talent replacement source ${Gx(r)} does not match exactly`), (typeof i != "string" || !t.has(Ux(i))) && n.push(`Talent replacement ${Gx(i)} does not match exactly`);
	}
}
function Bx(e) {
	let t = /random\[(\d)\](?:\[?([a-zA-Z-_]+)\])?/iu.exec(e);
	return t ? { key: t[2] ?? "talents" } : void 0;
}
function Vx(e) {
	return typeof e == "number" && Number.isFinite(e) || typeof e == "string" && e.trim() !== "" && Number.isFinite(Number(e));
}
function Hx(e) {
	return Vx(e) && Number.isInteger(Number(e)) && Number(e) >= 0;
}
function Ux(e) {
	return e.split("(")[0]?.trim() ?? "";
}
function Wx(e) {
	return [...new Set(e.map(Gx))].join(", ");
}
function Gx(e) {
	return `“${typeof e == "string" ? e.trim() || "(blank)" : String(e)}”`;
}
//#endregion
//#region src/module/apps/species-builder/validation/runtime-species.ts
var Kx = Object.values(W), qx = [
	["speciesMovement", "movement"],
	["speciesFate", "fate"],
	["speciesRes", "resilience"],
	["speciesExtra", "extra points"]
];
function Jx(e, t, n = []) {
	let r = G(e.species) ? e.species : {}, i = new Set(n.map((e) => e.trim()).filter(Boolean));
	return Object.entries(r).filter(([e]) => !i.has(e)).map(([n, r]) => {
		let i = typeof r == "string" && r.trim() ? r.trim() : n, a = Yx(e, n, r, t), o = {
			key: n,
			name: i,
			readyForCharacterCreation: a.errors.length === 0
		};
		return a.errors.length > 0 && (o.errorReasons = a.errors, o.reason = Xx(a.errors)), a.requiresWorldTableImport && (o.requiresWorldTableImport = !0), a.warnings.length > 0 && (o.warningReason = Xx(a.warnings), o.warningReasons = a.warnings), o;
	}).sort((e, t) => e.name.localeCompare(t.name));
}
function Yx(e, t, n, r) {
	let i = {
		errors: [],
		requiresWorldTableImport: !1,
		warnings: []
	};
	t.trim() || i.errors.push("species key is missing"), (typeof n != "string" || !n.trim()) && i.errors.push("display name is missing");
	let a = nS(e, t);
	Nx(a, r, i.errors, i.warnings);
	let o = sS(e, "speciesCharacteristics", t);
	return Qx(o, i.errors), $x(iS(e, t), i.errors), eS(e, t, i.warnings), Px(sS(e, "speciesCareerReplacements", t), r.careerGroups, i.warnings), i.requiresWorldTableImport ||= tS(r.validateCareerTable(t, void 0, void 0), i.errors), Zx(e, t, o, a, r, i), i;
}
function Xx(e) {
	let t = e[0] ?? "runtime configuration is incomplete", n = e.length - 1;
	return n > 0 ? `${t} (+${n} more)` : t;
}
function Zx(e, t, n, r, i, a) {
	let o = e.subspecies, s = G(o) ? o[t] : void 0;
	if (s) {
		if (!G(s)) {
			a.errors.push("subspecies configuration is not an object");
			return;
		}
		for (let [o, c] of Object.entries(s)) {
			let s = {
				errors: [],
				requiresWorldTableImport: !1,
				warnings: []
			};
			if (!G(c)) {
				a.errors.push(`subspecies ${o} is not an object`);
				continue;
			}
			(typeof c.name != "string" || !c.name.trim()) && s.warnings.push("display name is missing"), Qx(c.characteristics || n, s.errors), $x(aS(e, t, c), s.errors), Nx(rS(c, r), i, s.errors, s.warnings), Px(sS(e, "speciesCareerReplacements", `${t}-${o}`), i.careerGroups, s.warnings), s.requiresWorldTableImport ||= tS(i.validateCareerTable(t, o, c.careerTable), s.errors), a.errors.push(...s.errors.map((e) => `subspecies ${o}: ${e}`)), a.warnings.push(...s.warnings.map((e) => `subspecies ${o}: ${e}`)), a.requiresWorldTableImport ||= s.requiresWorldTableImport;
		}
	}
}
function Qx(e, t) {
	if (!G(e)) {
		t.push("characteristic formulas are missing");
		return;
	}
	let n = Kx.filter((t) => {
		let n = e[t];
		return typeof n != "string" || !Jf(n);
	});
	n.length > 0 && t.push(`characteristic formulas are invalid or missing for ${n.join(", ")}`);
}
function $x(e, t) {
	for (let [n, r] of Object.entries(e)) (!Number.isInteger(r) || Number(r) < 0) && t.push(`${n} is missing or not a non-negative whole number`);
}
function eS(e, t, n) {
	let r = sS(e, "speciesAge", t);
	(typeof r != "string" || !qf(r, !1)) && n.push("age formula is missing or invalid");
	let i = sS(e, "speciesHeight", t);
	(!G(i) || typeof i.die != "string" || !qf(i.die, !0) || !cS(i.feet) || !cS(i.inches)) && n.push("height needs a valid die formula and non-negative whole feet and inches");
}
function tS(e, t) {
	return e.readyForCharacterCreation || t.push(e.reason ?? "Career table is not ready"), !!e.requiresWorldTableImport;
}
function nS(e, t) {
	return {
		randomTalents: sS(e, "speciesRandomTalents", t),
		skills: sS(e, "speciesSkills", t),
		talentReplacement: sS(e, "speciesTalentReplacement", t) || {},
		talents: sS(e, "speciesTalents", t),
		traits: sS(e, "speciesTraits", t) || []
	};
}
function rS(e, t) {
	return {
		randomTalents: e.randomTalents || t.randomTalents,
		skills: e.skills || t.skills,
		talentReplacement: e.talentReplacement || t.talentReplacement,
		talents: e.talents || t.talents,
		traits: e.speciesTraits || t.traits
	};
}
function iS(e, t) {
	return Object.fromEntries(qx.map(([n, r]) => [r, sS(e, n, t)]));
}
function aS(e, t, n) {
	return Object.fromEntries(qx.map(([r, i]) => [i, n[oS(r)] ?? sS(e, r, t)]));
}
function oS(e) {
	return e === "speciesRes" ? "resilience" : e.replace("species", "").toLowerCase();
}
function sS(e, t, n) {
	let r = e[t];
	return G(r) ? r[n] : void 0;
}
function cS(e) {
	return typeof e == "number" && Number.isInteger(e) && e >= 0;
}
//#endregion
//#region src/module/apps/species-builder/validation/catalog.ts
var lS = [
	"skill",
	"talent",
	"trait"
], uS = [
	"name",
	"type",
	"system.careergroup.value",
	"system.level.value"
], dS = [
	"name",
	"flags.wfrp4e.key",
	"flags.wfrp4e.column"
];
async function fS(e = []) {
	let t = G(game.wfrp4e?.config) ? game.wfrp4e.config : {}, n = {
		careerGroups: /* @__PURE__ */ new Map(),
		itemNames: {
			skill: /* @__PURE__ */ new Map(),
			talent: /* @__PURE__ */ new Map(),
			trait: /* @__PURE__ */ new Map()
		}
	};
	for (let e of game.items?.contents ?? []) mS(n, e);
	for (let e of hS()) {
		if (!e.getIndex) continue;
		let t = await e.getIndex({ fields: uS });
		for (let e of fx(t)) mS(n, e);
	}
	let r = await pS(), i = gS(t, n.itemNames.talent), a = new Set(n.careerGroups.keys());
	return {
		careerGroupNames: wS(n.careerGroups),
		itemBaseNames: {
			skill: wS(n.itemNames.skill),
			talent: wS(n.itemNames.talent),
			trait: wS(n.itemNames.trait)
		},
		randomTalentSources: i,
		runtimeSpecies: Jx(t, {
			careerGroups: a,
			randomTalentSources: new Map(i.map((e) => [e.key, e])),
			skills: new Set(n.itemNames.skill.keys()),
			talents: new Set(n.itemNames.talent.keys()),
			traits: new Set(n.itemNames.trait.keys()),
			validateCareerTable: (e, t, n) => Dx(e, t, n, a, r)
		}, e)
	};
}
async function pS() {
	let e = /* @__PURE__ */ new Map();
	for (let t of (game.packs ?? []).filter(dx)) {
		if (!t.getIndex) continue;
		let n = await t.getIndex({ fields: dS });
		for (let r of fx(n)) {
			let n = K(r, [
				"flags",
				"wfrp4e",
				"key"
			]), i = K(r, [
				"flags",
				"wfrp4e",
				"column"
			]);
			if (n !== "career" || typeof i != "string" || !i.trim() || typeof r.name != "string") continue;
			let a = t.title?.trim() || t.collection?.trim() || "its RollTable compendium";
			e.has(i.trim()) || e.set(i.trim(), {
				name: r.name.trim(),
				packTitle: a
			});
		}
	}
	return e;
}
function mS(e, t) {
	if (!G(t) || typeof t.type != "string" || typeof t.name != "string") return;
	if (bS(t.type)) {
		SS(e.itemNames[t.type], xS(t.name));
		return;
	}
	let n = Number(K(t, [
		"system",
		"level",
		"value"
	]));
	if (t.type !== "career" || n !== 1) return;
	let r = K(t, [
		"system",
		"careergroup",
		"value"
	]);
	typeof r == "string" && SS(e.careerGroups, r);
}
function hS() {
	let e = game.wfrp4e?.tags?.getPacksWithTag?.([...lS, "career"]);
	return e ? [...new Set(e)].filter(lx) : (game.packs ?? []).filter(lx);
}
function gS(e, t) {
	let n = [];
	for (let r of _S(e)) {
		let e = game.wfrp4e?.tables?.findTable?.(r);
		if (!e) continue;
		let i = gx(e, new Set(t.keys()));
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
function _S(e) {
	let t = new Set(["talents"]);
	for (let e of game.tables?.contents ?? []) CS(t, e.getFlag("wfrp4e", "key"));
	let n = game.settings.get("wfrp4e", "tableSettings");
	G(n) && Object.keys(n).forEach((e) => t.add(e)), vS(e.speciesRandomTalents, t);
	let r = e.subspecies;
	if (G(r)) {
		for (let e of Object.values(r)) if (G(e)) for (let n of Object.values(e)) G(n) && yS(n.randomTalents, t);
	}
	return [...t];
}
function vS(e, t) {
	G(e) && Object.values(e).forEach((e) => yS(e, t));
}
function yS(e, t) {
	G(e) && Object.keys(e).forEach((e) => t.add(e));
}
function bS(e) {
	return lS.some((t) => t === e);
}
function xS(e) {
	return e.split("(", 1)[0]?.trim() ?? "";
}
function SS(e, t) {
	let n = t.trim();
	n && !e.has(n) && e.set(n, n);
}
function CS(e, t) {
	typeof t == "string" && t.trim() && e.add(t.trim());
}
function wS(e) {
	return [...e.values()].sort((e, t) => e.localeCompare(t));
}
//#endregion
//#region src/module/apps/species-builder/wound-formula-traits.ts
var TS = "WFRP Customizer Generated Species Traits";
async function ES(t = sy()) {
	let n = Zc(t, await ob()), r = await DS();
	await OS(r);
	for (let e of n) {
		let t = el({
			flagScope: Y,
			spec: e
		});
		await Item.create({
			...t,
			folder: r.id
		});
	}
	e(`${Y} | Regenerated ${n.length} wound formula Trait item(s).`);
}
async function DS() {
	let e = game.folders.contents.find((e) => e.type === "Item" && e.name === TS);
	if (e) return e;
	let t = await Folder.create({
		name: TS,
		type: "Item"
	});
	if (!t) throw Error("Foundry did not create the generated Species Trait folder.");
	return t;
}
async function OS(e) {
	let t = (game.items?.contents ?? []).filter((t) => t.folder?.id === e.id || kS(t));
	for (let e of t) await e.delete();
}
function kS(e) {
	return G(K(e.toObject(), [
		"flags",
		Y,
		Xc
	]));
}
//#endregion
//#region src/module/apps/species-builder/foundry-bridge.ts
async function AS(e, t) {
	let n = await cy(e);
	if (!t) return { settings: n };
	let r = (await Promise.allSettled([lb(n), ES(n)])).flatMap((e) => e.status === "rejected" ? [MS(e.reason)] : []);
	return r.length > 0 ? {
		settings: n,
		syncError: r.join(" ")
	} : { settings: n };
}
var jS = {
	loadSettings: async () => sy(),
	loadRandomTalentSources: async () => Mb(),
	loadRuntimeSpecies: ob,
	loadValidationCatalog: fS,
	loadSpeciesTable: async () => $b(),
	openItemSheet: wb,
	resolveItemDrop: Sb,
	resolveJournalDrop: Cb,
	saveSettings: AS,
	saveSpeciesTable: ex
};
function MS(e) {
	return e instanceof Error ? e.message : "Generated document synchronization failed.";
}
//#endregion
//#region src/module/apps/species-builder/reload-confirmation.ts
function NS() {
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
//#region src/module/apps/species-builder-suite/SpeciesSuiteApplication.ts
var PS = class extends Vv {
	#e = !1;
	getApplicationProps() {
		return {};
	}
	getVueProps() {
		return {
			...this.getApplicationProps(),
			bridge: jS,
			onSettingsSaved: () => {
				this.#e = !0;
			}
		};
	}
	async _preClose(e) {
		let t = this.#e;
		this.#e = !1, t && await NS() && window.location.reload(), await super._preClose(e);
	}
}, FS = class extends PS {
	openDirectory;
	openSpecies;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${Y}-species-configurator`,
		classes: [Y, "wfrp4e-customizer-species-configurator"],
		position: {
			height: 680,
			width: 720
		},
		window: {
			icon: "fa-solid fa-sliders",
			resizable: !0,
			title: "Species Builder Configurator"
		}
	};
	constructor(e, t) {
		super(), this.openDirectory = e, this.openSpecies = t;
	}
	getVueComponent() {
		return Ov;
	}
	getApplicationProps() {
		return {
			onOpenDirectory: this.openDirectory,
			onOpenSpecies: this.openSpecies
		};
	}
}, IS = ["onKeydown"], LS = {
	key: 0,
	class: "dui-modal-box"
}, RS = { id: "species-builder-delete-message" }, zS = { class: "dui-modal-action" }, BS = /* @__PURE__ */ M({
	__name: "DeleteConfirmationSubView",
	props: { message: {} },
	emits: ["close", "confirm"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ k(), a = Sh();
		function o() {
			i.value?.close();
		}
		function s() {
			n.message && r("close"), a.restore();
		}
		return Xn(() => n.message, async (e) => {
			e ? (a.capture(), await jn(), n.message && !i.value?.open && i.value?.showModal()) : i.value?.open && i.value.close();
		}, {
			flush: "post",
			immediate: !0
		}), (t, n) => (F(), I("dialog", {
			ref_key: "dialog",
			ref: i,
			class: "dui-modal",
			"aria-describedby": "species-builder-delete-message",
			"aria-labelledby": "species-builder-delete-title",
			onClose: s,
			onKeydown: $o(Zo(o, ["stop", "prevent"]), ["esc"]),
			onKeyup: n[1] ||= $o(Zo(() => {}, ["stop"]), ["esc"])
		}, [e.message ? (F(), I("div", LS, [
			n[2] ||= R("h2", { id: "species-builder-delete-title" }, "Confirm Deletion", -1),
			R("p", RS, O(e.message), 1),
			R("div", zS, [R("button", {
				class: "dui-btn dui-btn-error",
				type: "button",
				onClick: n[0] ||= (e) => r("confirm")
			}, "Delete"), R("button", {
				autofocus: "",
				class: "dui-btn",
				type: "button",
				onClick: o
			}, "Cancel")])
		])) : V("", !0), n[3] ||= R("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [R("button", {
			"aria-label": "Cancel deletion",
			type: "submit"
		}, "Close")], -1)], 40, IS));
	}
});
//#endregion
//#region src/view/apps/species-builder/components/deletion.ts
function VS(e) {
	let t = /* @__PURE__ */ k(null);
	function n() {
		let n = e.selectedDefinition.value;
		n && (t.value = {
			kind: "species",
			message: `Delete species "${HS(n)}"?`
		});
	}
	function r(n) {
		let r = e.selectedDefinition.value?.subspecies?.[n];
		r && (t.value = {
			index: n,
			kind: "subspecies",
			message: `Delete subspecies "${HS(r)}"?`
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
function HS(e) {
	return e.name.trim() || e.key.trim() || "Untitled Species";
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/editor-page-events.ts
function US(e, t) {
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
//#region src/view/components/DocumentDrop/DocumentList.vue?vue&type=script&setup=true&lang.ts
var WS = { class: "dui-list" }, GS = [
	"aria-label",
	"disabled",
	"title",
	"onClick"
], KS = ["src"], qS = {
	key: 1,
	"aria-hidden": "true",
	class: "fa-solid fa-scroll"
}, JS = {
	key: 1,
	class: "dui-list-row"
}, YS = /* @__PURE__ */ M({
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
		return (t, n) => (F(), I("ul", WS, [e.documents.length > 0 ? (F(!0), I(P, { key: 0 }, N(e.documents, (t) => (F(), I("li", {
			key: t.uuid,
			class: "dui-list-row"
		}, [R("button", {
			"aria-label": e.isClickable ? `Use ${t.name}` : void 0,
			class: "dui-btn dui-btn-ghost",
			disabled: !e.isClickable,
			title: e.isClickable ? t.name : void 0,
			type: "button",
			onClick: Zo((e) => r(t), ["stop"])
		}, [t.img ? (F(), I("img", {
			key: 0,
			alt: "",
			"aria-hidden": "true",
			src: t.img
		}, null, 8, KS)) : (F(), I("i", qS)), R("span", null, O(t.name), 1)], 8, GS)]))), 128)) : (F(), I("li", JS, [n[0] ||= R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-arrow-down"
		}, null, -1), R("span", null, O(e.emptyLabel), 1)]))]));
	}
}), XS = { class: "dui-card-body dui-fieldset" }, ZS = ["for"], QS = ["id", "value"], $S = ["for"], eC = ["id", "value"], tC = { class: "dui-card-actions" }, nC = /* @__PURE__ */ M({
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
		let n = t, r = gr(), i = gr();
		function a(e) {
			let t = e.target instanceof HTMLSelectElement ? e.target.value : "auto";
			(t === "Actor" || t === "auto" || t === "Item" || t === "JournalEntry" || t === "JournalEntryPage") && n("updateDocumentType", t);
		}
		function o(e) {
			n("updateDocumentValue", e.target instanceof HTMLInputElement ? e.target.value : "");
		}
		return (t, s) => (F(), I("form", {
			class: "dui-card dui-card-border dui-card-sm",
			onClick: s[2] ||= Zo(() => {}, ["stop"]),
			onSubmit: s[3] ||= Zo((e) => n("submit"), ["prevent"])
		}, [R("fieldset", XS, [
			s[6] ||= R("legend", { class: "dui-fieldset-legend" }, "Manual document entry", -1),
			R("label", {
				class: "dui-label",
				for: A(r)
			}, "Document type", 8, ZS),
			R("select", {
				id: A(r),
				class: "dui-select",
				value: e.documentType,
				onChange: a
			}, [...s[4] ||= [Ea("<option value=\"auto\">Auto</option><option value=\"Item\">Item</option><option value=\"Actor\">Actor</option><option value=\"JournalEntry\">Journal Entry</option><option value=\"JournalEntryPage\">Journal Page</option>", 5)]], 40, QS),
			R("label", {
				class: "dui-label",
				for: A(i)
			}, "UUID or drop JSON", 8, $S),
			R("input", {
				id: A(i),
				class: "dui-input",
				value: e.documentValue,
				placeholder: "Compendium.package.pack.id",
				type: "text",
				onInput: o
			}, null, 40, eC),
			R("div", tC, [
				s[5] ||= R("button", {
					class: "dui-btn dui-btn-primary",
					type: "submit"
				}, "Use", -1),
				R("button", {
					class: "dui-btn",
					type: "button",
					onClick: s[0] ||= (e) => n("startPick")
				}, O(e.isPickingDocument ? "Waiting..." : "Pick Next Click"), 1),
				R("button", {
					class: "dui-btn dui-btn-ghost",
					type: "button",
					onClick: s[1] ||= (e) => n("close")
				}, "Cancel")
			])
		])], 32));
	}
}), rC = ["aria-label", "aria-disabled"], iC = { key: 0 }, aC = {
	key: 1,
	class: "dui-alert dui-alert-info",
	role: "status"
}, oC = { key: 2 }, sC = {
	key: 4,
	class: "dui-card-actions"
}, cC = ["disabled"], lC = /* @__PURE__ */ M({
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
		let n = e, r = Kn(kv);
		if (!r) throw Error("DocumentDrop requires a document drop bridge from its application host.");
		let i = Qr(), a = t, o = /* @__PURE__ */ k(!1), s = /* @__PURE__ */ k(!1), c = /* @__PURE__ */ k(!1), l = /* @__PURE__ */ k("auto"), u = /* @__PURE__ */ k(""), d, f = H(() => !!i.prompt), p = H(() => !!i.default), m = H(() => n.showPrompt && (f.value || n.title.length > 0)), h = H(() => n.showDocuments ? n.documents : []), g = H(() => n.manualEntryTrigger === "button"), _ = H(() => n.variant === "bare" ? [] : [
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
		return Pr(() => {
			ne();
		}), Xn(() => n.disabled, (e) => {
			e && (o.value = !1, S());
		}), (t, n) => (F(), I("div", Aa(t.$attrs, {
			class: _.value,
			"aria-label": e.title,
			"aria-disabled": e.disabled,
			role: "group",
			onDragenter: Zo(y, ["prevent"]),
			onDragover: Zo(y, ["prevent"]),
			onDragleave: v,
			onDrop: b
		}), [R("div", { class: D(e.variant === "bare" ? void 0 : "dui-card-body") }, [
			m.value ? (F(), I("div", {
				key: 0,
				class: D(["dui-alert dui-alert-info", { "dui-alert-outline": !o.value }])
			}, [
				n[3] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-arrow-down"
				}, null, -1),
				R("div", null, [Gr(t.$slots, "prompt", {}, () => [R("strong", null, O(e.title), 1), e.description ? (F(), I("p", iC, O(e.description), 1)) : V("", !0)])]),
				R("span", { class: D(["dui-badge", { "dui-badge-info": o.value }]) }, O(o.value ? "Release to add" : "Drop zone"), 3)
			], 2)) : o.value ? (F(), I("div", aC, [n[4] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-arrow-down"
			}, null, -1), R("span", null, "Release to add " + O(e.title.toLowerCase()) + ".", 1)])) : V("", !0),
			p.value ? (F(), I("div", oC, [Gr(t.$slots, "default")])) : V("", !0),
			e.showDocuments ? (F(), L(YS, {
				key: 3,
				documents: h.value,
				"empty-label": e.emptyDocumentLabel,
				"is-clickable": e.documentsClickable,
				onDocumentClicked: n[0] ||= (e) => a("documentClicked", e)
			}, null, 8, [
				"documents",
				"empty-label",
				"is-clickable"
			])) : V("", !0),
			g.value ? (F(), I("div", sC, [R("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: Zo(C, ["stop"])
			}, O(s.value ? "Close Manual Entry" : "Manual Entry"), 9, cC)])) : V("", !0),
			s.value && !e.disabled ? (F(), L(nC, {
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
			])) : V("", !0)
		], 2)], 16, rC));
	}
}), uC = [
	W.WeaponSkill,
	W.BallisticSkill,
	W.Strength,
	W.Toughness,
	W.Initiative,
	W.Agility,
	W.Dexterity,
	W.Intelligence,
	W.Willpower,
	W.Fellowship
], dC = [
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
], fC = [
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
], pC = {
	skills: "Skills granted during character creation. Drop Skill items to link their sheets, or add names manually.",
	talents: "Talents granted during character creation. Multiple choices in one grant become WFRP's comma-separated either/or entry.",
	traits: "Traits granted by this species or subspecies. Drop Trait items to link their sheets, or add names manually."
};
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/validation-presentation.ts
function mC(e) {
	return typeof e == "string" ? [e] : e;
}
function hC(e, t, n, r) {
	return e.filter((e) => mC(t).includes(e.field ?? "") && e.rowIndex === n && e.choiceIndex === r);
}
function gC(e, t) {
	return e.filter((e) => mC(t).includes(e.field ?? ""));
}
function _C(e, t) {
	return e.filter((e) => e.rowIndex === t);
}
function vC(e, t, n) {
	return e.filter((e) => mC(t).includes(e.field ?? "") && e.rowIndex === n);
}
function yC(e, t, n) {
	return e.filter((e) => e.rowIndex === t && e.choiceIndex === n);
}
function bC(e) {
	return e.filter((e) => e.rowIndex === void 0 && e.field === void 0);
}
function xC(e) {
	return e.filter((e) => e.rowIndex === void 0);
}
function SC(e) {
	return [...new Set(e.map((e) => e.message))];
}
function CC(e) {
	return e.some((e) => e.severity !== "warning") ? "error" : e.length > 0 ? "warning" : void 0;
}
function wC(e) {
	return CC(e) === "error";
}
function $(e, t, n) {
	let r = CC(e);
	return r === "error" ? t : r === "warning" ? n : void 0;
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/components/LinkedItemDropValue.vue?vue&type=script&setup=true&lang.ts
var TC = [
	"aria-invalid",
	"disabled",
	"title",
	"value"
], EC = {
	key: 3,
	class: "app:grid app:gap-1",
	role: "alert"
}, DC = /* @__PURE__ */ M({
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
			return SC(n.issues);
		}
		return (t, n) => (F(), L(lC, {
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
			default: j(() => [!e.value.item?.uuid && e.isEditable ? (F(), I("input", {
				key: 0,
				"aria-invalid": A(wC)(e.issues) || void 0,
				class: D(["dui-input", A($)(e.issues, "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				title: e.inputTitle,
				value: e.value.name,
				type: "text",
				onInput: n[0] ||= (e) => r("updateName", i(e))
			}, null, 42, TC)) : e.value.name ? (F(), I("div", {
				key: 1,
				class: D(["dui-alert", A($)(e.issues, "dui-alert-error", "dui-alert-warning") ?? "dui-alert-info"])
			}, [R("strong", null, O(e.value.name), 1), n[3] ||= R("span", null, "Stored by name. Drop the matching Item to link its sheet.", -1)], 2)) : (F(), I("div", {
				key: 2,
				class: D(["dui-alert", A($)(e.issues, "dui-alert-error", "dui-alert-warning")])
			}, [...n[4] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-arrow-down"
			}, null, -1), R("span", null, "No item selected.", -1)]], 2)), a().length ? (F(), I("div", EC, [(F(!0), I(P, null, N(a(), (t) => (F(), I("p", {
				key: t,
				class: D(["app:m-0 app:text-xs", A($)(e.issues, "app:text-error", "app:text-warning")])
			}, O(t), 3))), 128))])) : V("", !0)]),
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
}), OC = ["disabled", "title"], kC = /* @__PURE__ */ M({
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
		return (t, r) => (F(), I("li", { class: D(["dui-list-row", A($)(e.issues, "app:border app:border-error", "app:border app:border-warning")]) }, [z(DC, {
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
		]), R("button", {
			disabled: e.isDisabled,
			title: e.removeTitle,
			class: "dui-btn dui-btn-error dui-btn-sm",
			type: "button",
			onClick: r[3] ||= (e) => n("remove")
		}, [...r[4] ||= [R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-trash"
		}, null, -1), B(" Remove ", -1)]], 8, OC)], 2));
	}
}), AC = { class: "app:grid app:gap-3" }, jC = { class: "dui-card-body" }, MC = { class: "app:flex app:items-start app:justify-between app:gap-4" }, NC = { class: "dui-card-title" }, PC = { class: "app:m-0" }, FC = { class: "dui-card-actions app:items-center" }, IC = { class: "dui-badge" }, LC = [
	"disabled",
	"title",
	"onClick"
], RC = {
	key: 1,
	class: "dui-join"
}, zC = ["disabled"], BC = ["disabled"], VC = {
	key: 1,
	class: "dui-list"
}, HC = {
	key: 2,
	class: "dui-list"
}, UC = { class: "dui-badge dui-badge-ghost" }, WC = { class: "dui-list-col-grow" }, GC = { key: 0 }, KC = { class: "dui-list" }, qC = { class: "dui-join" }, JC = ["disabled", "onClick"], YC = ["disabled", "onClick"], XC = {
	key: 3,
	class: "dui-alert",
	role: "status"
}, ZC = /* @__PURE__ */ M({
	__name: "ArrayFields",
	props: {
		fields: {},
		isDisabled: { type: Boolean },
		issues: {},
		values: {}
	},
	setup(e) {
		let t = e, n = wm(), r = H(() => fC.filter((e) => !t.fields || t.fields.includes(e.field)));
		function i(e) {
			return bd(t.values[e], a(e));
		}
		function a(e) {
			return e === "skills" ? t.values.linkedSkills : t.values.linkedTraits;
		}
		function o() {
			return xd(t.values.talents, t.values.linkedTalents);
		}
		function s(e) {
			return e === "talents" ? o().length : i(e).length;
		}
		function c(e) {
			return hC(t.issues, e);
		}
		function l(e) {
			return SC(c(e));
		}
		function u(e, n) {
			return vC(t.issues, e, n);
		}
		function d(e, n) {
			return hC(t.issues, "talents", e, n);
		}
		return (t, a) => (F(), I("div", AC, [(F(!0), I(P, null, N(r.value, (t) => (F(), I("section", {
			key: t.field,
			class: "dui-card dui-card-border dui-card-sm"
		}, [R("div", jC, [
			R("header", MC, [R("div", null, [R("h3", NC, O(t.label), 1), R("p", PC, O(A(pC)[t.field]), 1)]), R("div", FC, [R("span", IC, O(s(t.field)), 1), t.field === "talents" ? (F(), I("div", RC, [R("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				disabled: e.isDisabled,
				title: "Add one guaranteed Talent",
				type: "button",
				onClick: a[0] ||= (e) => A(n).addTalentGrant("single")
			}, [...a[5] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), B(" Talent ", -1)]], 8, zC), R("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				disabled: e.isDisabled,
				title: "Add a Talent choice set. WFRP stores this as one comma-separated Talent entry.",
				type: "button",
				onClick: a[1] ||= (e) => A(n).addTalentGrant("choice")
			}, [...a[6] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-list-check"
			}, null, -1), B(" Choice Set ", -1)]], 8, BC)])) : (F(), I("button", {
				key: 0,
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: `Add a ${t.label.slice(0, -1)} row`,
				type: "button",
				onClick: (e) => A(n).addLinkedItem(A(yd)(t.field))
			}, [...a[4] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), B(" Add ", -1)]], 8, LC))])]),
			z(lC, {
				description: `Drop a WFRP ${t.label.slice(0, -1)} item to add it to this list.`,
				disabled: e.isDisabled,
				title: `Drop ${t.label}`,
				variant: "compact",
				onDropData: (e) => A(n).appendArrayFieldDrop(t.field, e)
			}, null, 8, [
				"description",
				"disabled",
				"title",
				"onDropData"
			]),
			l(t.field).length ? (F(), I("div", {
				key: 0,
				class: D(["dui-alert", A($)(c(t.field), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [a[7] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), R("div", null, [(F(!0), I(P, null, N(l(t.field), (e) => (F(), I("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, O(e), 1))), 128))])], 2)) : V("", !0),
			t.field !== "talents" && i(t.field).length > 0 ? (F(), I("ul", VC, [(F(!0), I(P, null, N(i(t.field), (r, i) => (F(), L(kC, {
				key: `${t.field}-${i}`,
				"drop-description": `Drop a WFRP ${t.label.slice(0, -1)} item to link or replace this row.`,
				"drop-title": `Link ${t.label.slice(0, -1)}`,
				"input-title": `${t.label.slice(0, -1)} name used by WFRP item lookup`,
				"is-disabled": e.isDisabled,
				issues: u(t.field, i),
				"remove-title": `Remove ${r.name}`,
				value: r,
				onDropData: (e) => A(n).setLinkedItemDrop(A(yd)(t.field), i, e),
				onOpenItem: a[2] ||= (e) => A(n).openItemSheet(e),
				onRemove: (e) => A(n).removeLinkedItem(A(yd)(t.field), i),
				onUpdateName: (e) => A(n).renameLinkedItem(A(yd)(t.field), i, e)
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
			]))), 128))])) : t.field === "talents" && o().length > 0 ? (F(), I("ul", HC, [(F(!0), I(P, null, N(o(), (t, r) => (F(), I("li", {
				key: `talent-${r}`,
				class: D(["dui-list-row", A($)(u("talents", r), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				R("span", UC, "Grant " + O(r + 1), 1),
				R("div", WC, [
					R("strong", null, O(t.choices.length > 1 ? "Talent Choice" : "Guaranteed Talent"), 1),
					t.choices.length > 1 ? (F(), I("p", GC, "Choose one of these alternatives.")) : V("", !0),
					R("ul", KC, [(F(!0), I(P, null, N(t.choices, (i, o) => (F(), L(kC, {
						key: `${r}-${o}`,
						"drop-description": "Drop a WFRP Talent item to link or replace this option.",
						"drop-title": "Link Talent",
						"input-title": t.choices.length > 1 ? "One Talent option offered for this choice set" : "Guaranteed Talent name",
						"is-disabled": e.isDisabled,
						issues: d(r, o),
						"remove-title": `Remove ${i.name}`,
						value: i,
						onDropData: (e) => A(n).setTalentChoiceDrop(r, o, e),
						onOpenItem: a[3] ||= (e) => A(n).openItemSheet(e),
						onRemove: (e) => A(n).removeTalentChoice(r, o),
						onUpdateName: (e) => A(n).renameTalentChoice(r, o, e)
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
				R("div", qC, [R("button", {
					class: "dui-btn dui-btn-sm dui-join-item",
					disabled: e.isDisabled,
					title: "Add another alternative to this Talent choice",
					type: "button",
					onClick: (e) => A(n).addTalentChoice(r)
				}, [...a[8] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-plus"
				}, null, -1), B(" Choice ", -1)]], 8, JC), R("button", {
					disabled: e.isDisabled,
					title: "Remove this Talent grant",
					class: "dui-btn dui-btn-error dui-btn-sm dui-join-item",
					type: "button",
					onClick: (e) => A(n).removeTalentGrant(r)
				}, [...a[9] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), B(" Remove ", -1)]], 8, YC)])
			], 2))), 128))])) : (F(), I("div", XC, [a[10] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No " + O(t.label.toLowerCase()) + " yet.", 1)]))
		])]))), 128))]));
	}
}), QC = { class: "dui-table dui-table-sm" }, $C = { scope: "row" }, ew = ["for"], tw = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], nw = ["id"], rw = /* @__PURE__ */ M({
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
			return hC(n.issues, `characteristics.${e}`);
		}
		function o(e) {
			return SC(a(e));
		}
		return (t, n) => (F(), I("table", QC, [n[0] ||= R("thead", null, [R("tr", null, [R("th", { scope: "col" }, "Characteristic"), R("th", { scope: "col" }, "Starting formula")])], -1), R("tbody", null, [(F(!0), I(P, null, N(A(uC), (t) => (F(), I("tr", { key: t }, [R("th", $C, [R("label", { for: `species-characteristic-${t}` }, O(A(cc)[t]), 9, ew)]), R("td", null, [R("input", {
			id: `species-characteristic-${t}`,
			"aria-describedby": a(t).length ? `species-characteristic-${t}-errors` : void 0,
			"aria-invalid": A(wC)(a(t)) || void 0,
			class: D(["dui-input dui-input-sm", A($)(a(t), "dui-input-error", "dui-input-warning")]),
			disabled: e.isDisabled,
			placeholder: "2d10+20",
			value: e.characteristics?.[t] ?? "",
			type: "text",
			onInput: (e) => r("update", t, i(e))
		}, null, 42, tw), o(t).length ? (F(), I("div", {
			key: 0,
			id: `species-characteristic-${t}-errors`
		}, [(F(!0), I(P, null, N(o(t), (e) => (F(), I("p", {
			key: e,
			class: D(["app:m-0 app:text-xs", A($)(a(t), "app:text-error", "app:text-warning")])
		}, O(e), 3))), 128))], 8, nw)) : V("", !0)])]))), 128))])]));
	}
}), iw = { class: "dui-table dui-table-sm" }, aw = { scope: "row" }, ow = ["for"], sw = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], cw = ["id"], lw = /* @__PURE__ */ M({
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
			return hC(n.issues, e);
		}
		function o(e) {
			return SC(a(e));
		}
		return (t, n) => (F(), I("table", iw, [n[0] ||= R("thead", null, [R("tr", null, [R("th", { scope: "col" }, "Stat"), R("th", { scope: "col" }, "Value")])], -1), R("tbody", null, [(F(!0), I(P, null, N(A(dC).filter(({ field: t }) => e.fields.includes(t)), (t) => (F(), I("tr", { key: t.field }, [R("th", aw, [R("label", { for: `species-stat-${t.field}` }, O(t.label), 9, ow)]), R("td", null, [R("input", {
			id: `species-stat-${t.field}`,
			"aria-describedby": a(t.field).length ? `species-stat-${t.field}-errors` : void 0,
			"aria-invalid": A(wC)(a(t.field)) || void 0,
			class: D(["dui-input dui-input-sm", A($)(a(t.field), "dui-input-error", "dui-input-warning")]),
			disabled: e.isDisabled,
			value: e.values[t.field] ?? "",
			type: "number",
			onInput: (e) => r("update", t.field, i(e))
		}, null, 42, sw), o(t.field).length ? (F(), I("div", {
			key: 0,
			id: `species-stat-${t.field}-errors`
		}, [(F(!0), I(P, null, N(o(t.field), (e) => (F(), I("p", {
			key: e,
			class: D(["app:m-0 app:text-xs", A($)(a(t.field), "app:text-error", "app:text-warning")])
		}, O(e), 3))), 128))], 8, cw)) : V("", !0)])]))), 128))])]));
	}
}), uw = { class: "app:grid app:gap-3" }, dw = { class: "dui-card dui-card-border dui-card-sm" }, fw = { class: "dui-card-body" }, pw = { class: "dui-fieldset" }, mw = { class: "dui-card dui-card-border dui-card-sm" }, hw = { class: "dui-card-body" }, gw = { class: "dui-fieldset" }, _w = /* @__PURE__ */ M({
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
		return (t, i) => (F(), I("section", uw, [R("section", dw, [R("div", fw, [R("fieldset", pw, [
			i[2] ||= R("legend", { class: "dui-fieldset-legend" }, "Characteristic Roll Formulas", -1),
			i[3] ||= R("p", { class: "dui-fieldset-label" }, " Starting formulas used by WFRP character creation, usually values such as 2d10+20. ", -1),
			z(rw, {
				characteristics: e.definition.characteristics,
				"is-disabled": e.isDisabled,
				issues: e.issues,
				onUpdate: i[0] ||= (e, t) => r("updateCharacteristic", e, t)
			}, null, 8, [
				"characteristics",
				"is-disabled",
				"issues"
			])
		])])]), R("section", mw, [R("div", hw, [R("fieldset", gw, [
			i[4] ||= R("legend", { class: "dui-fieldset-legend" }, "Movement, Fate And Resilience", -1),
			i[5] ||= R("p", { class: "dui-fieldset-label" }, " Set base Movement plus starting Fate, Resilience, and extra points distributed between them. ", -1),
			z(lw, {
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
});
//#endregion
//#region src/view/apps/species-builder/tabs/species/species-key-suggestions.ts
function vw(e) {
	return vl(e.name) || "new-species";
}
function yw(e) {
	return vl(e.name) || "new-subspecies";
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/details/AgeHeightFields.vue?vue&type=script&setup=true&lang.ts
var bw = { class: "app:flex app:flex-wrap app:gap-3" }, xw = { class: "dui-fieldset app:min-w-56 app:flex-1" }, Sw = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Cw = {
	key: 0,
	id: "species-age-errors"
}, ww = { class: "dui-fieldset app:min-w-56 app:flex-1" }, Tw = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Ew = {
	key: 0,
	id: "species-height-die-errors"
}, Dw = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Ow = {
	key: 1,
	id: "species-height-feet-errors"
}, kw = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Aw = {
	key: 2,
	id: "species-height-inches-errors"
}, jw = /* @__PURE__ */ M({
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
			return hC(n.issues, e);
		}
		function o(e) {
			return SC(a(e));
		}
		return (t, n) => (F(), I("div", bw, [R("fieldset", xw, [
			n[4] ||= R("legend", { class: "dui-fieldset-legend" }, "Age", -1),
			n[5] ||= R("p", { class: "dui-fieldset-label" }, "Formula used by character creation to roll age.", -1),
			n[6] ||= R("label", {
				class: "dui-label",
				for: "species-age"
			}, "Age formula", -1),
			R("input", {
				id: "species-age",
				"aria-describedby": a("age").length ? "species-age-errors" : void 0,
				"aria-invalid": A(wC)(a("age")) || void 0,
				class: D(["dui-input dui-input-sm app:w-full", A($)(a("age"), "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				placeholder: "2d10+15",
				value: e.definition.age ?? "",
				type: "text",
				onInput: n[0] ||= (e) => r("updateStringField", "age", i(e))
			}, null, 42, Sw),
			o("age").length ? (F(), I("div", Cw, [(F(!0), I(P, null, N(o("age"), (e) => (F(), I("p", {
				key: e,
				class: D(["app:m-0 app:text-xs", A($)(a("age"), "app:text-error", "app:text-warning")])
			}, O(e), 3))), 128))])) : V("", !0)
		]), R("fieldset", ww, [
			n[7] ||= R("legend", { class: "dui-fieldset-legend" }, "Height", -1),
			n[8] ||= R("p", { class: "dui-fieldset-label" }, "Formula and base measurements used to roll random height.", -1),
			n[9] ||= R("label", {
				class: "dui-label",
				for: "species-height-die"
			}, "Height die", -1),
			R("input", {
				id: "species-height-die",
				"aria-describedby": a("height.die").length ? "species-height-die-errors" : void 0,
				"aria-invalid": A(wC)(a("height.die")) || void 0,
				class: D(["dui-input dui-input-sm app:w-full", A($)(a("height.die"), "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				placeholder: "1d10",
				value: e.definition.height?.die ?? "",
				type: "text",
				onInput: n[1] ||= (e) => r("updateHeightField", "die", i(e))
			}, null, 42, Tw),
			o("height.die").length ? (F(), I("div", Ew, [(F(!0), I(P, null, N(o("height.die"), (e) => (F(), I("p", {
				key: e,
				class: D(["app:m-0 app:text-xs", A($)(a("height.die"), "app:text-error", "app:text-warning")])
			}, O(e), 3))), 128))])) : V("", !0),
			n[10] ||= R("label", {
				class: "dui-label",
				for: "species-height-feet"
			}, "Base feet", -1),
			R("input", {
				id: "species-height-feet",
				"aria-describedby": a("height.feet").length ? "species-height-feet-errors" : void 0,
				"aria-invalid": A(wC)(a("height.feet")) || void 0,
				class: D(["dui-input dui-input-sm app:w-full", A($)(a("height.feet"), "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				value: e.definition.height?.feet ?? "",
				type: "number",
				onInput: n[2] ||= (e) => r("updateHeightField", "feet", i(e))
			}, null, 42, Dw),
			o("height.feet").length ? (F(), I("div", Ow, [(F(!0), I(P, null, N(o("height.feet"), (e) => (F(), I("p", {
				key: e,
				class: D(["app:m-0 app:text-xs", A($)(a("height.feet"), "app:text-error", "app:text-warning")])
			}, O(e), 3))), 128))])) : V("", !0),
			n[11] ||= R("label", {
				class: "dui-label",
				for: "species-height-inches"
			}, "Base inches", -1),
			R("input", {
				id: "species-height-inches",
				"aria-describedby": a("height.inches").length ? "species-height-inches-errors" : void 0,
				"aria-invalid": A(wC)(a("height.inches")) || void 0,
				class: D(["dui-input dui-input-sm app:w-full", A($)(a("height.inches"), "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				value: e.definition.height?.inches ?? "",
				type: "number",
				onInput: n[3] ||= (e) => r("updateHeightField", "inches", i(e))
			}, null, 42, kw),
			o("height.inches").length ? (F(), I("div", Aw, [(F(!0), I(P, null, N(o("height.inches"), (e) => (F(), I("p", {
				key: e,
				class: D(["app:m-0 app:text-xs", A($)(a("height.inches"), "app:text-error", "app:text-warning")])
			}, O(e), 3))), 128))])) : V("", !0)
		])]));
	}
}), Mw = { class: "app:grid app:gap-3" }, Nw = { class: "app:flex-1" }, Pw = { class: "app:flex app:flex-wrap app:gap-3" }, Fw = { class: "dui-card dui-card-border dui-card-sm app:min-w-64 app:flex-1" }, Iw = { class: "dui-card-body" }, Lw = { class: "dui-fieldset" }, Rw = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], zw = {
	key: 0,
	id: "species-name-errors"
}, Bw = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"placeholder",
	"value"
], Vw = {
	key: 1,
	id: "species-key-errors"
}, Hw = { class: "dui-card dui-card-border dui-card-sm app:min-w-64 app:flex-1" }, Uw = { class: "dui-card-body" }, Ww = { class: "dui-fieldset" }, Gw = { class: "dui-label" }, Kw = ["checked", "disabled"], qw = { class: "dui-card dui-card-border dui-card-sm" }, Jw = { class: "dui-card-body" }, Yw = /* @__PURE__ */ M({
	__name: "SpeciesBuilderDetailsTab",
	props: {
		definition: {},
		isDisabled: { type: Boolean },
		issues: {}
	},
	emits: [
		"updateBooleanField",
		"updateHeightField",
		"updateStringField",
		"reviewIssues"
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
			return hC(n.issues, e);
		}
		function s(e) {
			return SC(o(e));
		}
		function c() {
			return bC(n.issues);
		}
		return (t, n) => (F(), I("section", Mw, [
			c().length ? (F(), I("div", {
				key: 0,
				class: D(["dui-alert", A($)(c(), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [
				R("i", {
					"aria-hidden": "true",
					class: D(["fa-solid", A(wC)(c()) ? "fa-circle-exclamation" : "fa-triangle-exclamation"])
				}, null, 2),
				R("div", Nw, [(F(!0), I(P, null, N(A(SC)(c()).slice(0, 1), (e) => (F(), I("p", {
					key: e,
					class: "app:m-0 app:text-xs"
				}, [B(O(e) + " ", 1), A(SC)(c()).length > 1 ? (F(), I(P, { key: 0 }, [B(" (+" + O(A(SC)(c()).length - 1) + " more) ", 1)], 64)) : V("", !0)]))), 128))]),
				R("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: n[0] ||= (e) => r("reviewIssues")
				}, [...n[6] ||= [B(" Review Species Issues ", -1), R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-chevron-right"
				}, null, -1)]])
			], 2)) : V("", !0),
			R("div", Pw, [R("section", Fw, [R("div", Iw, [R("fieldset", Lw, [
				n[7] ||= R("legend", { class: "dui-fieldset-legend" }, "Identity", -1),
				n[8] ||= R("p", { class: "dui-fieldset-label" }, " The name is shown to users. The key identifies this species in generated WFRP config. ", -1),
				n[9] ||= R("label", {
					class: "dui-label",
					for: "species-name"
				}, "Name", -1),
				R("input", {
					id: "species-name",
					"aria-describedby": o("name").length ? "species-name-errors" : void 0,
					"aria-invalid": A(wC)(o("name")) || void 0,
					class: D(["dui-input dui-input-sm app:w-full", A($)(o("name"), "dui-input-error", "dui-input-warning")]),
					disabled: e.isDisabled,
					value: e.definition.name,
					type: "text",
					onInput: n[1] ||= (e) => r("updateStringField", "name", i(e))
				}, null, 42, Rw),
				s("name").length ? (F(), I("div", zw, [(F(!0), I(P, null, N(s("name"), (e) => (F(), I("p", {
					key: e,
					class: D(["app:m-0 app:text-xs", A($)(o("name"), "app:text-error", "app:text-warning")])
				}, O(e), 3))), 128))])) : V("", !0),
				n[10] ||= R("label", {
					class: "dui-label",
					for: "species-key"
				}, "Key", -1),
				R("input", {
					id: "species-key",
					"aria-describedby": o("key").length ? "species-key-errors" : void 0,
					"aria-invalid": A(wC)(o("key")) || void 0,
					class: D(["dui-input dui-input-sm app:w-full", A($)(o("key"), "dui-input-error", "dui-input-warning")]),
					disabled: e.isDisabled,
					placeholder: A(vw)(e.definition),
					value: e.definition.key,
					type: "text",
					onInput: n[2] ||= (e) => r("updateStringField", "key", i(e))
				}, null, 42, Bw),
				s("key").length ? (F(), I("div", Vw, [(F(!0), I(P, null, N(s("key"), (e) => (F(), I("p", {
					key: e,
					class: D(["app:m-0 app:text-xs", A($)(o("key"), "app:text-error", "app:text-warning")])
				}, O(e), 3))), 128))])) : V("", !0)
			])])]), R("section", Hw, [R("div", Uw, [R("fieldset", Ww, [
				n[12] ||= R("legend", { class: "dui-fieldset-legend" }, "WFRP Availability", -1),
				n[13] ||= R("p", { class: "dui-fieldset-label" }, " Choose whether character creation lists this custom species. ", -1),
				R("label", Gw, [R("input", {
					class: "dui-checkbox",
					checked: e.definition.includeInExtraSpecies,
					disabled: e.isDisabled,
					type: "checkbox",
					onChange: n[3] ||= (e) => r("updateBooleanField", "includeInExtraSpecies", a(e))
				}, null, 40, Kw), n[11] ||= R("span", null, "Show in WFRP extra species options", -1)])
			])])])]),
			R("section", qw, [R("div", Jw, [n[14] ||= R("h3", { class: "dui-card-title" }, "Character Creation", -1), z(jw, {
				definition: e.definition,
				"is-disabled": e.isDisabled,
				issues: e.issues,
				onUpdateHeightField: n[4] ||= (e, t) => r("updateHeightField", e, t),
				onUpdateStringField: n[5] ||= (e, t) => r("updateStringField", e, t)
			}, null, 8, [
				"definition",
				"is-disabled",
				"issues"
			])])])
		]));
	}
}), Xw = { class: "dui-fieldset" }, Zw = { class: "dui-fieldset-legend" }, Qw = /* @__PURE__ */ M({
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
		return (t, r) => (F(), I("fieldset", Xw, [R("legend", Zw, O(e.label), 1), z(DC, {
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
}), $w = { class: "dui-card-actions" }, eT = { class: "dui-badge" }, tT = ["disabled", "title"], nT = /* @__PURE__ */ M({
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
		return (t, r) => (F(), I("header", null, [
			(F(), L(Hr(e.headingLevel), { class: "dui-card-title" }, {
				default: j(() => [B(O(e.title), 1)]),
				_: 1
			})),
			R("p", null, O(e.description), 1),
			R("div", $w, [R("span", eT, O(e.count), 1), R("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: e.actionTitle,
				type: "button",
				onClick: r[0] ||= (e) => n("add")
			}, [r[1] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), B(" " + O(e.actionLabel), 1)], 8, tT)])
		]));
	}
}), rT = { class: "dui-card dui-card-border dui-card-sm" }, iT = { class: "dui-card-body" }, aT = {
	key: 1,
	class: "dui-list"
}, oT = { class: "dui-badge dui-badge-ghost" }, sT = { class: "dui-list-col-grow" }, cT = { class: "dui-list" }, lT = { class: "dui-badge dui-badge-ghost" }, uT = ["disabled", "onClick"], dT = { class: "dui-join" }, fT = ["disabled", "onClick"], pT = ["disabled", "onClick"], mT = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, hT = /* @__PURE__ */ M({
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
			return n.rows?.length ? n.rows : Ef(n.values);
		}
		function a() {
			r("updateRows", yf(i()));
		}
		function o(e) {
			r("updateRows", bf(i(), e));
		}
		function s(e, t) {
			r("updateRows", xf(i(), e, t));
		}
		function c(e) {
			r("updateRows", Sf(i(), e));
		}
		function l() {
			return SC(xC(n.issues));
		}
		return (t, n) => (F(), I("section", rT, [R("div", iT, [
			z(nT, {
				"action-label": "Add Rule",
				"action-title": "Add a rolled Career and replacement choices",
				count: i().length,
				description: "Offer one or more replacement Careers for a rolled Career group.",
				"is-disabled": e.isDisabled,
				title: "Career Replacements",
				onAdd: a
			}, null, 8, ["count", "is-disabled"]),
			l().length ? (F(), I("div", {
				key: 0,
				class: D(["dui-alert", A($)(A(xC)(e.issues), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[2] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), R("div", null, [(F(!0), I(P, null, N(l(), (e) => (F(), I("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, O(e), 1))), 128))])], 2)) : V("", !0),
			i().length > 0 ? (F(), I("ul", aT, [(F(!0), I(P, null, N(i(), (t, i) => (F(), I("li", {
				key: `career-replacement-${i}`,
				class: D(["dui-list-row", A($)(A(_C)(e.issues, i), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				R("span", oT, "Rule " + O(i + 1), 1),
				R("div", sT, [
					z(Qw, {
						description: "Drop the Career result that should allow replacement choices.",
						"is-disabled": e.isDisabled,
						issues: A(hC)(e.issues, "rolled", i),
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
					n[4] ||= R("strong", null, "Replacement choices", -1),
					R("ul", cT, [(F(!0), I(P, null, N(t.replacements, (t, a) => (F(), I("li", {
						key: `${i}-${a}`,
						class: D(["dui-list-row", A($)(A(yC)(e.issues, i, a), "app:border app:border-error", "app:border app:border-warning")])
					}, [
						R("span", lT, O(a + 1), 1),
						z(Qw, {
							class: "dui-list-col-grow",
							description: "Drop one Career offered instead of the rolled Career.",
							"is-disabled": e.isDisabled,
							issues: A(hC)(e.issues, "replacement", i, a),
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
						R("button", {
							disabled: e.isDisabled,
							title: "Remove this replacement Career choice",
							class: "dui-btn dui-btn-error dui-btn-sm",
							type: "button",
							onClick: (e) => s(i, a)
						}, [...n[3] ||= [R("i", {
							"aria-hidden": "true",
							class: "fa-solid fa-xmark"
						}, null, -1), B(" Remove ", -1)]], 8, uT)
					], 2))), 128))])
				]),
				R("div", dT, [R("button", {
					class: "dui-btn dui-btn-sm dui-join-item",
					disabled: e.isDisabled,
					title: "Add another replacement Career choice",
					type: "button",
					onClick: (e) => o(i)
				}, [...n[5] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-plus"
				}, null, -1), B(" Choice ", -1)]], 8, fT), R("button", {
					disabled: e.isDisabled,
					title: "Remove this Career replacement rule",
					class: "dui-btn dui-btn-error dui-btn-sm dui-join-item",
					type: "button",
					onClick: (e) => c(i)
				}, [...n[6] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), B(" Remove Rule ", -1)]], 8, pT)])
			], 2))), 128))])) : (F(), I("div", mT, [...n[7] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No Career replacements.", -1)]]))
		])]));
	}
}), gT = { class: "dui-card dui-card-border dui-card-sm" }, _T = { class: "dui-card-body" }, vT = { class: "dui-fieldset" }, yT = ["for"], bT = { class: "dui-join app:w-full" }, xT = ["id", "disabled"], ST = { value: "" }, CT = ["value"], wT = ["disabled"], TT = {
	key: 1,
	class: "dui-list"
}, ET = { class: "dui-badge dui-badge-ghost" }, DT = { class: "dui-list-col-grow" }, OT = {
	key: 0,
	class: "app:flex app:flex-wrap app:gap-1"
}, kT = {
	key: 0,
	class: "dui-badge dui-badge-outline dui-badge-sm"
}, AT = {
	key: 1,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, jT = { class: "dui-fieldset" }, MT = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], NT = ["id"], PT = { class: "dui-fieldset" }, FT = [
	"disabled",
	"value",
	"onInput"
], IT = ["disabled", "onClick"], LT = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, RT = /* @__PURE__ */ M({
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
		let n = e, r = t, i = wm(), a = /* @__PURE__ */ k(""), o = gr(), s = H(() => Yu(i.definitions, n.rows)), c = H(() => s.value.find((e) => e.id === a.value));
		function l() {
			return n.rows ?? [];
		}
		function u() {
			r("updateRows", Zu(n.rows));
		}
		function d() {
			c.value && r("updateRows", Xu(c.value.rows));
		}
		function f(e) {
			r("updateRows", Qu(n.rows, e));
		}
		function p(e, t) {
			r("updateRows", $u(n.rows, e, t));
		}
		function m(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function h(e) {
			return hC(n.issues, "name", e);
		}
		function g(e) {
			return SC(h(e));
		}
		function _() {
			return SC(xC(n.issues));
		}
		return (t, n) => (F(), I("section", gT, [R("div", _T, [
			z(nT, {
				"action-label": "Add Career",
				"action-title": "Add a Career table row",
				count: l().length,
				description: "Career group names are required for the normal character-generation roll. Journal links provide the result link; blank links use the generated fallback journal.",
				"is-disabled": e.isDisabled,
				title: "Career Table",
				onAdd: u
			}, null, 8, ["count", "is-disabled"]),
			R("fieldset", vT, [
				n[2] ||= R("legend", { class: "dui-fieldset-legend" }, "Copy Existing Table", -1),
				R("label", {
					class: "dui-label",
					for: A(o)
				}, "Source species", 8, yT),
				R("div", bT, [Un(R("select", {
					id: A(o),
					"onUpdate:modelValue": n[0] ||= (e) => a.value = e,
					"aria-label": "Source species",
					class: "dui-select dui-select-sm dui-join-item app:min-w-0 app:flex-1",
					disabled: e.isDisabled || s.value.length === 0
				}, [R("option", ST, O(s.value.length > 0 ? "Select a species…" : "No species tables available"), 1), (F(!0), I(P, null, N(s.value, (e) => (F(), I("option", {
					key: e.id,
					value: e.id
				}, O(e.label) + " (" + O(e.rows.length) + ") ", 9, CT))), 128))], 8, xT), [[Ko, a.value]]), R("button", {
					class: "dui-btn dui-btn-sm dui-join-item",
					disabled: e.isDisabled || !c.value,
					title: "Replace the current rows with a copy of the selected species table",
					type: "button",
					onClick: d
				}, [...n[1] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-copy"
				}, null, -1), B(" Copy Table ", -1)]], 8, wT)]),
				n[3] ||= R("p", { class: "dui-label" }, "Copies its rows, ranges, weights, and journal links.", -1)
			]),
			_().length ? (F(), I("div", {
				key: 0,
				class: D(["dui-alert", A($)(A(xC)(e.issues), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[4] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), R("div", null, [(F(!0), I(P, null, N(_(), (e) => (F(), I("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, O(e), 1))), 128))])], 2)) : V("", !0),
			l().length > 0 ? (F(), I("ul", TT, [(F(!0), I(P, null, N(l(), (t, i) => (F(), I("li", {
				key: i,
				class: D(["dui-list-row", A($)(A(_C)(e.issues, i), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				R("span", ET, O(i + 1), 1),
				R("div", DT, [
					t.sourceRange || t.sourceWeight ? (F(), I("div", OT, [t.sourceRange ? (F(), I("span", kT, " Range " + O(t.sourceRange[0]) + "–" + O(t.sourceRange[1]), 1)) : V("", !0), t.sourceWeight ? (F(), I("span", AT, " Weight " + O(t.sourceWeight), 1)) : V("", !0)])) : V("", !0),
					z(lC, {
						description: "Drop a WFRP Career item.",
						disabled: e.isDisabled,
						"manual-entry-trigger": "none",
						title: "Career",
						variant: "bare",
						onDropData: (e) => r("dropCareer", i, e)
					}, {
						default: j(() => [R("fieldset", jT, [
							n[5] ||= R("legend", { class: "dui-fieldset-legend" }, "Career Group", -1),
							R("input", {
								"aria-describedby": h(i).length ? `career-table-name-${i}-errors` : void 0,
								"aria-invalid": A(wC)(h(i)) || void 0,
								class: D(["dui-input", A($)(h(i), "dui-input-error", "dui-input-warning")]),
								disabled: e.isDisabled,
								value: t.name,
								placeholder: "Pit Fighter",
								type: "text",
								onInput: (e) => p(i, { name: m(e) })
							}, null, 42, MT),
							g(i).length ? (F(), I("div", {
								key: 0,
								id: `career-table-name-${i}-errors`
							}, [(F(!0), I(P, null, N(g(i), (e) => (F(), I("p", {
								key: e,
								class: D(["app:m-0 app:text-xs", A($)(h(i), "app:text-error", "app:text-warning")])
							}, O(e), 3))), 128))], 8, NT)) : V("", !0)
						])]),
						_: 2
					}, 1032, ["disabled", "onDropData"]),
					z(lC, {
						description: "Drop a Journal Entry or Journal Page.",
						disabled: e.isDisabled,
						"manual-entry-trigger": "button",
						title: "Journal Link",
						variant: "bare",
						onDropData: (e) => r("dropJournal", i, e)
					}, {
						default: j(() => [R("fieldset", PT, [n[6] ||= R("legend", { class: "dui-fieldset-legend" }, "Journal Entry/Page UUID", -1), R("input", {
							class: "dui-input",
							disabled: e.isDisabled,
							value: t.journalUuid ?? "",
							placeholder: "Compendium.package.journals.entry.JournalEntryPage.page",
							type: "text",
							onInput: (e) => p(i, { journalUuid: m(e) })
						}, null, 40, FT)])]),
						_: 2
					}, 1032, ["disabled", "onDropData"])
				]),
				R("button", {
					class: "dui-btn dui-btn-error dui-btn-sm",
					disabled: e.isDisabled,
					type: "button",
					onClick: (e) => f(i)
				}, [...n[7] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), B(" Remove ", -1)]], 8, IT)
			], 2))), 128))])) : (F(), I("div", LT, [...n[8] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No Career rows yet.", -1)]]))
		])]));
	}
});
//#endregion
//#region src/functions/species-builder/editor/random-talents.ts
function zT(e) {
	return Object.entries(e ?? {});
}
function BT(e, t) {
	let n = t[0]?.key ?? "talents";
	return GT([...e, [n, 1]]);
}
function VT(e, t, n) {
	return GT(e.map(([e, r], i) => i === t ? [n, r] : [e, r]));
}
function HT(e, t, n) {
	let r = Number(n);
	return GT(e.map(([e, n], i) => i === t && Number.isFinite(r) ? [e, r] : [e, n]));
}
function UT(e, t) {
	return GT(e.filter((e, n) => n !== t));
}
function WT(e, t) {
	return e.some((e) => e.key === t) ? e : [...e, {
		key: t,
		label: `Saved source missing from this world (${t})`
	}];
}
function GT(e) {
	return e.flatMap(([e, t]) => e.trim() ? [`${e.trim()}: ${t}`] : []).join("\n");
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/tables/tabs/random-talents/RandomTalentRows.vue?vue&type=script&setup=true&lang.ts
var KT = { class: "dui-card dui-card-border dui-card-sm" }, qT = { class: "dui-card-body" }, JT = {
	key: 1,
	class: "dui-list"
}, YT = { class: "dui-badge dui-badge-ghost" }, XT = { class: "dui-list-col-grow" }, ZT = { class: "dui-fieldset" }, QT = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], $T = ["value"], eE = ["id"], tE = { class: "dui-fieldset" }, nE = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], rE = ["id"], iE = ["disabled", "onClick"], aE = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, oE = /* @__PURE__ */ M({
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
			return zT(n.values);
		}
		function a() {
			r("update", BT(i(), n.sources));
		}
		function o(e, t) {
			r("update", VT(i(), e, t));
		}
		function s(e, t) {
			r("update", HT(i(), e, t));
		}
		function c(e) {
			return WT(n.sources, e);
		}
		function l(e) {
			r("update", UT(i(), e));
		}
		function u(e) {
			return e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement ? e.target.value : "";
		}
		function d(e, t) {
			return hC(n.issues, e, t);
		}
		function f(e, t) {
			return SC(d(e, t));
		}
		function p() {
			return SC(xC(n.issues));
		}
		return (t, n) => (F(), I("section", KT, [R("div", qT, [
			z(nT, {
				"action-label": "Add Source",
				"action-title": "Add a random Talent source and draw count",
				count: i().length,
				description: "Choose an available Talent table and the number of draws from that source.",
				"is-disabled": e.isDisabled,
				title: "Random Talents",
				onAdd: a
			}, null, 8, ["count", "is-disabled"]),
			p().length ? (F(), I("div", {
				key: 0,
				class: D(["dui-alert", A($)(A(xC)(e.issues), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[0] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), R("div", null, [(F(!0), I(P, null, N(p(), (e) => (F(), I("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, O(e), 1))), 128))])], 2)) : V("", !0),
			i().length > 0 ? (F(), I("ul", JT, [(F(!0), I(P, null, N(i(), ([t, r], i) => (F(), I("li", {
				key: `random-${i}`,
				class: D(["dui-list-row", A($)(A(_C)(e.issues, i), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				R("span", YT, O(i + 1), 1),
				R("div", XT, [R("fieldset", ZT, [
					n[1] ||= R("legend", { class: "dui-fieldset-legend" }, "Talent source", -1),
					R("select", {
						"aria-describedby": d("key", i).length ? `random-talents-key-${i}-errors` : void 0,
						"aria-invalid": A(wC)(d("key", i)) || void 0,
						class: D(["dui-select", A($)(d("key", i), "dui-select-error", "dui-select-warning")]),
						disabled: e.isDisabled,
						title: "Random Talent table source available in this world.",
						value: t,
						onInput: (e) => o(i, u(e))
					}, [(F(!0), I(P, null, N(c(t), (e) => (F(), I("option", {
						key: e.key,
						value: e.key
					}, O(e.label), 9, $T))), 128))], 42, QT),
					f("key", i).length ? (F(), I("div", {
						key: 0,
						id: `random-talents-key-${i}-errors`
					}, [(F(!0), I(P, null, N(f("key", i), (e) => (F(), I("p", {
						key: e,
						class: D(["app:m-0 app:text-xs", A($)(d("key", i), "app:text-error", "app:text-warning")])
					}, O(e), 3))), 128))], 8, eE)) : V("", !0)
				]), R("fieldset", tE, [
					n[2] ||= R("legend", { class: "dui-fieldset-legend" }, "Draws", -1),
					R("input", {
						"aria-describedby": d("count", i).length ? `random-talents-count-${i}-errors` : void 0,
						"aria-invalid": A(wC)(d("count", i)) || void 0,
						class: D(["dui-input", A($)(d("count", i), "dui-input-error", "dui-input-warning")]),
						disabled: e.isDisabled,
						min: "0",
						title: "How many random Talents this species draws from that table.",
						value: r,
						type: "number",
						onInput: (e) => s(i, u(e))
					}, null, 42, nE),
					f("count", i).length ? (F(), I("div", {
						key: 0,
						id: `random-talents-count-${i}-errors`
					}, [(F(!0), I(P, null, N(f("count", i), (e) => (F(), I("p", {
						key: e,
						class: D(["app:m-0 app:text-xs", A($)(d("count", i), "app:text-error", "app:text-warning")])
					}, O(e), 3))), 128))], 8, rE)) : V("", !0)
				])]),
				R("button", {
					disabled: e.isDisabled,
					title: "Remove this random Talent source",
					class: "dui-btn dui-btn-error dui-btn-sm",
					type: "button",
					onClick: (e) => l(i)
				}, [...n[3] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), B(" Remove ", -1)]], 8, iE)
			], 2))), 128))])) : (F(), I("div", aE, [...n[4] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No random Talent draws.", -1)]]))
		])]));
	}
}), sE = { class: "dui-card dui-card-border dui-card-sm" }, cE = { class: "dui-card-body" }, lE = {
	key: 1,
	class: "dui-list"
}, uE = { class: "dui-badge dui-badge-ghost" }, dE = { class: "dui-list-col-grow" }, fE = ["disabled", "onClick"], pE = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, mE = /* @__PURE__ */ M({
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
			return n.rows?.length ? n.rows : Tf(n.values);
		}
		function a() {
			r("updateRows", _f(i()));
		}
		function o(e) {
			r("updateRows", vf(i(), e));
		}
		function s() {
			return SC(xC(n.issues));
		}
		return (t, n) => (F(), I("section", sE, [R("div", cE, [
			z(nT, {
				"action-label": "Add Rule",
				"action-title": "Add a rolled Talent and replacement Talent",
				count: i().length,
				description: "Offer a specific alternative when character creation rolls a Talent.",
				"is-disabled": e.isDisabled,
				title: "Talent Replacements",
				onAdd: a
			}, null, 8, ["count", "is-disabled"]),
			s().length ? (F(), I("div", {
				key: 0,
				class: D(["dui-alert", A($)(A(xC)(e.issues), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[2] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), R("div", null, [(F(!0), I(P, null, N(s(), (e) => (F(), I("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, O(e), 1))), 128))])], 2)) : V("", !0),
			i().length > 0 ? (F(), I("ul", lE, [(F(!0), I(P, null, N(i(), (t, i) => (F(), I("li", {
				key: `talent-replacement-${i}`,
				class: D(["dui-list-row", A($)(A(_C)(e.issues, i), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				R("span", uE, O(i + 1), 1),
				R("div", dE, [z(Qw, {
					description: "Drop the Talent result that may be replaced.",
					"is-disabled": e.isDisabled,
					issues: A(hC)(e.issues, "rolled", i),
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
				]), z(Qw, {
					description: "Drop the Talent offered instead of the rolled Talent.",
					"is-disabled": e.isDisabled,
					issues: A(hC)(e.issues, "replacement", i),
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
				R("button", {
					disabled: e.isDisabled,
					title: "Remove this Talent replacement",
					class: "dui-btn dui-btn-error dui-btn-sm",
					type: "button",
					onClick: (e) => o(i)
				}, [...n[3] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), B(" Remove ", -1)]], 8, fE)
			], 2))), 128))])) : (F(), I("div", pE, [...n[4] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No Talent replacements.", -1)]]))
		])]));
	}
}), hE = { class: "dui-card dui-card-border dui-card-sm" }, gE = { class: "dui-card-body" }, _E = { key: 0 }, vE = { class: "app:m-0" }, yE = {
	key: 1,
	class: "app:m-0"
}, bE = {
	key: 2,
	"aria-label": "Table editor",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, xE = [
	"id",
	"aria-controls",
	"aria-selected",
	"disabled",
	"onClick"
], SE = ["title"], CE = { class: "app:sr-only" }, wE = /* @__PURE__ */ M({
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
		let n = e, r = t, i = H(() => {
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
			let t = Xh(d(e));
			return t ? Zh(t) : "";
		}
		function p(e) {
			return d(e).some((e) => e.severity !== "warning");
		}
		return (t, n) => (F(), I("section", hE, [R("div", gE, [
			e.showNavigation ? (F(), I("header", _E, [n[8] ||= R("h3", { class: "dui-card-title" }, "Tables And Replacements", -1), R("p", vE, O(e.help), 1)])) : (F(), I("p", yE, O(e.help), 1)),
			e.showNavigation ? (F(), I("div", bE, [(F(!0), I(P, null, N(i.value, (t) => (F(), I("button", {
				id: `random-table-tab-${t.tab}`,
				key: t.tab,
				"aria-controls": `random-table-panel-${t.tab}`,
				"aria-selected": e.activeTab === t.tab,
				class: D(["dui-tab", { "dui-tab-active": e.activeTab === t.tab }]),
				disabled: e.isNavigationDisabled,
				role: "tab",
				type: "button",
				onClick: (e) => l(t.tab)
			}, [B(O(t.label) + " ", 1), d(t.tab).length > 0 ? (F(), I("span", {
				key: 0,
				class: D(["dui-status dui-status-sm", p(t.tab) ? "dui-status-error" : "dui-status-warning"]),
				title: f(t.tab)
			}, [R("span", CE, O(f(t.tab)), 1)], 10, SE)) : V("", !0)], 10, xE))), 128))])) : V("", !0),
			e.activeTab === "careerTable" ? (F(), L(RT, {
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
			])) : e.activeTab === "randomTalents" ? (F(), L(oE, {
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
			])) : e.activeTab === "talentReplacement" ? (F(), L(mE, {
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
			])) : e.includeCareerReplacements ? (F(), L(hT, {
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
			])) : V("", !0)
		])]));
	}
}), TE = {
	"aria-label": "Current species and save state",
	class: "dui-footer dui-footer-horizontal app:sticky app:bottom-0 app:z-10 app:items-center app:justify-between app:gap-3 app:bg-base-200 app:px-3 app:py-2"
}, EE = { class: "app:flex app:min-w-0 app:items-center app:gap-2" }, DE = {
	key: 0,
	class: "dui-badge dui-badge-ghost"
}, OE = {
	"aria-atomic": "true",
	"aria-live": "polite",
	role: "status"
}, kE = ["disabled"], AE = /* @__PURE__ */ M({
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
		let n = e, r = t, i = H(() => n.entityName?.trim() || n.definition?.name.trim() || n.definition?.key.trim() || (n.definition ? "Untitled Species" : "Species Builder")), a = H(() => n.entityKey?.trim() ? n.entityKey.trim() : n.definition ? n.definition.key.trim() || vw(n.definition) : ""), o = H(() => n.isLoading ? {
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
			label: n.hasUnsavedChanges ? "Unsaved changes; validation warnings remain" : "Saved; validation warnings remain",
			statusClass: "dui-status-warning"
		} : n.hasUnsavedChanges ? {
			label: "Unsaved changes",
			statusClass: "dui-status-warning"
		} : {
			label: "All changes saved",
			statusClass: "dui-status-success"
		});
		return (t, n) => (F(), I("footer", TE, [R("div", EE, [
			R("span", {
				"aria-hidden": "true",
				class: D(["dui-status", o.value.statusClass])
			}, null, 2),
			R("strong", null, O(i.value), 1),
			a.value ? (F(), I("span", DE, O(a.value), 1)) : V("", !0),
			R("span", OE, O(o.value.label), 1)
		]), R("button", {
			class: "dui-btn dui-btn-primary dui-btn-sm",
			disabled: !e.canSave,
			type: "button",
			onClick: n[0] ||= (e) => r("save")
		}, [n[1] ||= R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-floppy-disk"
		}, null, -1), B(" " + O(e.isSaving ? "Saving..." : "Save Changes"), 1)], 8, kE)]));
	}
}), jE = { class: "dui-card dui-card-border dui-card-sm" }, ME = { class: "dui-card-body" }, NE = { class: "dui-collapse-title" }, PE = { class: "dui-badge" }, FE = { class: "dui-collapse-content" }, IE = { class: "dui-fieldset" }, LE = [
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], RE = { class: "dui-collapse dui-collapse-arrow" }, zE = { class: "dui-collapse-title" }, BE = { class: "dui-badge" }, VE = { class: "dui-collapse-content" }, HE = {
	key: 0,
	class: "dui-list"
}, UE = {
	key: 1,
	class: "dui-alert"
}, WE = { class: "dui-collapse dui-collapse-arrow" }, GE = { class: "dui-collapse-title" }, KE = { class: "dui-badge" }, qE = { class: "dui-collapse-content" }, JE = {
	key: 0,
	class: "dui-list"
}, YE = {
	key: 1,
	class: "dui-alert"
}, XE = /* @__PURE__ */ M({
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
		let s = H(() => $s(r.parentDefinition, r.subspecies)), c = H(() => ic(r.parentDefinition, r.subspecies, {
			parent: r.parentDefinition.woundFormula ? Qc(r.parentDefinition) : void 0,
			subspecies: r.subspecies.woundFormula ? r.woundFormulaTraitName : void 0
		})), l = H(() => SC(r.issues));
		function u(e) {
			return gC(r.issues, e);
		}
		return (t, r) => (F(), I("section", jE, [R("div", ME, [
			r[6] ||= R("h3", { class: "dui-card-title" }, "Skill And Trait Changes", -1),
			r[7] ||= R("p", null, " These changes are applied to the parent lists and exported as complete WFRP subspecies lists. Open only the list you need to edit. ", -1),
			l.value.length ? (F(), I("div", {
				key: 0,
				class: D(["dui-alert", A($)(e.issues, "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [r[0] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), R("div", null, [(F(!0), I(P, null, N(l.value, (e) => (F(), I("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, O(e), 1))), 128))])], 2)) : V("", !0),
			(F(), I(P, null, N(n, (t) => R("details", {
				key: t.field,
				class: "dui-collapse dui-collapse-arrow"
			}, [R("summary", NE, [B(O(t.label) + " ", 1), R("span", PE, O(e.subspecies[t.field]?.length ?? 0), 1)]), R("div", FE, [R("fieldset", IE, [r[1] ||= R("legend", { class: "dui-fieldset-legend" }, "One name per line", -1), R("textarea", {
				class: D(["dui-textarea", A($)(u(t.field), "dui-textarea-error", "dui-textarea-warning")]),
				"aria-invalid": A(wC)(u(t.field)) || void 0,
				disabled: e.isDisabled,
				value: o(e.subspecies[t.field]),
				rows: "5",
				onInput: (e) => i("updateArrayField", t.field, a(e))
			}, null, 42, LE)])])])), 64)),
			r[8] ||= R("div", { class: "dui-divider" }, "Compiled Preview", -1),
			r[9] ||= R("div", { class: "dui-alert dui-alert-info" }, [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-eye"
			}), R("span", null, "Read-only previews show the final inherited lists WFRP will receive.")], -1),
			R("details", RE, [R("summary", zE, [r[2] ||= B(" Compiled Skills ", -1), R("span", BE, O(s.value.length), 1)]), R("div", VE, [s.value.length > 0 ? (F(), I("ul", HE, [(F(!0), I(P, null, N(s.value, (e) => (F(), I("li", {
				key: e,
				class: "dui-list-row"
			}, [r[3] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-check"
			}, null, -1), R("span", null, O(e), 1)]))), 128))])) : (F(), I("p", UE, "The compiled Skill list is empty."))])]),
			R("details", WE, [R("summary", GE, [r[4] ||= B(" Compiled Traits ", -1), R("span", KE, O(c.value.length), 1)]), R("div", qE, [c.value.length > 0 ? (F(), I("ul", JE, [(F(!0), I(P, null, N(c.value, (e) => (F(), I("li", {
				key: e,
				class: "dui-list-row"
			}, [r[5] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-check"
			}, null, -1), R("span", null, O(e), 1)]))), 128))])) : (F(), I("p", YE, "The compiled Trait list is empty."))])])
		])]));
	}
}), ZE = { class: "dui-card dui-card-border dui-card-sm" }, QE = { class: "dui-card-body" }, $E = { class: "dui-fieldset" }, eD = { class: "dui-table dui-table-sm" }, tD = { scope: "row" }, nD = ["for"], rD = [
	"id",
	"aria-invalid",
	"disabled",
	"value"
], iD = { scope: "row" }, aD = ["for"], oD = [
	"id",
	"aria-invalid",
	"disabled",
	"placeholder",
	"value"
], sD = { class: "dui-fieldset" }, cD = { class: "dui-fieldset" }, lD = /* @__PURE__ */ M({
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
		let n = e, r = t, i = H(() => SC(n.issues));
		function a(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function o(e) {
			return hC(n.issues, e);
		}
		function s(e) {
			return SC(o(e));
		}
		return (t, n) => (F(), I("section", ZE, [R("div", QE, [
			i.value.length ? (F(), I("div", {
				key: 0,
				class: D(["dui-alert", A($)(e.issues, "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[4] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), R("div", null, [(F(!0), I(P, null, N(i.value, (e) => (F(), I("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, O(e), 1))), 128))])], 2)) : V("", !0),
			R("fieldset", $E, [
				n[5] ||= R("legend", { class: "dui-fieldset-legend" }, "Identity", -1),
				n[6] ||= R("p", { class: "dui-fieldset-label" }, " Name this variant and give it a unique key under its parent species. ", -1),
				R("table", eD, [R("tbody", null, [R("tr", null, [R("th", tD, [R("label", { for: `subspecies-${e.index}-name` }, "Name", 8, nD)]), R("td", null, [R("input", {
					id: `subspecies-${e.index}-name`,
					class: D(["dui-input dui-input-sm", A($)(o("name"), "dui-input-error", "dui-input-warning")]),
					"aria-invalid": A(wC)(o("name")) || void 0,
					disabled: e.isDisabled,
					value: e.subspecies.name,
					type: "text",
					onInput: n[0] ||= (e) => r("updateStringField", "name", a(e))
				}, null, 42, rD), (F(!0), I(P, null, N(s("name"), (e) => (F(), I("p", {
					key: e,
					class: D(["app:m-0 app:text-xs", A($)(o("name"), "app:text-error", "app:text-warning")])
				}, O(e), 3))), 128))])]), R("tr", null, [R("th", iD, [R("label", { for: `subspecies-${e.index}-key` }, "Key", 8, aD)]), R("td", null, [R("input", {
					id: `subspecies-${e.index}-key`,
					class: D(["dui-input dui-input-sm", A($)(o("key"), "dui-input-error", "dui-input-warning")]),
					"aria-invalid": A(wC)(o("key")) || void 0,
					disabled: e.isDisabled,
					placeholder: A(yw)(e.subspecies),
					value: e.subspecies.key,
					type: "text",
					onInput: n[1] ||= (e) => r("updateStringField", "key", a(e))
				}, null, 42, oD), (F(!0), I(P, null, N(s("key"), (e) => (F(), I("p", {
					key: e,
					class: D(["app:m-0 app:text-xs", A($)(o("key"), "app:text-error", "app:text-warning")])
				}, O(e), 3))), 128))])])])])
			]),
			R("fieldset", sD, [
				n[7] ||= R("legend", { class: "dui-fieldset-legend" }, "Characteristic Overrides", -1),
				n[8] ||= R("p", { class: "dui-fieldset-label" }, " Enter only formulas that replace the parent species characteristic value. ", -1),
				z(rw, {
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
			R("fieldset", cD, [
				n[9] ||= R("legend", { class: "dui-fieldset-legend" }, "Resource Overrides", -1),
				n[10] ||= R("p", { class: "dui-fieldset-label" }, "Leave a value blank to keep the parent species value.", -1),
				z(lw, {
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
}), uD = { class: "app:flex app:flex-wrap app:items-start app:justify-between app:gap-3" }, dD = { class: "app:flex app:flex-col app:gap-1" }, fD = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, pD = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, mD = {
	id: "species-builder-subspecies-title",
	class: "app:m-0"
}, hD = { class: "dui-card-actions" }, gD = ["disabled"], _D = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "note"
}, vD = /* @__PURE__ */ M({
	__name: "SubspeciesEditorHeader",
	props: {
		isBusy: { type: Boolean },
		isReadOnly: { type: Boolean },
		name: {}
	},
	emits: ["close", "delete"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (F(), I(P, null, [R("header", uD, [R("div", dD, [R("span", fD, [r[3] ||= R("span", { class: "dui-badge dui-badge-ghost" }, "Subspecies", -1), e.isReadOnly ? (F(), I("span", pD, [...r[2] ||= [R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-lock"
		}, null, -1), B(" Installed ", -1)]])) : V("", !0)]), R("h2", mD, O(e.name), 1)]), R("div", hD, [e.isReadOnly ? V("", !0) : (F(), I("button", {
			key: 0,
			class: "dui-btn dui-btn-error dui-btn-sm",
			disabled: e.isBusy,
			type: "button",
			onClick: r[0] ||= (e) => n("delete")
		}, [...r[4] ||= [R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-trash"
		}, null, -1), B(" Delete ", -1)]], 8, gD)), R("button", {
			class: "dui-btn dui-btn-sm",
			type: "button",
			onClick: r[1] ||= (e) => n("close")
		}, "Close")])]), e.isReadOnly ? (F(), I("div", _D, [...r[5] ||= [R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-lock"
		}, null, -1), R("span", null, " This installed subspecies is available for reference. Its controls are locked because the source module owns the data. ", -1)]])) : V("", !0)], 64));
	}
}), yD = [
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
], bD = {
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
function xD(e, t) {
	return e.filter((e) => bD[t].includes(e.section));
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/subspecies/SubspeciesEditorTabs.vue?vue&type=script&setup=true&lang.ts
var SD = {
	"aria-label": "Edit subspecies section",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, CD = [
	"id",
	"aria-controls",
	"aria-selected",
	"autofocus",
	"disabled",
	"onClick"
], wD = ["title"], TD = { class: "app:sr-only" }, ED = /* @__PURE__ */ M({
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
			return Xh(xD(n.issues, e));
		}
		return (t, n) => (F(), I("div", SD, [(F(!0), I(P, null, N(A(yD), (t) => (F(), I("button", {
			id: `subspecies-editor-tab-${t.tab}`,
			key: t.tab,
			"aria-controls": `subspecies-editor-panel-${t.tab}`,
			"aria-selected": e.activeTab === t.tab,
			autofocus: t.tab === e.activeTab,
			class: D(["dui-tab", { "dui-tab-active": e.activeTab === t.tab }]),
			disabled: e.isBusy,
			role: "tab",
			type: "button",
			onClick: (e) => r("select", t.tab)
		}, [B(O(t.label) + " ", 1), i(t.tab) ? (F(), I("span", {
			key: 0,
			class: D(["dui-status dui-status-sm", i(t.tab)?.severity === "error" ? "dui-status-error" : "dui-status-warning"]),
			title: A(Zh)(i(t.tab))
		}, [R("span", TD, O(A(Zh)(i(t.tab))), 1)], 10, wD)) : V("", !0)], 10, CD))), 128))]));
	}
});
//#endregion
//#region src/functions/species-builder/editor/subspecies-talents.ts
function DD(e, t, n) {
	let r = AD(e), i = AD(t), a = AD(n), o = r.filter((e) => !a.includes(e)).map((e) => ({
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
function OD(e, t) {
	return e.source === "added" ? {
		field: "talentsAdded",
		value: jD(t.addedTalents.filter((t) => t !== e.name))
	} : {
		field: "talentsRemoved",
		value: jD([...t.removedTalents, e.name])
	};
}
function kD(e, t) {
	return {
		field: "talentsRemoved",
		value: jD(t.removedTalents.filter((t) => t !== e))
	};
}
function AD(e) {
	let t = [];
	for (let n of e ?? []) {
		let e = n.trim();
		e && !t.includes(e) && t.push(e);
	}
	return t;
}
function jD(e) {
	return AD(e).join("\n");
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/subspecies/SubspeciesTalentInheritance.vue?vue&type=script&setup=true&lang.ts
var MD = { class: "dui-card dui-card-border dui-card-sm" }, ND = { class: "dui-card-body" }, PD = {
	key: 1,
	class: "dui-list"
}, FD = { class: "dui-list-col-grow" }, ID = { class: "dui-badge" }, LD = [
	"disabled",
	"title",
	"onClick"
], RD = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, zD = { key: 3 }, BD = { class: "dui-card-actions" }, VD = [
	"disabled",
	"title",
	"onClick"
], HD = /* @__PURE__ */ M({
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
		let n = e, r = t, i = H(() => DD(n.parentTalents, n.subspecies.talentsAdded, n.subspecies.talentsRemoved)), a = H(() => SC(n.issues));
		function o(e) {
			c(OD(e, i.value));
		}
		function s(e) {
			c(kD(e, i.value));
		}
		function c(e) {
			r("updateArrayField", n.index, e.field, e.value);
		}
		function l(e) {
			if (e.source !== "added") return [];
			let t = n.subspecies.talentsAdded?.findIndex((t) => t.trim() === e.name);
			return t === void 0 || t < 0 ? [] : vC(n.issues, "talentsAdded", t);
		}
		function u(e) {
			return SC(l(e));
		}
		return (t, n) => (F(), I("section", MD, [R("div", ND, [
			n[6] ||= R("h3", { class: "dui-card-title" }, "Talent Inheritance", -1),
			n[7] ||= R("p", null, " Parent Talents are shown here as the subspecies Talent list. Removing an inherited Talent records it as removed; dropping a new Talent records it as added. ", -1),
			a.value.length ? (F(), I("div", {
				key: 0,
				class: D(["dui-alert", A($)(e.issues, "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[1] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), R("div", null, [(F(!0), I(P, null, N(a.value, (e) => (F(), I("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, O(e), 1))), 128))])], 2)) : V("", !0),
			z(lC, {
				description: "Drop a WFRP Talent item to add it to this subspecies.",
				disabled: e.isDisabled,
				title: "Drop Added Talent",
				variant: "compact",
				onDropData: n[0] ||= (t) => r("talentDrop", e.index, t)
			}, null, 8, ["disabled"]),
			i.value.activeRows.length > 0 ? (F(), I("ul", PD, [(F(!0), I(P, null, N(i.value.activeRows, (t) => (F(), I("li", {
				key: `${t.source}-${t.name}`,
				class: D(["dui-list-row", A($)(l(t), "app:border app:border-error", "app:border app:border-warning")])
			}, [R("div", FD, [
				R("strong", null, O(t.name), 1),
				R("span", ID, O(t.source === "inherited" ? "Inherited" : "Added"), 1),
				(F(!0), I(P, null, N(u(t), (e) => (F(), I("p", {
					key: e,
					class: D(["app:m-0 app:text-xs", A($)(l(t), "app:text-error", "app:text-warning")])
				}, O(e), 3))), 128))
			]), R("button", {
				disabled: e.isDisabled,
				class: "dui-btn dui-btn-error dui-btn-sm",
				title: `Remove ${t.name}`,
				type: "button",
				onClick: (e) => o(t)
			}, [...n[2] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), B(" Remove ", -1)]], 8, LD)], 2))), 128))])) : (F(), I("div", RD, [...n[3] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No Talents in the compiled list.", -1)]])),
			i.value.removedParentTalents.length > 0 ? (F(), I("div", zD, [n[5] ||= R("h4", null, "Removed Parent Talents", -1), R("div", BD, [(F(!0), I(P, null, N(i.value.removedParentTalents, (t) => (F(), I("button", {
				key: t,
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: `Restore ${t}`,
				type: "button",
				onClick: (e) => s(t)
			}, [n[4] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-rotate-left"
			}, null, -1), B(" " + O(t), 1)], 8, VD))), 128))])])) : V("", !0)
		])]));
	}
}), UD = /* @__PURE__ */ "@sb.@tb.@wpb.@sbMultiplier.@tbMultiplier.@wpbMultiplier.@scale.@size.@age.@height.@weight.@status.@rank.@xp.@fate.@fortune.@resilience.@resolve.@corruption.@sin.@advantage.@bleeding.@poisoned.@ablaze.@deafened.@stunned.@entangled.@fatigued.@blinded.@broken".split("."), WD = { class: "dui-card dui-card-border dui-card-sm" }, GD = { class: "dui-card-body" }, KD = { class: "dui-fieldset" }, qD = { class: "dui-collapse dui-collapse-arrow" }, JD = { class: "dui-collapse-content" }, YD = { "aria-label": "Wound formula keywords" }, XD = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], ZD = {
	key: 0,
	id: "species-wound-formula-errors"
}, QD = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, $D = /* @__PURE__ */ M({
	__name: "SpeciesBuilderWoundsTab",
	props: {
		formula: {},
		generatedTraitName: {},
		isDisabled: { type: Boolean },
		issues: {}
	},
	emits: ["updateWoundFormula"],
	setup(e, { emit: t }) {
		let n = e, r = t;
		function i(e) {
			return e.target instanceof HTMLTextAreaElement ? e.target.value : "";
		}
		function a() {
			return hC(n.issues, "woundFormula");
		}
		function o() {
			return SC(a());
		}
		return (t, n) => (F(), I("section", WD, [R("div", GD, [R("fieldset", KD, [
			n[3] ||= Ea("<legend class=\"dui-fieldset-legend\">Wound Calculation</legend><p class=\"dui-fieldset-label\"> Use <code>{Skill or Characteristic}</code> for a total value, <code>[Skill or Characteristic]</code> for its bonus, and <code>{Skill|Characteristic}</code> or <code>[Skill|Characteristic]</code> to base a skill on another characteristic. You can also use keywords such as <code>@tb</code>, <code>@scale</code>, and <code>@xp</code>. </p>", 2),
			R("details", qD, [n[2] ||= R("summary", { class: "dui-collapse-title" }, "Formula keyword guide", -1), R("div", JD, [n[1] ||= R("p", null, [
				B(" Keywords pull values from the current Actor during Wound calculation. Size uses "),
				R("code", null, "@size"),
				B(" as steps from Average and "),
				R("code", null, "@scale"),
				B(" as powers of two. ")
			], -1), R("div", YD, [(F(!0), I(P, null, N(A(UD), (e) => (F(), I("code", {
				key: e,
				class: "dui-badge"
			}, O(e), 1))), 128))])])]),
			n[4] ||= R("label", {
				class: "dui-label",
				for: "species-wound-formula"
			}, "Formula", -1),
			R("textarea", {
				id: "species-wound-formula",
				"aria-describedby": a().length ? "species-wound-formula-errors" : void 0,
				"aria-invalid": A(wC)(a()) || void 0,
				class: D(["dui-textarea app:w-full", A($)(a(), "dui-textarea-error", "dui-textarea-warning")]),
				disabled: e.isDisabled,
				value: e.formula ?? "",
				placeholder: "@sb * (1 + @sbMultiplier) + @tb * (2 + @tbMultiplier) + @wpb * (1 + @wpbMultiplier)",
				rows: "4",
				onInput: n[0] ||= (e) => r("updateWoundFormula", i(e))
			}, null, 42, XD),
			o().length ? (F(), I("div", ZD, [(F(!0), I(P, null, N(o(), (e) => (F(), I("p", {
				key: e,
				class: D(["app:m-0 app:text-xs", A($)(a(), "app:text-error", "app:text-warning")])
			}, O(e), 3))), 128))])) : V("", !0),
			e.generatedTraitName ? (F(), I("p", QD, " Generated Trait item: " + O(e.generatedTraitName), 1)) : V("", !0)
		])])]));
	}
}), eO = {
	id: "subspecies-editor-panel-wounds",
	"aria-label": "Subspecies wounds",
	"aria-labelledby": "subspecies-editor-tab-wounds",
	role: "tabpanel"
}, tO = {
	key: 0,
	class: "app:mb-2 app:flex app:justify-end"
}, nO = /* @__PURE__ */ M({
	__name: "SubspeciesWoundsPanel",
	props: {
		formula: {},
		generatedTraitName: {},
		isDisabled: { type: Boolean },
		issues: {},
		standalone: { type: Boolean }
	},
	emits: ["openFormulaBuilder", "updateWoundFormula"],
	setup(e) {
		return (t, n) => (F(), I("section", eO, [e.standalone ? (F(), I("div", tO, [R("button", {
			class: "dui-btn dui-btn-sm",
			type: "button",
			onClick: n[0] ||= (e) => t.$emit("openFormulaBuilder")
		}, [...n[2] ||= [R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-wand-magic-sparkles"
		}, null, -1), B(" Open Formula Builder ", -1)]])])) : V("", !0), z($D, {
			formula: e.formula,
			"generated-trait-name": e.generatedTraitName,
			"is-disabled": e.isDisabled,
			issues: e.issues,
			onUpdateWoundFormula: n[1] ||= (e) => t.$emit("updateWoundFormula", e)
		}, null, 8, [
			"formula",
			"generated-trait-name",
			"is-disabled",
			"issues"
		])]));
	}
}), rO = ["aria-busy"], iO = {
	key: 1,
	class: "dui-modal-backdrop",
	method: "dialog"
}, aO = /* @__PURE__ */ M({
	__name: "SubspeciesEditorSubView",
	props: {
		index: {},
		initialTab: { default: "details" },
		initialTableTab: { default: "careerTable" },
		isLoading: { type: Boolean },
		isOpen: { type: Boolean },
		isReadOnly: { type: Boolean },
		isSaving: { type: Boolean },
		issues: {},
		parentDefinition: {},
		parentTalents: {},
		randomTalentSources: {},
		subspecies: {},
		standalone: {
			type: Boolean,
			default: !1
		},
		validationNavigationRequest: { default: void 0 },
		woundFormulaTraitName: {}
	},
	emits: [
		"close",
		"delete",
		"openItem",
		"openWoundFormula",
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
		let n = e, r = t, i = /* @__PURE__ */ k(n.initialTab), a = /* @__PURE__ */ k(n.initialTableTab), o = /* @__PURE__ */ k(-1), s = /* @__PURE__ */ k(), c = Sh(), l = wm(), u = H(() => n.isLoading || n.isSaving), d = H(() => u.value || n.isReadOnly), f = H(() => l.blockingValidationIssues.length > 0 || l.blockingSpeciesTableValidationMessages.length > 0), p = H(() => l.validationIssues.some((e) => e.severity === "warning"));
		function m(e, t) {
			e !== "careerReplacements" && r("updateTextMapField", n.index, e, t);
		}
		function h(e) {
			return xD(n.issues, e);
		}
		function g() {
			n.standalone ? r("close") : s.value instanceof HTMLDialogElement && s.value.close();
		}
		function _() {
			n.isOpen && r("close"), c.restore();
		}
		return Xn(() => n.isOpen, async (e) => {
			if (n.standalone) {
				i.value = n.initialTab, a.value = n.initialTableTab;
				return;
			}
			if (e) {
				let e = n.validationNavigationRequest, t = e?.sequence === o.value ? void 0 : ig(e, n.index);
				o.value = e?.sequence ?? o.value, i.value = t?.tab ?? "details", a.value = t?.tableTab ?? "careerTable", c.capture(), await jn(), n.isOpen && s.value instanceof HTMLDialogElement && !s.value.open && s.value.showModal();
			} else s.value instanceof HTMLDialogElement && s.value.open && s.value.close();
		}, {
			flush: "post",
			immediate: !0
		}), (t, n) => (F(), L(Hr(e.standalone ? "section" : "dialog"), {
			ref_key: "dialog",
			ref: s,
			class: D(e.standalone ? "app:flex app:flex-col app:gap-3" : "dui-modal"),
			"aria-labelledby": "species-builder-subspecies-title",
			onClose: _,
			onKeydown: $o(Zo(g, ["stop", "prevent"]), ["esc"]),
			onKeyup: n[19] ||= $o(Zo(() => {}, ["stop"]), ["esc"])
		}, {
			default: j(() => [e.subspecies ? (F(), I("div", {
				key: 0,
				class: D(e.standalone ? "app:flex app:flex-col app:gap-3" : "dui-modal-box app:max-w-5xl"),
				"aria-busy": u.value
			}, [
				e.standalone ? V("", !0) : (F(), L(vD, {
					key: 0,
					"is-busy": u.value,
					"is-read-only": e.isReadOnly,
					name: e.subspecies.name || "Untitled",
					onClose: g,
					onDelete: n[0] ||= (t) => r("delete", e.index)
				}, null, 8, [
					"is-busy",
					"is-read-only",
					"name"
				])),
				z(ED, {
					"active-tab": i.value,
					"is-busy": u.value,
					issues: e.issues,
					onSelect: n[1] ||= (e) => i.value = e
				}, null, 8, [
					"active-tab",
					"is-busy",
					"issues"
				]),
				i.value === "details" ? (F(), L(lD, {
					key: 1,
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
				])) : i.value === "talents" ? (F(), L(HD, {
					key: 2,
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
				])) : i.value === "changes" ? (F(), L(XE, {
					key: 3,
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
				])) : i.value === "wounds" ? (F(), L(nO, {
					key: 4,
					formula: e.subspecies.woundFormula?.formula,
					"generated-trait-name": e.woundFormulaTraitName,
					"is-disabled": d.value,
					issues: h("wounds"),
					standalone: e.standalone,
					onOpenFormulaBuilder: n[8] ||= (e) => r("openWoundFormula"),
					onUpdateWoundFormula: n[9] ||= (t) => r("updateWoundFormula", e.index, t)
				}, null, 8, [
					"formula",
					"generated-trait-name",
					"is-disabled",
					"issues",
					"standalone"
				])) : (F(), L(wE, {
					key: 5,
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
					onCareerTableCareerDrop: n[10] ||= (t, n) => r("careerTableCareerDrop", e.index, t, n),
					onCareerTableJournalDrop: n[11] ||= (t, n) => r("careerTableJournalDrop", e.index, t, n),
					onOpenItem: n[12] ||= (e) => r("openItem", e),
					onSelectTab: n[13] ||= (e) => a.value = e,
					onTalentReplacementReplacementDrop: n[14] ||= (t, n) => r("talentReplacementReplacementDrop", e.index, t, n),
					onTalentReplacementRolledDrop: n[15] ||= (t, n) => r("talentReplacementRolledDrop", e.index, t, n),
					onUpdate: m,
					onUpdateCareerTableRows: n[16] ||= (t) => r("updateCareerTableRows", e.index, t),
					onUpdateTalentReplacementRows: n[17] ||= (t) => r("updateTalentReplacementRows", e.index, t)
				}, null, 8, [
					"active-tab",
					"include-career-replacements",
					"is-disabled",
					"is-navigation-disabled",
					"issues",
					"random-talent-sources",
					"values"
				])),
				!e.standalone && !e.isReadOnly ? (F(), L(AE, {
					key: 6,
					"can-save": A(l).canSave,
					"entity-key": e.subspecies.key,
					"entity-name": e.subspecies.name || "Untitled Subspecies",
					"has-unsaved-changes": A(l).hasUnsavedChanges,
					"has-validation-errors": f.value,
					"has-validation-warnings": p.value,
					"is-loading": A(l).isLoading,
					"is-saving": A(l).isSaving,
					"load-error": A(l).loadError,
					onSave: n[18] ||= (e) => r("save")
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
				])) : V("", !0)
			], 10, rO)) : V("", !0), e.standalone ? V("", !0) : (F(), I("form", iO, [...n[20] ||= [R("button", {
				"aria-label": "Close subspecies editor",
				type: "submit"
			}, "Close", -1)]]))]),
			_: 1
		}, 40, ["class", "onKeydown"]));
	}
}), oO = /* @__PURE__ */ M({
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
		return (t, i) => (F(), L(aO, {
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
function sO(e, t) {
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
//#region src/view/apps/species-builder/tabs/species/components/SpeciesBuilderEntityRow.vue?vue&type=script&setup=true&lang.ts
var cO = ["aria-current"], lO = { class: "dui-list-col-grow app:flex app:min-w-0 app:flex-col app:gap-1" }, uO = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, dO = { class: "app:flex app:flex-wrap app:items-center app:gap-1" }, fO = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, pO = {
	key: 1,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, mO = ["title"], hO = { class: "app:sr-only" }, gO = ["aria-label", "disabled"], _O = /* @__PURE__ */ M({
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
		return (t, r) => (F(), I("li", {
			class: D(["dui-list-row", {
				"app:outline app:outline-1 app:outline-error": e.validationIndicator?.severity === "error",
				"app:outline app:outline-1 app:outline-warning": e.validationIndicator?.severity === "warning"
			}]),
			"aria-current": e.isSelected ? "true" : void 0
		}, [
			R("i", {
				"aria-hidden": "true",
				class: D(e.iconClass)
			}, null, 2),
			R("span", lO, [R("span", uO, [R("strong", null, O(e.title), 1), R("span", { class: D(["dui-badge dui-badge-outline dui-badge-sm", {
				"dui-badge-info": e.isSelected,
				"dui-badge-ghost": !e.isSelected
			}]) }, O(e.entryKey), 3)]), R("span", dO, [
				e.isReadOnly ? (F(), I("span", fO, [r[1] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-lock"
				}, null, -1), B(" " + O(e.readOnlyLabel), 1)])) : V("", !0),
				e.meta ? (F(), I("span", pO, O(e.meta), 1)) : V("", !0),
				e.validationIndicator ? (F(), I("span", {
					key: 2,
					class: D(["dui-badge dui-badge-sm", e.validationIndicator.severity === "error" ? "dui-badge-error" : "dui-badge-warning"]),
					title: A(Zh)(e.validationIndicator)
				}, [
					R("span", {
						"aria-hidden": "true",
						class: D(["dui-status dui-status-xs", e.validationIndicator.severity === "error" ? "dui-status-error" : "dui-status-warning"])
					}, null, 2),
					B(" " + O(e.validationIndicator.count) + " ", 1),
					R("span", hO, O(A(Zh)(e.validationIndicator)), 1)
				], 10, mO)) : V("", !0)
			])]),
			R("button", {
				"aria-label": `${e.actionLabel}: ${e.title}`,
				class: "dui-btn dui-btn-outline dui-btn-sm",
				disabled: e.isDisabled,
				type: "button",
				onClick: r[0] ||= (e) => n("open")
			}, [R("i", {
				"aria-hidden": "true",
				class: D(e.editIconClass)
			}, null, 2), B(" " + O(e.actionLabel), 1)], 8, gO)
		], 10, cO));
	}
}), vO = { class: "dui-card dui-card-border dui-card-sm" }, yO = { class: "dui-card-body" }, bO = { class: "app:flex app:items-start app:justify-between app:gap-4" }, xO = { class: "dui-card-actions app:items-center" }, SO = ["disabled"], CO = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "note"
}, wO = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, TO = {
	key: 2,
	"aria-labelledby": "custom-variants-heading"
}, EO = { class: "app:flex app:items-center app:justify-between app:gap-2" }, DO = { class: "dui-badge dui-badge-sm" }, OO = {
	key: 0,
	class: "dui-alert",
	role: "status"
}, kO = {
	key: 1,
	class: "dui-list"
}, AO = {
	key: 3,
	"aria-labelledby": "installed-variants-heading"
}, jO = { class: "app:flex app:items-center app:justify-between app:gap-2" }, MO = { class: "dui-badge dui-badge-ghost dui-badge-sm" }, NO = { class: "dui-list" }, PO = {
	key: 4,
	class: "dui-alert",
	role: "status"
}, FO = {
	key: 5,
	class: "dui-list"
}, IO = /* @__PURE__ */ M({
	__name: "SubspeciesSection",
	props: {
		definition: {},
		isLoading: { type: Boolean },
		isSaving: { type: Boolean },
		validationIndicators: {}
	},
	emits: ["addSubspecies", "editSubspecies"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = H(() => n.definition.subspecies ?? []), a = H(() => i.value.slice(0, n.definition.runtimeSubspeciesCount)), o = H(() => i.value.slice(n.definition.runtimeSubspeciesCount)), s = H(() => !n.isLoading && !n.isSaving && !n.definition.runtimeUnavailable);
		function c(e) {
			return e.name.trim() || e.key.trim() || "Untitled Subspecies";
		}
		function l(e) {
			return e.key.trim() || yw(e);
		}
		return (t, n) => (F(), I("section", vO, [R("div", yO, [
			R("header", bO, [n[2] ||= R("div", null, [R("h3", { class: "dui-card-title" }, "Subspecies"), R("p", { class: "app:m-0" }, "Variants inherit this species and store only their changes.")], -1), R("div", xO, [R("button", {
				class: "dui-btn dui-btn-primary dui-btn-sm",
				disabled: !s.value,
				type: "button",
				onClick: n[0] ||= (e) => r("addSubspecies")
			}, [...n[1] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), B(" New Subspecies ", -1)]], 8, SO)])]),
			e.definition.origin === "runtime" && !e.definition.runtimeUnavailable ? (F(), I("div", CO, [...n[3] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-lock"
			}, null, -1), R("span", null, " Installed variants are read-only. New subspecies are saved by this module without changing the installed parent species. ", -1)]])) : V("", !0),
			e.definition.runtimeUnavailable ? (F(), I("div", wO, [...n[4] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-triangle-exclamation"
			}, null, -1), R("span", null, " The installed parent species is currently unavailable. Saved custom variants are being preserved, but new variants cannot be added until the source returns. ", -1)]])) : V("", !0),
			e.definition.origin === "runtime" ? (F(), I("section", TO, [R("header", EO, [n[5] ||= R("div", null, [R("h4", {
				id: "custom-variants-heading",
				class: "dui-card-title"
			}, "Custom Additions"), R("p", { class: "app:m-0" }, "Editable variants owned by this world.")], -1), R("span", DO, O(o.value.length), 1)]), o.value.length === 0 ? (F(), I("div", OO, [...n[6] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No custom variants yet. Add one without altering the installed species.", -1)]])) : (F(), I("ul", kO, [(F(!0), I(P, null, N(o.value, (t, n) => (F(), L(_O, {
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
			]))), 128))]))])) : V("", !0),
			a.value.length > 0 ? (F(), I("section", AO, [R("header", jO, [n[7] ||= R("div", null, [R("h4", {
				id: "installed-variants-heading",
				class: "dui-card-title"
			}, "Installed Variants"), R("p", { class: "app:m-0" }, "Provided by WFRP or an active module.")], -1), R("span", MO, O(a.value.length), 1)]), R("ul", NO, [(F(!0), I(P, null, N(a.value, (t, n) => (F(), L(_O, {
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
			]))), 128))])])) : V("", !0),
			e.definition.origin === "custom" && i.value.length === 0 ? (F(), I("div", PO, [...n[8] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No subspecies yet.", -1)]])) : e.definition.origin === "custom" ? (F(), I("ul", FO, [(F(!0), I(P, null, N(i.value, (t, n) => (F(), L(_O, {
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
			]))), 128))])) : V("", !0)
		])]));
	}
}), LO = /* @__PURE__ */ M({
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
	emits: /* @__PURE__ */ "addSubspecies.careerTableCareerDrop.careerTableJournalDrop.careerReplacementChoiceDrop.careerReplacementRolledDrop.deleteSubspecies.openItem.reviewIssues.save.subspeciesTalentDrop.subspeciesTalentReplacementReplacementDrop.subspeciesTalentReplacementRolledDrop.talentReplacementReplacementDrop.talentReplacementRolledDrop.updateBooleanField.updateCareerReplacementRows.updateCareerTableRows.updateCharacteristic.updateHeightField.updateNumberField.updateStringField.updateWoundFormula.updateSubspeciesArrayField.updateSubspeciesCharacteristic.updateSubspeciesNumberField.updateSubspeciesStringField.updateSubspeciesCareerTableRows.subspeciesCareerTableCareerDrop.subspeciesCareerTableJournalDrop.updateSubspeciesWoundFormula.updateSubspeciesTalentReplacementRows.updateSubspeciesTextMapField.updateTalentReplacementRows.updateTextMapField".split("."),
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ k(-1), a = /* @__PURE__ */ k(null), o = H(() => n.definition.subspecies?.[i.value]), s = H(() => n.definition.origin === "runtime"), c = H(() => n.isLoading || n.isSaving || s.value), l = H(() => n.definition.origin === "runtime" && i.value >= 0 && i.value < n.definition.runtimeSubspeciesCount), u = H(() => Cd(xd(n.definition.talents, n.definition.linkedTalents))), d = H(() => Qc(n.definition)), f = H(() => {
			let e = o.value;
			return e ? $c(n.definition, e) : "";
		}), p = H(() => n.issues.filter((e) => e.scope === "definition")), m = H(() => n.issues.filter((e) => e.scope === "subspecies" && e.subspeciesIndex === i.value)), h = H(() => (n.definition.subspecies ?? []).map((e, t) => Xh(n.issues.filter((e) => e.scope === "subspecies" && e.subspeciesIndex === t)))), g = H(() => n.activeEditorTab === "skills" || n.activeEditorTab === "talents" || n.activeEditorTab === "traits" ? [n.activeEditorTab] : []);
		Xn(() => n.definition.key, () => {
			i.value = -1;
		}), Xn(() => n.definition.subspecies?.length ?? 0, (e) => {
			i.value >= e && (i.value = -1);
		}), Xn(() => n.validationNavigationRequest, async (e) => {
			e?.destination.kind === "subspecies" && await v(e.destination.subspeciesIndex);
		}, { flush: "post" });
		async function _() {
			let e = n.definition.subspecies?.length ?? 0;
			r("addSubspecies"), await jn(), await v(e);
		}
		async function v(e) {
			i.value = e, await jn(), x();
		}
		function y(e) {
			r("deleteSubspecies", e), i.value = -1;
		}
		let b = sO(r, {
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
		return (t, n) => (F(), I("section", {
			ref_key: "detailPanelElement",
			ref: a
		}, [z(oO, Aa({
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
		}, qr(A(b))), null, 16, [
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
		]), e.activeEditorTab === "details" ? (F(), L(Yw, {
			key: 0,
			id: "species-editor-panel-details",
			"aria-label": "Species details",
			definition: e.definition,
			"is-disabled": c.value,
			issues: p.value,
			role: "region",
			onReviewIssues: n[0] ||= (e) => r("reviewIssues"),
			onUpdateBooleanField: n[1] ||= (e, t) => r("updateBooleanField", e, t),
			onUpdateHeightField: n[2] ||= (e, t) => r("updateHeightField", e, t),
			onUpdateStringField: n[3] ||= (e, t) => r("updateStringField", e, t)
		}, null, 8, [
			"definition",
			"is-disabled",
			"issues"
		])) : e.activeEditorTab === "attributes" ? (F(), L(_w, {
			key: 1,
			id: "species-editor-panel-attributes",
			"aria-label": "Species attributes",
			definition: e.definition,
			"is-disabled": c.value,
			issues: p.value,
			role: "region",
			onUpdateCharacteristic: n[4] ||= (e, t) => r("updateCharacteristic", e, t),
			onUpdateNumberField: n[5] ||= (e, t) => r("updateNumberField", e, t)
		}, null, 8, [
			"definition",
			"is-disabled",
			"issues"
		])) : e.activeEditorTab === "wounds" ? (F(), L($D, {
			key: 2,
			id: "species-editor-panel-wounds",
			"aria-label": "Species wounds",
			formula: e.definition.woundFormula?.formula,
			"generated-trait-name": d.value,
			"is-disabled": c.value,
			issues: p.value,
			role: "region",
			onUpdateWoundFormula: n[6] ||= (e) => r("updateWoundFormula", e)
		}, null, 8, [
			"formula",
			"generated-trait-name",
			"is-disabled",
			"issues"
		])) : g.value.length > 0 ? (F(), L(ZC, {
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
		])) : e.activeEditorTab === "tables" ? (F(), L(wE, {
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
			onCareerTableCareerDrop: n[7] ||= (e, t) => r("careerTableCareerDrop", e, t),
			onCareerTableJournalDrop: n[8] ||= (e, t) => r("careerTableJournalDrop", e, t),
			onCareerReplacementChoiceDrop: n[9] ||= (e, t, n) => r("careerReplacementChoiceDrop", e, t, n),
			onCareerReplacementRolledDrop: n[10] ||= (e, t) => r("careerReplacementRolledDrop", e, t),
			onOpenItem: n[11] ||= (e) => r("openItem", e),
			onTalentReplacementReplacementDrop: n[12] ||= (e, t) => r("talentReplacementReplacementDrop", e, t),
			onTalentReplacementRolledDrop: n[13] ||= (e, t) => r("talentReplacementRolledDrop", e, t),
			onUpdate: n[14] ||= (e, t) => r("updateTextMapField", e, t),
			onUpdateCareerTableRows: n[15] ||= (e) => r("updateCareerTableRows", e),
			onUpdateCareerReplacementRows: n[16] ||= (e) => r("updateCareerReplacementRows", e),
			onUpdateTalentReplacementRows: n[17] ||= (e) => r("updateTalentReplacementRows", e)
		}, null, 8, [
			"active-tab",
			"is-disabled",
			"issues",
			"random-talent-sources",
			"values"
		])) : (F(), L(IO, {
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
}), RO = ["aria-busy"], zO = { class: "app:flex app:flex-1 app:flex-col app:gap-3 app:p-3" }, BO = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, VO = ["disabled"], HO = ["disabled"], UO = { class: "app:max-w-full app:overflow-x-auto" }, WO = {
	"aria-label": "Species editor sections",
	class: "dui-tabs dui-tabs-box app:min-w-max",
	role: "tablist"
}, GO = ["disabled", "onClick"], KO = ["title"], qO = { class: "app:sr-only" }, JO = {
	key: 0,
	class: "dui-tabs dui-tabs-border",
	role: "tablist",
	"aria-label": "Species table sections"
}, YO = ["onClick"], XO = {
	key: 1,
	class: "app:flex app:justify-end"
}, ZO = {
	key: 4,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, QO = /* @__PURE__ */ M({
	__name: "SpeciesEditorApp",
	props: {
		bridge: {},
		definitionIndex: {},
		initialTab: {},
		initialTableTab: {},
		onOpenDirectory: { type: Function },
		onOpenIssues: { type: Function },
		onOpenSubspecies: { type: Function },
		onOpenWoundFormula: { type: Function },
		onSettingsSaved: { type: Function }
	},
	setup(e) {
		let t = e, n = Tm(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = /* @__PURE__ */ k(t.initialTab), i = /* @__PURE__ */ k(t.initialTableTab), a = /* @__PURE__ */ k(), o = Jh(n), s = VS({
			deleteDefinition: n.deleteSelectedDefinition,
			deleteSubspecies: n.deleteSubspecies,
			selectedDefinition: n.selectedDefinition
		}), c = H(() => n.definitions.value[t.definitionIndex]), l = H(() => n.validationIssues.value.filter((e) => e.definitionIndex === t.definitionIndex)), u = H(() => l.value.filter((e) => e.severity === "error").length), d = H(() => l.value.length - u.value), f = H(() => n.isLoading.value || n.isSaving.value), p = H(() => Ml(n.definitions.value).map(({ key: e }) => e)), m = H(() => (c.value?.subspecies ?? []).map((e, t) => Xh(l.value.filter((e) => e.scope === "subspecies" && e.subspeciesIndex === t)))), h = [
			{
				icon: "fa-solid fa-id-card",
				label: "Details",
				tab: "details"
			},
			{
				icon: "fa-solid fa-chart-simple",
				label: "Attributes",
				tab: "attributes"
			},
			{
				icon: "fa-solid fa-heart-pulse",
				label: "Wounds",
				tab: "wounds"
			},
			{
				icon: "fa-solid fa-book-open",
				label: "Skills",
				tab: "skills"
			},
			{
				icon: "fa-solid fa-star",
				label: "Talents",
				tab: "talents"
			},
			{
				icon: "fa-solid fa-dna",
				label: "Traits",
				tab: "traits"
			},
			{
				icon: "fa-solid fa-code-branch",
				label: "Subspecies",
				tab: "subspecies"
			},
			{
				icon: "fa-solid fa-table",
				label: "Tables",
				tab: "tables"
			}
		], g = [
			{
				label: "Careers",
				tab: "careerTable"
			},
			{
				label: "Random Talents",
				tab: "randomTalents"
			},
			{
				label: "Talent Swaps",
				tab: "talentReplacement"
			},
			{
				label: "Career Swaps",
				tab: "careerReplacement"
			}
		], _ = new Set(g.map(({ tab: e }) => e)), v = {
			...US(n, {
				requestDeleteSubspecies: s.requestDeleteSubspecies,
				requestSave: o.requestSave
			}),
			reviewIssues: t.onOpenIssues
		};
		jr(async () => {
			await n.ensureSettingsLoaded(), n.selectDefinition(t.definitionIndex);
		});
		function y() {
			return c.value?.name.trim() || c.value?.key.trim() || "Untitled Species";
		}
		function b(e) {
			return Xh(l.value.filter((t) => e === "subspecies" ? t.scope === "subspecies" : e === "tables" ? _.has(t.section) : t.scope === "definition" && t.section === e));
		}
		function x(e) {
			return Xh(l.value.filter((t) => t.section === e));
		}
		function S() {
			let e = c.value?.subspecies?.length ?? 0;
			n.addSubspecies(), t.onOpenSubspecies(e);
		}
		function C() {
			s.confirmPendingDelete(), t.onOpenDirectory();
		}
		return (t, _) => (F(), I("section", {
			class: "app:flex app:min-h-full app:flex-col",
			"aria-busy": f.value
		}, [
			z(Eg, {
				"can-save": A(n).canSave.value,
				context: c.value?.origin === "runtime" ? "Installed species" : "Custom species",
				"error-count": u.value,
				"has-unsaved-changes": A(n).hasUnsavedChanges.value,
				"is-busy": f.value,
				title: y(),
				"warning-count": d.value,
				onOpenIssues: e.onOpenIssues,
				onOpenParent: e.onOpenDirectory,
				onReload: A(n).loadSettings,
				onSave: A(o).requestSave
			}, null, 8, [
				"can-save",
				"context",
				"error-count",
				"has-unsaved-changes",
				"is-busy",
				"title",
				"warning-count",
				"onOpenIssues",
				"onOpenParent",
				"onReload",
				"onSave"
			]),
			z(BS, {
				message: A(s).pendingDelete.value?.message,
				onClose: _[0] ||= (e) => A(s).pendingDelete.value = null,
				onConfirm: C
			}, null, 8, ["message"]),
			z(qh, {
				"is-open": A(o).isConfirmationOpen.value,
				onClose: A(o).closeConfirmation,
				onConfirm: A(o).confirmSave
			}, null, 8, [
				"is-open",
				"onClose",
				"onConfirm"
			]),
			R("div", {
				ref_key: "portabilityHost",
				ref: a
			}, null, 512),
			R("main", zO, [
				z(jm, {
					"chargen-error-count": u.value,
					"chargen-warning-count": d.value,
					"load-error": A(n).loadError.value || A(n).saveError.value,
					message: A(n).message.value,
					"validation-message": "",
					onReviewIssues: e.onOpenIssues
				}, null, 8, [
					"chargen-error-count",
					"chargen-warning-count",
					"load-error",
					"message",
					"onReviewIssues"
				]),
				R("div", BO, [
					z(Uh, {
						"button-class": "dui-btn dui-btn-sm",
						definition: c.value?.origin === "custom" ? c.value : void 0,
						"dialog-host": a.value,
						"existing-keys": p.value,
						"is-disabled": f.value,
						"is-import-only": c.value?.origin !== "custom",
						onImportDefinition: A(n).addDefinition
					}, null, 8, [
						"definition",
						"dialog-host",
						"existing-keys",
						"is-disabled",
						"is-import-only",
						"onImportDefinition"
					]),
					c.value?.origin === "custom" ? (F(), I("button", {
						key: 0,
						class: "dui-btn dui-btn-sm",
						disabled: f.value,
						type: "button",
						onClick: _[1] ||= (...e) => A(n).duplicateSelectedDefinition && A(n).duplicateSelectedDefinition(...e)
					}, [..._[4] ||= [R("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-copy"
					}, null, -1), B(" Duplicate ", -1)]], 8, VO)) : V("", !0),
					c.value?.origin === "custom" ? (F(), I("button", {
						key: 1,
						class: "dui-btn dui-btn-error dui-btn-outline dui-btn-sm",
						disabled: f.value,
						type: "button",
						onClick: _[2] ||= (...e) => A(s).requestDeleteDefinition && A(s).requestDeleteDefinition(...e)
					}, [..._[5] ||= [R("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-trash"
					}, null, -1), B(" Delete ", -1)]], 8, HO)) : V("", !0)
				]),
				R("div", UO, [R("div", WO, [(F(), I(P, null, N(h, (e) => R("button", {
					key: e.tab,
					class: D(["dui-tab", { "dui-tab-active": r.value === e.tab }]),
					disabled: f.value,
					role: "tab",
					type: "button",
					onClick: (t) => r.value = e.tab
				}, [
					R("i", {
						"aria-hidden": "true",
						class: D(e.icon)
					}, null, 2),
					B(" " + O(e.label) + " ", 1),
					b(e.tab) ? (F(), I("span", {
						key: 0,
						class: D(["dui-status dui-status-sm", b(e.tab)?.severity === "error" ? "dui-status-error" : "dui-status-warning"]),
						title: A(Zh)(b(e.tab))
					}, [R("span", qO, O(A(Zh)(b(e.tab))), 1)], 10, KO)) : V("", !0)
				], 10, GO)), 64))])]),
				r.value === "tables" ? (F(), I("div", JO, [(F(), I(P, null, N(g, (e) => R("button", {
					key: e.tab,
					class: D(["dui-tab", { "dui-tab-active": i.value === e.tab }]),
					role: "tab",
					type: "button",
					onClick: (t) => i.value = e.tab
				}, [B(O(e.label) + " ", 1), x(e.tab) ? (F(), I("span", {
					key: 0,
					class: D(["dui-status dui-status-sm", x(e.tab)?.severity === "error" ? "dui-status-error" : "dui-status-warning"])
				}, null, 2)) : V("", !0)], 10, YO)), 64))])) : V("", !0),
				r.value === "wounds" ? (F(), I("div", XO, [R("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: _[3] ||= (...t) => e.onOpenWoundFormula && e.onOpenWoundFormula(...t)
				}, [..._[6] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-wand-magic-sparkles"
				}, null, -1), B(" Open Formula Builder ", -1)]])])) : V("", !0),
				c.value && r.value === "subspecies" ? (F(), L(IO, {
					key: 2,
					definition: c.value,
					"is-loading": A(n).isLoading.value,
					"is-saving": A(n).isSaving.value,
					"validation-indicators": m.value,
					onAddSubspecies: S,
					onEditSubspecies: e.onOpenSubspecies
				}, null, 8, [
					"definition",
					"is-loading",
					"is-saving",
					"validation-indicators",
					"onEditSubspecies"
				])) : c.value ? (F(), L(LO, Aa({
					key: 3,
					"active-editor-tab": r.value,
					"active-table-tab": i.value,
					definition: c.value,
					"is-loading": A(n).isLoading.value,
					"is-saving": A(n).isSaving.value,
					issues: l.value,
					"random-talent-sources": A(n).randomTalentSources.value
				}, qr(v)), null, 16, [
					"active-editor-tab",
					"active-table-tab",
					"definition",
					"is-loading",
					"is-saving",
					"issues",
					"random-talent-sources"
				])) : (F(), I("div", ZO, [..._[7] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-triangle-exclamation"
				}, null, -1), R("span", null, "This species is no longer available. Return to the Species List.", -1)]]))
			])
		], 8, RO));
	}
}), $O = class extends PS {
	navigation;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${Y}-species-editor`,
		classes: [Y, "wfrp4e-customizer-species-editor"],
		position: {
			height: 760,
			width: 920
		},
		window: {
			icon: "fa-solid fa-pen-to-square",
			resizable: !0,
			title: "Edit WFRP4e Species"
		}
	};
	#e = 0;
	#t = "details";
	#n = "careerTable";
	constructor(e) {
		super(), this.navigation = e;
	}
	open(e, t = "details", n = "careerTable") {
		return this.#e = e, this.#t = t, this.#n = n, this.render(!0);
	}
	getVueComponent() {
		return QO;
	}
	getApplicationProps() {
		return {
			definitionIndex: this.#e,
			initialTab: this.#t,
			initialTableTab: this.#n,
			onOpenDirectory: this.navigation.openDirectory,
			onOpenIssues: () => this.navigation.openIssues(this.#e),
			onOpenSubspecies: (e) => this.navigation.openSubspecies(this.#e, e),
			onOpenWoundFormula: () => this.navigation.openWoundFormula(this.#e)
		};
	}
}, ek = ["aria-busy"], tk = { class: "app:flex app:flex-1 app:flex-col app:gap-3 app:p-3" }, nk = {
	key: 0,
	class: "dui-alert dui-alert-success",
	role: "status"
}, rk = {
	key: 1,
	class: "dui-list app:gap-1"
}, ik = ["onClick"], ak = { class: "app:flex app:min-w-0 app:flex-1 app:flex-col app:items-start" }, ok = /* @__PURE__ */ M({
	__name: "SpeciesIssuesApp",
	props: {
		bridge: {},
		definitionIndex: {},
		onOpenDirectory: { type: Function },
		onSelectIssue: { type: Function },
		onSettingsSaved: { type: Function }
	},
	setup(e) {
		let t = e, n = Tm(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = H(() => tg(n.validationIssues.value).filter((e) => t.definitionIndex === void 0 || e.definitionIndex === t.definitionIndex)), i = H(() => rg(r.value, n.definitions.value)), a = H(() => r.value.filter((e) => e.severity === "error").length), o = H(() => r.value.length - a.value), s = H(() => n.isLoading.value || n.isSaving.value), c = H(() => {
			let e = n.definitions.value[t.definitionIndex ?? -1];
			return e?.name.trim() || e?.key.trim();
		});
		return jr(() => void n.ensureSettingsLoaded()), (t, r) => (F(), I("section", {
			class: "app:flex app:min-h-full app:flex-col",
			"aria-busy": s.value
		}, [z(Eg, {
			context: c.value ? `${c.value} validation` : "All validation",
			"error-count": a.value,
			"is-busy": s.value,
			"show-issues": !1,
			"show-save": !1,
			title: c.value ? `${c.value} Issues` : "Species Issues",
			"warning-count": o.value,
			onOpenParent: e.onOpenDirectory,
			onReload: A(n).loadSettings
		}, null, 8, [
			"context",
			"error-count",
			"is-busy",
			"title",
			"warning-count",
			"onOpenParent",
			"onReload"
		]), R("main", tk, [R("div", {
			class: D(["dui-alert", a.value > 0 ? "dui-alert-error" : "dui-alert-warning"]),
			role: "status"
		}, [R("i", {
			"aria-hidden": "true",
			class: D(a.value > 0 ? "fa-solid fa-circle-exclamation" : "fa-solid fa-triangle-exclamation")
		}, null, 2), r[0] ||= R("span", null, " Errors identify data that blocks character creation. Warnings identify playable but incomplete data. Every issue below opens its exact editor. ", -1)], 2), i.value.length === 0 ? (F(), I("div", nk, [r[1] ||= R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-check"
		}, null, -1), R("span", null, O(c.value || "All species") + " currently has no validation issues.", 1)])) : (F(), I("ul", rk, [(F(!0), I(P, null, N(i.value, (t, n) => (F(), I("li", {
			key: `${t.issue.code}-${n}`,
			class: "dui-list-row app:p-0"
		}, [R("button", {
			class: D(["dui-btn dui-btn-outline app:h-auto app:w-full app:justify-start app:whitespace-normal app:p-3 app:text-left", t.issue.severity === "error" ? "dui-btn-error" : "dui-btn-warning"]),
			type: "button",
			onClick: (n) => e.onSelectIssue(t.issue)
		}, [
			R("i", {
				"aria-hidden": "true",
				class: D(t.issue.severity === "error" ? "fa-solid fa-circle-exclamation" : "fa-solid fa-triangle-exclamation")
			}, null, 2),
			R("span", ak, [R("strong", null, O(t.context), 1), R("span", null, O(t.issue.message), 1)]),
			r[2] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-arrow-up-right-from-square"
			}, null, -1)
		], 10, ik)]))), 128))]))])], 8, ek));
	}
}), sk = class extends PS {
	openDirectory;
	selectIssue;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${Y}-species-issues`,
		classes: [Y, "wfrp4e-customizer-species-issues"],
		position: {
			height: 640,
			width: 760
		},
		window: {
			icon: "fa-solid fa-triangle-exclamation",
			resizable: !0,
			title: "Species Validation Issues"
		}
	};
	#e;
	constructor(e, t) {
		super(), this.openDirectory = e, this.selectIssue = t;
	}
	open(e) {
		return this.#e = e, this.render(!0);
	}
	getVueComponent() {
		return ok;
	}
	getApplicationProps() {
		return {
			definitionIndex: this.#e,
			onOpenDirectory: this.openDirectory,
			onSelectIssue: this.selectIssue
		};
	}
}, ck = { class: "dui-card dui-card-border dui-card-sm" }, lk = { class: "dui-card-body" }, uk = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, dk = { class: "dui-badge dui-badge-sm" }, fk = { class: "app:text-base-content/70" }, pk = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "status"
}, mk = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, hk = ["role"], gk = {
	key: 3,
	class: "app:overflow-x-auto"
}, _k = { class: "dui-table dui-table-sm" }, vk = { scope: "row" }, yk = ["for"], bk = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onChange"
], xk = { value: "" }, Sk = ["disabled", "value"], Ck = ["id"], wk = ["for"], Tk = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], Ek = ["for"], Dk = [
	"disabled",
	"title",
	"onClick"
], Ok = { class: "app:sr-only" }, kk = {
	key: 4,
	class: "dui-alert dui-alert-info",
	role: "status"
}, Ak = /* @__PURE__ */ M({
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
		return (t, n) => (F(), I("section", ck, [R("div", lk, [
			z(nT, {
				"action-label": "Add Species",
				"action-title": "Add a weighted species result",
				count: e.draft.rows.length,
				description: "Weights set each species' share of random character-creation rolls.",
				"is-disabled": e.isDisabled,
				"heading-level": "h2",
				title: "Random Species Table",
				onAdd: n[0] ||= (e) => r("addRow")
			}, null, 8, ["count", "is-disabled"]),
			R("div", uk, [R("span", dk, O(h()), 1), R("span", fk, O(e.draft.name), 1)]),
			e.draft.ownership === "external" ? (F(), I("div", pk, [...n[1] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-copy"
			}, null, -1), R("span", null, " This is the current WFRP source table. On Save, table changes create a Species Builder-managed copy and leave the imported source unchanged. ", -1)]])) : V("", !0),
			e.draft.requiresLinkRepair ? (F(), I("div", mk, [...n[2] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-link-slash"
			}, null, -1), R("span", null, " One or more results lack WFRP's required UUID-link description. Save to generate or reuse species Journals and repair both the result name and link label. ", -1)]])) : V("", !0),
			f()[0] ? (F(), I("div", {
				key: 2,
				class: D(["dui-alert", p() ? "dui-alert-error" : "dui-alert-info"]),
				role: p() ? "alert" : "status"
			}, [n[3] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-triangle-exclamation"
			}, null, -1), R("span", null, [B(O(p() ? "Fix before saving:" : "Imported table needs attention:") + " " + O(f()[0]) + " ", 1), f().length > 1 ? (F(), I(P, { key: 0 }, [B(" (" + O(f().length) + " issues total) ", 1)], 64)) : V("", !0)])], 10, hk)) : V("", !0),
			e.draft.rows.length ? (F(), I("div", gk, [R("table", _k, [
				n[5] ||= R("caption", { class: "app:sr-only" }, " Weighted results for the world WFRP Species table ", -1),
				n[6] ||= R("thead", null, [R("tr", null, [
					R("th", { scope: "col" }, "#"),
					R("th", { scope: "col" }, "Species"),
					R("th", { scope: "col" }, "Weight"),
					R("th", { scope: "col" }, "Chance / range"),
					R("th", { scope: "col" }, [R("span", { class: "app:sr-only" }, "Actions")])
				])], -1),
				R("tbody", null, [(F(!0), I(P, null, N(e.draft.rows, (t, d) => (F(), I("tr", {
					key: t.resultId ?? `new-${d}`,
					class: D({ "app:outline app:outline-1 app:outline-error": u(d).length > 0 })
				}, [
					R("th", vk, O(d + 1), 1),
					R("td", null, [
						R("label", {
							class: "app:sr-only",
							for: `species-table-species-${d}`
						}, " Species for row " + O(d + 1), 9, yk),
						R("select", {
							id: `species-table-species-${d}`,
							"aria-describedby": l(t, d) ? `species-table-row-error-${d}` : void 0,
							"aria-invalid": s(t, d) || void 0,
							class: D(["dui-select dui-select-sm app:min-w-48 app:w-full", { "dui-select-error": s(t, d) }]),
							disabled: e.isDisabled,
							value: t.speciesKey,
							onChange: (e) => r("updateRowKey", d, i(e))
						}, [R("option", xk, O(t.name ? `Unrecognized: ${t.name}` : "Choose a species"), 1), (F(!0), I(P, null, N(e.options, (e) => (F(), I("option", {
							key: e.key,
							disabled: o(e.key, d),
							value: e.key
						}, O(e.label), 9, Sk))), 128))], 42, bk),
						l(t, d) ? (F(), I("span", {
							key: 0,
							id: `species-table-row-error-${d}`,
							class: "app:mt-1 app:block app:text-xs app:text-error"
						}, O(l(t, d)), 9, Ck)) : V("", !0)
					]),
					R("td", null, [R("label", {
						class: "app:sr-only",
						for: `species-table-weight-${d}`
					}, " Weight for row " + O(d + 1), 9, wk), R("input", {
						id: `species-table-weight-${d}`,
						"aria-describedby": l(t, d) ? `species-table-row-error-${d}` : void 0,
						"aria-invalid": c(t, d) || void 0,
						class: D(["dui-input dui-input-sm app:w-24", { "dui-input-error": c(t, d) }]),
						disabled: e.isDisabled,
						inputmode: "numeric",
						min: "1",
						step: "1",
						type: "number",
						value: t.weight,
						onInput: (e) => r("updateRowWeight", d, a(e))
					}, null, 42, Tk)]),
					R("td", null, [R("output", { for: `species-table-weight-${d}` }, O(m(e.summaries[d])), 9, Ek)]),
					R("td", null, [R("button", {
						class: "dui-btn dui-btn-error dui-btn-outline dui-btn-sm",
						disabled: e.isDisabled,
						title: `Remove ${t.name || `row ${d + 1}`}`,
						type: "button",
						onClick: (e) => r("removeRow", d)
					}, [n[4] ||= R("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-trash"
					}, null, -1), R("span", Ok, "Remove row " + O(d + 1), 1)], 8, Dk)])
				], 2))), 128))])
			])])) : (F(), I("div", kk, [...n[7] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "Add at least one species to create a managed world table.", -1)]]))
		])]));
	}
}), jk = ["aria-busy"], Mk = { class: "app:flex app:flex-1 app:flex-col app:gap-3 app:p-3" }, Nk = /* @__PURE__ */ M({
	__name: "SpeciesTableApp",
	props: {
		bridge: {},
		onOpenDirectory: { type: Function },
		onOpenIssues: { type: Function },
		onSettingsSaved: { type: Function }
	},
	setup(e) {
		let t = e, n = Tm(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = Jh(n), i = H(() => n.validationIssues.value.filter((e) => e.scope === "species-table")), a = H(() => i.value.filter((e) => e.severity === "error").length), o = H(() => i.value.length - a.value), s = H(() => n.isLoading.value || n.isSaving.value);
		return jr(() => void n.ensureSettingsLoaded()), (t, c) => (F(), I("section", {
			class: "app:flex app:min-h-full app:flex-col",
			"aria-busy": s.value
		}, [
			z(Eg, {
				"can-save": A(n).canSave.value,
				context: "World table",
				"error-count": a.value,
				"has-unsaved-changes": A(n).hasUnsavedChanges.value,
				"is-busy": s.value,
				title: "Random Species Table",
				"warning-count": o.value,
				onOpenIssues: e.onOpenIssues,
				onOpenParent: e.onOpenDirectory,
				onReload: A(n).loadSettings,
				onSave: A(r).requestSave
			}, null, 8, [
				"can-save",
				"error-count",
				"has-unsaved-changes",
				"is-busy",
				"warning-count",
				"onOpenIssues",
				"onOpenParent",
				"onReload",
				"onSave"
			]),
			z(qh, {
				"is-open": A(r).isConfirmationOpen.value,
				onClose: A(r).closeConfirmation,
				onConfirm: A(r).confirmSave
			}, null, 8, [
				"is-open",
				"onClose",
				"onConfirm"
			]),
			R("main", Mk, [z(jm, {
				"chargen-error-count": a.value,
				"chargen-warning-count": o.value,
				"load-error": A(n).loadError.value || A(n).saveError.value,
				message: A(n).message.value,
				"validation-message": A(n).blockingSpeciesTableValidationMessages.value[0] ?? "",
				onReviewIssues: e.onOpenIssues
			}, null, 8, [
				"chargen-error-count",
				"chargen-warning-count",
				"load-error",
				"message",
				"validation-message",
				"onReviewIssues"
			]), z(Ak, {
				draft: A(n).preparedSpeciesTable.value,
				"is-disabled": s.value,
				"is-validation-blocking": a.value > 0,
				issues: i.value,
				options: A(n).speciesTableOptions.value,
				summaries: A(n).speciesTableSummaries.value,
				"validation-messages": A(n).speciesTableValidationMessages.value,
				onAddRow: A(n).addSpeciesTableRow,
				onRemoveRow: A(n).removeSpeciesTableRow,
				onUpdateRowKey: A(n).updateSpeciesTableRowKey,
				onUpdateRowWeight: A(n).updateSpeciesTableRowWeight
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
			])])
		], 8, jk));
	}
}), Pk = class extends PS {
	openDirectory;
	openIssues;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${Y}-species-table-editor`,
		classes: [Y, "wfrp4e-customizer-species-table-editor"],
		position: {
			height: 690,
			width: 840
		},
		window: {
			icon: "fa-solid fa-dice-d20",
			resizable: !0,
			title: "WFRP4e Species Table"
		}
	};
	constructor(e, t) {
		super(), this.openDirectory = e, this.openIssues = t;
	}
	getVueComponent() {
		return Nk;
	}
	getApplicationProps() {
		return {
			onOpenDirectory: this.openDirectory,
			onOpenIssues: this.openIssues
		};
	}
}, Fk = ["aria-busy"], Ik = { class: "app:flex app:flex-1 app:flex-col app:gap-3 app:p-3" }, Lk = {
	key: 0,
	class: "app:flex app:justify-end"
}, Rk = ["disabled"], zk = {
	key: 2,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, Bk = /* @__PURE__ */ M({
	__name: "SubspeciesEditorApp",
	props: {
		bridge: {},
		definitionIndex: {},
		initialTab: {},
		initialTableTab: {},
		onOpenIssues: { type: Function },
		onOpenParent: { type: Function },
		onOpenWoundFormula: { type: Function },
		onSettingsSaved: { type: Function },
		subspeciesIndex: {}
	},
	setup(e) {
		let t = e, n = Tm(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = Jh(n), i = VS({
			deleteDefinition: n.deleteSelectedDefinition,
			deleteSubspecies: n.deleteSubspecies,
			selectedDefinition: n.selectedDefinition
		}), a = H(() => n.definitions.value[t.definitionIndex]), o = H(() => a.value?.subspecies?.[t.subspeciesIndex]), s = H(() => n.validationIssues.value.filter((e) => e.definitionIndex === t.definitionIndex && e.scope === "subspecies" && e.subspeciesIndex === t.subspeciesIndex)), c = H(() => s.value.filter((e) => e.severity === "error").length), l = H(() => s.value.length - c.value), u = H(() => n.isLoading.value || n.isSaving.value), d = H(() => a.value?.origin === "runtime" && t.subspeciesIndex < (a.value?.runtimeSubspeciesCount ?? 0)), f = H(() => Cd(xd(a.value?.talents, a.value?.linkedTalents))), p = H(() => {
			let e = a.value, t = o.value;
			return e && t ? $c(e, t) : "";
		});
		jr(async () => {
			await n.ensureSettingsLoaded(), n.selectDefinition(t.definitionIndex);
		});
		function m() {
			return o.value?.name.trim() || o.value?.key.trim() || "Untitled Subspecies";
		}
		function h() {
			return a.value?.name.trim() || a.value?.key.trim() || "Parent Species";
		}
		function g() {
			i.confirmPendingDelete(), t.onOpenParent();
		}
		return (t, _) => (F(), I("section", {
			class: "app:flex app:min-h-full app:flex-col",
			"aria-busy": u.value
		}, [
			z(Eg, {
				"can-save": A(n).canSave.value,
				context: `${h()} / ${m()}`,
				"error-count": c.value,
				"has-unsaved-changes": A(n).hasUnsavedChanges.value,
				"is-busy": u.value,
				"parent-label": h(),
				title: m(),
				"warning-count": l.value,
				onOpenIssues: e.onOpenIssues,
				onOpenParent: e.onOpenParent,
				onReload: A(n).loadSettings,
				onSave: A(r).requestSave
			}, null, 8, [
				"can-save",
				"context",
				"error-count",
				"has-unsaved-changes",
				"is-busy",
				"parent-label",
				"title",
				"warning-count",
				"onOpenIssues",
				"onOpenParent",
				"onReload",
				"onSave"
			]),
			z(BS, {
				message: A(i).pendingDelete.value?.message,
				onClose: _[0] ||= (e) => A(i).pendingDelete.value = null,
				onConfirm: g
			}, null, 8, ["message"]),
			z(qh, {
				"is-open": A(r).isConfirmationOpen.value,
				onClose: A(r).closeConfirmation,
				onConfirm: A(r).confirmSave
			}, null, 8, [
				"is-open",
				"onClose",
				"onConfirm"
			]),
			R("main", Ik, [
				z(jm, {
					"chargen-error-count": c.value,
					"chargen-warning-count": l.value,
					"load-error": A(n).loadError.value || A(n).saveError.value,
					message: A(n).message.value,
					"validation-message": "",
					onReviewIssues: e.onOpenIssues
				}, null, 8, [
					"chargen-error-count",
					"chargen-warning-count",
					"load-error",
					"message",
					"onReviewIssues"
				]),
				!d.value && o.value ? (F(), I("div", Lk, [R("button", {
					class: "dui-btn dui-btn-error dui-btn-outline dui-btn-sm",
					disabled: u.value,
					type: "button",
					onClick: _[1] ||= (t) => A(i).requestDeleteSubspecies(e.subspeciesIndex)
				}, [..._[4] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), B(" Delete Subspecies ", -1)]], 8, Rk)])) : V("", !0),
				a.value && o.value ? (F(), L(aO, {
					key: 1,
					index: e.subspeciesIndex,
					"initial-tab": e.initialTab,
					"initial-table-tab": e.initialTableTab,
					"is-loading": A(n).isLoading.value,
					"is-open": "",
					"is-read-only": d.value,
					"is-saving": A(n).isSaving.value,
					issues: s.value,
					"parent-definition": a.value,
					"parent-talents": f.value,
					"random-talent-sources": A(n).randomTalentSources.value,
					standalone: "",
					subspecies: o.value,
					"wound-formula-trait-name": p.value,
					onCareerTableCareerDrop: A(n).setSubspeciesCareerTableCareerDrop,
					onCareerTableJournalDrop: A(n).setSubspeciesCareerTableJournalDrop,
					onClose: e.onOpenParent,
					onDelete: A(i).requestDeleteSubspecies,
					onOpenItem: A(n).openItemSheet,
					onOpenWoundFormula: e.onOpenWoundFormula,
					onSave: A(r).requestSave,
					onTalentDrop: A(n).appendSubspeciesTalentDrop,
					onTalentReplacementReplacementDrop: _[2] ||= (e, t, r) => A(n).setSubspeciesTalentReplacementDrop(e, t, "replacement", r),
					onTalentReplacementRolledDrop: _[3] ||= (e, t, r) => A(n).setSubspeciesTalentReplacementDrop(e, t, "rolled", r),
					onUpdateArrayField: A(n).updateSubspeciesArrayField,
					onUpdateCareerTableRows: A(n).updateSubspeciesCareerTableRows,
					onUpdateCharacteristic: A(n).updateSubspeciesCharacteristic,
					onUpdateNumberField: A(n).updateSubspeciesNumberField,
					onUpdateStringField: A(n).updateSubspeciesStringField,
					onUpdateTalentReplacementRows: A(n).updateSubspeciesTalentReplacementRows,
					onUpdateTextMapField: A(n).updateSubspeciesTextMapField,
					onUpdateWoundFormula: A(n).updateSubspeciesWoundFormula
				}, null, 8, /* @__PURE__ */ "index.initial-tab.initial-table-tab.is-loading.is-read-only.is-saving.issues.parent-definition.parent-talents.random-talent-sources.subspecies.wound-formula-trait-name.onCareerTableCareerDrop.onCareerTableJournalDrop.onClose.onDelete.onOpenItem.onOpenWoundFormula.onSave.onTalentDrop.onUpdateArrayField.onUpdateCareerTableRows.onUpdateCharacteristic.onUpdateNumberField.onUpdateStringField.onUpdateTalentReplacementRows.onUpdateTextMapField.onUpdateWoundFormula".split("."))) : (F(), I("div", zk, [_[5] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-triangle-exclamation"
				}, null, -1), R("span", null, "This subspecies is no longer available. Return to " + O(h()) + ".", 1)]))
			])
		], 8, Fk));
	}
}), Vk = class extends PS {
	navigation;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${Y}-subspecies-editor`,
		classes: [Y, "wfrp4e-customizer-subspecies-editor"],
		position: {
			height: 700,
			width: 860
		},
		window: {
			icon: "fa-solid fa-code-branch",
			resizable: !0,
			title: "Edit WFRP4e Subspecies"
		}
	};
	#e = 0;
	#t = "details";
	#n = "careerTable";
	#r = 0;
	constructor(e) {
		super(), this.navigation = e;
	}
	open(e, t, n = "details", r = "careerTable") {
		return this.#e = e, this.#r = t, this.#t = n, this.#n = r, this.render(!0);
	}
	getVueComponent() {
		return Bk;
	}
	getApplicationProps() {
		return {
			definitionIndex: this.#e,
			initialTab: this.#t,
			initialTableTab: this.#n,
			onOpenIssues: () => this.navigation.openIssues(this.#e),
			onOpenParent: () => this.navigation.openParent(this.#e),
			onOpenWoundFormula: () => this.navigation.openWoundFormula(this.#e, this.#r),
			subspeciesIndex: this.#r
		};
	}
}, Hk = { class: "dui-card dui-card-border dui-card-sm" }, Uk = { class: "dui-card-body" }, Wk = { class: "dui-mockup-code" }, Gk = { tabindex: "0" }, Kk = /* @__PURE__ */ M({
	__name: "WfrpConfigPanel",
	props: { generatedConfigText: {} },
	setup(e) {
		return (t, n) => (F(), I("section", Hk, [R("div", Uk, [
			n[0] ||= R("h2", { class: "dui-card-title" }, "WFRP Config", -1),
			n[1] ||= R("p", null, " Read-only config generated from the current draft. This view grows with the outer application scroll area. ", -1),
			R("div", Wk, [R("pre", Gk, [R("code", null, O(e.generatedConfigText), 1)])])
		])]));
	}
}), qk = ["aria-busy"], Jk = { class: "app:p-3" }, Yk = /* @__PURE__ */ M({
	__name: "WfrpConfigApp",
	props: {
		bridge: {},
		onOpenDirectory: { type: Function },
		onSettingsSaved: { type: Function }
	},
	setup(e) {
		let t = e, n = Tm(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = H(() => n.isLoading.value || n.isSaving.value);
		return jr(() => void n.ensureSettingsLoaded()), (t, i) => (F(), I("section", {
			class: "app:flex app:min-h-full app:flex-col",
			"aria-busy": r.value
		}, [z(Eg, {
			context: "Generated output",
			"is-busy": r.value,
			"show-issues": !1,
			"show-save": !1,
			title: "WFRP Config",
			onOpenParent: e.onOpenDirectory,
			onReload: A(n).loadSettings
		}, null, 8, [
			"is-busy",
			"onOpenParent",
			"onReload"
		]), R("main", Jk, [z(Kk, { "generated-config-text": A(n).generatedConfigText.value }, null, 8, ["generated-config-text"])])], 8, qk));
	}
}), Xk = class extends PS {
	openDirectory;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${Y}-species-wfrp-config`,
		classes: [Y, "wfrp4e-customizer-species-wfrp-config"],
		position: {
			height: 700,
			width: 800
		},
		window: {
			icon: "fa-solid fa-code",
			resizable: !0,
			title: "Generated WFRP Species Config"
		}
	};
	constructor(e) {
		super(), this.openDirectory = e;
	}
	getVueComponent() {
		return Yk;
	}
	getApplicationProps() {
		return { onOpenDirectory: this.openDirectory };
	}
}, Zk = ["aria-busy"], Qk = { class: "app:grid app:flex-1 app:gap-3 app:p-3 app:md:grid-cols-[minmax(0,1fr)_16rem]" }, $k = { class: "dui-card dui-card-border dui-card-sm app:min-w-0" }, eA = { class: "dui-card-body" }, tA = ["disabled", "value"], nA = { class: "app:m-0 app:pl-4" }, rA = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, iA = {
	class: "app:flex app:flex-col app:gap-3",
	"aria-label": "Formula tokens"
}, aA = { class: "dui-fieldset app:rounded-box app:border app:border-base-300 app:bg-base-200 app:p-3" }, oA = { class: "app:flex app:flex-wrap app:gap-1" }, sA = [
	"disabled",
	"onClick",
	"onDragstart"
], cA = { class: "dui-fieldset app:rounded-box app:border app:border-base-300 app:bg-base-200 app:p-3" }, lA = { class: "app:flex app:flex-wrap app:gap-1" }, uA = [
	"disabled",
	"onClick",
	"onDragstart"
], dA = /* @__PURE__ */ M({
	__name: "WoundFormulaApp",
	props: {
		bridge: {},
		definitionIndex: {},
		onOpenParent: { type: Function },
		onSettingsSaved: { type: Function },
		subspeciesIndex: {}
	},
	setup(e) {
		let t = e, n = Tm(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = Jh(n), i = /* @__PURE__ */ k(), a = H(() => n.definitions.value[t.definitionIndex]), o = H(() => a.value?.subspecies?.[t.subspeciesIndex ?? -1]), s = H(() => t.subspeciesIndex === void 0 ? a.value?.woundFormula?.formula ?? "" : o.value?.woundFormula?.formula ?? ""), c = H(() => n.validationIssues.value.filter((e) => e.definitionIndex === t.definitionIndex && e.field === "woundFormula" && (t.subspeciesIndex === void 0 ? e.scope === "definition" : e.scope === "subspecies" && e.subspeciesIndex === t.subspeciesIndex))), l = H(() => c.value.filter((e) => e.severity === "error").length), u = H(() => c.value.length - l.value), d = H(() => n.isLoading.value || n.isSaving.value), f = H(() => {
			let e = a.value;
			return !e || e.origin !== "runtime" ? !1 : t.subspeciesIndex === void 0 ? !0 : t.subspeciesIndex < (e.runtimeSubspeciesCount ?? 0);
		}), p = H(() => o.value?.name.trim() || a.value?.name.trim() || o.value?.key.trim() || a.value?.key.trim() || "Untitled Species"), m = H(() => {
			let e = a.value;
			return e ? o.value ? $c(e, o.value) : Qc(e) : "";
		}), h = [
			"{Strength}",
			"[Strength]",
			"{Toughness}",
			"[Toughness]",
			"{Willpower}",
			"[Willpower]"
		];
		jr(async () => {
			await n.ensureSettingsLoaded(), n.selectDefinition(t.definitionIndex);
		});
		function g(e) {
			t.subspeciesIndex === void 0 ? n.updateWoundFormula(e) : n.updateSubspeciesWoundFormula(t.subspeciesIndex, e);
		}
		async function _(e) {
			if (d.value || f.value) return;
			let t = i.value, n = t?.selectionStart ?? s.value.length, r = t?.selectionEnd ?? n, a = s.value.slice(0, n), o = s.value.slice(r), c = `${a && !a.endsWith(" ") ? " " : ""}${e}${o && !o.startsWith(" ") ? " " : ""}`;
			g(`${a}${c}${o}`), await jn(), t?.focus(), t?.setSelectionRange(n + c.length, n + c.length);
		}
		function v(e, t) {
			e.dataTransfer?.setData("text/plain", t), e.dataTransfer && (e.dataTransfer.effectAllowed = "copy");
		}
		function y(e) {
			let t = e.dataTransfer?.getData("text/plain");
			t && _(t);
		}
		function b(e) {
			return e.target instanceof HTMLTextAreaElement ? e.target.value : "";
		}
		return (t, a) => (F(), I("section", {
			class: "app:flex app:min-h-full app:flex-col",
			"aria-busy": d.value
		}, [
			z(Eg, {
				"can-save": A(n).canSave.value,
				context: `${p.value} / Wounds`,
				"error-count": l.value,
				"has-unsaved-changes": A(n).hasUnsavedChanges.value,
				"is-busy": d.value,
				"parent-label": p.value,
				"show-issues": !1,
				title: "Wound Formula Builder",
				"warning-count": u.value,
				onOpenParent: e.onOpenParent,
				onReload: A(n).loadSettings,
				onSave: A(r).requestSave
			}, null, 8, [
				"can-save",
				"context",
				"error-count",
				"has-unsaved-changes",
				"is-busy",
				"parent-label",
				"warning-count",
				"onOpenParent",
				"onReload",
				"onSave"
			]),
			z(qh, {
				"is-open": A(r).isConfirmationOpen.value,
				onClose: A(r).closeConfirmation,
				onConfirm: A(r).confirmSave
			}, null, 8, [
				"is-open",
				"onClose",
				"onConfirm"
			]),
			R("main", Qk, [R("section", $k, [R("div", eA, [
				a[4] ||= R("h2", { class: "dui-card-title" }, "Formula", -1),
				a[5] ||= R("p", { class: "app:m-0" }, " Click a token to insert it at the cursor, or drag it into the formula field. ", -1),
				a[6] ||= R("label", {
					class: "dui-label",
					for: "suite-wound-formula"
				}, "Wound calculation", -1),
				R("textarea", {
					id: "suite-wound-formula",
					ref_key: "textarea",
					ref: i,
					class: D(["dui-textarea dui-textarea-sm app:min-h-40 app:w-full app:font-mono", l.value ? "dui-textarea-error" : u.value ? "dui-textarea-warning" : ""]),
					disabled: d.value || f.value,
					value: s.value,
					onDragover: a[0] ||= Zo(() => {}, ["prevent"]),
					onDrop: Zo(y, ["prevent"]),
					onInput: a[1] ||= (e) => g(b(e))
				}, null, 42, tA),
				c.value.length ? (F(), I("div", {
					key: 0,
					class: D(["dui-alert", l.value ? "dui-alert-error" : "dui-alert-warning"]),
					role: "alert"
				}, [a[2] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-triangle-exclamation"
				}, null, -1), R("ul", nA, [(F(!0), I(P, null, N(c.value, (e, t) => (F(), I("li", { key: `${e.code}-${t}` }, O(e.message), 1))), 128))])], 2)) : V("", !0),
				m.value ? (F(), I("p", rA, [a[3] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-wand-magic-sparkles"
				}, null, -1), R("span", null, "Generated Trait: " + O(m.value), 1)])) : V("", !0)
			])]), R("aside", iA, [R("fieldset", aA, [
				a[7] ||= R("legend", { class: "dui-fieldset-legend" }, "WFRP values", -1),
				a[8] ||= R("p", { class: "dui-label" }, "Bonuses, multipliers, Actor state, and scale.", -1),
				R("div", oA, [(F(!0), I(P, null, N(A(UD), (e) => (F(), I("button", {
					key: e,
					class: "dui-btn dui-btn-outline dui-btn-xs app:font-mono",
					disabled: d.value || f.value,
					draggable: "true",
					type: "button",
					onClick: (t) => _(e),
					onDragstart: (t) => v(t, e)
				}, O(e), 41, sA))), 128))])
			]), R("fieldset", cA, [
				a[9] ||= R("legend", { class: "dui-fieldset-legend" }, "Actor references", -1),
				a[10] ||= R("p", { class: "dui-label" }, [
					R("code", null, "{Name}"),
					B(" inserts a total; "),
					R("code", null, "[Name]"),
					B(" inserts its bonus. ")
				], -1),
				R("div", lA, [(F(), I(P, null, N(h, (e) => R("button", {
					key: e,
					class: "dui-btn dui-btn-outline dui-btn-xs app:font-mono",
					disabled: d.value || f.value,
					draggable: "true",
					type: "button",
					onClick: (t) => _(e),
					onDragstart: (t) => v(t, e)
				}, O(e), 41, uA)), 64))])
			])])])
		], 8, Zk));
	}
}), fA = class extends PS {
	openParent;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${Y}-wound-formula-builder`,
		classes: [Y, "wfrp4e-customizer-wound-formula-builder"],
		position: {
			height: 610,
			width: 700
		},
		window: {
			icon: "fa-solid fa-heart-pulse",
			resizable: !0,
			title: "Wound Formula Builder"
		}
	};
	#e = 0;
	#t;
	constructor(e) {
		super(), this.openParent = e;
	}
	open(e, t) {
		return this.#e = e, this.#t = t, this.render(!0);
	}
	getVueComponent() {
		return dA;
	}
	getApplicationProps() {
		return {
			definitionIndex: this.#e,
			onOpenParent: () => this.openParent(this.#e, this.#t),
			subspeciesIndex: this.#t
		};
	}
}, pA = class extends PS {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${Y}-species-directory`,
		classes: [Y, "wfrp4e-customizer-species-directory"],
		position: {
			height: 680,
			width: 820
		},
		window: {
			icon: "fa-solid fa-people-group",
			resizable: !0,
			title: "WFRP4e Species Builder"
		}
	};
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s = -1;
	constructor() {
		super(), this.#t = new $O({
			openDirectory: () => void this.render(!0),
			openIssues: (e) => void this.#n.open(e),
			openSubspecies: (e, t) => void this.openSubspecies(e, t),
			openWoundFormula: (e) => void this.openWoundFormula(e, void 0)
		}), this.#i = new Vk({
			openIssues: (e) => void this.#n.open(e),
			openParent: (e) => void this.openSpecies(e, "subspecies"),
			openWoundFormula: (e, t) => void this.openWoundFormula(e, t)
		}), this.#e = new FS(() => void this.render(!0), (e) => void this.openSpecies(e)), this.#r = new Pk(() => void this.render(!0), () => void this.#n.open()), this.#a = new Xk(() => void this.render(!0)), this.#n = new sk(() => void this.render(!0), (e) => this.openValidationIssue(e)), this.#o = new fA((e, t) => {
			t === void 0 ? this.openSpecies(e, "wounds") : this.openSubspecies(e, t, "wounds");
		});
	}
	getVueComponent() {
		return Yg;
	}
	getApplicationProps() {
		return {
			onOpenConfigurator: () => this.#e.render(!0),
			onOpenIssues: (e) => this.#n.open(e),
			onOpenSpecies: (e) => this.openSpecies(e),
			onOpenSpeciesTable: () => this.#r.render(!0),
			onOpenWfrpConfig: () => this.#a.render(!0)
		};
	}
	openSpecies(e, t = "details", n = "careerTable") {
		return this.selectDefinition(e), this.#t.open(e, t, n);
	}
	openSubspecies(e, t, n = "details", r = "careerTable") {
		return this.selectDefinition(e), this.#t.open(e, "subspecies"), this.#i.open(e, t, n, r);
	}
	openWoundFormula(e, t) {
		return this.selectDefinition(e), this.#o.open(e, t);
	}
	selectDefinition(e) {
		e !== this.#s && (this.#i.close(), this.#o.close()), this.#s = e, wm(Bs).selectDefinition(e);
	}
	openValidationIssue(e) {
		let t = ng(e);
		if (this.#n.close(), t.kind === "project") {
			t.tab === "species-table" ? this.#r.render(!0) : this.render(!0);
			return;
		}
		if (t.kind === "subspecies") {
			this.openSubspecies(t.definitionIndex, t.subspeciesIndex, t.subspeciesTab, t.tableTab);
			return;
		}
		this.openSpecies(t.definitionIndex, t.editorTab, t.tableTab);
	}
};
//#endregion
//#region src/functions/npc-builder/create-default-trait-config.ts
function mA() {
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
function hA(e, t) {
	return `${e}:${xA(t)}`;
}
function gA(e) {
	let t = e.level ?? 1;
	return Number.isFinite(t) ? Math.max(1, Math.floor(t)) * 5 : 5;
}
function _A(e) {
	return e.name;
}
function vA(e, t) {
	return e === "characteristic" ? t.allowBaseActorCharacteristics : e === "skill" ? t.allowBaseActorSkills : t.allowBaseActorTalents;
}
function yA(e, t) {
	return {
		...mA(),
		...e,
		...t
	};
}
function bA(e, t) {
	return xA(e) === xA(t);
}
function xA(e) {
	return e.trim().toLocaleLowerCase();
}
function SA(e) {
	return Number.isFinite(e) ? Math.max(1, Math.floor(e)) : 1;
}
function CA(e) {
	let t = 0;
	for (let n of e) t += n.count;
	return t;
}
function wA(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = xA(r);
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/skill-specialization.ts
function TA(e, t, n) {
	return `${e}:${AA(t)}:${n}`;
}
function EA(e, t) {
	let n = e.trim(), r = t.trim();
	return r ? `${n} (${r})` : n;
}
function DA(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "";
	return !n || !r || OA(e) ? null : {
		baseName: n,
		originalName: e,
		specialization: r
	};
}
function OA(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "", i = MA(r);
	return !n || !r || !jA(r, i) ? null : {
		baseName: n,
		options: i,
		originalName: e,
		specialization: r
	};
}
function kA(e, t) {
	let n = /* @__PURE__ */ new Map();
	return t.map((t) => {
		let r = AA(t), i = n.get(r) ?? 0;
		return n.set(r, i + 1), {
			occurrence: i,
			originalName: t,
			resolutionKey: TA(e, t, i)
		};
	});
}
function AA(e) {
	return e.trim().replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function jA(e, t) {
	return e.trim().toLocaleLowerCase() === "any" || t.length > 1;
}
function MA(e) {
	return e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
}
//#endregion
//#region src/functions/npc-builder/advancements/source-counts.ts
function NA(e, t) {
	return t <= 0 ? [] : [{
		count: t,
		kind: "career",
		label: `${e} extra time`
	}];
}
function PA(e, t) {
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
function FA(e, t, n, r) {
	let i = LA(IA(e, r), n);
	return i.value === null ? t : Math.min(t, Math.max(0, i.value - e.baseAdvances));
}
function IA(e, t) {
	let n = t[xA(e.name)];
	return {
		maximumFormula: e.talentMaximumFormula ?? n?.maximumFormula ?? "",
		maximumKey: e.talentMaximumKey ?? n?.maximumKey ?? ""
	};
}
function LA(e, t) {
	let n = e.maximumKey.trim().toLocaleLowerCase();
	if (!n) return {
		label: "Unknown",
		value: null
	};
	if (n === "none") return {
		label: "-",
		value: null
	};
	if (n === "custom") return RA(e.maximumFormula, t);
	let r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	if (uc(n)) {
		let e = t[n] ?? 0, r = Math.max(0, Math.floor(e / 10));
		return {
			label: `${cc[n]} Bonus (${r})`,
			value: r
		};
	}
	return {
		label: e.maximumKey || "Unknown",
		value: null
	};
}
function RA(e, t) {
	let n = e.trim(), r = Number(n);
	if (Number.isFinite(r)) {
		let e = Math.max(0, Math.floor(r));
		return {
			label: `${e}`,
			value: e
		};
	}
	let i = /@characteristics\.([a-z]+)\.bonus/i.exec(n)?.[1]?.toLocaleLowerCase();
	if (i && uc(i)) {
		let e = t[i] ?? 0, n = Math.max(0, Math.floor(e / 10));
		return {
			label: `${cc[i]} Bonus (${n})`,
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
function zA(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.careers) {
		let i = wA(HA(r, t, e.skillGrantResolutions)), a = gA(r) / 5, o = Math.max(0, SA(r.quantity) - 1) * 5;
		for (let e of i) {
			let i = hA(t, e), s = n.get(i);
			if (s) {
				a > s.highestLevel && (s.highestLevel = a, s.highestLevelSource = _A(r)), o > 0 && s.extraSources.push({
					count: o,
					kind: "career",
					label: `${r.name} extra time`
				});
				continue;
			}
			n.set(i, {
				extraSources: NA(r.name, o),
				highestLevel: a,
				highestLevelSource: _A(r),
				name: e
			});
		}
	}
	for (let r of n.values()) VA(e, {
		careerValue: r.highestLevel * 5 + CA(r.extraSources),
		kind: t,
		name: r.name,
		sources: [{
			count: r.highestLevel * 5,
			kind: "career",
			label: r.highestLevelSource
		}, ...r.extraSources]
	});
}
function BA(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.careers) {
		let r = wA(HA(n, "talent", e.skillGrantResolutions)), i = Math.max(0, SA(n.quantity) - 1);
		for (let e of r) {
			let r = hA("talent", e), a = t.get(r);
			if (a) {
				i > 0 && a.extraSources.push({
					count: i,
					kind: "career",
					label: `${n.name} extra time`
				});
				continue;
			}
			t.set(r, {
				extraSources: NA(n.name, i),
				firstSource: n.name,
				name: e
			});
		}
	}
	for (let n of t.values()) VA(e, {
		careerValue: 1 + CA(n.extraSources),
		kind: "talent",
		name: n.name,
		sources: [{
			count: 1,
			kind: "career",
			label: n.firstSource
		}, ...n.extraSources]
	}, e.characteristicTotals);
}
function VA(e, t, n = {}) {
	let r = hA(t.kind, t.name), i = e.entries.get(r);
	if (i) {
		let r = t.kind === "talent" && i.includedFromBase ? t.sources.slice(1) : t.sources, a = t.kind === "talent" ? FA(i, CA(r), n, e.talentMaximums) : t.careerValue;
		i.careerValue = a, i.includedFromCareer = !0, i.sources = [...i.sources.filter((e) => e.kind === "base"), ...PA(r, a)];
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
	t.kind === "talent" && (a.careerValue = FA(a, t.careerValue, n, e.talentMaximums), a.current = a.careerValue, a.sources = PA(t.sources, a.careerValue)), e.entries.set(r, { ...a });
}
function HA(e, t, n) {
	return t === "characteristic" ? e.grants.characteristics : t === "skill" ? kA(e.uuid, e.grants.skills).map((e) => n[e.resolutionKey] || e.originalName) : e.grants.talents;
}
//#endregion
//#region src/functions/npc-builder/advancements/entry-context.ts
function UA(e, t) {
	let n = {};
	for (let r of e.values()) {
		if (r.kind !== "characteristic") continue;
		let e = lc[xA(r.name)];
		if (!e) continue;
		let i = t[hA(r.kind, r.name)] ?? 0, a = Math.max(r.minimumCurrent, Math.floor(r.careerValue + i));
		n[e] = Math.max(0, r.baseValue + a);
	}
	return n;
}
function WA(e, t, n) {
	return e.kind === "skill" ? GA(e, t, n) : e.kind === "talent" ? KA(e, t, n) : e;
}
function GA(e, t, n) {
	let r = qA(e) ?? JA(e.name, n.skillCharacteristics) ?? YA(e.name, n.baseActorDraftData);
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
function KA(e, t, n) {
	let r = IA(e, n.talentMaximums), i = LA(r, t);
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
function qA(e) {
	return !e.characteristicKey || !e.characteristicName ? null : {
		characteristicKey: e.characteristicKey,
		characteristicName: e.characteristicName,
		skillName: e.name
	};
}
function JA(e, t) {
	return t[xA(e)] ?? null;
}
function YA(e, t) {
	let n = t.advancements.find((t) => t.kind === "skill" && bA(t.name, e));
	return n?.characteristicKey ? {
		characteristicKey: n.characteristicKey,
		characteristicName: n.characteristicName ?? cc[n.characteristicKey],
		skillName: e
	} : null;
}
//#endregion
//#region src/functions/npc-builder/advancements/derive-advancements.ts
function XA(e) {
	let t = tj(e.baseActorDraftData), n = {
		careers: e.careers,
		entries: t,
		skillGrantResolutions: e.skillGrantResolutions,
		talentMaximums: e.talentMaximums
	};
	zA(n, "characteristic"), zA(n, "skill");
	let r = UA(t, e.manualAdvancementDeltas);
	return BA({
		...n,
		characteristicTotals: r
	}), nj(t, e.customAdvancements), [...t.values()].filter((t) => t.includedFromCareer || t.includedFromCustom || vA(t.kind, e.settings)).map((t) => {
		let n = WA(t, r, e), i = hA(t.kind, t.name), a = e.manualAdvancementDeltas[i] ?? 0, o = n.careerValue + a;
		return {
			...n,
			current: Math.max(n.minimumCurrent, Math.floor(o))
		};
	}).sort(rj);
}
function ZA(e, t) {
	let n = Number.isFinite(t) ? t : 0;
	return Math.max(e.minimumCurrent, Math.floor(n)) - e.careerValue;
}
function QA(e, t) {
	let n = Number.isFinite(t) ? t : 0;
	return ZA(e, Math.max(e.minimumTotal, Math.floor(n)) - e.baseValue);
}
function $A(e, t) {
	return {
		...e,
		...Object.fromEntries(t.map((e) => [xA(e.skillName), e]))
	};
}
function ej(e, t) {
	return {
		...e,
		...Object.fromEntries(t.map((e) => [xA(e.talentName), e]))
	};
}
function tj(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.advancements) {
		let e = hA(n.kind, n.name), r = {
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
		n.baseModifier !== void 0 && (r.baseModifier = n.baseModifier), n.characteristicKey && (r.characteristicKey = n.characteristicKey, r.characteristicName = n.characteristicName ?? cc[n.characteristicKey]), n.kind === "talent" && n.baseAdvances > 0 && r.sources.push({
			count: n.baseAdvances,
			kind: "base",
			label: "Base"
		}), n.talentMaximumFormula && (r.talentMaximumFormula = n.talentMaximumFormula), n.talentMaximumKey && (r.talentMaximumKey = n.talentMaximumKey), t.set(e, r);
	}
	return t;
}
function nj(e, t) {
	for (let n of t) {
		let t = hA(n.kind, n.name), r = {
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
function rj(e, t) {
	return e.kind === t.kind ? e.name.localeCompare(t.name) : e.kind.localeCompare(t.kind);
}
//#endregion
//#region src/functions/npc-builder/advancements/advancement-actions.ts
function ij(e) {
	return e.kind === "talent" ? 1 : 5;
}
function aj(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function oj(e, t) {
	return aj(e) + t * ij(e);
}
function sj(e) {
	return aj(e);
}
function cj(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && sj(e) < t;
}
function lj(e) {
	return e.filter((e) => e.kind === "talent" && cj(e)).map((e) => ({
		kind: e.kind,
		name: e.name,
		total: e.talentMaximumValue
	}));
}
function uj(e, t) {
	let n = new Map(e.map((e) => [fj(e), e])), r = [];
	for (let e of t) {
		let t = n.get(fj(e));
		!t || t.current === e.current || r.push({
			current: e.current,
			kind: t.kind,
			name: t.name
		});
	}
	return r;
}
function dj(e, t) {
	return e.find((e) => e.kind === t.kind && e.name === t.name) ?? null;
}
function fj(e) {
	return `${e.kind}:${e.name}`;
}
//#endregion
//#region src/functions/npc-builder/xp-cost.ts
var pj = {
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
function mj(e) {
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
		let e = wj(r), i = e + r.current;
		if (r.kind === "characteristic") {
			let a = lc[xA(r.name)];
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
	return hj(n, t);
}
function hj(e, t) {
	let n = yj(e, t), r = bj(e.skills, t.skills, pj.skill), i = xj(e.talents, t.talents);
	return {
		characteristics: n,
		skills: r,
		talents: i,
		total: n + r + i
	};
}
function gj(e) {
	let t = Math.max(0, Math.floor(e.current));
	return e.kind === "talent" ? vj(t) : _j(t, e.kind === "characteristic" ? pj.characteristic : pj.skill);
}
function _j(e, t) {
	let n = Math.max(0, Math.floor(e)), r = 0;
	for (let e = 0; e < n; e += 1) {
		let n = Math.min(Math.floor(e / 5), t.length - 1);
		r += t[n] ?? 0;
	}
	return r;
}
function vj(e, t = 0) {
	let n = Math.max(0, Math.floor(e)), r = Math.max(0, Math.floor(t)), i = 0;
	for (let e = 0; e < n; e += 1) i += (r + e + 1) * 100;
	return i;
}
function yj(e, t) {
	let n = 0;
	for (let r of Object.keys(cc)) {
		let i = r, a = Cj(e.characteristics[i] ?? 0, t.characteristics[i] ?? 0);
		n += _j(a, pj.characteristic);
	}
	return n;
}
function bj(e, t, n) {
	let r = Sj(e), i = Sj(t), a = 0;
	for (let [e, t] of r) {
		let r = Cj(t, i.get(e) ?? 0);
		a += _j(r, n);
	}
	return a;
}
function xj(e, t) {
	let n = Sj(e), r = Sj(t), i = 0;
	for (let [e, t] of n) {
		let n = Cj(t, r.get(e) ?? 0);
		i += vj(n);
	}
	return i;
}
function Sj(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = xA(n.name), r = Math.floor(n.value);
		e && t.set(e, (t.get(e) ?? 0) + r);
	}
	return t;
}
function Cj(e, t) {
	return Math.max(0, Math.floor(e) - Math.floor(t));
}
function wj(e) {
	return e.kind === "characteristic" ? Math.floor(e.baseValue) : e.kind === "skill" ? Math.floor(e.baseAdvances + (e.baseModifier ?? 0)) : Math.floor(e.baseAdvances);
}
//#endregion
//#region src/state/npc-builder/advancements/index.ts
function Tj(e) {
	let { baseActorDraftData: t, careers: n, customAdvancements: r, manualAdvancementDeltas: i, settings: a, skillCharacteristics: o, skillGrantResolutions: s, talentMaximums: c } = e, l = H(() => XA({
		baseActorDraftData: t.value,
		careers: n.value,
		customAdvancements: r.value,
		manualAdvancementDeltas: i.value,
		settings: a.value,
		skillCharacteristics: o.value,
		skillGrantResolutions: s.value,
		talentMaximums: c.value
	})), u = H(() => mj(l.value)), d = H(() => lj(l.value).length);
	function f(e) {
		let t = hA(e.kind, e.name);
		r.value.some((e) => hA(e.kind, e.name) === t) || r.value.push(e);
	}
	function p(e) {
		let t = hA(e.kind, e.name);
		r.value = r.value.filter((e) => hA(e.kind, e.name) !== t), delete i.value[t];
	}
	function m(e, t) {
		x(e, oj(e, t));
	}
	function h() {
		for (let e of lj(l.value)) {
			let t = dj(l.value, e);
			t && x(t, e.total);
		}
	}
	function g(e, t) {
		let n = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), r = e.run({ advancements: l.value }, n), i = uj(l.value, r.advancements);
		for (let e of i) {
			let t = dj(l.value, e);
			t && b(t, e.current);
		}
	}
	function _(e) {
		return s.value[e] ?? "";
	}
	function v(e) {
		o.value = $A(o.value, e);
	}
	function y(e) {
		c.value = ej(c.value, e);
	}
	function b(e, t) {
		let n = hA(e.kind, e.name);
		i.value[n] = ZA(e, t);
	}
	function x(e, t) {
		let n = hA(e.kind, e.name);
		i.value[n] = QA(e, t);
	}
	function S(e) {
		let t = hA(e.kind, e.name);
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
function Ej(e, t) {
	return e.find((e) => e.uuid === t) ?? null;
}
function Dj(e) {
	return e.at(-1) ?? null;
}
function Oj(e) {
	let t = e.finalCareer?.name, n = e.settings.includeSpeciesInName && e.selectedBaseActor?.species ? e.selectedBaseActor.species : "";
	return t && n ? `${n} ${t}` : t || (e.selectedBaseActor ? `${e.selectedBaseActor.name} NPC` : "New NPC");
}
function kj(e, t) {
	return e.trim() || t;
}
function Aj(e) {
	return e.finalCareer?.img || e.selectedBaseActor?.prototypeTokenImg || e.selectedBaseActor?.img || "";
}
function jj(e, t) {
	return e || t;
}
function Mj(e) {
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
function Nj(e) {
	let { actorName: t, baseActors: n, careers: r, clearBaseDraftData: i, clearMountSelection: a, customAdvancements: o, customSpells: s, customTraits: c, customTrappings: l, detectedSpells: u, ignoredBaseTraitKeys: d, magicLoreResolutions: f, removeSkillGrantResolutionsForCareer: p, selectedBaseActorUuid: m, selectedPortraitPath: h, settings: g, skillGrantResolutions: _, spellSelectionOverrides: v } = e, y = H(() => Ej(n.value, m.value)), b = H(() => Dj(r.value)), x = H(() => Oj({
		finalCareer: b.value,
		selectedBaseActor: y.value,
		settings: g.value
	})), S = H(() => kj(t.value, x.value)), C = H(() => Aj({
		finalCareer: b.value,
		selectedBaseActor: y.value
	})), ee = H(() => jj(h.value, C.value)), te = H(() => Mj(r.value));
	function ne(e) {
		let t = r.value.find((t) => t.uuid === e.uuid);
		if (t) {
			t.quantity = SA(t.quantity + 1);
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
	function w(e, t) {
		let n = r.value[e];
		!n || e === t || t < 0 || t >= r.value.length || (r.value.splice(e, 1), r.value.splice(t, 0, n));
	}
	function T(e) {
		let [t] = r.value.splice(e, 1);
		t && p(t.uuid);
	}
	function ae() {
		for (let e of r.value) p(e.uuid);
		r.value = [];
	}
	function oe() {
		t.value = "", ae(), o.value = [], c.value = [], l.value = [], s.value = [], u.value = [], d.value = {}, f.value = {}, h.value = "", _.value = {}, v.value = {}, m.value = "", i(), a();
	}
	function se(e) {
		n.value.some((t) => t.uuid === e.uuid) || n.value.push(e), ce(e.uuid);
	}
	function ce(e) {
		let t = e.trim();
		m.value !== t && (h.value = ""), m.value = t;
	}
	function E(e) {
		h.value = e;
	}
	function le(e, t) {
		let n = r.value[e];
		n && (n.quantity = SA(t));
	}
	return {
		addCareer: ne,
		addCareerIfMissing: re,
		clearCareers: ae,
		finalActorName: S,
		finalCareer: b,
		finalPortraitPath: ee,
		grantTotals: te,
		moveCareer: ie,
		moveCareerToIndex: w,
		removeCareer: T,
		resetDraft: oe,
		selectBaseActor: se,
		selectBaseActorUuid: ce,
		selectedBaseActor: y,
		selectPortrait: E,
		setCareerQuantity: le,
		suggestedActorName: x
	};
}
//#endregion
//#region src/state/npc-builder/hydration.ts
function Pj(e) {
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
function Fj(e) {
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
var Ij = new Set([
	"and",
	"any",
	"the",
	"with",
	"without",
	"of",
	"or",
	"npc"
]), Lj = "npc-builder-portrait-filter:", Rj = "application/x-wfrp4e-customizer-portrait-filter-tag";
function zj(e) {
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
	}), Jj(t);
}
function Bj(e) {
	let t = [];
	e.selectedBaseActor && t.push(e.selectedBaseActor.species, e.selectedBaseActor.name);
	for (let n of e.careers) t.push(n.name, n.careerGroup);
	return rM(t.flatMap((e) => nM(e)).filter((e) => e.length >= 3 && !Ij.has(e)));
}
function Vj(e) {
	return rM(nM(e).filter((e) => e.length >= 3 && !Ij.has(e)));
}
function Hj(e, t, n) {
	return e.filter((e) => (t[e] ?? "search") === n);
}
function Uj(e, t) {
	let n = tM(e);
	return n ? t.some((e) => n.includes(e)) : !1;
}
function Wj(e, t) {
	let n = eM(e), r = t.mustIncludeSourceGroups.length === 0 || e.sourceGroup !== void 0 && t.mustIncludeSourceGroups.includes(e.sourceGroup), i = e.sourceGroup !== void 0 && t.mustExcludeSourceGroups.includes(e.sourceGroup);
	return t.mustIncludeTerms.every((e) => n.includes(e)) && t.mustExcludeTerms.every((e) => !n.includes(e)) && r && !i;
}
function Gj(e) {
	return {
		career: "Career",
		compendiums: "Compendiums",
		"dig-down": "Dig Down",
		world: "World"
	}[e];
}
function Kj(e) {
	return `${Lj}${e}`;
}
function qj(e) {
	return e.startsWith(Lj) ? e.slice(28) : null;
}
function Jj(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.img.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
function Yj(e) {
	let t = Jj([...zj(e), ...e.assetCandidates]);
	return !e.selectedPortraitPath || t.some((t) => $j(t.img) === $j(e.selectedPortraitPath)) ? t : [{
		img: e.selectedPortraitPath,
		key: `selected:${e.selectedPortraitPath}`,
		label: "Selected portrait",
		source: "foundry-asset",
		sourceLabel: "Selected"
	}, ...t];
}
function Xj(e) {
	let t = e.settings.searchCompendiumPortraitAssets || e.settings.searchFoundryPortraitAssets, n = !!e.selectedBaseActor || e.careers.length > 0;
	return t && n && e.searchTerms.length > 0;
}
function Zj(e) {
	return e ? e.maxDirectories <= 0 ? e.phase === "ready" ? 100 : 4 : Math.min(100, Math.round(e.directoriesVisited / e.maxDirectories * 100)) : 0;
}
function Qj(e) {
	return e ? e.phase === "ready" ? `${e.candidatesFound} options found` : e.phase === "filesystem" ? e.maxDirectories <= 0 ? `${e.directoriesVisited} directories - ${e.currentLocation}` : `${e.directoriesVisited}/${e.maxDirectories} directories - ${e.currentLocation}` : e.currentLocation : "";
}
function $j(e) {
	return e.trim().toLocaleLowerCase();
}
function eM(e) {
	return tM([
		e.label,
		e.img,
		e.sourceLabel ?? ""
	].filter(Boolean).join(" "));
}
function tM(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[_-]/g, " ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\s+/g, " ");
}
function nM(e) {
	return tM(e).split(" ").filter(Boolean);
}
function rM(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/state/npc-builder/portraits.ts
function iM() {
	let e = /* @__PURE__ */ k([]), t = /* @__PURE__ */ k({}), n = /* @__PURE__ */ k({});
	function r(t) {
		let r = new Set(e.value), i = Vj(t).filter((e) => !r.has(e));
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
function aM() {
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
var oM = aM(), sM = {
	advancements: [],
	optionalTraits: [],
	traits: [],
	trappings: []
}, cM = /\(([^)]+)\)/, lM = [
	"beasts",
	"death",
	"fire",
	"heavens",
	"metal",
	"life",
	"light",
	"shadow"
], uM = [
	"daemonology",
	"necromancy",
	"nurgle",
	"slaanesh",
	"tzeentch",
	"undivided"
];
function dM(e, t) {
	let n = e.trim(), r = n.toLocaleLowerCase();
	return r === "petty magic" ? vM({
		kind: "petty-magic",
		rawLore: "Petty Magic",
		source: t,
		sourceName: n
	}) : r.startsWith("arcane magic") ? vM({
		kind: "arcane-magic",
		rawLore: yM(n),
		source: t,
		sourceName: n
	}) : r.startsWith("spellcaster") ? vM({
		kind: "spellcaster",
		rawLore: yM(n),
		source: t,
		sourceName: n
	}) : null;
}
function fM(e) {
	return e.trim().replace(/^any\s+/i, "").replace(/^arcane\s+lore\s+of\s+/i, "").replace(/^arcane\s+lore$/i, "").replace(/^lore\s+of\s+/i, "").replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function pM(e) {
	return `${e.source}:${e.kind}:${e.sourceName}:${e.rawLore}`;
}
function mM(e, t) {
	return {
		...e,
		isAmbiguous: !1,
		normalizedLore: fM(t),
		rawLore: t.trim()
	};
}
function hM(e) {
	let t = fM(e);
	return t === "petty" ? "petty" : lM.includes(t) ? "eight-wind" : uM.includes(t) ? "dark" : "other";
}
function gM(e, t) {
	if (e.kind === "petty-magic") return t.filter((e) => e.category === "petty");
	let n = e.rawLore.trim().toLocaleLowerCase();
	return n.includes("dark") ? t.filter((e) => e.category === "dark") : n.includes("eight winds") ? t.filter((e) => e.category === "eight-wind") : t.filter((e) => e.category !== "petty");
}
function _M(e) {
	let t = e.trim().toLocaleLowerCase();
	return !t || t === "any" || t.includes("any ");
}
function vM(e) {
	let t = e.rawLore.trim();
	return {
		isAmbiguous: _M(t),
		kind: e.kind,
		normalizedLore: fM(t),
		rawLore: t,
		resolutionKey: pM({
			kind: e.kind,
			rawLore: t,
			source: e.source,
			sourceName: e.sourceName
		}),
		source: e.source,
		sourceName: e.sourceName
	};
}
function yM(e) {
	return cM.exec(e)?.[1]?.trim() ?? "";
}
//#endregion
//#region src/functions/npc-builder/spells/derive-magic-grants.ts
function bM(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.advancements) n.kind !== "talent" || n.baseAdvances + n.current <= 0 || xM(t, dM(n.name, "talent"), e);
	for (let n of e.traits) xM(t, dM(n.name, "trait"), e);
	return [...t.values()];
}
function xM(e, t, n) {
	if (!t) return;
	let r = n.loreResolutions[t.resolutionKey];
	e.set(t.resolutionKey, r ? mM(t, r) : t);
}
//#endregion
//#region src/functions/npc-builder/spells/derive-spells.ts
function SM(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.detectedSpells) t.set(n.key, {
		...n,
		selected: e.selectionOverrides[n.key] ?? e.autoSelectDetectedSpells
	});
	for (let n of e.customSpells) t.set(n.key, {
		...n,
		selected: e.selectionOverrides[n.key] ?? n.selected
	});
	return [...t.values()].sort(DM);
}
function CM(e) {
	return e.filter((e) => e.selected);
}
function wM(e) {
	return e.spells.map((t) => ({
		...t,
		selected: e.selectionOverrides[t.key] ?? e.autoSelectDetectedSpells
	}));
}
function TM(e) {
	let t = e.detectedSpells.find((t) => EM(t, e.spell));
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
function EM(e, t) {
	return e.sourceUuid && e.sourceUuid === t.sourceUuid ? !0 : bA(e.name, t.name);
}
function DM(e, t) {
	return e.loreName === t.loreName ? e.name.localeCompare(t.name) : e.loreName.localeCompare(t.loreName);
}
//#endregion
//#region src/state/npc-builder/spells.ts
function OM(e) {
	let { advancements: t, customSpells: n, detectedSpells: r, magicLoreResolutions: i, settings: a, spellSelectionOverrides: o, traits: s } = e, c = H(() => bM({
		advancements: t.value,
		loreResolutions: i.value,
		traits: s.value
	})), l = H(() => c.value.length > 0), u = H(() => SM({
		autoSelectDetectedSpells: a.value.autoSelectGrantedSpells,
		customSpells: n.value,
		detectedSpells: r.value,
		selectionOverrides: o.value
	})), d = H(() => CM(u.value));
	function f(e) {
		let t = TM({
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
		r.value = wM({
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
function kM(e) {
	let t = /* @__PURE__ */ new Map();
	if (e.allowBaseActorTraits) for (let n of e.baseActorDraftData.traits) {
		let r = NM(n);
		e.ignoredBaseTraitKeys[r] || t.set(r, IM(n, r, !1));
	}
	for (let n of e.customTraits) FM([...t.values()], n.name) || t.set(n.key, { ...n });
	return [...t.values()].map((t) => ({
		...t,
		config: yA(t.config, e.traitConfigOverrides[t.key])
	})).sort(LM);
}
function AM(e) {
	return e.allowBaseActorTraits ? [...e.baseActorDraftData.traits.filter((t) => e.ignoredBaseTraitKeys[NM(t)]).map((t) => {
		let n = NM(t);
		return {
			...IM(t, n, !0),
			config: yA(t.config, e.traitConfigOverrides[n])
		};
	}), ...e.selectedTraits] : e.selectedTraits;
}
function jM(e) {
	return e.optionalTraits.map((e) => ({
		config: e.config,
		img: e.img,
		name: e.name,
		uuid: e.uuid
	})).sort((e, t) => e.name.localeCompare(t.name));
}
function MM(e, t) {
	return {
		config: t.config,
		ignored: !1,
		key: `${e}:${t.uuid || xA(t.name)}`,
		name: t.name,
		source: e,
		sourceUuid: t.uuid
	};
}
function NM(e) {
	return `base:${e.uuid || xA(e.name)}`;
}
function PM(e, t) {
	return e.find((e) => bA(e.name, t));
}
function FM(e, t) {
	return PM(e, t) !== void 0;
}
function IM(e, t, n) {
	return {
		config: e.config,
		ignored: n,
		key: t,
		name: e.name,
		source: "base",
		sourceUuid: e.uuid
	};
}
function LM(e, t) {
	return e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source);
}
//#endregion
//#region src/state/npc-builder/traits.ts
function RM(e) {
	let { baseActorDraftData: t, customTraits: n, ignoredBaseTraitKeys: r, quickTraits: i, settings: a, traitConfigOverrides: o } = e, s = H(() => kM({
		allowBaseActorTraits: a.value.allowBaseActorTraits,
		baseActorDraftData: t.value,
		customTraits: n.value,
		ignoredBaseTraitKeys: r.value,
		traitConfigOverrides: o.value
	})), c = H(() => AM({
		allowBaseActorTraits: a.value.allowBaseActorTraits,
		baseActorDraftData: t.value,
		ignoredBaseTraitKeys: r.value,
		selectedTraits: s.value,
		traitConfigOverrides: o.value
	})), l = H(() => jM(t.value));
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
		let i = MM(e, t);
		if (!r) {
			d(i.key), x(t.name, !0);
			return;
		}
		x(t.name, !1) || n.value.find((e) => e.key === i.key) || h(i);
	}
	function h(e) {
		FM(s.value, e.name) || n.value.some((t) => t.key === e.key) || n.value.push(e);
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
		return PM(l.value, e);
	}
	function y(e) {
		return PM(i.value, e);
	}
	function b(e) {
		let n = PM(t.value.traits, e);
		if (!n) return null;
		let i = NM(n);
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
function zM(e, t = "trapping") {
	return {
		candidates: [],
		searchTerms: UM(e),
		selectedCandidateUuid: "",
		selectedItemType: t,
		selectedName: e.trim(),
		status: "fallback"
	};
}
function BM(e) {
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
function VM(e) {
	return {
		candidates: [],
		searchTerms: UM(e),
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "unresolved"
	};
}
function HM(e, t) {
	let n = UM(e), r = GM(n, t), i = r.filter((e) => e.matchKind === "exact");
	return i.length === 1 ? qM("matched", n, i[0]) : i.length > 1 ? qM("ambiguous", n, i[0], { candidates: r }) : r.length ? {
		candidates: r,
		searchTerms: n,
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "ambiguous"
	} : zM(e);
}
function UM(e) {
	let t = e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
	return t.length ? ZM(t) : [e.trim()].filter(Boolean);
}
function WM(e, t) {
	if (JM(e) === JM(t)) return "exact";
	let n = YM(e), r = YM(t);
	if (!n || !r) return null;
	if (n === r || n.includes(r) || r.includes(n)) return "near";
	let i = n.split(" "), a = new Set(r.split(" "));
	return i.every((e) => a.has(e)) ? "near" : null;
}
function GM(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) for (let e of t) {
		let t = WM(r, e.name);
		t && n.get(e.uuid)?.matchKind !== "exact" && n.set(e.uuid, {
			itemType: e.itemType,
			matchKind: t,
			name: e.name,
			searchTerm: r,
			sourceLabel: e.sourceLabel,
			uuid: e.uuid
		});
	}
	return [...n.values()].sort(KM);
}
function KM(e, t) {
	return e.matchKind === t.matchKind ? e.name.localeCompare(t.name) : e.matchKind === "exact" ? -1 : 1;
}
function qM(e, t, n, r = {}) {
	return {
		candidates: r.candidates ?? (n ? [n] : []),
		searchTerms: t,
		selectedCandidateUuid: n?.uuid ?? "",
		selectedItemType: n?.itemType ?? "trapping",
		selectedName: n?.name ?? "",
		status: e
	};
}
function JM(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/\s+/g, " ");
}
function YM(e) {
	return JM(e).replaceAll("&", " and ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\b(a|an|the|some|pair of|pairs of)\b/g, " ").split(/\s+/).map(XM).filter(Boolean).join(" ");
}
function XM(e) {
	return e.endsWith("ies") && e.length > 4 ? `${e.slice(0, -3)}y` : e.endsWith("s") && !e.endsWith("ss") && e.length > 3 ? e.slice(0, -1) : e;
}
function ZM(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/functions/npc-builder/trappings/derive-trappings.ts
function QM(e) {
	let t = /* @__PURE__ */ new Map();
	tN(t, e), nN(t, e);
	for (let n of e.customTrappings) t.set(n.key, { ...n });
	return [...t.values()].map((t) => rN(t, e)).sort(iN);
}
function $M(e, t) {
	let n = e.resolution.candidates.find((e) => e.uuid === t);
	return n ? {
		...e.resolution,
		selectedCandidateUuid: n.uuid,
		selectedItemType: n.itemType,
		selectedName: n.name,
		status: e.resolution.status === "matched" ? "matched" : "ambiguous"
	} : null;
}
function eN(e) {
	return {
		...zM(e.name, e.itemType),
		candidates: e.resolution.candidates,
		searchTerms: e.resolution.searchTerms
	};
}
function tN(e, t) {
	if (t.settings.allowBaseActorTrappings) for (let n of t.baseActorDraftData.trappings) {
		let t = `base:${n.uuid || xA(n.name)}`;
		e.set(t, {
			ignored: !1,
			itemType: n.itemType,
			key: t,
			name: n.name,
			quantity: n.quantity,
			resolution: BM({
				itemType: n.itemType,
				name: n.name,
				uuid: n.uuid
			}),
			source: "base",
			sourceUuid: n.uuid
		});
	}
}
function nN(e, t) {
	for (let n of t.careers) for (let r of n.grants.trappings) {
		let i = `career:${xA(r)}`, a = e.get(i);
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
			resolution: t.trappingResolutionOverrides[i] ?? VM(r),
			source: "career",
			sourceUuid: ""
		});
	}
}
function rN(e, t) {
	let n = t.trappingOverrides[e.key];
	return {
		...e,
		ignored: n?.ignored ?? e.ignored,
		quantity: SA(n?.quantity ?? e.quantity),
		resolution: t.trappingResolutionOverrides[e.key] ?? e.resolution
	};
}
function iN(e, t) {
	return e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source);
}
//#endregion
//#region src/state/npc-builder/trappings.ts
function aN(e) {
	let { baseActorDraftData: t, careers: n, customTrappings: r, settings: i, trappingOverrides: a, trappingResolutionOverrides: o } = e, s = H(() => QM({
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
			quantity: SA(t)
		};
	}
	function f(e, t) {
		let n = s.value.find((t) => t.key === e), r = n ? $M(n, t) : null;
		r && (o.value[e] = r);
	}
	function p(e) {
		let t = s.value.find((t) => t.key === e);
		t && (o.value[e] = eN(t));
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
var oN = Rs("npc-builder", () => {
	let e = /* @__PURE__ */ k(""), t = /* @__PURE__ */ k([]), n = /* @__PURE__ */ k({}), r = /* @__PURE__ */ k(null), i = /* @__PURE__ */ k({ ...sM }), a = /* @__PURE__ */ k([]), o = /* @__PURE__ */ k([]), s = /* @__PURE__ */ k([]), c = /* @__PURE__ */ k([]), l = /* @__PURE__ */ k([]), u = /* @__PURE__ */ k(null), d = /* @__PURE__ */ k([]), f = /* @__PURE__ */ k([]), p = /* @__PURE__ */ k(""), m = /* @__PURE__ */ k({ ...oM }), h = /* @__PURE__ */ k(""), g = /* @__PURE__ */ k(""), _ = /* @__PURE__ */ k({}), v = /* @__PURE__ */ k({}), y = /* @__PURE__ */ k({}), b = /* @__PURE__ */ k([]), x = /* @__PURE__ */ k([]), S = /* @__PURE__ */ k([]), C = /* @__PURE__ */ k({}), ee = /* @__PURE__ */ k({}), te = /* @__PURE__ */ k({}), ne = /* @__PURE__ */ k({}), re = /* @__PURE__ */ k({}), ie = /* @__PURE__ */ k({}), w = Tj({
		baseActorDraftData: i,
		careers: o,
		customAdvancements: S,
		manualAdvancementDeltas: n,
		settings: m,
		skillCharacteristics: _,
		skillGrantResolutions: y,
		talentMaximums: v
	}), T = iM(), ae = Pj({
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
	}), oe = Fj({
		baseActorCombatProfile: r,
		mountActorProfile: u,
		mountActors: d,
		selectedMountActorUuid: g
	}), se = Nj({
		actorName: e,
		baseActors: a,
		careers: o,
		clearBaseDraftData: ae.clearBaseDraftData,
		clearMountSelection: oe.clearMountSelection,
		customAdvancements: S,
		customSpells: x,
		customTraits: s,
		customTrappings: c,
		detectedSpells: b,
		ignoredBaseTraitKeys: C,
		magicLoreResolutions: ee,
		removeSkillGrantResolutionsForCareer: w.removeSkillGrantResolutionsForCareer,
		selectedBaseActorUuid: h,
		selectedPortraitPath: p,
		settings: m,
		skillGrantResolutions: y,
		spellSelectionOverrides: te
	}), ce = RM({
		baseActorDraftData: i,
		customTraits: s,
		ignoredBaseTraitKeys: C,
		quickTraits: f,
		settings: m,
		traitConfigOverrides: ne
	}), E = aN({
		baseActorDraftData: i,
		careers: o,
		customTrappings: c,
		settings: m,
		trappingOverrides: re,
		trappingResolutionOverrides: ie
	}), le = OM({
		advancements: w.advancements,
		customSpells: x,
		detectedSpells: b,
		magicLoreResolutions: ee,
		settings: m,
		spellSelectionOverrides: te,
		traits: ce.traits
	});
	function ue() {
		se.resetDraft(), T.resetPortraitFilters();
	}
	return {
		actorName: e,
		actorFolders: t,
		addCareer: se.addCareer,
		addCareerIfMissing: se.addCareerIfMissing,
		addCustomAdvancement: w.addCustomAdvancement,
		addCustomPortraitSearchTerm: T.addCustomPortraitSearchTerm,
		addCustomSpell: le.addCustomSpell,
		addCustomTrait: ce.addCustomTrait,
		addCustomTrapping: E.addCustomTrapping,
		adjustAdvancementCurrent: w.adjustAdvancementCurrent,
		advancements: w.advancements,
		applyAutoAdvance: w.applyAutoAdvance,
		baseActorCombatProfile: r,
		baseActorDraftData: i,
		baseActors: a,
		buildTraits: ce.buildTraits,
		careers: o,
		clearCareers: se.clearCareers,
		clearBaseDraftData: ae.clearBaseDraftData,
		clearMountSelection: oe.clearMountSelection,
		customSpells: x,
		customAdvancements: S,
		customPortraitSearchTerms: T.customPortraitSearchTerms,
		customTraits: s,
		customTrappings: c,
		estimatedNpcXp: w.estimatedNpcXp,
		finalActorName: se.finalActorName,
		finalCareer: se.finalCareer,
		finalPortraitPath: se.finalPortraitPath,
		getSkillGrantResolution: w.getSkillGrantResolution,
		grantTotals: se.grantTotals,
		hasMagicAccess: le.hasMagicAccess,
		hydrateActorFolders: ae.hydrateActorFolders,
		hydrateBaseActorCombatProfile: oe.hydrateBaseActorCombatProfile,
		hydrateBaseActorDraftData: ae.hydrateBaseActorDraftData,
		hydrateBaseActors: ae.hydrateBaseActors,
		hydrateDetectedSpells: le.hydrateDetectedSpells,
		hydrateItemFolders: ae.hydrateItemFolders,
		hydrateMountActorProfile: oe.hydrateMountActorProfile,
		hydrateMountActors: oe.hydrateMountActors,
		hydrateQuickTraits: ae.hydrateQuickTraits,
		hydrateSettings: ae.hydrateSettings,
		hydrateSkillCharacteristics: w.hydrateSkillCharacteristics,
		hydrateTalentMaximums: w.hydrateTalentMaximums,
		itemFolders: l,
		magicGrants: le.magicGrants,
		magicLoreResolutions: ee,
		mountActorProfile: u,
		mountActors: d,
		maximizableTalentCount: w.maximizableTalentCount,
		maximizeTalents: w.maximizeTalents,
		moveCareer: se.moveCareer,
		moveCareerToIndex: se.moveCareerToIndex,
		optionalTraits: ce.optionalTraits,
		quickTraits: f,
		removeCareer: se.removeCareer,
		removeCustomAdvancement: w.removeCustomAdvancement,
		removeCustomSpell: le.removeCustomSpell,
		removeCustomTrait: ce.removeCustomTrait,
		removeCustomTrapping: E.removeCustomTrapping,
		resetAdvancementCurrent: w.resetAdvancementCurrent,
		resetAllAdvancementCurrents: w.resetAllAdvancementCurrents,
		portraitSourceTagSections: T.portraitSourceTagSections,
		portraitTermSections: T.portraitTermSections,
		resetDraft: ue,
		retainAvailablePortraitFilterTerms: T.retainAvailablePortraitFilterTerms,
		selectBaseActor: se.selectBaseActor,
		selectBaseActorUuid: se.selectBaseActorUuid,
		selectMountActor: oe.selectMountActor,
		selectMountActorUuid: oe.selectMountActorUuid,
		selectedBaseActor: se.selectedBaseActor,
		selectedBaseActorUuid: h,
		selectedMountActorUuid: g,
		selectedPortraitPath: p,
		selectedSpells: le.selectedSpells,
		selectPortrait: se.selectPortrait,
		selectTrappingResolutionCandidate: E.selectTrappingResolutionCandidate,
		setAdvancementCurrent: w.setAdvancementCurrent,
		setAdvancementTotal: w.setAdvancementTotal,
		setBaseTraitIgnored: ce.setBaseTraitIgnored,
		setCareerQuantity: se.setCareerQuantity,
		setMagicGrantLoreResolution: le.setMagicGrantLoreResolution,
		setOptionalTraitSelected: ce.setOptionalTraitSelected,
		setPortraitSourceTagSection: T.setPortraitSourceTagSection,
		setPortraitTermSection: T.setPortraitTermSection,
		setQuickTraitSelected: ce.setQuickTraitSelected,
		setSkillGrantResolution: w.setSkillGrantResolution,
		setSpellSelected: le.setSpellSelected,
		setTraitConfig: ce.setTraitConfig,
		setTrappingFallback: E.setTrappingFallback,
		setTrappingIgnored: E.setTrappingIgnored,
		setTrappingQuantity: E.setTrappingQuantity,
		setTrappingResolution: E.setTrappingResolution,
		settings: m,
		spells: le.spells,
		suggestedActorName: se.suggestedActorName,
		traits: ce.traits,
		trappings: E.trappings
	};
}), sN = { class: "dui-fieldset-legend" }, cN = [
	"checked",
	"disabled",
	"onChange"
], lN = { class: "dui-card-actions" }, uN = /* @__PURE__ */ M({
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
		return (t, i) => (F(), I("section", null, [
			R("p", null, O(e.prompt.droppedCareer.name) + " appears to belong to the " + O(e.prompt.droppedCareer.careerGroup) + " career track. The following lower-tier candidates were found. ", 1),
			(F(!0), I(P, null, N(e.candidateGroups, (t) => (F(), I("fieldset", {
				key: t.level,
				class: "dui-fieldset"
			}, [R("legend", sN, "Tier " + O(t.level || "Unknown"), 1), (F(!0), I(P, null, N(t.candidates, (t) => (F(), I("label", {
				key: t.uuid,
				class: "dui-label"
			}, [R("input", {
				class: "dui-checkbox dui-checkbox-sm",
				checked: e.isCareerQueued(t.uuid) || e.isLowerCareerSelected(t.uuid),
				disabled: e.isCareerQueued(t.uuid),
				type: "checkbox",
				onChange: (e) => r(t, e)
			}, null, 40, cN), R("span", null, [R("strong", null, O(t.name), 1), R("small", null, [B(O(t.careerGroup || "Career") + " ", 1), e.isCareerQueued(t.uuid) ? (F(), I(P, { key: 0 }, [B(" already queued ")], 64)) : V("", !0)])])]))), 128))]))), 128)),
			R("div", lN, [R("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: i[0] ||= (e) => n("addDroppedOnly")
			}, " Add Dropped Only "), R("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: i[1] ||= (e) => n("addSelected")
			}, " Add Selected ")])
		]));
	}
}), dN = ["aria-labelledby"], fN = ["id"], pN = { class: "dui-modal-action" }, mN = /* @__PURE__ */ M({
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
		let n = e, r = t, i = /* @__PURE__ */ k(null), a = gr();
		return Xn(() => n.open, async (e) => {
			await jn();
			let t = i.value;
			if (e && !t?.open) {
				t?.showModal();
				return;
			}
			!e && t?.open && t.close();
		}, { immediate: !0 }), Pr(() => {
			i.value?.open && i.value.close();
		}), (t, n) => (F(), I("dialog", {
			ref_key: "dialogElement",
			ref: i,
			"aria-labelledby": A(a),
			"aria-modal": "true",
			class: "dui-modal",
			onCancel: n[1] ||= Zo((e) => r("close"), ["prevent"])
		}, [R("section", { class: D(["dui-modal-box", { "app:max-w-5xl": e.wide }]) }, [
			R("h2", {
				id: A(a),
				class: "dui-card-title"
			}, O(e.title), 9, fN),
			Gr(t.$slots, "default"),
			R("div", pN, [R("button", {
				class: "dui-btn",
				type: "button",
				onClick: n[0] ||= (e) => r("close")
			}, O(e.closeLabel), 1)])
		], 2)], 40, dN));
	}
}), hN = /* @__PURE__ */ new Map();
function gN(e) {
	let t = e.id.trim();
	if (!t) throw Error("NPC auto-advance strategies must have an id.");
	hN.set(t, {
		...e,
		id: t
	});
}
function _N() {
	return [...hN.values()].sort((e, t) => e.name.localeCompare(t.name));
}
function vN(e) {
	return hN.get(e) ?? null;
}
function yN(e, t) {
	return SN(e, t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function bN(e, t) {
	return SN(SN(e, t, {
		kinds: ["talent"],
		respectTalentMaximums: !0
	}), t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function xN(e, t) {
	return SN(e, t, {
		kinds: ["characteristic"],
		respectTalentMaximums: !1
	});
}
function SN(e, t, n) {
	let r = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), i = TN(e.advancements), a = mj(i).total;
	if (a >= r) return { advancements: i };
	let o = !0;
	for (; o;) {
		o = !1;
		for (let e of i) {
			if (!n.kinds.includes(e.kind)) continue;
			let t = CN(e, n);
			if (!t) continue;
			let i = gj(t) - gj(e);
			i <= 0 || a + i > r || (e.current = t.current, a += i, o = !0);
		}
	}
	return { advancements: i };
}
function CN(e, t) {
	return t.respectTalentMaximums && e.kind === "talent" && !wN(e) ? null : {
		...e,
		current: e.current + ij(e)
	};
}
function wN(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" ? aj(e) < t : !1;
}
function TN(e) {
	return e.map((e) => ({
		...e,
		sources: e.sources.map((e) => ({ ...e }))
	}));
}
gN({
	description: "Cycles visible Skill rows evenly until no next skill increase fits the target XP.",
	id: "skill-master",
	name: "Skill Master",
	run: yN
}), gN({
	description: "Raises visible Talent rows evenly up to known maximums, then spends any remaining XP like Skill Master.",
	id: "gifted-and-talented",
	name: "Gifted & Talented",
	run: bN
}), gN({
	description: "Cycles visible Characteristic rows evenly until no next characteristic increase fits the target XP.",
	id: "all-natural",
	name: "All Natural",
	run: xN
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/advancement-display.ts
function EN(e) {
	let t = e.current - e.careerValue, n = [...e.sources].sort((e, t) => PN(e.kind) - PN(t.kind)).map((e) => DN(e));
	return t !== 0 && n.push(`Manual ${FN(t)}`), n.length ? n.join(", ") : e.includedFromBase ? "Base actor" : "-";
}
function DN(e) {
	return e.kind === "custom" && e.count === 0 ? e.label : `${e.label} ${FN(e.count)}`;
}
function ON(e) {
	return OA(e) !== null;
}
function kN(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function AN(e) {
	return kN(e);
}
function jN(e) {
	return e.talentMaximumLabel ?? "Unknown";
}
function MN(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && AN(e) > t;
}
function NN(e) {
	return gj(e);
}
function PN(e) {
	return e === "characteristic" ? 0 : e === "career" ? 1 : 2;
}
function FN(e) {
	return e > 0 ? `+${e}` : `${e}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/AdvancementRowTailActions.vue?vue&type=script&setup=true&lang.ts
var IN = ["disabled"], LN = /* @__PURE__ */ M({
	__name: "AdvancementRowTailActions",
	props: { entry: {} },
	emits: ["removeCustom", "resetCurrent"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (F(), I(P, null, [R("button", {
			class: "dui-join-item dui-btn dui-btn-sm",
			disabled: e.entry.current === e.entry.careerValue,
			title: "Reset to career value",
			type: "button",
			onClick: r[0] ||= (e) => n("resetCurrent")
		}, " Reset ", 8, IN), e.entry.includedFromCustom ? (F(), I("button", {
			key: 0,
			class: "dui-join-item dui-btn dui-btn-sm",
			title: "Remove dropped entry",
			type: "button",
			onClick: r[1] ||= (e) => n("removeCustom")
		}, " Remove Dropped ")) : V("", !0)], 64));
	}
}), RN = { class: "dui-card dui-card-border dui-card-sm" }, zN = { class: "dui-card-body" }, BN = { class: "dui-card-title" }, VN = {
	key: 0,
	class: "dui-badge dui-badge-primary"
}, HN = { key: 0 }, UN = /* @__PURE__ */ M({
	__name: "NpcBuilderSection",
	props: {
		description: { default: "" },
		number: { default: "" },
		title: {}
	},
	setup(e) {
		return (t, n) => (F(), I("section", RN, [R("div", zN, [
			R("h2", BN, [e.number ? (F(), I("span", VN, O(e.number), 1)) : V("", !0), B(" " + O(e.title), 1)]),
			e.description ? (F(), I("p", HN, O(e.description), 1)) : V("", !0),
			Gr(t.$slots, "default")
		])]));
	}
}), WN = {
	key: 0,
	class: "dui-card-actions"
}, GN = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, KN = { class: "dui-list" }, qN = { class: "dui-list-col-grow" }, JN = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, YN = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, XN = { class: "dui-join" }, ZN = ["disabled", "onClick"], QN = [
	"aria-label",
	"value",
	"onInput"
], $N = ["onClick"], eP = {
	key: 2,
	class: "dui-alert"
}, tP = /* @__PURE__ */ M({
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
		return (t, i) => (F(), L(UN, {
			number: e.sectionNumber,
			title: e.title
		}, {
			default: j(() => [
				e.manualAdvanceCount ? (F(), I("div", WN, [R("span", null, O(e.manualAdvanceCount) + " manual edits", 1), R("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: i[0] ||= (e) => n("resetAll")
				}, " Reset All Advances ")])) : V("", !0),
				e.estimatedNpcXp ? (F(), I("div", GN, [
					R("strong", null, "Estimated NPC XP " + O(e.estimatedNpcXp.total), 1),
					R("span", null, O(e.estimatedNpcXp.characteristics) + " characteristics", 1),
					R("span", null, O(e.estimatedNpcXp.skills) + " skills", 1),
					R("span", null, O(e.estimatedNpcXp.talents) + " talents", 1)
				])) : V("", !0),
				R("ul", KN, [(F(!0), I(P, null, N(e.entries, (t) => (F(), I("li", {
					key: `${t.kind}:${t.name}`,
					class: "dui-list-row"
				}, [R("div", qN, [
					R("strong", null, O(t.name), 1),
					t.current === t.careerValue ? V("", !0) : (F(), I("span", JN, " Manual edit ")),
					e.showSkillSpecializationBadges && A(ON)(t.name) ? (F(), I("span", YN, " Needs specialization ")) : V("", !0),
					R("span", null, " Base " + O(t.baseValue) + " · Advances " + O(t.current) + " · XP " + O(A(NN)(t)), 1),
					R("small", null, "Sources: " + O(A(EN)(t)), 1)
				]), R("div", XN, [
					R("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: A(kN)(t) <= t.minimumTotal,
						title: "Decrease by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, -1)
					}, " -5 ", 8, ZN),
					R("input", {
						class: "dui-join-item dui-input dui-input-sm",
						"aria-label": `Total ${t.name}`,
						value: A(kN)(t),
						min: "0",
						type: "number",
						onInput: (e) => r(t, e)
					}, null, 40, QN),
					R("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						title: "Increase by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, 1)
					}, " +5 ", 8, $N),
					z(LN, {
						entry: t,
						onRemoveCustom: (e) => n("removeCustom", t),
						onResetCurrent: (e) => n("resetCurrent", t)
					}, null, 8, [
						"entry",
						"onRemoveCustom",
						"onResetCurrent"
					])
				])]))), 128))]),
				e.entries.length ? V("", !0) : (F(), I("p", eP, "No " + O(e.title.toLowerCase()) + " to advance yet.", 1))
			]),
			_: 1
		}, 8, ["number", "title"]));
	}
}), nP = { class: "dui-fieldset" }, rP = ["value"], iP = { class: "dui-fieldset" }, aP = ["value"], oP = ["value"], sP = { key: 0 }, cP = { class: "dui-card-actions" }, lP = ["disabled"], uP = /* @__PURE__ */ M({
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
		return (t, a) => (F(), L(UN, {
			description: "Spend toward a target without exceeding it. Existing manual edits are preserved.",
			number: "4",
			title: "Auto Advance"
		}, {
			default: j(() => [
				R("fieldset", nP, [a[1] ||= R("legend", { class: "dui-fieldset-legend" }, "Target XP", -1), R("input", {
					"aria-label": "Target XP",
					class: "dui-input dui-input-sm",
					value: e.targetXp,
					min: "0",
					type: "number",
					onInput: r
				}, null, 40, rP)]),
				R("fieldset", iP, [a[2] ||= R("legend", { class: "dui-fieldset-legend" }, "Strategy", -1), R("select", {
					"aria-label": "Auto advance strategy",
					class: "dui-select dui-select-sm",
					value: e.selectedAutoAdvanceStrategyId,
					onChange: i
				}, [(F(!0), I(P, null, N(e.autoAdvanceStrategies, (e) => (F(), I("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, oP))), 128))], 40, aP)]),
				e.selectedAutoAdvanceStrategy ? (F(), I("p", sP, O(e.selectedAutoAdvanceStrategy.description), 1)) : V("", !0),
				R("div", cP, [R("button", {
					class: "dui-btn dui-btn-primary dui-btn-sm",
					disabled: !e.canRunAutoAdvance,
					title: "Advance rows as close to the target XP as possible without going over",
					type: "button",
					onClick: a[0] ||= (e) => n("runAutoAdvance")
				}, " Auto Advance ", 8, lP)])
			]),
			_: 1
		}));
	}
}), dP = { class: "dui-card-actions" }, fP = ["disabled"], pP = { class: "dui-list" }, mP = { class: "dui-list-col-grow" }, hP = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, gP = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, _P = { class: "dui-join" }, vP = ["disabled", "onClick"], yP = [
	"aria-label",
	"value",
	"onInput"
], bP = ["onClick"], xP = {
	key: 0,
	class: "dui-alert"
}, SP = /* @__PURE__ */ M({
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
		return (t, i) => (F(), L(UN, {
			number: "3",
			title: "Talents"
		}, {
			default: j(() => [
				R("div", dP, [R("span", null, O(e.maximizableTalentCount) + " below maximum", 1), R("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.maximizableTalentCount === 0,
					title: "Raise talents with known maximums to their maximum ranks",
					type: "button",
					onClick: i[0] ||= (e) => n("maximizeTalents")
				}, " Maximize Talents ", 8, fP)]),
				R("ul", pP, [(F(!0), I(P, null, N(e.talents, (e) => (F(), I("li", {
					key: `${e.kind}:${e.name}`,
					class: "dui-list-row"
				}, [R("div", mP, [
					R("strong", null, O(e.name), 1),
					e.current === e.careerValue ? V("", !0) : (F(), I("span", hP, " Manual edit ")),
					R("span", null, " Ranks " + O(A(AN)(e)) + " · Maximum " + O(A(jN)(e)) + " · XP " + O(A(NN)(e)), 1),
					R("small", null, "Sources: " + O(A(EN)(e)), 1),
					A(MN)(e) ? (F(), I("span", gP, " Over maximum ")) : V("", !0)
				]), R("div", _P, [
					R("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: A(AN)(e) <= e.minimumTotal,
						title: "Decrease by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, -1)
					}, " -1 ", 8, vP),
					R("input", {
						class: "dui-join-item dui-input dui-input-sm",
						"aria-label": `Ranks ${e.name}`,
						value: A(AN)(e),
						min: "0",
						type: "number",
						onInput: (t) => r(e, t)
					}, null, 40, yP),
					R("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						title: "Increase by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, 1)
					}, " +1 ", 8, bP),
					z(LN, {
						entry: e,
						onRemoveCustom: (t) => n("removeCustom", e),
						onResetCurrent: (t) => n("resetCurrent", e)
					}, null, 8, [
						"entry",
						"onRemoveCustom",
						"onResetCurrent"
					])
				])]))), 128))]),
				e.talents.length ? V("", !0) : (F(), I("p", xP, "No talents to advance yet."))
			]),
			_: 1
		}));
	}
}), CP = /* @__PURE__ */ M({
	__name: "NpcBuilderAdvancementsTab",
	props: { page: {} },
	setup(e) {
		let t = oN(), { advancements: n, estimatedNpcXp: r, maximizableTalentCount: i } = zs(t), a = _N(), o = /* @__PURE__ */ k("skill-master"), s = /* @__PURE__ */ k(0), c = H(() => n.value.filter((e) => e.kind === "characteristic")), l = H(() => n.value.filter((e) => e.kind === "skill")), u = H(() => n.value.filter((e) => e.kind === "talent")), d = H(() => n.value.filter((e) => e.current !== e.careerValue).length), f = H(() => vN(o.value) ?? a[0] ?? null), p = H(() => f.value !== null && s.value > r.value.total);
		Xn(() => r.value.total, (e) => {
			s.value < e && (s.value = e);
		}, { immediate: !0 });
		function m() {
			let e = f.value;
			e && t.applyAutoAdvance(e, s.value);
		}
		return (n, h) => (F(), I("section", null, [e.page === "detail-characteristics" ? (F(), L(tP, {
			key: 0,
			entries: c.value,
			"estimated-npc-xp": A(r),
			"manual-advance-count": d.value,
			"section-number": "",
			title: "Characteristics",
			onAdjustCurrent: A(t).adjustAdvancementCurrent,
			onRemoveCustom: A(t).removeCustomAdvancement,
			onResetAll: A(t).resetAllAdvancementCurrents,
			onResetCurrent: A(t).resetAdvancementCurrent,
			onTotalChange: A(t).setAdvancementTotal
		}, null, 8, [
			"entries",
			"estimated-npc-xp",
			"manual-advance-count",
			"onAdjustCurrent",
			"onRemoveCustom",
			"onResetAll",
			"onResetCurrent",
			"onTotalChange"
		])) : e.page === "detail-skills" ? (F(), L(tP, {
			key: 1,
			entries: l.value,
			"section-number": "",
			"show-skill-specialization-badges": "",
			title: "Skills",
			onAdjustCurrent: A(t).adjustAdvancementCurrent,
			onRemoveCustom: A(t).removeCustomAdvancement,
			onResetCurrent: A(t).resetAdvancementCurrent,
			onTotalChange: A(t).setAdvancementTotal
		}, null, 8, [
			"entries",
			"onAdjustCurrent",
			"onRemoveCustom",
			"onResetCurrent",
			"onTotalChange"
		])) : e.page === "detail-talents" ? (F(), L(SP, {
			key: 2,
			"maximizable-talent-count": A(i),
			talents: u.value,
			onAdjustCurrent: A(t).adjustAdvancementCurrent,
			onMaximizeTalents: A(t).maximizeTalents,
			onRemoveCustom: A(t).removeCustomAdvancement,
			onResetCurrent: A(t).resetAdvancementCurrent,
			onTotalChange: A(t).setAdvancementTotal
		}, null, 8, [
			"maximizable-talent-count",
			"talents",
			"onAdjustCurrent",
			"onMaximizeTalents",
			"onRemoveCustom",
			"onResetCurrent",
			"onTotalChange"
		])) : (F(), L(uP, {
			key: 3,
			"auto-advance-strategies": A(a),
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
function wP(e) {
	return [
		`Ch ${e.grants.characteristics.length}`,
		`Sk ${e.grants.skills.length}`,
		`Ta ${e.grants.talents.length}`,
		`Tr ${e.grants.trappings.length}`
	].join(" / ");
}
function TP(e) {
	let t = e.slice(0, 3).join(", "), n = e.length - 3;
	return e.length ? n > 0 ? `${t}, +${n}` : t : "-";
}
function EP(e) {
	return e.split(/\s+/).map((e) => e.at(0)).filter(Boolean).slice(0, 2).join("").toLocaleUpperCase();
}
function DP(e) {
	return `${e.label}\n${e.img}`;
}
function OP(e) {
	return `Use ${e.label} (${kP(e)})`;
}
function kP(e) {
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
var AP = { class: "dui-fieldset" }, jP = ["value"], MP = { class: "dui-fieldset" }, NP = ["disabled", "value"], PP = { value: "" }, FP = ["value"], IP = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, LP = {
	key: 1,
	class: "dui-alert"
}, RP = {
	key: 0,
	class: "dui-avatar"
}, zP = { class: "app:size-16 app:shrink-0 app:rounded-lg" }, BP = ["src"], VP = {
	key: 1,
	class: "dui-badge"
}, HP = /* @__PURE__ */ M({
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
		return (t, n) => (F(), L(UN, {
			description: e.description,
			number: e.number,
			title: e.title
		}, {
			default: j(() => [
				R("fieldset", AP, [n[0] ||= R("legend", { class: "dui-fieldset-legend" }, "Search world actors", -1), R("input", {
					"aria-label": "Search world actors",
					class: "dui-input dui-input-sm",
					value: e.actorFilter,
					placeholder: "Filter actors",
					type: "search",
					onInput: r
				}, null, 40, jP)]),
				R("fieldset", MP, [n[1] ||= R("legend", { class: "dui-fieldset-legend" }, "Base statblock", -1), R("select", {
					"aria-label": "Base statblock",
					class: "dui-select dui-select-sm",
					disabled: e.isLoadingActors,
					value: e.selectedBaseActorUuid,
					onChange: i
				}, [R("option", PP, O(e.isLoadingActors ? "Loading actors..." : "Choose an actor"), 1), (F(!0), I(P, null, N(e.filteredActors, (e) => (F(), I("option", {
					key: e.uuid,
					value: e.uuid
				}, O(e.name), 9, FP))), 128))], 40, NP)]),
				e.errorMessage ? (F(), I("p", IP, O(e.errorMessage), 1)) : V("", !0),
				e.selectedBaseActor ? (F(), I("article", LP, [e.selectedBaseActor.img ? (F(), I("div", RP, [R("div", zP, [R("img", {
					src: e.selectedBaseActor.img,
					alt: "",
					class: "app:h-full app:w-full app:object-cover",
					height: "64",
					width: "64"
				}, null, 8, BP)])])) : (F(), I("span", VP, O(A(EP)(e.selectedBaseActor.name)), 1)), R("div", null, [R("strong", null, O(e.selectedBaseActor.name), 1), R("span", null, [
					B(O(e.selectedBaseActor.species || "Species not found") + " ", 1),
					e.selectedBaseActor.type ? (F(), I(P, { key: 0 }, [B(" - " + O(e.selectedBaseActor.type), 1)], 64)) : V("", !0),
					e.isLoadingBaseDraft ? (F(), I(P, { key: 1 }, [B(" - loading details...")], 64)) : V("", !0)
				])])])) : V("", !0)
			]),
			_: 1
		}, 8, [
			"description",
			"number",
			"title"
		]));
	}
}), UP = { class: "dui-card-actions" }, WP = { class: "dui-stats dui-stats-vertical app:w-full" }, GP = { class: "dui-stat" }, KP = { class: "dui-stat-value" }, qP = {
	key: 0,
	class: "dui-stat-desc"
}, JP = { class: "dui-stat" }, YP = { class: "dui-stat-value" }, XP = {
	key: 0,
	class: "dui-stat-desc"
}, ZP = {
	key: 1,
	class: "dui-stat-desc"
}, QP = { class: "dui-stat" }, $P = { class: "dui-stat-value" }, eF = { class: "dui-stat" }, tF = { class: "dui-stat-value" }, nF = { class: "dui-stat" }, rF = { class: "dui-stat-value" }, iF = { class: "dui-stat-desc" }, aF = {
	key: 0,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, oF = { key: 1 }, sF = /* @__PURE__ */ M({
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
		return (t, n) => (F(), L(UN, {
			number: "4",
			title: "Build Preview"
		}, {
			default: j(() => [
				R("div", UP, [R("span", { class: D(["dui-badge", e.buildPreviewStatus === "Ready" ? "dui-badge-success" : "dui-badge-warning"]) }, O(e.buildPreviewStatus), 3)]),
				R("div", WP, [
					R("div", GP, [
						n[0] ||= R("span", { class: "dui-stat-title" }, "Advances", -1),
						R("strong", KP, O(e.advancementCount), 1),
						e.editedAdvanceCount ? (F(), I("small", qP, O(e.editedAdvanceCount) + " manually edited ", 1)) : V("", !0)
					]),
					R("div", JP, [
						n[1] ||= R("span", { class: "dui-stat-title" }, "Trappings", -1),
						R("strong", YP, O(e.visibleTrappingCount), 1),
						e.fallbackTrappingCount ? (F(), I("small", XP, O(e.fallbackTrappingCount) + " blank fallback ", 1)) : V("", !0),
						e.ignoredTrappingCount ? (F(), I("small", ZP, O(e.ignoredTrappingCount) + " ignored ", 1)) : V("", !0)
					]),
					R("div", QP, [n[2] ||= R("span", { class: "dui-stat-title" }, "Traits", -1), R("strong", $P, O(e.traitCount), 1)]),
					R("div", eF, [n[3] ||= R("span", { class: "dui-stat-title" }, "Spells", -1), R("strong", tF, O(e.selectedSpellCount), 1)]),
					R("div", nF, [
						n[4] ||= R("span", { class: "dui-stat-title" }, "Estimated NPC XP", -1),
						R("strong", rF, O(e.estimatedNpcXp.total), 1),
						R("small", iF, O(e.estimatedNpcXp.characteristics) + " char / " + O(e.estimatedNpcXp.skills) + " skill / " + O(e.estimatedNpcXp.talents) + " talent ", 1)
					])
				]),
				e.buildPreviewWarnings.length ? (F(), I("div", aF, [R("div", null, [(F(!0), I(P, null, N(e.buildPreviewWarnings, (e) => (F(), I("p", { key: e }, O(e), 1))), 128))])])) : (F(), I("p", oF, " The draft has a base Actor, queued Career data, resolved trappings, and a portrait ready to apply. "))
			]),
			_: 1
		}));
	}
}), cF = { class: "dui-list" }, lF = { class: "dui-list-row" }, uF = { class: "dui-list-row" }, dF = { class: "dui-list-row" }, fF = { class: "dui-list-row" }, pF = { class: "dui-list-row" }, mF = { class: "dui-list-row" }, hF = { class: "dui-list-row" }, gF = /* @__PURE__ */ M({
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
		return (t, n) => (F(), I("dl", cF, [
			R("div", lF, [n[0] ||= R("dt", null, "Build name", -1), R("dd", null, O(e.finalActorName), 1)]),
			R("div", uF, [n[1] ||= R("dt", null, "Base actor", -1), R("dd", null, O(e.baseActorName), 1)]),
			R("div", dF, [n[2] ||= R("dt", null, "Final career", -1), R("dd", null, O(e.finalCareerName), 1)]),
			R("div", fF, [n[3] ||= R("dt", null, "Career items", -1), R("dd", null, O(e.careerItemCount), 1)]),
			R("div", pF, [n[4] ||= R("dt", null, "Apply", -1), R("dd", null, O(e.advancementCount) + " advance rows, " + O(e.visibleTrappingCount) + " trappings, " + O(e.traitCount) + " traits, " + O(e.selectedSpellCount) + " spells ", 1)]),
			R("div", mF, [n[5] ||= R("dt", null, "Extracted grants", -1), R("dd", null, O(e.grantTotals.characteristics) + " characteristics, " + O(e.grantTotals.skills) + " skills, " + O(e.grantTotals.talents) + " talents, " + O(e.grantTotals.trappings) + " trappings ", 1)]),
			R("div", hF, [n[6] ||= R("dt", null, "Estimated NPC XP", -1), R("dd", null, O(e.estimatedNpcXpTotal), 1)])
		]));
	}
}), _F = { class: "app:grid app:gap-3" }, vF = { class: "app:flex app:flex-wrap app:items-start app:gap-3" }, yF = ["aria-label", "disabled"], bF = ["src"], xF = { key: 1 }, SF = { key: 2 }, CF = { class: "app:flex app:min-w-48 app:flex-1 app:flex-col app:items-start app:gap-2" }, wF = ["title"], TF = {
	key: 1,
	class: "app:text-base-content/70"
}, EF = ["disabled"], DF = {
	key: 0,
	"aria-live": "polite",
	role: "status"
}, OF = ["value"], kF = {
	key: 1,
	class: "dui-fieldset"
}, AF = { class: "dui-fieldset-legend" }, jF = { key: 0 }, MF = { key: 1 }, NF = { class: "app:flex app:flex-wrap app:gap-2" }, PF = [
	"aria-label",
	"aria-pressed",
	"title",
	"onClick"
], FF = ["src"], IF = ["aria-label"], LF = /* @__PURE__ */ M({
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
		return (t, r) => (F(), I("section", _F, [
			R("div", vF, [R("button", {
				"aria-label": e.portraitCandidates.length ? "Open portrait gallery" : "No portraits available",
				class: "dui-btn dui-btn-square app:h-32 app:w-32 app:shrink-0 app:overflow-hidden app:p-1",
				disabled: !e.portraitCandidates.length,
				title: "Open portrait gallery",
				type: "button",
				onClick: r[0] ||= (e) => n("openGallery")
			}, [e.finalPortraitPath ? (F(), I("img", {
				key: 0,
				alt: "",
				class: "app:h-full app:w-full app:rounded-box app:object-cover",
				height: "192",
				src: e.finalPortraitPath,
				width: "192"
			}, null, 8, bF)) : e.finalCareer ? (F(), I("strong", xF, O(A(EP)(e.finalCareer.name)), 1)) : (F(), I("span", SF, "No portrait"))], 8, yF), R("div", CF, [
				r[3] ||= R("span", { class: "dui-badge dui-badge-outline" }, "Current portrait", -1),
				R("strong", null, O(e.selectedPortraitCandidate?.label ?? "No portrait selected"), 1),
				e.finalPortraitPath ? (F(), I("small", {
					key: 0,
					class: "app:break-all app:text-base-content/70",
					title: e.finalPortraitPath
				}, O(e.finalPortraitPath), 9, wF)) : (F(), I("span", TF, " A Career or base Actor image will be used when available. ")),
				R("button", {
					class: "dui-btn dui-btn-outline dui-btn-sm",
					disabled: !e.portraitCandidates.length,
					type: "button",
					onClick: r[1] ||= (e) => n("openGallery")
				}, " Browse " + O(e.portraitCandidates.length) + " portraits ", 9, EF)
			])]),
			e.isLoadingPortraitCandidates && e.portraitSearchProgress ? (F(), I("div", DF, [R("progress", {
				"aria-label": "Portrait search progress",
				class: "dui-progress dui-progress-info app:w-full",
				value: e.portraitSearchProgressValue,
				max: "100"
			}, null, 8, OF), R("small", null, O(e.portraitSearchProgressLabel), 1)])) : V("", !0),
			e.portraitCandidates.length || e.isLoadingPortraitCandidates ? (F(), I("fieldset", kF, [R("legend", AF, [r[4] ||= R("span", null, "Quick picks", -1), e.isLoadingPortraitCandidates ? (F(), I("span", jF, "Updating...")) : (F(), I("span", MF, O(e.portraitCandidates.length) + " options", 1))]), R("div", NF, [(F(!0), I(P, null, N(e.compactPortraitCandidates, (t) => (F(), I("button", {
				key: t.key,
				"aria-label": A(OP)(t),
				"aria-pressed": t.key === e.selectedPortraitCandidateKey,
				class: D(["dui-btn dui-btn-square app:overflow-hidden app:p-1", { "dui-btn-active dui-btn-outline": t.key === e.selectedPortraitCandidateKey }]),
				title: A(DP)(t),
				type: "button",
				onClick: (e) => n("selectPortrait", t)
			}, [R("img", {
				alt: "",
				class: "app:h-full app:w-full app:rounded-box app:object-cover",
				height: "64",
				loading: "lazy",
				src: t.img,
				width: "64"
			}, null, 8, FF)], 10, PF))), 128)), e.hiddenPortraitCandidateCount > 0 ? (F(), I("button", {
				key: 0,
				"aria-label": `Open ${e.hiddenPortraitCandidateCount} more portrait options`,
				class: "dui-btn dui-btn-square",
				type: "button",
				onClick: r[2] ||= (e) => n("openGallery")
			}, " +" + O(e.hiddenPortraitCandidateCount), 9, IF)) : V("", !0)])])) : V("", !0)
		]));
	}
}), RF = { class: "app:grid app:gap-3 md:app:sticky md:app:top-28 md:app:max-h-[calc(100vh-10rem)] md:app:self-start md:app:overflow-y-auto" }, zF = { class: "dui-fieldset" }, BF = ["placeholder", "value"], VF = { class: "app:hidden md:app:grid md:app:gap-3" }, HF = { class: "dui-collapse dui-collapse-arrow dui-card-border" }, UF = { class: "dui-collapse-content" }, WF = /* @__PURE__ */ M({
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
		return (t, i) => (F(), I("aside", RF, [z(UN, {
			description: "The generated Actor identity stays visible while Build NPC controls change.",
			title: "Preview"
		}, {
			default: j(() => [z(LF, {
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
			]), R("fieldset", zF, [i[2] ||= R("legend", { class: "dui-fieldset-legend" }, "NPC name", -1), R("input", {
				"aria-label": "NPC name",
				class: "dui-input dui-input-sm",
				placeholder: e.suggestedActorName,
				value: e.actorName,
				type: "text",
				onInput: r
			}, null, 40, BF)])]),
			_: 1
		}), R("div", VF, [z(sF, {
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
		]), R("details", HF, [i[3] ||= R("summary", { class: "dui-collapse-title" }, "Complete build details", -1), R("div", UF, [z(gF, {
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
}), GF = {
	key: 0,
	class: "dui-list app:gap-1"
}, KF = [
	"onDragenter",
	"onDragover",
	"onDrop"
], qF = ["onDragstart"], JF = {
	key: 0,
	class: "dui-avatar"
}, YF = { class: "app:size-10 app:rounded-md" }, XF = ["src"], ZF = {
	key: 1,
	class: "dui-badge dui-badge-sm"
}, QF = { class: "dui-list-col-grow app:min-w-0" }, $F = { class: "app:flex app:min-w-0 app:flex-wrap app:items-center app:gap-1" }, eI = { class: "app:truncate" }, tI = {
	key: 0,
	class: "dui-badge dui-badge-info dui-badge-xs"
}, nI = {
	key: 1,
	class: "dui-badge dui-badge-info dui-badge-xs"
}, rI = { class: "app:flex app:min-w-0 app:items-center app:gap-2 app:text-xs" }, iI = { class: "app:shrink-0" }, aI = ["title"], oI = { class: "app:flex app:items-center app:justify-end app:gap-1" }, sI = { class: "app:flex app:items-center app:gap-1 app:text-xs" }, cI = ["value", "onInput"], lI = { class: "dui-join" }, uI = ["disabled", "onClick"], dI = ["disabled", "onClick"], fI = ["onClick"], pI = {
	key: 1,
	class: "dui-alert"
}, mI = /* @__PURE__ */ M({
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
		return (t, n) => (F(), L(UN, {
			description: "Careers are applied in this order. Drag rows or use the buttons to reorder them.",
			number: "2",
			title: "Career Queue"
		}, {
			default: j(() => [e.careers.length ? (F(), I("ol", GF, [(F(!0), I(P, null, N(e.careers, (t, a) => (F(), I("li", {
				key: t.uuid,
				class: D(["dui-list-row app:grid-cols-[auto_auto_minmax(0,1fr)_auto] app:items-center app:gap-2 app:rounded-md app:px-2 app:py-2", {
					"app:border-t-2 app:border-dashed app:border-info": i(a) === "before",
					"app:border-b-2 app:border-dashed app:border-info": i(a) === "after",
					"app:opacity-60": e.draggedCareerIndex === a
				}]),
				onDragenter: Zo((e) => r("careerDragEnter", a), ["prevent", "stop"]),
				onDragover: (e) => r("careerDragOver", a, e),
				onDrop: (e) => r("careerDropOnRow", a, e)
			}, [
				R("span", {
					"aria-hidden": "true",
					class: D(["dui-badge dui-badge-ghost dui-badge-sm app:cursor-grab", { "app:cursor-grabbing": e.draggedCareerIndex === a }]),
					draggable: "true",
					title: "Drag to reorder",
					onDragend: n[0] ||= (e) => r("careerDragEnd"),
					onDragstart: (e) => r("careerDragStart", a, e)
				}, " Drag ", 42, qF),
				t.img ? (F(), I("div", JF, [R("div", YF, [R("img", {
					src: t.img,
					alt: "",
					class: "app:h-full app:w-full app:object-cover",
					height: "40",
					width: "40"
				}, null, 8, XF)])])) : (F(), I("span", ZF, O(A(EP)(t.name)), 1)),
				R("div", QF, [R("div", $F, [R("strong", eI, O(t.name), 1), e.draggedCareerIndex === a ? (F(), I("span", tI, " Dragging ")) : i(a) ? (F(), I("span", nI, " Place " + O(i(a)), 1)) : V("", !0)]), R("div", rI, [R("span", iI, [B(O(t.careerGroup || "Career") + " ", 1), t.level === null ? V("", !0) : (F(), I(P, { key: 0 }, [B(" level " + O(t.level), 1)], 64))]), R("small", {
					class: "dui-badge dui-badge-ghost dui-badge-sm app:min-w-0 app:truncate",
					title: [
						`Characteristics: ${A(TP)(t.grants.characteristics)}`,
						`Skills: ${A(TP)(t.grants.skills)}`,
						`Talents: ${A(TP)(t.grants.talents)}`,
						`Trappings: ${A(TP)(t.grants.trappings)}`
					].join("\n")
				}, O(A(wP)(t)), 9, aI)])]),
				R("div", oI, [R("label", sI, [n[1] ||= B(" Qty ", -1), R("input", {
					class: "dui-input dui-input-xs app:w-14",
					value: t.quantity,
					min: "1",
					type: "number",
					onInput: (e) => r("careerQuantityInput", a, e)
				}, null, 40, cI)]), R("div", lI, [
					R("button", {
						class: "dui-join-item dui-btn dui-btn-xs",
						disabled: a === 0,
						title: "Move career earlier",
						type: "button",
						onClick: (e) => r("moveCareer", a, -1)
					}, " Up ", 8, uI),
					R("button", {
						class: "dui-join-item dui-btn dui-btn-xs",
						disabled: a === e.careers.length - 1,
						title: "Move career later",
						type: "button",
						onClick: (e) => r("moveCareer", a, 1)
					}, " Down ", 8, dI),
					R("button", {
						class: "dui-join-item dui-btn dui-btn-xs",
						type: "button",
						onClick: (e) => r("removeCareer", a)
					}, " Remove ", 8, fI)
				])])
			], 42, KF))), 128))])) : (F(), I("p", pI, "No careers queued yet."))]),
			_: 1
		}));
	}
}), hI = { class: "app:grid app:gap-3" }, gI = { class: "dui-fieldset" }, _I = ["for"], vI = { class: "dui-join app:w-full" }, yI = ["id", "onKeydown"], bI = { class: "app:grid app:gap-2 md:app:grid-cols-3" }, xI = [
	"onDragenter",
	"onDragleave",
	"onDragover",
	"onDrop"
], SI = { class: "dui-fieldset-legend app:flex app:items-center app:gap-2" }, CI = { class: "app:flex app:flex-wrap app:gap-2" }, wI = [
	"title",
	"onClick",
	"onDragstart",
	"onKeydown"
], TI = { "aria-live": "polite" }, EI = /* @__PURE__ */ M({
	__name: "PortraitFilterTags",
	props: { tags: {} },
	emits: ["createSearchTerm", "filterTagSectionChange"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ k(""), a = gr(), o = /* @__PURE__ */ k(null), s = /* @__PURE__ */ k(null), c = [
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
		], l = H(() => Object.fromEntries(c.map((e) => [e.id, n.tags.filter((t) => t.section === e.id)])));
		function u() {
			let e = i.value;
			r("createSearchTerm", e), i.value = "";
		}
		function d(e, t) {
			t.stopPropagation(), o.value = e, t.dataTransfer?.setData("text/plain", Kj(e.id)), t.dataTransfer?.setData(Rj, e.id), t.dataTransfer && (t.dataTransfer.effectAllowed = "move");
		}
		function f(e, t) {
			t.preventDefault(), t.stopPropagation(), s.value = e, t.dataTransfer && (t.dataTransfer.dropEffect = v(o.value, e) ? "move" : "none");
		}
		function p(e, t) {
			t.stopPropagation(), !(t.currentTarget instanceof Node && t.relatedTarget instanceof Node && t.currentTarget.contains(t.relatedTarget)) && s.value === e && (s.value = null);
		}
		function m(e, t) {
			t.preventDefault(), t.stopPropagation();
			let i = t.dataTransfer?.getData("application/x-wfrp4e-customizer-portrait-filter-tag") || qj(t.dataTransfer?.getData("text/plain") ?? ""), a = o.value ?? n.tags.find((e) => e.id === i) ?? null;
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
		let b = H(() => s.value === "removed" ? o.value?.canRemove ? "Drop to remove this tag" : "Source tags stay available" : "Trash");
		return (e, t) => (F(), I("section", hI, [
			R("fieldset", gI, [
				t[5] ||= R("legend", { class: "dui-fieldset-legend" }, "Add search terms", -1),
				R("label", {
					class: "app:text-sm",
					for: A(a)
				}, "Search terms", 8, _I),
				R("div", vI, [Un(R("input", {
					id: A(a),
					"onUpdate:modelValue": t[0] ||= (e) => i.value = e,
					"aria-label": "Portrait search terms",
					class: "dui-input dui-input-sm dui-join-item app:flex-1",
					placeholder: "Search terms",
					type: "search",
					onKeydown: $o(Zo(u, ["prevent"]), ["enter"])
				}, null, 40, yI), [[Go, i.value]]), R("button", {
					class: "dui-btn dui-btn-sm dui-join-item",
					type: "button",
					onClick: u
				}, " Add ")])
			]),
			t[7] ||= R("p", { class: "app:m-0 app:text-sm app:text-base-content/70" }, " Drag tags between groups. Select a tag to move it to the next group; press Delete to remove a custom text tag. ", -1),
			R("div", bI, [(F(), I(P, null, N(c, (e) => R("fieldset", {
				key: e.id,
				class: D(["dui-fieldset app:min-h-24 app:rounded-box app:border app:border-base-300 app:p-2", { "app:border-info app:bg-info/10 app:ring-2 app:ring-info": s.value === e.id }]),
				onDragenter: (t) => f(e.id, t),
				onDragleave: (t) => p(e.id, t),
				onDragover: (t) => f(e.id, t),
				onDrop: (t) => m(e.id, t)
			}, [R("legend", SI, [R("span", null, O(e.title), 1), R("span", {
				"aria-live": "polite",
				class: D(["dui-badge dui-badge-info dui-badge-sm", { "app:invisible": s.value !== e.id }])
			}, O(y(e.id) || "Drop here"), 3)]), R("div", CI, [(F(!0), I(P, null, N(l.value[e.id], (e) => (F(), I("button", {
				key: e.id,
				class: D(["dui-badge app:h-auto app:cursor-grab app:whitespace-normal app:py-2", [e.kind === "source" ? "dui-badge-outline" : "dui-badge-primary", o.value?.id === e.id ? "app:opacity-50" : ""]]),
				draggable: "true",
				title: `Drag ${e.label} to another group, or select it to move it to the next group.`,
				type: "button",
				onClick: (t) => h(e),
				onDragend: _,
				onDragstart: (t) => d(e, t),
				onKeydown: $o(Zo((t) => g(e), ["prevent"]), ["delete"])
			}, O(e.label), 43, wI))), 128))])], 42, xI)), 64))]),
			R("div", {
				"aria-label": "Remove search tag",
				class: D(["dui-alert app:justify-center", {
					"dui-alert-error app:ring-2 app:ring-error": s.value === "removed" && !o.value?.canRemove,
					"dui-alert-warning app:ring-2 app:ring-warning": s.value === "removed" && o.value?.canRemove
				}]),
				onDragenter: t[1] ||= (e) => f("removed", e),
				onDragleave: t[2] ||= (e) => p("removed", e),
				onDragover: t[3] ||= (e) => f("removed", e),
				onDrop: t[4] ||= (e) => m("removed", e)
			}, [t[6] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), R("span", TI, O(b.value), 1)], 34)
		]));
	}
}), DI = ["aria-busy"], OI = { class: "app:flex app:flex-wrap app:items-start app:justify-between app:gap-2" }, kI = { class: "dui-badge dui-badge-outline" }, AI = {
	key: 0,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, jI = { class: "app:flex-1" }, MI = ["value"], NI = {
	key: 1,
	class: "dui-alert dui-alert-warning"
}, PI = {
	key: 2,
	class: "app:max-h-[26rem] app:overflow-y-auto app:pr-1"
}, FI = { class: "dui-list app:m-0 app:grid app:grid-cols-[repeat(auto-fill,minmax(8.5rem,1fr))] app:gap-3 app:p-0" }, II = [
	"aria-label",
	"aria-pressed",
	"title",
	"onClick"
], LI = ["src"], RI = { class: "app:flex app:flex-wrap app:items-center app:justify-between app:gap-1" }, zI = {
	key: 0,
	class: "dui-badge dui-badge-success dui-badge-sm"
}, BI = { class: "app:text-sm" }, VI = {
	key: 3,
	class: "dui-alert"
}, HI = /* @__PURE__ */ M({
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
		return (t, r) => (F(), L(mN, {
			"close-label": "Done",
			open: e.open,
			title: "Choose an NPC Portrait",
			wide: "",
			onClose: r[2] ||= (e) => n("close")
		}, {
			default: j(() => [R("section", {
				"aria-busy": e.isLoadingPortraitCandidates,
				class: "app:grid app:gap-3"
			}, [
				R("header", OI, [r[3] ||= R("div", null, [R("p", { class: "app:m-0" }, "Select a portrait to apply it immediately to this draft."), R("small", { class: "app:text-base-content/70" }, " Career and base Actor images remain available regardless of search terms. ")], -1), R("span", kI, O(e.portraitCandidates.length) + " options ", 1)]),
				z(EI, {
					tags: e.portraitFilterTags,
					onCreateSearchTerm: r[0] ||= (e) => n("createSearchTerm", e),
					onFilterTagSectionChange: r[1] ||= (e, t) => n("filterTagSectionChange", e, t)
				}, null, 8, ["tags"]),
				e.isLoadingPortraitCandidates ? (F(), I("div", AI, [R("div", jI, [
					r[4] ||= R("strong", null, "Updating portrait results...", -1),
					R("progress", {
						"aria-label": "Portrait search progress",
						class: "dui-progress dui-progress-info app:w-full",
						value: e.portraitSearchProgressValue,
						max: "100"
					}, null, 8, MI),
					R("small", null, O(e.portraitSearchProgressLabel), 1)
				])])) : e.portraitSearchTerms.length && !e.portraitCandidates.length ? (F(), I("p", NI, " No portraits match the current filter tags. ")) : V("", !0),
				e.portraitCandidates.length ? (F(), I("div", PI, [R("ul", FI, [(F(!0), I(P, null, N(e.portraitCandidates, (t) => (F(), I("li", { key: t.key }, [R("button", {
					"aria-label": A(OP)(t),
					"aria-pressed": t.key === e.selectedPortraitCandidateKey,
					class: D(["dui-btn app:h-auto app:min-h-0 app:w-full app:flex-col app:items-stretch app:justify-start app:gap-2 app:overflow-hidden app:whitespace-normal app:p-2 app:text-left", t.key === e.selectedPortraitCandidateKey ? "dui-btn-active dui-btn-outline" : "dui-btn-ghost"]),
					title: A(DP)(t),
					type: "button",
					onClick: (e) => n("selectPortrait", t)
				}, [
					R("img", {
						alt: "",
						class: "app:aspect-square app:w-full app:rounded-box app:bg-base-300 app:object-cover",
						height: "192",
						loading: "lazy",
						src: t.img,
						width: "192"
					}, null, 8, LI),
					R("span", RI, [R("small", null, O(A(kP)(t)), 1), t.key === e.selectedPortraitCandidateKey ? (F(), I("span", zI, " Selected ")) : V("", !0)]),
					R("strong", BI, O(t.label), 1)
				], 10, II)]))), 128))])])) : e.isLoadingPortraitCandidates ? V("", !0) : (F(), I("p", VI, " No portraits are available yet. Choose a base Actor or queue a Career to start the search. "))
			], 8, DI)]),
			_: 1
		}, 8, ["open"]));
	}
}), UI = {
	key: 0,
	class: "dui-alert"
}, WI = {
	key: 0,
	class: "dui-avatar"
}, GI = { class: "app:size-14 app:shrink-0 app:rounded-lg" }, KI = ["src"], qI = {
	key: 1,
	class: "dui-badge"
}, JI = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, YI = { class: "dui-card-actions" }, XI = ["disabled"], ZI = {
	key: 2,
	class: "dui-alert"
}, QI = /* @__PURE__ */ M({
	__name: "QuickCareerPanel",
	props: {
		careers: {},
		finalCareer: {}
	},
	emits: ["clearCareers"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (F(), L(UN, {
			description: "Quick Build keeps one chosen Career chain instead of a manual queue.",
			number: "2",
			title: "Career"
		}, {
			default: j(() => [
				e.finalCareer ? (F(), I("article", UI, [e.finalCareer.img ? (F(), I("div", WI, [R("div", GI, [R("img", {
					src: e.finalCareer.img,
					alt: "",
					class: "app:h-full app:w-full app:object-cover",
					height: "56",
					width: "56"
				}, null, 8, KI)])])) : (F(), I("span", qI, O(A(EP)(e.finalCareer.name)), 1)), R("div", null, [
					R("strong", null, O(e.finalCareer.name), 1),
					R("span", null, [B(O(e.finalCareer.careerGroup || "Career") + " ", 1), e.finalCareer.level === null ? V("", !0) : (F(), I(P, { key: 0 }, [B(" level " + O(e.finalCareer.level), 1)], 64))]),
					R("small", null, O(A(wP)(e.finalCareer)), 1)
				])])) : V("", !0),
				e.careers.length > 1 ? (F(), I("div", JI, [R("span", null, O(e.careers.length - 1) + " lower-tier Career" + O(e.careers.length === 2 ? "" : "s"), 1), R("span", null, "Included before " + O(e.finalCareer?.name) + ".", 1)])) : V("", !0),
				R("div", YI, [R("button", {
					class: "dui-btn dui-btn-sm",
					disabled: !e.careers.length,
					type: "button",
					onClick: r[0] ||= (e) => n("clearCareers")
				}, " Clear Career ", 8, XI)]),
				e.careers.length ? V("", !0) : (F(), I("p", ZI, "No Career selected."))
			]),
			_: 1
		}));
	}
}), $I = {
	key: 0,
	class: "dui-fieldset"
}, eL = { class: "dui-fieldset-legend" }, tL = { class: "dui-card-actions" }, nL = ["aria-pressed", "onClick"], rL = /* @__PURE__ */ M({
	__name: "TraitButtonGroup",
	props: {
		caption: {},
		title: {},
		traits: {}
	},
	emits: ["toggleTrait"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => e.traits.length ? (F(), I("fieldset", $I, [R("legend", eL, [R("span", null, O(e.title), 1), R("span", null, O(e.caption), 1)]), R("div", tL, [(F(!0), I(P, null, N(e.traits, (e) => (F(), I("button", {
			key: e.uuid,
			"aria-pressed": e.isSelected,
			class: D(["dui-btn dui-btn-sm", { "dui-btn-active": e.isSelected }]),
			type: "button",
			onClick: (t) => n("toggleTrait", e)
		}, O(e.name), 11, nL))), 128))])])) : V("", !0);
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/errors.ts
function iL(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not resolve that Actor drop.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useBaseActorSelection.ts
function aL(e, t) {
	let n = oN(), { baseActors: r, selectedBaseActorUuid: i } = zs(n), a = /* @__PURE__ */ k(""), o = H(() => {
		let e = a.value.trim().toLocaleLowerCase();
		return e ? r.value.filter((t) => t.name.toLocaleLowerCase().includes(e)) : r.value;
	}), s = H({
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
			t.value = iL(e);
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
function oL() {
	let { advancements: e, careers: t, finalPortraitPath: n, selectedBaseActor: r, trappings: i } = zs(oN()), a = H(() => {
		let e = 0;
		for (let n of t.value) e += n.quantity;
		return e;
	}), o = H(() => i.value.filter((e) => !e.ignored).length), s = H(() => e.value.filter((e) => e.current !== e.careerValue).length), c = H(() => i.value.filter((e) => !e.ignored && e.resolution.status === "fallback").length), l = H(() => i.value.filter((e) => e.ignored).length), u = H(() => e.value.filter((e) => e.kind === "skill" && OA(e.name) !== null).length), d = H(() => i.value.filter((e) => !e.ignored && e.resolution.status === "unresolved").length), f = H(() => {
		let e = [];
		return r.value || e.push("Choose a base Actor before building."), t.value.length || e.push("No Careers are queued."), u.value && e.push(`${u.value} skill rows still need a specialization.`), d.value && e.push(`${d.value} trappings have no item resolution yet.`), n.value || e.push("No portrait is selected."), e;
	});
	return {
		buildPreviewStatus: H(() => f.value.length ? "Review" : "Ready"),
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
function sL() {
	let e = oN(), { optionalTraits: t, quickTraits: n, traits: r } = zs(e), i = H(() => new Set(r.value.map((e) => cL(e.name)))), a = H(() => t.value.map(s)), o = H(() => {
		let e = new Set(t.value.map((e) => cL(e.name)));
		return n.value.filter((t) => !e.has(cL(t.name))).map(s);
	});
	function s(e) {
		return {
			...e,
			isSelected: i.value.has(cL(e.name))
		};
	}
	function c(t) {
		let n = i.value.has(cL(t.name));
		e.setQuickTraitSelected(t, !n);
	}
	function l(t) {
		let n = i.value.has(cL(t.name));
		e.setOptionalTraitSelected(t, !n);
	}
	return {
		displayedQuickTraitOptions: o,
		optionalTraitOptions: a,
		toggleOptionalTrait: l,
		toggleQuickTrait: c
	};
}
function cL(e) {
	return e.trim().toLocaleLowerCase();
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useCareerQueue.ts
function lL() {
	let e = oN(), t = /* @__PURE__ */ k(null), n = /* @__PURE__ */ k(null);
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
function uL(e, t) {
	let n = oN(), { careers: r, customPortraitSearchTerms: i, finalPortraitPath: a, portraitSourceTagSections: o, portraitTermSections: s, selectedBaseActor: c, selectedPortraitPath: l, settings: u } = zs(n), d = /* @__PURE__ */ k([]), f = /* @__PURE__ */ k(!1), p = /* @__PURE__ */ k(null), m = 0, h = H(() => Yj({
		assetCandidates: d.value,
		careers: r.value,
		selectedBaseActor: c.value,
		selectedPortraitPath: l.value
	})), g = H(() => Bj({
		careers: r.value,
		selectedBaseActor: c.value
	})), _ = H(() => dL([...g.value, ...i.value])), v = H(() => Hj(_.value, s.value, "search")), y = H(() => Hj(_.value, s.value, "must-include")), b = H(() => Hj(_.value, s.value, "must-exclude")), x = H(() => dL([...v.value, ...y.value])), S = H(() => dL(h.value.map((e) => e.sourceGroup).filter((e) => !!e))), C = H(() => [..._.value.flatMap(ue), ...S.value.map(de)]), ee = H(() => fe("must-include")), te = H(() => fe("must-exclude")), ne = H(() => h.value.filter((e) => Wj(e, {
		mustExcludeSourceGroups: te.value,
		mustExcludeTerms: b.value,
		mustIncludeSourceGroups: ee.value,
		mustIncludeTerms: y.value
	}))), re = H(() => ne.value.slice(0, 4)), ie = H(() => Math.max(0, ne.value.length - re.value.length)), w = H(() => ne.value.find((e) => e.img === a.value) ?? null), T = H(() => w.value?.key ?? ""), ae = H(() => Qj(p.value)), oe = H(() => Zj(p.value));
	Xn(_, (e) => {
		n.retainAvailablePortraitFilterTerms(e);
	}, { immediate: !0 }), Xn(() => [
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
			le();
		}, 150);
		n(() => {
			clearTimeout(r);
		});
	}, { immediate: !0 });
	function se(e) {
		n.selectPortrait(e.img);
	}
	function ce(e) {
		n.addCustomPortraitSearchTerm(e);
	}
	function E(e, t) {
		if (e.kind === "source") {
			n.setPortraitSourceTagSection(e.value, t);
			return;
		}
		n.setPortraitTermSection(e.value, t);
	}
	async function le() {
		let n = m + 1;
		if (m = n, !Xj({
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
			m === n && (t.value = fL(e));
		} finally {
			m === n && (f.value = !1);
		}
	}
	return {
		activePortraitSearchTerms: x,
		addPortraitSearchTerm: ce,
		compactPortraitCandidates: re,
		hiddenPortraitCandidateCount: ie,
		isLoadingPortraitCandidates: f,
		portraitCandidates: ne,
		portraitFilterTags: C,
		portraitSearchTerms: _,
		portraitSearchProgress: p,
		portraitSearchProgressLabel: ae,
		portraitSearchProgressValue: oe,
		selectedPortraitCandidate: w,
		selectedPortraitCandidateKey: T,
		selectPortrait: se,
		setPortraitFilterTagSection: E
	};
	function ue(e) {
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
	function de(e) {
		return {
			canRemove: !1,
			id: `source:${e}`,
			kind: "source",
			label: `Sourced From ${Gj(e)}`,
			section: o.value[e] ?? "search",
			value: e
		};
	}
	function fe(e) {
		return S.value.filter((t) => (o.value[t] ?? "search") === e);
	}
}
function dL(e) {
	return [...new Set(e)];
}
function fL(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish searching for portraits.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/usePortraitCandidates.ts
function pL(e, t) {
	let n = uL(e, t), r = /* @__PURE__ */ k(!1);
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
var mL = { class: "app:grid app:gap-3" }, hL = { class: "app:grid app:items-start app:gap-3 md:app:grid-cols-[minmax(0,1fr)_minmax(17rem,22rem)]" }, gL = { class: "app:grid app:min-w-0 app:gap-3" }, _L = /* @__PURE__ */ M({
	__name: "NpcBuilderBuildTab",
	props: {
		bridge: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean },
		page: {}
	},
	setup(e) {
		let t = e, n = oN(), { actorName: r, advancements: i, careers: a, estimatedNpcXp: o, finalActorName: s, finalCareer: c, finalPortraitPath: l, grantTotals: u, selectedBaseActor: d, selectedSpells: f, suggestedActorName: p, traits: m } = zs(n), h = /* @__PURE__ */ k(""), { actorFilter: g, filteredActors: _, selectedBaseActorSelectValue: v } = aL(t.bridge, h), { clearCareerDragState: y, draggedCareerIndex: b, dragOverCareerIndex: x, handleCareerDragOver: S, handleCareerDragStart: C, handleCareerDrop: ee, moveCareer: te, removeCareer: ne, setCareerQuantity: re, setDragOverCareerIndex: ie } = lL(), { displayedQuickTraitOptions: w, optionalTraitOptions: T, toggleOptionalTrait: ae, toggleQuickTrait: oe } = sL(), { buildPreviewStatus: se, buildPreviewWarnings: ce, careerItemCount: E, editedAdvanceCount: le, fallbackTrappingCount: ue, ignoredTrappingCount: de, visibleTrappingCount: fe } = oL(), { addPortraitSearchTerm: pe, compactPortraitCandidates: me, hiddenPortraitCandidateCount: he, isLoadingPortraitCandidates: ge, isPortraitGalleryOpen: _e, portraitCandidates: ve, portraitFilterTags: D, portraitSearchProgress: ye, portraitSearchProgressLabel: be, portraitSearchProgressValue: xe, portraitSearchTerms: Se, selectedPortraitCandidate: Ce, selectedPortraitCandidateKey: we, selectPortrait: Te, selectPortraitFromGallery: O, setPortraitFilterTagSection: Ee } = pL(t.bridge, h);
		return (t, De) => (F(), I("section", mL, [R("div", hL, [R("div", gL, [
			e.page === "build-quick" || e.page === "build-actor" ? (F(), L(HP, {
				key: 0,
				"actor-filter": A(g),
				description: e.page === "build-quick" ? "Choose the base statblock for this fast NPC draft." : "Choose the base statblock before reviewing detailed build pages.",
				"error-message": h.value,
				"filtered-actors": A(_),
				"is-loading-actors": e.isLoadingActors,
				"is-loading-base-draft": e.isLoadingBaseDraft,
				number: e.page === "build-quick" ? "1" : "",
				"selected-base-actor": A(d),
				"selected-base-actor-uuid": A(v),
				onActorFilterChange: De[0] ||= (e) => g.value = e,
				onBaseActorChange: De[1] ||= (e) => v.value = e
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
			])) : V("", !0),
			e.page === "build-quick" ? (F(), L(QI, {
				key: 1,
				careers: A(a),
				"final-career": A(c),
				onClearCareers: A(n).clearCareers
			}, null, 8, [
				"careers",
				"final-career",
				"onClearCareers"
			])) : V("", !0),
			e.page === "build-quick" ? (F(), L(UN, {
				key: 2,
				description: "Apply optional base traits and configured quick traits to the draft.",
				number: "3",
				title: "Quick Traits"
			}, {
				default: j(() => [z(rL, {
					caption: `${A(T).length} from base statblock`,
					traits: A(T),
					title: "Optional Traits",
					onToggleTrait: A(ae)
				}, null, 8, [
					"caption",
					"traits",
					"onToggleTrait"
				]), z(rL, {
					caption: `${A(w).length} configured`,
					traits: A(w),
					title: "Quick Traits",
					onToggleTrait: A(oe)
				}, null, 8, [
					"caption",
					"traits",
					"onToggleTrait"
				])]),
				_: 1
			})) : V("", !0),
			e.page === "build-careers" ? (F(), L(mI, {
				key: 3,
				careers: A(a),
				"drag-over-career-index": A(x),
				"dragged-career-index": A(b),
				onCareerDragEnd: A(y),
				onCareerDragEnter: A(ie),
				onCareerDragOver: A(S),
				onCareerDragStart: A(C),
				onCareerDropOnRow: A(ee),
				onCareerQuantityInput: A(re),
				onMoveCareer: A(te),
				onRemoveCareer: A(ne)
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
			])) : V("", !0)
		]), z(WF, {
			class: "app:min-w-0",
			"actor-name": A(r),
			"advancement-count": A(i).length,
			"build-preview-status": A(se),
			"build-preview-warnings": A(ce),
			"career-item-count": A(E),
			"compact-portrait-candidates": A(me),
			"edited-advance-count": A(le),
			"estimated-npc-xp": A(o),
			"fallback-trapping-count": A(ue),
			"final-actor-name": A(s),
			"final-career": A(c),
			"final-portrait-path": A(l),
			"grant-totals": A(u),
			"hidden-portrait-candidate-count": A(he),
			"ignored-trapping-count": A(de),
			"is-loading-portrait-candidates": A(ge),
			"portrait-candidates": A(ve),
			"portrait-search-progress": A(ye),
			"portrait-search-progress-label": A(be),
			"portrait-search-progress-value": A(xe),
			"selected-base-actor": A(d),
			"selected-portrait-candidate": A(Ce),
			"selected-portrait-candidate-key": A(we),
			"selected-spell-count": A(f).length,
			"suggested-actor-name": A(p),
			"trait-count": A(m).length,
			"visible-trapping-count": A(fe),
			onActorNameChange: De[2] ||= (e) => r.value = e,
			onOpenPortraitGallery: De[3] ||= (e) => _e.value = !0,
			onSelectPortrait: A(Te)
		}, null, 8, /* @__PURE__ */ "actor-name.advancement-count.build-preview-status.build-preview-warnings.career-item-count.compact-portrait-candidates.edited-advance-count.estimated-npc-xp.fallback-trapping-count.final-actor-name.final-career.final-portrait-path.grant-totals.hidden-portrait-candidate-count.ignored-trapping-count.is-loading-portrait-candidates.portrait-candidates.portrait-search-progress.portrait-search-progress-label.portrait-search-progress-value.selected-base-actor.selected-portrait-candidate.selected-portrait-candidate-key.selected-spell-count.suggested-actor-name.trait-count.visible-trapping-count.onSelectPortrait".split("."))]), z(HI, {
			"is-loading-portrait-candidates": A(ge),
			open: A(_e),
			"portrait-candidates": A(ve),
			"portrait-filter-tags": A(D),
			"portrait-search-progress-label": A(be),
			"portrait-search-progress-value": A(xe),
			"portrait-search-terms": A(Se),
			"selected-portrait-candidate-key": A(we),
			onCreateSearchTerm: A(pe),
			onClose: De[4] ||= (e) => _e.value = !1,
			onFilterTagSectionChange: A(Ee),
			onSelectPortrait: A(O)
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
}), vL = {
	Average: "avg",
	Enormous: "enor",
	Large: "lrg",
	Little: "ltl",
	Monstrous: "mnst",
	Small: "sml",
	Tiny: "tiny"
}, yL = new Set(["bestial", "skittish"]);
function bL(e) {
	let t = e.some((e) => TL(e, "skittish")), n = e.some((e) => EL(e, "trained", "war")), r = OL(e.filter((e) => TL(e, "weapon")));
	return e.map((e) => {
		let i = SL(e.name);
		return yL.has(i) ? wL(e, `${e.name} is removed from combined mounts.`) : i === "weapon" ? !n || t ? wL(e, "Weapon requires Trained (War) and a mount that was not Skittish.") : e.uuid === r ? CL(e, "Weapon (Mount)") : wL(e, "Only the strongest Weapon trait is retained for the combined profile.") : CL(e, e.damage ? DL(e.name) : e.name);
	});
}
function xL(e) {
	return SL(e) === "armour";
}
function SL(e) {
	return e.trim().replace(/\s*\(mount\)\s*$/i, "").toLocaleLowerCase();
}
function CL(e, t) {
	return {
		fixedDamage: e.fixedDamage,
		included: !0,
		name: e.name,
		outputName: t,
		reason: "",
		sourceUuid: e.uuid
	};
}
function wL(e, t) {
	return {
		fixedDamage: e.fixedDamage,
		included: !1,
		name: e.name,
		outputName: "",
		reason: t,
		sourceUuid: e.uuid
	};
}
function TL(e, t) {
	return SL(e.name) === t;
}
function EL(e, t, n) {
	return TL(e, t) ? e.specification.trim().toLocaleLowerCase() === n : e.name.trim().toLocaleLowerCase() === `${t} (${n})`;
}
function DL(e) {
	return /\(mount\)\s*$/i.test(e.trim()) ? e.trim() : `${e.trim()} (Mount)`;
}
function OL(e) {
	return [...e].sort((e, t) => (t.fixedDamage ?? 0) - (e.fixedDamage ?? 0) || e.uuid.localeCompare(t.uuid))[0]?.uuid ?? "";
}
//#endregion
//#region src/functions/npc-builder/combined-profile/calculate.ts
var kL = [
	vL.Tiny,
	vL.Little,
	vL.Small,
	vL.Average,
	vL.Large,
	vL.Enormous,
	vL.Monstrous
], AL = {
	[vL.Average]: "Average",
	[vL.Enormous]: "Enormous",
	[vL.Large]: "Large",
	[vL.Little]: "Little",
	[vL.Monstrous]: "Monstrous",
	[vL.Small]: "Small",
	[vL.Tiny]: "Tiny"
};
function jL(e, t) {
	return {
		chargeStrengthBonus: Math.max(t.characteristics.strengthBonus - e.characteristics.strengthBonus, 0),
		initiative: Math.max(e.characteristics.initiative, t.characteristics.initiative),
		movement: t.movement,
		size: NL(e.size, t.size),
		strength: e.characteristics.strength,
		toughness: Math.max(e.characteristics.toughness, t.characteristics.toughness),
		traits: bL(t.traits),
		wounds: ML(e.wounds, t.wounds)
	};
}
function ML(e, t) {
	return Math.max(1, Math.max(e, t) + Math.ceil(Math.min(e, t) * .25));
}
function NL(e, t) {
	return PL(t) > PL(e) ? t : e;
}
function PL(e) {
	return kL.indexOf(e);
}
//#endregion
//#region src/functions/npc-builder/combined-profile/trait-source.ts
function FL({ flagScope: e, mount: t, plan: n, rider: r }) {
	let i = "Combined Profile";
	return {
		effects: [{
			changes: [],
			disabled: !1,
			flags: { [e]: { generatedCombinedProfileEffect: !0 } },
			img: t.img || "icons/svg/wing.svg",
			name: i,
			system: {
				scriptData: IL(e, n),
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
			description: { value: RL(r, t, n) },
			specification: { value: `${r.name} + ${t.name}` }
		},
		type: "trait"
	};
}
function IL(e, t) {
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
		script: LL(e, t.chargeStrengthBonus),
		trigger: "preRollTest"
	}), n;
}
function LL(e, t) {
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
function RL(e, t, n) {
	return [
		"<p>Generated by Drowsy's WFRP4e Customizers. This Actor combines a rider and mount into one simplified NPC profile.</p>",
		`<p><strong>Rider:</strong> ${zL(e.name)}<br><strong>Mount:</strong> ${zL(t.name)}</p>`,
		`<p><strong>Movement:</strong> ${n.movement}; <strong>Wounds:</strong> ${n.wounds}; <strong>Charge SB:</strong> +${n.chargeStrengthBonus}.</p>`,
		"<p>Mount attack Traits use fixed damage captured from the mount. Skittish and Bestial are removed.</p>"
	].join("");
}
function zL(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/errors.ts
function BL(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderMountTab/CombinedProfilePreview.vue?vue&type=script&setup=true&lang.ts
var VL = { class: "app:max-w-full app:overflow-x-auto" }, HL = { class: "dui-table dui-table-sm" }, UL = { class: "dui-alert" }, WL = { class: "app:flex app:flex-wrap app:gap-2" }, GL = { key: 0 }, KL = {
	key: 1,
	class: "app:grid app:gap-2"
}, qL = /* @__PURE__ */ M({
	__name: "CombinedProfilePreview",
	props: {
		mount: {},
		plan: {},
		rider: {}
	},
	setup(e) {
		let t = e, n = H(() => t.plan.traits.filter((e) => e.included)), r = H(() => t.plan.traits.filter((e) => !e.included)), i = H(() => [
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
				mount: AL[t.mount.size],
				result: AL[t.plan.size],
				rider: AL[t.rider.size],
				rule: "Larger"
			}
		]);
		function a(e) {
			return e.fixedDamage === null ? e.outputName : `${e.outputName} (fixed Damage ${e.fixedDamage})`;
		}
		return (t, o) => (F(), I(P, null, [z(UN, {
			description: "This preview uses the Actors' current prepared values. The build recalculates after applying the rider's Career advances.",
			number: "2",
			title: "Combined Profile Preview"
		}, {
			default: j(() => [R("div", VL, [R("table", HL, [o[0] ||= R("thead", null, [R("tr", null, [
				R("th", null, "Field"),
				R("th", null, "Rider"),
				R("th", null, "Mount"),
				R("th", null, "Combined"),
				R("th", null, "Rule")
			])], -1), R("tbody", null, [(F(!0), I(P, null, N(i.value, (e) => (F(), I("tr", { key: e.field }, [
				R("th", null, O(e.field), 1),
				R("td", null, O(e.rider), 1),
				R("td", null, O(e.mount), 1),
				R("td", null, O(e.result), 1),
				R("td", null, O(e.rule), 1)
			]))), 128))])])]), R("p", UL, " Charge attacks gain +" + O(e.plan.chargeStrengthBonus) + " Damage from the mount's Strength Bonus. The combined profile also gains at least Armour (1). ", 1)]),
			_: 1
		}), z(UN, {
			description: "Mount attack damage is frozen before the traits are copied to the rider.",
			number: "3",
			title: "Mount Traits"
		}, {
			default: j(() => [
				R("div", WL, [(F(!0), I(P, null, N(n.value, (e) => (F(), I("span", {
					key: e.sourceUuid,
					class: "dui-badge dui-badge-sm"
				}, O(a(e)), 1))), 128))]),
				n.value.length ? V("", !0) : (F(), I("p", GL, "The mount contributes no traits.")),
				r.value.length ? (F(), I("div", KL, [o[1] ||= R("p", null, [R("strong", null, "Removed or consolidated")], -1), (F(!0), I(P, null, N(r.value, (e) => (F(), I("p", {
					key: e.sourceUuid,
					class: "dui-alert dui-alert-warning"
				}, [R("strong", null, O(e.name) + ":", 1), B(" " + O(e.reason), 1)]))), 128))])) : V("", !0)
			]),
			_: 1
		})], 64));
	}
}), JL = { class: "app:grid app:gap-3" }, YL = { class: "app:grid app:gap-3 md:app:grid-cols-2" }, XL = { class: "dui-fieldset" }, ZL = ["for"], QL = ["id"], $L = { class: "dui-fieldset" }, eR = ["for"], tR = [
	"id",
	"disabled",
	"value"
], nR = ["value"], rR = {
	key: 0,
	class: "dui-card-actions"
}, iR = {
	key: 1,
	class: "dui-alert dui-alert-warning"
}, aR = {
	key: 2,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, oR = {
	key: 3,
	"aria-live": "polite",
	class: "dui-alert",
	role: "status"
}, sR = {
	key: 4,
	class: "dui-alert"
}, cR = {
	key: 0,
	class: "dui-avatar"
}, lR = { class: "app:size-16 app:shrink-0 app:rounded-lg" }, uR = ["src"], dR = /* @__PURE__ */ M({
	__name: "NpcBuilderMountTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = oN(), { baseActorCombatProfile: r, mountActorProfile: i, mountActors: a, selectedBaseActorUuid: o, selectedMountActorUuid: s } = zs(n), c = /* @__PURE__ */ k(""), l = /* @__PURE__ */ k(""), u = /* @__PURE__ */ k(!1), d = gr(), f = 0, p = H(() => {
			let e = c.value.trim().toLocaleLowerCase();
			return a.value.filter((t) => t.uuid !== o.value && (!e || t.name.toLocaleLowerCase().includes(e)));
		}), m = H(() => a.value.find((e) => e.uuid === s.value) ?? null), h = H(() => !r.value || !i.value ? null : jL(r.value, i.value));
		Xn(s, async (e) => {
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
				r === f && (n.hydrateMountActorProfile(null), l.value = BL(e));
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
				l.value = BL(e);
			}
		}
		return (e, t) => (F(), I("div", JL, [
			t[5] ||= R("p", { class: "dui-alert dui-alert-info" }, " Mounts are optional. A selected mount is folded into one simplified NPC profile during build. ", -1),
			z(UN, {
				description: "Choose any world Actor as the mount. This selection does not create a live WFRP mount relationship.",
				number: "1",
				title: "Mount Actor"
			}, {
				default: j(() => [
					R("div", YL, [R("fieldset", XL, [
						t[2] ||= R("legend", { class: "dui-fieldset-legend" }, "Search mounts", -1),
						R("label", {
							class: "dui-label",
							for: `${A(d)}-filter`
						}, "Actor name", 8, ZL),
						Un(R("input", {
							id: `${A(d)}-filter`,
							"onUpdate:modelValue": t[0] ||= (e) => c.value = e,
							"aria-label": "Filter mount actors by name",
							class: "dui-input dui-input-sm",
							placeholder: "Filter world actors",
							type: "search"
						}, null, 8, QL), [[Go, c.value]])
					]), R("fieldset", $L, [
						t[4] ||= R("legend", { class: "dui-fieldset-legend" }, "Selected mount", -1),
						R("label", {
							class: "dui-label",
							for: `${A(d)}-mount`
						}, "Mount statblock", 8, eR),
						R("select", {
							id: `${A(d)}-mount`,
							"aria-label": "Selected mount actor",
							class: "dui-select dui-select-sm",
							disabled: !A(o),
							value: A(s),
							onChange: g
						}, [t[3] ||= R("option", { value: "" }, "No combined mount", -1), (F(!0), I(P, null, N(p.value, (e) => (F(), I("option", {
							key: e.uuid,
							value: e.uuid
						}, O(e.name), 9, nR))), 128))], 40, tR)
					])]),
					z(lC, {
						disabled: !A(o),
						description: "Drop a world Actor to use as the mount.",
						title: "Drop Mount Actor",
						variant: "compact",
						onDropData: _
					}, null, 8, ["disabled"]),
					A(s) ? (F(), I("div", rR, [R("button", {
						class: "dui-btn dui-btn-ghost dui-btn-sm",
						type: "button",
						onClick: t[1] ||= (...e) => A(n).clearMountSelection && A(n).clearMountSelection(...e)
					}, " Clear Mount ")])) : V("", !0),
					A(o) ? l.value ? (F(), I("p", aR, O(l.value), 1)) : u.value ? (F(), I("p", oR, " Loading mount profile... ")) : m.value && A(i) ? (F(), I("article", sR, [m.value.img ? (F(), I("div", cR, [R("div", lR, [R("img", {
						src: m.value.img,
						alt: "",
						class: "app:h-full app:w-full app:object-cover",
						height: "64",
						width: "64"
					}, null, 8, uR)])])) : V("", !0), R("div", null, [R("strong", null, O(m.value.name), 1), R("span", null, " Movement " + O(A(i).movement) + " | Wounds " + O(A(i).wounds) + " | " + O(A(AL)[A(i).size]), 1)])])) : V("", !0) : (F(), I("p", iR, " Choose the rider on the Build tab before selecting a mount. "))
				]),
				_: 1
			}),
			h.value && A(r) && A(i) ? (F(), L(qL, {
				key: 0,
				mount: A(i),
				plan: h.value,
				rider: A(r)
			}, null, 8, [
				"mount",
				"plan",
				"rider"
			])) : V("", !0)
		]));
	}
});
//#endregion
//#region src/functions/npc-builder/settings/portrait-search-status.ts
function fR(e) {
	return e ? e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down cache ready with ${e.digDownIndexedFileCount} indexed files.` : "Dig Down is active; its file cache is still building or unavailable." : "Dig Down is active, but its Deep File Search setting is disabled." : "Install and enable Dig Down to search local files for portrait suggestions." : "Checking Dig Down integration.";
}
//#endregion
//#region src/functions/npc-builder/settings/settings-payload.ts
function pR(e) {
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
function mR(e) {
	let t = oN(), { actorFolders: n, itemFolders: r, settings: i } = zs(t), a = /* @__PURE__ */ k(""), o = /* @__PURE__ */ k(""), s = /* @__PURE__ */ k(!1), c = /* @__PURE__ */ k(""), l = /* @__PURE__ */ k(null), u = /* @__PURE__ */ k(""), d = /* @__PURE__ */ k(""), f = H(() => l.value?.digDownActive ?? !0), p = H(() => fR(l.value));
	Xn(l, (e) => {
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
			t.hydrateSettings(await e.saveSettings(aM())), await te(), d.value = "Settings reset to defaults.";
		});
	}
	async function ee(e) {
		s.value = !0, o.value = "", d.value = "";
		try {
			await e();
		} catch (e) {
			o.value = hR(e);
		} finally {
			s.value = !1;
		}
	}
	async function te() {
		let [n, r] = await Promise.all([e.listBaseActors(i.value), e.listQuickTraits(i.value)]);
		t.hydrateBaseActors(n), t.hydrateQuickTraits(r);
	}
	function ne() {
		return pR({
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
function hR(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/FolderSetting.vue?vue&type=script&setup=true&lang.ts
var gR = { class: "dui-fieldset" }, _R = { class: "dui-fieldset-legend" }, vR = ["aria-label", "value"], yR = { value: "" }, bR = ["value"], xR = { class: "dui-fieldset" }, SR = ["aria-label", "value"], CR = { class: "dui-card-actions" }, wR = ["disabled"], TR = /* @__PURE__ */ M({
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
		return (t, a) => (F(), I("section", null, [
			R("fieldset", gR, [R("legend", _R, O(e.folderLabel), 1), R("select", {
				"aria-label": e.folderLabel,
				class: "dui-select dui-select-sm",
				value: e.selectedUuid,
				onChange: r
			}, [R("option", yR, O(e.defaultOptionLabel), 1), (F(!0), I(P, null, N(e.folders, (e) => (F(), I("option", {
				key: e.uuid,
				value: e.uuid
			}, O(e.name), 9, bR))), 128))], 40, vR)]),
			R("fieldset", xR, [a[1] ||= R("legend", { class: "dui-fieldset-legend" }, "Create or use by name", -1), R("input", {
				"aria-label": `Create or use ${e.folderLabel} by name`,
				class: "dui-input dui-input-sm",
				value: e.createName,
				placeholder: "Folder name",
				type: "text",
				onInput: i
			}, null, 40, SR)]),
			R("div", CR, [R("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.disabled || !e.createName.trim(),
				type: "button",
				onClick: a[0] ||= (e) => n("saveFolderName")
			}, O(e.buttonLabel ?? "Save Folder"), 9, wR)])
		]));
	}
}), ER = /* @__PURE__ */ M({
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
		return (t, r) => (F(), L(UN, {
			description: "Limit the source picker or choose where generated Actors are stored.",
			number: "1",
			title: "Actor Sources"
		}, {
			default: j(() => [z(TR, {
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
			]), z(TR, {
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
}), DR = {
	key: 0,
	class: "dui-label"
}, OR = ["checked"], kR = {
	key: 1,
	class: "dui-label"
}, AR = ["checked"], jR = {
	key: 2,
	class: "dui-label"
}, MR = ["checked"], NR = {
	key: 3,
	class: "dui-label"
}, PR = ["checked"], FR = {
	key: 4,
	class: "dui-label"
}, IR = ["checked"], LR = /* @__PURE__ */ M({
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
		return (t, i) => (F(), L(UN, {
			description: "Choose which base-only data is included in the editable draft.",
			title: "Base Actor Features"
		}, {
			default: j(() => [
				e.showAdvancementFeatures === !1 ? V("", !0) : (F(), I("label", DR, [R("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowCharacteristics,
					type: "checkbox",
					onChange: i[0] ||= (e) => n("allowCharacteristicsChange", r(e))
				}, null, 40, OR), i[5] ||= R("span", null, "Show base actor characteristics", -1)])),
				e.showAdvancementFeatures === !1 ? V("", !0) : (F(), I("label", kR, [R("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowSkills,
					type: "checkbox",
					onChange: i[1] ||= (e) => n("allowSkillsChange", r(e))
				}, null, 40, AR), i[6] ||= R("span", null, "Show base actor skills", -1)])),
				e.showAdvancementFeatures === !1 ? V("", !0) : (F(), I("label", jR, [R("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTalents,
					type: "checkbox",
					onChange: i[2] ||= (e) => n("allowTalentsChange", r(e))
				}, null, 40, MR), i[7] ||= R("span", null, "Show base actor talents", -1)])),
				e.showTrappingFeature ? (F(), I("label", NR, [R("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTrappings,
					type: "checkbox",
					onChange: i[3] ||= (e) => n("allowTrappingsChange", r(e))
				}, null, 40, PR), i[8] ||= R("span", null, "Show base actor trappings", -1)])) : V("", !0),
				e.showTraitFeature === !1 ? V("", !0) : (F(), I("label", FR, [R("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTraits,
					type: "checkbox",
					onChange: i[4] ||= (e) => n("allowTraitsChange", r(e))
				}, null, 40, IR), i[9] ||= R("span", null, "Show base actor traits", -1)]))
			]),
			_: 1
		}));
	}
}), RR = { class: "dui-label" }, zR = ["checked"], BR = /* @__PURE__ */ M({
	__name: "MagicSpellSettings",
	props: { autoSelectGrantedSpells: { type: Boolean } },
	emits: ["autoSelectGrantedSpellsChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("autoSelectGrantedSpellsChange", !!t?.checked);
		}
		return (t, n) => (F(), L(UN, {
			number: "6",
			title: "Magic and Spells"
		}, {
			default: j(() => [R("label", RR, [R("input", {
				class: "dui-toggle dui-toggle-sm",
				checked: e.autoSelectGrantedSpells,
				type: "checkbox",
				onChange: r
			}, null, 40, zR), n[0] ||= R("span", null, "Select detected Lore spells by default", -1)])]),
			_: 1
		}));
	}
}), VR = { class: "dui-label" }, HR = ["checked"], UR = /* @__PURE__ */ M({
	__name: "NamingSettings",
	props: { includeSpeciesInName: { type: Boolean } },
	emits: ["includeSpeciesInNameChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("includeSpeciesInNameChange", !!t?.checked);
		}
		return (t, n) => (F(), L(UN, {
			number: "3",
			title: "Default Naming"
		}, {
			default: j(() => [R("label", VR, [R("input", {
				class: "dui-toggle dui-toggle-sm",
				checked: e.includeSpeciesInName,
				type: "checkbox",
				onChange: r
			}, null, 40, HR), n[0] ||= R("span", null, "Include species in suggested names", -1)])]),
			_: 1
		}));
	}
}), WR = { class: "dui-fieldset" }, GR = ["value"], KR = { class: "dui-label" }, qR = ["checked"], JR = /* @__PURE__ */ M({
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
		return (t, n) => (F(), L(UN, { title: "Career Resolution" }, {
			default: j(() => [R("fieldset", WR, [n[1] ||= R("legend", { class: "dui-fieldset-legend" }, "Lower career handling", -1), R("select", {
				"aria-label": "Lower career handling",
				class: "dui-select dui-select-sm",
				value: e.lowerCareerMode,
				onChange: r
			}, [...n[0] ||= [
				R("option", { value: "prompt" }, "Prompt when candidates are found", -1),
				R("option", { value: "auto-add-all" }, "Automatically add all lower-tier matches", -1),
				R("option", { value: "never" }, "Only add dropped careers", -1)
			]], 40, GR)]), R("label", KR, [R("input", {
				class: "dui-toggle dui-toggle-sm",
				checked: e.askForLinkedSkillSpecializations,
				type: "checkbox",
				onChange: i
			}, null, 40, qR), n[2] ||= R("span", null, "Resolve linked career skill repeats separately", -1)])]),
			_: 1
		}));
	}
}), YR = { class: "dui-label" }, XR = ["checked", "disabled"], ZR = {
	"aria-live": "polite",
	class: "dui-alert",
	role: "status"
}, QR = { class: "dui-label" }, $R = ["checked"], ez = { class: "dui-label" }, tz = ["checked"], nz = /* @__PURE__ */ M({
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
		return (t, n) => (F(), L(UN, {
			description: "Choose which local Foundry sources can suggest portraits.",
			number: "4",
			title: "Portrait Suggestions"
		}, {
			default: j(() => [
				R("label", YR, [R("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchFoundryPortraitAssets,
					disabled: !e.canUseDigDownPortraitSearch,
					type: "checkbox",
					onChange: r
				}, null, 40, XR), n[0] ||= R("span", null, "Search Dig Down's file cache for portrait suggestions", -1)]),
				R("p", ZR, O(e.statusLabel), 1),
				R("label", QR, [R("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchCompendiumPortraitAssets,
					type: "checkbox",
					onChange: i
				}, null, 40, $R), n[1] ||= R("span", null, "Search Actor and Item compendiums for portrait suggestions", -1)]),
				R("label", ez, [R("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchWebPortraitAssets,
					disabled: "",
					type: "checkbox"
				}, null, 8, tz), n[2] ||= R("span", null, "Search the web for portrait suggestions (later)", -1)])
			]),
			_: 1
		}));
	}
}), rz = { class: "dui-card-actions" }, iz = ["disabled"], az = /* @__PURE__ */ M({
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
		return (t, r) => (F(), L(UN, {
			description: "Items in this folder become one-click Trait choices on the Build tab.",
			number: "2",
			title: "Quick Traits"
		}, {
			default: j(() => [z(TR, {
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
			]), R("div", rz, [R("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isBusy || !e.quickTraitFolderUuid,
				type: "button",
				onClick: r[3] ||= (e) => n("importRecommendedQuickTraits")
			}, " Import Recommended Quick Traits ", 8, iz)])]),
			_: 1
		}));
	}
}), oz = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, sz = {
	key: 1,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, cz = /* @__PURE__ */ M({
	__name: "SettingsMessages",
	props: {
		errorMessage: {},
		settingsMessage: {}
	},
	setup(e) {
		return (t, n) => e.errorMessage ? (F(), I("p", oz, O(e.errorMessage), 1)) : e.settingsMessage ? (F(), I("p", sz, O(e.settingsMessage), 1)) : V("", !0);
	}
}), lz = { class: "app:grid app:gap-3" }, uz = { class: "app:grid app:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] app:gap-3" }, dz = { class: "dui-card-actions" }, fz = ["disabled"], pz = ["disabled"], mz = /* @__PURE__ */ M({
	__name: "NpcBuilderSettingsTab",
	props: {
		bridge: {},
		page: {}
	},
	setup(e) {
		let { actorFolders: t, baseActorFolderName: n, canUseDigDownPortraitSearch: r, errorMessage: i, importRecommendedQuickTraits: a, isBusy: o, itemFolders: s, outputActorFolderName: c, portraitSearchStatusLabel: l, quickTraitFolderName: u, refreshPortraitSearchAvailability: d, resetSettingsToDefaults: f, saveBaseActorFolderName: p, saveOutputActorFolderName: m, saveQuickTraitFolderName: h, saveSettings: g, settings: _, settingsMessage: v } = mR(e.bridge);
		return jr(() => {
			d();
		}), (d, y) => (F(), I("section", lz, [
			z(cz, {
				"error-message": A(i),
				"settings-message": A(v)
			}, null, 8, ["error-message", "settings-message"]),
			R("div", uz, [
				e.page === "settings-folders" ? (F(), L(ER, {
					key: 0,
					class: "app:col-span-full",
					"actor-folders": A(t),
					"base-actor-folder-name": A(n),
					"base-actor-folder-uuid": A(_).baseActorFolderUuid,
					"is-busy": A(o),
					"output-actor-folder-name": A(c),
					"output-actor-folder-uuid": A(_).outputActorFolderUuid,
					onBaseActorFolderNameChange: y[0] ||= (e) => n.value = e,
					onBaseActorFolderUuidChange: y[1] ||= (e) => A(_).baseActorFolderUuid = e,
					onOutputActorFolderNameChange: y[2] ||= (e) => c.value = e,
					onOutputActorFolderUuidChange: y[3] ||= (e) => A(_).outputActorFolderUuid = e,
					onSaveBaseActorFolderName: A(p),
					onSaveOutputActorFolderName: A(m)
				}, null, 8, [
					"actor-folders",
					"base-actor-folder-name",
					"base-actor-folder-uuid",
					"is-busy",
					"output-actor-folder-name",
					"output-actor-folder-uuid",
					"onSaveBaseActorFolderName",
					"onSaveOutputActorFolderName"
				])) : V("", !0),
				e.page === "settings-folders" ? (F(), L(az, {
					key: 1,
					"is-busy": A(o),
					"item-folders": A(s),
					"quick-trait-folder-name": A(u),
					"quick-trait-folder-uuid": A(_).quickTraitFolderUuid,
					onImportRecommendedQuickTraits: A(a),
					onQuickTraitFolderNameChange: y[4] ||= (e) => u.value = e,
					onQuickTraitFolderUuidChange: y[5] ||= (e) => A(_).quickTraitFolderUuid = e,
					onSaveQuickTraitFolderName: A(h)
				}, null, 8, [
					"is-busy",
					"item-folders",
					"quick-trait-folder-name",
					"quick-trait-folder-uuid",
					"onImportRecommendedQuickTraits",
					"onSaveQuickTraitFolderName"
				])) : V("", !0),
				e.page === "settings-suggestions" ? (F(), L(UR, {
					key: 2,
					"include-species-in-name": A(_).includeSpeciesInName,
					onIncludeSpeciesInNameChange: y[6] ||= (e) => A(_).includeSpeciesInName = e
				}, null, 8, ["include-species-in-name"])) : V("", !0),
				e.page === "settings-suggestions" ? (F(), L(nz, {
					key: 3,
					"can-use-dig-down-portrait-search": A(r),
					"search-compendium-portrait-assets": A(_).searchCompendiumPortraitAssets,
					"search-foundry-portrait-assets": A(_).searchFoundryPortraitAssets,
					"search-web-portrait-assets": A(_).searchWebPortraitAssets,
					"status-label": A(l),
					onSearchCompendiumPortraitAssetsChange: y[7] ||= (e) => A(_).searchCompendiumPortraitAssets = e,
					onSearchFoundryPortraitAssetsChange: y[8] ||= (e) => A(_).searchFoundryPortraitAssets = e
				}, null, 8, [
					"can-use-dig-down-portrait-search",
					"search-compendium-portrait-assets",
					"search-foundry-portrait-assets",
					"search-web-portrait-assets",
					"status-label"
				])) : V("", !0),
				e.page === "settings-advancement" ? (F(), L(LR, {
					key: 4,
					"allow-characteristics": A(_).allowBaseActorCharacteristics,
					"allow-skills": A(_).allowBaseActorSkills,
					"allow-talents": A(_).allowBaseActorTalents,
					"allow-traits": A(_).allowBaseActorTraits,
					"allow-trappings": A(_).allowBaseActorTrappings,
					"show-trapping-feature": !1,
					onAllowCharacteristicsChange: y[9] ||= (e) => A(_).allowBaseActorCharacteristics = e,
					onAllowSkillsChange: y[10] ||= (e) => A(_).allowBaseActorSkills = e,
					onAllowTalentsChange: y[11] ||= (e) => A(_).allowBaseActorTalents = e,
					onAllowTraitsChange: y[12] ||= (e) => A(_).allowBaseActorTraits = e,
					onAllowTrappingsChange: y[13] ||= (e) => A(_).allowBaseActorTrappings = e
				}, null, 8, [
					"allow-characteristics",
					"allow-skills",
					"allow-talents",
					"allow-traits",
					"allow-trappings"
				])) : V("", !0),
				e.page === "settings-resolution" ? (F(), L(BR, {
					key: 5,
					"auto-select-granted-spells": A(_).autoSelectGrantedSpells,
					onAutoSelectGrantedSpellsChange: y[14] ||= (e) => A(_).autoSelectGrantedSpells = e
				}, null, 8, ["auto-select-granted-spells"])) : V("", !0),
				e.page === "settings-resolution" ? (F(), L(LR, {
					key: 6,
					"allow-characteristics": A(_).allowBaseActorCharacteristics,
					"allow-skills": A(_).allowBaseActorSkills,
					"allow-talents": A(_).allowBaseActorTalents,
					"allow-traits": A(_).allowBaseActorTraits,
					"allow-trappings": A(_).allowBaseActorTrappings,
					"show-advancement-features": !1,
					"show-trait-feature": !1,
					"show-trapping-feature": "",
					onAllowCharacteristicsChange: y[15] ||= (e) => A(_).allowBaseActorCharacteristics = e,
					onAllowSkillsChange: y[16] ||= (e) => A(_).allowBaseActorSkills = e,
					onAllowTalentsChange: y[17] ||= (e) => A(_).allowBaseActorTalents = e,
					onAllowTraitsChange: y[18] ||= (e) => A(_).allowBaseActorTraits = e,
					onAllowTrappingsChange: y[19] ||= (e) => A(_).allowBaseActorTrappings = e
				}, null, 8, [
					"allow-characteristics",
					"allow-skills",
					"allow-talents",
					"allow-traits",
					"allow-trappings"
				])) : V("", !0),
				e.page === "settings-resolution" ? (F(), L(JR, {
					key: 7,
					class: "app:col-span-full",
					"ask-for-linked-skill-specializations": A(_).askForLinkedSkillSpecializations,
					"lower-career-mode": A(_).lowerCareerMode,
					onAskForLinkedSkillSpecializationsChange: y[20] ||= (e) => A(_).askForLinkedSkillSpecializations = e,
					onLowerCareerModeChange: y[21] ||= (e) => A(_).lowerCareerMode = e
				}, null, 8, ["ask-for-linked-skill-specializations", "lower-career-mode"])) : V("", !0)
			]),
			R("div", dz, [R("button", {
				class: "dui-btn dui-btn-primary dui-btn-sm",
				disabled: A(o),
				type: "button",
				onClick: y[22] ||= (...e) => A(g) && A(g)(...e)
			}, " Save Settings ", 8, fz), R("button", {
				class: "dui-btn dui-btn-sm",
				disabled: A(o),
				type: "button",
				onClick: y[23] ||= (...e) => A(f) && A(f)(...e)
			}, " Reset to Defaults ", 8, pz)])
		]));
	}
});
//#endregion
//#region src/functions/npc-builder/magic-lore-resolution.ts
function hz(e) {
	return e.map((e) => `${e.kind}:${e.sourceName}:${e.rawLore}`).sort().join("|");
}
function gz(e) {
	return e.filter((e) => e.isAmbiguous);
}
function _z(e, t) {
	return { rows: gz(e).map((e) => ({
		grantLabel: yz(e),
		options: gM(e, t),
		rawLore: e.rawLore,
		resolutionKey: e.resolutionKey,
		selectedLore: "",
		sourceLabel: bz(e)
	})) };
}
function vz(e) {
	return e.kind === "arcane-magic" ? "Arcane Magic" : e.kind === "petty-magic" ? "Petty Magic" : "Spellcaster";
}
function yz(e) {
	return `${vz(e)} from ${e.sourceName}`;
}
function bz(e) {
	return e.source === "talent" ? "Talent" : "Trait";
}
//#endregion
//#region src/state/npc-builder/workflows/spells-workflow.ts
function xz(e) {
	let t = oN(), { magicGrants: n, spells: r, selectedSpells: i } = zs(t), a = /* @__PURE__ */ k(""), o = /* @__PURE__ */ k(!1), s = /* @__PURE__ */ k(!1), c = /* @__PURE__ */ k([]), l = /* @__PURE__ */ k(null), u = 0, d = H(() => gz(n.value)), f = H(() => n.value.length - d.value.length);
	Xn(() => hz(n.value), () => {
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
			u === r && (a.value = Sz(e));
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
				a.value = Sz(e);
			} finally {
				o.value = !1;
			}
		}
	}
	async function g() {
		a.value = "", await h(), l.value = _z(n.value, c.value);
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
			a.value = Sz(e);
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
function Sz(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that spell action.";
}
//#endregion
//#region src/view/apps/npc-builder/components/MagicLoreResolutionPromptContent.vue?vue&type=script&setup=true&lang.ts
var Cz = { class: "dui-card-body" }, wz = { class: "dui-card-title" }, Tz = { class: "dui-fieldset" }, Ez = ["onUpdate:modelValue", "aria-label"], Dz = ["value"], Oz = { class: "dui-card-actions" }, kz = /* @__PURE__ */ M({
	__name: "MagicLoreResolutionPromptContent",
	props: { prompt: {} },
	emits: ["applyLores", "keepUnresolved"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (F(), I("section", null, [
			r[4] ||= R("p", null, " Choose concrete magic Lores for ambiguous grants before automatic spells are detected. Unresolved grants can still use manually dropped spells. ", -1),
			(F(!0), I(P, null, N(e.prompt.rows, (e) => (F(), I("section", {
				key: e.resolutionKey,
				class: "dui-card dui-card-border dui-card-sm"
			}, [R("div", Cz, [
				R("h3", wz, O(e.grantLabel), 1),
				R("span", null, O(e.sourceLabel) + " - " + O(e.rawLore || "Any Lore"), 1),
				R("fieldset", Tz, [r[3] ||= R("legend", { class: "dui-fieldset-legend" }, "Lore", -1), Un(R("select", {
					"onUpdate:modelValue": (t) => e.selectedLore = t,
					"aria-label": `Lore for ${e.grantLabel}`,
					class: "dui-select dui-select-sm"
				}, [r[2] ||= R("option", { value: "" }, "Leave unresolved", -1), (F(!0), I(P, null, N(e.options, (e) => (F(), I("option", {
					key: e.key,
					value: e.value
				}, O(e.label) + O(e.wind && e.wind !== "None" ? ` (${e.wind})` : ""), 9, Dz))), 128))], 8, Ez), [[Ko, e.selectedLore]])])
			])]))), 128)),
			R("div", Oz, [R("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: r[0] ||= (e) => n("keepUnresolved")
			}, " Keep Unresolved "), R("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: r[1] ||= (e) => n("applyLores")
			}, " Apply Lores ")])
		]));
	}
}), Az = {
	key: 0,
	class: "dui-alert"
}, jz = {
	key: 1,
	class: "dui-list"
}, Mz = { class: "dui-list-col-grow" }, Nz = { key: 0 }, Pz = { key: 1 }, Fz = {
	key: 2,
	class: "dui-card-actions"
}, Iz = ["disabled"], Lz = /* @__PURE__ */ M({
	__name: "MagicAccessPanel",
	props: {
		ambiguousGrantCount: {},
		isLoadingLoreOptions: { type: Boolean },
		magicGrants: {}
	},
	emits: ["resolveLores"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (F(), L(UN, {
			description: "Magic Talents and Traits determine which spell Lores are available.",
			number: "1",
			title: "Magic Access"
		}, {
			default: j(() => [e.magicGrants.length ? (F(), I("ul", jz, [(F(!0), I(P, null, N(e.magicGrants, (e) => (F(), I("li", {
				key: `${e.source}:${e.sourceName}:${e.rawLore}`,
				class: "dui-list-row"
			}, [R("div", Mz, [
				R("strong", null, O(A(vz)(e)), 1),
				R("span", null, O(A(bz)(e)) + " - " + O(e.sourceName), 1),
				e.isAmbiguous ? (F(), I("small", Nz, " Needs Lore resolution before automatic spells can be found. ")) : (F(), I("small", Pz, " Lore: " + O(e.rawLore || e.normalizedLore), 1))
			])]))), 128))])) : (F(), I("p", Az, " No magic-enabling Talent or Trait is selected. ")), e.ambiguousGrantCount ? (F(), I("div", Fz, [R("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isLoadingLoreOptions,
				type: "button",
				onClick: r[0] ||= (e) => n("resolveLores")
			}, O(e.isLoadingLoreOptions ? "Loading Lores..." : "Resolve Lores"), 9, Iz)])) : V("", !0)]),
			_: 1
		}));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/labels.ts
function Rz(e) {
	return e.source === "custom" ? "Dropped" : e.sourceLabel;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/SpellSelectionPanel.vue?vue&type=script&setup=true&lang.ts
var zz = { class: "dui-card-actions" }, Bz = ["disabled"], Vz = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, Hz = {
	key: 1,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, Uz = {
	key: 2,
	class: "dui-list"
}, Wz = [
	"aria-label",
	"checked",
	"onChange"
], Gz = { class: "dui-list-col-grow" }, Kz = {
	key: 0,
	class: "dui-avatar"
}, qz = ["src"], Jz = ["onClick"], Yz = {
	key: 3,
	class: "dui-alert"
}, Xz = /* @__PURE__ */ M({
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
		return (t, r) => (F(), L(UN, {
			description: "Select detected Lore spells or drop specific Spell Items.",
			number: "2",
			title: "Spells"
		}, {
			default: j(() => [
				z(lC, {
					description: "Add a specific Spell item regardless of detected Lores.",
					title: "Drop Spell Items",
					onDropData: r[0] ||= (e) => n("spellDrop", e)
				}),
				R("div", zz, [R("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.isLoadingSpells || !e.resolvedGrantCount,
					type: "button",
					onClick: r[1] ||= (e) => n("refreshSpells")
				}, O(e.isLoadingSpells ? "Finding spells..." : "Refresh Spells"), 9, Bz), R("span", null, O(e.selectedSpellCount) + " selected / " + O(e.spells.length) + " found", 1)]),
				e.errorMessage ? (F(), I("p", Vz, O(e.errorMessage), 1)) : V("", !0),
				e.ambiguousGrantCount ? (F(), I("p", Hz, O(e.ambiguousGrantCount) + " magic grant" + O(e.ambiguousGrantCount === 1 ? "" : "s") + " still need Lore resolution. You can still drop specific spells for now. ", 1)) : V("", !0),
				e.spells.length ? (F(), I("ul", Uz, [(F(!0), I(P, null, N(e.spells, (e) => (F(), I("li", {
					key: e.key,
					class: "dui-list-row"
				}, [
					R("input", {
						"aria-label": `Use ${e.name}`,
						class: "dui-checkbox dui-checkbox-sm",
						checked: e.selected,
						type: "checkbox",
						onChange: (t) => n("spellSelectedChange", e, t)
					}, null, 40, Wz),
					R("div", Gz, [
						e.img ? (F(), I("div", Kz, [R("div", null, [R("img", {
							src: e.img,
							alt: ""
						}, null, 8, qz)])])) : V("", !0),
						R("strong", null, O(e.name), 1),
						R("span", null, O(e.loreName || "Unknown Lore") + " · " + O(A(Rz)(e)), 1)
					]),
					e.source === "custom" ? (F(), I("button", {
						key: 0,
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: (t) => n("removeCustomSpell", e.key)
					}, " Remove ", 8, Jz)) : V("", !0)
				]))), 128))])) : (F(), I("p", Yz, " No matching spells found yet. Drop specific spells here, or resolve a non-ambiguous magic Lore. "))
			]),
			_: 1
		}));
	}
}), Zz = /* @__PURE__ */ M({
	__name: "NpcBuilderSpellsTab",
	props: { bridge: {} },
	setup(e) {
		let { ambiguousGrants: t, confirmMagicLorePrompt: n, dismissMagicLorePrompt: r, errorMessage: i, handleSpellDrop: a, initialize: o, isLoadingLoreOptions: s, isLoadingSpells: c, loadDetectedSpells: l, magicGrants: u, openMagicLorePrompt: d, pendingMagicLorePrompt: f, removeCustomSpell: p, resolvedGrantCount: m, selectedSpells: h, setSpellSelected: g, spells: _ } = xz(e.bridge);
		jr(() => {
			o();
		});
		function v(e, t) {
			let n = t.target;
			n && g(e.key, n.checked);
		}
		return (e, o) => (F(), I("section", null, [
			z(mN, {
				open: A(f) !== null,
				title: "Resolve Magic Lores",
				onClose: A(r)
			}, {
				default: j(() => [A(f) ? (F(), L(kz, {
					key: 0,
					prompt: A(f),
					onApplyLores: A(n),
					onKeepUnresolved: A(r)
				}, null, 8, [
					"prompt",
					"onApplyLores",
					"onKeepUnresolved"
				])) : V("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			z(Lz, {
				"ambiguous-grant-count": A(t).length,
				"is-loading-lore-options": A(s),
				"magic-grants": A(u),
				onResolveLores: A(d)
			}, null, 8, [
				"ambiguous-grant-count",
				"is-loading-lore-options",
				"magic-grants",
				"onResolveLores"
			]),
			o[0] ||= R("div", { class: "dui-divider" }, null, -1),
			z(Xz, {
				"ambiguous-grant-count": A(t).length,
				"error-message": A(i),
				"is-loading-spells": A(c),
				"resolved-grant-count": A(m),
				"selected-spell-count": A(h).length,
				spells: A(_),
				onRefreshSpells: A(l),
				onRemoveCustomSpell: A(p),
				onSpellDrop: A(a),
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
}), Qz = { class: "dui-collapse-title" }, $z = { class: "dui-badge" }, eB = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, tB = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, nB = { class: "dui-collapse-content" }, rB = { class: "dui-fieldset" }, iB = { class: "dui-fieldset-legend" }, aB = [
	"aria-label",
	"value",
	"onInput"
], oB = {
	key: 0,
	class: "dui-fieldset"
}, sB = [
	"aria-label",
	"value",
	"onChange"
], cB = ["value"], lB = {
	key: 1,
	class: "dui-fieldset"
}, uB = [
	"aria-label",
	"value",
	"onInput"
], dB = ["onClick"], fB = {
	key: 0,
	class: "dui-alert"
}, pB = /* @__PURE__ */ M({
	__name: "NpcBuilderTraitsTab",
	props: { difficultyOptions: {} },
	setup(e) {
		let t = oN(), { traits: n } = zs(t);
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
		return (t, o) => (F(), L(UN, {
			description: "Open a Trait to review its WFRP configuration before building.",
			title: "Traits"
		}, {
			default: j(() => [(F(!0), I(P, null, N(A(n), (t) => (F(), I("details", {
				key: t.key,
				class: "dui-collapse dui-collapse-arrow dui-card-border"
			}, [R("summary", Qz, [
				R("strong", null, O(t.name), 1),
				R("span", $z, O(r(t)), 1),
				t.config.rollable ? (F(), I("span", eB, "Rollable")) : V("", !0),
				t.config.damage ? (F(), I("span", tB, "Damage")) : V("", !0)
			]), R("div", nB, [
				R("fieldset", rB, [R("legend", iB, O(t.config.damage ? "Damage" : "Specification"), 1), R("input", {
					"aria-label": `${t.config.damage ? "Damage" : "Specification"} for ${t.name}`,
					class: "dui-input dui-input-sm",
					value: t.config.specification,
					placeholder: "None",
					type: "text",
					onInput: (e) => a(t, "specification", e)
				}, null, 40, aB)]),
				t.config.rollable && !t.config.damage ? (F(), I("fieldset", oB, [o[0] ||= R("legend", { class: "dui-fieldset-legend" }, "Difficulty", -1), R("select", {
					"aria-label": `Difficulty for ${t.name}`,
					class: "dui-select dui-select-sm",
					value: t.config.defaultDifficulty,
					onChange: (e) => a(t, "defaultDifficulty", e)
				}, [(F(!0), I(P, null, N(e.difficultyOptions, (e) => (F(), I("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, cB))), 128))], 40, sB)])) : V("", !0),
				t.config.damage && t.config.dice ? (F(), I("fieldset", lB, [o[1] ||= R("legend", { class: "dui-fieldset-legend" }, "Dice", -1), R("input", {
					"aria-label": `Dice for ${t.name}`,
					class: "dui-input dui-input-sm",
					value: t.config.dice,
					placeholder: "Optional",
					type: "text",
					onInput: (e) => a(t, "dice", e)
				}, null, 40, uB)])) : V("", !0),
				R("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: (e) => i(t)
				}, "Remove", 8, dB)
			])]))), 128)), A(n).length ? V("", !0) : (F(), I("p", fB, "No traits are selected yet."))]),
			_: 1
		}));
	}
}), mB = "__blank-item__";
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/resolution-labels.ts
function hB(e) {
	return e.source === "base" ? "Base" : e.source === "career" ? "Career" : "Custom";
}
function gB(e) {
	return e.resolution.status === "matched" ? `Matched ${e.resolution.selectedName}` : e.resolution.status === "fallback" ? `Blank ${e.resolution.selectedName || e.name}` : e.resolution.candidates.length ? "Choose a match" : "Needs resolution";
}
function _B(e) {
	return e.ignored ? "Ignored" : e.resolution.status === "matched" ? "Matched" : e.resolution.status === "fallback" ? "Blank item" : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? "Choose" : "Needs resolution";
}
function vB(e) {
	let t = "dui-badge";
	return e.ignored ? [t, "dui-badge-ghost"] : e.resolution.status === "matched" ? [t, "dui-badge-success"] : e.resolution.status === "fallback" ? [t, "dui-badge-info"] : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? [t, "dui-badge-warning"] : [t, "dui-badge-error"];
}
function yB(e) {
	return e.resolution.status === "fallback" ? mB : e.resolution.selectedCandidateUuid;
}
function bB(e) {
	return e.source === "career";
}
function xB(e) {
	return e.resolution.candidates.length > 0 || bB(e);
}
function SB(e) {
	return e.resolution.searchTerms.length <= 1 ? "" : `Options: ${e.resolution.searchTerms.join(" / ")}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/TrappingsTable.vue?vue&type=script&setup=true&lang.ts
var CB = {
	key: 0,
	class: "dui-list"
}, wB = [
	"aria-label",
	"checked",
	"onChange"
], TB = { class: "dui-list-col-grow app:grid app:gap-2" }, EB = { key: 0 }, DB = {
	key: 1,
	class: "dui-fieldset"
}, OB = [
	"aria-label",
	"value",
	"onChange"
], kB = {
	key: 0,
	value: ""
}, AB = ["value"], jB = ["value"], MB = { key: 2 }, NB = { class: "dui-card-actions" }, PB = { class: "dui-fieldset" }, FB = [
	"aria-label",
	"value",
	"onInput"
], IB = ["onClick"], LB = {
	key: 1,
	class: "dui-alert"
}, RB = /* @__PURE__ */ M({
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
		return (t, r) => e.trappings.length ? (F(), I("ul", CB, [(F(!0), I(P, null, N(e.trappings, (e) => (F(), I("li", {
			key: e.key,
			class: "dui-list-row"
		}, [R("input", {
			"aria-label": `Use ${e.name}`,
			class: "dui-checkbox dui-checkbox-sm",
			checked: !e.ignored,
			type: "checkbox",
			onChange: (t) => n("useChange", e.key, t)
		}, null, 40, wB), R("div", TB, [
			R("strong", null, O(e.name), 1),
			R("span", null, O(e.resolution.selectedItemType || e.itemType || "trapping") + " · " + O(A(hB)(e)), 1),
			A(SB)(e) ? (F(), I("span", EB, O(A(SB)(e)), 1)) : V("", !0),
			R("span", { class: D(A(vB)(e)) }, O(A(_B)(e)), 3),
			A(xB)(e) ? (F(), I("fieldset", DB, [r[0] ||= R("legend", { class: "dui-fieldset-legend" }, "Resolution", -1), R("select", {
				"aria-label": `Resolution for ${e.name}`,
				class: "dui-select dui-select-sm",
				value: A(yB)(e),
				onChange: (t) => n("resolutionChange", e.key, t)
			}, [
				e.resolution.candidates.length ? (F(), I("option", kB, "Choose match")) : V("", !0),
				(F(!0), I(P, null, N(e.resolution.candidates, (e) => (F(), I("option", {
					key: e.uuid,
					value: e.uuid
				}, O(e.name) + " (" + O(e.sourceLabel) + ") ", 9, AB))), 128)),
				A(bB)(e) ? (F(), I("option", {
					key: 1,
					value: A(mB)
				}, " Blank Item ", 8, jB)) : V("", !0)
			], 40, OB)])) : (F(), I("span", MB, O(A(gB)(e)), 1)),
			R("div", NB, [R("fieldset", PB, [r[1] ||= R("legend", { class: "dui-fieldset-legend" }, "Quantity", -1), R("input", {
				"aria-label": `Quantity for ${e.name}`,
				class: "dui-input dui-input-sm",
				value: e.quantity,
				min: "1",
				type: "number",
				onInput: (t) => n("quantityInput", e.key, t)
			}, null, 40, FB)]), e.source === "custom" ? (F(), I("button", {
				key: 0,
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: (t) => n("removeCustomTrapping", e.key)
			}, " Remove ", 8, IB)) : V("", !0)])
		])]))), 128))])) : (F(), I("p", LB, "No trappings are selected yet."));
	}
}), zB = { class: "dui-card-actions" }, BB = ["disabled"], VB = { key: 0 }, HB = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, UB = /* @__PURE__ */ M({
	__name: "NpcBuilderTrappingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = oN(), { trappings: r } = zs(n), i = /* @__PURE__ */ k(""), a = /* @__PURE__ */ k(!1), o = H(() => r.value.filter((e) => !e.ignored && e.resolution.status === "unresolved"));
		jr(() => {
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
		return (e, t) => (F(), L(UN, {
			description: "Review the Items that will be embedded in the generated NPC.",
			title: "Trappings"
		}, {
			default: j(() => [
				R("div", zB, [R("button", {
					class: "dui-btn dui-btn-sm",
					disabled: a.value || !o.value.length,
					type: "button",
					onClick: u
				}, O(a.value ? "Resolving..." : "Resolve Trappings"), 9, BB), o.value.length ? (F(), I("span", VB, O(o.value.length) + " unresolved ", 1)) : V("", !0)]),
				i.value ? (F(), I("p", HB, O(i.value), 1)) : V("", !0),
				z(RB, {
					trappings: A(r),
					onQuantityInput: s,
					onRemoveCustomTrapping: A(n).removeCustomTrapping,
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
function WB(e, t) {
	let n = /* @__PURE__ */ new Map(), r = [], i = [];
	for (let a of e) {
		let e = /* @__PURE__ */ new Map();
		for (let o of kA(a.career.uuid, a.career.grants.skills)) {
			let s = OA(o.originalName);
			if (!s) continue;
			let c = AA(o.originalName), l = n.get(c) ?? [], u = e.get(c) ?? 0, d = t.enableLinkedSkillResolution && l[u] ? l[u] : "";
			if (e.set(c, u + 1), d) {
				r.push({
					linkedFromKey: d,
					resolutionKey: o.resolutionKey
				});
				continue;
			}
			i.push({
				alreadyGrantedSpecializations: YB(a.career.grants.skills, s.baseName),
				baseName: s.baseName,
				careerLabel: XB(a.career),
				isLoadingSuggestions: !1,
				occurrence: o.occurrence,
				options: s.options,
				originalName: s.originalName,
				resolvedSpecialization: ZB(s),
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
function GB(e) {
	return e.resolvedSpecialization.trim() ? EA(e.baseName, e.resolvedSpecialization) : "";
}
function KB(e) {
	return e.occurrence > 0 ? `${e.originalName}, choice ${e.occurrence + 1}` : e.originalName;
}
function qB(e) {
	return e.options.length <= 1 && e.specialization.trim().toLocaleLowerCase() === "any";
}
function JB(e, t) {
	let n = AA(t);
	return e.alreadyGrantedSpecializations.some((e) => AA(e) === n);
}
function YB(e, t) {
	let n = AA(t), r = /* @__PURE__ */ new Set(), i = [];
	for (let t of e) {
		let e = DA(t);
		if (!e || AA(e.baseName) !== n) continue;
		let a = AA(e.specialization);
		r.has(a) || (r.add(a), i.push(e.specialization));
	}
	return i;
}
function XB(e) {
	return e.level === null ? e.name : `${e.name}, tier ${e.level}`;
}
function ZB(e) {
	return e.specialization.trim().toLocaleLowerCase() === "any" ? "" : e.options[0] ?? "";
}
//#endregion
//#region src/view/apps/npc-builder/components/SkillResolutionPromptContent.vue?vue&type=script&setup=true&lang.ts
var QB = { class: "dui-card-body" }, $B = { class: "dui-card-title" }, eV = { class: "dui-badge" }, tV = { class: "dui-fieldset" }, nV = { class: "app:grid app:gap-1" }, rV = ["onUpdate:modelValue", "aria-label"], iV = ["value"], aV = [
	"onUpdate:modelValue",
	"aria-label",
	"placeholder"
], oV = {
	key: 0,
	class: "dui-label app:text-error"
}, sV = {
	key: 0,
	class: "dui-card-actions"
}, cV = { key: 0 }, lV = ["onClick"], uV = {
	key: 0,
	class: "dui-badge dui-badge-error dui-badge-xs"
}, dV = {
	key: 0,
	class: "dui-alert dui-alert-info"
}, fV = { class: "dui-card-actions" }, pV = /* @__PURE__ */ M({
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
			return !!e.resolvedSpecialization && JB(e, e.resolvedSpecialization);
		}
		return (t, i) => (F(), I("section", null, [
			i[5] ||= R("p", null, " Some Career skills need a specialization before they become concrete WFRP skills. Blank rows can be left unresolved and edited later. ", -1),
			(F(!0), I(P, null, N(e.prompt.rows, (t) => (F(), I("section", {
				key: t.resolutionKey,
				class: "dui-card dui-card-border dui-card-sm"
			}, [R("div", QB, [
				R("h3", $B, O(e.getSkillResolutionLabel(t)), 1),
				R("span", eV, O(t.careerLabel), 1),
				R("fieldset", tV, [
					i[4] ||= R("legend", { class: "dui-fieldset-legend" }, "Specialization", -1),
					R("label", nV, [i[3] ||= R("span", { class: "dui-label" }, "Choice", -1), t.options.length > 1 ? Un((F(), I("select", {
						key: 0,
						"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
						"aria-label": `Specialization for ${e.getSkillResolutionLabel(t)}`,
						class: D(["dui-select dui-select-sm", { "dui-select-error": A(JB)(t, t.resolvedSpecialization) }])
					}, [i[2] ||= R("option", { value: "" }, "Leave unresolved", -1), (F(!0), I(P, null, N(t.options, (e) => (F(), I("option", {
						key: e,
						class: D({ "app:text-error": A(JB)(t, e) }),
						value: e
					}, O(e) + O(A(JB)(t, e) ? " — already granted" : ""), 11, iV))), 128))], 10, rV)), [[Ko, t.resolvedSpecialization]]) : Un((F(), I("input", {
						key: 1,
						"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
						"aria-label": `Specialization for ${e.getSkillResolutionLabel(t)}`,
						class: D(["dui-input dui-input-sm", { "dui-input-error": A(JB)(t, t.resolvedSpecialization) }]),
						placeholder: t.suggestedSpecializations.length ? "Type or choose below" : t.specialization,
						type: "text"
					}, null, 10, aV)), [[Go, t.resolvedSpecialization]])]),
					r(t) ? (F(), I("p", oV, " Already granted by this Career. ")) : V("", !0)
				]),
				e.usesFreeformSkillSpecialization(t) ? (F(), I("div", sV, [t.isLoadingSuggestions ? (F(), I("small", cV, "Finding known choices.")) : V("", !0), (F(!0), I(P, null, N(t.suggestedSpecializations, (e) => (F(), I("button", {
					key: `${t.resolutionKey}:${e}`,
					class: D(["dui-btn dui-btn-sm", { "dui-btn-error dui-btn-outline": A(JB)(t, e) }]),
					type: "button",
					onClick: (r) => n("chooseSkillSpecialization", t, e)
				}, [B(O(e) + " ", 1), A(JB)(t, e) ? (F(), I("span", uV, " Already granted ")) : V("", !0)], 10, lV))), 128))])) : V("", !0)
			])]))), 128)),
			e.prompt.linkedRows.length ? (F(), I("div", dV, O(e.prompt.linkedRows.length) + " linked skill specialization" + O(e.prompt.linkedRows.length === 1 ? "" : "s") + " will reuse earlier choices from this career chain. ", 1)) : V("", !0),
			R("div", fV, [R("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: i[0] ||= (e) => n("addWithoutResolving")
			}, " Add Without Resolving "), R("button", {
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: i[1] ||= (e) => n("applySpecializations")
			}, " Apply Specializations ")])
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/types.ts
function mV(e) {
	return e === "build-actor" || e === "build-careers" || e === "build-quick";
}
function hV(e) {
	return e === "settings-advancement" || e === "settings-folders" || e === "settings-resolution" || e === "settings-suggestions";
}
function gV(e) {
	return e === "automatic-xp" || e === "detail-characteristics" || e === "detail-skills" || e === "detail-talents";
}
function _V(e) {
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
var vV = ["aria-current", "onClick"], yV = ["aria-current", "popovertarget"], bV = ["id"], xV = ["onClick"], SV = /* @__PURE__ */ M({
	__name: "NpcBuilderMegaMenuContent",
	props: {
		activePage: {},
		groups: {}
	},
	emits: ["pageSelect"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (F(), I(P, null, [r[0] ||= R("span", { class: "dui-megamenu-active" }, null, -1), (F(!0), I(P, null, N(e.groups, (t) => (F(), I(P, { key: t.key }, ["page" in t ? (F(), I("button", {
			key: 0,
			"aria-current": t.isActive ? "page" : void 0,
			type: "button",
			onClick: (e) => n("pageSelect", t.page, e)
		}, O(t.label), 9, vV)) : (F(), I(P, { key: 1 }, [R("button", {
			"aria-current": t.isActive ? "page" : void 0,
			popovertarget: t.popoverId,
			type: "button"
		}, O(t.label), 9, yV), R("div", {
			id: t.popoverId,
			popover: ""
		}, [R("ul", { class: D(["dui-menu app:min-w-56 app:p-2", t.columnsClass]) }, [(F(!0), I(P, null, N(t.pages, (t) => (F(), I("li", { key: t.page }, [R("button", {
			class: D({ "dui-menu-active": e.activePage === t.page }),
			type: "button",
			onClick: (e) => n("pageSelect", t.page, e)
		}, O(A(_V)(t.page)), 11, xV)]))), 128))], 2)], 8, bV)], 64))], 64))), 128))], 64));
	}
}), CV = { class: "dui-navbar app:sticky app:top-0 app:z-20 app:flex-wrap app:gap-2 app:bg-base-200 app:px-3 app:py-2" }, wV = { class: "dui-navbar-start app:min-w-64 app:flex-1" }, TV = { class: "app:min-w-0" }, EV = { class: "app:text-base-content/70" }, DV = {
	"aria-label": "NPC Builder pages",
	class: "app:order-3 app:flex app:w-full app:flex-wrap app:items-center app:justify-start app:gap-2"
}, OV = {
	id: "npc-builder-megamenu",
	class: "dui-megamenu max-sm:dui-megamenu-vertical dui-megamenu-sm app:ml-0 app:mr-auto app:border app:border-base-300 app:bg-base-100 app:p-2",
	popover: ""
}, kV = { class: "dui-navbar-end app:w-auto app:shrink-0" }, AV = ["disabled"], jV = /* @__PURE__ */ M({
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
		], c = H(() => [
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
		return (t, n) => (F(), I("header", CV, [
			R("div", wV, [R("div", TV, [
				n[1] ||= R("span", { class: "dui-badge dui-badge-outline" }, "WFRP4e Customizer", -1),
				n[2] ||= R("h1", { class: "app:m-0 app:text-xl app:leading-tight" }, "NPC Builder", -1),
				R("small", EV, [e.selectedBaseActorName ? (F(), I(P, { key: 0 }, [B(O(e.selectedBaseActorName) + " base · " + O(e.finalActorName), 1)], 64)) : (F(), I(P, { key: 1 }, [B("Choose a base character, then shape the final NPC.")], 64))])
			])]),
			R("nav", DV, [n[3] ||= R("button", {
				"aria-label": "Open NPC Builder navigation",
				class: "dui-btn dui-btn-sm sm:app:hidden",
				popovertarget: "npc-builder-megamenu",
				type: "button"
			}, " Menu ", -1), R("div", OV, [z(SV, {
				"active-page": e.activePage,
				groups: c.value,
				onPageSelect: l
			}, null, 8, ["active-page", "groups"])])]),
			R("div", kV, [R("button", {
				class: "dui-btn dui-btn-primary",
				disabled: !e.canBuild,
				type: "button",
				onClick: n[0] ||= (e) => r("buildNpc")
			}, " Build NPC ", 8, AV)])
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderApplicationDrop.ts
function MV(e, t, n, r) {
	let i = oN(), a = /* @__PURE__ */ k(!1);
	function o(e) {
		NV(e) || (e.preventDefault(), a.value = !0);
	}
	function s(e) {
		if (NV(e)) return;
		let t = e.currentTarget, n = e.relatedTarget;
		t instanceof Node && n instanceof Node && t.contains(n) || (a.value = !1);
	}
	function c(e) {
		NV(e) || (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "copy"));
	}
	async function l(o) {
		if (!NV(o)) {
			o.preventDefault(), a.value = !1, r.value = "";
			try {
				let r = await e.resolveApplicationDrop(o.dataTransfer?.getData("text/plain") ?? "");
				r.kind === "actor" ? i.selectBaseActor(r.actor) : r.kind === "career" ? await n(r.career, { replaceQueue: t.value === "build-quick" }) : r.kind === "advancement" ? i.addCustomAdvancement(r.advancement) : r.kind === "trapping" ? i.addCustomTrapping(r.trapping) : r.kind === "trait" ? i.addCustomTrait(r.trait) : i.addCustomSpell(r.spell);
			} catch (e) {
				r.value = BL(e);
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
function NV(e) {
	let t = e.dataTransfer, n = t?.getData("text/plain") ?? "", r = Array.from(t?.types ?? []);
	return n.startsWith("npc-builder-career:") || qj(n) !== null || r.includes("application/x-wfrp4e-customizer-portrait-filter-tag");
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderBuild.ts
function PV(e, t, n, r, i) {
	let a = oN(), { advancements: o, buildTraits: s, careers: c, finalActorName: l, finalPortraitPath: u, selectedMountActorUuid: d, selectedBaseActor: f, selectedSpells: p, settings: m, trappings: h } = zs(a), g = /* @__PURE__ */ k(!1), _ = H(() => !!(f.value && c.value.length && !g.value && !i.value));
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
			r.value = BL(e), n.value = "";
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
function FV(e) {
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
function IV(e) {
	return [{
		career: e,
		mode: "add-or-increment"
	}];
}
function LV(e) {
	return [...e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).map((e) => ({
		career: e,
		mode: "add-if-missing"
	})), {
		career: e.droppedCareer,
		mode: "add-or-increment"
	}];
}
function RV(e) {
	let t = e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).length;
	return t === 0 ? "" : `Added ${t} lower-tier career candidate${t === 1 ? "" : "s"}.`;
}
function zV(e, t) {
	return e?.selectedUuids.includes(t) ?? !1;
}
function BV(e) {
	let { candidateUuid: t, isAlreadyQueued: n, prompt: r, selected: i } = e;
	return !r || n ? null : i ? [...new Set([...r.selectedUuids, t])] : r.selectedUuids.filter((e) => e !== t);
}
//#endregion
//#region src/state/npc-builder/workflows/skill-suggestions.ts
async function VV(e, t) {
	await Promise.all(t.rows.map(async (t) => {
		if (qB(t)) {
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
function HV(e) {
	let t = oN(), { careers: n, settings: r } = zs(t), i = /* @__PURE__ */ k(""), a = /* @__PURE__ */ k(""), o = /* @__PURE__ */ k(!1), s = /* @__PURE__ */ k(null), c = /* @__PURE__ */ k(null), l = H(() => FV(s.value));
	async function u(t, n = {}) {
		a.value = "";
		try {
			await d(await e.resolveCareerDrop(t), n);
		} catch (e) {
			a.value = UV(e);
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
		m(IV(e), {
			enableLinkedSkillResolution: !1,
			message: ""
		});
	}
	function m(t, n) {
		let r = WB(t, n);
		if (r.rows.length) {
			c.value = r, VV(e, c.value);
			return;
		}
		b(t, n.message);
	}
	function h() {
		let e = s.value;
		e && (s.value = null, m(LV(e), {
			enableLinkedSkillResolution: !r.value.askForLinkedSkillSpecializations,
			message: RV(e)
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
			for (let n of e.rows) t.setSkillGrantResolution(n.resolutionKey, GB(n));
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
		return zV(s.value, e);
	}
	function C(e, t) {
		let n = BV({
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
		getSkillResolutionLabel: KB,
		addCareerSummaryWithLowerCareerMode: d,
		handleCareerDrop: u,
		isCareerQueued: x,
		isFindingLowerCareers: o,
		isLowerCareerSelected: S,
		lowerCareerCandidateGroups: l,
		pendingLowerCareerPrompt: s,
		pendingSkillResolutionPrompt: c,
		setLowerCareerSelected: C,
		usesFreeformSkillSpecialization: qB
	};
}
function UV(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderCareerDropWorkflow.ts
function WV(e) {
	return HV(e);
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderInitialData.ts
function GV(e, t) {
	let n = oN(), { selectedBaseActorUuid: r, selectedMountActorUuid: i, settings: a } = zs(n), o = /* @__PURE__ */ k(!1), s = /* @__PURE__ */ k(!1), c = /* @__PURE__ */ k([]);
	jr(async () => {
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
			t.value = BL(e);
		} finally {
			o.value = !1;
		}
	}), Xn(r, async (r) => {
		if (t.value = "", !r) {
			n.clearBaseDraftData(), n.hydrateBaseActorCombatProfile(null);
			return;
		}
		r === i.value && n.clearMountSelection(), n.hydrateBaseActorCombatProfile(null), s.value = !0;
		try {
			let [t, i] = await Promise.all([e.loadBaseActorDraftData(r), e.loadActorCombatProfile(r)]);
			n.hydrateBaseActorDraftData(t), n.hydrateBaseActorCombatProfile(i);
		} catch (e) {
			t.value = BL(e), n.clearBaseDraftData(), n.hydrateBaseActorCombatProfile(null);
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
function KV() {
	return {
		inFlightNames: [],
		successfulNames: []
	};
}
function qV(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) n.kind === "skill" && !n.characteristicKey && !OA(n.name) && t.add(n.name);
	return [...t];
}
function JV(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) n.kind === "talent" && !n.talentMaximumKey && t.add(n.name);
	return [...t];
}
function YV(e, t) {
	let n = new Set([...t.inFlightNames, ...t.successfulNames]);
	return e.filter((e) => {
		let t = AA(e);
		return n.has(t) ? !1 : (n.add(t), !0);
	});
}
function XV(e, t) {
	return {
		...e,
		inFlightNames: $V([...e.inFlightNames, ...t])
	};
}
function ZV(e, t) {
	let n = new Set($V(t));
	return {
		inFlightNames: e.inFlightNames.filter((e) => !n.has(e)),
		successfulNames: $V([...e.successfulNames, ...n])
	};
}
function QV(e, t) {
	let n = new Set($V(t));
	return {
		...e,
		inFlightNames: e.inFlightNames.filter((e) => !n.has(e))
	};
}
function $V(e) {
	return [...new Set([...e].map(AA).filter(Boolean))];
}
//#endregion
//#region src/state/npc-builder/workflows/metadata-lookups-workflow.ts
function eH(e) {
	let t = oN(), { advancements: n } = zs(t), r = /* @__PURE__ */ k(KV()), i = /* @__PURE__ */ k(KV()), a = /* @__PURE__ */ k(""), o = /* @__PURE__ */ k(""), s = H(() => qV(n.value)), c = H(() => JV(n.value)), l = H(() => [a.value, o.value].filter(Boolean).join(" ")), u = H(() => l.value ? "degraded" : r.value.inFlightNames.length + i.value.inFlightNames.length > 0 ? "loading" : "ready");
	Xn(s, (e) => {
		d(e);
	}, { immediate: !0 }), Xn(c, (e) => {
		f(e);
	}, { immediate: !0 });
	async function d(n) {
		if (!n.length) {
			a.value = "";
			return;
		}
		let i = YV(n, r.value);
		if (i.length) {
			r.value = XV(r.value, i), a.value = "";
			try {
				let n = await e.listSkillCharacteristics(i);
				r.value = ZV(r.value, i), t.hydrateSkillCharacteristics(n);
			} catch (e) {
				r.value = QV(r.value, i), a.value = tH("skill characteristics", e);
			}
		}
	}
	async function f(n) {
		if (!n.length) {
			o.value = "";
			return;
		}
		let r = YV(n, i.value);
		if (r.length) {
			i.value = XV(i.value, r), o.value = "";
			try {
				let n = await e.listTalentMaximums(r);
				i.value = ZV(i.value, r), t.hydrateTalentMaximums(n);
			} catch (e) {
				i.value = QV(i.value, r), o.value = tH("Talent maximums", e);
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
function tH(e, t) {
	return `Could not load ${e}.${t instanceof Error ? ` ${t.message}` : ""}`;
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderMetadataLookups.ts
function nH(e) {
	return eH(e);
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp.vue?vue&type=script&setup=true&lang.ts
var rH = ["id", "aria-label"], iH = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, aH = {
	key: 1,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, oH = {
	key: 2,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, sH = {
	key: 3,
	"aria-live": "polite",
	class: "dui-alert dui-alert-warning",
	role: "status"
}, cH = /* @__PURE__ */ M({
	__name: "NpcBuilderApp",
	props: { bridge: {} },
	setup(e) {
		let t = e, { finalActorName: n, hasMagicAccess: r, selectedBaseActor: i, selectedSpells: a } = zs(oN()), o = /* @__PURE__ */ k("build-quick"), s = gr(), c = H(() => r.value || a.value.length > 0), { addCareerSummaryWithLowerCareerMode: l, buildMessage: u, chooseSkillSpecialization: d, confirmLowerCareerPrompt: f, confirmSkillResolutionPrompt: p, dismissLowerCareerPrompt: m, dismissSkillResolutionPrompt: h, errorMessage: g, getSkillResolutionLabel: _, isCareerQueued: v, isFindingLowerCareers: y, isLowerCareerSelected: b, lowerCareerCandidateGroups: x, pendingLowerCareerPrompt: S, pendingSkillResolutionPrompt: C, setLowerCareerSelected: ee, usesFreeformSkillSpecialization: te } = WV(t.bridge), { buildNpc: ne, canBuild: re } = PV(t.bridge, o, u, g, y), { isLoadingActors: ie, isLoadingBaseDraft: w, traitDifficultyOptions: T } = GV(t.bridge, g), { metadataLookupError: ae, metadataLookupStatus: oe, retryMetadataLookups: se } = nH(t.bridge), { handleApplicationDragEnter: ce, handleApplicationDragLeave: E, handleApplicationDragOver: le, handleApplicationDrop: ue, isApplicationDragOver: de } = MV(t.bridge, o, l, g);
		return (e, r) => (F(), I("section", {
			"aria-label": "NPC Builder",
			class: D(["app:flex app:min-h-full app:flex-col", { "app:ring-2 app:ring-info": A(de) }]),
			onDragenter: r[2] ||= (...e) => A(ce) && A(ce)(...e),
			onDragleave: r[3] ||= (...e) => A(E) && A(E)(...e),
			onDragover: r[4] ||= (...e) => A(le) && A(le)(...e),
			onDrop: r[5] ||= (...e) => A(ue) && A(ue)(...e)
		}, [
			z(jV, {
				"active-page": o.value,
				"can-build": A(re),
				"final-actor-name": A(n),
				"has-spell-page": c.value,
				"selected-base-actor-name": A(i)?.name ?? "",
				onBuildNpc: A(ne),
				onPageChange: r[0] ||= (e) => o.value = e
			}, null, 8, [
				"active-page",
				"can-build",
				"final-actor-name",
				"has-spell-page",
				"selected-base-actor-name",
				"onBuildNpc"
			]),
			z(mN, {
				open: A(S) !== null,
				title: "Add Lower-Tier Careers?",
				onClose: A(m)
			}, {
				default: j(() => [A(S) ? (F(), L(uN, {
					key: 0,
					"candidate-groups": A(x),
					"is-career-queued": A(v),
					"is-lower-career-selected": A(b),
					prompt: A(S),
					onAddDroppedOnly: A(m),
					onAddSelected: A(f),
					onLowerCareerSelected: A(ee)
				}, null, 8, [
					"candidate-groups",
					"is-career-queued",
					"is-lower-career-selected",
					"prompt",
					"onAddDroppedOnly",
					"onAddSelected",
					"onLowerCareerSelected"
				])) : V("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			z(mN, {
				open: A(C) !== null,
				title: "Resolve Skill Specializations",
				onClose: A(h)
			}, {
				default: j(() => [A(C) ? (F(), L(pV, {
					key: 0,
					"get-skill-resolution-label": A(_),
					prompt: A(C),
					"uses-freeform-skill-specialization": A(te),
					onAddWithoutResolving: A(h),
					onApplySpecializations: A(p),
					onChooseSkillSpecialization: A(d)
				}, null, 8, [
					"get-skill-resolution-label",
					"prompt",
					"uses-freeform-skill-specialization",
					"onAddWithoutResolving",
					"onApplySpecializations",
					"onChooseSkillSpecialization"
				])) : V("", !0)]),
				_: 1
			}, 8, ["open", "onClose"]),
			R("section", {
				id: `${A(s)}-panel`,
				"aria-label": A(_V)(o.value),
				class: "app:grid app:flex-1 app:content-start app:gap-3 app:p-3"
			}, [
				A(g) ? (F(), I("p", iH, O(A(g)), 1)) : A(u) ? (F(), I("p", aH, O(A(u)), 1)) : A(de) ? (F(), I("p", oH, " Release to add this document to the NPC draft. ")) : V("", !0),
				A(oe) === "degraded" ? (F(), I("div", sH, [
					R("span", null, O(A(ae)), 1),
					r[6] ||= R("span", null, "Advancement rows remain editable with reduced metadata.", -1),
					R("button", {
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: r[1] ||= (...e) => A(se) && A(se)(...e)
					}, " Retry Metadata ")
				])) : V("", !0),
				A(hV)(o.value) ? (F(), L(mz, {
					key: 4,
					bridge: t.bridge,
					page: o.value
				}, null, 8, ["bridge", "page"])) : A(gV)(o.value) ? (F(), L(CP, {
					key: 5,
					page: o.value
				}, null, 8, ["page"])) : o.value === "trappings" ? (F(), L(UB, {
					key: 6,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : o.value === "traits" ? (F(), L(pB, {
					key: 7,
					"difficulty-options": A(T)
				}, null, 8, ["difficulty-options"])) : o.value === "detail-spells" ? (F(), L(Zz, {
					key: 8,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : o.value === "mount" ? (F(), L(dR, {
					key: 9,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : A(mV)(o.value) ? (F(), L(_L, {
					key: 10,
					bridge: t.bridge,
					"is-loading-actors": A(ie),
					"is-loading-base-draft": A(w),
					page: o.value
				}, null, 8, [
					"bridge",
					"is-loading-actors",
					"is-loading-base-draft",
					"page"
				])) : V("", !0)
			], 8, rH)
		], 34));
	}
});
//#endregion
//#region src/functions/npc-builder/extract-career-grants.ts
function lH(e) {
	return {
		characteristics: uH(e),
		skills: dH(e),
		talents: pH(e, [["talents", "value"], ["talents"]]),
		trappings: pH(e, [["trappings", "value"], ["trappings"]])
	};
}
function uH(e) {
	let t = pH(e, [["characteristics", "value"], ["characteristics"]]);
	if (t.length) return t.map(fH);
	let n = K(e, ["characteristics"]);
	if (!G(n)) return [];
	let r = [];
	for (let [e, t] of Object.entries(n)) t && r.push(fH(e));
	return hH(r);
}
function dH(e) {
	return pH(e, [["skills", "value"], ["skills"]], { preserveDuplicates: !0 });
}
function fH(e) {
	let t = e.trim().toLocaleLowerCase();
	if (uc(t)) return cc[t];
	let n = lc[t];
	return n ? cc[n] : e.trim();
}
function pH(e, t, n = {}) {
	for (let r of t) {
		let t = nu(K(e, r));
		if (t.length) return n.preserveDuplicates ? mH(t) : hH(t);
	}
	return [];
}
function mH(e) {
	return e.map((e) => e.trim()).filter(Boolean);
}
function hH(e) {
	return [...new Set(mH(e))].sort((e, t) => e.localeCompare(t));
}
//#endregion
//#region src/module/wfrp4e/career-summary.ts
function gH(e) {
	return {
		careerGroup: _H(e),
		grants: lH(e.system),
		img: e.img ?? "",
		level: vH(e),
		name: e.name,
		uuid: e.uuid
	};
}
function _H(e) {
	return q(e.system, ["careergroup", "value"]);
}
function vH(e) {
	let t = K(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
//#endregion
//#region src/module/wfrp4e/career-index.ts
var yH = [
	"name",
	"type",
	"img",
	"system.careergroup.value",
	"system.characteristics",
	"system.level.value",
	"system.skills",
	"system.talents",
	"system.trappings"
], bH = /* @__PURE__ */ new Map(), xH = "idle", SH = null;
function CH() {
	return SH || (xH = "indexing", bH.clear(), SH = TH().then(() => {
		xH = "ready";
	}).catch((e) => {
		xH = "error", t("wfrp4e-customizer-apps | Career indexing failed.", e);
	}), SH);
}
async function wH(e) {
	return xH === "idle" && CH(), !e.careerGroup || e.level === null ? [] : [...bH.values()].filter((t) => AH(t, e)).sort(MH);
}
async function TH() {
	EH(), await px();
	for (let e of game.packs ?? []) {
		if (!lx(e) || !e.getIndex) continue;
		let t = await e.getIndex({ fields: yH });
		for (let n of fx(t)) {
			let t = DH(e, n);
			t && bH.set(t.uuid, t);
		}
		await px();
	}
}
function EH() {
	for (let e of game.items?.contents ?? []) e.type === "career" && bH.set(e.uuid, gH(e));
}
function DH(e, t) {
	let n = cx(e, t);
	if (t.type !== "career" || !t.name || !n) return null;
	let r = K(t, ["system"]);
	return {
		careerGroup: OH(t),
		grants: lH(r),
		img: t.img ?? "",
		level: kH(t),
		name: t.name,
		uuid: n
	};
}
function OH(e) {
	let t = K(e, [
		"system",
		"careergroup",
		"value"
	]);
	return typeof t == "string" ? t.trim() : "";
}
function kH(e) {
	let t = K(e, [
		"system",
		"level",
		"value"
	]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function AH(e, t) {
	return e.uuid !== t.uuid && e.level !== null && t.level !== null && e.level < t.level && jH(e.careerGroup) === jH(t.careerGroup);
}
function jH(e) {
	return e.trim().toLocaleLowerCase();
}
function MH(e, t) {
	let n = e.level ?? 0, r = t.level ?? 0;
	return n === r ? e.name.localeCompare(t.name) : n - r;
}
//#endregion
//#region src/module/wfrp4e/skill-specializations.ts
var NH = [
	"name",
	"type",
	"system.characteristic.value"
], PH = /* @__PURE__ */ new Map(), FH = /* @__PURE__ */ new Map(), IH = /* @__PURE__ */ new Map(), LH = "idle", RH = null;
async function zH(e) {
	let t = AA(e);
	return t ? (LH === "idle" && VH(), RH && await RH, [...PH.get(t) ?? []].sort((e, t) => e.localeCompare(t))) : [];
}
async function BH(e) {
	return LH === "idle" && VH(), RH && await RH, e.flatMap((e) => {
		let t = qH(e);
		return t ? [{
			...t,
			skillName: e
		}] : [];
	});
}
function VH() {
	return RH || (LH = "indexing", PH.clear(), FH.clear(), IH.clear(), RH = HH().then(() => {
		LH = "ready";
	}).catch((e) => {
		LH = "error", t("wfrp4e-customizer-apps | Skill specialization indexing failed.", e);
	}), RH);
}
async function HH() {
	JH(), await px();
	for (let e of game.packs ?? []) {
		if (!lx(e) || !e.getIndex) continue;
		let t = await e.getIndex({ fields: NH });
		for (let e of fx(t)) WH(e);
		await px();
	}
}
function UH(e) {
	if (e.type !== "skill") return;
	GH(e);
	let t = DA(e.name);
	if (!t) return;
	let n = AA(t.baseName), r = PH.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), PH.set(n, r);
}
function WH(e) {
	if (e.type !== "skill" || !e.name) return;
	KH(e);
	let t = DA(e.name);
	if (!t) return;
	let n = AA(t.baseName), r = PH.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), PH.set(n, r);
}
function GH(e) {
	let t = q(e.system, ["characteristic", "value"]);
	if (!uc(t)) return;
	let n = {
		characteristicKey: t,
		characteristicName: cc[t],
		skillName: e.name
	}, r = AA(e.name), i = AA(DA(e.name)?.baseName ?? e.name);
	FH.set(r, n), IH.has(i) || IH.set(i, n);
}
function KH(e) {
	let t = q(e, [
		"system",
		"characteristic",
		"value"
	]);
	if (!uc(t) || !e.name) return;
	let n = {
		characteristicKey: t,
		characteristicName: cc[t],
		skillName: e.name
	}, r = AA(e.name), i = AA(DA(e.name)?.baseName ?? e.name);
	FH.set(r, n), IH.has(i) || IH.set(i, n);
}
function qH(e) {
	let t = AA(e), n = AA(DA(e)?.baseName ?? e);
	return FH.get(t) ?? IH.get(n) ?? null;
}
function JH() {
	for (let e of game.items?.contents ?? []) UH(e);
}
//#endregion
//#region src/module/foundry/item-sources.ts
function YH(e, t) {
	return {
		img: "systems/wfrp4e/icons/blank.png",
		name: e,
		system: {},
		type: t
	};
}
function XH(e, t, n) {
	let r = e ? e.toObject() : YH(t, n);
	return delete r._id, r;
}
function ZH(e, t, n) {
	return QH(e, t, n)[0] ?? null;
}
function QH(e, t, n) {
	return e.items?.contents.filter((e) => e.type === n && tU(e.name, t)) ?? [];
}
function $H(e, t, n) {
	return e.items?.contents.find((e) => t && e.uuid === t ? !0 : tU(e.name, n)) ?? null;
}
function eU(e, t) {
	return game.items?.contents.find((n) => t.includes(n.type) && tU(n.name, e)) ?? null;
}
function tU(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/wfrp4e/item-lookup.ts
async function nU(e, t) {
	return await game.wfrp4e?.utility?.findItem?.(e, t) || eU(e, t);
}
//#endregion
//#region src/module/wfrp4e/talent-maximums.ts
async function rU(e) {
	let t = [];
	for (let n of iU(e)) {
		let e = await nU(n, ["talent"]);
		e && t.push({
			maximumFormula: q(e.system, ["max", "formula"]),
			maximumKey: q(e.system, ["max", "value"]),
			talentName: n
		});
	}
	return t;
}
function iU(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/normalize-npc-builder-settings.ts
var aU = {
	...aM(),
	allowBaseActorCharacteristics: !0,
	allowBaseActorSkills: !0,
	allowBaseActorTalents: !0
};
function oU(e) {
	let t = aM();
	return cU(e) ? {
		allowBaseActorCharacteristics: lU(e.allowBaseActorCharacteristics, aU.allowBaseActorCharacteristics),
		allowBaseActorSkills: lU(e.allowBaseActorSkills, aU.allowBaseActorSkills),
		allowBaseActorTalents: lU(e.allowBaseActorTalents, aU.allowBaseActorTalents),
		allowBaseActorTraits: lU(e.allowBaseActorTraits, aU.allowBaseActorTraits),
		allowBaseActorTrappings: lU(e.allowBaseActorTrappings, aU.allowBaseActorTrappings),
		askForLinkedSkillSpecializations: lU(e.askForLinkedSkillSpecializations, aU.askForLinkedSkillSpecializations),
		autoSelectGrantedSpells: lU(e.autoSelectGrantedSpells, aU.autoSelectGrantedSpells),
		baseActorFolderUuid: uU(e.baseActorFolderUuid, aU.baseActorFolderUuid),
		includeSpeciesInName: lU(e.includeSpeciesInName, aU.includeSpeciesInName),
		lowerCareerMode: sU(e.lowerCareerMode) ? e.lowerCareerMode : aU.lowerCareerMode,
		outputActorFolderUuid: uU(e.outputActorFolderUuid, aU.outputActorFolderUuid),
		quickTraitFolderUuid: uU(e.quickTraitFolderUuid, aU.quickTraitFolderUuid),
		searchCompendiumPortraitAssets: lU(e.searchCompendiumPortraitAssets, aU.searchCompendiumPortraitAssets),
		searchFoundryPortraitAssets: lU(e.searchFoundryPortraitAssets, aU.searchFoundryPortraitAssets),
		searchWebPortraitAssets: lU(e.searchWebPortraitAssets, aU.searchWebPortraitAssets)
	} : t;
}
function sU(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
function cU(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function lU(e, t) {
	return typeof e == "boolean" ? e : t;
}
function uU(e, t) {
	return typeof e == "string" ? e : t;
}
//#endregion
//#region src/module/apps/npc-builder/settings.ts
var dU = ty({
	defaultValue: aM(),
	key: "npcBuilderSettings",
	name: "NPC Builder Settings",
	normalize: oU
});
function fU() {
	ny(dU);
}
function pU() {
	return ry(dU);
}
async function mU(e) {
	return await iy(dU, e);
}
//#endregion
//#region src/module/foundry/embedded-items.ts
function hU() {
	return {
		creates: [],
		deletes: [],
		updates: []
	};
}
async function gU(e, t) {
	t.deletes.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", t.deletes), t.updates.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", t.updates), t.creates.length && await e.createEmbeddedDocuments("Item", t.creates);
}
//#endregion
//#region src/module/apps/npc-builder/xp-source-values.ts
function _U(e, t) {
	return $l(e, [[
		"characteristics",
		t,
		"initial",
		"value"
	], [
		"characteristics",
		t,
		"initial"
	]]) + $l(e, [[
		"characteristics",
		t,
		"modifier",
		"value"
	], [
		"characteristics",
		t,
		"modifier"
	]]) + $l(e, [[
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
async function vU(e, t) {
	let n = {}, r = hU();
	for (let i of t) {
		let t = Math.floor(i.current);
		if (i.kind === "talent") {
			await EU(e, i, t, r);
			continue;
		}
		let a = i.baseAdvances + t;
		if (i.kind === "characteristic") {
			if (t === 0) continue;
			TU(n, i, a);
			continue;
		}
		let o = ZH(e, i.name, i.kind);
		if (t === 0 && !i.includedFromCustom && !o) continue;
		if (o) {
			r.updates.push({
				_id: o.id,
				"system.advances.value": a
			});
			continue;
		}
		let s = XH(await DU(i), i.name, i.kind);
		s.type = i.kind, ru(s, [
			"system",
			"advances",
			"value"
		], a), r.creates.push(s);
	}
	Object.keys(n).length && await e.update(n), await gU(e, r);
}
function yU(e) {
	let t = e.toObject().system, n = $l(t, [["advances", "value"], ["advances"]]);
	if (e.type === "talent") return {
		advances: Math.max(1, n),
		kind: "talent",
		name: e.name,
		sourceUuid: e.uuid,
		talentMaximumFormula: q(t, ["max", "formula"]),
		talentMaximumKey: q(t, ["max", "value"])
	};
	let r = wU(t), i = {
		advances: n,
		kind: "skill",
		name: e.name,
		sourceUuid: e.uuid
	};
	return r && (i.characteristicKey = r, i.characteristicName = cc[r]), i;
}
function bU(e) {
	let t = e.toObject().system, n = [];
	for (let [e, r] of Object.entries(cc)) {
		let i = $l(t, [[
			"characteristics",
			e,
			"advances",
			"value"
		], [
			"characteristics",
			e,
			"advances"
		]]), a = $l(t, [[
			"characteristics",
			e,
			"modifier",
			"value"
		], [
			"characteristics",
			e,
			"modifier"
		]]), o = $l(t, [[
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
function xU(e, t) {
	return t === "talent" ? SU(e) : e.items?.contents.filter((e) => e.type === t).map((n) => CU(e, n, t)) ?? [];
}
function SU(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.items?.contents.filter((e) => e.type === "talent") ?? []) {
		let e = n.toObject().system, r = n.name.trim().toLocaleLowerCase(), i = $l(e, [["advances", "value"], ["advances"]]), a = t.get(r);
		if (a) {
			a.baseAdvances += i, a.current += i;
			continue;
		}
		t.set(r, {
			baseAdvances: i,
			current: i,
			kind: "talent",
			name: n.name,
			talentMaximumFormula: q(e, ["max", "formula"]),
			talentMaximumKey: q(e, ["max", "value"])
		});
	}
	return [...t.values()];
}
function CU(e, t, n) {
	let r = t.toObject().system, i = $l(r, [["advances", "value"], ["advances"]]);
	if (n === "talent") return {
		baseAdvances: i,
		current: i,
		kind: n,
		name: t.name,
		talentMaximumFormula: q(r, ["max", "formula"]),
		talentMaximumKey: q(r, ["max", "value"])
	};
	let a = $l(r, [["modifier", "value"], ["modifier"]]), o = wU(r), s = {
		baseAdvances: i,
		baseModifier: a,
		current: (o ? _U(e.toObject().system, o) : 0) + i + a,
		kind: n,
		name: t.name
	};
	return o && (s.characteristicKey = o, s.characteristicName = cc[o]), s;
}
function wU(e) {
	let t = q(e, ["characteristic", "value"]);
	return uc(t) ? t : void 0;
}
function TU(e, t, n) {
	let r = lc[t.name.trim().toLocaleLowerCase()];
	r && (e[`system.characteristics.${r}.advances`] = n);
}
async function EU(e, t, n, r) {
	let i = Math.max(0, t.baseAdvances + n), a = QH(e, t.name, "talent"), o = a[0] ?? await DU(t);
	r.deletes.push(...a.map((e) => e.id));
	for (let e = 0; e < i; e += 1) {
		let e = XH(o, t.name, "talent");
		e.type = "talent", ru(e, [
			"system",
			"advances",
			"value"
		], 1), r.creates.push(e);
	}
}
async function DU(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		if (_b(t)) return t;
	}
	return nU(e.name, [e.kind]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/config.ts
function OU(e, t) {
	ru(e, [
		"system",
		"specification",
		"value"
	], t.specification), t.rollable && !t.damage && ru(e, [
		"system",
		"rollable",
		"defaultDifficulty"
	], t.defaultDifficulty), t.damage && t.dice && ru(e, [
		"system",
		"rollable",
		"dice"
	], t.dice);
}
function kU(e, t) {
	return {
		_id: e,
		"system.specification.value": t.specification,
		...t.rollable && !t.damage ? { "system.rollable.defaultDifficulty": t.defaultDifficulty } : {},
		...t.damage && t.dice ? { "system.rollable.dice": t.dice } : {}
	};
}
function AU(e) {
	return {
		...mA(),
		attackType: PU(e.system, ["rollable", "attackType"]) || "melee",
		bonusCharacteristic: PU(e.system, ["rollable", "bonusCharacteristic"]),
		damage: tu(e.system, [["rollable", "damage"]]),
		defaultDifficulty: PU(e.system, ["rollable", "defaultDifficulty"]) || "challenging",
		dice: PU(e.system, ["rollable", "dice"]),
		rollable: tu(e.system, [["rollable", "value"]]),
		skill: PU(e.system, ["rollable", "skill"]),
		sl: tu(e.system, [["rollable", "SL"]], !0),
		specification: PU(e.system, ["specification", "value"])
	};
}
function jU(e) {
	return NU(e.system);
}
function MU(e) {
	return NU(e.system);
}
function NU(e) {
	return tu(e, [["disabled"], ["disabled", "value"]]);
}
function PU(e, t) {
	let n = K(e, t);
	return typeof n == "string" ? n.trim() : typeof n == "number" ? String(n) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/apply.ts
async function FU(e, t) {
	let n = hU();
	for (let r of t) {
		let t = r.source === "base" ? $H(e, r.sourceUuid, r.name) : ZH(e, r.name, "trait");
		if (r.ignored) {
			t && n.deletes.push(t.id);
			continue;
		}
		if (t) {
			n.updates.push(kU(t.id, r.config));
			continue;
		}
		let i = XH(r.sourceUuid ? await IU(r.sourceUuid) : await nU(r.name, ["trait"]), r.name, "trait");
		i.type = "trait", ru(i, ["system", "disabled"], !1), OU(i, r.config), n.creates.push(i);
	}
	await gU(e, n);
}
async function IU(e) {
	let t = await fromUuid(e);
	return _b(t) ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/actor-traits.ts
function LU(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !jU(e)).map(BU) ?? [];
}
function RU(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && jU(e)).map(BU) ?? [];
}
function zU(e) {
	Array.isArray(e.items) && (e.items = e.items.filter((e) => {
		if (typeof e != "object" || !e) return !0;
		let t = e;
		return t.type !== "trait" || !MU(t);
	}));
}
function BU(e) {
	return {
		config: AU(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/difficulty-options.ts
var VU = [
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
async function HU() {
	let e = K(game.wfrp4e?.config, ["difficultyLabels"]);
	if (!G(e)) return VU;
	let t = Object.entries(e).filter((e) => {
		let [t, n] = e;
		return !!t.trim() && typeof n == "string";
	}).map(([e, t]) => ({
		label: t,
		value: e
	}));
	return t.length ? t : VU;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/drops.ts
async function UU(e) {
	let t = xb(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Trait item here.");
	let n = bb(await fromUuid(t.uuid), "trait", "Drop a Foundry Trait item here.");
	return {
		config: AU(n),
		ignored: !1,
		key: `custom:${n.uuid}`,
		name: n.name,
		source: "custom",
		sourceUuid: n.uuid
	};
}
//#endregion
//#region src/functions/npc-builder/recommended-quick-traits.ts
var WU = [
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
async function GU(e) {
	return QU(await ZU(e, "Actor"));
}
async function KU(e) {
	return QU(await ZU(e, "Item"));
}
function qU() {
	return game.folders.contents.filter((e) => e.type === "Actor").map(QU).sort((e, t) => e.name.localeCompare(t.name));
}
function JU() {
	return game.folders.contents.filter((e) => e.type === "Item").map(QU).sort((e, t) => e.name.localeCompare(t.name));
}
function YU(e) {
	return e ? game.folders.contents.find((t) => t.uuid === e) ?? null : null;
}
function XU(e) {
	let t = YU(e);
	return t?.type === "Item" ? t : null;
}
async function ZU(e, t) {
	let n = e.trim();
	if (!n) throw Error("Enter a folder name first.");
	let r = game.folders.contents.find((e) => e.type === t && $U(e.name, n));
	if (r) return r;
	let i = await Folder.create({
		name: n,
		type: t
	});
	if (!i) throw Error("Foundry did not create the folder.");
	return i;
}
function QU(e) {
	return {
		name: e.name,
		uuid: e.uuid
	};
}
function $U(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/quick-traits.ts
async function eW(e) {
	let t = XU(e.quickTraitFolderUuid);
	if (!t) throw Error("Choose a Quick Traits item folder before importing traits.");
	let n = new Set(rW(e).map((e) => e.name.trim().toLocaleLowerCase()));
	for (let e of WU) {
		if (n.has(e.trim().toLocaleLowerCase())) continue;
		let r = XH(await nU(e, ["trait"]), e, "trait");
		r.folder = t.id, r.type = "trait", await Item.create(r);
	}
	return ui.notifications?.info("Imported recommended quick traits."), await tW(e);
}
async function tW(e) {
	return rW(e).map(iW).sort((e, t) => e.name.localeCompare(t.name));
}
function nW(e, t) {
	return t.quickTraitFolderUuid ? e.folder?.uuid === t.quickTraitFolderUuid : !1;
}
function rW(e) {
	return game.items?.contents.filter((t) => t.type === "trait" && nW(t, e)) ?? [];
}
function iW(e) {
	return {
		config: AU(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/trappings.ts
var aW = [
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
];
async function oW(e, t) {
	let n = hU();
	for (let r of t) {
		let t = r.source === "base" ? $H(e, r.sourceUuid, r.name) : null;
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
		let i = await fW(r), a = r.resolution.selectedItemType || r.itemType || "trapping", o = XH(i, r.resolution.selectedName || r.name, a);
		o.type = a || o.type || "trapping", ru(o, [
			"system",
			"quantity",
			"value"
		], r.quantity), n.creates.push(o);
	}
	await gU(e, n);
}
async function sW(e) {
	return HM(e, await pW());
}
async function cW(e) {
	let t = xb(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Item here.");
	let n = yb(await fromUuid(t.uuid), "Drop a Foundry Item here.");
	return {
		ignored: !1,
		itemType: n.type,
		key: `custom:${n.uuid}`,
		name: n.name,
		quantity: uW(n),
		resolution: BM({
			itemType: n.type,
			name: n.name,
			uuid: n.uuid
		}),
		source: "custom",
		sourceUuid: n.uuid
	};
}
function lW(e) {
	let t = dW();
	return e.items?.contents.filter((e) => t.includes(e.type)).map((e) => ({
		itemType: e.type,
		name: e.name,
		quantity: uW(e),
		uuid: e.uuid
	})) ?? [];
}
function uW(e) {
	return $l(e.system, [["quantity", "value"], ["quantity"]]) || 1;
}
function dW() {
	let e = Ql(game.wfrp4e?.config, ["trappingItems"]);
	return e.length ? e : aW;
}
async function fW(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		return _b(t) ? t : null;
	}
	if (e.resolution.selectedCandidateUuid) {
		let t = await fromUuid(e.resolution.selectedCandidateUuid);
		return _b(t) ? t : null;
	}
	return e.resolution.status === "fallback" ? null : await nU(e.resolution.selectedName || e.name, dW());
}
async function pW() {
	let e = [], t = dW();
	for (let n of game.items?.contents ?? []) t.includes(n.type) && e.push(hW(n, "World"));
	for (let n of game.packs ?? []) {
		if (!lx(n)) continue;
		let r = await mW(n, t);
		if (r.length) {
			e.push(...r);
			continue;
		}
		if (!n.getDocuments) continue;
		let i = await n.getDocuments();
		for (let r of i) _b(r) && t.includes(r.type) && e.push(hW(r, n.title ?? "Compendium"));
	}
	return e;
}
async function mW(e, t) {
	return e.getIndex ? fx(await e.getIndex({ fields: ["name", "type"] })).filter((n) => !!(n.name && n.type && cx(e, n) && t.includes(n.type))).map((t) => ({
		itemType: t.type ?? "trapping",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		uuid: cx(e, t)
	})) : [];
}
function hW(e, t) {
	return {
		itemType: e.type,
		name: e.name,
		sourceLabel: t,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/actors.ts
function gW(e) {
	return game.actors.contents.filter((t) => SW(t, e)).map(yW);
}
async function _W(e) {
	let t = vb(await fromUuid(e));
	return {
		advancements: [
			...bU(t),
			...xU(t, "skill"),
			...xU(t, "talent")
		],
		optionalTraits: RU(t),
		traits: LU(t),
		trappings: lW(t)
	};
}
async function vW(e) {
	let t = xb(e);
	if (t.type !== "Actor") throw Error("Drop a Foundry Actor here.");
	let n = null;
	return t.uuid ? n = await fromUuid(t.uuid) : t.id && (n = game.actors.get(t.id)), yW(vb(n));
}
function yW(e) {
	return {
		img: e.img ?? "",
		name: e.name,
		prototypeTokenImg: xW(e),
		species: bW(e),
		type: e.type,
		uuid: e.uuid
	};
}
function bW(e) {
	return q(e.system, [
		"details",
		"species",
		"value"
	]) || q(e.system, ["details", "species"]) || q(e.system, [
		"details",
		"race",
		"value"
	]) || q(e.system, [
		"details",
		"ancestry",
		"value"
	]);
}
function xW(e) {
	return q(e, [
		"prototypeToken",
		"texture",
		"src"
	]) || q(e.toObject(), [
		"prototypeToken",
		"texture",
		"src"
	]);
}
function SW(e, t) {
	return t.baseActorFolderUuid ? e.folder?.uuid === t.baseActorFolderUuid : !0;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/careers.ts
async function CW(e) {
	let t = xb(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a WFRP Career item here.");
	return gH(bb(await fromUuid(t.uuid), "career", "Drop a WFRP Career item here."));
}
async function wW(e) {
	let t = [];
	for (let n of e) {
		let e = bb(await fromUuid(n.uuid), "career", `Career “${n.name}” is no longer available.`);
		for (let r = 0; r < SA(n.quantity); r += 1) {
			let n = e.toObject();
			delete n._id, ru(n, [
				"system",
				"complete",
				"value"
			], !0), ru(n, [
				"system",
				"current",
				"value"
			], !1), t.push(n);
		}
	}
	return t;
}
async function TW(e, t) {
	t.length && await e.createEmbeddedDocuments("Item", t);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/constants.ts
var EW = "spell", DW = new Set(lM), OW = new Set(uM);
async function kW() {
	return AW().map((e) => ({
		category: hM(e.key),
		key: e.key,
		label: e.name,
		value: e.name,
		wind: e.wind
	})).sort((e, t) => e.category === t.category ? e.label.localeCompare(t.label) : e.category.localeCompare(t.category));
}
function AW() {
	let e = K(game.wfrp4e?.config, ["magicLores"]), t = K(game.wfrp4e?.config, ["magicWind"]), n = [];
	if (!G(e)) return [PW()];
	for (let [r, i] of Object.entries(e)) {
		let e = VW(i) || r, a = BW(t, r);
		n.push({
			key: r,
			matchTerms: zW(r, e, a),
			name: e,
			wind: a
		});
	}
	return n.some((e) => e.key === "petty") || n.push(PW()), n;
}
function jW(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		if (r.isAmbiguous) continue;
		if (r.kind === "petty-magic") {
			let e = RW("petty magic", t);
			e && n.set(e.key, e);
			continue;
		}
		let e = RW(r.rawLore, t);
		e && n.set(e.key, e);
	}
	return [...n.values()];
}
function MW(e, t) {
	let n = [...NW(e.system), LW(e.name)].filter(Boolean);
	for (let e of n) {
		let n = IW(e, t);
		if (n) return n;
		let r = RW(e, t);
		if (r) return r;
	}
	return null;
}
function NW(e) {
	return [
		...nu(K(e, ["lore", "value"])),
		...nu(K(e, ["lore"])),
		...nu(K(e, ["magicLore", "value"])),
		...nu(K(e, ["magicLore"])),
		...nu(K(e, ["category", "value"])),
		...nu(K(e, [
			"system",
			"lore",
			"value"
		])),
		...nu(K(e, ["system", "lore"])),
		...nu(K(e, ["system.lore.value"])),
		...nu(K(e, ["system.lore"]))
	];
}
function PW() {
	return {
		key: "petty",
		matchTerms: ["petty", "petty magic"],
		name: "Petty Magic",
		wind: ""
	};
}
function FW(e) {
	let t = e.trim() || "Unknown Lore";
	return {
		key: fM(t) || "unknown",
		matchTerms: [t],
		name: t,
		wind: ""
	};
}
function IW(e, t) {
	let n = fM(e);
	return n === "lore" ? t.find((e) => e.key !== "petty") ?? null : n === "the eight winds" || n === "eight winds" ? t.find((e) => DW.has(e.key)) ?? null : n === "dark lore" ? t.find((e) => OW.has(e.key)) ?? null : null;
}
function LW(e) {
	return /\(([^)]+)\)\s*$/.exec(e)?.[1]?.trim() ?? "";
}
function RW(e, t) {
	let n = fM(e);
	return n ? t.find((e) => e.matchTerms.some((e) => fM(e) === n)) ?? null : null;
}
function zW(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = fM(e), a = fM(t);
	for (let i of [
		e,
		t,
		n
	]) i.trim() && r.add(i.trim());
	return (i === "petty" || a === "petty") && r.add("Petty Magic"), (i === "shadow" || a === "shadow") && r.add("Shadows"), t && !/^lore of /i.test(t) && r.add(`Lore of ${t}`), [...r];
}
function BW(e, t) {
	return G(e) ? VW(e[t]) : "";
}
function VW(e) {
	return typeof e == "string" ? e.trim() : G(e) ? q(e, ["name"]) || q(e, ["label"]) || q(e, ["value"]) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/debug.ts
var HW = "[Drowsy's WFRP4e Customizers][Spell Lookup]";
function UW(t, n) {
	if (n) {
		e(`${HW} ${t}`, n);
		return;
	}
	e(`${HW} ${t}`);
}
function WW(e, n) {
	t(`${HW} ${e}`, n);
}
function GW(e) {
	return [
		e.title ?? "",
		e.collection ?? "",
		q(e, ["metadata", "type"]),
		q(e, ["metadata", "documentName"]),
		e.documentName
	].filter(Boolean).join(" | ");
}
function KW(e) {
	return {
		loreTerms: NW(e.system),
		name: e.name,
		sourceLabel: e.sourceLabel,
		uuid: e.uuid
	};
}
function qW(e) {
	return typeof e == "string" ? {
		kind: "uuid-string",
		value: e
	} : G(e) ? {
		documentName: q(e, ["documentName"]),
		hasSystem: G(K(e, ["system"])),
		loreTerms: NW(K(e, ["system"])),
		name: q(e, ["name"]),
		type: q(e, ["type"]),
		uuid: q(e, ["uuid"])
	} : { kind: typeof e };
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-input-conversion.ts
function JW(e, t) {
	return {
		img: e.img ?? "",
		name: e.name,
		sourceLabel: t,
		system: e.system,
		uuid: e.uuid
	};
}
function YW(e) {
	return /^item\./i.test(e.uuid) ? "World" : XW(e.uuid, "WFRP Item Lookup");
}
function XW(e, t) {
	let n = /^Compendium\.([^.]+\.[^.]+)\./.exec(e)?.[1];
	return n ? [...game.packs ?? []].find((e) => e.collection === n)?.title ?? n : t;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/compendium-spell-inputs.ts
async function ZW(e) {
	if (UW("Compendium index scan start", { pack: GW(e) }), !e.getIndex) return UW("Compendium has no index; loading documents", { pack: GW(e) }), await eG(e);
	let t = fx(await e.getIndex({ fields: [
		"name",
		"type",
		"img",
		"system.lore.value"
	] }));
	if (UW("Compendium index loaded", {
		entries: t.length,
		pack: GW(e),
		samples: t.slice(0, 5).map((t) => ({
			hasLoreTerms: NW(t).length > 0,
			name: t.name,
			type: t.type,
			uuid: cx(e, t)
		}))
	}), !t.length) return UW("Compendium index empty; loading documents", { pack: GW(e) }), await eG(e);
	let n = t.filter($W);
	UW("Compendium index spell candidates", {
		pack: GW(e),
		spellEntries: n.length
	});
	let r = n.filter((e) => e.name).map((t) => nG(e, t));
	return r.length || !tG(e) ? r : await eG(e);
}
function QW(e) {
	return lx(e);
}
function $W(e) {
	return e.type === "spell" ? !0 : !!(e.name && (NW(e).length || LW(e.name)));
}
async function eG(e) {
	if (!e.getDocuments) return UW("Compendium has no document loader", { pack: GW(e) }), [];
	UW("Compendium document load start", { pack: GW(e) });
	let t = await e.getDocuments(), n = t.filter((e) => _b(e) && e.type === "spell");
	return UW("Compendium document load complete", {
		documents: t.length,
		pack: GW(e),
		spellDocuments: n.length,
		spellSamples: n.slice(0, 5).map((e) => ({
			loreTerms: NW(e.system),
			name: e.name,
			uuid: e.uuid
		}))
	}), n.map((t) => JW(t, e.title ?? "Compendium"));
}
function tG(e) {
	return e.collection === "wfrp4e-core.items" || e.collection === "wfrp4e-wom.items";
}
function nG(e, t) {
	return {
		img: t.img ?? t.thumb ?? "",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		system: t,
		uuid: cx(e, t)
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/warhammer-spell-inputs.ts
async function rG() {
	let e = aG();
	if (!e) return UW("WFRP helper unavailable"), [];
	try {
		let t = await e.findAllItems(EW, "Loading Spells", !0, ["system.lore.value"]);
		return UW("WFRP helper raw result", {
			count: t.length,
			samples: t.slice(0, 10).map(qW)
		}), (await Promise.all(t.map((e) => iG(e)))).filter((e) => e !== null);
	} catch (e) {
		return WW("WFRP helper lookup failed.", e), [];
	}
}
async function iG(e) {
	if (typeof e == "string") {
		let t = await fromUuid(e);
		return _b(t) && t.type === "spell" ? JW(t, YW(t)) : null;
	}
	if (_b(e)) return e.type === "spell" ? JW(e, YW(e)) : null;
	if (q(e, ["type"]) !== "spell") return null;
	let t = q(e, ["name"]);
	return t ? {
		img: q(e, ["img"]) || q(e, ["thumb"]),
		name: t,
		sourceLabel: XW(q(e, ["uuid"]), "WFRP Item Lookup"),
		system: K(e, ["system"]),
		uuid: q(e, ["uuid"])
	} : null;
}
function aG() {
	let e = K(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
	return typeof e == "function" ? { findAllItems: e } : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-resolution-inputs.ts
async function oG() {
	let e = [], n = [...game.packs ?? []];
	UW("Candidate lookup start", {
		itemPacks: n.filter(QW).length,
		totalPacks: n.length,
		warhammerUtilityAvailable: !!lG(),
		worldItems: game.items?.contents.length ?? 0
	});
	let r = await rG();
	UW("WFRP helper lookup complete", {
		utilityInputs: r.length,
		utilitySamples: r.slice(0, 10).map(KW)
	}), e.push(...r), e.push(...sG()), UW("World spell scan complete", { worldSpellCount: e.filter((e) => e.sourceLabel === "World").length });
	for (let r of n) if (QW(r)) try {
		let t = await ZW(r);
		e.push(...t), UW("Compendium spell scan complete", {
			inputCount: t.length,
			pack: GW(r),
			samples: t.slice(0, 5).map(KW)
		});
	} catch (e) {
		t(`wfrp4e-customizer-apps | Spell lookup skipped compendium "${r.title ?? r.collection ?? "unknown"}".`, e);
	}
	let i = cG(e);
	return UW("Candidate lookup complete", {
		rawInputCount: e.length,
		uniqueInputCount: i.length
	}), i;
}
function sG() {
	let e = [];
	for (let t of game.items?.contents ?? []) t.type === "spell" && e.push(JW(t, "World"));
	return e;
}
function cG(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.uuid || n.name.trim().toLocaleLowerCase();
		t.has(e) || t.set(e, n);
	}
	return [...t.values()];
}
function lG() {
	return K(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/index.ts
async function uG(e, t) {
	let n = [];
	for (let r of t) {
		if (!r.selected || ZH(e, r.name, "spell")) continue;
		let t = XH(r.sourceUuid ? await pG(r.sourceUuid) : null, r.name, EW);
		t.type = EW, n.push(t);
	}
	n.length && await e.createEmbeddedDocuments("Item", n);
}
async function dG(e) {
	let t = jW(e, AW());
	if (UW("Grant resolution start", {
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
	let n = await oG(), r = /* @__PURE__ */ new Map(), i = [];
	for (let e of n) {
		let n = MW(e, t);
		if (!n) {
			i.length < 20 && i.push({
				loreTerms: NW(e.system),
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
	return UW("Grant resolution complete", {
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
async function fG(e) {
	let t = xb(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Spell item here.");
	let n = bb(await fromUuid(t.uuid), EW, "Drop a Foundry Spell item here."), r = MW(JW(n, "Dropped"), [...AW(), PW()]) ?? FW(NW(n.system)[0] ?? "");
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
async function pG(e) {
	let t = await fromUuid(e);
	return _b(t) && t.type === "spell" ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/mounts/trait-sources.ts
var mG = "generatedMountTrait";
function hG(e, t) {
	return t.traits.flatMap((t) => {
		if (!t.included || xL(t.name)) return [];
		let n = gG(e, t);
		if (!n) return [];
		let r = n.toObject();
		return delete r._id, r.name = t.outputName, ru(r, ["system", "disabled"], !1), ru(r, [
			"flags",
			Y,
			mG
		], {
			mountUuid: e.uuid,
			sourceTraitUuid: t.sourceUuid
		}), t.fixedDamage !== null && _G(r, t.fixedDamage), [r];
	});
}
function gG(e, t) {
	return e.items?.contents.find((e) => e.type === "trait" && e.uuid === t.sourceUuid) ?? null;
}
function _G(e, t) {
	ru(e, [
		"system",
		"specification",
		"value"
	], String(t)), ru(e, [
		"system",
		"rollable",
		"bonusCharacteristic"
	], ""), ru(e, [
		"system",
		"rollable",
		"rollCharacteristic"
	], "ws"), ru(e, [
		"system",
		"rollable",
		"skill"
	], "");
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/mounts/armour.ts
async function vG(e, t, n, r) {
	let i = e.items?.contents.filter(xG) ?? [], a = r.traits.filter((e) => e.included && xL(e.name)), o = yG(i), s = bG(n, a), c = Math.max(o.value, s.value) + 1;
	if (o.item && e.updateEmbeddedDocuments) {
		await e.updateEmbeddedDocuments("Item", [{
			_id: o.item.id,
			"system.specification.value": String(c)
		}]);
		return;
	}
	let l = XH((s.contribution ? gG(t, s.contribution) : null) ?? await nU("Armour", ["trait"]), "Armour", "trait");
	l.name = "Armour", l.type = "trait", ru(l, ["system", "disabled"], !1), ru(l, [
		"system",
		"specification",
		"value"
	], String(c)), await e.createEmbeddedDocuments("Item", [l]);
}
function yG(e) {
	return e.reduce((e, t) => {
		let n = $l(t.system, [["specification", "value"]]);
		return n > e.value ? {
			item: t,
			value: n
		} : e;
	}, {
		item: null,
		value: 0
	});
}
function bG(e, t) {
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
function xG(e) {
	return e.type === "trait" && xL(e.name);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/mounts/profile.ts
var SG = new Set(Object.values(vL));
async function CG(e) {
	return wG(vb(await fromUuid(e)));
}
function wG(e) {
	return {
		characteristics: {
			initiative: OG(e, "i"),
			strength: OG(e, "s"),
			strengthBonus: kG(e, "s"),
			toughness: OG(e, "t")
		},
		img: e.img ?? "",
		movement: $l(e.system, [[
			"details",
			"move",
			"value"
		]]),
		name: e.name,
		size: AG(e),
		traits: TG(e),
		uuid: e.uuid,
		wounds: $l(e.system, [[
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
function TG(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !jG(e)).map((t) => EG(e, t)).sort((e, t) => e.name.localeCompare(t.name)) ?? [];
}
function EG(e, t) {
	let n = tu(t.system, [["rollable", "damage"]]), r = q(t.system, ["specification", "value"]);
	return {
		damage: n,
		fixedDamage: n ? DG(e, t, r) : null,
		name: t.name,
		specification: r,
		uuid: t.uuid
	};
}
function DG(e, t, n) {
	let r = eu(t, [["Damage"]]);
	if (r !== null) return r;
	let i = Number(n), a = q(t.system, ["rollable", "bonusCharacteristic"]);
	return (Number.isFinite(i) ? i : 0) + (a ? kG(e, a) : 0);
}
function OG(e, t) {
	return $l(e.system, [[
		"characteristics",
		t,
		"value"
	], [
		"characteristics",
		t,
		"initial"
	]]);
}
function kG(e, t) {
	return eu(e.system, [[
		"characteristics",
		t,
		"bonus"
	]]) ?? Math.floor(OG(e, t) / 10);
}
function AG(e) {
	let t = q(e.system, [
		"details",
		"size",
		"value"
	]);
	return SG.has(t) ? t : vL.Average;
}
function jG(e) {
	return tu(e.system, [["disabled"], ["disabled", "value"]]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/mounts/apply.ts
var MG = {
	avg: 1,
	enor: 3,
	lrg: 2,
	ltl: .5,
	mnst: 4,
	sml: .8,
	tiny: .3
};
async function NG(e, t) {
	let n = vb(await fromUuid(t));
	if (e.uuid === n.uuid) throw Error("The rider and mount must be different Actors.");
	let r = wG(e), i = wG(n), a = jL(r, i);
	await e.update(PG(e, a));
	let o = hG(n, a);
	o.length && await e.createEmbeddedDocuments("Item", o), await vG(e, n, i, a), await e.createEmbeddedDocuments("Item", [FL({
		flagScope: Y,
		mount: i,
		plan: a,
		rider: r
	})]), await e.update({
		"system.status.wounds.max": a.wounds,
		"system.status.wounds.value": a.wounds
	});
}
function PG(e, t) {
	let n = MG[t.size] ?? 1;
	return {
		"prototypeToken.height": n,
		"prototypeToken.width": n,
		"system.characteristics.i.modifier": FG(e, "i") + t.initiative - IG(e, "i"),
		"system.characteristics.t.modifier": FG(e, "t") + t.toughness - IG(e, "t"),
		"system.details.move.value": t.movement
	};
}
function FG(e, t) {
	return $l(e.system, [[
		"characteristics",
		t,
		"modifier"
	]]);
}
function IG(e, t) {
	return $l(e.system, [[
		"characteristics",
		t,
		"value"
	]]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/mounts/actors.ts
function LG() {
	return game.actors.contents.map(yW).sort((e, t) => e.name.localeCompare(t.name));
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/build-npc.ts
async function RG(e) {
	if (e.mountActorUuid && e.mountActorUuid === e.baseActorUuid) throw Error("The rider and mount must be different Actors.");
	let t = await wW(e.careers), n = await BG(e);
	if (!n) throw Error("Foundry did not create the NPC Actor.");
	let r = VG(e), i = e.careers.at(-1), a = {
		name: r,
		"prototypeToken.name": r
	}, o = q(n.system, [
		"details",
		"gmnotes",
		"value"
	]), s = zG(o);
	s !== o && (a["system.details.gmnotes.value"] = s);
	let c = e.portraitPath || i?.img || "";
	return c && (a.img = c, a["prototypeToken.texture.src"] = c), await n.update(a), await TW(n, t), await vU(n, e.advancements), await FU(n, e.traits), e.mountActorUuid && await NG(n, e.mountActorUuid), await oW(n, e.trappings), await uG(n, e.spells), n.sheet?.render(!0), ui.notifications?.info(`Created NPC "${r}".`), {
		name: r,
		uuid: n.uuid
	};
}
function zG(e) {
	return e.replaceAll(/(?:<hr\s*\/?>)?<section data-wfrp-customizer-npc-xp="true">[\S\s]*?<\/section>/g, "").trim();
}
async function BG(e) {
	let t = vb(await fromUuid(e.baseActorUuid)).toObject(), n = YU(e.settings.outputActorFolderUuid);
	return delete t._id, delete t.folder, t.type = "npc", zU(t), n && (t.folder = n.id), await Actor.create(t);
}
function VG(e) {
	if (!e.settings.includeSpeciesInName) return e.actorName;
	let t = game.actors.contents.find((t) => t.uuid === e.baseActorUuid), n = t ? bW(t) : "";
	return !n || e.actorName.toLocaleLowerCase().includes(n.toLocaleLowerCase()) ? e.actorName : `${n} ${e.actorName}`;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/document-drops.ts
async function HG(e) {
	let t = xb(e);
	if (t.type === "Actor") return {
		actor: await vW(e),
		kind: "actor"
	};
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Actor or WFRP Item.");
	let n = yb(await fromUuid(t.uuid), "Drop a Foundry Item.");
	if (n.type === "career") return {
		career: await CW(e),
		kind: "career"
	};
	if (n.type === "skill" || n.type === "talent") return {
		advancement: yU(n),
		kind: "advancement"
	};
	if (n.type === "trait") return {
		kind: "trait",
		trait: await UU(e)
	};
	if (n.type === "spell") return {
		kind: "spell",
		spell: await fG(e)
	};
	if (dW().includes(n.type)) return {
		kind: "trapping",
		trapping: await cW(e)
	};
	throw Error("Drop an Actor, Career, Skill, Talent, Trait, Trapping, or Spell Item.");
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/candidate-utils.ts
function UG(e, t) {
	let n = t.img.trim().toLocaleLowerCase();
	!n || e.seenPaths.has(n) || (e.seenPaths.add(n), e.candidates.push(t));
}
function WG(e, t) {
	let n = t.imagePaths.filter(({ path: e }) => !!e);
	if (ZG(t.name, n, e.searchTerms)) for (let r of n) {
		let n = {
			img: r.path,
			key: `foundry-asset:${t.sourceKey}:${r.label}`,
			label: `${t.name || JG(r.path)} ${r.label} (${t.sourceLabel})`,
			source: "foundry-asset",
			sourceGroup: t.sourceGroup,
			sourceLabel: t.sourceLabel
		};
		QG(n, e) && UG(e, n);
	}
}
function GG(e, t, n) {
	e?.({
		candidatesFound: t.candidates.length,
		currentLocation: n.currentLocation,
		directoriesVisited: t.visitedDirectories,
		maxDirectories: n.maxDirectories,
		phase: n.phase
	});
}
function KG(e) {
	return q(e, [
		"prototypeToken",
		"texture",
		"src"
	]) || q(e.toObject(), [
		"prototypeToken",
		"texture",
		"src"
	]);
}
function qG(e, t) {
	return `${JG(e)} (${t})`;
}
function JG(e) {
	return e.split(/[/\\]/).at(-1) ?? e;
}
function YG(e) {
	return typeof e == "object" && !!e;
}
function XG(e) {
	return YG(e) && Object.values(e).every((e) => Array.isArray(e) && e.every((e) => typeof e == "string"));
}
function ZG(e, t, n) {
	return Uj(e, n) || t.some(({ path: e }) => Uj(e, n));
}
function QG(e, t) {
	return Wj(e, {
		mustExcludeSourceGroups: [],
		mustExcludeTerms: t.mustExcludeTerms,
		mustIncludeSourceGroups: [],
		mustIncludeTerms: t.mustIncludeTerms
	});
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/dig-down.ts
var $G = "fuzzy-foundry", eK = .3, tK = new Set([
	".webp",
	".png",
	".jpg",
	".jpeg",
	".gif"
]);
function nK(e, t) {
	let n = rK();
	if (GG(t, e, {
		currentLocation: aK(n),
		maxDirectories: 0,
		phase: "filesystem"
	}), !n.digDownActive || !n.digDownCacheReady) return;
	let r = cK();
	if (!(!r?._fileIndexCache || !r.fs)) {
		for (let t of oK(r, e.searchTerms)) sK(e, r, t);
		GG(t, e, {
			currentLocation: "Dig Down file cache search complete",
			maxDirectories: 0,
			phase: "filesystem"
		});
	}
}
function rK() {
	let e = game.modules.get($G)?.active === !0, t = iK(), n = cK(), r = Object.values(n?._fileIndexCache ?? {}).reduce((e, t) => e + t.length, 0);
	return {
		digDownActive: e,
		digDownCacheReady: !!(n?._fileIndexCache && n.fs),
		digDownDeepFileSearchEnabled: t,
		digDownIndexedFileCount: r
	};
}
function iK() {
	try {
		return game.settings.get($G, "deepFile") === !0;
	} catch {
		return !1;
	}
}
function aK(e) {
	return e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down file cache (${e.digDownIndexedFileCount} files)` : "Waiting for Dig Down file cache" : "Dig Down Deep File Search is disabled" : "Dig Down is not active";
}
function oK(e, t) {
	let n = /* @__PURE__ */ new Set(), r = Object.keys(e._fileIndexCache ?? {});
	for (let i of t) {
		let t = i.toLocaleLowerCase();
		for (let e of r) e.toLocaleLowerCase().includes(t) && n.add(e);
		let a = e.fs?.get(i, [], eK) ?? [];
		for (let [, e] of a) n.add(e);
	}
	return [...n].sort((e, t) => e.toLocaleLowerCase().localeCompare(t.toLocaleLowerCase()));
}
function sK(e, t, n) {
	let r = t._fileIndexCache?.[n] ?? [];
	for (let t of r) {
		if (!lK(t)) continue;
		let n = {
			img: t,
			key: `foundry-asset:${t}`,
			label: qG(t, "Dig Down"),
			source: "foundry-asset",
			sourceGroup: "dig-down",
			sourceLabel: "Dig Down"
		};
		QG(n, e) && UG(e, n);
	}
}
function cK() {
	let e = canvas.deepSearchCache;
	if (!YG(e)) return null;
	let t = e._fileIndexCache, n = e.fs, r = {};
	return XG(t) && (r._fileIndexCache = t), YG(n) && typeof n.get == "function" && (r.fs = { get: n.get.bind(n) }), r;
}
function lK(e) {
	let t = `.${e.split(/[#?]/)[0]?.split(".").pop() ?? ""}`;
	return tK.has(t.toLocaleLowerCase());
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/portraits/documents.ts
function uK(e, t) {
	GG(t, e, {
		currentLocation: "World Actors and Items",
		maxDirectories: 0,
		phase: "world-documents"
	});
	for (let t of game.actors.contents) WG(e, {
		imagePaths: [{
			label: "actor image",
			path: t.img ?? ""
		}, {
			label: "token image",
			path: KG(t)
		}],
		name: t.name,
		sourceGroup: "world",
		sourceLabel: "World Actors",
		sourceKey: t.uuid
	});
	for (let t of game.items?.contents ?? []) WG(e, {
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
async function dK(e, t) {
	GG(t, e, {
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
		] }).catch(() => void 0), r = n ? fx(n) : [];
		for (let n of r) WG(e, {
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
					path: q(n, [
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
async function fK(e, t) {
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
	return e.includeCompendiumAssets && (uK(n, t), await dK(n, t)), e.includeFilePickerAssets && nK(n, t), GG(t, n, {
		currentLocation: "Portrait search complete",
		maxDirectories: n.maxDirectoryBudget,
		phase: "ready"
	}), n.candidates;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/index.ts
var pK = {
	buildNpc: RG,
	ensureActorFolder: GU,
	ensureItemFolder: KU,
	findLowerCareerCandidates: wH,
	getPortraitSearchAvailability: async () => rK(),
	importRecommendedQuickTraits: eW,
	listActorFolders: async () => qU(),
	listBaseActors: async (e) => gW(e),
	listFoundryPortraitCandidates: fK,
	listMagicLoreOptions: kW,
	listMountActors: async () => LG(),
	listSpellsForMagicGrants: dG,
	listItemFolders: async () => JU(),
	listQuickTraits: tW,
	listSkillCharacteristics: BH,
	listSkillSpecializations: zH,
	listTalentMaximums: rU,
	listTraitDifficultyOptions: HU,
	loadBaseActorDraftData: _W,
	loadActorCombatProfile: CG,
	loadSettings: async () => pU(),
	resolveActorDrop: vW,
	resolveApplicationDrop: HG,
	resolveCareerDrop: CW,
	resolveSpellDrop: fG,
	resolveTraitDrop: UU,
	resolveTrapping: sW,
	resolveTrappingDrop: cW,
	saveSettings: mU
}, mK = class extends Vv {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${Y}-npc-builder`,
		classes: [Y, "wfrp4e-customizer-npc-builder"],
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
		return cH;
	}
	getVueProps() {
		return { bridge: pK };
	}
}, hK = "wfrp4e-customizer-open-npc-builder", gK = "wfrp4e-customizer-open-species-builder";
function _K() {
	Hooks.on("renderActorDirectory", (e, t) => {
		let n = SK(t);
		n && vK(n);
	});
}
function vK(e) {
	let n = xK(e);
	if (!n) {
		t("wfrp4e-customizer-apps | Could not find Actor Directory button container.");
		return;
	}
	yK(e, n), bK(e, n);
}
function yK(e, t) {
	if (e.querySelector(`.${hK}`)) return;
	let n = document.createElement("button");
	n.classList.add(hK, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-user-plus\" inert></i><span>NPC Builder App</span>", n.addEventListener("click", () => {
		new mK().render(!0);
	}), t.append(n);
}
function bK(e, t) {
	if (e.querySelector(`.${gK}`)) return;
	let n = document.createElement("button");
	n.classList.add(gK, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-people-group\" inert></i><span>Species Builder</span>", n.addEventListener("click", () => {
		new pA().render(!0);
	}), t.append(n);
}
function xK(e) {
	return e.querySelector(".directory-header .header-actions") ?? e.querySelector(".directory-header .action-buttons") ?? e.querySelector(".header-actions") ?? e.querySelector(".action-buttons");
}
function SK(e) {
	return e instanceof HTMLElement ? e : CK(e) && e[0] instanceof HTMLElement ? e[0] : null;
}
function CK(e) {
	return typeof e == "object" && !!e && "length" in e;
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/actor-profile.ts
function wK(e) {
	let t = e.toObject(), n = {};
	for (let e of Object.keys(cc)) {
		let r = e;
		n[r] = _U(t.system, r);
	}
	return {
		characteristics: n,
		skills: TK(e, "skill"),
		talents: TK(e, "talent")
	};
}
function TK(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((e) => ({
		name: e.name,
		value: t === "skill" ? EK(e.toObject().system) : DK(e.toObject().system)
	})) ?? [];
}
function EK(e) {
	return $l(e, [["advances", "value"], ["advances"]]) + $l(e, [["modifier", "value"], ["modifier"]]);
}
function DK(e) {
	return $l(e, [["advances", "value"], ["advances"]]);
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/species-actor.ts
var OK = null;
async function kK(e, t, n) {
	let r = game.actors.contents, i = AK(n ? r.filter((e) => e.folder?.uuid === n) : [], e);
	if (i) return {
		actor: i,
		source: i.folder?.name ?? "Configured NPC Base Actors folder"
	};
	let a = AK(r.filter((e) => e.uuid !== t.uuid), e);
	if (a) return {
		actor: a,
		source: "World Actors"
	};
	let o = jK(await NK(), e);
	if (!o) return null;
	let s = await fromUuid(o.uuid);
	if (!FK(s)) throw Error(`The species Actor ${o.uuid} is no longer available.`);
	return {
		actor: s,
		source: o.source
	};
}
function AK(e, t) {
	return MK(e, t, (e) => e.name);
}
function jK(e, t) {
	return MK(e, t, (e) => e.name);
}
function MK(e, t, n) {
	let r = t.trim();
	return e.find((e) => n(e).trim() === r) ?? e.find((e) => xA(n(e)) === xA(t)) ?? null;
}
function NK() {
	return OK ??= PK(), OK;
}
async function PK() {
	let e = [];
	for (let t of game.packs ?? []) {
		if (!ux(t) || !t.getIndex) continue;
		let n = await t.getIndex({ fields: ["name"] });
		for (let r of fx(n)) {
			let n = cx(t, r);
			r.name && n && e.push({
				name: r.name,
				source: t.title ?? t.collection ?? "Actor Compendium",
				uuid: n
			});
		}
	}
	return e;
}
function FK(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/estimate.ts
async function IK(e) {
	let t = vb(await fromUuid(e), "Expected an NPC Actor.");
	if (t.type !== "npc") throw Error(`Expected an NPC Actor, but received Actor type “${t.type}”.`);
	return await LK(t);
}
async function LK(e) {
	let t = bW(e);
	if (!t) return { status: "missing-species" };
	let n = await kK(t, e, pU().baseActorFolderUuid);
	return n ? {
		baselineName: n.actor.name,
		baselineSource: n.source,
		baselineUuid: n.actor.uuid,
		breakdown: hj(wK(e), wK(n.actor)),
		species: t,
		status: "ready"
	} : {
		species: t,
		status: "baseline-not-found"
	};
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/sheet.ts
var RK = "[data-wfrp-customizer-npc-xp=\"true\"]", zK = /* @__PURE__ */ new Set(), BK = !1, VK = !1;
function HK() {
	if (!BK) {
		BK = !0, Hooks.on("renderApplicationV2", (e, t) => {
			if (!(t instanceof HTMLElement)) return;
			let n = qK(e);
			n && UK(n, t);
		});
		for (let e of [
			"createActor",
			"updateActor",
			"deleteActor",
			"createItem",
			"updateItem",
			"deleteItem",
			"updateSetting"
		]) Hooks.on(e, JK);
	}
}
function UK(e, t) {
	let n = t.matches("section[data-tab=\"careers\"]") ? t : t.querySelector("section[data-tab=\"careers\"]");
	if (!n) return;
	n.querySelector(RK)?.remove();
	let r = WK(e, t), i = n.querySelector(".sheet-list.careers");
	i ? n.insertBefore(r.container, i) : n.append(r.container), YK(), GK(r), globalThis.setTimeout(() => {
		r.root.isConnected && r.root.contains(r.container) && (YK(), zK.add(r));
	}, 0);
}
function WK(e, t) {
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
async function GK(e) {
	let n = ++e.generation;
	e.output.value = "Calculating…";
	try {
		let t = await LK(e.actor);
		n === e.generation && e.root.contains(e.container) && KK(e, t);
	} catch (r) {
		n === e.generation && e.root.contains(e.container) && (e.output.value = "Unavailable", e.details.textContent = "XP calculation failed; see the console for details."), t("wfrp4e-customizer-apps | NPC XP calculation failed.", r);
	}
}
function KK(e, t) {
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
function qK(e) {
	if (typeof e != "object" || !e) return null;
	let t = "actor" in e ? e.actor : void 0, n = "document" in e ? e.document : void 0, r = gb(t) ? t : gb(n) ? n : null;
	return r?.type === "npc" ? r : null;
}
function JK() {
	VK || (VK = !0, globalThis.setTimeout(() => {
		VK = !1, YK();
		for (let e of zK) GK(e);
	}, 0));
}
function YK() {
	for (let e of zK) (!e.root.isConnected || !e.root.contains(e.container)) && zK.delete(e);
}
//#endregion
//#region src/module/apps/species-builder/apply-species-config.ts
var XK = [
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
function ZK() {
	let n = game.wfrp4e?.config;
	if (!G(n)) {
		t(`${Y} | WFRP config was unavailable; custom species were not applied.`);
		return;
	}
	let r = sy(), i = new Set(G(n.species) ? Object.keys(n.species) : []), a = r.definitions.filter((e) => !i.has(e.key.trim()));
	$K(n, ll({
		...r,
		definitions: a
	})), a.length > 0 && e(`${Y} | Applied ${a.length} custom species definition(s).`);
}
async function QK() {
	let n = game.wfrp4e?.config;
	if (!G(n)) {
		t(`${Y} | WFRP config was unavailable; runtime species extensions were not applied.`);
		return;
	}
	let r = ll({
		...sy(),
		definitions: []
	}, await ob());
	$K(n, r);
	let i = Object.values(r.subspecies).reduce((e, t) => e + Object.keys(t).length, 0);
	i > 0 && e(`${Y} | Applied ${i} custom runtime-parent subspecies definition(s).`);
}
function $K(e, t) {
	for (let n of XK) eq(e, n, t[n]);
	tq(e, t.extraSpecies), nq(e, t.subspecies);
}
function eq(e, t, n) {
	if (Object.keys(n).length === 0) return;
	let r = e[t];
	if (!G(r)) {
		e[t] = { ...n };
		return;
	}
	Object.assign(r, n);
}
function tq(e, t) {
	if (t.length === 0) return;
	let n = Array.isArray(e.extraSpecies) ? e.extraSpecies : [], r = /* @__PURE__ */ new Set();
	for (let e of n) typeof e == "string" && r.add(e);
	for (let e of t) r.add(e);
	e.extraSpecies = [...r];
}
function nq(e, t) {
	if (Object.keys(t).length === 0) return;
	let n = G(e.subspecies) ? e.subspecies : {};
	for (let [e, r] of Object.entries(t)) {
		let t = G(n[e]) ? n[e] : {};
		Object.assign(t, r), n[e] = t;
	}
	e.subspecies = n;
}
//#endregion
//#region src/functions/species-builder/characteristic-roll-formulas.ts
var rq = "2d10";
function iq(e) {
	let t = e?.split("+")[0]?.trim();
	return t ? oq(t) : rq;
}
function aq(e, t) {
	return iq(e) === iq(t);
}
function oq(e) {
	return e.replaceAll(/\s+/g, "").toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/species-builder/chargen-roll-swap-feedback.ts
var sq = "data-wfrp4e-customizer-roll-swap-feedback", cq = `[${sq}="blocked"]`, lq = /* @__PURE__ */ new WeakMap();
function uq(e, t) {
	let n = _q(e);
	if (n) for (let e of gq(n)) e.addEventListener("dragstart", () => {
		let r = e.dataset.ch;
		r && dq(n, r, t);
	}), e.addEventListener("dragend", () => {
		pq(n);
	}), e.addEventListener("drop", () => {
		pq(n);
	});
}
function dq(e, t, n) {
	pq(e);
	for (let r of gq(e)) {
		let e = r.dataset.ch;
		e && (e === t || n(t, e) || fq(r));
	}
}
function fq(e) {
	lq.set(e, {
		ariaDisabled: e.getAttribute("aria-disabled"),
		borderColor: e.style.getPropertyValue("border-color"),
		borderColorPriority: e.style.getPropertyPriority("border-color"),
		hadDisabledClass: e.classList.contains("disabled")
	}), e.setAttribute(sq, "blocked"), e.setAttribute("aria-disabled", "true"), e.classList.add("disabled"), e.style.setProperty("border-color", "transparent");
}
function pq(e) {
	for (let t of e.querySelectorAll(cq)) {
		let e = lq.get(t);
		e && (e.hadDisabledClass || t.classList.remove("disabled"), mq(t, "aria-disabled", e.ariaDisabled), hq(t, "border-color", e.borderColor, e.borderColorPriority), t.removeAttribute(sq), lq.delete(t));
	}
}
function mq(e, t, n) {
	if (n === null) {
		e.removeAttribute(t);
		return;
	}
	e.setAttribute(t, n);
}
function hq(e, t, n, r) {
	if (!n) {
		e.style.removeProperty(t);
		return;
	}
	e.style.setProperty(t, n, r);
}
function gq(e) {
	return [...e.querySelectorAll(".ch-roll.ch-drag")];
}
function _q(e) {
	if (e instanceof HTMLElement) return e;
	if (!G(e)) return;
	let t = e[0];
	return t instanceof HTMLElement ? t : void 0;
}
//#endregion
//#region src/module/apps/species-builder/chargen-roll-swap-guard.ts
var vq = Symbol("wfrp4e-customizer-guarded-attributes-stage");
function yq() {
	Hooks.on("wfrp4e:chargen", (e) => {
		bq(e);
	});
}
function bq(n) {
	let r = xq(n);
	if (!r) {
		t(`${Y} | Could not inspect WFRP character generation stages.`);
		return;
	}
	let i = Sq(r);
	if (!i) {
		t(`${Y} | Could not find the WFRP Attributes character generation stage.`);
		return;
	}
	if (Cq(i.class)) return;
	let a = wq(i.class);
	typeof r.replaceStage == "function" ? r.replaceStage("attributes", a) : i.class = a, e(`${Y} | Guarded WFRP characteristic roll swapping for custom species.`);
}
function xq(e) {
	if (!G(e)) return;
	let t = {}, n = e.replaceStage;
	return typeof n == "function" && (t.replaceStage = (t, r) => {
		n.call(e, t, r);
	}), Array.isArray(e.stages) && (t.stages = e.stages), t;
}
function Sq(e) {
	for (let t of e.stages ?? []) if (G(t) && t.key === "attributes") return typeof t.class == "function" ? t : void 0;
}
function Cq(e) {
	return !!e[vq];
}
function wq(e) {
	class t extends e {
		static [vq] = !0;
		activateListeners(e) {
			let t = super.activateListeners(e);
			return uq(e, (e, t) => aq(Tq(this, e), Tq(this, t))), t;
		}
		swap(e, t) {
			let n = Tq(this, e), r = Tq(this, t);
			if (aq(n, r)) return super.swap(e, t);
			Eq(e, n, t, r);
		}
	}
	return t;
}
function Tq(e, t) {
	let n = G(e.context) ? e.context : void 0, r = G(n?.characteristics) ? n.characteristics : void 0, i = (G(r?.[t]) ? r[t] : void 0)?.formula;
	return typeof i == "string" ? i : void 0;
}
function Eq(e, t, n, r) {
	let i = Dq(e), a = Dq(n), o = iq(t), s = iq(r);
	ui.notifications?.warn?.(`Cannot swap ${i} and ${a}: ${i} uses ${o}, while ${a} uses ${s}.`);
}
function Dq(e) {
	let t = game.wfrp4e?.config?.characteristics;
	if (!G(t)) return e;
	let n = t[e];
	return typeof n == "string" ? n : e;
}
//#endregion
//#region src/module/apps/species-builder/familiar-correction.ts
function Oq(e) {
	if (game.modules.get("wfrp4e-wom")?.active !== !0) return 0;
	let n = Nq(e, "species"), r = Object.entries(n).find(([, e]) => e === fc)?.[0], i = r ?? "constructfamiliar";
	return !r && n[i] !== void 0 ? (t(`${Y} | Could not restore the Winds of Magic Familiar species because key "${i}" is already in use.`), 0) : kq(e, ll({
		autoRegisterSpeciesTable: !1,
		correctExistingWfrpSpecies: !0,
		definitions: [xc(i)],
		runtimeSpeciesExtensions: [],
		showGeneratedConfigTab: !1
	}), i);
}
function kq(e, t, n) {
	let r = Aq(e, t.extraSpecies);
	for (let i of ly) {
		let a = t[i][n];
		if (a === void 0) continue;
		let o = Nq(e, i);
		if (o[n] === void 0) {
			o[n] = gy(a), r += 1;
			continue;
		}
		i === "speciesTraits" ? r += jq(o, n, a) : (i === "subspecies" || i === "speciesCharacteristics") && (r += Mq(o[n], a));
	}
	return r;
}
function Aq(e, t) {
	let n = Array.isArray(e.extraSpecies) ? e.extraSpecies : [];
	Array.isArray(e.extraSpecies) || (e.extraSpecies = n);
	let r = 0;
	for (let e of t) n.includes(e) || (n.push(e), r += 1);
	return r;
}
function jq(e, t, n) {
	if (!Array.isArray(e[t]) || !Array.isArray(n)) return 0;
	let r = 0;
	for (let i of n) typeof i == "string" && !e[t].includes(i) && (e[t].push(i), r += 1);
	return r;
}
function Mq(e, t) {
	if (!G(e) || !G(t)) return 0;
	let n = 0;
	for (let [r, i] of Object.entries(t)) {
		let t = e[r];
		t === void 0 ? (e[r] = gy(i), n += 1) : G(t) && G(i) ? n += Mq(t, i) : r === "speciesTraits" && Array.isArray(t) && (n += jq(e, r, i));
	}
	return n;
}
function Nq(e, t) {
	return G(e[t]) || (e[t] = {}), e[t];
}
//#endregion
//#region src/module/apps/species-builder/species-corrections.ts
var Pq = "Animal Familiar", Fq = {
	badger: "Badger",
	cat: "Cat",
	crow: "Crow",
	fox: "Fox",
	owl: "Owl",
	stoat: "Stoat"
}, Iq = {
	"Armour 1": "Armour (1)",
	"Bite+2": "Bite (+2)",
	"Cold-blooded": "Cold Blooded",
	Coldblooded: "Cold Blooded",
	"Flight 60": "Flight (60)",
	"Flight 80": "Flight (80)",
	"Hunter’s Eye": "Hunter's Eye",
	"Nimble-Fingered": "Nimble Fingered"
};
function Lq() {
	let n = game.wfrp4e?.config;
	if (!G(n)) return t(`${Y} | WFRP config was unavailable; species corrections were skipped.`), {
		correctionCount: 0,
		removedTopLevelSpeciesKeys: []
	};
	let r = Rq(n);
	return r.correctionCount += Oq(n), r.correctionCount += Bq(n), r.correctionCount += Vq(n), r.correctionCount > 0 && e(`${Y} | Applied ${r.correctionCount} known WFRP species correction(s).`), r;
}
function Rq(e) {
	let t = Gq(e, "species"), n = Gq(e, "subspecies"), r = Object.entries(t).find(([e, t]) => t === Pq && G(n[e]))?.[0];
	if (!r) return {
		correctionCount: 0,
		removedTopLevelSpeciesKeys: []
	};
	let i = n[r], a = [], o = 0;
	for (let [e, n] of Object.entries(Fq)) {
		let r = i[e];
		G(r) && (t[e] === n && (delete t[e], a.push(e), o += 1), o += zq(r));
	}
	return {
		correctionCount: o,
		removedTopLevelSpeciesKeys: a
	};
}
function zq(e) {
	let t = e.traits, n = Array.isArray(e.speciesTraits) ? e.speciesTraits : t;
	if (!Array.isArray(n)) return 0;
	let r = Wq(n);
	return Array.isArray(t) || !qq(n, r) ? (e.speciesTraits = r, delete e.traits, 1) : 0;
}
function Bq(e) {
	if (Gq(e, "species").helf !== "High Elf") return 0;
	let t = Kq(e, "subspecies", "helf", "chrace");
	return t ? Uq(t, "talents") : 0;
}
function Vq(e) {
	let t = Gq(e, "species"), n = 0;
	return t.skink === "Skink" && (n += Hq(e, "speciesTalents", "skink"), n += Hq(e, "speciesTraits", "skink")), t.chameleonskink === "Chameleon Skink" && (n += Hq(e, "speciesTalents", "chameleonskink"), n += Hq(e, "speciesTraits", "chameleonskink")), n;
}
function Hq(e, t, n) {
	return Uq(Gq(e, t), n);
}
function Uq(e, t) {
	let n = e[t];
	if (!Array.isArray(n)) return 0;
	let r = Wq(n, !0);
	return qq(n, r) ? 0 : (e[t] = r, 1);
}
function Wq(e, t = !1) {
	return e.flatMap((e) => {
		if (typeof e == "string" && e.trim()) {
			let t = e.trim();
			for (let [e, n] of Object.entries(Iq)) t = t.replaceAll(e, n);
			return [t];
		}
		return t && typeof e == "number" ? [e] : [];
	});
}
function Gq(e, t) {
	return G(e[t]) ? e[t] : {};
}
function Kq(e, t, n, r) {
	let i = Gq(Gq(e, t), n);
	return G(i[r]) ? i[r] : void 0;
}
function qq(e, t) {
	return e.length === t.length && e.every((e, n) => e === t[n]);
}
//#endregion
//#region src/module/debug/shape-inspector/constants.ts
var Jq = `${Y}.debugShapeProbes`, Yq = "wfrp4eCustomizerShapeProbes", Xq = "wfrp4eCustomizerShapePreset";
//#endregion
//#region src/module/debug/shape-inspector/utils.ts
function Zq(e, t, n) {
	let r = Number(e);
	return Number.isFinite(r) ? Math.max(0, Math.min(n, Math.floor(r))) : t;
}
function Qq(e) {
	return typeof e == "object" && !!e;
}
function $q(e) {
	return typeof e == "string" ? e.trim().toLocaleLowerCase() : "";
}
function eJ(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
//#endregion
//#region src/module/debug/shape-inspector/path-resolver.ts
function tJ(e) {
	let t = sJ(e), n = nJ(globalThis, t.root);
	for (let e of t.tokens) {
		if (e.type === "property") {
			n = nJ(n, e.key);
			continue;
		}
		if (e.type === "index") {
			n = nJ(n, String(e.index));
			continue;
		}
		n = rJ(n, e.name, e.args);
	}
	return n;
}
function nJ(e, t) {
	if (!(!Qq(e) && typeof e != "function")) try {
		return e[t];
	} catch {
		return;
	}
}
function rJ(e, t, n) {
	if (t === "at") {
		let t = Number(n[0] ?? 0), r = Number.isFinite(t) ? t : 0;
		return cJ(e).at(r);
	}
	if (t === "findByName") {
		let t = $q(n[0] ?? "");
		return cJ(e).find((e) => $q(nJ(e, "name")) === t);
	}
	if (t === "findByType") {
		let t = $q(n[0] ?? "");
		return cJ(e).find((e) => $q(nJ(e, "type")) === t);
	}
	if (t === "get") {
		let t = n[0] ?? "";
		if (e instanceof Map) return e.get(t);
		let r = nJ(e, "get");
		if (typeof r == "function") return r.call(e, t);
	}
	if (t === "sample") {
		let t = Zq(n[0], 3, 60);
		return cJ(e).slice(0, t);
	}
	throw Error(`Unsupported path method "${t}".`);
}
function iJ(e) {
	return e.trim() ? e.split(",").map((e) => oJ(e.trim())).map(String) : [];
}
function aJ(e) {
	let t = e.trim();
	return /^-?\d+$/.test(t) ? Number(t) : oJ(t);
}
function oJ(e) {
	let t = /^["'](?<value>.*)["']$/.exec(e);
	return t?.groups ? t.groups.value ?? "" : e;
}
function sJ(e) {
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
				args: iJ(e.groups.args ?? ""),
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
				index: aJ(e),
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
function cJ(e) {
	if (Array.isArray(e)) return e;
	let t = nJ(e, "contents");
	return Array.isArray(t) ? t : [];
}
//#endregion
//#region src/module/debug/shape-inspector/presets.ts
var lJ = { "npc-builder": [
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
function uJ() {
	return window.location.href.includes("wfrp4eCustomizerShapeProbes") || window.location.href.includes("wfrp4eCustomizerShapePreset");
}
function dJ(e) {
	let t = {
		hook: e.hook ?? "ready",
		maxDepth: Zq(e.maxDepth, 2, 6),
		maxEntries: Zq(e.maxEntries, 12, 60),
		path: e.path.trim()
	};
	return e.label && (t.label = e.label), t;
}
function fJ() {
	return [...pJ(), ...mJ()].map(dJ);
}
function pJ() {
	let e = eJ(Jq);
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter(gJ).map(dJ) : [];
	} catch {
		return [];
	}
}
function mJ() {
	let e = [], t = [new URLSearchParams(window.location.search), new URLSearchParams(window.location.hash.replace(/^#/, ""))];
	for (let n of t) {
		let t = n.get(Xq), r = n.get(Yq);
		t && e.push(...lJ[t] ?? []), r && e.push(...hJ(r));
	}
	return window.location.href.includes("wfrp4eCustomizerShapePreset=npc-builder") && !e.length && e.push(...lJ["npc-builder"] ?? []), e;
}
function hJ(e) {
	try {
		let t = JSON.parse(decodeURIComponent(e));
		return Array.isArray(t) ? t.filter(gJ) : [];
	} catch (e) {
		return t(`${Y} | Could not parse URL shape probes.`, e), [];
	}
}
function gJ(e) {
	return typeof e != "object" || !e ? !1 : "path" in e && typeof e.path == "string";
}
//#endregion
//#region src/module/debug/shape-inspector/summary.ts
function _J(e, t) {
	return !Qq(e) && typeof e != "function" ? SJ(e) : typeof e == "function" ? bJ(e) : Array.isArray(e) ? vJ(e, t) : e instanceof Map ? yJ(e, t) : xJ(e, t);
}
function vJ(e, t) {
	return {
		length: e.length,
		sample: e.slice(0, t.maxEntries).map((e) => _J(e, wJ(t))),
		type: "array"
	};
}
function yJ(e, t) {
	return {
		sample: [...e.entries()].slice(0, t.maxEntries).map(([e, n]) => ({
			key: _J(e, wJ(t)),
			value: _J(n, wJ(t))
		})),
		size: e.size,
		type: "Map"
	};
}
function bJ(e) {
	return {
		name: e.name,
		type: "function"
	};
}
function xJ(e, t) {
	if (t.seen.has(e)) return { type: "circular" };
	t.seen.add(e);
	let n = CJ(e, t.maxEntries), r = nJ(e, "constructor"), i = {
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
		let n = nJ(e, t);
		typeof n == "string" && (i[t] = n);
	}
	if (t.maxDepth <= 0) return i;
	let a = {};
	for (let r of n) a[r] = _J(nJ(e, r), wJ(t));
	i.properties = a;
	let o = nJ(e, "toObject");
	if (typeof o == "function") try {
		i.source = _J(o.call(e), wJ(t));
	} catch (e) {
		i.source = {
			error: e instanceof Error ? e.message : String(e),
			type: "error"
		};
	}
	return i;
}
function SJ(e) {
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
function CJ(e, t) {
	return Object.keys(e).sort().slice(0, t);
}
function wJ(e) {
	return {
		maxDepth: e.maxDepth - 1,
		maxEntries: e.maxEntries,
		seen: e.seen
	};
}
//#endregion
//#region src/module/debug/shape-inspector/index.ts
function TJ() {
	localStorage.removeItem(Jq), e(`${Y} | Cleared debug shape probes.`);
}
function EJ() {
	return fJ();
}
function DJ(e, t = {}) {
	let n = AJ(e, t);
	return MJ(n), n;
}
function OJ() {
	let t = fJ();
	for (let e of ["init", "setup"]) {
		let n = t.filter((t) => t.hook === e);
		n.length && Hooks.once(e, () => {
			for (let t of n) jJ(t, e);
		});
	}
	Hooks.once("ready", () => {
		let t = fJ().filter((e) => (e.hook ?? "ready") === "ready");
		uJ() && e(`${Y} | Debug shape ready probes discovered: ${t.length}`, window.location.href);
		for (let e of t) jJ(e, "ready");
	});
}
function kJ(t) {
	let n = t.map(dJ);
	localStorage.setItem(Jq, JSON.stringify(n)), e(`${Y} | Stored ${n.length} debug shape probe(s). Reload Foundry to run init/setup probes.`);
}
function AJ(e, t = {}, n) {
	let r = Zq(t.maxDepth, 2, 6), i = Zq(t.maxEntries, 12, 60), a = tJ(e), o = {
		inspectedAt: (/* @__PURE__ */ new Date()).toISOString(),
		label: t.label || e,
		maxDepth: r,
		maxEntries: i,
		path: e,
		value: _J(a, {
			maxDepth: r,
			maxEntries: i,
			seen: /* @__PURE__ */ new WeakSet()
		})
	};
	return n && (o.hook = n), o;
}
function jJ(e, n) {
	try {
		MJ(AJ(e.path, e, n));
	} catch (n) {
		t(`${Y} | Debug shape probe failed for "${e.path}".`, n);
	}
}
function MJ(t) {
	e(`${Y} | Debug shape probe: ${t.label}`, JSON.stringify(t, null, 2));
}
//#endregion
//#region src/view/components/ApplicationShell.vue?vue&type=script&setup=true&lang.ts
var NJ = ["aria-label"], PJ = { class: "dui-card-body" }, FJ = { class: "dui-card-title" }, IJ = { key: 0 }, LJ = {
	key: 0,
	class: "dui-card-actions"
}, RJ = /* @__PURE__ */ M({
	__name: "ApplicationShell",
	props: {
		description: {},
		title: {}
	},
	setup(e) {
		return (t, n) => (F(), I("section", {
			"aria-label": e.title,
			class: "dui-card"
		}, [R("div", PJ, [
			R("header", null, [
				R("h1", FJ, O(e.title), 1),
				e.description ? (F(), I("p", IJ, O(e.description), 1)) : V("", !0),
				Gr(t.$slots, "header")
			]),
			Gr(t.$slots, "default"),
			t.$slots.actions ? (F(), I("div", LJ, [Gr(t.$slots, "actions")])) : V("", !0)
		])], 8, NJ));
	}
}), zJ = { class: "dui-list" }, BJ = /* @__PURE__ */ M({
	__name: "DaisyExampleApp",
	setup(e) {
		let t = [
			"button",
			"badge",
			"card",
			"alert"
		];
		return (e, n) => (F(), L(RJ, {
			description: "A quick visual check of the module's isolated Daisy component theme.",
			title: "Daisy Probe"
		}, {
			header: j(() => [...n[0] ||= [R("span", { class: "dui-badge dui-badge-primary" }, "Scoped", -1), R("span", { class: "dui-badge dui-badge-outline" }, "Foundry-safe", -1)]]),
			actions: j(() => [...n[1] ||= [R("span", { class: "dui-badge dui-badge-success" }, "Ready", -1)]]),
			default: j(() => [n[2] ||= R("div", { class: "dui-alert dui-alert-info" }, [R("span", null, "DaisyUI is available inside this Vue application root.")], -1), R("ul", zJ, [(F(), I(P, null, N(t, (e) => R("li", {
				key: e,
				class: "dui-list-row"
			}, O(e), 1)), 64))])]),
			_: 1
		}));
	}
}), VJ = class extends Vv {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${Y}-daisy-example`,
		classes: [Y, "wfrp4e-customizer-daisy-example"],
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
		return BJ;
	}
}, HJ = { class: "dui-navbar-start app:min-w-0 app:flex-1" }, UJ = { class: "app:min-w-0" }, WJ = {
	"aria-label": "Current location",
	class: "dui-breadcrumbs app:py-0 app:text-sm"
}, GJ = { class: "app:m-0 app:p-0" }, KJ = { key: 0 }, qJ = { key: 1 }, JJ = { "aria-current": "page" }, YJ = { class: "dui-navbar-end" }, XJ = { class: "dui-dropdown-content dui-card dui-card-border app:z-30 app:w-52 app:bg-base-100" }, ZJ = { class: "dui-menu dui-menu-sm app:w-full" }, QJ = ["disabled"], $J = { key: 0 }, eY = ["disabled"], tY = { key: 1 }, nY = ["disabled"], rY = /* @__PURE__ */ M({
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
		let n = t, r = /* @__PURE__ */ k(), i = /* @__PURE__ */ k(), a = !1;
		function o(e) {
			l(), n(e);
		}
		function s() {
			l(), n("reload");
		}
		async function c(e) {
			let t = e.currentTarget instanceof HTMLElement ? e.currentTarget.closest(".wfrp4e-customizer-apps-root") : null;
			l(), n("selectSpecies"), await jn(), t?.scrollTo({ top: 0 }), t?.querySelector("#species-builder-species-list-heading")?.focus();
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
		return (t, n) => (F(), I("header", {
			class: "dui-navbar app:sticky app:top-0 app:z-20 app:bg-base-200",
			onKeydown: $o(u, ["esc"]),
			onKeyup: $o(d, ["esc"])
		}, [
			R("div", HJ, [R("div", UJ, [n[2] ||= R("h1", { class: "app:m-0 app:text-xl app:leading-tight" }, "Species Builder", -1), R("nav", WJ, [R("ul", GJ, [
				e.definitionName ? (F(), I("li", KJ, [R("button", {
					class: "dui-btn dui-btn-link dui-btn-xs",
					type: "button",
					onClick: c
				}, " Species List ")])) : V("", !0),
				e.definitionName ? (F(), I("li", qJ, [R("span", null, O(e.definitionName), 1)])) : V("", !0),
				R("li", null, [R("span", JJ, O(e.contextLabel), 1)])
			])])])]),
			R("div", YJ, [R("details", {
				ref_key: "actionsDropdown",
				ref: r,
				class: "dui-dropdown dui-dropdown-end"
			}, [n[6] ||= R("summary", { class: "dui-btn dui-btn-outline dui-btn-sm" }, [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-ellipsis"
			}), B(" Actions ")], -1), R("div", XJ, [R("ul", ZJ, [
				R("li", { onClick: l }, [Gr(t.$slots, "actions", { dialogHost: i.value })]),
				R("li", null, [R("button", {
					disabled: e.isBusy,
					type: "button",
					onClick: s
				}, [...n[3] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-rotate-right"
				}, null, -1), B(" Reload ", -1)]], 8, QJ)]),
				e.canManageDefinition ? (F(), I("li", $J, [R("button", {
					disabled: e.isBusy,
					type: "button",
					onClick: n[0] ||= (e) => o("duplicate")
				}, [...n[4] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-copy"
				}, null, -1), B(" Duplicate ", -1)]], 8, eY)])) : V("", !0),
				e.canManageDefinition ? (F(), I("li", tY, [R("button", {
					class: "app:text-error",
					disabled: e.isBusy,
					type: "button",
					onClick: n[1] ||= (e) => o("delete")
				}, [...n[5] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), B(" Delete ", -1)]], 8, nY)])) : V("", !0)
			])])], 512)]),
			R("div", {
				ref_key: "portabilityDialogHost",
				ref: i
			}, null, 512)
		], 32));
	}
}), iY = {
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
}, aY = {
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
function oY(e) {
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
function sY(e, t) {
	return e.kind === "project" ? t.activeTab === e.tab && (e.tab !== "species" || !t.isEditorOpen) : !t.isEditorOpen || t.activeTab !== "species" ? !1 : e.kind === "editor" ? t.activeEditorTab === e.tab : t.activeEditorTab === "tables" && t.activeTableTab === e.tab;
}
function cY(e, t) {
	return t.isBusy || e.kind !== "project" && !t.hasSelectedDefinition;
}
function lY(e) {
	return e.kind === "project" ? e.tab === "species" || e.tab === "species-table" ? e.tab : void 0 : e.tab;
}
function uY(e, t) {
	let n = {};
	for (let r of e) {
		if (r.scope === "species-table") {
			dY(n, "species-table", r);
			continue;
		}
		dY(n, "species", r), r.definitionIndex === t && dY(n, r.scope === "subspecies" ? "subspecies" : r.section, r);
	}
	return n;
}
function dY(e, t, n) {
	e[t] = Yh(e[t], n);
}
function fY(e, t, n, r) {
	return e === "settings" ? {
		description: "Control optional authoring tools and sample definitions.",
		label: "Settings"
	} : e === "species-table" ? {
		description: "Configure the weighted world table WFRP uses to roll a character's species.",
		label: "Species Table"
	} : e === "wfrp-config" ? {
		description: "Review the WFRP config generated from the current draft.",
		label: "WFRP Config"
	} : t ? n === "tables" ? aY[r] : iY[n] : {
		description: "Choose a species to edit or create a new definition.",
		label: "Custom Species"
	};
}
//#endregion
//#region src/view/apps/species-builder/components/SpeciesBuilderValidationDot.vue?vue&type=script&setup=true&lang.ts
var pY = ["title"], mY = { class: "app:sr-only" }, hY = /* @__PURE__ */ M({
	__name: "SpeciesBuilderValidationDot",
	props: { indicator: {} },
	setup(e) {
		return (t, n) => e.indicator ? (F(), I("span", {
			key: 0,
			class: "app:ml-auto app:inline-flex app:items-center",
			title: A(Zh)(e.indicator)
		}, [R("span", {
			"aria-hidden": "true",
			class: D(["dui-status dui-status-sm", e.indicator.severity === "error" ? "dui-status-error" : "dui-status-warning"])
		}, null, 2), R("span", mY, O(A(Zh)(e.indicator)), 1)], 8, pY)) : V("", !0);
	}
}), gY = { class: "app:w-48 app:shrink-0" }, _Y = {
	"aria-label": "Species Builder sections",
	class: "app:sticky app:top-20"
}, vY = { class: "dui-menu dui-menu-sm app:w-full app:rounded-box app:bg-base-200" }, yY = { class: "dui-menu-title" }, bY = [
	"aria-current",
	"disabled",
	"onClick"
], xY = /* @__PURE__ */ M({
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
		let n = e, r = t, i = H(() => oY(n.showGeneratedConfigTab)), a = H(() => ({
			activeEditorTab: n.activeEditorTab,
			activeTableTab: n.activeTableTab,
			activeTab: n.activeTab,
			hasSelectedDefinition: n.hasSelectedDefinition,
			isBusy: n.isBusy,
			isEditorOpen: n.isEditorOpen
		}));
		async function o(e, t) {
			if (cY(e, a.value)) return;
			let n = t.currentTarget instanceof HTMLElement ? t.currentTarget.closest(".wfrp4e-customizer-apps-root") : null;
			e.kind === "project" ? r("selectTab", e.tab) : e.kind === "editor" ? r("selectEditorTab", e.tab) : r("selectTableTab", e.tab), await jn(), n?.scrollTo({ top: 0 });
		}
		function s(e) {
			let t = lY(e);
			return t ? n.validationCounts[t] : void 0;
		}
		return (e, t) => (F(), I("aside", gY, [R("nav", _Y, [R("ul", vY, [(F(!0), I(P, null, N(i.value, (e) => (F(), I(P, { key: e.key }, [R("li", yY, [R("span", null, O(e.label), 1)]), (F(!0), I(P, null, N(e.entries, (e) => (F(), I("li", { key: `${e.kind}-${e.tab}` }, [R("button", {
			"aria-current": A(sY)(e, a.value) ? "page" : void 0,
			class: D({ "dui-menu-active": A(sY)(e, a.value) }),
			disabled: A(cY)(e, a.value),
			type: "button",
			onClick: (t) => o(e, t)
		}, [
			R("i", {
				"aria-hidden": "true",
				class: D(e.icon)
			}, null, 2),
			R("span", null, O(e.label), 1),
			z(hY, { indicator: s(e) }, null, 8, ["indicator"])
		], 10, bY)]))), 128))], 64))), 128))])])]));
	}
}), SY = ["onKeydown"], CY = { class: "dui-modal-box app:max-w-3xl" }, wY = { class: "app:flex app:items-start app:justify-between app:gap-4" }, TY = { class: "app:flex app:flex-wrap app:gap-2" }, EY = {
	key: 0,
	class: "dui-badge dui-badge-error"
}, DY = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, OY = { class: "dui-list app:max-h-96 app:overflow-y-auto" }, kY = ["autofocus", "onClick"], AY = {
	key: 0,
	"aria-hidden": "true",
	class: "fa-solid fa-circle-exclamation app:text-error"
}, jY = {
	key: 1,
	"aria-hidden": "true",
	class: "fa-solid fa-triangle-exclamation app:text-warning"
}, MY = { class: "app:flex app:min-w-0 app:flex-1 app:flex-col app:items-start" }, NY = { class: "app:sr-only" }, PY = /* @__PURE__ */ M({
	__name: "SpeciesBuilderValidationSummaryDialog",
	props: {
		definitions: {},
		isOpen: { type: Boolean },
		issues: {}
	},
	emits: ["close", "selectIssue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ k(), a = Sh(), o = /* @__PURE__ */ k(), s = H(() => rg(n.issues, n.definitions)), c = H(() => n.issues.filter((e) => Qh(e) === "error").length), l = H(() => n.issues.length - c.value);
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
		return Xn(() => n.isOpen, async (e) => {
			e ? (a.capture(), await jn(), n.isOpen && !i.value?.open && i.value?.showModal()) : i.value?.open && i.value.close();
		}, {
			flush: "post",
			immediate: !0
		}), (e, t) => (F(), I("dialog", {
			ref_key: "dialog",
			ref: i,
			"aria-describedby": "species-builder-validation-description",
			"aria-labelledby": "species-builder-validation-title",
			class: "dui-modal",
			onClose: f,
			onKeydown: $o(Zo(u, ["stop", "prevent"]), ["esc"]),
			onKeyup: t[0] ||= $o(Zo(() => {}, ["stop"]), ["esc"])
		}, [R("section", CY, [
			R("header", wY, [R("div", null, [R("div", TY, [c.value > 0 ? (F(), I("span", EY, O(c.value) + " " + O(c.value === 1 ? "error" : "errors"), 1)) : V("", !0), l.value > 0 ? (F(), I("span", DY, O(l.value) + " " + O(l.value === 1 ? "warning" : "warnings"), 1)) : V("", !0)]), t[1] ||= R("h2", { id: "species-builder-validation-title" }, "Character-Creation Validation", -1)]), R("button", {
				"aria-label": "Close validation summary",
				class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square",
				type: "button",
				onClick: u
			}, [...t[2] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-xmark"
			}, null, -1)]])]),
			t[4] ||= R("p", { id: "species-builder-validation-description" }, " Errors mark reachable data that prevents character creation. Warnings mark playable incomplete data or inactive problems. Choose an item to open the most relevant editor section. ", -1),
			R("ul", OY, [(F(!0), I(P, null, N(s.value, (e, n) => (F(), I("li", {
				key: `${e.issue.code}-${n}`,
				class: "dui-list-row app:p-0"
			}, [R("button", {
				autofocus: n === 0,
				class: D(["dui-btn dui-btn-outline app:h-auto app:w-full app:justify-start app:whitespace-normal app:p-3 app:text-left", A(Qh)(e.issue) === "error" ? "dui-btn-error" : "dui-btn-warning"]),
				type: "button",
				onClick: (t) => d(e.issue)
			}, [
				A(Qh)(e.issue) === "error" ? (F(), I("i", AY)) : (F(), I("i", jY)),
				R("span", MY, [
					R("strong", null, O(e.context), 1),
					R("span", NY, O(A(Qh)(e.issue) === "error" ? "Error:" : "Warning:"), 1),
					R("span", null, O(e.issue.message), 1)
				]),
				t[3] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-chevron-right"
				}, null, -1)
			], 10, kY)]))), 128))]),
			R("div", { class: "dui-modal-action" }, [R("button", {
				class: "dui-btn dui-btn-ghost",
				type: "button",
				onClick: u
			}, "Close")])
		]), t[5] ||= R("form", {
			class: "dui-modal-backdrop",
			method: "dialog"
		}, [R("button", {
			"aria-label": "Close validation summary",
			type: "submit"
		}, "Close")], -1)], 40, SY));
	}
});
//#endregion
//#region src/view/apps/species-builder/components/validation/use-validation-summary.ts
function FY(e) {
	let t = /* @__PURE__ */ k(!1), n = /* @__PURE__ */ k(), r = /* @__PURE__ */ k(), i = H(() => {
		let t = tg(e.issues.value);
		return r.value === void 0 ? t : t.filter((e) => e.definitionIndex === r.value);
	}), a = 0;
	function o() {
		r.value = void 0, c();
	}
	function s(e) {
		r.value = e, c();
	}
	function c() {
		i.value.length > 0 && (t.value = !0);
	}
	function l() {
		t.value = !1;
	}
	async function u(t) {
		let r = ng(t);
		if (l(), n.value = void 0, r.kind === "project") {
			e.selectProjectTab(r.tab);
			return;
		}
		if (e.selectDefinition(r.definitionIndex), r.kind === "definition") {
			r.tableTab ? e.openTableTab(r.tableTab) : e.openEditorTab(r.editorTab);
			return;
		}
		e.openEditorTab("subspecies"), await jn(), n.value = {
			destination: r,
			sequence: ++a
		};
	}
	return {
		close: l,
		isOpen: t,
		navigationRequest: n,
		open: o,
		openForDefinition: s,
		selectIssue: u,
		summaryIssues: i
	};
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/overview/SpeciesBuilderOverview.vue?vue&type=script&setup=true&lang.ts
var IY = { class: "dui-card dui-card-border dui-card-sm" }, LY = { class: "dui-card-body" }, RY = { class: "app:flex app:items-start app:justify-between app:gap-4" }, zY = { class: "dui-card-actions app:items-center" }, BY = ["disabled"], VY = {
	key: 0,
	class: "dui-input app:w-full"
}, HY = {
	key: 1,
	role: "status",
	class: "dui-alert dui-alert-info"
}, UY = {
	key: 2,
	class: "app:flex app:flex-col app:gap-4"
}, WY = { "aria-labelledby": "species-builder-custom-species-heading" }, GY = { class: "app:flex app:items-center app:justify-between app:gap-2" }, KY = { class: "dui-badge dui-badge-sm" }, qY = {
	key: 0,
	role: "status",
	class: "dui-alert"
}, JY = {
	key: 1,
	class: "dui-list"
}, YY = { "aria-labelledby": "species-builder-installed-species-heading" }, XY = { class: "app:flex app:items-center app:justify-between app:gap-2" }, ZY = { class: "dui-badge dui-badge-ghost dui-badge-sm" }, QY = {
	key: 0,
	role: "status",
	class: "dui-alert"
}, $Y = {
	key: 1,
	class: "dui-list"
}, eX = {
	key: 0,
	"aria-labelledby": "species-builder-unavailable-species-heading"
}, tX = { class: "app:flex app:items-center app:justify-between app:gap-2" }, nX = { class: "dui-badge dui-badge-warning dui-badge-sm" }, rX = { class: "dui-list" }, iX = /* @__PURE__ */ M({
	__name: "SpeciesBuilderOverview",
	props: {
		definitions: {},
		isDisabled: { type: Boolean },
		selectedIndex: {},
		validationIndicators: {}
	},
	emits: ["addSpecies", "editSpecies"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ k(""), a = H(() => i.value.trim().toLocaleLowerCase()), o = H(() => n.definitions.map((e, t) => ({
			definition: e,
			index: t
		})).filter(({ definition: e }) => m(e))), s = H(() => o.value.filter(({ definition: e }) => e.origin === "custom")), c = H(() => o.value.filter(({ definition: e }) => e.origin === "runtime" && !e.runtimeUnavailable)), l = H(() => o.value.filter(({ definition: e }) => e.runtimeUnavailable)), u = H(() => n.definitions.filter((e) => e.origin === "runtime" && !e.runtimeUnavailable).length), d = H(() => n.definitions.filter((e) => e.origin === "custom").length);
		function f(e) {
			return e.name.trim() || e.key.trim() || "Untitled Species";
		}
		function p(e) {
			return e.key.trim() || vw(e);
		}
		function m(e) {
			let t = a.value;
			return !t || e.name.toLocaleLowerCase().includes(t) || e.key.toLocaleLowerCase().includes(t);
		}
		return (t, n) => (F(), I("section", IY, [R("div", LY, [
			R("header", RY, [n[3] ||= R("div", null, [R("h2", {
				id: "species-builder-species-list-heading",
				class: "dui-card-title",
				tabindex: "-1"
			}, " Species Catalog "), R("p", { class: "app:m-0" }, " Manage your custom species or inspect species supplied by WFRP and active modules. ")], -1), R("div", zY, [R("button", {
				class: "dui-btn dui-btn-primary",
				disabled: e.isDisabled,
				type: "button",
				onClick: n[0] ||= (e) => r("addSpecies")
			}, [...n[2] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), B(" New Species ", -1)]], 8, BY)])]),
			e.definitions.length > 0 ? (F(), I("label", VY, [n[4] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-magnifying-glass"
			}, null, -1), Un(R("input", {
				"onUpdate:modelValue": n[1] ||= (e) => i.value = e,
				type: "search",
				placeholder: "Filter by species name or key"
			}, null, 512), [[Go, i.value]])])) : V("", !0),
			e.definitions.length === 0 ? (F(), I("div", HY, [...n[5] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No species yet. Add one to begin.", -1)]])) : (F(), I("div", UY, [
				R("section", WY, [R("header", GY, [n[6] ||= R("div", null, [R("h3", {
					id: "species-builder-custom-species-heading",
					class: "dui-card-title"
				}, " Custom Species "), R("p", { class: "app:m-0" }, "Species owned and editable by this world.")], -1), R("span", KY, O(d.value), 1)]), s.value.length === 0 ? (F(), I("div", qY, [n[7] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-circle-info"
				}, null, -1), R("span", null, O(a.value ? "No custom species match this filter." : "No custom species yet."), 1)])) : (F(), I("ul", JY, [(F(!0), I(P, null, N(s.value, (t) => (F(), L(_O, {
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
				R("section", YY, [R("header", XY, [n[8] ||= R("div", null, [R("h3", {
					id: "species-builder-installed-species-heading",
					class: "dui-card-title"
				}, " Installed Species "), R("p", { class: "app:m-0" }, " Read-only reference data. You can add custom subspecies to these entries. ")], -1), R("span", ZY, O(u.value), 1)]), c.value.length === 0 ? (F(), I("div", QY, [n[9] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-circle-info"
				}, null, -1), R("span", null, O(a.value ? "No installed species match this filter." : "No installed species were found."), 1)])) : (F(), I("ul", $Y, [(F(!0), I(P, null, N(c.value, (t) => (F(), L(_O, {
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
				l.value.length > 0 ? (F(), I("section", eX, [R("header", tX, [n[10] ||= R("div", null, [R("h3", {
					id: "species-builder-unavailable-species-heading",
					class: "dui-card-title"
				}, " Unavailable Sources "), R("p", { class: "app:m-0" }, " The source package is inactive; custom variants are retained for recovery. ")], -1), R("span", nX, O(l.value.length), 1)]), R("ul", rX, [(F(!0), I(P, null, N(l.value, (t) => (F(), L(_O, {
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
				]))), 128))])])) : V("", !0)
			]))
		])]));
	}
}), aX = {
	key: 0,
	id: "species-builder-panel-settings",
	"aria-label": "Species Builder settings",
	role: "region"
}, oX = {
	key: 1,
	id: "species-builder-panel-species-table",
	"aria-label": "Random Species table",
	role: "region"
}, sX = {
	key: 2,
	id: "species-builder-panel-wfrp-config",
	"aria-label": "Generated WFRP configuration",
	role: "region"
}, cX = {
	key: 3,
	id: "species-builder-panel-species",
	"aria-label": "Species definitions",
	role: "region"
}, lX = /* @__PURE__ */ M({
	__name: "SpeciesBuilderProjectPages",
	props: {
		activeTab: {},
		isDisabled: { type: Boolean }
	},
	emits: ["editSpecies"],
	setup(e, { emit: t }) {
		let n = t, r = wm(), i = /* @__PURE__ */ k(nv[0]?.id ?? ""), a = H(() => r.definitions.map((e, t) => Xh(r.validationIssues.filter((e) => e.definitionIndex === t)))), o = H(() => r.validationIssues.filter((e) => e.scope === "species-table"));
		function s() {
			r.addBlankDefinition(), n("editSpecies", r.selectedIndex);
		}
		function c(e) {
			let t = iv(e);
			t && (r.addExamplePackage(t), n("editSpecies", r.selectedIndex));
		}
		function l() {
			r.addExamplePackage(rv()), n("editSpecies", r.selectedIndex);
		}
		return (t, u) => e.activeTab === "settings" ? (F(), I("section", aX, [z(Tv, {
			"auto-register-species-table": A(r).autoRegisterSpeciesTable,
			"correct-existing-wfrp-species": A(r).correctExistingWfrpSpecies,
			"example-species-options": A(nv),
			"is-disabled": e.isDisabled,
			"selected-example-species-id": i.value,
			"show-generated-config-tab": A(r).showGeneratedConfigTab,
			"species-table": A(r).speciesTable,
			onGenerateAllExampleSpecies: l,
			onGenerateExampleSpecies: c,
			onUpdateAutoRegisterSpeciesTable: A(r).updateAutoRegisterSpeciesTable,
			onUpdateCorrectExistingWfrpSpecies: A(r).updateCorrectExistingWfrpSpecies,
			onUpdateSelectedExampleSpeciesId: u[0] ||= (e) => i.value = e,
			onUpdateShowGeneratedConfigTab: A(r).updateShowGeneratedConfigTab
		}, null, 8, [
			"auto-register-species-table",
			"correct-existing-wfrp-species",
			"example-species-options",
			"is-disabled",
			"selected-example-species-id",
			"show-generated-config-tab",
			"species-table",
			"onUpdateAutoRegisterSpeciesTable",
			"onUpdateCorrectExistingWfrpSpecies",
			"onUpdateShowGeneratedConfigTab"
		])])) : e.activeTab === "species-table" ? (F(), I("section", oX, [z(Ak, {
			draft: A(r).preparedSpeciesTable,
			"is-disabled": e.isDisabled,
			"is-validation-blocking": A(r).blockingValidationIssues.some((e) => e.scope === "species-table"),
			issues: o.value,
			options: A(r).speciesTableOptions,
			summaries: A(r).speciesTableSummaries,
			"validation-messages": A(r).speciesTableValidationMessages,
			onAddRow: A(r).addSpeciesTableRow,
			onRemoveRow: A(r).removeSpeciesTableRow,
			onUpdateRowKey: A(r).updateSpeciesTableRowKey,
			onUpdateRowWeight: A(r).updateSpeciesTableRowWeight
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
		])])) : e.activeTab === "wfrp-config" ? (F(), I("section", sX, [z(Kk, { "generated-config-text": A(r).generatedConfigText }, null, 8, ["generated-config-text"])])) : (F(), I("section", cX, [z(iX, {
			definitions: A(r).definitions,
			"is-disabled": e.isDisabled,
			"selected-index": A(r).selectedIndex,
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
}), uX = { class: "app:mb-3 app:flex app:flex-col app:gap-2" }, dX = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, fX = { class: "dui-card-title" }, pX = { class: "app:m-0" }, mX = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "note"
}, hX = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, gX = {
	key: 1,
	role: "status",
	class: "dui-alert dui-alert-warning"
}, _X = /* @__PURE__ */ M({
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
	emits: /* @__PURE__ */ "addSubspecies.careerTableCareerDrop.careerTableJournalDrop.careerReplacementChoiceDrop.careerReplacementRolledDrop.deleteSubspecies.openItem.reviewIssues.save.subspeciesTalentDrop.subspeciesTalentReplacementReplacementDrop.subspeciesTalentReplacementRolledDrop.talentReplacementReplacementDrop.talentReplacementRolledDrop.updateBooleanField.updateCareerReplacementRows.updateCareerTableRows.updateCharacteristic.updateHeightField.updateNumberField.updateStringField.updateWoundFormula.updateSubspeciesArrayField.updateSubspeciesCharacteristic.updateSubspeciesNumberField.updateSubspeciesStringField.updateSubspeciesCareerTableRows.subspeciesCareerTableCareerDrop.subspeciesCareerTableJournalDrop.updateSubspeciesWoundFormula.updateSubspeciesTalentReplacementRows.updateSubspeciesTextMapField.updateTalentReplacementRows.updateTextMapField".split("."),
	setup(e, { emit: t }) {
		let n = e, r = t, i = H(() => fY("species", !0, n.activeEditorTab, n.activeTableTab)), a = H(() => n.activeEditorTab !== "subspecies" && n.definition?.origin === "runtime" && !n.definition.runtimeUnavailable), o = H(() => n.activeEditorTab !== "subspecies" && n.definition?.runtimeUnavailable);
		return (t, n) => (F(), I("section", null, [R("header", uX, [
			R("div", dX, [R("h2", fX, O(i.value.label), 1), e.definition?.origin === "runtime" ? (F(), I("span", {
				key: 0,
				class: D(["dui-badge dui-badge-sm", e.definition.runtimeUnavailable ? "dui-badge-warning" : "dui-badge-ghost"])
			}, [R("i", {
				"aria-hidden": "true",
				class: D(e.definition.runtimeUnavailable ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-lock")
			}, null, 2), B(" " + O(e.definition.runtimeUnavailable ? "Unavailable source" : "Installed species"), 1)], 2)) : V("", !0)]),
			R("p", pX, O(i.value.description), 1),
			a.value ? (F(), I("div", mX, [...n[34] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, " This species comes from WFRP or an active module, so its setup is read-only. You can inspect every section and add editable custom variants from Subspecies. ", -1)]])) : o.value ? (F(), I("div", hX, [...n[35] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-triangle-exclamation"
			}, null, -1), R("span", null, " This species source is no longer active. Its saved custom variants are preserved until the source returns. ", -1)]])) : V("", !0)
		]), e.definition ? (F(), L(LO, {
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
			onReviewIssues: n[7] ||= (e) => r("reviewIssues"),
			onSave: n[8] ||= (e) => r("save"),
			onSubspeciesTalentDrop: n[9] ||= (e, t) => r("subspeciesTalentDrop", e, t),
			onSubspeciesCareerTableCareerDrop: n[10] ||= (e, t, n) => r("subspeciesCareerTableCareerDrop", e, t, n),
			onSubspeciesCareerTableJournalDrop: n[11] ||= (e, t, n) => r("subspeciesCareerTableJournalDrop", e, t, n),
			onSubspeciesTalentReplacementReplacementDrop: n[12] ||= (e, t, n) => r("subspeciesTalentReplacementReplacementDrop", e, t, n),
			onSubspeciesTalentReplacementRolledDrop: n[13] ||= (e, t, n) => r("subspeciesTalentReplacementRolledDrop", e, t, n),
			onTalentReplacementReplacementDrop: n[14] ||= (e, t) => r("talentReplacementReplacementDrop", e, t),
			onTalentReplacementRolledDrop: n[15] ||= (e, t) => r("talentReplacementRolledDrop", e, t),
			onUpdateBooleanField: n[16] ||= (e, t) => r("updateBooleanField", e, t),
			onUpdateCareerReplacementRows: n[17] ||= (e) => r("updateCareerReplacementRows", e),
			onUpdateCareerTableRows: n[18] ||= (e) => r("updateCareerTableRows", e),
			onUpdateCharacteristic: n[19] ||= (e, t) => r("updateCharacteristic", e, t),
			onUpdateHeightField: n[20] ||= (e, t) => r("updateHeightField", e, t),
			onUpdateNumberField: n[21] ||= (e, t) => r("updateNumberField", e, t),
			onUpdateStringField: n[22] ||= (e, t) => r("updateStringField", e, t),
			onUpdateWoundFormula: n[23] ||= (e) => r("updateWoundFormula", e),
			onUpdateSubspeciesArrayField: n[24] ||= (e, t, n) => r("updateSubspeciesArrayField", e, t, n),
			onUpdateSubspeciesCharacteristic: n[25] ||= (e, t, n) => r("updateSubspeciesCharacteristic", e, t, n),
			onUpdateSubspeciesNumberField: n[26] ||= (e, t, n) => r("updateSubspeciesNumberField", e, t, n),
			onUpdateSubspeciesStringField: n[27] ||= (e, t, n) => r("updateSubspeciesStringField", e, t, n),
			onUpdateSubspeciesCareerTableRows: n[28] ||= (e, t) => r("updateSubspeciesCareerTableRows", e, t),
			onUpdateSubspeciesWoundFormula: n[29] ||= (e, t) => r("updateSubspeciesWoundFormula", e, t),
			onUpdateSubspeciesTalentReplacementRows: n[30] ||= (e, t) => r("updateSubspeciesTalentReplacementRows", e, t),
			onUpdateSubspeciesTextMapField: n[31] ||= (e, t, n) => r("updateSubspeciesTextMapField", e, t, n),
			onUpdateTalentReplacementRows: n[32] ||= (e) => r("updateTalentReplacementRows", e),
			onUpdateTextMapField: n[33] ||= (e, t) => r("updateTextMapField", e, t)
		}, null, 8, [
			"active-editor-tab",
			"active-table-tab",
			"definition",
			"is-loading",
			"is-saving",
			"issues",
			"random-talent-sources",
			"validation-navigation-request"
		])) : (F(), I("section", gX, "No species selected."))]));
	}
}), vX = ["aria-busy"], yX = { class: "app:flex app:flex-1 app:items-start app:gap-3 app:p-3" }, bX = { class: "app:flex app:min-w-0 app:flex-1 app:flex-col app:gap-3" }, xX = /* @__PURE__ */ M({
	__name: "SpeciesBuilderApp",
	props: {
		bridge: {},
		onSettingsSaved: { type: Function }
	},
	setup(e) {
		let t = e, n = Tm(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = /* @__PURE__ */ k("species"), i = /* @__PURE__ */ k(!1), a = /* @__PURE__ */ k("details"), o = /* @__PURE__ */ k("careerTable"), s = Jh(n), c = H(() => n.isLoading.value || n.isSaving.value), l = H(() => i.value && n.selectedDefinition.value?.origin === "custom"), u = H(() => fY(r.value, i.value, a.value, o.value)), d = H(() => i.value ? n.selectedDefinition.value?.name.trim() || n.selectedDefinition.value?.key.trim() || "Untitled Species" : ""), f = H(() => Ml(n.definitions.value).map((e) => e.key)), { close: p, isOpen: m, navigationRequest: h, open: g, openForDefinition: _, selectIssue: v, summaryIssues: y } = FY({
			definitions: n.definitions,
			issues: n.validationIssues,
			openEditorTab: oe,
			openTableTab: se,
			selectDefinition: n.selectDefinition,
			selectProjectTab: ce
		}), b = H(() => n.blockingValidationIssues.value.length > 0 || n.blockingSpeciesTableValidationMessages.value.length > 0), x = H(() => ({
			errors: y.value.filter((e) => e.severity === "error").length,
			warnings: y.value.filter((e) => e.severity === "warning").length
		})), S = H(() => x.value.warnings > 0), C = H(() => n.validationIssues.value.filter((e) => e.definitionIndex === n.selectedIndex.value)), ee = H(() => uY(n.validationIssues.value, n.selectedIndex.value)), te = H(() => !!n.loadError.value || !!n.saveError.value || !!n.message.value || n.validationIssues.value.length > 0 || b.value), { confirmPendingDelete: ne, pendingDelete: re, requestDeleteDefinition: ie, requestDeleteSubspecies: w } = VS({
			deleteDefinition: n.deleteSelectedDefinition,
			deleteSubspecies: n.deleteSubspecies,
			selectedDefinition: n.selectedDefinition
		});
		jr(() => {
			n.loadSettings();
		}), Xn(() => n.showGeneratedConfigTab.value, (e) => {
			!e && r.value === "wfrp-config" && (r.value = "species");
		}), Xn(() => n.selectedDefinition.value, (e) => {
			e || (i.value = !1);
		});
		function T(e) {
			(e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.target instanceof HTMLTextAreaElement) && e.stopPropagation();
		}
		function ae(e, t = "details") {
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
		function E(e) {
			n.addDefinition(e), oe("details");
		}
		let le = US(n, {
			requestDeleteSubspecies: w,
			requestSave: s.requestSave
		});
		return (e, t) => (F(), I("section", {
			class: "app:flex app:min-h-full app:flex-col",
			"aria-busy": c.value,
			onKeydown: T,
			onKeyup: T
		}, [
			z(rY, {
				"can-manage-definition": l.value,
				"context-label": u.value.label,
				"definition-name": d.value,
				"is-busy": c.value,
				onDelete: A(ie),
				onDuplicate: A(n).duplicateSelectedDefinition,
				onReload: A(n).loadSettings,
				onSelectSpecies: t[0] ||= (e) => ce("species")
			}, {
				actions: j(({ dialogHost: e }) => [z(Uh, {
					definition: A(n).selectedDefinition.value?.origin === "custom" ? A(n).selectedDefinition.value : void 0,
					"dialog-host": e,
					"existing-keys": f.value,
					"is-disabled": c.value,
					"is-import-only": A(n).selectedDefinition.value?.origin === "runtime",
					onImportDefinition: E
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
			z(BS, {
				message: A(re)?.message,
				onClose: t[1] ||= (e) => re.value = null,
				onConfirm: A(ne)
			}, null, 8, ["message", "onConfirm"]),
			z(qh, {
				"is-open": A(s).isConfirmationOpen.value,
				onClose: A(s).closeConfirmation,
				onConfirm: A(s).confirmSave
			}, null, 8, [
				"is-open",
				"onClose",
				"onConfirm"
			]),
			z(PY, {
				definitions: A(n).definitions.value,
				"is-open": A(m),
				issues: A(y),
				onClose: A(p),
				onSelectIssue: A(v)
			}, null, 8, [
				"definitions",
				"is-open",
				"issues",
				"onClose",
				"onSelectIssue"
			]),
			R("main", yX, [z(xY, {
				"active-editor-tab": a.value,
				"active-table-tab": o.value,
				"active-tab": r.value,
				"has-selected-definition": !!A(n).selectedDefinition.value,
				"is-busy": c.value,
				"is-editor-open": i.value,
				"show-generated-config-tab": A(n).showGeneratedConfigTab.value,
				"validation-counts": ee.value,
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
			]), R("div", bX, [te.value ? (F(), L(jm, {
				key: 0,
				"chargen-error-count": x.value.errors,
				"chargen-warning-count": x.value.warnings,
				"load-error": A(n).loadError.value || A(n).saveError.value,
				message: A(n).message.value,
				"validation-message": A(n).blockingSpeciesTableValidationMessages.value[0] ?? "",
				onReviewIssues: A(g)
			}, null, 8, [
				"chargen-error-count",
				"chargen-warning-count",
				"load-error",
				"message",
				"validation-message",
				"onReviewIssues"
			])) : V("", !0), i.value ? (F(), L(_X, Aa({
				key: 2,
				id: "species-builder-panel-species",
				"active-editor-tab": a.value,
				"active-table-tab": o.value,
				"aria-label": "Species editor",
				definition: A(n).selectedDefinition.value,
				"is-loading": A(n).isLoading.value,
				"is-saving": A(n).isSaving.value,
				issues: C.value,
				"random-talent-sources": A(n).randomTalentSources.value,
				"validation-navigation-request": A(h),
				role: "region",
				onReviewIssues: t[2] ||= (e) => A(_)(A(n).selectedIndex.value)
			}, qr(A(le))), null, 16, [
				"active-editor-tab",
				"active-table-tab",
				"definition",
				"is-loading",
				"is-saving",
				"issues",
				"random-talent-sources",
				"validation-navigation-request"
			])) : (F(), L(lX, {
				key: 1,
				"active-tab": r.value,
				"is-disabled": c.value,
				onEditSpecies: ae
			}, null, 8, ["active-tab", "is-disabled"]))])]),
			z(AE, {
				"can-save": A(n).canSave.value,
				definition: i.value ? A(n).selectedDefinition.value : void 0,
				"has-unsaved-changes": A(n).hasUnsavedChanges.value,
				"has-validation-errors": b.value,
				"has-validation-warnings": S.value,
				"is-loading": A(n).isLoading.value,
				"is-saving": A(n).isSaving.value,
				"load-error": A(n).loadError.value || A(n).saveError.value,
				"entity-name": r.value === "species-table" ? "Species Table" : void 0,
				onSave: A(s).requestSave
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
		], 40, vX));
	}
}), SX = class extends Vv {
	#e = !1;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${Y}-species-builder`,
		classes: [Y, "wfrp4e-customizer-species-builder"],
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
		return xX;
	}
	getVueProps() {
		return {
			bridge: jS,
			onSettingsSaved: () => {
				this.#e = !0;
			}
		};
	}
	async _preClose(e) {
		let t = this.#e;
		this.#e = !1, t && await NS() && window.location.reload(), await super._preClose(e);
	}
}, CX = { class: "dui-list" }, wX = { class: "dui-list-row" }, TX = { class: "dui-list-row" }, EX = { class: "dui-list-row" }, DX = /* @__PURE__ */ M({
	__name: "WorkbenchApp",
	props: {
		openDaisyProbe: { type: Function },
		openNpcBuilder: { type: Function },
		openSpeciesBuilder: { type: Function }
	},
	setup(e) {
		return (t, n) => (F(), L(RJ, {
			description: "Open a focused WFRP4e authoring workflow.",
			title: "Customizer Workbench"
		}, {
			default: j(() => [R("ul", CX, [
				R("li", wX, [n[3] ||= R("div", { class: "dui-list-col-grow" }, [R("strong", null, "NPC Builder"), R("p", null, "Build an NPC from a base Actor, Careers, traits, trappings, and spells.")], -1), R("button", {
					"aria-label": "Open NPC Builder",
					class: "dui-btn dui-btn-primary",
					type: "button",
					onClick: n[0] ||= (...t) => e.openNpcBuilder && e.openNpcBuilder(...t)
				}, " Open ")]),
				R("li", TX, [n[4] ||= R("div", { class: "dui-list-col-grow" }, [R("strong", null, "Species Builder"), R("p", null, "Author custom species and apply them to WFRP character generation.")], -1), R("button", {
					"aria-label": "Open Species Builder",
					class: "dui-btn",
					type: "button",
					onClick: n[1] ||= (...t) => e.openSpeciesBuilder && e.openSpeciesBuilder(...t)
				}, " Open ")]),
				R("li", EX, [n[5] ||= R("div", { class: "dui-list-col-grow" }, [R("strong", null, "DaisyUI Probe"), R("p", null, "Check the module's scoped component theme.")], -1), R("button", {
					"aria-label": "Open DaisyUI Probe",
					class: "dui-btn dui-btn-ghost",
					type: "button",
					onClick: n[2] ||= (...t) => e.openDaisyProbe && e.openDaisyProbe(...t)
				}, " Open ")])
			])]),
			_: 1
		}));
	}
}), OX = class extends Vv {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${Y}-workbench`,
		classes: [Y, "wfrp4e-customizer-workbench"],
		position: {
			height: 430,
			width: 640
		},
		window: {
			icon: "fa-solid fa-screwdriver-wrench",
			title: Xg
		}
	};
	getVueComponent() {
		return DX;
	}
	getVueProps() {
		return {
			openDaisyProbe: () => new VJ().render(!0),
			openNpcBuilder: () => new mK().render(!0),
			openSpeciesBuilder: () => new pA().render(!0)
		};
	}
};
//#endregion
//#region src/module/register-module-menus.ts
function kX() {
	game.settings.registerMenu(Y, "workbench", {
		hint: `Open the ${Xg} workbench.`,
		icon: "fa-solid fa-screwdriver-wrench",
		label: "Open Workbench",
		name: Xg,
		restricted: !0,
		type: OX
	}), game.settings.registerMenu(Y, "npc-builder", {
		hint: "Build a WFRP4e NPC from a base Actor and Career items.",
		icon: "fa-solid fa-user-plus",
		label: "Open NPC Builder",
		name: "WFRP4e NPC Builder",
		restricted: !0,
		type: mK
	}), game.settings.registerMenu(Y, "species-builder", {
		hint: "Open the focused species directory and its linked authoring applications.",
		icon: "fa-solid fa-people-group",
		label: "Open Species Builder",
		name: "WFRP4e Species Builder",
		restricted: !0,
		type: pA
	}), game.settings.registerMenu(Y, "species-builder-legacy", {
		hint: "Open the original all-in-one Species Builder application.",
		icon: "fa-solid fa-window-restore",
		label: "Open Legacy Species Builder",
		name: "Legacy WFRP4e Species Builder",
		restricted: !0,
		type: SX
	}), game.settings.registerMenu(Y, "daisy-example", {
		hint: "Open a small isolated DaisyUI component probe.",
		icon: "fa-solid fa-flask",
		label: "Open Daisy Probe",
		name: "WFRP4e Daisy Probe",
		restricted: !0,
		type: VJ
	});
}
//#endregion
//#region src/module/register-module-settings.ts
function AX() {
	fU(), oy();
}
//#endregion
//#region src/functions/item-grants/wfrp-grant-effect.ts
var jX = "generatedGrantItemsEffect", MX = {
	grantMode: "all",
	lifetime: "linked-to-effect",
	ownerAction: "keep"
};
function NX(e) {
	let t = e.recipe ?? MX;
	PX(t);
	let n = e.items.map((e) => e.uuid);
	return {
		changes: [],
		description: IX(e.effectName, e.items, t),
		disabled: !1,
		flags: { [e.flagScope]: {
			[jX]: !0,
			itemUuids: n,
			recipe: t
		} },
		img: e.items[0]?.img ?? "icons/svg/aura.svg",
		name: e.effectName,
		system: {
			scriptData: [{
				label: e.effectName,
				script: FX(n, t),
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
function PX(e) {
	if (e.lifetime === "linked-to-effect" && e.ownerAction === "delete-after-grant") throw Error("Self-removing grant effects must create detached item copies.");
}
function FX(e, t) {
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
function IX(e, t, n) {
	let r = LX(e), i = t.map((e) => `<li>${LX(e.name)}</li>`).join("");
	return `<p><strong>${r}</strong>: grants item copies; ${n.lifetime === "linked-to-effect" ? "granted item copies are removed with this effect" : "granted item copies remain after this effect is removed"}.${n.ownerAction === "delete-after-grant" ? " The source Item removes itself after granting." : ""}</p><ul>${i}</ul>`;
}
function LX(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/view/apps/grant-builder/GrantBuilderApp.vue?vue&type=script&setup=true&lang.ts
var RX = { class: "dui-card dui-card-border dui-card-sm" }, zX = { class: "dui-card-body" }, BX = { class: "dui-list" }, VX = {
	key: 0,
	class: "dui-list-row"
}, HX = ["src"], UX = { class: "dui-list-col-grow" }, WX = ["title", "onClick"], GX = { class: "dui-card dui-card-border dui-card-sm" }, KX = { class: "dui-card-body" }, qX = { class: "dui-fieldset" }, JX = { class: "dui-label" }, YX = ["value"], XX = { class: "dui-card-body" }, ZX = { class: "dui-fieldset" }, QX = { class: "dui-label" }, $X = ["checked"], eZ = { class: "dui-label" }, tZ = ["checked"], nZ = { class: "dui-label" }, rZ = ["checked", "disabled"], iZ = ["disabled"], aZ = /* @__PURE__ */ M({
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
		return (n, r) => (F(), L(RJ, {
			description: `Build an item-granting Active Effect on ${e.carrierName}.`,
			title: "Grant Builder"
		}, {
			actions: j(() => [R("button", {
				class: "dui-btn dui-btn-ghost",
				type: "button",
				onClick: r[5] ||= (...t) => e.onCancel && e.onCancel(...t)
			}, "Cancel"), R("button", {
				class: "dui-btn dui-btn-primary",
				type: "button",
				disabled: e.items.length === 0,
				onClick: r[6] ||= (...t) => e.onCreate && e.onCreate(...t)
			}, " Create Grant Effect ", 8, iZ)]),
			default: j(() => [
				R("section", RX, [R("div", zX, [
					r[8] ||= R("h2", { class: "dui-card-title" }, "Granted Items", -1),
					z(lC, {
						description: "World and compendium Items can be added one at a time.",
						"manual-entry-trigger": "button",
						title: "Drop Items Here",
						onDropData: e.onDropData
					}, null, 8, ["onDropData"]),
					R("ul", BX, [e.items.length === 0 ? (F(), I("li", VX, "No granted items configured.")) : (F(!0), I(P, { key: 1 }, N(e.items, (t) => (F(), I("li", {
						key: t.uuid,
						class: "dui-list-row"
					}, [
						t.img ? (F(), I("img", {
							key: 0,
							alt: "",
							src: t.img
						}, null, 8, HX)) : V("", !0),
						R("div", UX, [R("strong", null, O(t.name), 1), R("small", null, O(t.uuid), 1)]),
						R("button", {
							class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square",
							type: "button",
							title: `Remove ${t.name}`,
							onClick: (n) => e.onRemoveItem(t.uuid)
						}, [...r[7] ||= [R("i", {
							class: "fa-solid fa-times",
							"aria-hidden": "true"
						}, null, -1)]], 8, WX)
					]))), 128))])
				])]),
				R("section", GX, [R("div", KX, [R("fieldset", qX, [r[10] ||= R("legend", { class: "dui-fieldset-legend" }, "Effect", -1), R("label", JX, [r[9] ||= R("span", null, "Effect name", -1), R("input", {
					class: "dui-input",
					value: e.effectName,
					type: "text",
					onInput: r[0] ||= (n) => e.onEffectNameInput(t(n))
				}, null, 40, YX)])])])]),
				R("form", {
					class: "dui-card dui-card-border dui-card-sm",
					onSubmit: r[4] ||= Zo(() => {}, ["prevent"])
				}, [R("div", XX, [R("fieldset", ZX, [
					r[14] ||= R("legend", { class: "dui-fieldset-legend" }, "Granted Item Lifetime", -1),
					R("label", QX, [R("input", {
						class: "dui-radio",
						name: "grant-lifetime",
						type: "radio",
						value: "linked-to-effect",
						checked: e.lifetime === "linked-to-effect",
						onChange: r[1] ||= (t) => e.onLifetimeChange("linked-to-effect")
					}, null, 40, $X), r[11] ||= R("span", null, [
						R("strong", null, "Linked to this effect"),
						R("br"),
						B(" Granted Items are removed when this effect is deleted. ")
					], -1)]),
					R("label", eZ, [R("input", {
						class: "dui-radio",
						name: "grant-lifetime",
						type: "radio",
						value: "detached",
						checked: e.lifetime === "detached",
						onChange: r[2] ||= (t) => e.onLifetimeChange("detached")
					}, null, 40, tZ), r[12] ||= R("span", null, [
						R("strong", null, "Detached copies"),
						R("br"),
						B(" Granted Items remain after this effect or source Item is removed. ")
					], -1)]),
					R("label", nZ, [R("input", {
						class: "dui-checkbox",
						type: "checkbox",
						checked: e.ownerAction === "delete-after-grant",
						disabled: e.lifetime !== "detached",
						onChange: r[3] ||= (t) => e.onOwnerActionChange(e.ownerAction === "delete-after-grant" ? "keep" : "delete-after-grant")
					}, null, 40, rZ), r[13] ||= B(" Remove the source Item after granting. ", -1)])
				])])], 32)
			]),
			_: 1
		}, 8, ["description"]));
	}
});
//#endregion
//#region src/module/wfrp4e/grant/item-documents.ts
function oZ(e) {
	let t = e.dataTransfer?.getData("text/plain") ?? "";
	if (!t) return null;
	try {
		return xb(t).type === "Item" ? t : null;
	} catch {
		return null;
	}
}
async function sZ(e) {
	let t = xb(e);
	if (!t.uuid) throw Error("Drop an Item with a resolvable UUID.");
	return yb(await fromUuid(t.uuid), "The dropped Item was not found.");
}
function cZ(e) {
	let t = {
		name: e.name,
		uuid: e.uuid
	};
	return e.img && (t.img = e.img), t;
}
//#endregion
//#region src/module/apps/grant-builder/GrantBuilderApplication.ts
var lZ = "detached", uZ = class extends Vv {
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		classes: [Y, "wfrp4e-customizer-grant-builder"],
		id: `${Y}-grant-builder`,
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
		return aZ;
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
		this.#r = e, e !== lZ && (this.#i = "keep"), this.render();
	}
	changeOwnerAction(e) {
		this.#i = e, this.render();
	}
	removeItem(e) {
		this.#n = this.#n.filter((t) => t.uuid !== e), this.render();
	}
	async handleDrop(e) {
		try {
			let t = await sZ(e);
			if (t.uuid === this.carrierItem.uuid) throw Error("An Item cannot grant itself.");
			if (this.#n.some((e) => e.uuid === t.uuid)) {
				ui.notifications?.warn?.(`"${t.name}" is already in this grant effect.`);
				return;
			}
			this.#n = [...this.#n, cZ(t)], this.updateDefaultEffectName(), this.render();
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
			}, n = NX({
				effectName: e,
				flagScope: Y,
				items: this.#n,
				recipe: t
			});
			await this.carrierItem.createEmbeddedDocuments("ActiveEffect", [n]), ui.notifications?.info(`Created "${e}" grant effect.`), await this.close();
		} catch (e) {
			let t = e instanceof Error ? e.message : "Could not create the grant effect.";
			ui.notifications?.warn?.(t);
		}
	}
}, dZ = new Set(["talent", "trait"]), fZ = /* @__PURE__ */ new WeakSet(), pZ = !1, mZ = "wfrp4e-customizer-grant-builder-button", hZ = [
	"section[data-application-part=\"effects\"].active",
	"section[data-tab=\"effects\"].active",
	".tab[data-tab=\"effects\"].active",
	".tab.effects.active"
].join(","), gZ = [
	"section[data-application-part=\"effects\"]",
	"section[data-tab=\"effects\"]",
	".tab[data-tab=\"effects\"]",
	".tab.effects"
].join(",");
function _Z() {
	pZ || (pZ = !0, Hooks.on("renderApplicationV2", (e, t) => {
		if (!(t instanceof HTMLElement)) return;
		let n = xZ(e);
		!n || !dZ.has(n.type) || (vZ(n, t), yZ(n, t));
	}));
}
function vZ(e, t) {
	fZ.has(t) || (fZ.add(t), t.addEventListener("dragover", (e) => {
		SZ(t, e.target) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "copy"));
	}, !0), t.addEventListener("drop", (n) => {
		bZ(e, t, n);
	}, !0));
}
function yZ(e, t) {
	if (t.querySelector(`.${mZ}`)) return;
	let n = wZ(t, { includeInactive: !0 });
	if (!n) return;
	let r = document.createElement("div");
	r.classList.add("wfrp4e-customizer-grant-builder-toolbar");
	let i = document.createElement("button");
	i.type = "button", i.classList.add(mZ), i.title = "Open the advanced item grant builder", i.innerHTML = "<i class=\"fa-solid fa-sitemap\" aria-hidden=\"true\"></i><span>Grant Builder</span>", i.addEventListener("click", () => {
		new uZ(e).render(!0);
	}), r.append(i), n.prepend(r);
}
async function bZ(e, t, n) {
	if (!SZ(t, n.target)) return;
	let r = oZ(n);
	if (r) {
		n.preventDefault(), n.stopPropagation();
		try {
			let t = await sZ(r);
			if (t.uuid === e.uuid) throw Error("An Item cannot grant itself.");
			let n = cZ(t), i = NX({
				effectName: `Grant ${t.name}`,
				flagScope: Y,
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
function xZ(e) {
	if (typeof e != "object" || !e) return null;
	let t = "item" in e ? e.item : void 0;
	if (_b(t)) return t;
	let n = "document" in e ? e.document : void 0;
	return _b(n) ? n : null;
}
function SZ(e, t) {
	return !(t instanceof Element) || !e.contains(t) ? !1 : !!CZ(e);
}
function CZ(e) {
	return e.querySelector(hZ) || wZ(e, { includeInactive: !1 });
}
function wZ(e, t) {
	return [...e.querySelectorAll(gZ)].find((e) => t.includeInactive || e.offsetParent !== null) ?? null;
}
//#endregion
//#region src/module/api/create-module-api.ts
function TZ() {
	return {
		clearDebugShapeProbes: TJ,
		estimateNpcXp: IK,
		getDebugShapeProbes: EJ,
		inspectPath: DJ,
		listNpcAutoAdvanceStrategies: _N,
		async openDaisyExample() {
			await new VJ().render(!0);
		},
		async openNpcBuilder() {
			await new mK().render(!0);
		},
		async openSpeciesBuilder() {
			await new pA().render(!0);
		},
		async openWorkbench() {
			await new OX().render(!0);
		},
		registerNpcAutoAdvanceStrategy: gN,
		setDebugShapeProbes: kJ
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function EZ() {
	let e = game.modules.get(Y);
	if (!e) throw Error(`Foundry module registry entry was not found for ${Y}.`);
	e.api = TZ();
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function DZ() {
	OJ(), Hooks.once("init", () => {
		e(`${Y} | Initializing`), AX(), game.system.id === "wfrp4e" && (ib(), ZK(), HK(), yq(), _Z()), kX(), _K();
	}), Hooks.once("ready", () => {
		if (game.system.id !== "wfrp4e") {
			t(`${Y} | Loaded outside ${Zg}; skipping module API registration.`);
			return;
		}
		OZ();
	});
}
async function OZ() {
	await Promise.resolve();
	try {
		let e = sy(), t = e.correctExistingWfrpSpecies ? Lq() : { removedTopLevelSpeciesKeys: [] };
		await ab(e.definitions.map(({ key: e }) => e), t.removedTopLevelSpeciesKeys), await QK();
	} catch (e) {
		t(`${Y} | Runtime species catalog could not be prepared: ${e instanceof Error ? e.message : "Unknown runtime adaptation error."}`);
	}
	EZ(), CH(), VH(), lb(), ES(), e(`${Y} | Ready`);
}
//#endregion
//#region src/main.ts
DZ();
//#endregion

//# sourceMappingURL=wfrp4e-customizer-apps.mjs.map