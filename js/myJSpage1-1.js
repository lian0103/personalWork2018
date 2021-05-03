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




//1-1 總金額跟選數量
window.addEventListener('load',function(){
	var chNums = document.getElementsByClassName('chNum');//要他的value
	var moneySum = document.getElementById('MoneySum'); //處理後放入
	var Closed = document.getElementById('Closed');//燈箱開關
	var cancelLight = document.getElementById('cancelLight');//燈箱開關	
	var lightbox = document.getElementById('lightbox');//燈箱
	var body = document.getElementsByTagName('body');

	var number = 0;
	console.log(chNums);
	console.log(MoneySum);
	console.log(Closed);	
	console.log(lightbox);
	console.log(body);

	Closed.addEventListener('click',function(){
		// lightbox.style.display = 'block';
		alert('感謝您的惠顧(刷卡功能日後推出)');
	},false);

	cancelLight.addEventListener('click',function(){
		lightbox.style.display = 'none';
		alert('感謝您的光臨～');
	},false);

	
	for( let i = 0 ; i< 46; i++ ){
		chNums[i].addEventListener('input',function(){
			var number = chNums[i].value;
			number = number *200;
			moneySum.innerHTML = number ;
		},false);		
	}
	



},false);


		
	var theText = document.getElementById('theText');
	var theTextB = document.getElementById('theTextB');
	var Text = new String;
	var speed = 1500;
	var i = 0 ;
	var arr_Str = [   //1.2rem 6字一行
		'有機水果優惠<br>只有今天～',
		'單筆消費滿<br>5000元',
		'享9.5折～～<br>免運費',
		'累計消費<br>兩萬元',
		'送旅宿入住券',
		'好時光<br>有機水果',
		'歡慶三週年～<br>結帳享折扣～',
		'會員獨家送～<br>精緻紀念品',
		
		];

	
	function texting(){
		var theText = document.getElementById('theText');
		var theTextB = document.getElementById('theTextB');
		var Text = new String;

		if( i < arr_Str.length){
			theText.innerHTML = arr_Str[i];
			theTextB.innerHTML = arr_Str[i];		
			console.log(arr_Str[i])	;
			i++;					
		}else{
			// clearInterval('TimeID');
			i = 0
		}
		return i;
	}



	function timer(){
		timeID=setInterval(texting,speed);
	}

window.addEventListener('load',timer,false);


