const controls = document.querySelector('.controls');
const btnNew = document.querySelector('#new');
const btnClear = document.querySelector('#clear');
const pad = document.querySelector('.pad');
const color = 'black';

function drawPad(size = 16) {
    // Get available height and width excluding paddings.
    // Draws out a pad with the minimum size.
    const paddings = 40;
    const parentX = pad.parentElement.clientWidth - paddings;
    const parentY = pad.parentElement.clientHeight - paddings;
    const padSize = parentX < parentY ? parentX : parentY;
    pad.style.width = padSize + 'px';
    pad.style.height = padSize + 'px';

    // Calculate pixel dimension, then fill the pad with pixels.
    const pixelDimension = 100 / size;
    for (let i = 0; i < (size * size); i++) {
        const pixel = document.createElement('div');
        pixel.style.width = pixelDimension + '%';
        pixel.style.height = pixelDimension + '%';
        pad.appendChild(pixel);
    }
}

function draw(e) {
    if (e.buttons == 1) e.target.style.backgroundColor = color;
}

function clearPad() {
    console.log(pad.children);
    Array.from(pad.children).forEach(child => {
        child.style.backgroundColor = 'whitesmoke';
    });
}

drawPad();
pad.addEventListener('mouseover', draw);
btnNew.addEventListener('click', () => {
    // Get size of the pad from user.
    let size = prompt('Please enter pad size (10 ~ 100)');
    while (size < 10 || size > 100) {
        size = prompt('Please Enter a valid pad size. The number must be between 10 and 100.');
    }
    // Get rid of existing pad.
    while (pad.firstChild) {
        pad.firstChild.remove();
    }

    // Draw new pad with existing size.
    drawPad(size);
});

btnClear.addEventListener('click', clearPad);