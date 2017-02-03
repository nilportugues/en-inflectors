"use strict";
var toPlural = [
    {
        regexp: /dix$/,
        replacement: 'dices'
    },
    {
        regexp: /ooch$/,
        replacement: '$1chs'
    },
    {
        regexp: /(m)an$/,
        replacement: '$1en'
    },
    {
        regexp: /(pe)rson$/,
        replacement: '$1ople'
    },
    {
        regexp: /(child)$/,
        replacement: '$1ren'
    },
    {
        regexp: /^(ox)$/,
        replacement: '$1en'
    },
    {
        regexp: /(ax|test)is$/,
        replacement: '$1es'
    },
    {
        regexp: /(op|ir|umn|am|ll|ct|oc|ng|le|di|ul|ab|rmin|or|in)us$/,
        replacement: '$1i'
    },
    {
        regexp: /(alias|status)$/,
        replacement: '$1es'
    },
    {
        regexp: /(bu)s$/,
        replacement: '$1ses'
    },
    {
        regexp: /(fal|tat|ch|rg|ott|mat|ped|et|can|er|uit|her|ad)o$/,
        replacement: '$1oes'
    },
    {
        regexp: /([aeiouy]ri|dat|cul|rat|nasi|edi|rand|ov)um$/,
        replacement: '$1a'
    },
    {
        regexp: /([aoeuiy]|er)ion$/,
        replacement: '$1ia'
    },
    {
        regexp: /(mat|erio|omen|hedr)on$/,
        replacement: '$1a'
    },
    {
        regexp: /(is|ps|hes|as|ys|os|ax)is$/,
        replacement: '$1es'
    },
    {
        regexp: /(?:([^f])fe|([lrf])f)$/,
        replacement: '$1$2ves'
    },
    {
        regexp: /(hive)$/,
        replacement: '$1s'
    },
    {
        regexp: /([^aeiouy]|qu)y$/,
        replacement: '$1ies'
    },
    {
        regexp: /([aeiouy]y)$/,
        replacement: '$1s'
    },
    {
        regexp: /(matr|vert|ind)(ix|ex)$/,
        replacement: '$1ices'
    },
    {
        regexp: /([m|l])ouse$/,
        replacement: '$1ice'
    },
    {
        regexp: /(alg|lumn|tenn|arv|ebul|pup|rteb|vit)a$/,
        replacement: '$1ae'
    },
    {
        regexp: /(uz|qui|ut)(z)$/,
        replacement: '$1$2zes'
    },
    {
        regexp: /(opa|alt)(z)$/,
        replacement: '$1zes'
    },
    {
        regexp: /^(f|t|g)oo([thse]{1,2})$/,
        replacement: '$1ee$2'
    },
    {
        regexp: /([^aeiouy])eau$/,
        replacement: '$1eaux'
    },
    {
        regexp: /([aeiouy])f$/,
        replacement: '$1ves'
    },
    {
        regexp: /(x|ch|ss|sh|s)$/,
        replacement: '$1es'
    },
    {
        regexp: /o$/,
        replacement: 'oes'
    },
    {
        regexp: /$/,
        replacement: 's'
    },
];
exports.toPlural = toPlural;
var toSingular = [
    {
        regexp: /([^aeiouy]|qu)ies$/,
        replacement: '$1y'
    },
    {
        regexp: /(falo|tato|cho|rgo|otto|mato|pedo|eto|cano|ero|uito|hero)es$/,
        replacement: '$1'
    },
    {
        regexp: /(lys|xis|bas|ris|ips|thes|uros|oas|ys|ops)es$/,
        replacement: '$1is'
    },
    {
        regexp: /(z)zes$/,
        replacement: '$1'
    },
    {
        regexp: /(alg|lumn|tenn|arv|ebul|pup|rteb|vit)ae$/,
        replacement: '$1a'
    },
    {
        regexp: /(cteri|at|ul|at|asi|di|nd|ov|ri)a$/,
        replacement: '$1um'
    },
    {
        regexp: /(vert|ind)ices$/,
        replacement: '$1ex'
    },
    {
        regexp: /(()(a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he|(p)ha)ses/,
        replacement: '$1$2sis'
    },
    {
        regexp: /(hive)s$/,
        replacement: '$1'
    },
    {
        regexp: /(tive)s$/,
        replacement: '$1'
    },
    {
        regexp: /(curve)s$/,
        replacement: '$1'
    },
    {
        regexp: /([aeiou]y)s$/,
        replacement: '$1'
    },
    {
        regexp: /([m|l])ice$/,
        replacement: '$1ouse'
    },
    {
        regexp: /(m)en$/,
        replacement: '$1an'
    },
    {
        regexp: /(s)eries$/,
        replacement: '$1eries'
    },
    {
        regexp: /(m)ovies$/,
        replacement: '$1ovie'
    },
    {
        regexp: /(bus)es$/,
        replacement: '$1'
    },
    {
        regexp: /(shoe)s$/,
        replacement: '$1'
    },
    {
        regexp: /(o)es$/,
        replacement: '$1'
    },
    {
        regexp: /^(cris|ax|test)es$/,
        replacement: '$1is'
    },
    {
        regexp: /(octop|vir)i$/,
        replacement: '$1us'
    },
    {
        regexp: /(alias|status)es$/,
        replacement: '$1'
    },
    {
        regexp: /^(ox)en$/,
        replacement: '$1'
    },
    {
        regexp: /(matr)ices$/,
        replacement: '$1ix'
    },
    {
        regexp: /([a-z]{1})ee([a-z]{1,2})$/,
        replacement: '$1oo$2'
    },
    {
        regexp: /([^aeiouy][aeiouy][^aeiouy]{1,2}e*)i|i$/,
        replacement: '$1us'
    },
    {
        regexp: /([^aeiouy])eaux$/g,
        replacement: '$1eau'
    },
    {
        regexp: /([aeiouy]us)es$/,
        replacement: '$1e'
    },
    {
        regexp: /([^l][oa]s)es$/,
        replacement: '$1is'
    },
    {
        regexp: /([aeiouy]{2})ves$/,
        replacement: '$1f'
    },
    {
        regexp: /([aeiouy])ves$/,
        replacement: '$1fe'
    },
    {
        regexp: /(h\w{2})ves$/,
        replacement: '$1f'
    },
    {
        regexp: /(el|car|cal|war)ves$/,
        replacement: '$1f'
    },
    {
        regexp: /([xsz])es$/,
        replacement: '$1'
    },
    {
        regexp: /(x|ch|sh|ss)es$/,
        replacement: '$1'
    },
    {
        regexp: /s$/,
        replacement: ''
    }
];
exports.toSingular = toSingular;
