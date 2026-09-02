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
		...sc(e, t).flatMap((e) => [...e.emitBaseDefinition ? Xv(e.definition) : [], ...ey(e.definition, e.subspecies)]),
		...Zv(e, t),
		...Qv(e, t)
	];
}
function Kv({ fallbackJournalUuid: e = Uv, flagScope: t, spec: n }) {
	let r = {
		speciesKey: n.speciesKey,
		subspeciesKey: n.subspeciesKey ?? ""
	}, i = {
		displayRoll: !0,
		flags: {
			wfrp4e: {
				column: n.column,
				key: "career"
			},
			[t]: { [Hv]: r }
		},
		formula: `1d${n.rows.length}`,
		img: "systems/wfrp4e/ui/buttons/d10.webp",
		name: n.name,
		replacement: !0,
		results: n.rows.map((t, n) => ({
			description: ty(t, e),
			drawn: !1,
			img: "icons/svg/d20-grey.svg",
			name: t.name,
			range: [n + 1, n + 1],
			type: "text",
			weight: 1
		}))
	}, a = i.flags;
	return a[t][Hv] = {
		...r,
		fingerprint: qv(i, t),
		schemaVersion: 1
	}, i;
}
function qv(e, t) {
	let n = Jv(e, t), r = 2166136261;
	for (let e = 0; e < n.length; e += 1) r ^= n.charCodeAt(e), r = Math.imul(r, 16777619);
	return (r >>> 0).toString(16).padStart(8, "0");
}
function Jv(e, t) {
	return JSON.stringify(ry(e, t));
}
function Yv(e) {
	return JSON.stringify(iy(e));
}
function Xv(e) {
	return e.careerTable?.rows.length ? [{
		column: ml(e),
		name: `Career - ${e.name}`,
		rows: e.careerTable.rows,
		speciesKey: e.key
	}] : [];
}
function Zv(e, t) {
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
function Qv(e, t) {
	if (!e.correctExistingWfrpSpecies) return [];
	let n = t.find((e) => e.name.trim() === fc);
	if (!n) return [];
	let r = xc(n.key);
	return [...Xv(r), ...ey(r, r.subspecies ?? [])];
}
function $v(e) {
	return e === "Compendium.wfrp4e-wom.items.Item.GWEA2m8FN3IbV7Su" || e === "Compendium.wfrp4e-wom.items.Item.6wTQe3nFr1j64D6s";
}
function ey(e, t) {
	return t.flatMap((t) => t.careerTable?.rows.length ? [{
		column: hl(e, t),
		name: `Career - ${e.name} / ${t.name}`,
		rows: t.careerTable.rows,
		speciesKey: e.key,
		subspeciesKey: t.key
	}] : []);
}
function ty(e, t) {
	return `@UUID[${e.journalUuid?.trim() || t}]{${ny(e.name)}}`;
}
function ny(e) {
	return e.replaceAll("{", "").replaceAll("}", "").trim();
}
function ry(e, t) {
	let n = K(e, ["results"]);
	return {
		displayRoll: K(e, ["displayRoll"]),
		flags: {
			generated: {
				speciesKey: K(e, [
					"flags",
					t,
					Hv,
					"speciesKey"
				]),
				subspeciesKey: K(e, [
					"flags",
					t,
					Hv,
					"subspeciesKey"
				])
			},
			wfrp4e: {
				column: K(e, [
					"flags",
					"wfrp4e",
					"column"
				]),
				key: K(e, [
					"flags",
					"wfrp4e",
					"key"
				])
			}
		},
		formula: K(e, ["formula"]),
		img: K(e, ["img"]),
		name: K(e, ["name"]),
		replacement: K(e, ["replacement"]),
		results: Array.isArray(n) ? n.filter(G).map(iy) : []
	};
}
function iy(e) {
	return {
		description: e.description,
		drawn: e.drawn,
		img: e.img,
		name: e.name,
		range: e.range,
		type: e.type,
		weight: e.weight
	};
}
//#endregion
//#region src/functions/species-builder/generated-table-sync.ts
function ay(e, t, n, r) {
	let i = /* @__PURE__ */ new Map(), a = [];
	for (let e of t) {
		let t = oy(e.source, n);
		if (t) {
			let n = sy(t);
			i.set(n, [...i.get(n) ?? [], e]);
		} else a.push(e.id);
	}
	return {
		entries: e.map((e) => {
			let t = oy(e, n), a = (t ? i.get(sy(t)) : void 0)?.shift();
			if (!a) return {
				action: "create",
				source: e
			};
			let o = Jv(a.source, n) === Jv(e, n);
			return {
				action: r || !o ? "update" : "skip",
				existingId: a.id,
				source: e
			};
		}),
		obsoleteIds: [...a, ...[...i.values()].flatMap((e) => e.map((e) => e.id))]
	};
}
function oy(e, t) {
	let n = K(e, [
		"flags",
		t,
		Hv
	]);
	if (!G(n)) return;
	let r = q(n, ["speciesKey"]);
	return r ? {
		speciesKey: r,
		subspeciesKey: q(n, ["subspeciesKey"])
	} : void 0;
}
function sy(e) {
	return `${e.speciesKey}\u0000${e.subspeciesKey}`;
}
//#endregion
//#region src/module/foundry/roll-table-results.ts
async function cy(e, t) {
	t.updates.length > 0 && await e.updateEmbeddedDocuments("TableResult", t.updates), t.creates.length > 0 && await e.createEmbeddedDocuments("TableResult", t.creates), t.deletedIds.length > 0 && await e.deleteEmbeddedDocuments("TableResult", t.deletedIds);
}
//#endregion
//#region src/functions/species-builder/default-species-builder-settings.ts
function ly() {
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
function uy(e) {
	return e;
}
function dy(e) {
	game.settings.register(Y, e.key, {
		config: e.config ?? !1,
		default: e.defaultValue,
		name: e.name,
		scope: e.scope ?? "world",
		type: Object
	});
}
function fy(e) {
	return e.normalize(game.settings.get(Y, e.key));
}
async function py(e, t) {
	let n = e.normalize(t);
	return await game.settings.set(Y, e.key, n), n;
}
//#endregion
//#region src/module/apps/species-builder/settings.ts
var my = uy({
	defaultValue: ly(),
	key: "speciesBuilderSettings",
	name: "Species Builder Settings",
	normalize: Ou
});
function hy() {
	dy(my);
}
function gy() {
	return fy(my);
}
async function _y(e) {
	return await py(my, e);
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/config-snapshot.ts
var vy = [
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
function yy(e) {
	let t = G(e) ? e : {}, n = Object.fromEntries(vy.map((e) => [e, wy(t[e])]));
	return {
		extraSpecies: Ey(t.extraSpecies),
		records: n
	};
}
function by(e, t, n) {
	let r = Object.fromEntries(vy.map((r) => [r, Sy(r, e.records[r], t.records[r], n)]));
	return {
		extraSpecies: Dy([...e.extraSpecies, ...t.extraSpecies]).filter((t) => !n.has(t) || e.extraSpecies.includes(t)),
		records: r
	};
}
function xy(e, t, n) {
	return e.records[t][n];
}
function Sy(e, t, n, r) {
	let i = e === "subspecies" ? Cy(t, n) : {
		...t,
		...n
	};
	for (let e of r) Object.hasOwn(t, e) ? i[e] = Ty(t[e]) : delete i[e];
	return i;
}
function Cy(e, t) {
	let n = new Set([...Object.keys(e), ...Object.keys(t)]);
	return Object.fromEntries([...n].map((n) => {
		let r = G(e[n]) ? e[n] : {}, i = G(t[n]) ? t[n] : {};
		return [n, {
			...r,
			...i
		}];
	}));
}
function wy(e) {
	return G(e) ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Ty(t)])) : {};
}
function Ty(e) {
	return Array.isArray(e) ? e.map(Ty) : G(e) ? Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Ty(t)])) : e;
}
function Ey(e) {
	return Array.isArray(e) ? e.flatMap((e) => typeof e == "string" && e.trim() ? [e.trim()] : []) : [];
}
function Dy(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/career-table.ts
function Oy(e, t, n) {
	let r = Ay(e, t, typeof n == "string" ? n.trim() : "");
	for (let e of r) {
		let t = game.wfrp4e?.tables?.findTable?.("career", e);
		if (!t) continue;
		let n = jy(t, e);
		if (n) return ky(n);
	}
}
function ky(e) {
	if (!G(e)) return;
	let t = Ry(e.results).flatMap((e) => {
		let t = Ny(e);
		return t ? [t] : [];
	});
	return t.length > 0 ? { rows: t } : void 0;
}
function Ay(e, t, n) {
	let r = t ? [
		n,
		`${e}-${t}`,
		e
	] : [e];
	return e === "human" && r.push("human-reiklander"), [...new Set(r.filter(Boolean))];
}
function jy(e, t) {
	return !G(e) || !Array.isArray(e.columns) ? e : e.columns.find((e) => My(e) === t);
}
function My(e) {
	if (!G(e) || typeof e.getFlag != "function") return "";
	let t = e.getFlag.call(e, "wfrp4e", "column");
	return typeof t == "string" ? t : "";
}
function Ny(e) {
	if (!G(e)) return;
	let t = Iy(e), n = /@UUID\[([^\]]+)\]\{([^}]+)\}/u.exec(t), r = Ly(n?.[2] ?? ""), i = Ly(t) || Ly(e.name), a = r || i;
	if (!a) return;
	let o = n?.[1]?.trim(), s = Py(e.range), c = Fy(e.weight), l = { name: a };
	return o && (l.journalUuid = o), s && (l.sourceRange = s), c !== void 0 && (l.sourceWeight = c), l;
}
function Py(e) {
	if (!Array.isArray(e) || e.length < 2) return;
	let t = Number(e[0]), n = Number(e[1]);
	return Number.isFinite(t) && Number.isFinite(n) ? [t, n] : void 0;
}
function Fy(e) {
	let t = Number(e);
	return Number.isFinite(t) && t > 0 ? t : void 0;
}
function Iy(e) {
	if (e.type === "document") {
		let t = e.documentUuid, n = e.name;
		return typeof t == "string" && typeof n == "string" ? `@UUID[${t}]{${n}}` : "";
	}
	let t = e.description ?? e.text;
	return typeof t == "string" ? t : "";
}
function Ly(e) {
	return typeof e == "string" ? e.replace(/@UUID\[[^\]]+\]\{([^}]+)\}/gu, "$1").replace(/<[^>]*>/gu, "").trim() : "";
}
function Ry(e) {
	return Array.isArray(e) ? e : typeof e == "object" && e && Symbol.iterator in e ? [...e] : [];
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/values.ts
var zy = Object.values(W);
function By(e) {
	if (typeof e == "string") return e.trim() || void 0;
}
function Vy(e) {
	return typeof e == "number" && Number.isFinite(e) ? e : void 0;
}
function Hy(e) {
	if (Array.isArray(e)) return e.flatMap((e) => {
		let t = By(e);
		return t ? [t] : [];
	});
}
function Uy(e) {
	if (!Array.isArray(e)) return;
	let t, n = [];
	for (let r of e) {
		let e = Wy(r);
		if (e !== void 0) {
			t = e;
			continue;
		}
		let i = By(r);
		i && n.push(i);
	}
	return t === void 0 ? { talents: n } : {
		randomTalentCount: t,
		talents: n
	};
}
function Wy(e) {
	if (typeof e == "number") return Vy(e);
	if (typeof e != "string" || !e.trim()) return;
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
function Gy(e) {
	if (G(e)) return Object.fromEntries(Object.entries(e).flatMap(([e, t]) => {
		let n = By(e), r = By(t);
		return n && r ? [[n, r]] : [];
	}));
}
function Ky(e) {
	if (G(e)) return Object.fromEntries(Object.entries(e).flatMap(([e, t]) => {
		let n = By(e), r = Wy(t);
		return n && r !== void 0 ? [[n, r]] : [];
	}));
}
function qy(e) {
	if (G(e)) return Object.fromEntries(Object.entries(e).flatMap(([e, t]) => {
		let n = By(e), r = Hy(t);
		return n && r ? [[n, r]] : [];
	}));
}
function Jy(e) {
	if (!G(e)) return;
	let t = zy.flatMap((t) => {
		let n = By(e[t]);
		return n ? [[t, n]] : [];
	});
	return t.length > 0 ? Object.fromEntries(t) : {};
}
function Yy(e) {
	if (!G(e)) return;
	let t = {};
	return U(t, "die", By(e.die)), U(t, "feet", Vy(e.feet)), U(t, "inches", Vy(e.inches)), Object.keys(t).length > 0 ? t : {};
}
function Xy(e, t, n = void 0) {
	if (!e && t === void 0) return;
	let r = { ...e ?? n };
	return t !== void 0 && (r.talents = t), r;
}
function Zy(e, t) {
	let n = t.filter((t) => !e.includes(t)), r = e.filter((e) => !t.includes(e)), i = {};
	return U(i, "added", n.length > 0 ? n : void 0), U(i, "removed", r.length > 0 ? r : void 0), i;
}
function Qy(e, t) {
	let n = Object.fromEntries(Object.entries(t).filter(([t, n]) => e?.[t] !== n));
	return Object.keys(n).length > 0 ? n : void 0;
}
function $y(e, t) {
	let n = Object.entries(e ?? {}), r = Object.entries(t ?? {});
	return n.length === r.length && n.every(([e, n]) => t?.[e] === n);
}
function eb(e, t, n, r) {
	let i = Vy(r);
	i !== void 0 && i !== n && (e[t] = i);
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/definition-adapter.ts
function tb(e, t) {
	let n = new Set(e.extraSpecies);
	return Object.entries(e.records.species).flatMap(([r, i]) => {
		let a = r.trim();
		return a ? [nb(e, a, i, n, t)] : [];
	}).sort(ub);
}
function nb(e, t, n, r, i) {
	let a = {
		includeInExtraSpecies: r.has(t),
		key: t,
		name: By(n) ?? t
	}, o = Uy(xy(e, "speciesTalents", t));
	U(a, "characteristics", Jy(xy(e, "speciesCharacteristics", t))), U(a, "skills", Hy(xy(e, "speciesSkills", t))), U(a, "talents", o?.talents), U(a, "randomTalents", Xy(Ky(xy(e, "speciesRandomTalents", t)), o?.randomTalentCount)), U(a, "talentReplacements", Gy(xy(e, "speciesTalentReplacement", t))), U(a, "traits", Hy(xy(e, "speciesTraits", t))), rb(a, e, t), U(a, "careerTable", i.resolveCareerTable(t, void 0, void 0));
	let s = ib(e, a, i);
	return U(a, "subspecies", s.length > 0 ? s : void 0), a;
}
function rb(e, t, n) {
	U(e, "movement", Vy(xy(t, "speciesMovement", n))), U(e, "fate", Vy(xy(t, "speciesFate", n))), U(e, "resilience", Vy(xy(t, "speciesRes", n))), U(e, "extra", Vy(xy(t, "speciesExtra", n))), U(e, "age", By(xy(t, "speciesAge", n))), U(e, "height", Yy(xy(t, "speciesHeight", n))), U(e, "careerReplacements", qy(xy(t, "speciesCareerReplacements", n)));
}
function ib(e, t, n) {
	let r = xy(e, "subspecies", t.key);
	return G(r) ? Object.entries(r).flatMap(([r, i]) => r.trim() && G(i) ? [ab(e, t, r.trim(), i, n)] : []).sort(ub) : [];
}
function ab(e, t, n, r, i) {
	let a = {
		key: n,
		name: By(r.name) ?? n
	}, o = Jy(r.characteristics);
	o && U(a, "characteristics", Qy(t.characteristics, o)), ob(a, t, r), cb(a, t, r), lb(a, t, r), U(a, "careerReplacements", qy(xy(e, "speciesCareerReplacements", `${t.key}-${n}`)));
	let s = Gy(r.talentReplacement);
	return $y(t.talentReplacements, s) || U(a, "talentReplacements", s), U(a, "careerTable", i.resolveCareerTable(t.key, n, r.careerTable)), a;
}
function ob(e, t, n) {
	sb(e, "skills", t.skills ?? [], Hy(n.skills));
	let r = Uy(n.talents);
	sb(e, "talents", t.talents ?? [], r?.talents), sb(e, "traits", t.traits ?? [], Hy(n.speciesTraits));
}
function sb(e, t, n, r) {
	if (!r) return;
	let i = Zy(n, r);
	U(e, `${t}Added`, i.added), U(e, `${t}Removed`, i.removed);
}
function cb(e, t, n) {
	let r = Uy(n.talents), i = Xy(Ky(n.randomTalents), r?.randomTalentCount, t.randomTalents);
	$y(t.randomTalents, i) || U(e, "randomTalents", i);
}
function lb(e, t, n) {
	eb(e, "movement", t.movement, n.movement), eb(e, "fate", t.fate, n.fate), eb(e, "resilience", t.resilience, n.resilience), eb(e, "extra", t.extra, n.extra);
}
function ub(e, t) {
	return e.name.localeCompare(t.name);
}
//#endregion
//#region src/module/apps/species-builder/runtime-species/index.ts
var db, fb = [];
function pb() {
	db = yy(game.wfrp4e?.config), fb = [];
}
async function mb(e, t = []) {
	let n = by(db ?? yy(void 0), yy(game.wfrp4e?.config), new Set(e.map((e) => e.trim()).filter(Boolean)));
	for (let e of t) delete n.records.species[e];
	fb = tb(n, { resolveCareerTable: Oy });
}
async function hb() {
	return structuredClone(fb);
}
//#endregion
//#region src/module/apps/species-builder/career-tables.ts
var gb = "WFRP Customizer Generated Career Tables", _b = "WFRP Customizer Career Table Link Fallback", vb, yb = !1;
function bb(e, t = {}) {
	let n = t.force === !0;
	if (!Sb()) return Promise.resolve(Mb());
	let r = e ?? gy();
	return vb ? n && !yb ? vb.then(() => bb(r, { force: !0 })) : vb : (yb = n, vb = xb(r, n).finally(() => {
		vb = void 0, yb = !1;
	}), vb);
}
async function xb(e, t) {
	let n = performance.now(), r = Gv(e, await hb()).filter((e) => !Cb(e) || !wb(e.column)), i = r.some((e) => e.rows.some((e) => !e.journalUuid?.trim())) ? await jb() : void 0, a = r.map((e) => Kv({
		fallbackJournalUuid: i,
		flagScope: Y,
		spec: e
	})), o = (game.tables?.contents ?? []).filter(Tb), s = new Map(o.map((e) => [e.id, e])), c = ay(a, o.map((e) => ({
		id: e.id,
		source: e.toObject()
	})), Y, t), l, u = 0, d = 0;
	for (let e of c.entries) {
		if (e.action === "skip") {
			u += 1;
			continue;
		}
		if (e.action === "create") l ??= await Ab(), await Eb(e.source, l);
		else {
			let n = e.existingId ? s.get(e.existingId) : void 0;
			if (!n) throw Error("A generated career table changed during synchronization.");
			await Db(n, e.source, t);
		}
		d += 1;
	}
	for (let e of c.obsoleteIds) await s.get(e)?.delete();
	let f = {
		checked: a.length,
		elapsedMilliseconds: performance.now() - n,
		regenerated: d,
		removed: c.obsoleteIds.length,
		skipped: u
	};
	return Nb(f, t), f;
}
function Sb() {
	return game.user?.isGM === !0 && game.users?.activeGM?.id === game.user.id;
}
function Cb(e) {
	return e.rows.some((e) => e.journalUuid === "Compendium.wfrp4e-archives3.journals.JournalEntry.jnN5JqDCI8T1epzs.JournalEntryPage.yByG9MMGFjml7sRQ" || $v(e.journalUuid));
}
function wb(e) {
	return (game.tables?.contents ?? []).some((t) => !Tb(t) && t.getFlag("wfrp4e", "key") === "career" && t.getFlag("wfrp4e", "column") === e);
}
function Tb(e) {
	return G(K(e.toObject(), [
		"flags",
		Y,
		Hv
	]));
}
async function Eb(e, t) {
	if (!await RollTable.create({
		...e,
		folder: t.id
	})) throw Error("Foundry did not create a generated Species Builder career table.");
}
async function Db(e, t, n) {
	let r = K(t, [
		"flags",
		Y,
		Hv
	]);
	await e.update({
		displayRoll: t.displayRoll,
		[`flags.${Y}.${Hv}`]: r,
		"flags.wfrp4e.column": K(t, [
			"flags",
			"wfrp4e",
			"column"
		]),
		"flags.wfrp4e.key": K(t, [
			"flags",
			"wfrp4e",
			"key"
		]),
		formula: t.formula,
		img: t.img,
		name: t.name,
		replacement: t.replacement
	}), await Ob(e, t, n);
}
async function Ob(e, t, n) {
	let r = kb(e.toObject()), i = kb(t), a = [], o = [];
	i.forEach((e, t) => {
		let i = r[t], s = q(i, ["_id"]);
		s ? (n || Yv(i) !== Yv(e)) && a.push({
			...e,
			_id: s
		}) : o.push(e);
	}), await cy(e, {
		creates: o,
		deletedIds: r.slice(i.length).map((e) => q(e, ["_id"])).filter(Boolean),
		updates: a
	});
}
function kb(e) {
	let t = K(e, ["results"]);
	return Array.isArray(t) ? t.filter(G) : [];
}
async function Ab() {
	let e = game.folders.contents.find((e) => e.type === "RollTable" && e.name === gb);
	if (e) return e;
	let t = await Folder.create({
		name: gb,
		type: "RollTable"
	});
	if (!t) throw Error("Foundry did not create the generated career table folder.");
	return t;
}
async function jb() {
	let e = game.journal?.contents.find((e) => e.name === _b);
	if (e) return e.uuid;
	let t = await JournalEntry.create({
		name: _b,
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
function Mb() {
	return {
		checked: 0,
		elapsedMilliseconds: 0,
		regenerated: 0,
		removed: 0,
		skipped: 0
	};
}
function Nb(t, n) {
	e(`${Y} | ${n ? "Forced rebuild" : "Validation"} checked ${t.checked} Species Builder career table(s): ${t.skipped} skipped, ${t.regenerated} regenerated, ${t.removed} removed in ${t.elapsedMilliseconds.toFixed(1)} ms.`);
}
//#endregion
//#region src/module/foundry/document-guards.ts
function Pb(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
function Fb(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Item";
}
function Ib(e, t = "Expected a Foundry Actor.") {
	if (!Pb(e)) throw Error(t);
	return e;
}
function Lb(e, t = "Expected a Foundry Item.") {
	if (!Fb(e)) throw Error(t);
	return e;
}
function Rb(e, t, n = `Expected a Foundry ${t} Item.`) {
	let r = Lb(e, n);
	if (r.type !== t) throw Error(n);
	return r;
}
//#endregion
//#region src/module/foundry/drop-data.ts
function zb(e) {
	try {
		return JSON.parse(e);
	} catch {
		throw Error("Foundry drop data could not be read.");
	}
}
//#endregion
//#region src/module/apps/species-builder/item-drops.ts
async function Bb(e, t) {
	let n = zb(e);
	if (n.type !== "Item" || !n.uuid) throw Error(`Drop a Foundry ${t} item here.`);
	let r = Lb(await fromUuid(n.uuid), `Drop a Foundry ${t} item here.`);
	if (r.type !== t) throw Error(`Drop a Foundry ${t} item here.`);
	let i = {
		name: t === "career" && Wb(r) || r.name,
		type: t,
		uuid: r.uuid
	};
	if (t === "career") {
		let e = Gb(r);
		e && (i.careerJournalUuid = e);
	}
	let a = Ub(r);
	return a && (i.specification = a), r.img && (i.img = r.img), i;
}
async function Vb(e) {
	let t = zb(e);
	if (t.type !== "JournalEntry" && t.type !== "JournalEntryPage" || !t.uuid) throw Error("Drop a Foundry Journal Entry or Journal Entry Page here.");
	let n = await fromUuid(t.uuid);
	if (!Jb(n)) throw Error("Drop a Foundry Journal Entry or Journal Entry Page here.");
	return {
		name: n.name,
		uuid: n.uuid
	};
}
async function Hb(e) {
	Lb(await fromUuid(e), "The linked Foundry Item was not found.").sheet?.render(!0);
}
function Ub(e) {
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
function Wb(e) {
	let t = K(e.system, ["careergroup", "value"]);
	return typeof t == "string" ? t.trim() : "";
}
function Gb(e) {
	let t = K(e.system, ["description", "value"]);
	return typeof t == "string" ? /^@UUID\[([^\]]+)]{[^{}]+}$/.exec(Kb(t))?.[1]?.trim() ?? "" : "";
}
function Kb(e) {
	let t = e.trim();
	t = t.replaceAll(/<(p|div)>(?:\s|&nbsp;|<br\s*\/?>)*<\/\1>/gi, "").trim();
	let n = /^<(p|div)>([\S\s]*)<\/\1>$/i.exec(t);
	return n?.[2] !== void 0 && (t = n[2].trim()), qb(t.replaceAll(/<br\s*\/?>/gi, "").trim());
}
function qb(e) {
	return e.replaceAll("&nbsp;", " ").replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", "\"").replaceAll("&#39;", "'").trim();
}
function Jb(e) {
	return typeof e == "object" && !!e && "documentName" in e && (e.documentName === "JournalEntry" || e.documentName === "JournalEntryPage") && "name" in e && typeof e.name == "string" && "uuid" in e && typeof e.uuid == "string";
}
//#endregion
//#region src/module/apps/species-builder/random-talent-sources.ts
var Yb = {
	key: "talents",
	label: "Talents - Character Creation"
};
function Xb() {
	let e = /* @__PURE__ */ new Map();
	e.set(Yb.key, Yb);
	for (let t of game.tables?.contents ?? []) {
		let n = t.getFlag("wfrp4e", "key");
		if (typeof n != "string" || !n.trim()) continue;
		let r = Zb(n, t);
		e.set(n, {
			key: n,
			label: r
		});
	}
	return [...e.values()].sort(Qb);
}
function Zb(e, t) {
	let n = game.wfrp4e?.tables?.findTable?.(e);
	return (G(n) && typeof n.name == "string" ? n.name : t.name).trim() || e;
}
function Qb(e, t) {
	return e.key === Yb.key ? -1 : t.key === Yb.key ? 1 : e.label.localeCompare(t.label);
}
//#endregion
//#region src/module/apps/species-builder/world-table/journals.ts
var $b = "generatedSpeciesJournal", ex = "WFRP Customizer Species Journals";
async function tx(e) {
	let t = game.journal?.contents ?? [], n = nx(t), r, i = [];
	for (let a of e.rows) {
		let e = rx(a.journalUuid, a.speciesKey, t) || n.get(a.speciesKey)?.uuid;
		if (!e) {
			r ??= await ax();
			let t = await JournalEntry.create({
				flags: { [Y]: { [$b]: { speciesKey: a.speciesKey } } },
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
function nx(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = ix(n);
		if (e) {
			if (t.has(e)) throw Error(`Multiple Species Builder Journals exist for "${e}". Remove the duplicate and retry.`);
			t.set(e, n);
		}
	}
	return t;
}
function rx(e, t, n) {
	let r = e?.trim() ?? "";
	if (!r) return "";
	let i = n.find((e) => e.uuid === r);
	if (!i) return r.startsWith("JournalEntry.") && r.split(".").length === 2 ? "" : r;
	let a = ix(i);
	return a && a !== t ? "" : r;
}
function ix(e) {
	let t = e.getFlag(Y, $b);
	return G(t) ? q(t, ["speciesKey"]).trim() : "";
}
async function ax() {
	let e = game.folders.contents.find((e) => e.type === "JournalEntry" && e.name === ex);
	if (e) return e;
	let t = await Folder.create({
		name: ex,
		type: "JournalEntry"
	});
	if (!t) throw Error("Foundry did not create the generated Species Journal folder.");
	return t;
}
//#endregion
//#region src/module/apps/species-builder/world-table/persistence.ts
var ox = "species", sx = "tableSettings";
async function cx(e) {
	let t = await tx(e), n = Ku(t, Y);
	return e.ownership === "managed" ? await fx(t, n) : await dx(t, n);
}
async function lx(e) {
	let t = game.settings.get(Zg, sx);
	if (!G(t)) throw Error("WFRP table settings are unavailable; the Species table was not registered.");
	await game.settings.set(Zg, sx, {
		...t,
		[ox]: e
	});
}
function ux(e) {
	return e.getFlag(Y, Iu) === !0;
}
async function dx(e, t) {
	if (e.ownership === "external") {
		let t = e.tableId ? game.tables?.get(e.tableId) : void 0;
		if (!t || ux(t)) throw Error("The source Species table changed. Reload before saving a managed copy.");
	}
	if ((game.tables?.contents ?? []).some(ux)) throw Error("A managed Species table already exists. Reload before saving.");
	let n = await RollTable.create(t);
	if (!n) throw Error("Foundry did not create the managed Species table.");
	return n;
}
async function fx(e, t) {
	let n = e.tableId ? game.tables?.get(e.tableId) : void 0;
	if (!n || !ux(n)) throw Error("The managed Species table changed. Reload before saving again.");
	let r = Array.isArray(t.results) ? t.results.filter(G) : [];
	return await n.update({
		displayRoll: t.displayRoll,
		[`flags.${Y}.${Iu}`]: !0,
		[`flags.${Zg}.key`]: ox,
		formula: t.formula,
		name: t.name,
		replacement: t.replacement
	}), await px(n, e.rows, r), n;
}
async function px(e, t, n) {
	let r = e.toObject(), i = Array.isArray(r.results) ? r.results.filter(G) : [], a = new Set(i.map((e) => q(e, ["_id"]))), o = /* @__PURE__ */ new Set(), s = [], c = [];
	n.forEach((e, n) => {
		let r = mx(t[n], i, a, o);
		r ? (o.add(r), s.push({
			...e,
			_id: r
		})) : c.push(e);
	}), await cy(e, {
		creates: c,
		deletedIds: [...a].filter((e) => e && !o.has(e)),
		updates: s
	});
}
function mx(e, t, n, r) {
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
var hx = "species", gx = "tableSettings";
function _x() {
	let e = gy(), t = new Set(e.definitions.map((e) => e.key)), n = yx().filter((e) => !t.has(e.key)), r = Ru(n, e.definitions), i = game.tables?.contents ?? [], a = bx(), o = xx(i, i.filter(ux), a);
	return {
		draft: o ? Sx(o, r, a[0] === o.id) : Tx(),
		runtimeOptions: n
	};
}
async function vx(e, t) {
	let n = await cx(e);
	if (t) try {
		await lx(n.id);
	} catch (e) {
		return {
			..._x(),
			registrationError: e instanceof Error ? e.message : "The Species table could not be registered."
		};
	}
	return _x();
}
function yx() {
	let e = game.wfrp4e?.config?.species;
	return G(e) ? Object.entries(e).flatMap(([e, t]) => {
		let n = typeof t == "string" ? t.trim() : "";
		return e.trim() && n ? [{
			key: e.trim(),
			label: n
		}] : [];
	}) : [];
}
function bx() {
	let e = game.settings.get(Zg, gx), t = G(e) ? e[hx] : void 0;
	return typeof t == "string" ? t.split(",").map((e) => e.trim()).filter(Boolean) : [];
}
function xx(e, t, n) {
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
	return e.find((e) => e.getFlag(Zg, "key") === hx);
}
function Sx(e, t, n) {
	let r = e.toObject(), i = (Array.isArray(r.results) ? r.results : []).flatMap((e) => Cx(e, t));
	return i.sort((e, t) => wx(e.source) - wx(t.source)), {
		isRegistered: n,
		name: e.name,
		ownership: ux(e) ? "managed" : "external",
		requiresLinkRepair: i.some((e) => e.requiresLinkRepair),
		rows: i.map(({ row: e }) => e),
		tableId: e.id
	};
}
function Cx(e, t) {
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
function wx(e) {
	let t = K(e, ["range"]), n = Array.isArray(t) ? Number(t[0]) : 0;
	return Number.isInteger(n) ? n : 0;
}
function Tx() {
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
function Ex(e, t) {
	return t.uuid ? t.uuid : t._id && e.getUuid ? e.getUuid(t._id) : "";
}
function Dx(e) {
	return e.documentName === "Item" || q(e, ["metadata", "type"]) === "Item" || q(e, ["metadata", "documentName"]) === "Item";
}
function Ox(e) {
	return e.documentName === "Actor" || q(e, ["metadata", "type"]) === "Actor" || q(e, ["metadata", "documentName"]) === "Actor";
}
function kx(e) {
	return e.documentName === "RollTable" || q(e, ["metadata", "type"]) === "RollTable" || q(e, ["metadata", "documentName"]) === "RollTable";
}
function Ax(e) {
	return Array.isArray(e) ? e.filter(Mx) : G(e) && Array.isArray(e.contents) ? e.contents.filter(Mx) : Nx(e) ? [...e].flatMap((e) => {
		let t = Array.isArray(e) ? e[1] : e;
		return Mx(t) ? [t] : [];
	}) : [];
}
function jx() {
	return new Promise((e) => {
		globalThis.setTimeout(e, 0);
	});
}
function Mx(e) {
	return G(e);
}
function Nx(e) {
	return G(e) && Symbol.iterator in e;
}
//#endregion
//#region src/module/apps/species-builder/validation/table-results.ts
function Px(e, t) {
	let n = Ix(e);
	if (n.reason) return Wx(n.reason);
	let r = n.texts.filter((e) => !t.has(Vx(e)));
	return r.length > 0 ? Wx(`these result labels do not match Talent Items exactly: ${Hx(r).join(", ")}`) : Ux();
}
function Fx(e, t) {
	let n = Ix(e);
	if (n.reason) return Wx(n.reason);
	let r = n.texts.filter((e) => !t.has(e));
	return r.length > 0 ? Wx(`these result labels do not match tier-1 Career groups exactly: ${Hx(r).join(", ")}`) : Ux();
}
function Ix(e) {
	if (!G(e)) return {
		reason: "the table could not be found",
		texts: []
	};
	if (Array.isArray(e.columns)) return {
		reason: "the table key resolves to multiple columns instead of one RollTable",
		texts: []
	};
	let t = Bx(e.results);
	if (t.length === 0) return {
		reason: "the table has no results",
		texts: []
	};
	let n = t.map(Rx);
	return n.filter((e) => !e).length > 0 ? {
		reason: "one or more results have no usable WFRP result text",
		texts: n
	} : { texts: n };
}
function Lx(e) {
	return /\{(.+?)\}/u.exec(e)?.[1] ?? e;
}
function Rx(e) {
	if (!G(e)) return "";
	let t = e.type === "document" ? zx(e) : e.description;
	return typeof t == "string" ? Lx(t) : "";
}
function zx(e) {
	let t = e.documentUuid, n = e.name;
	return typeof t == "string" && typeof n == "string" ? `@UUID[${t}]{${n}}` : "";
}
function Bx(e) {
	return Array.isArray(e) ? e : G(e) && Symbol.iterator in e ? [...e] : [];
}
function Vx(e) {
	return e.split("(")[0]?.trim() ?? "";
}
function Hx(e) {
	return [...new Set(e.map((e) => e || "(blank result)"))];
}
function Ux() {
	return { readyForCharacterCreation: !0 };
}
function Wx(e) {
	return {
		readyForCharacterCreation: !1,
		reason: e
	};
}
//#endregion
//#region src/module/apps/species-builder/validation/career-table.ts
function Gx(e, t, n, r, i = /* @__PURE__ */ new Map()) {
	let a = Kx(e, t, typeof n == "string" ? n.trim() : "");
	for (let e of a) {
		let t = Jx(e);
		if (!t) continue;
		let n = Yx(t, e);
		if (n) return qx(e, n, r);
	}
	for (let e of a) {
		let t = i.get(e);
		if (t) return {
			readyForCharacterCreation: !1,
			reason: `career table column ${e} is not active in this world; import “${t.name}” from “${t.packTitle}”`,
			requiresWorldTableImport: !0
		};
	}
	return qx(a.at(-1) ?? e, void 0, r);
}
function Kx(e, t, n) {
	let r = t ? [
		n,
		`${e}-${t}`,
		e
	] : [e];
	return e === "human" && r.push("human-reiklander"), [...new Set(r.filter(Boolean))];
}
function qx(e, t, n) {
	let r = Fx(t, n);
	return r.readyForCharacterCreation ? r : {
		readyForCharacterCreation: !1,
		reason: `career table column ${e} is not ready: ${r.reason ?? "invalid table"}`
	};
}
function Jx(e) {
	return game.wfrp4e?.tables?.findTable?.("career", e);
}
function Yx(e, t) {
	return !G(e) || !Array.isArray(e.columns) ? e : e.columns.find((e) => Xx(e) === t);
}
function Xx(e) {
	if (!G(e) || typeof e.getFlag != "function") return "";
	let t = e.getFlag.call(e, "wfrp4e", "column");
	return typeof t == "string" ? t : "";
}
//#endregion
//#region src/module/apps/species-builder/validation/runtime-grants.ts
function Zx(e, t, n, r) {
	let i = $x(e.randomTalents, t.randomTalentSources, n);
	eS(e.skills, "skills", t.skills, n, r), tS(e.talents, i, t, n, r), eS(e.traits, "traits", t.traits, n, r), rS(e.talentReplacement, t.talents, r);
}
function Qx(e, t, n) {
	if (e) {
		if (!G(e)) {
			n.push("Career replacements are not an object");
			return;
		}
		for (let [r, i] of Object.entries(e)) {
			if (t.has(r) || n.push(`Career replacement source ${lS(r)} does not match exactly`), !Array.isArray(i) || i.length === 0) {
				n.push(`Career replacements for ${lS(r)} must be a non-empty array`);
				continue;
			}
			for (let e of i) (typeof e != "string" || !t.has(e.trim())) && n.push(`Career replacement ${lS(e)} does not match exactly`);
		}
	}
}
function $x(e, t, n) {
	let r = e || { talents: 0 };
	if (!G(r)) return n.push("random Talents configuration is not an object"), /* @__PURE__ */ new Set();
	let i = new Set(Object.keys(r));
	for (let [e, i] of Object.entries(r)) {
		oS(i) || n.push(`random Talent count for ${lS(e)} is not a non-negative whole number`);
		let r = t.get(e);
		r ? r.readyForCharacterCreation || n.push(`random Talent table ${lS(e)} is not ready: ${r.reason ?? "invalid results"}`) : n.push(`random Talent table is missing for ${lS(e)}`);
	}
	return i;
}
function eS(e, t, n, r, i) {
	if (!Array.isArray(e)) {
		r.push(`${t} must be an array of names`);
		return;
	}
	let a = e.filter((e) => typeof e != "string" || !n.has(sS(e)));
	a.length > 0 && i.push(`${t} do not match available Items exactly: ${cS(a)}`);
}
function tS(e, t, n, r, i) {
	if (!Array.isArray(e)) {
		r.push("talents must be an array of names or numeric random Talent counts");
		return;
	}
	for (let a of e) {
		if (aS(a)) {
			oS(a) || r.push(`numeric Talent grant ${lS(a)} is not a non-negative whole number`), nS("talents", t, n, r);
			continue;
		}
		if (typeof a != "string") {
			r.push(`Talent grant ${lS(a)} is not a name or numeric count`);
			continue;
		}
		let e = a.includes(",") ? a.split(",") : [a];
		for (let o of e) {
			let e = o.trim(), s = a.includes(",") ? iS(e) : void 0;
			s ? nS(s.key, t, n, r) : n.talents.has(sS(e)) || i.push(`Talent ${lS(e)} does not match an available Item exactly`);
		}
	}
}
function nS(e, t, n, r) {
	if (!t.has(e)) {
		r.push(`Talent grant uses random table ${lS(e)} without configuring that key`);
		return;
	}
	let i = n.randomTalentSources.get(e);
	i ? i.readyForCharacterCreation || r.push(`Talent grant uses unready random table ${lS(e)}`) : r.push(`Talent grant uses missing random table ${lS(e)}`);
}
function rS(e, t, n) {
	if (e) {
		if (!G(e)) {
			n.push("Talent replacements are not an object");
			return;
		}
		for (let [r, i] of Object.entries(e)) t.has(sS(r)) || n.push(`Talent replacement source ${lS(r)} does not match exactly`), (typeof i != "string" || !t.has(sS(i))) && n.push(`Talent replacement ${lS(i)} does not match exactly`);
	}
}
function iS(e) {
	let t = /random\[(\d)\](?:\[?([a-zA-Z-_]+)\])?/iu.exec(e);
	return t ? { key: t[2] ?? "talents" } : void 0;
}
function aS(e) {
	return typeof e == "number" && Number.isFinite(e) || typeof e == "string" && e.trim() !== "" && Number.isFinite(Number(e));
}
function oS(e) {
	return aS(e) && Number.isInteger(Number(e)) && Number(e) >= 0;
}
function sS(e) {
	return e.split("(")[0]?.trim() ?? "";
}
function cS(e) {
	return [...new Set(e.map(lS))].join(", ");
}
function lS(e) {
	return `“${typeof e == "string" ? e.trim() || "(blank)" : String(e)}”`;
}
//#endregion
//#region src/module/apps/species-builder/validation/runtime-species.ts
var uS = Object.values(W), dS = [
	["speciesMovement", "movement"],
	["speciesFate", "fate"],
	["speciesRes", "resilience"],
	["speciesExtra", "extra points"]
];
function fS(e, t, n = []) {
	let r = G(e.species) ? e.species : {}, i = new Set(n.map((e) => e.trim()).filter(Boolean));
	return Object.entries(r).filter(([e]) => !i.has(e)).map(([n, r]) => {
		let i = typeof r == "string" && r.trim() ? r.trim() : n, a = pS(e, n, r, t), o = {
			key: n,
			name: i,
			readyForCharacterCreation: a.errors.length === 0
		};
		return a.errors.length > 0 && (o.errorReasons = a.errors, o.reason = mS(a.errors)), a.requiresWorldTableImport && (o.requiresWorldTableImport = !0), a.warnings.length > 0 && (o.warningReason = mS(a.warnings), o.warningReasons = a.warnings), o;
	}).sort((e, t) => e.name.localeCompare(t.name));
}
function pS(e, t, n, r) {
	let i = {
		errors: [],
		requiresWorldTableImport: !1,
		warnings: []
	};
	t.trim() || i.errors.push("species key is missing"), (typeof n != "string" || !n.trim()) && i.errors.push("display name is missing");
	let a = bS(e, t);
	Zx(a, r, i.errors, i.warnings);
	let o = TS(e, "speciesCharacteristics", t);
	return gS(o, i.errors), _S(SS(e, t), i.errors), vS(e, t, i.warnings), Qx(TS(e, "speciesCareerReplacements", t), r.careerGroups, i.warnings), i.requiresWorldTableImport ||= yS(r.validateCareerTable(t, void 0, void 0), i.errors), hS(e, t, o, a, r, i), i;
}
function mS(e) {
	let t = e[0] ?? "runtime configuration is incomplete", n = e.length - 1;
	return n > 0 ? `${t} (+${n} more)` : t;
}
function hS(e, t, n, r, i, a) {
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
			(typeof c.name != "string" || !c.name.trim()) && s.warnings.push("display name is missing"), gS(c.characteristics || n, s.errors), _S(CS(e, t, c), s.errors), Zx(xS(c, r), i, s.errors, s.warnings), Qx(TS(e, "speciesCareerReplacements", `${t}-${o}`), i.careerGroups, s.warnings), s.requiresWorldTableImport ||= yS(i.validateCareerTable(t, o, c.careerTable), s.errors), a.errors.push(...s.errors.map((e) => `subspecies ${o}: ${e}`)), a.warnings.push(...s.warnings.map((e) => `subspecies ${o}: ${e}`)), a.requiresWorldTableImport ||= s.requiresWorldTableImport;
		}
	}
}
function gS(e, t) {
	if (!G(e)) {
		t.push("characteristic formulas are missing");
		return;
	}
	let n = uS.filter((t) => {
		let n = e[t];
		return typeof n != "string" || !Jf(n);
	});
	n.length > 0 && t.push(`characteristic formulas are invalid or missing for ${n.join(", ")}`);
}
function _S(e, t) {
	for (let [n, r] of Object.entries(e)) (!Number.isInteger(r) || Number(r) < 0) && t.push(`${n} is missing or not a non-negative whole number`);
}
function vS(e, t, n) {
	let r = TS(e, "speciesAge", t);
	(typeof r != "string" || !qf(r, !1)) && n.push("age formula is missing or invalid");
	let i = TS(e, "speciesHeight", t);
	(!G(i) || typeof i.die != "string" || !qf(i.die, !0) || !ES(i.feet) || !ES(i.inches)) && n.push("height needs a valid die formula and non-negative whole feet and inches");
}
function yS(e, t) {
	return e.readyForCharacterCreation || t.push(e.reason ?? "Career table is not ready"), !!e.requiresWorldTableImport;
}
function bS(e, t) {
	return {
		randomTalents: TS(e, "speciesRandomTalents", t),
		skills: TS(e, "speciesSkills", t),
		talentReplacement: TS(e, "speciesTalentReplacement", t) || {},
		talents: TS(e, "speciesTalents", t),
		traits: TS(e, "speciesTraits", t) || []
	};
}
function xS(e, t) {
	return {
		randomTalents: e.randomTalents || t.randomTalents,
		skills: e.skills || t.skills,
		talentReplacement: e.talentReplacement || t.talentReplacement,
		talents: e.talents || t.talents,
		traits: e.speciesTraits || t.traits
	};
}
function SS(e, t) {
	return Object.fromEntries(dS.map(([n, r]) => [r, TS(e, n, t)]));
}
function CS(e, t, n) {
	return Object.fromEntries(dS.map(([r, i]) => [i, n[wS(r)] ?? TS(e, r, t)]));
}
function wS(e) {
	return e === "speciesRes" ? "resilience" : e.replace("species", "").toLowerCase();
}
function TS(e, t, n) {
	let r = e[t];
	return G(r) ? r[n] : void 0;
}
function ES(e) {
	return typeof e == "number" && Number.isInteger(e) && e >= 0;
}
//#endregion
//#region src/module/apps/species-builder/validation/catalog.ts
var DS = [
	"skill",
	"talent",
	"trait"
], OS = [
	"name",
	"type",
	"system.careergroup.value",
	"system.level.value"
], kS = [
	"name",
	"flags.wfrp4e.key",
	"flags.wfrp4e.column"
];
async function AS(e = []) {
	let t = G(game.wfrp4e?.config) ? game.wfrp4e.config : {}, n = {
		careerGroups: /* @__PURE__ */ new Map(),
		itemNames: {
			skill: /* @__PURE__ */ new Map(),
			talent: /* @__PURE__ */ new Map(),
			trait: /* @__PURE__ */ new Map()
		}
	};
	for (let e of game.items?.contents ?? []) MS(n, e);
	for (let e of NS()) {
		if (!e.getIndex) continue;
		let t = await e.getIndex({ fields: OS });
		for (let e of Ax(t)) MS(n, e);
	}
	let r = await jS(), i = PS(t, n.itemNames.talent), a = new Set(n.careerGroups.keys());
	return {
		careerGroupNames: HS(n.careerGroups),
		itemBaseNames: {
			skill: HS(n.itemNames.skill),
			talent: HS(n.itemNames.talent),
			trait: HS(n.itemNames.trait)
		},
		randomTalentSources: i,
		runtimeSpecies: fS(t, {
			careerGroups: a,
			randomTalentSources: new Map(i.map((e) => [e.key, e])),
			skills: new Set(n.itemNames.skill.keys()),
			talents: new Set(n.itemNames.talent.keys()),
			traits: new Set(n.itemNames.trait.keys()),
			validateCareerTable: (e, t, n) => Gx(e, t, n, a, r)
		}, e)
	};
}
async function jS() {
	let e = /* @__PURE__ */ new Map();
	for (let t of (game.packs ?? []).filter(kx)) {
		if (!t.getIndex) continue;
		let n = await t.getIndex({ fields: kS });
		for (let r of Ax(n)) {
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
function MS(e, t) {
	if (!G(t) || typeof t.type != "string" || typeof t.name != "string") return;
	if (RS(t.type)) {
		BS(e.itemNames[t.type], zS(t.name));
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
	typeof r == "string" && BS(e.careerGroups, r);
}
function NS() {
	let e = game.wfrp4e?.tags?.getPacksWithTag?.([...DS, "career"]);
	return e ? [...new Set(e)].filter(Dx) : (game.packs ?? []).filter(Dx);
}
function PS(e, t) {
	let n = [];
	for (let r of FS(e)) {
		let e = game.wfrp4e?.tables?.findTable?.(r);
		if (!e) continue;
		let i = Px(e, new Set(t.keys()));
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
function FS(e) {
	let t = new Set(["talents"]);
	for (let e of game.tables?.contents ?? []) VS(t, e.getFlag("wfrp4e", "key"));
	let n = game.settings.get("wfrp4e", "tableSettings");
	G(n) && Object.keys(n).forEach((e) => t.add(e)), IS(e.speciesRandomTalents, t);
	let r = e.subspecies;
	if (G(r)) {
		for (let e of Object.values(r)) if (G(e)) for (let n of Object.values(e)) G(n) && LS(n.randomTalents, t);
	}
	return [...t];
}
function IS(e, t) {
	G(e) && Object.values(e).forEach((e) => LS(e, t));
}
function LS(e, t) {
	G(e) && Object.keys(e).forEach((e) => t.add(e));
}
function RS(e) {
	return DS.some((t) => t === e);
}
function zS(e) {
	return e.split("(", 1)[0]?.trim() ?? "";
}
function BS(e, t) {
	let n = t.trim();
	n && !e.has(n) && e.set(n, n);
}
function VS(e, t) {
	typeof t == "string" && t.trim() && e.add(t.trim());
}
function HS(e) {
	return [...e.values()].sort((e, t) => e.localeCompare(t));
}
//#endregion
//#region src/module/apps/species-builder/wound-formula-traits.ts
var US = "WFRP Customizer Generated Species Traits";
async function WS(t = gy()) {
	let n = Zc(t, await hb()), r = await GS();
	await KS(r);
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
async function GS() {
	let e = game.folders.contents.find((e) => e.type === "Item" && e.name === US);
	if (e) return e;
	let t = await Folder.create({
		name: US,
		type: "Item"
	});
	if (!t) throw Error("Foundry did not create the generated Species Trait folder.");
	return t;
}
async function KS(e) {
	let t = (game.items?.contents ?? []).filter((t) => t.folder?.id === e.id || qS(t));
	for (let e of t) await e.delete();
}
function qS(e) {
	return G(K(e.toObject(), [
		"flags",
		Y,
		Xc
	]));
}
//#endregion
//#region src/module/apps/species-builder/foundry-bridge.ts
async function JS(e, t) {
	let n = await _y(e);
	if (!t) return { settings: n };
	let r = (await Promise.allSettled([bb(n), WS(n)])).flatMap((e) => e.status === "rejected" ? [XS(e.reason)] : []);
	return r.length > 0 ? {
		settings: n,
		syncError: r.join(" ")
	} : { settings: n };
}
var YS = {
	loadSettings: async () => gy(),
	loadRandomTalentSources: async () => Xb(),
	loadRuntimeSpecies: hb,
	loadValidationCatalog: AS,
	loadSpeciesTable: async () => _x(),
	openItemSheet: Hb,
	resolveItemDrop: Bb,
	resolveJournalDrop: Vb,
	saveSettings: JS,
	saveSpeciesTable: vx
};
function XS(e) {
	return e instanceof Error ? e.message : "Generated document synchronization failed.";
}
//#endregion
//#region src/module/apps/species-builder/reload-confirmation.ts
function ZS() {
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
var QS = class extends Vv {
	#e = !1;
	getApplicationProps() {
		return {};
	}
	getVueProps() {
		return {
			...this.getApplicationProps(),
			bridge: YS,
			onSettingsSaved: () => {
				this.#e = !0;
			}
		};
	}
	async _preClose(e) {
		let t = this.#e;
		this.#e = !1, t && await ZS() && window.location.reload(), await super._preClose(e);
	}
}, $S = class extends QS {
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
}, eC = ["onKeydown"], tC = {
	key: 0,
	class: "dui-modal-box"
}, nC = { id: "species-builder-delete-message" }, rC = { class: "dui-modal-action" }, iC = /* @__PURE__ */ M({
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
		}, [e.message ? (F(), I("div", tC, [
			n[2] ||= R("h2", { id: "species-builder-delete-title" }, "Confirm Deletion", -1),
			R("p", nC, O(e.message), 1),
			R("div", rC, [R("button", {
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
		}, "Close")], -1)], 40, eC));
	}
});
//#endregion
//#region src/view/apps/species-builder/components/deletion.ts
function aC(e) {
	let t = /* @__PURE__ */ k(null);
	function n() {
		let n = e.selectedDefinition.value;
		n && (t.value = {
			kind: "species",
			message: `Delete species "${oC(n)}"?`
		});
	}
	function r(n) {
		let r = e.selectedDefinition.value?.subspecies?.[n];
		r && (t.value = {
			index: n,
			kind: "subspecies",
			message: `Delete subspecies "${oC(r)}"?`
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
function oC(e) {
	return e.name.trim() || e.key.trim() || "Untitled Species";
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/editor-page-events.ts
function sC(e, t) {
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
var cC = { class: "dui-list" }, lC = [
	"aria-label",
	"disabled",
	"title",
	"onClick"
], uC = ["src"], dC = {
	key: 1,
	"aria-hidden": "true",
	class: "fa-solid fa-scroll"
}, fC = {
	key: 1,
	class: "dui-list-row"
}, pC = /* @__PURE__ */ M({
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
		return (t, n) => (F(), I("ul", cC, [e.documents.length > 0 ? (F(!0), I(P, { key: 0 }, N(e.documents, (t) => (F(), I("li", {
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
		}, null, 8, uC)) : (F(), I("i", dC)), R("span", null, O(t.name), 1)], 8, lC)]))), 128)) : (F(), I("li", fC, [n[0] ||= R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-arrow-down"
		}, null, -1), R("span", null, O(e.emptyLabel), 1)]))]));
	}
}), mC = { class: "dui-card-body dui-fieldset" }, hC = ["for"], gC = ["id", "value"], _C = ["for"], vC = ["id", "value"], yC = { class: "dui-card-actions" }, bC = /* @__PURE__ */ M({
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
		}, [R("fieldset", mC, [
			s[6] ||= R("legend", { class: "dui-fieldset-legend" }, "Manual document entry", -1),
			R("label", {
				class: "dui-label",
				for: A(r)
			}, "Document type", 8, hC),
			R("select", {
				id: A(r),
				class: "dui-select",
				value: e.documentType,
				onChange: a
			}, [...s[4] ||= [Ea("<option value=\"auto\">Auto</option><option value=\"Item\">Item</option><option value=\"Actor\">Actor</option><option value=\"JournalEntry\">Journal Entry</option><option value=\"JournalEntryPage\">Journal Page</option>", 5)]], 40, gC),
			R("label", {
				class: "dui-label",
				for: A(i)
			}, "UUID or drop JSON", 8, _C),
			R("input", {
				id: A(i),
				class: "dui-input",
				value: e.documentValue,
				placeholder: "Compendium.package.pack.id",
				type: "text",
				onInput: o
			}, null, 40, vC),
			R("div", yC, [
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
}), xC = ["aria-label", "aria-disabled"], SC = { key: 0 }, CC = {
	key: 1,
	class: "dui-alert dui-alert-info",
	role: "status"
}, wC = { key: 2 }, TC = {
	key: 4,
	class: "dui-card-actions"
}, EC = ["disabled"], DC = /* @__PURE__ */ M({
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
				R("div", null, [Gr(t.$slots, "prompt", {}, () => [R("strong", null, O(e.title), 1), e.description ? (F(), I("p", SC, O(e.description), 1)) : V("", !0)])]),
				R("span", { class: D(["dui-badge", { "dui-badge-info": o.value }]) }, O(o.value ? "Release to add" : "Drop zone"), 3)
			], 2)) : o.value ? (F(), I("div", CC, [n[4] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-arrow-down"
			}, null, -1), R("span", null, "Release to add " + O(e.title.toLowerCase()) + ".", 1)])) : V("", !0),
			p.value ? (F(), I("div", wC, [Gr(t.$slots, "default")])) : V("", !0),
			e.showDocuments ? (F(), L(pC, {
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
			g.value ? (F(), I("div", TC, [R("button", {
				class: "dui-btn dui-btn-ghost dui-btn-sm",
				disabled: e.disabled,
				type: "button",
				onClick: Zo(C, ["stop"])
			}, O(s.value ? "Close Manual Entry" : "Manual Entry"), 9, EC)])) : V("", !0),
			s.value && !e.disabled ? (F(), L(bC, {
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
		], 2)], 16, xC));
	}
}), OC = [
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
], kC = [
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
], AC = [
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
], jC = {
	skills: "Skills granted during character creation. Drop Skill items to link their sheets, or add names manually.",
	talents: "Talents granted during character creation. Multiple choices in one grant become WFRP's comma-separated either/or entry.",
	traits: "Traits granted by this species or subspecies. Drop Trait items to link their sheets, or add names manually."
};
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/validation-presentation.ts
function MC(e) {
	return typeof e == "string" ? [e] : e;
}
function NC(e, t, n, r) {
	return e.filter((e) => MC(t).includes(e.field ?? "") && e.rowIndex === n && e.choiceIndex === r);
}
function PC(e, t) {
	return e.filter((e) => MC(t).includes(e.field ?? ""));
}
function FC(e, t) {
	return e.filter((e) => e.rowIndex === t);
}
function IC(e, t, n) {
	return e.filter((e) => MC(t).includes(e.field ?? "") && e.rowIndex === n);
}
function LC(e, t, n) {
	return e.filter((e) => e.rowIndex === t && e.choiceIndex === n);
}
function RC(e) {
	return e.filter((e) => e.rowIndex === void 0 && e.field === void 0);
}
function zC(e) {
	return e.filter((e) => e.rowIndex === void 0);
}
function BC(e) {
	return [...new Set(e.map((e) => e.message))];
}
function VC(e) {
	return e.some((e) => e.severity !== "warning") ? "error" : e.length > 0 ? "warning" : void 0;
}
function HC(e) {
	return VC(e) === "error";
}
function $(e, t, n) {
	let r = VC(e);
	return r === "error" ? t : r === "warning" ? n : void 0;
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/components/LinkedItemDropValue.vue?vue&type=script&setup=true&lang.ts
var UC = [
	"aria-invalid",
	"disabled",
	"title",
	"value"
], WC = {
	key: 3,
	class: "app:grid app:gap-1",
	role: "alert"
}, GC = /* @__PURE__ */ M({
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
			return BC(n.issues);
		}
		return (t, n) => (F(), L(DC, {
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
				"aria-invalid": A(HC)(e.issues) || void 0,
				class: D(["dui-input", A($)(e.issues, "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				title: e.inputTitle,
				value: e.value.name,
				type: "text",
				onInput: n[0] ||= (e) => r("updateName", i(e))
			}, null, 42, UC)) : e.value.name ? (F(), I("div", {
				key: 1,
				class: D(["dui-alert", A($)(e.issues, "dui-alert-error", "dui-alert-warning") ?? "dui-alert-info"])
			}, [R("strong", null, O(e.value.name), 1), n[3] ||= R("span", null, "Stored by name. Drop the matching Item to link its sheet.", -1)], 2)) : (F(), I("div", {
				key: 2,
				class: D(["dui-alert", A($)(e.issues, "dui-alert-error", "dui-alert-warning")])
			}, [...n[4] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-arrow-down"
			}, null, -1), R("span", null, "No item selected.", -1)]], 2)), a().length ? (F(), I("div", WC, [(F(!0), I(P, null, N(a(), (t) => (F(), I("p", {
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
}), KC = ["disabled", "title"], qC = /* @__PURE__ */ M({
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
		return (t, r) => (F(), I("li", { class: D(["dui-list-row", A($)(e.issues, "app:border app:border-error", "app:border app:border-warning")]) }, [z(GC, {
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
		}, null, -1), B(" Remove ", -1)]], 8, KC)], 2));
	}
}), JC = { class: "app:grid app:gap-3" }, YC = { class: "dui-card-body" }, XC = { class: "app:flex app:items-start app:justify-between app:gap-4" }, ZC = { class: "dui-card-title" }, QC = { class: "app:m-0" }, $C = { class: "dui-card-actions app:items-center" }, ew = { class: "dui-badge" }, tw = [
	"disabled",
	"title",
	"onClick"
], nw = {
	key: 1,
	class: "dui-join"
}, rw = ["disabled"], iw = ["disabled"], aw = {
	key: 1,
	class: "dui-list"
}, ow = {
	key: 2,
	class: "dui-list"
}, sw = { class: "dui-badge dui-badge-ghost" }, cw = { class: "dui-list-col-grow" }, lw = { key: 0 }, uw = { class: "dui-list" }, dw = { class: "dui-join" }, fw = ["disabled", "onClick"], pw = ["disabled", "onClick"], mw = {
	key: 3,
	class: "dui-alert",
	role: "status"
}, hw = /* @__PURE__ */ M({
	__name: "ArrayFields",
	props: {
		fields: {},
		isDisabled: { type: Boolean },
		issues: {},
		values: {}
	},
	setup(e) {
		let t = e, n = wm(), r = H(() => AC.filter((e) => !t.fields || t.fields.includes(e.field)));
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
			return NC(t.issues, e);
		}
		function l(e) {
			return BC(c(e));
		}
		function u(e, n) {
			return IC(t.issues, e, n);
		}
		function d(e, n) {
			return NC(t.issues, "talents", e, n);
		}
		return (t, a) => (F(), I("div", JC, [(F(!0), I(P, null, N(r.value, (t) => (F(), I("section", {
			key: t.field,
			class: "dui-card dui-card-border dui-card-sm"
		}, [R("div", YC, [
			R("header", XC, [R("div", null, [R("h3", ZC, O(t.label), 1), R("p", QC, O(A(jC)[t.field]), 1)]), R("div", $C, [R("span", ew, O(s(t.field)), 1), t.field === "talents" ? (F(), I("div", nw, [R("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				disabled: e.isDisabled,
				title: "Add one guaranteed Talent",
				type: "button",
				onClick: a[0] ||= (e) => A(n).addTalentGrant("single")
			}, [...a[5] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), B(" Talent ", -1)]], 8, rw), R("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				disabled: e.isDisabled,
				title: "Add a Talent choice set. WFRP stores this as one comma-separated Talent entry.",
				type: "button",
				onClick: a[1] ||= (e) => A(n).addTalentGrant("choice")
			}, [...a[6] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-list-check"
			}, null, -1), B(" Choice Set ", -1)]], 8, iw)])) : (F(), I("button", {
				key: 0,
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: `Add a ${t.label.slice(0, -1)} row`,
				type: "button",
				onClick: (e) => A(n).addLinkedItem(A(yd)(t.field))
			}, [...a[4] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), B(" Add ", -1)]], 8, tw))])]),
			z(DC, {
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
			t.field !== "talents" && i(t.field).length > 0 ? (F(), I("ul", aw, [(F(!0), I(P, null, N(i(t.field), (r, i) => (F(), L(qC, {
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
			]))), 128))])) : t.field === "talents" && o().length > 0 ? (F(), I("ul", ow, [(F(!0), I(P, null, N(o(), (t, r) => (F(), I("li", {
				key: `talent-${r}`,
				class: D(["dui-list-row", A($)(u("talents", r), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				R("span", sw, "Grant " + O(r + 1), 1),
				R("div", cw, [
					R("strong", null, O(t.choices.length > 1 ? "Talent Choice" : "Guaranteed Talent"), 1),
					t.choices.length > 1 ? (F(), I("p", lw, "Choose one of these alternatives.")) : V("", !0),
					R("ul", uw, [(F(!0), I(P, null, N(t.choices, (i, o) => (F(), L(qC, {
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
				R("div", dw, [R("button", {
					class: "dui-btn dui-btn-sm dui-join-item",
					disabled: e.isDisabled,
					title: "Add another alternative to this Talent choice",
					type: "button",
					onClick: (e) => A(n).addTalentChoice(r)
				}, [...a[8] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-plus"
				}, null, -1), B(" Choice ", -1)]], 8, fw), R("button", {
					disabled: e.isDisabled,
					title: "Remove this Talent grant",
					class: "dui-btn dui-btn-error dui-btn-sm dui-join-item",
					type: "button",
					onClick: (e) => A(n).removeTalentGrant(r)
				}, [...a[9] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), B(" Remove ", -1)]], 8, pw)])
			], 2))), 128))])) : (F(), I("div", mw, [a[10] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No " + O(t.label.toLowerCase()) + " yet.", 1)]))
		])]))), 128))]));
	}
}), gw = { class: "dui-table dui-table-sm" }, _w = { scope: "row" }, vw = ["for"], yw = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], bw = ["id"], xw = /* @__PURE__ */ M({
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
			return NC(n.issues, `characteristics.${e}`);
		}
		function o(e) {
			return BC(a(e));
		}
		return (t, n) => (F(), I("table", gw, [n[0] ||= R("thead", null, [R("tr", null, [R("th", { scope: "col" }, "Characteristic"), R("th", { scope: "col" }, "Starting formula")])], -1), R("tbody", null, [(F(!0), I(P, null, N(A(OC), (t) => (F(), I("tr", { key: t }, [R("th", _w, [R("label", { for: `species-characteristic-${t}` }, O(A(cc)[t]), 9, vw)]), R("td", null, [R("input", {
			id: `species-characteristic-${t}`,
			"aria-describedby": a(t).length ? `species-characteristic-${t}-errors` : void 0,
			"aria-invalid": A(HC)(a(t)) || void 0,
			class: D(["dui-input dui-input-sm", A($)(a(t), "dui-input-error", "dui-input-warning")]),
			disabled: e.isDisabled,
			placeholder: "2d10+20",
			value: e.characteristics?.[t] ?? "",
			type: "text",
			onInput: (e) => r("update", t, i(e))
		}, null, 42, yw), o(t).length ? (F(), I("div", {
			key: 0,
			id: `species-characteristic-${t}-errors`
		}, [(F(!0), I(P, null, N(o(t), (e) => (F(), I("p", {
			key: e,
			class: D(["app:m-0 app:text-xs", A($)(a(t), "app:text-error", "app:text-warning")])
		}, O(e), 3))), 128))], 8, bw)) : V("", !0)])]))), 128))])]));
	}
}), Sw = { class: "dui-table dui-table-sm" }, Cw = { scope: "row" }, ww = ["for"], Tw = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], Ew = ["id"], Dw = /* @__PURE__ */ M({
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
			return NC(n.issues, e);
		}
		function o(e) {
			return BC(a(e));
		}
		return (t, n) => (F(), I("table", Sw, [n[0] ||= R("thead", null, [R("tr", null, [R("th", { scope: "col" }, "Stat"), R("th", { scope: "col" }, "Value")])], -1), R("tbody", null, [(F(!0), I(P, null, N(A(kC).filter(({ field: t }) => e.fields.includes(t)), (t) => (F(), I("tr", { key: t.field }, [R("th", Cw, [R("label", { for: `species-stat-${t.field}` }, O(t.label), 9, ww)]), R("td", null, [R("input", {
			id: `species-stat-${t.field}`,
			"aria-describedby": a(t.field).length ? `species-stat-${t.field}-errors` : void 0,
			"aria-invalid": A(HC)(a(t.field)) || void 0,
			class: D(["dui-input dui-input-sm", A($)(a(t.field), "dui-input-error", "dui-input-warning")]),
			disabled: e.isDisabled,
			value: e.values[t.field] ?? "",
			type: "number",
			onInput: (e) => r("update", t.field, i(e))
		}, null, 42, Tw), o(t.field).length ? (F(), I("div", {
			key: 0,
			id: `species-stat-${t.field}-errors`
		}, [(F(!0), I(P, null, N(o(t.field), (e) => (F(), I("p", {
			key: e,
			class: D(["app:m-0 app:text-xs", A($)(a(t.field), "app:text-error", "app:text-warning")])
		}, O(e), 3))), 128))], 8, Ew)) : V("", !0)])]))), 128))])]));
	}
}), Ow = { class: "app:grid app:gap-3" }, kw = { class: "dui-card dui-card-border dui-card-sm" }, Aw = { class: "dui-card-body" }, jw = { class: "dui-fieldset" }, Mw = { class: "dui-card dui-card-border dui-card-sm" }, Nw = { class: "dui-card-body" }, Pw = { class: "dui-fieldset" }, Fw = /* @__PURE__ */ M({
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
		return (t, i) => (F(), I("section", Ow, [R("section", kw, [R("div", Aw, [R("fieldset", jw, [
			i[2] ||= R("legend", { class: "dui-fieldset-legend" }, "Characteristic Roll Formulas", -1),
			i[3] ||= R("p", { class: "dui-fieldset-label" }, " Starting formulas used by WFRP character creation, usually values such as 2d10+20. ", -1),
			z(xw, {
				characteristics: e.definition.characteristics,
				"is-disabled": e.isDisabled,
				issues: e.issues,
				onUpdate: i[0] ||= (e, t) => r("updateCharacteristic", e, t)
			}, null, 8, [
				"characteristics",
				"is-disabled",
				"issues"
			])
		])])]), R("section", Mw, [R("div", Nw, [R("fieldset", Pw, [
			i[4] ||= R("legend", { class: "dui-fieldset-legend" }, "Movement, Fate And Resilience", -1),
			i[5] ||= R("p", { class: "dui-fieldset-label" }, " Set base Movement plus starting Fate, Resilience, and extra points distributed between them. ", -1),
			z(Dw, {
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
function Iw(e) {
	return vl(e.name) || "new-species";
}
function Lw(e) {
	return vl(e.name) || "new-subspecies";
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/details/AgeHeightFields.vue?vue&type=script&setup=true&lang.ts
var Rw = { class: "app:flex app:flex-wrap app:gap-3" }, zw = { class: "dui-fieldset app:min-w-56 app:flex-1" }, Bw = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Vw = {
	key: 0,
	id: "species-age-errors"
}, Hw = { class: "dui-fieldset app:min-w-56 app:flex-1" }, Uw = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Ww = {
	key: 0,
	id: "species-height-die-errors"
}, Gw = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Kw = {
	key: 1,
	id: "species-height-feet-errors"
}, qw = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], Jw = {
	key: 2,
	id: "species-height-inches-errors"
}, Yw = /* @__PURE__ */ M({
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
			return NC(n.issues, e);
		}
		function o(e) {
			return BC(a(e));
		}
		return (t, n) => (F(), I("div", Rw, [R("fieldset", zw, [
			n[4] ||= R("legend", { class: "dui-fieldset-legend" }, "Age", -1),
			n[5] ||= R("p", { class: "dui-fieldset-label" }, "Formula used by character creation to roll age.", -1),
			n[6] ||= R("label", {
				class: "dui-label",
				for: "species-age"
			}, "Age formula", -1),
			R("input", {
				id: "species-age",
				"aria-describedby": a("age").length ? "species-age-errors" : void 0,
				"aria-invalid": A(HC)(a("age")) || void 0,
				class: D(["dui-input dui-input-sm app:w-full", A($)(a("age"), "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				placeholder: "2d10+15",
				value: e.definition.age ?? "",
				type: "text",
				onInput: n[0] ||= (e) => r("updateStringField", "age", i(e))
			}, null, 42, Bw),
			o("age").length ? (F(), I("div", Vw, [(F(!0), I(P, null, N(o("age"), (e) => (F(), I("p", {
				key: e,
				class: D(["app:m-0 app:text-xs", A($)(a("age"), "app:text-error", "app:text-warning")])
			}, O(e), 3))), 128))])) : V("", !0)
		]), R("fieldset", Hw, [
			n[7] ||= R("legend", { class: "dui-fieldset-legend" }, "Height", -1),
			n[8] ||= R("p", { class: "dui-fieldset-label" }, "Formula and base measurements used to roll random height.", -1),
			n[9] ||= R("label", {
				class: "dui-label",
				for: "species-height-die"
			}, "Height die", -1),
			R("input", {
				id: "species-height-die",
				"aria-describedby": a("height.die").length ? "species-height-die-errors" : void 0,
				"aria-invalid": A(HC)(a("height.die")) || void 0,
				class: D(["dui-input dui-input-sm app:w-full", A($)(a("height.die"), "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				placeholder: "1d10",
				value: e.definition.height?.die ?? "",
				type: "text",
				onInput: n[1] ||= (e) => r("updateHeightField", "die", i(e))
			}, null, 42, Uw),
			o("height.die").length ? (F(), I("div", Ww, [(F(!0), I(P, null, N(o("height.die"), (e) => (F(), I("p", {
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
				"aria-invalid": A(HC)(a("height.feet")) || void 0,
				class: D(["dui-input dui-input-sm app:w-full", A($)(a("height.feet"), "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				value: e.definition.height?.feet ?? "",
				type: "number",
				onInput: n[2] ||= (e) => r("updateHeightField", "feet", i(e))
			}, null, 42, Gw),
			o("height.feet").length ? (F(), I("div", Kw, [(F(!0), I(P, null, N(o("height.feet"), (e) => (F(), I("p", {
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
				"aria-invalid": A(HC)(a("height.inches")) || void 0,
				class: D(["dui-input dui-input-sm app:w-full", A($)(a("height.inches"), "dui-input-error", "dui-input-warning")]),
				disabled: e.isDisabled,
				value: e.definition.height?.inches ?? "",
				type: "number",
				onInput: n[3] ||= (e) => r("updateHeightField", "inches", i(e))
			}, null, 42, qw),
			o("height.inches").length ? (F(), I("div", Jw, [(F(!0), I(P, null, N(o("height.inches"), (e) => (F(), I("p", {
				key: e,
				class: D(["app:m-0 app:text-xs", A($)(a("height.inches"), "app:text-error", "app:text-warning")])
			}, O(e), 3))), 128))])) : V("", !0)
		])]));
	}
}), Xw = { class: "app:grid app:gap-3" }, Zw = { class: "app:flex-1" }, Qw = { class: "app:flex app:flex-wrap app:gap-3" }, $w = { class: "dui-card dui-card-border dui-card-sm app:min-w-64 app:flex-1" }, eT = { class: "dui-card-body" }, tT = { class: "dui-fieldset" }, nT = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], rT = {
	key: 0,
	id: "species-name-errors"
}, iT = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"placeholder",
	"value"
], aT = {
	key: 1,
	id: "species-key-errors"
}, oT = { class: "dui-card dui-card-border dui-card-sm app:min-w-64 app:flex-1" }, sT = { class: "dui-card-body" }, cT = { class: "dui-fieldset" }, lT = { class: "dui-label" }, uT = ["checked", "disabled"], dT = { class: "dui-card dui-card-border dui-card-sm" }, fT = { class: "dui-card-body" }, pT = /* @__PURE__ */ M({
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
			return NC(n.issues, e);
		}
		function s(e) {
			return BC(o(e));
		}
		function c() {
			return RC(n.issues);
		}
		return (t, n) => (F(), I("section", Xw, [
			c().length ? (F(), I("div", {
				key: 0,
				class: D(["dui-alert", A($)(c(), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [
				R("i", {
					"aria-hidden": "true",
					class: D(["fa-solid", A(HC)(c()) ? "fa-circle-exclamation" : "fa-triangle-exclamation"])
				}, null, 2),
				R("div", Zw, [(F(!0), I(P, null, N(A(BC)(c()).slice(0, 1), (e) => (F(), I("p", {
					key: e,
					class: "app:m-0 app:text-xs"
				}, [B(O(e) + " ", 1), A(BC)(c()).length > 1 ? (F(), I(P, { key: 0 }, [B(" (+" + O(A(BC)(c()).length - 1) + " more) ", 1)], 64)) : V("", !0)]))), 128))]),
				R("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: n[0] ||= (e) => r("reviewIssues")
				}, [...n[6] ||= [B(" Review Species Issues ", -1), R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-chevron-right"
				}, null, -1)]])
			], 2)) : V("", !0),
			R("div", Qw, [R("section", $w, [R("div", eT, [R("fieldset", tT, [
				n[7] ||= R("legend", { class: "dui-fieldset-legend" }, "Identity", -1),
				n[8] ||= R("p", { class: "dui-fieldset-label" }, " The name is shown to users. The key identifies this species in generated WFRP config. ", -1),
				n[9] ||= R("label", {
					class: "dui-label",
					for: "species-name"
				}, "Name", -1),
				R("input", {
					id: "species-name",
					"aria-describedby": o("name").length ? "species-name-errors" : void 0,
					"aria-invalid": A(HC)(o("name")) || void 0,
					class: D(["dui-input dui-input-sm app:w-full", A($)(o("name"), "dui-input-error", "dui-input-warning")]),
					disabled: e.isDisabled,
					value: e.definition.name,
					type: "text",
					onInput: n[1] ||= (e) => r("updateStringField", "name", i(e))
				}, null, 42, nT),
				s("name").length ? (F(), I("div", rT, [(F(!0), I(P, null, N(s("name"), (e) => (F(), I("p", {
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
					"aria-invalid": A(HC)(o("key")) || void 0,
					class: D(["dui-input dui-input-sm app:w-full", A($)(o("key"), "dui-input-error", "dui-input-warning")]),
					disabled: e.isDisabled,
					placeholder: A(Iw)(e.definition),
					value: e.definition.key,
					type: "text",
					onInput: n[2] ||= (e) => r("updateStringField", "key", i(e))
				}, null, 42, iT),
				s("key").length ? (F(), I("div", aT, [(F(!0), I(P, null, N(s("key"), (e) => (F(), I("p", {
					key: e,
					class: D(["app:m-0 app:text-xs", A($)(o("key"), "app:text-error", "app:text-warning")])
				}, O(e), 3))), 128))])) : V("", !0)
			])])]), R("section", oT, [R("div", sT, [R("fieldset", cT, [
				n[12] ||= R("legend", { class: "dui-fieldset-legend" }, "WFRP Availability", -1),
				n[13] ||= R("p", { class: "dui-fieldset-label" }, " Choose whether character creation lists this custom species. ", -1),
				R("label", lT, [R("input", {
					class: "dui-checkbox",
					checked: e.definition.includeInExtraSpecies,
					disabled: e.isDisabled,
					type: "checkbox",
					onChange: n[3] ||= (e) => r("updateBooleanField", "includeInExtraSpecies", a(e))
				}, null, 40, uT), n[11] ||= R("span", null, "Show in WFRP extra species options", -1)])
			])])])]),
			R("section", dT, [R("div", fT, [n[14] ||= R("h3", { class: "dui-card-title" }, "Character Creation", -1), z(Yw, {
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
}), mT = { class: "dui-fieldset" }, hT = { class: "dui-fieldset-legend" }, gT = /* @__PURE__ */ M({
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
		return (t, r) => (F(), I("fieldset", mT, [R("legend", hT, O(e.label), 1), z(GC, {
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
}), _T = { class: "dui-card-actions" }, vT = { class: "dui-badge" }, yT = ["disabled", "title"], bT = /* @__PURE__ */ M({
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
			R("div", _T, [R("span", vT, O(e.count), 1), R("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: e.actionTitle,
				type: "button",
				onClick: r[0] ||= (e) => n("add")
			}, [r[1] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), B(" " + O(e.actionLabel), 1)], 8, yT)])
		]));
	}
}), xT = { class: "dui-card dui-card-border dui-card-sm" }, ST = { class: "dui-card-body" }, CT = {
	key: 1,
	class: "dui-list"
}, wT = { class: "dui-badge dui-badge-ghost" }, TT = { class: "dui-list-col-grow" }, ET = { class: "dui-list" }, DT = { class: "dui-badge dui-badge-ghost" }, OT = ["disabled", "onClick"], kT = { class: "dui-join" }, AT = ["disabled", "onClick"], jT = ["disabled", "onClick"], MT = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, NT = /* @__PURE__ */ M({
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
			return BC(zC(n.issues));
		}
		return (t, n) => (F(), I("section", xT, [R("div", ST, [
			z(bT, {
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
				class: D(["dui-alert", A($)(A(zC)(e.issues), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[2] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), R("div", null, [(F(!0), I(P, null, N(l(), (e) => (F(), I("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, O(e), 1))), 128))])], 2)) : V("", !0),
			i().length > 0 ? (F(), I("ul", CT, [(F(!0), I(P, null, N(i(), (t, i) => (F(), I("li", {
				key: `career-replacement-${i}`,
				class: D(["dui-list-row", A($)(A(FC)(e.issues, i), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				R("span", wT, "Rule " + O(i + 1), 1),
				R("div", TT, [
					z(gT, {
						description: "Drop the Career result that should allow replacement choices.",
						"is-disabled": e.isDisabled,
						issues: A(NC)(e.issues, "rolled", i),
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
					R("ul", ET, [(F(!0), I(P, null, N(t.replacements, (t, a) => (F(), I("li", {
						key: `${i}-${a}`,
						class: D(["dui-list-row", A($)(A(LC)(e.issues, i, a), "app:border app:border-error", "app:border app:border-warning")])
					}, [
						R("span", DT, O(a + 1), 1),
						z(gT, {
							class: "dui-list-col-grow",
							description: "Drop one Career offered instead of the rolled Career.",
							"is-disabled": e.isDisabled,
							issues: A(NC)(e.issues, "replacement", i, a),
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
						}, null, -1), B(" Remove ", -1)]], 8, OT)
					], 2))), 128))])
				]),
				R("div", kT, [R("button", {
					class: "dui-btn dui-btn-sm dui-join-item",
					disabled: e.isDisabled,
					title: "Add another replacement Career choice",
					type: "button",
					onClick: (e) => o(i)
				}, [...n[5] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-plus"
				}, null, -1), B(" Choice ", -1)]], 8, AT), R("button", {
					disabled: e.isDisabled,
					title: "Remove this Career replacement rule",
					class: "dui-btn dui-btn-error dui-btn-sm dui-join-item",
					type: "button",
					onClick: (e) => c(i)
				}, [...n[6] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), B(" Remove Rule ", -1)]], 8, jT)])
			], 2))), 128))])) : (F(), I("div", MT, [...n[7] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No Career replacements.", -1)]]))
		])]));
	}
}), PT = { class: "dui-card dui-card-border dui-card-sm" }, FT = { class: "dui-card-body" }, IT = { class: "dui-fieldset" }, LT = ["for"], RT = { class: "dui-join app:w-full" }, zT = ["id", "disabled"], BT = { value: "" }, VT = ["value"], HT = ["disabled"], UT = {
	key: 1,
	class: "dui-list"
}, WT = { class: "dui-badge dui-badge-ghost" }, GT = { class: "dui-list-col-grow" }, KT = {
	key: 0,
	class: "app:flex app:flex-wrap app:gap-1"
}, qT = {
	key: 0,
	class: "dui-badge dui-badge-outline dui-badge-sm"
}, JT = {
	key: 1,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, YT = { class: "dui-fieldset" }, XT = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], ZT = ["id"], QT = { class: "dui-fieldset" }, $T = [
	"disabled",
	"value",
	"onInput"
], eE = ["disabled", "onClick"], tE = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, nE = /* @__PURE__ */ M({
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
			return NC(n.issues, "name", e);
		}
		function g(e) {
			return BC(h(e));
		}
		function _() {
			return BC(zC(n.issues));
		}
		return (t, n) => (F(), I("section", PT, [R("div", FT, [
			z(bT, {
				"action-label": "Add Career",
				"action-title": "Add a Career table row",
				count: l().length,
				description: "Career group names are required for the normal character-generation roll. Journal links provide the result link; blank links use the generated fallback journal.",
				"is-disabled": e.isDisabled,
				title: "Career Table",
				onAdd: u
			}, null, 8, ["count", "is-disabled"]),
			R("fieldset", IT, [
				n[2] ||= R("legend", { class: "dui-fieldset-legend" }, "Copy Existing Table", -1),
				R("label", {
					class: "dui-label",
					for: A(o)
				}, "Source species", 8, LT),
				R("div", RT, [Un(R("select", {
					id: A(o),
					"onUpdate:modelValue": n[0] ||= (e) => a.value = e,
					"aria-label": "Source species",
					class: "dui-select dui-select-sm dui-join-item app:min-w-0 app:flex-1",
					disabled: e.isDisabled || s.value.length === 0
				}, [R("option", BT, O(s.value.length > 0 ? "Select a species…" : "No species tables available"), 1), (F(!0), I(P, null, N(s.value, (e) => (F(), I("option", {
					key: e.id,
					value: e.id
				}, O(e.label) + " (" + O(e.rows.length) + ") ", 9, VT))), 128))], 8, zT), [[Ko, a.value]]), R("button", {
					class: "dui-btn dui-btn-sm dui-join-item",
					disabled: e.isDisabled || !c.value,
					title: "Replace the current rows with a copy of the selected species table",
					type: "button",
					onClick: d
				}, [...n[1] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-copy"
				}, null, -1), B(" Copy Table ", -1)]], 8, HT)]),
				n[3] ||= R("p", { class: "dui-label" }, "Copies its rows, ranges, weights, and journal links.", -1)
			]),
			_().length ? (F(), I("div", {
				key: 0,
				class: D(["dui-alert", A($)(A(zC)(e.issues), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[4] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), R("div", null, [(F(!0), I(P, null, N(_(), (e) => (F(), I("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, O(e), 1))), 128))])], 2)) : V("", !0),
			l().length > 0 ? (F(), I("ul", UT, [(F(!0), I(P, null, N(l(), (t, i) => (F(), I("li", {
				key: i,
				class: D(["dui-list-row", A($)(A(FC)(e.issues, i), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				R("span", WT, O(i + 1), 1),
				R("div", GT, [
					t.sourceRange || t.sourceWeight ? (F(), I("div", KT, [t.sourceRange ? (F(), I("span", qT, " Range " + O(t.sourceRange[0]) + "–" + O(t.sourceRange[1]), 1)) : V("", !0), t.sourceWeight ? (F(), I("span", JT, " Weight " + O(t.sourceWeight), 1)) : V("", !0)])) : V("", !0),
					z(DC, {
						description: "Drop a WFRP Career item.",
						disabled: e.isDisabled,
						"manual-entry-trigger": "none",
						title: "Career",
						variant: "bare",
						onDropData: (e) => r("dropCareer", i, e)
					}, {
						default: j(() => [R("fieldset", YT, [
							n[5] ||= R("legend", { class: "dui-fieldset-legend" }, "Career Group", -1),
							R("input", {
								"aria-describedby": h(i).length ? `career-table-name-${i}-errors` : void 0,
								"aria-invalid": A(HC)(h(i)) || void 0,
								class: D(["dui-input", A($)(h(i), "dui-input-error", "dui-input-warning")]),
								disabled: e.isDisabled,
								value: t.name,
								placeholder: "Pit Fighter",
								type: "text",
								onInput: (e) => p(i, { name: m(e) })
							}, null, 42, XT),
							g(i).length ? (F(), I("div", {
								key: 0,
								id: `career-table-name-${i}-errors`
							}, [(F(!0), I(P, null, N(g(i), (e) => (F(), I("p", {
								key: e,
								class: D(["app:m-0 app:text-xs", A($)(h(i), "app:text-error", "app:text-warning")])
							}, O(e), 3))), 128))], 8, ZT)) : V("", !0)
						])]),
						_: 2
					}, 1032, ["disabled", "onDropData"]),
					z(DC, {
						description: "Drop a Journal Entry or Journal Page.",
						disabled: e.isDisabled,
						"manual-entry-trigger": "button",
						title: "Journal Link",
						variant: "bare",
						onDropData: (e) => r("dropJournal", i, e)
					}, {
						default: j(() => [R("fieldset", QT, [n[6] ||= R("legend", { class: "dui-fieldset-legend" }, "Journal Entry/Page UUID", -1), R("input", {
							class: "dui-input",
							disabled: e.isDisabled,
							value: t.journalUuid ?? "",
							placeholder: "Compendium.package.journals.entry.JournalEntryPage.page",
							type: "text",
							onInput: (e) => p(i, { journalUuid: m(e) })
						}, null, 40, $T)])]),
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
				}, null, -1), B(" Remove ", -1)]], 8, eE)
			], 2))), 128))])) : (F(), I("div", tE, [...n[8] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No Career rows yet.", -1)]]))
		])]));
	}
});
//#endregion
//#region src/functions/species-builder/editor/random-talents.ts
function rE(e) {
	return Object.entries(e ?? {});
}
function iE(e, t) {
	let n = t[0]?.key ?? "talents";
	return lE([...e, [n, 1]]);
}
function aE(e, t, n) {
	return lE(e.map(([e, r], i) => i === t ? [n, r] : [e, r]));
}
function oE(e, t, n) {
	let r = Number(n);
	return lE(e.map(([e, n], i) => i === t && Number.isFinite(r) ? [e, r] : [e, n]));
}
function sE(e, t) {
	return lE(e.filter((e, n) => n !== t));
}
function cE(e, t) {
	return e.some((e) => e.key === t) ? e : [...e, {
		key: t,
		label: `Saved source missing from this world (${t})`
	}];
}
function lE(e) {
	return e.flatMap(([e, t]) => e.trim() ? [`${e.trim()}: ${t}`] : []).join("\n");
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/tables/tabs/random-talents/RandomTalentRows.vue?vue&type=script&setup=true&lang.ts
var uE = { class: "dui-card dui-card-border dui-card-sm" }, dE = { class: "dui-card-body" }, fE = {
	key: 1,
	class: "dui-list"
}, pE = { class: "dui-badge dui-badge-ghost" }, mE = { class: "dui-list-col-grow" }, hE = { class: "dui-fieldset" }, gE = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], _E = ["value"], vE = ["id"], yE = { class: "dui-fieldset" }, bE = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], xE = ["id"], SE = ["disabled", "onClick"], CE = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, wE = /* @__PURE__ */ M({
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
			return rE(n.values);
		}
		function a() {
			r("update", iE(i(), n.sources));
		}
		function o(e, t) {
			r("update", aE(i(), e, t));
		}
		function s(e, t) {
			r("update", oE(i(), e, t));
		}
		function c(e) {
			return cE(n.sources, e);
		}
		function l(e) {
			r("update", sE(i(), e));
		}
		function u(e) {
			return e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement ? e.target.value : "";
		}
		function d(e, t) {
			return NC(n.issues, e, t);
		}
		function f(e, t) {
			return BC(d(e, t));
		}
		function p() {
			return BC(zC(n.issues));
		}
		return (t, n) => (F(), I("section", uE, [R("div", dE, [
			z(bT, {
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
				class: D(["dui-alert", A($)(A(zC)(e.issues), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[0] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), R("div", null, [(F(!0), I(P, null, N(p(), (e) => (F(), I("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, O(e), 1))), 128))])], 2)) : V("", !0),
			i().length > 0 ? (F(), I("ul", fE, [(F(!0), I(P, null, N(i(), ([t, r], i) => (F(), I("li", {
				key: `random-${i}`,
				class: D(["dui-list-row", A($)(A(FC)(e.issues, i), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				R("span", pE, O(i + 1), 1),
				R("div", mE, [R("fieldset", hE, [
					n[1] ||= R("legend", { class: "dui-fieldset-legend" }, "Talent source", -1),
					R("select", {
						"aria-describedby": d("key", i).length ? `random-talents-key-${i}-errors` : void 0,
						"aria-invalid": A(HC)(d("key", i)) || void 0,
						class: D(["dui-select", A($)(d("key", i), "dui-select-error", "dui-select-warning")]),
						disabled: e.isDisabled,
						title: "Random Talent table source available in this world.",
						value: t,
						onInput: (e) => o(i, u(e))
					}, [(F(!0), I(P, null, N(c(t), (e) => (F(), I("option", {
						key: e.key,
						value: e.key
					}, O(e.label), 9, _E))), 128))], 42, gE),
					f("key", i).length ? (F(), I("div", {
						key: 0,
						id: `random-talents-key-${i}-errors`
					}, [(F(!0), I(P, null, N(f("key", i), (e) => (F(), I("p", {
						key: e,
						class: D(["app:m-0 app:text-xs", A($)(d("key", i), "app:text-error", "app:text-warning")])
					}, O(e), 3))), 128))], 8, vE)) : V("", !0)
				]), R("fieldset", yE, [
					n[2] ||= R("legend", { class: "dui-fieldset-legend" }, "Draws", -1),
					R("input", {
						"aria-describedby": d("count", i).length ? `random-talents-count-${i}-errors` : void 0,
						"aria-invalid": A(HC)(d("count", i)) || void 0,
						class: D(["dui-input", A($)(d("count", i), "dui-input-error", "dui-input-warning")]),
						disabled: e.isDisabled,
						min: "0",
						title: "How many random Talents this species draws from that table.",
						value: r,
						type: "number",
						onInput: (e) => s(i, u(e))
					}, null, 42, bE),
					f("count", i).length ? (F(), I("div", {
						key: 0,
						id: `random-talents-count-${i}-errors`
					}, [(F(!0), I(P, null, N(f("count", i), (e) => (F(), I("p", {
						key: e,
						class: D(["app:m-0 app:text-xs", A($)(d("count", i), "app:text-error", "app:text-warning")])
					}, O(e), 3))), 128))], 8, xE)) : V("", !0)
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
				}, null, -1), B(" Remove ", -1)]], 8, SE)
			], 2))), 128))])) : (F(), I("div", CE, [...n[4] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No random Talent draws.", -1)]]))
		])]));
	}
}), TE = { class: "dui-card dui-card-border dui-card-sm" }, EE = { class: "dui-card-body" }, DE = {
	key: 1,
	class: "dui-list"
}, OE = { class: "dui-badge dui-badge-ghost" }, kE = { class: "dui-list-col-grow" }, AE = ["disabled", "onClick"], jE = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, ME = /* @__PURE__ */ M({
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
			return BC(zC(n.issues));
		}
		return (t, n) => (F(), I("section", TE, [R("div", EE, [
			z(bT, {
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
				class: D(["dui-alert", A($)(A(zC)(e.issues), "dui-alert-error", "dui-alert-warning")]),
				role: "alert"
			}, [n[2] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-exclamation"
			}, null, -1), R("div", null, [(F(!0), I(P, null, N(s(), (e) => (F(), I("p", {
				key: e,
				class: "app:m-0 app:text-xs"
			}, O(e), 1))), 128))])], 2)) : V("", !0),
			i().length > 0 ? (F(), I("ul", DE, [(F(!0), I(P, null, N(i(), (t, i) => (F(), I("li", {
				key: `talent-replacement-${i}`,
				class: D(["dui-list-row", A($)(A(FC)(e.issues, i), "app:border app:border-error", "app:border app:border-warning")])
			}, [
				R("span", OE, O(i + 1), 1),
				R("div", kE, [z(gT, {
					description: "Drop the Talent result that may be replaced.",
					"is-disabled": e.isDisabled,
					issues: A(NC)(e.issues, "rolled", i),
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
				]), z(gT, {
					description: "Drop the Talent offered instead of the rolled Talent.",
					"is-disabled": e.isDisabled,
					issues: A(NC)(e.issues, "replacement", i),
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
				}, null, -1), B(" Remove ", -1)]], 8, AE)
			], 2))), 128))])) : (F(), I("div", jE, [...n[4] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No Talent replacements.", -1)]]))
		])]));
	}
}), NE = { class: "dui-card dui-card-border dui-card-sm" }, PE = { class: "dui-card-body" }, FE = { key: 0 }, IE = { class: "app:m-0" }, LE = {
	key: 1,
	class: "app:m-0"
}, RE = {
	key: 2,
	"aria-label": "Table editor",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, zE = [
	"id",
	"aria-controls",
	"aria-selected",
	"disabled",
	"onClick"
], BE = ["title"], VE = { class: "app:sr-only" }, HE = /* @__PURE__ */ M({
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
		return (t, n) => (F(), I("section", NE, [R("div", PE, [
			e.showNavigation ? (F(), I("header", FE, [n[8] ||= R("h3", { class: "dui-card-title" }, "Tables And Replacements", -1), R("p", IE, O(e.help), 1)])) : (F(), I("p", LE, O(e.help), 1)),
			e.showNavigation ? (F(), I("div", RE, [(F(!0), I(P, null, N(i.value, (t) => (F(), I("button", {
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
			}, [R("span", VE, O(f(t.tab)), 1)], 10, BE)) : V("", !0)], 10, zE))), 128))])) : V("", !0),
			e.activeTab === "careerTable" ? (F(), L(nE, {
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
			])) : e.activeTab === "randomTalents" ? (F(), L(wE, {
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
			])) : e.activeTab === "talentReplacement" ? (F(), L(ME, {
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
			])) : e.includeCareerReplacements ? (F(), L(NT, {
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
}), UE = {
	"aria-label": "Current species and save state",
	class: "dui-footer dui-footer-horizontal app:sticky app:bottom-0 app:z-10 app:items-center app:justify-between app:gap-3 app:bg-base-200 app:px-3 app:py-2"
}, WE = { class: "app:flex app:min-w-0 app:items-center app:gap-2" }, GE = {
	key: 0,
	class: "dui-badge dui-badge-ghost"
}, KE = {
	"aria-atomic": "true",
	"aria-live": "polite",
	role: "status"
}, qE = ["disabled"], JE = /* @__PURE__ */ M({
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
		let n = e, r = t, i = H(() => n.entityName?.trim() || n.definition?.name.trim() || n.definition?.key.trim() || (n.definition ? "Untitled Species" : "Species Builder")), a = H(() => n.entityKey?.trim() ? n.entityKey.trim() : n.definition ? n.definition.key.trim() || Iw(n.definition) : ""), o = H(() => n.isLoading ? {
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
		return (t, n) => (F(), I("footer", UE, [R("div", WE, [
			R("span", {
				"aria-hidden": "true",
				class: D(["dui-status", o.value.statusClass])
			}, null, 2),
			R("strong", null, O(i.value), 1),
			a.value ? (F(), I("span", GE, O(a.value), 1)) : V("", !0),
			R("span", KE, O(o.value.label), 1)
		]), R("button", {
			class: "dui-btn dui-btn-primary dui-btn-sm",
			disabled: !e.canSave,
			type: "button",
			onClick: n[0] ||= (e) => r("save")
		}, [n[1] ||= R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-floppy-disk"
		}, null, -1), B(" " + O(e.isSaving ? "Saving..." : "Save Changes"), 1)], 8, qE)]));
	}
}), YE = { class: "dui-card dui-card-border dui-card-sm" }, XE = { class: "dui-card-body" }, ZE = { class: "dui-collapse-title" }, QE = { class: "dui-badge" }, $E = { class: "dui-collapse-content" }, eD = { class: "dui-fieldset" }, tD = [
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], nD = { class: "dui-collapse dui-collapse-arrow" }, rD = { class: "dui-collapse-title" }, iD = { class: "dui-badge" }, aD = { class: "dui-collapse-content" }, oD = {
	key: 0,
	class: "dui-list"
}, sD = {
	key: 1,
	class: "dui-alert"
}, cD = { class: "dui-collapse dui-collapse-arrow" }, lD = { class: "dui-collapse-title" }, uD = { class: "dui-badge" }, dD = { class: "dui-collapse-content" }, fD = {
	key: 0,
	class: "dui-list"
}, pD = {
	key: 1,
	class: "dui-alert"
}, mD = /* @__PURE__ */ M({
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
		})), l = H(() => BC(r.issues));
		function u(e) {
			return PC(r.issues, e);
		}
		return (t, r) => (F(), I("section", YE, [R("div", XE, [
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
			}, [R("summary", ZE, [B(O(t.label) + " ", 1), R("span", QE, O(e.subspecies[t.field]?.length ?? 0), 1)]), R("div", $E, [R("fieldset", eD, [r[1] ||= R("legend", { class: "dui-fieldset-legend" }, "One name per line", -1), R("textarea", {
				class: D(["dui-textarea", A($)(u(t.field), "dui-textarea-error", "dui-textarea-warning")]),
				"aria-invalid": A(HC)(u(t.field)) || void 0,
				disabled: e.isDisabled,
				value: o(e.subspecies[t.field]),
				rows: "5",
				onInput: (e) => i("updateArrayField", t.field, a(e))
			}, null, 42, tD)])])])), 64)),
			r[8] ||= R("div", { class: "dui-divider" }, "Compiled Preview", -1),
			r[9] ||= R("div", { class: "dui-alert dui-alert-info" }, [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-eye"
			}), R("span", null, "Read-only previews show the final inherited lists WFRP will receive.")], -1),
			R("details", nD, [R("summary", rD, [r[2] ||= B(" Compiled Skills ", -1), R("span", iD, O(s.value.length), 1)]), R("div", aD, [s.value.length > 0 ? (F(), I("ul", oD, [(F(!0), I(P, null, N(s.value, (e) => (F(), I("li", {
				key: e,
				class: "dui-list-row"
			}, [r[3] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-check"
			}, null, -1), R("span", null, O(e), 1)]))), 128))])) : (F(), I("p", sD, "The compiled Skill list is empty."))])]),
			R("details", cD, [R("summary", lD, [r[4] ||= B(" Compiled Traits ", -1), R("span", uD, O(c.value.length), 1)]), R("div", dD, [c.value.length > 0 ? (F(), I("ul", fD, [(F(!0), I(P, null, N(c.value, (e) => (F(), I("li", {
				key: e,
				class: "dui-list-row"
			}, [r[5] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-check"
			}, null, -1), R("span", null, O(e), 1)]))), 128))])) : (F(), I("p", pD, "The compiled Trait list is empty."))])])
		])]));
	}
}), hD = { class: "dui-card dui-card-border dui-card-sm" }, gD = { class: "dui-card-body" }, _D = { class: "dui-fieldset" }, vD = { class: "dui-table dui-table-sm" }, yD = { scope: "row" }, bD = ["for"], xD = [
	"id",
	"aria-invalid",
	"disabled",
	"value"
], SD = { scope: "row" }, CD = ["for"], wD = [
	"id",
	"aria-invalid",
	"disabled",
	"placeholder",
	"value"
], TD = { class: "dui-fieldset" }, ED = { class: "dui-fieldset" }, DD = /* @__PURE__ */ M({
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
		let n = e, r = t, i = H(() => BC(n.issues));
		function a(e) {
			return e.target instanceof HTMLInputElement ? e.target.value : "";
		}
		function o(e) {
			return NC(n.issues, e);
		}
		function s(e) {
			return BC(o(e));
		}
		return (t, n) => (F(), I("section", hD, [R("div", gD, [
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
			R("fieldset", _D, [
				n[5] ||= R("legend", { class: "dui-fieldset-legend" }, "Identity", -1),
				n[6] ||= R("p", { class: "dui-fieldset-label" }, " Name this variant and give it a unique key under its parent species. ", -1),
				R("table", vD, [R("tbody", null, [R("tr", null, [R("th", yD, [R("label", { for: `subspecies-${e.index}-name` }, "Name", 8, bD)]), R("td", null, [R("input", {
					id: `subspecies-${e.index}-name`,
					class: D(["dui-input dui-input-sm", A($)(o("name"), "dui-input-error", "dui-input-warning")]),
					"aria-invalid": A(HC)(o("name")) || void 0,
					disabled: e.isDisabled,
					value: e.subspecies.name,
					type: "text",
					onInput: n[0] ||= (e) => r("updateStringField", "name", a(e))
				}, null, 42, xD), (F(!0), I(P, null, N(s("name"), (e) => (F(), I("p", {
					key: e,
					class: D(["app:m-0 app:text-xs", A($)(o("name"), "app:text-error", "app:text-warning")])
				}, O(e), 3))), 128))])]), R("tr", null, [R("th", SD, [R("label", { for: `subspecies-${e.index}-key` }, "Key", 8, CD)]), R("td", null, [R("input", {
					id: `subspecies-${e.index}-key`,
					class: D(["dui-input dui-input-sm", A($)(o("key"), "dui-input-error", "dui-input-warning")]),
					"aria-invalid": A(HC)(o("key")) || void 0,
					disabled: e.isDisabled,
					placeholder: A(Lw)(e.subspecies),
					value: e.subspecies.key,
					type: "text",
					onInput: n[1] ||= (e) => r("updateStringField", "key", a(e))
				}, null, 42, wD), (F(!0), I(P, null, N(s("key"), (e) => (F(), I("p", {
					key: e,
					class: D(["app:m-0 app:text-xs", A($)(o("key"), "app:text-error", "app:text-warning")])
				}, O(e), 3))), 128))])])])])
			]),
			R("fieldset", TD, [
				n[7] ||= R("legend", { class: "dui-fieldset-legend" }, "Characteristic Overrides", -1),
				n[8] ||= R("p", { class: "dui-fieldset-label" }, " Enter only formulas that replace the parent species characteristic value. ", -1),
				z(xw, {
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
			R("fieldset", ED, [
				n[9] ||= R("legend", { class: "dui-fieldset-legend" }, "Resource Overrides", -1),
				n[10] ||= R("p", { class: "dui-fieldset-label" }, "Leave a value blank to keep the parent species value.", -1),
				z(Dw, {
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
}), OD = { class: "app:flex app:flex-wrap app:items-start app:justify-between app:gap-3" }, kD = { class: "app:flex app:flex-col app:gap-1" }, AD = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, jD = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, MD = {
	id: "species-builder-subspecies-title",
	class: "app:m-0"
}, ND = { class: "dui-card-actions" }, PD = ["disabled"], FD = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "note"
}, ID = /* @__PURE__ */ M({
	__name: "SubspeciesEditorHeader",
	props: {
		isBusy: { type: Boolean },
		isReadOnly: { type: Boolean },
		name: {}
	},
	emits: ["close", "delete"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (F(), I(P, null, [R("header", OD, [R("div", kD, [R("span", AD, [r[3] ||= R("span", { class: "dui-badge dui-badge-ghost" }, "Subspecies", -1), e.isReadOnly ? (F(), I("span", jD, [...r[2] ||= [R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-lock"
		}, null, -1), B(" Installed ", -1)]])) : V("", !0)]), R("h2", MD, O(e.name), 1)]), R("div", ND, [e.isReadOnly ? V("", !0) : (F(), I("button", {
			key: 0,
			class: "dui-btn dui-btn-error dui-btn-sm",
			disabled: e.isBusy,
			type: "button",
			onClick: r[0] ||= (e) => n("delete")
		}, [...r[4] ||= [R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-trash"
		}, null, -1), B(" Delete ", -1)]], 8, PD)), R("button", {
			class: "dui-btn dui-btn-sm",
			type: "button",
			onClick: r[1] ||= (e) => n("close")
		}, "Close")])]), e.isReadOnly ? (F(), I("div", FD, [...r[5] ||= [R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-lock"
		}, null, -1), R("span", null, " This installed subspecies is available for reference. Its controls are locked because the source module owns the data. ", -1)]])) : V("", !0)], 64));
	}
}), LD = [
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
], RD = {
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
function zD(e, t) {
	return e.filter((e) => RD[t].includes(e.section));
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/subspecies/SubspeciesEditorTabs.vue?vue&type=script&setup=true&lang.ts
var BD = {
	"aria-label": "Edit subspecies section",
	class: "dui-tabs dui-tabs-border",
	role: "tablist"
}, VD = [
	"id",
	"aria-controls",
	"aria-selected",
	"autofocus",
	"disabled",
	"onClick"
], HD = ["title"], UD = { class: "app:sr-only" }, WD = /* @__PURE__ */ M({
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
			return Xh(zD(n.issues, e));
		}
		return (t, n) => (F(), I("div", BD, [(F(!0), I(P, null, N(A(LD), (t) => (F(), I("button", {
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
		}, [R("span", UD, O(A(Zh)(i(t.tab))), 1)], 10, HD)) : V("", !0)], 10, VD))), 128))]));
	}
});
//#endregion
//#region src/functions/species-builder/editor/subspecies-talents.ts
function GD(e, t, n) {
	let r = JD(e), i = JD(t), a = JD(n), o = r.filter((e) => !a.includes(e)).map((e) => ({
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
function KD(e, t) {
	return e.source === "added" ? {
		field: "talentsAdded",
		value: YD(t.addedTalents.filter((t) => t !== e.name))
	} : {
		field: "talentsRemoved",
		value: YD([...t.removedTalents, e.name])
	};
}
function qD(e, t) {
	return {
		field: "talentsRemoved",
		value: YD(t.removedTalents.filter((t) => t !== e))
	};
}
function JD(e) {
	let t = [];
	for (let n of e ?? []) {
		let e = n.trim();
		e && !t.includes(e) && t.push(e);
	}
	return t;
}
function YD(e) {
	return JD(e).join("\n");
}
//#endregion
//#region src/view/apps/species-builder/tabs/species/pages/editor/tabs/subspecies/SubspeciesTalentInheritance.vue?vue&type=script&setup=true&lang.ts
var XD = { class: "dui-card dui-card-border dui-card-sm" }, ZD = { class: "dui-card-body" }, QD = {
	key: 1,
	class: "dui-list"
}, $D = { class: "dui-list-col-grow" }, eO = { class: "dui-badge" }, tO = [
	"disabled",
	"title",
	"onClick"
], nO = {
	key: 2,
	class: "dui-alert",
	role: "status"
}, rO = { key: 3 }, iO = { class: "dui-card-actions" }, aO = [
	"disabled",
	"title",
	"onClick"
], oO = /* @__PURE__ */ M({
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
		let n = e, r = t, i = H(() => GD(n.parentTalents, n.subspecies.talentsAdded, n.subspecies.talentsRemoved)), a = H(() => BC(n.issues));
		function o(e) {
			c(KD(e, i.value));
		}
		function s(e) {
			c(qD(e, i.value));
		}
		function c(e) {
			r("updateArrayField", n.index, e.field, e.value);
		}
		function l(e) {
			if (e.source !== "added") return [];
			let t = n.subspecies.talentsAdded?.findIndex((t) => t.trim() === e.name);
			return t === void 0 || t < 0 ? [] : IC(n.issues, "talentsAdded", t);
		}
		function u(e) {
			return BC(l(e));
		}
		return (t, n) => (F(), I("section", XD, [R("div", ZD, [
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
			z(DC, {
				description: "Drop a WFRP Talent item to add it to this subspecies.",
				disabled: e.isDisabled,
				title: "Drop Added Talent",
				variant: "compact",
				onDropData: n[0] ||= (t) => r("talentDrop", e.index, t)
			}, null, 8, ["disabled"]),
			i.value.activeRows.length > 0 ? (F(), I("ul", QD, [(F(!0), I(P, null, N(i.value.activeRows, (t) => (F(), I("li", {
				key: `${t.source}-${t.name}`,
				class: D(["dui-list-row", A($)(l(t), "app:border app:border-error", "app:border app:border-warning")])
			}, [R("div", $D, [
				R("strong", null, O(t.name), 1),
				R("span", eO, O(t.source === "inherited" ? "Inherited" : "Added"), 1),
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
			}, null, -1), B(" Remove ", -1)]], 8, tO)], 2))), 128))])) : (F(), I("div", nO, [...n[3] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No Talents in the compiled list.", -1)]])),
			i.value.removedParentTalents.length > 0 ? (F(), I("div", rO, [n[5] ||= R("h4", null, "Removed Parent Talents", -1), R("div", iO, [(F(!0), I(P, null, N(i.value.removedParentTalents, (t) => (F(), I("button", {
				key: t,
				class: "dui-btn dui-btn-sm",
				disabled: e.isDisabled,
				title: `Restore ${t}`,
				type: "button",
				onClick: (e) => s(t)
			}, [n[4] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-rotate-left"
			}, null, -1), B(" " + O(t), 1)], 8, aO))), 128))])])) : V("", !0)
		])]));
	}
}), sO = /* @__PURE__ */ "@sb.@tb.@wpb.@sbMultiplier.@tbMultiplier.@wpbMultiplier.@scale.@size.@age.@height.@weight.@status.@rank.@xp.@fate.@fortune.@resilience.@resolve.@corruption.@sin.@advantage.@bleeding.@poisoned.@ablaze.@deafened.@stunned.@entangled.@fatigued.@blinded.@broken".split("."), cO = { class: "dui-card dui-card-border dui-card-sm" }, lO = { class: "dui-card-body" }, uO = { class: "dui-fieldset" }, dO = { class: "dui-collapse dui-collapse-arrow" }, fO = { class: "dui-collapse-content" }, pO = { "aria-label": "Wound formula keywords" }, mO = [
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value"
], hO = {
	key: 0,
	id: "species-wound-formula-errors"
}, gO = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, _O = /* @__PURE__ */ M({
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
			return NC(n.issues, "woundFormula");
		}
		function o() {
			return BC(a());
		}
		return (t, n) => (F(), I("section", cO, [R("div", lO, [R("fieldset", uO, [
			n[3] ||= Ea("<legend class=\"dui-fieldset-legend\">Wound Calculation</legend><p class=\"dui-fieldset-label\"> Use <code>{Skill or Characteristic}</code> for a total value, <code>[Skill or Characteristic]</code> for its bonus, and <code>{Skill|Characteristic}</code> or <code>[Skill|Characteristic]</code> to base a skill on another characteristic. You can also use keywords such as <code>@tb</code>, <code>@scale</code>, and <code>@xp</code>. </p>", 2),
			R("details", dO, [n[2] ||= R("summary", { class: "dui-collapse-title" }, "Formula keyword guide", -1), R("div", fO, [n[1] ||= R("p", null, [
				B(" Keywords pull values from the current Actor during Wound calculation. Size uses "),
				R("code", null, "@size"),
				B(" as steps from Average and "),
				R("code", null, "@scale"),
				B(" as powers of two. ")
			], -1), R("div", pO, [(F(!0), I(P, null, N(A(sO), (e) => (F(), I("code", {
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
				"aria-invalid": A(HC)(a()) || void 0,
				class: D(["dui-textarea app:w-full", A($)(a(), "dui-textarea-error", "dui-textarea-warning")]),
				disabled: e.isDisabled,
				value: e.formula ?? "",
				placeholder: "@sb * (1 + @sbMultiplier) + @tb * (2 + @tbMultiplier) + @wpb * (1 + @wpbMultiplier)",
				rows: "4",
				onInput: n[0] ||= (e) => r("updateWoundFormula", i(e))
			}, null, 42, mO),
			o().length ? (F(), I("div", hO, [(F(!0), I(P, null, N(o(), (e) => (F(), I("p", {
				key: e,
				class: D(["app:m-0 app:text-xs", A($)(a(), "app:text-error", "app:text-warning")])
			}, O(e), 3))), 128))])) : V("", !0),
			e.generatedTraitName ? (F(), I("p", gO, " Generated Trait item: " + O(e.generatedTraitName), 1)) : V("", !0)
		])])]));
	}
}), vO = {
	id: "subspecies-editor-panel-wounds",
	"aria-label": "Subspecies wounds",
	"aria-labelledby": "subspecies-editor-tab-wounds",
	role: "tabpanel"
}, yO = {
	key: 0,
	class: "app:mb-2 app:flex app:justify-end"
}, bO = /* @__PURE__ */ M({
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
		return (t, n) => (F(), I("section", vO, [e.standalone ? (F(), I("div", yO, [R("button", {
			class: "dui-btn dui-btn-sm",
			type: "button",
			onClick: n[0] ||= (e) => t.$emit("openFormulaBuilder")
		}, [...n[2] ||= [R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-wand-magic-sparkles"
		}, null, -1), B(" Open Formula Builder ", -1)]])])) : V("", !0), z(_O, {
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
}), xO = ["aria-busy"], SO = {
	key: 1,
	class: "dui-modal-backdrop",
	method: "dialog"
}, CO = /* @__PURE__ */ M({
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
			return zD(n.issues, e);
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
				e.standalone ? V("", !0) : (F(), L(ID, {
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
				z(WD, {
					"active-tab": i.value,
					"is-busy": u.value,
					issues: e.issues,
					onSelect: n[1] ||= (e) => i.value = e
				}, null, 8, [
					"active-tab",
					"is-busy",
					"issues"
				]),
				i.value === "details" ? (F(), L(DD, {
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
				])) : i.value === "talents" ? (F(), L(oO, {
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
				])) : i.value === "changes" ? (F(), L(mD, {
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
				])) : i.value === "wounds" ? (F(), L(bO, {
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
				])) : (F(), L(HE, {
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
				!e.standalone && !e.isReadOnly ? (F(), L(JE, {
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
			], 10, xO)) : V("", !0), e.standalone ? V("", !0) : (F(), I("form", SO, [...n[20] ||= [R("button", {
				"aria-label": "Close subspecies editor",
				type: "submit"
			}, "Close", -1)]]))]),
			_: 1
		}, 40, ["class", "onKeydown"]));
	}
}), wO = /* @__PURE__ */ M({
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
		return (t, i) => (F(), L(CO, {
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
function TO(e, t) {
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
var EO = ["aria-current"], DO = { class: "dui-list-col-grow app:flex app:min-w-0 app:flex-col app:gap-1" }, OO = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, kO = { class: "app:flex app:flex-wrap app:items-center app:gap-1" }, AO = {
	key: 0,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, jO = {
	key: 1,
	class: "dui-badge dui-badge-ghost dui-badge-sm"
}, MO = ["title"], NO = { class: "app:sr-only" }, PO = ["aria-label", "disabled"], FO = /* @__PURE__ */ M({
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
			R("span", DO, [R("span", OO, [R("strong", null, O(e.title), 1), R("span", { class: D(["dui-badge dui-badge-outline dui-badge-sm", {
				"dui-badge-info": e.isSelected,
				"dui-badge-ghost": !e.isSelected
			}]) }, O(e.entryKey), 3)]), R("span", kO, [
				e.isReadOnly ? (F(), I("span", AO, [r[1] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-lock"
				}, null, -1), B(" " + O(e.readOnlyLabel), 1)])) : V("", !0),
				e.meta ? (F(), I("span", jO, O(e.meta), 1)) : V("", !0),
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
					R("span", NO, O(A(Zh)(e.validationIndicator)), 1)
				], 10, MO)) : V("", !0)
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
			}, null, 2), B(" " + O(e.actionLabel), 1)], 8, PO)
		], 10, EO));
	}
}), IO = { class: "dui-card dui-card-border dui-card-sm" }, LO = { class: "dui-card-body" }, RO = { class: "app:flex app:items-start app:justify-between app:gap-4" }, zO = { class: "dui-card-actions app:items-center" }, BO = ["disabled"], VO = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "note"
}, HO = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, UO = {
	key: 2,
	"aria-labelledby": "custom-variants-heading"
}, WO = { class: "app:flex app:items-center app:justify-between app:gap-2" }, GO = { class: "dui-badge dui-badge-sm" }, KO = {
	key: 0,
	class: "dui-alert",
	role: "status"
}, qO = {
	key: 1,
	class: "dui-list"
}, JO = {
	key: 3,
	"aria-labelledby": "installed-variants-heading"
}, YO = { class: "app:flex app:items-center app:justify-between app:gap-2" }, XO = { class: "dui-badge dui-badge-ghost dui-badge-sm" }, ZO = { class: "dui-list" }, QO = {
	key: 4,
	class: "dui-alert",
	role: "status"
}, $O = {
	key: 5,
	class: "dui-list"
}, ek = /* @__PURE__ */ M({
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
			return e.key.trim() || Lw(e);
		}
		return (t, n) => (F(), I("section", IO, [R("div", LO, [
			R("header", RO, [n[2] ||= R("div", null, [R("h3", { class: "dui-card-title" }, "Subspecies"), R("p", { class: "app:m-0" }, "Variants inherit this species and store only their changes.")], -1), R("div", zO, [R("button", {
				class: "dui-btn dui-btn-primary dui-btn-sm",
				disabled: !s.value,
				type: "button",
				onClick: n[0] ||= (e) => r("addSubspecies")
			}, [...n[1] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), B(" New Subspecies ", -1)]], 8, BO)])]),
			e.definition.origin === "runtime" && !e.definition.runtimeUnavailable ? (F(), I("div", VO, [...n[3] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-lock"
			}, null, -1), R("span", null, " Installed variants are read-only. New subspecies are saved by this module without changing the installed parent species. ", -1)]])) : V("", !0),
			e.definition.runtimeUnavailable ? (F(), I("div", HO, [...n[4] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-triangle-exclamation"
			}, null, -1), R("span", null, " The installed parent species is currently unavailable. Saved custom variants are being preserved, but new variants cannot be added until the source returns. ", -1)]])) : V("", !0),
			e.definition.origin === "runtime" ? (F(), I("section", UO, [R("header", WO, [n[5] ||= R("div", null, [R("h4", {
				id: "custom-variants-heading",
				class: "dui-card-title"
			}, "Custom Additions"), R("p", { class: "app:m-0" }, "Editable variants owned by this world.")], -1), R("span", GO, O(o.value.length), 1)]), o.value.length === 0 ? (F(), I("div", KO, [...n[6] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No custom variants yet. Add one without altering the installed species.", -1)]])) : (F(), I("ul", qO, [(F(!0), I(P, null, N(o.value, (t, n) => (F(), L(FO, {
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
			a.value.length > 0 ? (F(), I("section", JO, [R("header", YO, [n[7] ||= R("div", null, [R("h4", {
				id: "installed-variants-heading",
				class: "dui-card-title"
			}, "Installed Variants"), R("p", { class: "app:m-0" }, "Provided by WFRP or an active module.")], -1), R("span", XO, O(a.value.length), 1)]), R("ul", ZO, [(F(!0), I(P, null, N(a.value, (t, n) => (F(), L(FO, {
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
			e.definition.origin === "custom" && i.value.length === 0 ? (F(), I("div", QO, [...n[8] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No subspecies yet.", -1)]])) : e.definition.origin === "custom" ? (F(), I("ul", $O, [(F(!0), I(P, null, N(i.value, (t, n) => (F(), L(FO, {
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
}), tk = /* @__PURE__ */ M({
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
		let b = TO(r, {
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
		}, [z(wO, Aa({
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
		]), e.activeEditorTab === "details" ? (F(), L(pT, {
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
		])) : e.activeEditorTab === "attributes" ? (F(), L(Fw, {
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
		])) : e.activeEditorTab === "wounds" ? (F(), L(_O, {
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
		])) : g.value.length > 0 ? (F(), L(hw, {
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
		])) : e.activeEditorTab === "tables" ? (F(), L(HE, {
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
		])) : (F(), L(ek, {
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
}), nk = ["aria-busy"], rk = { class: "app:flex app:flex-1 app:flex-col app:gap-3 app:p-3" }, ik = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, ak = ["disabled"], ok = ["disabled"], sk = { class: "app:max-w-full app:overflow-x-auto" }, ck = {
	"aria-label": "Species editor sections",
	class: "dui-tabs dui-tabs-box app:min-w-max",
	role: "tablist"
}, lk = ["disabled", "onClick"], uk = ["title"], dk = { class: "app:sr-only" }, fk = {
	key: 0,
	class: "dui-tabs dui-tabs-border",
	role: "tablist",
	"aria-label": "Species table sections"
}, pk = ["onClick"], mk = {
	key: 1,
	class: "app:flex app:justify-end"
}, hk = {
	key: 4,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, gk = /* @__PURE__ */ M({
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
		let t = e, n = Tm(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = /* @__PURE__ */ k(t.initialTab), i = /* @__PURE__ */ k(t.initialTableTab), a = /* @__PURE__ */ k(), o = Jh(n), s = aC({
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
			...sC(n, {
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
			z(iC, {
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
			R("main", rk, [
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
				R("div", ik, [
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
					}, null, -1), B(" Duplicate ", -1)]], 8, ak)) : V("", !0),
					c.value?.origin === "custom" ? (F(), I("button", {
						key: 1,
						class: "dui-btn dui-btn-error dui-btn-outline dui-btn-sm",
						disabled: f.value,
						type: "button",
						onClick: _[2] ||= (...e) => A(s).requestDeleteDefinition && A(s).requestDeleteDefinition(...e)
					}, [..._[5] ||= [R("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-trash"
					}, null, -1), B(" Delete ", -1)]], 8, ok)) : V("", !0)
				]),
				R("div", sk, [R("div", ck, [(F(), I(P, null, N(h, (e) => R("button", {
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
					}, [R("span", dk, O(A(Zh)(b(e.tab))), 1)], 10, uk)) : V("", !0)
				], 10, lk)), 64))])]),
				r.value === "tables" ? (F(), I("div", fk, [(F(), I(P, null, N(g, (e) => R("button", {
					key: e.tab,
					class: D(["dui-tab", { "dui-tab-active": i.value === e.tab }]),
					role: "tab",
					type: "button",
					onClick: (t) => i.value = e.tab
				}, [B(O(e.label) + " ", 1), x(e.tab) ? (F(), I("span", {
					key: 0,
					class: D(["dui-status dui-status-sm", x(e.tab)?.severity === "error" ? "dui-status-error" : "dui-status-warning"])
				}, null, 2)) : V("", !0)], 10, pk)), 64))])) : V("", !0),
				r.value === "wounds" ? (F(), I("div", mk, [R("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: _[3] ||= (...t) => e.onOpenWoundFormula && e.onOpenWoundFormula(...t)
				}, [..._[6] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-wand-magic-sparkles"
				}, null, -1), B(" Open Formula Builder ", -1)]])])) : V("", !0),
				c.value && r.value === "subspecies" ? (F(), L(ek, {
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
				])) : c.value ? (F(), L(tk, Aa({
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
				])) : (F(), I("div", hk, [..._[7] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-triangle-exclamation"
				}, null, -1), R("span", null, "This species is no longer available. Return to the Species List.", -1)]]))
			])
		], 8, nk));
	}
}), _k = class extends QS {
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
		return gk;
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
}, vk = ["aria-busy"], yk = { class: "app:flex app:flex-1 app:flex-col app:gap-3 app:p-3" }, bk = {
	key: 0,
	class: "dui-alert dui-alert-success",
	role: "status"
}, xk = {
	key: 1,
	class: "dui-list app:gap-1"
}, Sk = ["onClick"], Ck = { class: "app:flex app:min-w-0 app:flex-1 app:flex-col app:items-start" }, wk = /* @__PURE__ */ M({
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
		]), R("main", yk, [R("div", {
			class: D(["dui-alert", a.value > 0 ? "dui-alert-error" : "dui-alert-warning"]),
			role: "status"
		}, [R("i", {
			"aria-hidden": "true",
			class: D(a.value > 0 ? "fa-solid fa-circle-exclamation" : "fa-solid fa-triangle-exclamation")
		}, null, 2), r[0] ||= R("span", null, " Errors identify data that blocks character creation. Warnings identify playable but incomplete data. Every issue below opens its exact editor. ", -1)], 2), i.value.length === 0 ? (F(), I("div", bk, [r[1] ||= R("i", {
			"aria-hidden": "true",
			class: "fa-solid fa-check"
		}, null, -1), R("span", null, O(c.value || "All species") + " currently has no validation issues.", 1)])) : (F(), I("ul", xk, [(F(!0), I(P, null, N(i.value, (t, n) => (F(), I("li", {
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
			R("span", Ck, [R("strong", null, O(t.context), 1), R("span", null, O(t.issue.message), 1)]),
			r[2] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-arrow-up-right-from-square"
			}, null, -1)
		], 10, Sk)]))), 128))]))])], 8, vk));
	}
}), Tk = class extends QS {
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
		return wk;
	}
	getApplicationProps() {
		return {
			definitionIndex: this.#e,
			onOpenDirectory: this.openDirectory,
			onSelectIssue: this.selectIssue
		};
	}
}, Ek = { class: "dui-card dui-card-border dui-card-sm" }, Dk = { class: "dui-card-body" }, Ok = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, kk = { class: "dui-badge dui-badge-sm" }, Ak = { class: "app:text-base-content/70" }, jk = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "status"
}, Mk = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, Nk = ["role"], Pk = {
	key: 3,
	class: "app:overflow-x-auto"
}, Fk = { class: "dui-table dui-table-sm" }, Ik = { scope: "row" }, Lk = ["for"], Rk = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onChange"
], zk = { value: "" }, Bk = ["disabled", "value"], Vk = ["id"], Hk = ["for"], Uk = [
	"id",
	"aria-describedby",
	"aria-invalid",
	"disabled",
	"value",
	"onInput"
], Wk = ["for"], Gk = [
	"disabled",
	"title",
	"onClick"
], Kk = { class: "app:sr-only" }, qk = {
	key: 4,
	class: "dui-alert dui-alert-info",
	role: "status"
}, Jk = /* @__PURE__ */ M({
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
		return (t, n) => (F(), I("section", Ek, [R("div", Dk, [
			z(bT, {
				"action-label": "Add Species",
				"action-title": "Add a weighted species result",
				count: e.draft.rows.length,
				description: "Weights set each species' share of random character-creation rolls.",
				"is-disabled": e.isDisabled,
				"heading-level": "h2",
				title: "Random Species Table",
				onAdd: n[0] ||= (e) => r("addRow")
			}, null, 8, ["count", "is-disabled"]),
			R("div", Ok, [R("span", kk, O(h()), 1), R("span", Ak, O(e.draft.name), 1)]),
			e.draft.ownership === "external" ? (F(), I("div", jk, [...n[1] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-copy"
			}, null, -1), R("span", null, " This is the current WFRP source table. On Save, table changes create a Species Builder-managed copy and leave the imported source unchanged. ", -1)]])) : V("", !0),
			e.draft.requiresLinkRepair ? (F(), I("div", Mk, [...n[2] ||= [R("i", {
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
			}, null, -1), R("span", null, [B(O(p() ? "Fix before saving:" : "Imported table needs attention:") + " " + O(f()[0]) + " ", 1), f().length > 1 ? (F(), I(P, { key: 0 }, [B(" (" + O(f().length) + " issues total) ", 1)], 64)) : V("", !0)])], 10, Nk)) : V("", !0),
			e.draft.rows.length ? (F(), I("div", Pk, [R("table", Fk, [
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
					R("th", Ik, O(d + 1), 1),
					R("td", null, [
						R("label", {
							class: "app:sr-only",
							for: `species-table-species-${d}`
						}, " Species for row " + O(d + 1), 9, Lk),
						R("select", {
							id: `species-table-species-${d}`,
							"aria-describedby": l(t, d) ? `species-table-row-error-${d}` : void 0,
							"aria-invalid": s(t, d) || void 0,
							class: D(["dui-select dui-select-sm app:min-w-48 app:w-full", { "dui-select-error": s(t, d) }]),
							disabled: e.isDisabled,
							value: t.speciesKey,
							onChange: (e) => r("updateRowKey", d, i(e))
						}, [R("option", zk, O(t.name ? `Unrecognized: ${t.name}` : "Choose a species"), 1), (F(!0), I(P, null, N(e.options, (e) => (F(), I("option", {
							key: e.key,
							disabled: o(e.key, d),
							value: e.key
						}, O(e.label), 9, Bk))), 128))], 42, Rk),
						l(t, d) ? (F(), I("span", {
							key: 0,
							id: `species-table-row-error-${d}`,
							class: "app:mt-1 app:block app:text-xs app:text-error"
						}, O(l(t, d)), 9, Vk)) : V("", !0)
					]),
					R("td", null, [R("label", {
						class: "app:sr-only",
						for: `species-table-weight-${d}`
					}, " Weight for row " + O(d + 1), 9, Hk), R("input", {
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
					}, null, 42, Uk)]),
					R("td", null, [R("output", { for: `species-table-weight-${d}` }, O(m(e.summaries[d])), 9, Wk)]),
					R("td", null, [R("button", {
						class: "dui-btn dui-btn-error dui-btn-outline dui-btn-sm",
						disabled: e.isDisabled,
						title: `Remove ${t.name || `row ${d + 1}`}`,
						type: "button",
						onClick: (e) => r("removeRow", d)
					}, [n[4] ||= R("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-trash"
					}, null, -1), R("span", Kk, "Remove row " + O(d + 1), 1)], 8, Gk)])
				], 2))), 128))])
			])])) : (F(), I("div", qk, [...n[7] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "Add at least one species to create a managed world table.", -1)]]))
		])]));
	}
}), Yk = ["aria-busy"], Xk = { class: "app:flex app:flex-1 app:flex-col app:gap-3 app:p-3" }, Zk = /* @__PURE__ */ M({
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
			R("main", Xk, [z(jm, {
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
			]), z(Jk, {
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
		], 8, Yk));
	}
}), Qk = class extends QS {
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
		return Zk;
	}
	getApplicationProps() {
		return {
			onOpenDirectory: this.openDirectory,
			onOpenIssues: this.openIssues
		};
	}
}, $k = ["aria-busy"], eA = { class: "app:flex app:flex-1 app:flex-col app:gap-3 app:p-3" }, tA = {
	key: 0,
	class: "app:flex app:justify-end"
}, nA = ["disabled"], rA = {
	key: 2,
	class: "dui-alert dui-alert-warning",
	role: "status"
}, iA = /* @__PURE__ */ M({
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
		let t = e, n = Tm(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = Jh(n), i = aC({
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
			z(iC, {
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
			R("main", eA, [
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
				!d.value && o.value ? (F(), I("div", tA, [R("button", {
					class: "dui-btn dui-btn-error dui-btn-outline dui-btn-sm",
					disabled: u.value,
					type: "button",
					onClick: _[1] ||= (t) => A(i).requestDeleteSubspecies(e.subspeciesIndex)
				}, [..._[4] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), B(" Delete Subspecies ", -1)]], 8, nA)])) : V("", !0),
				a.value && o.value ? (F(), L(CO, {
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
				}, null, 8, /* @__PURE__ */ "index.initial-tab.initial-table-tab.is-loading.is-read-only.is-saving.issues.parent-definition.parent-talents.random-talent-sources.subspecies.wound-formula-trait-name.onCareerTableCareerDrop.onCareerTableJournalDrop.onClose.onDelete.onOpenItem.onOpenWoundFormula.onSave.onTalentDrop.onUpdateArrayField.onUpdateCareerTableRows.onUpdateCharacteristic.onUpdateNumberField.onUpdateStringField.onUpdateTalentReplacementRows.onUpdateTextMapField.onUpdateWoundFormula".split("."))) : (F(), I("div", rA, [_[5] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-triangle-exclamation"
				}, null, -1), R("span", null, "This subspecies is no longer available. Return to " + O(h()) + ".", 1)]))
			])
		], 8, $k));
	}
}), aA = class extends QS {
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
		return iA;
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
}, oA = { class: "dui-card dui-card-border dui-card-sm" }, sA = { class: "dui-card-body" }, cA = { class: "dui-mockup-code" }, lA = { tabindex: "0" }, uA = /* @__PURE__ */ M({
	__name: "WfrpConfigPanel",
	props: { generatedConfigText: {} },
	setup(e) {
		return (t, n) => (F(), I("section", oA, [R("div", sA, [
			n[0] ||= R("h2", { class: "dui-card-title" }, "WFRP Config", -1),
			n[1] ||= R("p", null, " Read-only config generated from the current draft. This view grows with the outer application scroll area. ", -1),
			R("div", cA, [R("pre", lA, [R("code", null, O(e.generatedConfigText), 1)])])
		])]));
	}
}), dA = ["aria-busy"], fA = { class: "app:p-3" }, pA = /* @__PURE__ */ M({
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
		]), R("main", fA, [z(uA, { "generated-config-text": A(n).generatedConfigText.value }, null, 8, ["generated-config-text"])])], 8, dA));
	}
}), mA = class extends QS {
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
		return pA;
	}
	getApplicationProps() {
		return { onOpenDirectory: this.openDirectory };
	}
}, hA = ["aria-busy"], gA = { class: "app:grid app:flex-1 app:gap-3 app:p-3 app:md:grid-cols-[minmax(0,1fr)_16rem]" }, _A = { class: "dui-card dui-card-border dui-card-sm app:min-w-0" }, vA = { class: "dui-card-body" }, yA = ["disabled", "value"], bA = { class: "app:m-0 app:pl-4" }, xA = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, SA = {
	class: "app:flex app:flex-col app:gap-3",
	"aria-label": "Formula tokens"
}, CA = { class: "dui-fieldset app:rounded-box app:border app:border-base-300 app:bg-base-200 app:p-3" }, wA = { class: "app:flex app:flex-wrap app:gap-1" }, TA = [
	"disabled",
	"onClick",
	"onDragstart"
], EA = { class: "dui-fieldset app:rounded-box app:border app:border-base-300 app:bg-base-200 app:p-3" }, DA = { class: "app:flex app:flex-wrap app:gap-1" }, OA = [
	"disabled",
	"onClick",
	"onDragstart"
], kA = /* @__PURE__ */ M({
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
			R("main", gA, [R("section", _A, [R("div", vA, [
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
				}, null, 42, yA),
				c.value.length ? (F(), I("div", {
					key: 0,
					class: D(["dui-alert", l.value ? "dui-alert-error" : "dui-alert-warning"]),
					role: "alert"
				}, [a[2] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-triangle-exclamation"
				}, null, -1), R("ul", bA, [(F(!0), I(P, null, N(c.value, (e, t) => (F(), I("li", { key: `${e.code}-${t}` }, O(e.message), 1))), 128))])], 2)) : V("", !0),
				m.value ? (F(), I("p", xA, [a[3] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-wand-magic-sparkles"
				}, null, -1), R("span", null, "Generated Trait: " + O(m.value), 1)])) : V("", !0)
			])]), R("aside", SA, [R("fieldset", CA, [
				a[7] ||= R("legend", { class: "dui-fieldset-legend" }, "WFRP values", -1),
				a[8] ||= R("p", { class: "dui-label" }, "Bonuses, multipliers, Actor state, and scale.", -1),
				R("div", wA, [(F(!0), I(P, null, N(A(sO), (e) => (F(), I("button", {
					key: e,
					class: "dui-btn dui-btn-outline dui-btn-xs app:font-mono",
					disabled: d.value || f.value,
					draggable: "true",
					type: "button",
					onClick: (t) => _(e),
					onDragstart: (t) => v(t, e)
				}, O(e), 41, TA))), 128))])
			]), R("fieldset", EA, [
				a[9] ||= R("legend", { class: "dui-fieldset-legend" }, "Actor references", -1),
				a[10] ||= R("p", { class: "dui-label" }, [
					R("code", null, "{Name}"),
					B(" inserts a total; "),
					R("code", null, "[Name]"),
					B(" inserts its bonus. ")
				], -1),
				R("div", DA, [(F(), I(P, null, N(h, (e) => R("button", {
					key: e,
					class: "dui-btn dui-btn-outline dui-btn-xs app:font-mono",
					disabled: d.value || f.value,
					draggable: "true",
					type: "button",
					onClick: (t) => _(e),
					onDragstart: (t) => v(t, e)
				}, O(e), 41, OA)), 64))])
			])])])
		], 8, hA));
	}
}), AA = class extends QS {
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
		return kA;
	}
	getApplicationProps() {
		return {
			definitionIndex: this.#e,
			onOpenParent: () => this.openParent(this.#e, this.#t),
			subspeciesIndex: this.#t
		};
	}
}, jA = class extends QS {
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
		super(), this.#t = new _k({
			openDirectory: () => void this.render(!0),
			openIssues: (e) => void this.#n.open(e),
			openSubspecies: (e, t) => void this.openSubspecies(e, t),
			openWoundFormula: (e) => void this.openWoundFormula(e, void 0)
		}), this.#i = new aA({
			openIssues: (e) => void this.#n.open(e),
			openParent: (e) => void this.openSpecies(e, "subspecies"),
			openWoundFormula: (e, t) => void this.openWoundFormula(e, t)
		}), this.#e = new $S(() => void this.render(!0), (e) => void this.openSpecies(e)), this.#r = new Qk(() => void this.render(!0), () => void this.#n.open()), this.#a = new mA(() => void this.render(!0)), this.#n = new Tk(() => void this.render(!0), (e) => this.openValidationIssue(e)), this.#o = new AA((e, t) => {
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
function MA() {
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
function NA(e, t) {
	return `${e}:${zA(t)}`;
}
function PA(e) {
	let t = e.level ?? 1;
	return Number.isFinite(t) ? Math.max(1, Math.floor(t)) * 5 : 5;
}
function FA(e) {
	return e.name;
}
function IA(e, t) {
	return e === "characteristic" ? t.allowBaseActorCharacteristics : e === "skill" ? t.allowBaseActorSkills : t.allowBaseActorTalents;
}
function LA(e, t) {
	return {
		...MA(),
		...e,
		...t
	};
}
function RA(e, t) {
	return zA(e) === zA(t);
}
function zA(e) {
	return e.trim().toLocaleLowerCase();
}
function BA(e) {
	return Number.isFinite(e) ? Math.max(1, Math.floor(e)) : 1;
}
function VA(e) {
	let t = 0;
	for (let n of e) t += n.count;
	return t;
}
function HA(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = zA(r);
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/functions/npc-builder/skill-specialization.ts
function UA(e, t, n) {
	return `${e}:${JA(t)}:${n}`;
}
function WA(e, t) {
	let n = e.trim(), r = t.trim();
	return r ? `${n} (${r})` : n;
}
function GA(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "";
	return !n || !r || KA(e) ? null : {
		baseName: n,
		originalName: e,
		specialization: r
	};
}
function KA(e) {
	let t = /^(?<base>.+?)\s*\((?<specialization>[^)]+)\)\s*$/.exec(e.trim());
	if (!t?.groups) return null;
	let n = t.groups.base?.trim() ?? "", r = t.groups.specialization?.trim() ?? "", i = XA(r);
	return !n || !r || !YA(r, i) ? null : {
		baseName: n,
		options: i,
		originalName: e,
		specialization: r
	};
}
function qA(e, t) {
	let n = /* @__PURE__ */ new Map();
	return t.map((t) => {
		let r = JA(t), i = n.get(r) ?? 0;
		return n.set(r, i + 1), {
			occurrence: i,
			originalName: t,
			resolutionKey: UA(e, t, i)
		};
	});
}
function JA(e) {
	return e.trim().replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function YA(e, t) {
	return e.trim().toLocaleLowerCase() === "any" || t.length > 1;
}
function XA(e) {
	return e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
}
//#endregion
//#region src/functions/npc-builder/advancements/source-counts.ts
function ZA(e, t) {
	return t <= 0 ? [] : [{
		count: t,
		kind: "career",
		label: `${e} extra time`
	}];
}
function QA(e, t) {
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
function $A(e, t, n, r) {
	let i = tj(ej(e, r), n);
	return i.value === null ? t : Math.min(t, Math.max(0, i.value - e.baseAdvances));
}
function ej(e, t) {
	let n = t[zA(e.name)];
	return {
		maximumFormula: e.talentMaximumFormula ?? n?.maximumFormula ?? "",
		maximumKey: e.talentMaximumKey ?? n?.maximumKey ?? ""
	};
}
function tj(e, t) {
	let n = e.maximumKey.trim().toLocaleLowerCase();
	if (!n) return {
		label: "Unknown",
		value: null
	};
	if (n === "none") return {
		label: "-",
		value: null
	};
	if (n === "custom") return nj(e.maximumFormula, t);
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
function nj(e, t) {
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
function rj(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.careers) {
		let i = HA(oj(r, t, e.skillGrantResolutions)), a = PA(r) / 5, o = Math.max(0, BA(r.quantity) - 1) * 5;
		for (let e of i) {
			let i = NA(t, e), s = n.get(i);
			if (s) {
				a > s.highestLevel && (s.highestLevel = a, s.highestLevelSource = FA(r)), o > 0 && s.extraSources.push({
					count: o,
					kind: "career",
					label: `${r.name} extra time`
				});
				continue;
			}
			n.set(i, {
				extraSources: ZA(r.name, o),
				highestLevel: a,
				highestLevelSource: FA(r),
				name: e
			});
		}
	}
	for (let r of n.values()) aj(e, {
		careerValue: r.highestLevel * 5 + VA(r.extraSources),
		kind: t,
		name: r.name,
		sources: [{
			count: r.highestLevel * 5,
			kind: "career",
			label: r.highestLevelSource
		}, ...r.extraSources]
	});
}
function ij(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.careers) {
		let r = HA(oj(n, "talent", e.skillGrantResolutions)), i = Math.max(0, BA(n.quantity) - 1);
		for (let e of r) {
			let r = NA("talent", e), a = t.get(r);
			if (a) {
				i > 0 && a.extraSources.push({
					count: i,
					kind: "career",
					label: `${n.name} extra time`
				});
				continue;
			}
			t.set(r, {
				extraSources: ZA(n.name, i),
				firstSource: n.name,
				name: e
			});
		}
	}
	for (let n of t.values()) aj(e, {
		careerValue: 1 + VA(n.extraSources),
		kind: "talent",
		name: n.name,
		sources: [{
			count: 1,
			kind: "career",
			label: n.firstSource
		}, ...n.extraSources]
	}, e.characteristicTotals);
}
function aj(e, t, n = {}) {
	let r = NA(t.kind, t.name), i = e.entries.get(r);
	if (i) {
		let r = t.kind === "talent" && i.includedFromBase ? t.sources.slice(1) : t.sources, a = t.kind === "talent" ? $A(i, VA(r), n, e.talentMaximums) : t.careerValue;
		i.careerValue = a, i.includedFromCareer = !0, i.sources = [...i.sources.filter((e) => e.kind === "base"), ...QA(r, a)];
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
	t.kind === "talent" && (a.careerValue = $A(a, t.careerValue, n, e.talentMaximums), a.current = a.careerValue, a.sources = QA(t.sources, a.careerValue)), e.entries.set(r, { ...a });
}
function oj(e, t, n) {
	return t === "characteristic" ? e.grants.characteristics : t === "skill" ? qA(e.uuid, e.grants.skills).map((e) => n[e.resolutionKey] || e.originalName) : e.grants.talents;
}
//#endregion
//#region src/functions/npc-builder/advancements/entry-context.ts
function sj(e, t) {
	let n = {};
	for (let r of e.values()) {
		if (r.kind !== "characteristic") continue;
		let e = lc[zA(r.name)];
		if (!e) continue;
		let i = t[NA(r.kind, r.name)] ?? 0, a = Math.max(r.minimumCurrent, Math.floor(r.careerValue + i));
		n[e] = Math.max(0, r.baseValue + a);
	}
	return n;
}
function cj(e, t, n) {
	return e.kind === "skill" ? lj(e, t, n) : e.kind === "talent" ? uj(e, t, n) : e;
}
function lj(e, t, n) {
	let r = dj(e) ?? fj(e.name, n.skillCharacteristics) ?? pj(e.name, n.baseActorDraftData);
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
function uj(e, t, n) {
	let r = ej(e, n.talentMaximums), i = tj(r, t);
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
function dj(e) {
	return !e.characteristicKey || !e.characteristicName ? null : {
		characteristicKey: e.characteristicKey,
		characteristicName: e.characteristicName,
		skillName: e.name
	};
}
function fj(e, t) {
	return t[zA(e)] ?? null;
}
function pj(e, t) {
	let n = t.advancements.find((t) => t.kind === "skill" && RA(t.name, e));
	return n?.characteristicKey ? {
		characteristicKey: n.characteristicKey,
		characteristicName: n.characteristicName ?? cc[n.characteristicKey],
		skillName: e
	} : null;
}
//#endregion
//#region src/functions/npc-builder/advancements/derive-advancements.ts
function mj(e) {
	let t = yj(e.baseActorDraftData), n = {
		careers: e.careers,
		entries: t,
		skillGrantResolutions: e.skillGrantResolutions,
		talentMaximums: e.talentMaximums
	};
	rj(n, "characteristic"), rj(n, "skill");
	let r = sj(t, e.manualAdvancementDeltas);
	return ij({
		...n,
		characteristicTotals: r
	}), bj(t, e.customAdvancements), [...t.values()].filter((t) => t.includedFromCareer || t.includedFromCustom || IA(t.kind, e.settings)).map((t) => {
		let n = cj(t, r, e), i = NA(t.kind, t.name), a = e.manualAdvancementDeltas[i] ?? 0, o = n.careerValue + a;
		return {
			...n,
			current: Math.max(n.minimumCurrent, Math.floor(o))
		};
	}).sort(xj);
}
function hj(e, t) {
	let n = Number.isFinite(t) ? t : 0;
	return Math.max(e.minimumCurrent, Math.floor(n)) - e.careerValue;
}
function gj(e, t) {
	let n = Number.isFinite(t) ? t : 0;
	return hj(e, Math.max(e.minimumTotal, Math.floor(n)) - e.baseValue);
}
function _j(e, t) {
	return {
		...e,
		...Object.fromEntries(t.map((e) => [zA(e.skillName), e]))
	};
}
function vj(e, t) {
	return {
		...e,
		...Object.fromEntries(t.map((e) => [zA(e.talentName), e]))
	};
}
function yj(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.advancements) {
		let e = NA(n.kind, n.name), r = {
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
function bj(e, t) {
	for (let n of t) {
		let t = NA(n.kind, n.name), r = {
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
function xj(e, t) {
	return e.kind === t.kind ? e.name.localeCompare(t.name) : e.kind.localeCompare(t.kind);
}
//#endregion
//#region src/functions/npc-builder/advancements/advancement-actions.ts
function Sj(e) {
	return e.kind === "talent" ? 1 : 5;
}
function Cj(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function wj(e, t) {
	return Cj(e) + t * Sj(e);
}
function Tj(e) {
	return Cj(e);
}
function Ej(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && Tj(e) < t;
}
function Dj(e) {
	return e.filter((e) => e.kind === "talent" && Ej(e)).map((e) => ({
		kind: e.kind,
		name: e.name,
		total: e.talentMaximumValue
	}));
}
function Oj(e, t) {
	let n = new Map(e.map((e) => [Aj(e), e])), r = [];
	for (let e of t) {
		let t = n.get(Aj(e));
		!t || t.current === e.current || r.push({
			current: e.current,
			kind: t.kind,
			name: t.name
		});
	}
	return r;
}
function kj(e, t) {
	return e.find((e) => e.kind === t.kind && e.name === t.name) ?? null;
}
function Aj(e) {
	return `${e.kind}:${e.name}`;
}
//#endregion
//#region src/functions/npc-builder/xp-cost.ts
var jj = {
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
function Mj(e) {
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
		let e = Hj(r), i = e + r.current;
		if (r.kind === "characteristic") {
			let a = lc[zA(r.name)];
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
	return Nj(n, t);
}
function Nj(e, t) {
	let n = Lj(e, t), r = Rj(e.skills, t.skills, jj.skill), i = zj(e.talents, t.talents);
	return {
		characteristics: n,
		skills: r,
		talents: i,
		total: n + r + i
	};
}
function Pj(e) {
	let t = Math.max(0, Math.floor(e.current));
	return e.kind === "talent" ? Ij(t) : Fj(t, e.kind === "characteristic" ? jj.characteristic : jj.skill);
}
function Fj(e, t) {
	let n = Math.max(0, Math.floor(e)), r = 0;
	for (let e = 0; e < n; e += 1) {
		let n = Math.min(Math.floor(e / 5), t.length - 1);
		r += t[n] ?? 0;
	}
	return r;
}
function Ij(e, t = 0) {
	let n = Math.max(0, Math.floor(e)), r = Math.max(0, Math.floor(t)), i = 0;
	for (let e = 0; e < n; e += 1) i += (r + e + 1) * 100;
	return i;
}
function Lj(e, t) {
	let n = 0;
	for (let r of Object.keys(cc)) {
		let i = r, a = Vj(e.characteristics[i] ?? 0, t.characteristics[i] ?? 0);
		n += Fj(a, jj.characteristic);
	}
	return n;
}
function Rj(e, t, n) {
	let r = Bj(e), i = Bj(t), a = 0;
	for (let [e, t] of r) {
		let r = Vj(t, i.get(e) ?? 0);
		a += Fj(r, n);
	}
	return a;
}
function zj(e, t) {
	let n = Bj(e), r = Bj(t), i = 0;
	for (let [e, t] of n) {
		let n = Vj(t, r.get(e) ?? 0);
		i += Ij(n);
	}
	return i;
}
function Bj(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = zA(n.name), r = Math.floor(n.value);
		e && t.set(e, (t.get(e) ?? 0) + r);
	}
	return t;
}
function Vj(e, t) {
	return Math.max(0, Math.floor(e) - Math.floor(t));
}
function Hj(e) {
	return e.kind === "characteristic" ? Math.floor(e.baseValue) : e.kind === "skill" ? Math.floor(e.baseAdvances + (e.baseModifier ?? 0)) : Math.floor(e.baseAdvances);
}
//#endregion
//#region src/state/npc-builder/advancements/index.ts
function Uj(e) {
	let { baseActorDraftData: t, careers: n, customAdvancements: r, manualAdvancementDeltas: i, settings: a, skillCharacteristics: o, skillGrantResolutions: s, talentMaximums: c } = e, l = H(() => mj({
		baseActorDraftData: t.value,
		careers: n.value,
		customAdvancements: r.value,
		manualAdvancementDeltas: i.value,
		settings: a.value,
		skillCharacteristics: o.value,
		skillGrantResolutions: s.value,
		talentMaximums: c.value
	})), u = H(() => Mj(l.value)), d = H(() => Dj(l.value).length);
	function f(e) {
		let t = NA(e.kind, e.name);
		r.value.some((e) => NA(e.kind, e.name) === t) || r.value.push(e);
	}
	function p(e) {
		let t = NA(e.kind, e.name);
		r.value = r.value.filter((e) => NA(e.kind, e.name) !== t), delete i.value[t];
	}
	function m(e, t) {
		x(e, wj(e, t));
	}
	function h() {
		for (let e of Dj(l.value)) {
			let t = kj(l.value, e);
			t && x(t, e.total);
		}
	}
	function g(e, t) {
		let n = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), r = e.run({ advancements: l.value }, n), i = Oj(l.value, r.advancements);
		for (let e of i) {
			let t = kj(l.value, e);
			t && b(t, e.current);
		}
	}
	function _(e) {
		return s.value[e] ?? "";
	}
	function v(e) {
		o.value = _j(o.value, e);
	}
	function y(e) {
		c.value = vj(c.value, e);
	}
	function b(e, t) {
		let n = NA(e.kind, e.name);
		i.value[n] = hj(e, t);
	}
	function x(e, t) {
		let n = NA(e.kind, e.name);
		i.value[n] = gj(e, t);
	}
	function S(e) {
		let t = NA(e.kind, e.name);
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
function Wj(e, t) {
	return e.find((e) => e.uuid === t) ?? null;
}
function Gj(e) {
	return e.at(-1) ?? null;
}
function Kj(e) {
	let t = e.finalCareer?.name, n = e.settings.includeSpeciesInName && e.selectedBaseActor?.species ? e.selectedBaseActor.species : "";
	return t && n ? `${n} ${t}` : t || (e.selectedBaseActor ? `${e.selectedBaseActor.name} NPC` : "New NPC");
}
function qj(e, t) {
	return e.trim() || t;
}
function Jj(e) {
	return e.finalCareer?.img || e.selectedBaseActor?.prototypeTokenImg || e.selectedBaseActor?.img || "";
}
function Yj(e, t) {
	return e || t;
}
function Xj(e) {
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
function Zj(e) {
	let { actorName: t, baseActors: n, careers: r, clearBaseDraftData: i, clearMountSelection: a, customAdvancements: o, customSpells: s, customTraits: c, customTrappings: l, detectedSpells: u, ignoredBaseTraitKeys: d, magicLoreResolutions: f, removeSkillGrantResolutionsForCareer: p, selectedBaseActorUuid: m, selectedPortraitPath: h, settings: g, skillGrantResolutions: _, spellSelectionOverrides: v } = e, y = H(() => Wj(n.value, m.value)), b = H(() => Gj(r.value)), x = H(() => Kj({
		finalCareer: b.value,
		selectedBaseActor: y.value,
		settings: g.value
	})), S = H(() => qj(t.value, x.value)), C = H(() => Jj({
		finalCareer: b.value,
		selectedBaseActor: y.value
	})), ee = H(() => Yj(h.value, C.value)), te = H(() => Xj(r.value));
	function ne(e) {
		let t = r.value.find((t) => t.uuid === e.uuid);
		if (t) {
			t.quantity = BA(t.quantity + 1);
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
		n && (n.quantity = BA(t));
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
function Qj(e) {
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
function $j(e) {
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
//#region src/functions/portrait-gallery/source-filters.ts
function eM(e) {
	return e.sourceFilter ? e.sourceFilter : e.sourceGroup ? {
		label: rM(e.sourceGroup),
		value: e.sourceGroup
	} : null;
}
function tM(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = eM(n);
		e && !t.has(e.value) && t.set(e.value, e);
	}
	return [...t.values()];
}
function nM(e) {
	return {
		label: `Priority Folder: ${e.split("/").filter(Boolean).slice(-2).join("/") || e}`,
		value: `priority-folder:${e.toLocaleLowerCase()}`
	};
}
function rM(e) {
	return {
		career: "Career",
		compendiums: "Compendiums",
		"dig-down": "Dig Down",
		"priority-folders": "Priority Folders",
		world: "World"
	}[e];
}
//#endregion
//#region src/functions/portrait-gallery/candidate-collection.ts
function iM(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = cM(r.img);
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
function aM(e) {
	let t = iM(oM([...e.assetCandidates, ...e.immediateCandidates]));
	return !e.selectedPortraitPath || t.some((t) => cM(t.img) === cM(e.selectedPortraitPath)) ? t : [{
		img: e.selectedPortraitPath,
		key: `selected:${e.selectedPortraitPath}`,
		label: "Selected portrait",
		source: "foundry-asset",
		sourceLabel: "Selected"
	}, ...t];
}
function oM(e) {
	return e.map((e, t) => ({
		candidate: e,
		index: t
	})).sort((e, t) => sM(e.candidate) - sM(t.candidate) || e.index - t.index).map(({ candidate: e }) => e);
}
function sM(e) {
	return e.sourceFilter?.value.startsWith("priority-folder:") ? 0 : e.sourceGroup ? {
		career: 1,
		compendiums: 2,
		world: 3,
		"dig-down": 4
	}[e.sourceGroup] ?? 5 : 5;
}
function cM(e) {
	return e.trim().toLocaleLowerCase();
}
//#endregion
//#region src/functions/portrait-gallery/index.ts
var lM = new Set([
	"and",
	"any",
	"the",
	"with",
	"without",
	"of",
	"or",
	"npc"
]), uM = "portrait-gallery-filter:", dM = "modules/wfrp4e-core/art/careers", fM = [
	"modules/wfrp4e-core/art/bestiary",
	"modules/wfrp4e-core/tokens",
	"modules/wfrp4e-core/tokens/popout"
], pM = ["systems/wfrp4e/tokens/unknown.png"], mM = "application/x-wfrp4e-customizer-portrait-filter-tag";
function hM(e) {
	return NM(MM(e).filter((e) => e.length >= 3 && !lM.has(e)));
}
function gM(e) {
	return NM(e.flatMap(hM));
}
function _M(e) {
	if (!Array.isArray(e)) return [];
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		if (typeof r != "string") continue;
		let e = r.trim().replaceAll("\\", "/").replace(/^\/+|\/+$/gu, ""), i = e.toLocaleLowerCase();
		e && !t.has(i) && (t.add(i), n.push(e));
	}
	return n;
}
function vM(e) {
	return _M([
		...e.hasCareer ? [dM] : [],
		...fM,
		...e.configuredFolders
	]);
}
function yM(e, t, n) {
	return e.filter((e) => (t[e] ?? "search") === n);
}
function bM(e, t) {
	let n = jM(e);
	return !!(n && t.some((e) => n.includes(e)));
}
function xM(e, t) {
	let n = AM(e), r = eM(e), i = t.mustIncludeSources.length === 0 || r !== null && t.mustIncludeSources.includes(r.value), a = r !== null && t.mustExcludeSources.includes(r.value);
	return t.mustIncludeTerms.every((e) => n.includes(e)) && t.mustExcludeTerms.every((e) => !n.includes(e)) && i && !a;
}
function SM(e) {
	return `${uM}${e}`;
}
function CM(e) {
	return e.startsWith(uM) ? e.slice(24) : null;
}
function wM(e) {
	return e.hasEnabledSource && e.hasSubject && e.searchTerms.length > 0;
}
function TM(e) {
	return e ? e.maxDirectories <= 0 ? e.phase === "ready" ? 100 : 4 : Math.min(100, Math.round(e.directoriesVisited / e.maxDirectories * 100)) : 0;
}
function EM(e) {
	return e ? e.phase === "ready" ? `${e.candidatesFound} options found` : e.phase === "filesystem" ? e.maxDirectories <= 0 ? `${e.directoriesVisited} directories - ${e.currentLocation}` : `${e.directoriesVisited}/${e.maxDirectories} directories - ${e.currentLocation}` : e.currentLocation : "";
}
function DM(e) {
	return `${e.label}\n${e.img}`;
}
function OM(e) {
	return `Use ${e.label} (${kM(e)})`;
}
function kM(e) {
	return e.sourceLabel ?? {
		"base-actor": "Actor Portrait",
		"base-token": "Prototype Token",
		career: "Career",
		"foundry-asset": "Foundry",
		web: "Web"
	}[e.source];
}
function AM(e) {
	return jM([
		e.label,
		e.img,
		e.sourceLabel ?? ""
	].filter(Boolean).join(" "));
}
function jM(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/[_-]/g, " ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\s+/g, " ");
}
function MM(e) {
	return jM(e).split(" ").filter(Boolean);
}
function NM(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/state/portrait-gallery/filters.ts
function PM() {
	let e = /* @__PURE__ */ k([]), t = /* @__PURE__ */ k({}), n = /* @__PURE__ */ k({});
	function r(t) {
		let r = new Set(e.value), i = hM(t).filter((e) => !r.has(e));
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
//#region src/state/npc-builder/portraits.ts
function FM() {
	return PM();
}
//#endregion
//#region src/functions/npc-builder/default-npc-builder-settings.ts
function IM() {
	return {
		allowBaseActorCharacteristics: !1,
		allowBaseActorSkills: !1,
		allowBaseActorTalents: !1,
		allowBaseActorTraits: !0,
		allowBaseActorTrappings: !0,
		askForLinkedSkillSpecializations: !1,
		autoSelectGrantedSpells: !0,
		baseActorFolderUuid: "",
		excludeFullyTransparentPortraitAssets: !0,
		excludedPortraitReferenceImages: [...pM],
		includeSpeciesInName: !1,
		lowerCareerMode: "prompt",
		outputActorFolderUuid: "",
		prioritizedPortraitFolders: [],
		quickTraitFolderUuid: "",
		searchCompendiumPortraitAssets: !0,
		searchFoundryPortraitAssets: !1,
		searchWebPortraitAssets: !1
	};
}
//#endregion
//#region src/state/npc-builder/settings.ts
var LM = IM(), RM = {
	advancements: [],
	optionalTraits: [],
	traits: [],
	trappings: []
}, zM = /\(([^)]+)\)/, BM = [
	"beasts",
	"death",
	"fire",
	"heavens",
	"metal",
	"life",
	"light",
	"shadow"
], VM = [
	"daemonology",
	"necromancy",
	"nurgle",
	"slaanesh",
	"tzeentch",
	"undivided"
];
function HM(e, t) {
	let n = e.trim(), r = n.toLocaleLowerCase();
	return r === "petty magic" ? YM({
		kind: "petty-magic",
		rawLore: "Petty Magic",
		source: t,
		sourceName: n
	}) : r.startsWith("arcane magic") ? YM({
		kind: "arcane-magic",
		rawLore: XM(n),
		source: t,
		sourceName: n
	}) : r.startsWith("spellcaster") ? YM({
		kind: "spellcaster",
		rawLore: XM(n),
		source: t,
		sourceName: n
	}) : null;
}
function UM(e) {
	return e.trim().replace(/^any\s+/i, "").replace(/^arcane\s+lore\s+of\s+/i, "").replace(/^arcane\s+lore$/i, "").replace(/^lore\s+of\s+/i, "").replaceAll(/\s+/g, " ").toLocaleLowerCase();
}
function WM(e) {
	return `${e.source}:${e.kind}:${e.sourceName}:${e.rawLore}`;
}
function GM(e, t) {
	return {
		...e,
		isAmbiguous: !1,
		normalizedLore: UM(t),
		rawLore: t.trim()
	};
}
function KM(e) {
	let t = UM(e);
	return t === "petty" ? "petty" : BM.includes(t) ? "eight-wind" : VM.includes(t) ? "dark" : "other";
}
function qM(e, t) {
	if (e.kind === "petty-magic") return t.filter((e) => e.category === "petty");
	let n = e.rawLore.trim().toLocaleLowerCase();
	return n.includes("dark") ? t.filter((e) => e.category === "dark") : n.includes("eight winds") ? t.filter((e) => e.category === "eight-wind") : t.filter((e) => e.category !== "petty");
}
function JM(e) {
	let t = e.trim().toLocaleLowerCase();
	return !t || t === "any" || t.includes("any ");
}
function YM(e) {
	let t = e.rawLore.trim();
	return {
		isAmbiguous: JM(t),
		kind: e.kind,
		normalizedLore: UM(t),
		rawLore: t,
		resolutionKey: WM({
			kind: e.kind,
			rawLore: t,
			source: e.source,
			sourceName: e.sourceName
		}),
		source: e.source,
		sourceName: e.sourceName
	};
}
function XM(e) {
	return zM.exec(e)?.[1]?.trim() ?? "";
}
//#endregion
//#region src/functions/npc-builder/spells/derive-magic-grants.ts
function ZM(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.advancements) n.kind !== "talent" || n.baseAdvances + n.current <= 0 || QM(t, HM(n.name, "talent"), e);
	for (let n of e.traits) QM(t, HM(n.name, "trait"), e);
	return [...t.values()];
}
function QM(e, t, n) {
	if (!t) return;
	let r = n.loreResolutions[t.resolutionKey];
	e.set(t.resolutionKey, r ? GM(t, r) : t);
}
//#endregion
//#region src/functions/npc-builder/spells/derive-spells.ts
function $M(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.detectedSpells) t.set(n.key, {
		...n,
		selected: e.selectionOverrides[n.key] ?? e.autoSelectDetectedSpells
	});
	for (let n of e.customSpells) t.set(n.key, {
		...n,
		selected: e.selectionOverrides[n.key] ?? n.selected
	});
	return [...t.values()].sort(iN);
}
function eN(e) {
	return e.filter((e) => e.selected);
}
function tN(e) {
	return e.spells.map((t) => ({
		...t,
		selected: e.selectionOverrides[t.key] ?? e.autoSelectDetectedSpells
	}));
}
function nN(e) {
	let t = e.detectedSpells.find((t) => rN(t, e.spell));
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
function rN(e, t) {
	return e.sourceUuid && e.sourceUuid === t.sourceUuid ? !0 : RA(e.name, t.name);
}
function iN(e, t) {
	return e.loreName === t.loreName ? e.name.localeCompare(t.name) : e.loreName.localeCompare(t.loreName);
}
//#endregion
//#region src/state/npc-builder/spells.ts
function aN(e) {
	let { advancements: t, customSpells: n, detectedSpells: r, magicLoreResolutions: i, settings: a, spellSelectionOverrides: o, traits: s } = e, c = H(() => ZM({
		advancements: t.value,
		loreResolutions: i.value,
		traits: s.value
	})), l = H(() => c.value.length > 0), u = H(() => $M({
		autoSelectDetectedSpells: a.value.autoSelectGrantedSpells,
		customSpells: n.value,
		detectedSpells: r.value,
		selectionOverrides: o.value
	})), d = H(() => eN(u.value));
	function f(e) {
		let t = nN({
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
		r.value = tN({
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
function oN(e) {
	let t = /* @__PURE__ */ new Map();
	if (e.allowBaseActorTraits) for (let n of e.baseActorDraftData.traits) {
		let r = uN(n);
		e.ignoredBaseTraitKeys[r] || t.set(r, pN(n, r, !1));
	}
	for (let n of e.customTraits) fN([...t.values()], n.name) || t.set(n.key, { ...n });
	return [...t.values()].map((t) => ({
		...t,
		config: LA(t.config, e.traitConfigOverrides[t.key])
	})).sort(mN);
}
function sN(e) {
	return e.allowBaseActorTraits ? [...e.baseActorDraftData.traits.filter((t) => e.ignoredBaseTraitKeys[uN(t)]).map((t) => {
		let n = uN(t);
		return {
			...pN(t, n, !0),
			config: LA(t.config, e.traitConfigOverrides[n])
		};
	}), ...e.selectedTraits] : e.selectedTraits;
}
function cN(e) {
	return e.optionalTraits.map((e) => ({
		config: e.config,
		img: e.img,
		name: e.name,
		uuid: e.uuid
	})).sort((e, t) => e.name.localeCompare(t.name));
}
function lN(e, t) {
	return {
		config: t.config,
		ignored: !1,
		key: `${e}:${t.uuid || zA(t.name)}`,
		name: t.name,
		source: e,
		sourceUuid: t.uuid
	};
}
function uN(e) {
	return `base:${e.uuid || zA(e.name)}`;
}
function dN(e, t) {
	return e.find((e) => RA(e.name, t));
}
function fN(e, t) {
	return dN(e, t) !== void 0;
}
function pN(e, t, n) {
	return {
		config: e.config,
		ignored: n,
		key: t,
		name: e.name,
		source: "base",
		sourceUuid: e.uuid
	};
}
function mN(e, t) {
	return e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source);
}
//#endregion
//#region src/state/npc-builder/traits.ts
function hN(e) {
	let { baseActorDraftData: t, customTraits: n, ignoredBaseTraitKeys: r, quickTraits: i, settings: a, traitConfigOverrides: o } = e, s = H(() => oN({
		allowBaseActorTraits: a.value.allowBaseActorTraits,
		baseActorDraftData: t.value,
		customTraits: n.value,
		ignoredBaseTraitKeys: r.value,
		traitConfigOverrides: o.value
	})), c = H(() => sN({
		allowBaseActorTraits: a.value.allowBaseActorTraits,
		baseActorDraftData: t.value,
		ignoredBaseTraitKeys: r.value,
		selectedTraits: s.value,
		traitConfigOverrides: o.value
	})), l = H(() => cN(t.value));
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
		let i = lN(e, t);
		if (!r) {
			d(i.key), x(t.name, !0);
			return;
		}
		x(t.name, !1) || n.value.find((e) => e.key === i.key) || h(i);
	}
	function h(e) {
		fN(s.value, e.name) || n.value.some((t) => t.key === e.key) || n.value.push(e);
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
		return dN(l.value, e);
	}
	function y(e) {
		return dN(i.value, e);
	}
	function b(e) {
		let n = dN(t.value.traits, e);
		if (!n) return null;
		let i = uN(n);
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
function gN(e, t = "trapping") {
	return {
		candidates: [],
		searchTerms: bN(e),
		selectedCandidateUuid: "",
		selectedItemType: t,
		selectedName: e.trim(),
		status: "fallback"
	};
}
function _N(e) {
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
function vN(e) {
	return {
		candidates: [],
		searchTerms: bN(e),
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "unresolved"
	};
}
function yN(e, t) {
	let n = bN(e), r = SN(n, t), i = r.filter((e) => e.matchKind === "exact");
	return i.length === 1 ? wN("matched", n, i[0]) : i.length > 1 ? wN("ambiguous", n, i[0], { candidates: r }) : r.length ? {
		candidates: r,
		searchTerms: n,
		selectedCandidateUuid: "",
		selectedItemType: "trapping",
		selectedName: e.trim(),
		status: "ambiguous"
	} : gN(e);
}
function bN(e) {
	let t = e.split(/\s+or\s+/i).map((e) => e.trim()).filter(Boolean);
	return t.length ? ON(t) : [e.trim()].filter(Boolean);
}
function xN(e, t) {
	if (TN(e) === TN(t)) return "exact";
	let n = EN(e), r = EN(t);
	if (!n || !r) return null;
	if (n === r || n.includes(r) || r.includes(n)) return "near";
	let i = n.split(" "), a = new Set(r.split(" "));
	return i.every((e) => a.has(e)) ? "near" : null;
}
function SN(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) for (let e of t) {
		let t = xN(r, e.name);
		t && n.get(e.uuid)?.matchKind !== "exact" && n.set(e.uuid, {
			itemType: e.itemType,
			matchKind: t,
			name: e.name,
			searchTerm: r,
			sourceLabel: e.sourceLabel,
			uuid: e.uuid
		});
	}
	return [...n.values()].sort(CN);
}
function CN(e, t) {
	return e.matchKind === t.matchKind ? e.name.localeCompare(t.name) : e.matchKind === "exact" ? -1 : 1;
}
function wN(e, t, n, r = {}) {
	return {
		candidates: r.candidates ?? (n ? [n] : []),
		searchTerms: t,
		selectedCandidateUuid: n?.uuid ?? "",
		selectedItemType: n?.itemType ?? "trapping",
		selectedName: n?.name ?? "",
		status: e
	};
}
function TN(e) {
	return e.trim().toLocaleLowerCase().replaceAll(/\s+/g, " ");
}
function EN(e) {
	return TN(e).replaceAll("&", " and ").replaceAll(/[(),.:;[\]]/g, " ").replaceAll(/\b(a|an|the|some|pair of|pairs of)\b/g, " ").split(/\s+/).map(DN).filter(Boolean).join(" ");
}
function DN(e) {
	return e.endsWith("ies") && e.length > 4 ? `${e.slice(0, -3)}y` : e.endsWith("s") && !e.endsWith("ss") && e.length > 3 ? e.slice(0, -1) : e;
}
function ON(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/functions/npc-builder/trappings/derive-trappings.ts
function kN(e) {
	let t = /* @__PURE__ */ new Map();
	MN(t, e), NN(t, e);
	for (let n of e.customTrappings) t.set(n.key, { ...n });
	return [...t.values()].map((t) => PN(t, e)).sort(FN);
}
function AN(e, t) {
	let n = e.resolution.candidates.find((e) => e.uuid === t);
	return n ? {
		...e.resolution,
		selectedCandidateUuid: n.uuid,
		selectedItemType: n.itemType,
		selectedName: n.name,
		status: e.resolution.status === "matched" ? "matched" : "ambiguous"
	} : null;
}
function jN(e) {
	return {
		...gN(e.name, e.itemType),
		candidates: e.resolution.candidates,
		searchTerms: e.resolution.searchTerms
	};
}
function MN(e, t) {
	if (t.settings.allowBaseActorTrappings) for (let n of t.baseActorDraftData.trappings) {
		let t = `base:${n.uuid || zA(n.name)}`;
		e.set(t, {
			ignored: !1,
			itemType: n.itemType,
			key: t,
			name: n.name,
			quantity: n.quantity,
			resolution: _N({
				itemType: n.itemType,
				name: n.name,
				uuid: n.uuid
			}),
			source: "base",
			sourceUuid: n.uuid
		});
	}
}
function NN(e, t) {
	for (let n of t.careers) for (let r of n.grants.trappings) {
		let i = `career:${zA(r)}`, a = e.get(i);
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
			resolution: t.trappingResolutionOverrides[i] ?? vN(r),
			source: "career",
			sourceUuid: ""
		});
	}
}
function PN(e, t) {
	let n = t.trappingOverrides[e.key];
	return {
		...e,
		ignored: n?.ignored ?? e.ignored,
		quantity: BA(n?.quantity ?? e.quantity),
		resolution: t.trappingResolutionOverrides[e.key] ?? e.resolution
	};
}
function FN(e, t) {
	return e.source === t.source ? e.name.localeCompare(t.name) : e.source.localeCompare(t.source);
}
//#endregion
//#region src/state/npc-builder/trappings.ts
function IN(e) {
	let { baseActorDraftData: t, careers: n, customTrappings: r, settings: i, trappingOverrides: a, trappingResolutionOverrides: o } = e, s = H(() => kN({
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
			quantity: BA(t)
		};
	}
	function f(e, t) {
		let n = s.value.find((t) => t.key === e), r = n ? AN(n, t) : null;
		r && (o.value[e] = r);
	}
	function p(e) {
		let t = s.value.find((t) => t.key === e);
		t && (o.value[e] = jN(t));
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
var LN = Rs("npc-builder", () => {
	let e = /* @__PURE__ */ k(""), t = /* @__PURE__ */ k([]), n = /* @__PURE__ */ k({}), r = /* @__PURE__ */ k(null), i = /* @__PURE__ */ k({ ...RM }), a = /* @__PURE__ */ k([]), o = /* @__PURE__ */ k([]), s = /* @__PURE__ */ k([]), c = /* @__PURE__ */ k([]), l = /* @__PURE__ */ k([]), u = /* @__PURE__ */ k(null), d = /* @__PURE__ */ k([]), f = /* @__PURE__ */ k([]), p = /* @__PURE__ */ k(""), m = /* @__PURE__ */ k({ ...LM }), h = /* @__PURE__ */ k(""), g = /* @__PURE__ */ k(""), _ = /* @__PURE__ */ k({}), v = /* @__PURE__ */ k({}), y = /* @__PURE__ */ k({}), b = /* @__PURE__ */ k([]), x = /* @__PURE__ */ k([]), S = /* @__PURE__ */ k([]), C = /* @__PURE__ */ k({}), ee = /* @__PURE__ */ k({}), te = /* @__PURE__ */ k({}), ne = /* @__PURE__ */ k({}), re = /* @__PURE__ */ k({}), ie = /* @__PURE__ */ k({}), w = Uj({
		baseActorDraftData: i,
		careers: o,
		customAdvancements: S,
		manualAdvancementDeltas: n,
		settings: m,
		skillCharacteristics: _,
		skillGrantResolutions: y,
		talentMaximums: v
	}), T = FM(), ae = Qj({
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
	}), oe = $j({
		baseActorCombatProfile: r,
		mountActorProfile: u,
		mountActors: d,
		selectedMountActorUuid: g
	}), se = Zj({
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
	}), ce = hN({
		baseActorDraftData: i,
		customTraits: s,
		ignoredBaseTraitKeys: C,
		quickTraits: f,
		settings: m,
		traitConfigOverrides: ne
	}), E = IN({
		baseActorDraftData: i,
		careers: o,
		customTrappings: c,
		settings: m,
		trappingOverrides: re,
		trappingResolutionOverrides: ie
	}), le = aN({
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
}), RN = { class: "dui-fieldset-legend" }, zN = [
	"checked",
	"disabled",
	"onChange"
], BN = { class: "dui-card-actions" }, VN = /* @__PURE__ */ M({
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
			}, [R("legend", RN, "Tier " + O(t.level || "Unknown"), 1), (F(!0), I(P, null, N(t.candidates, (t) => (F(), I("label", {
				key: t.uuid,
				class: "dui-label"
			}, [R("input", {
				class: "dui-checkbox dui-checkbox-sm",
				checked: e.isCareerQueued(t.uuid) || e.isLowerCareerSelected(t.uuid),
				disabled: e.isCareerQueued(t.uuid),
				type: "checkbox",
				onChange: (e) => r(t, e)
			}, null, 40, zN), R("span", null, [R("strong", null, O(t.name), 1), R("small", null, [B(O(t.careerGroup || "Career") + " ", 1), e.isCareerQueued(t.uuid) ? (F(), I(P, { key: 0 }, [B(" already queued ")], 64)) : V("", !0)])])]))), 128))]))), 128)),
			R("div", BN, [R("button", {
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
}), HN = ["aria-labelledby"], UN = ["id"], WN = { class: "dui-modal-action" }, GN = /* @__PURE__ */ M({
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
			}, O(e.title), 9, UN),
			Gr(t.$slots, "default"),
			R("div", WN, [R("button", {
				class: "dui-btn",
				type: "button",
				onClick: n[0] ||= (e) => r("close")
			}, O(e.closeLabel), 1)])
		], 2)], 40, HN));
	}
}), KN = /* @__PURE__ */ new Map();
function qN(e) {
	let t = e.id.trim();
	if (!t) throw Error("NPC auto-advance strategies must have an id.");
	KN.set(t, {
		...e,
		id: t
	});
}
function JN() {
	return [...KN.values()].sort((e, t) => e.name.localeCompare(t.name));
}
function YN(e) {
	return KN.get(e) ?? null;
}
function XN(e, t) {
	return $N(e, t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function ZN(e, t) {
	return $N($N(e, t, {
		kinds: ["talent"],
		respectTalentMaximums: !0
	}), t, {
		kinds: ["skill"],
		respectTalentMaximums: !1
	});
}
function QN(e, t) {
	return $N(e, t, {
		kinds: ["characteristic"],
		respectTalentMaximums: !1
	});
}
function $N(e, t, n) {
	let r = Math.max(0, Math.floor(Number.isFinite(t) ? t : 0)), i = nP(e.advancements), a = Mj(i).total;
	if (a >= r) return { advancements: i };
	let o = !0;
	for (; o;) {
		o = !1;
		for (let e of i) {
			if (!n.kinds.includes(e.kind)) continue;
			let t = eP(e, n);
			if (!t) continue;
			let i = Pj(t) - Pj(e);
			i <= 0 || a + i > r || (e.current = t.current, a += i, o = !0);
		}
	}
	return { advancements: i };
}
function eP(e, t) {
	return t.respectTalentMaximums && e.kind === "talent" && !tP(e) ? null : {
		...e,
		current: e.current + Sj(e)
	};
}
function tP(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" ? Cj(e) < t : !1;
}
function nP(e) {
	return e.map((e) => ({
		...e,
		sources: e.sources.map((e) => ({ ...e }))
	}));
}
qN({
	description: "Cycles visible Skill rows evenly until no next skill increase fits the target XP.",
	id: "skill-master",
	name: "Skill Master",
	run: XN
}), qN({
	description: "Raises visible Talent rows evenly up to known maximums, then spends any remaining XP like Skill Master.",
	id: "gifted-and-talented",
	name: "Gifted & Talented",
	run: ZN
}), qN({
	description: "Cycles visible Characteristic rows evenly until no next characteristic increase fits the target XP.",
	id: "all-natural",
	name: "All Natural",
	run: QN
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/advancement-display.ts
function rP(e) {
	let t = e.current - e.careerValue, n = [...e.sources].sort((e, t) => dP(e.kind) - dP(t.kind)).map((e) => iP(e));
	return t !== 0 && n.push(`Manual ${fP(t)}`), n.length ? n.join(", ") : e.includedFromBase ? "Base actor" : "-";
}
function iP(e) {
	return e.kind === "custom" && e.count === 0 ? e.label : `${e.label} ${fP(e.count)}`;
}
function aP(e) {
	return KA(e) !== null;
}
function oP(e) {
	return Math.max(e.minimumTotal, e.baseValue + e.current);
}
function sP(e) {
	return oP(e);
}
function cP(e) {
	return e.talentMaximumLabel ?? "Unknown";
}
function lP(e) {
	let t = e.talentMaximumValue;
	return typeof t == "number" && sP(e) > t;
}
function uP(e) {
	return Pj(e);
}
function dP(e) {
	return e === "characteristic" ? 0 : e === "career" ? 1 : 2;
}
function fP(e) {
	return e > 0 ? `+${e}` : `${e}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderAdvancementsTab/AdvancementRowTailActions.vue?vue&type=script&setup=true&lang.ts
var pP = ["disabled"], mP = /* @__PURE__ */ M({
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
		}, " Reset ", 8, pP), e.entry.includedFromCustom ? (F(), I("button", {
			key: 0,
			class: "dui-join-item dui-btn dui-btn-sm",
			title: "Remove dropped entry",
			type: "button",
			onClick: r[1] ||= (e) => n("removeCustom")
		}, " Remove Dropped ")) : V("", !0)], 64));
	}
}), hP = { class: "dui-card dui-card-border dui-card-sm" }, gP = { class: "dui-card-body" }, _P = { class: "dui-card-title" }, vP = {
	key: 0,
	class: "dui-badge dui-badge-primary"
}, yP = { key: 0 }, bP = /* @__PURE__ */ M({
	__name: "NpcBuilderSection",
	props: {
		description: { default: "" },
		number: { default: "" },
		title: {}
	},
	setup(e) {
		return (t, n) => (F(), I("section", hP, [R("div", gP, [
			R("h2", _P, [e.number ? (F(), I("span", vP, O(e.number), 1)) : V("", !0), B(" " + O(e.title), 1)]),
			e.description ? (F(), I("p", yP, O(e.description), 1)) : V("", !0),
			Gr(t.$slots, "default")
		])]));
	}
}), xP = {
	key: 0,
	class: "dui-card-actions"
}, SP = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, CP = { class: "dui-list" }, wP = { class: "dui-list-col-grow" }, TP = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, EP = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, DP = { class: "dui-join" }, OP = ["disabled", "onClick"], kP = [
	"aria-label",
	"value",
	"onInput"
], AP = ["onClick"], jP = {
	key: 2,
	class: "dui-alert"
}, MP = /* @__PURE__ */ M({
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
		return (t, i) => (F(), L(bP, {
			number: e.sectionNumber,
			title: e.title
		}, {
			default: j(() => [
				e.manualAdvanceCount ? (F(), I("div", xP, [R("span", null, O(e.manualAdvanceCount) + " manual edits", 1), R("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: i[0] ||= (e) => n("resetAll")
				}, " Reset All Advances ")])) : V("", !0),
				e.estimatedNpcXp ? (F(), I("div", SP, [
					R("strong", null, "Estimated NPC XP " + O(e.estimatedNpcXp.total), 1),
					R("span", null, O(e.estimatedNpcXp.characteristics) + " characteristics", 1),
					R("span", null, O(e.estimatedNpcXp.skills) + " skills", 1),
					R("span", null, O(e.estimatedNpcXp.talents) + " talents", 1)
				])) : V("", !0),
				R("ul", CP, [(F(!0), I(P, null, N(e.entries, (t) => (F(), I("li", {
					key: `${t.kind}:${t.name}`,
					class: "dui-list-row"
				}, [R("div", wP, [
					R("strong", null, O(t.name), 1),
					t.current === t.careerValue ? V("", !0) : (F(), I("span", TP, " Manual edit ")),
					e.showSkillSpecializationBadges && A(aP)(t.name) ? (F(), I("span", EP, " Needs specialization ")) : V("", !0),
					R("span", null, " Base " + O(t.baseValue) + " · Advances " + O(t.current) + " · XP " + O(A(uP)(t)), 1),
					R("small", null, "Sources: " + O(A(rP)(t)), 1)
				]), R("div", DP, [
					R("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: A(oP)(t) <= t.minimumTotal,
						title: "Decrease by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, -1)
					}, " -5 ", 8, OP),
					R("input", {
						class: "dui-join-item dui-input dui-input-sm",
						"aria-label": `Total ${t.name}`,
						value: A(oP)(t),
						min: "0",
						type: "number",
						onInput: (e) => r(t, e)
					}, null, 40, kP),
					R("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						title: "Increase by 5",
						type: "button",
						onClick: (e) => n("adjustCurrent", t, 1)
					}, " +5 ", 8, AP),
					z(mP, {
						entry: t,
						onRemoveCustom: (e) => n("removeCustom", t),
						onResetCurrent: (e) => n("resetCurrent", t)
					}, null, 8, [
						"entry",
						"onRemoveCustom",
						"onResetCurrent"
					])
				])]))), 128))]),
				e.entries.length ? V("", !0) : (F(), I("p", jP, "No " + O(e.title.toLowerCase()) + " to advance yet.", 1))
			]),
			_: 1
		}, 8, ["number", "title"]));
	}
}), NP = { class: "dui-fieldset" }, PP = ["value"], FP = { class: "dui-fieldset" }, IP = ["value"], LP = ["value"], RP = { key: 0 }, zP = { class: "dui-card-actions" }, BP = ["disabled"], VP = /* @__PURE__ */ M({
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
		return (t, a) => (F(), L(bP, {
			description: "Spend toward a target without exceeding it. Existing manual edits are preserved.",
			number: "4",
			title: "Auto Advance"
		}, {
			default: j(() => [
				R("fieldset", NP, [a[1] ||= R("legend", { class: "dui-fieldset-legend" }, "Target XP", -1), R("input", {
					"aria-label": "Target XP",
					class: "dui-input dui-input-sm",
					value: e.targetXp,
					min: "0",
					type: "number",
					onInput: r
				}, null, 40, PP)]),
				R("fieldset", FP, [a[2] ||= R("legend", { class: "dui-fieldset-legend" }, "Strategy", -1), R("select", {
					"aria-label": "Auto advance strategy",
					class: "dui-select dui-select-sm",
					value: e.selectedAutoAdvanceStrategyId,
					onChange: i
				}, [(F(!0), I(P, null, N(e.autoAdvanceStrategies, (e) => (F(), I("option", {
					key: e.id,
					value: e.id
				}, O(e.name), 9, LP))), 128))], 40, IP)]),
				e.selectedAutoAdvanceStrategy ? (F(), I("p", RP, O(e.selectedAutoAdvanceStrategy.description), 1)) : V("", !0),
				R("div", zP, [R("button", {
					class: "dui-btn dui-btn-primary dui-btn-sm",
					disabled: !e.canRunAutoAdvance,
					title: "Advance rows as close to the target XP as possible without going over",
					type: "button",
					onClick: a[0] ||= (e) => n("runAutoAdvance")
				}, " Auto Advance ", 8, BP)])
			]),
			_: 1
		}));
	}
}), HP = { class: "dui-card-actions" }, UP = ["disabled"], WP = { class: "dui-list" }, GP = { class: "dui-list-col-grow" }, KP = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, qP = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, JP = { class: "dui-join" }, YP = ["disabled", "onClick"], XP = [
	"aria-label",
	"value",
	"onInput"
], ZP = ["onClick"], QP = {
	key: 0,
	class: "dui-alert"
}, $P = /* @__PURE__ */ M({
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
		return (t, i) => (F(), L(bP, {
			number: "3",
			title: "Talents"
		}, {
			default: j(() => [
				R("div", HP, [R("span", null, O(e.maximizableTalentCount) + " below maximum", 1), R("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.maximizableTalentCount === 0,
					title: "Raise talents with known maximums to their maximum ranks",
					type: "button",
					onClick: i[0] ||= (e) => n("maximizeTalents")
				}, " Maximize Talents ", 8, UP)]),
				R("ul", WP, [(F(!0), I(P, null, N(e.talents, (e) => (F(), I("li", {
					key: `${e.kind}:${e.name}`,
					class: "dui-list-row"
				}, [R("div", GP, [
					R("strong", null, O(e.name), 1),
					e.current === e.careerValue ? V("", !0) : (F(), I("span", KP, " Manual edit ")),
					R("span", null, " Ranks " + O(A(sP)(e)) + " · Maximum " + O(A(cP)(e)) + " · XP " + O(A(uP)(e)), 1),
					R("small", null, "Sources: " + O(A(rP)(e)), 1),
					A(lP)(e) ? (F(), I("span", qP, " Over maximum ")) : V("", !0)
				]), R("div", JP, [
					R("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						disabled: A(sP)(e) <= e.minimumTotal,
						title: "Decrease by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, -1)
					}, " -1 ", 8, YP),
					R("input", {
						class: "dui-join-item dui-input dui-input-sm",
						"aria-label": `Ranks ${e.name}`,
						value: A(sP)(e),
						min: "0",
						type: "number",
						onInput: (t) => r(e, t)
					}, null, 40, XP),
					R("button", {
						class: "dui-join-item dui-btn dui-btn-sm",
						title: "Increase by 1",
						type: "button",
						onClick: (t) => n("adjustCurrent", e, 1)
					}, " +1 ", 8, ZP),
					z(mP, {
						entry: e,
						onRemoveCustom: (t) => n("removeCustom", e),
						onResetCurrent: (t) => n("resetCurrent", e)
					}, null, 8, [
						"entry",
						"onRemoveCustom",
						"onResetCurrent"
					])
				])]))), 128))]),
				e.talents.length ? V("", !0) : (F(), I("p", QP, "No talents to advance yet."))
			]),
			_: 1
		}));
	}
}), eF = /* @__PURE__ */ M({
	__name: "NpcBuilderAdvancementsTab",
	props: { page: {} },
	setup(e) {
		let t = LN(), { advancements: n, estimatedNpcXp: r, maximizableTalentCount: i } = zs(t), a = JN(), o = /* @__PURE__ */ k("skill-master"), s = /* @__PURE__ */ k(0), c = H(() => n.value.filter((e) => e.kind === "characteristic")), l = H(() => n.value.filter((e) => e.kind === "skill")), u = H(() => n.value.filter((e) => e.kind === "talent")), d = H(() => n.value.filter((e) => e.current !== e.careerValue).length), f = H(() => YN(o.value) ?? a[0] ?? null), p = H(() => f.value !== null && s.value > r.value.total);
		Xn(() => r.value.total, (e) => {
			s.value < e && (s.value = e);
		}, { immediate: !0 });
		function m() {
			let e = f.value;
			e && t.applyAutoAdvance(e, s.value);
		}
		return (n, h) => (F(), I("section", null, [e.page === "detail-characteristics" ? (F(), L(MP, {
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
		])) : e.page === "detail-skills" ? (F(), L(MP, {
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
		])) : e.page === "detail-talents" ? (F(), L($P, {
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
		])) : (F(), L(VP, {
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
function tF(e) {
	return [
		`Ch ${e.grants.characteristics.length}`,
		`Sk ${e.grants.skills.length}`,
		`Ta ${e.grants.talents.length}`,
		`Tr ${e.grants.trappings.length}`
	].join(" / ");
}
function nF(e) {
	let t = e.slice(0, 3).join(", "), n = e.length - 3;
	return e.length ? n > 0 ? `${t}, +${n}` : t : "-";
}
function rF(e) {
	return e.split(/\s+/).map((e) => e.at(0)).filter(Boolean).slice(0, 2).join("").toLocaleUpperCase();
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/BaseActorPanel.vue?vue&type=script&setup=true&lang.ts
var iF = { class: "dui-fieldset" }, aF = ["value"], oF = { class: "dui-fieldset" }, sF = ["disabled", "value"], cF = { value: "" }, lF = ["value"], uF = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, dF = {
	key: 1,
	class: "dui-alert"
}, fF = {
	key: 0,
	class: "dui-avatar"
}, pF = { class: "app:size-16 app:shrink-0 app:rounded-lg" }, mF = ["src"], hF = {
	key: 1,
	class: "dui-badge"
}, gF = /* @__PURE__ */ M({
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
		return (t, n) => (F(), L(bP, {
			description: e.description,
			number: e.number,
			title: e.title
		}, {
			default: j(() => [
				R("fieldset", iF, [n[0] ||= R("legend", { class: "dui-fieldset-legend" }, "Search world actors", -1), R("input", {
					"aria-label": "Search world actors",
					class: "dui-input dui-input-sm",
					value: e.actorFilter,
					placeholder: "Filter actors",
					type: "search",
					onInput: r
				}, null, 40, aF)]),
				R("fieldset", oF, [n[1] ||= R("legend", { class: "dui-fieldset-legend" }, "Base statblock", -1), R("select", {
					"aria-label": "Base statblock",
					class: "dui-select dui-select-sm",
					disabled: e.isLoadingActors,
					value: e.selectedBaseActorUuid,
					onChange: i
				}, [R("option", cF, O(e.isLoadingActors ? "Loading actors..." : "Choose an actor"), 1), (F(!0), I(P, null, N(e.filteredActors, (e) => (F(), I("option", {
					key: e.uuid,
					value: e.uuid
				}, O(e.name), 9, lF))), 128))], 40, sF)]),
				e.errorMessage ? (F(), I("p", uF, O(e.errorMessage), 1)) : V("", !0),
				e.selectedBaseActor ? (F(), I("article", dF, [e.selectedBaseActor.img ? (F(), I("div", fF, [R("div", pF, [R("img", {
					src: e.selectedBaseActor.img,
					alt: "",
					class: "app:h-full app:w-full app:object-cover",
					height: "64",
					width: "64"
				}, null, 8, mF)])])) : (F(), I("span", hF, O(A(rF)(e.selectedBaseActor.name)), 1)), R("div", null, [R("strong", null, O(e.selectedBaseActor.name), 1), R("span", null, [
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
}), _F = { class: "dui-card-actions" }, vF = { class: "dui-stats dui-stats-vertical app:w-full" }, yF = { class: "dui-stat" }, bF = { class: "dui-stat-value" }, xF = {
	key: 0,
	class: "dui-stat-desc"
}, SF = { class: "dui-stat" }, CF = { class: "dui-stat-value" }, wF = {
	key: 0,
	class: "dui-stat-desc"
}, TF = {
	key: 1,
	class: "dui-stat-desc"
}, EF = { class: "dui-stat" }, DF = { class: "dui-stat-value" }, OF = { class: "dui-stat" }, kF = { class: "dui-stat-value" }, AF = { class: "dui-stat" }, jF = { class: "dui-stat-value" }, MF = { class: "dui-stat-desc" }, NF = {
	key: 0,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, PF = { key: 1 }, FF = /* @__PURE__ */ M({
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
		return (t, n) => (F(), L(bP, {
			number: "4",
			title: "Build Preview"
		}, {
			default: j(() => [
				R("div", _F, [R("span", { class: D(["dui-badge", e.buildPreviewStatus === "Ready" ? "dui-badge-success" : "dui-badge-warning"]) }, O(e.buildPreviewStatus), 3)]),
				R("div", vF, [
					R("div", yF, [
						n[0] ||= R("span", { class: "dui-stat-title" }, "Advances", -1),
						R("strong", bF, O(e.advancementCount), 1),
						e.editedAdvanceCount ? (F(), I("small", xF, O(e.editedAdvanceCount) + " manually edited ", 1)) : V("", !0)
					]),
					R("div", SF, [
						n[1] ||= R("span", { class: "dui-stat-title" }, "Trappings", -1),
						R("strong", CF, O(e.visibleTrappingCount), 1),
						e.fallbackTrappingCount ? (F(), I("small", wF, O(e.fallbackTrappingCount) + " blank fallback ", 1)) : V("", !0),
						e.ignoredTrappingCount ? (F(), I("small", TF, O(e.ignoredTrappingCount) + " ignored ", 1)) : V("", !0)
					]),
					R("div", EF, [n[2] ||= R("span", { class: "dui-stat-title" }, "Traits", -1), R("strong", DF, O(e.traitCount), 1)]),
					R("div", OF, [n[3] ||= R("span", { class: "dui-stat-title" }, "Spells", -1), R("strong", kF, O(e.selectedSpellCount), 1)]),
					R("div", AF, [
						n[4] ||= R("span", { class: "dui-stat-title" }, "Estimated NPC XP", -1),
						R("strong", jF, O(e.estimatedNpcXp.total), 1),
						R("small", MF, O(e.estimatedNpcXp.characteristics) + " char / " + O(e.estimatedNpcXp.skills) + " skill / " + O(e.estimatedNpcXp.talents) + " talent ", 1)
					])
				]),
				e.buildPreviewWarnings.length ? (F(), I("div", NF, [R("div", null, [(F(!0), I(P, null, N(e.buildPreviewWarnings, (e) => (F(), I("p", { key: e }, O(e), 1))), 128))])])) : (F(), I("p", PF, " The draft has a base Actor, queued Career data, resolved trappings, and a portrait ready to apply. "))
			]),
			_: 1
		}));
	}
}), IF = { class: "dui-list" }, LF = { class: "dui-list-row" }, RF = { class: "dui-list-row" }, zF = { class: "dui-list-row" }, BF = { class: "dui-list-row" }, VF = { class: "dui-list-row" }, HF = { class: "dui-list-row" }, UF = { class: "dui-list-row" }, WF = /* @__PURE__ */ M({
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
		return (t, n) => (F(), I("dl", IF, [
			R("div", LF, [n[0] ||= R("dt", null, "Build name", -1), R("dd", null, O(e.finalActorName), 1)]),
			R("div", RF, [n[1] ||= R("dt", null, "Base actor", -1), R("dd", null, O(e.baseActorName), 1)]),
			R("div", zF, [n[2] ||= R("dt", null, "Final career", -1), R("dd", null, O(e.finalCareerName), 1)]),
			R("div", BF, [n[3] ||= R("dt", null, "Career items", -1), R("dd", null, O(e.careerItemCount), 1)]),
			R("div", VF, [n[4] ||= R("dt", null, "Apply", -1), R("dd", null, O(e.advancementCount) + " advance rows, " + O(e.visibleTrappingCount) + " trappings, " + O(e.traitCount) + " traits, " + O(e.selectedSpellCount) + " spells ", 1)]),
			R("div", HF, [n[5] ||= R("dt", null, "Extracted grants", -1), R("dd", null, O(e.grantTotals.characteristics) + " characteristics, " + O(e.grantTotals.skills) + " skills, " + O(e.grantTotals.talents) + " talents, " + O(e.grantTotals.trappings) + " trappings ", 1)]),
			R("div", UF, [n[6] ||= R("dt", null, "Estimated NPC XP", -1), R("dd", null, O(e.estimatedNpcXpTotal), 1)])
		]));
	}
}), GF = { class: "app:grid app:gap-3" }, KF = { class: "app:flex app:flex-wrap app:items-start app:gap-3" }, qF = ["aria-label", "disabled"], JF = ["src"], YF = { key: 1 }, XF = { key: 2 }, ZF = { class: "app:flex app:min-w-48 app:flex-1 app:flex-col app:items-start app:gap-2" }, QF = ["title"], $F = {
	key: 1,
	class: "app:text-base-content/70"
}, eI = ["disabled"], tI = {
	key: 0,
	"aria-live": "polite",
	role: "status"
}, nI = ["value"], rI = {
	key: 1,
	class: "dui-fieldset"
}, iI = { class: "dui-fieldset-legend" }, aI = { key: 0 }, oI = { key: 1 }, sI = { class: "app:flex app:flex-wrap app:gap-2" }, cI = [
	"aria-label",
	"aria-pressed",
	"title",
	"onClick"
], lI = ["src"], uI = ["aria-label"], dI = /* @__PURE__ */ M({
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
		return (t, r) => (F(), I("section", GF, [
			R("div", KF, [R("button", {
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
			}, null, 8, JF)) : e.finalCareer ? (F(), I("strong", YF, O(A(rF)(e.finalCareer.name)), 1)) : (F(), I("span", XF, "No portrait"))], 8, qF), R("div", ZF, [
				r[3] ||= R("span", { class: "dui-badge dui-badge-outline" }, "Current portrait", -1),
				R("strong", null, O(e.selectedPortraitCandidate?.label ?? "No portrait selected"), 1),
				e.finalPortraitPath ? (F(), I("small", {
					key: 0,
					class: "app:break-all app:text-base-content/70",
					title: e.finalPortraitPath
				}, O(e.finalPortraitPath), 9, QF)) : (F(), I("span", $F, " A Career or base Actor image will be used when available. ")),
				R("button", {
					class: "dui-btn dui-btn-outline dui-btn-sm",
					disabled: !e.portraitCandidates.length,
					type: "button",
					onClick: r[1] ||= (e) => n("openGallery")
				}, " Browse " + O(e.portraitCandidates.length) + " portraits ", 9, eI)
			])]),
			e.isLoadingPortraitCandidates && e.portraitSearchProgress ? (F(), I("div", tI, [R("progress", {
				"aria-label": "Portrait search progress",
				class: "dui-progress dui-progress-info app:w-full",
				value: e.portraitSearchProgressValue,
				max: "100"
			}, null, 8, nI), R("small", null, O(e.portraitSearchProgressLabel), 1)])) : V("", !0),
			e.portraitCandidates.length || e.isLoadingPortraitCandidates ? (F(), I("fieldset", rI, [R("legend", iI, [r[4] ||= R("span", null, "Quick picks", -1), e.isLoadingPortraitCandidates ? (F(), I("span", aI, "Updating...")) : (F(), I("span", oI, O(e.portraitCandidates.length) + " options", 1))]), R("div", sI, [(F(!0), I(P, null, N(e.compactPortraitCandidates, (t) => (F(), I("button", {
				key: t.key,
				"aria-label": A(OM)(t),
				"aria-pressed": t.key === e.selectedPortraitCandidateKey,
				class: D(["dui-btn dui-btn-square app:overflow-hidden app:p-1", { "dui-btn-active dui-btn-outline": t.key === e.selectedPortraitCandidateKey }]),
				title: A(DM)(t),
				type: "button",
				onClick: (e) => n("selectPortrait", t)
			}, [R("img", {
				alt: "",
				class: "app:h-full app:w-full app:rounded-box app:object-cover",
				height: "64",
				loading: "lazy",
				src: t.img,
				width: "64"
			}, null, 8, lI)], 10, cI))), 128)), e.hiddenPortraitCandidateCount > 0 ? (F(), I("button", {
				key: 0,
				"aria-label": `Open ${e.hiddenPortraitCandidateCount} more portrait options`,
				class: "dui-btn dui-btn-square",
				type: "button",
				onClick: r[2] ||= (e) => n("openGallery")
			}, " +" + O(e.hiddenPortraitCandidateCount), 9, uI)) : V("", !0)])])) : V("", !0)
		]));
	}
}), fI = { class: "app:grid app:gap-3 md:app:sticky md:app:top-28 md:app:max-h-[calc(100vh-10rem)] md:app:self-start md:app:overflow-y-auto" }, pI = { class: "dui-fieldset" }, mI = ["placeholder", "value"], hI = { class: "app:hidden md:app:grid md:app:gap-3" }, gI = { class: "dui-collapse dui-collapse-arrow dui-card-border" }, _I = { class: "dui-collapse-content" }, vI = /* @__PURE__ */ M({
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
		return (t, i) => (F(), I("aside", fI, [z(bP, {
			description: "The generated Actor identity stays visible while Build NPC controls change.",
			title: "Preview"
		}, {
			default: j(() => [z(dI, {
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
			]), R("fieldset", pI, [i[2] ||= R("legend", { class: "dui-fieldset-legend" }, "NPC name", -1), R("input", {
				"aria-label": "NPC name",
				class: "dui-input dui-input-sm",
				placeholder: e.suggestedActorName,
				value: e.actorName,
				type: "text",
				onInput: r
			}, null, 40, mI)])]),
			_: 1
		}), R("div", hI, [z(FF, {
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
		]), R("details", gI, [i[3] ||= R("summary", { class: "dui-collapse-title" }, "Complete build details", -1), R("div", _I, [z(WF, {
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
}), yI = {
	key: 0,
	class: "dui-list app:gap-1"
}, bI = [
	"onDragenter",
	"onDragover",
	"onDrop"
], xI = ["onDragstart"], SI = {
	key: 0,
	class: "dui-avatar"
}, CI = { class: "app:size-10 app:rounded-md" }, wI = ["src"], TI = {
	key: 1,
	class: "dui-badge dui-badge-sm"
}, EI = { class: "dui-list-col-grow app:min-w-0" }, DI = { class: "app:flex app:min-w-0 app:flex-wrap app:items-center app:gap-1" }, OI = { class: "app:truncate" }, kI = {
	key: 0,
	class: "dui-badge dui-badge-info dui-badge-xs"
}, AI = {
	key: 1,
	class: "dui-badge dui-badge-info dui-badge-xs"
}, jI = { class: "app:flex app:min-w-0 app:items-center app:gap-2 app:text-xs" }, MI = { class: "app:shrink-0" }, NI = ["title"], PI = { class: "app:flex app:items-center app:justify-end app:gap-1" }, FI = { class: "app:flex app:items-center app:gap-1 app:text-xs" }, II = ["value", "onInput"], LI = { class: "dui-join" }, RI = ["disabled", "onClick"], zI = ["disabled", "onClick"], BI = ["onClick"], VI = {
	key: 1,
	class: "dui-alert"
}, HI = /* @__PURE__ */ M({
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
		return (t, n) => (F(), L(bP, {
			description: "Careers are applied in this order. Drag rows or use the buttons to reorder them.",
			number: "2",
			title: "Career Queue"
		}, {
			default: j(() => [e.careers.length ? (F(), I("ol", yI, [(F(!0), I(P, null, N(e.careers, (t, a) => (F(), I("li", {
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
				}, " Drag ", 42, xI),
				t.img ? (F(), I("div", SI, [R("div", CI, [R("img", {
					src: t.img,
					alt: "",
					class: "app:h-full app:w-full app:object-cover",
					height: "40",
					width: "40"
				}, null, 8, wI)])])) : (F(), I("span", TI, O(A(rF)(t.name)), 1)),
				R("div", EI, [R("div", DI, [R("strong", OI, O(t.name), 1), e.draggedCareerIndex === a ? (F(), I("span", kI, " Dragging ")) : i(a) ? (F(), I("span", AI, " Place " + O(i(a)), 1)) : V("", !0)]), R("div", jI, [R("span", MI, [B(O(t.careerGroup || "Career") + " ", 1), t.level === null ? V("", !0) : (F(), I(P, { key: 0 }, [B(" level " + O(t.level), 1)], 64))]), R("small", {
					class: "dui-badge dui-badge-ghost dui-badge-sm app:min-w-0 app:truncate",
					title: [
						`Characteristics: ${A(nF)(t.grants.characteristics)}`,
						`Skills: ${A(nF)(t.grants.skills)}`,
						`Talents: ${A(nF)(t.grants.talents)}`,
						`Trappings: ${A(nF)(t.grants.trappings)}`
					].join("\n")
				}, O(A(tF)(t)), 9, NI)])]),
				R("div", PI, [R("label", FI, [n[1] ||= B(" Qty ", -1), R("input", {
					class: "dui-input dui-input-xs app:w-14",
					value: t.quantity,
					min: "1",
					type: "number",
					onInput: (e) => r("careerQuantityInput", a, e)
				}, null, 40, II)]), R("div", LI, [
					R("button", {
						class: "dui-join-item dui-btn dui-btn-xs",
						disabled: a === 0,
						title: "Move career earlier",
						type: "button",
						onClick: (e) => r("moveCareer", a, -1)
					}, " Up ", 8, RI),
					R("button", {
						class: "dui-join-item dui-btn dui-btn-xs",
						disabled: a === e.careers.length - 1,
						title: "Move career later",
						type: "button",
						onClick: (e) => r("moveCareer", a, 1)
					}, " Down ", 8, zI),
					R("button", {
						class: "dui-join-item dui-btn dui-btn-xs",
						type: "button",
						onClick: (e) => r("removeCareer", a)
					}, " Remove ", 8, BI)
				])])
			], 42, bI))), 128))])) : (F(), I("p", VI, "No careers queued yet."))]),
			_: 1
		}));
	}
}), UI = { class: "app:grid app:gap-2" }, WI = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, GI = { class: "dui-join app:min-w-64 app:flex-1" }, KI = { class: "dui-input dui-input-sm dui-join-item app:flex-1" }, qI = ["onKeydown"], JI = { class: "dui-badge dui-badge-sm dui-badge-outline" }, YI = { class: "app:grid app:gap-2 md:app:grid-cols-3" }, XI = [
	"onDragenter",
	"onDragleave",
	"onDragover",
	"onDrop"
], ZI = { class: "dui-card-body app:gap-2 app:p-2" }, QI = { class: "app:flex app:items-center app:gap-2" }, $I = { class: "dui-card-title app:m-0 app:text-sm" }, eL = { class: "dui-badge dui-badge-sm" }, tL = {
	key: 0,
	"aria-live": "polite",
	class: "dui-badge dui-badge-info dui-badge-sm app:ml-auto"
}, nL = { class: "app:flex app:min-h-8 app:flex-wrap app:items-center app:gap-2" }, rL = [
	"title",
	"onClick",
	"onDragstart",
	"onKeydown"
], iL = {
	key: 0,
	class: "app:text-base-content/60"
}, aL = { class: "dui-card-body app:flex-row app:items-center app:justify-center app:gap-2 app:p-2" }, oL = { "aria-live": "polite" }, sL = /* @__PURE__ */ M({
	__name: "PortraitFilterTags",
	props: {
		resultCount: {},
		tags: {}
	},
	emits: ["createSearchTerm", "filterTagSectionChange"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ k(""), a = /* @__PURE__ */ k(null), o = /* @__PURE__ */ k(null), s = [
			{
				icon: "fa-magnifying-glass",
				id: "search",
				title: "Search"
			},
			{
				icon: "fa-check",
				id: "must-include",
				title: "Must Include"
			},
			{
				icon: "fa-ban",
				id: "must-exclude",
				title: "Mustn't Include"
			}
		], c = H(() => Object.fromEntries(s.map((e) => [e.id, n.tags.filter((t) => t.section === e.id)])));
		function l() {
			let e = i.value;
			r("createSearchTerm", e), i.value = "";
		}
		function u(e, t) {
			t.stopPropagation(), a.value = e, t.dataTransfer?.setData("text/plain", SM(e.id)), t.dataTransfer?.setData(mM, e.id), t.dataTransfer && (t.dataTransfer.effectAllowed = "move");
		}
		function d(e, t) {
			t.preventDefault(), t.stopPropagation(), o.value = e, t.dataTransfer && (t.dataTransfer.dropEffect = _(a.value, e) ? "move" : "none");
		}
		function f(e, t) {
			t.stopPropagation(), !(t.currentTarget instanceof Node && t.relatedTarget instanceof Node && t.currentTarget.contains(t.relatedTarget)) && o.value === e && (o.value = null);
		}
		function p(e, t) {
			t.preventDefault(), t.stopPropagation();
			let i = t.dataTransfer?.getData("application/x-wfrp4e-customizer-portrait-filter-tag") || CM(t.dataTransfer?.getData("text/plain") ?? ""), o = a.value ?? n.tags.find((e) => e.id === i) ?? null;
			g(), _(o, e) && r("filterTagSectionChange", o, e);
		}
		function m(e) {
			let t = s[(s.findIndex((t) => t.id === e.section) + 1) % s.length];
			t && r("filterTagSectionChange", e, t.id);
		}
		function h(e) {
			e.canRemove && r("filterTagSectionChange", e, "removed");
		}
		function g() {
			a.value = null, o.value = null;
		}
		function _(e, t) {
			return !!(e && (t !== "removed" || e.canRemove));
		}
		function v(e) {
			return o.value === e ? e === "removed" && !a.value?.canRemove ? "Protected" : a.value?.section === e ? "Already here" : "Drop here" : "";
		}
		let y = H(() => o.value === "removed" ? a.value?.canRemove ? "Drop to remove this tag" : "Source tags stay available" : "Trash");
		return (t, n) => (F(), I("section", UI, [
			R("div", WI, [R("div", GI, [R("label", KI, [n[5] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-magnifying-glass"
			}, null, -1), Un(R("input", {
				"onUpdate:modelValue": n[0] ||= (e) => i.value = e,
				"aria-label": "Add a portrait search term",
				class: "app:grow",
				placeholder: "Add a search term",
				type: "search",
				onKeydown: $o(Zo(l, ["prevent"]), ["enter"])
			}, null, 40, qI), [[Go, i.value]])]), R("button", {
				class: "dui-btn dui-btn-sm dui-join-item",
				type: "button",
				onClick: l
			}, [...n[6] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), B(" Add ", -1)]])]), R("span", JI, O(e.resultCount) + " images", 1)]),
			R("div", YI, [(F(), I(P, null, N(s, (e) => R("section", {
				key: e.id,
				class: D(["dui-card dui-card-border dui-card-sm app:min-h-20 app:border-base-content/30 app:bg-base-200 app:shadow-sm", { "app:border-info app:bg-info/10 app:ring-2 app:ring-info": o.value === e.id }]),
				onDragenter: (t) => d(e.id, t),
				onDragleave: (t) => f(e.id, t),
				onDragover: (t) => d(e.id, t),
				onDrop: (t) => p(e.id, t)
			}, [R("div", ZI, [R("header", QI, [
				R("h3", $I, [R("i", {
					"aria-hidden": "true",
					class: D(["fa-solid", e.icon])
				}, null, 2), B(" " + O(e.title), 1)]),
				R("span", eL, O(c.value[e.id].length), 1),
				o.value === e.id ? (F(), I("span", tL, O(v(e.id)), 1)) : V("", !0)
			]), R("div", nL, [(F(!0), I(P, null, N(c.value[e.id], (e) => (F(), I("button", {
				key: e.id,
				class: D(["dui-badge dui-badge-sm app:h-auto app:cursor-grab app:whitespace-normal app:py-1", [e.kind === "source" ? "dui-badge-outline" : "dui-badge-primary", a.value?.id === e.id ? "app:opacity-50" : ""]]),
				draggable: "true",
				title: `Drag ${e.label} to another group, or select it to move it to the next group.`,
				type: "button",
				onClick: (t) => m(e),
				onDragend: g,
				onDragstart: (t) => u(e, t),
				onKeydown: $o(Zo((t) => h(e), ["prevent"]), ["delete"])
			}, O(e.label), 43, rL))), 128)), c.value[e.id].length ? V("", !0) : (F(), I("small", iL, " Drop tags here "))])])], 42, XI)), 64))]),
			R("div", {
				"aria-label": "Remove search tag",
				class: D(["dui-card dui-card-border dui-card-sm app:border-dashed app:border-base-content/30 app:bg-base-200", {
					"app:border-error app:bg-error/10 app:ring-2 app:ring-error": o.value === "removed" && !a.value?.canRemove,
					"app:border-warning app:bg-warning/10 app:ring-2 app:ring-warning": o.value === "removed" && a.value?.canRemove
				}]),
				onDragenter: n[1] ||= (e) => d("removed", e),
				onDragleave: n[2] ||= (e) => f("removed", e),
				onDragover: n[3] ||= (e) => d("removed", e),
				onDrop: n[4] ||= (e) => p("removed", e)
			}, [R("div", aL, [n[7] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-trash"
			}, null, -1), R("span", oL, O(y.value), 1)])], 34)
		]));
	}
}), cL = ["aria-busy"], lL = {
	key: 0,
	class: "dui-alert dui-alert-error app:min-h-0 app:py-2",
	role: "alert"
}, uL = {
	key: 1,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info app:min-h-0 app:gap-2 app:py-2",
	role: "status"
}, dL = { class: "app:flex app:min-w-0 app:flex-1 app:items-center app:gap-2" }, fL = { class: "app:shrink-0" }, pL = ["value"], mL = {
	key: 2,
	class: "dui-alert dui-alert-warning app:min-h-0 app:py-2"
}, hL = { class: "dui-list app:m-0 app:grid app:grid-cols-[repeat(auto-fill,minmax(8.5rem,1fr))] app:gap-3 app:p-0" }, gL = [
	"aria-label",
	"aria-pressed",
	"title",
	"onClick"
], _L = ["loading", "src"], vL = { class: "app:flex app:flex-wrap app:items-center app:justify-between app:gap-1" }, yL = {
	key: 0,
	class: "dui-badge dui-badge-success dui-badge-sm"
}, bL = { class: "app:text-sm" }, xL = {
	key: 4,
	class: "dui-alert"
}, SL = /* @__PURE__ */ M({
	__name: "PortraitGallery",
	props: {
		emptyMessage: { default: "No portraits are available yet." },
		errorMessage: { default: "" },
		fillHeight: {
			type: Boolean,
			default: !1
		},
		isLoading: { type: Boolean },
		options: {},
		progressLabel: {},
		progressValue: {},
		searchTerms: {},
		selectedOptionKey: {},
		tags: {}
	},
	emits: [
		"createSearchTerm",
		"filterTagSectionChange",
		"selectPortrait"
	],
	setup(e, { emit: t }) {
		let n = e, r = t;
		return (t, i) => (F(), I("section", {
			"aria-busy": e.isLoading,
			class: "app:flex app:min-h-0 app:flex-col app:gap-2"
		}, [
			z(sL, {
				"result-count": e.options.length,
				tags: e.tags,
				onCreateSearchTerm: i[0] ||= (e) => r("createSearchTerm", e),
				onFilterTagSectionChange: i[1] ||= (e, t) => r("filterTagSectionChange", e, t)
			}, null, 8, ["result-count", "tags"]),
			e.errorMessage ? (F(), I("div", lL, [i[2] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-triangle-exclamation"
			}, null, -1), R("span", null, O(e.errorMessage), 1)])) : V("", !0),
			e.isLoading ? (F(), I("div", uL, [i[3] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-spinner fa-spin"
			}, null, -1), R("div", dL, [R("small", fL, O(e.progressLabel || "Updating results..."), 1), R("progress", {
				"aria-label": "Portrait search progress",
				class: "dui-progress app:min-w-24 app:flex-1",
				value: e.progressValue,
				max: "100"
			}, null, 8, pL)])])) : e.searchTerms.length && !e.options.length ? (F(), I("p", mL, " No portraits match the current filter tags. ")) : V("", !0),
			e.options.length ? (F(), I("div", {
				key: 3,
				class: D(["app:pr-1", e.fillHeight ? "app:min-h-48 app:flex-1 app:overflow-y-auto" : "app:max-h-[30rem] app:overflow-y-auto"])
			}, [R("ul", hL, [(F(!0), I(P, null, N(e.options, (t, n) => (F(), I("li", { key: t.key }, [R("button", {
				"aria-label": A(OM)(t),
				"aria-pressed": t.key === e.selectedOptionKey,
				class: D(["dui-btn app:h-auto app:min-h-0 app:w-full app:flex-col app:items-stretch app:justify-start app:gap-2 app:overflow-hidden app:whitespace-normal app:p-2 app:text-left", t.key === e.selectedOptionKey ? "dui-btn-active dui-btn-outline" : "dui-btn-ghost"]),
				title: A(DM)(t),
				type: "button",
				onClick: (e) => r("selectPortrait", t)
			}, [
				R("img", {
					alt: "",
					class: "app:aspect-square app:w-full app:rounded-box app:bg-base-300 app:object-cover",
					height: "192",
					loading: n < 6 ? "eager" : "lazy",
					src: t.img,
					width: "192"
				}, null, 8, _L),
				R("span", vL, [R("small", null, O(A(kM)(t)), 1), t.key === e.selectedOptionKey ? (F(), I("span", yL, " Selected ")) : V("", !0)]),
				R("strong", bL, O(t.label), 1)
			], 10, gL)]))), 128))])], 2)) : e.isLoading ? V("", !0) : (F(), I("p", xL, O(n.emptyMessage), 1))
		], 8, cL));
	}
}), CL = /* @__PURE__ */ M({
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
		return (t, r) => (F(), L(GN, {
			"close-label": "Done",
			open: e.open,
			title: "Choose an NPC Portrait",
			wide: "",
			onClose: r[3] ||= (e) => n("close")
		}, {
			default: j(() => [z(SL, {
				"empty-message": "No portraits are available yet. Choose a base Actor or queue a Career to start the search.",
				"is-loading": e.isLoadingPortraitCandidates,
				options: e.portraitCandidates,
				"progress-label": e.portraitSearchProgressLabel,
				"progress-value": e.portraitSearchProgressValue,
				"search-terms": e.portraitSearchTerms,
				"selected-option-key": e.selectedPortraitCandidateKey,
				tags: e.portraitFilterTags,
				onCreateSearchTerm: r[0] ||= (e) => n("createSearchTerm", e),
				onFilterTagSectionChange: r[1] ||= (e, t) => n("filterTagSectionChange", e, t),
				onSelectPortrait: r[2] ||= (e) => n("selectPortrait", e)
			}, null, 8, [
				"is-loading",
				"options",
				"progress-label",
				"progress-value",
				"search-terms",
				"selected-option-key",
				"tags"
			])]),
			_: 1
		}, 8, ["open"]));
	}
}), wL = {
	key: 0,
	class: "dui-alert"
}, TL = {
	key: 0,
	class: "dui-avatar"
}, EL = { class: "app:size-14 app:shrink-0 app:rounded-lg" }, DL = ["src"], OL = {
	key: 1,
	class: "dui-badge"
}, kL = {
	key: 1,
	class: "dui-alert dui-alert-info"
}, AL = { class: "dui-card-actions" }, jL = ["disabled"], ML = {
	key: 2,
	class: "dui-alert"
}, NL = /* @__PURE__ */ M({
	__name: "QuickCareerPanel",
	props: {
		careers: {},
		finalCareer: {}
	},
	emits: ["clearCareers"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (F(), L(bP, {
			description: "Quick Build keeps one chosen Career chain instead of a manual queue.",
			number: "2",
			title: "Career"
		}, {
			default: j(() => [
				e.finalCareer ? (F(), I("article", wL, [e.finalCareer.img ? (F(), I("div", TL, [R("div", EL, [R("img", {
					src: e.finalCareer.img,
					alt: "",
					class: "app:h-full app:w-full app:object-cover",
					height: "56",
					width: "56"
				}, null, 8, DL)])])) : (F(), I("span", OL, O(A(rF)(e.finalCareer.name)), 1)), R("div", null, [
					R("strong", null, O(e.finalCareer.name), 1),
					R("span", null, [B(O(e.finalCareer.careerGroup || "Career") + " ", 1), e.finalCareer.level === null ? V("", !0) : (F(), I(P, { key: 0 }, [B(" level " + O(e.finalCareer.level), 1)], 64))]),
					R("small", null, O(A(tF)(e.finalCareer)), 1)
				])])) : V("", !0),
				e.careers.length > 1 ? (F(), I("div", kL, [R("span", null, O(e.careers.length - 1) + " lower-tier Career" + O(e.careers.length === 2 ? "" : "s"), 1), R("span", null, "Included before " + O(e.finalCareer?.name) + ".", 1)])) : V("", !0),
				R("div", AL, [R("button", {
					class: "dui-btn dui-btn-sm",
					disabled: !e.careers.length,
					type: "button",
					onClick: r[0] ||= (e) => n("clearCareers")
				}, " Clear Career ", 8, jL)]),
				e.careers.length ? V("", !0) : (F(), I("p", ML, "No Career selected."))
			]),
			_: 1
		}));
	}
}), PL = {
	key: 0,
	class: "dui-fieldset"
}, FL = { class: "dui-fieldset-legend" }, IL = { class: "dui-card-actions" }, LL = ["aria-pressed", "onClick"], RL = /* @__PURE__ */ M({
	__name: "TraitButtonGroup",
	props: {
		caption: {},
		title: {},
		traits: {}
	},
	emits: ["toggleTrait"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => e.traits.length ? (F(), I("fieldset", PL, [R("legend", FL, [R("span", null, O(e.title), 1), R("span", null, O(e.caption), 1)]), R("div", IL, [(F(!0), I(P, null, N(e.traits, (e) => (F(), I("button", {
			key: e.uuid,
			"aria-pressed": e.isSelected,
			class: D(["dui-btn dui-btn-sm", { "dui-btn-active": e.isSelected }]),
			type: "button",
			onClick: (t) => n("toggleTrait", e)
		}, O(e.name), 11, LL))), 128))])])) : V("", !0);
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/errors.ts
function zL(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not resolve that Actor drop.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useBaseActorSelection.ts
function BL(e, t) {
	let n = LN(), { baseActors: r, selectedBaseActorUuid: i } = zs(n), a = /* @__PURE__ */ k(""), o = H(() => {
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
			t.value = zL(e);
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
function VL() {
	let { advancements: e, careers: t, finalPortraitPath: n, selectedBaseActor: r, trappings: i } = zs(LN()), a = H(() => {
		let e = 0;
		for (let n of t.value) e += n.quantity;
		return e;
	}), o = H(() => i.value.filter((e) => !e.ignored).length), s = H(() => e.value.filter((e) => e.current !== e.careerValue).length), c = H(() => i.value.filter((e) => !e.ignored && e.resolution.status === "fallback").length), l = H(() => i.value.filter((e) => e.ignored).length), u = H(() => e.value.filter((e) => e.kind === "skill" && KA(e.name) !== null).length), d = H(() => i.value.filter((e) => !e.ignored && e.resolution.status === "unresolved").length), f = H(() => {
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
function HL() {
	let e = LN(), { optionalTraits: t, quickTraits: n, traits: r } = zs(e), i = H(() => new Set(r.value.map((e) => UL(e.name)))), a = H(() => t.value.map(s)), o = H(() => {
		let e = new Set(t.value.map((e) => UL(e.name)));
		return n.value.filter((t) => !e.has(UL(t.name))).map(s);
	});
	function s(e) {
		return {
			...e,
			isSelected: i.value.has(UL(e.name))
		};
	}
	function c(t) {
		let n = i.value.has(UL(t.name));
		e.setQuickTraitSelected(t, !n);
	}
	function l(t) {
		let n = i.value.has(UL(t.name));
		e.setOptionalTraitSelected(t, !n);
	}
	return {
		displayedQuickTraitOptions: o,
		optionalTraitOptions: a,
		toggleOptionalTrait: l,
		toggleQuickTrait: c
	};
}
function UL(e) {
	return e.trim().toLocaleLowerCase();
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/useCareerQueue.ts
function WL() {
	let e = LN(), t = /* @__PURE__ */ k(null), n = /* @__PURE__ */ k(null);
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
//#region src/functions/npc-builder/portrait-candidates.ts
var GL = mM;
function KL(e) {
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
	}), iM(t);
}
function qL(e) {
	let t = [];
	e.selectedBaseActor && t.push(e.selectedBaseActor.species, e.selectedBaseActor.name);
	for (let n of e.careers) t.push(n.name, n.careerGroup);
	return gM(t);
}
//#endregion
//#region src/state/portrait-gallery/workflow.ts
function JL(e) {
	let t = /* @__PURE__ */ k([]), n = /* @__PURE__ */ k(null), r = /* @__PURE__ */ k(!1), i = /* @__PURE__ */ k(null), a = 0, o = H(() => YL([...e.baseSearchTerms.value, ...e.filterState.customPortraitSearchTerms.value])), s = H(() => x("search")), c = H(() => x("must-include")), l = H(() => x("must-exclude")), u = H(() => YL([...s.value, ...c.value])), d = H(() => n.value ?? aM({
		assetCandidates: t.value,
		immediateCandidates: e.immediateCandidates.value,
		selectedPortraitPath: e.pinnedPortraitPath.value
	})), f = H(() => tM(d.value)), p = H(() => [...o.value.flatMap(S), ...f.value.map(C)]), m = H(() => d.value.filter((e) => xM(e, {
		mustExcludeSources: ee("must-exclude"),
		mustExcludeTerms: l.value,
		mustIncludeSources: ee("must-include"),
		mustIncludeTerms: c.value
	}))), h = H(() => m.value.find((t) => t.img === e.activePortraitPath.value) ?? null), g = H(() => h.value?.key ?? ""), _ = H(() => EM(i.value)), v = H(() => TM(i.value));
	Xn(o, (t) => e.filterState.retainAvailablePortraitFilterTerms(t), { immediate: !0 }), Xn(() => [
		e.hasSubject.value,
		e.includeCompendiumAssets.value,
		e.includeFilePickerAssets.value,
		e.excludeFullyTransparentImages.value,
		e.excludedReferenceImagePaths.value.join("|"),
		e.priorityFolderPaths.value.join("|"),
		e.immediateCandidates.value.map(({ img: e }) => e).join("|"),
		e.baseSearchTerms.value.join("|"),
		e.filterState.customPortraitSearchTerms.value.join("|"),
		u.value.join("|"),
		l.value.join("|")
	], (e, t, n) => {
		a += 1;
		let r = setTimeout(() => void b(), 150);
		n(() => clearTimeout(r));
	}, { immediate: !0 });
	function y(t, n) {
		if (t.kind === "source") {
			e.filterState.setPortraitSourceTagSection(t.value, n);
			return;
		}
		e.filterState.setPortraitTermSection(t.value, n);
	}
	async function b() {
		let o = a + 1;
		a = o;
		let s = e.hasSubject.value, d = wM({
			hasEnabledSource: e.includeCompendiumAssets.value || e.includeFilePickerAssets.value || e.priorityFolderPaths.value.length > 0,
			hasSubject: s,
			searchTerms: u.value
		});
		if (!s) {
			t.value = [], n.value = [], r.value = !1, i.value = null;
			return;
		}
		r.value = !0, t.value = [], n.value = null, i.value = {
			candidatesFound: 0,
			currentLocation: "Preparing portrait search",
			directoriesVisited: 0,
			maxDirectories: 0,
			phase: "world-documents"
		};
		try {
			let r = (e) => {
				a === o && (i.value = e);
			}, s = d ? await e.provider.listPortraitCandidates({
				includeCompendiumAssets: e.includeCompendiumAssets.value,
				includeFilePickerAssets: e.includeFilePickerAssets.value,
				mustExcludeTerms: l.value,
				mustIncludeTerms: c.value,
				priorityFolderPaths: e.priorityFolderPaths.value,
				searchTerms: u.value
			}, r) : [], f = aM({
				assetCandidates: s,
				immediateCandidates: e.immediateCandidates.value,
				selectedPortraitPath: e.pinnedPortraitPath.value
			}), p = await e.provider.filterPortraitCandidates(f, {
				excludeFullyTransparentImages: e.excludeFullyTransparentImages.value,
				excludedReferenceImagePaths: e.excludedReferenceImagePaths.value
			}, r);
			a === o && (t.value = s, n.value = p);
		} catch (t) {
			a === o && (e.errorMessage.value = t instanceof Error ? t.message : e.searchErrorMessage);
		} finally {
			a === o && (r.value = !1);
		}
	}
	return {
		activePortraitSearchTerms: u,
		addPortraitSearchTerm: e.filterState.addCustomPortraitSearchTerm,
		isLoadingPortraitCandidates: r,
		portraitCandidates: m,
		portraitFilterTags: p,
		portraitSearchProgress: i,
		portraitSearchProgressLabel: _,
		portraitSearchProgressValue: v,
		portraitSearchTerms: o,
		selectedPortraitCandidate: h,
		selectedPortraitCandidateKey: g,
		selectPortrait: e.selectPortrait,
		setPortraitFilterTagSection: y
	};
	function x(t) {
		return yM(o.value, e.filterState.portraitTermSections.value, t);
	}
	function S(t) {
		let n = e.filterState.portraitTermSections.value[t] ?? "search";
		return n === "removed" ? [] : [{
			canRemove: !0,
			id: `term:${t}`,
			kind: "term",
			label: t,
			section: n,
			value: t
		}];
	}
	function C(t) {
		return {
			canRemove: !1,
			id: `source:${t.value}`,
			kind: "source",
			label: `Sourced From ${t.label}`,
			section: e.filterState.portraitSourceTagSections.value[t.value] ?? "search",
			value: t.value
		};
	}
	function ee(t) {
		return f.value.filter((n) => (e.filterState.portraitSourceTagSections.value[n.value] ?? "search") === t).map((e) => e.value);
	}
}
function YL(e) {
	return [...new Set(e)];
}
//#endregion
//#region src/state/npc-builder/workflows/portrait-candidates-workflow.ts
function XL(e, t) {
	let n = LN(), { careers: r, customPortraitSearchTerms: i, finalPortraitPath: a, portraitSourceTagSections: o, portraitTermSections: s, selectedBaseActor: c, selectedPortraitPath: l, settings: u } = zs(n), d = H(() => KL({
		careers: r.value,
		selectedBaseActor: c.value
	})), f = H(() => qL({
		careers: r.value,
		selectedBaseActor: c.value
	})), p = H(() => vM({
		configuredFolders: u.value.prioritizedPortraitFolders,
		hasCareer: r.value.length > 0
	})), m = JL({
		activePortraitPath: a,
		baseSearchTerms: f,
		errorMessage: t,
		excludeFullyTransparentImages: H(() => u.value.excludeFullyTransparentPortraitAssets),
		excludedReferenceImagePaths: H(() => u.value.excludedPortraitReferenceImages),
		filterState: {
			addCustomPortraitSearchTerm: n.addCustomPortraitSearchTerm,
			customPortraitSearchTerms: i,
			portraitSourceTagSections: o,
			portraitTermSections: s,
			retainAvailablePortraitFilterTerms: n.retainAvailablePortraitFilterTerms,
			setPortraitSourceTagSection: n.setPortraitSourceTagSection,
			setPortraitTermSection: n.setPortraitTermSection
		},
		hasSubject: H(() => !!c.value || r.value.length > 0),
		immediateCandidates: d,
		includeCompendiumAssets: H(() => u.value.searchCompendiumPortraitAssets),
		includeFilePickerAssets: H(() => u.value.searchFoundryPortraitAssets),
		pinnedPortraitPath: l,
		priorityFolderPaths: p,
		provider: {
			filterPortraitCandidates: e.filterPortraitCandidates,
			listPortraitCandidates: e.listFoundryPortraitCandidates
		},
		searchErrorMessage: "The NPC Builder could not finish searching for portraits.",
		selectPortrait: (e) => n.selectPortrait(e.img)
	}), h = H(() => m.portraitCandidates.value.slice(0, 4)), g = H(() => Math.max(0, m.portraitCandidates.value.length - h.value.length));
	return {
		...m,
		compactPortraitCandidates: h,
		hiddenPortraitCandidateCount: g
	};
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderBuildTab/usePortraitCandidates.ts
function ZL(e, t) {
	let n = XL(e, t), r = /* @__PURE__ */ k(!1);
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
var QL = { class: "app:grid app:gap-3" }, $L = { class: "app:grid app:items-start app:gap-3 md:app:grid-cols-[minmax(0,1fr)_minmax(17rem,22rem)]" }, eR = { class: "app:grid app:min-w-0 app:gap-3" }, tR = /* @__PURE__ */ M({
	__name: "NpcBuilderBuildTab",
	props: {
		bridge: {},
		isLoadingActors: { type: Boolean },
		isLoadingBaseDraft: { type: Boolean },
		page: {}
	},
	setup(e) {
		let t = e, n = LN(), { actorName: r, advancements: i, careers: a, estimatedNpcXp: o, finalActorName: s, finalCareer: c, finalPortraitPath: l, grantTotals: u, selectedBaseActor: d, selectedSpells: f, suggestedActorName: p, traits: m } = zs(n), h = /* @__PURE__ */ k(""), { actorFilter: g, filteredActors: _, selectedBaseActorSelectValue: v } = BL(t.bridge, h), { clearCareerDragState: y, draggedCareerIndex: b, dragOverCareerIndex: x, handleCareerDragOver: S, handleCareerDragStart: C, handleCareerDrop: ee, moveCareer: te, removeCareer: ne, setCareerQuantity: re, setDragOverCareerIndex: ie } = WL(), { displayedQuickTraitOptions: w, optionalTraitOptions: T, toggleOptionalTrait: ae, toggleQuickTrait: oe } = HL(), { buildPreviewStatus: se, buildPreviewWarnings: ce, careerItemCount: E, editedAdvanceCount: le, fallbackTrappingCount: ue, ignoredTrappingCount: de, visibleTrappingCount: fe } = VL(), { addPortraitSearchTerm: pe, compactPortraitCandidates: me, hiddenPortraitCandidateCount: he, isLoadingPortraitCandidates: ge, isPortraitGalleryOpen: _e, portraitCandidates: ve, portraitFilterTags: D, portraitSearchProgress: ye, portraitSearchProgressLabel: be, portraitSearchProgressValue: xe, portraitSearchTerms: Se, selectedPortraitCandidate: Ce, selectedPortraitCandidateKey: we, selectPortrait: Te, selectPortraitFromGallery: O, setPortraitFilterTagSection: Ee } = ZL(t.bridge, h);
		return (t, De) => (F(), I("section", QL, [R("div", $L, [R("div", eR, [
			e.page === "build-quick" || e.page === "build-actor" ? (F(), L(gF, {
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
			e.page === "build-quick" ? (F(), L(NL, {
				key: 1,
				careers: A(a),
				"final-career": A(c),
				onClearCareers: A(n).clearCareers
			}, null, 8, [
				"careers",
				"final-career",
				"onClearCareers"
			])) : V("", !0),
			e.page === "build-quick" ? (F(), L(bP, {
				key: 2,
				description: "Apply optional base traits and configured quick traits to the draft.",
				number: "3",
				title: "Quick Traits"
			}, {
				default: j(() => [z(RL, {
					caption: `${A(T).length} from base statblock`,
					traits: A(T),
					title: "Optional Traits",
					onToggleTrait: A(ae)
				}, null, 8, [
					"caption",
					"traits",
					"onToggleTrait"
				]), z(RL, {
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
			e.page === "build-careers" ? (F(), L(HI, {
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
		]), z(vI, {
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
		}, null, 8, /* @__PURE__ */ "actor-name.advancement-count.build-preview-status.build-preview-warnings.career-item-count.compact-portrait-candidates.edited-advance-count.estimated-npc-xp.fallback-trapping-count.final-actor-name.final-career.final-portrait-path.grant-totals.hidden-portrait-candidate-count.ignored-trapping-count.is-loading-portrait-candidates.portrait-candidates.portrait-search-progress.portrait-search-progress-label.portrait-search-progress-value.selected-base-actor.selected-portrait-candidate.selected-portrait-candidate-key.selected-spell-count.suggested-actor-name.trait-count.visible-trapping-count.onSelectPortrait".split("."))]), z(CL, {
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
}), nR = {
	Average: "avg",
	Enormous: "enor",
	Large: "lrg",
	Little: "ltl",
	Monstrous: "mnst",
	Small: "sml",
	Tiny: "tiny"
}, rR = new Set(["bestial", "skittish"]);
function iR(e) {
	let t = e.some((e) => lR(e, "skittish")), n = e.some((e) => uR(e, "trained", "war")), r = fR(e.filter((e) => lR(e, "weapon")));
	return e.map((e) => {
		let i = oR(e.name);
		return rR.has(i) ? cR(e, `${e.name} is removed from combined mounts.`) : i === "weapon" ? !n || t ? cR(e, "Weapon requires Trained (War) and a mount that was not Skittish.") : e.uuid === r ? sR(e, "Weapon (Mount)") : cR(e, "Only the strongest Weapon trait is retained for the combined profile.") : sR(e, e.damage ? dR(e.name) : e.name);
	});
}
function aR(e) {
	return oR(e) === "armour";
}
function oR(e) {
	return e.trim().replace(/\s*\(mount\)\s*$/i, "").toLocaleLowerCase();
}
function sR(e, t) {
	return {
		fixedDamage: e.fixedDamage,
		included: !0,
		name: e.name,
		outputName: t,
		reason: "",
		sourceUuid: e.uuid
	};
}
function cR(e, t) {
	return {
		fixedDamage: e.fixedDamage,
		included: !1,
		name: e.name,
		outputName: "",
		reason: t,
		sourceUuid: e.uuid
	};
}
function lR(e, t) {
	return oR(e.name) === t;
}
function uR(e, t, n) {
	return lR(e, t) ? e.specification.trim().toLocaleLowerCase() === n : e.name.trim().toLocaleLowerCase() === `${t} (${n})`;
}
function dR(e) {
	return /\(mount\)\s*$/i.test(e.trim()) ? e.trim() : `${e.trim()} (Mount)`;
}
function fR(e) {
	return [...e].sort((e, t) => (t.fixedDamage ?? 0) - (e.fixedDamage ?? 0) || e.uuid.localeCompare(t.uuid))[0]?.uuid ?? "";
}
//#endregion
//#region src/functions/npc-builder/combined-profile/calculate.ts
var pR = [
	nR.Tiny,
	nR.Little,
	nR.Small,
	nR.Average,
	nR.Large,
	nR.Enormous,
	nR.Monstrous
], mR = {
	[nR.Average]: "Average",
	[nR.Enormous]: "Enormous",
	[nR.Large]: "Large",
	[nR.Little]: "Little",
	[nR.Monstrous]: "Monstrous",
	[nR.Small]: "Small",
	[nR.Tiny]: "Tiny"
};
function hR(e, t) {
	return {
		chargeStrengthBonus: Math.max(t.characteristics.strengthBonus - e.characteristics.strengthBonus, 0),
		initiative: Math.max(e.characteristics.initiative, t.characteristics.initiative),
		movement: t.movement,
		size: _R(e.size, t.size),
		strength: e.characteristics.strength,
		toughness: Math.max(e.characteristics.toughness, t.characteristics.toughness),
		traits: iR(t.traits),
		wounds: gR(e.wounds, t.wounds)
	};
}
function gR(e, t) {
	return Math.max(1, Math.max(e, t) + Math.ceil(Math.min(e, t) * .25));
}
function _R(e, t) {
	return vR(t) > vR(e) ? t : e;
}
function vR(e) {
	return pR.indexOf(e);
}
//#endregion
//#region src/functions/npc-builder/combined-profile/trait-source.ts
function yR({ flagScope: e, mount: t, plan: n, rider: r }) {
	let i = "Combined Profile";
	return {
		effects: [{
			changes: [],
			disabled: !1,
			flags: { [e]: { generatedCombinedProfileEffect: !0 } },
			img: t.img || "icons/svg/wing.svg",
			name: i,
			system: {
				scriptData: bR(e, n),
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
			description: { value: SR(r, t, n) },
			specification: { value: `${r.name} + ${t.name}` }
		},
		type: "trait"
	};
}
function bR(e, t) {
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
		script: xR(e, t.chargeStrengthBonus),
		trigger: "preRollTest"
	}), n;
}
function xR(e, t) {
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
function SR(e, t, n) {
	return [
		"<p>Generated by Drowsy's WFRP4e Customizers. This Actor combines a rider and mount into one simplified NPC profile.</p>",
		`<p><strong>Rider:</strong> ${CR(e.name)}<br><strong>Mount:</strong> ${CR(t.name)}</p>`,
		`<p><strong>Movement:</strong> ${n.movement}; <strong>Wounds:</strong> ${n.wounds}; <strong>Charge SB:</strong> +${n.chargeStrengthBonus}.</p>`,
		"<p>Mount attack Traits use fixed damage captured from the mount. Skittish and Bestial are removed.</p>"
	].join("");
}
function CR(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/errors.ts
function wR(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderMountTab/CombinedProfilePreview.vue?vue&type=script&setup=true&lang.ts
var TR = { class: "app:max-w-full app:overflow-x-auto" }, ER = { class: "dui-table dui-table-sm" }, DR = { class: "dui-alert" }, OR = { class: "app:flex app:flex-wrap app:gap-2" }, kR = { key: 0 }, AR = {
	key: 1,
	class: "app:grid app:gap-2"
}, jR = /* @__PURE__ */ M({
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
				mount: mR[t.mount.size],
				result: mR[t.plan.size],
				rider: mR[t.rider.size],
				rule: "Larger"
			}
		]);
		function a(e) {
			return e.fixedDamage === null ? e.outputName : `${e.outputName} (fixed Damage ${e.fixedDamage})`;
		}
		return (t, o) => (F(), I(P, null, [z(bP, {
			description: "This preview uses the Actors' current prepared values. The build recalculates after applying the rider's Career advances.",
			number: "2",
			title: "Combined Profile Preview"
		}, {
			default: j(() => [R("div", TR, [R("table", ER, [o[0] ||= R("thead", null, [R("tr", null, [
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
			]))), 128))])])]), R("p", DR, " Charge attacks gain +" + O(e.plan.chargeStrengthBonus) + " Damage from the mount's Strength Bonus. The combined profile also gains at least Armour (1). ", 1)]),
			_: 1
		}), z(bP, {
			description: "Mount attack damage is frozen before the traits are copied to the rider.",
			number: "3",
			title: "Mount Traits"
		}, {
			default: j(() => [
				R("div", OR, [(F(!0), I(P, null, N(n.value, (e) => (F(), I("span", {
					key: e.sourceUuid,
					class: "dui-badge dui-badge-sm"
				}, O(a(e)), 1))), 128))]),
				n.value.length ? V("", !0) : (F(), I("p", kR, "The mount contributes no traits.")),
				r.value.length ? (F(), I("div", AR, [o[1] ||= R("p", null, [R("strong", null, "Removed or consolidated")], -1), (F(!0), I(P, null, N(r.value, (e) => (F(), I("p", {
					key: e.sourceUuid,
					class: "dui-alert dui-alert-warning"
				}, [R("strong", null, O(e.name) + ":", 1), B(" " + O(e.reason), 1)]))), 128))])) : V("", !0)
			]),
			_: 1
		})], 64));
	}
}), MR = { class: "app:grid app:gap-3" }, NR = { class: "app:grid app:gap-3 md:app:grid-cols-2" }, PR = { class: "dui-fieldset" }, FR = ["for"], IR = ["id"], LR = { class: "dui-fieldset" }, RR = ["for"], zR = [
	"id",
	"disabled",
	"value"
], BR = ["value"], VR = {
	key: 0,
	class: "dui-card-actions"
}, HR = {
	key: 1,
	class: "dui-alert dui-alert-warning"
}, UR = {
	key: 2,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, WR = {
	key: 3,
	"aria-live": "polite",
	class: "dui-alert",
	role: "status"
}, GR = {
	key: 4,
	class: "dui-alert"
}, KR = {
	key: 0,
	class: "dui-avatar"
}, qR = { class: "app:size-16 app:shrink-0 app:rounded-lg" }, JR = ["src"], YR = /* @__PURE__ */ M({
	__name: "NpcBuilderMountTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = LN(), { baseActorCombatProfile: r, mountActorProfile: i, mountActors: a, selectedBaseActorUuid: o, selectedMountActorUuid: s } = zs(n), c = /* @__PURE__ */ k(""), l = /* @__PURE__ */ k(""), u = /* @__PURE__ */ k(!1), d = gr(), f = 0, p = H(() => {
			let e = c.value.trim().toLocaleLowerCase();
			return a.value.filter((t) => t.uuid !== o.value && (!e || t.name.toLocaleLowerCase().includes(e)));
		}), m = H(() => a.value.find((e) => e.uuid === s.value) ?? null), h = H(() => !r.value || !i.value ? null : hR(r.value, i.value));
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
				r === f && (n.hydrateMountActorProfile(null), l.value = wR(e));
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
				l.value = wR(e);
			}
		}
		return (e, t) => (F(), I("div", MR, [
			t[5] ||= R("p", { class: "dui-alert dui-alert-info" }, " Mounts are optional. A selected mount is folded into one simplified NPC profile during build. ", -1),
			z(bP, {
				description: "Choose any world Actor as the mount. This selection does not create a live WFRP mount relationship.",
				number: "1",
				title: "Mount Actor"
			}, {
				default: j(() => [
					R("div", NR, [R("fieldset", PR, [
						t[2] ||= R("legend", { class: "dui-fieldset-legend" }, "Search mounts", -1),
						R("label", {
							class: "dui-label",
							for: `${A(d)}-filter`
						}, "Actor name", 8, FR),
						Un(R("input", {
							id: `${A(d)}-filter`,
							"onUpdate:modelValue": t[0] ||= (e) => c.value = e,
							"aria-label": "Filter mount actors by name",
							class: "dui-input dui-input-sm",
							placeholder: "Filter world actors",
							type: "search"
						}, null, 8, IR), [[Go, c.value]])
					]), R("fieldset", LR, [
						t[4] ||= R("legend", { class: "dui-fieldset-legend" }, "Selected mount", -1),
						R("label", {
							class: "dui-label",
							for: `${A(d)}-mount`
						}, "Mount statblock", 8, RR),
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
						}, O(e.name), 9, BR))), 128))], 40, zR)
					])]),
					z(DC, {
						disabled: !A(o),
						description: "Drop a world Actor to use as the mount.",
						title: "Drop Mount Actor",
						variant: "compact",
						onDropData: _
					}, null, 8, ["disabled"]),
					A(s) ? (F(), I("div", VR, [R("button", {
						class: "dui-btn dui-btn-ghost dui-btn-sm",
						type: "button",
						onClick: t[1] ||= (...e) => A(n).clearMountSelection && A(n).clearMountSelection(...e)
					}, " Clear Mount ")])) : V("", !0),
					A(o) ? l.value ? (F(), I("p", UR, O(l.value), 1)) : u.value ? (F(), I("p", WR, " Loading mount profile... ")) : m.value && A(i) ? (F(), I("article", GR, [m.value.img ? (F(), I("div", KR, [R("div", qR, [R("img", {
						src: m.value.img,
						alt: "",
						class: "app:h-full app:w-full app:object-cover",
						height: "64",
						width: "64"
					}, null, 8, JR)])])) : V("", !0), R("div", null, [R("strong", null, O(m.value.name), 1), R("span", null, " Movement " + O(A(i).movement) + " | Wounds " + O(A(i).wounds) + " | " + O(A(mR)[A(i).size]), 1)])])) : V("", !0) : (F(), I("p", HR, " Choose the rider on the Build tab before selecting a mount. "))
				]),
				_: 1
			}),
			h.value && A(r) && A(i) ? (F(), L(jR, {
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
function XR(e) {
	return e ? e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down cache ready with ${e.digDownIndexedFileCount} indexed files.` : "Dig Down is active; its file cache is still building or unavailable." : "Dig Down is active, but its Deep File Search setting is disabled." : "Install and enable Dig Down to search local files for portrait suggestions." : "Checking Dig Down integration.";
}
//#endregion
//#region src/functions/npc-builder/settings/settings-payload.ts
function ZR(e) {
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
		excludeFullyTransparentPortraitAssets: n.excludeFullyTransparentPortraitAssets,
		excludedPortraitReferenceImages: [...n.excludedPortraitReferenceImages],
		includeSpeciesInName: n.includeSpeciesInName,
		lowerCareerMode: n.lowerCareerMode,
		outputActorFolderUuid: n.outputActorFolderUuid,
		prioritizedPortraitFolders: [...n.prioritizedPortraitFolders],
		quickTraitFolderUuid: n.quickTraitFolderUuid,
		searchCompendiumPortraitAssets: n.searchCompendiumPortraitAssets,
		searchFoundryPortraitAssets: t && n.searchFoundryPortraitAssets,
		searchWebPortraitAssets: n.searchWebPortraitAssets
	};
}
//#endregion
//#region src/state/npc-builder/workflows/settings-workflow.ts
function QR(e) {
	let t = LN(), { actorFolders: n, itemFolders: r, settings: i } = zs(t), a = /* @__PURE__ */ k(""), o = /* @__PURE__ */ k(""), s = /* @__PURE__ */ k(!1), c = /* @__PURE__ */ k(""), l = /* @__PURE__ */ k(null), u = /* @__PURE__ */ k(""), d = /* @__PURE__ */ k(""), f = H(() => l.value?.digDownActive ?? !0), p = H(() => XR(l.value));
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
			t.hydrateSettings(await e.saveSettings(IM())), await te(), d.value = "Settings reset to defaults.";
		});
	}
	async function ee(e) {
		s.value = !0, o.value = "", d.value = "";
		try {
			await e();
		} catch (e) {
			o.value = $R(e);
		} finally {
			s.value = !1;
		}
	}
	async function te() {
		let [n, r] = await Promise.all([e.listBaseActors(i.value), e.listQuickTraits(i.value)]);
		t.hydrateBaseActors(n), t.hydrateQuickTraits(r);
	}
	function ne() {
		return ZR({
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
function $R(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSettingsTab/FolderSetting.vue?vue&type=script&setup=true&lang.ts
var ez = { class: "dui-fieldset" }, tz = { class: "dui-fieldset-legend" }, nz = ["aria-label", "value"], rz = { value: "" }, iz = ["value"], az = { class: "dui-fieldset" }, oz = ["aria-label", "value"], sz = { class: "dui-card-actions" }, cz = ["disabled"], lz = /* @__PURE__ */ M({
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
			R("fieldset", ez, [R("legend", tz, O(e.folderLabel), 1), R("select", {
				"aria-label": e.folderLabel,
				class: "dui-select dui-select-sm",
				value: e.selectedUuid,
				onChange: r
			}, [R("option", rz, O(e.defaultOptionLabel), 1), (F(!0), I(P, null, N(e.folders, (e) => (F(), I("option", {
				key: e.uuid,
				value: e.uuid
			}, O(e.name), 9, iz))), 128))], 40, nz)]),
			R("fieldset", az, [a[1] ||= R("legend", { class: "dui-fieldset-legend" }, "Create or use by name", -1), R("input", {
				"aria-label": `Create or use ${e.folderLabel} by name`,
				class: "dui-input dui-input-sm",
				value: e.createName,
				placeholder: "Folder name",
				type: "text",
				onInput: i
			}, null, 40, oz)]),
			R("div", sz, [R("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.disabled || !e.createName.trim(),
				type: "button",
				onClick: a[0] ||= (e) => n("saveFolderName")
			}, O(e.buttonLabel ?? "Save Folder"), 9, cz)])
		]));
	}
}), uz = /* @__PURE__ */ M({
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
		return (t, r) => (F(), L(bP, {
			description: "Limit the source picker or choose where generated Actors are stored.",
			number: "1",
			title: "Actor Sources"
		}, {
			default: j(() => [z(lz, {
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
			]), z(lz, {
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
}), dz = {
	key: 0,
	class: "dui-label"
}, fz = ["checked"], pz = {
	key: 1,
	class: "dui-label"
}, mz = ["checked"], hz = {
	key: 2,
	class: "dui-label"
}, gz = ["checked"], _z = {
	key: 3,
	class: "dui-label"
}, vz = ["checked"], yz = {
	key: 4,
	class: "dui-label"
}, bz = ["checked"], xz = /* @__PURE__ */ M({
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
		return (t, i) => (F(), L(bP, {
			description: "Choose which base-only data is included in the editable draft.",
			title: "Base Actor Features"
		}, {
			default: j(() => [
				e.showAdvancementFeatures === !1 ? V("", !0) : (F(), I("label", dz, [R("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowCharacteristics,
					type: "checkbox",
					onChange: i[0] ||= (e) => n("allowCharacteristicsChange", r(e))
				}, null, 40, fz), i[5] ||= R("span", null, "Show base actor characteristics", -1)])),
				e.showAdvancementFeatures === !1 ? V("", !0) : (F(), I("label", pz, [R("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowSkills,
					type: "checkbox",
					onChange: i[1] ||= (e) => n("allowSkillsChange", r(e))
				}, null, 40, mz), i[6] ||= R("span", null, "Show base actor skills", -1)])),
				e.showAdvancementFeatures === !1 ? V("", !0) : (F(), I("label", hz, [R("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTalents,
					type: "checkbox",
					onChange: i[2] ||= (e) => n("allowTalentsChange", r(e))
				}, null, 40, gz), i[7] ||= R("span", null, "Show base actor talents", -1)])),
				e.showTrappingFeature ? (F(), I("label", _z, [R("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTrappings,
					type: "checkbox",
					onChange: i[3] ||= (e) => n("allowTrappingsChange", r(e))
				}, null, 40, vz), i[8] ||= R("span", null, "Show base actor trappings", -1)])) : V("", !0),
				e.showTraitFeature === !1 ? V("", !0) : (F(), I("label", yz, [R("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.allowTraits,
					type: "checkbox",
					onChange: i[4] ||= (e) => n("allowTraitsChange", r(e))
				}, null, 40, bz), i[9] ||= R("span", null, "Show base actor traits", -1)]))
			]),
			_: 1
		}));
	}
}), Sz = { class: "dui-label" }, Cz = ["checked"], wz = /* @__PURE__ */ M({
	__name: "MagicSpellSettings",
	props: { autoSelectGrantedSpells: { type: Boolean } },
	emits: ["autoSelectGrantedSpellsChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("autoSelectGrantedSpellsChange", !!t?.checked);
		}
		return (t, n) => (F(), L(bP, {
			number: "6",
			title: "Magic and Spells"
		}, {
			default: j(() => [R("label", Sz, [R("input", {
				class: "dui-toggle dui-toggle-sm",
				checked: e.autoSelectGrantedSpells,
				type: "checkbox",
				onChange: r
			}, null, 40, Cz), n[0] ||= R("span", null, "Select detected Lore spells by default", -1)])]),
			_: 1
		}));
	}
}), Tz = { class: "dui-label" }, Ez = ["checked"], Dz = /* @__PURE__ */ M({
	__name: "NamingSettings",
	props: { includeSpeciesInName: { type: Boolean } },
	emits: ["includeSpeciesInNameChange"],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("includeSpeciesInNameChange", !!t?.checked);
		}
		return (t, n) => (F(), L(bP, {
			number: "3",
			title: "Default Naming"
		}, {
			default: j(() => [R("label", Tz, [R("input", {
				class: "dui-toggle dui-toggle-sm",
				checked: e.includeSpeciesInName,
				type: "checkbox",
				onChange: r
			}, null, 40, Ez), n[0] ||= R("span", null, "Include species in suggested names", -1)])]),
			_: 1
		}));
	}
}), Oz = { class: "dui-fieldset" }, kz = ["value"], Az = { class: "dui-label" }, jz = ["checked"], Mz = /* @__PURE__ */ M({
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
		return (t, n) => (F(), L(bP, { title: "Career Resolution" }, {
			default: j(() => [R("fieldset", Oz, [n[1] ||= R("legend", { class: "dui-fieldset-legend" }, "Lower career handling", -1), R("select", {
				"aria-label": "Lower career handling",
				class: "dui-select dui-select-sm",
				value: e.lowerCareerMode,
				onChange: r
			}, [...n[0] ||= [
				R("option", { value: "prompt" }, "Prompt when candidates are found", -1),
				R("option", { value: "auto-add-all" }, "Automatically add all lower-tier matches", -1),
				R("option", { value: "never" }, "Only add dropped careers", -1)
			]], 40, kz)]), R("label", Az, [R("input", {
				class: "dui-toggle dui-toggle-sm",
				checked: e.askForLinkedSkillSpecializations,
				type: "checkbox",
				onChange: i
			}, null, 40, jz), n[2] ||= R("span", null, "Resolve linked career skill repeats separately", -1)])]),
			_: 1
		}));
	}
}), Nz = { class: "app:grid app:gap-1" }, Pz = ["value"], Fz = { class: "dui-label" }, Iz = ["checked"], Lz = { class: "app:grid app:gap-1" }, Rz = ["value"], zz = { class: "dui-label" }, Bz = ["checked", "disabled"], Vz = {
	"aria-live": "polite",
	class: "dui-alert",
	role: "status"
}, Hz = { class: "dui-label" }, Uz = ["checked"], Wz = { class: "dui-label" }, Gz = ["checked"], Kz = /* @__PURE__ */ M({
	__name: "PortraitSuggestionSettings",
	props: {
		canUseDigDownPortraitSearch: { type: Boolean },
		excludeFullyTransparentPortraitAssets: { type: Boolean },
		excludedPortraitReferenceImages: {},
		prioritizedPortraitFolders: {},
		searchCompendiumPortraitAssets: { type: Boolean },
		searchFoundryPortraitAssets: { type: Boolean },
		searchWebPortraitAssets: { type: Boolean },
		statusLabel: {}
	},
	emits: [
		"excludeFullyTransparentPortraitAssetsChange",
		"excludedPortraitReferenceImagesChange",
		"prioritizedPortraitFoldersChange",
		"searchCompendiumPortraitAssetsChange",
		"searchFoundryPortraitAssetsChange"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			let t = e.target;
			n("excludeFullyTransparentPortraitAssetsChange", !!t?.checked);
		}
		function i(e) {
			let t = e.target;
			n("excludedPortraitReferenceImagesChange", t?.value.split(/\r?\n/u) ?? []);
		}
		function a(e) {
			let t = e.target;
			n("prioritizedPortraitFoldersChange", t?.value.split(/\r?\n/u) ?? []);
		}
		function o(e) {
			let t = e.target;
			n("searchFoundryPortraitAssetsChange", !!t?.checked);
		}
		function s(e) {
			let t = e.target;
			n("searchCompendiumPortraitAssetsChange", !!t?.checked);
		}
		return (t, n) => (F(), L(bP, {
			description: "Choose which local Foundry sources can suggest portraits.",
			number: "4",
			title: "Portrait Suggestions"
		}, {
			default: j(() => [
				R("label", Nz, [
					n[0] ||= R("span", { class: "dui-label app:justify-start app:gap-2 app:font-semibold" }, [R("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-folder-open"
					}), B(" Priority Foundry folders ")], -1),
					R("textarea", {
						"aria-describedby": "portrait-priority-folders-help",
						class: "dui-textarea dui-textarea-sm app:min-h-20 app:w-full",
						placeholder: "modules/my-art-module/portraits",
						rows: "3",
						value: e.prioritizedPortraitFolders.join("\n"),
						onInput: a
					}, null, 40, Pz),
					n[1] ||= R("small", { id: "portrait-priority-folders-help" }, " One Foundry data path per line. These appear first, ahead of compendiums, world documents, and Dig Down results. ", -1)
				]),
				R("label", Fz, [R("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.excludeFullyTransparentPortraitAssets,
					type: "checkbox",
					onChange: r
				}, null, 40, Iz), n[2] ||= R("span", null, "Hide fully empty or transparent images", -1)]),
				R("label", Lz, [
					n[3] ||= R("span", { class: "dui-label app:justify-start app:gap-2 app:font-semibold" }, [R("i", {
						"aria-hidden": "true",
						class: "fa-solid fa-ban"
					}), B(" Excluded image references ")], -1),
					R("textarea", {
						"aria-describedby": "portrait-excluded-references-help",
						class: "dui-textarea dui-textarea-sm app:min-h-20 app:w-full",
						placeholder: "systems/wfrp4e/tokens/unknown.png",
						rows: "3",
						value: e.excludedPortraitReferenceImages.join("\n"),
						onInput: i
					}, null, 40, Rz),
					n[4] ||= R("small", { id: "portrait-excluded-references-help" }, " One image path per line. Each listed image and its visual duplicates are hidden. Broken images are always hidden. ", -1)
				]),
				R("label", zz, [R("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchFoundryPortraitAssets,
					disabled: !e.canUseDigDownPortraitSearch,
					type: "checkbox",
					onChange: o
				}, null, 40, Bz), n[5] ||= R("span", null, "Search Dig Down's file cache for portrait suggestions", -1)]),
				R("p", Vz, O(e.statusLabel), 1),
				R("label", Hz, [R("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchCompendiumPortraitAssets,
					type: "checkbox",
					onChange: s
				}, null, 40, Uz), n[6] ||= R("span", null, "Search Actor and Item compendiums for portrait suggestions", -1)]),
				R("label", Wz, [R("input", {
					class: "dui-toggle dui-toggle-sm",
					checked: e.searchWebPortraitAssets,
					disabled: "",
					type: "checkbox"
				}, null, 8, Gz), n[7] ||= R("span", null, "Search the web for portrait suggestions (later)", -1)])
			]),
			_: 1
		}));
	}
}), qz = { class: "dui-card-actions" }, Jz = ["disabled"], Yz = /* @__PURE__ */ M({
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
		return (t, r) => (F(), L(bP, {
			description: "Items in this folder become one-click Trait choices on the Build tab.",
			number: "2",
			title: "Quick Traits"
		}, {
			default: j(() => [z(lz, {
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
			]), R("div", qz, [R("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isBusy || !e.quickTraitFolderUuid,
				type: "button",
				onClick: r[3] ||= (e) => n("importRecommendedQuickTraits")
			}, " Import Recommended Quick Traits ", 8, Jz)])]),
			_: 1
		}));
	}
}), Xz = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, Zz = {
	key: 1,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, Qz = /* @__PURE__ */ M({
	__name: "SettingsMessages",
	props: {
		errorMessage: {},
		settingsMessage: {}
	},
	setup(e) {
		return (t, n) => e.errorMessage ? (F(), I("p", Xz, O(e.errorMessage), 1)) : e.settingsMessage ? (F(), I("p", Zz, O(e.settingsMessage), 1)) : V("", !0);
	}
}), $z = { class: "app:grid app:gap-3" }, eB = { class: "app:grid app:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] app:gap-3" }, tB = { class: "dui-card-actions" }, nB = ["disabled"], rB = ["disabled"], iB = /* @__PURE__ */ M({
	__name: "NpcBuilderSettingsTab",
	props: {
		bridge: {},
		page: {}
	},
	setup(e) {
		let { actorFolders: t, baseActorFolderName: n, canUseDigDownPortraitSearch: r, errorMessage: i, importRecommendedQuickTraits: a, isBusy: o, itemFolders: s, outputActorFolderName: c, portraitSearchStatusLabel: l, quickTraitFolderName: u, refreshPortraitSearchAvailability: d, resetSettingsToDefaults: f, saveBaseActorFolderName: p, saveOutputActorFolderName: m, saveQuickTraitFolderName: h, saveSettings: g, settings: _, settingsMessage: v } = QR(e.bridge);
		return jr(() => {
			d();
		}), (d, y) => (F(), I("section", $z, [
			z(Qz, {
				"error-message": A(i),
				"settings-message": A(v)
			}, null, 8, ["error-message", "settings-message"]),
			R("div", eB, [
				e.page === "settings-folders" ? (F(), L(uz, {
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
				e.page === "settings-folders" ? (F(), L(Yz, {
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
				e.page === "settings-suggestions" ? (F(), L(Dz, {
					key: 2,
					"include-species-in-name": A(_).includeSpeciesInName,
					onIncludeSpeciesInNameChange: y[6] ||= (e) => A(_).includeSpeciesInName = e
				}, null, 8, ["include-species-in-name"])) : V("", !0),
				e.page === "settings-suggestions" ? (F(), L(Kz, {
					key: 3,
					"can-use-dig-down-portrait-search": A(r),
					"exclude-fully-transparent-portrait-assets": A(_).excludeFullyTransparentPortraitAssets,
					"excluded-portrait-reference-images": A(_).excludedPortraitReferenceImages,
					"prioritized-portrait-folders": A(_).prioritizedPortraitFolders,
					"search-compendium-portrait-assets": A(_).searchCompendiumPortraitAssets,
					"search-foundry-portrait-assets": A(_).searchFoundryPortraitAssets,
					"search-web-portrait-assets": A(_).searchWebPortraitAssets,
					"status-label": A(l),
					onExcludeFullyTransparentPortraitAssetsChange: y[7] ||= (e) => A(_).excludeFullyTransparentPortraitAssets = e,
					onExcludedPortraitReferenceImagesChange: y[8] ||= (e) => A(_).excludedPortraitReferenceImages = e,
					onPrioritizedPortraitFoldersChange: y[9] ||= (e) => A(_).prioritizedPortraitFolders = e,
					onSearchCompendiumPortraitAssetsChange: y[10] ||= (e) => A(_).searchCompendiumPortraitAssets = e,
					onSearchFoundryPortraitAssetsChange: y[11] ||= (e) => A(_).searchFoundryPortraitAssets = e
				}, null, 8, [
					"can-use-dig-down-portrait-search",
					"exclude-fully-transparent-portrait-assets",
					"excluded-portrait-reference-images",
					"prioritized-portrait-folders",
					"search-compendium-portrait-assets",
					"search-foundry-portrait-assets",
					"search-web-portrait-assets",
					"status-label"
				])) : V("", !0),
				e.page === "settings-advancement" ? (F(), L(xz, {
					key: 4,
					"allow-characteristics": A(_).allowBaseActorCharacteristics,
					"allow-skills": A(_).allowBaseActorSkills,
					"allow-talents": A(_).allowBaseActorTalents,
					"allow-traits": A(_).allowBaseActorTraits,
					"allow-trappings": A(_).allowBaseActorTrappings,
					"show-trapping-feature": !1,
					onAllowCharacteristicsChange: y[12] ||= (e) => A(_).allowBaseActorCharacteristics = e,
					onAllowSkillsChange: y[13] ||= (e) => A(_).allowBaseActorSkills = e,
					onAllowTalentsChange: y[14] ||= (e) => A(_).allowBaseActorTalents = e,
					onAllowTraitsChange: y[15] ||= (e) => A(_).allowBaseActorTraits = e,
					onAllowTrappingsChange: y[16] ||= (e) => A(_).allowBaseActorTrappings = e
				}, null, 8, [
					"allow-characteristics",
					"allow-skills",
					"allow-talents",
					"allow-traits",
					"allow-trappings"
				])) : V("", !0),
				e.page === "settings-resolution" ? (F(), L(wz, {
					key: 5,
					"auto-select-granted-spells": A(_).autoSelectGrantedSpells,
					onAutoSelectGrantedSpellsChange: y[17] ||= (e) => A(_).autoSelectGrantedSpells = e
				}, null, 8, ["auto-select-granted-spells"])) : V("", !0),
				e.page === "settings-resolution" ? (F(), L(xz, {
					key: 6,
					"allow-characteristics": A(_).allowBaseActorCharacteristics,
					"allow-skills": A(_).allowBaseActorSkills,
					"allow-talents": A(_).allowBaseActorTalents,
					"allow-traits": A(_).allowBaseActorTraits,
					"allow-trappings": A(_).allowBaseActorTrappings,
					"show-advancement-features": !1,
					"show-trait-feature": !1,
					"show-trapping-feature": "",
					onAllowCharacteristicsChange: y[18] ||= (e) => A(_).allowBaseActorCharacteristics = e,
					onAllowSkillsChange: y[19] ||= (e) => A(_).allowBaseActorSkills = e,
					onAllowTalentsChange: y[20] ||= (e) => A(_).allowBaseActorTalents = e,
					onAllowTraitsChange: y[21] ||= (e) => A(_).allowBaseActorTraits = e,
					onAllowTrappingsChange: y[22] ||= (e) => A(_).allowBaseActorTrappings = e
				}, null, 8, [
					"allow-characteristics",
					"allow-skills",
					"allow-talents",
					"allow-traits",
					"allow-trappings"
				])) : V("", !0),
				e.page === "settings-resolution" ? (F(), L(Mz, {
					key: 7,
					class: "app:col-span-full",
					"ask-for-linked-skill-specializations": A(_).askForLinkedSkillSpecializations,
					"lower-career-mode": A(_).lowerCareerMode,
					onAskForLinkedSkillSpecializationsChange: y[23] ||= (e) => A(_).askForLinkedSkillSpecializations = e,
					onLowerCareerModeChange: y[24] ||= (e) => A(_).lowerCareerMode = e
				}, null, 8, ["ask-for-linked-skill-specializations", "lower-career-mode"])) : V("", !0)
			]),
			R("div", tB, [R("button", {
				class: "dui-btn dui-btn-primary dui-btn-sm",
				disabled: A(o),
				type: "button",
				onClick: y[25] ||= (...e) => A(g) && A(g)(...e)
			}, " Save Settings ", 8, nB), R("button", {
				class: "dui-btn dui-btn-sm",
				disabled: A(o),
				type: "button",
				onClick: y[26] ||= (...e) => A(f) && A(f)(...e)
			}, " Reset to Defaults ", 8, rB)])
		]));
	}
});
//#endregion
//#region src/functions/npc-builder/magic-lore-resolution.ts
function aB(e) {
	return e.map((e) => `${e.kind}:${e.sourceName}:${e.rawLore}`).sort().join("|");
}
function oB(e) {
	return e.filter((e) => e.isAmbiguous);
}
function sB(e, t) {
	return { rows: oB(e).map((e) => ({
		grantLabel: lB(e),
		options: qM(e, t),
		rawLore: e.rawLore,
		resolutionKey: e.resolutionKey,
		selectedLore: "",
		sourceLabel: uB(e)
	})) };
}
function cB(e) {
	return e.kind === "arcane-magic" ? "Arcane Magic" : e.kind === "petty-magic" ? "Petty Magic" : "Spellcaster";
}
function lB(e) {
	return `${cB(e)} from ${e.sourceName}`;
}
function uB(e) {
	return e.source === "talent" ? "Talent" : "Trait";
}
//#endregion
//#region src/state/npc-builder/workflows/spells-workflow.ts
function dB(e) {
	let t = LN(), { magicGrants: n, spells: r, selectedSpells: i } = zs(t), a = /* @__PURE__ */ k(""), o = /* @__PURE__ */ k(!1), s = /* @__PURE__ */ k(!1), c = /* @__PURE__ */ k([]), l = /* @__PURE__ */ k(null), u = 0, d = H(() => oB(n.value)), f = H(() => n.value.length - d.value.length);
	Xn(() => aB(n.value), () => {
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
			u === r && (a.value = fB(e));
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
				a.value = fB(e);
			} finally {
				o.value = !1;
			}
		}
	}
	async function g() {
		a.value = "", await h(), l.value = sB(n.value, c.value);
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
			a.value = fB(e);
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
function fB(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that spell action.";
}
//#endregion
//#region src/view/apps/npc-builder/components/MagicLoreResolutionPromptContent.vue?vue&type=script&setup=true&lang.ts
var pB = { class: "dui-card-body" }, mB = { class: "dui-card-title" }, hB = { class: "dui-fieldset" }, gB = ["onUpdate:modelValue", "aria-label"], _B = ["value"], vB = { class: "dui-card-actions" }, yB = /* @__PURE__ */ M({
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
			}, [R("div", pB, [
				R("h3", mB, O(e.grantLabel), 1),
				R("span", null, O(e.sourceLabel) + " - " + O(e.rawLore || "Any Lore"), 1),
				R("fieldset", hB, [r[3] ||= R("legend", { class: "dui-fieldset-legend" }, "Lore", -1), Un(R("select", {
					"onUpdate:modelValue": (t) => e.selectedLore = t,
					"aria-label": `Lore for ${e.grantLabel}`,
					class: "dui-select dui-select-sm"
				}, [r[2] ||= R("option", { value: "" }, "Leave unresolved", -1), (F(!0), I(P, null, N(e.options, (e) => (F(), I("option", {
					key: e.key,
					value: e.value
				}, O(e.label) + O(e.wind && e.wind !== "None" ? ` (${e.wind})` : ""), 9, _B))), 128))], 8, gB), [[Ko, e.selectedLore]])])
			])]))), 128)),
			R("div", vB, [R("button", {
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
}), bB = {
	key: 0,
	class: "dui-alert"
}, xB = {
	key: 1,
	class: "dui-list"
}, SB = { class: "dui-list-col-grow" }, CB = { key: 0 }, wB = { key: 1 }, TB = {
	key: 2,
	class: "dui-card-actions"
}, EB = ["disabled"], DB = /* @__PURE__ */ M({
	__name: "MagicAccessPanel",
	props: {
		ambiguousGrantCount: {},
		isLoadingLoreOptions: { type: Boolean },
		magicGrants: {}
	},
	emits: ["resolveLores"],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (F(), L(bP, {
			description: "Magic Talents and Traits determine which spell Lores are available.",
			number: "1",
			title: "Magic Access"
		}, {
			default: j(() => [e.magicGrants.length ? (F(), I("ul", xB, [(F(!0), I(P, null, N(e.magicGrants, (e) => (F(), I("li", {
				key: `${e.source}:${e.sourceName}:${e.rawLore}`,
				class: "dui-list-row"
			}, [R("div", SB, [
				R("strong", null, O(A(cB)(e)), 1),
				R("span", null, O(A(uB)(e)) + " - " + O(e.sourceName), 1),
				e.isAmbiguous ? (F(), I("small", CB, " Needs Lore resolution before automatic spells can be found. ")) : (F(), I("small", wB, " Lore: " + O(e.rawLore || e.normalizedLore), 1))
			])]))), 128))])) : (F(), I("p", bB, " No magic-enabling Talent or Trait is selected. ")), e.ambiguousGrantCount ? (F(), I("div", TB, [R("button", {
				class: "dui-btn dui-btn-sm",
				disabled: e.isLoadingLoreOptions,
				type: "button",
				onClick: r[0] ||= (e) => n("resolveLores")
			}, O(e.isLoadingLoreOptions ? "Loading Lores..." : "Resolve Lores"), 9, EB)])) : V("", !0)]),
			_: 1
		}));
	}
});
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/labels.ts
function OB(e) {
	return e.source === "custom" ? "Dropped" : e.sourceLabel;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderSpellsTab/SpellSelectionPanel.vue?vue&type=script&setup=true&lang.ts
var kB = { class: "dui-card-actions" }, AB = ["disabled"], jB = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, MB = {
	key: 1,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, NB = {
	key: 2,
	class: "dui-list"
}, PB = [
	"aria-label",
	"checked",
	"onChange"
], FB = { class: "dui-list-col-grow" }, IB = {
	key: 0,
	class: "dui-avatar"
}, LB = ["src"], RB = ["onClick"], zB = {
	key: 3,
	class: "dui-alert"
}, BB = /* @__PURE__ */ M({
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
		return (t, r) => (F(), L(bP, {
			description: "Select detected Lore spells or drop specific Spell Items.",
			number: "2",
			title: "Spells"
		}, {
			default: j(() => [
				z(DC, {
					description: "Add a specific Spell item regardless of detected Lores.",
					title: "Drop Spell Items",
					onDropData: r[0] ||= (e) => n("spellDrop", e)
				}),
				R("div", kB, [R("button", {
					class: "dui-btn dui-btn-sm",
					disabled: e.isLoadingSpells || !e.resolvedGrantCount,
					type: "button",
					onClick: r[1] ||= (e) => n("refreshSpells")
				}, O(e.isLoadingSpells ? "Finding spells..." : "Refresh Spells"), 9, AB), R("span", null, O(e.selectedSpellCount) + " selected / " + O(e.spells.length) + " found", 1)]),
				e.errorMessage ? (F(), I("p", jB, O(e.errorMessage), 1)) : V("", !0),
				e.ambiguousGrantCount ? (F(), I("p", MB, O(e.ambiguousGrantCount) + " magic grant" + O(e.ambiguousGrantCount === 1 ? "" : "s") + " still need Lore resolution. You can still drop specific spells for now. ", 1)) : V("", !0),
				e.spells.length ? (F(), I("ul", NB, [(F(!0), I(P, null, N(e.spells, (e) => (F(), I("li", {
					key: e.key,
					class: "dui-list-row"
				}, [
					R("input", {
						"aria-label": `Use ${e.name}`,
						class: "dui-checkbox dui-checkbox-sm",
						checked: e.selected,
						type: "checkbox",
						onChange: (t) => n("spellSelectedChange", e, t)
					}, null, 40, PB),
					R("div", FB, [
						e.img ? (F(), I("div", IB, [R("div", null, [R("img", {
							src: e.img,
							alt: ""
						}, null, 8, LB)])])) : V("", !0),
						R("strong", null, O(e.name), 1),
						R("span", null, O(e.loreName || "Unknown Lore") + " · " + O(A(OB)(e)), 1)
					]),
					e.source === "custom" ? (F(), I("button", {
						key: 0,
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: (t) => n("removeCustomSpell", e.key)
					}, " Remove ", 8, RB)) : V("", !0)
				]))), 128))])) : (F(), I("p", zB, " No matching spells found yet. Drop specific spells here, or resolve a non-ambiguous magic Lore. "))
			]),
			_: 1
		}));
	}
}), VB = /* @__PURE__ */ M({
	__name: "NpcBuilderSpellsTab",
	props: { bridge: {} },
	setup(e) {
		let { ambiguousGrants: t, confirmMagicLorePrompt: n, dismissMagicLorePrompt: r, errorMessage: i, handleSpellDrop: a, initialize: o, isLoadingLoreOptions: s, isLoadingSpells: c, loadDetectedSpells: l, magicGrants: u, openMagicLorePrompt: d, pendingMagicLorePrompt: f, removeCustomSpell: p, resolvedGrantCount: m, selectedSpells: h, setSpellSelected: g, spells: _ } = dB(e.bridge);
		jr(() => {
			o();
		});
		function v(e, t) {
			let n = t.target;
			n && g(e.key, n.checked);
		}
		return (e, o) => (F(), I("section", null, [
			z(GN, {
				open: A(f) !== null,
				title: "Resolve Magic Lores",
				onClose: A(r)
			}, {
				default: j(() => [A(f) ? (F(), L(yB, {
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
			z(DB, {
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
			z(BB, {
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
}), HB = { class: "dui-collapse-title" }, UB = { class: "dui-badge" }, WB = {
	key: 0,
	class: "dui-badge dui-badge-info"
}, GB = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, KB = { class: "dui-collapse-content" }, qB = { class: "dui-fieldset" }, JB = { class: "dui-fieldset-legend" }, YB = [
	"aria-label",
	"value",
	"onInput"
], XB = {
	key: 0,
	class: "dui-fieldset"
}, ZB = [
	"aria-label",
	"value",
	"onChange"
], QB = ["value"], $B = {
	key: 1,
	class: "dui-fieldset"
}, eV = [
	"aria-label",
	"value",
	"onInput"
], tV = ["onClick"], nV = {
	key: 0,
	class: "dui-alert"
}, rV = /* @__PURE__ */ M({
	__name: "NpcBuilderTraitsTab",
	props: { difficultyOptions: {} },
	setup(e) {
		let t = LN(), { traits: n } = zs(t);
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
		return (t, o) => (F(), L(bP, {
			description: "Open a Trait to review its WFRP configuration before building.",
			title: "Traits"
		}, {
			default: j(() => [(F(!0), I(P, null, N(A(n), (t) => (F(), I("details", {
				key: t.key,
				class: "dui-collapse dui-collapse-arrow dui-card-border"
			}, [R("summary", HB, [
				R("strong", null, O(t.name), 1),
				R("span", UB, O(r(t)), 1),
				t.config.rollable ? (F(), I("span", WB, "Rollable")) : V("", !0),
				t.config.damage ? (F(), I("span", GB, "Damage")) : V("", !0)
			]), R("div", KB, [
				R("fieldset", qB, [R("legend", JB, O(t.config.damage ? "Damage" : "Specification"), 1), R("input", {
					"aria-label": `${t.config.damage ? "Damage" : "Specification"} for ${t.name}`,
					class: "dui-input dui-input-sm",
					value: t.config.specification,
					placeholder: "None",
					type: "text",
					onInput: (e) => a(t, "specification", e)
				}, null, 40, YB)]),
				t.config.rollable && !t.config.damage ? (F(), I("fieldset", XB, [o[0] ||= R("legend", { class: "dui-fieldset-legend" }, "Difficulty", -1), R("select", {
					"aria-label": `Difficulty for ${t.name}`,
					class: "dui-select dui-select-sm",
					value: t.config.defaultDifficulty,
					onChange: (e) => a(t, "defaultDifficulty", e)
				}, [(F(!0), I(P, null, N(e.difficultyOptions, (e) => (F(), I("option", {
					key: e.value,
					value: e.value
				}, O(e.label), 9, QB))), 128))], 40, ZB)])) : V("", !0),
				t.config.damage && t.config.dice ? (F(), I("fieldset", $B, [o[1] ||= R("legend", { class: "dui-fieldset-legend" }, "Dice", -1), R("input", {
					"aria-label": `Dice for ${t.name}`,
					class: "dui-input dui-input-sm",
					value: t.config.dice,
					placeholder: "Optional",
					type: "text",
					onInput: (e) => a(t, "dice", e)
				}, null, 40, eV)])) : V("", !0),
				R("button", {
					class: "dui-btn dui-btn-sm",
					type: "button",
					onClick: (e) => i(t)
				}, "Remove", 8, tV)
			])]))), 128)), A(n).length ? V("", !0) : (F(), I("p", nV, "No traits are selected yet."))]),
			_: 1
		}));
	}
}), iV = "__blank-item__";
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/resolution-labels.ts
function aV(e) {
	return e.source === "base" ? "Base" : e.source === "career" ? "Career" : "Custom";
}
function oV(e) {
	return e.resolution.status === "matched" ? `Matched ${e.resolution.selectedName}` : e.resolution.status === "fallback" ? `Blank ${e.resolution.selectedName || e.name}` : e.resolution.candidates.length ? "Choose a match" : "Needs resolution";
}
function sV(e) {
	return e.ignored ? "Ignored" : e.resolution.status === "matched" ? "Matched" : e.resolution.status === "fallback" ? "Blank item" : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? "Choose" : "Needs resolution";
}
function cV(e) {
	let t = "dui-badge";
	return e.ignored ? [t, "dui-badge-ghost"] : e.resolution.status === "matched" ? [t, "dui-badge-success"] : e.resolution.status === "fallback" ? [t, "dui-badge-info"] : e.resolution.status === "ambiguous" || e.resolution.candidates.length ? [t, "dui-badge-warning"] : [t, "dui-badge-error"];
}
function lV(e) {
	return e.resolution.status === "fallback" ? iV : e.resolution.selectedCandidateUuid;
}
function uV(e) {
	return e.source === "career";
}
function dV(e) {
	return e.resolution.candidates.length > 0 || uV(e);
}
function fV(e) {
	return e.resolution.searchTerms.length <= 1 ? "" : `Options: ${e.resolution.searchTerms.join(" / ")}`;
}
//#endregion
//#region src/view/apps/npc-builder/components/NpcBuilderTrappingsTab/TrappingsTable.vue?vue&type=script&setup=true&lang.ts
var pV = {
	key: 0,
	class: "dui-list"
}, mV = [
	"aria-label",
	"checked",
	"onChange"
], hV = { class: "dui-list-col-grow app:grid app:gap-2" }, gV = { key: 0 }, _V = {
	key: 1,
	class: "dui-fieldset"
}, vV = [
	"aria-label",
	"value",
	"onChange"
], yV = {
	key: 0,
	value: ""
}, bV = ["value"], xV = ["value"], SV = { key: 2 }, CV = { class: "dui-card-actions" }, wV = { class: "dui-fieldset" }, TV = [
	"aria-label",
	"value",
	"onInput"
], EV = ["onClick"], DV = {
	key: 1,
	class: "dui-alert"
}, OV = /* @__PURE__ */ M({
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
		return (t, r) => e.trappings.length ? (F(), I("ul", pV, [(F(!0), I(P, null, N(e.trappings, (e) => (F(), I("li", {
			key: e.key,
			class: "dui-list-row"
		}, [R("input", {
			"aria-label": `Use ${e.name}`,
			class: "dui-checkbox dui-checkbox-sm",
			checked: !e.ignored,
			type: "checkbox",
			onChange: (t) => n("useChange", e.key, t)
		}, null, 40, mV), R("div", hV, [
			R("strong", null, O(e.name), 1),
			R("span", null, O(e.resolution.selectedItemType || e.itemType || "trapping") + " · " + O(A(aV)(e)), 1),
			A(fV)(e) ? (F(), I("span", gV, O(A(fV)(e)), 1)) : V("", !0),
			R("span", { class: D(A(cV)(e)) }, O(A(sV)(e)), 3),
			A(dV)(e) ? (F(), I("fieldset", _V, [r[0] ||= R("legend", { class: "dui-fieldset-legend" }, "Resolution", -1), R("select", {
				"aria-label": `Resolution for ${e.name}`,
				class: "dui-select dui-select-sm",
				value: A(lV)(e),
				onChange: (t) => n("resolutionChange", e.key, t)
			}, [
				e.resolution.candidates.length ? (F(), I("option", yV, "Choose match")) : V("", !0),
				(F(!0), I(P, null, N(e.resolution.candidates, (e) => (F(), I("option", {
					key: e.uuid,
					value: e.uuid
				}, O(e.name) + " (" + O(e.sourceLabel) + ") ", 9, bV))), 128)),
				A(uV)(e) ? (F(), I("option", {
					key: 1,
					value: A(iV)
				}, " Blank Item ", 8, xV)) : V("", !0)
			], 40, vV)])) : (F(), I("span", SV, O(A(oV)(e)), 1)),
			R("div", CV, [R("fieldset", wV, [r[1] ||= R("legend", { class: "dui-fieldset-legend" }, "Quantity", -1), R("input", {
				"aria-label": `Quantity for ${e.name}`,
				class: "dui-input dui-input-sm",
				value: e.quantity,
				min: "1",
				type: "number",
				onInput: (t) => n("quantityInput", e.key, t)
			}, null, 40, TV)]), e.source === "custom" ? (F(), I("button", {
				key: 0,
				class: "dui-btn dui-btn-sm",
				type: "button",
				onClick: (t) => n("removeCustomTrapping", e.key)
			}, " Remove ", 8, EV)) : V("", !0)])
		])]))), 128))])) : (F(), I("p", DV, "No trappings are selected yet."));
	}
}), kV = { class: "dui-card-actions" }, AV = ["disabled"], jV = { key: 0 }, MV = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, NV = /* @__PURE__ */ M({
	__name: "NpcBuilderTrappingsTab",
	props: { bridge: {} },
	setup(e) {
		let t = e, n = LN(), { trappings: r } = zs(n), i = /* @__PURE__ */ k(""), a = /* @__PURE__ */ k(!1), o = H(() => r.value.filter((e) => !e.ignored && e.resolution.status === "unresolved"));
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
		return (e, t) => (F(), L(bP, {
			description: "Review the Items that will be embedded in the generated NPC.",
			title: "Trappings"
		}, {
			default: j(() => [
				R("div", kV, [R("button", {
					class: "dui-btn dui-btn-sm",
					disabled: a.value || !o.value.length,
					type: "button",
					onClick: u
				}, O(a.value ? "Resolving..." : "Resolve Trappings"), 9, AV), o.value.length ? (F(), I("span", jV, O(o.value.length) + " unresolved ", 1)) : V("", !0)]),
				i.value ? (F(), I("p", MV, O(i.value), 1)) : V("", !0),
				z(OV, {
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
function PV(e, t) {
	let n = /* @__PURE__ */ new Map(), r = [], i = [];
	for (let a of e) {
		let e = /* @__PURE__ */ new Map();
		for (let o of qA(a.career.uuid, a.career.grants.skills)) {
			let s = KA(o.originalName);
			if (!s) continue;
			let c = JA(o.originalName), l = n.get(c) ?? [], u = e.get(c) ?? 0, d = t.enableLinkedSkillResolution && l[u] ? l[u] : "";
			if (e.set(c, u + 1), d) {
				r.push({
					linkedFromKey: d,
					resolutionKey: o.resolutionKey
				});
				continue;
			}
			i.push({
				alreadyGrantedSpecializations: zV(a.career.grants.skills, s.baseName),
				baseName: s.baseName,
				careerLabel: BV(a.career),
				isLoadingSuggestions: !1,
				occurrence: o.occurrence,
				options: s.options,
				originalName: s.originalName,
				resolvedSpecialization: VV(s),
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
function FV(e) {
	return e.resolvedSpecialization.trim() ? WA(e.baseName, e.resolvedSpecialization) : "";
}
function IV(e) {
	return e.occurrence > 0 ? `${e.originalName}, choice ${e.occurrence + 1}` : e.originalName;
}
function LV(e) {
	return e.options.length <= 1 && e.specialization.trim().toLocaleLowerCase() === "any";
}
function RV(e, t) {
	let n = JA(t);
	return e.alreadyGrantedSpecializations.some((e) => JA(e) === n);
}
function zV(e, t) {
	let n = JA(t), r = /* @__PURE__ */ new Set(), i = [];
	for (let t of e) {
		let e = GA(t);
		if (!e || JA(e.baseName) !== n) continue;
		let a = JA(e.specialization);
		r.has(a) || (r.add(a), i.push(e.specialization));
	}
	return i;
}
function BV(e) {
	return e.level === null ? e.name : `${e.name}, tier ${e.level}`;
}
function VV(e) {
	return e.specialization.trim().toLocaleLowerCase() === "any" ? "" : e.options[0] ?? "";
}
//#endregion
//#region src/view/apps/npc-builder/components/SkillResolutionPromptContent.vue?vue&type=script&setup=true&lang.ts
var HV = { class: "dui-card-body" }, UV = { class: "dui-card-title" }, WV = { class: "dui-badge" }, GV = { class: "dui-fieldset" }, KV = { class: "app:grid app:gap-1" }, qV = ["onUpdate:modelValue", "aria-label"], JV = ["value"], YV = [
	"onUpdate:modelValue",
	"aria-label",
	"placeholder"
], XV = {
	key: 0,
	class: "dui-label app:text-error"
}, ZV = {
	key: 0,
	class: "dui-card-actions"
}, QV = { key: 0 }, $V = ["onClick"], eH = {
	key: 0,
	class: "dui-badge dui-badge-error dui-badge-xs"
}, tH = {
	key: 0,
	class: "dui-alert dui-alert-info"
}, nH = { class: "dui-card-actions" }, rH = /* @__PURE__ */ M({
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
			return !!e.resolvedSpecialization && RV(e, e.resolvedSpecialization);
		}
		return (t, i) => (F(), I("section", null, [
			i[5] ||= R("p", null, " Some Career skills need a specialization before they become concrete WFRP skills. Blank rows can be left unresolved and edited later. ", -1),
			(F(!0), I(P, null, N(e.prompt.rows, (t) => (F(), I("section", {
				key: t.resolutionKey,
				class: "dui-card dui-card-border dui-card-sm"
			}, [R("div", HV, [
				R("h3", UV, O(e.getSkillResolutionLabel(t)), 1),
				R("span", WV, O(t.careerLabel), 1),
				R("fieldset", GV, [
					i[4] ||= R("legend", { class: "dui-fieldset-legend" }, "Specialization", -1),
					R("label", KV, [i[3] ||= R("span", { class: "dui-label" }, "Choice", -1), t.options.length > 1 ? Un((F(), I("select", {
						key: 0,
						"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
						"aria-label": `Specialization for ${e.getSkillResolutionLabel(t)}`,
						class: D(["dui-select dui-select-sm", { "dui-select-error": A(RV)(t, t.resolvedSpecialization) }])
					}, [i[2] ||= R("option", { value: "" }, "Leave unresolved", -1), (F(!0), I(P, null, N(t.options, (e) => (F(), I("option", {
						key: e,
						class: D({ "app:text-error": A(RV)(t, e) }),
						value: e
					}, O(e) + O(A(RV)(t, e) ? " — already granted" : ""), 11, JV))), 128))], 10, qV)), [[Ko, t.resolvedSpecialization]]) : Un((F(), I("input", {
						key: 1,
						"onUpdate:modelValue": (e) => t.resolvedSpecialization = e,
						"aria-label": `Specialization for ${e.getSkillResolutionLabel(t)}`,
						class: D(["dui-input dui-input-sm", { "dui-input-error": A(RV)(t, t.resolvedSpecialization) }]),
						placeholder: t.suggestedSpecializations.length ? "Type or choose below" : t.specialization,
						type: "text"
					}, null, 10, YV)), [[Go, t.resolvedSpecialization]])]),
					r(t) ? (F(), I("p", XV, " Already granted by this Career. ")) : V("", !0)
				]),
				e.usesFreeformSkillSpecialization(t) ? (F(), I("div", ZV, [t.isLoadingSuggestions ? (F(), I("small", QV, "Finding known choices.")) : V("", !0), (F(!0), I(P, null, N(t.suggestedSpecializations, (e) => (F(), I("button", {
					key: `${t.resolutionKey}:${e}`,
					class: D(["dui-btn dui-btn-sm", { "dui-btn-error dui-btn-outline": A(RV)(t, e) }]),
					type: "button",
					onClick: (r) => n("chooseSkillSpecialization", t, e)
				}, [B(O(e) + " ", 1), A(RV)(t, e) ? (F(), I("span", eH, " Already granted ")) : V("", !0)], 10, $V))), 128))])) : V("", !0)
			])]))), 128)),
			e.prompt.linkedRows.length ? (F(), I("div", tH, O(e.prompt.linkedRows.length) + " linked skill specialization" + O(e.prompt.linkedRows.length === 1 ? "" : "s") + " will reuse earlier choices from this career chain. ", 1)) : V("", !0),
			R("div", nH, [R("button", {
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
function iH(e) {
	return e === "build-actor" || e === "build-careers" || e === "build-quick";
}
function aH(e) {
	return e === "settings-advancement" || e === "settings-folders" || e === "settings-resolution" || e === "settings-suggestions";
}
function oH(e) {
	return e === "automatic-xp" || e === "detail-characteristics" || e === "detail-skills" || e === "detail-talents";
}
function sH(e) {
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
var cH = ["aria-current", "onClick"], lH = ["aria-current", "popovertarget"], uH = ["id"], dH = ["onClick"], fH = /* @__PURE__ */ M({
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
		}, O(t.label), 9, cH)) : (F(), I(P, { key: 1 }, [R("button", {
			"aria-current": t.isActive ? "page" : void 0,
			popovertarget: t.popoverId,
			type: "button"
		}, O(t.label), 9, lH), R("div", {
			id: t.popoverId,
			popover: ""
		}, [R("ul", { class: D(["dui-menu app:min-w-56 app:p-2", t.columnsClass]) }, [(F(!0), I(P, null, N(t.pages, (t) => (F(), I("li", { key: t.page }, [R("button", {
			class: D({ "dui-menu-active": e.activePage === t.page }),
			type: "button",
			onClick: (e) => n("pageSelect", t.page, e)
		}, O(A(sH)(t.page)), 11, dH)]))), 128))], 2)], 8, uH)], 64))], 64))), 128))], 64));
	}
}), pH = { class: "dui-navbar app:sticky app:top-0 app:z-20 app:flex-wrap app:gap-2 app:bg-base-200 app:px-3 app:py-2" }, mH = { class: "dui-navbar-start app:min-w-64 app:flex-1" }, hH = { class: "app:min-w-0" }, gH = { class: "app:text-base-content/70" }, _H = {
	"aria-label": "NPC Builder pages",
	class: "app:order-3 app:flex app:w-full app:flex-wrap app:items-center app:justify-start app:gap-2"
}, vH = {
	id: "npc-builder-megamenu",
	class: "dui-megamenu max-sm:dui-megamenu-vertical dui-megamenu-sm app:ml-0 app:mr-auto app:border app:border-base-300 app:bg-base-100 app:p-2",
	popover: ""
}, yH = { class: "dui-navbar-end app:w-auto app:shrink-0" }, bH = ["disabled"], xH = /* @__PURE__ */ M({
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
		return (t, n) => (F(), I("header", pH, [
			R("div", mH, [R("div", hH, [
				n[1] ||= R("span", { class: "dui-badge dui-badge-outline" }, "WFRP4e Customizer", -1),
				n[2] ||= R("h1", { class: "app:m-0 app:text-xl app:leading-tight" }, "NPC Builder", -1),
				R("small", gH, [e.selectedBaseActorName ? (F(), I(P, { key: 0 }, [B(O(e.selectedBaseActorName) + " base · " + O(e.finalActorName), 1)], 64)) : (F(), I(P, { key: 1 }, [B("Choose a base character, then shape the final NPC.")], 64))])
			])]),
			R("nav", _H, [n[3] ||= R("button", {
				"aria-label": "Open NPC Builder navigation",
				class: "dui-btn dui-btn-sm sm:app:hidden",
				popovertarget: "npc-builder-megamenu",
				type: "button"
			}, " Menu ", -1), R("div", vH, [z(fH, {
				"active-page": e.activePage,
				groups: c.value,
				onPageSelect: l
			}, null, 8, ["active-page", "groups"])])]),
			R("div", yH, [R("button", {
				class: "dui-btn dui-btn-primary",
				disabled: !e.canBuild,
				type: "button",
				onClick: n[0] ||= (e) => r("buildNpc")
			}, " Build NPC ", 8, bH)])
		]));
	}
});
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderApplicationDrop.ts
function SH(e, t, n, r) {
	let i = LN(), a = /* @__PURE__ */ k(!1);
	function o(e) {
		CH(e) || (e.preventDefault(), a.value = !0);
	}
	function s(e) {
		if (CH(e)) return;
		let t = e.currentTarget, n = e.relatedTarget;
		t instanceof Node && n instanceof Node && t.contains(n) || (a.value = !1);
	}
	function c(e) {
		CH(e) || (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "copy"));
	}
	async function l(o) {
		if (!CH(o)) {
			o.preventDefault(), a.value = !1, r.value = "";
			try {
				let r = await e.resolveApplicationDrop(o.dataTransfer?.getData("text/plain") ?? "");
				r.kind === "actor" ? i.selectBaseActor(r.actor) : r.kind === "career" ? await n(r.career, { replaceQueue: t.value === "build-quick" }) : r.kind === "advancement" ? i.addCustomAdvancement(r.advancement) : r.kind === "trapping" ? i.addCustomTrapping(r.trapping) : r.kind === "trait" ? i.addCustomTrait(r.trait) : i.addCustomSpell(r.spell);
			} catch (e) {
				r.value = wR(e);
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
function CH(e) {
	let t = e.dataTransfer, n = t?.getData("text/plain") ?? "", r = Array.from(t?.types ?? []);
	return n.startsWith("npc-builder-career:") || CM(n) !== null || r.includes(GL);
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderBuild.ts
function wH(e, t, n, r, i) {
	let a = LN(), { advancements: o, buildTraits: s, careers: c, finalActorName: l, finalPortraitPath: u, selectedMountActorUuid: d, selectedBaseActor: f, selectedSpells: p, settings: m, trappings: h } = zs(a), g = /* @__PURE__ */ k(!1), _ = H(() => !!(f.value && c.value.length && !g.value && !i.value));
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
			r.value = wR(e), n.value = "";
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
function TH(e) {
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
function EH(e) {
	return [{
		career: e,
		mode: "add-or-increment"
	}];
}
function DH(e) {
	return [...e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).map((e) => ({
		career: e,
		mode: "add-if-missing"
	})), {
		career: e.droppedCareer,
		mode: "add-or-increment"
	}];
}
function OH(e) {
	let t = e.candidates.filter((t) => e.selectedUuids.includes(t.uuid)).length;
	return t === 0 ? "" : `Added ${t} lower-tier career candidate${t === 1 ? "" : "s"}.`;
}
function kH(e, t) {
	return e?.selectedUuids.includes(t) ?? !1;
}
function AH(e) {
	let { candidateUuid: t, isAlreadyQueued: n, prompt: r, selected: i } = e;
	return !r || n ? null : i ? [...new Set([...r.selectedUuids, t])] : r.selectedUuids.filter((e) => e !== t);
}
//#endregion
//#region src/state/npc-builder/workflows/skill-suggestions.ts
async function jH(e, t) {
	await Promise.all(t.rows.map(async (t) => {
		if (LV(t)) {
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
function MH(e) {
	let t = LN(), { careers: n, settings: r } = zs(t), i = /* @__PURE__ */ k(""), a = /* @__PURE__ */ k(""), o = /* @__PURE__ */ k(!1), s = /* @__PURE__ */ k(null), c = /* @__PURE__ */ k(null), l = H(() => TH(s.value));
	async function u(t, n = {}) {
		a.value = "";
		try {
			await d(await e.resolveCareerDrop(t), n);
		} catch (e) {
			a.value = NH(e);
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
		m(EH(e), {
			enableLinkedSkillResolution: !1,
			message: ""
		});
	}
	function m(t, n) {
		let r = PV(t, n);
		if (r.rows.length) {
			c.value = r, jH(e, c.value);
			return;
		}
		b(t, n.message);
	}
	function h() {
		let e = s.value;
		e && (s.value = null, m(DH(e), {
			enableLinkedSkillResolution: !r.value.askForLinkedSkillSpecializations,
			message: OH(e)
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
			for (let n of e.rows) t.setSkillGrantResolution(n.resolutionKey, FV(n));
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
		return kH(s.value, e);
	}
	function C(e, t) {
		let n = AH({
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
		getSkillResolutionLabel: IV,
		addCareerSummaryWithLowerCareerMode: d,
		handleCareerDrop: u,
		isCareerQueued: x,
		isFindingLowerCareers: o,
		isLowerCareerSelected: S,
		lowerCareerCandidateGroups: l,
		pendingLowerCareerPrompt: s,
		pendingSkillResolutionPrompt: c,
		setLowerCareerSelected: C,
		usesFreeformSkillSpecialization: LV
	};
}
function NH(e) {
	return e instanceof Error ? e.message : "The NPC Builder could not finish that action.";
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderCareerDropWorkflow.ts
function PH(e) {
	return MH(e);
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderInitialData.ts
function FH(e, t) {
	let n = LN(), { selectedBaseActorUuid: r, selectedMountActorUuid: i, settings: a } = zs(n), o = /* @__PURE__ */ k(!1), s = /* @__PURE__ */ k(!1), c = /* @__PURE__ */ k([]);
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
			t.value = wR(e);
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
			t.value = wR(e), n.clearBaseDraftData(), n.hydrateBaseActorCombatProfile(null);
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
function IH() {
	return {
		inFlightNames: [],
		successfulNames: []
	};
}
function LH(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) n.kind === "skill" && !n.characteristicKey && !KA(n.name) && t.add(n.name);
	return [...t];
}
function RH(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) n.kind === "talent" && !n.talentMaximumKey && t.add(n.name);
	return [...t];
}
function zH(e, t) {
	let n = new Set([...t.inFlightNames, ...t.successfulNames]);
	return e.filter((e) => {
		let t = JA(e);
		return n.has(t) ? !1 : (n.add(t), !0);
	});
}
function BH(e, t) {
	return {
		...e,
		inFlightNames: UH([...e.inFlightNames, ...t])
	};
}
function VH(e, t) {
	let n = new Set(UH(t));
	return {
		inFlightNames: e.inFlightNames.filter((e) => !n.has(e)),
		successfulNames: UH([...e.successfulNames, ...n])
	};
}
function HH(e, t) {
	let n = new Set(UH(t));
	return {
		...e,
		inFlightNames: e.inFlightNames.filter((e) => !n.has(e))
	};
}
function UH(e) {
	return [...new Set([...e].map(JA).filter(Boolean))];
}
//#endregion
//#region src/state/npc-builder/workflows/metadata-lookups-workflow.ts
function WH(e) {
	let t = LN(), { advancements: n } = zs(t), r = /* @__PURE__ */ k(IH()), i = /* @__PURE__ */ k(IH()), a = /* @__PURE__ */ k(""), o = /* @__PURE__ */ k(""), s = H(() => LH(n.value)), c = H(() => RH(n.value)), l = H(() => [a.value, o.value].filter(Boolean).join(" ")), u = H(() => l.value ? "degraded" : r.value.inFlightNames.length + i.value.inFlightNames.length > 0 ? "loading" : "ready");
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
		let i = zH(n, r.value);
		if (i.length) {
			r.value = BH(r.value, i), a.value = "";
			try {
				let n = await e.listSkillCharacteristics(i);
				r.value = VH(r.value, i), t.hydrateSkillCharacteristics(n);
			} catch (e) {
				r.value = HH(r.value, i), a.value = GH("skill characteristics", e);
			}
		}
	}
	async function f(n) {
		if (!n.length) {
			o.value = "";
			return;
		}
		let r = zH(n, i.value);
		if (r.length) {
			i.value = BH(i.value, r), o.value = "";
			try {
				let n = await e.listTalentMaximums(r);
				i.value = VH(i.value, r), t.hydrateTalentMaximums(n);
			} catch (e) {
				i.value = HH(i.value, r), o.value = GH("Talent maximums", e);
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
function GH(e, t) {
	return `Could not load ${e}.${t instanceof Error ? ` ${t.message}` : ""}`;
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp/useNpcBuilderMetadataLookups.ts
function KH(e) {
	return WH(e);
}
//#endregion
//#region src/view/apps/npc-builder/NpcBuilderApp.vue?vue&type=script&setup=true&lang.ts
var qH = ["id", "aria-label"], JH = {
	key: 0,
	class: "dui-alert dui-alert-error",
	role: "alert"
}, YH = {
	key: 1,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, XH = {
	key: 2,
	"aria-live": "polite",
	class: "dui-alert dui-alert-info",
	role: "status"
}, ZH = {
	key: 3,
	"aria-live": "polite",
	class: "dui-alert dui-alert-warning",
	role: "status"
}, QH = /* @__PURE__ */ M({
	__name: "NpcBuilderApp",
	props: { bridge: {} },
	setup(e) {
		let t = e, { finalActorName: n, hasMagicAccess: r, selectedBaseActor: i, selectedSpells: a } = zs(LN()), o = /* @__PURE__ */ k("build-quick"), s = gr(), c = H(() => r.value || a.value.length > 0), { addCareerSummaryWithLowerCareerMode: l, buildMessage: u, chooseSkillSpecialization: d, confirmLowerCareerPrompt: f, confirmSkillResolutionPrompt: p, dismissLowerCareerPrompt: m, dismissSkillResolutionPrompt: h, errorMessage: g, getSkillResolutionLabel: _, isCareerQueued: v, isFindingLowerCareers: y, isLowerCareerSelected: b, lowerCareerCandidateGroups: x, pendingLowerCareerPrompt: S, pendingSkillResolutionPrompt: C, setLowerCareerSelected: ee, usesFreeformSkillSpecialization: te } = PH(t.bridge), { buildNpc: ne, canBuild: re } = wH(t.bridge, o, u, g, y), { isLoadingActors: ie, isLoadingBaseDraft: w, traitDifficultyOptions: T } = FH(t.bridge, g), { metadataLookupError: ae, metadataLookupStatus: oe, retryMetadataLookups: se } = KH(t.bridge), { handleApplicationDragEnter: ce, handleApplicationDragLeave: E, handleApplicationDragOver: le, handleApplicationDrop: ue, isApplicationDragOver: de } = SH(t.bridge, o, l, g);
		return (e, r) => (F(), I("section", {
			"aria-label": "NPC Builder",
			class: D(["app:flex app:min-h-full app:flex-col", { "app:ring-2 app:ring-info": A(de) }]),
			onDragenter: r[2] ||= (...e) => A(ce) && A(ce)(...e),
			onDragleave: r[3] ||= (...e) => A(E) && A(E)(...e),
			onDragover: r[4] ||= (...e) => A(le) && A(le)(...e),
			onDrop: r[5] ||= (...e) => A(ue) && A(ue)(...e)
		}, [
			z(xH, {
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
			z(GN, {
				open: A(S) !== null,
				title: "Add Lower-Tier Careers?",
				onClose: A(m)
			}, {
				default: j(() => [A(S) ? (F(), L(VN, {
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
			z(GN, {
				open: A(C) !== null,
				title: "Resolve Skill Specializations",
				onClose: A(h)
			}, {
				default: j(() => [A(C) ? (F(), L(rH, {
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
				"aria-label": A(sH)(o.value),
				class: "app:grid app:flex-1 app:content-start app:gap-3 app:p-3"
			}, [
				A(g) ? (F(), I("p", JH, O(A(g)), 1)) : A(u) ? (F(), I("p", YH, O(A(u)), 1)) : A(de) ? (F(), I("p", XH, " Release to add this document to the NPC draft. ")) : V("", !0),
				A(oe) === "degraded" ? (F(), I("div", ZH, [
					R("span", null, O(A(ae)), 1),
					r[6] ||= R("span", null, "Advancement rows remain editable with reduced metadata.", -1),
					R("button", {
						class: "dui-btn dui-btn-sm",
						type: "button",
						onClick: r[1] ||= (...e) => A(se) && A(se)(...e)
					}, " Retry Metadata ")
				])) : V("", !0),
				A(aH)(o.value) ? (F(), L(iB, {
					key: 4,
					bridge: t.bridge,
					page: o.value
				}, null, 8, ["bridge", "page"])) : A(oH)(o.value) ? (F(), L(eF, {
					key: 5,
					page: o.value
				}, null, 8, ["page"])) : o.value === "trappings" ? (F(), L(NV, {
					key: 6,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : o.value === "traits" ? (F(), L(rV, {
					key: 7,
					"difficulty-options": A(T)
				}, null, 8, ["difficulty-options"])) : o.value === "detail-spells" ? (F(), L(VB, {
					key: 8,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : o.value === "mount" ? (F(), L(YR, {
					key: 9,
					bridge: t.bridge
				}, null, 8, ["bridge"])) : A(iH)(o.value) ? (F(), L(tR, {
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
			], 8, qH)
		], 34));
	}
});
//#endregion
//#region src/functions/npc-builder/extract-career-grants.ts
function $H(e) {
	return {
		characteristics: eU(e),
		skills: tU(e),
		talents: rU(e, [["talents", "value"], ["talents"]]),
		trappings: rU(e, [["trappings", "value"], ["trappings"]])
	};
}
function eU(e) {
	let t = rU(e, [["characteristics", "value"], ["characteristics"]]);
	if (t.length) return t.map(nU);
	let n = K(e, ["characteristics"]);
	if (!G(n)) return [];
	let r = [];
	for (let [e, t] of Object.entries(n)) t && r.push(nU(e));
	return aU(r);
}
function tU(e) {
	return rU(e, [["skills", "value"], ["skills"]], { preserveDuplicates: !0 });
}
function nU(e) {
	let t = e.trim().toLocaleLowerCase();
	if (uc(t)) return cc[t];
	let n = lc[t];
	return n ? cc[n] : e.trim();
}
function rU(e, t, n = {}) {
	for (let r of t) {
		let t = nu(K(e, r));
		if (t.length) return n.preserveDuplicates ? iU(t) : aU(t);
	}
	return [];
}
function iU(e) {
	return e.map((e) => e.trim()).filter(Boolean);
}
function aU(e) {
	return [...new Set(iU(e))].sort((e, t) => e.localeCompare(t));
}
//#endregion
//#region src/module/wfrp4e/career-summary.ts
function oU(e) {
	return {
		careerGroup: sU(e),
		grants: $H(e.system),
		img: e.img ?? "",
		level: cU(e),
		name: e.name,
		uuid: e.uuid
	};
}
function sU(e) {
	return q(e.system, ["careergroup", "value"]);
}
function cU(e) {
	let t = K(e.system, ["level", "value"]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
//#endregion
//#region src/module/wfrp4e/career-index.ts
var lU = [
	"name",
	"type",
	"img",
	"system.careergroup.value",
	"system.characteristics",
	"system.level.value",
	"system.skills",
	"system.talents",
	"system.trappings"
], uU = /* @__PURE__ */ new Map(), dU = "idle", fU = null;
function pU() {
	return fU || (dU = "indexing", uU.clear(), fU = hU().then(() => {
		dU = "ready";
	}).catch((e) => {
		dU = "error", t("wfrp4e-customizer-apps | Career indexing failed.", e);
	}), fU);
}
async function mU(e) {
	return dU === "idle" && pU(), !e.careerGroup || e.level === null ? [] : [...uU.values()].filter((t) => bU(t, e)).sort(SU);
}
async function hU() {
	gU(), await jx();
	for (let e of game.packs ?? []) {
		if (!Dx(e) || !e.getIndex) continue;
		let t = await e.getIndex({ fields: lU });
		for (let n of Ax(t)) {
			let t = _U(e, n);
			t && uU.set(t.uuid, t);
		}
		await jx();
	}
}
function gU() {
	for (let e of game.items?.contents ?? []) e.type === "career" && uU.set(e.uuid, oU(e));
}
function _U(e, t) {
	let n = Ex(e, t);
	if (t.type !== "career" || !t.name || !n) return null;
	let r = K(t, ["system"]);
	return {
		careerGroup: vU(t),
		grants: $H(r),
		img: t.img ?? "",
		level: yU(t),
		name: t.name,
		uuid: n
	};
}
function vU(e) {
	let t = K(e, [
		"system",
		"careergroup",
		"value"
	]);
	return typeof t == "string" ? t.trim() : "";
}
function yU(e) {
	let t = K(e, [
		"system",
		"level",
		"value"
	]), n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function bU(e, t) {
	return e.uuid !== t.uuid && e.level !== null && t.level !== null && e.level < t.level && xU(e.careerGroup) === xU(t.careerGroup);
}
function xU(e) {
	return e.trim().toLocaleLowerCase();
}
function SU(e, t) {
	let n = e.level ?? 0, r = t.level ?? 0;
	return n === r ? e.name.localeCompare(t.name) : n - r;
}
//#endregion
//#region src/module/wfrp4e/skill-specializations.ts
var CU = [
	"name",
	"type",
	"system.characteristic.value"
], wU = /* @__PURE__ */ new Map(), TU = /* @__PURE__ */ new Map(), EU = /* @__PURE__ */ new Map(), DU = "idle", OU = null;
async function kU(e) {
	let t = JA(e);
	return t ? (DU === "idle" && jU(), OU && await OU, [...wU.get(t) ?? []].sort((e, t) => e.localeCompare(t))) : [];
}
async function AU(e) {
	return DU === "idle" && jU(), OU && await OU, e.flatMap((e) => {
		let t = LU(e);
		return t ? [{
			...t,
			skillName: e
		}] : [];
	});
}
function jU() {
	return OU || (DU = "indexing", wU.clear(), TU.clear(), EU.clear(), OU = MU().then(() => {
		DU = "ready";
	}).catch((e) => {
		DU = "error", t("wfrp4e-customizer-apps | Skill specialization indexing failed.", e);
	}), OU);
}
async function MU() {
	RU(), await jx();
	for (let e of game.packs ?? []) {
		if (!Dx(e) || !e.getIndex) continue;
		let t = await e.getIndex({ fields: CU });
		for (let e of Ax(t)) PU(e);
		await jx();
	}
}
function NU(e) {
	if (e.type !== "skill") return;
	FU(e);
	let t = GA(e.name);
	if (!t) return;
	let n = JA(t.baseName), r = wU.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), wU.set(n, r);
}
function PU(e) {
	if (e.type !== "skill" || !e.name) return;
	IU(e);
	let t = GA(e.name);
	if (!t) return;
	let n = JA(t.baseName), r = wU.get(n) ?? /* @__PURE__ */ new Set();
	r.add(t.specialization), wU.set(n, r);
}
function FU(e) {
	let t = q(e.system, ["characteristic", "value"]);
	if (!uc(t)) return;
	let n = {
		characteristicKey: t,
		characteristicName: cc[t],
		skillName: e.name
	}, r = JA(e.name), i = JA(GA(e.name)?.baseName ?? e.name);
	TU.set(r, n), EU.has(i) || EU.set(i, n);
}
function IU(e) {
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
	}, r = JA(e.name), i = JA(GA(e.name)?.baseName ?? e.name);
	TU.set(r, n), EU.has(i) || EU.set(i, n);
}
function LU(e) {
	let t = JA(e), n = JA(GA(e)?.baseName ?? e);
	return TU.get(t) ?? EU.get(n) ?? null;
}
function RU() {
	for (let e of game.items?.contents ?? []) NU(e);
}
//#endregion
//#region src/module/foundry/item-sources.ts
function zU(e, t) {
	return {
		img: "systems/wfrp4e/icons/blank.png",
		name: e,
		system: {},
		type: t
	};
}
function BU(e, t, n) {
	let r = e ? e.toObject() : zU(t, n);
	return delete r._id, r;
}
function VU(e, t, n) {
	return HU(e, t, n)[0] ?? null;
}
function HU(e, t, n) {
	return e.items?.contents.filter((e) => e.type === n && GU(e.name, t)) ?? [];
}
function UU(e, t, n) {
	return e.items?.contents.find((e) => t && e.uuid === t ? !0 : GU(e.name, n)) ?? null;
}
function WU(e, t) {
	return game.items?.contents.find((n) => t.includes(n.type) && GU(n.name, e)) ?? null;
}
function GU(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/wfrp4e/item-lookup.ts
async function KU(e, t) {
	return await game.wfrp4e?.utility?.findItem?.(e, t) || WU(e, t);
}
//#endregion
//#region src/module/wfrp4e/talent-maximums.ts
async function qU(e) {
	let t = [];
	for (let n of JU(e)) {
		let e = await KU(n, ["talent"]);
		e && t.push({
			maximumFormula: q(e.system, ["max", "formula"]),
			maximumKey: q(e.system, ["max", "value"]),
			talentName: n
		});
	}
	return t;
}
function JU(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	for (let r of e) {
		let e = r.trim().toLocaleLowerCase();
		!e || t.has(e) || (t.add(e), n.push(r));
	}
	return n;
}
//#endregion
//#region src/module/foundry/portrait-search/candidate-utils.ts
var YU = [
	".webp",
	".png",
	".jpg",
	".jpeg",
	".gif"
], XU = new Set(YU);
function ZU(e, t) {
	let n = t.img.trim().toLocaleLowerCase();
	!n || e.seenPaths.has(n) || (e.seenPaths.add(n), e.candidates.push(t));
}
function QU(e, t) {
	let n = t.imagePaths.filter(({ path: e }) => !!e);
	if (oW(t.name, n, e.searchTerms)) for (let r of n) {
		let n = {
			img: r.path,
			key: `foundry-asset:${t.sourceKey}:${r.label}`,
			label: `${t.name || nW(r.path)} ${r.label} (${t.sourceLabel})`,
			source: "foundry-asset",
			sourceGroup: t.sourceGroup,
			sourceLabel: t.sourceLabel
		};
		sW(n, e) && ZU(e, n);
	}
}
function $U(e, t, n) {
	e?.({
		candidatesFound: t.candidates.length,
		currentLocation: n.currentLocation,
		directoriesVisited: t.visitedDirectories,
		maxDirectories: n.maxDirectories,
		phase: n.phase
	});
}
function eW(e) {
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
function tW(e, t) {
	return `${nW(e)} (${t})`;
}
function nW(e) {
	return e.split(/[/\\]/).at(-1) ?? e;
}
function rW(e) {
	let t = `.${e.split(/[#?]/u)[0]?.split(".").pop() ?? ""}`;
	return XU.has(t.toLocaleLowerCase());
}
function iW(e) {
	return typeof e == "object" && !!e;
}
function aW(e) {
	return iW(e) && Object.values(e).every((e) => Array.isArray(e) && e.every((e) => typeof e == "string"));
}
function oW(e, t, n) {
	return bM(e, n) || t.some(({ path: e }) => bM(e, n));
}
function sW(e, t) {
	return xM(e, {
		mustExcludeSources: [],
		mustExcludeTerms: t.mustExcludeTerms,
		mustIncludeSources: [],
		mustIncludeTerms: t.mustIncludeTerms
	});
}
//#endregion
//#region src/module/foundry/portrait-search/dig-down.ts
var cW = "fuzzy-foundry", lW = .3;
function uW(e, t) {
	let n = dW();
	if ($U(t, e, {
		currentLocation: pW(n),
		maxDirectories: 0,
		phase: "filesystem"
	}), !n.digDownActive || !n.digDownCacheReady) return;
	let r = gW();
	if (!(!r?._fileIndexCache || !r.fs)) {
		for (let t of mW(r, e.searchTerms)) hW(e, r, t);
		$U(t, e, {
			currentLocation: "Dig Down file cache search complete",
			maxDirectories: 0,
			phase: "filesystem"
		});
	}
}
function dW() {
	let e = game.modules.get(cW)?.active === !0, t = fW(), n = gW(), r = Object.values(n?._fileIndexCache ?? {}).reduce((e, t) => e + t.length, 0);
	return {
		digDownActive: e,
		digDownCacheReady: !!(n?._fileIndexCache && n.fs),
		digDownDeepFileSearchEnabled: t,
		digDownIndexedFileCount: r
	};
}
function fW() {
	try {
		return game.settings.get(cW, "deepFile") === !0;
	} catch {
		return !1;
	}
}
function pW(e) {
	return e.digDownActive ? e.digDownDeepFileSearchEnabled ? e.digDownCacheReady ? `Dig Down file cache (${e.digDownIndexedFileCount} files)` : "Waiting for Dig Down file cache" : "Dig Down Deep File Search is disabled" : "Dig Down is not active";
}
function mW(e, t) {
	let n = /* @__PURE__ */ new Set(), r = Object.keys(e._fileIndexCache ?? {});
	for (let i of t) {
		let t = i.toLocaleLowerCase();
		for (let e of r) e.toLocaleLowerCase().includes(t) && n.add(e);
		let a = e.fs?.get(i, [], lW) ?? [];
		for (let [, e] of a) n.add(e);
	}
	return [...n].sort((e, t) => e.toLocaleLowerCase().localeCompare(t.toLocaleLowerCase()));
}
function hW(e, t, n) {
	let r = t._fileIndexCache?.[n] ?? [];
	for (let t of r) {
		if (!rW(t)) continue;
		let n = {
			img: t,
			key: `foundry-asset:${t}`,
			label: tW(t, "Dig Down"),
			source: "foundry-asset",
			sourceGroup: "dig-down",
			sourceLabel: "Dig Down"
		};
		sW(n, e) && ZU(e, n);
	}
}
function gW() {
	let e = canvas.deepSearchCache;
	if (!iW(e)) return null;
	let t = e._fileIndexCache, n = e.fs, r = {};
	return aW(t) && (r._fileIndexCache = t), iW(n) && typeof n.get == "function" && (r.fs = { get: n.get.bind(n) }), r;
}
//#endregion
//#region src/module/foundry/portrait-search/documents.ts
function _W(e, t) {
	$U(t, e, {
		currentLocation: "World Actors and Items",
		maxDirectories: 0,
		phase: "world-documents"
	});
	for (let t of game.actors.contents) QU(e, {
		imagePaths: [{
			label: "actor image",
			path: t.img ?? ""
		}, {
			label: "token image",
			path: eW(t)
		}],
		name: t.name,
		sourceGroup: "world",
		sourceLabel: "World Actors",
		sourceKey: t.uuid
	});
	for (let t of game.items?.contents ?? []) QU(e, {
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
async function vW(e, t) {
	$U(t, e, {
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
		] }).catch(() => void 0), r = n ? Ax(n) : [];
		for (let n of r) QU(e, {
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
//#region src/module/foundry/portrait-search/priority-folders.ts
async function yW(e, t, n) {
	let r = bW(t), i = new Set(r.map(({ path: e }) => wW(e)));
	for (e.maxDirectoryBudget += r.length; r.length;) {
		let t = r.shift();
		if (!t) break;
		CW(e, n, t.path);
		let a = await xW(t.path);
		if (e.visitedDirectories += 1, a) {
			SW(e, t.root, a.files ?? []);
			for (let n of TW(a.dirs ?? [])) {
				let a = _M([n])[0], o = wW(a ?? "");
				!a || i.has(o) || (i.add(o), r.push({
					path: a,
					root: t.root
				}), e.maxDirectoryBudget += 1);
			}
			CW(e, n, t.path);
		}
	}
}
function bW(e) {
	return _M(e).map((e) => ({
		path: e,
		root: e
	}));
}
async function xW(e) {
	try {
		return await foundry.applications.apps.FilePicker.browse("data", e, { extensions: YU });
	} catch (n) {
		return t(`${Y} | Could not browse priority portrait folder "${e}".`, n), null;
	}
}
function SW(e, t, n) {
	let r = `Priority: ${nW(t)}`;
	for (let i of TW(n)) {
		if (!rW(i) || !bM(nW(i), e.searchTerms)) continue;
		let n = {
			img: i,
			key: `foundry-asset:${i}`,
			label: tW(i, r),
			source: "foundry-asset",
			sourceFilter: nM(t),
			sourceGroup: "priority-folders",
			sourceLabel: r
		};
		sW(n, e) && ZU(e, n);
	}
}
function CW(e, t, n) {
	$U(t, e, {
		currentLocation: n,
		maxDirectories: e.maxDirectoryBudget,
		phase: "filesystem"
	});
}
function wW(e) {
	return e.toLocaleLowerCase();
}
function TW(e) {
	return [...e].sort((e, t) => e.toLocaleLowerCase().localeCompare(t.toLocaleLowerCase()));
}
//#endregion
//#region src/module/foundry/portrait-search/exclusions.ts
var EW = /* @__PURE__ */ new Map(), DW = 6, OW = 15e3;
async function kW(e, t, n, r = AW) {
	let i = _M(t.excludedReferenceImagePaths), a = new Set(i.map(FW)), o = /* @__PURE__ */ new Set();
	for (let e of i) {
		let t = await r(e);
		t.loadable && t.pixelSignature && o.add(t.pixelSignature);
	}
	let s = Array(e.length).fill(null), c = 0, l = 0, u = 0;
	PW(n, 0, 0, e.length);
	async function d() {
		for (; l < e.length;) {
			let i = l, d = e[i];
			if (l += 1, !a.has(FW(d.img))) {
				let e = await r(d.img);
				e.loadable && (!t.excludeFullyTransparentImages || !e.fullyTransparent) && (!e.pixelSignature || !o.has(e.pixelSignature)) && (s[i] = d, c += 1);
			}
			u += 1, PW(n, c, u, e.length);
		}
	}
	let f = Math.min(DW, e.length);
	return await Promise.all(Array.from({ length: f }, d)), s.filter((e) => e !== null);
}
async function AW(e) {
	let t = FW(e), n = EW.get(t);
	if (n) return await n;
	let r = jW(e);
	return EW.set(t, r), await r;
}
async function jW(e) {
	let t = await MW(e);
	if (!t) return {
		fullyTransparent: !1,
		loadable: !1,
		pixelSignature: ""
	};
	try {
		let e = document.createElement("canvas");
		e.width = t.naturalWidth, e.height = t.naturalHeight;
		let n = e.getContext("2d", { willReadFrequently: !0 });
		if (!n) return {
			fullyTransparent: !1,
			loadable: !0,
			pixelSignature: ""
		};
		n.drawImage(t, 0, 0);
		let r = n.getImageData(0, 0, e.width, e.height).data, i = !0;
		for (let e = 0; e < r.length; e += 4) r[e + 3] === 0 ? (r[e] = 0, r[e + 1] = 0, r[e + 2] = 0) : i = !1;
		return {
			fullyTransparent: i,
			loadable: !0,
			pixelSignature: await NW(e.width, e.height, r)
		};
	} catch {
		return {
			fullyTransparent: !1,
			loadable: !0,
			pixelSignature: ""
		};
	}
}
function MW(e) {
	return new Promise((t) => {
		let n = new Image(), r = setTimeout(() => i(null), OW);
		function i(e) {
			clearTimeout(r), n.onload = null, n.onerror = null, t(e);
		}
		n.onload = () => {
			i(n.naturalWidth > 0 && n.naturalHeight > 0 ? n : null);
		}, n.onerror = () => i(null), n.src = e;
	});
}
async function NW(e, t, n) {
	let r = await crypto.subtle.digest("SHA-256", n);
	return `${e}x${t}:${[...new Uint8Array(r)].map((e) => e.toString(16).padStart(2, "0")).join("")}`;
}
function PW(e, t, n, r) {
	e?.({
		candidatesFound: t,
		currentLocation: `Checking images ${n}/${r}`,
		directoriesVisited: n,
		maxDirectories: r,
		phase: "image-validation"
	});
}
function FW(e) {
	return e.trim().replaceAll("\\", "/").toLocaleLowerCase();
}
//#endregion
//#region src/module/foundry/portrait-search/index.ts
async function IW(e, t) {
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
	return await yW(n, e.priorityFolderPaths, t), e.includeCompendiumAssets && (await vW(n, t), _W(n, t)), e.includeFilePickerAssets && uW(n, t), $U(t, n, {
		currentLocation: "Portrait search complete",
		maxDirectories: n.maxDirectoryBudget,
		phase: "ready"
	}), n.candidates;
}
//#endregion
//#region src/functions/npc-builder/normalize-npc-builder-settings.ts
var LW = {
	...IM(),
	allowBaseActorCharacteristics: !0,
	allowBaseActorSkills: !0,
	allowBaseActorTalents: !0
};
function RW(e) {
	let t = IM();
	return BW(e) ? {
		allowBaseActorCharacteristics: VW(e.allowBaseActorCharacteristics, LW.allowBaseActorCharacteristics),
		allowBaseActorSkills: VW(e.allowBaseActorSkills, LW.allowBaseActorSkills),
		allowBaseActorTalents: VW(e.allowBaseActorTalents, LW.allowBaseActorTalents),
		allowBaseActorTraits: VW(e.allowBaseActorTraits, LW.allowBaseActorTraits),
		allowBaseActorTrappings: VW(e.allowBaseActorTrappings, LW.allowBaseActorTrappings),
		askForLinkedSkillSpecializations: VW(e.askForLinkedSkillSpecializations, LW.askForLinkedSkillSpecializations),
		autoSelectGrantedSpells: VW(e.autoSelectGrantedSpells, LW.autoSelectGrantedSpells),
		baseActorFolderUuid: HW(e.baseActorFolderUuid, LW.baseActorFolderUuid),
		excludeFullyTransparentPortraitAssets: VW(e.excludeFullyTransparentPortraitAssets, LW.excludeFullyTransparentPortraitAssets),
		excludedPortraitReferenceImages: _M(Array.isArray(e.excludedPortraitReferenceImages) ? e.excludedPortraitReferenceImages : LW.excludedPortraitReferenceImages),
		includeSpeciesInName: VW(e.includeSpeciesInName, LW.includeSpeciesInName),
		lowerCareerMode: zW(e.lowerCareerMode) ? e.lowerCareerMode : LW.lowerCareerMode,
		outputActorFolderUuid: HW(e.outputActorFolderUuid, LW.outputActorFolderUuid),
		prioritizedPortraitFolders: _M(e.prioritizedPortraitFolders),
		quickTraitFolderUuid: HW(e.quickTraitFolderUuid, LW.quickTraitFolderUuid),
		searchCompendiumPortraitAssets: VW(e.searchCompendiumPortraitAssets, LW.searchCompendiumPortraitAssets),
		searchFoundryPortraitAssets: VW(e.searchFoundryPortraitAssets, LW.searchFoundryPortraitAssets),
		searchWebPortraitAssets: VW(e.searchWebPortraitAssets, LW.searchWebPortraitAssets)
	} : t;
}
function zW(e) {
	return e === "auto-add-all" || e === "never" || e === "prompt";
}
function BW(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function VW(e, t) {
	return typeof e == "boolean" ? e : t;
}
function HW(e, t) {
	return typeof e == "string" ? e : t;
}
//#endregion
//#region src/module/apps/npc-builder/settings.ts
var UW = uy({
	defaultValue: IM(),
	key: "npcBuilderSettings",
	name: "NPC Builder Settings",
	normalize: RW
});
function WW() {
	dy(UW);
}
function GW() {
	return fy(UW);
}
async function KW(e) {
	return await py(UW, e);
}
//#endregion
//#region src/module/foundry/embedded-items.ts
function qW() {
	return {
		creates: [],
		deletes: [],
		updates: []
	};
}
async function JW(e, t) {
	t.deletes.length && e.deleteEmbeddedDocuments && await e.deleteEmbeddedDocuments("Item", t.deletes), t.updates.length && e.updateEmbeddedDocuments && await e.updateEmbeddedDocuments("Item", t.updates), t.creates.length && await e.createEmbeddedDocuments("Item", t.creates);
}
//#endregion
//#region src/module/apps/npc-builder/xp-source-values.ts
function YW(e, t) {
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
async function XW(e, t) {
	let n = {}, r = qW();
	for (let i of t) {
		let t = Math.floor(i.current);
		if (i.kind === "talent") {
			await iG(e, i, t, r);
			continue;
		}
		let a = i.baseAdvances + t;
		if (i.kind === "characteristic") {
			if (t === 0) continue;
			rG(n, i, a);
			continue;
		}
		let o = VU(e, i.name, i.kind);
		if (t === 0 && !i.includedFromCustom && !o) continue;
		if (o) {
			r.updates.push({
				_id: o.id,
				"system.advances.value": a
			});
			continue;
		}
		let s = BU(await aG(i), i.name, i.kind);
		s.type = i.kind, ru(s, [
			"system",
			"advances",
			"value"
		], a), r.creates.push(s);
	}
	Object.keys(n).length && await e.update(n), await JW(e, r);
}
function ZW(e) {
	let t = e.toObject().system, n = $l(t, [["advances", "value"], ["advances"]]);
	if (e.type === "talent") return {
		advances: Math.max(1, n),
		kind: "talent",
		name: e.name,
		sourceUuid: e.uuid,
		talentMaximumFormula: q(t, ["max", "formula"]),
		talentMaximumKey: q(t, ["max", "value"])
	};
	let r = nG(t), i = {
		advances: n,
		kind: "skill",
		name: e.name,
		sourceUuid: e.uuid
	};
	return r && (i.characteristicKey = r, i.characteristicName = cc[r]), i;
}
function QW(e) {
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
function $W(e, t) {
	return t === "talent" ? eG(e) : e.items?.contents.filter((e) => e.type === t).map((n) => tG(e, n, t)) ?? [];
}
function eG(e) {
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
function tG(e, t, n) {
	let r = t.toObject().system, i = $l(r, [["advances", "value"], ["advances"]]);
	if (n === "talent") return {
		baseAdvances: i,
		current: i,
		kind: n,
		name: t.name,
		talentMaximumFormula: q(r, ["max", "formula"]),
		talentMaximumKey: q(r, ["max", "value"])
	};
	let a = $l(r, [["modifier", "value"], ["modifier"]]), o = nG(r), s = {
		baseAdvances: i,
		baseModifier: a,
		current: (o ? YW(e.toObject().system, o) : 0) + i + a,
		kind: n,
		name: t.name
	};
	return o && (s.characteristicKey = o, s.characteristicName = cc[o]), s;
}
function nG(e) {
	let t = q(e, ["characteristic", "value"]);
	return uc(t) ? t : void 0;
}
function rG(e, t, n) {
	let r = lc[t.name.trim().toLocaleLowerCase()];
	r && (e[`system.characteristics.${r}.advances`] = n);
}
async function iG(e, t, n, r) {
	let i = Math.max(0, t.baseAdvances + n), a = HU(e, t.name, "talent"), o = a[0] ?? await aG(t);
	r.deletes.push(...a.map((e) => e.id));
	for (let e = 0; e < i; e += 1) {
		let e = BU(o, t.name, "talent");
		e.type = "talent", ru(e, [
			"system",
			"advances",
			"value"
		], 1), r.creates.push(e);
	}
}
async function aG(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		if (Fb(t)) return t;
	}
	return KU(e.name, [e.kind]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/config.ts
function oG(e, t) {
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
function sG(e, t) {
	return {
		_id: e,
		"system.specification.value": t.specification,
		...t.rollable && !t.damage ? { "system.rollable.defaultDifficulty": t.defaultDifficulty } : {},
		...t.damage && t.dice ? { "system.rollable.dice": t.dice } : {}
	};
}
function cG(e) {
	return {
		...MA(),
		attackType: fG(e.system, ["rollable", "attackType"]) || "melee",
		bonusCharacteristic: fG(e.system, ["rollable", "bonusCharacteristic"]),
		damage: tu(e.system, [["rollable", "damage"]]),
		defaultDifficulty: fG(e.system, ["rollable", "defaultDifficulty"]) || "challenging",
		dice: fG(e.system, ["rollable", "dice"]),
		rollable: tu(e.system, [["rollable", "value"]]),
		skill: fG(e.system, ["rollable", "skill"]),
		sl: tu(e.system, [["rollable", "SL"]], !0),
		specification: fG(e.system, ["specification", "value"])
	};
}
function lG(e) {
	return dG(e.system);
}
function uG(e) {
	return dG(e.system);
}
function dG(e) {
	return tu(e, [["disabled"], ["disabled", "value"]]);
}
function fG(e, t) {
	let n = K(e, t);
	return typeof n == "string" ? n.trim() : typeof n == "number" ? String(n) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/apply.ts
async function pG(e, t) {
	let n = qW();
	for (let r of t) {
		let t = r.source === "base" ? UU(e, r.sourceUuid, r.name) : VU(e, r.name, "trait");
		if (r.ignored) {
			t && n.deletes.push(t.id);
			continue;
		}
		if (t) {
			n.updates.push(sG(t.id, r.config));
			continue;
		}
		let i = BU(r.sourceUuid ? await mG(r.sourceUuid) : await KU(r.name, ["trait"]), r.name, "trait");
		i.type = "trait", ru(i, ["system", "disabled"], !1), oG(i, r.config), n.creates.push(i);
	}
	await JW(e, n);
}
async function mG(e) {
	let t = await fromUuid(e);
	return Fb(t) ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/actor-traits.ts
function hG(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !lG(e)).map(vG) ?? [];
}
function gG(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && lG(e)).map(vG) ?? [];
}
function _G(e) {
	Array.isArray(e.items) && (e.items = e.items.filter((e) => {
		if (typeof e != "object" || !e) return !0;
		let t = e;
		return t.type !== "trait" || !uG(t);
	}));
}
function vG(e) {
	return {
		config: cG(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/difficulty-options.ts
var yG = [
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
async function bG() {
	let e = K(game.wfrp4e?.config, ["difficultyLabels"]);
	if (!G(e)) return yG;
	let t = Object.entries(e).filter((e) => {
		let [t, n] = e;
		return !!t.trim() && typeof n == "string";
	}).map(([e, t]) => ({
		label: t,
		value: e
	}));
	return t.length ? t : yG;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/drops.ts
async function xG(e) {
	let t = zb(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Trait item here.");
	let n = Rb(await fromUuid(t.uuid), "trait", "Drop a Foundry Trait item here.");
	return {
		config: cG(n),
		ignored: !1,
		key: `custom:${n.uuid}`,
		name: n.name,
		source: "custom",
		sourceUuid: n.uuid
	};
}
//#endregion
//#region src/functions/npc-builder/recommended-quick-traits.ts
var SG = [
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
async function CG(e) {
	return AG(await kG(e, "Actor"));
}
async function wG(e) {
	return AG(await kG(e, "Item"));
}
function TG() {
	return game.folders.contents.filter((e) => e.type === "Actor").map(AG).sort((e, t) => e.name.localeCompare(t.name));
}
function EG() {
	return game.folders.contents.filter((e) => e.type === "Item").map(AG).sort((e, t) => e.name.localeCompare(t.name));
}
function DG(e) {
	return e ? game.folders.contents.find((t) => t.uuid === e) ?? null : null;
}
function OG(e) {
	let t = DG(e);
	return t?.type === "Item" ? t : null;
}
async function kG(e, t) {
	let n = e.trim();
	if (!n) throw Error("Enter a folder name first.");
	let r = game.folders.contents.find((e) => e.type === t && jG(e.name, n));
	if (r) return r;
	let i = await Folder.create({
		name: n,
		type: t
	});
	if (!i) throw Error("Foundry did not create the folder.");
	return i;
}
function AG(e) {
	return {
		name: e.name,
		uuid: e.uuid
	};
}
function jG(e, t) {
	return e.trim().toLocaleLowerCase() === t.trim().toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/traits/quick-traits.ts
async function MG(e) {
	let t = OG(e.quickTraitFolderUuid);
	if (!t) throw Error("Choose a Quick Traits item folder before importing traits.");
	let n = new Set(FG(e).map((e) => e.name.trim().toLocaleLowerCase()));
	for (let e of SG) {
		if (n.has(e.trim().toLocaleLowerCase())) continue;
		let r = BU(await KU(e, ["trait"]), e, "trait");
		r.folder = t.id, r.type = "trait", await Item.create(r);
	}
	return ui.notifications?.info("Imported recommended quick traits."), await NG(e);
}
async function NG(e) {
	return FG(e).map(IG).sort((e, t) => e.name.localeCompare(t.name));
}
function PG(e, t) {
	return t.quickTraitFolderUuid ? e.folder?.uuid === t.quickTraitFolderUuid : !1;
}
function FG(e) {
	return game.items?.contents.filter((t) => t.type === "trait" && PG(t, e)) ?? [];
}
function IG(e) {
	return {
		config: cG(e),
		img: e.img ?? "",
		name: e.name,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/trappings.ts
var LG = [
	"ammunition",
	"armour",
	"container",
	"money",
	"trapping",
	"weapon"
];
async function RG(e, t) {
	let n = qW();
	for (let r of t) {
		let t = r.source === "base" ? UU(e, r.sourceUuid, r.name) : null;
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
		let i = await WG(r), a = r.resolution.selectedItemType || r.itemType || "trapping", o = BU(i, r.resolution.selectedName || r.name, a);
		o.type = a || o.type || "trapping", ru(o, [
			"system",
			"quantity",
			"value"
		], r.quantity), n.creates.push(o);
	}
	await JW(e, n);
}
async function zG(e) {
	return yN(e, await GG());
}
async function BG(e) {
	let t = zb(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Item here.");
	let n = Lb(await fromUuid(t.uuid), "Drop a Foundry Item here.");
	return {
		ignored: !1,
		itemType: n.type,
		key: `custom:${n.uuid}`,
		name: n.name,
		quantity: HG(n),
		resolution: _N({
			itemType: n.type,
			name: n.name,
			uuid: n.uuid
		}),
		source: "custom",
		sourceUuid: n.uuid
	};
}
function VG(e) {
	let t = UG();
	return e.items?.contents.filter((e) => t.includes(e.type)).map((e) => ({
		itemType: e.type,
		name: e.name,
		quantity: HG(e),
		uuid: e.uuid
	})) ?? [];
}
function HG(e) {
	return $l(e.system, [["quantity", "value"], ["quantity"]]) || 1;
}
function UG() {
	let e = Ql(game.wfrp4e?.config, ["trappingItems"]);
	return e.length ? e : LG;
}
async function WG(e) {
	if (e.sourceUuid) {
		let t = await fromUuid(e.sourceUuid);
		return Fb(t) ? t : null;
	}
	if (e.resolution.selectedCandidateUuid) {
		let t = await fromUuid(e.resolution.selectedCandidateUuid);
		return Fb(t) ? t : null;
	}
	return e.resolution.status === "fallback" ? null : await KU(e.resolution.selectedName || e.name, UG());
}
async function GG() {
	let e = [], t = UG();
	for (let n of game.items?.contents ?? []) t.includes(n.type) && e.push(qG(n, "World"));
	for (let n of game.packs ?? []) {
		if (!Dx(n)) continue;
		let r = await KG(n, t);
		if (r.length) {
			e.push(...r);
			continue;
		}
		if (!n.getDocuments) continue;
		let i = await n.getDocuments();
		for (let r of i) Fb(r) && t.includes(r.type) && e.push(qG(r, n.title ?? "Compendium"));
	}
	return e;
}
async function KG(e, t) {
	return e.getIndex ? Ax(await e.getIndex({ fields: ["name", "type"] })).filter((n) => !!(n.name && n.type && Ex(e, n) && t.includes(n.type))).map((t) => ({
		itemType: t.type ?? "trapping",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		uuid: Ex(e, t)
	})) : [];
}
function qG(e, t) {
	return {
		itemType: e.type,
		name: e.name,
		sourceLabel: t,
		uuid: e.uuid
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/actors.ts
function JG(e) {
	return game.actors.contents.filter((t) => eK(t, e)).map(ZG);
}
async function YG(e) {
	let t = Ib(await fromUuid(e));
	return {
		advancements: [
			...QW(t),
			...$W(t, "skill"),
			...$W(t, "talent")
		],
		optionalTraits: gG(t),
		traits: hG(t),
		trappings: VG(t)
	};
}
async function XG(e) {
	let t = zb(e);
	if (t.type !== "Actor") throw Error("Drop a Foundry Actor here.");
	let n = null;
	return t.uuid ? n = await fromUuid(t.uuid) : t.id && (n = game.actors.get(t.id)), ZG(Ib(n));
}
function ZG(e) {
	return {
		img: e.img ?? "",
		name: e.name,
		prototypeTokenImg: $G(e),
		species: QG(e),
		type: e.type,
		uuid: e.uuid
	};
}
function QG(e) {
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
function $G(e) {
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
function eK(e, t) {
	return t.baseActorFolderUuid ? e.folder?.uuid === t.baseActorFolderUuid : !0;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/careers.ts
async function tK(e) {
	let t = zb(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a WFRP Career item here.");
	return oU(Rb(await fromUuid(t.uuid), "career", "Drop a WFRP Career item here."));
}
async function nK(e) {
	let t = [];
	for (let n of e) {
		let e = Rb(await fromUuid(n.uuid), "career", `Career “${n.name}” is no longer available.`);
		for (let r = 0; r < BA(n.quantity); r += 1) {
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
async function rK(e, t) {
	t.length && await e.createEmbeddedDocuments("Item", t);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/constants.ts
var iK = "spell", aK = new Set(BM), oK = new Set(VM);
async function sK() {
	return cK().map((e) => ({
		category: KM(e.key),
		key: e.key,
		label: e.name,
		value: e.name,
		wind: e.wind
	})).sort((e, t) => e.category === t.category ? e.label.localeCompare(t.label) : e.category.localeCompare(t.category));
}
function cK() {
	let e = K(game.wfrp4e?.config, ["magicLores"]), t = K(game.wfrp4e?.config, ["magicWind"]), n = [];
	if (!G(e)) return [fK()];
	for (let [r, i] of Object.entries(e)) {
		let e = yK(i) || r, a = vK(t, r);
		n.push({
			key: r,
			matchTerms: _K(r, e, a),
			name: e,
			wind: a
		});
	}
	return n.some((e) => e.key === "petty") || n.push(fK()), n;
}
function lK(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		if (r.isAmbiguous) continue;
		if (r.kind === "petty-magic") {
			let e = gK("petty magic", t);
			e && n.set(e.key, e);
			continue;
		}
		let e = gK(r.rawLore, t);
		e && n.set(e.key, e);
	}
	return [...n.values()];
}
function uK(e, t) {
	let n = [...dK(e.system), hK(e.name)].filter(Boolean);
	for (let e of n) {
		let n = mK(e, t);
		if (n) return n;
		let r = gK(e, t);
		if (r) return r;
	}
	return null;
}
function dK(e) {
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
function fK() {
	return {
		key: "petty",
		matchTerms: ["petty", "petty magic"],
		name: "Petty Magic",
		wind: ""
	};
}
function pK(e) {
	let t = e.trim() || "Unknown Lore";
	return {
		key: UM(t) || "unknown",
		matchTerms: [t],
		name: t,
		wind: ""
	};
}
function mK(e, t) {
	let n = UM(e);
	return n === "lore" ? t.find((e) => e.key !== "petty") ?? null : n === "the eight winds" || n === "eight winds" ? t.find((e) => aK.has(e.key)) ?? null : n === "dark lore" ? t.find((e) => oK.has(e.key)) ?? null : null;
}
function hK(e) {
	return /\(([^)]+)\)\s*$/.exec(e)?.[1]?.trim() ?? "";
}
function gK(e, t) {
	let n = UM(e);
	return n ? t.find((e) => e.matchTerms.some((e) => UM(e) === n)) ?? null : null;
}
function _K(e, t, n) {
	let r = /* @__PURE__ */ new Set(), i = UM(e), a = UM(t);
	for (let i of [
		e,
		t,
		n
	]) i.trim() && r.add(i.trim());
	return (i === "petty" || a === "petty") && r.add("Petty Magic"), (i === "shadow" || a === "shadow") && r.add("Shadows"), t && !/^lore of /i.test(t) && r.add(`Lore of ${t}`), [...r];
}
function vK(e, t) {
	return G(e) ? yK(e[t]) : "";
}
function yK(e) {
	return typeof e == "string" ? e.trim() : G(e) ? q(e, ["name"]) || q(e, ["label"]) || q(e, ["value"]) : "";
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/debug.ts
var bK = "[Drowsy's WFRP4e Customizers][Spell Lookup]";
function xK(t, n) {
	if (n) {
		e(`${bK} ${t}`, n);
		return;
	}
	e(`${bK} ${t}`);
}
function SK(e, n) {
	t(`${bK} ${e}`, n);
}
function CK(e) {
	return [
		e.title ?? "",
		e.collection ?? "",
		q(e, ["metadata", "type"]),
		q(e, ["metadata", "documentName"]),
		e.documentName
	].filter(Boolean).join(" | ");
}
function wK(e) {
	return {
		loreTerms: dK(e.system),
		name: e.name,
		sourceLabel: e.sourceLabel,
		uuid: e.uuid
	};
}
function TK(e) {
	return typeof e == "string" ? {
		kind: "uuid-string",
		value: e
	} : G(e) ? {
		documentName: q(e, ["documentName"]),
		hasSystem: G(K(e, ["system"])),
		loreTerms: dK(K(e, ["system"])),
		name: q(e, ["name"]),
		type: q(e, ["type"]),
		uuid: q(e, ["uuid"])
	} : { kind: typeof e };
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-input-conversion.ts
function EK(e, t) {
	return {
		img: e.img ?? "",
		name: e.name,
		sourceLabel: t,
		system: e.system,
		uuid: e.uuid
	};
}
function DK(e) {
	return /^item\./i.test(e.uuid) ? "World" : OK(e.uuid, "WFRP Item Lookup");
}
function OK(e, t) {
	let n = /^Compendium\.([^.]+\.[^.]+)\./.exec(e)?.[1];
	return n ? [...game.packs ?? []].find((e) => e.collection === n)?.title ?? n : t;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/compendium-spell-inputs.ts
async function kK(e) {
	if (xK("Compendium index scan start", { pack: CK(e) }), !e.getIndex) return xK("Compendium has no index; loading documents", { pack: CK(e) }), await MK(e);
	let t = Ax(await e.getIndex({ fields: [
		"name",
		"type",
		"img",
		"system.lore.value"
	] }));
	if (xK("Compendium index loaded", {
		entries: t.length,
		pack: CK(e),
		samples: t.slice(0, 5).map((t) => ({
			hasLoreTerms: dK(t).length > 0,
			name: t.name,
			type: t.type,
			uuid: Ex(e, t)
		}))
	}), !t.length) return xK("Compendium index empty; loading documents", { pack: CK(e) }), await MK(e);
	let n = t.filter(jK);
	xK("Compendium index spell candidates", {
		pack: CK(e),
		spellEntries: n.length
	});
	let r = n.filter((e) => e.name).map((t) => PK(e, t));
	return r.length || !NK(e) ? r : await MK(e);
}
function AK(e) {
	return Dx(e);
}
function jK(e) {
	return e.type === "spell" ? !0 : !!(e.name && (dK(e).length || hK(e.name)));
}
async function MK(e) {
	if (!e.getDocuments) return xK("Compendium has no document loader", { pack: CK(e) }), [];
	xK("Compendium document load start", { pack: CK(e) });
	let t = await e.getDocuments(), n = t.filter((e) => Fb(e) && e.type === "spell");
	return xK("Compendium document load complete", {
		documents: t.length,
		pack: CK(e),
		spellDocuments: n.length,
		spellSamples: n.slice(0, 5).map((e) => ({
			loreTerms: dK(e.system),
			name: e.name,
			uuid: e.uuid
		}))
	}), n.map((t) => EK(t, e.title ?? "Compendium"));
}
function NK(e) {
	return e.collection === "wfrp4e-core.items" || e.collection === "wfrp4e-wom.items";
}
function PK(e, t) {
	return {
		img: t.img ?? t.thumb ?? "",
		name: t.name ?? "",
		sourceLabel: e.title ?? "Compendium",
		system: t,
		uuid: Ex(e, t)
	};
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/warhammer-spell-inputs.ts
async function FK() {
	let e = LK();
	if (!e) return xK("WFRP helper unavailable"), [];
	try {
		let t = await e.findAllItems(iK, "Loading Spells", !0, ["system.lore.value"]);
		return xK("WFRP helper raw result", {
			count: t.length,
			samples: t.slice(0, 10).map(TK)
		}), (await Promise.all(t.map((e) => IK(e)))).filter((e) => e !== null);
	} catch (e) {
		return SK("WFRP helper lookup failed.", e), [];
	}
}
async function IK(e) {
	if (typeof e == "string") {
		let t = await fromUuid(e);
		return Fb(t) && t.type === "spell" ? EK(t, DK(t)) : null;
	}
	if (Fb(e)) return e.type === "spell" ? EK(e, DK(e)) : null;
	if (q(e, ["type"]) !== "spell") return null;
	let t = q(e, ["name"]);
	return t ? {
		img: q(e, ["img"]) || q(e, ["thumb"]),
		name: t,
		sourceLabel: OK(q(e, ["uuid"]), "WFRP Item Lookup"),
		system: K(e, ["system"]),
		uuid: q(e, ["uuid"])
	} : null;
}
function LK() {
	let e = K(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
	return typeof e == "function" ? { findAllItems: e } : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/spell-resolution-inputs.ts
async function RK() {
	let e = [], n = [...game.packs ?? []];
	xK("Candidate lookup start", {
		itemPacks: n.filter(AK).length,
		totalPacks: n.length,
		warhammerUtilityAvailable: !!VK(),
		worldItems: game.items?.contents.length ?? 0
	});
	let r = await FK();
	xK("WFRP helper lookup complete", {
		utilityInputs: r.length,
		utilitySamples: r.slice(0, 10).map(wK)
	}), e.push(...r), e.push(...zK()), xK("World spell scan complete", { worldSpellCount: e.filter((e) => e.sourceLabel === "World").length });
	for (let r of n) if (AK(r)) try {
		let t = await kK(r);
		e.push(...t), xK("Compendium spell scan complete", {
			inputCount: t.length,
			pack: CK(r),
			samples: t.slice(0, 5).map(wK)
		});
	} catch (e) {
		t(`wfrp4e-customizer-apps | Spell lookup skipped compendium "${r.title ?? r.collection ?? "unknown"}".`, e);
	}
	let i = BK(e);
	return xK("Candidate lookup complete", {
		rawInputCount: e.length,
		uniqueInputCount: i.length
	}), i;
}
function zK() {
	let e = [];
	for (let t of game.items?.contents ?? []) t.type === "spell" && e.push(EK(t, "World"));
	return e;
}
function BK(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.uuid || n.name.trim().toLocaleLowerCase();
		t.has(e) || t.set(e, n);
	}
	return [...t.values()];
}
function VK() {
	return K(globalThis, [
		"warhammer",
		"utility",
		"findAllItems"
	]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/magic/index.ts
async function HK(e, t) {
	let n = [];
	for (let r of t) {
		if (!r.selected || VU(e, r.name, "spell")) continue;
		let t = BU(r.sourceUuid ? await GK(r.sourceUuid) : null, r.name, iK);
		t.type = iK, n.push(t);
	}
	n.length && await e.createEmbeddedDocuments("Item", n);
}
async function UK(e) {
	let t = lK(e, cK());
	if (xK("Grant resolution start", {
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
	let n = await RK(), r = /* @__PURE__ */ new Map(), i = [];
	for (let e of n) {
		let n = uK(e, t);
		if (!n) {
			i.length < 20 && i.push({
				loreTerms: dK(e.system),
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
	return xK("Grant resolution complete", {
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
async function WK(e) {
	let t = zb(e);
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Spell item here.");
	let n = Rb(await fromUuid(t.uuid), iK, "Drop a Foundry Spell item here."), r = uK(EK(n, "Dropped"), [...cK(), fK()]) ?? pK(dK(n.system)[0] ?? "");
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
async function GK(e) {
	let t = await fromUuid(e);
	return Fb(t) && t.type === "spell" ? t : null;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/mounts/trait-sources.ts
var KK = "generatedMountTrait";
function qK(e, t) {
	return t.traits.flatMap((t) => {
		if (!t.included || aR(t.name)) return [];
		let n = JK(e, t);
		if (!n) return [];
		let r = n.toObject();
		return delete r._id, r.name = t.outputName, ru(r, ["system", "disabled"], !1), ru(r, [
			"flags",
			Y,
			KK
		], {
			mountUuid: e.uuid,
			sourceTraitUuid: t.sourceUuid
		}), t.fixedDamage !== null && YK(r, t.fixedDamage), [r];
	});
}
function JK(e, t) {
	return e.items?.contents.find((e) => e.type === "trait" && e.uuid === t.sourceUuid) ?? null;
}
function YK(e, t) {
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
async function XK(e, t, n, r) {
	let i = e.items?.contents.filter($K) ?? [], a = r.traits.filter((e) => e.included && aR(e.name)), o = ZK(i), s = QK(n, a), c = Math.max(o.value, s.value) + 1;
	if (o.item && e.updateEmbeddedDocuments) {
		await e.updateEmbeddedDocuments("Item", [{
			_id: o.item.id,
			"system.specification.value": String(c)
		}]);
		return;
	}
	let l = BU((s.contribution ? JK(t, s.contribution) : null) ?? await KU("Armour", ["trait"]), "Armour", "trait");
	l.name = "Armour", l.type = "trait", ru(l, ["system", "disabled"], !1), ru(l, [
		"system",
		"specification",
		"value"
	], String(c)), await e.createEmbeddedDocuments("Item", [l]);
}
function ZK(e) {
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
function QK(e, t) {
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
function $K(e) {
	return e.type === "trait" && aR(e.name);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/mounts/profile.ts
var eq = new Set(Object.values(nR));
async function tq(e) {
	return nq(Ib(await fromUuid(e)));
}
function nq(e) {
	return {
		characteristics: {
			initiative: oq(e, "i"),
			strength: oq(e, "s"),
			strengthBonus: sq(e, "s"),
			toughness: oq(e, "t")
		},
		img: e.img ?? "",
		movement: $l(e.system, [[
			"details",
			"move",
			"value"
		]]),
		name: e.name,
		size: cq(e),
		traits: rq(e),
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
function rq(e) {
	return e.items?.contents.filter((e) => e.type === "trait" && !lq(e)).map((t) => iq(e, t)).sort((e, t) => e.name.localeCompare(t.name)) ?? [];
}
function iq(e, t) {
	let n = tu(t.system, [["rollable", "damage"]]), r = q(t.system, ["specification", "value"]);
	return {
		damage: n,
		fixedDamage: n ? aq(e, t, r) : null,
		name: t.name,
		specification: r,
		uuid: t.uuid
	};
}
function aq(e, t, n) {
	let r = eu(t, [["Damage"]]);
	if (r !== null) return r;
	let i = Number(n), a = q(t.system, ["rollable", "bonusCharacteristic"]);
	return (Number.isFinite(i) ? i : 0) + (a ? sq(e, a) : 0);
}
function oq(e, t) {
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
function sq(e, t) {
	return eu(e.system, [[
		"characteristics",
		t,
		"bonus"
	]]) ?? Math.floor(oq(e, t) / 10);
}
function cq(e) {
	let t = q(e.system, [
		"details",
		"size",
		"value"
	]);
	return eq.has(t) ? t : nR.Average;
}
function lq(e) {
	return tu(e.system, [["disabled"], ["disabled", "value"]]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/mounts/apply.ts
var uq = {
	avg: 1,
	enor: 3,
	lrg: 2,
	ltl: .5,
	mnst: 4,
	sml: .8,
	tiny: .3
};
async function dq(e, t) {
	let n = Ib(await fromUuid(t));
	if (e.uuid === n.uuid) throw Error("The rider and mount must be different Actors.");
	let r = nq(e), i = nq(n), a = hR(r, i);
	await e.update(fq(e, a));
	let o = qK(n, a);
	o.length && await e.createEmbeddedDocuments("Item", o), await XK(e, n, i, a), await e.createEmbeddedDocuments("Item", [yR({
		flagScope: Y,
		mount: i,
		plan: a,
		rider: r
	})]), await e.update({
		"system.status.wounds.max": a.wounds,
		"system.status.wounds.value": a.wounds
	});
}
function fq(e, t) {
	let n = uq[t.size] ?? 1;
	return {
		"prototypeToken.height": n,
		"prototypeToken.width": n,
		"system.characteristics.i.modifier": pq(e, "i") + t.initiative - mq(e, "i"),
		"system.characteristics.t.modifier": pq(e, "t") + t.toughness - mq(e, "t"),
		"system.details.move.value": t.movement
	};
}
function pq(e, t) {
	return $l(e.system, [[
		"characteristics",
		t,
		"modifier"
	]]);
}
function mq(e, t) {
	return $l(e.system, [[
		"characteristics",
		t,
		"value"
	]]);
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/mounts/actors.ts
function hq() {
	return game.actors.contents.map(ZG).sort((e, t) => e.name.localeCompare(t.name));
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/build-npc.ts
async function gq(e) {
	if (e.mountActorUuid && e.mountActorUuid === e.baseActorUuid) throw Error("The rider and mount must be different Actors.");
	let t = await nK(e.careers), n = await vq(e);
	if (!n) throw Error("Foundry did not create the NPC Actor.");
	let r = yq(e), i = e.careers.at(-1), a = {
		name: r,
		"prototypeToken.name": r
	}, o = q(n.system, [
		"details",
		"gmnotes",
		"value"
	]), s = _q(o);
	s !== o && (a["system.details.gmnotes.value"] = s);
	let c = e.portraitPath || i?.img || "";
	return c && (a.img = c, a["prototypeToken.texture.src"] = c), await n.update(a), await rK(n, t), await XW(n, e.advancements), await pG(n, e.traits), e.mountActorUuid && await dq(n, e.mountActorUuid), await RG(n, e.trappings), await HK(n, e.spells), n.sheet?.render(!0), ui.notifications?.info(`Created NPC "${r}".`), {
		name: r,
		uuid: n.uuid
	};
}
function _q(e) {
	return e.replaceAll(/(?:<hr\s*\/?>)?<section data-wfrp-customizer-npc-xp="true">[\S\s]*?<\/section>/g, "").trim();
}
async function vq(e) {
	let t = Ib(await fromUuid(e.baseActorUuid)).toObject(), n = DG(e.settings.outputActorFolderUuid);
	return delete t._id, delete t.folder, t.type = "npc", _G(t), n && (t.folder = n.id), await Actor.create(t);
}
function yq(e) {
	if (!e.settings.includeSpeciesInName) return e.actorName;
	let t = game.actors.contents.find((t) => t.uuid === e.baseActorUuid), n = t ? QG(t) : "";
	return !n || e.actorName.toLocaleLowerCase().includes(n.toLocaleLowerCase()) ? e.actorName : `${n} ${e.actorName}`;
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/document-drops.ts
async function bq(e) {
	let t = zb(e);
	if (t.type === "Actor") return {
		actor: await XG(e),
		kind: "actor"
	};
	if (t.type !== "Item" || !t.uuid) throw Error("Drop a Foundry Actor or WFRP Item.");
	let n = Lb(await fromUuid(t.uuid), "Drop a Foundry Item.");
	if (n.type === "career") return {
		career: await tK(e),
		kind: "career"
	};
	if (n.type === "skill" || n.type === "talent") return {
		advancement: ZW(n),
		kind: "advancement"
	};
	if (n.type === "trait") return {
		kind: "trait",
		trait: await xG(e)
	};
	if (n.type === "spell") return {
		kind: "spell",
		spell: await WK(e)
	};
	if (UG().includes(n.type)) return {
		kind: "trapping",
		trapping: await BG(e)
	};
	throw Error("Drop an Actor, Career, Skill, Talent, Trait, Trapping, or Spell Item.");
}
//#endregion
//#region src/module/apps/npc-builder/foundry-bridge/index.ts
var xq = {
	buildNpc: gq,
	ensureActorFolder: CG,
	ensureItemFolder: wG,
	findLowerCareerCandidates: mU,
	filterPortraitCandidates: kW,
	getPortraitSearchAvailability: async () => dW(),
	importRecommendedQuickTraits: MG,
	listActorFolders: async () => TG(),
	listBaseActors: async (e) => JG(e),
	listFoundryPortraitCandidates: IW,
	listMagicLoreOptions: sK,
	listMountActors: async () => hq(),
	listSpellsForMagicGrants: UK,
	listItemFolders: async () => EG(),
	listQuickTraits: NG,
	listSkillCharacteristics: AU,
	listSkillSpecializations: kU,
	listTalentMaximums: qU,
	listTraitDifficultyOptions: bG,
	loadBaseActorDraftData: YG,
	loadActorCombatProfile: tq,
	loadSettings: async () => GW(),
	resolveActorDrop: XG,
	resolveApplicationDrop: bq,
	resolveCareerDrop: tK,
	resolveSpellDrop: WK,
	resolveTraitDrop: xG,
	resolveTrapping: zG,
	resolveTrappingDrop: BG,
	saveSettings: KW
}, Sq = class extends Vv {
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
		return QH;
	}
	getVueProps() {
		return { bridge: xq };
	}
}, Cq = "wfrp4e-customizer-open-npc-builder", wq = "wfrp4e-customizer-open-species-builder";
function Tq() {
	Hooks.on("renderActorDirectory", (e, t) => {
		let n = Aq(t);
		n && Eq(n);
	});
}
function Eq(e) {
	let n = kq(e);
	if (!n) {
		t("wfrp4e-customizer-apps | Could not find Actor Directory button container.");
		return;
	}
	Dq(e, n), Oq(e, n);
}
function Dq(e, t) {
	if (e.querySelector(`.${Cq}`)) return;
	let n = document.createElement("button");
	n.classList.add(Cq, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-user-plus\" inert></i><span>NPC Builder App</span>", n.addEventListener("click", () => {
		new Sq().render(!0);
	}), t.append(n);
}
function Oq(e, t) {
	if (e.querySelector(`.${wq}`)) return;
	let n = document.createElement("button");
	n.classList.add(wq, "wfrp4e-customizer-actor-directory-button"), n.type = "button", n.innerHTML = "<i class=\"fa-solid fa-people-group\" inert></i><span>Species Builder</span>", n.addEventListener("click", () => {
		new jA().render(!0);
	}), t.append(n);
}
function kq(e) {
	return e.querySelector(".directory-header .header-actions") ?? e.querySelector(".directory-header .action-buttons") ?? e.querySelector(".header-actions") ?? e.querySelector(".action-buttons");
}
function Aq(e) {
	return e instanceof HTMLElement ? e : jq(e) && e[0] instanceof HTMLElement ? e[0] : null;
}
function jq(e) {
	return typeof e == "object" && !!e && "length" in e;
}
//#endregion
//#region src/view/apps/actor-portrait-gallery/ActorPortraitGalleryApp.vue?vue&type=script&setup=true&lang.ts
var Mq = { class: "app:flex app:h-full app:min-h-0 app:flex-col" }, Nq = { class: "dui-navbar app:sticky app:top-0 app:z-10 app:min-h-0 app:gap-2 app:bg-base-100 app:px-3 app:py-2 app:shadow-sm" }, Pq = { class: "dui-navbar-start app:min-w-0 app:flex-1 app:gap-2" }, Fq = { class: "app:m-0 app:truncate app:text-lg app:font-semibold" }, Iq = {
	key: 0,
	class: "dui-badge dui-badge-success dui-badge-sm"
}, Lq = { class: "dui-navbar-end app:w-auto app:gap-2" }, Rq = ["alt", "src"], zq = ["disabled"], Bq = {
	key: 0,
	"aria-hidden": "true",
	class: "fa-solid fa-spinner fa-spin"
}, Vq = {
	key: 1,
	"aria-hidden": "true",
	class: "fa-solid fa-layer-group"
}, Hq = ["disabled"], Uq = ["disabled"], Wq = ["disabled"], Gq = { class: "app:min-h-0 app:flex-1 app:p-2" }, Kq = /* @__PURE__ */ M({
	__name: "ActorPortraitGalleryApp",
	props: {
		bridge: {},
		context: {}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ k(""), r = /* @__PURE__ */ k(""), i = /* @__PURE__ */ k(null), a = /* @__PURE__ */ k(null), o = /* @__PURE__ */ k(t.context.selectedPortraitPath), s = /* @__PURE__ */ k(t.context.currentPortraitPath), c = /* @__PURE__ */ k(t.context.currentTokenPath), l = null, u = null, d = PM(), f = JL({
			activePortraitPath: o,
			baseSearchTerms: /* @__PURE__ */ k([...t.context.searchTerms]),
			errorMessage: n,
			excludeFullyTransparentImages: /* @__PURE__ */ k(t.context.excludeFullyTransparentImages),
			excludedReferenceImagePaths: /* @__PURE__ */ k([...t.context.excludedReferenceImagePaths]),
			filterState: d,
			hasSubject: /* @__PURE__ */ k(!0),
			immediateCandidates: /* @__PURE__ */ k([...t.context.immediateCandidates]),
			includeCompendiumAssets: /* @__PURE__ */ k(t.context.includeCompendiumAssets),
			includeFilePickerAssets: /* @__PURE__ */ k(t.context.includeFilePickerAssets),
			pinnedPortraitPath: o,
			priorityFolderPaths: /* @__PURE__ */ k([...t.context.priorityFolderPaths]),
			provider: t.bridge,
			searchErrorMessage: "The portrait gallery could not finish searching Foundry images.",
			selectPortrait: _
		}), p = H(() => !!o.value && o.value !== s.value), m = H(() => !!o.value && o.value !== c.value), h = H(() => p.value || m.value), g = H(() => f.selectedPortraitCandidate.value?.label ?? "Selected portrait");
		Xn(o, () => {
			n.value = "", r.value = "";
		}), Pr(ne);
		function _(e) {
			o.value = e.img;
		}
		async function v(e) {
			if (!(!o.value || i.value || !b(e))) {
				te(), i.value = e, n.value = "", r.value = "";
				try {
					await t.bridge.applyActorPortrait(t.context.actorUuid, o.value, e), e !== "token" && (s.value = o.value), e !== "portrait" && (c.value = o.value), r.value = x(e);
				} catch (e) {
					n.value = e instanceof Error ? e.message : "The selected image could not be applied.";
				} finally {
					i.value = null;
				}
			}
		}
		function y(e) {
			te(), v(e);
		}
		function b(e) {
			return e === "portrait" ? p.value : e === "token" ? m.value : h.value;
		}
		function x(e) {
			return e === "portrait" ? "Portrait updated." : e === "token" ? "Prototype token updated." : "Portrait and token updated.";
		}
		function S() {
			ne(), l = window.setTimeout(ee, 650);
		}
		function C() {
			ne(), u = window.setTimeout(te, 180);
		}
		function ee() {
			ne(), a.value && !a.value.matches(":popover-open") && a.value.showPopover();
		}
		function te() {
			ne(), a.value?.matches(":popover-open") && a.value.hidePopover();
		}
		function ne() {
			l !== null && (window.clearTimeout(l), l = null), u !== null && (window.clearTimeout(u), u = null);
		}
		return (t, s) => (F(), I("section", Mq, [R("header", Nq, [R("div", Pq, [R("h1", Fq, O(e.context.actorName), 1), r.value ? (F(), I("span", Iq, O(r.value), 1)) : V("", !0)]), R("div", Lq, [
			o.value ? (F(), I("img", {
				key: 0,
				alt: `${g.value} preview`,
				class: "app:aspect-square app:w-10 app:rounded-box app:bg-base-300 app:object-cover",
				height: "40",
				src: o.value,
				width: "40"
			}, null, 8, Rq)) : V("", !0),
			R("div", {
				class: "dui-join",
				onFocusin: ee,
				onFocusout: C,
				onPointerenter: S,
				onPointerleave: C
			}, [R("button", {
				class: "dui-btn dui-btn-primary dui-btn-sm dui-join-item",
				disabled: !h.value || !!i.value,
				type: "button",
				onClick: s[0] ||= (e) => v("both")
			}, [i.value === "both" ? (F(), I("i", Bq)) : (F(), I("i", Vq)), B(" " + O(i.value === "both" ? "Applying..." : "Apply to Both"), 1)], 8, zq), R("button", {
				"aria-label": "More apply options",
				class: "dui-btn dui-btn-primary dui-btn-sm dui-btn-square dui-join-item",
				disabled: !o.value || !!i.value,
				popovertarget: "actor-portrait-apply-menu",
				style: { "anchor-name": "--actor-portrait-apply-menu" },
				type: "button"
			}, [...s[3] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-chevron-down"
			}, null, -1)]], 8, Hq)], 32),
			R("ul", {
				id: "actor-portrait-apply-menu",
				ref_key: "applyMenu",
				ref: a,
				class: "dui-dropdown dui-dropdown-end dui-menu dui-menu-sm app:z-20 app:mt-1 app:w-52 app:rounded-box app:bg-base-100 app:p-2 app:shadow-lg",
				popover: "",
				style: { "position-anchor": "--actor-portrait-apply-menu" },
				onFocusin: ee,
				onFocusout: C,
				onPointerenter: ee,
				onPointerleave: C
			}, [R("li", null, [R("button", {
				disabled: !p.value || !!i.value,
				type: "button",
				onClick: s[1] ||= (e) => y("portrait")
			}, [...s[4] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-image"
			}, null, -1), B(" Portrait only ", -1)]], 8, Uq)]), R("li", null, [R("button", {
				disabled: !m.value || !!i.value,
				type: "button",
				onClick: s[2] ||= (e) => y("token")
			}, [...s[5] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle"
			}, null, -1), B(" Token only ", -1)]], 8, Wq)])], 544)
		])]), R("main", Gq, [z(SL, {
			class: "app:h-full",
			"empty-message": "No portrait or token images are available for this Actor yet.",
			"error-message": n.value,
			"fill-height": "",
			"is-loading": A(f).isLoadingPortraitCandidates.value,
			options: A(f).portraitCandidates.value,
			"progress-label": A(f).portraitSearchProgressLabel.value,
			"progress-value": A(f).portraitSearchProgressValue.value,
			"search-terms": A(f).portraitSearchTerms.value,
			"selected-option-key": A(f).selectedPortraitCandidateKey.value,
			tags: A(f).portraitFilterTags.value,
			onCreateSearchTerm: A(f).addPortraitSearchTerm,
			onFilterTagSectionChange: A(f).setPortraitFilterTagSection,
			onSelectPortrait: A(f).selectPortrait
		}, null, 8, [
			"error-message",
			"is-loading",
			"options",
			"progress-label",
			"progress-value",
			"search-terms",
			"selected-option-key",
			"tags",
			"onCreateSearchTerm",
			"onFilterTagSectionChange",
			"onSelectPortrait"
		])])]));
	}
}), qq = {
	applyActorPortrait: Jq,
	filterPortraitCandidates: kW,
	listPortraitCandidates: IW
};
async function Jq(e, t, n) {
	await Ib(await fromUuid(e), "The Actor for this portrait gallery is no longer available.").update(Yq(t, n));
}
function Yq(e, t) {
	return t === "portrait" ? { img: e } : t === "token" ? { "prototypeToken.texture.src": e } : {
		img: e,
		"prototypeToken.texture.src": e
	};
}
//#endregion
//#region src/module/apps/actor-portrait-gallery/context.ts
function Xq(e, t) {
	let n = e.img?.trim() ?? "", r = eW(e), i = (e.items?.contents ?? []).filter((e) => e.type === "career"), a = q(e.system, [
		"details",
		"career",
		"name"
	]), o = [
		e.name,
		q(e, ["Species"]),
		q(e.system, [
			"details",
			"species",
			"value"
		]),
		q(e.system, [
			"details",
			"species",
			"subspecies"
		]),
		a,
		q(e.system, [
			"details",
			"career",
			"careergroup",
			"value"
		]),
		q(e.system, [
			"details",
			"career",
			"class",
			"value"
		]),
		...i.flatMap(Qq)
	];
	return {
		actorName: e.name,
		actorUuid: e.uuid,
		currentPortraitPath: n,
		currentTokenPath: r,
		excludeFullyTransparentImages: t.excludeFullyTransparentPortraitAssets,
		excludedReferenceImagePaths: [...t.excludedPortraitReferenceImages],
		immediateCandidates: Zq(e, n, r),
		includeCompendiumAssets: t.searchCompendiumPortraitAssets,
		includeFilePickerAssets: t.searchFoundryPortraitAssets,
		priorityFolderPaths: vM({
			configuredFolders: t.prioritizedPortraitFolders,
			hasCareer: !!a || i.length > 0
		}),
		searchTerms: gM(o),
		selectedPortraitPath: n || r
	};
}
function Zq(e, t, n) {
	let r = [];
	return t && r.push({
		img: t,
		key: `base-actor:${e.uuid}`,
		label: `${e.name} portrait`,
		source: "base-actor",
		sourceGroup: "world",
		sourceLabel: "Actor Portrait"
	}), n && n !== t && r.push({
		img: n,
		key: `base-token:${e.uuid}`,
		label: `${e.name} prototype token`,
		source: "base-token",
		sourceGroup: "world",
		sourceLabel: "Prototype Token"
	}), iM(r);
}
function Qq(e) {
	return [
		e.name,
		q(e.system, ["careergroup", "value"]),
		q(e.system, ["class", "value"])
	];
}
//#endregion
//#region src/module/apps/actor-portrait-gallery/ActorPortraitGalleryApplication.ts
var $q = class extends Vv {
	actor;
	static DEFAULT_OPTIONS = {
		...super.DEFAULT_OPTIONS,
		id: `${Y}-actor-portrait-gallery`,
		classes: [Y, "wfrp4e-customizer-actor-portrait-gallery"],
		position: {
			height: 760,
			width: 900
		},
		window: {
			icon: "fa-solid fa-images",
			resizable: !0,
			title: "Choose Actor Portrait & Token"
		}
	};
	constructor(e) {
		super(), this.actor = e;
	}
	getVueComponent() {
		return Kq;
	}
	getVueProps() {
		return {
			bridge: qq,
			context: Xq(this.actor, GW())
		};
	}
};
//#endregion
//#region src/module/apps/actor-portrait-gallery/open.ts
async function eJ(e) {
	await new $q(Ib(await fromUuid(e), "The requested Actor could not be opened in the portrait gallery.")).render(!0);
}
async function tJ(e) {
	await new $q(e).render(!0);
}
//#endregion
//#region src/module/apps/actor-portrait-gallery/register-actor-sheet-button.ts
var nJ = "openWfrpCustomizerPortraitGallery", rJ = "wfrp4e-customizer-actor-portrait-gallery-header", iJ = [
	"getHeaderControlsActorSheetWFRP4eCharacter",
	"getHeaderControlsActorSheetWFRP4eNPC",
	"getHeaderControlsActorSheetWFRP4eCreature",
	"getHeaderControlsStandardWFRP4eActorSheet",
	"getHeaderControlsBaseWFRP4eActorSheet",
	"getHeaderControlsWarhammerActorSheetV2"
], aJ = [
	"renderActorSheetWFRP4eCharacter",
	"renderActorSheetWFRP4eNPC",
	"renderActorSheetWFRP4eCreature",
	"renderStandardWFRP4eActorSheet",
	"renderBaseWFRP4eActorSheet",
	"renderWarhammerActorSheetV2"
], oJ = !1;
function sJ() {
	if (!oJ) {
		oJ = !0;
		for (let e of iJ) Hooks.on(e, cJ);
		for (let e of aJ) Hooks.on(e, lJ);
	}
}
function cJ(e, t) {
	let n = uJ(e);
	if (!n || !Array.isArray(t) || n.isOwner === !1) return;
	let r = t;
	r.some((e) => e.action === nJ) || r.push({
		action: nJ,
		icon: "fa-solid fa-images",
		label: "Choose Portrait & Token"
	});
	let i = e;
	i.options ??= {}, i.options.actions ??= {}, i.options.actions[nJ] = function() {
		let e = uJ(this);
		e && fJ(e);
	};
}
function lJ(e) {
	let t = uJ(e), n = dJ(e);
	if (!t || !n || t.isOwner === !1) return;
	let r = n.querySelector(".window-header");
	if (!r || r.querySelector(`.${rJ}, [data-action="${nJ}"]`)) return;
	let i = document.createElement("button");
	i.type = "button", i.classList.add(rJ, "header-control", "icon", "fa-solid", "fa-images"), i.dataset.action = nJ, i.dataset.tooltip = "Choose Portrait & Token", i.ariaLabel = `Choose a portrait and prototype token for ${t.name}`, i.addEventListener("click", (e) => {
		e.preventDefault(), e.stopPropagation(), fJ(t);
	});
	let a = r.querySelector("[data-action=\"toggleControls\"]") ?? r.querySelector("[data-action=\"close\"]");
	r.insertBefore(i, a);
}
function uJ(e) {
	if (typeof e != "object" || !e) return null;
	let t = "document" in e ? e.document : void 0, n = "actor" in e ? e.actor : void 0;
	return Pb(t) ? t : Pb(n) ? n : null;
}
function dJ(e) {
	return typeof e != "object" || !e || !("element" in e) ? null : e.element instanceof HTMLElement ? e.element : null;
}
async function fJ(e) {
	try {
		await tJ(e);
	} catch (e) {
		t("wfrp4e-customizer-apps | Actor portrait gallery could not be opened.", e), ui.notifications?.warn?.("The portrait gallery could not be opened. See the console for details.");
	}
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/actor-profile.ts
function pJ(e) {
	let t = e.toObject(), n = {};
	for (let e of Object.keys(cc)) {
		let r = e;
		n[r] = YW(t.system, r);
	}
	return {
		characteristics: n,
		skills: mJ(e, "skill"),
		talents: mJ(e, "talent")
	};
}
function mJ(e, t) {
	return e.items?.contents.filter((e) => e.type === t).map((e) => ({
		name: e.name,
		value: t === "skill" ? hJ(e.toObject().system) : gJ(e.toObject().system)
	})) ?? [];
}
function hJ(e) {
	return $l(e, [["advances", "value"], ["advances"]]) + $l(e, [["modifier", "value"], ["modifier"]]);
}
function gJ(e) {
	return $l(e, [["advances", "value"], ["advances"]]);
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/species-actor.ts
var _J = null;
async function vJ(e, t, n) {
	let r = game.actors.contents, i = yJ(n ? r.filter((e) => e.folder?.uuid === n) : [], e);
	if (i) return {
		actor: i,
		source: i.folder?.name ?? "Configured NPC Base Actors folder"
	};
	let a = yJ(r.filter((e) => e.uuid !== t.uuid), e);
	if (a) return {
		actor: a,
		source: "World Actors"
	};
	let o = bJ(await SJ(), e);
	if (!o) return null;
	let s = await fromUuid(o.uuid);
	if (!wJ(s)) throw Error(`The species Actor ${o.uuid} is no longer available.`);
	return {
		actor: s,
		source: o.source
	};
}
function yJ(e, t) {
	return xJ(e, t, (e) => e.name);
}
function bJ(e, t) {
	return xJ(e, t, (e) => e.name);
}
function xJ(e, t, n) {
	let r = t.trim();
	return e.find((e) => n(e).trim() === r) ?? e.find((e) => zA(n(e)) === zA(t)) ?? null;
}
function SJ() {
	return _J ??= CJ(), _J;
}
async function CJ() {
	let e = [];
	for (let t of game.packs ?? []) {
		if (!Ox(t) || !t.getIndex) continue;
		let n = await t.getIndex({ fields: ["name"] });
		for (let r of Ax(n)) {
			let n = Ex(t, r);
			r.name && n && e.push({
				name: r.name,
				source: t.title ?? t.collection ?? "Actor Compendium",
				uuid: n
			});
		}
	}
	return e;
}
function wJ(e) {
	return typeof e == "object" && !!e && "documentName" in e && e.documentName === "Actor";
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/estimate.ts
async function TJ(e) {
	let t = Ib(await fromUuid(e), "Expected an NPC Actor.");
	if (t.type !== "npc") throw Error(`Expected an NPC Actor, but received Actor type “${t.type}”.`);
	return await EJ(t);
}
async function EJ(e) {
	let t = QG(e);
	if (!t) return { status: "missing-species" };
	let n = await vJ(t, e, GW().baseActorFolderUuid);
	return n ? {
		baselineName: n.actor.name,
		baselineSource: n.source,
		baselineUuid: n.actor.uuid,
		breakdown: Nj(pJ(e), pJ(n.actor)),
		species: t,
		status: "ready"
	} : {
		species: t,
		status: "baseline-not-found"
	};
}
//#endregion
//#region src/module/apps/npc-builder/estimated-xp/sheet.ts
var DJ = "[data-wfrp-customizer-npc-xp=\"true\"]", OJ = /* @__PURE__ */ new Set(), kJ = !1, AJ = !1;
function jJ() {
	if (!kJ) {
		kJ = !0, Hooks.on("renderApplicationV2", (e, t) => {
			if (!(t instanceof HTMLElement)) return;
			let n = IJ(e);
			n && MJ(n, t);
		});
		for (let e of [
			"createActor",
			"updateActor",
			"deleteActor",
			"createItem",
			"updateItem",
			"deleteItem",
			"updateSetting"
		]) Hooks.on(e, LJ);
	}
}
function MJ(e, t) {
	let n = t.matches("section[data-tab=\"careers\"]") ? t : t.querySelector("section[data-tab=\"careers\"]");
	if (!n) return;
	n.querySelector(DJ)?.remove();
	let r = NJ(e, t), i = n.querySelector(".sheet-list.careers");
	i ? n.insertBefore(r.container, i) : n.append(r.container), RJ(), PJ(r), globalThis.setTimeout(() => {
		r.root.isConnected && r.root.contains(r.container) && (RJ(), OJ.add(r));
	}, 0);
}
function NJ(e, t) {
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
async function PJ(e) {
	let n = ++e.generation;
	e.output.value = "Calculating…";
	try {
		let t = await EJ(e.actor);
		n === e.generation && e.root.contains(e.container) && FJ(e, t);
	} catch (r) {
		n === e.generation && e.root.contains(e.container) && (e.output.value = "Unavailable", e.details.textContent = "XP calculation failed; see the console for details."), t("wfrp4e-customizer-apps | NPC XP calculation failed.", r);
	}
}
function FJ(e, t) {
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
function IJ(e) {
	if (typeof e != "object" || !e) return null;
	let t = "actor" in e ? e.actor : void 0, n = "document" in e ? e.document : void 0, r = Pb(t) ? t : Pb(n) ? n : null;
	return r?.type === "npc" ? r : null;
}
function LJ() {
	AJ || (AJ = !0, globalThis.setTimeout(() => {
		AJ = !1, RJ();
		for (let e of OJ) PJ(e);
	}, 0));
}
function RJ() {
	for (let e of OJ) (!e.root.isConnected || !e.root.contains(e.container)) && OJ.delete(e);
}
//#endregion
//#region src/module/apps/species-builder/apply-species-config.ts
var zJ = [
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
function BJ() {
	let n = game.wfrp4e?.config;
	if (!G(n)) {
		t(`${Y} | WFRP config was unavailable; custom species were not applied.`);
		return;
	}
	let r = gy(), i = new Set(G(n.species) ? Object.keys(n.species) : []), a = r.definitions.filter((e) => !i.has(e.key.trim()));
	HJ(n, ll({
		...r,
		definitions: a
	})), a.length > 0 && e(`${Y} | Applied ${a.length} custom species definition(s).`);
}
async function VJ() {
	let n = game.wfrp4e?.config;
	if (!G(n)) {
		t(`${Y} | WFRP config was unavailable; runtime species extensions were not applied.`);
		return;
	}
	let r = ll({
		...gy(),
		definitions: []
	}, await hb());
	HJ(n, r);
	let i = Object.values(r.subspecies).reduce((e, t) => e + Object.keys(t).length, 0);
	i > 0 && e(`${Y} | Applied ${i} custom runtime-parent subspecies definition(s).`);
}
function HJ(e, t) {
	for (let n of zJ) UJ(e, n, t[n]);
	WJ(e, t.extraSpecies), GJ(e, t.subspecies);
}
function UJ(e, t, n) {
	if (Object.keys(n).length === 0) return;
	let r = e[t];
	if (!G(r)) {
		e[t] = { ...n };
		return;
	}
	Object.assign(r, n);
}
function WJ(e, t) {
	if (t.length === 0) return;
	let n = Array.isArray(e.extraSpecies) ? e.extraSpecies : [], r = /* @__PURE__ */ new Set();
	for (let e of n) typeof e == "string" && r.add(e);
	for (let e of t) r.add(e);
	e.extraSpecies = [...r];
}
function GJ(e, t) {
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
var KJ = "2d10";
function qJ(e) {
	let t = e?.split("+")[0]?.trim();
	return t ? YJ(t) : KJ;
}
function JJ(e, t) {
	return qJ(e) === qJ(t);
}
function YJ(e) {
	return e.replaceAll(/\s+/g, "").toLocaleLowerCase();
}
//#endregion
//#region src/module/apps/species-builder/chargen-roll-swap-feedback.ts
var XJ = "data-wfrp4e-customizer-roll-swap-feedback", ZJ = `[${XJ}="blocked"]`, QJ = /* @__PURE__ */ new WeakMap();
function $J(e, t) {
	let n = oY(e);
	if (n) for (let e of aY(n)) e.addEventListener("dragstart", () => {
		let r = e.dataset.ch;
		r && eY(n, r, t);
	}), e.addEventListener("dragend", () => {
		nY(n);
	}), e.addEventListener("drop", () => {
		nY(n);
	});
}
function eY(e, t, n) {
	nY(e);
	for (let r of aY(e)) {
		let e = r.dataset.ch;
		e && (e === t || n(t, e) || tY(r));
	}
}
function tY(e) {
	QJ.set(e, {
		ariaDisabled: e.getAttribute("aria-disabled"),
		borderColor: e.style.getPropertyValue("border-color"),
		borderColorPriority: e.style.getPropertyPriority("border-color"),
		hadDisabledClass: e.classList.contains("disabled")
	}), e.setAttribute(XJ, "blocked"), e.setAttribute("aria-disabled", "true"), e.classList.add("disabled"), e.style.setProperty("border-color", "transparent");
}
function nY(e) {
	for (let t of e.querySelectorAll(ZJ)) {
		let e = QJ.get(t);
		e && (e.hadDisabledClass || t.classList.remove("disabled"), rY(t, "aria-disabled", e.ariaDisabled), iY(t, "border-color", e.borderColor, e.borderColorPriority), t.removeAttribute(XJ), QJ.delete(t));
	}
}
function rY(e, t, n) {
	if (n === null) {
		e.removeAttribute(t);
		return;
	}
	e.setAttribute(t, n);
}
function iY(e, t, n, r) {
	if (!n) {
		e.style.removeProperty(t);
		return;
	}
	e.style.setProperty(t, n, r);
}
function aY(e) {
	return [...e.querySelectorAll(".ch-roll.ch-drag")];
}
function oY(e) {
	if (e instanceof HTMLElement) return e;
	if (!G(e)) return;
	let t = e[0];
	return t instanceof HTMLElement ? t : void 0;
}
//#endregion
//#region src/module/apps/species-builder/chargen-roll-swap-guard.ts
var sY = Symbol("wfrp4e-customizer-guarded-attributes-stage");
function cY() {
	Hooks.on("wfrp4e:chargen", (e) => {
		lY(e);
	});
}
function lY(n) {
	let r = uY(n);
	if (!r) {
		t(`${Y} | Could not inspect WFRP character generation stages.`);
		return;
	}
	let i = dY(r);
	if (!i) {
		t(`${Y} | Could not find the WFRP Attributes character generation stage.`);
		return;
	}
	if (fY(i.class)) return;
	let a = pY(i.class);
	typeof r.replaceStage == "function" ? r.replaceStage("attributes", a) : i.class = a, e(`${Y} | Guarded WFRP characteristic roll swapping for custom species.`);
}
function uY(e) {
	if (!G(e)) return;
	let t = {}, n = e.replaceStage;
	return typeof n == "function" && (t.replaceStage = (t, r) => {
		n.call(e, t, r);
	}), Array.isArray(e.stages) && (t.stages = e.stages), t;
}
function dY(e) {
	for (let t of e.stages ?? []) if (G(t) && t.key === "attributes") return typeof t.class == "function" ? t : void 0;
}
function fY(e) {
	return !!e[sY];
}
function pY(e) {
	class t extends e {
		static [sY] = !0;
		activateListeners(e) {
			let t = super.activateListeners(e);
			return $J(e, (e, t) => JJ(mY(this, e), mY(this, t))), t;
		}
		swap(e, t) {
			let n = mY(this, e), r = mY(this, t);
			if (JJ(n, r)) return super.swap(e, t);
			hY(e, n, t, r);
		}
	}
	return t;
}
function mY(e, t) {
	let n = G(e.context) ? e.context : void 0, r = G(n?.characteristics) ? n.characteristics : void 0, i = (G(r?.[t]) ? r[t] : void 0)?.formula;
	return typeof i == "string" ? i : void 0;
}
function hY(e, t, n, r) {
	let i = gY(e), a = gY(n), o = qJ(t), s = qJ(r);
	ui.notifications?.warn?.(`Cannot swap ${i} and ${a}: ${i} uses ${o}, while ${a} uses ${s}.`);
}
function gY(e) {
	let t = game.wfrp4e?.config?.characteristics;
	if (!G(t)) return e;
	let n = t[e];
	return typeof n == "string" ? n : e;
}
//#endregion
//#region src/module/apps/species-builder/familiar-correction.ts
function _Y(e) {
	if (game.modules.get("wfrp4e-wom")?.active !== !0) return 0;
	let n = SY(e, "species"), r = Object.entries(n).find(([, e]) => e === fc)?.[0], i = r ?? "constructfamiliar";
	return !r && n[i] !== void 0 ? (t(`${Y} | Could not restore the Winds of Magic Familiar species because key "${i}" is already in use.`), 0) : vY(e, ll({
		autoRegisterSpeciesTable: !1,
		correctExistingWfrpSpecies: !0,
		definitions: [xc(i)],
		runtimeSpeciesExtensions: [],
		showGeneratedConfigTab: !1
	}), i);
}
function vY(e, t, n) {
	let r = yY(e, t.extraSpecies);
	for (let i of vy) {
		let a = t[i][n];
		if (a === void 0) continue;
		let o = SY(e, i);
		if (o[n] === void 0) {
			o[n] = Ty(a), r += 1;
			continue;
		}
		i === "speciesTraits" ? r += bY(o, n, a) : (i === "subspecies" || i === "speciesCharacteristics") && (r += xY(o[n], a));
	}
	return r;
}
function yY(e, t) {
	let n = Array.isArray(e.extraSpecies) ? e.extraSpecies : [];
	Array.isArray(e.extraSpecies) || (e.extraSpecies = n);
	let r = 0;
	for (let e of t) n.includes(e) || (n.push(e), r += 1);
	return r;
}
function bY(e, t, n) {
	if (!Array.isArray(e[t]) || !Array.isArray(n)) return 0;
	let r = 0;
	for (let i of n) typeof i == "string" && !e[t].includes(i) && (e[t].push(i), r += 1);
	return r;
}
function xY(e, t) {
	if (!G(e) || !G(t)) return 0;
	let n = 0;
	for (let [r, i] of Object.entries(t)) {
		let t = e[r];
		t === void 0 ? (e[r] = Ty(i), n += 1) : G(t) && G(i) ? n += xY(t, i) : r === "speciesTraits" && Array.isArray(t) && (n += bY(e, r, i));
	}
	return n;
}
function SY(e, t) {
	return G(e[t]) || (e[t] = {}), e[t];
}
//#endregion
//#region src/module/apps/species-builder/species-corrections.ts
var CY = "Animal Familiar", wY = {
	badger: "Badger",
	cat: "Cat",
	crow: "Crow",
	fox: "Fox",
	owl: "Owl",
	stoat: "Stoat"
}, TY = {
	"Armour 1": "Armour (1)",
	"Bite+2": "Bite (+2)",
	"Cold-blooded": "Cold Blooded",
	Coldblooded: "Cold Blooded",
	"Flight 60": "Flight (60)",
	"Flight 80": "Flight (80)",
	"Hunter’s Eye": "Hunter's Eye",
	"Nimble-Fingered": "Nimble Fingered"
};
function EY() {
	let n = game.wfrp4e?.config;
	if (!G(n)) return t(`${Y} | WFRP config was unavailable; species corrections were skipped.`), {
		correctionCount: 0,
		removedTopLevelSpeciesKeys: []
	};
	let r = DY(n);
	return r.correctionCount += _Y(n), r.correctionCount += kY(n), r.correctionCount += AY(n), r.correctionCount > 0 && e(`${Y} | Applied ${r.correctionCount} known WFRP species correction(s).`), r;
}
function DY(e) {
	let t = PY(e, "species"), n = PY(e, "subspecies"), r = Object.entries(t).find(([e, t]) => t === CY && G(n[e]))?.[0];
	if (!r) return {
		correctionCount: 0,
		removedTopLevelSpeciesKeys: []
	};
	let i = n[r], a = [], o = 0;
	for (let [e, n] of Object.entries(wY)) {
		let r = i[e];
		G(r) && (t[e] === n && (delete t[e], a.push(e), o += 1), o += OY(r));
	}
	return {
		correctionCount: o,
		removedTopLevelSpeciesKeys: a
	};
}
function OY(e) {
	let t = e.traits, n = Array.isArray(e.speciesTraits) ? e.speciesTraits : t;
	if (!Array.isArray(n)) return 0;
	let r = NY(n);
	return Array.isArray(t) || !IY(n, r) ? (e.speciesTraits = r, delete e.traits, 1) : 0;
}
function kY(e) {
	if (PY(e, "species").helf !== "High Elf") return 0;
	let t = FY(e, "subspecies", "helf", "chrace");
	return t ? MY(t, "talents") : 0;
}
function AY(e) {
	let t = PY(e, "species"), n = 0;
	return t.skink === "Skink" && (n += jY(e, "speciesTalents", "skink"), n += jY(e, "speciesTraits", "skink")), t.chameleonskink === "Chameleon Skink" && (n += jY(e, "speciesTalents", "chameleonskink"), n += jY(e, "speciesTraits", "chameleonskink")), n;
}
function jY(e, t, n) {
	return MY(PY(e, t), n);
}
function MY(e, t) {
	let n = e[t];
	if (!Array.isArray(n)) return 0;
	let r = NY(n, !0);
	return IY(n, r) ? 0 : (e[t] = r, 1);
}
function NY(e, t = !1) {
	return e.flatMap((e) => {
		if (typeof e == "string" && e.trim()) {
			let t = e.trim();
			for (let [e, n] of Object.entries(TY)) t = t.replaceAll(e, n);
			return [t];
		}
		return t && typeof e == "number" ? [e] : [];
	});
}
function PY(e, t) {
	return G(e[t]) ? e[t] : {};
}
function FY(e, t, n, r) {
	let i = PY(PY(e, t), n);
	return G(i[r]) ? i[r] : void 0;
}
function IY(e, t) {
	return e.length === t.length && e.every((e, n) => e === t[n]);
}
//#endregion
//#region src/module/debug/shape-inspector/constants.ts
var LY = `${Y}.debugShapeProbes`, RY = "wfrp4eCustomizerShapeProbes", zY = "wfrp4eCustomizerShapePreset";
//#endregion
//#region src/module/debug/shape-inspector/utils.ts
function BY(e, t, n) {
	let r = Number(e);
	return Number.isFinite(r) ? Math.max(0, Math.min(n, Math.floor(r))) : t;
}
function VY(e) {
	return typeof e == "object" && !!e;
}
function HY(e) {
	return typeof e == "string" ? e.trim().toLocaleLowerCase() : "";
}
function UY(e) {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}
//#endregion
//#region src/module/debug/shape-inspector/path-resolver.ts
function WY(e) {
	let t = XY(e), n = GY(globalThis, t.root);
	for (let e of t.tokens) {
		if (e.type === "property") {
			n = GY(n, e.key);
			continue;
		}
		if (e.type === "index") {
			n = GY(n, String(e.index));
			continue;
		}
		n = KY(n, e.name, e.args);
	}
	return n;
}
function GY(e, t) {
	if (!(!VY(e) && typeof e != "function")) try {
		return e[t];
	} catch {
		return;
	}
}
function KY(e, t, n) {
	if (t === "at") {
		let t = Number(n[0] ?? 0), r = Number.isFinite(t) ? t : 0;
		return ZY(e).at(r);
	}
	if (t === "findByName") {
		let t = HY(n[0] ?? "");
		return ZY(e).find((e) => HY(GY(e, "name")) === t);
	}
	if (t === "findByType") {
		let t = HY(n[0] ?? "");
		return ZY(e).find((e) => HY(GY(e, "type")) === t);
	}
	if (t === "get") {
		let t = n[0] ?? "";
		if (e instanceof Map) return e.get(t);
		let r = GY(e, "get");
		if (typeof r == "function") return r.call(e, t);
	}
	if (t === "sample") {
		let t = BY(n[0], 3, 60);
		return ZY(e).slice(0, t);
	}
	throw Error(`Unsupported path method "${t}".`);
}
function qY(e) {
	return e.trim() ? e.split(",").map((e) => YY(e.trim())).map(String) : [];
}
function JY(e) {
	let t = e.trim();
	return /^-?\d+$/.test(t) ? Number(t) : YY(t);
}
function YY(e) {
	let t = /^["'](?<value>.*)["']$/.exec(e);
	return t?.groups ? t.groups.value ?? "" : e;
}
function XY(e) {
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
				args: qY(e.groups.args ?? ""),
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
				index: JY(e),
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
function ZY(e) {
	if (Array.isArray(e)) return e;
	let t = GY(e, "contents");
	return Array.isArray(t) ? t : [];
}
//#endregion
//#region src/module/debug/shape-inspector/presets.ts
var QY = { "npc-builder": [
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
function $Y() {
	return window.location.href.includes("wfrp4eCustomizerShapeProbes") || window.location.href.includes("wfrp4eCustomizerShapePreset");
}
function eX(e) {
	let t = {
		hook: e.hook ?? "ready",
		maxDepth: BY(e.maxDepth, 2, 6),
		maxEntries: BY(e.maxEntries, 12, 60),
		path: e.path.trim()
	};
	return e.label && (t.label = e.label), t;
}
function tX() {
	return [...nX(), ...rX()].map(eX);
}
function nX() {
	let e = UY(LY);
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.filter(aX).map(eX) : [];
	} catch {
		return [];
	}
}
function rX() {
	let e = [], t = [new URLSearchParams(window.location.search), new URLSearchParams(window.location.hash.replace(/^#/, ""))];
	for (let n of t) {
		let t = n.get(zY), r = n.get(RY);
		t && e.push(...QY[t] ?? []), r && e.push(...iX(r));
	}
	return window.location.href.includes("wfrp4eCustomizerShapePreset=npc-builder") && !e.length && e.push(...QY["npc-builder"] ?? []), e;
}
function iX(e) {
	try {
		let t = JSON.parse(decodeURIComponent(e));
		return Array.isArray(t) ? t.filter(aX) : [];
	} catch (e) {
		return t(`${Y} | Could not parse URL shape probes.`, e), [];
	}
}
function aX(e) {
	return typeof e != "object" || !e ? !1 : "path" in e && typeof e.path == "string";
}
//#endregion
//#region src/module/debug/shape-inspector/summary.ts
function oX(e, t) {
	return !VY(e) && typeof e != "function" ? dX(e) : typeof e == "function" ? lX(e) : Array.isArray(e) ? sX(e, t) : e instanceof Map ? cX(e, t) : uX(e, t);
}
function sX(e, t) {
	return {
		length: e.length,
		sample: e.slice(0, t.maxEntries).map((e) => oX(e, pX(t))),
		type: "array"
	};
}
function cX(e, t) {
	return {
		sample: [...e.entries()].slice(0, t.maxEntries).map(([e, n]) => ({
			key: oX(e, pX(t)),
			value: oX(n, pX(t))
		})),
		size: e.size,
		type: "Map"
	};
}
function lX(e) {
	return {
		name: e.name,
		type: "function"
	};
}
function uX(e, t) {
	if (t.seen.has(e)) return { type: "circular" };
	t.seen.add(e);
	let n = fX(e, t.maxEntries), r = GY(e, "constructor"), i = {
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
		let n = GY(e, t);
		typeof n == "string" && (i[t] = n);
	}
	if (t.maxDepth <= 0) return i;
	let a = {};
	for (let r of n) a[r] = oX(GY(e, r), pX(t));
	i.properties = a;
	let o = GY(e, "toObject");
	if (typeof o == "function") try {
		i.source = oX(o.call(e), pX(t));
	} catch (e) {
		i.source = {
			error: e instanceof Error ? e.message : String(e),
			type: "error"
		};
	}
	return i;
}
function dX(e) {
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
function fX(e, t) {
	return Object.keys(e).sort().slice(0, t);
}
function pX(e) {
	return {
		maxDepth: e.maxDepth - 1,
		maxEntries: e.maxEntries,
		seen: e.seen
	};
}
//#endregion
//#region src/module/debug/shape-inspector/index.ts
function mX() {
	localStorage.removeItem(LY), e(`${Y} | Cleared debug shape probes.`);
}
function hX() {
	return tX();
}
function gX(e, t = {}) {
	let n = yX(e, t);
	return xX(n), n;
}
function _X() {
	let t = tX();
	for (let e of ["init", "setup"]) {
		let n = t.filter((t) => t.hook === e);
		n.length && Hooks.once(e, () => {
			for (let t of n) bX(t, e);
		});
	}
	Hooks.once("ready", () => {
		let t = tX().filter((e) => (e.hook ?? "ready") === "ready");
		$Y() && e(`${Y} | Debug shape ready probes discovered: ${t.length}`, window.location.href);
		for (let e of t) bX(e, "ready");
	});
}
function vX(t) {
	let n = t.map(eX);
	localStorage.setItem(LY, JSON.stringify(n)), e(`${Y} | Stored ${n.length} debug shape probe(s). Reload Foundry to run init/setup probes.`);
}
function yX(e, t = {}, n) {
	let r = BY(t.maxDepth, 2, 6), i = BY(t.maxEntries, 12, 60), a = WY(e), o = {
		inspectedAt: (/* @__PURE__ */ new Date()).toISOString(),
		label: t.label || e,
		maxDepth: r,
		maxEntries: i,
		path: e,
		value: oX(a, {
			maxDepth: r,
			maxEntries: i,
			seen: /* @__PURE__ */ new WeakSet()
		})
	};
	return n && (o.hook = n), o;
}
function bX(e, n) {
	try {
		xX(yX(e.path, e, n));
	} catch (n) {
		t(`${Y} | Debug shape probe failed for "${e.path}".`, n);
	}
}
function xX(t) {
	e(`${Y} | Debug shape probe: ${t.label}`, JSON.stringify(t, null, 2));
}
//#endregion
//#region src/view/components/ApplicationShell.vue?vue&type=script&setup=true&lang.ts
var SX = ["aria-label"], CX = { class: "dui-card-body" }, wX = { class: "dui-card-title" }, TX = { key: 0 }, EX = {
	key: 0,
	class: "dui-card-actions"
}, DX = /* @__PURE__ */ M({
	__name: "ApplicationShell",
	props: {
		description: {},
		title: {}
	},
	setup(e) {
		return (t, n) => (F(), I("section", {
			"aria-label": e.title,
			class: "dui-card"
		}, [R("div", CX, [
			R("header", null, [
				R("h1", wX, O(e.title), 1),
				e.description ? (F(), I("p", TX, O(e.description), 1)) : V("", !0),
				Gr(t.$slots, "header")
			]),
			Gr(t.$slots, "default"),
			t.$slots.actions ? (F(), I("div", EX, [Gr(t.$slots, "actions")])) : V("", !0)
		])], 8, SX));
	}
}), OX = { class: "dui-list" }, kX = /* @__PURE__ */ M({
	__name: "DaisyExampleApp",
	setup(e) {
		let t = [
			"button",
			"badge",
			"card",
			"alert"
		];
		return (e, n) => (F(), L(DX, {
			description: "A quick visual check of the module's isolated Daisy component theme.",
			title: "Daisy Probe"
		}, {
			header: j(() => [...n[0] ||= [R("span", { class: "dui-badge dui-badge-primary" }, "Scoped", -1), R("span", { class: "dui-badge dui-badge-outline" }, "Foundry-safe", -1)]]),
			actions: j(() => [...n[1] ||= [R("span", { class: "dui-badge dui-badge-success" }, "Ready", -1)]]),
			default: j(() => [n[2] ||= R("div", { class: "dui-alert dui-alert-info" }, [R("span", null, "DaisyUI is available inside this Vue application root.")], -1), R("ul", OX, [(F(), I(P, null, N(t, (e) => R("li", {
				key: e,
				class: "dui-list-row"
			}, O(e), 1)), 64))])]),
			_: 1
		}));
	}
}), AX = class extends Vv {
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
		return kX;
	}
}, jX = { class: "dui-navbar-start app:min-w-0 app:flex-1" }, MX = { class: "app:min-w-0" }, NX = {
	"aria-label": "Current location",
	class: "dui-breadcrumbs app:py-0 app:text-sm"
}, PX = { class: "app:m-0 app:p-0" }, FX = { key: 0 }, IX = { key: 1 }, LX = { "aria-current": "page" }, RX = { class: "dui-navbar-end" }, zX = { class: "dui-dropdown-content dui-card dui-card-border app:z-30 app:w-52 app:bg-base-100" }, BX = { class: "dui-menu dui-menu-sm app:w-full" }, VX = ["disabled"], HX = { key: 0 }, UX = ["disabled"], WX = { key: 1 }, GX = ["disabled"], KX = /* @__PURE__ */ M({
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
			R("div", jX, [R("div", MX, [n[2] ||= R("h1", { class: "app:m-0 app:text-xl app:leading-tight" }, "Species Builder", -1), R("nav", NX, [R("ul", PX, [
				e.definitionName ? (F(), I("li", FX, [R("button", {
					class: "dui-btn dui-btn-link dui-btn-xs",
					type: "button",
					onClick: c
				}, " Species List ")])) : V("", !0),
				e.definitionName ? (F(), I("li", IX, [R("span", null, O(e.definitionName), 1)])) : V("", !0),
				R("li", null, [R("span", LX, O(e.contextLabel), 1)])
			])])])]),
			R("div", RX, [R("details", {
				ref_key: "actionsDropdown",
				ref: r,
				class: "dui-dropdown dui-dropdown-end"
			}, [n[6] ||= R("summary", { class: "dui-btn dui-btn-outline dui-btn-sm" }, [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-ellipsis"
			}), B(" Actions ")], -1), R("div", zX, [R("ul", BX, [
				R("li", { onClick: l }, [Gr(t.$slots, "actions", { dialogHost: i.value })]),
				R("li", null, [R("button", {
					disabled: e.isBusy,
					type: "button",
					onClick: s
				}, [...n[3] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-rotate-right"
				}, null, -1), B(" Reload ", -1)]], 8, VX)]),
				e.canManageDefinition ? (F(), I("li", HX, [R("button", {
					disabled: e.isBusy,
					type: "button",
					onClick: n[0] ||= (e) => o("duplicate")
				}, [...n[4] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-copy"
				}, null, -1), B(" Duplicate ", -1)]], 8, UX)])) : V("", !0),
				e.canManageDefinition ? (F(), I("li", WX, [R("button", {
					class: "app:text-error",
					disabled: e.isBusy,
					type: "button",
					onClick: n[1] ||= (e) => o("delete")
				}, [...n[5] ||= [R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-trash"
				}, null, -1), B(" Delete ", -1)]], 8, GX)])) : V("", !0)
			])])], 512)]),
			R("div", {
				ref_key: "portabilityDialogHost",
				ref: i
			}, null, 512)
		], 32));
	}
}), qX = {
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
}, JX = {
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
function YX(e) {
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
function XX(e, t) {
	return e.kind === "project" ? t.activeTab === e.tab && (e.tab !== "species" || !t.isEditorOpen) : !t.isEditorOpen || t.activeTab !== "species" ? !1 : e.kind === "editor" ? t.activeEditorTab === e.tab : t.activeEditorTab === "tables" && t.activeTableTab === e.tab;
}
function ZX(e, t) {
	return t.isBusy || e.kind !== "project" && !t.hasSelectedDefinition;
}
function QX(e) {
	return e.kind === "project" ? e.tab === "species" || e.tab === "species-table" ? e.tab : void 0 : e.tab;
}
function $X(e, t) {
	let n = {};
	for (let r of e) {
		if (r.scope === "species-table") {
			eZ(n, "species-table", r);
			continue;
		}
		eZ(n, "species", r), r.definitionIndex === t && eZ(n, r.scope === "subspecies" ? "subspecies" : r.section, r);
	}
	return n;
}
function eZ(e, t, n) {
	e[t] = Yh(e[t], n);
}
function tZ(e, t, n, r) {
	return e === "settings" ? {
		description: "Control optional authoring tools and sample definitions.",
		label: "Settings"
	} : e === "species-table" ? {
		description: "Configure the weighted world table WFRP uses to roll a character's species.",
		label: "Species Table"
	} : e === "wfrp-config" ? {
		description: "Review the WFRP config generated from the current draft.",
		label: "WFRP Config"
	} : t ? n === "tables" ? JX[r] : qX[n] : {
		description: "Choose a species to edit or create a new definition.",
		label: "Custom Species"
	};
}
//#endregion
//#region src/view/apps/species-builder/components/SpeciesBuilderValidationDot.vue?vue&type=script&setup=true&lang.ts
var nZ = ["title"], rZ = { class: "app:sr-only" }, iZ = /* @__PURE__ */ M({
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
		}, null, 2), R("span", rZ, O(A(Zh)(e.indicator)), 1)], 8, nZ)) : V("", !0);
	}
}), aZ = { class: "app:w-48 app:shrink-0" }, oZ = {
	"aria-label": "Species Builder sections",
	class: "app:sticky app:top-20"
}, sZ = { class: "dui-menu dui-menu-sm app:w-full app:rounded-box app:bg-base-200" }, cZ = { class: "dui-menu-title" }, lZ = [
	"aria-current",
	"disabled",
	"onClick"
], uZ = /* @__PURE__ */ M({
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
		let n = e, r = t, i = H(() => YX(n.showGeneratedConfigTab)), a = H(() => ({
			activeEditorTab: n.activeEditorTab,
			activeTableTab: n.activeTableTab,
			activeTab: n.activeTab,
			hasSelectedDefinition: n.hasSelectedDefinition,
			isBusy: n.isBusy,
			isEditorOpen: n.isEditorOpen
		}));
		async function o(e, t) {
			if (ZX(e, a.value)) return;
			let n = t.currentTarget instanceof HTMLElement ? t.currentTarget.closest(".wfrp4e-customizer-apps-root") : null;
			e.kind === "project" ? r("selectTab", e.tab) : e.kind === "editor" ? r("selectEditorTab", e.tab) : r("selectTableTab", e.tab), await jn(), n?.scrollTo({ top: 0 });
		}
		function s(e) {
			let t = QX(e);
			return t ? n.validationCounts[t] : void 0;
		}
		return (e, t) => (F(), I("aside", aZ, [R("nav", oZ, [R("ul", sZ, [(F(!0), I(P, null, N(i.value, (e) => (F(), I(P, { key: e.key }, [R("li", cZ, [R("span", null, O(e.label), 1)]), (F(!0), I(P, null, N(e.entries, (e) => (F(), I("li", { key: `${e.kind}-${e.tab}` }, [R("button", {
			"aria-current": A(XX)(e, a.value) ? "page" : void 0,
			class: D({ "dui-menu-active": A(XX)(e, a.value) }),
			disabled: A(ZX)(e, a.value),
			type: "button",
			onClick: (t) => o(e, t)
		}, [
			R("i", {
				"aria-hidden": "true",
				class: D(e.icon)
			}, null, 2),
			R("span", null, O(e.label), 1),
			z(iZ, { indicator: s(e) }, null, 8, ["indicator"])
		], 10, lZ)]))), 128))], 64))), 128))])])]));
	}
}), dZ = ["onKeydown"], fZ = { class: "dui-modal-box app:max-w-3xl" }, pZ = { class: "app:flex app:items-start app:justify-between app:gap-4" }, mZ = { class: "app:flex app:flex-wrap app:gap-2" }, hZ = {
	key: 0,
	class: "dui-badge dui-badge-error"
}, gZ = {
	key: 1,
	class: "dui-badge dui-badge-warning"
}, _Z = { class: "dui-list app:max-h-96 app:overflow-y-auto" }, vZ = ["autofocus", "onClick"], yZ = {
	key: 0,
	"aria-hidden": "true",
	class: "fa-solid fa-circle-exclamation app:text-error"
}, bZ = {
	key: 1,
	"aria-hidden": "true",
	class: "fa-solid fa-triangle-exclamation app:text-warning"
}, xZ = { class: "app:flex app:min-w-0 app:flex-1 app:flex-col app:items-start" }, SZ = { class: "app:sr-only" }, CZ = /* @__PURE__ */ M({
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
		}, [R("section", fZ, [
			R("header", pZ, [R("div", null, [R("div", mZ, [c.value > 0 ? (F(), I("span", hZ, O(c.value) + " " + O(c.value === 1 ? "error" : "errors"), 1)) : V("", !0), l.value > 0 ? (F(), I("span", gZ, O(l.value) + " " + O(l.value === 1 ? "warning" : "warnings"), 1)) : V("", !0)]), t[1] ||= R("h2", { id: "species-builder-validation-title" }, "Character-Creation Validation", -1)]), R("button", {
				"aria-label": "Close validation summary",
				class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square",
				type: "button",
				onClick: u
			}, [...t[2] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-xmark"
			}, null, -1)]])]),
			t[4] ||= R("p", { id: "species-builder-validation-description" }, " Errors mark reachable data that prevents character creation. Warnings mark playable incomplete data or inactive problems. Choose an item to open the most relevant editor section. ", -1),
			R("ul", _Z, [(F(!0), I(P, null, N(s.value, (e, n) => (F(), I("li", {
				key: `${e.issue.code}-${n}`,
				class: "dui-list-row app:p-0"
			}, [R("button", {
				autofocus: n === 0,
				class: D(["dui-btn dui-btn-outline app:h-auto app:w-full app:justify-start app:whitespace-normal app:p-3 app:text-left", A(Qh)(e.issue) === "error" ? "dui-btn-error" : "dui-btn-warning"]),
				type: "button",
				onClick: (t) => d(e.issue)
			}, [
				A(Qh)(e.issue) === "error" ? (F(), I("i", yZ)) : (F(), I("i", bZ)),
				R("span", xZ, [
					R("strong", null, O(e.context), 1),
					R("span", SZ, O(A(Qh)(e.issue) === "error" ? "Error:" : "Warning:"), 1),
					R("span", null, O(e.issue.message), 1)
				]),
				t[3] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-chevron-right"
				}, null, -1)
			], 10, vZ)]))), 128))]),
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
		}, "Close")], -1)], 40, dZ));
	}
});
//#endregion
//#region src/view/apps/species-builder/components/validation/use-validation-summary.ts
function wZ(e) {
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
var TZ = { class: "dui-card dui-card-border dui-card-sm" }, EZ = { class: "dui-card-body" }, DZ = { class: "app:flex app:items-start app:justify-between app:gap-4" }, OZ = { class: "dui-card-actions app:items-center" }, kZ = ["disabled"], AZ = {
	key: 0,
	class: "dui-input app:w-full"
}, jZ = {
	key: 1,
	role: "status",
	class: "dui-alert dui-alert-info"
}, MZ = {
	key: 2,
	class: "app:flex app:flex-col app:gap-4"
}, NZ = { "aria-labelledby": "species-builder-custom-species-heading" }, PZ = { class: "app:flex app:items-center app:justify-between app:gap-2" }, FZ = { class: "dui-badge dui-badge-sm" }, IZ = {
	key: 0,
	role: "status",
	class: "dui-alert"
}, LZ = {
	key: 1,
	class: "dui-list"
}, RZ = { "aria-labelledby": "species-builder-installed-species-heading" }, zZ = { class: "app:flex app:items-center app:justify-between app:gap-2" }, BZ = { class: "dui-badge dui-badge-ghost dui-badge-sm" }, VZ = {
	key: 0,
	role: "status",
	class: "dui-alert"
}, HZ = {
	key: 1,
	class: "dui-list"
}, UZ = {
	key: 0,
	"aria-labelledby": "species-builder-unavailable-species-heading"
}, WZ = { class: "app:flex app:items-center app:justify-between app:gap-2" }, GZ = { class: "dui-badge dui-badge-warning dui-badge-sm" }, KZ = { class: "dui-list" }, qZ = /* @__PURE__ */ M({
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
			return e.key.trim() || Iw(e);
		}
		function m(e) {
			let t = a.value;
			return !t || e.name.toLocaleLowerCase().includes(t) || e.key.toLocaleLowerCase().includes(t);
		}
		return (t, n) => (F(), I("section", TZ, [R("div", EZ, [
			R("header", DZ, [n[3] ||= R("div", null, [R("h2", {
				id: "species-builder-species-list-heading",
				class: "dui-card-title",
				tabindex: "-1"
			}, " Species Catalog "), R("p", { class: "app:m-0" }, " Manage your custom species or inspect species supplied by WFRP and active modules. ")], -1), R("div", OZ, [R("button", {
				class: "dui-btn dui-btn-primary",
				disabled: e.isDisabled,
				type: "button",
				onClick: n[0] ||= (e) => r("addSpecies")
			}, [...n[2] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-plus"
			}, null, -1), B(" New Species ", -1)]], 8, kZ)])]),
			e.definitions.length > 0 ? (F(), I("label", AZ, [n[4] ||= R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-magnifying-glass"
			}, null, -1), Un(R("input", {
				"onUpdate:modelValue": n[1] ||= (e) => i.value = e,
				type: "search",
				placeholder: "Filter by species name or key"
			}, null, 512), [[Go, i.value]])])) : V("", !0),
			e.definitions.length === 0 ? (F(), I("div", jZ, [...n[5] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, "No species yet. Add one to begin.", -1)]])) : (F(), I("div", MZ, [
				R("section", NZ, [R("header", PZ, [n[6] ||= R("div", null, [R("h3", {
					id: "species-builder-custom-species-heading",
					class: "dui-card-title"
				}, " Custom Species "), R("p", { class: "app:m-0" }, "Species owned and editable by this world.")], -1), R("span", FZ, O(d.value), 1)]), s.value.length === 0 ? (F(), I("div", IZ, [n[7] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-circle-info"
				}, null, -1), R("span", null, O(a.value ? "No custom species match this filter." : "No custom species yet."), 1)])) : (F(), I("ul", LZ, [(F(!0), I(P, null, N(s.value, (t) => (F(), L(FO, {
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
				R("section", RZ, [R("header", zZ, [n[8] ||= R("div", null, [R("h3", {
					id: "species-builder-installed-species-heading",
					class: "dui-card-title"
				}, " Installed Species "), R("p", { class: "app:m-0" }, " Read-only reference data. You can add custom subspecies to these entries. ")], -1), R("span", BZ, O(u.value), 1)]), c.value.length === 0 ? (F(), I("div", VZ, [n[9] ||= R("i", {
					"aria-hidden": "true",
					class: "fa-solid fa-circle-info"
				}, null, -1), R("span", null, O(a.value ? "No installed species match this filter." : "No installed species were found."), 1)])) : (F(), I("ul", HZ, [(F(!0), I(P, null, N(c.value, (t) => (F(), L(FO, {
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
				l.value.length > 0 ? (F(), I("section", UZ, [R("header", WZ, [n[10] ||= R("div", null, [R("h3", {
					id: "species-builder-unavailable-species-heading",
					class: "dui-card-title"
				}, " Unavailable Sources "), R("p", { class: "app:m-0" }, " The source package is inactive; custom variants are retained for recovery. ")], -1), R("span", GZ, O(l.value.length), 1)]), R("ul", KZ, [(F(!0), I(P, null, N(l.value, (t) => (F(), L(FO, {
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
}), JZ = {
	key: 0,
	id: "species-builder-panel-settings",
	"aria-label": "Species Builder settings",
	role: "region"
}, YZ = {
	key: 1,
	id: "species-builder-panel-species-table",
	"aria-label": "Random Species table",
	role: "region"
}, XZ = {
	key: 2,
	id: "species-builder-panel-wfrp-config",
	"aria-label": "Generated WFRP configuration",
	role: "region"
}, ZZ = {
	key: 3,
	id: "species-builder-panel-species",
	"aria-label": "Species definitions",
	role: "region"
}, QZ = /* @__PURE__ */ M({
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
		return (t, u) => e.activeTab === "settings" ? (F(), I("section", JZ, [z(Tv, {
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
		])])) : e.activeTab === "species-table" ? (F(), I("section", YZ, [z(Jk, {
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
		])])) : e.activeTab === "wfrp-config" ? (F(), I("section", XZ, [z(uA, { "generated-config-text": A(r).generatedConfigText }, null, 8, ["generated-config-text"])])) : (F(), I("section", ZZ, [z(qZ, {
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
}), $Z = { class: "app:mb-3 app:flex app:flex-col app:gap-2" }, eQ = { class: "app:flex app:flex-wrap app:items-center app:gap-2" }, tQ = { class: "dui-card-title" }, nQ = { class: "app:m-0" }, rQ = {
	key: 0,
	class: "dui-alert dui-alert-info",
	role: "note"
}, iQ = {
	key: 1,
	class: "dui-alert dui-alert-warning",
	role: "alert"
}, aQ = {
	key: 1,
	role: "status",
	class: "dui-alert dui-alert-warning"
}, oQ = /* @__PURE__ */ M({
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
		let n = e, r = t, i = H(() => tZ("species", !0, n.activeEditorTab, n.activeTableTab)), a = H(() => n.activeEditorTab !== "subspecies" && n.definition?.origin === "runtime" && !n.definition.runtimeUnavailable), o = H(() => n.activeEditorTab !== "subspecies" && n.definition?.runtimeUnavailable);
		return (t, n) => (F(), I("section", null, [R("header", $Z, [
			R("div", eQ, [R("h2", tQ, O(i.value.label), 1), e.definition?.origin === "runtime" ? (F(), I("span", {
				key: 0,
				class: D(["dui-badge dui-badge-sm", e.definition.runtimeUnavailable ? "dui-badge-warning" : "dui-badge-ghost"])
			}, [R("i", {
				"aria-hidden": "true",
				class: D(e.definition.runtimeUnavailable ? "fa-solid fa-triangle-exclamation" : "fa-solid fa-lock")
			}, null, 2), B(" " + O(e.definition.runtimeUnavailable ? "Unavailable source" : "Installed species"), 1)], 2)) : V("", !0)]),
			R("p", nQ, O(i.value.description), 1),
			a.value ? (F(), I("div", rQ, [...n[34] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-circle-info"
			}, null, -1), R("span", null, " This species comes from WFRP or an active module, so its setup is read-only. You can inspect every section and add editable custom variants from Subspecies. ", -1)]])) : o.value ? (F(), I("div", iQ, [...n[35] ||= [R("i", {
				"aria-hidden": "true",
				class: "fa-solid fa-triangle-exclamation"
			}, null, -1), R("span", null, " This species source is no longer active. Its saved custom variants are preserved until the source returns. ", -1)]])) : V("", !0)
		]), e.definition ? (F(), L(tk, {
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
		])) : (F(), I("section", aQ, "No species selected."))]));
	}
}), sQ = ["aria-busy"], cQ = { class: "app:flex app:flex-1 app:items-start app:gap-3 app:p-3" }, lQ = { class: "app:flex app:min-w-0 app:flex-1 app:flex-col app:gap-3" }, uQ = /* @__PURE__ */ M({
	__name: "SpeciesBuilderApp",
	props: {
		bridge: {},
		onSettingsSaved: { type: Function }
	},
	setup(e) {
		let t = e, n = Tm(t.bridge, { onSettingsSaved: t.onSettingsSaved }), r = /* @__PURE__ */ k("species"), i = /* @__PURE__ */ k(!1), a = /* @__PURE__ */ k("details"), o = /* @__PURE__ */ k("careerTable"), s = Jh(n), c = H(() => n.isLoading.value || n.isSaving.value), l = H(() => i.value && n.selectedDefinition.value?.origin === "custom"), u = H(() => tZ(r.value, i.value, a.value, o.value)), d = H(() => i.value ? n.selectedDefinition.value?.name.trim() || n.selectedDefinition.value?.key.trim() || "Untitled Species" : ""), f = H(() => Ml(n.definitions.value).map((e) => e.key)), { close: p, isOpen: m, navigationRequest: h, open: g, openForDefinition: _, selectIssue: v, summaryIssues: y } = wZ({
			definitions: n.definitions,
			issues: n.validationIssues,
			openEditorTab: oe,
			openTableTab: se,
			selectDefinition: n.selectDefinition,
			selectProjectTab: ce
		}), b = H(() => n.blockingValidationIssues.value.length > 0 || n.blockingSpeciesTableValidationMessages.value.length > 0), x = H(() => ({
			errors: y.value.filter((e) => e.severity === "error").length,
			warnings: y.value.filter((e) => e.severity === "warning").length
		})), S = H(() => x.value.warnings > 0), C = H(() => n.validationIssues.value.filter((e) => e.definitionIndex === n.selectedIndex.value)), ee = H(() => $X(n.validationIssues.value, n.selectedIndex.value)), te = H(() => !!n.loadError.value || !!n.saveError.value || !!n.message.value || n.validationIssues.value.length > 0 || b.value), { confirmPendingDelete: ne, pendingDelete: re, requestDeleteDefinition: ie, requestDeleteSubspecies: w } = aC({
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
		let le = sC(n, {
			requestDeleteSubspecies: w,
			requestSave: s.requestSave
		});
		return (e, t) => (F(), I("section", {
			class: "app:flex app:min-h-full app:flex-col",
			"aria-busy": c.value,
			onKeydown: T,
			onKeyup: T
		}, [
			z(KX, {
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
			z(iC, {
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
			z(CZ, {
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
			R("main", cQ, [z(uZ, {
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
			]), R("div", lQ, [te.value ? (F(), L(jm, {
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
			])) : V("", !0), i.value ? (F(), L(oQ, Aa({
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
			])) : (F(), L(QZ, {
				key: 1,
				"active-tab": r.value,
				"is-disabled": c.value,
				onEditSpecies: ae
			}, null, 8, ["active-tab", "is-disabled"]))])]),
			z(JE, {
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
		], 40, sQ));
	}
}), dQ = class extends Vv {
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
		return uQ;
	}
	getVueProps() {
		return {
			bridge: YS,
			onSettingsSaved: () => {
				this.#e = !0;
			}
		};
	}
	async _preClose(e) {
		let t = this.#e;
		this.#e = !1, t && await ZS() && window.location.reload(), await super._preClose(e);
	}
}, fQ = { class: "dui-list" }, pQ = { class: "dui-list-row" }, mQ = { class: "dui-list-row" }, hQ = { class: "dui-list-row" }, gQ = /* @__PURE__ */ M({
	__name: "WorkbenchApp",
	props: {
		openDaisyProbe: { type: Function },
		openNpcBuilder: { type: Function },
		openSpeciesBuilder: { type: Function }
	},
	setup(e) {
		return (t, n) => (F(), L(DX, {
			description: "Open a focused WFRP4e authoring workflow.",
			title: "Customizer Workbench"
		}, {
			default: j(() => [R("ul", fQ, [
				R("li", pQ, [n[3] ||= R("div", { class: "dui-list-col-grow" }, [R("strong", null, "NPC Builder"), R("p", null, "Build an NPC from a base Actor, Careers, traits, trappings, and spells.")], -1), R("button", {
					"aria-label": "Open NPC Builder",
					class: "dui-btn dui-btn-primary",
					type: "button",
					onClick: n[0] ||= (...t) => e.openNpcBuilder && e.openNpcBuilder(...t)
				}, " Open ")]),
				R("li", mQ, [n[4] ||= R("div", { class: "dui-list-col-grow" }, [R("strong", null, "Species Builder"), R("p", null, "Author custom species and apply them to WFRP character generation.")], -1), R("button", {
					"aria-label": "Open Species Builder",
					class: "dui-btn",
					type: "button",
					onClick: n[1] ||= (...t) => e.openSpeciesBuilder && e.openSpeciesBuilder(...t)
				}, " Open ")]),
				R("li", hQ, [n[5] ||= R("div", { class: "dui-list-col-grow" }, [R("strong", null, "DaisyUI Probe"), R("p", null, "Check the module's scoped component theme.")], -1), R("button", {
					"aria-label": "Open DaisyUI Probe",
					class: "dui-btn dui-btn-ghost",
					type: "button",
					onClick: n[2] ||= (...t) => e.openDaisyProbe && e.openDaisyProbe(...t)
				}, " Open ")])
			])]),
			_: 1
		}));
	}
}), _Q = class extends Vv {
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
		return gQ;
	}
	getVueProps() {
		return {
			openDaisyProbe: () => new AX().render(!0),
			openNpcBuilder: () => new Sq().render(!0),
			openSpeciesBuilder: () => new jA().render(!0)
		};
	}
};
//#endregion
//#region src/module/register-module-menus.ts
function vQ() {
	game.settings.registerMenu(Y, "workbench", {
		hint: `Open the ${Xg} workbench.`,
		icon: "fa-solid fa-screwdriver-wrench",
		label: "Open Workbench",
		name: Xg,
		restricted: !0,
		type: _Q
	}), game.settings.registerMenu(Y, "npc-builder", {
		hint: "Build a WFRP4e NPC from a base Actor and Career items.",
		icon: "fa-solid fa-user-plus",
		label: "Open NPC Builder",
		name: "WFRP4e NPC Builder",
		restricted: !0,
		type: Sq
	}), game.settings.registerMenu(Y, "species-builder", {
		hint: "Open the focused species directory and its linked authoring applications.",
		icon: "fa-solid fa-people-group",
		label: "Open Species Builder",
		name: "WFRP4e Species Builder",
		restricted: !0,
		type: jA
	}), game.settings.registerMenu(Y, "species-builder-legacy", {
		hint: "Open the original all-in-one Species Builder application.",
		icon: "fa-solid fa-window-restore",
		label: "Open Legacy Species Builder",
		name: "Legacy WFRP4e Species Builder",
		restricted: !0,
		type: dQ
	}), game.settings.registerMenu(Y, "daisy-example", {
		hint: "Open a small isolated DaisyUI component probe.",
		icon: "fa-solid fa-flask",
		label: "Open Daisy Probe",
		name: "WFRP4e Daisy Probe",
		restricted: !0,
		type: AX
	});
}
//#endregion
//#region src/module/register-module-settings.ts
function yQ() {
	WW(), hy();
}
//#endregion
//#region src/functions/item-grants/wfrp-grant-effect.ts
var bQ = "generatedGrantItemsEffect", xQ = {
	grantMode: "all",
	lifetime: "linked-to-effect",
	ownerAction: "keep"
};
function SQ(e) {
	let t = e.recipe ?? xQ;
	CQ(t);
	let n = e.items.map((e) => e.uuid);
	return {
		changes: [],
		description: TQ(e.effectName, e.items, t),
		disabled: !1,
		flags: { [e.flagScope]: {
			[bQ]: !0,
			itemUuids: n,
			recipe: t
		} },
		img: e.items[0]?.img ?? "icons/svg/aura.svg",
		name: e.effectName,
		system: {
			scriptData: [{
				label: e.effectName,
				script: wQ(n, t),
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
function CQ(e) {
	if (e.lifetime === "linked-to-effect" && e.ownerAction === "delete-after-grant") throw Error("Self-removing grant effects must create detached item copies.");
}
function wQ(e, t) {
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
function TQ(e, t, n) {
	let r = EQ(e), i = t.map((e) => `<li>${EQ(e.name)}</li>`).join("");
	return `<p><strong>${r}</strong>: grants item copies; ${n.lifetime === "linked-to-effect" ? "granted item copies are removed with this effect" : "granted item copies remain after this effect is removed"}.${n.ownerAction === "delete-after-grant" ? " The source Item removes itself after granting." : ""}</p><ul>${i}</ul>`;
}
function EQ(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
//#endregion
//#region src/view/apps/grant-builder/GrantBuilderApp.vue?vue&type=script&setup=true&lang.ts
var DQ = { class: "dui-card dui-card-border dui-card-sm" }, OQ = { class: "dui-card-body" }, kQ = { class: "dui-list" }, AQ = {
	key: 0,
	class: "dui-list-row"
}, jQ = ["src"], MQ = { class: "dui-list-col-grow" }, NQ = ["title", "onClick"], PQ = { class: "dui-card dui-card-border dui-card-sm" }, FQ = { class: "dui-card-body" }, IQ = { class: "dui-fieldset" }, LQ = { class: "dui-label" }, RQ = ["value"], zQ = { class: "dui-card-body" }, BQ = { class: "dui-fieldset" }, VQ = { class: "dui-label" }, HQ = ["checked"], UQ = { class: "dui-label" }, WQ = ["checked"], GQ = { class: "dui-label" }, KQ = ["checked", "disabled"], qQ = ["disabled"], JQ = /* @__PURE__ */ M({
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
		return (n, r) => (F(), L(DX, {
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
			}, " Create Grant Effect ", 8, qQ)]),
			default: j(() => [
				R("section", DQ, [R("div", OQ, [
					r[8] ||= R("h2", { class: "dui-card-title" }, "Granted Items", -1),
					z(DC, {
						description: "World and compendium Items can be added one at a time.",
						"manual-entry-trigger": "button",
						title: "Drop Items Here",
						onDropData: e.onDropData
					}, null, 8, ["onDropData"]),
					R("ul", kQ, [e.items.length === 0 ? (F(), I("li", AQ, "No granted items configured.")) : (F(!0), I(P, { key: 1 }, N(e.items, (t) => (F(), I("li", {
						key: t.uuid,
						class: "dui-list-row"
					}, [
						t.img ? (F(), I("img", {
							key: 0,
							alt: "",
							src: t.img
						}, null, 8, jQ)) : V("", !0),
						R("div", MQ, [R("strong", null, O(t.name), 1), R("small", null, O(t.uuid), 1)]),
						R("button", {
							class: "dui-btn dui-btn-ghost dui-btn-sm dui-btn-square",
							type: "button",
							title: `Remove ${t.name}`,
							onClick: (n) => e.onRemoveItem(t.uuid)
						}, [...r[7] ||= [R("i", {
							class: "fa-solid fa-times",
							"aria-hidden": "true"
						}, null, -1)]], 8, NQ)
					]))), 128))])
				])]),
				R("section", PQ, [R("div", FQ, [R("fieldset", IQ, [r[10] ||= R("legend", { class: "dui-fieldset-legend" }, "Effect", -1), R("label", LQ, [r[9] ||= R("span", null, "Effect name", -1), R("input", {
					class: "dui-input",
					value: e.effectName,
					type: "text",
					onInput: r[0] ||= (n) => e.onEffectNameInput(t(n))
				}, null, 40, RQ)])])])]),
				R("form", {
					class: "dui-card dui-card-border dui-card-sm",
					onSubmit: r[4] ||= Zo(() => {}, ["prevent"])
				}, [R("div", zQ, [R("fieldset", BQ, [
					r[14] ||= R("legend", { class: "dui-fieldset-legend" }, "Granted Item Lifetime", -1),
					R("label", VQ, [R("input", {
						class: "dui-radio",
						name: "grant-lifetime",
						type: "radio",
						value: "linked-to-effect",
						checked: e.lifetime === "linked-to-effect",
						onChange: r[1] ||= (t) => e.onLifetimeChange("linked-to-effect")
					}, null, 40, HQ), r[11] ||= R("span", null, [
						R("strong", null, "Linked to this effect"),
						R("br"),
						B(" Granted Items are removed when this effect is deleted. ")
					], -1)]),
					R("label", UQ, [R("input", {
						class: "dui-radio",
						name: "grant-lifetime",
						type: "radio",
						value: "detached",
						checked: e.lifetime === "detached",
						onChange: r[2] ||= (t) => e.onLifetimeChange("detached")
					}, null, 40, WQ), r[12] ||= R("span", null, [
						R("strong", null, "Detached copies"),
						R("br"),
						B(" Granted Items remain after this effect or source Item is removed. ")
					], -1)]),
					R("label", GQ, [R("input", {
						class: "dui-checkbox",
						type: "checkbox",
						checked: e.ownerAction === "delete-after-grant",
						disabled: e.lifetime !== "detached",
						onChange: r[3] ||= (t) => e.onOwnerActionChange(e.ownerAction === "delete-after-grant" ? "keep" : "delete-after-grant")
					}, null, 40, KQ), r[13] ||= B(" Remove the source Item after granting. ", -1)])
				])])], 32)
			]),
			_: 1
		}, 8, ["description"]));
	}
});
//#endregion
//#region src/module/wfrp4e/grant/item-documents.ts
function YQ(e) {
	let t = e.dataTransfer?.getData("text/plain") ?? "";
	if (!t) return null;
	try {
		return zb(t).type === "Item" ? t : null;
	} catch {
		return null;
	}
}
async function XQ(e) {
	let t = zb(e);
	if (!t.uuid) throw Error("Drop an Item with a resolvable UUID.");
	return Lb(await fromUuid(t.uuid), "The dropped Item was not found.");
}
function ZQ(e) {
	let t = {
		name: e.name,
		uuid: e.uuid
	};
	return e.img && (t.img = e.img), t;
}
//#endregion
//#region src/module/apps/grant-builder/GrantBuilderApplication.ts
var QQ = "detached", $Q = class extends Vv {
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
		return JQ;
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
		this.#r = e, e !== QQ && (this.#i = "keep"), this.render();
	}
	changeOwnerAction(e) {
		this.#i = e, this.render();
	}
	removeItem(e) {
		this.#n = this.#n.filter((t) => t.uuid !== e), this.render();
	}
	async handleDrop(e) {
		try {
			let t = await XQ(e);
			if (t.uuid === this.carrierItem.uuid) throw Error("An Item cannot grant itself.");
			if (this.#n.some((e) => e.uuid === t.uuid)) {
				ui.notifications?.warn?.(`"${t.name}" is already in this grant effect.`);
				return;
			}
			this.#n = [...this.#n, ZQ(t)], this.updateDefaultEffectName(), this.render();
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
			}, n = SQ({
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
}, e$ = new Set(["talent", "trait"]), t$ = /* @__PURE__ */ new WeakSet(), n$ = !1, r$ = "wfrp4e-customizer-grant-builder-button", i$ = [
	"section[data-application-part=\"effects\"].active",
	"section[data-tab=\"effects\"].active",
	".tab[data-tab=\"effects\"].active",
	".tab.effects.active"
].join(","), a$ = [
	"section[data-application-part=\"effects\"]",
	"section[data-tab=\"effects\"]",
	".tab[data-tab=\"effects\"]",
	".tab.effects"
].join(",");
function o$() {
	n$ || (n$ = !0, Hooks.on("renderApplicationV2", (e, t) => {
		if (!(t instanceof HTMLElement)) return;
		let n = u$(e);
		!n || !e$.has(n.type) || (s$(n, t), c$(n, t));
	}));
}
function s$(e, t) {
	t$.has(t) || (t$.add(t), t.addEventListener("dragover", (e) => {
		d$(t, e.target) && (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "copy"));
	}, !0), t.addEventListener("drop", (n) => {
		l$(e, t, n);
	}, !0));
}
function c$(e, t) {
	if (t.querySelector(`.${r$}`)) return;
	let n = p$(t, { includeInactive: !0 });
	if (!n) return;
	let r = document.createElement("div");
	r.classList.add("wfrp4e-customizer-grant-builder-toolbar");
	let i = document.createElement("button");
	i.type = "button", i.classList.add(r$), i.title = "Open the advanced item grant builder", i.innerHTML = "<i class=\"fa-solid fa-sitemap\" aria-hidden=\"true\"></i><span>Grant Builder</span>", i.addEventListener("click", () => {
		new $Q(e).render(!0);
	}), r.append(i), n.prepend(r);
}
async function l$(e, t, n) {
	if (!d$(t, n.target)) return;
	let r = YQ(n);
	if (r) {
		n.preventDefault(), n.stopPropagation();
		try {
			let t = await XQ(r);
			if (t.uuid === e.uuid) throw Error("An Item cannot grant itself.");
			let n = ZQ(t), i = SQ({
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
function u$(e) {
	if (typeof e != "object" || !e) return null;
	let t = "item" in e ? e.item : void 0;
	if (Fb(t)) return t;
	let n = "document" in e ? e.document : void 0;
	return Fb(n) ? n : null;
}
function d$(e, t) {
	return !(t instanceof Element) || !e.contains(t) ? !1 : !!f$(e);
}
function f$(e) {
	return e.querySelector(i$) || p$(e, { includeInactive: !1 });
}
function p$(e, t) {
	return [...e.querySelectorAll(a$)].find((e) => t.includeInactive || e.offsetParent !== null) ?? null;
}
//#endregion
//#region src/module/api/create-module-api.ts
function m$() {
	return {
		clearDebugShapeProbes: mX,
		estimateNpcXp: TJ,
		getDebugShapeProbes: hX,
		inspectPath: gX,
		listNpcAutoAdvanceStrategies: JN,
		openActorPortraitGallery: eJ,
		async openDaisyExample() {
			await new AX().render(!0);
		},
		async openNpcBuilder() {
			await new Sq().render(!0);
		},
		async openSpeciesBuilder() {
			await new jA().render(!0);
		},
		async openWorkbench() {
			await new _Q().render(!0);
		},
		rebuildSpeciesCareerTables: async () => await bb(void 0, { force: !0 }),
		registerNpcAutoAdvanceStrategy: qN,
		setDebugShapeProbes: vX
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function h$() {
	let e = game.modules.get(Y);
	if (!e) throw Error(`Foundry module registry entry was not found for ${Y}.`);
	e.api = m$();
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function g$() {
	_X(), Hooks.once("init", () => {
		e(`${Y} | Initializing`), yQ(), game.system.id === "wfrp4e" && (pb(), BJ(), sJ(), jJ(), cY(), o$()), vQ(), Tq();
	}), Hooks.once("ready", () => {
		if (game.system.id !== "wfrp4e") {
			t(`${Y} | Loaded outside ${Zg}; skipping module API registration.`);
			return;
		}
		_$();
	});
}
async function _$() {
	await Promise.resolve();
	try {
		let e = gy(), t = e.correctExistingWfrpSpecies ? EY() : { removedTopLevelSpeciesKeys: [] };
		await mb(e.definitions.map(({ key: e }) => e), t.removedTopLevelSpeciesKeys), await VJ();
	} catch (e) {
		t(`${Y} | Runtime species catalog could not be prepared: ${e instanceof Error ? e.message : "Unknown runtime adaptation error."}`);
	}
	h$(), pU(), jU(), bb().catch((e) => {
		t(`${Y} | Species Builder career tables could not be synchronized: ${e instanceof Error ? e.message : "Unknown career table sync error."}`);
	}), WS(), e(`${Y} | Ready`);
}
//#endregion
//#region src/main.ts
g$();
//#endregion

//# sourceMappingURL=wfrp4e-customizer-apps.mjs.map