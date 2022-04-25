const $menu = document.querySelector('.menu');

$menu.addEventListener('click', e => {
    [...$menu.children].forEach((item, index) => {
        item.style.backgroundColor = "";

        if(item !== e.target) return;

        item.style.backgroundColor = "grey";

        if(index === 0) {
            document.querySelector('.board').style.transform = "translateX(0px)";
        } else if(index === 1) {
            document.querySelector('.board').style.transform = "translateX(-870px)";
        } else{
            document.querySelector('.board').style.transform = "translateX(-1740px)";
        }
    });
});