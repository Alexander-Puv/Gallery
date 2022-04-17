const sliderMain = new Swiper('.slider_main', {
    centeredSlides: true,
    mousewheel: true,
    grabCursor: true,
    //freeMode: true,
    //loop: true,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView : 1
        },
        680: {
            slidesPerView : 1.5
        },
        1550: {
            slidesPerView : 1.7
        }
    }
});

const sliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    slidesPerView : 1
});

sliderMain.controller.control = sliderBg;

const mainSlide = $('.slider_main .slider__img');
const mainSlideImg = $('.slider_main .slider__item img');

setTimeout(() => {
    for (let i = 0; i < mainSlide.length; i++) {
        //mainSlide[i].style.width = mainSlideImg[i].offsetWidth + 'px';
        mainSlide[i].style.height = mainSlideImg[i].offsetHeight + 'px';
    }
}, 100);

if(mainSlide.width() >= $(window).width() || mainSlide.height() >= $(window).height()) {
    mainSlide.css('transform', 'scale(1)');
    mainSlideImg.css('max-height', '100vh');
}

$('input').on('click', function () {
    if($(this).is(':checked')) {
        $(this).parent().parent().addClass('selected');
    } else {
        $(this).parent().parent().removeClass('selected');
    }
});

//$('.slider__img').each(function() {
//    $(this).on('click', function() {
//        $(this).toggleClass('selected');
//    });
//});