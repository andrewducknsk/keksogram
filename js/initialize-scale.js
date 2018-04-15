'use strict';

(function () {

//-- форма ввода маштаба ограничена

    // нахождение контейнера изменения маштаба фотографии;
    // нахождение значения маштаба;
    // нахождение кнопки уменьшения маштаба фотографии;
    // нахождение кнопки увеличения маштаба фотографии;
    var uploadResizeImg = document.querySelector('.upload-resize-controls'),
        uploadResizeImgValue = document.querySelector('.upload-resize-controls-value'),
        uploadResizeImgValueDecBtn = document.querySelector('.upload-resize-controls-button-dec'),
        uploadResizeImgValueIncBtn = document.querySelector('.upload-resize-controls-button-inc');

    // функция изменения маштаба фотографии от 25% до 100%
    var resizeImg = function () {

        // обработчик на весь контейнер для ловли кликов на кнопках увеличения и уменьшения маштаба фотографии
        uploadResizeImg.addEventListener('click', function (ev) {

            // шаг изменения;
            // получение начального числа из значения атрибута value;
            var stepResizeImg = 25;
            var valueNumber = parseInt(uploadResizeImgValue.getAttribute('value'));

            // уменьшение маштаба;
            // увеличение маштаба;
            if (ev.target === uploadResizeImgValueDecBtn && valueNumber > 25) {
                var finalValueDec = valueNumber - stepResizeImg;
                uploadResizeImgValue.setAttribute('value', finalValueDec + '%');
                useResizeImg();

            } else if (ev.target === uploadResizeImgValueIncBtn && valueNumber < 100) {
                var finalValueInc = valueNumber + stepResizeImg;
                uploadResizeImgValue.setAttribute('value', finalValueInc + '%');
                useResizeImg();
            }
        });
    };

    // обработчик для клика на кнопки увеличения и уменьшения маштаба фотографии
    uploadResizeImg.addEventListener('click', resizeImg());

//-- применение маштаба

    // функция для применения изменений маштаба фотографии
    var useResizeImg = function () {

        // получение измененного  числа из значения атрибута value
        var valueImg = parseInt(uploadResizeImgValue.getAttribute('value'));

        // запись измененного числа в стили
        if (valueImg !== 100) {
            effectImg.style.transform = 'scale(0.' + valueImg + ')';
        } else {
            effectImg.style.transform = 'scale(1)';
        }
    };

}());