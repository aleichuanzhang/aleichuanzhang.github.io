/* gszy.js Date:2017-03-09 10:57:48 */
function tabStarts(a,b,c){var e=document.getElementById(a).getElementsByTagName("a");var f=document.getElementById(a).getElementsByTagName("i");var g=document.getElementById(b).getElementsByTagName("li");var h=0;for(var i=0,j=e.length;j>i;i++)e[i].index=i,e[i].onclick=function(){var a=this.index;k(a),h=a};function k(a){for(var b=0,c=g.length;c>b;b++)e[b].className="",g[b].style.display="none";e[a].className="cur",g[a].style.display="block"}timer=setInterval(function(){h++,h>=6&&(h=0),k(h)},3e3),f[1].onclick=function(){h++,h>=6&&(h=0),k(h)},f[0].onclick=function(){h--,-1>=h&&(h=5),k(h)};var l=document.getElementById(c);l.onmouseover=function(){clearInterval(timer)},l.onmouseout=function(){timer=setInterval(function(){h++,h>=6&&(h=0),k(h)},3e3)}}tabStarts("btn","box","da"),tabStarts("btn1","box1","da1");function changeinr(a,b,c,d){var e=document.getElementById(a).getElementsByTagName("a");var f=document.getElementById(d).getElementsByTagName("em");var g=document.getElementById(d).getElementsByTagName("a");var h=document.getElementById(b);var i=document.getElementById(c);e[0].onclick=function(){h.style.display="none",i.style.display="block"},f[0].onclick=function(){i.style.display="none",h.style.display="block"};function j(){g[0].onclick=function(){i.style.display="none",h.style.display="block";function a(a,b,c,d,e){var f=document.getElementById(a).getElementsByTagName(b);var g=document.getElementById(c).getElementsByTagName(d);g[0].innerHTML='<a href="#">'+f[e].value+"</a>"}a("inr2","input","inr1","h2","0"),a("inr2","input","inr1","p","1"),a("inr2","input","inr1","span","2"),a("inr2","textarea","jj","p","0")}}j();function k(){var a=document.getElementById("bianji").getElementsByTagName("input");var b=a[0].parentNode;function c(a){return a?a.previousElementSibling||a.previousSibling:null}function d(a){return a?a.nextElementSibling||a.nextSibling:null}var e=c(b);var f=d(b);function g(a){var b=document.createElement("span");b.innerHTML="<var>"+a+"</var>";var c=e.getElementsByTagName("span");if(console.log(c.length),!(c.length<=5))return void alert("\u4e0d\u80fd\u6dfb\u52a0\u66f4\u591a\u6807\u7b7e");e.appendChild(b);var d=document.createElement("i");b.appendChild(d),d.onclick=function(){e.removeChild(d.parentNode)}}function h(){var a=f.getElementsByTagName("span");for(var b=0,c=a.length;c>b;b++)a[b].onclick=function(){var a=this.innerHTML;g(a)}}h();function i(b){b.onclick=function(){var b=a[0].value;g(b)}}i(a[1])}function l(){var a=document.getElementById("bianji").getElementsByTagName("i");for(var b=0,c=a.length;c>b;b++)a[b].onclick=function(){this.parentNode.parentNode.removeChild(this.parentNode)},console.log(a[b].onclick)}l(),k()}changeinr("bj","dada1","dada2","bc");
