
function dangqian(str){
    var olunbo = document.getElementById(str);
    var oa = olunbo.getElementsByTagName('a');
    var obox = document.getElementById('box');
    var obon = obox.getElementsByTagName('ul');
    for(var i=0,len=obon.length;i<len;i++){
        oa[i].index = i;
        oa[i].onclick = function(){
            for(var j=0,lens=oa.length;j<lens;j++){
                oa[j].className='';
                obon[j].style.display = 'none';
            };
            oa[this.index].className ='cur';
            obon[this.index].style.display = 'block';
        };
    } 
}
danggqian('lunbo');
