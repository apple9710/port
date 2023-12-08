$(function(){
	const ani = $('.ani')
				const sec4List = $('.sec4_list > li')
			const sec4Circle = $('.indigator ul li')
			const sec4CircleSpan = $('.indigator ul li span')
			const sec4Gage = $('.indigator .gage')
			const sec4CircleOn = $('.indigator .circle')


	sec4Circle.click(function(){
		const idx = $(this).index()
		console.log(idx)

		sec4Gage.animate({
			width: (idx * 20) + '%'
		})
		sec4CircleOn.animate({
			left: (idx * 20) + '%'
		})

		sec4CircleSpan.removeClass('On')
		sec4List.removeClass('On')

		sec4List.eq(idx).addClass('On')
		sec4CircleSpan.eq(idx).addClass('On')
	
	})

	$(window).on('scroll load',function(){

			// loading이 될때의 사이즈를 적용함
			const header = $('header')//load down
			const visulength = $('.visual').length;
			const visuHeight = $('.visual').outerHeight();
			const headerHeight = header.outerHeight()

			let scrollTop = $(window).scrollTop()


			


		

			header.addClass('load')
			//2
			if(visulength>0){
				if(scrollTop>= visuHeight-headerHeight){
					header.addClass('down')
				}
				else{
					
					header.removeClass('down')
				}


			}

	})

	allMenu()
	visual()//실행
 // visual함수
	function visual(){

		// 1 키워드 정의
		const slider = $('.visual .slider li') //On
		const nav = $('.visu_Nav li')//active
		const sNum = slider.length

		let play = setInterval(visu,5000)//3-2 visu 함수 실행




		first();//2-2 첫번째 함수 실행
	

	//5 nav click event
	nav.click(navClick)


	//5 nav click event
		function navClick(){
			
				let i = $(this).index();
				console.log(i);

				reset()


				slider.eq(i).addClass('On')
				nav.eq(i).addClass('active')

		}

		function first(){//2-1.첫번째 함수

			slider.eq(0).addClass('On')
			nav.eq(0).addClass('active')
			
		}


		// 3 visu 함수
		function visu(){

				let idx = $('.visual .slider li.On').index()//현재 On 이 붙은 순서 알기

				reset()//4.2 reset함수 실행


				idx++;

				if(idx ==sNum){//idx가 slider의 개수와 같아지면
					idx=0;
				}

				slider.eq(idx).addClass('On')
				nav.eq(idx).addClass('active')


		}


		// 4 reset 함수
		function reset(){
			slider.removeClass('On')
			nav.removeClass('active')

		}






	}



	function allMenu(){

		const header = $('.header')//active
		const hBtn = $('.btn_all_menu')
		const mBtn = $('.allMenu>li>span')


  // mobile click

		mBtn.click(function(){
			//class를 갖고 있다면 이미열려있는것들  닫아야 함.
			if($(this).parent('li').hasClass('On')){

				$(this).parent('li').removeClass('On')
				$(this).siblings('ul.depth2').slideUp()


			}
			else{//그밖의 조건은 다 현재 누른것이나 처음 누른것

				// span의 부모 li가 class를 갖고 / li의 동일요소들은 모두 class를 제거하고  그 안에 있는 ul을 찾아 모두 숨김처리한다.
				$(this).parent('li')
				.addClass('On')
				.siblings()
				.removeClass('On')
				.find('ul.depth2')
				.slideUp()
	// 내가 누른 span의 동일 요소 ul  보이게 처리함.
				$(this).siblings('ul.depth2').slideDown()
			}
		})


  // desktop click
		hBtn.click(function(e){
			e.preventDefault();
			
			// header.toggleClass('active')
			
			if(header.hasClass('active')==false){
				
				header.addClass('active')
			}
			else{
				
				header.removeClass('active')
			}


		})


		// window resize

		$(window).on('load resize',function(){//로딩 또는 리사이즈시

			if(window.innerWidth>1100){ //브라우저 가로폭이 1100보다 크다면
				// on class로 제거함.
				mBtn.parent('li').removeClass('On')
				// html 속성중 style을 제거함
				mBtn.siblings('ul.depth2').removeAttr('style')

			}
		})



	}


	$.fn.aniMoving = function () { //사용자 정의 메소드 
		let elementTop = $(this).offset().top; //선택한 요소의 Y축 좌표값
		let elementBottom = elementTop + $(this).outerHeight(); //Y축 좌표값+현재요소의 높이값  

		let viewportTop = $(window).scrollTop(); //화면의 스크롤값

		let viewportBottom = viewportTop + $(window).height(); //스크롤값+화면의 높이

		// 이값들을 사용자정의 함수에 돌려준다
		//현재요소의 하단 끝까지의 높이값 > 화면의 스크롤값 그리고  0.2 그리고 선택요소의 Y좌표값<스크롤값+화면높이


		//영역으로 들어온 상태  + 영역을 벗어난상태를 메소드가 실행되는 곳으로 보내준다.
		return (viewportTop < elementBottom) && (elementTop < viewportBottom);
		// 화면상단이 요소의 끝보다 작다 즉 화면안에 들어온 상태   / 요소의 탑값이 화면의 하단보다 작다 즉 화면 밖으로 벗어난 상태를 함수를 호출한 곳으로 보내준다.
	};



$(window).on('load scroll resize',function(){

			ani.each(function(){

				if ($(this).aniMoving()) {//조건에 들어오면 class 붙이기 
					$(this).addClass('moving');
				}
				else{
					$(this).removeClass('moving')

				}

	})


})




})