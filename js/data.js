'use strict';
(function () {

    var photo = ['photos/1.jpg', 'photos/2.jpg', 'photos/3.jpg', 'photos/4.jpg', 'photos/5.jpg', 'photos/6.jpg',
        'photos/7.jpg', 'photos/8.jpg', 'photos/9.jpg', 'photos/10.jpg', 'photos/11.jpg', 'photos/12.jpg', 'photos/13.jpg',
        'photos/14.jpg', 'photos/15.jpg', 'photos/16.jpg', 'photos/17.jpg', 'photos/18.jpg', 'photos/19.jpg', 'photos/20.jpg',
        'photos/21.jpg', 'photos/22.jpg', 'photos/23.jpg', 'photos/24.jpg', 'photos/25.jpg'];

    var COMMENT = ['Все отлично!', 'В целом всё не плохо. Но не все.',
        'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
        'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
        'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
        'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

    var randomNumber = function (min, max) {

        return Math.floor(Math.random() * (max - min)) + min;
    };

    window.POST = [
        {
            "url": "photos/1.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/2.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/3.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/4.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/5.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/6.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/7.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/8.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/9.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/10.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/11.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/12.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/13.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/14.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/15.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/16.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/17.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/18.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/19.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/20.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/21.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/22.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/23.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/24.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        },
        {
            "url": "photos/25.jpg",
            "likes": randomNumber(15, 200),
            "comments": COMMENT[randomNumber(0, 5)]
        }
    ];

}());