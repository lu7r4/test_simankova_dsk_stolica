// горизонтальный скролл
let buttons = document.querySelectorAll('.scroll__select_item');

buttons.forEach(button => {
button.addEventListener('click', function () {
    buttons.forEach(btn => btn.classList.remove('product_active'));
    this.classList.add('product_active');
});
});
// слайдер
let btn1 = document.querySelector('.slider__item_1');
let btn2 = document.querySelector('.slider__item_2');
let btn3 = document.querySelector('.slider__item_3');
let btn4 = document.querySelector('.slider__item_4');
let btn5 = document.querySelector('.slider__item_5');
let btn6 = document.querySelector('.slider__item_6');

let slide = document.querySelector('.slider__image');

btn1.addEventListener('click', ()=> {
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    btn5.classList.remove('active');
    btn6.classList.remove('active');
    btn1.classList.add('active');

    slide.classList.remove('active_img_2');
    slide.classList.remove('active_img_3');
    slide.classList.remove('active_img_4');
    slide.classList.remove('active_img_5');
    slide.classList.remove('active_img_6');

    slide.classList.add('active_img_1');
})

btn2.addEventListener('click', ()=> {
    btn1.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    btn5.classList.remove('active');
    btn6.classList.remove('active');

    btn2.classList.add('active');

    slide.classList.remove('active_img_1');
    slide.classList.remove('active_img_3');
    slide.classList.remove('active_img_4');
    slide.classList.remove('active_img_5');
    slide.classList.remove('active_img_6');

    slide.classList.add('active_img_2');
})

btn3.addEventListener('click', ()=> {
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn4.classList.remove('active');
    btn5.classList.remove('active');
    btn6.classList.remove('active');

    btn3.classList.add('active');


    slide.classList.remove('active_img_1');
    slide.classList.remove('active_img_2');
    slide.classList.remove('active_img_4');
    slide.classList.remove('active_img_5');
    slide.classList.remove('active_img_6');

    slide.classList.add('active_img_3');
})

btn4.addEventListener('click', ()=> {
    btn1.classList.remove('active');
    btn3.classList.remove('active');
    btn2.classList.remove('active');
    btn5.classList.remove('active');
    btn6.classList.remove('active');

    btn4.classList.add('active');

    slide.classList.remove('active_img_1');
    slide.classList.remove('active_img_3');
    slide.classList.remove('active_img_2');
    slide.classList.remove('active_img_5');
    slide.classList.remove('active_img_6');

    slide.classList.add('active_img_4');
})

btn5.addEventListener('click', ()=> {
    btn1.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    btn2.classList.remove('active');
    btn6.classList.remove('active');

    btn5.classList.add('active');

    slide.classList.remove('active_img_1');
    slide.classList.remove('active_img_3');
    slide.classList.remove('active_img_4');
    slide.classList.remove('active_img_2');
    slide.classList.remove('active_img_6');

    slide.classList.add('active_img_5');
})

btn6.addEventListener('click', ()=> {
    btn1.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
    btn5.classList.remove('active');
    btn2.classList.remove('active');

    btn6.classList.add('active');


    slide.classList.remove('active_img_1');
    slide.classList.remove('active_img_3');
    slide.classList.remove('active_img_4');
    slide.classList.remove('active_img_5');
    slide.classList.remove('active_img_2');

    slide.classList.add('active_img_6');
})



