const $board = document.querySelector('.board');

$board.addEventListener('click', e => {
    if(e.target.className === 'card') {
        [...$board.children].forEach(item => {
            item.classList.remove('active');
            item.style.flexGrow = '0';
        })
        e.target.style.flexGrow = '1';
        e.target.classList.toggle('active');



        setTimeout(() => {
            [...$board.children].forEach(item => {
                if(item === e.target) return;
                item.children[0].style.display = 'none';
            })
        }, 600)


        setTimeout(() => {
            [...$board.children].forEach(item => {
                if(item === e.target) return;
                item.style.display = 'none';
            })
        }, 1000)
    }

    if(e.target.className === 'btn') {
        e.target.parentNode.parentNode.classList.remove('active');
        [...$board.children].forEach(item => {
            item.style.flexGrow = '';
        })

        setTimeout(() => {
            [...$board.children].forEach(item => {
                item.style.display = 'inline-block';
                item.children[0].style.display = 'inline-block';

            })
        }, 100)
        
    }
});