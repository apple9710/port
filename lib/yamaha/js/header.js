$(function(){

		// 변수 정의
		// 1-1 header left select leanguage
		const langBtn = $('.lang_btn');
		const languageWrap = $('.select_language')

		// 2-1 header search btn 
		const body = $('body');
		const searchBtn = $('.header_link a.h_open_search');
		const searchWrap = $('.search_container');
		const searchBg =$('.top_search_bg');
		const searchClose=$('.sch_close');
		let open = false;

		// 3-1 desktop gnb
		const gnb = $('.gnb');
		const gnbDepth1 = $('.gnb_d1_btn');
		const gnbDepth2 = $('.gnb_depth2');



		// 3-2 desktop gnb mouseenter

  gnbDepth1.mouseenter(function(e){
			e.preventDefault()


			pc_Nav_Reset()


			if(
				!$(this).parent('li').hasClass('no_sub') &&
				$(this).hasClass('gnb_d1_btn')
			){
				gnb.addClass('is_Active')
				$(this).siblings(gnbDepth2).delay(200).fadeIn(100)
			}


	
		})



		// 3-3 desktop gnb reset 함수
		function pc_Nav_Reset(){
			gnbDepth2.fadeOut(0);
			gnb.removeClass('is_Active')
		}



		// 3-4 desktop gnb mouse leave
		gnbDepth2.mouseleave(function(){
			setTimeout(pc_Nav_Reset,1000) //1초 뒤에 실행
		})


		// 3-5 화면 scroll resize
		$(window).on('resize scroll',function(){
			pc_Nav_Reset()
			s_Close()
			lang_Reset()
		})
















		// 2-2 header search btn click

		searchBtn.click(function(e){
			e.preventDefault();
			if(!open){
				s_Open()

			}
			else{
				s_Close()
			}


		})

  // 2-3 search close btn click
		searchClose.click(function(){
			s_Close()
		})

  // 2-4 search bg click

		searchBg.click(function(){
			s_Close()
		})



		// 2-5 header search open /close 함수 

		function s_Open(){
			searchBtn.addClass('close')
			body.addClass('searchAct')
			searchBg.fadeIn(100)
			searchWrap.slideDown(300)
			open=true;

			lang_Reset()
		}
		function s_Close(){
			searchBtn.removeClass('close')
			body.removeClass('searchAct')
			searchBg.fadeOut(100)
			searchWrap.slideUp(300)
			open=false;
		}















		// 1-2 header left select leanguage click
  langBtn.click(function(){
			languageWrap.toggleClass('show')
		})
		// 1-2 header left select leanguage reset
		
		function lang_Reset(){
			languageWrap.removeClass('show')

		}






		//4 mobile nav

		const mobNavBtn= $('.mob_nav_btn')
		const mobCloseBtn = $('.m_header .close')
		const mobListBtn = $('.m_list_t_wrap')


// 4-2 mobile btn click시
		mobNavBtn.click(function(e){
			e.preventDefault()
			body.addClass('mobNav_Open')
		})
// 4-3 close btn click
		mobCloseBtn.click(function(e){
			e.preventDefault()
			body.removeClass('mobNav_Open')
		})

// 4-4 mobile sub 서브메뉴 click
		mobListBtn.click(function(){


 // class 유무를 확인
	const isClass=$(this).parent('li').hasClass('isActive')
console.log(isClass);


// class가 있다면 이미 열려져 있는 상태에서 한번 더 누르는 것이니까 닫아준다.
			if(isClass){

				$(this).parent('li').removeClass('isActive');
				$(this).siblings('dl').slideUp()
			}

  // class가 없다면 기본에 열려져 있는 서브 목록은 닫아줘야 함. 현재클릭한 제목의 상위 li에 Class를 달아주며, 
  // siblings: li와 같은 level의 li는 Class를 삭제해준다.
  // 또한 그 li에서 열려있는 dl을 찾아 slideUp해준다.

			else{

				$(this).parent('li').addClass('isActive').siblings('li').removeClass('isActive').find('dl').slideUp()
				$(this).siblings('dl').slideDown()



			}




		})









})