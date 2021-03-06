/**
 * 
 */
; (function (win, doc) {
    // 获取不同设备的html的font-size值
    var docEl = doc.documentElement || document.body,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', //orientationchange事件判断方向
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(window, document);

/**
 * 
 */
! function (i) {
    function a(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return i[e].call(t.exports, t, t.exports, a),
            t.loaded = !0,
            t.exports
    }
    var n = {};
    a.m = i, a.c = n, a.p = "", a(0)
}([function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var v = window;
    t.default = v.flex = function (e, t, i) {
        var a = t || 100,
            n = i || 1,
            r = v.document,
            o = navigator.userAgent,
            d = o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
            l = o.match(/U3\/((\d+|\.){5,})/i),
            p = l && 80 <= parseInt(l[1].split(".").join(""), 10),
            c = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
            s = v.devicePixelRatio || 1;
        c || d && 534 < d[1] || p || (s = 1);
        var u = e ? 1 : 1 / s,
            m = r.querySelector('meta[name="viewport"]');
        m || ((m = r.createElement("meta")).setAttribute("name", "viewport"), r.head.appendChild(m)), m.setAttribute("content", "width=device-width,user-scalable=no,initial-scale=" + u + ",maximum-scale=" + u + ",minimum-scale=" + u), r.documentElement.style.fontSize = e ? "50px" : a / 2 * s * n + "px"
    }, e.exports = t.default
}]), flex(!1, 100, 1);