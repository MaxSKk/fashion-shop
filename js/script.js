$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .menu, .menu__closer').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.menu__closer').click(function (event) {
      $('.header__burger, .menu, .menu__closer').toggleClass('active');
      $('body').toggleClass('lock');
   });
});