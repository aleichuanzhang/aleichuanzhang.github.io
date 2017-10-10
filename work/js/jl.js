define(function(require, exports, module) {
    require('vue');
    var vuePub = require('filter');
    // var draw = require('draw');
    var hh = document.getElementById('jbxx');
    var P = {
        _init:function(){
            vuePub.filter();
            // draw.draw();
            P.chuchai();
            if(!localStorage.getItem("resumeData")){
                P.render();
            }else{
               P.localStorage();
               // alert('localstorage')
               setTimeout(function(){
                    $(".father").hide();
                    $(".donghua").hide();
                },1000)
            }
            P.tianjia();
        },
        render:function(){
            $.ajax({
                url:'/html/data/data.json',
                dataType:"JSON",
                type:"get"
            }).done(function(cfg){
                console.log(cfg);
                setTimeout(function(){
                    $(".father").hide();
                    $(".donghua").hide();
                },1000)
                P.view(cfg);
                P.local(cfg);
            })
        },
        // 本地存储
        localStorage:function(){
            var resumeData = localStorage.getItem("resumeData");
            var cfg = decodeURIComponent(resumeData);
            var jsonCfg = $.parseJSON(cfg);
            
            P.view(jsonCfg);
        },
        local:function(item){
            var str = JSON.stringify(item);
            localStorage.setItem("resumeData",encodeURIComponent(str))
            // $.ajax({
            //     url:'/html/data/data.json',
            //     dataType:"JSON",
            //     data:{
                        // "resume":item,
                        // "id":129
            //     },
            //     type:"get"
            // }).done(function(cfg){
            //     alert('提交成功')
            // })
        },
        tianjia:function(){
            var reg2 = /^1[3|4|5|7|8]{1}[0-9]{9}$/;
            var reg3 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            var reg4 = /^[\u4e00-\u9fa5]{2,4}$/;
            var reg5 = /^.{0,140}$/;
            var reg6 = /^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/;
            $('#test').blur(function(){
                var val = $(this).val()
                if(reg2.test(val)){
                    $(this).removeClass('error');
                }else {
                    alert('请输入正确电话号码')
                    $(this).addClass('error');
                }
            })
            $('#test1').blur(function(){
                var val = $(this).val()
                if(reg3.test(val)){
                    // $('#span1').html('')
                    $(this).removeClass('error');
                }else {
                    alert('请输入正确邮箱')
                    $(this).addClass('error');
                }
            })
            $('#test2').blur(function(){
                var val = $(this).val()
                if(reg4.test(val)){
                    $(this).removeClass('error');
                }else {
                    alert('只能输入2-4个汉字')
                    $(this).addClass('error');
                }
            })
            $('#test3').blur(function(){
                var val = $(this).val()
                if(reg5.test(val)){
                    $(this).removeClass('error');
                }else {
                    alert('只能输入140个字')
                    $(this).addClass('error');
                }
            })  
            $('#test4').blur(function(){
                var val = $(this).val()
                if(reg6.test(val)){
                    $(this).removeClass('error');
                }else {
                    alert('请输入正确IP地址')
                    $(this).addClass('error');
                }
            })
        },
        _ifWork:function(obj,key,bt1,bt2,bt3){
            var tags = obj.decide[key];
            tags.isA = bt1;
            tags.isB = bt2;
            tags.isC = bt3;
        },
        select:function(){
        },
        view:function(cfg){
            var data = {
                "resume":cfg,
                "decide":{
                    "base":{
                        "isA":false,
                        "isB":true
                    }
                },
                "expItem":{}
            }
            var vm = new Vue({
                el:'#jbxx',
                data:data,
                methods:{
                    editBase:function(event,sclass){
                        var item = event.currentTarget;
                        var parent = $(item).parents('.jbxx');
                        parent.find('.dak').show();
                        parent.find('.'+sclass).hide();
                        parent.find('.bianji1').hide();
                    },
                    // 保存
                    saveBase:function(event,sclass){
                        var item = event.currentTarget;
                        var parent = $(item).parents('.jbxx');
                        parent.find('.dak').hide();
                        parent.find('.'+sclass).show();
                        parent.find('.bianji1').show();
                        P.local(this.resume);
                    },
                    // 取消
                    cancelBase:function(event,sclass){
                        var item = event.currentTarget;
                        var parent = $(item).parents('.jbxx');
                        parent.find('.dak').hide();
                        parent.find('.'+sclass).show();
                        parent.find('.bianji1').show();
                    },
                    upload:function(event){
                        var obj = event.currentTarget;
                        console.log(event.currentTarget)
                        // seajs.use('upload.js',function(app){
                        //     app.upload(obj)
                        // })
                    }  
                }
            })
        },
        chuchai:function(){
            $('.chuchai').click(function(){
                $(this).toggleClass("meigou");
            })
            $.each($('.chuchai'),function(index,val){
                // console.log($('.chuchai').eq(0))
                if($(this).parents('label').find('input').prop('checked')==false){
                $(this).addClass("meigou");
                }
            })
            $('#gou').click(function(){
                $(this).toggleClass("gou");
            })
            $('.guanli').click(function(){
                $(this).toggleClass("guanli1");
                if($(this).hasClass('guanli1')){
                    $(this).next('textarea').hide('slow')
                }else{
                    $(this).next('textarea').show('slow')
                }
            })

            
        }

    }
    module.exports = {
        init:P._init
    }

});