const controls = document.querySelector('.controls');
const pad = document.querySelector('.pad');
const color = 'black';

function drawPad(size = 16) {
    // Get available height and width excluding paddings.
    // Draws out a pad with the minimum size.
    const paddedSize = 40;
    const parentX = pad.parentElement.clientWidth - paddedSize;
    const parentY = pad.parentElement.clientHeight - paddedSize;
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

function draw(e){
    if (e.buttons == 1) e.target.style.backgroundColor = color;
}

drawPad();
pad.addEventListener('mouseover', e => draw(e));