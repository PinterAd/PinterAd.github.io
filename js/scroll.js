let item = document.querySelector('body');

window.addEventListener('wheel', function(e){
    if(e.deltaY > 0){
        item.scrollLeft += 50;
    } 
    else {
        item.scrollLeft -= 50;
    }
});