/* filter.js Date:2017-10-10 14:05:09 */
define("filter.js",["vue.js"],function(require,a,b){require("vue.js");var c={filter:function(){Vue.filter("typeAge",function(a){return a}),Vue.filter("typeSelect",function(a,b){return""==a||"undefined"==typeof a?b:a}),Vue.filter("typeSex",function(a){var b={female:"\u5973",male:"\u7537"};return b[a]})}};b.exports={filter:c.filter}});
