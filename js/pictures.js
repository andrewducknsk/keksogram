'use strict';

//-- галлерея
(function () {

    window.galleryOverlay = document.querySelector('.gallery-overlay');

    window.galleryImageRender = function () {

        var galleryOverlayImg = galleryOverlay.querySelector('.gallery-overlay-image', 'img');
        var galleryOverlayLikes = galleryOverlay.querySelector('.likes-count');
        var galleryOverlayComments = galleryOverlay.querySelector('.comments-count');

        window.pictureContent.addEventListener('click', function (ev) {

            galleryOverlayImg.src = ev.target.src;
            galleryOverlayLikes.textContent = ev.target.nextElementSibling.children[1].innerText;
            galleryOverlayComments.textContent = ev.target.nextElementSibling.children["0"].innerText;
        });

    };

}());

