

var jj=document.querySelector(".jj");
//console.log(jj);
var dd=jj.querySelectorAll(".jj>div");
//console.log(dd);
var h=jj.querySelector("h2");
//console.log(h);
var aa=h.querySelector("a");
//console.log(aa);
var hj=jj.querySelector("h5");
//console.log(hj);
var hh=jj.querySelectorAll("h4");
//点击事件
//console.log(hh);
var pp=jj.querySelectorAll(".bac");
//console.log(pp);
 for(var i=0;i<hh.length;i++){
 	hh[i].onclick=function(){
 		var l=parseInt(this.getAttribute("y"));
 		for(var k=0;k<dd.length;k++){
 			dd[k].style.display="none"
 			hh[k].style.color="#333";
 			pp[k].style.background="url(../img/bjt3.png)"
 		}
 		dd[l].style.display="block";
 		hj.innerHTML=hh[l].innerHTML+"/";
        this.style.color="#840810";
        aa.innerHTML=hh[l].innerHTML
        pp[l].style.background="url(../img/bjt4.png)"
 	}
 }
