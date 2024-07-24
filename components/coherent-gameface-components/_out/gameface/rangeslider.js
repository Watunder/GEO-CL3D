import { Components } from '../gameface.js';

var verticalTemplate = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-vertical-rangeslider-wrapper\">    <div class=\"guic-vertical-rangeslider\">        <div class=\"guic-vertical-rangeslider-bar\"></div>        <div class=\"guic-vertical-rangeslider-handle\"></div>    </div></div>";

var horizontalTemplate = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-horizontal-rangeslider-wrapper\">    <div class=\"guic-horizontal-rangeslider\">        <div class=\"guic-horizontal-rangeslider-bar\"></div>        <div class=\"guic-horizontal-rangeslider-handle\"></div>    </div></div>";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const orientationUnitsNames = new Map([
    ['vertical', {
        mouseAxisCoords: 'clientY',
        size: 'height',
        position: 'top',
        coordinate: 'y',
        offset: 'offsetHeight',
    }],
    ['horizontal', {
        mouseAxisCoords: 'clientX',
        size: 'width',
        position: 'left',
        coordinate: 'x',
        offset: 'offsetWidth',
    }],
]);

const ORIENTATIONS = ['vertical', 'horizontal'];

/**
 * Converts a value to percent in a range
 * @param {number} value - the value to be converted
 * @param {number} min - the minimum value of the range
 * @param {number} max - the maximum number of the range
 * @returns {number} - returns the value in percent
 */
function valueToPercent(value, min, max) {
    return ((value - min) * 100) / (max - min);
}

/**
 * Restricts a given value in a range
 * @param {number} val - the value to be restricted
 * @param {number} min - the minimum value of the range
 * @param {number} max - the maximum number of the range
 * @returns {number}
 */
function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
}

/**
 * Checks if the orientation passed is vertical or horizontal, if it's neither it's set to horizontal
 * @param {string} orientation - the orientation string
 * @returns {string} - horizontal or vertical;
 */
function checkOrientation(orientation) {
    if (!ORIENTATIONS.includes(orientation)) {
        console.warn(`'${orientation}' is not a valid orientation. It should be either 'horizontal' or 'vertical'. Will fallback to 'horizontal'`);
        return 'horizontal';
    }

    return orientation;
}

/**
 * Will validate the custom handle selector and if element with that selector exists.
 * @param {string} customHandleSelector
 * @param {HTMLElement} customHandleElement
 */
function validateCustomHandle(customHandleSelector, customHandleElement) {
    if (customHandleSelector && !customHandleElement) {
        console.warn(`Unable to find element with selector - "${customHandleSelector}" that will be used for displaying the range slider value.`);
    }
}

const components$3 = new Components();

const customHandleVariableNames = {
    SINGLE: 'customHandle',
    LEFT: 'customHandleLeft',
    RIGHT: 'customHandleRight',
};

/**
 * This class holds common methods and data for all the rangesliders with a single handle
 */
class RangeSliderBase {
    /**
     * @param {Rangeslider} rangeslider - The gameface-rangeslider custom element
     */
    constructor(rangeslider) {
        if (new.target === RangeSliderBase) {
            throw new TypeError('Cannot construct RangeSliderBase instances directly');
        }
        this.rangeslider = rangeslider;
        this.onMouseUp = this.onMouseUp.bind(this);
        this.init = this.init.bind(this);
    }

    // eslint-disable-next-line require-jsdoc
    set thumb(value) {
        value ? this.rangeslider.setAttribute('thumb', '') : this.rangeslider.removeAttribute('thumb');
    }

    // eslint-disable-next-line require-jsdoc
    get thumb() {
        return this.state.thumb;
    }

    /**
     * Enables the grid of the slider
     * @param {number} value
     */
    set grid(value) {
        value ? this.rangeslider.setAttribute('grid', '') : this.rangeslider.removeAttribute('grid');
    }

    /**
     * Gets if the grid is enabled
     */
    get grid() {
        return this.state.grid;
    }

    /**
     * Sets the minimum value of the slider
     * @param {number} value
     */
    set min(value) {
        value !== null ? this.rangeslider.setAttribute('min', value) : this.rangeslider.removeAttribute('min');
    }

    /**
     * Gets the minimum value of the slider
     * @returns {number}
     */
    get min() {
        return this.state.min;
    }

    /**
     * Sets the maximum value of the slider
     * @param {number} value
     */
    set max(value) {
        value !== null ? this.rangeslider.setAttribute('max', value) : this.rangeslider.removeAttribute('max');
    }

    /**
     * Gets the maximum value of the slider
     * @returns {number}
     */
    get max() {
        return this.state.max;
    }

    // eslint-disable-next-line require-jsdoc
    get value() {
        return this.state.value;
    }

    // eslint-disable-next-line require-jsdoc
    set value(value) {
        this.rangeslider.setAttribute('value', value);
    }

    // eslint-disable-next-line require-jsdoc
    get values() {
        return this.state.values;
    }

    // eslint-disable-next-line require-jsdoc
    set values(value) {
        value !== null ? this.rangeslider.setAttribute('values', value) : this.rangeslider.removeAttribute('values');
    }

    // eslint-disable-next-line require-jsdoc
    get step() {
        return this.state.step;
    }

    // eslint-disable-next-line require-jsdoc
    set step(value) {
        value !== null ? this.rangeslider.setAttribute('step', value) : this.rangeslider.removeAttribute('step');
    }

    // eslint-disable-next-line require-jsdoc
    get customHandle() {
        return this.state.customHandle;
    }

    // eslint-disable-next-line require-jsdoc
    set customHandle(value) {
        value !== null ? this.rangeslider.setAttribute('custom-handle', value) : this.rangeslider.removeAttribute('custom-handle');
    }

    // eslint-disable-next-line require-jsdoc
    get customHandleLeft() {
        return this.state.customHandleLeft;
    }

    // eslint-disable-next-line require-jsdoc
    set customHandleLeft(value) {
        value !== null ? this.rangeslider.setAttribute('custom-handle-left', value) : this.rangeslider.removeAttribute('custom-handle-left');
    }

    // eslint-disable-next-line require-jsdoc
    get customHandleRight() {
        return this.state.customHandleRight;
    }

    // eslint-disable-next-line require-jsdoc
    set customHandleRight(value) {
        value !== null ? this.rangeslider.setAttribute('custom-handle-right', value) : this.rangeslider.removeAttribute('custom-handle-right');
    }

