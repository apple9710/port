

$(function () {


	let recomm_list = new Swiper('.recomm_list_wrap.swiper-container ',{
      loop:true,//8다음 1나오게
      navigation:{//좌우버튼
         nextEl:'.swiper-button-next.recomm.arrow',
         prevEl:'.swiper-button-prev.recomm.arrow',
      },
      pagination:{
         el:'.swiper-pagination.recomm',
         type:'progressbar'
      },

      slidesPerView:2,
      slidesPerGroup:2
   })
   
   
 

   //  season slider

   const leftBtn = $('.seasonArr.left.arrow')
   const rightBtn = $('.seasonArr.right.arrow')
   const ss_Slider = $('.season_slider>li')
   const ss_Progress = $('.season_pro.progress .pg_inner span')
   const ss_stopBtn = $('.season_pro .control')
   const ss_Distance = 100 / ss_Slider.length


   // let play = setInterval(function () {
   //    rightBtn.click()
   // }, 3000)

   // 정지버튼 
   ss_stopBtn.click(function () {
      if (!$(this).hasClass('stop')) {
         $(this).addClass('stop')
         stop = clearInterval(play)
      } else  {
         $(this).removeClass('stop')
         play = setInterval(function () {
            rightBtn.click()
         }, 3000)
      }

   })



   // 오른쪽버튼
   rightBtn.click(right)
   // 왼쪽 버튼
   leftBtn.click(left)

   // 오른쪽버튼 클릭함수
   function right(e) {
      e.preventDefault();
      let idx = $('.season_slider>li.On').index()
      ss_Slider.removeClass('On')
      idx++
      if (idx > ss_Slider.length - 1) {
         idx = 0;
      }
      ss_Slider.eq(idx).addClass('On')
      ss_Progress.animate({
         width: (idx + 1) * ss_Distance + '%'
      })

   }
   // 왼쪽버튼 클릭함수
   function left(e) {
      e.preventDefault();
      let idx = $('.season_slider>li.On').index()
      ss_Slider.removeClass('On')
      idx--
      if (idx < 0) {
         idx = ss_Slider.length - 1;
      }
      ss_Slider.eq(idx).addClass('On')
      ss_Progress.animate({
         width: (idx + 1) * ss_Distance + '%'
      })

   }
// lounge slider

   const louL_Btn = $('.loungeBtn.left')
   const louR_Btn = $('.loungeBtn.right')
   const lou_Slider = $('.lounge_slider li')


   louL_Btn.click(louL)
   louR_Btn.click(louR)


   function louL(e){
      e.preventDefault()


   }

   function louR(e){
      e.preventDefault()



   }


// flagship slider
const flag_leftBtn = $('.flagBtn.left')
const flag_rightBtn = $('.flagBtn.right')
const flag_Slider = $('.flag_slider li')

const flag_Progress = $('.flag .pg_inner span')
const flag_Distance = 100/flag_Slider.length



flag_rightBtn.click(flag_R)
flag_leftBtn.click(flag_L)


function flag_R(e){
   e.preventDefault()
   // 0,1,2
   let idx = $('.flag_slider li.On').index()

   flag_Slider.removeClass('On');
   
   idx++;

   if(idx>flag_Slider.length-1){
      idx=0;
   }
   flag_Slider.eq(idx).addClass('On');
   
   flag_Progress.animate({width:(idx+1)*flag_Distance+'%'},500)
}
function flag_L(e){
   e.preventDefault()
   // 0,1,2
   let idx = $('.flag_slider li.On').index()

   flag_Slider.removeClass('On');
   
   idx--;

   if(idx<0){
      idx=flag_Slider.length-1;
   }
   flag_Slider.eq(idx).addClass('On');
   
   flag_Progress.animate({width:(idx+1)*flag_Distance+'%'},500)
}


})


