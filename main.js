let cards = document.querySelectorAll('.card');
let iframes = document.querySelectorAll('.iframe');

cards.forEach((item, index) =>{
    item.addEventListener('mouseover', function(){
        let vSrc = iframes[index].dataset.video;
        iframes[index].src = vSrc;
    });
    item.addEventListener('mouseleave', function (){
        iframes[index].src = '';
    });

})