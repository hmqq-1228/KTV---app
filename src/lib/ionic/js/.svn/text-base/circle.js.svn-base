(function(){
	window.addEventListener("load",init,false);
	function init(){
			var circles=document.querySelectorAll("*[data-pre]");
			
				for(var i=0;i<circles.length;i++){
					var can=document.createElement("canvas");
					var cw=circles[i].offsetWidth;//获取元素的宽
					var ch=circles[i].offsetHeight;
					
					
					circles[i].appendChild(can);
					can.width=cw;
					can.height=ch;
					var pre=parseInt(circles[i].getAttribute("data-pre"));
					drawCircle(can,pre);	
				}
				function drawCircle(canvas,pre){
					console.log(pre);
					var ctx=canvas.getContext("2d");
					ctx.beginPath();//开始画画
					ctx.lineWidth=2;//两像素粗的笔
					ctx.strokeStyle="#ccc";//画笔的颜色
					ctx.arc(35,35,32,0,Math.PI*2);//画圆
					ctx.stroke();//结束绘制
					ctx.beginPath();//开始画画
					ctx.lineWidth=2;//两像素粗的笔
					ctx.strokeStyle="#FF3B30";//画笔的颜色
					ctx.arc(35,35,32,0,Math.PI*2/100*pre);//画圆
					ctx.stroke();//结束绘制
				}
		}
		}())