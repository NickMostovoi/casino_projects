document.querySelector('.fn-burger__button_toggle').addEventListener('click', function() {
    document.querySelector('.burger__line1').classList.toggle('change');
    document.querySelector('.burger__line2').classList.toggle('change');
    document.querySelector('.burger__line3').classList.toggle('change');
    document.querySelector('.burger__menu').classList.toggle('burger__menu_hidden');
});