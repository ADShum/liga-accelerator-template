/* eslint-disable */
function o() {
  let o = window; let t = document; if (!('scrollBehavior' in t.documentElement.style && !0 !== o.__forceSmoothScrollPolyfill__)) {
    let l; let e = o.HTMLElement || o.Element; var r = 468; var i = {scroll: o.scroll || o.scrollTo, scrollBy: o.scrollBy, elementScroll: e.prototype.scroll || n, scrollIntoView: e.prototype.scrollIntoView}; var s = o.performance && o.performance.now ? o.performance.now.bind(o.performance) : Date.now; var c = (l = o.navigator.userAgent, new RegExp(['MSIE ', 'Trident/', 'Edge/'].join('|')).test(l) ? 1 : 0); o.scroll = o.scrollTo = function () {
      void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? h.call(o, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : o.scrollY || o.pageYOffset) : i.scroll.call(o, void 0 !== arguments[0].left ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : o.scrollY || o.pageYOffset));
    }, o.scrollBy = function () {
      void 0 !== arguments[0] && (f(arguments[0]) ? i.scrollBy.call(o, void 0 !== arguments[0].left ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : h.call(o, t.body, ~~arguments[0].left + (o.scrollX || o.pageXOffset), ~~arguments[0].top + (o.scrollY || o.pageYOffset)));
    }, e.prototype.scroll = e.prototype.scrollTo = function () {
      if (void 0 !== arguments[0]) {
        if (!0 !== f(arguments[0])) {
          let o = arguments[0].left; let t = arguments[0].top; h.call(this, this, void 0 === o ? this.scrollLeft : ~~o, void 0 === t ? this.scrollTop : ~~t);
        } else {
          if (typeof arguments[0] === 'number' && void 0 === arguments[1]) {
            throw new SyntaxError('Value could not be converted');
          } i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop);
        }
      }
    }, e.prototype.scrollBy = function () {
      void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? this.scroll({left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior}) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop));
    }, e.prototype.scrollIntoView = function () {
      if (!0 !== f(arguments[0])) {
        let l = function (o) {
          for (;o !== t.body && !1 === (e = p(l = o, 'Y') && a(l, 'Y'), r = p(l, 'X') && a(l, 'X'), e || r);) {
            o = o.parentNode || o.host;
          } let l; let e; let r; return o;
        }(this); let e = l.getBoundingClientRect(); let r = this.getBoundingClientRect(); l !== t.body ? (h.call(this, l, l.scrollLeft + r.left - e.left, l.scrollTop + r.top - e.top), o.getComputedStyle(l).position !== 'fixed' && o.scrollBy({left: e.left, top: e.top, behavior: 'smooth'})) : o.scrollBy({left: r.left, top: r.top, behavior: 'smooth'});
      } else {
        i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
      }
    };
  } function n(o, t) {
    this.scrollLeft = o, this.scrollTop = t;
  } function f(o) {
    if (o === null || typeof o !== 'object' || void 0 === o.behavior || o.behavior === 'auto' || o.behavior === 'instant') {
      return !0;
    } if (typeof o === 'object' && o.behavior === 'smooth') {
      return !1;
    } throw new TypeError('behavior member of ScrollOptions ' + o.behavior + ' is not a valid value for enumeration ScrollBehavior.');
  } function p(o, t) {
    return t === 'Y' ? o.clientHeight + c < o.scrollHeight : t === 'X' ? o.clientWidth + c < o.scrollWidth : void 0;
  } function a(t, l) {
    let e = o.getComputedStyle(t, null)['overflow' + l]; return e === 'auto' || e === 'scroll';
  } function d(t) {
    let l; let e; let i; let c; let n = (s() - t.startTime) / r; c = n = n > 1 ? 1 : n, l = 0.5 * (1 - Math.cos(Math.PI * c)), e = t.startX + (t.x - t.startX) * l, i = t.startY + (t.y - t.startY) * l, t.method.call(t.scrollable, e, i), e === t.x && i === t.y || o.requestAnimationFrame(d.bind(o, t));
  } function h(l, e, r) {
    let c; let f; let p; let a; let h = s(); l === t.body ? (c = o, f = o.scrollX || o.pageXOffset, p = o.scrollY || o.pageYOffset, a = i.scroll) : (c = l, f = l.scrollLeft, p = l.scrollTop, a = n), d({scrollable: c, method: a, startTime: h, startX: f, startY: p, x: e, y: r});
  }
}

export {o as smoothScroll};
