import "../scss/main.scss";

import micromerce from "../img/micromerce-logo.svg";
import neusta from "../img/neusta-consulting.png";

const logo = document.createElement("img");
logo.src = micromerce;
logo.width = "100";
logo.height = "200";
console.log(logo);

document.querySelector(".navbar.navbar-desktop").append(logo);

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();




!(function(e) {
  var n = {};
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  (t.m = e),
    (t.c = n),
    (t.d = function(e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
    }),
    (t.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function(e, n) {
      if ((1 & n && (e = t(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (t.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var o in e)
          t.d(
            r,
            o,
            function(n) {
              return e[n];
            }.bind(null, o)
          );
      return r;
    }),
    (t.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (t.p = ""),
    t((t.s = 1));
})([
  function(e, n, t) {},
  function(e, n, t) {
    "use strict";
    t.r(n);
    t(0);
    var r = t.p + "img/micromerce-logo.svg";
    t.p;
    function o(e, n, t, r, o, u, i) {
      try {
        var c = e[u](i),
          a = c.value;
      } catch (e) {
        return void t(e);
      }
      c.done ? n(a) : Promise.resolve(a).then(r, o);
    }
    function u(e) {
      return function() {
        var n = this,
          t = arguments;
        return new Promise(function(r, u) {
          var i = e.apply(n, t);
          function c(e) {
            o(i, r, u, c, a, "next", e);
          }
          function a(e) {
            o(i, r, u, c, a, "throw", e);
          }
          c(void 0);
        });
      };
    }
    var i = document.createElement("img");
    function c() {
      return new Promise(function(e) {
        setTimeout(function() {
          e("resolved");
        }, 2e3);
      });
    }
    function a() {
      return (a = u(
        regeneratorRuntime.mark(function e() {
          var n;
          return regeneratorRuntime.wrap(function(e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return console.log("calling"), (e.next = 3), c();
                case 3:
                  (n = e.sent), console.log(n);
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    (i.src = r),
      (i.width = "100"),
      (i.height = "200"),
      console.log(i),
      document.querySelector(".navbar.navbar-desktop").append(i),
      (function() {
        a.apply(this, arguments);
      })();
  },
]);