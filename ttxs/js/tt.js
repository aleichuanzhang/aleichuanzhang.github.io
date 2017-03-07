var obeij = document.getElementById('beij');
var ogdcs = document.getElementById('gdcs');
obeij.onmouseover = function(){
     ogdcs.style.display='block';
     obeij.style.borderRight='1px #e7e7e7 solid';
     obeij.style.borderLeft='1px #e7e7e7 solid';
     obeij.style.borderBottom='1px #fff solid';
     obeij.style.paddingLeft='4px';
}
ogdcs.onmouseout = function(){
    ogdcs.style.display='none';
    obeij.style.border='none';
    obeij.style.paddingLeft='5px';
}
var oqgms = document.getElementById('qgms');
var oqgmsBd = document.getElementById('qgmsBd');
// var oname = document.getElementById('name');
// var ocpzx = document.getElementById('cpzx');
// var ocpzxBd = document.getElementById('cpzxBd');
oqgms.onmouseover = function(){
     oqgmsBd.style.display='block';
     oqgms.style.borderRight='1px #e7e7e7 solid';
     oqgms.style.borderLeft='1px #e7e7e7 solid';
     oqgms.style.borderBottom='1px #fff solid';
     oqgms.style.paddingRight='10px';
     oqgms.style.paddingLeft='10px';   
}
oqgms.onmouseout = function(){
    oqgmsBd.style.display='none';
    oqgms.style.border='none';
    oqgms.style.paddingRight='11px';
    oqgms.style.paddingLeft='11px';   

}
// ocpzx.onmouseover = function(){
//     ocpzxBd.style.display="block";
// }
// ocpzx.onmouseout = function(){
//     ocpzxBd.style.display='none';
// }

var olunbo = document.getElementById('lunbo');
var oa = olunbo.getElementsByTagName('a');
var odiv = document.getElementById("div");
var ool = odiv.getElementsByTagName('ol');
var iNum = 0;
var timer = null;
var timer1 = null;
for(var i=0,len=oa.length;i<len;i++){
    oa[i].index=i;
    oa[i].onmouseover = function(){
        var _index = this.index;
        tab(_index);
}
function tab(_index){
    for(var j=0,lens=ool.length;j<lens;j++){
                oa[j].className='';
                ool[j].style.display = 'none';
            };
        oa[_index].className='cur';
        ool[_index].style.display='block';
        };
}
 function autoStart(){
         iNum++;
        if(iNum>=7){
            iNum = 0;
        }
        tab(iNum);
    }
timer = setInterval(function(){
        autoStart();
    },1000);
odiv.onmouseover = function(){
         clearInterval(timer);
    };
odiv.onmouseout = function(){
     timer = setInterval(function(){
        autoStart();  
    },1000);
};

var obox = document.getElementById("shishi").getElementsByTagName('li');
for(var i=0,len=obox.length;i<len;i++){
    obox[i].onmouseover = function(){
        var _this = this;
        tab1(_this);
    };
    // obox[i].onmouseout = function(){
    //     // obox[0].className = 'cur';
    //     // this.className = '';
    //     // var j=0;
    //     // setInterval(function(){
    //     //     j++;
    //     //     document.title = j;
    //     // },1000);
    //     // console.log(j)
    //     for(var i=0,len=obox.length;i<len;i++){
    //         obox[i].className = '';
    //     };
    //     this.className = 'cur';
    //     console.log(this);
    // }
}
var nub = 0;
function tab1(_this){
    for(var i=0,len=obox.length;i<len;i++){
            obox[i].className = '';
        };
        _this.className = 'cur';
        console.log(_this);
} 
// function autostart1(){
//      nub++;
//         if(nub>=5){
//             nub = 0;
//         }
//     tab1(nub);
// }
// timer1 = setInterval(function(){
//     autostart1();
// },2000);
// oshishi.onmouseover = function(){
//     clearInterval(timer1);
// }