    // eslint-disable-next-line require-jsdoc
    get polsNumber() {
        return this.state['pols-number'] + 1;
    }

    // eslint-disable-next-line require-jsdoc
    set polsNumber(value) {
        if (!this.grid) {
            console.warn('You can\'t set polsNumber when grid is not enabled');
            return;
        }

        this.rangeslider.setAttribute('pols-number', value);
    }

    /**
     * Handler when attribute of rangeslider is changed
     * @param {string} name
     * @param {any} oldValue
     * @param {any} value
     */
    attributeChanged(name, oldValue, value) {
        // We want to update the rangeslider each time value attribute has changed
        // even though the oldValue and value are the same.
        // The case is that I can change the value of the slider by moving it and then I want to change the value
        // via attribute change and if it is the same as the old one the slider UI won't update.
        if (oldValue === value && name !== 'value') return;
        this.updateAttributeState(name, oldValue, value);
    }

    /* eslint-disable max-lines-per-function */
    /**
     * Will update the state properties linked with the checkbox attributes
     * @param {string} name
     * @param {string|boolean|array} oldValue
     * @param {string|boolean|array} value
    */
    updateAttributeState(name, oldValue, value) {
        switch (name) {
            case 'values':
                this.updateValuesState(oldValue, value);
                break;
            case 'min':
            case 'max':
                this.updateMinMaxState(name, value);
                break;
            case 'step':
                this.updateStepState(value);
                break;
            case 'value':
                this.updateValueState(value);
                break;
            case 'thumb':
                this.updateThumbState(value !== null);
                break;
            case 'grid':
                this.updateGridState(value !== null);
                break;
            case 'custom-handle':
            case 'custom-handle-right':
            case 'custom-handle-left':
                this.updateCustomHandleState(name, value);
                break;
            case 'pols-number':
                this.updatePolsNumberState(value);
                break;
        }
    }

    /* eslint-enable max-lines-per-function */

    /**
     * Will update the target elements of the custom handles
     * @param {string} name
     * @param {string} value
     */
    updateCustomHandleState(name, value) {
        this.initCustomHandles();
    }

    /**
     * Will update the slider when min or max is changed
     * @param {string} name
     * @param {string} value
     */
    updateMinMaxState(name, value) {
        throw new Error('Method \'updateMinMaxState()\' must be implemented.');
    }

    /**
     * Will update UI of the rangeslider with its current value
     * Useful when the step, min, max or thumb are changed
     */
    updateSliderPositionWithCurrentValue() {
        throw new Error('Method \'updateSliderPositionWithCurrentValue()\' must be implemented.');
    }

    /**
     * Will update UI of the rangeslider when its `values` attribute has changed
     * @param {array} oldValue
     * @param {array} newValue
     */
    updateValuesState(oldValue, newValue) {
        throw new Error('Method \'updateValuesState()\' must be implemented.');
    }

    /**
     * Will update UI of the rangeslider when its `value` attribute has changed
     * @param {number|string} value
     */
    updateValueState(value) {
        throw new Error('Method \'updateValueState()\' must be implemented.');
    }

    /**
     * Will update the slider when step is changed
     * @param {number} value
     */
    updateStepState(value) {
        let numericValue = value !== null ? parseFloat(value) : 1;
        numericValue = !isNaN(numericValue) ? numericValue : 1;
        if (!this.rangeslider.isStatePropValid('step', numericValue)) return;
        this.state.step = numericValue;
        this.updateSliderPositionWithCurrentValue();
    }

    /**
     * @param {boolean} value
     */
    updateGridState(value) {
        if (!this.rangeslider.isStatePropValid('grid', value)) return;
        this.toggleGrid(value);
        this.state.grid = value;
    }

    /**
     * @param {boolean} value
     */
    updateThumbState(value) {
        if (!this.rangeslider.isStatePropValid('thumb', value)) return;
        this.state.thumb = value;
        this.toggleThumb(value);
    }

    /**
     * @param {number} value
     * @returns {void}
     */
    updatePolsNumberState(value) {
        value = parseInt(value);
        if (!this.rangeslider.isStatePropValid('pols-number', value)) return;
        if (isNaN(value)) return console.warn('The number of pols should be a number.');

        if (value < 2) {
            value = 2;
            console.warn('The number of pols should be greater than 1. Setting it to 2.');
        }
        this.state['pols-number'] = value - 1;

        this.toggleGrid(true);
    }

    /**
     * Will toggle thumb
     * @param {boolean} visible
     */
    toggleThumb(visible) {
        if (this.thumbElement) {
            if (this.thumbElement.length && typeof this.thumbElement === 'object') {
                this.thumbElement.forEach(el => this.rangesliderEl.removeChild(el));
            } else {
                this.rangesliderEl.removeChild(this.thumbElement);
            }
            this.thumbElement = null;
        }

        if (visible) {
            this.setThumb();
            this.updateSliderPositionWithCurrentValue();
        }
    }

    /**
     * Will toggle grid
     * @param {boolean} visible
     */
    toggleGrid(visible) {
        if (this.grid) this.rangesliderEl.removeChild(this.rangesliderEl.querySelector(`.guic-${this.rangeslider.orientation}-rangeslider-grid`));

        if (visible) this.buildGrid();
    }

    /**
     * Will load the template of the rageslider
     */
    loadTemplate() {
        // check if component has already been rendered if not
        if (typeof this.rangeslider.template !== 'object') {
            // use the template for the current slider orientation and number of handles
            this.rangeslider.template = this.getTemplate(this.rangeslider.orientation);
        }

        components$3
            .loadResource(this.rangeslider)
            .then(this.init)
            .catch(err => console.error(JSON.stringify(err)));
    }

    /**
     * Initialize the custom component.
     * Set template, attach event listeners, setup initial state etc.
     * @param {object} data
    */
    init(data) {
        this.rangeslider.setupTemplate(data, () => {
            components$3.renderOnce(this.rangeslider);
            // do the initial setup - add event listeners, assign members
            this.setup();
        });
    }

    /**
     * Will setup the slider
     */
    setupSlider() {
        this.wrapper = this.rangeslider.querySelector(`.guic-${this.rangeslider.orientation}-rangeslider-wrapper`);
        this.rangesliderEl = this.rangeslider.querySelector(`.guic-${this.rangeslider.orientation}-rangeslider`);
        this.bar = this.rangeslider.querySelector(`.guic-${this.rangeslider.orientation}-rangeslider-bar`);

        this.setMinAndMax();
        this.setHandleValues();

        // if the grid attribute is added, the grid is created
        if (this.grid) this.buildGrid();

        this.setThumb();

        // sets the initial percent of the handles
        this.updateSliderPositionWithCurrentValue();
        this.initCustomHandles();
        this.updateCustomHandles();
        this.attachEventListener();
    }

