"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
var _b;
var _myname;
var c = 1;
var baseUrl = 'http://localhost';
/**object */
var firstName = 'Ihor';
var account = {
    firstName: firstName,
    getName: function () {
        return this.firstName;
    }
};
/** spred  */
var person = __assign({}, account);
var dates = __spread([1, 2, 3]);
/**** */
var username = account.firstName;
var _c = __read(dates, 1), firstDate = _c[0];
try {
    /***for of */
    for (var dates_1 = __values(dates), dates_1_1 = dates_1.next(); !dates_1_1.done; dates_1_1 = dates_1.next()) {
        var date = dates_1_1.value;
        console.log(date);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (dates_1_1 && !dates_1_1.done && (_a = dates_1.return)) _a.call(dates_1);
    }
    finally { if (e_1) throw e_1.error; }
}
/*** */
var Person = /** @class */ (function () {
    function Person() {
        _myname.set(this, 'Ihor');
    }
    Object.defineProperty(Person.prototype, "myName", {
        get: function () {
            return __classPrivateFieldGet(this, _myname);
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
_myname = new WeakMap();
/*** */
var sum = function (a, b) { return a + b; };
/**template  */
function userMessage(_a, _b) {
    var _c = __read(_a, 2), star = _c[0], end = _c[1];
    var firstName = _b.firstName;
    return "" + star + firstName + end;
}
console.log(userMessage(__makeTemplateObject(["Good day ", " !!!"], ["Good day ", " !!!"]), person));
/** */
var user = {};
var x = (_b = user === null || user === void 0 ? void 0 : user.info) === null || _b === void 0 ? void 0 : _b.getAge();
/** */
var admin;
var p = admin !== null && admin !== void 0 ? admin : user;
var a = [1, 2].includes(1);
