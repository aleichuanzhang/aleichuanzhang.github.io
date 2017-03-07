function tabStarts(){
    var oBon = document.getElementById('lun');
    var oli = oBon.getElementsByTagName('li');
    var olunbo = document.getElementById('lunbo');
    var oa = olunbo.getElementsByTagName('a');
    for(var i=0,len=oa.length;i<len;i++){
        oa[i].index = i;
       oa[i].onclick = function() {
            var _this = this.index
            tab(_this);     
       };
    }
    function tab(_this){
        for(var j=0,lens=oli.length;j<lens;j++){
            oa[j].className='';
            oli[j].style.display = 'none';
        };
        oa[_this].className ='cur';
        oli[_this].style.display = 'block';
       
    }
    var nub=0;
    timer = setInterval(function(){
        nub++
        if( nub>=3){
            nub=0;
        }
        tab(nub);
    },1000);
    var obox = document.getElementById('box');
    obox.onmouseover = function(){
        clearInterval(timer);
    }
    obox.onmouseout = function(){
        timer = setInterval(function(){
            nub++
            if( nub>=3){
                nub=0;
            }
            tab(nub);
        },1000);
    }
}
tabStarts();
function tabStart(){
    var oboxs = document.getElementById('boxs');
    var oli = oboxs.getElementsByTagName('li');
    var obtn = document.getElementById('btn');
    var oa = obtn.getElementsByTagName('a');
    var nub=0;
    for(var i=0,len=oa.length;i<len;i++){
        oa[i].index = i;
       oa[i].onmouseover = function() {
            var _this = this.index;
            nub = _this;
            tab(_this);     
       };
    }
    function tab(_this){
        for(var j=0,lens=oli.length;j<lens;j++){
            oa[j].className='';
            oli[j].style.display = 'none';
        };
        oa[_this].className ='cur';
        oli[_this].style.display = 'block';
       
    }
    timer2 = setInterval(function(){
        nub++;
        if( nub>=6){
            nub=0;
        }
        tab(nub);
    },3000);
    var oda = document.getElementById('da');
    var odiv = document.getElementById('jiantou');
    var oaside = odiv.getElementsByTagName('aside');
    oda.onmouseover = function(){
        clearInterval(timer2);
        odiv.style.display = 'block';
    }
    oda.onmouseout = function(){
        odiv.style.display = 'none';
        timer2 = setInterval(function(){
            nub++;
            if( nub>=6){
                nub=0;
            }
            tab(nub);
        },3000);
    }

    oaside[0].onclick = function(){
        nub++;
        if( nub>=6){
            nub=0;
        }
        tab(nub);
    }
    oaside[1].onclick = function(){
        nub--;
        if( nub<=-1){
            nub=5;
        }
        tab(nub);
    }
    oaside[0].onmouseover = function(){
        oaside[0].style.background = 'black';
    }
    oaside[1].onmouseover = function(){
        oaside[1].style.background = 'black';
    }
    oaside[1].onmouseout = function(){
        oaside[1].style.background = '#999';
    }
    oaside[0].onmouseout = function(){
        oaside[0].style.background = '#999';
    }
    }    
tabStart();
function lun1(id,id1,id2,n,y){
    var oa = document.getElementById(id).getElementsByTagName('ol');
    var obox = document.getElementById(id1).getElementsByTagName('li');
    var odiv = document.getElementById('box2')
    obox[0].className = 'cur';
    var nub = 0;
    for(var i=0,len=obox.length;i<len;i++){
        obox[i].index = i;
        obox[i].onclick = function(){
            var _this = this.index;
            nub = _this;
            tab(_this);
        };
    }
    var iSpeed =parseInt(css(oa[0],'height'))
    // odiv.innerHTML+=odiv.innerHTML;
    function tab(_this){
        for(var j=0,lens=oa.length;j<lens;j++){
                obox[j].className = '';
                // oa[j].style.display = 'none';
                // obox[j].style.borderBottom = '1px #d4d4d4 solid';
            };
            obox[_this].className = 'cur';
            // oa[_this].style.display = 'block';
            // obox[_this].style.borderBottom = 'none';
            if(parseInt(css(odiv,'top'))==-2468){
                odiv.style.top = '12px';
            }
            console.log(parseInt(css(odiv,'top'))+'=='+(-parseInt(css(oa[0],'height'))*10));
            console.log()
            odiv.style.top = parseInt(css(odiv,'top'))-iSpeed+'px';
    }
    var timer = null;
    var odada = document.getElementById(id2);
    function autoStart(){
        nub++;
        if(nub>=n){
            nub=0;
        }
        tab(nub);
    }
    timer = setInterval(autoStart,y);
    odada.onmouseover = function(){
        clearInterval(timer);
    }
    odada.onmouseout = function(){
        timer = setInterval(autoStart,y);
    }
    function css(obj,attr,value){
         if(arguments.length===2){
              if(obj.currentStyle){
                   return obj.currenStyle[attr];
              }else {
                   return getComputedStyle(obj,false)[attr];
              }
         }else if(arguments.length===3){
              obj.style[attr]=value;
         }
    }
}
lun1('box2','btn2','da1','10','2000');
var date1 = new Date();
console.log(date1);
function jishi(id){
    function sLen(num){
        if(num<10){
            return '0' + num;
        }else {
            return '' + num;
        }
    }
    function timer(){
        var oImg = document.getElementById(id).getElementsByTagName('img');
        var oDate = new Date();
        //oDate.getHours()
        //oDate.getMinutes()
        //oDate.getSeconds()
        var str = sLen(oDate.getHours())+sLen(oDate.getMinutes())+sLen(oDate.getSeconds());
        // console.log(str)
        // console.log(str.charAt(3))
        for(var i=0;i<oImg.length;i++){
            oImg[i].src = 'images/'+str.charAt(i)+'.png';
        }
    }
    timer();
    setTimeout(function(){
        timer();
        setTimeout(arguments.callee,1000)
    },1000)
}
jishi('timer');
function jishi1(id){
    function sLen(num){
        if(num<10){
            return '0' + num;
        }else {
            return '' + num;
        }
    }
    function timer(){
        var oImg = document.getElementById(id).getElementsByTagName('img');
        var oDate = new Date();
        //oDate.getHours()
        //oDate.getMinutes()
        //oDate.getSeconds()
        var str = sLen(oDate.getHours())+sLen(oDate.getMinutes())+sLen(oDate.getSeconds());
        // console.log(str)
        // console.log(str.charAt(3))
        for(var i=0;i<oImg.length;i++){
            oImg[i].src = 'images/'+str.charAt(i)+'.png';
        }
    }
    timer();
    setInterval(timer,1000);
}
jishi1('timer1');
