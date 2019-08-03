			var df=document.getElementsByTagName("div")[2];
			console.log(df)
	    	var rbtn=document.getElementsByTagName("button")[1];
	    	console.log(rbtn)
	    	var lbtn=document.getElementsByTagName("button")[0];
	    	console.log(lbtn)
	    	 var imgs=df.getElementsByTagName("img");
	    	 console.log(imgs)
	    	 var lis=df.getElementsByTagName("li");
	    	 console.log(lis)
	    	 var h=0;
	    	rbtn.onclick=function(){
	    		  h++
	    	if(h==5){
	    			h=0
	    	}
	    	for(var i=0;i<imgs.length;i++){
	    			 imgs[i].className="";
	    	}
	    	for(var i=0;i<lis.length;i++){
	    	  
	    			 lis[i].className=""
	        }
	    			 lis[h].className="qw";
	    		     imgs[h].className="fl";
	    	}
	    	
	    	lbtn.onclick=function(){
	    		h--
	    	if(h==-1){
	    			  h=4
	    		}
	    	for(var i=0;i<imgs.length;i++){
	    			  imgs[i].className="";
	    		}
	    	for(var i=0;i<lis.length;i++){
	    			  lis[i].className=""
	    	}
	    			  lis[h].className="qw";
	    		      imgs[h].className="fl";
	    	}
	    	for(var i=0;i<lis.length;i++){
	    	  		  lis[i].onclick=function(){
	    	for(var i=0;i<lis.length;i++){
	    	  
	    			   lis[i].className=""
	    	}
	    	  		   this.className="qw";
	    	  		   h=this.getAttribute("y");
	    	for(var i=0;i<imgs.length;i++){
	    	  		   imgs[i].className="";
	    	 }
	    	  		   imgs[h].className="fl";
	    	 }
	    	 }
	    	var tm=setInterval(function(){
	    	      	rbtn.onclick();
	    	 },2000)
	        df.onmouseover=function(){
				    clearInterval(tm);
			}
			        df.onmouseout=function(){
				
				    tm=setInterval(function(){
				
				    rbtn.onclick();
					
				},2000)
			}