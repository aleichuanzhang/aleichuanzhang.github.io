define(function(require, exports, module) {
    var hh = document.getElementById('jbxx');
     var rawData = {
            "yuyan":[],
            "language": [
                {
                    category:'请选择语言',
                    listen: '听力',
                    speak: '口语',
                    read: '阅读',
                    write: '写作',
                    nian:[
                                {
                                bq:'听力水平',
                                 lim:[
                                 {nub:'口语'}
                                 ,{nub:'写作'},{nub:'阅读'},{nub:'听力'}]
                                 
                             },
                                {
                                 bq:'口语水平',
                                 lim:[{nub:'初等'},{nub:'2'},{nub:'3'},{nub:'4'},{nub:'5'},{nub:'6'},{nub:'7'},{nub:'8'}]
                             },
                                {
                                 bq:'阅读水平',
                                 lim:[{nub:'初等'},{nub:'2011'},{nub:'3333'},{nub:'4444'},{nub:'5555'},{nub:'6666'},{nub:'76666'},{nub:'8888'}]
                             },
                                {
                                 bq:'写作水平',
                                 lim:[{nub:'初等'},{nub:'2'},{nub:'3'},{nub:'4'},{nub:'5'},{nub:'6'},{nub:'7'},{nub:'8'},{nub:'9'},{nub:'10'},{nub:'11'},{nub:'12'}]
                             }
                         ],
                        fen:[
                            {min:'英语'},
                            {min:'西班牙语'},
                            {min:'德语'},
                            {min:'汉语'},
                            {min:'韩语'}
                        
                        ]  
                }
            ]
          
        }
    var P = {
        _init:function(){
            P.quanxuan();
            P.cc();
            P.tab();
            P.baocun();
            P.tianjia();
            P.selsect();
            P.placeholder('input','请输入内容');
        },
        placeholder:function(obj,dText){
            $('#jbxx').on('focus',obj,function(){
                var value = $(this).attr('content')||dText;
                var html = $(this).html()||dText;
                // $(this).css('border','1px red solid')
                if($(this).val()==value){
                    $(this).val('')
                
                }else if($(this).val()==''){
                    console.log($(this))
                       $(this).css('color','#999') 
                       $(this).val(dText)
                    }else if($(this).html()==html){
                $(this).html('')
                }
                $(this).css('color','#333')
            })
            .on('blur',obj,function(){
                var value = $(this).attr('content');
                var html = $(this).html();
                if($(this).val()==''){
                    $(this).val(value)
                   $(this).css('color','#999') 
                   
                }else if($(this).html()==''){
                    $(this).html(html)
                   $(this).css('color','#999') 
                   
                }
                // $(this).css('border','1px blue solid')
            })
           
        },
        quanxuan:function(){
            // var quanxuan = $('.quanxuan');
            // console.log(quanxuan)
            var bTrue = true;
            $('#bianji').on('click','.btn',function(){
                if(bTrue){
                    $('#bianji i').addClass('cha');
                    // $(this).css({background:'red'})
                    console.log($('#bianji i'))
                    // alert(111)
                    bTrue =! true;
                }else{
                    $('#bianji i').removeClass('cha');
                    bTrue =true;
                }
                
            });
            // var btrue = true;
            $('#bianji').on('click','span',function(){
                // if(btrue){
                //     $(this).find('i').addClass('cha');
                //     // $(this).css({background:'red'})
                //     // alert(111)
                //     // btrue = false;
                //     console.log(1)
                // }else{
                //     $(this).find('i').removeClass('cha');
                //     // btrue =true;
                //     console.log(2)
                // }
                $(this).find('i').toggleClass('cha');
                
            });
           
        },
        cc:function(){
            $('#gup').on('click','.btn',function(){
                console.log($('input').prop('checked'))
                if($('input').prop('checked')==false){
                    $('input').prop({checked:'checked'});
                }else{
                    $('input').removeProp('checked');
                }
                
            });
        },
        selsect:function(){
            var ul = hh.getElementsByTagName('ul');
            $('#jbxx').on('click','p',function(event){
                for(var i=0,len=ul.length;i<len;i++){
                    $('#jbxx ul').eq(i).hide()
                    }
                    $(this).parents('.xiala').find('ul').show()
                    // console.log(($(this).next()))
                    $(this).stop();
                    event.stopPropagation();    
            })
            $('#jbxx').on('click','li',function(event){
                // console.log(($(this).next()))
                $(this).parents('.xiala').find('p').html($(this).html()) 
                    $(this).parents('ul').hide()
                    $(this).stop();
                    // console.log($(this).parents('.xiala').find('p').html())
                    event.stopPropagation(); 
            })
            document.onclick = function(){
                for(var i=0,len=ul.length;i<len;i++){
                    ul[i].style.display = 'none';
                }
            }
        },
        tab:function(){
            $('#ul1').on('click','li',function(){
                
                // $('#ul1 li').index = i;
                // var _this = $(this).index;
                // $('#ul1 li').eq(_this).css({
                //     'dispaly':'block',
                //     'className':''
                // })
                var _this = $(this).index();
            $(this).addClass('cur').siblings('li').removeClass('cur');
            
            // console.log($('#ol1 li').eq(_this))
            // $('#ol1 li').eq(_this).css({
            //     "display":"block",
            //     "border":"1px red solid"
            // }).siblings('li').css({
            //     "display":"none"
            // })
            $('#ol1 li').eq(_this).show('slow').siblings('li').hide('slow')
            // $('#ol1 li').eq(_this).addClass('cur');
            // console.log($('#ol1 li').eq(_this).siblings('li'))
            // $('#ol1 li').eq(_this).siblings('li').removeClass('cur');
            })
            var Nub = 0;
            $('#sj').on('click','a',function(){
                var _this = $(this).index();
                $('#box div').eq(_this).show('slow').siblings('div').hide('slow')
                $(this).addClass('cur').siblings('a').removeClass('cur');
                Nub = 0;
            })
                $('#ul2').on('click','li',function(){
                     var _this = $(this).index();
                     Nub = _this;
                     tabtimer(Nub);
                })
            
            function tabtimer(Nub){
                $('#ul2 li').eq(Nub).addClass('cur').siblings('li').removeClass('cur');
                    $('#ol2 li').eq(Nub).show('slow').siblings('li').hide('slow')
                    }
            var timer = null;
             
            timer = setInterval(function(){
                 Nub++;
                if(Nub>=6){
                    Nub=0;
                }
                tabtimer(Nub);
                // console.log(Nub)
            },3000)
        },
        baocun:function(){
            $('#jbxx').on('click','.baocun',function(){
                var workpr = rawData.yuyan;
                var wk = {
                    category:

                    [$('#jbxx').find('.xiala p').eq(0).html(),
                    $('#jbxx').find('input').eq(0).val()],
                    nian:[
                            {
                            bq:$('#jbxx').find('.xiala p').eq(1).html(),
                             lim:[
                             {nub:'口语'}
                             ,{nub:'写作'},{nub:'阅读'},{nub:'听力'}]
                             
                         },
                            {
                             bq:$('#jbxx').find('.xiala p').eq(2).html(),
                             lim:[{nub:'初等'},{nub:'2'},{nub:'3'},{nub:'4'},{nub:'5'},{nub:'6'},{nub:'7'},{nub:'8'}]
                         },
                            {
                             bq:$('#jbxx').find('.xiala p').eq(3).html(),
                             lim:[{nub:'初等'},{nub:'2011'},{nub:'3333'},{nub:'4444'},{nub:'5555'},{nub:'6666'},{nub:'76666'},{nub:'8888'}]
                         },
                            {
                             bq:$('#jbxx').find('.xiala p').eq(4).html(),
                             lim:[{nub:'初等'},{nub:'2'},{nub:'3'},{nub:'4'},{nub:'5'},{nub:'6'},{nub:'7'},{nub:'8'},{nub:'9'},{nub:'10'},{nub:'11'},{nub:'12'}]
                         }
                     ],
                    fen:[
                        {min:'英语'},
                        {min:'西班牙语'},
                        {min:'德语'},
                        {min:'汉语'},
                        {min:'韩语'}
                    ]  
                }
                 if($('#jbxx').find('.xiala p').eq(0).html()=='请选择语言'){
                        wk.category=wk.category[1];
                    }else {
                       wk.category=wk.category[0];
                    }
                if($('#jbxx').attr('b')=='bianji'){
                    workpr.splice($('#jbxx').attr('eq'),1,wk);
                }else if($('#jbxx').attr('b')=='tianjia'){
                    workpr.push(wk)
                }
                var source1   = $("#entry-wancheng").html();
                var template = Handlebars.compile(source1);
                var html    = template(workpr);
                $('#jbxx').html(html);
            })
        },
        tianjia:function(){
            var workpr = rawData.yuyan;
            var par = $('#jbxx');
            $('#jbxx').on('click','.tianjia',function(){
                $(this).parents('.jbxx').data('t','moren')
                $('#jbxx').attr('b','tianjia')
                console.log($(this).parents('.jbxx').data('t'))
                var source1   = $("#entry-template").html();
                var template = Handlebars.compile(source1);
                var html    = template(rawData.language[0]);
                $('#jbxx').html(html);
            })
            $('#jbxx').on('click','.tianjia1',function(){
                $(this).parents('.jbxx').data('t','wancheng')
                $('#jbxx').attr('b','tianjia')
                 var source1   = $("#entry-template").html();
                var template = Handlebars.compile(source1);
                var html    = template(rawData.language[0]);
                $('#jbxx').html(html);
                // $(this).parents('#jbxx').attr('t','wancheng')
            })
            $('#jbxx').on('click','.shanchu',function(){
                 var i = $(this).parents('p').index()
                 workpr.splice(i,1);
                 console.log(rawData.yuyan)
                 $(this).parents('p').remove()
                 if(workpr.length<=0){
                    alert('已经没有选项了')
                    P.view('#entry-moren',null)
                }
            })
            $('#jbxx').on('click','.quxiao',function(){
                if($(this).parents('#jbxx').data('t')=='moren'){
                 var source1   = $("#entry-moren").html();
                 $('#jbxx').html(source1);
                }else if($(this).parents('#jbxx').data('t')=='wancheng'){
                    var source1   = $("#entry-wancheng").html();
                    var template = Handlebars.compile(source1);
                    var html    = template(rawData.yuyan);
                    $('#jbxx').html(html);
                }
            })
            $('#jbxx').on('click','.bianji2',function(){
                $(this).parents('.jbxx').data('t','wancheng')
                 var i = $(this).parents('p').index()
                $('#jbxx').attr({'b':'bianji','eq':i})
                 var source1   = $("#entry-template").html();
                var template = Handlebars.compile(source1);
                console.log(i)
                var html    = template(rawData.yuyan[i]);
                $('#jbxx').html(html);
             })    
        },
        view:function(id,context){
            var source1   = $(id).html();
            var template = Handlebars.compile(source1);
            var html    = template(context);
            $('#jbxx').html(html);
        }
    }
    module.exports = {
        init:P._init
    }

});