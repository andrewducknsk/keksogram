'use strict';

(function() {

//-- показ галлереи

    var picture = document.querySelectorAll('.picture', 'a');
    var galleryClose = document.querySelector('.gallery-overlay-close');

    var addEventPicture = function () {

        for ( var i = 0; i < picture.length; i++) {
            picture[i].addEventListener('click', function (ev) {
                ev.preventDefault();
                galleryImageRender(ev);
                galleryOverlay.classList.remove('hidden');
            }, false);
        }
    };

    addEventPicture();

    galleryClose.addEventListener('click', function (ev) {
        ev.preventDefault();
        galleryOverlay.classList.add('hidden');
    });

}());