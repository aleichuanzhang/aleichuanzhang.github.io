/* upload.js Date:2017-03-17 17:07:11 */
function previewImage(a){var b=90;var c=90;var d=document.getElementById("preview");if(a.files&&a.files[0]){var e=document.getElementById("imghead");e.onload=function(){};var f=new FileReader;f.onload=function(a){console.log(a.target.result),e.src=a.target.result,$("#imghead1").attr("src",a.target.result)},f.readAsDataURL(a.files[0])}else{alert("ie");var g='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';a.select();var h=document.selection.createRange().text;d.innerHTML="<img id=imghead>";var e=document.getElementById("imghead");e.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src=h;var i=clacImgZoomParam(b,c,e.offsetWidth,e.offsetHeight);status="rect:"+i.top+","+i.left+","+i.width+","+i.height,d.innerHTML="<div id=divhead style='width:"+i.width+"px;height:"+i.height+"px;margin-top:"+i.top+"px;"+g+h+"\"'></div>"}}function clacImgZoomParam(a,b,c,d){var e={top:0,left:0,width:c,height:d};return(c>a||d>b)&&(rateWidth=c/a,rateHeight=d/b,rateWidth>rateHeight?(e.width=a,e.height=Math.round(d/rateWidth)):(e.width=Math.round(c/rateHeight),e.height=b)),e.left=Math.round((a-e.width)/2),e.top=Math.round((b-e.height)/2),e}
