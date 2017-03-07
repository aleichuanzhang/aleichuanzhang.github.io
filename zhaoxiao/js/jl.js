define(function(require, exports, module) {
    require('vue');
    var vuePub = require('filter');
    var hh = document.getElementById('jbxx');
    var P = {
        _init:function(){
            vuePub.filter();
            P.render();
            P.chuchai();
        },
        render:function(){
            $.ajax({
                url:'/html/data/data.json',
                dataType:"JSON",
                type:"get"
            }).done(function(cfg){
                P.view(cfg);
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
                        "isA":true,
                        "isB":false
                    },
                    "zhengshu":{
                        "isA":true,
                        "isB":false,
                        "isC":true
                    },
                    "int":{
                        "isA":true,
                        "isB":false,
                        "isC":true
                    },
                    "work":{
                        "isA":true,
                        "isB":false,
                        "isC":true
                    },
                    "lag":{
                        "isA":true,
                        "isB":false,
                        "isC":true
                    }
                },
                "expItem":{}
            }
            function mo(numbers,key){
                if(data.resume[numbers].length>0){
                var work = data.decide[key];
                work.isB = true;
                work.isC = false;
                }
            }
            mo('work_history','work');
            mo('language','lag');
            mo('certificate','zhengshu');
            function dlmo(numbers,key){
                if(data.resume[numbers].length<=0){
                var work = data.decide[key];
                work.isA = true;
                work.isB = false;
                work.isC = true;
                }
            }
            var vm = new Vue({
                el:'#jbxx',
                data:data,
                methods:{
                    addint:function(key){
                        P._ifWork(this,key,false,true,true);
                        this.expNum = -1;
                    },
                    saveint:function(key){
                        P._ifWork(this,key,true,true,false);
                    },
                    editint:function(key){
                        P._ifWork(this,key,false,true,true);
                        this.expNum = 1;
                    },
                    cancelint:function(key){
                        if(this.expNum==-1){
                            P._ifWork(this,key,true,false,true);
                        }else if(this.expNum==1){
                            P._ifWork(this,key,true,true,false);
                        }
                    },
                    editBase:function(event,sclass){
                        var item = event.currentTarget;
                        var parent = $(item).parents('.jbxx');
                        parent.find('.dak').show('slow');
                        parent.find('.'+sclass).hide('slow');
                        parent.find('.bianji1').hide('slow');
                    },
                    saveBase:function(event,sclass){
                        var item = event.currentTarget;
                        var parent = $(item).parents('.jbxx');
                        parent.find('.dak').hide('slow');
                        parent.find('.'+sclass).show('slow');
                        parent.find('.bianji1').show('slow');
                    },
                    addWork:function(num,key){
                        this.expNum = num;
                        P._ifWork(this,key,false,true,true);
                        this.expItem = {};
                    },
                    saveWork:function(item,key,Numbers){
                        P._ifWork(this,key,true,true,false);
                        var work = this.resume[Numbers];
                        if(this.expNum<0){
                            work.push(item);
                        }else {
                            this.resume[Numbers][this.expNum] = item;
                        }
                        $.ajax({
                            url:'/html/data/data.json',
                            dataType:"JSON",
                            type:"get",
                            data:{
                                'id':'126',
                                'abs':this.resume
                            }
                        })
                    },
                    editWork:function(obj,key,item,index){
                        var items = JSON.stringify(item)
                        seajs.use('cookie.js',function(cookie){
                            cookie('work-item', items);
                        })
                        this.expNum = index;
                         this.expItem = item;
                         console.log(this.resume)
                        P._ifWork(this,key,false,true,true);
                    },
                     delWork:function(index,key,Numbers){
                        this.resume[Numbers].splice(index,1);
                        P._ifWork(this,key,true,true,false);
                        dlmo('work_history','work');
                        dlmo('language','lag');
                        dlmo('certificate','zhengshu');
                    },
                    cancelWork:function(Numbers,key){
                        console.log(this.expNum)
                        if(this.expNum==-99){
                            P._ifWork(this,key,true,false,true);
                        }else if(this.expNum==-100) {
                            P._ifWork(this,key,true,true,false);
                        }else {
                            P._ifWork(this,key,true,true,false);
                            var _this = this.expNum;
                            var temp = this.resume[Numbers];
                            seajs.use('cookie.js',function(cookie){
                                var tpl = $.parseJSON(cookie('work-item'));
                                temp.splice(_this,1,tpl);
                            })

                        }
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
                if($(this).parents('label').find('input').prop('checked')==true){
                $(this).addClass("meigou");
                }
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