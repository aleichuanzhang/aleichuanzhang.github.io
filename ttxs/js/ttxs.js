// alert("这是一个弹框");
// var sureOrCancle = confirm("单击“确定”继续。单击“取消”停止。"); 
// if (sureOrCancle){
//     alert("我确定");
// }
//     else {
//     alert("我取消");
// }
// // var theResponse = prompt("欢迎？","请在此输入您的姓名。");
// console.log(theResponse);
document.title="天天象上呀";
// document.write("天台呢");
// document.write("不是<h3>我不知道我不知道我</h3>似的");
// var oDiv = document.getElementById('aaa');
// oaaa.style.height='100px';
// oDiv.style.border="2px red solid";
// oDiv.innerHTML = '<span class="test">测试</span><b>业体</b>';
var obeij = document.getElementById('beij');
var ogdcs = document.getElementById('gdcs');
// obeij.onclick = function(){
//     ogdcs.style.display='block';
// }
// obeij.onclick = function(){
//     ogdcs.style.display='none';
// }

// obeij.onmouseover = function(){
//     setTimeout(function(){
//             ogdcs.style.display = 'block';
//         },1000)
// }
// ogdcs.onmouseout = function(){
//     ogdcs.style.display='none';
// }
var oqgms = document.getElementById('qgms');
var oqgmsBd = document.getElementById('qgmsBd');
var ocpzx = document.getElementById('cpzx');
var ocpzxBd = document.getElementById('cpzxBd');
var odingI = document.getElementById('dingI');
var odingI1 = document.getElementById('dingI1');
obeij.onmouseover = function(){
     ogdcs.style.display='block';
     obeij.style.borderRight='1px #e7e7e7 solid';
     obeij.style.borderLeft='1px #e7e7e7 solid';
     odingI.style.display='block';
}
obeij.onmouseout = function(){
    ogdcs.style.display='none';
    obeij.style.border='none';
    odingI.style.display='none';
}
oqgms.onmouseover = function(){
     oqgmsBd.style.display='block';
     oqgms.style.borderRight='1px #e7e7e7 solid';
     oqgms.style.borderLeft='1px #e7e7e7 solid';
     // oqgmsBd.style.marginLeft='10px';
    odingI1.style.display='block';
}
oqgms.onmouseout = function(){
    oqgmsBd.style.display='none';
    oqgms.style.border='none';
    odingI1.style.display='none';
}
ocpzx.onmouseover = function(){
    ocpzxBd.style.display="block";
}
ocpzx.onmouseout = function(){
    ocpzxBd.style.display='none';
}
// 类似hover效果

// function showDiv(){
//     if(ogdcs.style.display=='block'){
//         ogdcs.style.display='none';
//     }
//     else{
//         ogdcs.style.display='block';
//     }
// }
// obeij.onclick = function(){
//     showDiv();
// }
// 判断语句

















