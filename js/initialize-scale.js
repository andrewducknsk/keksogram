(function () {

    //-- применение маштаба

    window.useResizeImg = function () {

        var valueImg = parseInt(uploadResizeImgValue.getAttribute('value'));

        if (valueImg !== 100) {
            effectImg.style.transform = 'scale(0.' + valueImg + ')';
        } else {
            effectImg.style.transform = 'scale(1)';
        }
    };

}());