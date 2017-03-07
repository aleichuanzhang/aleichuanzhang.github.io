define(function(require, exports, module) {
    var P = {
        _init:function(){
            document.write('天南地北')
        },
        alertBox:function(){
        },
        cc:function(){
            
        },
        haha:function(){
            document.getElementsByTagName('body')[0].style.background = "red";
        }

    }
    module.exports = {
        init:P._init
    }

})