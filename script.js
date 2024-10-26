const controls = document.querySelector('.controls');
const pad = document.querySelector('.pad');

function drawPad(size = 16) {
    // Get available height and width excluding paddings.
    // Set the minimum as the pad size.
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

drawPad();