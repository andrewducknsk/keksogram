'use strict';

(function () {
//-- форма загрузки нового изображения

    // нахождение input загрузки фотографии;
    // нахождение кнопки закрытия редактора формы;

    var uploadFieldFile = document.querySelector('#upload-file'),
        uploadOverlayClosedBtn = document.querySelector('.upload-form-cancel');

    // нахождение контейнера со слайдером;
    window.sliderBar = document.querySelector('.upload-effect-level');

    // нахождение редактора формы;
    // нахождение формы отправки;
    window.uploadOverlay = document.querySelector('.upload-overlay');
    window.uploadForm = document.querySelector('#upload-select-image');

    // прятанье слайдера при показе редактора формы(т.к. сначала стоит значение 'без фильтра')
    sliderBar.style.display = 'none';

    // функция показа редактора
    var uploadOverlayShow = function () {

        uploadOverlay.classList.remove('hidden');
    };

    // функция закрытия редактора
    var uploadOverlayClosed = function () {

        uploadOverlay.classList.add('hidden');
    };

    // обработчик на изменение input'а для загрузки фотографии;
    // обработчик на зактрытие редактора
    uploadFieldFile.addEventListener('change', uploadOverlayShow);
    uploadOverlayClosedBtn.addEventListener('click', uploadOverlayClosed);
    
//-- отправка формы на сервер

    // функция отправки данных формы на сервер
    var submitForm = function (ev) {

        //передача данных формы для функции отпраки данных на сервер
        window.upload(new FormData(uploadForm), function (response) {
            uploadOverlay.classList.add('hidden');
        });

        ev.preventDefault();
    };

    // обработчик для передачи данных на сервер
    uploadForm.addEventListener('submit', submitForm);

}());