import styleText from './style.css';
let style = document.createElement("style");
style.innerHTML = styleText;
document.head.appendChild(style);

/**
 * Class definition of the custom element `fps-counter`
 */
class FPSCounter extends HTMLElement {
    static get observedAttributes() {
        return ['delay'];
    }

    constructor() {
        super();
    }

    set delay(value) {
        value ? this.setAttribute('delay', String(value)) : this.removeAttribute('delay');
    }

    get delay() {
        return Number(this.getAttribute('delay')) || 1000;
    }

    connectedCallback() {
        this.isRendered = true;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isRendered) return;
    }
};

customElements.define('fps-counter', FPSCounter);

/**
 * @type {Number}
 */
let frame = 0;
/**
 * @type {Number}
 */
let lasttime = 0;
/**
 * @type {FPSCounter}
 */
let element = document.querySelector('fps-counter');
if (!element) element = document.body.appendChild(new FPSCounter());

/**
 * Update fps text of `fps-counter`element when the `delay` is reached
 * @param {Number} fractionDigits reference {@link Number.toFixed}
 */
const updateFPSCounter = (fractionDigits = 2) => {
    frame += 1;
    let stopTime = performance.now();

    if (element && stopTime - lasttime > element.delay) {
        element.innerText = `FPS: ${(frame / (stopTime - lasttime) * 1000).toFixed(fractionDigits)}`;

        lasttime = stopTime;
        frame = 0;
    }
}

/**
 * @type {Object.<string, Function>}
 */
let prototype = null;
/**
 * @type {Function}
 */
let drawCall = null;

/**
 * Add {@link updateFPSCounter} to the `drawcall` function
 * @param {Function} object
 * @param {String} funcName
 */
const addFPSCounterToDrawCall = (object, funcName) => {
    prototype = Object.getPrototypeOf(object);

    drawCall = prototype[funcName].bind(object);

    prototype[funcName] = (...args) => {
        drawCall(...args);
        updateFPSCounter();
    }
}

export { FPSCounter, updateFPSCounter, addFPSCounterToDrawCall };