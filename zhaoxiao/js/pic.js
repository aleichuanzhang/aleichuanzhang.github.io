define(function(require, exports, module) {
 
    var P = {
        _init:function(){
          
        },
        alertBox:function(){
            
        },
        addEvent:function(obj,type,fn){
             if(obj.addEventListener){
                  obj.addEventListener(type,fn,false);
             }else {
                 obj.attachEvent('on'+type,fn);
             }
        },
        first:function(oParent){
        if(!oParent)return null;
        return oParent.firstElementChild || oParent.firstChild;
        },
        last:function(oParent){
        if(!oParent)return null;
        return oParent.lastElementChild || oParent.lastChild;
        }
    }

    // 或者通过 module.exports 提供整个接口
    module.exports = {
        init:P.addEvent
        // init:P.first
        // init:P.last
    }

});