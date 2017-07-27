/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./public/plugin/editor/js/MIDI.js":
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (typeof MIDI === "undefined") var MIDI = {};(function () {
  "use strict";
  var e = {};var t = 0;var n = function n(_n) {
    t++;var r = new Audio();var i = _n.split(";")[0];r.id = "audio";r.setAttribute("preload", "auto");r.setAttribute("audiobuffer", true);r.addEventListener("error", function () {
      e[i] = false;t--;
    }, false);r.addEventListener("canplaythrough", function () {
      e[i] = true;t--;
    }, false);r.src = "data:" + _n;document.body.appendChild(r);
  };MIDI.audioDetect = function (r) {
    if (typeof Audio === "undefined") return r({});var i = new Audio();if (typeof i.canPlayType === "undefined") return r(e);var s = i.canPlayType('audio/ogg; codecs="vorbis"');s = s === "probably" || s === "maybe";var o = i.canPlayType("audio/mpeg");o = o === "probably" || o === "maybe";if (!s && !o) {
      r(e);return;
    }if (s) n("audio/ogg;base64,T2dnUwACAAAAAAAAAADqnjMlAAAAAOyyzPIBHgF2b3JiaXMAAAAAAUAfAABAHwAAQB8AAEAfAACZAU9nZ1MAAAAAAAAAAAAA6p4zJQEAAAANJGeqCj3//////////5ADdm9yYmlzLQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTAxMTAxIChTY2hhdWZlbnVnZ2V0KQAAAAABBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADAAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEAAAAAAAAAADqnjMlAgAAADzQPmcBAQA=");if (o) n("audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");var u = new Date().getTime();var a = window.setInterval(function () {
      var n = new Date().getTime();var i = n - u > 5e3;if (!t || i) {
        window.clearInterval(a);r(e);
      }
    }, 1);
  };
})();if (typeof MIDI === "undefined") var MIDI = {};if (typeof MIDI.Soundfont === "undefined") MIDI.Soundfont = {};(function () {
  "use strict";
  var e = false;MIDI.loadPlugin = function (r) {
    if (typeof r === "function") r = { callback: r };var i = r.instruments || r.instrument || "acoustic_grand_piano";if ((typeof i === "undefined" ? "undefined" : _typeof(i)) !== "object") i = [i];for (var s = 0; s < i.length; s++) {
      var o = i[s];if (typeof o === "number") {
        i[s] = MIDI.GeneralMIDI.byId[o];
      }
    }MIDI.soundfontUrl = r.soundfontUrl || MIDI.soundfontUrl || "./soundfont/";MIDI.audioDetect(function (s) {
      var o = "";if (n[r.api]) {
        o = r.api;
      } else if (n[window.location.hash.substr(1)]) {
        o = window.location.hash.substr(1);
      } else if (e && navigator.requestMIDIAccess) {
        o = "webmidi";
      } else if (window.webkitAudioContext || window.AudioContext) {
        o = "webaudio";
      } else if (window.Audio) {
        o = "audiotag";
      } else {
        o = "flash";
      }if (!t[o]) return;if (r.targetFormat) {
        var u = r.targetFormat;
      } else {
        var u = s["audio/ogg"] ? "ogg" : "mp3";
      }MIDI.lang = o;MIDI.supports = s;t[o](u, i, r);
    });
  };var t = {};t.webmidi = function (e, t, n) {
    if (MIDI.loader) MIDI.loader.message("Web MIDI API...");MIDI.WebMIDI.connect(n);
  };t.flash = function (e, t, n) {
    if (MIDI.loader) MIDI.loader.message("Flash API...");DOMLoader.script.add({ src: n.soundManagerUrl || "./inc/SoundManager2/script/soundmanager2.js", verify: "SoundManager", callback: function callback() {
        MIDI.Flash.connect(t, n);
      } });
  };t.audiotag = function (e, t, n) {
    if (MIDI.loader) MIDI.loader.message("HTML5 Audio API...");var o = s({ items: t, getNext: function getNext(t) {
        DOMLoader.sendRequest({ url: MIDI.soundfontUrl + t + "-" + e + ".js", onprogress: i, onload: function onload(e) {
            r(e.responseText);if (MIDI.loader) MIDI.loader.update(null, "Downloading", 100);o.getNext();
          } });
      }, onComplete: function onComplete() {
        MIDI.AudioTag.connect(n);
      } });
  };t.webaudio = function (e, t, n) {
    if (MIDI.loader) MIDI.loader.message("Web Audio API...");var o = s({ items: t, getNext: function getNext(t) {
        DOMLoader.sendRequest({ url: MIDI.soundfontUrl + t + "-" + e + ".js", onprogress: i, onload: function onload(e) {
            r(e.responseText);if (MIDI.loader) MIDI.loader.update(null, "Downloading...", 100);o.getNext();
          } });
      }, onComplete: function onComplete() {
        MIDI.WebAudio.connect(n);
      } });
  };var n = { webmidi: true, webaudio: true, audiotag: true, flash: true };var r = function r(e) {
    var t = document.createElement("script");t.language = "javascript";t.type = "text/javascript";t.text = e;document.body.appendChild(t);
  };var i = function i(e) {
    if (!this.totalSize) {
      this.totalSize = e.total;
    }var t = this.totalSize ? Math.round(e.loaded / this.totalSize * 100) : "";if (MIDI.loader) MIDI.loader.update(null, "Downloading...", t);
  };var s = function s(e) {
    var t = {};t.queue = [];for (var n in e.items) {
      if (e.items.hasOwnProperty(n)) {
        t.queue.push(e.items[n]);
      }
    }t.getNext = function () {
      if (!t.queue.length) return e.onComplete();e.getNext(t.queue.shift());
    };setTimeout(t.getNext, 1);return t;
  };
})();if (typeof MIDI === "undefined") var MIDI = {};(function () {
  "use strict";
  var e = function e(_e) {
    MIDI.api = _e.api;MIDI.setVolume = _e.setVolume;MIDI.programChange = _e.programChange;MIDI.noteOn = _e.noteOn;MIDI.noteOff = _e.noteOff;MIDI.chordOn = _e.chordOn;MIDI.chordOff = _e.chordOff;MIDI.stopAllNotes = _e.stopAllNotes;MIDI.getInput = _e.getInput;MIDI.getOutputs = _e.getOutputs;
  };(function () {
    var t = null;var n = null;var r = [];var i = MIDI.WebMIDI = { api: "webmidi" };i.setVolume = function (e, t) {
      n.send([176 + e, 7, t]);
    };i.programChange = function (e, t) {
      n.send([192 + e, t]);
    };i.noteOn = function (e, t, r, i) {
      n.send([144 + e, t, r], i * 1e3);
    };i.noteOff = function (e, t, r) {
      n.send([128 + e, t, 0], r * 1e3);
    };i.chordOn = function (e, t, r, i) {
      for (var s = 0; s < t.length; s++) {
        var o = t[s];n.send([144 + e, o, r], i * 1e3);
      }
    };i.chordOff = function (e, t, r) {
      for (var i = 0; i < t.length; i++) {
        var s = t[i];n.send([128 + e, s, 0], r * 1e3);
      }
    };i.stopAllNotes = function () {
      for (var e = 0; e < 16; e++) {
        n.send([176 + e, 123, 0]);
      }
    };i.getInput = function () {
      return t.getInputs();
    };i.getOutputs = function () {
      return t.getOutputs();
    };i.connect = function (r) {
      e(i);navigator.requestMIDIAccess().then(function (e) {
        t = e;n = t.outputs()[0];if (r.callback) r.callback();
      }, function (e) {
        if (window.AudioContext || window.webkitAudioContext) {
          r.api = "webaudio";
        } else if (window.Audio) {
          r.api = "audiotag";
        } else {
          r.api = "flash";
        }MIDI.loadPlugin(r);
      });
    };
  })();if (window.AudioContext || window.webkitAudioContext) (function () {
    var t = window.AudioContext || window.webkitAudioContext;var n = MIDI.WebAudio = { api: "webaudio" };var r;var i = {};var s = 127;var o = {};var u = function u(e, t, n, i, s) {
      var u = MIDI.GeneralMIDI.byName[e];var a = u.number;var f = t[n];if (!MIDI.Soundfont[e][f]) {
        return s(e);
      }var l = MIDI.Soundfont[e][f].split(",")[1];var c = Base64Binary.decodeArrayBuffer(l);r.decodeAudioData(c, function (r) {
        var l = f;while (l.length < 3) {
          l += "&nbsp;";
        }if (typeof MIDI.loader !== "undefined") {
          MIDI.loader.update(null, u.instrument + "<br>Processing: " + (n / 87 * 100 >> 0) + "%<br>" + l);
        }r.id = f;i[n] = r;if (i.length === t.length) {
          while (i.length) {
            r = i.pop();if (!r) continue;var c = MIDI.keyToNote[r.id];o[a + "" + c] = r;
          }s(e);
        }
      });
    };n.setVolume = function (e, t) {
      s = t;
    };n.programChange = function (e, t) {
      MIDI.channels[e].instrument = t;
    };n.noteOn = function (e, t, n, u) {
      if (!MIDI.channels[e]) return;var a = MIDI.channels[e].instrument;if (!o[a + "" + t]) return;if (u < r.currentTime) u += r.currentTime;var f = r.createBufferSource();i[e + "" + t] = f;f.buffer = o[a + "" + t];f.connect(r.destination);if (r.createGain) {
        f.gainNode = r.createGain();
      } else {
        f.gainNode = r.createGainNode();
      }var l = n / 127 * (s / 127) * 2 - 1;f.gainNode.connect(r.destination);f.gainNode.gain.value = Math.max(-1, l);f.connect(f.gainNode);if (f.noteOn) {
        f.noteOn(u || 0);
      } else {
        f.start(u || 0);
      }return f;
    };n.noteOff = function (e, t, n) {
      n = n || 0;if (n < r.currentTime) n += r.currentTime;var s = i[e + "" + t];if (!s) return;if (s.gainNode) {
        var o = s.gainNode.gain;o.linearRampToValueAtTime(o.value, n);o.linearRampToValueAtTime(-1, n + .2);
      }if (s.noteOff) {
        s.noteOff(n + .3);
      } else {
        s.stop(n + .3);
      }delete i[e + "" + t];
    };n.chordOn = function (e, t, r, i) {
      var s = {},
          o;for (var u = 0, a = t.length; u < a; u++) {
        s[o = t[u]] = n.noteOn(e, o, r, i);
      }return s;
    };n.chordOff = function (e, t, r) {
      var i = {},
          s;for (var o = 0, u = t.length; o < u; o++) {
        i[s = t[o]] = n.noteOff(e, s, r);
      }return i;
    };n.stopAllNotes = function () {
      for (var e in i) {
        var t = 0;if (t < r.currentTime) t += r.currentTime;i[e].gain.linearRampToValueAtTime(1, t);i[e].gain.linearRampToValueAtTime(0, t + .2);i[e].noteOff(t + .3);delete i[e];
      }
    };n.connect = function (i) {
      e(n);MIDI.Player.ctx = r = new t();var s = [];var o = MIDI.keyToNote;for (var a in o) {
        s.push(a);
      }var f = [];var l = {};var c = function c(e) {
        delete l[e];for (var t in l) {
          break;
        }if (!t) i.callback();
      };for (var h in MIDI.Soundfont) {
        l[h] = true;for (var p = 0; p < s.length; p++) {
          u(h, s, p, f, c);
        }
      }
    };
  })();if (window.Audio) (function () {
    var t = MIDI.AudioTag = { api: "audiotag" };var n = {};var r = 127;var i = -1;var s = [];var o = [];var u = {};for (var a = 0; a < 12; a++) {
      s[a] = new Audio();
    }var f = function f(e, t) {
      if (!MIDI.channels[e]) return;var n = MIDI.channels[e].instrument;var a = MIDI.GeneralMIDI.byId[n].id;var t = u[t];if (!t) return;var f = a + "" + t.id;var l = (i + 1) % s.length;var c = s[l];o[l] = f;c.src = MIDI.Soundfont[a][t.id];c.volume = r / 127;c.play();i = l;
    };var l = function l(e, t) {
      if (!MIDI.channels[e]) return;var n = MIDI.channels[e].instrument;var r = MIDI.GeneralMIDI.byId[n].id;var t = u[t];if (!t) return;var a = r + "" + t.id;for (var f = 0; f < s.length; f++) {
        var l = (f + i + 1) % s.length;var c = o[l];if (c && c == a) {
          s[l].pause();o[l] = null;return;
        }
      }
    };t.programChange = function (e, t) {
      MIDI.channels[e].instrument = t;
    };t.setVolume = function (e, t) {
      r = t;
    };t.noteOn = function (e, t, r, i) {
      var s = n[t];if (!u[s]) return;if (i) {
        return window.setTimeout(function () {
          f(e, s);
        }, i * 1e3);
      } else {
        f(e, s);
      }
    };t.noteOff = function (e, t, r) {
      var i = n[t];if (!u[i]) return;if (r) {
        return setTimeout(function () {
          l(e, i);
        }, r * 1e3);
      } else {
        l(e, i);
      }
    };t.chordOn = function (e, t, r, i) {
      for (var s = 0; s < t.length; s++) {
        var o = t[s];var a = n[o];if (!u[a]) continue;if (i) {
          return window.setTimeout(function () {
            f(e, a);
          }, i * 1e3);
        } else {
          f(e, a);
        }
      }
    };t.chordOff = function (e, t, r) {
      for (var i = 0; i < t.length; i++) {
        var s = t[i];var o = n[s];if (!u[o]) continue;if (r) {
          return window.setTimeout(function () {
            l(e, o);
          }, r * 1e3);
        } else {
          l(e, o);
        }
      }
    };t.stopAllNotes = function () {
      for (var e = 0, t = s.length; e < t; e++) {
        s[e].pause();
      }
    };t.connect = function (r) {
      for (var i in MIDI.keyToNote) {
        n[MIDI.keyToNote[i]] = i;u[i] = { id: i };
      }e(t);if (r.callback) r.callback();
    };
  })();(function () {
    var t = MIDI.Flash = { api: "flash" };var n = {};var r = {};t.programChange = function (e, t) {
      MIDI.channels[e].instrument = t;
    };t.setVolume = function (e, t) {};t.noteOn = function (e, t, i, s) {
      if (!MIDI.channels[e]) return;var o = MIDI.channels[e].instrument;var u = MIDI.GeneralMIDI.byId[o].number;t = u + "" + n[t];if (!r[t]) return;if (s) {
        return window.setTimeout(function () {
          r[t].play({ volume: i * 2 });
        }, s * 1e3);
      } else {
        r[t].play({ volume: i * 2 });
      }
    };t.noteOff = function (e, t, n) {};t.chordOn = function (e, t, i, s) {
      if (!MIDI.channels[e]) return;var o = MIDI.channels[e].instrument;var u = MIDI.GeneralMIDI.byId[o].number;for (var a in t) {
        var f = t[a];var l = u + "" + n[f];if (r[l]) {
          r[l].play({ volume: i * 2 });
        }
      }
    };t.chordOff = function (e, t, n) {};t.stopAllNotes = function () {};t.connect = function (i, s) {
      soundManager.flashVersion = 9;soundManager.useHTML5Audio = true;soundManager.url = s.soundManagerSwfUrl || "../inc/SoundManager2/swf/";soundManager.useHighPerformance = true;soundManager.wmode = "transparent";soundManager.flashPollingInterval = 1;soundManager.debugMode = false;soundManager.onload = function () {
        var o = function o(e, t, n) {
          var i = MIDI.GeneralMIDI.byName[e];var s = i.number;r[s + "" + t] = soundManager.createSound({ id: t, url: MIDI.soundfontUrl + e + "-mp3/" + t + ".mp3", multiShot: true, autoLoad: true, onload: n });
        };var u = [];var a = 88;var f = i.length * a;for (var l = 0; l < i.length; l++) {
          var c = i[l];var h = function h() {
            u.push(this.sID);if (typeof MIDI.loader === "undefined") return;MIDI.loader.update(null, "Processing: " + this.sID);
          };for (var p = 0; p < a; p++) {
            var d = n[p + 21];o(c, d, h);
          }
        }e(t);var v = window.setInterval(function () {
          if (u.length < f) return;window.clearInterval(v);if (s.callback) s.callback();
        }, 25);
      };soundManager.onerror = function () {};for (var o in MIDI.keyToNote) {
        n[MIDI.keyToNote[o]] = o;
      }
    };
  })();MIDI.GeneralMIDI = function (e) {
    var t = function t(e) {
      return e.replace(/[^a-z0-9 ]/gi, "").replace(/[ ]/g, "_").toLowerCase();
    };var n = { byName: {}, byId: {}, byCategory: {} };for (var r in e) {
      var i = e[r];for (var s = 0, o = i.length; s < o; s++) {
        var u = i[s];if (!u) continue;var a = parseInt(u.substr(0, u.indexOf(" ")), 10);u = u.replace(a + " ", "");n.byId[--a] = n.byName[t(u)] = n.byCategory[t(r)] = { id: t(u), instrument: u, number: a, category: r };
      }
    }return n;
  }({ Piano: ["1 Acoustic Grand Piano", "2 Bright Acoustic Piano", "3 Electric Grand Piano", "4 Honky-tonk Piano", "5 Electric Piano 1", "6 Electric Piano 2", "7 Harpsichord", "8 Clavinet"], "Chromatic Percussion": ["9 Celesta", "10 Glockenspiel", "11 Music Box", "12 Vibraphone", "13 Marimba", "14 Xylophone", "15 Tubular Bells", "16 Dulcimer"], Organ: ["17 Drawbar Organ", "18 Percussive Organ", "19 Rock Organ", "20 Church Organ", "21 Reed Organ", "22 Accordion", "23 Harmonica", "24 Tango Accordion"], Guitar: ["25 Acoustic Guitar (nylon)", "26 Acoustic Guitar (steel)", "27 Electric Guitar (jazz)", "28 Electric Guitar (clean)", "29 Electric Guitar (muted)", "30 Overdriven Guitar", "31 Distortion Guitar", "32 Guitar Harmonics"], Bass: ["33 Acoustic Bass", "34 Electric Bass (finger)", "35 Electric Bass (pick)", "36 Fretless Bass", "37 Slap Bass 1", "38 Slap Bass 2", "39 Synth Bass 1", "40 Synth Bass 2"], Strings: ["41 Violin", "42 Viola", "43 Cello", "44 Contrabass", "45 Tremolo Strings", "46 Pizzicato Strings", "47 Orchestral Harp", "48 Timpani"], Ensemble: ["49 String Ensemble 1", "50 String Ensemble 2", "51 Synth Strings 1", "52 Synth Strings 2", "53 Choir Aahs", "54 Voice Oohs", "55 Synth Choir", "56 Orchestra Hit"], Brass: ["57 Trumpet", "58 Trombone", "59 Tuba", "60 Muted Trumpet", "61 French Horn", "62 Brass Section", "63 Synth Brass 1", "64 Synth Brass 2"], Reed: ["65 Soprano Sax", "66 Alto Sax", "67 Tenor Sax", "68 Baritone Sax", "69 Oboe", "70 English Horn", "71 Bassoon", "72 Clarinet"], Pipe: ["73 Piccolo", "74 Flute", "75 Recorder", "76 Pan Flute", "77 Blown Bottle", "78 Shakuhachi", "79 Whistle", "80 Ocarina"], "Synth Lead": ["81 Lead 1 (square)", "82 Lead 2 (sawtooth)", "83 Lead 3 (calliope)", "84 Lead 4 (chiff)", "85 Lead 5 (charang)", "86 Lead 6 (voice)", "87 Lead 7 (fifths)", "88 Lead 8 (bass + lead)"], "Synth Pad": ["89 Pad 1 (new age)", "90 Pad 2 (warm)", "91 Pad 3 (polysynth)", "92 Pad 4 (choir)", "93 Pad 5 (bowed)", "94 Pad 6 (metallic)", "95 Pad 7 (halo)", "96 Pad 8 (sweep)"], "Synth Effects": ["97 FX 1 (rain)", "98 FX 2 (soundtrack)", "99 FX 3 (crystal)", "100 FX 4 (atmosphere)", "101 FX 5 (brightness)", "102 FX 6 (goblins)", "103 FX 7 (echoes)", "104 FX 8 (sci-fi)"], Ethnic: ["105 Sitar", "106 Banjo", "107 Shamisen", "108 Koto", "109 Kalimba", "110 Bagpipe", "111 Fiddle", "112 Shanai"], Percussive: ["113 Tinkle Bell", "114 Agogo", "115 Steel Drums", "116 Woodblock", "117 Taiko Drum", "118 Melodic Tom", "119 Synth Drum"], "Sound effects": ["120 Reverse Cymbal", "121 Guitar Fret Noise", "122 Breath Noise", "123 Seashore", "124 Bird Tweet", "125 Telephone Ring", "126 Helicopter", "127 Applause", "128 Gunshot"] });MIDI.channels = function () {
    var e = {};for (var t = 0; t < 16; t++) {
      e[t] = { instrument: 0, mute: false, mono: false, omni: false, solo: false };
    }return e;
  }();MIDI.pianoKeyOffset = 21;MIDI.keyToNote = {};MIDI.noteToKey = {};(function () {
    var e = 21;var t = 108;var n = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];for (var r = e; r <= t; r++) {
      var i = (r - 12) / 12 >> 0;var s = n[r % 12] + i;MIDI.keyToNote[s] = r;MIDI.noteToKey[r] = s;
    }
  })();
})();if (typeof MIDI === "undefined") var MIDI = {};if (typeof MIDI.Player === "undefined") MIDI.Player = {};(function () {
  "use strict";
  var e = MIDI.Player;e.callback = undefined;e.currentTime = 0;e.endTime = 0;e.restart = 0;e.playing = false;e.timeWarp = 1;e.start = e.resume = function () {
    if (e.currentTime < -1) e.currentTime = -1;f(e.currentTime);
  };e.pause = function () {
    var t = e.restart;l();e.restart = t;
  };e.stop = function () {
    l();e.restart = 0;e.currentTime = 0;
  };e.addListener = function (e) {
    s = e;
  };e.removeListener = function () {
    s = undefined;
  };e.clearAnimation = function () {
    if (e.interval) {
      window.clearInterval(e.interval);
    }
  };e.setAnimation = function (t) {
    var n = typeof t === "function" ? t : t.callback;var r = t.interval || 30;var s = 0;var o = 0;var u = 0;e.clearAnimation();e.interval = window.setInterval(function () {
      if (e.endTime === 0) return;if (e.playing) {
        s = u === e.currentTime ? o - new Date().getTime() : 0;if (e.currentTime === 0) {
          s = 0;
        } else {
          s = e.currentTime - s;
        }if (u !== e.currentTime) {
          o = new Date().getTime();u = e.currentTime;
        }
      } else {
        s = e.currentTime;
      }var t = e.endTime;var r = s / t;var a = s / 1e3;var f = a / 60;var l = a - f * 60;var c = f * 60 + l;var h = t / 1e3;if (h - c < -1) return;n({ now: c, end: h, events: i });
    }, r);
  };e.loadMidiFile = function () {
    e.replayer = new Replayer(MidiFile(e.currentData), e.timeWarp);e.data = e.replayer.getData();e.endTime = a();
  };e.loadFile = function (t, n) {
    e.stop();if (t.indexOf("base64,") !== -1) {
      var r = window.atob(t.split(",")[1]);e.currentData = r;e.loadMidiFile();if (n) n(r);return;
    }var i = new XMLHttpRequest();i.open("GET", t);i.overrideMimeType("text/plain; charset=x-user-defined");i.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        var t = this.responseText || "";var r = [];var i = t.length;var s = String.fromCharCode;for (var o = 0; o < i; o++) {
          r[o] = s(t.charCodeAt(o) & 255);
        }var u = r.join("");e.currentData = u;e.loadMidiFile();if (n) n(u);
      }
    };i.send();
  };var t = [];var n;var r = 0;var i = {};var s = undefined;var o = function o(t, r, _o, u, a, l) {
    var c = window.setTimeout(function () {
      var u = { channel: t, note: r, now: _o, end: e.endTime, message: a, velocity: l };if (a === 128) {
        delete i[r];
      } else {
        i[r] = u;
      }if (s) {
        s(u);
      }e.currentTime = _o;if (e.currentTime === n && n < e.endTime) {
        f(n, true);
      }
    }, _o - u);return c;
  };var u = function u() {
    if (MIDI.lang === "WebAudioAPI") {
      return MIDI.Player.ctx;
    } else if (!e.ctx) {
      e.ctx = { currentTime: 0 };
    }return e.ctx;
  };var a = function a() {
    var t = e.data;var n = t.length;var r = .5;for (var i = 0; i < n; i++) {
      r += t[i][1];
    }return r;
  };var f = function f(i, s) {
    if (!e.replayer) return;if (!s) {
      if (typeof i === "undefined") i = e.restart;if (e.playing) l();e.playing = true;e.data = e.replayer.getData();e.endTime = a();
    }var f;var c = 0;var h = 0;var p = e.data;var d = u();var v = p.length;n = .5;r = d.currentTime;for (var m = 0; m < v && h < 100; m++) {
      n += p[m][1];if (n < i) {
        c = n;continue;
      }i = n - c;var g = p[m][0].event;if (g.type !== "channel") continue;var y = g.channel;switch (g.subtype) {case "noteOn":
          if (MIDI.channels[y].mute) break;f = g.noteNumber - (e.MIDIOffset || 0);t.push({ event: g, source: MIDI.noteOn(y, g.noteNumber, g.velocity, i / 1e3 + d.currentTime), interval: o(y, f, n, c, 144, g.velocity) });h++;break;case "noteOff":
          if (MIDI.channels[y].mute) break;f = g.noteNumber - (e.MIDIOffset || 0);t.push({ event: g, source: MIDI.noteOff(y, g.noteNumber, i / 1e3 + d.currentTime), interval: o(y, f, n, c, 128) });break;default:
          break;}
    }
  };var l = function l() {
    var n = u();e.playing = false;e.restart += (n.currentTime - r) * 1e3;while (t.length) {
      var o = t.pop();window.clearInterval(o.interval);if (!o.source) continue;if (typeof o.source === "number") {
        window.clearTimeout(o.source);
      } else {
        o.source.disconnect(0);
      }
    }for (var a in i) {
      var o = i[a];if (i[a].message === 144 && s) {
        s({ channel: o.channel, note: o.note, now: o.now, end: o.end, message: 128, velocity: o.velocity });
      }
    }i = {};
  };
})();if (typeof DOMLoader === "undefined") var DOMLoader = {};if (typeof XMLHttpRequest === "undefined") {
  var XMLHttpRequest;(function () {
    var e = [function () {
      return new ActiveXObject("Msxml2.XMLHTTP");
    }, function () {
      return new ActiveXObject("Msxml3.XMLHTTP");
    }, function () {
      return new ActiveXObject("Microsoft.XMLHTTP");
    }];for (var t = 0; t < e.length; t++) {
      try {
        e[t]();
      } catch (n) {
        continue;
      }break;
    }XMLHttpRequest = e[t];
  })();
}if (typeof new XMLHttpRequest().responseText === "undefined") {
  var IEBinaryToArray_ByteStr_Script = "<!-- IEBinaryToArray_ByteStr -->\r\n" + "<script type='text/vbscript'>\r\n" + "Function IEBinaryToArray_ByteStr(Binary)\r\n" + "   IEBinaryToArray_ByteStr = CStr(Binary)\r\n" + "End Function\r\n" + "Function IEBinaryToArray_ByteStr_Last(Binary)\r\n" + "   Dim lastIndex\r\n" + "   lastIndex = LenB(Binary)\r\n" + "   if lastIndex mod 2 Then\r\n" + "       IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n" + "   Else\r\n" + "       IEBinaryToArray_ByteStr_Last = " + '""' + "\r\n" + "   End If\r\n" + "End Function\r\n" + "</script>\r\n";document.write(IEBinaryToArray_ByteStr_Script);DOMLoader.sendRequest = function (e) {
    function t(e) {
      var t = {};for (var n = 0; n < 256; n++) {
        for (var r = 0; r < 256; r++) {
          t[String.fromCharCode(n + r * 256)] = String.fromCharCode(n) + String.fromCharCode(r);
        }
      }var i = IEBinaryToArray_ByteStr(e);var s = IEBinaryToArray_ByteStr_Last(e);return i.replace(/[\s\S]/g, function (e) {
        return t[e];
      }) + s;
    }var n = XMLHttpRequest();n.open("GET", e.url, true);if (e.responseType) n.responseType = e.responseType;if (e.onerror) n.onerror = e.onerror;if (e.onprogress) n.onprogress = e.onprogress;n.onreadystatechange = function (r) {
      if (n.readyState === 4) {
        if (n.status === 200) {
          n.responseText = t(n.responseBody);
        } else {
          n = false;
        }if (e.onload) e.onload(n);
      }
    };n.setRequestHeader("Accept-Charset", "x-user-defined");n.send(null);return n;
  };
} else {
  DOMLoader.sendRequest = function (e) {
    var t = new XMLHttpRequest();t.open(e.data ? "POST" : "GET", e.url, true);if (t.overrideMimeType) t.overrideMimeType("text/plain; charset=x-user-defined");if (e.data) t.setRequestHeader("Content-type", "application/x-www-form-urlencoded");if (e.responseType) t.responseType = e.responseType;if (e.onerror) t.onerror = e.onerror;if (e.onprogress) t.onprogress = e.onprogress;t.onreadystatechange = function (n) {
      if (t.readyState === 4) {
        if (t.status !== 200 && t.status != 304) {
          if (e.onerror) e.onerror(n, false);return;
        }if (e.onload) {
          e.onload(t);
        }
      }
    };t.send(e.data);return t;
  };
}var Base64Binary = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", decodeArrayBuffer: function decodeArrayBuffer(e) {
    var t = Math.ceil(3 * e.length / 4);var n = new ArrayBuffer(t);this.decode(e, n);return n;
  }, decode: function decode(e, t) {
    var n = this._keyStr.indexOf(e.charAt(e.length - 1));var r = this._keyStr.indexOf(e.charAt(e.length - 1));var i = Math.ceil(3 * e.length / 4);if (n == 64) i--;if (r == 64) i--;var s;var o, u, a;var f, l, c, h;var p = 0;var d = 0;if (t) s = new Uint8Array(t);else s = new Uint8Array(i);e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");for (p = 0; p < i; p += 3) {
      f = this._keyStr.indexOf(e.charAt(d++));l = this._keyStr.indexOf(e.charAt(d++));c = this._keyStr.indexOf(e.charAt(d++));h = this._keyStr.indexOf(e.charAt(d++));o = f << 2 | l >> 4;u = (l & 15) << 4 | c >> 2;a = (c & 3) << 6 | h;s[p] = o;if (c != 64) s[p + 1] = u;if (h != 64) s[p + 2] = a;
    }return s;
  } };

