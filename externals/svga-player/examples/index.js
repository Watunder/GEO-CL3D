import { SVGAPlus } from '../dist/svga-player.js';

const getElement = (selector) => {
    return document.querySelector(selector);
}

/**
 * @type {import('../dist/types/index').SVGAPlus}
 */
let player = null;

const fileInput = document.getElementById('file-upload')
fileInput.addEventListener('change', async () => {
    const file = fileInput.files[0];
    if (!file) return;

    const buffer = await new Promise(resolve => {
        const fileReader = new FileReader();
        fileReader.onloadend = (event) => {
            resolve(event.target.result);
        }
        fileReader.readAsArrayBuffer(file);
    })

    if (player) player.stop();

    player = new SVGAPlus({
        element: document.getElementById('stage'),
        buffer
    })

    await player.init();

    player.play();

    fileInput.value = '';
})

const replyBtn = getElement('#replay-btn')
replyBtn.addEventListener('click', () => {
    player.playOnce();
})
