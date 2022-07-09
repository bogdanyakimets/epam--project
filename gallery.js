let leftMargin = 0;

const firstimage = document.querySelector('.first_image');
const left_button = document.querySelector('#left_button');
const right_button = document.querySelector('#right_button');

left_button.onclick = () => {
    leftMargin = leftMargin  - 300;

    firstimage.style.marginLeft = leftMargin + 'px';
};

right_button.onclick = () => {
    leftMargin = leftMargin  + 300;

    firstimage.style.marginLeft = leftMargin + 'px';
};