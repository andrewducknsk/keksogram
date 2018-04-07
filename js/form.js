'use strict';

(function () {

    //-- форма загрузки нового изображения

    var uploadForm = document.querySelector('#upload-select-image');
    var uploadFieldFile = uploadForm.querySelector('#upload-file');
    var uploadOverlay = uploadForm.querySelector('.upload-overlay');
    var uploadOverlayClosed = uploadForm.querySelector('.upload-form-cancel');
    var sliderBar = uploadForm.querySelector('.upload-effect-level');

    sliderBar.style.display = 'none';

    uploadFieldFile.addEventListener('change', function () {
        uploadOverlay.classList.remove('hidden');
    });

    uploadOverlayClosed.addEventListener('click', function () {
        uploadOverlay.classList.add('hidden');
    });

//-- форма ввода маштаба ограничена

    var uploadResizeImg = uploadForm.querySelector('.upload-resize-controls');
    var uploadResizeImgValue = uploadForm.querySelector('.upload-resize-controls-value');
    var uploadResizeImgValueDecBtn = uploadForm.querySelector('.upload-resize-controls-button-dec');
    var uploadResizeImgValueIncBtn = uploadForm.querySelector('.upload-resize-controls-button-inc');

    var resizeImg = function () {

        uploadResizeImg.addEventListener('click', function (ev) {

            var stepResizeImg = 25;
            var valueNumber = parseInt(uploadResizeImgValue.getAttribute('value'));

            if (ev.target === uploadResizeImgValueDecBtn && valueNumber > 25) {
                var finalValue = valueNumber - stepResizeImg;
                uploadResizeImgValue.setAttribute('value', finalValue + '%');
                useResizeImg();

            } else if (ev.target === uploadResizeImgValueIncBtn && valueNumber < 100) {
                var finalValue1 = valueNumber + stepResizeImg;
                uploadResizeImgValue.setAttribute('value', finalValue1 + '%');
                useResizeImg();
            }
        });
    };

    uploadResizeImg.addEventListener('click', resizeImg());

//-- применение эффекта

    var effectControls = uploadForm.querySelector('.upload-effect-controls');
    var effectRadioBtn = effectControls.querySelectorAll('input');
    var effectImg = uploadForm.querySelector('.effect-image-preview');


    var useEffectImg = function () {

        effectControls.addEventListener('change', function (ev) {


            if (ev.target === effectRadioBtn[0]) {
                effectImg.classList.add('effect-none');
                sliderBar.style.display = 'none';
            } else {
               effectImg.classList.remove('effect-none');
               sliderBar.style.display = "block";
            }

            if (ev.target === effectRadioBtn[1]) {
                effectImg.classList.add('effect-chrome');
            } else {
                effectImg.classList.remove('effect-chrome');
            }

            if (ev.target === effectRadioBtn[2]) {
                effectImg.classList.add('effect-sepia');
            } else {
                effectImg.classList.remove('effect-sepia');
            }

            if (ev.target === effectRadioBtn[3]) {
                effectImg.classList.add('effect-marvin');
            } else {
                effectImg.classList.remove('effect-marvin');
            }

            if (ev.target === effectRadioBtn[4]) {
                effectImg.classList.add('effect-phobos');
            } else {
                effectImg.classList.remove('effect-phobos');
            }

            if (ev.target === effectRadioBtn[5]) {
                effectImg.classList.add('effect-heat');
            } else {
                effectImg.classList.remove('effect-heat');
            }
        });

    };

    effectControls.addEventListener('change', useEffectImg());

//-- применение маштаба

    var useResizeImg = function () {

        var valueImg = parseInt(uploadResizeImgValue.getAttribute('value'));

        if (valueImg !== 100) {
            effectImg.style.transform = 'scale(0.' + valueImg + ')';
        } else {
            effectImg.style.transform = 'scale(1)';
        }
    };

//-- слайдер фильтра

    var sliderLine = sliderBar.querySelector('.upload-effect-level-line');
    var sliderPin = sliderBar.querySelector('.upload-effect-level-pin');
    var sliderVal = sliderBar.querySelector('.upload-effect-level-val');

    sliderPin.style.left = 0;
    sliderVal.style.width = 0;


        sliderPin.addEventListener('mousedown', function (evt) {
            evt.preventDefault();

            var coords = {
                left: evt.clientX
            };

            var onMouseMove = function (evtMove) {

                evtMove.preventDefault();

                //console.log(coords.left);


                var shift = {
                    left: evtMove.clientX - coords.left
                };

                //console.log(shift);

                sliderPin.style.left = shift.left + 'px';
                sliderVal.style.width = shift.left + 'px';


                if (shift.left <= 0) {
                    sliderPin.style.left = 0 + 'px';
                    sliderVal.style.width = 0 + 'px';
                } else if (shift.left >= 455 ) {
                    sliderPin.style.left = 455 + 'px';
                    sliderVal.style.width = 455 + 'px';
                }

            };

            var onMouseLeave = function () {
                sliderBar.removeEventListener('mousemove', onMouseMove);
            };

            var onMouseUp = function (evtUp) {
                evtUp.preventDefault();
                sliderLine.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp)
            };

            sliderBar.addEventListener('mouseleave', onMouseLeave);
            sliderLine.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

    });

}());