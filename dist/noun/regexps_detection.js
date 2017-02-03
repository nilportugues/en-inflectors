"use strict";
var singularPatterns = [
    /[bcdfgjkmruopquvxzw]$/,
    /ss$/,
    /sis$/,
    /thos$/,
    /pus$/,
    /tis$/,
    /^[a-z]{1}s$/,
    /us$/,
    /(n|r)is$/,
    /tmas$/,
    /[abefgjklpqywxyz]a$/,
    /[^i]ca$/,
    /[^n]da$/,
    /[^p]ha$/,
    /([^dvtlar])ia$/,
    /([^i]|(cteri|at|ul|at|asi|di|nd|ov|ri))a$/,
    /(z|h|g|b|r|l)eria$/,
    /[^ci]teria$/,
    /[^cb]ilia$/,
    /[^xi]lia$/,
    /[^e]ma$/,
    /[^aeu]na$/,
    /[^ciam][a-z]na$/,
    /[ifo]\w{2}na$/,
    /[^aip]ta$/,
    /[^rmpe][a-z]ta$/,
    /[^gart][a-z][a-z]ta$/,
    /(a)e$/,
    /people$/,
    /[^t][^t][^o][^i][^a]e$/,
    /[^i][^t]h$/,
    /[uacgzheimnot][a-z]i$/,
    /[^atvliopcbnmgfds][a-z]*i$/,
    /[a-z][^ertiopasl][a-z]+[a-z]i$/,
    /[^e]l$/,
    /[^e]n$/,
];
exports.singularPatterns = singularPatterns;
var pluralPatterns = [
    /men$/,
    /sortia$/,
    /^media$/,
    /^cilia$/,
    /abilia$/,
    /trivia$/,
    /[^jtma](chi*|yn|ol|am|i|umn|os|an|ermin|omb|ul|eol|cle|on|un)i$/,
    /(um|pa|ro)ni$/,
    /(uo|io)si$/,
    /onchi$/,
    /(o|u|a)li$/,
    /(e|i)i$/,
    /ies$/,
    /ves$/,
    /es$/,
    /[aouiey]ys$/,
    /oos$/,
    /ios$/,
    /[tfg]ee[sth]{1,2}e*$/,
    /[^aouies][aoui]s$/,
    /[ea]s$/,
    /[^aouie]s$/,
];
exports.pluralPatterns = pluralPatterns;
