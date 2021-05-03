
//index 
window.addEventListener('load',function(){
	
	var cancelLightB = document.getElementById('cancelLightB');//燈箱開關 送出
	var cancelLightC = document.getElementById('cancelLightC');//燈箱開關 取消		
	var lightboxForJoin = document.getElementById('lightboxForJoin');//燈箱
	var cancelLightD = document.getElementById('cancelLightD');//燈箱開關 直接關
	var joinA = document.getElementById('joinA');
	var joinB = document.getElementById('joinB');
	var joinC = document.getElementById('joinC');
	var joinD = document.getElementById('joinD');
	console.log(cancelLightB);
	console.log(cancelLightC);
	console.log(lightboxForJoin);

	// Closed.addEventListener('click',function(){
	// 	lightboxForJoin.style.display = 'block';
	// },false);

	cancelLightB.addEventListener('click',function(){
		lightboxForJoin.style.display = 'none';
		cancelLightD.style.display = 'none';
		cancelLightD.style.cssText = `z-index:-1`;
		alert('感謝您加入會員～～');
	},false);

	lightboxForJoin.addEventListener('click',function(e){ //阻止事件向父層蔓延
		e.stopPropagation();
	},false);

	cancelLightC.addEventListener('click',function(){
		lightboxForJoin.style.display = 'none';
		cancelLightD.style.display = 'none';
		cancelLightD.style.cssText = `z-index:-1`;
		alert('感謝您瀏覽～～');
	},false);

	cancelLightD.addEventListener('click',function(){
		lightboxForJoin.style.display = 'none';
		cancelLightD.style.display = 'none';
		cancelLightD.style.cssText = `z-index:-1`;
	},false);

	joinA.addEventListener('click',function(){
		lightboxForJoin.style.display = 'block';
		cancelLightD.style.display = 'block';
		cancelLightD.style.cssText = `z-index:1000`;
	},false);
	joinB.addEventListener('click',function(){
		lightboxForJoin.style.display = 'block';
		cancelLightD.style.display = 'block';
		cancelLightD.style.cssText = `z-index:1000`;
	},false);
	joinC.addEventListener('click',function(){
		lightboxForJoin.style.display = 'block';
		cancelLightD.style.display = 'block';
		cancelLightD.style.cssText = `z-index:1000`;
	},false);
	joinD.addEventListener('click',function(){
		lightboxForJoin.style.display = 'block';
		cancelLightD.style.display = 'block';
		cancelLightD.style.cssText = `z-index:1000`;
	},false);
},false);





window.addEventListener('load',function(){


	// window.addEventListener("scroll", function(e){

	// 	var leftIn = document.getElementById('leftIn');
	// 	var rightIn = document.getElementById('rightIn');
	// 	var leftInB = document.getElementById('leftInB');
	// 	var rightInB = document.getElementById('rightInB');		
	// 	scrollY2 = document.documentElement.scrollTop;
	// 	leftIn.style.left = -100+'%';
	// 	leftInB.style.left = -100+'%';
	// 	rightIn.style.left = 100+'%';
	// 	rightInB.style.left = 100+'%';
	// 	// var position = $('#indexH2').offset();  
	// 	// var aa = position.left;  
	// 	// var bb = position.top; 
	// 	// console.log('bb:'bb);

	// 	//css:transform: translateX(0)
	// 	if( scrollY2 == 0 ){
	// 		leftIn.style.left = -100+'%';
	// 		leftInB.style.left = -100+'%';
	// 		rightIn.style.left = 100+'%';
	// 		rightInB.style.left = 100+'%';

	// 	}else if(scrollY2 > 600 && scrollY2<1300){
	// 		leftIn.style.left = 0;
	// 		rightIn.style.left = 0;
	// 	}else if(scrollY2 > 1300 ){
	// 		leftInB.style.left = 0;
	// 		rightInB.style.left = 0;
	// 	}

	// },false);




	// var jsboxIndex = document.getElementById('jsboxIndex');
	// var showL = document.getElementById('showL');
	// var showR = document.getElementById('showR');
	// var itemBox = document.getElementsByClassName('item-box-demo');
	// var opacity  = 0 ;
	// var x = 100;
	// var y = 0;
	// console.log(itemBox);
	
	// showL.addEventListener("mouseover", showboxL, false);
	// showR.addEventListener("mouseover", showboxR, false);
	// // window.addEventListener("scroll", imgdown, false);
	// window.addEventListener("scroll", function(e){
	// 	// y = e.clientY;
	// 	scrollY = document.documentElement.scrollTop;
	// 	console.log('y:',y);
	// 	console.log('scrollY:',scrollY);
	// 	if( scrollY < 450){
	// 		showR.style.display = 'none';
	// 		showL.style.display = 'none';
	// 	}
	// 	else if (scrollY >= 450 && scrollY <950) {
	// 		showL.style.display = 'block';
	// 		jsboxIndex.style.top = scrollY+650+'px';
	// 	}else if(scrollY >= 950){
	// 		showR.style.display = 'block';
	// 		showL.style.display = 'none';
	// 		jsboxIndex.style.top = scrollY+650+'px';			
	// 	}else{
	// 		jsboxIndex.style.top = '';
	// 	}

	// }, false);	


	function showboxL(){
		showR.style.display = 'block';
		showL.style.display = 'none';
		showR1.style.display = 'block';
		showL1.style.display = 'none';	
	};

	function showboxR(){
		showR.style.display = 'none';
		showL.style.display = 'block';
		showR1.style.display = 'none';
		showL1.style.display = 'block';
	};

},false);





