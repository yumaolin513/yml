     
     
     
	    var uls=document.querySelector(".tt")
	    var spans=uls.querySelectorAll(".as");
		var lis=document.querySelectorAll(".tt>li")
		var li=uls.querySelectorAll(".li")
		var uls=document.querySelectorAll(".tt ul")
		var jj=document.querySelector(".jj")
		var hh=jj.querySelector("h2")
		var jspan=hh.querySelector("span")
		var af=hh.querySelector("a")
		var rbtn=document.querySelector(".t")
			var lbtn=document.querySelector(".y")
			var boxs=document.querySelector(".ps")
			var rbtnn=document.querySelector(".r")
			var lbtnn=document.querySelector(".g")
			var xx=document.querySelector(".j")
			var ml=document.querySelector(".fx")
			var arr=[];
			var b=0
			var imgs=document.querySelectorAll(".ps img")
			var ml_img=document.querySelector(".fx img")
			var a=0
			var h3=document.querySelector("h3")
			var h4=document.querySelector("h4")
			var png=document.querySelector(".png")
			var pg=png.querySelector("img")
			var divs=jj.querySelectorAll(".bn")
			var ass=["../img/p1.png","../img/p2.png","../img/p3.png","../img/t4.jpg","../img/4.jpg","../img/5.jpg","../img/z2.jpg","../img/z3.jpg","../img/z5.jpg","../img/z4.jpg","../img/6.jpg","../img/s3.jpg","../img/p4.jpg","../img/4.jpg","../img/2.jpg","../img/8.jpg"];
			var ps=document.querySelector(".ps")
			console.log(ass)
			var psg=ps.querySelectorAll("img")
			var psg_img=[
			["../img/p2.png","../img/p3.png","../img/p2.png","../img/4.jpg","../img/5.jpg"],
			["../img/m2.jpg","../img/m3.jpg","../img/m4.jpg","../img/m5.jpg","../img/m6.jpg"],
			["../img/p4.jpg","../img/s5.jpg","../img/z2.jpg","../img/4.jpg","../img/2.jpg"],
			["../img/z2.jpg","../img/z3.jpg","../img/z4.jpg","../img/4.jpg","../img/5.jpg"],
			["../img/z5.jpg","../img/p3.png","../img/p2.png","../img/4.jpg","../img/5.jpg"],
			["../img/y2.jpg","../img/y3.jpg","../img/y4.jpg","../img/4.jpg","../img/5.jpg"],
			["../img/y.jpg","../img/y1.jpg","../img/y5.jpg","../img/4.jpg","../img/5.jpg"],
			["../img/t4.jpg","../img/s3.jpg","../img/t3.jpeg","../img/4.jpg","../img/5.jpg"],
			["../img/m6.jpg","../img/m5.jpg","../img/m4.jpg","../img/4.jpg","../img/5.jpg"],
			["../img/2.jpg","../img/1.jpg","../img/4.jpg","../img/4.jpg","../img/5.jpg"],
			["../img/8.jpg","../img/7.jpg","../img/6.jpg","../img/4.jpg","../img/5.jpg"],
			["../img/l6.jpg","../img/s5.jpg","../img/p4.jpg","../img/4.jpg","../img/5.jpg"],
			["../img/z2.jpg","../img/z5.jpg","../img/z3.jpg","../img/4.jpg","../img/5.jpg"],
			["../img/t4.jpg","../img/s5.jpg","../img/m6.jpg","../img/4.jpg","../img/5.jpg"],
			["../img/p1.jpg","../img/p3.jpg","../img/p2.jpg","../img/4.jpg","../img/5.jpg"],
			["../img/4.jpg","../img/s3.jpg","../img/p4.jpg","../img/4.jpg","../img/5.jpg"],
			];
	       for(var i=0;i<spans.length;i++){
	       	spans[i].onclick=function(){
            for(var i=0;i<lis.length;i++){
            	lis[i].className="closed";
            	uls[i].className="hide";
            	spans[i].style.color="#333"
            	spans[i].style.background="url(../img/bjt3.png)no-repeat center right";
           		af.innerHTML=""
            }
                this.parentNode.className="open";
            	this.nextElementSibling.className="show";
            	this.style.color="#830a11";
            	this.style.background="url(../img/bjt4.png)no-repeat center right";
            	jspan.innerHTML="拍摄基地>"+this.innerHTML+">"
               
	       }
	       }
	       for(var i=0;i<li.length;i++){
	       	li[i].onclick=function(){
	       		var ht=this.getAttribute("m")
	       		 var nn=parseInt(this.getAttribute("y"));
	       	
	       		for(var j=0;j<li.length;j++){
	       			li[j].className="li";
	       			divs[j].className="bn"
	       		}
	       		h3.innerHTML=this.innerHTML;
	       		h4.innerHTML=ht;
	       		this.className="ss"
	       		af.innerHTML=this.innerHTML;
	       		divs[nn].className="bnn";
	       		pg.src=ass[nn];
	       		arr=psg_img[nn];
	       		 for(var i=0;i<psg.length;i++){
	       	psg[i].src=arr[i]
	       }
	       	}
	       }
	      
			 rbtn.onclick=function(){
			 	b++
			 	if(b==3){
			 		b=0
			 	}
			 	boxs.style.marginLeft=b*(-286)+"px";
			 }
			lbtn.onclick=function(){
				b--
				if(b==-1){
					b=2
				}
				boxs.style.marginLeft=b*(-286)+"px";
			}
			for(var i=0;i<imgs.length;i++){
				imgs[i].onclick=function(){
					ml.style.display="block";
					ml_img.src=this.src;
					 a=parseInt(this.getAttribute("y"));
				}
			}
			xx.onclick=function(){
				ml.style.display="none"
			}
			rbtnn.onclick=function(){
				a++;
				if(a==5){
					a=0;
				}
				ml_img.src=arr[a];
			}
			lbtnn.onclick=function(){
				a--;
				if(a==-1){
					a=4;
				}
				ml_img.src=arr[a];
			}