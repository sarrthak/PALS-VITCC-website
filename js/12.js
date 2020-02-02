/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function (e, t, n, r) {
    "use strict";

    function l(e) {
        if (typeof e == "string" || e instanceof String) e = e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "");
        return e
    }
    var i = function (t) {
        var n = t.length,
            r = e("head");
        while (n--) r.has("." + t[n]).length === 0 && r.append('<meta class="' + t[n] + '" />')
    };
    i(["foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), e(function () {
        typeof FastClick != "undefined" && typeof n.body != "undefined" && FastClick.attach(n.body)
    });
    var s = function (t, r) {
            if (typeof t == "string") {
                if (r) {
                    var i;
                    if (r.jquery) {
                        i = r[0];
                        if (!i) return r
                    } else i = r;
                    return e(i.querySelectorAll(t))
                }
                return e(n.querySelectorAll(t))
            }
            return e(t, r)
        },
        o = function (e) {
            var t = [];
            return e || t.push("data"), this.namespace.length > 0 && t.push(this.namespace), t.push(this.name), t.join("-")
        },
        u = function (e) {
            var t = e.split("-"),
                n = t.length,
                r = [];
            while (n--) n !== 0 ? r.push(t[n]) : this.namespace.length > 0 ? r.push(this.namespace, t[n]) : r.push(t[n]);
            return r.reverse().join("-")
        },
        a = function (t, n) {
            var r = this,
                i = !s(this).data(this.attr_name(!0));
            if (typeof t == "string") return this[t].call(this, n);
            s(this.scope).is("[" + this.attr_name() + "]") ? (s(this.scope).data(this.attr_name(!0) + "-init", e.extend({}, this.settings, n || t, this.data_options(s(this.scope)))), i && this.events(this.scope)) : s("[" + this.attr_name() + "]", this.scope).each(function () {
                var i = !s(this).data(r.attr_name(!0) + "-init");
                s(this).data(r.attr_name(!0) + "-init", e.extend({}, r.settings, n || t, r.data_options(s(this)))), i && r.events(this)
            })
        },
        f = function (e, t) {
            function n() {
                t(e[0])
            }

            function r() {
                this.one("load", n);
                if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var e = this.attr("src"),
                        t = e.match(/\?/) ? "&" : "?";
                    t += "random=" + (new Date).getTime(), this.attr("src", e + t)
                }
            }
            if (!e.attr("src")) {
                n();
                return
            }
            e[0].complete || e[0].readyState === 4 ? n() : r.call(e)
        };
    t.matchMedia = t.matchMedia || function (e) {
            var t, n = e.documentElement,
                r = n.firstElementChild || n.firstChild,
                i = e.createElement("body"),
                s = e.createElement("div");
            return s.id = "mq-test-1", s.style.cssText = "position:absolute;top:-100em", i.style.background = "none", i.appendChild(s),
                function (e) {
                    return s.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', n.insertBefore(i, r), t = s.offsetWidth === 42, n.removeChild(i), {
                        matches: t,
                        media: e
                    }
                }
        }(n),
        function (e) {
            function a() {
                n && (s(a), u && jQuery.fx.tick())
            }
            var n, r = 0,
                i = ["webkit", "moz"],
                s = t.requestAnimationFrame,
                o = t.cancelAnimationFrame,
                u = "undefined" != typeof jQuery.fx;
            for (; r < i.length && !s; r++) s = t[i[r] + "RequestAnimationFrame"], o = o || t[i[r] + "CancelAnimationFrame"] || t[i[r] + "CancelRequestAnimationFrame"];
            s ? (t.requestAnimationFrame = s, t.cancelAnimationFrame = o, u && (jQuery.fx.timer = function (e) {
                e() && jQuery.timers.push(e) && !n && (n = !0, a())
            }, jQuery.fx.stop = function () {
                n = !1
            })) : (t.requestAnimationFrame = function (e) {
                var n = (new Date).getTime(),
                    i = Math.max(0, 16 - (n - r)),
                    s = t.setTimeout(function () {
                        e(n + i)
                    }, i);
                return r = n + i, s
            }, t.cancelAnimationFrame = function (e) {
                clearTimeout(e)
            })
        }(jQuery), t.Foundation = {
            name: "Foundation",
            version: "5.2.2",
            media_queries: {
                small: s(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                medium: s(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                large: s(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                xlarge: s(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                xxlarge: s(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
            },
            stylesheet: e("<style></style>").appendTo("head")[0].sheet,
            global: {
                namespace: r
            },
            init: function (e, t, n, r, i) {
                var o = [e, n, r, i],
                    u = [];
                this.rtl = /rtl/i.test(s("html").attr("dir")), this.scope = e || this.scope, this.set_namespace();
                if (t && typeof t == "string" && !/reflow/i.test(t)) this.libs.hasOwnProperty(t) && u.push(this.init_lib(t, o));
                else
                    for (var a in this.libs) u.push(this.init_lib(a, t));
                return e
            },
            init_lib: function (t, n) {
                return this.libs.hasOwnProperty(t) ? (this.patch(this.libs[t]), n && n.hasOwnProperty(t) ? (typeof this.libs[t].settings != "undefined" ? e.extend(!0, this.libs[t].settings, n[t]) : typeof this.libs[t].defaults != "undefined" && e.extend(!0, this.libs[t].defaults, n[t]), this.libs[t].init.apply(this.libs[t], [this.scope, n[t]])) : (n = n instanceof Array ? n : new Array(n), this.libs[t].init.apply(this.libs[t], n))) : function () {}
            },
            patch: function (e) {
                e.scope = this.scope, e.namespace = this.global.namespace, e.rtl = this.rtl, e.data_options = this.utils.data_options, e.attr_name = o, e.add_namespace = u, e.bindings = a, e.S = this.utils.S
            },
            inherit: function (e, t) {
                var n = t.split(" "),
                    r = n.length;
                while (r--) this.utils.hasOwnProperty(n[r]) && (e[n[r]] = this.utils[n[r]])
            },
            set_namespace: function () {
                var t = this.global.namespace === r ? e(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
                this.global.namespace = t === r || /false/i.test(t) ? "" : t
            },
            libs: {},
            utils: {
                S: s,
                throttle: function (e, t) {
                    var n = null;
                    return function () {
                        var r = this,
                            i = arguments;
                        n == null && (n = setTimeout(function () {
                            e.apply(r, i), n = null
                        }, t))
                    }
                },
                debounce: function (e, t, n) {
                    var r, i;
                    return function () {
                        var s = this,
                            o = arguments,
                            u = function () {
                                r = null, n || (i = e.apply(s, o))
                            },
                            a = n && !r;
                        return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i
                    }
                },
                data_options: function (t) {
                    function a(e) {
                        return !isNaN(e - 0) && e !== null && e !== "" && e !== !1 && e !== !0
                    }

                    function f(t) {
                        return typeof t == "string" ? e.trim(t) : t
                    }
                    var n = {},
                        r, i, s, o = function (e) {
                            var t = Foundation.global.namespace;
                            return t.length > 0 ? e.data(t + "-options") : e.data("options")
                        },
                        u = o(t);
                    if (typeof u == "object") return u;
                    s = (u || ":").split(";"), r = s.length;
                    while (r--) i = s[r].split(":"), /true/i.test(i[1]) && (i[1] = !0), /false/i.test(i[1]) && (i[1] = !1), a(i[1]) && (i[1].indexOf(".") === -1 ? i[1] = parseInt(i[1], 10) : i[1] = parseFloat(i[1])), i.length === 2 && i[0].length > 0 && (n[f(i[0])] = f(i[1]));
                    return n
                },
                register_media: function (t, n) {
                    Foundation.media_queries[t] === r && (e("head").append('<meta class="' + n + '">'), Foundation.media_queries[t] = l(e("." + n).css("font-family")))
                },
                add_custom_rule: function (e, t) {
                    if (t === r && Foundation.stylesheet) Foundation.stylesheet.insertRule(e, Foundation.stylesheet.cssRules.length);
                    else {
                        var n = Foundation.media_queries[t];
                        n !== r && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[t] + "{ " + e + " }")
                    }
                },
                image_loaded: function (e, t) {
                    var n = this,
                        r = e.length;
                    r === 0 && t(e), e.each(function () {
                        f(n.S(this), function () {
                            r -= 1, r === 0 && t(e)
                        })
                    })
                },
                random_str: function () {
                    return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+(new Date)).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
                }
            }
        }, e.fn.foundation = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return this.each(function () {
                return Foundation.init.apply(Foundation, [this].concat(e)), this
            })
        }
})(jQuery, this, this.document),
function (e, t, n, r) {
    "use strict";
    Foundation.libs.alert = {
        name: "alert",
        version: "5.2.2",
        settings: {
            callback: function () {}
        },
        init: function (e, t, n) {
            this.bindings(t, n)
        },
        events: function () {
            var n = this,
                r = this.S;
            e(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] a.close", function (e) {
                var i = r(this).closest("[" + n.attr_name() + "]"),
                    s = i.data(n.attr_name(!0) + "-init") || n.settings;
                e.preventDefault(), "transitionend" in t || "webkitTransitionEnd" in t || "oTransitionEnd" in t ? (i.addClass("alert-close"), i.on("transitionend webkitTransitionEnd oTransitionEnd", function (e) {
                    r(this).trigger("close").remove(), s.callback()
                })) : i.fadeOut(300, function () {
                    r(this).trigger("close").remove(), s.callback()
                })
            })
        },
        reflow: function () {}
    }
}(jQuery, this, this.document),
function (e, t, n, r) {
    "use strict";
    Foundation.libs.tab = {
        name: "tab",
        version: "5.2.2",
        settings: {
            active_class: "active",
            callback: function () {},
            deep_linking: !1,
            scroll_to_content: !0,
            is_hover: !1
        },
        default_tab_hashes: [],
        init: function (e, t, n) {
            var r = this,
                i = this.S;
            this.bindings(t, n), this.handle_location_hash_change(), i("[" + this.attr_name() + "] > dd.active > a", this.scope).each(function () {
                r.default_tab_hashes.push(this.hash)
            })
        },
        events: function () {
            var e = this,
                n = this.S;
            n(this.scope).off(".tab").on("click.fndtn.tab", "[" + this.attr_name() + "] > dd > a", function (t) {
                var r = n(this).closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init");
                if (!r.is_hover || Modernizr.touch) t.preventDefault(), t.stopPropagation(), e.toggle_active_tab(n(this).parent())
            }).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > dd > a", function (t) {
                var r = n(this).closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init");
                r.is_hover && e.toggle_active_tab(n(this).parent())
            }), n(t).on("hashchange.fndtn.tab", function (t) {
                t.preventDefault(), e.handle_location_hash_change()
            })
        },
        handle_location_hash_change: function () {
            var t = this,
                n = this.S;
            n("[" + this.attr_name() + "]", this.scope).each(function () {
                var i = n(this).data(t.attr_name(!0) + "-init");
                if (i.deep_linking) {
                    var s = t.scope.location.hash;
                    if (s != "") {
                        var o = n(s);
                        if (o.hasClass("content") && o.parent().hasClass("tab-content")) t.toggle_active_tab(e("[" + t.attr_name() + "] > dd > a[href=" + s + "]").parent());
                        else {
                            var u = o.closest(".content").attr("id");
                            u != r && t.toggle_active_tab(e("[" + t.attr_name() + "] > dd > a[href=#" + u + "]").parent(), s)
                        }
                    } else
                        for (var a in t.default_tab_hashes) t.toggle_active_tab(e("[" + t.attr_name() + "] > dd > a[href=" + t.default_tab_hashes[a] + "]").parent())
                }
            })
        },
        toggle_active_tab: function (n, i) {
            var s = this.S,
                o = n.closest("[" + this.attr_name() + "]"),
                u = n.children("a").first(),
                a = "#" + u.attr("href").split("#")[1],
                f = s(a),
                l = n.siblings(),
                c = o.data(this.attr_name(!0) + "-init");
            s(this).data(this.data_attr("tab-content")) && (a = "#" + s(this).data(this.data_attr("tab-content")).split("#")[1], f = s(a));
            if (c.deep_linking) {
                var h = e("body,html").scrollTop();
                i != r ? t.location.hash = i : t.location.hash = a, c.scroll_to_content ? i == r || i == a ? n.parent()[0].scrollIntoView() : s(a)[0].scrollIntoView() : (i == r || i == a) && e("body,html").scrollTop(h)
            }
            n.addClass(c.active_class).triggerHandler("opened"), l.removeClass(c.active_class), f.siblings().removeClass(c.active_class).end().addClass(c.active_class), c.callback(n), f.triggerHandler("toggled", [n]), o.triggerHandler("toggled", [f])
        },
        data_attr: function (e) {
            return this.namespace.length > 0 ? this.namespace + "-" + e : e
        },
        off: function () {},
        reflow: function () {}
    }
}(jQuery, this, this.document),
function (e, t, n, r) {
    "use strict";
    Foundation.libs.topbar = {
        name: "topbar",
        version: "5.2.2",
        settings: {
            index: 0,
            sticky_class: "sticky",
            custom_back_text: !0,
            back_text: "Back",
            is_hover: !0,
            mobile_show_parent_link: !1,
            scrolltop: !0,
            sticky_on: "all"
        },
        init: function (t, n, r) {
            Foundation.inherit(this, "add_custom_rule register_media throttle");
            var i = this;
            i.register_media("topbar", "foundation-mq-topbar"), this.bindings(n, r), i.S("[" + this.attr_name() + "]", this.scope).each(function () {
                var t = e(this),
                    n = t.data(i.attr_name(!0) + "-init"),
                    r = i.S("section", this),
                    s = t.children().filter("ul").first();
                t.data("index", 0);
                var o = t.parent();
                o.hasClass("fixed") || i.is_sticky(t, o, n) ? (i.settings.sticky_class = n.sticky_class, i.settings.sticky_topbar = t, t.data("height", o.outerHeight()), t.data("stickyoffset", o.offset().top)) : t.data("height", t.outerHeight()), n.assembled || i.assemble(t), n.is_hover ? i.S(".has-dropdown", t).addClass("not-click") : i.S(".has-dropdown", t).removeClass("not-click"), i.add_custom_rule(".f-topbar-fixed { padding-top: " + t.data("height") + "px }"), o.hasClass("fixed") && i.S("body").addClass("f-topbar-fixed")
            })
        },
        is_sticky: function (e, t, n) {
            var r = t.hasClass(n.sticky_class);
            return r && n.sticky_on === "all" ? !0 : r && this.small() && n.sticky_on === "small" ? !0 : r && this.medium() && n.sticky_on === "medium" ? !0 : r && this.large() && n.sticky_on === "large" ? !0 : !1
        },
        toggle: function (n) {
            var r = this;
            if (n) var i = r.S(n).closest("[" + this.attr_name() + "]");
            else var i = r.S("[" + this.attr_name() + "]");
            var s = i.data(this.attr_name(!0) + "-init"),
                o = r.S("section, .section", i);
            r.breakpoint() && (r.rtl ? (o.css({
                right: "0%"
            }), e(">.name", o).css({
                right: "100%"
            })) : (o.css({
                left: "0%"
            }), e(">.name", o).css({
                left: "100%"
            })), r.S("li.moved", o).removeClass("moved"), i.data("index", 0), i.toggleClass("expanded").css("height", "")), s.scrolltop ? i.hasClass("expanded") ? i.parent().hasClass("fixed") && (s.scrolltop ? (i.parent().removeClass("fixed"), i.addClass("fixed"), r.S("body").removeClass("f-topbar-fixed"), t.scrollTo(0, 0)) : i.parent().removeClass("expanded")) : i.hasClass("fixed") && (i.parent().addClass("fixed"), i.removeClass("fixed"), r.S("body").addClass("f-topbar-fixed")) : (r.is_sticky(i, i.parent(), s) && i.parent().addClass("fixed"), i.parent().hasClass("fixed") && (i.hasClass("expanded") ? (i.addClass("fixed"), i.parent().addClass("expanded"), r.S("body").addClass("f-topbar-fixed")) : (i.removeClass("fixed"), i.parent().removeClass("expanded"), r.update_sticky_positioning())))
        },
        timer: null,
        events: function (n) {
            var r = this,
                i = this.S;
            i(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function (e) {
                e.preventDefault(), r.toggle(this)
            }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function (t) {
                var n = e(this).closest("li");
                r.breakpoint() && !n.hasClass("back") && !n.hasClass("has-dropdown") && r.toggle()
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function (t) {
                var n = i(this),
                    s = i(t.target),
                    o = n.closest("[" + r.attr_name() + "]"),
                    u = o.data(r.attr_name(!0) + "-init");
                if (s.data("revealId")) {
                    r.toggle();
                    return
                }
                if (r.breakpoint()) return;
                if (u.is_hover && !Modernizr.touch) return;
                t.stopImmediatePropagation(), n.hasClass("hover") ? (n.removeClass("hover").find("li").removeClass("hover"), n.parents("li.hover").removeClass("hover")) : (n.addClass("hover"), e(n).siblings().removeClass("hover"), s[0].nodeName === "A" && s.parent().hasClass("has-dropdown") && t.preventDefault())
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function (e) {
                if (r.breakpoint()) {
                    e.preventDefault();
                    var t = i(this),
                        n = t.closest("[" + r.attr_name() + "]"),
                        s = n.find("section, .section"),
                        o = t.next(".dropdown").outerHeight(),
                        u = t.closest("li");
                    n.data("index", n.data("index") + 1), u.addClass("moved"), r.rtl ? (s.css({
                        right: -(100 * n.data("index")) + "%"
                    }), s.find(">.name").css({
                        right: 100 * n.data("index") + "%"
                    })) : (s.css({
                        left: -(100 * n.data("index")) + "%"
                    }), s.find(">.name").css({
                        left: 100 * n.data("index") + "%"
                    })), n.css("height", t.siblings("ul").outerHeight(!0) + n.data("height"))
                }
            }), i(t).off(".topbar").on("resize.fndtn.topbar", r.throttle(function () {
                r.resize.call(r)
            }, 50)).trigger("resize"), i("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar", function (e) {
                var t = i(e.target).closest("li").closest("li.hover");
                if (t.length > 0) return;
                i("[" + r.attr_name() + "] li.hover").removeClass("hover")
            }), i(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function (e) {
                e.preventDefault();
                var t = i(this),
                    n = t.closest("[" + r.attr_name() + "]"),
                    s = n.find("section, .section"),
                    o = n.data(r.attr_name(!0) + "-init"),
                    u = t.closest("li.moved"),
                    a = u.parent();
                n.data("index", n.data("index") - 1), r.rtl ? (s.css({
                    right: -(100 * n.data("index")) + "%"
                }), s.find(">.name").css({
                    right: 100 * n.data("index") + "%"
                })) : (s.css({
                    left: -(100 * n.data("index")) + "%"
                }), s.find(">.name").css({
                    left: 100 * n.data("index") + "%"
                })), n.data("index") === 0 ? n.css("height", "") : n.css("height", a.outerHeight(!0) + n.data("height")), setTimeout(function () {
                    u.removeClass("moved")
                }, 300)
            })
        },
        resize: function () {
            var e = this;
            e.S("[" + this.attr_name() + "]").each(function () {
                var t = e.S(this),
                    r = t.data(e.attr_name(!0) + "-init"),
                    i = t.parent("." + e.settings.sticky_class),
                    s;
                if (!e.breakpoint()) {
                    var o = t.hasClass("expanded");
                    t.css("height", "").removeClass("expanded").find("li").removeClass("hover"), o && e.toggle(t)
                }
                e.is_sticky(t, i, r) && (i.hasClass("fixed") ? (i.removeClass("fixed"), s = i.offset().top, e.S(n.body).hasClass("f-topbar-fixed") && (s -= t.data("height")), t.data("stickyoffset", s), i.addClass("fixed")) : (s = i.offset().top, t.data("stickyoffset", s)))
            })
        },
        breakpoint: function () {
            return !matchMedia(Foundation.media_queries.topbar).matches
        },
        small: function () {
            return matchMedia(Foundation.media_queries.small).matches
        },
        medium: function () {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function () {
            return matchMedia(Foundation.media_queries.large).matches
        },
        assemble: function (t) {
            var n = this,
                r = t.data(this.attr_name(!0) + "-init"),
                i = n.S("section", t),
                s = e(this).children().filter("ul").first();
            i.detach(), n.S(".has-dropdown>a", i).each(function () {
                var t = n.S(this),
                    i = t.siblings(".dropdown"),
                    s = t.attr("href");
                if (!i.find(".title.back").length) {
                    if (r.mobile_show_parent_link && s && s.length > 1) var o = e('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li><a class="parent-link js-generated" href="' + s + '">' + t.text() + "</a></li>");
                    else var o = e('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li>');
                    r.custom_back_text == 1 ? e("h5>a", o).html(r.back_text) : e("h5>a", o).html("&laquo; " + t.html()), i.prepend(o)
                }
            }), i.appendTo(t), this.sticky(), this.assembled(t)
        },
        assembled: function (t) {
            t.data(this.attr_name(!0), e.extend({}, t.data(this.attr_name(!0)), {
                assembled: !0
            }))
        },
        height: function (t) {
            var n = 0,
                r = this;
            return e("> li", t).each(function () {
                n += r.S(this).outerHeight(!0)
            }), n
        },
        sticky: function () {
            var e = this.S(t),
                n = this;
            this.S(t).on("scroll", function () {
                n.update_sticky_positioning()
            })
        },
        update_sticky_positioning: function () {
            var e = "." + this.settings.sticky_class,
                n = this.S(t),
                r = this;
            if (r.settings.sticky_topbar && r.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                var i = this.settings.sticky_topbar.data("stickyoffset");
                r.S(e).hasClass("expanded") || (n.scrollTop() > i ? r.S(e).hasClass("fixed") || (r.S(e).addClass("fixed"), r.S("body").addClass("f-topbar-fixed")) : n.scrollTop() <= i && r.S(e).hasClass("fixed") && (r.S(e).removeClass("fixed"), r.S("body").removeClass("f-topbar-fixed")))
            }
        },
        off: function () {
            this.S(this.scope).off(".fndtn.topbar"), this.S(t).off(".fndtn.topbar")
        },
        reflow: function () {}
    }
}(jQuery, this, this.document),
function (e, t, n, r) {
    "use strict";
    Foundation.libs.offcanvas = {
        name: "offcanvas",
        version: "5.2.2",
        settings: {},
        init: function (e, t, n) {
            this.events()
        },
        events: function () {
            var e = this,
                t = e.S;
            t(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function (t) {
                e.click_toggle_class(t, "move-right")
            }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function (e) {
                t(".off-canvas-wrap").removeClass("move-right")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function (t) {
                e.click_toggle_class(t, "move-left")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function (e) {
                t(".off-canvas-wrap").removeClass("move-left")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function (t) {
                e.click_remove_class(t, "move-left"), e.click_remove_class(t, "move-right")
            })
        },
        click_toggle_class: function (e, t) {
            e.preventDefault(), this.S(e.target).closest(".off-canvas-wrap").toggleClass(t)
        },
        click_remove_class: function (e, t) {
            e.preventDefault(), this.S(".off-canvas-wrap").removeClass(t)
        },
        reflow: function () {}
    }
}(jQuery, this, this.document);
