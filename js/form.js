'use strict';

(function () {
//-- форма редактора

    // нахождение кнопки закрытия редактора формы;
    var uploadOverlayClosedBtn = document.querySelector('.upload-form-cancel');

    // нахождение контейнера со слайдером;
    window.sliderBar = document.querySelector('.upload-effect-level');

    // нахождение редактора формы;
    // нахождение формы отправки;
    window.uploadOverlay = document.querySelector('.upload-overlay');
    window.uploadForm = document.querySelector('#upload-select-image');

    // прятанье слайдера при показе редактора формы(т.к. сначала стоит значение 'без фильтра')
    sliderBar.style.display = 'none';

    // функция закрытия редактора
    var uploadOverlayClosed = function () {

        uploadOverlay.classList.add('hidden');
    };

    // обработчик на зактрытие редактора
    uploadOverlayClosedBtn.addEventListener('click', uploadOverlayClosed);

//-- загрузка своей фотографии

    var uploadFile = document.querySelector('.upload-input'),
        uploadFilePreview = document.querySelector('.effect-image-preview'),
        FILE_TYPE = ['png', 'gif', 'jpg', 'jpeg'];

    // функция загрузки в редактор своей фотографии
    var uploadFileForm = function () {

        // показ редактора
        uploadOverlay.classList.remove('hidden');

            // берем для загрузки только ПЕРВЫЙ файл;
            // переводим название файла в нижний регистр
            var file = uploadFile.files[0];
            var fileName = file.name.toLowerCase();

            // сравниваем тип загружаемого файла с разрешенными
            var testType = FILE_TYPE.some(function (value) {
                return fileName.endsWith(value);
            });

            // если тип подходит
            if (testType) {

                // читаем данные из файла
                var reader = new FileReader();

                // при завершении чтения, меняем src у элемента предосмотра
                reader.addEventListener('load', function () {
                    uploadFilePreview.src = reader.result;
                });

                // перевод данных из файла в формат base64
                reader.readAsDataURL(file);
            }
    };

    // обработчик для изменения
    uploadFile.addEventListener('change', uploadFileForm);



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