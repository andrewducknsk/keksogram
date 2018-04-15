'use strict';

(function () {
    //-- применение эффекта

    // нахождение контейнера с эффектами;
    // нахождение все эффектов в контейнере;
    var effectControls = uploadForm.querySelector('.upload-effect-controls'),
        effectRadioBtn = effectControls.querySelectorAll('input');

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
        if (ev.target === effectRadioBtn[0]) {

            effectImg.classList.add('effect-none');
            sliderBar.style.display = 'none';
            effectImg.style.filter = '';
        } else {
            effectImg.classList.remove('effect-none');
            sliderBar.style.display = "block";
        }

        // режим эффекта 'хром'
        if (ev.target === effectRadioBtn[1]) {

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
        if (ev.target === effectRadioBtn[2]) {

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
        if (ev.target === effectRadioBtn[3]) {

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
        if (ev.target === effectRadioBtn[4]) {

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
        if (ev.target === effectRadioBtn[5]) {

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