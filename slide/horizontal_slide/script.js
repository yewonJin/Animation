const $btn_back = document.querySelector('.btn.back');
const $btn_next = document.querySelector('.btn.next');

let position = 0;

$btn_back.addEventListener('click', () => {
    document.querySelector('.board').style.transform = `translateX(${position += 500}px)`;
})

$btn_next.addEventListener('click', () => {
    document.querySelector('.board').style.transform = `translateX(${position += -500}px)`;
})