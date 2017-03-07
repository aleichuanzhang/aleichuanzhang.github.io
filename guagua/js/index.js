function lun(){
    var olunbo = document.getElementById('lunbo');
    var oa = olunbo.getElementsByTagName('a');
    var obtn = document.getElementById('btn');
    var obox = obtn.getElementsByTagName('a');
    var nub = 0;
    for(var i=0,len=obox.length;i<len;i++){
        obox[i].index = i;
        obox[i].onclick = function(){
            var _this = this.index;
            nub = _this;
            tab(_this);
        };
    }
    function tab(_this){
        for(var j=0,lens=oa.length;j<lens;j++){
                obox[j].className = '';
                oa[j].style.display = 'none';
            };
            obox[_this].className = 'cur';
            oa[_this].style.display = 'block';
    }
    var timer = null;
    var odada = document.getElementById('dada');
    function autoStart(){
        nub++;
        if(nub>=5){
            nub=0;
        }
        tab(nub);
        
    }
    timer = setInterval(function(){
        autoStart();
    },3000);
    odada.onmouseover = function(){
        clearInterval(timer);
    }
    odada.onmouseout = function(){
        timer = setInterval(function(){
            autoStart();
        },3000);
    }
}
lun();
function addLi(){
    var aBox = document.getElementById('tab-con').getElementsByTagName('div');
    var oUl = document.getElementById('tab-nav');
    var iHtml = '';
    for(var i=0,len=aBox.length;i<len;i++){
        // iHtml += '<li>第'+i+'块</li>';
        iHtml+='<li>第'+i+'块</li>';
    }
    oUl.innerHTML = iHtml;
    console.log(oUl.getElementsByTagName('li').length);
    oUl.style.border= '1px red solid';
}
addLi();
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
function sildFn(n){
     var oUl = document.getElementById('uls');
     var oLi = oUl.getElementsByTagName('li');
     oUl.style.border ='1px red solid';
     oUl.innerHTML+=oUl.innerHTML;
     oUl.style.width = oLi[0].offsetWidth*oLi.length+'px';
     var iSpeed = n;
     var t = null;
     oUl.onmouseover = function(){
          clearInterval(t);
     }
     oUl.onmouseout = function(){
          t = setInterval(sild,30)
     }

     function sild(){
        console.log(oUl.offsetWidth/2)
          if(parseInt(css(oUl,'left'))<-oUl.offsetWidth/2){
                console.log(1)
               oUl.style.left = '0px';
          }else if(parseInt(css(oUl,'left'))>0){
            console.log(2)
               oUl.style.left = -oUl.offsetWidth/2+'px';
          }
          oUl.style.left = parseInt(css(oUl,'left'))+iSpeed+'px';
     }
     t = setInterval(sild,30)
}
sildFn(3);
function lun1(id,id1,id2,n,y){
    var oa = document.getElementById(id).getElementsByTagName('ol');
    var obox = document.getElementById(id1).getElementsByTagName('li');
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
    function tab(_this){
        for(var j=0,lens=oa.length;j<lens;j++){
                obox[j].className = '';
                oa[j].style.display = 'none';
                oa[j].style.borderBottom = '1px #d4d4d4 solid';
            };
            obox[_this].className = 'cur';
            oa[_this].style.display = 'block';
            oa[_this].style.borderBottom = 'none';
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
    timer = setInterval(function(){
        autoStart();
    },y);
    odada.onmouseover = function(){
        clearInterval(timer);
    }
    odada.onmouseout = function(){
        timer = setInterval(function(){
            autoStart();
        },y);
    }
}
lun1('box1','btn1',"da",'10','3000');
lun1('box2','btn2','da1','10','2000');