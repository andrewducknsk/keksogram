'use strict';
(function () {
//-- изменение и отрисовка шаблона

    //нахождение шаблона и его ребенка
    var pictureTemplate = document.querySelector('#picture-template').content.querySelector('.picture');

    window.pictureContent = document.querySelector('.pictures');

    // генерация фотографий
    window.renderPicture = function (arr) {

        // копирование элементов шаблона
        var pictureElement = pictureTemplate.cloneNode(true);

        // замена src, лайков и комментариев из переданных массивов
        pictureElement.querySelector('img').src = arr.url;
        pictureElement.querySelector('.picture-likes').textContent = arr.likes;
        pictureElement.querySelector('.picture-comments').textContent = arr.comments.length;

        // возврат отрисованного эленемта
        return pictureElement;
    };

//-- вставка сгенерированного шаблона

    // нахождение контейнера с вариантами сортировки;
    // нахождение всех способов сортировки этого контейнера;
    // создание фрагмента для вставки массивов в контейнер с фотографиями;
    var sortOptionsBox = document.querySelector('.filters'),
        sortRadioBtn = sortOptionsBox.querySelectorAll('input'),
        fragment = document.createDocumentFragment();


    // отрисовка оригинального массива получаемого с сервера
    var originalArr = function (POST) {

        // неотсортированный массив (рекомендуемые)
        POST.forEach(function (value, i) {

            fragment.appendChild(window.renderPicture(POST[i]));
        });

        // вставка отрисованного массива
        window.pictureContent.appendChild(fragment);
    };

    // Удаление элементов в контейнере с фотографиями
    var removeChild = function () {

        while (pictureContent.firstChild) {
            pictureContent.removeChild(pictureContent.firstChild);
        }
    };

    // функция при успешной загрузки с сервера
    var loadHandler = function (POST) {

        // функция переключения фильтров
        window.filterChange = function (ev) {

            switch (ev.target) {
                case sortRadioBtn[0]:

                    removeChild();
                    originalArr(POST);
                    break;

                case sortRadioBtn[1]:

                    removeChild();

                    // сортировка массива по популярности
                    var likePostSort = POST.slice(0).sort(function (first, second) {
                        return second.likes - first.likes;
                    });

                    // отрисовка элементов массива
                    likePostSort.forEach(function (value, i) {

                        fragment.appendChild(window.renderPicture(likePostSort[i]));
                    });

                    // вставка отрисованого массива
                    window.pictureContent.appendChild(fragment);
                    break;

                case sortRadioBtn[2]:

                    removeChild();

                    // сортировка массива по коментариям
                    var commentsPostSort = POST.slice(0).sort(function (first, second) {
                        return second.comments.length - first.comments.length;
                    });

                    // отрисовка элементов массива
                    commentsPostSort.forEach(function (value, i) {

                        fragment.appendChild(window.renderPicture(commentsPostSort[i]));
                    });

                    // вставка отрисованого массива
                    window.pictureContent.appendChild(fragment);
                    break;

                case sortRadioBtn[3]:

                    removeChild();

                    // случайная сортировка массива
                    var randomPostSort = POST.slice(0).sort(function () {
                        return Math.random() - 0.5;
                    });

                    // отрисовка элементов массива
                    randomPostSort.forEach(function (value, i) {

                        fragment.appendChild(window.renderPicture(randomPostSort[i]));
                    });

                    // вставка отрисованого массива
                    window.pictureContent.appendChild(fragment);
                    break;
            }
            // добавление обработчиков на элементы в контейнере
            window.addEventPicture();
        };
        // первая отрисовка при загрузке страницы
        originalArr(POST);

        // добавление обработчиков на элементы в контейнере
        window.addEventPicture();

        // добавление обработчиков для переключения фильтров
        sortOptionsBox.addEventListener('change', filterChange);
    };

    // функция при не успешной загрузки с сервера
    var errorHandler = function (message) {

        var errorMessageBox = document.querySelector('.upload-message-container');

        // показ контейнера с сообщением о ошибке
        document.querySelector('.upload-message').classList.remove('hidden');

        // оформление контейнера с сообщением о ошибке и добавление самого сообщения
        errorMessageBox.style = 'position: relative; z-index = 100; text-align: center;';
        errorMessageBox.textContent = message;

        // закрытие формы
        window.uploadOverlay.classList.add('hidden');
    };

    // функция загрузки с сервера
    window.load(loadHandler, errorHandler);

}());