/* jl.js Date:2017-10-10 14:05:09 */
define("jl.js",["vue.js","filter.js"],function(require,a,b){require("vue.js");var c=require("filter.js");document.getElementById("jbxx");var e={_init:function(){c.filter(),e.chuchai(),localStorage.getItem("resumeData")?(e.localStorage(),setTimeout(function(){$(".father").hide(),$(".donghua").hide()},1e3)):e.render(),e.tianjia()},render:function(){$.ajax({url:"/work/html/data/data.json",dataType:"JSON",type:"get"}).done(function(a){console.log(a),setTimeout(function(){$(".father").hide(),$(".donghua").hide()},1e3),e.view(a),e.local(a)})},localStorage:function(){var a=localStorage.getItem("resumeData");var b=decodeURIComponent(a);var c=$.parseJSON(b);e.view(c)},local:function(a){var b=JSON.stringify(a);localStorage.setItem("resumeData",encodeURIComponent(b))},tianjia:function(){var a=/^1[3|4|5|7|8]{1}[0-9]{9}$/;var b=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;var c=/^[\u4e00-\u9fa5]{2,4}$/;var d=/^.{0,140}$/;var e=/^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/;$("#test").blur(function(){var b=$(this).val();a.test(b)?$(this).removeClass("error"):(alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7535\u8bdd\u53f7\u7801"),$(this).addClass("error"))}),$("#test1").blur(function(){var a=$(this).val();b.test(a)?$(this).removeClass("error"):(alert("\u8bf7\u8f93\u5165\u6b63\u786e\u90ae\u7bb1"),$(this).addClass("error"))}),$("#test2").blur(function(){var a=$(this).val();c.test(a)?$(this).removeClass("error"):(alert("\u53ea\u80fd\u8f93\u51652-4\u4e2a\u6c49\u5b57"),$(this).addClass("error"))}),$("#test3").blur(function(){var a=$(this).val();d.test(a)?$(this).removeClass("error"):(alert("\u53ea\u80fd\u8f93\u5165140\u4e2a\u5b57"),$(this).addClass("error"))}),$("#test4").blur(function(){var a=$(this).val();e.test(a)?$(this).removeClass("error"):(alert("\u8bf7\u8f93\u5165\u6b63\u786eIP\u5730\u5740"),$(this).addClass("error"))})},_ifWork:function(a,b,c,d,e){var f=a.decide[b];f.isA=c,f.isB=d,f.isC=e},select:function(){},view:function(a){var b={resume:a,decide:{base:{isA:!1,isB:!0}},expItem:{}};new Vue({el:"#jbxx",data:b,methods:{editBase:function(a,b){var c=a.currentTarget;var d=$(c).parents(".jbxx");d.find(".dak").show(),d.find("."+b).hide(),d.find(".bianji1").hide()},saveBase:function(a,b){var c=a.currentTarget;var d=$(c).parents(".jbxx");d.find(".dak").hide(),d.find("."+b).show(),d.find(".bianji1").show(),e.local(this.resume)},cancelBase:function(a,b){var c=a.currentTarget;var d=$(c).parents(".jbxx");d.find(".dak").hide(),d.find("."+b).show(),d.find(".bianji1").show()},upload:function(a){a.currentTarget;console.log(a.currentTarget)}}})},chuchai:function(){$(".chuchai").click(function(){$(this).toggleClass("meigou")}),$.each($(".chuchai"),function(){0==$(this).parents("label").find("input").prop("checked")&&$(this).addClass("meigou")}),$("#gou").click(function(){$(this).toggleClass("gou")}),$(".guanli").click(function(){$(this).toggleClass("guanli1"),$(this).hasClass("guanli1")?$(this).next("textarea").hide("slow"):$(this).next("textarea").show("slow")})}};b.exports={init:e._init}});
