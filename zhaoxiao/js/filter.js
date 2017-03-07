/**
 * Created by liuliqing on 16/3/23.
 */
define(function (require, exports, module) {
    require('vue');
     /*
    * dom 操作
    * **/
    var P = {
        filter:function(){
            Vue.filter('typeAge',function(index) {
                // 出生日期 处理
                return index;
            });
            Vue.filter('typeSelect',function(index,val){
                console.log(index=="")
                if(index=="" || typeof(index)=='undefined'){
                    // 直接用index是false用typeof()因为前面未定义所以undefinde如果前面定义是空可以让index==''
                    return val;
                }else {
                    return index;
                }
            });

            Vue.filter('typeSex',function(index) {
                var typeSex = {
                    "female":"女",
                    "male":"男"
                }
                return typeSex[index];
            });
            
        }
    }

    module.exports = {
        filter: P.filter
    }
})