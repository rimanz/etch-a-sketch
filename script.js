// Elements:
const controls = document.querySelector('.controls');
const btnNew = document.querySelector('#new');
const btnClear = document.querySelector('#clear');
const pad = document.querySelector('.pad');
const colorPicker = document.querySelector('#color');
let color = colorPicker.value;

// Function Declarations:
function drawPad(numberOfPixels = 16) {
    // Get available height and width excluding paddings.
    // Draws out a pad with the minimum size.
    const paddings = 20 * 2;  // Paddings to be excluded to calculate size
    const margins = 20  // Margins to be excluded to calculate height
    const parentX = pad.parentElement.clientWidth - paddings;
    const parentY = pad.parentElement.clientHeight 
                    - controls.clientHeight
                    - controls.style.marginBottom
                    - paddings
                    - margins;
    const padSize = parentX < parentY ? parentX : parentY;
    pad.style.width = padSize + 'px';
    pad.style.height = padSize + 'px';

    // Calculate pixel dimension, then fill the pad with pixels.
    const pixelDimension = 100 / numberOfPixels;
    for (let i = 0; i < (numberOfPixels * numberOfPixels); i++) {
        const pixel = document.createElement('div');
        pixel.style.width = pixelDimension + '%';
        pixel.style.height = pixelDimension + '%';
        pixel.classList.add('pixel');
        pad.appendChild(pixel);
    }
}

function draw(e) {
    let opacity = Number(e.target.style.opacity);
    if (e.buttons == 1) {
        e.target.style.backgroundColor = color;
        if (opacity < 1) {
            e.target.style.opacity = opacity + 0.1;
        }
    }
}

function clearPad() {
    Array.from(pad.children).forEach(child => {
        child.style.backgroundColor = 'white';
        child.style.opacity = ''; // If set it to 0, it effects the borders too.
    });
}

function setColor() {
    console.log(colorPicker.value);
    color = colorPicker.value;
}

// Event Listeners:
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

    // Draw new pad of user given size.
    drawPad(size);
});

btnClear.addEventListener('click', clearPad);
colorPicker.addEventListener('change', setColor);

// Draw the initial pad
drawPad();