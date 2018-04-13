(function () {

    window.load = function (onLoad, onError) {

        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.open('GET', 'https://js.dump.academy/kekstagram/data');

        xhr.addEventListener('load', function () {

            if (xhr.status === 200) {
                onLoad(xhr.response);
            } else {
                onError('Неизвестный статус: ' + xhr.status + '' + xhr.statusText);
            }
        });

        xhr.addEventListener('error', function () {
            onError('Произошла ошибка соединения');
        });

        xhr.addEventListener('timeout', function () {
           onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
        });

        xhr.timeout = 20000; //20s

        xhr.send();
    };

    window.upload = function (data, onLoad, onError) {

        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener('error', function () {
            onError('Произошла ошибка соединения');
        });

        xhr.addEventListener('timeout', function () {
            onError('Запрос не успел выполниться за ' + xhr.timeout);
        });

        xhr.timeout = 20000; //20s

        xhr.addEventListener('load', function () {

            if (xhr.status === 200) {
                onLoad(xhr.response);
            } else {
                onError('Неизвестный статус: ' + xhr.status + '' + xhr.statusText);
            }
        });

        xhr.open('POST', 'https://js.dump.academy/kekstagram');
        xhr.send(data);
    };

}());