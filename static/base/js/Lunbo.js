$(function() {
	var clone1 = $("#container #list a").first().clone();
	$("#list").append(clone1);
	var clone5 = $("#container #list a").eq(4).clone();
	$("#list").first().prepend(clone5);
	var clone4 = $("#container #list a").eq(4).clone();
	$("#list").first().prepend(clone4);

	var btnsize = $("#buttons span").size();

	var imgs = $("#container #list .LunboImg");
	var size = imgs.size();
	var viewWidth, base, pdis, imgsWidth;

	var i = 3;
	setopc(i);

	var sf = 0;
	adjust();

	window.onresize = function() {
		adjust();
	}

	function adjust() {
		base = document.body.clientWidth*0.08;
		pdis = document.body.clientWidth*0.84;
		for (var j = 0; j < size; j++) {
			imgs.eq(j).css({width: pdis});
			imgs.eq(j).css({height: 450});
		}
		$("#list").css({width:pdis*(imgs.length+1)});
		if (sf == 0) {
			$("#list").css({left: -3*(pdis)+base});
			sf = 1;
		}
		else {
			$("#list").css({left : -i*pdis+base});
		}
	}

	//向右轮播函数
	function moveR() {
		i++;
		if (i == size-1) {
			$("#list").css({left: -1*pdis+base});
			i = 2;
		}
		$("#list").stop().animate({left : -i*pdis+base}, 700);
		setopc(i);
		$("#buttons span").eq(i-2).addClass("on").siblings().removeClass("on");
	}

	function setopc(index) {
		for (var k = 0; k < size; k++) {
			if (k != index) imgs[k].style.opacity = 0.7;
			else imgs[k].style.opacity = 1;
		}
	}

	//鼠标滑过圆点
	$("#buttons span").hover(function() {
		var index = $(this).index();
		i = index+2;
		setopc(i);
		$("#list").stop().animate({left: (-i*pdis)+base}, 700);
		$(this).addClass("on").siblings().removeClass("on");
	});

	//定时自动轮播
	var t = setInterval(function() {
		moveR();
	}, 5000);

	//鼠标划过图片停止自动轮播
	$("#container").hover(function() {
		clearInterval(t);
		},function() {
			t = setInterval(function() {
				moveR();
			}, 5000);
		}
	);

	var oDiv = document.getElementById('Horizontal-Scroll');

	function onMouseWheel(ev) {/*当鼠标滚轮事件发生时，执行一些操作*/
		var ev = ev || window.event;
		var down = true; // 定义一个标志，当滚轮向下滚时，执行一些操作
		down = ev.wheelDelta?ev.wheelDelta<0:ev.detail>0;
		if(down){
			oDiv.scrollLeft = oDiv.scrollLeft+40;
		}else{
			oDiv.scrollLeft = oDiv.scrollLeft-40;
		}
		if(ev.preventDefault){/*FF 和 Chrome*/
			ev.preventDefault();// 阻止默认事件
		}
		return false;
	}
	addEvent(oDiv,'mousewheel',onMouseWheel);
	addEvent(oDiv,'DOMMouseScroll',onMouseWheel);
	function addEvent(obj,xEvent,fn) {  //为了保证浏览器兼容
		if(obj.attachEvent){
			obj.attachEvent('on'+xEvent,fn);  //IE和chrome兼容
		}else{
			obj.addEventListener(xEvent,fn,false); //火狐兼容
		}
	}
})