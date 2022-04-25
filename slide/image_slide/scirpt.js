const $back = document.querySelector(".back");
const $next = document.querySelector(".next");


var count = 2;

$back.addEventListener('click', () => {
    if(count === 2) return;
    count--;

    document.querySelector('.page').children[1].textContent = `${count-1}/4`
    document.querySelector('.container').children[count+1].style.opacity = "0";    
    document.querySelector('.container').children[count].style.opacity = "1";     
    
    console.log(count);
});

$next.addEventListener('click', () => {
    if(count === 5) return;

    count++;

    document.querySelector('.page').children[1].textContent = `${count-1}/4`
    document.querySelector('.container').children[count-1].style.opacity = "0";    
    document.querySelector('.container').children[count].style.opacity = "1";   
    
    console.log(count);

});