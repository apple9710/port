$(document).ready(function () {

	// 실행문

	//0. 키워드 정의
	const sec01Img = $('.sec01_img')
	const sec01logo = $('.sec01_logo_img')
	const sec02TopImg = $('.sec02_sub_img.top_img01')
	const sec02MainImg = $('.sec02_img')
	const sec02SubImg = $('.sec02_sub_img01')
	const sec03Img = $('#sec03 .sec03_img li')
	const sec04Img = $('#sec04 .sec04_img li')
	const sec05Img01 = $('#sec05 .sec05_img01')
	const sec05Img02 = $('#sec05 .sec05_img02')
	const sec07Img = $('#sec07 .sec07_img')
	const sec07Cloud= $('#sec07 .cloud')

	// 1-1.scroll 변수 값에 대한 정의
	const scrollBody = $('#project01'); //부모 스크롤 엘리먼트
	let content = scrollBody.find('section') //부모에서 section tag를 찾아냄
	const navList = $('aside ul li')


	//1-2 스크롤 할때 변해야 할 값들
	let winScrollTop; //스크롤 할때 높이값을 담을 변수
	let headerHeight = $('header').height()


	//2.각 섹션의 시작하는 값을 구해줄 변수 생성
	const sec1Top = $('#sec01').offset().top + headerHeight;
	const sec2Top = $('#sec02').offset().top + headerHeight;
	const sec3Top = $('#sec03').offset().top + headerHeight;
	const sec4Top = $('#sec04').offset().top + headerHeight;
	const sec5Top = $('#sec05').offset().top + headerHeight;
	const sec6Top = $('#sec06').offset().top + headerHeight;
	const sec7Top = $('#sec07').offset().top + headerHeight;
	const sec8Top = $('#sec08').offset().top + headerHeight;


	// 3. 최초 실행함수 만들기
	function init() {
		motion() //4.motion함수 호출
	}

	// 4 init함수 호출
	init()
	// 5.화면 스크롤시 init함수 호출
	$(window).scroll(init)

	// 6.motion 함수
	function motion() {
		setProperty() //스크롤할때 변해야 할 높이값들 모음
		changeSection() //스크롤 조건이 들어가는 함수
	}


	// 7. 스크롤할때 변해야 할 값들의 변수를 포함 한 함수.

	function setProperty() {
		winScrollTop = $(window).scrollTop();
	}

	// 8.현재의 섹션에 왔을때 불이 켜지게 하는 함수 
	function setContent(index) {

		content.removeClass('active')
		navList.removeClass('active')

		content.eq(index - 1).addClass('active')
		navList.eq(index - 1).addClass('active')

	}


	// 9..changeSection 함수 scoll시 현재의 높이값이 각 섹션의 높이값과 비교해서 조건에 맞으면 실행하게 하는 함수 
	function changeSection() {

		if (winScrollTop < sec1Top) {
			setContent(1)
			sec01()
		} else if (winScrollTop >= sec1Top && winScrollTop < sec2Top) {
			setContent(2)
			sec02()
		} else if (winScrollTop >= sec1Top && winScrollTop < sec3Top) {
			setContent(3)
			sec03()
		} else if (winScrollTop >= sec1Top && winScrollTop < sec4Top) {
			setContent(4)
			sec04()
		} else if (winScrollTop >= sec1Top && winScrollTop < sec5Top) {
			setContent(5)
			sec05()
		} else if (winScrollTop >= sec1Top && winScrollTop < sec6Top) {
			setContent(6)
			sec06()
		} else if (winScrollTop >= sec1Top && winScrollTop < sec7Top) {
			setContent(7)
			sec07()
		} else if (winScrollTop >= sec1Top && winScrollTop < sec8Top) {
			setContent(8)
			sec08()
		}




	}

	// 윗부분 건드리지 말것


	//각 섹션별 애니메이션 넣기


	// 1.section 함수 모음




	// 1
	function sec01() {

        sec01Img.transition({
            'opacity': '1',
            'bottom': '0px'
        }, 1000)
		sec01logo.transition({
			'opacity':'1'
		},1000)

	}
	// 2
	function sec02() {
		sec02MainImg.transition({
			'opacity':'1',
			'left':'50%'
		},1000)
		

		sec02SubImg.transition(
		
			{'opacity':'1'},1000)


		// sec02TopImg.click(function(){
		// 	sec02TopImg.eq(0).addClass('act')
		// })




	}

	// 3
	function sec03() {
		sec03Img.addClass('open')
	}
	// 4
	function sec04() {
		sec04Img.eq(0).transition({'opacity':'1'},1000)
		sec04Img.eq(1).delay(400).transition({'opacity':'1'},1000)
		sec04Img.eq(2).delay(800).transition({'opacity':'1'},1000)
		sec04Img.eq(3).delay(1200).transition({'opacity':'1'},1000)

	}
	// 5
	function sec05() {
		sec05Img01.transition({
			'opacity':'1',
			'right':'50%'
		},1000)
		sec05Img02.delay(300).transition({
			'opacity':'1'
		})
	}
	// 6
	function sec06() {


	}
	//7
	function sec07() {
        sec07Img.transition({
            'opacity': '1',
            'bottom': '0px'
        }, 1000)

		sec07Cloud.addClass('active')
	}
	// 8
	function sec08() {

	}

	// 9
	function sec09() {

	}

	let swiper_sec06 = new Swiper('.sec06_slider', {
		slidesPerView: 1,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next.right',
			prevEl: '.swiper-button-prev.left'
		},
		centeredSlides: true,
		pagination: {
			el: "#sec06 .swiper-pagination",
		},
	})

})