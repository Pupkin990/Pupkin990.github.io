window.addEventListener('DOMContentLoaded', function() {

    let block = document.querySelector('.mains__block_1'),
        block1 = document.querySelector('.mains__block_2'),
        wrapper = document.querySelector('.mains');

    block.addEventListener('mouseenter', function () {
        wrapper.classList.add('technology');
    });
    block.addEventListener('mouseleave', function () {
        wrapper.classList.remove('technology');
    });

    block1.addEventListener('mouseenter', function () {
        wrapper.classList.add('sgv');
    });
    block1.addEventListener('mouseleave', function () {
        wrapper.classList.remove('sgv');
    });

});