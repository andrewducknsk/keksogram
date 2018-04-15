'use strict';

(function () {

    //-- слайдер фильтра

    // нахождение линии движения слайдера

    var sliderLine = document.querySelector('.upload-effect-level-line');
    var effectImg = uploadForm.querySelector('.effect-image-preview');

    // нахождение точки для перемещения слайдера
    // нахождение линии для оформления слайдера
    window.sliderPin = document.querySelector('.upload-effect-level-pin');
    window.sliderVal = document.querySelector('.upload-effect-level-val');

    // функция для работы слайдера
    var sliderMove = function (ev) {
        ev.preventDefault();

        // нахождение координат линии движения слайдера относитель левого края окна при нажатии
        var coords = sliderLine.getBoundingClientRect().left;

        // функция при перемещения точки
        var onMouseMove = function (evMove) {
            evMove.preventDefault();

            // рассчет изменения координат точки
            // (координаты начала движения - координаты линии движения относительно левого края окна при нажатии)
            window.shift = evMove.clientX - coords;

            // запись рассчета координат в стили точки;
            // запись рассчета координат в стили лмнмм оформления;
            // запись рассчета координат в стили фильтра и рассчет значения фильтра
            sliderPin.style.left = shift + 'px';
            sliderVal.style.width = shift + 'px';

            go();

            // если рассчитанные координаты точки меньше 0, то значние становится равны 0;
            // если рассчитанные координаты точки больше 455, то значние становится равны 455;
            if (shift <= 0) {
                sliderPin.style.left = 0 + 'px';
                sliderVal.style.width = 0 + 'px';

            } else if (shift >= 455 ) {
                sliderPin.style.left = 455 + 'px';
                sliderVal.style.width = 455 + 'px';
            }

        };

        // функция при покидании курсора заданное области
        var onMouseLeave = function () {

            sliderBar.removeEventListener('mousemove', onMouseMove);
        };

        // функция при отпускании кнопки мыши
        var onMouseUp = function (evUp) {
            evUp.preventDefault();

            // удаление обработчика движения мыши
            // удаление обработчика при отпускании кнопки мышм
            sliderBar.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp)
        };

        // добавление обработчика для покидания курсора мыши заданной области;
        // добавление обработчика для перемещения точки;
        // добавление обработчика для отпускания кнопки мыши;
        sliderBar.addEventListener('mouseleave', onMouseLeave);
        sliderBar.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    // добавление обработчика при нажатии на кнопку мыши
    sliderPin.addEventListener('mousedown', sliderMove);

}());