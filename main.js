//console.log('Ciao');

$(document).ready(function() {

    // REFERENZE ()
    var nextBtn = $('.next');
    var prevBtn = $('.prev');

    // navigare tra le foto con il mouse
    // next
    // (chi vogliamo), (l'evento) (f. vuota)
    nextBtn.click(function(){
       nextPrevSlide('next');
    })
    // prev
    prevBtn.click(function(){
        nextPrevSlide('prev');
    })


// Chiusara del $document
})  

/***************************************************
 * FUNZIONI Utili
 * ************************************************* */

/***
 * navi tra le slide
 * (direzione)
 * nextPrevSlide lo prendiamo in riferimento a sopra
 */ 

function nextPrevSlide(direction) {
    console.log(direction);
    //                   prendi per specificità sia il papà che la img, e poi la classe 
    var activeImage = $('images img.active');
    //                   prendi per specificità 
    var activeCircle = $('.nav i.active');

    // reset
    activeImage.removeClass('active');
    activeCircle.removeClass('active');


    // next 
    if(direction === 'next') {
        if(activeImage.hasClass('last')) {    // se fa questo
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        } else {
            activeImage.next('img').addClass('active');
            activeCircle.next('i').addClass('active');
        }

       // activeImage.next('img').addClass('active');
    }

    // prev
    else if(direction  === 'prev'){
        if(activeImage.hasClass('first')){
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        } else {
            activeImage.prev('img').addClass('active');
            activeCircle.prev('i').addClass('active');
        }
    } 
}