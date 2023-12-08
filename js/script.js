$(function(){


    gsap.registerPlugin(ScrollTrigger);
    const sec02txt = $('#sec02 .sec02_txt')
    const sec02mockUp = $('#sec02 .mockup')



    const sec03Mockup = $('#sec03 .mockup')
    const sec03Bg = $('#sec03 .bg_bar');
    const sec03txt = $('.sec03_txt')
    const sec04Bgtxt = $('#sec04 .bg .bg_txt')
    const sec04txt = $ ( '#sec04 .sec04_txt')
    const sec05listTxt = $ ( '#sec05 .tab_menu .list_menu li')
    const sec05ImgBox = $ ('#sec05 .tab_menu .img_box ul')

    const sec07txtBox = $('#sec07 .sec07txt_box_txt')


    let section = document.getElementsByTagName('section');
    let link=$('.link');
    let navBtn = document.querySelectorAll('nav li')
    let pageNum =0;
    let totalNum = section.length;
    
    link.smoothScroll(300)

//  link.smoothScroll(600)


 gsap.fromTo("#sec01 .under1", { opacity: 1 }, {
    y: 200,
   
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scroll",
        start: "0% top",
        end: "60% 100%",
        scrub: 3,
    }
})


gsap.fromTo("#sec01 .under2", { opacity: 1 }, {
    y: 100,
   
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scroll",
        start: "0% top",
        end: "60% 100%",
        scrub: 4,
    }
})



    //   scroll 
    window.addEventListener('scroll',function(event){
        let scroll = this.scrollY || window.pageYOffset//ie;
        let outHeight = window.outerHeight/3;
            // 0section
            if(scroll > section[0].offsetTop - outHeight && scroll < section[0].offsetTop - outHeight +section[0].offsetHeight){
                   pageNum =0;
                   sec0()
                }
                // 1section
                if(scroll > section[1].offsetTop - outHeight && scroll < section[1].offsetTop - outHeight +section[1].offsetHeight){
                    pageNum =1;
                    sec1()
                }
                // 2section
                if(scroll > section[2].offsetTop - outHeight && scroll < section[2].offsetTop - outHeight +section[2].offsetHeight){
                    pageNum =2;
                    sec2()
                }
                // 3section
                if(scroll > section[3].offsetTop - outHeight && scroll < section[3].offsetTop - outHeight +section[3].offsetHeight){
                    pageNum =3;

                    sec3()
                }
                // 4section
                if(scroll > section[4].offsetTop - outHeight && scroll < section[4].offsetTop - outHeight +section[4].offsetHeight){
                    pageNum =4;

                    sec4()
                }
                // 5section
                if(scroll > section[5].offsetTop - outHeight && scroll < section[5].offsetTop - outHeight +section[5].offsetHeight){
                    pageNum =5;

                    sec5()
                }
                // 6section
                if(scroll > section[6].offsetTop - outHeight && scroll < section[6].offsetTop - outHeight +section[6].offsetHeight){
                    pageNum =6;
                    sec6()
                }

        pageChangeFunc()
    })




    function pageChangeFunc(){
        for(let i =0;i<totalNum;i++){
            section[i].classList.remove('active');
            navBtn[i].classList.remove('active')
        }
        section[pageNum].classList.add('active');
        navBtn[pageNum].classList.add('active')
    }
    pageChangeFunc()
    sec0()
    opening_layer_txt();
    setTimeout(opening_layer,2000);
 
    function opening_layer_txt(){
       $('#opening p').animate({'bottom':'0'},1000);
    }
    function opening_layer(){
       $('#opening').animate({'top':'-100%'},2000);
    }



