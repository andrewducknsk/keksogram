'use strict';
(function () {

//-- изменение и отрисовка шаблона

    var pictureTemplate = document.querySelector('#picture-template').content.querySelector('.picture');
    window.pictureContent = document.querySelector('.pictures');


    var renderPicture = function (POST) {
        var pictureElement = pictureTemplate.cloneNode(true);

        pictureElement.querySelector('img').src = POST.url;
        pictureElement.querySelector('.picture-likes').textContent = POST.likes;
        pictureElement.querySelector('.picture-comments').textContent = POST.comments.length;

        return pictureElement;
    };

//-- вставка сгенерированного шаблона

    var loadHandler = function (POST) {

        var fragment = document.createDocumentFragment();

        for (var i = 0; i < POST.length; i++) {
            fragment.appendChild(renderPicture(POST[i]));
        }

        pictureContent.appendChild(fragment);

        window.addEventPicture();
    };

    window.errorHandler = function (message) {

        document.querySelector('.upload-message').classList.remove('hidden');
        var errorMessageBox = document.querySelector('.upload-message-container');


        errorMessageBox.style = 'position: relative; z-index = 100; text-align: center;';

        errorMessageBox.textContent = message;

        window.uploadOverlay.classList.add('hidden');
    };

    window.load(loadHandler, window.errorHandler);

}());