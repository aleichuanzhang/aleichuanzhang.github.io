/* filter.js Date:2017-03-07 21:09:50 */
define("js/filter.js",["vue.js"],function(require,a,b){require("vue.js");var c={filter:function(){Vue.filter("typeAge",function(a){return a}),Vue.filter("typeSelect",function(a,b){return console.log(""==a),""==a||"undefined"==typeof a?b:a}),Vue.filter("typeSex",function(a){var b={female:"\u5973",male:"\u7537"};return b[a]})}};b.exports={filter:c.filter}});