    /**
    * Set the initial slider state
    */
    initSliderState() {
        // the step of the slider
        this.state.step = parseFloat(this.rangeslider.getAttribute('step')) || 1;

        // if there is a grid
        this.state.grid = this.rangeslider.hasAttribute('grid');
        // if there are thumbs
        this.state.thumb = this.rangeslider.hasAttribute('thumb');

        this.state['pols-number'] = parseInt(this.rangeslider.getAttribute('pols-number')) - 1 || 4;

        /**
         * The names of the units are different for the two slider types.
         * ['clientY', 'height', 'top', 'y'] for vertical and
         * ['clientX', 'width', 'left', 'x'] for horizontal
         */
        this.units = orientationUnitsNames.get(this.rangeslider.orientation);
    }

    /**
     * Calculates the position of the slider in percent based on the mouse coordinates
     * @param {MouseEvent} e
     * @returns {Number} Position in percent
     */
    getHandlePercent(e) {
        // we calculate the offsetX or offsetY of the click event
        const rangesliderRect = this.getRangeSliderSize();
        const size = rangesliderRect[this.units.size];
        const coordinate = rangesliderRect[this.units.coordinate];

        const mouseCoords = e[this.units.mouseAxisCoords];

        let offset = mouseCoords - coordinate;
        if (this.rangeslider.orientation === 'vertical') {
            offset = coordinate + size - mouseCoords;
        }

        return valueToPercent(offset, 0, size);
    }

    /**
     * Creates a grid pol
     * @param {number} value - value of the grid pol
     * @returns {HTMLDivElement}
     */
    createGridPol(value) {
        const polContainer = document.createElement('div');
        polContainer.classList.add(`guic-rangeslider-${this.rangeslider.orientation}-grid-pol-container`);

        polContainer.innerHTML = `
                <div class="guic-rangeslider-${this.rangeslider.orientation}-grid-pol guic-rangeslider-${this.rangeslider.orientation}-pol-without-text"></div>
            `;

        // checks if the passed value is a string or number and then makes a pol with value
        if (typeof value === 'number' || typeof value === 'string') {
            polContainer.innerHTML = `
                    <div class="guic-rangeslider-${this.rangeslider.orientation}-grid-pol"></div>
                    <div class="guic-rangeslider-${this.rangeslider.orientation}-grid-text">${value}</div>
                `;
        }

        return polContainer;
    }

    /**
     * Will add custom handle selectors to the rangeslider
     * @param {Object} customHandleSelectors
     */
    addCustomHandles(customHandleSelectors) {
        for (const key of Object.keys(customHandleSelectors)) {
            const customHandleVariableName = customHandleVariableNames[key];
            const customHandleSelector = customHandleSelectors[key];

            this.state[customHandleVariableName] = customHandleSelector ?
                document.querySelector(customHandleSelector) :
                null;
            validateCustomHandle(customHandleSelector, this[customHandleVariableName]);
        }
    }

    /**
     * Creates the thumb element
     * @param {number | string} value - the initial value of the thumb
     */
    buildThumb(value) {
        const thumb = document.createElement('div');
        thumb.classList.add(`guic-${this.rangeslider.orientation}-rangeslider-thumb`);
        thumb.textContent = value;
        this.rangesliderEl.appendChild(thumb);
    }

    /**
     * Gets the rangeslider dimensions
     * @returns {DOMRect}
     */
    getRangeSliderSize() {
        return this.wrapper.getBoundingClientRect();
    }

    /**
     * Calculates the value of the handle based on the position of the handle
     * @param {number} percent - the percent position
     * @returns {number} - the value of the handle
     */
    calculateHandleValue(percent) {
        return parseFloat(parseInt(this.min) + (this.max - this.min) * (percent / 100));
    }

    /**
     * Attaches the event listener
     */
    attachEventListener() {
        this.rangeslider.querySelector(`.guic-${this.rangeslider.orientation}-rangeslider-wrapper`).addEventListener('mousedown', this.onMouseDown);
    }

    /**
     * Removes the event listeners that we attach in onMouseDown
     */
    onMouseUp() {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    }
}

const components$2 = new Components();

/**
 * This class holds common methods and data for all the rangesliders with a single handle
 */
class SingleHandleRangeSliderBase extends RangeSliderBase {
    /**
     * @param {Rangeslider} rangeslider - The gameface-rangeslider custom element
     */
    constructor(rangeslider) {
        if (new.target === SingleHandleRangeSliderBase) {
            throw new TypeError('Cannot construct SingleHandleRangeSliderBase instances directly');
        }
        super(rangeslider);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);

