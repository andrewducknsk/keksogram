'use strict';

//-- отрисовка галлереи
(function () {

    // нахождение галлереи
    window.galleryOverlay = document.querySelector('.gallery-overlay');

    // нахождение изображения, лайков и комментариев при включенной галлереи
    var galleryOverlayImg = galleryOverlay.querySelector('.gallery-overlay-image', 'img'),
        galleryOverlayLikes = galleryOverlay.querySelector('.likes-count'),
        galleryOverlayComments = galleryOverlay.querySelector('.comments-count');

    // функция замены src, количества лайков и коменнтариев
    window.changeDataGallery = function (ev) {

        galleryOverlayImg.src = ev.target.src;
        galleryOverlayLikes.textContent = ev.target.nextElementSibling.children[1].innerText;
        galleryOverlayComments.textContent = ev.target.nextElementSibling.children["0"].innerText;
    };

    // отрисока фотографий, лайков и комментариев при клике на фотографию
    window.pictureContent.addEventListener('click', changeDataGallery);

}());

