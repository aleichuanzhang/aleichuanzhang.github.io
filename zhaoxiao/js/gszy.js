function tabStarts(id,id2,id3,type){
    var oBtn = document.getElementById(id).getElementsByTagName('a');
    var oJt = document.getElementById(id).getElementsByTagName('i');
    var oBox = document.getElementById(id2).getElementsByTagName('li');
    // aBtn[0].className = 'cur';
    // aBox[0].style.display = 'block';
    var nub = 0;
    for(var i=0,len=oBtn.length;i<len;i++){
        oBtn[i].index = i;
       oBtn[i].onclick = function() {
            var _this = this.index
            tab(_this);
             nub = _this;     
       };
    }
    function tab(_this){
        for(var j=0,lens=oBox.length;j<lens;j++){
            oBtn[j].className='';
            oBox[j].style.display = 'none';
        };
        oBtn[_this].className ='cur';
        oBox[_this].style.display = 'block';
       
    }
    timer = setInterval(function(){
        nub++
        if( nub>=6){
            nub=0;
        }
        tab(nub);
    },3000);
    oJt[1].onclick = function(){
        nub++
        if( nub>=6){
            nub=0;
        }
        tab(nub);
    }
    oJt[0].onclick = function(){
        nub--
        if( nub<=-1){
            nub=5;
        }
        tab(nub);
    }
    var obox = document.getElementById(id3);
    obox.onmouseover = function(){
        clearInterval(timer);
    }
    obox.onmouseout = function(){
        timer = setInterval(function(){
            nub++
            if( nub>=6){
                nub=0;
            }
            tab(nub);
        },3000);
    }
}
tabStarts('btn','box','da');
tabStarts('btn1','box1','da1');
function changeinr(id,id1,id2,id3){
    var obtn = document.getElementById(id).getElementsByTagName('a'); 
    var obtn1 = document.getElementById(id3).getElementsByTagName('em'); 
    var obtn2 = document.getElementById(id3).getElementsByTagName('a'); 
    var oInr = document.getElementById(id1); 
    var oInr1 = document.getElementById(id2); 
    // var oh2 = document.getElementById(id1).getElementsByTagName('h2'); 
    obtn[0].onclick = function(){
        oInr.style.display = 'none'; 
        oInr1.style.display = 'block'; 
    }

    obtn1[0].onclick = function(){
        oInr1.style.display = 'none'; 
        oInr.style.display = 'block'; 
    }
    function tihuan(){
       // var oInp = document.getElementById(id).getElementsByTagName(obj); 
       //  var oH2 = document.getElementById(id1).getElementsByTagName(obj1); 
        // var otext = document.getElementById('inr1').getElementsByTagName('textarea'); 
        obtn2[0].onclick = function(){
            oInr1.style.display = 'none'; 
            oInr.style.display = 'block'; 
            // oInp[0].value = 'wo知道'
            function huan(id,obj,id1,obj1,n){
            var oInp = document.getElementById(id).getElementsByTagName(obj); 
            var oH2 = document.getElementById(id1).getElementsByTagName(obj1); 
            oH2[0].innerHTML = '<a href="#">'+oInp[n].value +'</a>';
        }
        huan('inr2','input','inr1','h2','0');
        huan('inr2','input','inr1','p','1');
        huan('inr2','input','inr1','span','2');
        huan('inr2','textarea','jj','p','0');
        } 
    }
    tihuan();
    function huanNode(){
        var oda = document.getElementById('bianji').getElementsByTagName('input');
        var obox = oda[0].parentNode;
        function prev(obj){
            if(!obj)return null;
            return obj.previousElementSibling || obj.previousSibling;
        };
        function next(obj){
            if(!obj)return null;
            return obj.nextElementSibling || obj.nextSibling;
        };
        var oSpan = prev(obox);
        var oSp = next(obox);
        // var ospan = oSpan.getElementsByTagName('span');
        function addFn(val){
            var span = document.createElement('span');
            span.innerHTML = '<var>'+val+'</var>';
            var ss = oSpan.getElementsByTagName('span'); 
            console.log(ss.length)
            if(ss.length<=5){
                oSpan.appendChild(span);
            }else{
                alert('不能添加更多标签');
                return;
            }
            var i = document.createElement('i');
            span.appendChild(i);
            i.onclick = function(){
                oSpan.removeChild(i.parentNode);
            }
        }
        function huan1(){
           var ospan = oSp.getElementsByTagName('span');
            for(var i=0,len=ospan.length;i<len;i++){
                ospan[i].onclick = function(){
                    var val = this.innerHTML;
                    addFn(val);
                    // span.innerHTML = '<var>'+this.innerHTML+'</var>';
                    // oSpan.appendChild(span);
                    // var i = document.createElement('i');
                    // span.appendChild(i);
                    // i.onclick = function(){
                    //     oSpan.removeChild(i.parentNode);
                    // }
                }
            }
        }
        huan1();
        function huan(obj){
            // oda[1].onclick = function{
            //     var span = document.createElement('span');
            //     span.innerHTML = '<var>'+oda[0].value+'</var><i></i>';
            //     obj.appendChild(span);
            // }
            // 
            obj.onclick = function(){
                var odaValue = oda[0].value;
                addFn(odaValue);
            }
        }
        
        huan(oda[1]);
    }
    
    function guanbi(){
        var obj = document.getElementById('bianji').getElementsByTagName('i'); 
        for(var i=0,len=obj.length;i<len;i++){
            obj[i].onclick = function(){
                this.parentNode.parentNode.removeChild(this.parentNode);
            }
            console.log(obj[i].onclick)
        }
    }
    guanbi();

    huanNode();
}
changeinr('bj','dada1','dada2','bc');