        this.state = {
            min: 0,
            max: 100,
            grid: false,
            thumb: false,
            step: 1,
            value: undefined,
            customHandle: null,
        };
    }

    // The derived class should override the next methods because they behave differently for basic and values range slider
    // OVERRIDE START
    /**
     * Will get the percentage of the current value
     * @returns {number}
     */
    getCurrentValuePercent() { return 0; }
    /**
     * Updates the positions of the handles and the width of the bar
     * @param {number} percent
     */
    updateSliderPosition(percent) {
        throw new Error('Method \'updateSliderPosition()\' must be implemented.');
    }
    // OVERRIDE END

    /**
     * Checks if the range slider has value
     * @returns {boolean}
     */
    valueMissing() {
        if (!this.value) return true;
        return false;
    }

    /**
     * Gets the correct template to be loaded for the rangeslider
     * @param {string} orientation - the orientation of the slider
     * @returns {string}
     */
    getTemplate(orientation) {
        if (orientation === 'vertical') return verticalTemplate;

        return horizontalTemplate;
    }

    /**
     * Sets up the rangeslider, draws the additional things like grid and thumbs, attaches the event listeners
     */
    setup() {
        components$2.waitForFrames(() => {
            this.handle = this.rangeslider.querySelector(`.guic-${this.rangeslider.orientation}-rangeslider-handle`);
            this.setupSlider();
        }, 3);
    }

    /**
     * Will set the thumb if this option is enabled
     */
    setThumb() {
        // if the thumb attribute is added, the thumbs are created
        if (this.thumb) {
            this.buildThumb(this.value);

            this.thumbElement = this.rangeslider.querySelector(`.guic-${this.rangeslider.orientation}-rangeslider-thumb`);
        }
    }

    /**
    * Will initialize the custom handles variables
    */
    initCustomHandles() {
        const customHandleSelectors = {
            SINGLE: this.rangeslider.getAttribute('custom-handle'),
        };

        this.addCustomHandles(customHandleSelectors);
    }

    /**
     * Will update the handles values depending of if they are two or a single one
     * @returns {void}
     */
    updateCustomHandles() {
        if (this.customHandle && this.value !== undefined) this.customHandle.textContent = this.value;
    }

    /**
     * Will set the bar styles
     * @param {number} percent
     */
    setBarStyles(percent) {
        if (this.handle) this.handle.style[this.units.position] = `${this.rangeslider.orientation === 'vertical' ? 100 - percent : percent}%`;

        if (this.bar) this.bar.style[this.units.size] = `${percent}%`;
    }

    /**
     * Will change the thumb position
     * @param {number} percent
     */
    setThumbPosition(percent) {
        if (this.thumb) {
            this.thumbElement.innerHTML = this.value;
            this.thumbElement.style[this.units.position] = `${this.rangeslider.orientation === 'vertical' ? 100 - percent : percent}%`;
        }
    }

    /**
     * Executed on mousedown. Sets the handle to the clicked coordinates and attaches event listeners to the document
     * @param {MouseEvent} e
     */
    onMouseDown(e) {
        const percent = this.getHandlePercent(e);
        this.updateSliderPosition(percent);

        // attaching event listeners on mousedown so we don't have them attached all the time
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }

    /**
     * Moving the handle with the mouse
     * @param {MouseEvent} e
     */
    onMouseMove(e) {
        const percent = this.getHandlePercent(e);

        this.updateSliderPosition(percent);
    }
}

const SPACE_BETWEEN_GRID_POLS$1 = 10;

/**
 * This is the basic rangeslider which has single thumb and works with numeric values.
 */
class BasicRangeSlider extends SingleHandleRangeSliderBase {
    /**
     * @param {Rangeslider} rangeslider - The gameface-rangeslider custom element
     */
    constructor(rangeslider) {
        super(rangeslider);
    }

    /** @inheritdoc */
    connectedCallback() {
        this.initSliderState();
        this.loadTemplate();
    }

    /** @inheritdoc */
    updateValueState(value) {
        value = parseFloat(value);

        if (isNaN(value) || (this.min > value && this.max < value)) {
            this.value = this.min;
            return;
        }

        this.state.value = value;
        this.updateSliderPositionWithCurrentValue();
    }

    /** @inheritdoc */
    getCurrentValuePercent() {
        return valueToPercent(this.value, this.min, this.max);
    }

    /** @inheritdoc */
    updateMinMaxState(name, value) {
        this.setMinAndMax();
        const defaultValue = name === 'min' ? this.min : this.max;
        this.value = this.min <= this.value && this.max >= this.value ? this.value : defaultValue;
        this.toggleGrid(this.grid);
        this.updateSliderPositionWithCurrentValue();
    }

    /** @inheritdoc */
    setMinAndMax() {
        const min = parseFloat(this.rangeslider.getAttribute('min'));
        const max = parseFloat(this.rangeslider.getAttribute('max'));
        this.state.min = !isNaN(min) ? min : 0;
        this.state.max = !isNaN(min) ? max : 100;
    }

    /** @inheritdoc */
    setHandleValues() {
        let valueAttr = this.rangeslider.getAttribute('value');

        valueAttr = parseFloat(valueAttr);
        this.state.value = !isNaN(valueAttr) ? valueAttr : this.min;

        // checks if the value provided is less than the min or more than the max and sets it to the minimum value
        this.state.value = this.min <= this.value && this.max >= this.value ? this.value : this.min;
    }

    /** @inheritdoc */
    buildGrid() {
        // calculates the number of pols the grid will have based on the size of the slider
        // eslint-disable-next-line max-len
        const numberOfPols = Math.round(this.wrapper[this.units.offset] / SPACE_BETWEEN_GRID_POLS$1 / this.state['pols-number']) * this.state['pols-number']; // here we round to a number that is divisible by 4 and to make sure, the last pol has a number
        const grid = document.createElement('div');
        grid.classList.add(`guic-${this.rangeslider.orientation}-rangeslider-grid`);
        for (let i = 0; i <= numberOfPols; i++) {
            // each forth poll will be larger with a value added
            if (i % (numberOfPols / this.state['pols-number']) === 0) {
                grid.appendChild(
                    this.createGridPol(
                        parseFloat((parseInt(this.min) + (this.max - this.min) * (i / numberOfPols)).toFixed(2))
                    )
                );
                continue;
            }
            grid.appendChild(this.createGridPol());
        }

        this.rangesliderEl.appendChild(grid);
    }

    /** @inheritdoc */
    updateSliderPositionWithCurrentValue() {
        const percent = this.getCurrentValuePercent();

        this.updateSliderPosition(percent);
    }

    /** @inheritdoc */
    updateSliderPosition(percent) {
        // The percent of the step that is set
        const percentStep = valueToPercent(this.step + this.min, this.min, this.max);

        // the range which should be clamped
        const clampRange = [0, 100];

        // the provided percent is clamped
        percent = clamp(Math.round(percent / percentStep) * percentStep, ...clampRange);

        const newValue = parseFloat(this.calculateHandleValue(percent).toFixed(2));
        if (newValue !== this.value) {
            this.value = newValue;
            return;
        }

        this.setBarStyles(percent);
        this.setThumbPosition(percent);
        this.updateCustomHandles();
        // dispatching a custom event with the rangeslider values
        this.rangeslider.dispatchEvent(new CustomEvent('sliderupdate', { detail: this.value }));
    }
}

/**
 * This is the rangeslider with values array which has single thumb and works with string values.
 */
class ValuesRangeSlider extends SingleHandleRangeSliderBase {
    /**
     * @param {Rangeslider} rangeslider - The gameface-rangeslider custom element
     */
    constructor(rangeslider) {
        super(rangeslider);
        this.state.values = [];
    }

    /** @inheritdoc */
    updateValuesState(oldValue, newValue) {
        this.state.values = newValue;
        this.toggleGrid(this.grid);
        this.updateSliderPositionWithCurrentValue();
    }

