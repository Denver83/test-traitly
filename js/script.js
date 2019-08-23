// Слайдер-карусель
$ (function(){
$('.next').click(function(){
  let currentImage = $('.curry');
  let currentImageIndex = $('.curry').index();
  let nextImageIndex = currentImageIndex + 1;
  let nextImage = $('.cards__item').eq(nextImageIndex);
  currentImage.fadeOut(1000);
  currentImage.removeClass('curry');
  

if (nextImageIndex == $('.cards__item:last').index()+1){
  $('.cards__item').eq(0).fadeIn(1000);
  $('.cards__item--first').addClass('curry');
} else {
  nextImage.fadeIn(1000);
  nextImage.addClass('curry');
   }
 });

$('.prev').click(function(){
  let currentImage = $('.curry');
  let currentImageIndex = $('.curry').index();
  let nextImageIndex = currentImageIndex - 1;
  let nextImage = $('.cards__item').eq(nextImageIndex);
  currentImage.fadeOut(1000);
  currentImage.removeClass('curry');

if (nextImageIndex == $('.cards__item:first').index()-1){
  $('.cards__item').eq(2).fadeIn(1000);
  $('.cards__item--third').addClass('curry');
} else {
  nextImage.fadeIn(1000);
  nextImage.addClass('curry');
   }
 });

});

// 2 slider

$ (function(){
$('.best-selling__next').mouseover(function(){
  let bestImage = $('.current');
  let bestImageIndex = $('.current').index();
  let nextBestImageIndex = bestImageIndex + 1;
  let nextBestImage = $('.best-selling__list').eq(nextBestImageIndex);
  bestImage.fadeOut(500);
  bestImage.removeClass('current');

if (nextBestImageIndex == $('.best-selling__list:last').index()+1){
  $('.best-selling__list').eq(0).fadeIn(500);
  $('.best-selling__list--first').addClass('current');
} else {
  bestImage.fadeIn(500);
  bestImage.addClass('current');
   }
 });

$('.best-selling__prev').mouseover(function(){
  let bestImage = $('.current');
  let bestImageIndex = $('.current').index();
  let nextBestImageIndex = bestImageIndex - 1;
  let nextBestImage = $('.best-selling__list').eq(nextBestImageIndex);
  bestImage.fadeOut(500);
  bestImage.removeClass('current');

if (nextBestImageIndex == $('.best-selling__list:first').index()-1){
  $('.best-selling__list').eq(2).fadeIn(500);
  $('.best-selling__list--third').addClass('current');
} else {
  nextBestImage.fadeIn(500);
  nextBestImage.addClass('current');
   }
 });

});

// Счетчик товаров
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
