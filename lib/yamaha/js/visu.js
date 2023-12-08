$(function () {


	// 1.변수 설정
	const leftBtn = $('.visu.arrow.left'); //왼쪽버튼
	const rightBtn = $('.visu.arrow.right'); //오른쪽버튼
	const slider = $('.visual_wrap > li'); //On현재 불이 켜져 있는 slide

	const sl_Length = slider.length; //n/1해서 animate가 진행되는 progress

	const distance = 100 / sl_Length; //14.4444




	const proWrap = $('.visu.progress') //txt_black
	const progress = $('.visu.pg_inner span')
	const stopBtn = $('.control.visu')




	//1. 오른쪽 버튼 클릭
	rightBtn.click(right)
	leftBtn.click(left)

	// 2.오른쪽 버튼 클릭 함수
	function right(e) {
		e.preventDefault(); //위로 올라가는 이벤트 막아줌
		let idx = $('.visual_wrap > li.On').index() //현재 활성화되있는 slider의 순서값 찾아냄

		reset() //초기화 함수 실행


		idx++; //한개를 증감시킴
		if (idx > sl_Length - 1) { //슬라이더의 개수는 총 7개 이므로 한개를 빼야 순서가 맞음
			idx = 0
		}
		// console.log(idx);


		if (idx == 2 || idx == 3) { //만약 순서가 2또는 3이라면 진행바의 색상이 바뀐다.
			proWrap.addClass('txt_black')
		}


		// 순서값에 맞는 slider 나옴
		slider.eq(idx).addClass('On')
		// 진행바는 idx가 0부터 시작이기때문에 1을 더한 값 * 거리(100%슬라이드 개수)한 값에 %를 달아서 그만큼 동작하게 한다.
		progress.animate({
			'width': ((idx + 1) * distance) + '%'
		}, 300)



	}

	// 3.왼쪽 버튼 클릭 함수
	function left(e) {
		e.preventDefault(); //위로 올라가는 이벤트 막아줌
		let idx = $('.visual_wrap > li.On').index() //현재 활성화되있는 slider의 순서값 찾아냄
		reset() //초기화 함수 실행



		idx--; //한개를 감소 시킴

		if (idx < 0) { //순서값이 0 보다 작아지면
			idx = sl_Length - 1 //슬라이더의 개수 7에서 하나를 뺀 6으로 값 변환
		}

		console.log(idx);


		if (idx == 2 || idx == 3) { //만약 순서가 2또는 3이라면 진행바의 색상이 바뀐다.
			proWrap.addClass('txt_black')
		}

		// 순서값에 맞는 slider 나옴
		slider.eq(idx).addClass('On')
		// 진행바는 idx가 0부터 시작이기때문에 1을 더한 값 * 거리(100%슬라이드 개수)한 값에 %를 달아서 그만큼 동작하게 한다.
		progress.animate({
			'width': ((idx + 1) * distance) + '%'
		}, 300)



	}


	// 3.초기화함수
	function reset() {
		// 기존 활성화 slider 비활성화 모드 변환
		slider.removeClass('On')
		// 진행바 검정이면 기존값으로 바꿈
		proWrap.removeClass('txt_black')

	}


	const louL_Btn = $('.loungeBtn.left')
	const louR_Btn = $('.loungeBtn.right')
	const lou_Slider = $('.lounge_slider li')
 
 
	louL_Btn.click(louL)
	louR_Btn.click(louR)
 
 
	function louR(e){
	   e.preventDefault()
	   let idx = $('.lounge_slider li.On').index()
 
	   lou_Slider.removeClass('On');
	   
	   idx++;
	
	   if(idx>lou_Slider.length-1){
		  idx=0;
	   }
	   lou_Slider.eq(idx).addClass('On');
	   
 
	}
 
	function louL(e){
	   e.preventDefault()
	   let idx = $('.lounge_slider li.On').index()
 
	   lou_Slider.removeClass('On');
	   
	   idx--;
	
	if(idx<0){
		idx=lou_Slider.length-1;
	}
	lou_Slider.eq(idx).addClass('On');
	


	}





	// 5. autoplay
	let play = setInterval(trigger, 3000)//3초에 한번 trigger 함수 실행
	let stop;//정지시 사용할 함수


	stopBtn.click(function () {

		if (!$(this).hasClass('stop')) {//만약 stop class를 갖고 있지 않다면 현재 play중임
			$(this).addClass('stop')

			stop = clearInterval(play)//clearInterval로 정지함
		} else {//그밖에 다른 조건은 stopclass를 갖고 있는것 즉 멈춘상태
			$(this).removeClass('stop')
			play = setInterval(trigger, 3000) // 다시 롤링 시작

		}

	})



	//4. 자동으로 돌아가게 하는 함수
	function trigger() {
		rightBtn.click()
	}

})