    /** @inheritdoc */
    updateValueState(value) {
        this.state.value = value;
        this.updateSliderPositionWithCurrentValue();
    }

    /** @inheritdoc */
    updateSliderPositionWithCurrentValue() {
        const percent = this.getCurrentValuePercent();
        if (percent < 0) {
            this.value = this.values[0];
            return;
        }
        this.updateSliderPosition(percent);
    }

    /** @inheritdoc */
    connectedCallback() {
        const valuesArray = JSON.parse(this.rangeslider.getAttribute('values'));

        this.state.values = Array.isArray(valuesArray) ? valuesArray : [];

        if (!this.state.values.length) console.warn('You need to pass the data in the correct data format - Array<string>.');

        this.initSliderState();
        this.loadTemplate();
    }

    /** @inheritdoc */
    getCurrentValuePercent() {
        return this.values.findIndex(el => el === this.value) * (100 / (this.values.length - 1));
    }

    /** @inheritdoc */
    buildGrid() {
        const grid = document.createElement('div');
        grid.classList.add(`guic-${this.rangeslider.orientation}-rangeslider-grid`);
        // builds only pols for the values of the array
        for (let i = 0; i < this.values.length; i++) {
            const entry = this.values[i];
            grid.appendChild(this.createGridPol(entry));
        }

        this.rangesliderEl.appendChild(grid);
    }

    /** @inheritdoc */
    setMinAndMax() {
        // if we have an array we set the min and max values to the first and last entry of the array
        this.state.min = this.values[0];
        this.state.max = this.values[this.values.length - 1];
    }

    /** @inheritdoc */
    setHandleValues() {
        const valueAttr = this.rangeslider.getAttribute('value');

        this.state.value = valueAttr !== null ? valueAttr : this.min;
    }

    /** @inheritdoc */
    updateSliderPosition(percent) {
        // The percent of the step that is set, if the values are an array, the step is between each array value
        const percentStep = 100 / (this.values.length - 1);

        // the range which should be clamped
        const clampRange = [0, 100];

        // the provided percent is clamped
        percent = clamp(Math.round(percent / percentStep) * percentStep, ...clampRange);

        const newValue = this.values[percent / percentStep];
        if (newValue !== this.value) {
            this.value = newValue;
            return;
        }

        this.setBarStyles(percent);
        this.setThumbPosition(percent);
        this.updateCustomHandles();
        // dispatching a custom event with the rangeslider values
        this.rangeslider.dispatchEvent(new CustomEvent('sliderupdate', { detail: this.value }));
    }
}

var verticalTemplateTwoHandles = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-vertical-rangeslider-wrapper\">    <div class=\"guic-vertical-rangeslider\">        <div class=\"guic-vertical-rangeslider-handle handle-0\"></div>        <div class=\"guic-vertical-rangeslider-bar\"></div>        <div class=\"guic-vertical-rangeslider-handle handle-1\"></div>    </div></div>";

var horizontalTemplateTwoHandles = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-horizontal-rangeslider-wrapper\">    <div class=\"guic-horizontal-rangeslider\">        <div class=\"guic-horizontal-rangeslider-handle handle-0\"></div>        <div class=\"guic-horizontal-rangeslider-bar\"></div>        <div class=\"guic-horizontal-rangeslider-handle handle-1\"></div>    </div></div>";

const components$1 = new Components();

/**
 * This class holds common methods and data for all the rangesliders
 */
class TwoHandlesRangeSliderBase extends RangeSliderBase {
    /**
     * @param {Rangeslider} rangeslider - The gameface-rangeslider custom element
     */
    constructor(rangeslider) {
        if (new.target === TwoHandlesRangeSliderBase) {
            throw new TypeError('Cannot construct TwoHandlesRangeSliderBase instances directly');
        }
        super(rangeslider);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);

