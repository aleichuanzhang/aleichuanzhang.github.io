var ofgl = document.getElementById('bot').getElementsByTagName('article');
var obox = document.getElementById('bot');
var odiv =  obox.getElementsByTagName('div');
var ozz =  obox.getElementsByTagName('var');
var oli = document.getElementById('bot').getElementsByTagName('li');
var ospan = document.getElementById('h4').getElementsByTagName('span');
var nub = oli.length;
if(oli.length<=0){
    ospan[0].innerHTML = '共0份';
}else{
    ospan[0].innerHTML = '共'+nub+'份';
}
console.log(oli.length)
function fnOd(obj,value){
    var oD = obj.getElementsByTagName('div')[0];
    oD.style.display = value;
    var oClose = obj.getElementsByTagName('var')[0];
    oClose.onclick = function (){
        oD.style.display = 'none';
    }
}
for(var i=0,len=ofgl.length;i<len;i++){
    var oTc = document.getElementById('tc');
    ofgl[i].index = i;
    ofgl[i].onmouseover = function(){
        fnOd(this,'block');
    }
    ofgl[i].onmouseout = function(){
         fnOd(this,'none');
    }
    ofgl[i].onclick = function(){
        oTc.style.display = 'block';
    }
    console.log(ofgl[i].onclock)
}

function onclk(id,id2,value){
    var off = document.getElementById(id);
    var oTc = document.getElementById(id2);
    off.onclick = function(){
        oTc.style.display = value;
    }
}
onclk('off','tc','none');
onclk('off1','tc1','none');
onclk('fs','tc','none');
onclk('fs','tc1','block');
onclk('qr1','tc1','none');
onclk('qr2','tc2','none');
onclk('off2','tc2','none');
function onclk1(id,id2,id3){
    var off = document.getElementById(id);
    var oTc = document.getElementById(id2);
    var obox = document.getElementById(id3);
    off.onclick = function(){
        oTc.style.display = none;
        obox.style.display = block;

    }
}
onclk1('fs','tc','tc1');
// for(var i=0,len=ozz.length;i<len;i++){
//     ozz[i].index = i;
//     ozz[i].onclick = function(){
//         for(var j=0,lens=odiv.length;j<lens;j++){
//             odiv[j].style.display = 'none';
//         }
//         odiv[this.index].style.display = 'none';
//     }
// }