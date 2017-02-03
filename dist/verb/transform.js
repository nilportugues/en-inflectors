"use strict";
var list = require("./solve_lookup");
var regex = require("./solve_regex");
var trySimilar = require("./try_similar");
var try_present_1 = require("./try_present");
var index = ["VBP", "VBD", "VBN", "VBZ", "VBG"];
var conjugate = function (input, to) {
    if (to === void 0) { to = "VBP"; }
    var lookup = list.lookup(input);
    var toIndex = index.indexOf(to);
    if (lookup[toIndex])
        return lookup[toIndex];
    else if (list.VBP[input])
        return regex.solve(input, to);
    var stripped = trySimilar.strip(input);
    if (stripped) {
        var lookupStripped = list.lookup(stripped)[toIndex];
        if (lookupStripped)
            return trySimilar.rebuild(input, stripped, lookupStripped);
        else if (list.VBP[stripped])
            return trySimilar.rebuild(input, stripped, regex.solve(input, to));
    }
    var stem = try_present_1["default"](input);
    if (stem)
        return list.lookup(stem)[toIndex] || regex.solve(stem, to);
    return regex.solve(input, to);
};
exports.conjugate = conjugate;
var toPresent = function (input) { return conjugate(input, "VBP"); };
exports.toPresent = toPresent;
var toPast = function (input) { return conjugate(input, "VBD"); };
exports.toPast = toPast;
var toPastParticiple = function (input) { return conjugate(input, "VBN"); };
exports.toPastParticiple = toPastParticiple;
var toPresentS = function (input) { return conjugate(input, "VBZ"); };
exports.toPresentS = toPresentS;
var toGerund = function (input) { return conjugate(input, "VBG"); };
exports.toGerund = toGerund;
