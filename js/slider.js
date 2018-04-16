'use strict';

(function () {
//-- слайдер фильтра

    // нахождение линии движения слайдера
    var sliderLine = document.querySelector('.upload-effect-level-line');
    window.resultInput = document.querySelector('.input-value');

    // нахождение точки для перемещения слайдера
    // нахождение линии для оформления слайдера
    window.sliderPin = document.querySelector('.upload-effect-level-pin');
    window.sliderVal = document.querySelector('.upload-effect-level-val');

    var eventChange = new Event('change');

    // функция для работы слайдера
    var sliderMove = function (ev) {
        ev.preventDefault();

        // нахождение координат линии движения слайдера относитель левого края окна при нажатии
        var coords = sliderLine.getBoundingClientRect().left;

        // функция при перемещения точки
        var onMouseMove = function (evMove) {
            evMove.preventDefault();

            // нахождение ширины слайдера
            window.sliderLineWidth = sliderLine.offsetWidth;

            // рассчет изменения координат точки
            // (координаты начала движения - координаты линии движения относительно левого края окна при нажатии)
            window.shift = evMove.clientX - coords;

            // запись рассчета координат в стили точки;
            // запись рассчета координат в стили лмнмм оформления;
            // запись рассчета координат в стили фильтра и рассчет значения фильтра
            sliderPin.style.left = shift + 'px';
            sliderVal.style.width = shift + 'px';
            updateValueEffect();
            // если рассчитанные координаты точки меньше 0, то значние становится равны 0;
            // если рассчитанные координаты точки больше 455, то значние становится равны 455;
            if (shift <= 0) {
                sliderPin.style.left = 0 + 'px';
                sliderVal.style.width = 0 + 'px';
                window.resultInput.value = 0;

            } else if (shift >= sliderLineWidth ) {
                sliderPin.style.left = sliderLineWidth + 'px';
                sliderVal.style.width = sliderLineWidth + 'px';
                window.resultInput.value = 100;
            } else {
                window.resultInput.value = Math.ceil(shift / sliderLineWidth * 100);
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
        //
        sliderBar.addEventListener('mouseleave', onMouseLeave);
        sliderBar.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        window.resultInput.dispatchEvent(eventChange);
    };
    // добавление обработчика при нажатии на кнопку мыши
    sliderPin.addEventListener('mousedown', sliderMove);

}());