/* jl.js Date:2017-03-07 15:30:47 */
define("jl.js",["vue.js","filter.js"],function(require,a,b){require("vue.js");var c=require("filter.js");document.getElementById("jbxx");var e={_init:function(){c.filter(),e.render(),e.chuchai()},render:function(){$.ajax({url:"/zhaoxiao/build/html/data.json",dataType:"JSON",type:"get"}).done(function(a){e.view(a)})},_ifWork:function(a,b,c,d,e){var f=a.decide[b];f.isA=c,f.isB=d,f.isC=e},select:function(){},view:function(a){var b={resume:a,decide:{base:{isA:!0,isB:!1},zhengshu:{isA:!0,isB:!1,isC:!0},"int":{isA:!0,isB:!1,isC:!0},work:{isA:!0,isB:!1,isC:!0},lag:{isA:!0,isB:!1,isC:!0}},expItem:{}};function c(a,c){if(b.resume[a].length>0){var d=b.decide[c];d.isB=!0,d.isC=!1}}c("work_history","work"),c("language","lag"),c("certificate","zhengshu");function d(a,c){if(b.resume[a].length<=0){var d=b.decide[c];d.isA=!0,d.isB=!1,d.isC=!0}}new Vue({el:"#jbxx",data:b,methods:{addint:function(a){e._ifWork(this,a,!1,!0,!0),this.expNum=-1},saveint:function(a){e._ifWork(this,a,!0,!0,!1)},editint:function(a){e._ifWork(this,a,!1,!0,!0),this.expNum=1},cancelint:function(a){-1==this.expNum?e._ifWork(this,a,!0,!1,!0):1==this.expNum&&e._ifWork(this,a,!0,!0,!1)},editBase:function(a,b){var c=a.currentTarget;var d=$(c).parents(".jbxx");d.find(".dak").show("slow"),d.find("."+b).hide("slow"),d.find(".bianji1").hide("slow")},saveBase:function(a,b){var c=a.currentTarget;var d=$(c).parents(".jbxx");d.find(".dak").hide("slow"),d.find("."+b).show("slow"),d.find(".bianji1").show("slow")},addWork:function(a,b){this.expNum=a,e._ifWork(this,b,!1,!0,!0),this.expItem={}},saveWork:function(a,b,c){e._ifWork(this,b,!0,!0,!1);var d=this.resume[c];this.expNum<0?d.push(a):this.resume[c][this.expNum]=a,$.ajax({url:"/html/data/data.json",dataType:"JSON",type:"get",data:{id:"126",abs:this.resume}})},editWork:function(a,b,c,d){var f=JSON.stringify(c);seajs.use("cookie.js",function(a){a("work-item",f)}),this.expNum=d,this.expItem=c,console.log(this.resume),e._ifWork(this,b,!1,!0,!0)},delWork:function(a,b,c){this.resume[c].splice(a,1),e._ifWork(this,b,!0,!0,!1),d("work_history","work"),d("language","lag"),d("certificate","zhengshu")},cancelWork:function(a,b){if(console.log(this.expNum),-99==this.expNum)e._ifWork(this,b,!0,!1,!0);else if(-100==this.expNum)e._ifWork(this,b,!0,!0,!1);else{e._ifWork(this,b,!0,!0,!1);var c=this.expNum;var d=this.resume[a];seajs.use("cookie.js",function(a){var b=$.parseJSON(a("work-item"));d.splice(c,1,b)})}}}})},chuchai:function(){$(".chuchai").click(function(){$(this).toggleClass("meigou")}),$.each($(".chuchai"),function(){1==$(this).parents("label").find("input").prop("checked")&&$(this).addClass("meigou")}),$(".guanli").click(function(){$(this).toggleClass("guanli1"),$(this).hasClass("guanli1")?$(this).next("textarea").hide("slow"):$(this).next("textarea").show("slow")})}};b.exports={init:e._init}});