        this.state = {
            min: 0,
            max: 100,
            grid: false,
            thumb: false,
            step: 1,
            value: [],
            customHandleLeft: null,
            customHandleRight: null,
        };
    }

    // The derived class should override the next methods because they behave differently for basic and values range slider
    // OVERRIDE START
    /**
     * Updates the positions of the handles and the width of the bar
     * @param {number} percent
     * @param {number} index
     */
    updateSliderPosition(percent, index) {
        throw new Error('Method \'updateSliderPosition()\' must be implemented.');
    }
    // OVERRIDE END

    /**
     * Checks if the range slider has value
     * @returns {boolean}
     */
    valueMissing() {
        if (!this.value && !this.value[0]) return true;
        return false;
    }

    /**
     * Gets the correct template to be loaded for the rangeslider
     * @param {string} orientation - the orientation of the slider
     * @returns {string}
     */
    getTemplate(orientation) {
        if (orientation === 'vertical') return verticalTemplateTwoHandles;

        return horizontalTemplateTwoHandles;
    }

    /**
     * Will set the thumb if this option is enabled
     */
    setThumb() {
        // if the thumb attribute is added, the thumbs are created
        if (this.thumb) {
            // creates two thumbs
            this.value.forEach(val => this.buildThumb(val));
            this.thumbElement = this.rangeslider.querySelectorAll(`.guic-${this.rangeslider.orientation}-rangeslider-thumb`);
        }
    }

    /**
     * Will initialize the custom handles variables
     */
    initCustomHandles() {
        const customHandleSelectors = {
            LEFT: this.rangeslider.getAttribute('custom-handle-left'),
            RIGHT: this.rangeslider.getAttribute('custom-handle-right'),
        };

        this.addCustomHandles(customHandleSelectors);
    }

    /**
     * Sets up the rangeslider, draws the additional things like grid and thumbs, attaches the event listeners
     */
    setup() {
        components$1.waitForFrames(() => {
            this.handle = this.rangeslider.querySelectorAll(`.guic-${this.rangeslider.orientation}-rangeslider-handle`);
            this.setupSlider();
        }, 3);
    }

    /**
     * Will update the handles values depending of if they are two or a single one
     * @returns {void}
     */
    updateCustomHandles() {
        if (this.customHandleLeft && this.value[0] !== undefined) {
            this.customHandleLeft.textContent = this.value[0];
        }

        if (this.customHandleRight && this.value[1] !== undefined) {
            this.customHandleRight.textContent = this.value[1];
        }
    }

    /**
     * If we have two handles we need to clamp each so that it doesn't pass beyond the other handle
     * @param {number[]} clampRange
     * @param {number} index
     * @returns {number[]}
     */
    clampTwoHandles(clampRange, index) {
        const handleZeroPosition = this.handle[0].style[this.units.position];
        const handleOnePosition = this.handle[1].style[this.units.position];

        if (index === 0) {
            clampRange = this.rangeslider.orientation === 'vertical' ?
                [0, 100 - parseFloat(handleOnePosition)] :
                [0, parseFloat(handleOnePosition)];
        } else if (index === 1) {
            clampRange = this.rangeslider.orientation === 'vertical' ?
                [100 - parseFloat(handleZeroPosition), 100] :
                [parseFloat(handleZeroPosition), 100];
        }

        return clampRange;
    }

    /**
     * Returns the disance between the two handles
     * @returns {number}
     */
    getDistanceBetweenTwoHandles() {
        const firstHandlePositionValue = this.handle[0].style[this.units.position];
        const secondHandlePositionValue = this.handle[1].style[this.units.position];

        return Math.abs(parseFloat(firstHandlePositionValue) - parseFloat(secondHandlePositionValue));
    }

    /**
     * Will set the bar styles
     * @param {number} index
     * @param {number} percent
     */
    setBarStyles(index, percent) {
        this.handle[index].style[this.units.position] = `${this.rangeslider.orientation === 'vertical' ? 100 - percent : percent}%`;

        // we get the distance between two handles to set the width of the bar to
        const distanceBetweenHandles = this.getDistanceBetweenTwoHandles();

        this.bar.style[this.units.size] = `${distanceBetweenHandles}%`;

        if (index === 0) {
            this.bar.style[this.units.position] = `${this.rangeslider.orientation === 'vertical' ? 100 - percent : percent}%`;
        }
    }

    /**
     * Will change the thumb position
     * @param {number} percent
     * @param {number} index - the index of the handle we want to update
     */
    setThumbPosition(percent, index) {
        if (this.thumb) {
            this.thumbElement[index].innerHTML = this.value[index];
            this.thumbElement[index].style[this.units.position] = `${this.rangeslider.orientation === 'vertical' ? 100 - percent : percent}%`;
        }
    }

    /**
     * Will get the closest handle to the mouse position in percent
     * @param {number} percent
     * @returns {number}
     */
    getClosestHandleToMousePosition(percent) {
        const distance = [];

        for (let i = 0; i < this.handle.length; i++) {
            const pos = parseInt(this.handle[i].style[this.units.position]);
            distance.push(Math.abs(pos - percent));
        }

        return this.rangeslider.orientation === 'vertical' ?
            distance.reverse().indexOf(Math.min(...distance)) :
            distance.indexOf(Math.min(...distance));
    }

    /**
     * Make a handle active by setting the correct class names
     * @param {HTMLElement} handle
     */
    setActiveHandle(handle) {
        handle.setAttribute('active', '');
    }

    /**
     * Make a handle inactive by setting the correct class names
     * @param {HTMLElement} handle
     */
    setInactiveHandle(handle) {
        handle.removeAttribute('active');
    }

    /**
     * Executed on mousedown. Sets the handle to the clicked coordinates and attaches event listeners to the document
     * @param {MouseEvent} e
     */
    onMouseDown(e) {
        const percent = this.getHandlePercent(e);

        const currentActiveHandle = this.handle[this.activeHandle];
        if (currentActiveHandle) this.setInactiveHandle(currentActiveHandle);

        const targetClassList = e.target?.classList;
        if (targetClassList && (targetClassList.contains('guic-horizontal-rangeslider-handle') ||
            targetClassList.contains('guic-vertical-rangeslider-handle')) ) {
            targetClassList.contains('handle-1') ? this.activeHandle = 1 : this.activeHandle = 0;
        } else {
            this.activeHandle = this.getClosestHandleToMousePosition(percent);
        }

        this.setActiveHandle(this.handle[this.activeHandle]);

        this.updateSliderPosition(percent, this.activeHandle);

        // attaching event listeners on mousedown so we don't have them attached all the time
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }

    /**
     * Moving the handle with the mouse
     * @param {MouseEvent} e
     */
    onMouseMove(e) {
        const percent = this.getHandlePercent(e);

        this.updateSliderPosition(percent, this.activeHandle);
    }
}

const SPACE_BETWEEN_GRID_POLS = 10;

/**
 * This is the basic rangeslider which has two thumbs and works with array with numeric values.
 */
class BasicTwoHandlesRangeSlider extends TwoHandlesRangeSliderBase {
    /**
     * @param {Rangeslider} rangeslider - The gameface-rangeslider custom element
     */
    constructor(rangeslider) {
        super(rangeslider);
    }

    /** @inheritdoc */
    connectedCallback() {
        this.initSliderState();
        this.loadTemplate();
    }

    /**
     * Don't allow state values to be set outside of the min/max range.
     * @param {array} valueArray
     */
    clampStateValues(valueArray) {
        if (valueArray[0] < this.min) {
            this.state.value[0] = this.min;
        } else {
            this.state.value[0] = valueArray[0];
        }

        if (valueArray[1] > this.max) {
            this.state.value[1] = this.max;
        } else {
            this.state.value[1] = valueArray[1];
        }
    }

    /**
     * Will update UI of the rangeslider when its `value` attribute has changed
     * @param {number[]} value
     */
    updateValueState(value) {
        // This is needed because of the way attributeChangedCallback
        // gets the value and is received here.
        // E.g. rangeslider.value = [20, 50] - it gets to here as "20,50".
        const valueArray = Array.from(value.split(','), Number);

        // This allows using a number or array with one value from the setter.
        if (!valueArray[1] && !Number.isNaN(valueArray[1])) valueArray[1] = this.state.value[1];

        for (let i = 0; i < valueArray.length; i++) {
            if (Number.isNaN(valueArray[i])) {
                console.error('Setter for Rangeslider with two handles can only receive a number or an array of numbers.');
                return;
            }
        }

        this.clampStateValues(valueArray);

        this.updateSliderPositionWithCurrentValue();
    }

    /** @inheritdoc */
    updateMinMaxState() {
        this.setMinAndMax();
        this.toggleGrid(this.grid);
        this.updateSliderPositionWithCurrentValue();
    }

    /** @inheritdoc */
    setMinAndMax() {
        const min = parseFloat(this.rangeslider.getAttribute('min'));
        const max = parseFloat(this.rangeslider.getAttribute('max'));
        this.state.min = !isNaN(min) ? min : 0;
        this.state.max = !isNaN(min) ? max : 100;
    }