//    section 함수

    function sec0(){



        gsap.to('#sec01 .rel_box .compass_img .niddle',{
            rotate:180,
            yoyo:true,
            duration:3,
            repeat:-1
        })


        gsap.to('#sec01 .rel_box .sec_tit .compass',{
            y:0,
            opacity:1,
            stagger:0.3,
            duration:2
        })
        gsap.to('#sec01 .rel_box .sec_tit .diary',{
            y:0,
            opacity:1,
            stagger:0.3,
            duration:2
        })
        
    }
    function sec1(){

        gsap.to ('#sec02 .bg_shape .line li',{
            x:0,
            stagger:0.3,
            duration:4
        })
        
        


        anime({
            targets:'.music_mark path',//타깃
            strokeDashoffset:[anime.setDashoffset,0],//없는 상태에서 시작하고 싶으면 배열로
            duration:3000,//시간
            easing:'easeInOutSine',//easing 함수
            loop:false,//무한 돌기
            direction:'alternate',//방향 거꾸로 다시 돌기
            delay:function(el,i){return i*550}
        })
        const tl01 = anime.timeline({
            targets:'.white_mark path',//타깃
            })
        const tl02 = anime.timeline({
            targets:'.blue_mark path',//타깃
        })
        sec02mockUp.delay(3500).transition({
            'opacity':'1'
        },1000)
        sec02txt.delay(3500).transition({
            'opacity':'1'
        },1000)

        tl01.add({
            delay:2,
            strokeDashoffset:[anime.setDashoffset,0],//없는 상태에서 시작하고 싶으면 배열로
            duration:3000,//시간
            easing:'easeInOutSine',//easing 함수
            loop:false,//무한 돌기
            direction:'alternate',//방향 거꾸로 다시 돌기
            fill:'rgba(255, 255, 255,0)',
            
            delay:function(el,i){return i*550},
        })
        tl01.add({
            // targets:'.music_mark path',//타깃
            duration:1000,//시간
            fill:'rgba(255, 255, 255,0.5)',
            
        })
        tl02.add({
            delay:2,
            strokeDashoffset:[anime.setDashoffset,0],//없는 상태에서 시작하고 싶으면 배열로
            duration:3300,//시간
            easing:'easeInOutSine',//easing 함수
            loop:false,//무한 돌기
            direction:'alternate',//방향 거꾸로 다시 돌기
            fill:'rgba(22, 16, 114, 0)',
            
            delay:function(el,i){return i*550},
            
        })

        tl02.add({
            // targets:'.music_mark path',//타깃
            duration:2000,//시간
            fill:'rgba(22, 16, 114, 0.5)',
            
        })

    }
    function sec2(){

        const tl = gsap.timeline({
            duration:1
        })
        
        tl.to(sec03Bg,{
            width:'80%',
            
        })
        // tl.to(sec03Mockup,{
        //     opacity:1,
        //     duration:.7
        // })


        sec03Mockup.delay(1700).transition({
            'opacity':'1',
        },1000)

        sec03txt.delay(1700).transition({
            'opacity':'1'
        },1000)

    }
    function sec3(){

        anime({
            targets:'#sec04 .bg .sec04_leave path',//타깃
            strokeDashoffset:[anime.setDashoffset,0],//없는 상태에서 시작하고 싶으면 배열로
            duration:5000,//시간
            easing:'easeInOutSine',//easing 함수
            loop:false,//무한 돌기
            direction:'alternate',//방향 거꾸로 다시 돌기
            delay:function(el,i){return i*550}
        })

        const tl03 = anime.timeline({
            targets:'#sec04 .bg .sec04_leave path',//타깃
            })

            tl03.add({
                delay:2,
                strokeDashoffset:[anime.setDashoffset,0],//없는 상태에서 시작하고 싶으면 배열로
                duration:2000,//시간
                easing:'easeInOutSine',//easing 함수
                loop:false,//무한 돌기
                direction:'alternate',//방향 거꾸로 다시 돌기
                fill:'rgba(80, 133, 101,0)',
                
                delay:function(el,i){return i*550},
            })
            tl03.add({
                // targets:'.music_mark path',//타깃
                duration:1000,//시간
                fill:'rgba(80, 133, 101,1)',
                
            })
            sec04Bgtxt.delay(2000).transition({
                'right':'-60%',
                'opacity':'1',
            },1000)
            gsap.to('#sec04 .rel_box .mockup .img_wrap',{
                delay:3.3,
                opacity:1,
                duration:1,
                stagger:0.8,

            })
            gsap.to('#sec04 .bg img',{
                delay:3.3,
                opacity:1,
                duration:1,
                stagger:0.8,
            })

            sec04txt.delay(3000).transition({
                'opacity':'1',
            })

    }
    function sec4(){
        

        

        anime({
            targets:'#sec05 .graphic path',//타깃
            strokeDashoffset:[anime.setDashoffset,0],//없는 상태에서 시작하고 싶으면 배열로
            duration:8000,//시간
            easing:'easeInOutSine',//easing 함수
            loop:false,//무한 돌기
            direction:'alternate',//방향 거꾸로 다시 돌기
            delay:function(el,i){return i*550}
        })
        sec05listTxt.click(function () {

            const idx = $(this).index()

    
            sec05listTxt.removeClass('active')
            sec05ImgBox.removeClass('On')
    
    
            $(this).addClass('active')
            sec05ImgBox.eq(idx).addClass('On')
    
    
        })

        // 
    }
    function sec5(){
        anime({
            targets:'#sec06 .sec06_bg .bg_text text',//타깃
            strokeDashoffset:[anime.setDashoffset,0],//없는 상태에서 시작하고 싶으면 배열로
            duration:5000,//시간
            easing:'easeInOutSine',//easing 함수
            loop:true,//무한 돌기
            direction:'alternate',//방향 거꾸로 다시 돌기
            delay:function(el,i){return i*550}
        })

    }
    function sec6(){
        

        const tl04 = gsap.timeline({
            duration:.5,//타깃
            })

            tl04.to('#sec07 .sec07_box_txt1 .box_under',{
                scale:2,
                opacity:1
            })
            tl04.to('#sec07 .sec07_box_txt1 .box_line',{
                height:'125px',
            })
            tl04.to('#sec07 .sec07_box_txt1 .sec07_txt, #sec07 .sec07_box_txt1 .txt_box', {
                opacity:1,
            })
            tl04.to('#sec07 .sec07_box_txt2 .box_under',{
                opacity:1,
                scale:2,
            })
            tl04.to('#sec07 .sec07_box_txt2 .box_line',{
                height:'125px',
            })
            tl04.to('#sec07 .sec07_box_txt2 .sec07_txt, #sec07 .sec07_box_txt2 .txt_box', {
                opacity:1,
            })
            tl04.to('#sec07 .skill_box .box_up',{
                opacity:1,
            })
            tl04.to('#sec07 .skill_box .box_line',{
                height:'125px',
            })
            tl04.to('#sec07 .skill_box .title, #sec07 .skill_box .skill_list,#sec07 .skill_box .txt_box', {
                opacity:1,
            })





    }
    var img = $('#sec07 .sec07_bg .rotate_niddle');
    var offset = img.offset();
    if(img.length > 0){
    
        function mouse(evt){
            var center_x = (offset.left) + (img.width()/2);
            var center_y = (offset.top) + (img.height()/2);
            var mouse_x = evt.pageX; var mouse_y = evt.pageY;
            var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
            var degree = (radians * (180 / Math.PI) * -1) + 180; 


            
            img.css('-moz-transform', 'rotate('+degree+'deg)');
            img.css('-webkit-transform', 'rotate('+degree+'deg)');
            img.css('-o-transform', 'rotate('+degree+'deg)');
            img.css('-ms-transform', 'rotate('+degree+'deg)');
        }
        
        $(document).mousemove(mouse);
    }
    
    


    function sec7(){
       

    }

    let swiper_sec2 = new Swiper('.sec06_slider',{
      

        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
     },
     loop:true
       });

})