window.addEventListener('load',function(){

	var jsboxIndex1 = document.getElementById('jsboxIndex1');
	var showL1 = document.getElementById('showL1');
	var showR1 = document.getElementById('showR1');
	var a = 0;
	console.log(a);
	console.log(jsboxIndex1);
	console.log(showL1);
	console.log(showR1);
	
	// showL1.addEventListener("mouseover", showboxLB, false);
	// showR1.addEventListener("mouseover", showboxRB, false);
	// // window.addEventListener("scroll", imgdown, false);
	// window.addEventListener("scroll", function(e){
	// 	scrollY = document.documentElement.scrollTop;
	// 	console.log('scrollY:',scrollY);
	// 	if( scrollY > 0){
	// 		showR1.style.display = 'block';
	// 		jsboxIndex1.style.top = scrollY+650+'px';
	// 		return a;
	// 		console.log(a);
	// 	}else{
	// 		jsboxIndex1.style.top = '';
	// 	}

	// }, false);	

	// function showboxLB(){
	// 	showR1.style.display = 'block';
	// 	showL1.style.display = 'none';	
	// };

	// function showboxRB(){
	// 	showR1.style.display = 'none';
	// 	showL1.style.display = 'block';
	// };

	var btn1 = document.getElementById('btn1');
	var btn2 = document.getElementById('btn2');
	var btn3 = document.getElementById('btn3');
	var btn4 = document.getElementById('btn4');
	var btn5 = document.getElementById('btn5');
	var btn6 = document.getElementById('btn6');
	var label = document.getElementsByTagName('label');

	var groupAll = document.getElementsByClassName('all-year');
	var groupSri = document.getElementsByClassName('spring-group');
	var groupSum = document.getElementsByClassName('summer-group');
	var groupFall = document.getElementsByClassName('fall-group');
	var groupWin = document.getElementsByClassName('winter-group');
	var groupTop = document.getElementsByClassName('top4');
	console.log(btn1);
	console.log(groupAll);
	console.log('label:'+label);

	btn1.addEventListener('click',function(){
		if(btn1.value == 1){
			for(i=1;i<10;i++){
				var groupAll = document.getElementsByClassName('all-year')[i];
				groupAll.style.display = 'grid';
				var label = document.getElementsByTagName('label')[2];
				label.style.color='#fa3';	
				btn1.value="0";
				
				groupAll.style.order = '-1';
			}			
		}else if(btn1.value == 0){
			for(i=0;i<10;i++){
				var groupAll = document.getElementsByClassName('all-year')[i];	
				groupAll.style.display = 'none';
				var label = document.getElementsByTagName('label')[2];
				label.style.color='#444';
				btn1.value=1;
			}
		}
	},false);

	btn2.addEventListener('click',function(){
		
		if(btn2.value == 1){
			btn2.value="0";	
			for(i=0;i<10;i++){
				var groupSri = document.getElementsByClassName('spring-group')[i];
				var label = document.getElementsByTagName('label')[3];
				label.style.color='#fa3';
				groupSri.style.display = 'grid';
				groupSri.style.order = '-1';
			}			
		}else if(btn2.value == 0){
			btn2.value=1;
			for(i=0;i<10;i++){
				var groupSri = document.getElementsByClassName('spring-group')[i];
				var label = document.getElementsByTagName('label')[3];
				label.style.color='#444';
				groupSri.style.display = 'none';
				groupSri.style.order = '5';
			}
		}


	},false);

	btn3.addEventListener('click',function(){
		
		if(btn3.value == 1){
			btn3.value="0";	
			for(i=0;i<10;i++){
				var groupSum = document.getElementsByClassName('summer-group')[i];
				var label = document.getElementsByTagName('label')[4];
				label.style.color='#fa3';
				groupSum.style.display = 'grid';
				groupSum.style.order = '-1';
			}			
		}else if(btn3.value == 0){
			btn3.value=1;
			for(i=0;i<10;i++){
				var groupSum = document.getElementsByClassName('summer-group')[i];
				var label = document.getElementsByTagName('label')[4];
				label.style.color='#444';
				groupSum.style.display = 'none';
				groupSum.style.order = '5';
			}
		}


	},false);

	btn4.addEventListener('click',function(){
		
		if(btn4.value == 1){
			btn4.value="0";	
			for(i=0;i<10;i++){
				var groupFall = document.getElementsByClassName('fall-group')[i];
				var label = document.getElementsByTagName('label')[5];
				label.style.color='#fa3';
				groupFall.style.display = 'grid';
				groupFall.style.order = '-1';
			}			
		}else if(btn4.value == 0){
			btn4.value=1;
			for(i=0;i<10;i++){
				var groupFall = document.getElementsByClassName('fall-group')[i];
				var label = document.getElementsByTagName('label')[5];
				label.style.color='#444';
				groupFall.style.display = 'none';
				groupFall.style.order = '5';
			}
		}


	},false);

	btn5.addEventListener('click',function(){
		
		if(btn5.value == 1){
			btn5.value="0";	
			for(i=0;i<10;i++){
				var groupWin = document.getElementsByClassName('winter-group')[i];
				var label = document.getElementsByTagName('label')[6];
				label.style.color='#fa3';
				groupWin.style.display = 'grid';
				groupWin.style.order = '-1';
			}			
		}else if(btn5.value == 0){
			btn5.value=1;
			for(i=0;i<10;i++){
				var groupWin = document.getElementsByClassName('winter-group')[i];
				var label = document.getElementsByTagName('label')[6];
				label.style.color='#444';
				groupWin.style.display = 'none';
				groupWin.style.order = '5';
			}
		}


	},false);

	btn6.addEventListener('click',function(){
		
		if(btn6.value == 1){
			btn6.value="0";	
			for(i=0;i<10;i++){
				var groupTop = document.getElementsByClassName('top4')[i];
				groupTop.style.display = 'grid';
				var label = document.getElementsByTagName('label')[1];
				label.style.color='#fa3';
				groupTop.style.order = '-1';
			}			
		}else if(btn6.value == 0){
			btn6.value=1;
			for(i=0;i<10;i++){
				var groupTop = document.getElementsByClassName('top4')[i];
				groupTop.style.display = 'none';
				var label = document.getElementsByTagName('label')[1];
				label.style.color='#444';
				groupTop.style.order = '5';
			}
		}


	},false);



},false)


