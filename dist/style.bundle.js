"use strict";
(self.webpackChunkformulario = self.webpackChunkformulario || []).push([
  [314],
  {
    56: (n, r, e) => {
      n.exports = function (n) {
        var r = e.nc;
        r && n.setAttribute("nonce", r);
      };
    },
    72: (n) => {
      var r = [];
      function e(n) {
        for (var e = -1, t = 0; t < r.length; t++)
          if (r[t].identifier === n) {
            e = t;
            break;
          }
        return e;
      }
      function t(n, t) {
        for (var i = {}, a = [], A = 0; A < n.length; A++) {
          var c = n[A],
            s = t.base ? c[0] + t.base : c[0],
            d = i[s] || 0,
            l = "".concat(s, " ").concat(d);
          i[s] = d + 1;
          var p = e(l),
            u = {
              css: c[1],
              media: c[2],
              sourceMap: c[3],
              supports: c[4],
              layer: c[5],
            };
          if (-1 !== p) r[p].references++, r[p].updater(u);
          else {
            var g = o(u, t);
            (t.byIndex = A),
              r.splice(A, 0, { identifier: l, updater: g, references: 1 });
          }
          a.push(l);
        }
        return a;
      }
      function o(n, r) {
        var e = r.domAPI(r);
        return (
          e.update(n),
          function (r) {
            if (r) {
              if (
                r.css === n.css &&
                r.media === n.media &&
                r.sourceMap === n.sourceMap &&
                r.supports === n.supports &&
                r.layer === n.layer
              )
                return;
              e.update((n = r));
            } else e.remove();
          }
        );
      }
      n.exports = function (n, o) {
        var i = t((n = n || []), (o = o || {}));
        return function (n) {
          n = n || [];
          for (var a = 0; a < i.length; a++) {
            var A = e(i[a]);
            r[A].references--;
          }
          for (var c = t(n, o), s = 0; s < i.length; s++) {
            var d = e(i[s]);
            0 === r[d].references && (r[d].updater(), r.splice(d, 1));
          }
          i = c;
        };
      };
    },
    113: (n) => {
      n.exports = function (n, r) {
        if (r.styleSheet) r.styleSheet.cssText = n;
        else {
          for (; r.firstChild; ) r.removeChild(r.firstChild);
          r.appendChild(document.createTextNode(n));
        }
      };
    },
    116: (n, r, e) => {
      n.exports = e.p + "assets/images/desert-9442958_1280.jpg";
    },
    314: (n) => {
      n.exports = function (n) {
        var r = [];
        return (
          (r.toString = function () {
            return this.map(function (r) {
              var e = "",
                t = void 0 !== r[5];
              return (
                r[4] && (e += "@supports (".concat(r[4], ") {")),
                r[2] && (e += "@media ".concat(r[2], " {")),
                t &&
                  (e += "@layer".concat(
                    r[5].length > 0 ? " ".concat(r[5]) : "",
                    " {",
                  )),
                (e += n(r)),
                t && (e += "}"),
                r[2] && (e += "}"),
                r[4] && (e += "}"),
                e
              );
            }).join("");
          }),
          (r.i = function (n, e, t, o, i) {
            "string" == typeof n && (n = [[null, n, void 0]]);
            var a = {};
            if (t)
              for (var A = 0; A < this.length; A++) {
                var c = this[A][0];
                null != c && (a[c] = !0);
              }
            for (var s = 0; s < n.length; s++) {
              var d = [].concat(n[s]);
              (t && a[d[0]]) ||
                (void 0 !== i &&
                  (void 0 === d[5] ||
                    (d[1] = "@layer"
                      .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                      .concat(d[1], "}")),
                  (d[5] = i)),
                e &&
                  (d[2]
                    ? ((d[1] = "@media ".concat(d[2], " {").concat(d[1], "}")),
                      (d[2] = e))
                    : (d[2] = e)),
                o &&
                  (d[4]
                    ? ((d[1] = "@supports ("
                        .concat(d[4], ") {")
                        .concat(d[1], "}")),
                      (d[4] = o))
                    : (d[4] = "".concat(o))),
                r.push(d));
            }
          }),
          r
        );
      };
    },
    354: (n) => {
      n.exports = function (n) {
        var r = n[1],
          e = n[3];
        if (!e) return r;
        if ("function" == typeof btoa) {
          var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
            o =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                t,
              ),
            i = "/*# ".concat(o, " */");
          return [r].concat([i]).join("\n");
        }
        return [r].join("\n");
      };
    },
    379: (n, r, e) => {
      e.d(r, { A: () => p });
      var t = e(354),
        o = e.n(t),
        i = e(314),
        a = e.n(i),
        A = e(417),
        c = e.n(A),
        s = new URL(e(116), e.b),
        d = a()(o()),
        l = c()(s);
      d.push([
        n.id,
        `body {\n  color: rgb(255, 255, 255);\n  margin: 0;\n}\n\nbody::before {\n  content: " ";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  z-index: -1;\n  background-image:\n    linear-gradient(115deg, rgba(54, 178, 235, 0.5), rgba(9, 86, 228, 0.5)),\n    url(${l});\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\nh1 {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  text-align: center;\n  margin: 1em auto;\n  padding: 0;\n  font-size: 3em;\n}\n\np {\n  font-family: 'Italianno', cursive;\n  font-weight: 300;\n  text-align: center;\n  margin: 5px auto 50px auto;\n  padding: 0;\n  font-size: 1.5em;\n}\n\n#survey-form {\n  width: 60%;\n  margin: 0 auto;\n  background-color: rgba(3, 3, 17, 0.5);\n  padding: 2em;\n  border-radius: 0.5em;\n  max-width: 800px;\n  min-width: 200px;\n}\n\nfieldset {\n  border: none;\n  margin: 0;\n  padding: 5px;\n}\n\ninput,\nselect,\ntextarea {\n  display: block;\n  width: 100%;\n  padding: 0.2em;\n  margin: 10px 0 0 0;\n  border: none;\n  min-height: 1em;\n  border-radius: 0.5em;\n  font-size: 1.2em;\n  font-family: 'Italianno', cursive;\n  color: rgb(244, 244, 244);\n  background-color: rgba(40, 45, 133, 0.5);\n}\n\nlabel {\n  display: block;\n  margin: 0.5em 0;\n  font-size: 1.2em;\n  font-family: 'Italianno', cursive;\n  color: rgb(244, 244, 244);\n  font-weight: bolder;\n}\n\n.inline {\n  display: inline-block;\n  width: unset;\n  margin: 0 0.3em;\n  padding: 5px;\n  vertical-align: middle;\n}\n\ninput[type="submit"] {\n  display: block;\n  width: 25vw;\n  margin: auto;\n  padding: 5px;\n  color: rgb(0, 0, 0);\n  background-color: rgb(195, 185, 174);\n  border-color: rgb(0, 0, 0);\n  font-weight: bolder;\n}\n\n#message-container {\n  margin-top: 20px;\n  padding: 10px;\n  font-size: 1.2rem;\n  text-align: center;\n}`,
        "",
        {
          version: 3,
          sources: ["webpack://./src/assets/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,yBAAyB;EACzB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,WAAW;EACX;;2CAEgC;EAChC,4BAA4B;EAC5B,2BAA2B;AAC7B;;AAEA;EACE,yCAAyC;EACzC,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,iCAAiC;EACjC,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;EAC1B,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,cAAc;EACd,qCAAqC;EACrC,YAAY;EACZ,oBAAoB;EACpB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,YAAY;AACd;;AAEA;;;EAGE,cAAc;EACd,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,gBAAgB;EAChB,iCAAiC;EACjC,yBAAyB;EACzB,wCAAwC;AAC1C;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,iCAAiC;EACjC,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,oCAAoC;EACpC,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;AACpB",
          sourcesContent: [
            "body {\r\n  color: rgb(255, 255, 255);\r\n  margin: 0;\r\n}\r\n\r\nbody::before {\r\n  content: \" \";\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-size: cover;\r\n  z-index: -1;\r\n  background-image:\r\n    linear-gradient(115deg, rgba(54, 178, 235, 0.5), rgba(9, 86, 228, 0.5)),\r\n    url(./desert-9442958_1280.jpg);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\nh1 {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 1em auto;\r\n  padding: 0;\r\n  font-size: 3em;\r\n}\r\n\r\np {\r\n  font-family: 'Italianno', cursive;\r\n  font-weight: 300;\r\n  text-align: center;\r\n  margin: 5px auto 50px auto;\r\n  padding: 0;\r\n  font-size: 1.5em;\r\n}\r\n\r\n#survey-form {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n  background-color: rgba(3, 3, 17, 0.5);\r\n  padding: 2em;\r\n  border-radius: 0.5em;\r\n  max-width: 800px;\r\n  min-width: 200px;\r\n}\r\n\r\nfieldset {\r\n  border: none;\r\n  margin: 0;\r\n  padding: 5px;\r\n}\r\n\r\ninput,\r\nselect,\r\ntextarea {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.2em;\r\n  margin: 10px 0 0 0;\r\n  border: none;\r\n  min-height: 1em;\r\n  border-radius: 0.5em;\r\n  font-size: 1.2em;\r\n  font-family: 'Italianno', cursive;\r\n  color: rgb(244, 244, 244);\r\n  background-color: rgba(40, 45, 133, 0.5);\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n  margin: 0.5em 0;\r\n  font-size: 1.2em;\r\n  font-family: 'Italianno', cursive;\r\n  color: rgb(244, 244, 244);\r\n  font-weight: bolder;\r\n}\r\n\r\n.inline {\r\n  display: inline-block;\r\n  width: unset;\r\n  margin: 0 0.3em;\r\n  padding: 5px;\r\n  vertical-align: middle;\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n  display: block;\r\n  width: 25vw;\r\n  margin: auto;\r\n  padding: 5px;\r\n  color: rgb(0, 0, 0);\r\n  background-color: rgb(195, 185, 174);\r\n  border-color: rgb(0, 0, 0);\r\n  font-weight: bolder;\r\n}\r\n\r\n#message-container {\r\n  margin-top: 20px;\r\n  padding: 10px;\r\n  font-size: 1.2rem;\r\n  text-align: center;\r\n}",
          ],
          sourceRoot: "",
        },
      ]);
      const p = d;
    },
    417: (n) => {
      n.exports = function (n, r) {
        return (
          r || (r = {}),
          n
            ? ((n = String(n.__esModule ? n.default : n)),
              /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
              r.hash && (n += r.hash),
              /["'() \t\n]|(%20)/.test(n) || r.needQuotes
                ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
                : n)
            : n
        );
      };
    },
    540: (n) => {
      n.exports = function (n) {
        var r = document.createElement("style");
        return n.setAttributes(r, n.attributes), n.insert(r, n.options), r;
      };
    },
    648: (n, r, e) => {
      var t = e(72),
        o = e.n(t),
        i = e(825),
        a = e.n(i),
        A = e(659),
        c = e.n(A),
        s = e(56),
        d = e.n(s),
        l = e(540),
        p = e.n(l),
        u = e(113),
        g = e.n(u),
        f = e(379),
        m = {};
      (m.styleTagTransform = g()),
        (m.setAttributes = d()),
        (m.insert = c().bind(null, "head")),
        (m.domAPI = a()),
        (m.insertStyleElement = p()),
        o()(f.A, m),
        f.A && f.A.locals && f.A.locals;
    },
    659: (n) => {
      var r = {};
      n.exports = function (n, e) {
        var t = (function (n) {
          if (void 0 === r[n]) {
            var e = document.querySelector(n);
            if (
              window.HTMLIFrameElement &&
              e instanceof window.HTMLIFrameElement
            )
              try {
                e = e.contentDocument.head;
              } catch (n) {
                e = null;
              }
            r[n] = e;
          }
          return r[n];
        })(n);
        if (!t)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
          );
        t.appendChild(e);
      };
    },
    825: (n) => {
      n.exports = function (n) {
        if ("undefined" == typeof document)
          return { update: function () {}, remove: function () {} };
        var r = n.insertStyleElement(n);
        return {
          update: function (e) {
            !(function (n, r, e) {
              var t = "";
              e.supports && (t += "@supports (".concat(e.supports, ") {")),
                e.media && (t += "@media ".concat(e.media, " {"));
              var o = void 0 !== e.layer;
              o &&
                (t += "@layer".concat(
                  e.layer.length > 0 ? " ".concat(e.layer) : "",
                  " {",
                )),
                (t += e.css),
                o && (t += "}"),
                e.media && (t += "}"),
                e.supports && (t += "}");
              var i = e.sourceMap;
              i &&
                "undefined" != typeof btoa &&
                (t +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                    " */",
                  )),
                r.styleTagTransform(t, n, r.options);
            })(r, n, e);
          },
          remove: function () {
            !(function (n) {
              if (null === n.parentNode) return !1;
              n.parentNode.removeChild(n);
            })(r);
          },
        };
      };
    },
  },
  (n) => {
    n((n.s = 648));
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVk5QyxFQUN0QyxDQWdCTTJHLENBQW1CM0csRUFDckIsRUFFSixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybXVsYXJpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Zvcm11bGFyaW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZm9ybXVsYXJpby8uL3NyYy9hc3NldHMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Zvcm11bGFyaW8vLi9zcmMvYXNzZXRzL3N0eWxlcy5jc3M/OTUxZiIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mb3JtdWxhcmlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9kZXNlcnQtOTQ0Mjk1OF8xMjgwLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJvZHk6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMTE1ZGVnLCByZ2JhKDU0LCAxNzgsIDIzNSwgMC41KSwgcmdiYSg5LCA4NiwgMjI4LCAwLjUpKSxcclxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OiAnSXRhbGlhbm5vJywgY3Vyc2l2ZTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDVweCBhdXRvIDUwcHggYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbiNzdXJ2ZXktZm9ybSB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMsIDMsIDE3LCAwLjUpO1xyXG4gIHBhZGRpbmc6IDJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuaW5wdXQsXHJcbnNlbGVjdCxcclxudGV4dGFyZWEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuMmVtO1xyXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWluLWhlaWdodDogMWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC1mYW1pbHk6ICdJdGFsaWFubm8nLCBjdXJzaXZlO1xyXG4gIGNvbG9yOiByZ2IoMjQ0LCAyNDQsIDI0NCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgNDUsIDEzMywgMC41KTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMC41ZW0gMDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnSXRhbGlhbm5vJywgY3Vyc2l2ZTtcclxuICBjb2xvcjogcmdiKDI0NCwgMjQ0LCAyNDQpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogdW5zZXQ7XHJcbiAgbWFyZ2luOiAwIDAuM2VtO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMjV2dztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTg1LCAxNzQpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbiNtZXNzYWdlLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1g7OzJDQUVnQztFQUNoQyw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLHFDQUFxQztFQUNyQyxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLDBCQUEwQjtFQUMxQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTpcXHJcXG4gICAgbGluZWFyLWdyYWRpZW50KDExNWRlZywgcmdiYSg1NCwgMTc4LCAyMzUsIDAuNSksIHJnYmEoOSwgODYsIDIyOCwgMC41KSksXFxyXFxuICAgIHVybCguL2Rlc2VydC05NDQyOTU4XzEyODAuanBnKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDFlbSBhdXRvO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtc2l6ZTogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSXRhbGlhbm5vJywgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDVweCBhdXRvIDUwcHggYXV0bztcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VydmV5LWZvcm0ge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzLCAzLCAxNywgMC41KTtcXHJcXG4gIHBhZGRpbmc6IDJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbiAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsXFxyXFxuc2VsZWN0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwLjJlbTtcXHJcXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDFlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSXRhbGlhbm5vJywgY3Vyc2l2ZTtcXHJcXG4gIGNvbG9yOiByZ2IoMjQ0LCAyNDQsIDI0NCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCA0NSwgMTMzLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogMC41ZW0gMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBmb250LWZhbWlseTogJ0l0YWxpYW5ubycsIGN1cnNpdmU7XFxyXFxuICBjb2xvcjogcmdiKDI0NCwgMjQ0LCAyNDQpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmlubGluZSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogdW5zZXQ7XFxyXFxuICBtYXJnaW46IDAgMC4zZW07XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAyNXZ3O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDE4NSwgMTc0KTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21lc3NhZ2UtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic3R5bGVFbGVtZW50Iiwibm9uY2UiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZXNJbkRPTSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJtb2R1bGVzVG9Eb20iLCJsaXN0Iiwib3B0aW9ucyIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsIml0ZW0iLCJpZCIsImJhc2UiLCJjb3VudCIsImNvbmNhdCIsImluZGV4QnlJZGVudGlmaWVyIiwib2JqIiwiY3NzIiwibWVkaWEiLCJzb3VyY2VNYXAiLCJzdXBwb3J0cyIsImxheWVyIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRFbGVtZW50U3R5bGUiLCJieUluZGV4Iiwic3BsaWNlIiwicHVzaCIsImFwaSIsImRvbUFQSSIsInVwZGF0ZSIsIm5ld09iaiIsInJlbW92ZSIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJpbmRleCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pIiwiX2luZGV4Iiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwidG9TdHJpbmciLCJ0aGlzIiwibWFwIiwiY29udGVudCIsIm5lZWRMYXllciIsImpvaW4iLCJtb2R1bGVzIiwiZGVkdXBlIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJfayIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyIsIlVSTCIsIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIiwiX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyIsInVybCIsIlN0cmluZyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwidGVzdCIsInNsaWNlIiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsImluc2VydCIsInN0eWxlVGFnVHJhbnNmb3JtIiwiaW5zZXJ0U3R5bGVFbGVtZW50IiwibG9jYWxzIiwibWVtbyIsInN0eWxlIiwidGFyZ2V0Iiwic3R5bGVUYXJnZXQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJoZWFkIiwiZSIsImdldFRhcmdldCIsIkVycm9yIiwiYXBwbHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlU3R5bGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==
