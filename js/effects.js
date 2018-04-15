'use strict';

(function () {
    //-- применение эффекта

    // нахождение контейнера с эффектами;
    var effectControls = uploadForm.querySelector('.upload-effect-controls');

    // нахождение элемента, к которому пременяются эффекты;
    window.effectImg = uploadForm.querySelector('.effect-image-preview');

    //  функция сброса слайдера при переключении эффекта
    var changeSlider  = function (nameClass) {

        effectImg.classList.add(nameClass);
        window.sliderPin.style.left = 0;
        window.sliderVal.style.width = 0;
    };

    // функция переключения эффектов
    var changeEffectImg = function (ev) {

        // режим без эффектов
        if (ev.target.id === 'upload-effect-none') {

            effectImg.classList.add('effect-none');
            sliderBar.style.display = 'none';
            effectImg.style.filter = '';
        } else {
            effectImg.classList.remove('effect-none');
            sliderBar.style.display = "block";
        }

        // режим эффекта 'хром'
        if (ev.target.id === 'upload-effect-chrome') {

            changeSlider('effect-chrome');
            effectImg.style.filter = 'grayscale(0)';

            // добавление стиля filter и изменение его значения
            window.go = function () {
                effectImg.style.filter = 'grayscale('+shift/455+')';
            };
        } else {
            effectImg.classList.remove('effect-chrome');
        }

        // режим эффекта 'сепиа'
        if (ev.target.id === 'upload-effect-sepia') {

            changeSlider('effect-sepia');
            effectImg.style.filter = 'sepia(0)';

            // добавление стиля filter и изменение его значения
            window.go = function () {
                effectImg.style.filter = 'sepia('+shift/455+')';
            };
        } else {
            effectImg.classList.remove('effect-sepia');
        }

        // режим эффекта 'сепиа'
        if (ev.target.id === 'upload-effect-marvin') {

            changeSlider('effect-marvin');
            effectImg.style.filter = 'invert(0)';

            // добавление стиля filter и изменение его значения
            window.go = function () {
                effectImg.style.filter = 'invert('+shift/4.55+'%)';
            };
        } else {
            effectImg.classList.remove('effect-marvin');
        }

        // режим эффекта 'фобос'
        if (ev.target.id === 'upload-effect-phobos') {

            changeSlider('effect-phobos');
            effectImg.style.filter = 'blur(0)';

            // добавление стиля filter и изменение его значения
            window.go = function () {
                effectImg.style.filter = 'blur('+shift/151+'px)';
            };
        } else {
            effectImg.classList.remove('effect-phobos');
        }

        // режим эффекта 'зной'
        if (ev.target.id === 'upload-effect-heat') {

            changeSlider('effect-heat');
            effectImg.style.filter = 'brightness(0)';

            // добавление стиля filter и изменение его значения
            window.go = function () {
                effectImg.style.filter = 'brightness('+shift/151+')';
            };
        } else {
            effectImg.classList.remove('effect-heat');
        }
    };

    // обработчик для ловли изменения эффектов
    effectControls.addEventListener('change', changeEffectImg);
}());