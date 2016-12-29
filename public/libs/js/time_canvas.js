(function() {
	var balls = [];
	colors = ["#fca85d","#fc865d","#f159f7","#825dfc","#5d5dfc","#5dd1fc","#5dfce0","#5dfca0","#70fc5d","#e4fc5d"];

	var canvas = document.getElementById('canvas_time');
	var context = canvas.getContext("2d");
	var FBwidth = canvas.clientWidth;
	var FBheight = canvas.clientHeight;
	var RADIUS = 2;
	var MT = 0;
	var ML = canvas.clientWidth * 0.1;
	Nowtime = GetTime();

	canvas.width = FBwidth;
	canvas.height = FBheight;

	function GetTime(){
		var now = new Date();
		var hours = now.getHours();
		var minutes = now.getMinutes();
		var seconds = now.getSeconds();
		var timeNow = [hours,minutes,seconds];
		return timeNow;
	}
	
	function render(ctx){
		Nowtime = GetTime();

		ctx.clearRect(0,0,FBwidth,FBheight);

		renderDigit(ML,MT,parseInt(Nowtime[0]/10),ctx);
		renderDigit(ML+15*(RADIUS+1),MT,parseInt(Nowtime[0]%10),ctx);
		renderDigit(ML+30*(RADIUS+1),MT,10,ctx);
		renderDigit(ML+39*(RADIUS+1),MT,parseInt(Nowtime[1]/10),ctx);
		renderDigit(ML+54*(RADIUS+1),MT,parseInt(Nowtime[1]%10),ctx);
		renderDigit(ML+69*(RADIUS+1),MT,10,ctx);
		renderDigit(ML+78*(RADIUS+1),MT,parseInt(Nowtime[2]/10),ctx);
		renderDigit(ML+93*(RADIUS+1),MT,parseInt(Nowtime[2]%10),ctx);

		for( var i = 0 ; i < balls.length ; i ++ ){
	        ctx.fillStyle=balls[i].color;
	        ctx.beginPath();
	        ctx.arc( balls[i].x , balls[i].y , RADIUS , 0 , 2*Math.PI , true );
	        ctx.closePath();
	        ctx.fill();
	    }

	}
	function renderDigit(x,y,num,ctx){
		ctx.fillStyle="#fb885b";
		for (var i = 0; i <digit[num].length; i++) {
			for(j=0;j<digit[num][i].length;j++){
				if( digit[num][i][j] == 1 ){
					ctx.beginPath();
					ctx.arc( x+j*2*(RADIUS+1)+(RADIUS+1) , y+i*2*(RADIUS+1)+(RADIUS+1) , RADIUS , 0 , 2*Math.PI )
					ctx.closePath();
					ctx.fill();
				}
			}
		}
	}

	function update(){
		var newestTime = GetTime();
		if (Nowtime[2]!=newestTime[2]) {
			if( parseInt(Nowtime[0]/10) != parseInt(newestTime[0]/10) ){
	            addBalls( ML + 0 , MT , parseInt(newestTime[0]/10) );
	        }
	        if( parseInt(Nowtime[0]%10) != parseInt(newestTime[0]%10) ){
	            addBalls( ML + 15*(RADIUS+1) , MT , parseInt(newestTime[0]/10) );
	        }
	        if( parseInt(Nowtime[1]/10) != parseInt(newestTime[1]/10) ){
	            addBalls( ML + 39*(RADIUS+1) , MT , parseInt(newestTime[1]/10) );
	        }
	        if( parseInt(Nowtime[1]%10) != parseInt(newestTime[1]%10) ){
	            addBalls( ML + 54*(RADIUS+1) , MT , parseInt(newestTime[1]%10) );
	        }
	        if( parseInt(Nowtime[2]/10) != parseInt(newestTime[2]/10) ){
	            addBalls( ML + 78*(RADIUS+1) , MT , parseInt(newestTime[2]/10) );
	        }
	        if( parseInt(Nowtime[2]%10) != parseInt(newestTime[2]%10) ){
	            addBalls( ML + 93*(RADIUS+1) , MT , parseInt(newestTime[2]%10) );
	        }
		}
		updateBalls();
	}

	function addBalls( x , y , num ){
	    for( var i = 0  ; i < digit[num].length ; i ++ ){
	        for( var j = 0  ; j < digit[num][i].length ; j ++ ){
	            if( digit[num][i][j] == 1 ){
	                var aBall = {
	                    x:x+j*2*(RADIUS+1)+(RADIUS+1),
	                    y:y+i*2*(RADIUS+1)+(RADIUS+1),
	                    g:1.5+Math.random(),
	                    vx:Math.pow( -1 , Math.ceil( Math.random()*1000 ) ) * 4,
	                    vy:-5,
	                    color: colors[ Math.floor( Math.random()*colors.length ) ]
	                }

	                balls.push( aBall )
	            }
            }
        }
	}
	function updateBalls(){

	    for( var i = 0 ; i < balls.length ; i ++ ){

	        balls[i].x += balls[i].vx;
	        balls[i].y += balls[i].vy;
	        balls[i].vy += balls[i].g;

	        if( balls[i].y >= FBheight-RADIUS ){
	            balls[i].y = FBheight-RADIUS;
	            balls[i].vy = - balls[i].vy*0.6;
	        }
	    }
        var cnt = 0
	    for( var i = 0 ; i < balls.length ; i ++ ){
	        if( balls[i].x + RADIUS > 0 && balls[i].x -RADIUS < FBwidth )
	            balls[cnt++] = balls[i]
	    }

	    while( balls.length > cnt ){
	        balls.pop();
	    }
	}
	setInterval(function(){
		update();
		render(context);
	},50)
})()