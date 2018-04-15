'use strict';

(function () {

    // функция запроса данных у сервера
    window.load = function (onLoad, onError) {

        // создание запроса и определение типа данных
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        // подгатовка запроса
        xhr.open('GET', 'https://js.dump.academy/kekstagram/data');

        // функция обработки данных после загрузки
        var xhrLoad = function () {

            // если успешно, то аргемент onLoad принимает значение данных
            if (xhr.status === 200) {
                onLoad(xhr.response);
                // если не успешно, то выводится ошибка со номером ошибки и описанием
            } else {
                onError('Неизвестный статус: ' + xhr.status + '' + xhr.statusText);
            }
        };

        // обработчик обработки данных после загрузки
        xhr.addEventListener('load', xhrLoad);

        // обработчик при ошибке загрузки данных
        xhr.addEventListener('error', function () {
            onError('Произошла ошибка соединения');
        });

        // обработчик при истечении времени ответа сервера
        xhr.addEventListener('timeout', function () {
           onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
        });

        // таймер
        xhr.timeout = 20000; //20s

        // отправка запроса на получение данных
        xhr.send();

        // показ списка вариантов сортировки
        document.querySelector('.filters').classList.remove('hidden');
    };

    // функция отправки данных на сервер
    window.upload = function (data, onLoad, onError) {

        // создание запроса и определение типа данных
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        // обработчик при ошибке отпраки данных данных
        xhr.addEventListener('error', function () {
            onError('Произошла ошибка соединения');
        });

        // обработчик при истечении времени ответа сервера
        xhr.addEventListener('timeout', function () {
            onError('Запрос не успел выполниться за ' + xhr.timeout);
        });

        // таймер
        xhr.timeout = 20000; //20s


        // xhr.addEventListener('load', function () {
        //
        //     if (xhr.status === 200) {
        //         onLoad(xhr.response);
        //     } else {
        //         onError('Неизвестный статус: ' + xhr.status + '' + xhr.statusText);
        //     }
        // });

        // подгатовка запроса и отправка данных
        xhr.open('POST', 'https://js.dump.academy/kekstagram');
        xhr.send(data);
    };

}());