/***/ }),

/***/ "./public/plugin/editor/js/bacheditor.js":
/***/ (function(module, exports) {

/**
 * editor.js
 * 一个复杂的编辑器，支持markdown的语法，使用codemirror做渲染
 * 从lepture的Editor修改而来。http://lab.lepture.com/editor/
 *
 * 用法：
 * var myEditor = new Editor({toolbar: false, status: true});
 * myEditor.rendor('#myEditor');
 *
 * @author integ@segmentfault.com
 **/

$(function () {
    'use strict';

    Editor.prototype.uploadPath = '';
    Editor.prototype.token = '';
    Editor.prototype.ajaxTopicSearchUrl = '';

    /**
     * Interface of Editor.
     */
    function Editor(url, ajaxTopicSearchUrl) {
        //使用默认参数
        var options = $.extend({
            toolbar: Editor.toolbar,
            statusbar: true,
            status: Editor.statusbar
        }, options);
        this.options = options;
        Editor.prototype.uploadPath = url;
        Editor.prototype.ajaxTopicSearchUrl = ajaxTopicSearchUrl;
    }
    window.Editor = Editor;

    // 默认的状态栏
    Editor.statusbar = ['lines', 'words', 'cursor'];

    // 默认的toolbar
    // [{name: 'bold', shortcut: 'Ctrl-B', className: 'icon-bold'}]
    Editor.toolbar = [{
        name: 'bold',
        action: toggleBold,
        className: 'editor__menu--bold'
    }, {
        name: 'italic',
        action: toggleItalic,
        className: 'editor__menu--italic'
    }, '|', {
        name: 'link',
        action: drawLink,
        className: 'editor__menu--link'
    }, {
        name: 'quote',
        action: toggleBlockquote,
        className: 'editor__menu--quote'
    }, {
        name: 'code',
        action: toggleBlockcode,
        className: 'editor__menu--code'
    }, {
        name: 'image',
        action: drawImage,
        className: 'editor__menu--img'
    }, '|', {
        name: 'ordered-list',
        action: toggleOrderedList,
        className: 'editor__menu--ol'
    }, {
        name: 'unordered-list',
        action: toggleUnOrderedList,
        className: 'editor__menu--ul'
    }, {
        name: 'title',
        action: toggleTitle,
        className: 'editor__menu--title'
    }, {
        name: 'hr',
        action: drawHr,
        className: 'editor__menu--hr'
    }, '|', {
        name: 'undo',
        action: undo,
        className: 'editor__menu--undo'
    }, {
        name: 'redo',
        action: redo,
        className: 'editor__menu--redo'
    }, '|',
    // {
    //     name: 'fullscreen',
    //     action: toggleBig,
    //     className: 'editor__menu--zen'
    // },
    // {
    //     name: 'zen',
    //     action: toggleFullScreen,
    //     className: 'editor__menu--two'
    // }
    {
        name: 'fullscreen',
        action: toggleBig,
        className: 'editor__menu--zen'
    }];

    // 是否全屏
    Editor.isBig = false;
    Editor.originHeight = 420;

    /**
     * get the value of the Editor
     * myEditor.getVal();
     **/
    Editor.prototype.getVal = function () {
        var cm = this.codemirror;
        return cm.getValue();
    };

    /**
     * get the parsed value of the Editor
     * myEditor.getHTML();
     **/
    Editor.prototype.getHTML = function () {
        var cm = this.codemirror;
        return marked(cm.getValue());
    };

    /**
     * set the value of the Editor
     * myEditor.setVal(text);
     **/
    Editor.prototype.setVal = function (text) {
        var cm = this.codemirror;
        return cm.setValue(text);
    };

    /**
     * bind change event of the Editor
     * myEditor.change(function(cm){});
     **/
    Editor.prototype.change = function (callback) {
        this.isModified = true;
        var cm = this.codemirror;
        cm.on('change', callback);
    };

    /**
     * Render editor to the given element.
     * myEditor.render('#editor')
     * mode选择"live", 'edit', 'preview'
     */
    Editor.prototype.render = function (el, mode, callback) {
        mode = mode || 'live';
        el = $(el)[0]; //选中被渲染的textarea的DOM
        if (this._rendered && this._rendered === el) {
            // Already rendered.
            return;
        }

        this.element = el;
        this.isSubmit = false;
        var options = this.options;

        var self = this;
        var keyMaps = {};

        for (var key in shortcuts) {
            (function (key) {
                keyMaps[fixShortcut(key)] = function () {
                    shortcuts[key](self);
                };
            })(key);
        }

        // 对markdown列表的支持
        keyMaps.Enter = 'newlineAndIndentContinueMarkdownList';

        // 渲染codemirror
        this.codemirror = CodeMirror.fromTextArea(el, {
            mode: 'markdown',
            theme: 'paper',
            lineNumbers: true,
            lineWrapping: true,
            extraKeys: keyMaps,
            cursorBlinkRate: 500,
            viewportMargin: Infinity
        });
        /**
         * cm第一次渲染时cursor位置是错的
         * 第一次点击cm的文本时向当前光标位置插入一个空格然后再删掉
         **/
        var cm = this.codemirror;
        var isAtting = false; // 是否正在at
        var query = ''; // at时查询的人名
        var atCatch = {}; // 缓存at的ajax数据，可以少发几次请求
        var myDelay = null; // setTimeout
        var parserDelay = null;
        cm.on('change', function (event, c) {
            //codemirror 一有变化就检查
            $(el).text(cm.getValue());
            //WYSIWYG
            if (parserDelay) {
                clearTimeout(parserDelay);
            }
            if ($('#editorLive').length) {
                parserDelay = setTimeout(function () {
                    var text = cm.getValue();
                    $('#editorLive').html(marked(text));
                    highLight($('#editorLive'));
                }, 500);
            }
            if ($('.editor-preview-active.onlive').length) {
                parserDelay = setTimeout(function () {
                    var text = cm.getValue();
                    $('.editor-preview-active.onlive').html(marked(text));
                    highLight($('.editor-preview-active.onlive'));
                }, 500);
            }
            // 用户第一次输入@时 todo 暂时注释 @ 功能
            //if(!isAtting) {
            //    if(c.text[0] === '@' && c.origin === '+input') {
            //        isAtting = true;
            //        if($('#atwho').length === 0) {  //之前没有at过
            //            var temp = '<ul id="atwho" class="dropdown-menu"></ul>';
            //            $('.editor').append(temp);
            //            editorAt('');
            //            $('#atwho').delegate('a', 'click', function(e) {
            //                e.preventDefault();
            //                isAtting = false;
            //                var curLine = cm.getCursor().line;
            //                var curCh = cm.getCursor().ch;
            //                var userName = $(this).parent('li').data('value');
            //                var atCh = cm.getRange({line: curLine, ch: 0}, {line: curLine, ch: curCh}).lastIndexOf('@');    //最后一个@的位置
            //                cm.replaceRange(userName + ' ', {line: curLine, ch: atCh + 1}, {line: curLine, ch: curCh});
            //                cm.focus();
            //                $('#atwho').html('').hide();
            //                query = '';     //最后清掉query
            //            });
            //        } else {    //已经at过
            //            // $('#atwho').html('').hide();
            //            editorAt('');
            //        }
            //    }
            //} else if(isAtting) {
            //    // 用户@中输入空格时
            //    if(c.origin === '+input' && c.text[0] === ' ') {   // 用户输入空格或@
            //        isAtting = false;   // 退出at状态
            //        query = '';
            //        $('#atwho').html('').hide();
            //    } else if(c.origin === '+input' && c.text[0] === '@') {   // 用户输入@
            //        isAtting = false;   // 退出at状态
            //        query = '';
            //        // $('#atwho').html('').hide();
            //        editorAt(query);
            //    } else if(c.origin === '+input') {    // at中输入其他字符
            //        isAtting = true;   // at状态
            //        query += c.text[0];
            //        editorAt(query);
            //    } else if(c.origin === '+delete') {
            //        if(c.removed[0] !== '@') {      //删除非@
            //            isAtting = true;   // at状态
            //            query = query.slice(0, -1);
            //            editorAt(query);
            //        } else {    // 删除@
            //            isAtting = false;
            //            query = '';
            //            $('#atwho').html('').hide();
            //        }
            //    }
            //}
        });

        var _dragText = false;
        cm.on('dragstart', function (c, e) {
            _dragText = true;
        });
        cm.on('dragover', function (c, e) {
            if (!_dragText) {
                drawImage(self);
                _dragText = false;
            }
        });

        cm.on('keydown', function (c, e) {
            if (!isAtting) {
                return;
            }
            switch (e.keyCode) {
                case 38:
                    {
                        // Up
                        e.preventDefault();
                        if ($('#atwho .active').length) {
                            $('#atwho .active').removeClass('active').prev('li').addClass('active');
                        } else {
                            $('#atwho li:last').addClass('active');
                        }
                        break;
                    }
                case 40:
                    {
                        // Down
                        e.preventDefault();
                        if ($('#atwho .active').length) {
                            $('#atwho .active').removeClass('active').next('li').addClass('active');
                        } else {
                            $('#atwho li:first').addClass('active');
                        }
                        break;
                    }
                case 13:
                    {
                        // Enter
                        e.preventDefault();
                        $('#atwho .active a').trigger('click');
                        break;
                    }
                case 27:
                    {
                        // Esc
                        e.preventDefault();
                        $('#atwho').html('').hide();
                        break;
                    }
            }
        });

        function editorAt(query) {
            var _sendData = {};
            if (query === '@' || query === '') {
                //确保query不为空
                if ($('#answerIt').length) {
                    // 回答问题的编辑器
                    var _qid = $('#answerIt').data('id');
                    _sendData = { questionId: _qid };
                    // $('#atwho').html('').hide();
                } else {
                    return;
                }
            }
            if (query.indexOf('@') === 0) {
                //当第一个字符为@时，切掉
                query = query.slice(1);
            }
            if (query.indexOf(' ') !== -1) {
                //包含空格时 输入中文时被坑了
                if (query.match(/[\u4E00-\u9FA5\uf900-\ufa2d]/ig)) {
                    //有中文
                    query = query.replace(/[^\u4E00-\u9FA5\uf900-\ufa2d]*/g, '');
                } else {
                    //没有中文
                    query = query.replace(' ', '');
                    query = query.replace(/(\w){2}/g, '$1');
                }
            }
            if (query.match(/[\u4E00-\u9FA5\uf900-\ufa2d]/ig)) {
                //中英混杂时
                query = query.replace(/[^\u4E00-\u9FA5\uf900-\ufa2d]*/g, '');
            }
            var cursorPos = $('.CodeMirror-cursor').caret('offset');
            var _top = cursorPos.top + cursorPos.height;
            var _left = cursorPos.left;
            if ($('.editor__menu--zen').length) {
                _top = cursorPos.top + cursorPos.height - $('.editor').offset().top;
                _left = cursorPos.left - $('.editor').offset().left;
            }
            var _html = '';
            var _temp = '<li data-value="{{name}}"><a href="javacript:void(0);"><img class="avatar-24 mr10" src="{{avatarUrl}}">{{name}} &nbsp; <small>@{{slug}}</small></a></li>';

            // 有缓存
            if (atCatch[query]) {
                if (atCatch[query].length === 0) {
                    //缓存中数据为空
                    return;
                } else {
                    atCatch[query].forEach(function (item) {
                        _html += template(_temp, item);
                    });
                    $('#atwho').html(_html);
                    $('#atwho').css({
                        left: _left,
                        top: _top
                    }).show();
                }
            } else {
                if (myDelay) {
                    // 如果已经在delay中
                    clearTimeout(myDelay); // 清掉上次的settimeout
                }
                myDelay = setTimeout(function () {
                    if (!_sendData.questionId) {
                        _sendData = { q: query };
                    }
                    $.getJSON('/api/user?do=search', _sendData, function (o) {
                        if (!o.status) {
                            // status为0
                            atCatch[query] = o.data; //添加缓存数据
                            if (o.data.length === 0) {
                                //返回空数组
                                $('#atwho').html('').hide();
                                return;
                            }
                            o.data.forEach(function (item) {
                                _html += template(_temp, item);
                            });
                            $('#atwho').css({
                                left: _left,
                                top: _top
                            }).show();
                            $('#atwho').html(_html);
                        }
                    });
                }, 250);
            }
        }

        var isVirgin = true;
        $('.CodeMirror-lines').click(function () {
            if (isVirgin) {
                var _pos = cm.getCursor();
                cm.replaceRange(' ', _pos, _pos);
                isVirgin = false;
                cm.replaceRange('', _pos, { line: _pos.line, ch: _pos.ch + 1 });
            }
        });
        // 跳转前提醒
        $(window).bind('beforeunload', function () {
            if (cm.getValue() !== $(el).text()) {
                return '你可以到草稿页，找回已经编辑的内容。';
            }
        });

        if (options.toolbar !== false) {
            this.createToolbar(); //渲染工具栏
        }
        if (options.status !== false) {} //渲染状态栏
        // //this.createStatusbar();   //暂时不需要状态栏
        // this.change(function() {    //绑定状态操作
        // });


        //resize
        var resizeHtml = '<a class="editor__resize" href="javascript:void(0);">===</a>';
        $(el).parent('.editor').css('min-height', '0').append(resizeHtml);

        //拖动改变大小
        var staticOffset,
            iLastMousePos = 0,
            iMin = 32;
        var textarea = $('.CodeMirror'); //要改变大小的codemirror
        /* private functions */
        function startDrag(e) {
            iLastMousePos = mousePosition(e).y;

            staticOffset = textarea.height() - iLastMousePos;
            textarea.css('opacity', 0.3);

            $(document).mousemove(performDrag).mouseup(endDrag);
            return false;
        }

        function performDrag(e) {
            var iThisMousePos = mousePosition(e).y,
                iMousePos = staticOffset + iThisMousePos;
            if (iLastMousePos >= iThisMousePos) {
                iMousePos -= 5;
            }

            iLastMousePos = iThisMousePos;
            iMousePos = Math.max(iMin, iMousePos);
            textarea.height(iMousePos + 'px');

            if (iMousePos < iMin) {
                endDrag(e);
            }
            return false;
        }

        function endDrag() {
            $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
            var textarea = $('.CodeMirror');
            textarea.css('opacity', 1);
            $('.CodeMirror-scroll, .CodeMirror-gutters').css('height', '100%');
            textarea.focus();
            textarea = null;

            staticOffset = null;
            iLastMousePos = 0;
        }

        function mousePosition(e) {
            return { x: e.clientX + document.documentElement.scrollLeft, y: e.clientY + document.documentElement.scrollTop };
        }

        $('.editor__resize').on('mousedown', startDrag);

        // 当toolbar看不到时，position:fixed toolbar的位置
        $(window).scroll(function () {
            if (!self.isBig) {
                var _width = $('.editor').width(); //编辑器宽度
                var _top = $('.editor').offset().top; //编辑器距离页面顶部的高度
                var _scrollTop = $(this).scrollTop(); //当前滚动条的位置
                var _editorTop = 62 + $('.editor-help .tab-content').height(); //编辑器应该距离页面顶部
                if (_scrollTop >= _top) {
                    $('.editor-help-content.active').removeClass('active');
                    $('.editor__menu').css({
                        position: 'fixed',
                        top: 0,
                        'z-index': 1000,
                        width: _width
                    });
                    $('.editor-help').css({
                        position: 'fixed',
                        top: '31px',
                        'z-index': 1000,
                        width: _width
                    });
                } else {
                    $('.editor__menu, .editor-help').css({
                        position: 'static',
                        width: 'auto'
                    });
                }
            }
        });

        this._rendered = this.element;

        //最后默认开启live模式
        if (mode === 'live') {
            $('.editor__menu--live').trigger('click');
        } else if (mode === 'edit') {
            $('.editor__menu--edit').trigger('click');
        } else if (mode === 'preview') {
            $('.editor__menu--preview').trigger('click');
        }

        // localStrorage
        if (window.localStorage) {
            var _localContentKey = 'autoSaveContent_' + location.pathname + location.search;
            var _localTitleKey = 'autoSaveTitle_' + location.pathname + location.search;
            var _localTagsKey = 'autoSaveTags_' + location.pathname + location.search;
            if (localStorage[_localContentKey]) {
                self.setVal(localStorage[_localContentKey]);
            }
            if (localStorage[_localTitleKey]) {
                $('#myTitle').val(localStorage[_localTitleKey]);
            }
            var _tagTmpl = '<li class="widget-addtags__input"><div class="input-group"><input type="text" value="{{ name }}" data-id="{{ id }}" class="tagText form-control input-sm" placeholder="标签，如：php" disabled="disabled"><a class="input-group-addon tagClose" href="javascript:void(0);">×</a></div></li>';
            if (localStorage[_localTagsKey]) {
                var _localTags = localStorage[_localTagsKey].split(',');
                var _html = '';
                _localTags.forEach(function (item) {
                    var _tag = item.split(':');
                    // console.log(_tag);
                    _html += template(_tagTmpl, { name: _tag[0], id: _tag[1] });
                });
                if ($('.widget-addtags__input').length === 1) {
                    if (_localTags.length >= 5) {
                        $('.widget-addtags__input').remove();
                        $('.widget-addtags__add').before(_html);
                    } else {
                        $('.widget-addtags__input').before(_html);
                    }
                }
            }
        }

        // mario
        var velocity = 127; // how hard the note hits
        var marioKeys = ['E4', 'E4', 'E4', 'C4', 'E4', 'G4', 'G3', 'C4', 'G3', 'E3', 'A3', 'B3', 'Ab3', 'A3', 'G3', 'E4', 'G4', 'A4', 'F4', 'G4', 'E4', 'C4', 'D4', 'B3', 'C4', 'G3', 'E3', 'A3', 'B3', 'Ab3', 'A3', 'G3', 'E4', 'G4', 'A4', 'F4', 'G4', 'E4', 'C4', 'D4', 'B3', 'G4', 'F4', 'E4', 'Db4', 'E4', 'Gb3', 'A3', 'C4', 'A3', 'C4', 'D4', 'G4', 'F4', 'E4', 'Db4', 'E4', 'C5', 'C5', 'C5', 'G4', 'F4', 'E4', 'Db4', 'E4', 'Gb3', 'A3', 'C4', 'A3', 'C4', 'D4', 'Db4', 'D4', 'C4', 'C4', 'C4', 'C4', 'C4', 'D4', 'E4', 'C4', 'A3', 'G3', 'C4', 'C4', 'C4', 'C4', 'D4', 'E4', 'C4', 'C4', 'C4', 'C4', 'D4', 'E4', 'C4', 'A3', 'G3']; // the MIDI note
        var marioTimes = [8, 4, 4, 8, 4, 2, 2, 3, 3, 3, 4, 4, 8, 4, 8, 8, 8, 4, 8, 4, 3, 8, 8, 3, 3, 3, 3, 4, 4, 8, 4, 8, 8, 8, 4, 8, 4, 3, 8, 8, 2, 8, 8, 8, 4, 4, 8, 8, 4, 8, 8, 3, 8, 8, 8, 4, 4, 4, 8, 2, 8, 8, 8, 4, 4, 8, 8, 4, 8, 8, 3, 3, 3, 1, 8, 4, 4, 8, 4, 8, 4, 8, 2, 8, 4, 4, 8, 4, 1, 8, 4, 4, 8, 4, 8, 4, 8, 2];

        // todo 袁超 缺少控件，暂时注释
        //MIDI.loadPlugin({
        //    targetFormat: 'mp3',
        //    soundfontUrl: '/BachEditor/js/',
        //    instrument: 'marimba',
        //    callback: function() {
        //        MIDI.setVolume(0, 127);
        //        MIDI.programChange(0, 12);
        //        var cur = 0;
        //        $('textarea').keypress(function() {
        //            var delay = 1.3 / marioTimes[cur]; // play one note every quarter second
        //            var note = MIDI.keyToNote[marioKeys[cur]];
        //            MIDI.noteOn(0, note, velocity, 0);
        //            MIDI.noteOff(0, note, delay);
        //            if(cur >= 96) {
        //                cur = 0;
        //            }else {
        //                cur++;
        //            }
        //        });
        //    }
        //});

        if (callback) {
            // 有callback时执行
            callback(self);
        }
    };

    Editor.prototype.createToolbar = function (items) {
        items = items || this.options.toolbar;

        if (!items || items.length === 0) {
            return;
        }

        var bar = document.createElement('ul');
        bar.className = 'editor__menu clearfix';

        var self = this;

        self.toolbar = {};

        for (var i = 0; i < items.length; i++) {
            (function (item) {
                var el;
                if (item.name) {
                    el = createIcon(item.name, item);
                } else if (item === '|') {
                    el = createSep();
                } else {
                    el = createIcon(item);
                }

                // bind events, special for info
                if (item.action) {
                    if (typeof item.action === 'function') {
                        el.onclick = function () {
                            item.action(self);
                        };
                    } else if (typeof item.action === 'string') {
                        el.href = item.action;
                        el.target = '_blank';
                    }
                }
                self.toolbar[item.name || item] = el;
                bar.appendChild(el);
            })(items[i]);
        }

        //toolbar添加右侧预览按钮
        var toolbarRightHtml = '<li class="pull-right"><a class="editor__menu--preview" title="预览模式" href="javascript:void(0)"></a></li><li class="pull-right"><a class="editor__menu--live" href="javascript:void(0)" title="实况模式"></a></li><li class="pull-right"><a class="editor__menu--edit muted" title="编辑模式" href="javascript:void(0)"></a></li>';
        var toolbarRight = $(toolbarRightHtml);
        $(bar).append(toolbarRight);
        $('.editor').delegate('.editor__menu--edit', 'click', function () {
            if (!$(this).hasClass('muted')) {
                // 当前模式为muted
                goEdit(self);
            }
        });
        $('.editor').delegate('.editor__menu--preview', 'click', function () {
            if (!$(this).hasClass('muted')) {
                // 当前模式为muted
                goPreview(self);
            }
        });
        $('.editor').delegate('.editor__menu--live', 'click', function () {
            if (!$(this).hasClass('muted')) {
                // 当前模式为muted
                goLive(self);
            }
        });

        //添加帮助
        var helpHtml = '<div class="editor-help">\
<ul class="editor-help-tabs nav nav-tabs" id="editorHelpTab" role="tablist">\
    <li rel="heading"><a href="#editorHelpHeading" role="tab" data-toggle="tab">标题 / 粗斜体</a></li>\
    <li rel="code"><a href="#editorHelpCode" role="tab" data-toggle="tag">代码</a></li>\
    <li rel="link"><a href="#editorHelpLink" role="tab" data-toggle="tag">链接</a></li>\
    <li rel="image"><a href="#editorHelpImage" role="tab" data-toggle="tag">图片</a></li>\
    <li rel="split"><a href="#editorHelpSplit" role="tab" data-toggle="tag">换行 / 分隔符</a></li>\
    <li rel="list"><a href="#editorHelpList" role="tab" data-toggle="tag">列表 / 引用</li></a>\
    </ul>\
\
<div class="tab-content">\
<!-- 粗斜体、标题 -->\
<div class="editor-help-content tab-pane fade" id="editorHelpHeading" rel="heading">\
\
<p>文章内容较多时，可以用标题分段：</p>\
<pre>## 大标题 ##\n\
### 小标题 ###\
</pre>\
\
<p>粗体 / 斜体</p>\
<pre>*斜体文本*    _斜体文本_\n\
**粗体文本**    __粗体文本__\n\
***粗斜体文本***    ___粗斜体文本___\
</pre>\
</div>\
<!-- end 粗斜体、标题 -->\
\
<!-- 代码 -->\
<div class="editor-help-content tab-pane fade" id="editorHelpCode" rel="code">\
<p>如果你只想高亮语句中的某个函数名或关键字，可以使用 <code>`function_name()`</code> 实现</p>\
<p>通常我们会根据您的代码片段适配合适的高亮方法，但你也可以用 <code>```</code> 包裹一段代码，并指定一种语言</p>\
<pre>```<strong>javascript</strong>\n\
$(document).ready(function () {\n\
    alert(\'hello world\');\n\
});\n\
```\
</pre>\
<p>支持的语言：<code>actionscript, apache, bash, clojure, cmake, coffeescript, cpp, cs, css, d, delphi, django, erlang, go, haskell, html, http, ini, java, javascript, json, lisp, lua, markdown, matlab, nginx, objectivec, perl, php, python, r, ruby, scala, smalltalk, sql, tex, vbscript, xml</code></p>\
\
<p>您也可以使用 4 空格缩进，再贴上代码，实现相同的的效果</p>\
<pre><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>def g(x):\n\
<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>yield from range(x, 0, -1)\n\
<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>yield from range(x)\
</pre>\
</div>\
<!-- end 代码 -->\
\
<!-- 链接 -->\
<div class="editor-help-content tab-pane fade" rel="link" id="editorHelpLink">\
\
<p>常用链接方法</p>\
<pre>文字链接 [链接名称](http://链接网址)\n\
网址链接 &lt;http://链接网址&gt;\
</pre>\
<p>高级链接技巧</p>\
<pre>这个链接用 1 作为网址变量 [Google][1].\n\
这个链接用 yahoo 作为网址变量 [Yahoo!][yahoo].\n\
然后在文档的结尾为变量赋值（网址）\n\
\n\
<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>[1]: http://www.google.com/\n\
<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>[yahoo]: http://www.yahoo.com/\
</pre>\
\
</div>\
<!-- end 链接 -->\
\
<!-- 图片 -->\
<div class="editor-help-content tab-pane fade" id="editorHelpImage" rel="image">\
\
<p>跟链接的方法区别在于前面加了个感叹号 <code>!</code>，这样是不是觉得好记多了呢？</p>\
<pre>![图片名称](http://图片网址)\
</pre>\
<p>当然，你也可以像网址那样对图片网址使用变量</p>\
<pre>这个链接用 1 作为网址变量 [Google][1].\n\
然后在文档的结尾位变量赋值（网址）\n\
\n\
<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>[1]: http://www.google.com/logo.png\
</pre>\
\
</div>\
<!-- end 图片 -->\
\
<!-- 换行、分隔符 -->\
<div class="editor-help-content tab-pane fade" id="editorHelpSplit" rel="split">\
\
<p>如果另起一行，只需在当前行结尾加 2 个空格</p>\
<pre>在当前行的结尾加 2 个空格<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>\n\
这行就会新起一行\
</pre>\
<p>如果是要起一个新段落，只需要空出一行即可。</p>\
<p>如果你有写分割线的习惯，可以新起一行输入三个减号 <code>-</code>：</p>\
<pre>---\n\
</pre>\
\
</div>\
<!-- end 换行、分隔符 -->\
\
<!-- 列表、引用 -->\
<div class="editor-help-content tab-pane fade" id="editorHelpList" rel="list">\
\
<p>普通列表</p>\
<pre>-<i class="nbsp">&nbsp;</i>列表文本前使用 [减号+空格]\n\
+<i class="nbsp">&nbsp;</i>列表文本前使用 [加号+空格]\n\
*<i class="nbsp">&nbsp;</i>列表文本前使用 [星号+空格]\
</pre>\
<p>带数字的列表</p>\
<pre>1.<i class="nbsp">&nbsp;</i>列表前使用 [数字+空格]\n\
2.<i class="nbsp">&nbsp;</i>我们会自动帮你添加数字\n\
7.<i class="nbsp">&nbsp;</i>不用担心数字不对，显示的时候我们会自动把这行的 7 纠正为 3\
</pre>\
<p>引用</p>\
<pre>&gt;<i class="nbsp">&nbsp;</i>引用文本前使用 [大于号+空格]\n\
&gt;<i class="nbsp">&nbsp;</i>折行可以不加，新起一行都要加上哦\
</pre>\
\
</div>\
<!-- end 列表、引用 -->\
</div></div>';

        var cm = this.codemirror;
        cm.on('cursorActivity', function () {
            var stat = getState(cm);

            for (var key in self.toolbar) {
                (function (key) {
                    var el = self.toolbar[key];
                    if (stat[key]) {
                        el.className += ' active';
                    } else {
                        el.className = el.className.replace(/\s*active\s*/g, '');
                    }
                })(key);
            }
        });

        var cmWrapper = cm.getWrapperElement();
        cmWrapper.parentNode.insertBefore(bar, cmWrapper);

        //为了添加样式
        $('.CodeMirror').addClass('form-control').before(helpHtml);
        //帮助
        $('#editorHelpTab a').click(function (e) {
            var _$wrap = $(this).parent();
            if (!_$wrap.hasClass('pull-right')) {
                //高级技巧
                if (_$wrap.hasClass('active')) {
                    e.stopPropagation(); //阻止冒泡
                    _$wrap.removeClass('active');
                    $('.editor-help-content.active').removeClass('active');
                } else {
                    e.preventDefault();
                    $(this).tab('show');
                }
            }
        });

        return bar;
    };

    Editor.prototype.createStatusbar = function (status) {
        status = status || this.options.status;

        if (!status || status.length === 0) {
            return;
        }
        var bar = document.createElement('div');
        bar.className = 'editor-statusbar';

        var pos,
            cm = this.codemirror;
        for (var i = 0; i < status.length; i++) {
            (function (name) {
                var el = document.createElement('span');
                el.className = name;
                if (name === 'words') {
                    el.innerHTML = '0';
                    cm.on('update', function () {
                        el.innerHTML = wordCount(cm.getValue());
                    });
                } else if (name === 'lines') {
                    el.innerHTML = '0';
                    cm.on('update', function () {
                        el.innerHTML = cm.lineCount();
                    });
                } else if (name === 'cursor') {
                    el.innerHTML = '0:0';
                    cm.on('cursorActivity', function () {
                        pos = cm.getCursor();
                        el.innerHTML = pos.line + ':' + pos.ch;
                    });
                }
                bar.appendChild(el);
            })(status[i]);
        }
        var cmWrapper = this.codemirror.getWrapperElement();
        cmWrapper.parentNode.insertBefore(bar, cmWrapper.nextSibling);
        return bar;
    };

    /**
     * Bind static methods for exports.
     */
    Editor.toggleBold = toggleBold;
    Editor.toggleItalic = toggleItalic;
    Editor.toggleBlockquote = toggleBlockquote;
    Editor.toggleBlockcode = toggleBlockcode;
    Editor.toggleUnOrderedList = toggleUnOrderedList;
    Editor.toggleOrderedList = toggleOrderedList;
    Editor.toggleTitle = toggleTitle;
    Editor.drawHr = drawHr;
    Editor.drawLink = drawLink;
    Editor.drawImage = drawImage;
    Editor.undo = undo;
    Editor.redo = redo;
    Editor.toggleFullScreen = toggleFullScreen;
    Editor.toggleBig = toggleBig;

    /**
     * Bind instance methods for exports.
     */
    Editor.prototype.toggleBold = function () {
        toggleBold(this);
    };
    Editor.prototype.toggleItalic = function () {
        toggleItalic(this);
    };
    Editor.prototype.toggleBlockquote = function () {
        toggleBlockquote(this);
    };
    Editor.prototype.toggleBlockcode = function () {
        toggleBlockcode(this);
    };
    Editor.prototype.toggleUnOrderedList = function () {
        toggleUnOrderedList(this);
    };
    Editor.prototype.toggleOrderedList = function () {
        toggleOrderedList(this);
    };
    Editor.prototype.toggleTitle = function () {
        toggleTitle(this);
    };
    Editor.prototype.drawHr = function () {
        drawHr(this);
    };
    Editor.prototype.drawLink = function () {
        drawLink(this);
    };
    Editor.prototype.drawImage = function () {
        drawImage(this);
    };
    Editor.prototype.undo = function () {
        undo(this);
    };
    Editor.prototype.redo = function () {
        redo(this);
    };
    Editor.prototype.toggleFullScreen = function () {
        toggleFullScreen(this);
    };
    Editor.prototype.toggleBig = function () {
        toggleBig(this);
    };

    // intro.js
    var isMac = /Mac/.test(navigator.platform);

    var shortcuts = {
        'Cmd-B': toggleBold,
        'Cmd-I': toggleItalic,
        'Cmd-L': drawLink,
        'Cmd-G': drawImage,
        "Cmd-'": toggleBlockquote,
        'Cmd-K': toggleBlockcode,
        'Cmd-O': toggleOrderedList,
        'Cmd-U': toggleUnOrderedList,
        'Cmd-Z': undo,
        'Cmd-Shift-Z': redo,
        'Cmd-E': drawHr,
        'Cmd-H': toggleTitle,
        'F11': toggleFullScreen
    };

    var tooltips = {
        bold: '加粗 <strong> Cmd+B',
        italic: '斜体 <em> Cmd+I',
        link: '链接 <a> Cmd+L',
        quote: "引用 <blockquote> Cmd+Q",
        code: '代码 <pre> <code> Cmd+K',
        image: '图片 <img> Cmd+G',
        'ordered-list': '数字列表 <ol> Cmd+O',
        'unordered-list': '普通列表 <ul> Cmd+U',
        'hr': '分割线 <hr> Cmd+R',
        'title': '标题 <h1>/<h2> Cmd+H',
        'redo': '重做 Cmd+Shift+Z',
        'undo': '撤销 Cmd+Z'
    };

    /**
     * Fix shortcut. Mac use Command, others use Ctrl.
     */
    function fixShortcut(name) {
        if (isMac) {
            name = name.replace('Ctrl', 'Cmd');
        } else {
            name = name.replace('Cmd', 'Ctrl');
        }
        return name;
    }

    /**
     * Create icon element for toolbar.
     */
    function createIcon(name, options) {
        options = options || {};
        var el = document.createElement('a');
        var shortcut = options.shortcut || tooltips[name];
        if (shortcut) {
            shortcut = fixShortcut(shortcut);
            el.title = shortcut;
            el.title = el.title.replace('Cmd', '⌘');
            if (isMac) {
                el.title = el.title.replace('Alt', '⌥');
            }
        }

        el.className = options.className || 'icon-' + name;
        // $(el).tooltip();
        var li = document.createElement('li');
        li.appendChild(el);
        return li;
    }

    function createSep() {
        var el = document.createElement('li');
        el.className = 'editor__menu--divider';
        el.innerHTML = ' | ';
        return el;
    }

    /**
     * The state of CodeMirror at the given position.
     */
    function getState(cm, pos) {
        pos = pos || cm.getCursor('start');
        var stat = cm.getTokenAt(pos);
        if (!stat.type) {
            //没有markdown关键字
            return {};
        } else {
            var types = stat.type.split(' ');

            var ret = {},
                data,
                text;
            for (var i = 0; i < types.length; i++) {
                data = types[i];
                if (data === 'strong') {
                    ret.bold = true;
                } else if (data === 'variable-2') {
                    text = cm.getLine(pos.line);
                    if (/^\s*\d+\.\s/.test(text)) {
                        ret['ordered-list'] = true;
                    } else {
                        ret['unordered-list'] = true;
                    }
                } else if (data === 'quote') {
                    ret.quote = true;
                } else if (data === 'em') {
                    ret.italic = true;
                }
            }
            return ret;
        }
    }

    /**
     * Toggle full screen of the editor.
     */
    function toggleFullScreen(editor) {
        var cm = editor.codemirror;
        var el = $('.editor')[0];
        // https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
        var doc = document;
        var _sw = screen.width;
        var _sh = screen.height;
        var isFull = doc.isfullScreen || doc.mozFullScreen || doc.webkitIsFullScreen;
        var goBig = function goBig() {
            $('.editor__menu--zen').addClass('editor__menu--two').removeClass('editor__menu--zen');
            $('.editor').css({
                position: 'fixed',
                width: '100%',
                top: 0,
                left: 0,
                'z-index': 999,
                'margin-top': 0
            });
            $('.CodeMirror').css('height', $('html').height());
            $('.CodeMirror-gutters').css('height', '100%');
            $('.editor__resize').hide();
        };
        var request = function request() {
            $('.editor').css('overflow', 'auto');
            $('.editor__resize').hide();
            $('.editor__menu--two').addClass('editor__menu--unzen').removeClass('editor__menu--two');
            $('.editor__menu li.pull-right').hide();
            if (el.requestFullScreen) {
                el.requestFullScreen();
            } else if (el.mozRequestFullScreen) {
                el.mozRequestFullScreen();
            } else if (el.webkitRequestFullScreen) {
                el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            $('.CodeMirror').after('<div id="editorLive" class="editor-live fmt"></div>');

            $('.editor').css('margin', 0);
            if (_sh > _sw) {
                // 针对竖屏做了优化
                $('.CodeMirror').css('height', '45%');
                $('#editorLive').css('height', '50%');
            } else {
                $('.editor__menu, .editor-help').css('width', '49%');
                $('.CodeMirror').css({ height: _sh - 80, width: '49%', float: 'left' });
                $('#editorLive').css({ height: _sh - 10, width: '49%', float: 'right', 'margin-top': '-70px' });
            }
            cm.focus();
            var text = cm.getValue();
            $('#editorLive').html(marker(text));
            highLight($('#editorLive'));

            $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function () {
                var _isFull = document.isfullScreen || document.mozFullScreen || document.webkitIsFullScreen;
                if (!_isFull) {
                    cancel();
                }
            });
        };
        var cancel = function cancel() {
            $('.editor__resize').show();
            $('.editor__menu--unzen').addClass('editor__menu--zen').removeClass('editor__menu--unzen');
            $('.editor__menu li.pull-right').show();
            $('#editorLive').remove();
            $('.CodeMirror, .editor__menu, .editor-help').css('width', '100%');
            $('.CodeMirror').css('float', 'none');
            $('.editor').css({
                position: 'static',
                width: '100%',
                'margin-top': '20px'
            });
            if (doc.cancelFullScreen) {
                doc.cancelFullScreen();
            } else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            } else if (doc.webkitCancelFullScreen) {
                doc.webkitCancelFullScreen();
            }
        };
        if (!isFull && $('.editor__menu--zen').length) {
            goBig();
        } else if ($('.editor__menu--two').length) {
            request();
        } else {
            cancel();
        }
    }

    /**
     * Toggle big of the editor.
     */
    function toggleBig(editor) {
        var cm = editor.codemirror;
        var el = $('.editor')[0];
        var doc = document;
        var _sw = screen.width;
        var _sh = screen.height;
        var cmHeight = editor.originHeight;
        var goBig = function goBig() {
            editor.originHeight = $('.CodeMirror').height();
            $('.editor__menu, .editor-help').css({
                position: 'static',
                width: 'auto'
            });
            $('.editor__menu--zen').addClass('editor__menu--unzen').removeClass('editor__menu--zen');
            $('.editor').css({
                position: 'fixed',
                width: '100%',
                top: 0,
                left: 0,
                'z-index': 999,
                'margin-top': 0
            });
            $('.CodeMirror').css('height', $(document).height() - 70);
            cmHeight = Math.max($('.CodeMirror').height(), $('.CodeMirror-sizer').height());
            $('.CodeMirror-gutters').css('height', cmHeight);
            $('.editor__resize').hide();
            editor.isBig = true;
        };
        var cancel = function cancel() {
            $('.editor__resize').show();
            $('.editor__menu--unzen').addClass('editor__menu--zen').removeClass('editor__menu--unzen');
            $('.editor__menu li.pull-right').show();
            $('#editorLive').remove();
            $('.CodeMirror, .editor__menu, .editor-help').css('width', '100%');
            $('.CodeMirror').css({
                float: 'none',
                height: editor.originHeight
            });
            $('.editor').css({
                position: 'static',
                width: '100%',
                'margin-top': '20px'
            });
            var cmHeight = Math.max($('.CodeMirror').height(), $('.CodeMirror-sizer').height());
            $('.CodeMirror-gutters').css('height', cmHeight);
            editor.isBig = false;
        };
        if ($('.editor__menu--zen').length) {
            goBig();
        } else if (cancel) {
            cancel();
        }
    }

    /**
     * Action for toggling bold.
     */
    function toggleBold(editor) {
        var cm = editor.codemirror;
        var stat = getState(cm);

        var text = '加粗文字';
        var start = '**';
        var end = '**';
        var startPoint, endPoint, curPoint;
        if (cm.getSelection()) {
            // 有选中
            startPoint = cm.getCursor('from');
            endPoint = cm.getCursor('to');
        } else {
            //没有选中
            curPoint = cm.getCursor();
        }
        if (stat.bold) {
            if (curPoint || cm.getRange({ line: startPoint.line, ch: startPoint.ch - 2 }, startPoint) !== '**' || cm.getRange(endPoint, { line: endPoint.line, ch: endPoint.ch + 2 }) !== '**') {
                // 没有选中或选中的不全
                return;
            } else {
                text = cm.getSelection();
                startPoint.ch -= 2;
                endPoint.ch += 2;
                cm.replaceRange(text, startPoint, endPoint);
                endPoint.ch -= 4;
            }
        } else {
            var _text = cm.getSelection() || text;
            cm.replaceSelection(start + _text + end);
            if (curPoint) {
                startPoint = { line: curPoint.line, ch: curPoint.ch + 2 };
                endPoint = { line: curPoint.line, ch: curPoint.ch + 6 };
            } else {
                startPoint.ch += 2;
                endPoint.ch += 2;
            }
        }
        cm.setSelection(startPoint, endPoint);
        cm.focus();
    }

    /**
     * Action for toggling italic.
     */
    function toggleItalic(editor) {
        var cm = editor.codemirror;
        var stat = getState(cm);

        var text = '斜体文字';
        var start = '*';
        var end = '*';

        var startPoint, endPoint, curPoint;
        if (cm.getSelection()) {
            // 有选中
            startPoint = cm.getCursor('from');
            endPoint = cm.getCursor('to');
        } else {
            //没有选中
            curPoint = cm.getCursor();
        }
        if (stat.italic) {
            if (curPoint || cm.getRange({ line: startPoint.line, ch: startPoint.ch - 1 }, startPoint) !== '*' || cm.getRange(endPoint, { line: endPoint.line, ch: endPoint.ch + 1 }) !== '*') {
                // 没有选中或选中的不全
                return;
            } else {
                text = cm.getSelection();
                startPoint.ch -= 1;
                endPoint.ch += 1;
                cm.replaceRange(text, startPoint, endPoint);
                endPoint.ch -= 2;
            }
        } else {
            var _text = cm.getSelection() || text;
            cm.replaceSelection(start + _text + end);
            if (curPoint) {
                startPoint = { line: curPoint.line, ch: curPoint.ch + 1 };
                endPoint = { line: curPoint.line, ch: curPoint.ch + 5 };
            } else {
                startPoint.ch += 1;
                endPoint.ch += 1;
            }
        }
        cm.setSelection(startPoint, endPoint);
        cm.focus();
    }

    /**
     * Action for toggling blockquote.
     */
    function toggleBlockquote(editor) {
        var cm = editor.codemirror;
        _toggleLine(cm, 'quote');
    }

    /**
     * Action for toggling blockcode.
     */
    function toggleBlockcode(editor) {
        var cm = editor.codemirror;
        if (cm.somethingSelected()) {
            //如果有选择就加```   ```
            var code = cm.getSelection();
            var ncode = '\n```\n' + code + '\n```\n';
            cm.replaceSelection(ncode);
        } else {
            //没选择就加`请输入代码`
            var cursorCurrent = cm.getCursor();
            cm.replaceRange('`请输入代码`', cursorCurrent);
            cm.setSelection({ line: cursorCurrent.line, ch: cursorCurrent.ch + 1 }, { line: cursorCurrent.line, ch: cursorCurrent.ch + 6 });
        }
        cm.focus();
    }

    /**
     * Action for toggling ul.
     */
    function toggleUnOrderedList(editor) {
        var cm = editor.codemirror;
        _toggleLine(cm, 'unordered-list');
    }

    /**
     * Action for toggling ol.
     */
    function toggleOrderedList(editor) {
        var cm = editor.codemirror;
        _toggleLine(cm, 'ordered-list');
    }

    /**
     * Action for toggling title.
     */
    function toggleTitle(editor) {
        var cm = editor.codemirror;
        var stat = getState(cm);
        var text = '标题文字';
        var start = '##';
        var end = '##';

        var startPoint, endPoint, curPoint;
        if (cm.getSelection()) {
            // 有选中
            startPoint = cm.getCursor('from');
            endPoint = cm.getCursor('to');
        } else {
            //没有选中
            curPoint = cm.getCursor();
        }
        if (!curPoint && cm.getRange({ line: startPoint.line, ch: startPoint.ch - 2 }, startPoint) === '##' && cm.getRange(endPoint, { line: endPoint.line, ch: endPoint.ch + 2 }) === '##') {
            if (curPoint) {
                // 没有选中或选中的不全
                return;
            } else {
                text = cm.getSelection();
                startPoint.ch -= 2;
                endPoint.ch += 2;
                cm.replaceRange(text, startPoint, endPoint);
                endPoint.ch -= 4;
            }
        } else {
            var _text = cm.getSelection() || text;
            cm.replaceSelection(start + _text + end);
            if (curPoint) {
                startPoint = { line: curPoint.line, ch: curPoint.ch + 2 };
                endPoint = { line: curPoint.line, ch: curPoint.ch + 6 };
            } else {
                startPoint.ch += 2;
                endPoint.ch += 2;
            }
        }
        cm.setSelection(startPoint, endPoint);
        cm.focus();
    }

    //     var startPoint = cm.getCursor('from');
    //     var endPoint = cm.getCursor('to');
    //     if (stat.bold) {
    //         text = cm.getLine(startPoint.line);
    //         start = text.slice(0, startPoint.ch);
    //         end = text.slice(startPoint.ch);
    //
    //         start = start.replace(/^(.*)?(#|\_){2}(\S+.*)?$/, '$1$3');
    //         end = end.replace(/^(.*\S+)?(#|\_){2}(\s+.*)?$/, '$1$3');
    //         startPoint.ch -= 2;
    //         endPoint.ch -= 2;
    //         //cm.setLine(startPoint.line, start + end);  新版CM去掉了setLine方法
    //         cm.replaceRange(start + end,
    //             {line: startPoint.line, ch: 0},
    //             {line: startPoint.line + 1, ch: 0}
    //         );
    //     } else {
    //         if(cm.somethingSelected()) {
    //             text = cm.getSelection();
    //             cm.replaceSelection(start + text + end);
    //             startPoint.ch += 2;
    //             endPoint.ch += 2;
    //         } else {
    //             cm.replaceSelection(start + '标题文字' + end);
    //             var cursor = cm.getCursor();
    //             startPoint = {line: cursor.line, ch: cursor.ch - 6};
    //             endPoint = {line: cursor.line, ch: cursor.ch - 2};
    //         }
    //     }
    //     cm.setSelection(startPoint, endPoint);
    //     cm.focus();
    // }


    /**
     * Action for toggling ol.
     */
    function drawHr(editor) {
        var cm = editor.codemirror;
        var cursor = cm.getCursor();
        cm.replaceRange('\n----------\n', cursor);
        cm.setCursor({ line: cursor.line + 2, ch: 0 });
        cm.focus();
    }

    /**
     * Action for drawing a link.
     */
    function drawLink(editor) {
        var cm = editor.codemirror;
        var _isFull = document.isfullScreen || document.mozFullScreen || document.webkitIsFullScreen;
        var map;
        sfModal({
            title: '插入链接',
            content: '<input type="text" id="editorLinkTitle" class="form-control text-28" placeholder="请输入标题"> \
                        <input type="text" id="editorLinkText" class="form-control text-28" placeholder="请输入链接地址">',
            closeText: '取消',
            wrapper: _isFull ? '.editor' : null,
            doneText: '插入',
            shown: function shown() {
                //如果有选中的字符串，并且配置了文章搜索url就显示标题栏
                if (!cm.getSelection() && Editor.prototype.ajaxTopicSearchUrl) {
                    $('#editorLinkTitle').typeahead({
                        source: function source(query, process) {
                            if (!Editor.prototype.ajaxTopicSearchUrl) {
                                return;
                            }

                            //ajax获取文章标题和url 数据格式为：
                            //{'title':'url','title2':'url2'}
                            $.get(Editor.prototype.ajaxTopicSearchUrl, { query: query }, function (data) {
                                var item = [];
                                for (var k in data) {
                                    item.push(k);
                                }
                                item.reverse();

                                console.log(item);

                                map = data;

                                process(item);
                            });
                        },
                        afterSelect: function afterSelect(item) {
                            $('#editorLinkText').val(map[item]);
                        }
                    });
                } else {
                    $('#editorLinkTitle').addClass('hidden');
                }
            },
            doneFn: function doneFn() {
                var startCursor = cm.getCursor('from'); //光标位置
                var endCursor = cm.getCursor('to'); //选择结束位置
                var selectText = cm.getSelection() ? cm.getSelection() : $('#editorLinkTitle').val(); //当前选中的文本
                var link = $('#editorLinkText').val(); //插入的链接地址
                var lastLine = cm.getLine(cm.lineCount() - 1); //最后一行的内容
                var reg = /^\s*\[(\d+)\]:/; //获取最后一行计数值的正则
                var regResult = reg.exec(lastLine); //缓存正则结果
                var i = 1; //计数默认为1
                var replaceText = '[' + selectText + ']' + '[' + i + ']';
                var tailText = '\n\n  [' + i + ']: ' + link; //最后追加
                if (regResult) {
                    //有插入过链接或图片
                    i = parseInt(regResult[1]) + 1;
                    tailText = '\n  [' + i + ']: ' + link; //默认追加
                    replaceText = '[' + selectText + ']' + '[' + i + ']';
                }
                // 插入text
                cm.replaceSelection(replaceText);
                var content = cm.getValue();
                cm.setValue(content + tailText);
                sfModal('hide');
                cm.focus();
                if (!selectText) {
                    cm.setCursor({
                        line: startCursor.line,
                        ch: startCursor.ch + 1
                    });
                } else {
                    cm.setSelection({
                        line: startCursor.line,
                        ch: startCursor.ch + 1
                    }, {
                        line: endCursor.line,
                        ch: endCursor.ch + 1
                    });
                }
            }
        });
    }

    /**
     * Action for drawing an img.
     */
    function drawImage(editor) {
        var cm = editor.codemirror;
        var imgLink = ''; //最后获取到的图片地址
        var _fileName = ''; //图片的文件名
        var _isFull = document.isfullScreen || document.mozFullScreen || document.webkitIsFullScreen;
        function insertPic() {
            var startCursor = cm.getCursor('from'); //光标位置
            var endCursor = cm.getCursor('to'); //选择结束位置
            var selectText = cm.getSelection() || _fileName; //当前选中的文本
            var lastLine = cm.getLine(cm.lineCount() - 1); //最后一行的内容
            var reg = /^\s*\[(\d+)\]:/; //获取最后一行计数值的正则
            var regResult = reg.exec(lastLine); //缓存正则结果
            //var i = 1;    //计数默认为1
            var i = Math.random(); //计数默认为1
            var replaceText = '![' + selectText + ']' + '[' + i + ']';
            var tailText = '\n\n  [' + i + ']: ' + imgLink; //最后追加
            if (regResult) {
                //有插入过链接或图片
                i = parseInt(regResult[1]) + 1;
                tailText = '\n  [' + i + ']: ' + imgLink; //默认追加
                replaceText = '![' + selectText + ']' + '[' + i + ']';
            }
            // 插入text
            cm.replaceSelection(replaceText);
            var content = cm.getValue();
            cm.setValue(content + tailText);
            sfModal('hide');
            cm.focus();
            if (!selectText) {
                cm.setCursor({
                    line: startCursor.line,
                    ch: startCursor.ch + 2
                });
            } else {
                cm.setSelection({
                    line: startCursor.line,
                    ch: startCursor.ch + 2
                }, {
                    line: endCursor.line,
                    ch: endCursor.ch + 2
                });
            }
        }
        sfModal({
            title: '插入图片',
            content: '<ul class="nav nav-tabs" role="tablist">\
    <li class="active"><a href="#localPic" role="tab" data-toggle="tab">本地上传</a></li>\
    <li><a href="#remotePic" role="tab" data-toggle="tab">远程地址获取</a></li>\
</ul>\
<div class="tab-content">\
    <div class="tab-pane fade in active pt20 form-horizontal" id="localPic">\
        <span class="text-muted">图片体积不得大于 4 MB</span>\
        <br>\
        <div class="widget-upload form-group">\
        <input type="file" id="editorUpload" name="image" class="widget-upload__file">\
        <div class="col-sm-8">\
        <input type="text" id="fileName" class="form-control col-sm-10 widget-upload__text" placeholder="拖动图片到这里" readonly />\
        </div>\
        <a href="javascript:void(0);" class="btn col-sm-2 btn-default">选择图片</a>\
        </div>\
    </div>\
    <div class="tab-pane fade pt20" id="remotePic">\
    <input type="url" name="img" id="remotePicUrl" class="form-control text-28" placeholder="请输入图片所在网址">\
    </div>\
</div>',
            closeText: '取消',
            doneText: '插入',
            wrapper: _isFull ? '.editor' : null,
            show: function show() {
                // fileupload
                $('#editorUpload').fileUpload({
                    url: Editor.prototype.uploadPath,
                    type: 'POST',
                    dataType: 'json',
                    beforeSend: function beforeSend() {
                        // 下面这句神奇的话会影响到拖动图片上传的成功与否，有待研究
                        // 这句话在拖动图片上传时会报错，但是不影响功能。任何修改都有很大可能导致此功能失败。
                        _fileName = $('#editorUpload').val()
                        //.split('akepath')[1].slice(1);
                        .split('akepath').slice(1);
                        //
                        $('#fileName').val(_fileName).addClass('loading');
                        $('.done-btn').attr('disabled', 'disabled');
                    },
                    complete: function complete() {
                        $('#fileName').removeClass('loading');
                        $('.done-btn').attr('disabled', false).click();
                    },
                    success: function success(result) {
                        var status = result.status;
                        var message = result.message;
                        var url = result.url;
                        if (status != 0) {
                            sfModal(message); // 坏味道 用于转义
                        } else {
                            var data = url;
                            imgLink = data;
                        }
                    }
                });
            },
            doneFn: function doneFn(e) {
                e.preventDefault();
                //远程图片
                if ($('#remotePic').hasClass('active') && $('#remotePicUrl').val()) {
                    $('#remotePicUrl').addClass('loading');
                    $('.done-btn').attr('disabled', 'disabled');
                    imgLink = $('#remotePicUrl').val();
                    insertPic();
                } else {
                    insertPic();
                }
            }
        });
    }

    /**
     * Undo action.
     */
    function undo(editor) {
        var cm = editor.codemirror;
        cm.undo();
        cm.focus();
    }

    /**
     * Redo action.
     */
    function redo(editor) {
        var cm = editor.codemirror;
        cm.redo();
        cm.focus();
    }

    /**
     * Preview action.
     */
    var lastText = '';
    function goPreview(editor) {
        $('.CodeMirror-code').css('width', '100%');
        var cm = editor.codemirror;
        var wrapper = cm.getWrapperElement();
        var preview = wrapper.lastChild;
        $('.editor-preview').removeClass('onlive'); //清掉onlive
        $('.editor__menu--live').removeClass('muted');
        if (!/editor-preview/.test(preview.className)) {
            preview = document.createElement('div'); //创建preview的div
            preview.className = 'editor-preview fmt';
            wrapper.appendChild(preview);
            //变灰预览
            $('.editor__menu--preview').addClass('muted');
            $('.editor__menu li:lt(17)').addClass('invisible'); //预览时隐藏操作按钮
        }
        var text = cm.getValue();
        if (text === lastText) {
            setTimeout(function () {
                $(preview).addClass('editor-preview-active');
            }, 1);
        } else {
            preview.innerHTML = marked(text);
            highLight($(preview));
            /* When the preview button is clicked for the first time,
             * give some time for the transition from editor.css to fire and the view to slide from right to left,
             * instead of just appearing.
             */
            setTimeout(function () {
                $(preview).addClass('editor-preview-active');
            }, 1);
        }
        $('.editor__menu--edit').removeClass('muted');
        $('.editor__menu--preview').addClass('muted');
        $('.editor__menu li:lt(17)').addClass('invisible');
        lastText = text;
    }

    /**
     * 编辑模式.
     */
    function goEdit(editor) {
        $('.CodeMirror-code').css('width', '100%');
        var cm = editor.codemirror;
        var wrapper = cm.getWrapperElement();
        var preview = wrapper.lastChild;
        $('.editor-preview').removeClass('onlive'); //清掉onlive
        $('.editor__menu--live').removeClass('muted');
        preview.className = preview.className.replace(/\s*editor-preview-active\s*/g, '');
        $('.editor__menu--edit').addClass('muted');
        $('.editor__menu--preview').removeClass('muted');
        $('.editor__menu li:lt(17)').removeClass('invisible');
    }

    /**
     * 实况模式.
     */
    function goLive(editor) {
        var cm = editor.codemirror;
        var wrapper = cm.getWrapperElement();
        var preview = wrapper.lastChild;
        $('.editor__menu--edit, .editor__menu--preview').removeClass('muted');
        //变灰live
        $('.editor__menu--live').addClass('muted');
        if (!/editor-preview/.test(preview.className)) {
            //没有preview过
            preview = document.createElement('div'); //创建preview的div
            preview.className = 'editor-preview fmt';
            wrapper.appendChild(preview);
        }
        var text = cm.getValue();
        var _w = $('.CodeMirror-code').width() / 2 - 15 + 'px';
        if (text === lastText) {
            setTimeout(function () {
                $(preview).addClass('editor-preview-active onlive');
                $('.CodeMirror-code').css('width', _w);
            }, 1);
        } else {
            preview.innerHTML = marked(text);
            setTimeout(function () {
                $(preview).addClass('editor-preview-active onlive');
                // var _w = $('.CodeMirror-code').width() / 2 - 15 + 'px';
                $('.CodeMirror-code').css('width', _w);
                highLight($(preview));
            }, 1);
        }
        lastText = text;
        $('.editor__menu li:lt(17)').removeClass('invisible'); //显示菜单按钮
    }

    function _replaceSelection(cm, active, start, end) {
        var text;
        var startPoint = cm.getCursor('start');
        var endPoint = cm.getCursor('end');
        if (active) {
            text = cm.getLine(startPoint.line);
            start = text.slice(0, startPoint.ch);
            end = text.slice(startPoint.ch);
            cm.replaceRange(start + end, { line: startPoint.line, ch: 0 }, { line: startPoint.line + 1, ch: 0 });
        } else {
            text = cm.getSelection();
            cm.replaceSelection(start + text + end);

            startPoint.ch += start.length;
            endPoint.ch += start.length;
        }
        cm.setSelection(startPoint, endPoint);
        cm.focus();
    }

    function _toggleLine(cm, name) {
        var stat = getState(cm);
        var startPoint = cm.getCursor('start');
        var endPoint = cm.getCursor('end');
        var repl = {
            quote: /^(\s*)\>\s+/,
            code: /^(\s*)```\n\s+/,
            header: /^(\s*)##/,
            'unordered-list': /^(\s*)(\*|\-|\+)\s+/,
            'ordered-list': /^(\s*)\d+\.\s+/
        };
        var map = {
            quote: '> ',
            code: '```\n\n```',
            header: '##标题##',
            'unordered-list': '* ',
            'ordered-list': '1. '
        };
        for (var i = startPoint.line; i <= endPoint.line; i++) {
            (function (i) {
                var text = cm.getLine(i);
                if (stat[name]) {
                    text = text.replace(repl[name], '$1');
                } else {
                    text = map[name] + text;
                }
                cm.replaceRange(text, { line: i, ch: 0 }, { line: i + 1, ch: 0 });
            })(i);
        }
        cm.focus();
    }

    /* The right word count in respect for CJK. */
    function wordCount(data) {
        var pattern = /[a-zA-Z0-9_\u0392-\u03c9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;
        var m = data.match(pattern);
        var count = 0;
        if (m === null) {
            return count;
        }
        for (var i = 0; i < m.length; i++) {
            if (m[i].charCodeAt(0) >= 0x4E00) {
                count += m[i].length;
            } else {
                count += 1;
            }
        }
        return count;
    }

    return Editor;
});

/***/ }),

/***/ "./public/plugin/editor/js/fileupload.js":
/***/ (function(module, exports) {

/*
 *  jQuery HTML5 File Upload
 *
 *  Author: timdream at gmail.com
 *  Web: http://timc.idv.tw/html5-file-upload/
 *
 *  Ajax File Upload that use real xhr,
 *  built with getAsBinary, sendAsBinary, FormData, FileReader, ArrayBuffer, BlobBuilder and etc.
 *  works in Firefox 3, Chrome 5, Safari 5 and higher
 *
 *  Image resizing and uploading currently works in Fx 3 and up, and Chrome 9 (dev) and up only.
 *  Extra settings will allow current Webkit users to upload the original image
 *  or send the resized image in base64 form.
 *
 *  Usage:
 *   $.fileUploadSupported // a boolean value indicates if the browser is supported.
 *   $.imageUploadSupported // a boolean value indicates if the browser could resize image and upload in binary form.
 *   $.fileUploadAsBase64Supported // a boolean value indicate if the browser upload files in based64.
 *   $.imageUploadAsBase64Supported // a boolean value indicate if the browser could resize image and upload in based64.
 *   $('input[type=file]').fileUpload(ajaxSettings); //Make a input[type=file] select-and-send file upload widget
 *   $('#any-element').fileUpload(ajaxSettings); //Make a element receive dropped file
 *   //TBD $('form#fileupload').fileUpload(ajaxSettings); //Send a ajax form with file
 *   //TBD $('canvas').fileUpload(ajaxSettings); //Upload given canvas as if it's an png image.
 *
 *   ajaxSettings is the object contains $.ajax settings that will be passed to.
 *   Available extended settings are:
 *      fileType:
 *           regexp check against filename extension; You should always checked it again on server-side.
 *           e.g. /^(gif|jpe?g|png|tiff?)$/i for images
 *      fileMaxSize:
 *           Maxium file size allowed in bytes. Use scientific notation for converience.
 *           e.g. 1E4 for 1KB, 1E8 for 1MB, 1E9 for 10MB.
 *			 If you really care the difference between 1024 and 1000, use Math.pow(2, 10)
 *      fileError(info, textStatus, textDescription):
 *           callback function when there is any error preventing file upload to start,
 *           $.ajax and ajax events won't be called when error.
 *           Use $.noop to overwrite default alert function.
 *      imageMaxWidth, imageMaxHeight:
 *           Use any of the two settings to enable client-size image resizing.
 *           Image will be resized to fit into given rectangle.
 *           File size and type limit checking will be ignored.
 *      allowUploadOriginalImage:
 *           Set to true if you accept original image to be uploaded as a fallback
 *           when image resizing functionality is not available (such as Webkit browsers).
 *           File size and type limit will be enforced.
 *      allowDataInBase64:
 *           Alternatively, you may wish to resize the image anyway and send the data
 *           in base64. The data will be 133% larger and you will need to process it further with
 *           server-side script.
 *           This setting might work with browsers which could read file but cannot send it in original
 *           binary (no known browser are designed this way though)
 *      forceResize:
 *           Set to true will cause the image being re-sampled even if the resized image
 *           has the same demension as the original one.
 *      imageType:
 *           Acceptable values are: 'jpeg', 'png', or 'auto'.
 *
 *  TBD:
 *   ability to change settings after binding (you can unbind and bind again as a workaround)
 *   multipole file handling
 *   form intergation
 *
 */

(function () {
	// Don't do logging if window.log function does not exist.
	var log = window.log || $.noop;

	// jQuery.ajax config
	var config = {
		fileError: function fileError(info, textStatus, textDescription) {
			window.alert(textDescription);
		}
	};

	// Feature detection

	// Read as binary string: FileReader API || Gecko-specific function (Fx3)
	var canReadAsBinaryString = window.FileReader || window.File && window.File.prototype.getAsBinary;
	// Read file using FormData interface
	var canReadFormData = !!window.FormData;
	// Read file into data: URL: FileReader API || Gecko-specific function (Fx3)
	var canReadAsBase64 = window.FileReader || window.File && window.File.prototype.getAsDataURL;

	var canResizeImageToBase64 = !!document.createElement('canvas').toDataURL;
	var canResizeImageToBinaryString = canResizeImageToBase64 && window.atob;
	var canResizeImageToFile = !!document.createElement('canvas').mozGetAsFile;

	// Send file in multipart/form-data with binary xhr (Gecko-specific function)
	// || xhr.send(blob) that sends blob made with ArrayBuffer.
	var canSendBinaryString = window.XMLHttpRequest && window.XMLHttpRequest.prototype.sendAsBinary || window.Blob && window.Uint8Array && window.ProgressEvent || window.ArrayBuffer && window.BlobBuilder;
	// Send file as in FormData object
	var canSendFormData = !!window.FormData;
	// Send image base64 data by extracting data: URL
	var canSendImageInBase64 = !!document.createElement('canvas').toDataURL;

	var isSupported = canReadAsBinaryString && canSendBinaryString || canReadFormData && canSendFormData;
	var isImageSupported = canReadAsBase64 && (canResizeImageToBinaryString && canSendBinaryString || canResizeImageToFile && canSendFormData);
	var isSupportedInBase64 = canReadAsBase64;
	var isImageSupportedInBase64 = canReadAsBase64 && canResizeImageToBase64;

	var dataURLtoBase64 = function dataURLtoBase64(dataurl) {
		return dataurl.substring(dataurl.indexOf(',') + 1, dataurl.length);
	};

	// Step 1: check file info and attempt to read the file
	// paramaters: Ajax settings, File object
	var handleFile = function handleFile(settings, file) {
		var info = {
			// properties of standard File object || Gecko 1.9 properties
			type: file.type || '', // MIME type
			size: file.size || file.fileSize,
			name: file.name || file.fileName
		};

		// settings.resizeImage = !!(settings.imageMaxWidth || settings.imageMaxHeight);

		if (settings.resizeImage && !isImageSupported && settings.allowUploadOriginalImage) {
			log('WARN: Fall back to upload original un-resized image.');
			settings.resizeImage = false;
		}

		/*
  if (settings.resizeImage) {
  settings.imageMaxWidth = settings.imageMaxWidth || Infinity;
  settings.imageMaxHeight = settings.imageMaxHeight || Infinity;
  }
  */

		if (!settings.resizeImage) {
			if (settings.fileType && settings.fileType.test) {
				// Not using MIME types
				if (!settings.fileType.test(info.name.substr(info.name.lastIndexOf('.') + 1))) {
					log('ERROR: Invalid Filetype.');
					settings.fileError.call(this, info, 'INVALID_FILETYPE', 'Invalid filetype.');
					return;
				}
			}

			if (settings.fileMaxSize && file.size > settings.fileMaxSize) {
				log('ERROR: File exceeds size limit.');
				settings.fileError.call(this, info, 'FILE_EXCEEDS_SIZE_LIMIT', 'File exceeds size limit.');
				return;
			}
		}

		if (!settings.resizeImage && canReadFormData) {
			log('INFO: Bypass file reading, insert file object into FormData object directly.');
			handleForm(settings, 'file', file, info);
		} else if (window.FileReader) {
			log('INFO: Using FileReader to do asynchronously file reading.');
			var reader = new FileReader();
			reader.onerror = function (ev) {
				if (ev.target.error) {
					switch (ev.target.error) {
						case 8:
							log('ERROR: File not found.');
							settings.fileError.call(this, info, 'FILE_NOT_FOUND', 'File not found.');
							break;
						case 24:
							log('ERROR: File not readable.');
							settings.fileError.call(this, info, 'IO_ERROR', 'File not readable.');
							break;
						case 18:
							log('ERROR: File cannot be access due to security constrant.');
							settings.fileError.call(this, info, 'SECURITY_ERROR', 'File cannot be access due to security constrant.');
							break;
						case 20:
							//User Abort
							break;
					}
				}
			};
			if (!settings.resizeImage) {
				if (canSendBinaryString) {
					reader.onloadend = function (ev) {
						var bin = ev.target.result;
						handleForm(settings, 'bin', bin, info);
					};
					reader.readAsBinaryString(file);
				} else if (settings.allowDataInBase64) {
					reader.onloadend = function (ev) {
						handleForm(settings, 'base64', dataURLtoBase64(ev.target.result), info);
					};
					reader.readAsDataURL(file);
				} else {
					log('ERROR: No available method to extract file; allowDataInBase64 not set.');
					settings.fileError.call(this, info, 'NO_BIN_SUPPORT_AND_BASE64_NOT_SET', 'No available method to extract file; allowDataInBase64 not set.');
				}
			} else {
				reader.onloadend = function (ev) {
					var dataurl = ev.target.result;
					handleImage(settings, dataurl, info, file);
				};
				reader.readAsDataURL(file);
			}
		} else if (window.File && window.File.prototype.getAsBinary) {
			log('WARN: FileReader does not exist, UI will be blocked when reading big file.');
			if (!settings.resizeImage) {
				try {
					var bin = file.getAsBinary();
				} catch (e) {
					log('ERROR: File not readable.');
					settings.fileError.call(this, info, 'IO_ERROR', 'File not readable.');
					return;
				}
				handleForm(settings, 'bin', bin, info);
			} else {
				try {
					var bin = file.getAsDataURL();
				} catch (e) {
					log('ERROR: File not readable.');
					settings.fileError.call(this, info, 'IO_ERROR', 'File not readable.');
					return;
				}
				handleImage(settings, dataurl, info, file);
			}
		} else {
			// log('ERROR: No available method to extract file; this browser is not supported.');
			if (settings.fallback) {
				settings.fallback();
			} else {
				settings.fileError.call(this, info, 'NOT_SUPPORT', 'ERROR: No available method to extract file; this browser is not supported.');
			}
		}
	};

	// step 1.5: inject file into <img>, paste the pixels into <canvas>,
	// read the final image
	var handleImage = function handleImage(settings, dataurl, info, file) {
		var img = new Image();
		img.onerror = function () {
			log('ERROR: <img> failed to load, file is not a supported image format.');
			settings.fileError.call(this, info, 'FILE_NOT_IMAGE', 'File is not a supported image format.');
		};
		img.onload = function () {

			/*
   var ratio = Math.max(
   img.width/settings.imageMaxWidth,
   img.height/settings.imageMaxHeight,
   1
   );
   var d = {
   w: Math.floor(Math.max(img.width/ratio, 1)),
   h: Math.floor(Math.max(img.height/ratio, 1))
   }
   log(
   'INFO: Original image size: ' + img.width.toString(10) + 'x' + img.height.toString(10)
   + ', resized image size: ' + d.w + 'x' + d.h + '.'
   );
   if (!settings.forceResize && img.width === d.w && img.height === d.h) {
   log('INFO: Image demension is the same, send the original file.');
   if (canResizeImageToBinaryString) {
   handleForm(
   settings,
   'bin',
   window.atob(dataURLtoBase64(dataurl)),
   info
   );
   } else if (settings.allowDataInBase64) {
   handleForm(
   settings,
   'base64',
   dataURLtoBase64(dataurl),
   info
   );
   } else {
   log('ERROR: No available method to send the original file; allowDataInBase64 not set.');
   settings.fileError.call(this, info, 'NO_BIN_SUPPORT_AND_BASE64_NOT_SET', 'No available method to extract file; allowDataInBase64 not set.');
   }
   return;
   }
   */

			var canvas = document.createElement('canvas');

			/*
   canvas.setAttribute('width', d.w);
   canvas.setAttribute('height', d.h);
   canvas.getContext('2d').drawImage(
   img,
   0,
   0,
   img.width,
   img.height,
   0,
   0,
   d.w,
   d.h
   );
   */

			var cb = function cb(canvas) {
				if (!settings.imageType || settings.imageType === 'auto') {
					if (info.type === 'image/jpeg') settings.imageType = 'jpeg';else settings.imageType = 'png';
				}

				var ninfo = {
					type: 'image/' + settings.imageType,
					name: info.name.substr(0, info.name.indexOf('.')) + '.resized.' + settings.imageType
				};

				if (canResizeImageToFile && canSendFormData) {
					// Gecko 2 (Fx4) non-standard function
					var nfile = canvas.mozGetAsFile(ninfo.name, 'image/' + settings.imageType);
					ninfo.size = file.size || file.fileSize;
					handleForm(settings, 'file', nfile, ninfo);
				} else if (canResizeImageToBinaryString && canSendBinaryString) {
					// Read the image as DataURL, convert it back to binary string.
					var bin = window.atob(dataURLtoBase64(canvas.toDataURL('image/' + settings.imageType)));
					ninfo.size = bin.length;
					handleForm(settings, 'bin', bin, ninfo);
				} else if (settings.allowDataInBase64 && canResizeImageToBase64 && canSendImageInBase64) {
					handleForm(settings, 'base64', dataURLtoBase64(canvas.toDataURL('image/' + settings.imageType)), ninfo);
				} else {
					log('ERROR: No available method to extract image; allowDataInBase64 not set.');
					settings.fileError.call(this, info, 'NO_BIN_SUPPORT_AND_BASE64_NOT_SET', 'No available method to extract file; allowDataInBase64 not set.');
				}
			};

			settings.resizeImage(img, canvas, cb);
		};
		img.src = dataurl;
	};
	// Step 2: construct form data and send the file
	// paramaters: Ajax settings, File object, binary string of file || null, file info assoc array
	var handleForm = function handleForm(settings, type, data, info) {
		if (canSendFormData && type === 'file') {
			// FormData API saves the day
			log('INFO: Using FormData to construct form.');
			var formdata = new FormData();
			formdata.append(settings.name, data);
			// Prevent jQuery form convert FormData object into string.
			settings.processData = false;
			// Prevent jQuery from overwrite automatically generated xhr content-Type header
			// by unsetting the default contentType and inject data only right before xhr.send()
			settings.contentType = false;
			settings.__beforeSend = settings.beforeSend;
			settings.beforeSend = function (xhr, s) {
				s.data = formdata;
				if (s.__beforeSend) return s.__beforeSend.call(this, xhr, s);
			};
			//settings.data = formdata;
		} else if (canSendBinaryString && type === 'bin') {
			log('INFO: Concat our own multipart/form-data data string.');

			// A placeholder MIME type
			if (!info.type) info.type = 'application/octet-stream';

			if (/[^\x20-\x7E]/.test(info.name)) {
				log('INFO: Filename contains non-ASCII code, do UTF8-binary string conversion.');
				info.name_bin = unescape(encodeURIComponent(info.name));
			}

			//filtered out non-ASCII chars in filenames
			// info.name = info.name.replace(/[^\x20-\x7E]/g, '_');

			// multipart/form-data boundary
			var bd = 'xhrupload-' + parseInt(Math.random() * (2 << 16));
			settings.contentType = 'multipart/form-data; boundary=' + bd;
			var formdata = '--' + bd + '\n' // RFC 1867 Format, simulate form file upload
			+ 'content-disposition: form-data; name="' + settings.name + '";' + ' filename="' + (info.name_bin || info.name) + '"\n' + 'Content-Type: ' + info.type + '\n\n' + data + '\n\n' + '--' + bd + '--';

			if (window.XMLHttpRequest && window.XMLHttpRequest.prototype.sendAsBinary) {
				// Use xhr.sendAsBinary that takes binary string
				log('INFO: Pass binary string to xhr.');
				settings.data = formdata;
			} else if (window.Blob && window.Uint8Array && window.ProgressEvent) {
				// send through xh2
				log('INFO: Make XH2 blob string');
				var view = new Uint8Array(formdata.length);
				// jquery的each 不支持字符串了
				// $.each(
				// 	formdata,
				// 	function (i, o) {
				// 		view[i] = o.charCodeAt(0);
				// 	}
				// );
				for (var i = 0; i < formdata.length; i++) {
					view[i] = formdata.charCodeAt(i);
				}

				var blob = view.buffer;
				settings.processData = false;
				settings.__beforeSend = settings.beforeSend;
				settings.beforeSend = function (xhr, s) {
					s.data = blob;
					if (s.__beforeSend) return s.__beforeSend.call(this, xhr, s);
				};
			} else {
				// make a blob
				log('INFO: Convert binary string into Blob.');
				var buf = new ArrayBuffer(formdata.length);
				var view = new Uint8Array(buf);
				$.each(formdata, function (i, o) {
					view[i] = o.charCodeAt(0);
				});
				var bb = new BlobBuilder();
				bb.append(buf);
				var blob = bb.getBlob();

				settings.processData = false;
				settings.__beforeSend = settings.beforeSend;
				settings.beforeSend = function (xhr, s) {
					s.data = blob;
					if (s.__beforeSend) return s.__beforeSend.call(this, xhr, s);
				};
			}
		} else if (settings.allowDataInBase64 && type === 'base64') {
			log('INFO: Concat our own multipart/form-data data string; send the file in base64 because binary xhr is not supported.');

			// A placeholder MIME type
			if (!info.type) info.type = 'application/octet-stream';

			settings.url += '?enc=base64';

			// multipart/form-data boundary
			var bd = 'xhrupload-' + parseInt(Math.random() * (2 << 16));
			settings.contentType = 'multipart/form-data; boundary=' + bd;
			settings.data = '--' + bd + '\n' // RFC 1867 Format, simulate form file upload
			+ 'content-disposition: form-data; name="' + settings.name + '";' + ' filename="' + encodeURIComponent(info.name) + '.base64"\n' + 'Content-Transfer-Encoding: base64\n' // Vaild MIME header, but won't work with PHP file upload handling.
			+ 'Content-Type: ' + info.type + '\n\n' + data + '\n\n' + '--' + bd + '--';
		} else {
			log('ERROR: Data is not given in processable form.');
			settings.fileError.call(this, info, 'INTERNAL_ERROR', 'Data is not given in processable form.');
			return;
		}
		xhrupload(settings);
	};

	// Step 3: start sending out file
	var xhrupload = function xhrupload(settings) {
		log('INFO: Sending file.');
		if (typeof settings.data === 'string' && canSendBinaryString) {
			log('INFO: Using xhr.sendAsBinary.');
			settings.___beforeSend = settings.beforeSend;
			settings.beforeSend = function (xhr, s) {
				if (window.XMLHttpRequest.prototype.sendAsBinary) {
					xhr.send = xhr.sendAsBinary;
				}

				if (s.___beforeSend) return s.___beforeSend.call(this, xhr, s);
			};
		}
		$.ajax(settings);
	};

	$.fn.fileUpload = function (settings) {
		this.each(function (i, el) {
			if ($(el).is('input[type=file]')) {
				log('INFO: binding onchange event to a input[type=file].');
				$(el).bind('change', function () {
					if (!this.files) {
						if (settings.fallback) {
							settings.fallback();
						}
						return;
					} else if (!this.files.length) {
						log('ERROR: no file selected.');
						return;
					} else if (this.files.length > 1) {
						log('WARN: Multiple file upload not implemented yet, only first file will be uploaded.');
					}

					settings.name = $(this).attr('name');
					handleFile($.extend({}, config, settings), this.files[0]);

					if (this.form) {
						this.form.reset();
					} else {
						log('WARN: Unable to reset file selection, upload won\'t be triggered again if user selects the same file.');
					}
					return;
				});
			}

			if ($(el).is('form')) {
				log('ERROR: <form> not implemented yet.');
			} else {
				log('INFO: binding ondrop event.');
				$(el).bind('dragover', // dragover behavior should be blocked for drop to invoke.
				function (ev) {
					return false;
				}).bind('drop', function (ev) {
					if (!ev.originalEvent.dataTransfer.files) {
						log('ERROR: No FileList object present; user might had dropped text.');
						return false;
					}
					if (!ev.originalEvent.dataTransfer.files.length) {
						log('ERROR: User had dropped a virual file (e.g. "My Computer")');
						return false;
					}
					if (!ev.originalEvent.dataTransfer.files.length > 1) {
						log('WARN: Multiple file upload not implemented yet, only first file will be uploaded.');
					}
					handleFile($.extend({}, config, settings), ev.originalEvent.dataTransfer.files[0]);
					return false;
				});
			}
		});

		return this;
	};

	$.fileUploadSupported = isSupported;
	$.imageUploadSupported = isImageSupported;
	$.fileUploadAsBase64Supported = isSupportedInBase64;
	$.imageUploadAsBase64Supported = isImageSupportedInBase64;
})();

/***/ }),

/***/ "./public/plugin/editor/js/modal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function temp(template, data) {
    var str = template || '';
    // Convert the template into string
    $.each(data, function (key, val) {
        var _type = typeof val === 'undefined' ? 'undefined' : _typeof(val),
            re = new RegExp('{{\\s*' + key + '\\s*}}', 'g');
        if (_type === 'object' && val !== null) {
            $.each(val, function (k, v) {
                var r = new RegExp('{{\\s*' + key + '.' + k + '\\s*}}', 'g');
                str = str.replace(r, v);
            });
        } else {
            str = str.replace(re, val);
        }
    });
    return str;
};

function sfModal(option) {
    if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) !== 'object') {
        if (option === 'hide') {
            $('.sfmodal').modal('hide');
            return;
        } else if (option === 'toggle') {
            $('.sfmodal').modal('toggle');
            return;
        } else {
            option = {
                content: option,
                hideDone: true
            };
        }
    }

    var OPT = $.extend({
        hideTitle: false,
        title: '警告：前方高能！',
        content: '玩脱了',
        wrapper: null, //编辑器全屏时不能显示modal
        $content: null,
        hideClose: false,
        closeText: '取消',
        // closeFn : function() {},
        hideDone: false,
        doneText: '确认',
        doneFn: function doneFn() {
            $('.sfmodal').modal('hide');
        },
        show: function show() {},
        // 不明原因shown不触发(这个问题不知道这样解决是不是正确的，看下面×处)
        shown: function shown() {},
        hide: function hide() {},
        hidden: function hidden() {},
        loaded: function loaded() {}
    }, option);

    var dom = '<div class="sfmodal modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">\
  <div class="modal-dialog">\
    <div class="modal-content">\
      ' + (OPT.hideTitle ? '' : '<div class="modal-header">\
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
        <h4 class="modal-title">{{title}}</h4>\
      </div>') + '<div class="modal-body">\
        <p class="sfModal-content">\
          </div>\
          <div class="modal-footer">' + (OPT.hideClose ? '' : '<button type="button" class="btn btn-default" data-dismiss="modal">{{closeText}}</button>') + (OPT.hideDone ? '' : '<button type="button" class="btn btn-primary done-btn">{{doneText}}</button>') + '</div>\
        </div>\
      </div>\
    </div>';

    // 删掉已经存在的modal
    if ($('.sfmodal').length > 0) {
        $('.sfmodal').remove();
        $('.modal-backdrop').remove();
    }
    // 有$wrap时插到$wrap里面
    if (OPT.wrapper) {
        $(OPT.wrapper).append(temp(dom, OPT));
        $(OPT.wrapper).append('<div class="modal-backdrop in"></div>');
    } else {
        $('body').append(temp(dom, OPT));
    }
    if (OPT.$content) {
        // 优先使用$content
        $('.sfmodal .sfModal-content').append(OPT.$content);
    } else {
        $('.sfmodal .sfModal-content').html(OPT.content);
    }
    //× 文档上面写的是.modal('show')会在触发shown.bs.modal之前返回
    //所以我直接在这一句绑定事件,shown就有效果了
    //  参考 http://v3.bootcss.com/javascript/#modalshow
    $('.sfmodal').on('shown.bs.modal', OPT.shown).on('show.bs.modal', OPT.show).on('hide.bs.modal', function (e) {
        OPT.hide(e);
        if (OPT.wrapper) {
            $('.modal-backdrop').remove();
        }
    }).on('hidden.bs.modal', OPT.hidden).on('loaded.bs.modal', OPT.loaded).modal({
        keyboard: true,
        show: true
    });
    // $('.sfmodal')
    //     .on('shown.bs.modal' , OPT.shown)
    //     .on('show.bs.modal'  , OPT.show)
    //     .on('hide.bs.modal'  , function(e) {
    //         OPT.hide(e);
    //         if(OPT.wrapper) {
    //             $('.modal-backdrop').remove();
    //         }
    //     })
    //     .on('hidden.bs.modal', OPT.hidden)
    //     .on('loaded.bs.modal', OPT.loaded)
    //     .modal('show');     // 一定要先绑事件，然后再show
    $('.sfmodal .done-btn').click(function (e) {
        OPT.doneFn(e);
        if (OPT.wrapper) {
            $('.modal-backdrop').remove();
        }
    });
};

/***/ }),

/***/ "./public/plugin/editor/marked/0.3.2/marked.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function () {

    /**
     * Block-Level Grammar
     */

    var block = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: noop,
        hr: /^( *[-*_]){3,} *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
        nptable: noop,
        lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
        blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
        list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
        table: noop,
        paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
        text: /^[^\n]+/
    };

    block.bullet = /(?:[*+-]|\d+\.)/;
    block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
    block.item = replace(block.item, 'gm')(/bull/g, block.bullet)();

    block.list = replace(block.list)(/bull/g, block.bullet)('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')('def', '\\n+(?=' + block.def.source + ')')();

    block.blockquote = replace(block.blockquote)('def', block.def)();

    block._tag = '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code' + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo' + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

    block.html = replace(block.html)('comment', /<!--[\s\S]*?-->/)('closed', /<(tag)[\s\S]+?<\/\1>/)('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, block._tag)();

    block.paragraph = replace(block.paragraph)('hr', block.hr)('heading', block.heading)('lheading', block.lheading)('blockquote', block.blockquote)('tag', '<' + block._tag)('def', block.def)();

    /**
     * Normal Block Grammar
     */

    block.normal = merge({}, block);

    /**
     * GFM Block Grammar
     */

    block.gfm = merge({}, block.normal, {
        fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
        paragraph: /^/
    });

    block.gfm.paragraph = replace(block.paragraph)('(?!', '(?!' + block.gfm.fences.source.replace('\\1', '\\2') + '|' + block.list.source.replace('\\1', '\\3') + '|')();

    /**
     * GFM + Tables Block Grammar
     */

    block.tables = merge({}, block.gfm, {
        nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
        table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
    });

    /**
     * Block Lexer
     */

    function Lexer(options) {
        this.tokens = [];
        this.tokens.links = {};
        this.options = options || marked.defaults;
        this.rules = block.normal;

        if (this.options.gfm) {
            if (this.options.tables) {
                this.rules = block.tables;
            } else {
                this.rules = block.gfm;
            }
        }
    }

    /**
     * Expose Block Rules
     */

    Lexer.rules = block;

    /**
     * Static Lex Method
     */

    Lexer.lex = function (src, options) {
        var lexer = new Lexer(options);
        return lexer.lex(src);
    };

    /**
     * Preprocessing
     */

    Lexer.prototype.lex = function (src) {
        src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00a0/g, ' ').replace(/\u2424/g, '\n');

        return this.token(src, true);
    };

    /**
     * Lexing
     */

    Lexer.prototype.token = function (src, top, bq) {
        var src = src.replace(/^ +$/gm, ''),
            next,
            loose,
            cap,
            bull,
            b,
            item,
            space,
            i,
            l;

        while (src) {
            // newline
            if (cap = this.rules.newline.exec(src)) {
                src = src.substring(cap[0].length);
                if (cap[0].length > 1) {
                    this.tokens.push({
                        type: 'space'
                    });
                }
            }

            // code
            if (cap = this.rules.code.exec(src)) {
                src = src.substring(cap[0].length);
                cap = cap[0].replace(/^ {4}/gm, '');
                this.tokens.push({
                    type: 'code',
                    text: !this.options.pedantic ? cap.replace(/\n+$/, '') : cap
                });
                continue;
            }

            // fences (gfm)
            if (cap = this.rules.fences.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                    type: 'code',
                    lang: cap[2],
                    text: cap[3]
                });
                continue;
            }

            // heading
            if (cap = this.rules.heading.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                    type: 'heading',
                    depth: cap[1].length,
                    text: cap[2]
                });
                continue;
            }

            // table no leading pipe (gfm)
            if (top && (cap = this.rules.nptable.exec(src))) {
                src = src.substring(cap[0].length);

                item = {
                    type: 'table',
                    header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
                    align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                    cells: cap[3].replace(/\n$/, '').split('\n')
                };

                for (i = 0; i < item.align.length; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                        item.align[i] = 'right';
                    } else if (/^ *:-+: *$/.test(item.align[i])) {
                        item.align[i] = 'center';
                    } else if (/^ *:-+ *$/.test(item.align[i])) {
                        item.align[i] = 'left';
                    } else {
                        item.align[i] = null;
                    }
                }

                for (i = 0; i < item.cells.length; i++) {
                    item.cells[i] = item.cells[i].split(/ *\| */);
                }

                this.tokens.push(item);

                continue;
            }

            // lheading
            if (cap = this.rules.lheading.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                    type: 'heading',
                    depth: cap[2] === '=' ? 1 : 2,
                    text: cap[1]
                });
                continue;
            }

            // hr
            if (cap = this.rules.hr.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                    type: 'hr'
                });
                continue;
            }

            // blockquote
            if (cap = this.rules.blockquote.exec(src)) {
                src = src.substring(cap[0].length);

                this.tokens.push({
                    type: 'blockquote_start'
                });

                cap = cap[0].replace(/^ *> ?/gm, '');

                // Pass `top` to keep the current
                // "toplevel" state. This is exactly
                // how markdown.pl works.
                this.token(cap, top, true);

                this.tokens.push({
                    type: 'blockquote_end'
                });

                continue;
            }

            // list
            if (cap = this.rules.list.exec(src)) {
                src = src.substring(cap[0].length);
                bull = cap[2];

                this.tokens.push({
                    type: 'list_start',
                    ordered: bull.length > 1
                });

                // Get each top-level item.
                cap = cap[0].match(this.rules.item);

                next = false;
                l = cap.length;
                i = 0;

                for (; i < l; i++) {
                    item = cap[i];

                    // Remove the list item's bullet
                    // so it is seen as the next token.
                    space = item.length;
                    item = item.replace(/^ *([*+-]|\d+\.) +/, '');

                    // Outdent whatever the
                    // list item contains. Hacky.
                    if (~item.indexOf('\n ')) {
                        space -= item.length;
                        item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
                    }

                    // Determine whether the next list item belongs here.
                    // Backpedal if it does not belong in this list.
                    if (this.options.smartLists && i !== l - 1) {
                        b = block.bullet.exec(cap[i + 1])[0];
                        if (bull !== b && !(bull.length > 1 && b.length > 1)) {
                            src = cap.slice(i + 1).join('\n') + src;
                            i = l - 1;
                        }
                    }

                    // Determine whether item is loose or not.
                    // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
                    // for discount behavior.
                    loose = next || /\n\n(?!\s*$)/.test(item);
                    if (i !== l - 1) {
                        next = item.charAt(item.length - 1) === '\n';
                        if (!loose) loose = next;
                    }

                    this.tokens.push({
                        type: loose ? 'loose_item_start' : 'list_item_start'
                    });

                    // Recurse.
                    this.token(item, false, bq);

                    this.tokens.push({
                        type: 'list_item_end'
                    });
                }

                this.tokens.push({
                    type: 'list_end'
                });

                continue;
            }

            // html
            if (cap = this.rules.html.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                    type: this.options.sanitize ? 'paragraph' : 'html',
                    pre: cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style',
                    text: cap[0]
                });
                continue;
            }

            // def
            if (!bq && top && (cap = this.rules.def.exec(src))) {
                src = src.substring(cap[0].length);
                this.tokens.links[cap[1].toLowerCase()] = {
                    href: cap[2],
                    title: cap[3]
                };
                continue;
            }

            // table (gfm)
            if (top && (cap = this.rules.table.exec(src))) {
                src = src.substring(cap[0].length);

                item = {
                    type: 'table',
                    header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
                    align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                    cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
                };

                for (i = 0; i < item.align.length; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                        item.align[i] = 'right';
                    } else if (/^ *:-+: *$/.test(item.align[i])) {
                        item.align[i] = 'center';
                    } else if (/^ *:-+ *$/.test(item.align[i])) {
                        item.align[i] = 'left';
                    } else {
                        item.align[i] = null;
                    }
                }

                for (i = 0; i < item.cells.length; i++) {
                    item.cells[i] = item.cells[i].replace(/^ *\| *| *\| *$/g, '').split(/ *\| */);
                }

                this.tokens.push(item);

                continue;
            }

            // top-level paragraph
            if (top && (cap = this.rules.paragraph.exec(src))) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                    type: 'paragraph',
                    text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
                });
                continue;
            }

            // text
            if (cap = this.rules.text.exec(src)) {
                // Top-level should never reach here.
                src = src.substring(cap[0].length);
                this.tokens.push({
                    type: 'text',
                    text: cap[0]
                });
                continue;
            }

            if (src) {
                throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
            }
        }

        return this.tokens;
    };

    /**
     * Inline-Level Grammar
     */

    var inline = {
        escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
        autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
        url: noop,
        tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
        link: /^!?\[(inside)\]\(href\)/,
        reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
        nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
        strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
        em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
        code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        br: /^ {2,}\n(?!\s*$)/,
        del: noop,
        text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
    };

    inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
    inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

    inline.link = replace(inline.link)('inside', inline._inside)('href', inline._href)();

    inline.reflink = replace(inline.reflink)('inside', inline._inside)();

    /**
     * Normal Inline Grammar
     */

    inline.normal = merge({}, inline);

    /**
     * Pedantic Inline Grammar
     */

    inline.pedantic = merge({}, inline.normal, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
    });

    /**
     * GFM Inline Grammar
     */

    inline.gfm = merge({}, inline.normal, {
        escape: replace(inline.escape)('])', '~|])')(),
        url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        del: /^~~(?=\S)([\s\S]*?\S)~~/,
        text: replace(inline.text)(']|', '~]|')('|', '|https?://|')()
    });

    /**
     * GFM + Line Breaks Inline Grammar
     */

    inline.breaks = merge({}, inline.gfm, {
        br: replace(inline.br)('{2,}', '*')(),
        text: replace(inline.gfm.text)('{2,}', '*')()
    });

    /**
     * Inline Lexer & Compiler
     */

    function InlineLexer(links, options) {
        this.options = options || marked.defaults;
        this.links = links;
        this.rules = inline.normal;
        this.renderer = this.options.renderer || new Renderer();
        this.renderer.options = this.options;

        if (!this.links) {
            throw new Error('Tokens array requires a `links` property.');
        }

        if (this.options.gfm) {
            if (this.options.breaks) {
                this.rules = inline.breaks;
            } else {
                this.rules = inline.gfm;
            }
        } else if (this.options.pedantic) {
            this.rules = inline.pedantic;
        }
    }

    /**
     * Expose Inline Rules
     */

    InlineLexer.rules = inline;

    /**
     * Static Lexing/Compiling Method
     */

    InlineLexer.output = function (src, links, options) {
        var inline = new InlineLexer(links, options);
        return inline.output(src);
    };

    /**
     * Lexing/Compiling
     */

    InlineLexer.prototype.output = function (src) {
        var out = '',
            link,
            text,
            href,
            cap;

        while (src) {
            // escape
            if (cap = this.rules.escape.exec(src)) {
                src = src.substring(cap[0].length);
                out += cap[1];
                continue;
            }

            // autolink
            if (cap = this.rules.autolink.exec(src)) {
                src = src.substring(cap[0].length);
                if (cap[2] === '@') {
                    text = cap[1].charAt(6) === ':' ? this.mangle(cap[1].substring(7)) : this.mangle(cap[1]);
                    href = this.mangle('mailto:') + text;
                } else {
                    text = escape(cap[1]);
                    href = text;
                }
                out += this.renderer.link(href, null, text);
                continue;
            }

            // url (gfm)
            if (!this.inLink && (cap = this.rules.url.exec(src))) {
                src = src.substring(cap[0].length);
                text = escape(cap[1]);
                href = text;
                out += this.renderer.link(href, null, text);
                continue;
            }

            // tag
            if (cap = this.rules.tag.exec(src)) {
                if (!this.inLink && /^<a /i.test(cap[0])) {
                    this.inLink = true;
                } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
                    this.inLink = false;
                }
                src = src.substring(cap[0].length);
                out += this.options.sanitize ? escape(cap[0]) : cap[0];
                continue;
            }

            // link
            if (cap = this.rules.link.exec(src)) {
                src = src.substring(cap[0].length);
                this.inLink = true;
                out += this.outputLink(cap, {
                    href: cap[2],
                    title: cap[3]
                });
                this.inLink = false;
                continue;
            }

            // reflink, nolink
            if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
                src = src.substring(cap[0].length);
                link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
                link = this.links[link.toLowerCase()];
                if (!link || !link.href) {
                    out += cap[0].charAt(0);
                    src = cap[0].substring(1) + src;
                    continue;
                }
                this.inLink = true;
                out += this.outputLink(cap, link);
                this.inLink = false;
                continue;
            }

            // strong
            if (cap = this.rules.strong.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.strong(this.output(cap[2] || cap[1]));
                continue;
            }

            // em
            if (cap = this.rules.em.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.em(this.output(cap[2] || cap[1]));
                continue;
            }

            // code
            if (cap = this.rules.code.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.codespan(escape(cap[2], true));
                continue;
            }

            // br
            if (cap = this.rules.br.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.br();
                continue;
            }

            // del (gfm)
            if (cap = this.rules.del.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.del(this.output(cap[1]));
                continue;
            }

            // text
            if (cap = this.rules.text.exec(src)) {
                src = src.substring(cap[0].length);
                out += escape(this.smartypants(cap[0]));
                continue;
            }

            if (src) {
                throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
            }
        }

        return out;
    };

    /**
     * Compile Link
     */

    InlineLexer.prototype.outputLink = function (cap, link) {
        var href = escape(link.href),
            title = link.title ? escape(link.title) : null;

        return cap[0].charAt(0) !== '!' ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape(cap[1]));
    };

    /**
     * Smartypants Transformations
     */

    InlineLexer.prototype.smartypants = function (text) {
        if (!this.options.smartypants) return text;
        return text
        // em-dashes
        .replace(/--/g, '\u2014')
        // opening singles
        .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
        // closing singles & apostrophes
        .replace(/'/g, '\u2019')
        // opening doubles
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201C')
        // closing doubles
        .replace(/"/g, '\u201D')
        // ellipses
        .replace(/\.{3}/g, '\u2026');
    };

    /**
     * Mangle Links
     */

    InlineLexer.prototype.mangle = function (text) {
        var out = '',
            l = text.length,
            i = 0,
            ch;

        for (; i < l; i++) {
            ch = text.charCodeAt(i);
            if (Math.random() > 0.5) {
                ch = 'x' + ch.toString(16);
            }
            out += '&#' + ch + ';';
        }

        return out;
    };

    /**
     * Renderer
     */

    function Renderer(options) {
        this.options = options || {};
    }

    Renderer.prototype.code = function (code, lang, escaped) {
        if (this.options.highlight) {
            var out = this.options.highlight(code, lang);
            if (out != null && out !== code) {
                escaped = true;
                code = out;
            }
        }

        if (!lang) {
            return '<pre><code>' + (escaped ? code : escape(code, true)) + '\n</code></pre>';
        }

        return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + '\n</code></pre>\n';
    };

    Renderer.prototype.blockquote = function (quote) {
        return '<blockquote>\n' + quote + '</blockquote>\n';
    };

    Renderer.prototype.html = function (html) {
        return html;
    };

    Renderer.prototype.heading = function (text, level, raw) {
        return '<h' + level + ' id="' + this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-') + '">' + text + '</h' + level + '>\n';
    };

    Renderer.prototype.hr = function () {
        return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    };

    Renderer.prototype.list = function (body, ordered) {
        var type = ordered ? 'ol' : 'ul';
        return '<' + type + '>\n' + body + '</' + type + '>\n';
    };

    Renderer.prototype.listitem = function (text) {
        return '<li>' + text + '</li>\n';
    };

    Renderer.prototype.paragraph = function (text) {
        return '<p>' + text + '</p>\n';
    };

    Renderer.prototype.table = function (header, body) {
        return '<table>\n' + '<thead>\n' + header + '</thead>\n' + '<tbody>\n' + body + '</tbody>\n' + '</table>\n';
    };

    Renderer.prototype.tablerow = function (content) {
        return '<tr>\n' + content + '</tr>\n';
    };

    Renderer.prototype.tablecell = function (content, flags) {
        var type = flags.header ? 'th' : 'td';
        var tag = flags.align ? '<' + type + ' style="text-align:' + flags.align + '">' : '<' + type + '>';
        return tag + content + '</' + type + '>\n';
    };

    // span level renderer
    Renderer.prototype.strong = function (text) {
        return '<strong>' + text + '</strong>';
    };

    Renderer.prototype.em = function (text) {
        return '<em>' + text + '</em>';
    };

    Renderer.prototype.codespan = function (text) {
        return '<code>' + text + '</code>';
    };

    Renderer.prototype.br = function () {
        return this.options.xhtml ? '<br/>' : '<br>';
    };

    Renderer.prototype.del = function (text) {
        return '<del>' + text + '</del>';
    };

    Renderer.prototype.link = function (href, title, text) {
        if (this.options.sanitize) {
            try {
                var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
            } catch (e) {
                return '';
            }
            if (prot.indexOf('javascript:') === 0) {
                return '';
            }
        }
        var out = '<a href="' + href + '"';
        if (title) {
            out += ' title="' + title + '"';
        }
        out += '>' + text + '</a>';
        return out;
    };

    Renderer.prototype.image = function (href, title, text) {
        var out = '<img src="' + href + '" alt="' + text + '"';
        if (title) {
            out += ' title="' + title + '"';
        }
        out += this.options.xhtml ? '/>' : '>';
        return out;
    };

    /**
     * Parsing & Compiling
     */

    function Parser(options) {
        this.tokens = [];
        this.token = null;
        this.options = options || marked.defaults;
        this.options.renderer = this.options.renderer || new Renderer();
        this.renderer = this.options.renderer;
        this.renderer.options = this.options;
    }

    /**
     * Static Parse Method
     */

    Parser.parse = function (src, options, renderer) {
        var parser = new Parser(options, renderer);
        return parser.parse(src);
    };

    /**
     * Parse Loop
     */

    Parser.prototype.parse = function (src) {
        this.inline = new InlineLexer(src.links, this.options, this.renderer);
        this.tokens = src.reverse();

        var out = '';
        while (this.next()) {
            out += this.tok();
        }

        return out;
    };

    /**
     * Next Token
     */

    Parser.prototype.next = function () {
        return this.token = this.tokens.pop();
    };

    /**
     * Preview Next Token
     */

    Parser.prototype.peek = function () {
        return this.tokens[this.tokens.length - 1] || 0;
    };

    /**
     * Parse Text Tokens
     */

    Parser.prototype.parseText = function () {
        var body = this.token.text;

        while (this.peek().type === 'text') {
            body += '\n' + this.next().text;
        }

        return this.inline.output(body);
    };

    /**
     * Parse Current Token
     */

    Parser.prototype.tok = function () {
        switch (this.token.type) {
            case 'space':
                {
                    return '';
                }
            case 'hr':
                {
                    return this.renderer.hr();
                }
            case 'heading':
                {
                    return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
                }
            case 'code':
                {
                    return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                }
            case 'table':
                {
                    var header = '',
                        body = '',
                        i,
                        row,
                        cell,
                        flags,
                        j;

                    // header
                    cell = '';
                    for (i = 0; i < this.token.header.length; i++) {
                        flags = { header: true, align: this.token.align[i] };
                        cell += this.renderer.tablecell(this.inline.output(this.token.header[i]), { header: true, align: this.token.align[i] });
                    }
                    header += this.renderer.tablerow(cell);

                    for (i = 0; i < this.token.cells.length; i++) {
                        row = this.token.cells[i];

                        cell = '';
                        for (j = 0; j < row.length; j++) {
                            cell += this.renderer.tablecell(this.inline.output(row[j]), { header: false, align: this.token.align[j] });
                        }

                        body += this.renderer.tablerow(cell);
                    }
                    return this.renderer.table(header, body);
                }
            case 'blockquote_start':
                {
                    var body = '';

                    while (this.next().type !== 'blockquote_end') {
                        body += this.tok();
                    }

                    return this.renderer.blockquote(body);
                }
            case 'list_start':
                {
                    var body = '',
                        ordered = this.token.ordered;

                    while (this.next().type !== 'list_end') {
                        body += this.tok();
                    }

                    return this.renderer.list(body, ordered);
                }
            case 'list_item_start':
                {
                    var body = '';

                    while (this.next().type !== 'list_item_end') {
                        body += this.token.type === 'text' ? this.parseText() : this.tok();
                    }

                    return this.renderer.listitem(body);
                }
            case 'loose_item_start':
                {
                    var body = '';

                    while (this.next().type !== 'list_item_end') {
                        body += this.tok();
                    }

                    return this.renderer.listitem(body);
                }
            case 'html':
                {
                    var html = !this.token.pre && !this.options.pedantic ? this.inline.output(this.token.text) : this.token.text;
                    return this.renderer.html(html);
                }
            case 'paragraph':
                {
                    return this.renderer.paragraph(this.inline.output(this.token.text));
                }
            case 'text':
                {
                    return this.renderer.paragraph(this.parseText());
                }
        }
    };

    /**
     * Helpers
     */

    function escape(html, encode) {
        return html.replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function unescape(html) {
        return html.replace(/&([#\w]+);/g, function (_, n) {
            n = n.toLowerCase();
            if (n === 'colon') return ':';
            if (n.charAt(0) === '#') {
                return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
            }
            return '';
        });
    }

    function replace(regex, opt) {
        regex = regex.source;
        opt = opt || '';
        return function self(name, val) {
            if (!name) return new RegExp(regex, opt);
            val = val.source || val;
            val = val.replace(/(^|[^\[])\^/g, '$1');
            regex = regex.replace(name, val);
            return self;
        };
    }

    function noop() {}
    noop.exec = noop;

    function merge(obj) {
        var i = 1,
            target,
            key;

        for (; i < arguments.length; i++) {
            target = arguments[i];
            for (key in target) {
                if (Object.prototype.hasOwnProperty.call(target, key)) {
                    obj[key] = target[key];
                }
            }
        }

        return obj;
    }

    /**
     * Marked
     */

    function marked(src, opt, callback) {
        if (callback || typeof opt === 'function') {
            if (!callback) {
                callback = opt;
                opt = null;
            }

            opt = merge({}, marked.defaults, opt || {});

            var highlight = opt.highlight,
                tokens,
                pending,
                i = 0;

            try {
                tokens = Lexer.lex(src, opt);
            } catch (e) {
                return callback(e);
            }

            pending = tokens.length;

            var done = function done() {
                var out, err;

                try {
                    out = Parser.parse(tokens, opt);
                } catch (e) {
                    err = e;
                }

                opt.highlight = highlight;

                return err ? callback(err) : callback(null, out);
            };

            if (!highlight || highlight.length < 3) {
                return done();
            }

            delete opt.highlight;

            if (!pending) return done();

            for (; i < tokens.length; i++) {
                (function (token) {
                    if (token.type !== 'code') {
                        return --pending || done();
                    }
                    return highlight(token.text, token.lang, function (err, code) {
                        if (code == null || code === token.text) {
                            return --pending || done();
                        }
                        token.text = code;
                        token.escaped = true;
                        --pending || done();
                    });
                })(tokens[i]);
            }

            return;
        }
        try {
            if (opt) opt = merge({}, marked.defaults, opt);
            return Parser.parse(Lexer.lex(src, opt), opt);
        } catch (e) {
            e.message += '\nPlease report this to https://github.com/chjj/marked.';
            if ((opt || marked.defaults).silent) {
                return '<p>An error occured:</p><pre>' + escape(e.message + '', true) + '</pre>';
            }
            throw e;
        }
    }

    /**
     * Options
     */

    marked.options = marked.setOptions = function (opt) {
        merge(marked.defaults, opt);
        return marked;
    };

    marked.defaults = {
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: false,
        silent: false,
        highlight: null,
        langPrefix: 'lang-',
        smartypants: false,
        headerPrefix: '',
        renderer: new Renderer(),
        xhtml: false
    };

    /**
     * Expose
     */

    marked.Parser = Parser;
    marked.parser = Parser.parse;

    marked.Renderer = Renderer;

    marked.Lexer = Lexer;
    marked.lexer = Lexer.lex;

    marked.InlineLexer = InlineLexer;
    marked.inlineLexer = InlineLexer.output;

    marked.parse = marked;

    if (( false ? 'undefined' : _typeof(exports)) === 'object') {
        module.exports = marked;
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return marked;
        }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        this.marked = marked;
    }
}).call(function () {
    return this || (typeof window !== 'undefined' ? window : global);
}());
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./public/plugin/editor/zeroclipboard/2.2.0/ZeroClipboard.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * ZeroClipboard
 * The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
 * Copyright (c) 2009-2014 Jon Rohan, James M. Greene
 * Licensed MIT
 * http://zeroclipboard.org/
 * v2.2.0
 */
(function (window, undefined) {
    "use strict";
    /**
     * Store references to critically important global functions that may be
     * overridden on certain web pages.
     */

    var _window = window,
        _document = _window.document,
        _navigator = _window.navigator,
        _setTimeout = _window.setTimeout,
        _clearTimeout = _window.clearTimeout,
        _setInterval = _window.setInterval,
        _clearInterval = _window.clearInterval,
        _getComputedStyle = _window.getComputedStyle,
        _encodeURIComponent = _window.encodeURIComponent,
        _ActiveXObject = _window.ActiveXObject,
        _Error = _window.Error,
        _parseInt = _window.Number.parseInt || _window.parseInt,
        _parseFloat = _window.Number.parseFloat || _window.parseFloat,
        _isNaN = _window.Number.isNaN || _window.isNaN,
        _now = _window.Date.now,
        _keys = _window.Object.keys,
        _defineProperty = _window.Object.defineProperty,
        _hasOwn = _window.Object.prototype.hasOwnProperty,
        _slice = _window.Array.prototype.slice,
        _unwrap = function () {
        var unwrapper = function unwrapper(el) {
            return el;
        };
        if (typeof _window.wrap === "function" && typeof _window.unwrap === "function") {
            try {
                var div = _document.createElement("div");
                var unwrappedDiv = _window.unwrap(div);
                if (div.nodeType === 1 && unwrappedDiv && unwrappedDiv.nodeType === 1) {
                    unwrapper = _window.unwrap;
                }
            } catch (e) {}
        }
        return unwrapper;
    }();
    /**
     * Convert an `arguments` object into an Array.
     *
     * @returns The arguments as an Array
     * @private
     */
    var _args = function _args(argumentsObj) {
        return _slice.call(argumentsObj, 0);
    };
    /**
     * Shallow-copy the owned, enumerable properties of one object over to another, similar to jQuery's `$.extend`.
     *
     * @returns The target object, augmented
     * @private
     */
    var _extend = function _extend() {
        var i,
            len,
            arg,
            prop,
            src,
            copy,
            args = _args(arguments),
            target = args[0] || {};
        for (i = 1, len = args.length; i < len; i++) {
            if ((arg = args[i]) != null) {
                for (prop in arg) {
                    if (_hasOwn.call(arg, prop)) {
                        src = target[prop];
                        copy = arg[prop];
                        if (target !== copy && copy !== undefined) {
                            target[prop] = copy;
                        }
                    }
                }
            }
        }
        return target;
    };
    /**
     * Return a deep copy of the source object or array.
     *
     * @returns Object or Array
     * @private
     */
    var _deepCopy = function _deepCopy(source) {
        var copy, i, len, prop;
        if ((typeof source === "undefined" ? "undefined" : _typeof(source)) !== "object" || source == null || typeof source.nodeType === "number") {
            copy = source;
        } else if (typeof source.length === "number") {
            copy = [];
            for (i = 0, len = source.length; i < len; i++) {
                if (_hasOwn.call(source, i)) {
                    copy[i] = _deepCopy(source[i]);
                }
            }
        } else {
            copy = {};
            for (prop in source) {
                if (_hasOwn.call(source, prop)) {
                    copy[prop] = _deepCopy(source[prop]);
                }
            }
        }
        return copy;
    };
    /**
     * Makes a shallow copy of `obj` (like `_extend`) but filters its properties based on a list of `keys` to keep.
     * The inverse of `_omit`, mostly. The big difference is that these properties do NOT need to be enumerable to
     * be kept.
     *
     * @returns A new filtered object.
     * @private
     */
    var _pick = function _pick(obj, keys) {
        var newObj = {};
        for (var i = 0, len = keys.length; i < len; i++) {
            if (keys[i] in obj) {
                newObj[keys[i]] = obj[keys[i]];
            }
        }
        return newObj;
    };
    /**
     * Makes a shallow copy of `obj` (like `_extend`) but filters its properties based on a list of `keys` to omit.
     * The inverse of `_pick`.
     *
     * @returns A new filtered object.
     * @private
     */
    var _omit = function _omit(obj, keys) {
        var newObj = {};
        for (var prop in obj) {
            if (keys.indexOf(prop) === -1) {
                newObj[prop] = obj[prop];
            }
        }
        return newObj;
    };
    /**
     * Remove all owned, enumerable properties from an object.
     *
     * @returns The original object without its owned, enumerable properties.
     * @private
     */
    var _deleteOwnProperties = function _deleteOwnProperties(obj) {
        if (obj) {
            for (var prop in obj) {
                if (_hasOwn.call(obj, prop)) {
                    delete obj[prop];
                }
            }
        }
        return obj;
    };
    /**
     * Determine if an element is contained within another element.
     *
     * @returns Boolean
     * @private
     */
    var _containedBy = function _containedBy(el, ancestorEl) {
        if (el && el.nodeType === 1 && el.ownerDocument && ancestorEl && (ancestorEl.nodeType === 1 && ancestorEl.ownerDocument && ancestorEl.ownerDocument === el.ownerDocument || ancestorEl.nodeType === 9 && !ancestorEl.ownerDocument && ancestorEl === el.ownerDocument)) {
            do {
                if (el === ancestorEl) {
                    return true;
                }
                el = el.parentNode;
            } while (el);
        }
        return false;
    };
    /**
     * Get the URL path's parent directory.
     *
     * @returns String or `undefined`
     * @private
     */
    var _getDirPathOfUrl = function _getDirPathOfUrl(url) {
        var dir;
        if (typeof url === "string" && url) {
            dir = url.split("#")[0].split("?")[0];
            dir = url.slice(0, url.lastIndexOf("/") + 1);
        }
        return dir;
    };
    /**
     * Get the current script's URL by throwing an `Error` and analyzing it.
     *
     * @returns String or `undefined`
     * @private
     */
    var _getCurrentScriptUrlFromErrorStack = function _getCurrentScriptUrlFromErrorStack(stack) {
        var url, matches;
        if (typeof stack === "string" && stack) {
            matches = stack.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
            if (matches && matches[1]) {
                url = matches[1];
            } else {
                matches = stack.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
                if (matches && matches[1]) {
                    url = matches[1];
                }
            }
        }
        return url;
    };
    /**
     * Get the current script's URL by throwing an `Error` and analyzing it.
     *
     * @returns String or `undefined`
     * @private
     */
    var _getCurrentScriptUrlFromError = function _getCurrentScriptUrlFromError() {
        var url, err;
        try {
            throw new _Error();
        } catch (e) {
            err = e;
        }
        if (err) {
            url = err.sourceURL || err.fileName || _getCurrentScriptUrlFromErrorStack(err.stack);
        }
        return url;
    };
    /**
     * Get the current script's URL.
     *
     * @returns String or `undefined`
     * @private
     */
    var _getCurrentScriptUrl = function _getCurrentScriptUrl() {
        var jsPath, scripts, i;
        if (_document.currentScript && (jsPath = _document.currentScript.src)) {
            return jsPath;
        }
        scripts = _document.getElementsByTagName("script");
        if (scripts.length === 1) {
            return scripts[0].src || undefined;
        }
        if ("readyState" in scripts[0]) {
            for (i = scripts.length; i--;) {
                if (scripts[i].readyState === "interactive" && (jsPath = scripts[i].src)) {
                    return jsPath;
                }
            }
        }
        if (_document.readyState === "loading" && (jsPath = scripts[scripts.length - 1].src)) {
            return jsPath;
        }
        if (jsPath = _getCurrentScriptUrlFromError()) {
            return jsPath;
        }
        return undefined;
    };
    /**
     * Get the unanimous parent directory of ALL script tags.
     * If any script tags are either (a) inline or (b) from differing parent
     * directories, this method must return `undefined`.
     *
     * @returns String or `undefined`
     * @private
     */
    var _getUnanimousScriptParentDir = function _getUnanimousScriptParentDir() {
        var i,
            jsDir,
            jsPath,
            scripts = _document.getElementsByTagName("script");
        for (i = scripts.length; i--;) {
            if (!(jsPath = scripts[i].src)) {
                jsDir = null;
                break;
            }
            jsPath = _getDirPathOfUrl(jsPath);
            if (jsDir == null) {
                jsDir = jsPath;
            } else if (jsDir !== jsPath) {
                jsDir = null;
                break;
            }
        }
        return jsDir || undefined;
    };
    /**
     * Get the presumed location of the "ZeroClipboard.swf" file, based on the location
     * of the executing JavaScript file (e.g. "ZeroClipboard.js", etc.).
     *
     * @returns String
     * @private
     */
    var _getDefaultSwfPath = function _getDefaultSwfPath() {
        var jsDir = _getDirPathOfUrl(_getCurrentScriptUrl()) || _getUnanimousScriptParentDir() || "";
        return jsDir + "ZeroClipboard.swf";
    };
    /**
     * Keep track of if the page is framed (in an `iframe`). This can never change.
     * @private
     */
    var _pageIsFramed = function () {
        return window.opener == null && (!!window.top && window != window.top || !!window.parent && window != window.parent);
    }();
    /**
     * Keep track of the state of the Flash object.
     * @private
     */
    var _flashState = {
        bridge: null,
        version: "0.0.0",
        pluginType: "unknown",
        disabled: null,
        outdated: null,
        sandboxed: null,
        unavailable: null,
        degraded: null,
        deactivated: null,
        overdue: null,
        ready: null
    };
    /**
     * The minimum Flash Player version required to use ZeroClipboard completely.
     * @readonly
     * @private
     */
    var _minimumFlashVersion = "11.0.0";
    /**
     * The ZeroClipboard library version number, as reported by Flash, at the time the SWF was compiled.
     */
    var _zcSwfVersion;
    /**
     * Keep track of all event listener registrations.
     * @private
     */
    var _handlers = {};
    /**
     * Keep track of the currently activated element.
     * @private
     */
    var _currentElement;
    /**
     * Keep track of the element that was activated when a `copy` process started.
     * @private
     */
    var _copyTarget;
    /**
     * Keep track of data for the pending clipboard transaction.
     * @private
     */
    var _clipData = {};
    /**
     * Keep track of data formats for the pending clipboard transaction.
     * @private
     */
    var _clipDataFormatMap = null;
    /**
     * Keep track of the Flash availability check timeout.
     * @private
     */
    var _flashCheckTimeout = 0;
    /**
     * Keep track of SWF network errors interval polling.
     * @private
     */
    var _swfFallbackCheckInterval = 0;
    /**
     * The `message` store for events
     * @private
     */
    var _eventMessages = {
        ready: "Flash communication is established",
        error: {
            "flash-disabled": "Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.",
            "flash-outdated": "Flash is too outdated to support ZeroClipboard",
            "flash-sandboxed": "Attempting to run Flash in a sandboxed iframe, which is impossible",
            "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
            "flash-degraded": "Flash is unable to preserve data fidelity when communicating with JavaScript",
            "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.",
            "flash-overdue": "Flash communication was established but NOT within the acceptable time limit",
            "version-mismatch": "ZeroClipboard JS version number does not match ZeroClipboard SWF version number",
            "clipboard-error": "At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard",
            "config-mismatch": "ZeroClipboard configuration does not match Flash's reality",
            "swf-not-found": "The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity"
        }
    };
    /**
     * The `name`s of `error` events that can only occur is Flash has at least
     * been able to load the SWF successfully.
     * @private
     */
    var _errorsThatOnlyOccurAfterFlashLoads = ["flash-unavailable", "flash-degraded", "flash-overdue", "version-mismatch", "config-mismatch", "clipboard-error"];
    /**
     * The `name`s of `error` events that should likely result in the `_flashState`
     * variable's property values being updated.
     * @private
     */
    var _flashStateErrorNames = ["flash-disabled", "flash-outdated", "flash-sandboxed", "flash-unavailable", "flash-degraded", "flash-deactivated", "flash-overdue"];
    /**
     * A RegExp to match the `name` property of `error` events related to Flash.
     * @private
     */
    var _flashStateErrorNameMatchingRegex = new RegExp("^flash-(" + _flashStateErrorNames.map(function (errorName) {
        return errorName.replace(/^flash-/, "");
    }).join("|") + ")$");
    /**
     * A RegExp to match the `name` property of `error` events related to Flash,
     * which is enabled.
     * @private
     */
    var _flashStateEnabledErrorNameMatchingRegex = new RegExp("^flash-(" + _flashStateErrorNames.slice(1).map(function (errorName) {
        return errorName.replace(/^flash-/, "");
    }).join("|") + ")$");
    /**
     * ZeroClipboard configuration defaults for the Core module.
     * @private
     */
    var _globalConfig = {
        swfPath: _getDefaultSwfPath(),
        trustedDomains: window.location.host ? [window.location.host] : [],
        cacheBust: true,
        forceEnhancedClipboard: false,
        flashLoadTimeout: 3e4,
        autoActivate: true,
        bubbleEvents: true,
        containerId: "global-zeroclipboard-html-bridge",
        containerClass: "global-zeroclipboard-container",
        swfObjectId: "global-zeroclipboard-flash-bridge",
        hoverClass: "zeroclipboard-is-hover",
        activeClass: "zeroclipboard-is-active",
        forceHandCursor: false,
        title: null,
        zIndex: 999999999
    };
    /**
     * The underlying implementation of `ZeroClipboard.config`.
     * @private
     */
    var _config = function _config(options) {
        if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object" && options !== null) {
            for (var prop in options) {
                if (_hasOwn.call(options, prop)) {
                    if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(prop)) {
                        _globalConfig[prop] = options[prop];
                    } else if (_flashState.bridge == null) {
                        if (prop === "containerId" || prop === "swfObjectId") {
                            if (_isValidHtml4Id(options[prop])) {
                                _globalConfig[prop] = options[prop];
                            } else {
                                throw new Error("The specified `" + prop + "` value is not valid as an HTML4 Element ID");
                            }
                        } else {
                            _globalConfig[prop] = options[prop];
                        }
                    }
                }
            }
        }
        if (typeof options === "string" && options) {
            if (_hasOwn.call(_globalConfig, options)) {
                return _globalConfig[options];
            }
            return;
        }
        return _deepCopy(_globalConfig);
    };
    /**
     * The underlying implementation of `ZeroClipboard.state`.
     * @private
     */
    var _state = function _state() {
        _detectSandbox();
        return {
            browser: _pick(_navigator, ["userAgent", "platform", "appName"]),
            flash: _omit(_flashState, ["bridge"]),
            zeroclipboard: {
                version: ZeroClipboard.version,
                config: ZeroClipboard.config()
            }
        };
    };
    /**
     * The underlying implementation of `ZeroClipboard.isFlashUnusable`.
     * @private
     */
    var _isFlashUnusable = function _isFlashUnusable() {
        return !!(_flashState.disabled || _flashState.outdated || _flashState.sandboxed || _flashState.unavailable || _flashState.degraded || _flashState.deactivated);
    };
    /**
     * The underlying implementation of `ZeroClipboard.on`.
     * @private
     */
    var _on = function _on(eventType, listener) {
        var i,
            len,
            events,
            added = {};
        if (typeof eventType === "string" && eventType) {
            events = eventType.toLowerCase().split(/\s+/);
        } else if ((typeof eventType === "undefined" ? "undefined" : _typeof(eventType)) === "object" && eventType && typeof listener === "undefined") {
            for (i in eventType) {
                if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
                    ZeroClipboard.on(i, eventType[i]);
                }
            }
        }
        if (events && events.length) {
            for (i = 0, len = events.length; i < len; i++) {
                eventType = events[i].replace(/^on/, "");
                added[eventType] = true;
                if (!_handlers[eventType]) {
                    _handlers[eventType] = [];
                }
                _handlers[eventType].push(listener);
            }
            if (added.ready && _flashState.ready) {
                ZeroClipboard.emit({
                    type: "ready"
                });
            }
            if (added.error) {
                for (i = 0, len = _flashStateErrorNames.length; i < len; i++) {
                    if (_flashState[_flashStateErrorNames[i].replace(/^flash-/, "")] === true) {
                        ZeroClipboard.emit({
                            type: "error",
                            name: _flashStateErrorNames[i]
                        });
                        break;
                    }
                }
                if (_zcSwfVersion !== undefined && ZeroClipboard.version !== _zcSwfVersion) {
                    ZeroClipboard.emit({
                        type: "error",
                        name: "version-mismatch",
                        jsVersion: ZeroClipboard.version,
                        swfVersion: _zcSwfVersion
                    });
                }
            }
        }
        return ZeroClipboard;
    };
    /**
     * The underlying implementation of `ZeroClipboard.off`.
     * @private
     */
    var _off = function _off(eventType, listener) {
        var i, len, foundIndex, events, perEventHandlers;
        if (arguments.length === 0) {
            events = _keys(_handlers);
        } else if (typeof eventType === "string" && eventType) {
            events = eventType.split(/\s+/);
        } else if ((typeof eventType === "undefined" ? "undefined" : _typeof(eventType)) === "object" && eventType && typeof listener === "undefined") {
            for (i in eventType) {
                if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
                    ZeroClipboard.off(i, eventType[i]);
                }
            }
        }
        if (events && events.length) {
            for (i = 0, len = events.length; i < len; i++) {
                eventType = events[i].toLowerCase().replace(/^on/, "");
                perEventHandlers = _handlers[eventType];
                if (perEventHandlers && perEventHandlers.length) {
                    if (listener) {
                        foundIndex = perEventHandlers.indexOf(listener);
                        while (foundIndex !== -1) {
                            perEventHandlers.splice(foundIndex, 1);
                            foundIndex = perEventHandlers.indexOf(listener, foundIndex);
                        }
                    } else {
                        perEventHandlers.length = 0;
                    }
                }
            }
        }
        return ZeroClipboard;
    };
    /**
     * The underlying implementation of `ZeroClipboard.handlers`.
     * @private
     */
    var _listeners = function _listeners(eventType) {
        var copy;
        if (typeof eventType === "string" && eventType) {
            copy = _deepCopy(_handlers[eventType]) || null;
        } else {
            copy = _deepCopy(_handlers);
        }
        return copy;
    };
    /**
     * The underlying implementation of `ZeroClipboard.emit`.
     * @private
     */
    var _emit = function _emit(event) {
        var eventCopy, returnVal, tmp;
        event = _createEvent(event);
        if (!event) {
            return;
        }
        if (_preprocessEvent(event)) {
            return;
        }
        if (event.type === "ready" && _flashState.overdue === true) {
            return ZeroClipboard.emit({
                type: "error",
                name: "flash-overdue"
            });
        }
        eventCopy = _extend({}, event);
        _dispatchCallbacks.call(this, eventCopy);
        if (event.type === "copy") {
            tmp = _mapClipDataToFlash(_clipData);
            returnVal = tmp.data;
            _clipDataFormatMap = tmp.formatMap;
        }
        return returnVal;
    };
    /**
     * The underlying implementation of `ZeroClipboard.create`.
     * @private
     */
    var _create = function _create() {
        var previousState = _flashState.sandboxed;
        _detectSandbox();
        if (typeof _flashState.ready !== "boolean") {
            _flashState.ready = false;
        }
        if (_flashState.sandboxed !== previousState && _flashState.sandboxed === true) {
            _flashState.ready = false;
            ZeroClipboard.emit({
                type: "error",
                name: "flash-sandboxed"
            });
        } else if (!ZeroClipboard.isFlashUnusable() && _flashState.bridge === null) {
            var maxWait = _globalConfig.flashLoadTimeout;
            if (typeof maxWait === "number" && maxWait >= 0) {
                _flashCheckTimeout = _setTimeout(function () {
                    if (typeof _flashState.deactivated !== "boolean") {
                        _flashState.deactivated = true;
                    }
                    if (_flashState.deactivated === true) {
                        ZeroClipboard.emit({
                            type: "error",
                            name: "flash-deactivated"
                        });
                    }
                }, maxWait);
            }
            _flashState.overdue = false;
            _embedSwf();
        }
    };
    /**
     * The underlying implementation of `ZeroClipboard.destroy`.
     * @private
     */
    var _destroy = function _destroy() {
        ZeroClipboard.clearData();
        ZeroClipboard.blur();
        ZeroClipboard.emit("destroy");
        _unembedSwf();
        ZeroClipboard.off();
    };
    /**
     * The underlying implementation of `ZeroClipboard.setData`.
     * @private
     */
    var _setData = function _setData(format, data) {
        var dataObj;
        if ((typeof format === "undefined" ? "undefined" : _typeof(format)) === "object" && format && typeof data === "undefined") {
            dataObj = format;
            ZeroClipboard.clearData();
        } else if (typeof format === "string" && format) {
            dataObj = {};
            dataObj[format] = data;
        } else {
            return;
        }
        for (var dataFormat in dataObj) {
            if (typeof dataFormat === "string" && dataFormat && _hasOwn.call(dataObj, dataFormat) && typeof dataObj[dataFormat] === "string" && dataObj[dataFormat]) {
                _clipData[dataFormat] = dataObj[dataFormat];
            }
        }
    };
    /**
     * The underlying implementation of `ZeroClipboard.clearData`.
     * @private
     */
    var _clearData = function _clearData(format) {
        if (typeof format === "undefined") {
            _deleteOwnProperties(_clipData);
            _clipDataFormatMap = null;
        } else if (typeof format === "string" && _hasOwn.call(_clipData, format)) {
            delete _clipData[format];
        }
    };
    /**
     * The underlying implementation of `ZeroClipboard.getData`.
     * @private
     */
    var _getData = function _getData(format) {
        if (typeof format === "undefined") {
            return _deepCopy(_clipData);
        } else if (typeof format === "string" && _hasOwn.call(_clipData, format)) {
            return _clipData[format];
        }
    };
    /**
     * The underlying implementation of `ZeroClipboard.focus`/`ZeroClipboard.activate`.
     * @private
     */
    var _focus = function _focus(element) {
        if (!(element && element.nodeType === 1)) {
            return;
        }
        if (_currentElement) {
            _removeClass(_currentElement, _globalConfig.activeClass);
            if (_currentElement !== element) {
                _removeClass(_currentElement, _globalConfig.hoverClass);
            }
        }
        _currentElement = element;
        _addClass(element, _globalConfig.hoverClass);
        var newTitle = element.getAttribute("title") || _globalConfig.title;
        if (typeof newTitle === "string" && newTitle) {
            var htmlBridge = _getHtmlBridge(_flashState.bridge);
            if (htmlBridge) {
                htmlBridge.setAttribute("title", newTitle);
            }
        }
        var useHandCursor = _globalConfig.forceHandCursor === true || _getStyle(element, "cursor") === "pointer";
        _setHandCursor(useHandCursor);
        _reposition();
    };
    /**
     * The underlying implementation of `ZeroClipboard.blur`/`ZeroClipboard.deactivate`.
     * @private
     */
    var _blur = function _blur() {
        var htmlBridge = _getHtmlBridge(_flashState.bridge);
        if (htmlBridge) {
            htmlBridge.removeAttribute("title");
            htmlBridge.style.left = "0px";
            htmlBridge.style.top = "-9999px";
            htmlBridge.style.width = "1px";
            htmlBridge.style.height = "1px";
        }
        if (_currentElement) {
            _removeClass(_currentElement, _globalConfig.hoverClass);
            _removeClass(_currentElement, _globalConfig.activeClass);
            _currentElement = null;
        }
    };
    /**
     * The underlying implementation of `ZeroClipboard.activeElement`.
     * @private
     */
    var _activeElement = function _activeElement() {
        return _currentElement || null;
    };
    /**
     * Check if a value is a valid HTML4 `ID` or `Name` token.
     * @private
     */
    var _isValidHtml4Id = function _isValidHtml4Id(id) {
        return typeof id === "string" && id && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(id);
    };
    /**
     * Create or update an `event` object, based on the `eventType`.
     * @private
     */
    var _createEvent = function _createEvent(event) {
        var eventType;
        if (typeof event === "string" && event) {
            eventType = event;
            event = {};
        } else if ((typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event && typeof event.type === "string" && event.type) {
            eventType = event.type;
        }
        if (!eventType) {
            return;
        }
        eventType = eventType.toLowerCase();
        if (!event.target && (/^(copy|aftercopy|_click)$/.test(eventType) || eventType === "error" && event.name === "clipboard-error")) {
            event.target = _copyTarget;
        }
        _extend(event, {
            type: eventType,
            target: event.target || _currentElement || null,
            relatedTarget: event.relatedTarget || null,
            currentTarget: _flashState && _flashState.bridge || null,
            timeStamp: event.timeStamp || _now() || null
        });
        var msg = _eventMessages[event.type];
        if (event.type === "error" && event.name && msg) {
            msg = msg[event.name];
        }
        if (msg) {
            event.message = msg;
        }
        if (event.type === "ready") {
            _extend(event, {
                target: null,
                version: _flashState.version
            });
        }
        if (event.type === "error") {
            if (_flashStateErrorNameMatchingRegex.test(event.name)) {
                _extend(event, {
                    target: null,
                    minimumVersion: _minimumFlashVersion
                });
            }
            if (_flashStateEnabledErrorNameMatchingRegex.test(event.name)) {
                _extend(event, {
                    version: _flashState.version
                });
            }
        }
        if (event.type === "copy") {
            event.clipboardData = {
                setData: ZeroClipboard.setData,
                clearData: ZeroClipboard.clearData
            };
        }
        if (event.type === "aftercopy") {
            event = _mapClipResultsFromFlash(event, _clipDataFormatMap);
        }
        if (event.target && !event.relatedTarget) {
            event.relatedTarget = _getRelatedTarget(event.target);
        }
        return _addMouseData(event);
    };
    /**
     * Get a relatedTarget from the target's `data-clipboard-target` attribute
     * @private
     */
    var _getRelatedTarget = function _getRelatedTarget(targetEl) {
        var relatedTargetId = targetEl && targetEl.getAttribute && targetEl.getAttribute("data-clipboard-target");
        return relatedTargetId ? _document.getElementById(relatedTargetId) : null;
    };
    /**
     * Add element and position data to `MouseEvent` instances
     * @private
     */
    var _addMouseData = function _addMouseData(event) {
        if (event && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(event.type)) {
            var srcElement = event.target;
            var fromElement = event.type === "_mouseover" && event.relatedTarget ? event.relatedTarget : undefined;
            var toElement = event.type === "_mouseout" && event.relatedTarget ? event.relatedTarget : undefined;
            var pos = _getElementPosition(srcElement);
            var screenLeft = _window.screenLeft || _window.screenX || 0;
            var screenTop = _window.screenTop || _window.screenY || 0;
            var scrollLeft = _document.body.scrollLeft + _document.documentElement.scrollLeft;
            var scrollTop = _document.body.scrollTop + _document.documentElement.scrollTop;
            var pageX = pos.left + (typeof event._stageX === "number" ? event._stageX : 0);
            var pageY = pos.top + (typeof event._stageY === "number" ? event._stageY : 0);
            var clientX = pageX - scrollLeft;
            var clientY = pageY - scrollTop;
            var screenX = screenLeft + clientX;
            var screenY = screenTop + clientY;
            var moveX = typeof event.movementX === "number" ? event.movementX : 0;
            var moveY = typeof event.movementY === "number" ? event.movementY : 0;
            delete event._stageX;
            delete event._stageY;
            _extend(event, {
                srcElement: srcElement,
                fromElement: fromElement,
                toElement: toElement,
                screenX: screenX,
                screenY: screenY,
                pageX: pageX,
                pageY: pageY,
                clientX: clientX,
                clientY: clientY,
                x: clientX,
                y: clientY,
                movementX: moveX,
                movementY: moveY,
                offsetX: 0,
                offsetY: 0,
                layerX: 0,
                layerY: 0
            });
        }
        return event;
    };
    /**
     * Determine if an event's registered handlers should be execute synchronously or asynchronously.
     *
     * @returns {boolean}
     * @private
     */
    var _shouldPerformAsync = function _shouldPerformAsync(event) {
        var eventType = event && typeof event.type === "string" && event.type || "";
        return !/^(?:(?:before)?copy|destroy)$/.test(eventType);
    };
    /**
     * Control if a callback should be executed asynchronously or not.
     *
     * @returns `undefined`
     * @private
     */
    var _dispatchCallback = function _dispatchCallback(func, context, args, async) {
        if (async) {
            _setTimeout(function () {
                func.apply(context, args);
            }, 0);
        } else {
            func.apply(context, args);
        }
    };
    /**
     * Handle the actual dispatching of events to client instances.
     *
     * @returns `undefined`
     * @private
     */
    var _dispatchCallbacks = function _dispatchCallbacks(event) {
        if (!((typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event && event.type)) {
            return;
        }
        var async = _shouldPerformAsync(event);
        var wildcardTypeHandlers = _handlers["*"] || [];
        var specificTypeHandlers = _handlers[event.type] || [];
        var handlers = wildcardTypeHandlers.concat(specificTypeHandlers);
        if (handlers && handlers.length) {
            var i,
                len,
                func,
                context,
                eventCopy,
                originalContext = this;
            for (i = 0, len = handlers.length; i < len; i++) {
                func = handlers[i];
                context = originalContext;
                if (typeof func === "string" && typeof _window[func] === "function") {
                    func = _window[func];
                }
                if ((typeof func === "undefined" ? "undefined" : _typeof(func)) === "object" && func && typeof func.handleEvent === "function") {
                    context = func;
                    func = func.handleEvent;
                }
                if (typeof func === "function") {
                    eventCopy = _extend({}, event);
                    _dispatchCallback(func, context, [eventCopy], async);
                }
            }
        }
        return this;
    };
    /**
     * Check an `error` event's `name` property to see if Flash has
     * already loaded, which rules out possible `iframe` sandboxing.
     * @private
     */
    var _getSandboxStatusFromErrorEvent = function _getSandboxStatusFromErrorEvent(event) {
        var isSandboxed = null;
        if (_pageIsFramed === false || event && event.type === "error" && event.name && _errorsThatOnlyOccurAfterFlashLoads.indexOf(event.name) !== -1) {
            isSandboxed = false;
        }
        return isSandboxed;
    };
    /**
     * Preprocess any special behaviors, reactions, or state changes after receiving this event.
     * Executes only once per event emitted, NOT once per client.
     * @private
     */
    var _preprocessEvent = function _preprocessEvent(event) {
        var element = event.target || _currentElement || null;
        var sourceIsSwf = event._source === "swf";
        delete event._source;
        switch (event.type) {
            case "error":
                var isSandboxed = event.name === "flash-sandboxed" || _getSandboxStatusFromErrorEvent(event);
                if (typeof isSandboxed === "boolean") {
                    _flashState.sandboxed = isSandboxed;
                }
                if (_flashStateErrorNames.indexOf(event.name) !== -1) {
                    _extend(_flashState, {
                        disabled: event.name === "flash-disabled",
                        outdated: event.name === "flash-outdated",
                        unavailable: event.name === "flash-unavailable",
                        degraded: event.name === "flash-degraded",
                        deactivated: event.name === "flash-deactivated",
                        overdue: event.name === "flash-overdue",
                        ready: false
                    });
                } else if (event.name === "version-mismatch") {
                    _zcSwfVersion = event.swfVersion;
                    _extend(_flashState, {
                        disabled: false,
                        outdated: false,
                        unavailable: false,
                        degraded: false,
                        deactivated: false,
                        overdue: false,
                        ready: false
                    });
                }
                _clearTimeoutsAndPolling();
                break;

            case "ready":
                _zcSwfVersion = event.swfVersion;
                var wasDeactivated = _flashState.deactivated === true;
                _extend(_flashState, {
                    disabled: false,
                    outdated: false,
                    sandboxed: false,
                    unavailable: false,
                    degraded: false,
                    deactivated: false,
                    overdue: wasDeactivated,
                    ready: !wasDeactivated
                });
                _clearTimeoutsAndPolling();
                break;

            case "beforecopy":
                _copyTarget = element;
                break;

            case "copy":
                var textContent,
                    htmlContent,
                    targetEl = event.relatedTarget;
                if (!(_clipData["text/html"] || _clipData["text/plain"]) && targetEl && (htmlContent = targetEl.value || targetEl.outerHTML || targetEl.innerHTML) && (textContent = targetEl.value || targetEl.textContent || targetEl.innerText)) {
                    event.clipboardData.clearData();
                    event.clipboardData.setData("text/plain", textContent);
                    if (htmlContent !== textContent) {
                        event.clipboardData.setData("text/html", htmlContent);
                    }
                } else if (!_clipData["text/plain"] && event.target && (textContent = event.target.getAttribute("data-clipboard-text"))) {
                    event.clipboardData.clearData();
                    event.clipboardData.setData("text/plain", textContent);
                }
                break;

            case "aftercopy":
                _queueEmitClipboardErrors(event);
                ZeroClipboard.clearData();
                if (element && element !== _safeActiveElement() && element.focus) {
                    element.focus();
                }
                break;

            case "_mouseover":
                ZeroClipboard.focus(element);
                if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
                    if (element && element !== event.relatedTarget && !_containedBy(event.relatedTarget, element)) {
                        _fireMouseEvent(_extend({}, event, {
                            type: "mouseenter",
                            bubbles: false,
                            cancelable: false
                        }));
                    }
                    _fireMouseEvent(_extend({}, event, {
                        type: "mouseover"
                    }));
                }
                break;

            case "_mouseout":
                ZeroClipboard.blur();
                if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
                    if (element && element !== event.relatedTarget && !_containedBy(event.relatedTarget, element)) {
                        _fireMouseEvent(_extend({}, event, {
                            type: "mouseleave",
                            bubbles: false,
                            cancelable: false
                        }));
                    }
                    _fireMouseEvent(_extend({}, event, {
                        type: "mouseout"
                    }));
                }
                break;

            case "_mousedown":
                _addClass(element, _globalConfig.activeClass);
                if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
                    _fireMouseEvent(_extend({}, event, {
                        type: event.type.slice(1)
                    }));
                }
                break;

            case "_mouseup":
                _removeClass(element, _globalConfig.activeClass);
                if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
                    _fireMouseEvent(_extend({}, event, {
                        type: event.type.slice(1)
                    }));
                }
                break;

            case "_click":
                _copyTarget = null;
                if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
                    _fireMouseEvent(_extend({}, event, {
                        type: event.type.slice(1)
                    }));
                }
                break;

            case "_mousemove":
                if (_globalConfig.bubbleEvents === true && sourceIsSwf) {
                    _fireMouseEvent(_extend({}, event, {
                        type: event.type.slice(1)
                    }));
                }
                break;
        }
        if (/^_(?:click|mouse(?:over|out|down|up|move))$/.test(event.type)) {
            return true;
        }
    };
    /**
     * Check an "aftercopy" event for clipboard errors and emit a corresponding "error" event.
     * @private
     */
    var _queueEmitClipboardErrors = function _queueEmitClipboardErrors(aftercopyEvent) {
        if (aftercopyEvent.errors && aftercopyEvent.errors.length > 0) {
            var errorEvent = _deepCopy(aftercopyEvent);
            _extend(errorEvent, {
                type: "error",
                name: "clipboard-error"
            });
            delete errorEvent.success;
            _setTimeout(function () {
                ZeroClipboard.emit(errorEvent);
            }, 0);
        }
    };
    /**
     * Dispatch a synthetic MouseEvent.
     *
     * @returns `undefined`
     * @private
     */
    var _fireMouseEvent = function _fireMouseEvent(event) {
        if (!(event && typeof event.type === "string" && event)) {
            return;
        }
        var e,
            target = event.target || null,
            doc = target && target.ownerDocument || _document,
            defaults = {
            view: doc.defaultView || _window,
            canBubble: true,
            cancelable: true,
            detail: event.type === "click" ? 1 : 0,
            button: typeof event.which === "number" ? event.which - 1 : typeof event.button === "number" ? event.button : doc.createEvent ? 0 : 1
        },
            args = _extend(defaults, event);
        if (!target) {
            return;
        }
        if (doc.createEvent && target.dispatchEvent) {
            args = [args.type, args.canBubble, args.cancelable, args.view, args.detail, args.screenX, args.screenY, args.clientX, args.clientY, args.ctrlKey, args.altKey, args.shiftKey, args.metaKey, args.button, args.relatedTarget];
            e = doc.createEvent("MouseEvents");
            if (e.initMouseEvent) {
                e.initMouseEvent.apply(e, args);
                e._source = "js";
                target.dispatchEvent(e);
            }
        }
    };
    /**
     * Continuously poll the DOM until either:
     *  (a) the fallback content becomes visible, or
     *  (b) we receive an event from SWF (handled elsewhere)
     *
     * IMPORTANT:
     * This is NOT a necessary check but it can result in significantly faster
     * detection of bad `swfPath` configuration and/or network/server issues [in
     * supported browsers] than waiting for the entire `flashLoadTimeout` duration
     * to elapse before detecting that the SWF cannot be loaded. The detection
     * duration can be anywhere from 10-30 times faster [in supported browsers] by
     * using this approach.
     *
     * @returns `undefined`
     * @private
     */
    var _watchForSwfFallbackContent = function _watchForSwfFallbackContent() {
        var maxWait = _globalConfig.flashLoadTimeout;
        if (typeof maxWait === "number" && maxWait >= 0) {
            var pollWait = Math.min(1e3, maxWait / 10);
            var fallbackContentId = _globalConfig.swfObjectId + "_fallbackContent";
            _swfFallbackCheckInterval = _setInterval(function () {
                var el = _document.getElementById(fallbackContentId);
                if (_isElementVisible(el)) {
                    _clearTimeoutsAndPolling();
                    _flashState.deactivated = null;
                    ZeroClipboard.emit({
                        type: "error",
                        name: "swf-not-found"
                    });
                }
            }, pollWait);
        }
    };
    /**
     * Create the HTML bridge element to embed the Flash object into.
     * @private
     */
    var _createHtmlBridge = function _createHtmlBridge() {
        var container = _document.createElement("div");
        container.id = _globalConfig.containerId;
        container.className = _globalConfig.containerClass;
        container.style.position = "absolute";
        container.style.left = "0px";
        container.style.top = "-9999px";
        container.style.width = "1px";
        container.style.height = "1px";
        container.style.zIndex = "" + _getSafeZIndex(_globalConfig.zIndex);
        return container;
    };
    /**
     * Get the HTML element container that wraps the Flash bridge object/element.
     * @private
     */
    var _getHtmlBridge = function _getHtmlBridge(flashBridge) {
        var htmlBridge = flashBridge && flashBridge.parentNode;
        while (htmlBridge && htmlBridge.nodeName === "OBJECT" && htmlBridge.parentNode) {
            htmlBridge = htmlBridge.parentNode;
        }
        return htmlBridge || null;
    };
    /**
     * Create the SWF object.
     *
     * @returns The SWF object reference.
     * @private
     */
    var _embedSwf = function _embedSwf() {
        var len,
            flashBridge = _flashState.bridge,
            container = _getHtmlBridge(flashBridge);
        if (!flashBridge) {
            var allowScriptAccess = _determineScriptAccess(_window.location.host, _globalConfig);
            var allowNetworking = allowScriptAccess === "never" ? "none" : "all";
            var flashvars = _vars(_extend({
                jsVersion: ZeroClipboard.version
            }, _globalConfig));
            var swfUrl = _globalConfig.swfPath + _cacheBust(_globalConfig.swfPath, _globalConfig);
            container = _createHtmlBridge();
            var divToBeReplaced = _document.createElement("div");
            container.appendChild(divToBeReplaced);
            _document.body.appendChild(container);
            var tmpDiv = _document.createElement("div");
            var usingActiveX = _flashState.pluginType === "activex";
            tmpDiv.innerHTML = '<object id="' + _globalConfig.swfObjectId + '" name="' + _globalConfig.swfObjectId + '" ' + 'width="100%" height="100%" ' + (usingActiveX ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + swfUrl + '"') + ">" + (usingActiveX ? '<param name="movie" value="' + swfUrl + '"/>' : "") + '<param name="allowScriptAccess" value="' + allowScriptAccess + '"/>' + '<param name="allowNetworking" value="' + allowNetworking + '"/>' + '<param name="menu" value="false"/>' + '<param name="wmode" value="transparent"/>' + '<param name="flashvars" value="' + flashvars + '"/>' + '<div id="' + _globalConfig.swfObjectId + '_fallbackContent">&nbsp;</div>' + "</object>";
            flashBridge = tmpDiv.firstChild;
            tmpDiv = null;
            _unwrap(flashBridge).ZeroClipboard = ZeroClipboard;
            container.replaceChild(flashBridge, divToBeReplaced);
            _watchForSwfFallbackContent();
        }
        if (!flashBridge) {
            flashBridge = _document[_globalConfig.swfObjectId];
            if (flashBridge && (len = flashBridge.length)) {
                flashBridge = flashBridge[len - 1];
            }
            if (!flashBridge && container) {
                flashBridge = container.firstChild;
            }
        }
        _flashState.bridge = flashBridge || null;
        return flashBridge;
    };
    /**
     * Destroy the SWF object.
     * @private
     */
    var _unembedSwf = function _unembedSwf() {
        var flashBridge = _flashState.bridge;
        if (flashBridge) {
            var htmlBridge = _getHtmlBridge(flashBridge);
            if (htmlBridge) {
                if (_flashState.pluginType === "activex" && "readyState" in flashBridge) {
                    flashBridge.style.display = "none";
                    (function removeSwfFromIE() {
                        if (flashBridge.readyState === 4) {
                            for (var prop in flashBridge) {
                                if (typeof flashBridge[prop] === "function") {
                                    flashBridge[prop] = null;
                                }
                            }
                            if (flashBridge.parentNode) {
                                flashBridge.parentNode.removeChild(flashBridge);
                            }
                            if (htmlBridge.parentNode) {
                                htmlBridge.parentNode.removeChild(htmlBridge);
                            }
                        } else {
                            _setTimeout(removeSwfFromIE, 10);
                        }
                    })();
                } else {
                    if (flashBridge.parentNode) {
                        flashBridge.parentNode.removeChild(flashBridge);
                    }
                    if (htmlBridge.parentNode) {
                        htmlBridge.parentNode.removeChild(htmlBridge);
                    }
                }
            }
            _clearTimeoutsAndPolling();
            _flashState.ready = null;
            _flashState.bridge = null;
            _flashState.deactivated = null;
            _zcSwfVersion = undefined;
        }
    };
    /**
     * Map the data format names of the "clipData" to Flash-friendly names.
     *
     * @returns A new transformed object.
     * @private
     */
    var _mapClipDataToFlash = function _mapClipDataToFlash(clipData) {
        var newClipData = {},
            formatMap = {};
        if (!((typeof clipData === "undefined" ? "undefined" : _typeof(clipData)) === "object" && clipData)) {
            return;
        }
        for (var dataFormat in clipData) {
            if (dataFormat && _hasOwn.call(clipData, dataFormat) && typeof clipData[dataFormat] === "string" && clipData[dataFormat]) {
                switch (dataFormat.toLowerCase()) {
                    case "text/plain":
                    case "text":
                    case "air:text":
                    case "flash:text":
                        newClipData.text = clipData[dataFormat];
                        formatMap.text = dataFormat;
                        break;

                    case "text/html":
                    case "html":
                    case "air:html":
                    case "flash:html":
                        newClipData.html = clipData[dataFormat];
                        formatMap.html = dataFormat;
                        break;

                    case "application/rtf":
                    case "text/rtf":
                    case "rtf":
                    case "richtext":
                    case "air:rtf":
                    case "flash:rtf":
                        newClipData.rtf = clipData[dataFormat];
                        formatMap.rtf = dataFormat;
                        break;

                    default:
                        break;
                }
            }
        }
        return {
            data: newClipData,
            formatMap: formatMap
        };
    };
    /**
     * Map the data format names from Flash-friendly names back to their original "clipData" names (via a format mapping).
     *
     * @returns A new transformed object.
     * @private
     */
    var _mapClipResultsFromFlash = function _mapClipResultsFromFlash(clipResults, formatMap) {
        if (!((typeof clipResults === "undefined" ? "undefined" : _typeof(clipResults)) === "object" && clipResults && (typeof formatMap === "undefined" ? "undefined" : _typeof(formatMap)) === "object" && formatMap)) {
            return clipResults;
        }
        var newResults = {};
        for (var prop in clipResults) {
            if (_hasOwn.call(clipResults, prop)) {
                if (prop === "errors") {
                    newResults[prop] = clipResults[prop] ? clipResults[prop].slice() : [];
                    for (var i = 0, len = newResults[prop].length; i < len; i++) {
                        newResults[prop][i].format = formatMap[newResults[prop][i].format];
                    }
                } else if (prop !== "success" && prop !== "data") {
                    newResults[prop] = clipResults[prop];
                } else {
                    newResults[prop] = {};
                    var tmpHash = clipResults[prop];
                    for (var dataFormat in tmpHash) {
                        if (dataFormat && _hasOwn.call(tmpHash, dataFormat) && _hasOwn.call(formatMap, dataFormat)) {
                            newResults[prop][formatMap[dataFormat]] = tmpHash[dataFormat];
                        }
                    }
                }
            }
        }
        return newResults;
    };
    /**
     * Will look at a path, and will create a "?noCache={time}" or "&noCache={time}"
     * query param string to return. Does NOT append that string to the original path.
     * This is useful because ExternalInterface often breaks when a Flash SWF is cached.
     *
     * @returns The `noCache` query param with necessary "?"/"&" prefix.
     * @private
     */
    var _cacheBust = function _cacheBust(path, options) {
        var cacheBust = options == null || options && options.cacheBust === true;
        if (cacheBust) {
            return (path.indexOf("?") === -1 ? "?" : "&") + "noCache=" + _now();
        } else {
            return "";
        }
    };
    /**
     * Creates a query string for the FlashVars param.
     * Does NOT include the cache-busting query param.
     *
     * @returns FlashVars query string
     * @private
     */
    var _vars = function _vars(options) {
        var i,
            len,
            domain,
            domains,
            str = "",
            trustedOriginsExpanded = [];
        if (options.trustedDomains) {
            if (typeof options.trustedDomains === "string") {
                domains = [options.trustedDomains];
            } else if (_typeof(options.trustedDomains) === "object" && "length" in options.trustedDomains) {
                domains = options.trustedDomains;
            }
        }
        if (domains && domains.length) {
            for (i = 0, len = domains.length; i < len; i++) {
                if (_hasOwn.call(domains, i) && domains[i] && typeof domains[i] === "string") {
                    domain = _extractDomain(domains[i]);
                    if (!domain) {
                        continue;
                    }
                    if (domain === "*") {
                        trustedOriginsExpanded.length = 0;
                        trustedOriginsExpanded.push(domain);
                        break;
                    }
                    trustedOriginsExpanded.push.apply(trustedOriginsExpanded, [domain, "//" + domain, _window.location.protocol + "//" + domain]);
                }
            }
        }
        if (trustedOriginsExpanded.length) {
            str += "trustedOrigins=" + _encodeURIComponent(trustedOriginsExpanded.join(","));
        }
        if (options.forceEnhancedClipboard === true) {
            str += (str ? "&" : "") + "forceEnhancedClipboard=true";
        }
        if (typeof options.swfObjectId === "string" && options.swfObjectId) {
            str += (str ? "&" : "") + "swfObjectId=" + _encodeURIComponent(options.swfObjectId);
        }
        if (typeof options.jsVersion === "string" && options.jsVersion) {
            str += (str ? "&" : "") + "jsVersion=" + _encodeURIComponent(options.jsVersion);
        }
        return str;
    };
    /**
     * Extract the domain (e.g. "github.com") from an origin (e.g. "https://github.com") or
     * URL (e.g. "https://github.com/zeroclipboard/zeroclipboard/").
     *
     * @returns the domain
     * @private
     */
    var _extractDomain = function _extractDomain(originOrUrl) {
        if (originOrUrl == null || originOrUrl === "") {
            return null;
        }
        originOrUrl = originOrUrl.replace(/^\s+|\s+$/g, "");
        if (originOrUrl === "") {
            return null;
        }
        var protocolIndex = originOrUrl.indexOf("//");
        originOrUrl = protocolIndex === -1 ? originOrUrl : originOrUrl.slice(protocolIndex + 2);
        var pathIndex = originOrUrl.indexOf("/");
        originOrUrl = pathIndex === -1 ? originOrUrl : protocolIndex === -1 || pathIndex === 0 ? null : originOrUrl.slice(0, pathIndex);
        if (originOrUrl && originOrUrl.slice(-4).toLowerCase() === ".swf") {
            return null;
        }
        return originOrUrl || null;
    };
    /**
     * Set `allowScriptAccess` based on `trustedDomains` and `window.location.host` vs. `swfPath`.
     *
     * @returns The appropriate script access level.
     * @private
     */
    var _determineScriptAccess = function () {
        var _extractAllDomains = function _extractAllDomains(origins) {
            var i,
                len,
                tmp,
                resultsArray = [];
            if (typeof origins === "string") {
                origins = [origins];
            }
            if (!((typeof origins === "undefined" ? "undefined" : _typeof(origins)) === "object" && origins && typeof origins.length === "number")) {
                return resultsArray;
            }
            for (i = 0, len = origins.length; i < len; i++) {
                if (_hasOwn.call(origins, i) && (tmp = _extractDomain(origins[i]))) {
                    if (tmp === "*") {
                        resultsArray.length = 0;
                        resultsArray.push("*");
                        break;
                    }
                    if (resultsArray.indexOf(tmp) === -1) {
                        resultsArray.push(tmp);
                    }
                }
            }
            return resultsArray;
        };
        return function (currentDomain, configOptions) {
            var swfDomain = _extractDomain(configOptions.swfPath);
            if (swfDomain === null) {
                swfDomain = currentDomain;
            }
            var trustedDomains = _extractAllDomains(configOptions.trustedDomains);
            var len = trustedDomains.length;
            if (len > 0) {
                if (len === 1 && trustedDomains[0] === "*") {
                    return "always";
                }
                if (trustedDomains.indexOf(currentDomain) !== -1) {
                    if (len === 1 && currentDomain === swfDomain) {
                        return "sameDomain";
                    }
                    return "always";
                }
            }
            return "never";
        };
    }();
    /**
     * Get the currently active/focused DOM element.
     *
     * @returns the currently active/focused element, or `null`
     * @private
     */
    var _safeActiveElement = function _safeActiveElement() {
        try {
            return _document.activeElement;
        } catch (err) {
            return null;
        }
    };
    /**
     * Add a class to an element, if it doesn't already have it.
     *
     * @returns The element, with its new class added.
     * @private
     */
    var _addClass = function _addClass(element, value) {
        var c,
            cl,
            className,
            classNames = [];
        if (typeof value === "string" && value) {
            classNames = value.split(/\s+/);
        }
        if (element && element.nodeType === 1 && classNames.length > 0) {
            if (element.classList) {
                for (c = 0, cl = classNames.length; c < cl; c++) {
                    element.classList.add(classNames[c]);
                }
            } else if (element.hasOwnProperty("className")) {
                className = " " + element.className + " ";
                for (c = 0, cl = classNames.length; c < cl; c++) {
                    if (className.indexOf(" " + classNames[c] + " ") === -1) {
                        className += classNames[c] + " ";
                    }
                }
                element.className = className.replace(/^\s+|\s+$/g, "");
            }
        }
        return element;
    };
    /**
     * Remove a class from an element, if it has it.
     *
     * @returns The element, with its class removed.
     * @private
     */
    var _removeClass = function _removeClass(element, value) {
        var c,
            cl,
            className,
            classNames = [];
        if (typeof value === "string" && value) {
            classNames = value.split(/\s+/);
        }
        if (element && element.nodeType === 1 && classNames.length > 0) {
            if (element.classList && element.classList.length > 0) {
                for (c = 0, cl = classNames.length; c < cl; c++) {
                    element.classList.remove(classNames[c]);
                }
            } else if (element.className) {
                className = (" " + element.className + " ").replace(/[\r\n\t]/g, " ");
                for (c = 0, cl = classNames.length; c < cl; c++) {
                    className = className.replace(" " + classNames[c] + " ", " ");
                }
                element.className = className.replace(/^\s+|\s+$/g, "");
            }
        }
        return element;
    };
    /**
     * Attempt to interpret the element's CSS styling. If `prop` is `"cursor"`,
     * then we assume that it should be a hand ("pointer") cursor if the element
     * is an anchor element ("a" tag).
     *
     * @returns The computed style property.
     * @private
     */
    var _getStyle = function _getStyle(el, prop) {
        var value = _getComputedStyle(el, null).getPropertyValue(prop);
        if (prop === "cursor") {
            if (!value || value === "auto") {
                if (el.nodeName === "A") {
                    return "pointer";
                }
            }
        }
        return value;
    };
    /**
     * Get the absolutely positioned coordinates of a DOM element.
     *
     * @returns Object containing the element's position, width, and height.
     * @private
     */
    var _getElementPosition = function _getElementPosition(el) {
        var pos = {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        };
        if (el.getBoundingClientRect) {
            var elRect = el.getBoundingClientRect();
            var pageXOffset = _window.pageXOffset;
            var pageYOffset = _window.pageYOffset;
            var leftBorderWidth = _document.documentElement.clientLeft || 0;
            var topBorderWidth = _document.documentElement.clientTop || 0;
            var leftBodyOffset = 0;
            var topBodyOffset = 0;
            if (_getStyle(_document.body, "position") === "relative") {
                var bodyRect = _document.body.getBoundingClientRect();
                var htmlRect = _document.documentElement.getBoundingClientRect();
                leftBodyOffset = bodyRect.left - htmlRect.left || 0;
                topBodyOffset = bodyRect.top - htmlRect.top || 0;
            }
            pos.left = elRect.left + pageXOffset - leftBorderWidth - leftBodyOffset;
            pos.top = elRect.top + pageYOffset - topBorderWidth - topBodyOffset;
            pos.width = "width" in elRect ? elRect.width : elRect.right - elRect.left;
            pos.height = "height" in elRect ? elRect.height : elRect.bottom - elRect.top;
        }
        return pos;
    };
    /**
     * Determine is an element is visible somewhere within the document (page).
     *
     * @returns Boolean
     * @private
     */
    var _isElementVisible = function _isElementVisible(el) {
        if (!el) {
            return false;
        }
        var styles = _getComputedStyle(el, null);
        var hasCssHeight = _parseFloat(styles.height) > 0;
        var hasCssWidth = _parseFloat(styles.width) > 0;
        var hasCssTop = _parseFloat(styles.top) >= 0;
        var hasCssLeft = _parseFloat(styles.left) >= 0;
        var cssKnows = hasCssHeight && hasCssWidth && hasCssTop && hasCssLeft;
        var rect = cssKnows ? null : _getElementPosition(el);
        var isVisible = styles.display !== "none" && styles.visibility !== "collapse" && (cssKnows || !!rect && (hasCssHeight || rect.height > 0) && (hasCssWidth || rect.width > 0) && (hasCssTop || rect.top >= 0) && (hasCssLeft || rect.left >= 0));
        return isVisible;
    };
    /**
     * Clear all existing timeouts and interval polling delegates.
     *
     * @returns `undefined`
     * @private
     */
    var _clearTimeoutsAndPolling = function _clearTimeoutsAndPolling() {
        _clearTimeout(_flashCheckTimeout);
        _flashCheckTimeout = 0;
        _clearInterval(_swfFallbackCheckInterval);
        _swfFallbackCheckInterval = 0;
    };
    /**
     * Reposition the Flash object to cover the currently activated element.
     *
     * @returns `undefined`
     * @private
     */
    var _reposition = function _reposition() {
        var htmlBridge;
        if (_currentElement && (htmlBridge = _getHtmlBridge(_flashState.bridge))) {
            var pos = _getElementPosition(_currentElement);
            _extend(htmlBridge.style, {
                width: pos.width + "px",
                height: pos.height + "px",
                top: pos.top + "px",
                left: pos.left + "px",
                zIndex: "" + _getSafeZIndex(_globalConfig.zIndex)
            });
        }
    };
    /**
     * Sends a signal to the Flash object to display the hand cursor if `true`.
     *
     * @returns `undefined`
     * @private
     */
    var _setHandCursor = function _setHandCursor(enabled) {
        if (_flashState.ready === true) {
            if (_flashState.bridge && typeof _flashState.bridge.setHandCursor === "function") {
                _flashState.bridge.setHandCursor(enabled);
            } else {
                _flashState.ready = false;
            }
        }
    };
    /**
     * Get a safe value for `zIndex`
     *
     * @returns an integer, or "auto"
     * @private
     */
    var _getSafeZIndex = function _getSafeZIndex(val) {
        if (/^(?:auto|inherit)$/.test(val)) {
            return val;
        }
        var zIndex;
        if (typeof val === "number" && !_isNaN(val)) {
            zIndex = val;
        } else if (typeof val === "string") {
            zIndex = _getSafeZIndex(_parseInt(val, 10));
        }
        return typeof zIndex === "number" ? zIndex : "auto";
    };
    /**
     * Attempt to detect if ZeroClipboard is executing inside of a sandboxed iframe.
     * If it is, Flash Player cannot be used, so ZeroClipboard is dead in the water.
     *
     * @see {@link http://lists.w3.org/Archives/Public/public-whatwg-archive/2014Dec/0002.html}
     * @see {@link https://github.com/zeroclipboard/zeroclipboard/issues/511}
     * @see {@link http://zeroclipboard.org/test-iframes.html}
     *
     * @returns `true` (is sandboxed), `false` (is not sandboxed), or `null` (uncertain)
     * @private
     */
    var _detectSandbox = function _detectSandbox(doNotReassessFlashSupport) {
        var effectiveScriptOrigin,
            frame,
            frameError,
            previousState = _flashState.sandboxed,
            isSandboxed = null;
        doNotReassessFlashSupport = doNotReassessFlashSupport === true;
        if (_pageIsFramed === false) {
            isSandboxed = false;
        } else {
            try {
                frame = window.frameElement || null;
            } catch (e) {
                frameError = {
                    name: e.name,
                    message: e.message
                };
            }
            if (frame && frame.nodeType === 1 && frame.nodeName === "IFRAME") {
                try {
                    isSandboxed = frame.hasAttribute("sandbox");
                } catch (e) {
                    isSandboxed = null;
                }
            } else {
                try {
                    effectiveScriptOrigin = document.domain || null;
                } catch (e) {
                    effectiveScriptOrigin = null;
                }
                if (effectiveScriptOrigin === null || frameError && frameError.name === "SecurityError" && /(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(frameError.message.toLowerCase())) {
                    isSandboxed = true;
                }
            }
        }
        _flashState.sandboxed = isSandboxed;
        if (previousState !== isSandboxed && !doNotReassessFlashSupport) {
            _detectFlashSupport(_ActiveXObject);
        }
        return isSandboxed;
    };
    /**
     * Detect the Flash Player status, version, and plugin type.
     *
     * @see {@link https://code.google.com/p/doctype-mirror/wiki/ArticleDetectFlash#The_code}
     * @see {@link http://stackoverflow.com/questions/12866060/detecting-pepper-ppapi-flash-with-javascript}
     *
     * @returns `undefined`
     * @private
     */
    var _detectFlashSupport = function _detectFlashSupport(ActiveXObject) {
        var plugin,
            ax,
            mimeType,
            hasFlash = false,
            isActiveX = false,
            isPPAPI = false,
            flashVersion = "";
        /**
         * Derived from Apple's suggested sniffer.
         * @param {String} desc e.g. "Shockwave Flash 7.0 r61"
         * @returns {String} "7.0.61"
         * @private
         */
        function parseFlashVersion(desc) {
            var matches = desc.match(/[\d]+/g);
            matches.length = 3;
            return matches.join(".");
        }
        function isPepperFlash(flashPlayerFileName) {
            return !!flashPlayerFileName && (flashPlayerFileName = flashPlayerFileName.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(flashPlayerFileName) || flashPlayerFileName.slice(-13) === "chrome.plugin");
        }
        function inspectPlugin(plugin) {
            if (plugin) {
                hasFlash = true;
                if (plugin.version) {
                    flashVersion = parseFlashVersion(plugin.version);
                }
                if (!flashVersion && plugin.description) {
                    flashVersion = parseFlashVersion(plugin.description);
                }
                if (plugin.filename) {
                    isPPAPI = isPepperFlash(plugin.filename);
                }
            }
        }
        if (_navigator.plugins && _navigator.plugins.length) {
            plugin = _navigator.plugins["Shockwave Flash"];
            inspectPlugin(plugin);
            if (_navigator.plugins["Shockwave Flash 2.0"]) {
                hasFlash = true;
                flashVersion = "2.0.0.11";
            }
        } else if (_navigator.mimeTypes && _navigator.mimeTypes.length) {
            mimeType = _navigator.mimeTypes["application/x-shockwave-flash"];
            plugin = mimeType && mimeType.enabledPlugin;
            inspectPlugin(plugin);
        } else if (typeof ActiveXObject !== "undefined") {
            isActiveX = true;
            try {
                ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                hasFlash = true;
                flashVersion = parseFlashVersion(ax.GetVariable("$version"));
            } catch (e1) {
                try {
                    ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                    hasFlash = true;
                    flashVersion = "6.0.21";
                } catch (e2) {
                    try {
                        ax = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                        hasFlash = true;
                        flashVersion = parseFlashVersion(ax.GetVariable("$version"));
                    } catch (e3) {
                        isActiveX = false;
                    }
                }
            }
        }
        _flashState.disabled = hasFlash !== true;
        _flashState.outdated = flashVersion && _parseFloat(flashVersion) < _parseFloat(_minimumFlashVersion);
        _flashState.version = flashVersion || "0.0.0";
        _flashState.pluginType = isPPAPI ? "pepper" : isActiveX ? "activex" : hasFlash ? "netscape" : "unknown";
    };
    /**
     * Invoke the Flash detection algorithms immediately upon inclusion so we're not waiting later.
     */
    _detectFlashSupport(_ActiveXObject);
    /**
     * Always assess the `sandboxed` state of the page at important Flash-related moments.
     */
    _detectSandbox(true);
    /**
     * A shell constructor for `ZeroClipboard` client instances.
     *
     * @constructor
     */
    var ZeroClipboard = function ZeroClipboard() {
        if (!(this instanceof ZeroClipboard)) {
            return new ZeroClipboard();
        }
        if (typeof ZeroClipboard._createClient === "function") {
            ZeroClipboard._createClient.apply(this, _args(arguments));
        }
    };
    /**
     * The ZeroClipboard library's version number.
     *
     * @static
     * @readonly
     * @property {string}
     */
    _defineProperty(ZeroClipboard, "version", {
        value: "2.2.0",
        writable: false,
        configurable: true,
        enumerable: true
    });
    /**
     * Update or get a copy of the ZeroClipboard global configuration.
     * Returns a copy of the current/updated configuration.
     *
     * @returns Object
     * @static
     */
    ZeroClipboard.config = function () {
        return _config.apply(this, _args(arguments));
    };
    /**
     * Diagnostic method that describes the state of the browser, Flash Player, and ZeroClipboard.
     *
     * @returns Object
     * @static
     */
    ZeroClipboard.state = function () {
        return _state.apply(this, _args(arguments));
    };
    /**
     * Check if Flash is unusable for any reason: disabled, outdated, deactivated, etc.
     *
     * @returns Boolean
     * @static
     */
    ZeroClipboard.isFlashUnusable = function () {
        return _isFlashUnusable.apply(this, _args(arguments));
    };
    /**
     * Register an event listener.
     *
     * @returns `ZeroClipboard`
     * @static
     */
    ZeroClipboard.on = function () {
        return _on.apply(this, _args(arguments));
    };
    /**
     * Unregister an event listener.
     * If no `listener` function/object is provided, it will unregister all listeners for the provided `eventType`.
     * If no `eventType` is provided, it will unregister all listeners for every event type.
     *
     * @returns `ZeroClipboard`
     * @static
     */
    ZeroClipboard.off = function () {
        return _off.apply(this, _args(arguments));
    };
    /**
     * Retrieve event listeners for an `eventType`.
     * If no `eventType` is provided, it will retrieve all listeners for every event type.
     *
     * @returns array of listeners for the `eventType`; if no `eventType`, then a map/hash object of listeners for all event types; or `null`
     */
    ZeroClipboard.handlers = function () {
        return _listeners.apply(this, _args(arguments));
    };
    /**
     * Event emission receiver from the Flash object, forwarding to any registered JavaScript event listeners.
     *
     * @returns For the "copy" event, returns the Flash-friendly "clipData" object; otherwise `undefined`.
     * @static
     */
    ZeroClipboard.emit = function () {
        return _emit.apply(this, _args(arguments));
    };
    /**
     * Create and embed the Flash object.
     *
     * @returns The Flash object
     * @static
     */
    ZeroClipboard.create = function () {
        return _create.apply(this, _args(arguments));
    };
    /**
     * Self-destruct and clean up everything, including the embedded Flash object.
     *
     * @returns `undefined`
     * @static
     */
    ZeroClipboard.destroy = function () {
        return _destroy.apply(this, _args(arguments));
    };
    /**
     * Set the pending data for clipboard injection.
     *
     * @returns `undefined`
     * @static
     */
    ZeroClipboard.setData = function () {
        return _setData.apply(this, _args(arguments));
    };
    /**
     * Clear the pending data for clipboard injection.
     * If no `format` is provided, all pending data formats will be cleared.
     *
     * @returns `undefined`
     * @static
     */
    ZeroClipboard.clearData = function () {
        return _clearData.apply(this, _args(arguments));
    };
    /**
     * Get a copy of the pending data for clipboard injection.
     * If no `format` is provided, a copy of ALL pending data formats will be returned.
     *
     * @returns `String` or `Object`
     * @static
     */
    ZeroClipboard.getData = function () {
        return _getData.apply(this, _args(arguments));
    };
    /**
     * Sets the current HTML object that the Flash object should overlay. This will put the global
     * Flash object on top of the current element; depending on the setup, this may also set the
     * pending clipboard text data as well as the Flash object's wrapping element's title attribute
     * based on the underlying HTML element and ZeroClipboard configuration.
     *
     * @returns `undefined`
     * @static
     */
    ZeroClipboard.focus = ZeroClipboard.activate = function () {
        return _focus.apply(this, _args(arguments));
    };
    /**
     * Un-overlays the Flash object. This will put the global Flash object off-screen; depending on
     * the setup, this may also unset the Flash object's wrapping element's title attribute based on
     * the underlying HTML element and ZeroClipboard configuration.
     *
     * @returns `undefined`
     * @static
     */
    ZeroClipboard.blur = ZeroClipboard.deactivate = function () {
        return _blur.apply(this, _args(arguments));
    };
    /**
     * Returns the currently focused/"activated" HTML element that the Flash object is wrapping.
     *
     * @returns `HTMLElement` or `null`
     * @static
     */
    ZeroClipboard.activeElement = function () {
        return _activeElement.apply(this, _args(arguments));
    };
    /**
     * Keep track of the ZeroClipboard client instance counter.
     */
    var _clientIdCounter = 0;
    /**
     * Keep track of the state of the client instances.
     *
     * Entry structure:
     *   _clientMeta[client.id] = {
    *     instance: client,
    *     elements: [],
    *     handlers: {}
    *   };
     */
    var _clientMeta = {};
    /**
     * Keep track of the ZeroClipboard clipped elements counter.
     */
    var _elementIdCounter = 0;
    /**
     * Keep track of the state of the clipped element relationships to clients.
     *
     * Entry structure:
     *   _elementMeta[element.zcClippingId] = [client1.id, client2.id];
     */
    var _elementMeta = {};
    /**
     * Keep track of the state of the mouse event handlers for clipped elements.
     *
     * Entry structure:
     *   _mouseHandlers[element.zcClippingId] = {
    *     mouseover:  function(event) {},
    *     mouseout:   function(event) {},
    *     mouseenter: function(event) {},
    *     mouseleave: function(event) {},
    *     mousemove:  function(event) {}
    *   };
     */
    var _mouseHandlers = {};
    /**
     * Extending the ZeroClipboard configuration defaults for the Client module.
     */
    _extend(_globalConfig, {
        autoActivate: true
    });
    /**
     * The real constructor for `ZeroClipboard` client instances.
     * @private
     */
    var _clientConstructor = function _clientConstructor(elements) {
        var client = this;
        client.id = "" + _clientIdCounter++;
        _clientMeta[client.id] = {
            instance: client,
            elements: [],
            handlers: {}
        };
        if (elements) {
            client.clip(elements);
        }
        ZeroClipboard.on("*", function (event) {
            return client.emit(event);
        });
        ZeroClipboard.on("destroy", function () {
            client.destroy();
        });
        ZeroClipboard.create();
    };
    /**
     * The underlying implementation of `ZeroClipboard.Client.prototype.on`.
     * @private
     */
    var _clientOn = function _clientOn(eventType, listener) {
        var i,
            len,
            events,
            added = {},
            meta = _clientMeta[this.id],
            handlers = meta && meta.handlers;
        if (!meta) {
            throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");
        }
        if (typeof eventType === "string" && eventType) {
            events = eventType.toLowerCase().split(/\s+/);
        } else if ((typeof eventType === "undefined" ? "undefined" : _typeof(eventType)) === "object" && eventType && typeof listener === "undefined") {
            for (i in eventType) {
                if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
                    this.on(i, eventType[i]);
                }
            }
        }
        if (events && events.length) {
            for (i = 0, len = events.length; i < len; i++) {
                eventType = events[i].replace(/^on/, "");
                added[eventType] = true;
                if (!handlers[eventType]) {
                    handlers[eventType] = [];
                }
                handlers[eventType].push(listener);
            }
            if (added.ready && _flashState.ready) {
                this.emit({
                    type: "ready",
                    client: this
                });
            }
            if (added.error) {
                for (i = 0, len = _flashStateErrorNames.length; i < len; i++) {
                    if (_flashState[_flashStateErrorNames[i].replace(/^flash-/, "")]) {
                        this.emit({
                            type: "error",
                            name: _flashStateErrorNames[i],
                            client: this
                        });
                        break;
                    }
                }
                if (_zcSwfVersion !== undefined && ZeroClipboard.version !== _zcSwfVersion) {
                    this.emit({
                        type: "error",
                        name: "version-mismatch",
                        jsVersion: ZeroClipboard.version,
                        swfVersion: _zcSwfVersion
                    });
                }
            }
        }
        return this;
    };
    /**
     * The underlying implementation of `ZeroClipboard.Client.prototype.off`.
     * @private
     */
    var _clientOff = function _clientOff(eventType, listener) {
        var i,
            len,
            foundIndex,
            events,
            perEventHandlers,
            meta = _clientMeta[this.id],
            handlers = meta && meta.handlers;
        if (!handlers) {
            return this;
        }
        if (arguments.length === 0) {
            events = _keys(handlers);
        } else if (typeof eventType === "string" && eventType) {
            events = eventType.split(/\s+/);
        } else if ((typeof eventType === "undefined" ? "undefined" : _typeof(eventType)) === "object" && eventType && typeof listener === "undefined") {
            for (i in eventType) {
                if (_hasOwn.call(eventType, i) && typeof i === "string" && i && typeof eventType[i] === "function") {
                    this.off(i, eventType[i]);
                }
            }
        }
        if (events && events.length) {
            for (i = 0, len = events.length; i < len; i++) {
                eventType = events[i].toLowerCase().replace(/^on/, "");
                perEventHandlers = handlers[eventType];
                if (perEventHandlers && perEventHandlers.length) {
                    if (listener) {
                        foundIndex = perEventHandlers.indexOf(listener);
                        while (foundIndex !== -1) {
                            perEventHandlers.splice(foundIndex, 1);
                            foundIndex = perEventHandlers.indexOf(listener, foundIndex);
                        }
                    } else {
                        perEventHandlers.length = 0;
                    }
                }
            }
        }
        return this;
    };
    /**
     * The underlying implementation of `ZeroClipboard.Client.prototype.handlers`.
     * @private
     */
    var _clientListeners = function _clientListeners(eventType) {
        var copy = null,
            handlers = _clientMeta[this.id] && _clientMeta[this.id].handlers;
        if (handlers) {
            if (typeof eventType === "string" && eventType) {
                copy = handlers[eventType] ? handlers[eventType].slice(0) : [];
            } else {
                copy = _deepCopy(handlers);
            }
        }
        return copy;
    };
    /**
     * The underlying implementation of `ZeroClipboard.Client.prototype.emit`.
     * @private
     */
    var _clientEmit = function _clientEmit(event) {
        if (_clientShouldEmit.call(this, event)) {
            if ((typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event && typeof event.type === "string" && event.type) {
                event = _extend({}, event);
            }
            var eventCopy = _extend({}, _createEvent(event), {
                client: this
            });
            _clientDispatchCallbacks.call(this, eventCopy);
        }
        return this;
    };
    /**
     * The underlying implementation of `ZeroClipboard.Client.prototype.clip`.
     * @private
     */
    var _clientClip = function _clientClip(elements) {
        if (!_clientMeta[this.id]) {
            throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");
        }
        elements = _prepClip(elements);
        for (var i = 0; i < elements.length; i++) {
            if (_hasOwn.call(elements, i) && elements[i] && elements[i].nodeType === 1) {
                if (!elements[i].zcClippingId) {
                    elements[i].zcClippingId = "zcClippingId_" + _elementIdCounter++;
                    _elementMeta[elements[i].zcClippingId] = [this.id];
                    if (_globalConfig.autoActivate === true) {
                        _addMouseHandlers(elements[i]);
                    }
                } else if (_elementMeta[elements[i].zcClippingId].indexOf(this.id) === -1) {
                    _elementMeta[elements[i].zcClippingId].push(this.id);
                }
                var clippedElements = _clientMeta[this.id] && _clientMeta[this.id].elements;
                if (clippedElements.indexOf(elements[i]) === -1) {
                    clippedElements.push(elements[i]);
                }
            }
        }
        return this;
    };
    /**
     * The underlying implementation of `ZeroClipboard.Client.prototype.unclip`.
     * @private
     */
    var _clientUnclip = function _clientUnclip(elements) {
        var meta = _clientMeta[this.id];
        if (!meta) {
            return this;
        }
        var clippedElements = meta.elements;
        var arrayIndex;
        if (typeof elements === "undefined") {
            elements = clippedElements.slice(0);
        } else {
            elements = _prepClip(elements);
        }
        for (var i = elements.length; i--;) {
            if (_hasOwn.call(elements, i) && elements[i] && elements[i].nodeType === 1) {
                arrayIndex = 0;
                while ((arrayIndex = clippedElements.indexOf(elements[i], arrayIndex)) !== -1) {
                    clippedElements.splice(arrayIndex, 1);
                }
                var clientIds = _elementMeta[elements[i].zcClippingId];
                if (clientIds) {
                    arrayIndex = 0;
                    while ((arrayIndex = clientIds.indexOf(this.id, arrayIndex)) !== -1) {
                        clientIds.splice(arrayIndex, 1);
                    }
                    if (clientIds.length === 0) {
                        if (_globalConfig.autoActivate === true) {
                            _removeMouseHandlers(elements[i]);
                        }
                        delete elements[i].zcClippingId;
                    }
                }
            }
        }
        return this;
    };
    /**
     * The underlying implementation of `ZeroClipboard.Client.prototype.elements`.
     * @private
     */
    var _clientElements = function _clientElements() {
        var meta = _clientMeta[this.id];
        return meta && meta.elements ? meta.elements.slice(0) : [];
    };
    /**
     * The underlying implementation of `ZeroClipboard.Client.prototype.destroy`.
     * @private
     */
    var _clientDestroy = function _clientDestroy() {
        if (!_clientMeta[this.id]) {
            return;
        }
        this.unclip();
        this.off();
        delete _clientMeta[this.id];
    };
    /**
     * Inspect an Event to see if the Client (`this`) should honor it for emission.
     * @private
     */
    var _clientShouldEmit = function _clientShouldEmit(event) {
        if (!(event && event.type)) {
            return false;
        }
        if (event.client && event.client !== this) {
            return false;
        }
        var meta = _clientMeta[this.id];
        var clippedEls = meta && meta.elements;
        var hasClippedEls = !!clippedEls && clippedEls.length > 0;
        var goodTarget = !event.target || hasClippedEls && clippedEls.indexOf(event.target) !== -1;
        var goodRelTarget = event.relatedTarget && hasClippedEls && clippedEls.indexOf(event.relatedTarget) !== -1;
        var goodClient = event.client && event.client === this;
        if (!meta || !(goodTarget || goodRelTarget || goodClient)) {
            return false;
        }
        return true;
    };
    /**
     * Handle the actual dispatching of events to a client instance.
     *
     * @returns `undefined`
     * @private
     */
    var _clientDispatchCallbacks = function _clientDispatchCallbacks(event) {
        var meta = _clientMeta[this.id];
        if (!((typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event && event.type && meta)) {
            return;
        }
        var async = _shouldPerformAsync(event);
        var wildcardTypeHandlers = meta && meta.handlers["*"] || [];
        var specificTypeHandlers = meta && meta.handlers[event.type] || [];
        var handlers = wildcardTypeHandlers.concat(specificTypeHandlers);
        if (handlers && handlers.length) {
            var i,
                len,
                func,
                context,
                eventCopy,
                originalContext = this;
            for (i = 0, len = handlers.length; i < len; i++) {
                func = handlers[i];
                context = originalContext;
                if (typeof func === "string" && typeof _window[func] === "function") {
                    func = _window[func];
                }
                if ((typeof func === "undefined" ? "undefined" : _typeof(func)) === "object" && func && typeof func.handleEvent === "function") {
                    context = func;
                    func = func.handleEvent;
                }
                if (typeof func === "function") {
                    eventCopy = _extend({}, event);
                    _dispatchCallback(func, context, [eventCopy], async);
                }
            }
        }
    };
    /**
     * Prepares the elements for clipping/unclipping.
     *
     * @returns An Array of elements.
     * @private
     */
    var _prepClip = function _prepClip(elements) {
        if (typeof elements === "string") {
            elements = [];
        }
        return typeof elements.length !== "number" ? [elements] : elements;
    };
    /**
     * Add a `mouseover` handler function for a clipped element.
     *
     * @returns `undefined`
     * @private
     */
    var _addMouseHandlers = function _addMouseHandlers(element) {
        if (!(element && element.nodeType === 1)) {
            return;
        }
        var _suppressMouseEvents = function _suppressMouseEvents(event) {
            if (!(event || (event = _window.event))) {
                return;
            }
            if (event._source !== "js") {
                event.stopImmediatePropagation();
                event.preventDefault();
            }
            delete event._source;
        };
        var _elementMouseOver = function _elementMouseOver(event) {
            if (!(event || (event = _window.event))) {
                return;
            }
            _suppressMouseEvents(event);
            ZeroClipboard.focus(element);
        };
        element.addEventListener("mouseover", _elementMouseOver, false);
        element.addEventListener("mouseout", _suppressMouseEvents, false);
        element.addEventListener("mouseenter", _suppressMouseEvents, false);
        element.addEventListener("mouseleave", _suppressMouseEvents, false);
        element.addEventListener("mousemove", _suppressMouseEvents, false);
        _mouseHandlers[element.zcClippingId] = {
            mouseover: _elementMouseOver,
            mouseout: _suppressMouseEvents,
            mouseenter: _suppressMouseEvents,
            mouseleave: _suppressMouseEvents,
            mousemove: _suppressMouseEvents
        };
    };
    /**
     * Remove a `mouseover` handler function for a clipped element.
     *
     * @returns `undefined`
     * @private
     */
    var _removeMouseHandlers = function _removeMouseHandlers(element) {
        if (!(element && element.nodeType === 1)) {
            return;
        }
        var mouseHandlers = _mouseHandlers[element.zcClippingId];
        if (!((typeof mouseHandlers === "undefined" ? "undefined" : _typeof(mouseHandlers)) === "object" && mouseHandlers)) {
            return;
        }
        var key,
            val,
            mouseEvents = ["move", "leave", "enter", "out", "over"];
        for (var i = 0, len = mouseEvents.length; i < len; i++) {
            key = "mouse" + mouseEvents[i];
            val = mouseHandlers[key];
            if (typeof val === "function") {
                element.removeEventListener(key, val, false);
            }
        }
        delete _mouseHandlers[element.zcClippingId];
    };
    /**
     * Creates a new ZeroClipboard client instance.
     * Optionally, auto-`clip` an element or collection of elements.
     *
     * @constructor
     */
    ZeroClipboard._createClient = function () {
        _clientConstructor.apply(this, _args(arguments));
    };
    /**
     * Register an event listener to the client.
     *
     * @returns `this`
     */
    ZeroClipboard.prototype.on = function () {
        return _clientOn.apply(this, _args(arguments));
    };
    /**
     * Unregister an event handler from the client.
     * If no `listener` function/object is provided, it will unregister all handlers for the provided `eventType`.
     * If no `eventType` is provided, it will unregister all handlers for every event type.
     *
     * @returns `this`
     */
    ZeroClipboard.prototype.off = function () {
        return _clientOff.apply(this, _args(arguments));
    };
    /**
     * Retrieve event listeners for an `eventType` from the client.
     * If no `eventType` is provided, it will retrieve all listeners for every event type.
     *
     * @returns array of listeners for the `eventType`; if no `eventType`, then a map/hash object of listeners for all event types; or `null`
     */
    ZeroClipboard.prototype.handlers = function () {
        return _clientListeners.apply(this, _args(arguments));
    };
    /**
     * Event emission receiver from the Flash object for this client's registered JavaScript event listeners.
     *
     * @returns For the "copy" event, returns the Flash-friendly "clipData" object; otherwise `undefined`.
     */
    ZeroClipboard.prototype.emit = function () {
        return _clientEmit.apply(this, _args(arguments));
    };
    /**
     * Register clipboard actions for new element(s) to the client.
     *
     * @returns `this`
     */
    ZeroClipboard.prototype.clip = function () {
        return _clientClip.apply(this, _args(arguments));
    };
    /**
     * Unregister the clipboard actions of previously registered element(s) on the page.
     * If no elements are provided, ALL registered elements will be unregistered.
     *
     * @returns `this`
     */
    ZeroClipboard.prototype.unclip = function () {
        return _clientUnclip.apply(this, _args(arguments));
    };
    /**
     * Get all of the elements to which this client is clipped.
     *
     * @returns array of clipped elements
     */
    ZeroClipboard.prototype.elements = function () {
        return _clientElements.apply(this, _args(arguments));
    };
    /**
     * Self-destruct and clean up everything for a single client.
     * This will NOT destroy the embedded Flash object.
     *
     * @returns `undefined`
     */
    ZeroClipboard.prototype.destroy = function () {
        return _clientDestroy.apply(this, _args(arguments));
    };
    /**
     * Stores the pending plain text to inject into the clipboard.
     *
     * @returns `this`
     */
    ZeroClipboard.prototype.setText = function (text) {
        if (!_clientMeta[this.id]) {
            throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        }
        ZeroClipboard.setData("text/plain", text);
        return this;
    };
    /**
     * Stores the pending HTML text to inject into the clipboard.
     *
     * @returns `this`
     */
    ZeroClipboard.prototype.setHtml = function (html) {
        if (!_clientMeta[this.id]) {
            throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        }
        ZeroClipboard.setData("text/html", html);
        return this;
    };
    /**
     * Stores the pending rich text (RTF) to inject into the clipboard.
     *
     * @returns `this`
     */
    ZeroClipboard.prototype.setRichText = function (richText) {
        if (!_clientMeta[this.id]) {
            throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        }
        ZeroClipboard.setData("application/rtf", richText);
        return this;
    };
    /**
     * Stores the pending data to inject into the clipboard.
     *
     * @returns `this`
     */
    ZeroClipboard.prototype.setData = function () {
        if (!_clientMeta[this.id]) {
            throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        }
        ZeroClipboard.setData.apply(this, _args(arguments));
        return this;
    };
    /**
     * Clears the pending data to inject into the clipboard.
     * If no `format` is provided, all pending data formats will be cleared.
     *
     * @returns `this`
     */
    ZeroClipboard.prototype.clearData = function () {
        if (!_clientMeta[this.id]) {
            throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");
        }
        ZeroClipboard.clearData.apply(this, _args(arguments));
        return this;
    };
    /**
     * Gets a copy of the pending data to inject into the clipboard.
     * If no `format` is provided, a copy of ALL pending data formats will be returned.
     *
     * @returns `String` or `Object`
     */
    ZeroClipboard.prototype.getData = function () {
        if (!_clientMeta[this.id]) {
            throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");
        }
        return ZeroClipboard.getData.apply(this, _args(arguments));
    };
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return ZeroClipboard;
        }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module && _typeof(module.exports) === "object" && module.exports) {
        module.exports = ZeroClipboard;
    } else {
        window.ZeroClipboard = ZeroClipboard;
    }
})(function () {
    return this || window;
}());

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./public/plugin/editor/marked/0.3.2/marked.js");
__webpack_require__("./public/plugin/editor/zeroclipboard/2.2.0/ZeroClipboard.js");
(function webpackMissingModule() { throw new Error("Cannot find module \"/Users/luo/WebRoot/ValetSite/blog/public/plugin/editor/js/heightlight.js\""); }());
__webpack_require__("./public/plugin/editor/js/modal.js");
__webpack_require__("./public/plugin/editor/js/MIDI.js");
__webpack_require__("./public/plugin/editor/js/fileupload.js");
module.exports = __webpack_require__("./public/plugin/editor/js/bacheditor.js");


/***/ })

/******/ });