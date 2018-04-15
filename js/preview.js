'use strict';

//-- показ галлереи
(function() {

    // нахождение кнопки закрытия галлереи
    var galleryCloseBtn = document.querySelector('.gallery-overlay-close');

    // функция добавления обработчиков к элементам в контейнере
    window.addEventPicture = function () {

        // нахождение всех элементов контейнера
        window.picture = document.querySelectorAll('.picture', 'a');

        // перебор массива со всеми элементами контейнера
        window.picture.forEach(function (value, i) {

            picture[i].addEventListener('click', function (ev) {

                ev.preventDefault();
                window.changeDataGallery(ev);
                window.galleryOverlay.classList.remove('hidden');
            });
        })
    };

    // функция закрытия галлереи
    var galleryClose = function (ev) {

        ev.preventDefault();
        window.galleryOverlay.classList.add('hidden');
    };

    // добавление обработчика для закрытия галлереи
    galleryCloseBtn.addEventListener('click', galleryClose);
}());