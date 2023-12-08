$(function(){



	const header = $('header')
	const body = $('body');
	const link =$('.link');

	// desktop menu
	const dNavItem= $('.d_Nav_item')
	const dSubList=$('.d_sub_list')

	// mobile menu
	const mobMenu = $('.mob_menu')
	const mSubTit = $('.m_sub_tit')
	const mSubList = $('.m_sub_list')

	// fixed btn
	const fixed =$('.fixed')





	// 메인메뉴에 마우스를 올렸을때
	dNavItem.hover(function(){
		header.addClass('Hover')
		dNavItem.removeClass('act')
		$(this).addClass('act')
	})


	// 서브메뉴에 마우스가 벗어났을때
	dSubList.mouseleave(function(){
		setTimeout(deskTop_reset,1000)//1초뒤에 함수 실행


	})


// 리사이즈나 스크롤을 내리면 모바일 , 데스크탑용 메뉴 모두 reset
	$(window).on('resize scroll',function(){
		deskTop_reset()
		mobileReset()
	})




// resize 함수 desktop
	function deskTop_reset(){
		dNavItem.removeClass('act')
		header.removeClass('Hover')

	}



	// fixed btn scroll
	
		$(window).scroll(function(){
		
		// console.log($(this).scrollTop());	
		
		if($(this).scrollTop() > 300){
			fixed.fadeIn(500)
		}
		else{
			fixed.fadeOut(500)
		}
		
		
	})










// link 부드럽게 이동
	link.smoothScroll(300)


// mobile menu click
	mobMenu.click(mobileClick)


	// mobile click시 서브메뉴 toggle
function mobileClick(){
	body.toggleClass('nonScroll')
	header.toggleClass('mob_Nav')
}

// resize scroll시 초기값으로 reset
function mobileReset(){
	body.removeClass('nonScroll')
	header.removeClass('mob_Nav')
}




	mSubTit.click(function(){
	
  $(this).next(mSubList).slideToggle()

})


})