    /** @inheritdoc */
    setHandleValues() {
        this.state.value = [this.min, this.max];
    }

    /** @inheritdoc */
    buildGrid() {
        // calculates the number of pols the grid will have based on the size of the slider
        // eslint-disable-next-line max-len
        const numberOfPols = Math.round(this.wrapper[this.units.offset] / SPACE_BETWEEN_GRID_POLS / this.state['pols-number']) * this.state['pols-number']; // here we round to a number that is divisible by 4 and to make sure, the last pol has a number
        const grid = document.createElement('div');
        grid.classList.add(`guic-${this.rangeslider.orientation}-rangeslider-grid`);
        for (let i = 0; i <= numberOfPols; i++) {
            // each forth poll will be larger with a value added
            if (i % (numberOfPols / this.state['pols-number']) === 0) {
                grid.appendChild(
                    this.createGridPol(
                        parseFloat((parseInt(this.min) + (this.max - this.min) * (i / numberOfPols)).toFixed(2))
                    )
                );
                continue;
            }
            grid.appendChild(this.createGridPol());
        }

        this.rangesliderEl.appendChild(grid);
    }

    /** @inheritdoc */
    getCurrentValuePercent() {
        const valuesInPercent = [null, null];

        for (let i = 0; i < valuesInPercent.length; i++) {
            valuesInPercent[i] = valueToPercent(this.state.value[i], this.min, this.max);
        }

        return valuesInPercent;
    }

    /** @inheritdoc */
    updateSliderPositionWithCurrentValue() {
        const percent = this.getCurrentValuePercent();
        percent.forEach((p, i) => this.updateSliderPosition(p, i));
    }

    /** @inheritdoc */
    updateSliderPosition(percent, index) {
        // The percent of the step that is set, if the values are an array, the step is between each array value
        const percentStep = valueToPercent(this.step + this.min, this.min, this.max);

        // the range which should be clamped
        let clampRange = [0, 100];

        if (this.handle[1].style[this.units.position]) {
            clampRange = this.clampTwoHandles(clampRange, index);
        }

        // the provided percent is clamped
        percent = clamp(Math.round(percent / percentStep) * percentStep, ...clampRange);

        this.setBarStyles(index, percent);

        this.state.value[index] = parseFloat(this.calculateHandleValue(percent).toFixed(2));

        this.setThumbPosition(percent, index);
        this.updateCustomHandles();
        // dispatching a custom event with the rangeslider values
        this.rangeslider.dispatchEvent(new CustomEvent('sliderupdate', { detail: this.value }));
    }
}

/* eslint-disable linebreak-style */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components = new Components();

const RANGE_SLIDERS_TYPES = {
    BASIC: 'basic',
    VALUES: 'values',
    BASIC_TWO_HANDLES: 'basic_two_handles',
};
const CustomElementValidator = components.CustomElementValidator;
const stateSchema = {
    min: { type: ['number'] },
    max: { type: ['number'] },
    value: { type: ['number', 'string'] },
    values: { type: ['array'] },
    ['two-handles']: { type: ['boolean'] },
    grid: { type: ['boolean'] },
    thumb: { type: ['boolean'] },
    step: { type: ['number'] },
    orientation: { type: ['string'] },
    ['custom-handle']: { type: ['string'] },
    ['custom-handle-left']: { type: ['string'] },
    ['custom-handle-right']: { type: ['string'] },
    ['pols-number']: { type: ['number'] },
};

/**
 * Rangeslider component, allows you to specify a numeric value by using a slider.
 * It must be no less than a given value, and no more than another given value.
 */
