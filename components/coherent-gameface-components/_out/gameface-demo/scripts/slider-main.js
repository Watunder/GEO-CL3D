let _blur = 0;
let _hueRotate = 0;

document.querySelector('.vertical-slider-component').addEventListener('slider-scroll', (e) => {
    _blur = e.detail.handlePosition / 10;
    document.querySelector('.blur-text').innerHTML = `Blur: ${_blur}`;
    document.querySelector('.avatar').style.filter = `blur(${_blur}px) hue-rotate(${_hueRotate}deg)`;
});

document.querySelector('.horizontal-slider-component').addEventListener('slider-scroll', (e) => {
    _hueRotate = e.detail.handlePosition * 3.6;
    document.querySelector('.rotate-text').innerHTML = `Hue Rotate: ${_hueRotate}`;
    document.querySelector('.avatar').style.filter = `blur(${_blur}px) hue-rotate(${_hueRotate}deg)`;
});