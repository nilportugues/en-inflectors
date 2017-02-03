"use strict";
var regexp_rules_1 = require("./regexp_rules");
var list_irregulars_1 = require("./list_irregulars");
exports.comparative = function (input) {
    if (list_irregulars_1.irregulars[input])
        return list_irregulars_1.irregulars[input][0];
    for (var i = 0; i < regexp_rules_1["default"].length; i++) {
        if (!regexp_rules_1["default"][i].test(input))
            continue;
        else
            return regexp_rules_1["default"][i].comp(input);
    }
};
exports.superlative = function (input) {
    if (list_irregulars_1.irregulars[input])
        return list_irregulars_1.irregulars[input][1];
    for (var i = 0; i < regexp_rules_1["default"].length; i++) {
        if (!regexp_rules_1["default"][i].test(input))
            continue;
        else
            return regexp_rules_1["default"][i].supr(input);
    }
};