class Rangeslider extends CustomElementValidator {
    // eslint-disable-next-line require-jsdoc
    static get observedAttributes() { return Object.keys(stateSchema); }

    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();
        this.rangesliderObject = null;
        this.stateSchema = stateSchema;
        this.state = {
            orientation: 'horizontal',
            ['two-handles']: false,
            ['pol-number']: 4,
        };
    }

    /**
     * Custom element lifecycle method. Called when an attribute is changed.
     * @param {string} name
     * @param {string} oldValue
     * @param {string|boolean|array} newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isRendered) return;

        this.updateAttributeState(name, oldValue, newValue);
    }

    /**
     * Will update the state properties linked with the checkbox attributes
     * @param {string} name
     * @param {string|boolean|array} oldValue
     * @param {string|boolean|array} value
     */
    updateAttributeState(name, oldValue, value) {
        switch (name) {
            case 'two-handles':
                this.updateTwoHandlesState(value !== null);
                break;
            case 'orientation':
                this.updateOrientationState(value);
                break;
            case 'values':
                this.updateValuesState(oldValue, value);
                break;
            case 'min':
            case 'max':
            case 'value':
            case 'thumb':
            case 'grid':
            case 'step':
            case 'custom-handle':
            case 'custom-handle-right':
            case 'custom-handle-left':
            case 'pols-number':
                this.rangesliderObject.attributeChanged(name, oldValue, value);
                break;
        }
    }

    /**
     * Update the checkbox's state.
     * @param {string} name - the name of the prop
     * @param {string | boolean} value - the value of the the prop
     * @returns {void}
     */
    updateState(name, value) {
        if (!this.isStatePropValid(name, value)) return;
        this.state[name] = value;
    }

    /**
     * Will update the rangeslider when orientation attribute is changed
     * @param {string} value
     */
    updateOrientationState(value) {
        const orientation = checkOrientation(value);
        this.updateState('orientation', orientation);
        this.reRender();
    }

    /**
     * Will update the rangeslider when two-handles attribute is changed
     * @param {boolean} value
     */
    updateTwoHandlesState(value) {
        this.updateState('two-handles', value);
        this.reRender();
    }

    /**
     * Will update the rangeslider when values attribute is changed
     * @param {array} oldValue
     * @param {array} value
     * @returns {void}
     */
    updateValuesState(oldValue, value) {
        value = JSON.parse(value);
        if (oldValue !== null && value === null) return this.reRender();

        if (!this.isStatePropValid('values', value)) return;
        if (oldValue === null && value !== null) return this.reRender();
        if (oldValue !== null && value !== null) return this.rangesliderObject.attributeChanged('values', oldValue, value);
    }

    // eslint-disable-next-line require-jsdoc
    get twoHandles() {
        return this.state['two-handles'];
    }

    // eslint-disable-next-line require-jsdoc
    set twoHandles(value) {
        value ? this.setAttribute('two-handles', '') : this.removeAttribute('two-handles');
    }

    // eslint-disable-next-line require-jsdoc
    get orientation() {
        return this.state.orientation;
    }

    // eslint-disable-next-line require-jsdoc
    set orientation(value) {
        value !== null ? this.setAttribute('orientation', value) : this.removeAttribute('orientation');
    }

    // eslint-disable-next-line require-jsdoc
    get values() {
        return this.rangesliderObject.values;
    }

    // eslint-disable-next-line require-jsdoc
    set values(value) {
        value !== null ? this.setAttribute('values', JSON.stringify(value)) : this.removeAttribute('values');
    }

    // eslint-disable-next-line require-jsdoc
    get grid() {
        return this.rangesliderObject.grid;
    }

    // eslint-disable-next-line require-jsdoc
    set grid(value) {
        this.rangesliderObject.grid = value;
    }

    // eslint-disable-next-line require-jsdoc
    get thumb() {
        return this.rangesliderObject.thumb;
    }

    // eslint-disable-next-line require-jsdoc
    set thumb(value) {
        this.rangesliderObject.thumb = value;
    }

    /**
     * Sets the minimum value of the slider
     * @param {number} value
     */
    set min(value) {
        this.rangesliderObject.min = value;
    }

    /**
     * Gets the minimum value of the slider
     * @returns {number}
     */
    get min() {
        return this.rangesliderObject.min;
    }

    /**
     * Sets the maximum value of the slider
     * @param {number} value
     */
    set max(value) {
        this.rangesliderObject.max = value;
    }

    /**
     * Gets the maximum value of the slider
     * @returns {number}
     */
    get max() {
        return this.rangesliderObject.max;
    }

    // eslint-disable-next-line require-jsdoc
    get value() {
        return this.rangesliderObject.value;
    }

    // eslint-disable-next-line require-jsdoc
    set value(value) {
        this.rangesliderObject.value = value;
    }

    // eslint-disable-next-line require-jsdoc
    get step() {
        return this.rangesliderObject.step;
    }

    // eslint-disable-next-line require-jsdoc
    set step(value) {
        this.rangesliderObject.step = value;
    }

    // eslint-disable-next-line require-jsdoc
    get customHandle() {
        return this.rangesliderObject.customHandle;
    }

    // eslint-disable-next-line require-jsdoc
    set customHandle(value) {
        this.rangesliderObject.customHandle = value;
    }

    // eslint-disable-next-line require-jsdoc
    get customHandleLeft() {
        return this.rangesliderObject.customHandleLeft;
    }

    // eslint-disable-next-line require-jsdoc
    set customHandleLeft(value) {
        this.rangesliderObject.customHandleLeft = value;
    }

    // eslint-disable-next-line require-jsdoc
    get customHandleRight() {
        return this.rangesliderObject.customHandleRight;
    }

    // eslint-disable-next-line require-jsdoc
    set customHandleRight(value) {
        this.rangesliderObject.customHandleRight = value;
    }

    // eslint-disable-next-line require-jsdoc
    get polsNumber() {
        return this.rangesliderObject.polsNumber;
    }

    // eslint-disable-next-line require-jsdoc
    set polsNumber(value) {
        this.rangesliderObject.polsNumber = value;
    }

    /**
     * Will display a custom error if the slider has two handles and it is wrapped inside a gameface form control element
     * @returns {boolean}
     */
    customError() {
        if (this.hasAttribute('two-handles')) {
            console.warn('gameface-rangeslider component does not support form data when "two-handles" attribute is used!');
            return true;
        }

        return false;
    }

    /**
     * Will change the thumb position of the slider
     * This method is used from tests
     * @param {number} percent
     * @param {number} index - thumb index
     */
    updateSliderPosition(percent, index) {
        this.rangesliderObject.updateSliderPosition(percent, index);
    }

    /**
     * Used for testing purposes
     * @param {Event} e
     */
    onMouseDown(e) {
        this.rangesliderObject.onMouseDown(e);
    }

    /**
     * Used for testing purposes
     */
    onMouseUp() {
        this.rangesliderObject.onMouseUp();
    }

    /**
     * Used for testing purposes
     * @param {Event} e
     */
    onMouseMove(e) {
        this.rangesliderObject.onMouseMove(e);
    }

    /**
     * Checks if the range slider has value
     * @returns {boolean}
     */
    valueMissing() {
        return this.rangesliderObject.valueMissing();
    }

    /**
     * Will get the type of the rangeslider
     * @returns {RANGE_SLIDERS_TYPES}
     */
    getRangeSliderType() {
        if (this.twoHandles) return RANGE_SLIDERS_TYPES.BASIC_TWO_HANDLES;
        if (this.hasAttribute('values')) return RANGE_SLIDERS_TYPES.VALUES;

        return RANGE_SLIDERS_TYPES.BASIC;
    }

    /**
     * Factory for getting the rangeslider object based on its type
     * @returns {BasicRangeSlider|ValuesRangeSlider|BasicTwoHandlesRangeSlider}
     */
    getRangeSlider() {
        const type = this.getRangeSliderType();

        switch (type) {
            case RANGE_SLIDERS_TYPES.BASIC: return new BasicRangeSlider(this);
            case RANGE_SLIDERS_TYPES.VALUES: return new ValuesRangeSlider(this);
            case RANGE_SLIDERS_TYPES.BASIC_TWO_HANDLES: return new BasicTwoHandlesRangeSlider(this);
            default: {
                console.warn(`Unknown rangeslider type - ${type}. Will fallback to basic rangeslider.`);
                return new BasicRangeSlider(this);
            }
        }
    }

    /**
     * Will re-render the rangeslider from scratch
     */
    reRender() {
        this.template = undefined;
        this.isRendered = false;
        this.connectedCallback();
    }

    /**
     * Will init the state based on the initial attribute values
     */
    initState() {
        if (this.hasAttribute('orientation')) {
            const orientation = checkOrientation(this.getAttribute('orientation'));
            this.updateState('orientation', orientation);
        }
        this.updateState('two-handles', this.hasAttribute('two-handles'));
    }

    /**
     * Called when the element was attached to the DOM.
     */
    connectedCallback() {
        this.initState();
        if (this.rangesliderObject) {
            delete this.rangesliderObject;
            this.rangesliderObject = null;
        }

        this.rangesliderObject = this.getRangeSlider();
        this.rangesliderObject.connectedCallback();
    }
}

components.defineCustomElement('gameface-rangeslider', Rangeslider);

export { Rangeslider as default };
