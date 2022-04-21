const $btn = document.getElementById('btn');

$btn.addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById('btn').style.opacity = "0";
        document.querySelector('.box').style.transform = "translateY(-200px) scaleY(-1)";
    }, 100);

    setTimeout(() => {
        document.querySelector('.letter_top').style.transform = "translateY(-200px)";
    }, 1200);

    setTimeout(() => {
        document.querySelector('.letter_bottom').style.transform = "translateY(400px)";
    }, 2400);

});