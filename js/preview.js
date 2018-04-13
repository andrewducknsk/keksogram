'use strict';

(function() {

//-- показ галлереи

    var galleryClose = document.querySelector('.gallery-overlay-close');

    window.addEventPicture = function () {

        var picture = document.querySelectorAll('.picture', 'a');

        for ( var i = 0; i < picture.length; i++) {
            picture[i].addEventListener('click', function (evt) {
                evt.preventDefault();
                window.galleryImageRender(evt);
                window.galleryOverlay.classList.remove('hidden');
            }, false);
        }
    };


    galleryClose.addEventListener('click', function (evt) {
        evt.preventDefault();
        window.galleryOverlay.classList.add('hidden');
    });

}());