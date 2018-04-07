'use strict';
(function () {

//-- изменение и отрисовка шаблона

    var pictureTemplate = document.querySelector('#picture-template').content.querySelector('.picture');
    window.pictureContent = document.querySelector('.pictures');


    var renderPicture = function (POST) {
        var pictureElement = pictureTemplate.cloneNode(true);

        pictureElement.querySelector('img').src = POST.url;
        pictureElement.querySelector('.picture-likes').textContent = POST.likes;
        pictureElement.querySelector('.picture-comments').textContent = POST.comments;

        return pictureElement;
    };

//-- вставка сгенерированного шаблона

    var fragment = document.createDocumentFragment();

    for (var i = 0; i < window.POST.length; i++) {
        fragment.appendChild(renderPicture(window.POST[i]));
    }

    pictureContent.appendChild(fragment);


}());