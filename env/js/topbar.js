// document.getElementsByClassName('top-hide')[0].addEventListener('click',topHide());
// document.getElementsByClassName('top-show')[0].addEventListener('click',topShow());
function taskBarSettings(){
    if (localStorage['top-bar-show'] == '0'){
        topHide();
        console.log('Hided')
    } else {
        topShow();
        console.log('not hided')
    };
}
function topHide(){
    var elements = document.getElementsByClassName('top-list');
    for (let i = 0;i < elements.length; i++){
        elements[i].style.display = 'none';
    }
    document.getElementsByClassName('top-show')[0].style.display = 'inline';
    document.getElementsByClassName('top-show')[0].style['margin-left'] = 'auto';
    document.getElementsByClassName('top-hide')[0].style.display = 'none';
    document.getElementsByClassName('top-container')[0].style.position = 'fixed';
    localStorage.setItem('top-bar-show',0);
};

function topShow(){
    var elements = document.getElementsByClassName('top-list');
    for (let i = 0;i < elements.length; i++){
        elements[i].style.display = 'inline';
    }
    document.getElementsByClassName('top-show')[0].style.display = 'none';
    document.getElementsByClassName('top-show')[0].style['margin-left'] = '0%';
    document.getElementsByClassName('top-hide')[0].style.display = 'inline';
    document.getElementsByClassName('top-container')[0].style.position =  'unset';
    localStorage.setItem('top-bar-show',1);
}
