$(function () {
'use strict';
// Adjust Slider Height
var winH   = $(window).heigth(),
    upperH = $('.upper-bar').innerHeight(),
    navH   = $('.navbar').innerHeight();
    $('.slider, .carousel-item').heigth(winH - (upperH + navH));


    $('.work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});