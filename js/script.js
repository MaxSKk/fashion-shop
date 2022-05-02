$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .menu, .menu__closer').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.menu__closer').click(function (event) {
      $('.header__burger, .menu, .menu__closer').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.spoiler__title').click(function (event) {
      $(this).toggleClass('open').next().slideToggle(300);
   });

   $('.filter__title').click(function (event) {
      $(this).toggleClass('open').next().slideToggle(300);
      $('.filter').toggleClass('open');
   });

   $('.subfilter__title').click(function (event) {
      $(this).toggleClass('open').next().slideToggle(300);
   });
});