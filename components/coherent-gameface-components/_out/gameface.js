/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/* eslint-disable no-useless-escape */
const newLinesRegExp = new RegExp('^\s+|\s+$', 'g');
const NATIVE_TEXT_FIELD_ELEMENTS = ['input', 'textarea'];
window.GUIComponentsDefinedElements = {};

if (!window.GUIComponentsDefinedElements) window.GUIComponentsDefinedElements = {};


/**
 * Checks if the passed element is a native text field
 * @param {HTMLElement} element
 * @returns {boolean}
 */
function isNativeTextField(element) {
    return NATIVE_TEXT_FIELD_ELEMENTS.indexOf(element.tagName.toLowerCase()) > -1;
}

/**
 * BaseComponent
 * The base class from which all other components inherit shared logic
 */
class BaseComponent extends HTMLElement {
    /**
     * Return the type of the class
     */
    get instanceType() {
        return 'BaseComponent';
    }
    /**
     * Called when the template of a component was loaded.
     * @param {object} data
     * @param {function} callback
     * @returns {undefined}
    */
    setupTemplate(data, callback) {
        if (!this.isConnected) {
            return console.log(`DEBUG: component ${this.tagName} was not initialized because it was disconnected from the DOM!`);
        }

        this.template = data.template;
        callback(data.template);
    }
    /**
     * Validate if a value can be set on the state.
     * @param {string} name - the name of the property.
     * @param {any} value - the value that has to be checked.
     * @returns {boolean}
     */
    isStatePropValid(name, value) {
        const schemaProperty = this.stateSchema[name];

        if (!schemaProperty) {
            console.error(`A property ${name} does not exist on type ${this.tagName.toLowerCase()}!`);
            return false;
        }

        const type = typeof value;
        if (schemaProperty.type.includes('array')) {
            const isArray = Array.isArray(value);
            if (isArray) return true;
        }

        if (!schemaProperty.type.includes(type)) {
            console.error(`Property ${name} can not be of type - ${type}. Allowed types are: ${schemaProperty.type.join(',')}`);
            return false;
        }

        return true;
    }
}

/**
 * This is the base class that holds all functionality shared between custom components
 * and native elements
 */
class Validator {
    /**
     * Return the type of the class
     */
    get instanceType() {
        return 'Validator';
    }

    /**
     * Check if element is child of a form
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    static isFormElement(element) {
        element = element.parentElement;
        while (element) {
            if (element.tagName === 'GAMEFACE-FORM-CONTROL' || element.tagName === 'gameface-form-control') return true;
            element = element.parentElement;
        }

        return false;
    }

    /**
     * Check if element value is bigger than element maxlength
     * @returns {boolean}
     */
    static tooLong() {
        return false;
    }

    /**
     * Check if element value is less than element minlength
     * @returns {boolean}
     */
    static tooShort() {
        return false;
    }

    /**
     * Checks if the value of an element is bigger than its max attribute
     * @returns {boolean}
    */
    static rangeOverflow() {
        return false;
    }

    /**
     * Checks if the value of an element is smaller than its min attribute
     * @returns {boolean}
    */
    static rangeUnderflow() {
        return false;
    }

    /**
     * Check if element is required and its value is missing
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    static valueMissing(element) {
        return element.hasAttribute('required') && !element.value;
    }

    /**
     * Check if element name is missing
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    static nameMissing(element) {
        return !element.name && !element.getAttribute('name');
    }

    /**
     * Check if an element is required
     * @param {HTMLElement} element
     * @returns {boolean}
    */
    static isRequired(element) {
        return element.hasAttribute('required');
    }

    /**
     * Checks if there is a custom error for the element
     * @returns {boolean}
     */
    static customError() {
        return false;
    }

    /**
     * Checks if element is going to be serialized.
     * If an element doesn't have a name it will not be serialized.
     * Used to determine if an element should be validated.
     * @param {HTMLElement} element
     * @returns {boolean}
    */
    static willSerialize(element) {
        return this.nameMissing(element) ? false : true;
    }

    /* eslint-disable require-jsdoc */
    static isBadURL() {
        return false;
    }

    static isBadEmail() {
        return false;
    }
    /* eslint-enable require-jsdoc */
}

/**
 * The NativeElementValidator uses the methods from the Validator class
 * All native elements tha don't support methods like isFormElement, tooLong, tooShort
 * etc.. will be wrapped in this class in order to enable us to validate native and
 * custom elements using the same methods.
 * */
class NativeElementValidator {
    /* eslint-disable require-jsdoc */
    get instanceType() {
        return 'NativeElementValidator';
    }

    constructor(element) {
        this.element = element;
    }

    isFormElement() {
        return Validator.isFormElement(this.element);
    }

    tooLong() {
        if (isNativeTextField(this.element)) return TextFieldValidator.tooLong(this.element);
        return Validator.tooLong();
    }

    tooShort() {
        if (isNativeTextField(this.element)) return TextFieldValidator.tooShort(this.element);
        return Validator.tooShort();
    }

    rangeOverflow() {
        if (isNativeTextField(this.element)) return TextFieldValidator.rangeOverflow(this.element);
        return Validator.rangeOverflow();
    }

    rangeUnderflow() {
        if (isNativeTextField(this.element)) return TextFieldValidator.rangeUnderflow(this.element);
        return Validator.rangeUnderflow();
    }

    valueMissing() {
        return Validator.valueMissing(this.element);
    }

    nameMissing() {
        return Validator.nameMissing(this.element);
    }

    customError() {
        return Validator.customError();
    }

    isRequired() {
        return Validator.isRequired(this.element);
    }

    willSerialize() {
        return Validator.willSerialize(this.element);
    }

    isBadEmail() {
        if (isNativeTextField(this.element)) return TextFieldValidator.isBadEmail(this.element);
        return false;
    }

    isBadURL() {
        if (isNativeTextField(this.element)) return TextFieldValidator.isBadURL(this.element);
        return false;
    }
    /* eslint-enable require-jsdoc */
}

/**
 * The CustomElementValidator is inherited by custom elements in order to gain the
 * validation function from the Validator class.
 * This class can not be used to wrap the native elements as it inherits the
 * HTMLElement which can not be instantiated using the new keyword.
*/
class CustomElementValidator extends BaseComponent {
    /* eslint-disable require-jsdoc */
    get instanceType() {
        return 'CustomElementValidator';
    }

    isFormElement() {
        return Validator.isFormElement(this);
    }

    tooLong() {
        return Validator.tooLong(this);
    }

    tooShort() {
        return Validator.tooShort(this);
    }

    valueMissing() {
        return Validator.valueMissing(this);
    }

    nameMissing() {
        return Validator.nameMissing(this);
    }

    customError() {
        return Validator.customError();
    }

    isRequired() {
        return Validator.isRequired(this);
    }

    rangeOverflow() {
        return Validator.rangeOverflow(this);
    }

    rangeUnderflow() {
        return Validator.rangeUnderflow(this);
    }

    willSerialize() {
        return Validator.willSerialize(this);
    }

    isBadEmail() {
        return Validator.isBadEmail(this);
    }

    isBadURL() {
        return Validator.isBadURL(this);
    }
    /* eslint-enable require-jsdoc */
}

/**
 * Class that implements the commong validation methods for the text fields
 */
class TextFieldValidator {
    /* eslint-disable-next-line require-jsdoc */
    get instanceType() {
        return 'TextFieldValidator';
    }

    /**
     * Most of the custom elements will not need this check however,
     * we call all validation methods in order to determine if an element is valid.
     * Each element that needs this check implements it itself.
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    static tooLong(element) {
        const maxLength = element.getAttribute('maxlength');
        if (!maxLength) return false;
        return element.value.length > parseFloat(maxLength);
    }

    /**
    * Most of the custom elements will not need this check however,
    * we call all validation methods in order to determine if an element is valid.
    * Each element that needs this check implements it itself.
    * @param {HTMLElement} element
    * @returns {boolean}
    */
    static tooShort(element) {
        const minLength = element.getAttribute('minlength');
        if (!minLength) return false;
        return element.value.length < parseFloat(minLength);
    }

    /**
    * Most of the custom elements will not need this check however,
    * we call all validation methods in order to determine if an element is valid.
    * Each element that needs this check implements it itself.
    * @param {HTMLElement} element
    * @returns {boolean}
    */
    static rangeOverflow(element) {
        const max = element.getAttribute('max');
        if (!max) return false;
        return parseFloat(element.value) > parseFloat(max);
    }

    /**
     * Most of the custom elements will not need this check however,
     * we call all validation methods in order to determine if an element is valid.
     * Each element that needs this check implements it itself.
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    static rangeUnderflow(element) {
        const min = element.getAttribute('min');
        if (!min) return false;
        return parseFloat(element.value) < parseFloat(min);
    }

    /**
     * Checks if the text field with type url has a valid url by its pattern
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    static isBadURL(element) {
        if (element.getAttribute('type') !== 'url') return false;
        const pattern = element.pattern || element.getAttribute('pattern');
        if (!pattern) return false;
        if (!element.value.match(pattern)) return true;
        return false;
    }

    /**
     * Checks if the text field element with type email is valid
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    static isBadEmail(element) {
        if (element.getAttribute('type') !== 'email') return false;
        if (!element.value.match('@')) return true;
        return false;
    }
}

// eslint-disable-next-line max-lines-per-function, require-jsdoc
const Components = function () {
    const GF_COMPONENT_SLOT_TAG_NAME = 'component-slot';
    const KEYCODES = {
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39,
        UP: 38,
        HOME: 36,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        TAB: 9,
        SHIFT: 16,
        CTRL: 17,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        LETTER_A: 65,
    };

    /**
     * Class that defines the Gameface components
     */
    class GamefaceComponents {
        // eslint-disable-next-line require-jsdoc
        constructor() {
            this.imported = this.imported || [];
            this.KEYCODES = KEYCODES;
            this.cachedComponents = {};

            this.CustomElementValidator = CustomElementValidator;
            this.NativeElementValidator = NativeElementValidator;
            this.TextFieldValidator = TextFieldValidator;
            this.Validator = Validator;
            this.BaseComponent = BaseComponent;
        }

        /**
         * Create and add a script tag with given url.
         * @param {string} url
        */
        importScript(url) {
            const script = document.createElement('script');
            script.setAttribute('src', url);
            document.body.appendChild(script);
        }

        /**
         * Loads an html by given url.
         * @param {string} url
         * @returns {promise} resolved with the html as text.
        */
        loadHTML(url) {
            return this.loadResource(url).then((result) => {
                return result.template;
            });
        }

        /**
         * Creates a promise which resolves when a custom element was defined.
         * Saves the promise for each defined component.
         * @param {string} name - the name of the custom element
         * @returns {promise} - the previously saved promise it any or a new one
        */
        whenDefined(name) {
            if (window.GUIComponentsDefinedElements[name] !== undefined) {
                return window.GUIComponentsDefinedElements[name].promise;
            }

            const defined = window.GUIComponentsDefinedElements[name] = {};
            defined.promise = new Promise((resolve, reject) => {
                defined.resolve = resolve;
                defined.reject = reject;
            });
            return defined.promise;
        }

        /**
         * Defines a custom element.
         * @param {string} name - the name of the element.
         * @param {Object} element - the object which describes the element.
        */
        defineCustomElement(name, element) {
            // don't attempt to register custom element twice
            if (window.GUIComponentsDefinedElements[name] || customElements.get(name)) return;
            this.whenDefined(name);
            customElements.define(name, element);
            window.GUIComponentsDefinedElements[name].resolve(element);
        }

        /**
         * Imports a component by given url.
         * It will automatically try to import style.css and script.js if these
         * files' names were not explicitly specified.
         * @param {string} url - the url of the component
        */
        importComponent(url) {
            requestAnimationFrame(() => {
                this.importScript(url + '/script.js');
            });
        }

        /**
         * Removes back and forward slashes from string
         * @param {string} path
         * @returns {string}
         */
        removeSlashes(path) {
            return path.replace(/[/|\\]/g, '');
        }

        /**
         * Remove new lines from the beginning of templates,
         * because template.firstChild.cloneNode will clone an empty
         * string and will return an empty template.
         * @param {string} template
         * @returns {string}
        */
        removeNewLines(template) {
            return template.replace(newLinesRegExp, '').trim();
        }

        /**
         * Removes the copyright notice from the template
         * @param {string} template
         * @returns {string} the template without the copyright notice
        */
        removeCopyrightNotice(template) {
            return template.replace(`<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. -->`, '').trim();
        }

        /**
         * Used when the element has already been rendered.
         * Return the already rendered template instead of
         * loading and slotting its elements.
         *
         * @param {HTMLElement} component - the component that was rendered
         * @returns {Promise<HTMLElement>} - a promise that will resolve with the rendered template
        */
        resolveWithTemplate(component) {
            return new Promise((resolve) => {
                resolve({
                    template: component.template,
                    url: component.url,
                });
            });
        }

        /**
         * Uses an XMLHttpRequest to load an external file.
         * @param {string} component - the url of the file.
         * @returns {promise} - a promise that is resolved with the file's text content.
        */
        loadResource(component) {
            if (component.template && typeof component.template === 'string') {
                if (component.isRendered) return this.resolveWithTemplate(component);
                const template = this.removeCopyrightNotice(component.template);

                return new Promise((resolve) => {
                    resolve({
                        template: this.removeNewLines(template),
                        url: component.url,
                    });
                });
            }

            if (typeof component.template === 'object' && component.isRendered) {
                return this.resolveWithTemplate(component);
            }

            if (window.__optimize) {
                const id = this.removeSlashes(component.url);
                const element = document.getElementById(id).firstChild;
                // fallback to XHR
                if (!element) return this.requestResource(component.url);

                return new Promise((resolve) => {
                    resolve({ template: element.innerHTML, url: component.url });
                });
            }

            return this.requestResource(component.url);
        }


        /**
         * Execute an XMLHttpRequest to load a resource by url.
         * @param {string} url - the path to the resource
         * @returns {promise} - promise which resolves with the loaded resource
        */
        requestResource(url) {
            const request = new XMLHttpRequest();
            const promise = new Promise(function (resolve, reject) {
                request.onload = (response) => {
                    if (request.status == 200) {
                        resolve({ template: request.responseText, url: url });
                    } else {
                        reject(response);
                    }
                };
                request.onerror = reject;
            });
            request.open('GET', url);
            request.send();
            return promise;
        }

        /**
         * Recursively finds the slot elements in a given element.
         * @param {HTMLElement} parent - the element which is searched for slots.
         * @param {string} parentElName
         * @param {object} result - a key:value object containing the slot elements
         * under their data-name as value:
         * { <my-slot-name>: HTMLElement }
         * @returns {Object} result
        */
        findSlots(parent, parentElName, result = {}) {
            const children = parent.children;
            const length = children.length;

            for (let i = 0; i < length; ++i) {
                const child = children[i];
                const childTagName = child.tagName.toLowerCase();

                if (childTagName === 'component-slot') {
                    const name = child.dataset.name;
                    if (!result[name]) result[name] = [];
                    result[name].push(child);
                    this.findSlots(child, parentElName, result);
                } else if (child.hasAttribute('slot')) {
                    const slot = child.getAttribute('slot');
                    if (!result[slot]) result[slot] = [];
                    result[slot].push(child);
                    this.findSlots(child, parentElName, result);
                    // the scrollable container is the ONLY component that can hold
                    // slots of another elements; we allow this in order achieve
                    // better integration of the scrollbar inside other components
                    // The WebComponents and the standard slot elements don't support
                    // such behavior; an element handles only its own slots. The scrollable
                    // container is an exception from this rule.
                } else if (childTagName === 'gameface-scrollable-container' ||
                    (childTagName !== GF_COMPONENT_SLOT_TAG_NAME &&
                        parentElName !== childTagName &&
                        !window.GUIComponentsDefinedElements[childTagName])) {
                    // if the child is another nested element don't look for slots in it
                    this.findSlots(child, parentElName, result);
                }
            }

            return result;
        }

        /**
         * Will replace the slot element
         * @param {HTMLElement[]} source
         * @param {HTMLElement} target
         */
        replaceSlots(source, target) {
            const fakeRoot = target[0];
            if (source.length && fakeRoot.childNodes.length) {
                while (fakeRoot.firstChild) {
                    fakeRoot.removeChild(fakeRoot.lastChild);
                }
            }
            // remove the slot so that it can be replaced
            const parent = fakeRoot.parentNode;
            parent.removeChild(fakeRoot);

            for (let i = 0; i < source.length; ++i) {
                parent.appendChild(source[i]);
            }
        }

        /**
         * Transfers the slottable elements into their slots.
         * @param {HTMLElement} source - the element containing the slottable elements.
         * @param {HTMLElement} target - the element containing the slots elements.
        */
        transferContent(source, target) {
            while (target.childNodes.length > 0) {
                const nodes = target.childNodes;
                target.removeChild(nodes[nodes.length - 1]);
            }
            while (source.childNodes.length > 0) {
                const nodes = source.childNodes;
                const node = nodes[0];
                source.removeChild(node);
                target.appendChild(node);
            }
        }

        /**
         * Renderes an element only if it wasn't rendered before that
         * @param {HTMLElement} element
         * @returns {boolean} - true if it was rendered, false if not
        */
        renderOnce(element) {
            if (element.isRendered) return false;

            this.render(element);
            element.isRendered = true;
            return true;
        }

        /**
        * Renders an element's content into its template.
        * @param {HTMLElement} element - the element into which to render the content
        */
        render(element) {
            const templateRoot = document.createElement('div');
            templateRoot.innerHTML = element.template;

            const parentElName = element.tagName.toLowerCase();

            const templateSlots = this.findSlots(templateRoot, parentElName);
            const userSlots = this.findSlots(element, parentElName);

            // use for...of instead of for...in for better performance
            const userSlotsKeys = Object.keys(userSlots);
            const templateSlotsKeys = Object.keys(templateSlots);

            // there's no point in looping over userSlots if there aren't
            // corresponding template slots
            if (templateSlotsKeys.length) {
                for (const userSlot of userSlotsKeys) {
                    if (!userSlots[userSlot] || !templateSlots[userSlot]) continue;
                    this.replaceSlots(userSlots[userSlot], templateSlots[userSlot]);
                }
            }

            this.transferContent(templateRoot, element);
        }

        /**
         * Used to render.
         * @param {HTMLElement} element - the element which will be rendered
         * @param {string} targetContainerSelector - the selector of the parent element
         * @param {Array<HTMLElement>} children - the child elements that need to go into the parent
         */
        transferChildren(element, targetContainerSelector, children) {
            const templateRoot = document.createElement('div');
            templateRoot.innerHTML = element.template;
            const container = templateRoot.querySelector(targetContainerSelector);
            children.forEach(child => container.appendChild(child));

            this.transferContent(templateRoot, element);
        }

        /**
         * Delay the execution of a callback function by n amount of frames.
         * Used to retrieve the computed styles of elements.
         * @param {Function} callback - the function that will be executed.
         * @param {number} count - the amount of frames that the callback execution
         * should be delayed by.
         * @returns {any}
        */
        waitForFrames(callback = () => { }, count = 3) {
            if (count === 0) return callback();
            count--;
            requestAnimationFrame(() => this.waitForFrames(callback, count));
        }

        /**
         * Checks if the current user agent is Cohtml
         * @returns {boolean}
        */
        isBrowserGameface() {
            return navigator.userAgent.match('Cohtml');
        }

        /**
         * Check if a value is a number and if not - log an error
         * @param {string} propName - the name of the property that needs to be validated
         * @param {any} value
         * @returns {boolean} - true if it is a number or a string that can be cast to number, false if not
         */
        isNumberPositiveValidation(propName, value) {
            const parsed = parseInt(value);

            if (isNaN(parsed)) {
                console.error(`Unsupported type[${typeof parsed}] given for ${propName}. Possible values are positive numbers.`);
                return false;
            }

            if (parsed < 0) {
                console.error(`The passed value for ${propName} - ${value} is not a positive number. Please use positive numbers only for ${propName}.`);
                return false;
            }

            return true;
        }
    }

    const components = new GamefaceComponents();

    /**
     * Class that will handle gameface components slot element
     */
    class ComponentSlot extends HTMLElement {
        /* eslint-disable require-jsdoc */

        constructor() {
            super();

            this.originalAppendChild = this.appendChild;
            this.originalInsertBefore = this.insertBefore;
            this.originalReplaceChild = this.replaceChild;
            this.originalRemoveChild = this.removeChild;

            this.appendChild = (node) => {
                const child = this.originalAppendChild(node);
                this.disptachSlotChange(child);

                return child;
            };

            this.insertBefore = (newNode, referenceNode) => {
                const child = this.originalInsertBefore(newNode, referenceNode);
                this.disptachSlotChange(child);

                return child;
            };

            this.replaceChild = (newChild, oldChild) => {
                const replacedNode = this.originalReplaceChild(newChild, oldChild);
                this.disptachSlotChange(replacedNode);

                return replacedNode;
            };

            this.removeChild = (child) => {
                const removedNode = this.originalRemoveChild(child);
                this.disptachSlotChange(removedNode);

                return removedNode;
            };
        }

        disptachSlotChange(child) {
            this.dispatchEvent(new CustomEvent('slotchange'), {
                target: this,
                child: child,
            });
        }

        /* eslint-enable require-jsdoc */
    }

    components.defineCustomElement(GF_COMPONENT_SLOT_TAG_NAME, ComponentSlot);

    return components;
};

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Global object class
 */
class IM {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        this.actions = [];
        this.keyboardFunctions = [];
        this.gamepadFunctions = [];
    }

    /**
     * Initialize global object
     */
    init() {
        if (!window._IM) window._IM = new IM();
    }

    /**
     *
     * @param {string[]} keys Array of key combinations
     * @returns {string[]} Key combination from the _IM global object
     */
    getKeys(keys) {
        return _IM.keyboardFunctions.filter(keyFunction => keyFunction.keys.every(key => keys.includes(key)));
    }

    /**
     *
     * @param {string[]} keys Array of key combinations
     * @returns {number} Index of key combination in _IM
     */
    getKeysIndex(keys) {
        return _IM.keyboardFunctions.findIndex(keyFunction => keyFunction.keys.every(key => keys.includes(key)));
    }

    /**
     *
     * @param {Array} actions Array of actions
     * @returns {Object} Action from the _IM global object
     */
    getGamepadAction(actions) {
        return _IM.gamepadFunctions.find(gpFunc => gpFunc.actions.every(action => actions.includes(action)));
    }

    /**
     *
     * @param {Array} actions Array of actions
     * @returns {number} Index of an action from the _IM global object
     */
    getGamepadActionIndex(actions) {
        return _IM.gamepadFunctions.findIndex(gpFunc => gpFunc.actions.every(action => actions.includes(action)));
    }

    /**
     *
     * @param {string} action Action to search for
     * @returns {Object}
     */
    getAction(action) {
        return _IM.actions.find(actionObj => actionObj.name === action);
    }

    /**
     *
     * @param {string} action Action to search for
     * @returns {number}
     */
    getActionIndex(action) {
        return _IM.actions.findIndex(actionObj => actionObj.name === action);
    }
}

var IM$1 = new IM();

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var mappings$1 = {
    ALT: 18,
    ARROW_DOWN: 40,
    ARROW_LEFT: 37,
    ARROW_RIGHT: 39,
    ARROW_UP: 38,
    BACKSPACE: 8,
    CAPS_LOCK: 20,
    CTRL: 17,
    DELETE: 46,
    END: 35,
    ENTER: 13,
    ESC: 27,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    HOME: 36,
    INSERT: 45,
    NUM_LOCK: 144,
    NUMPAD_ENTER: 13,
    NUMPAD_DASH: 109,
    NUMPAD_STAR: 106,
    NUMPAD_DOT: 110,
    NUMPAD_FORWARD_SLASH: 111,
    NUMPAD_PLUS: 107,
    NUMPAD_0: 96,
    NUMPAD_1: 97,
    NUMPAD_2: 98,
    NUMPAD_3: 99,
    NUMPAD_4: 100,
    NUMPAD_5: 101,
    NUMPAD_6: 102,
    NUMPAD_7: 103,
    NUMPAD_8: 104,
    NUMPAD_9: 105,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PAUSE: 19,
    PRINT_SCRN: 44,
    SCROLL_LOCK: 145,
    SHIFT: 16,
    SPACEBAR: 32,
    TAB: 9,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    0: 48,
    QUOTE: 222,
    DASH: 189,
    COMMA: 188,
    DOT: 190,
    FORWARD_SLASH: 191,
    SEMI_COLON: 186,
    SQUARE_BRACKET_LEFT: 219,
    SQUARE_BRACKET_RIGHT: 221,
    BACKWARD_SLASH: 220,
    BACKTICK: 192,
    EQUAL: 187,
    SYSTEM: 91,
};

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/**
 * Register and trigger actions to be used in project
 */
class Actions {
    /**
     * Register an action
     * @param {string} action - Function alias that allows you to save functions and reuse them
     * @param {function} callback
     * @returns {void}
     */
    register(action, callback) {
        if (IM$1.getAction(action)) return console.error(`The following action "${action}" is already registered!`);

        _IM.actions.push({ name: action, callback });
    }

    /**
     * Remove a registered action
     * @param {string} action - Name of action you want to remove
     * @returns {void}
     */
    remove(action) {
        const actionIndex = IM$1.getActionIndex(action);
        if (actionIndex === -1) return console.error(`${action} is not a registered action!`);

        _IM.actions.splice(actionIndex, 1);
    }

    /**
     * Trigger an action
     * @param {string} action - Name of action you want to execute
     * @param {any} value - Value that is passed to the callback
     * @returns {void}
     */
    execute(action, value) {
        const actionObject = IM$1.getAction(action);
        if (!actionObject) return console.error(`${action} is not a registered action!`);

        actionObject.callback(value);
    }
}

var actions = new Actions();

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Keyboard class that handles all keyboard interactions
 */
class Keyboard {
    /* eslint-disable-next-line require-jsdoc */
    constructor() {
        this.mappings = mappings$1;
        this.eventListenerAttached = false;

        this.keysPressed = new Set();

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);

        if (!window.KEYS) window.KEYS = mappings$1;
    }

    /**
     * @param {Object} options
     * @param {string[]} options.keys - Array of keys you want to use, allows only combination of modifier and regular keys
     * @param {function | string} options.callback - Function or action to be executed on the key combination
     * @param {string[]} options.type - Type of key action you want to use.
     * @returns {void}
     */
    on(options) {
        // Remove duplicate keys. For example if someone write keys: ['A', 'A'] we'll treat it like ['A']
        options.keys = [
            ...new Set(
                options.keys.map((key) => {
                    key = typeof key === 'number' ? this.keyCodeToString(key) : key;
                    return key.toUpperCase();
                })
            ),
        ];

        const incorrectKeys = options.keys.filter(key => !this.mappings[key]);

        if (incorrectKeys.length > 0) return console.error(`The following keys [${incorrectKeys.join(', ')}] you have entered are incorrect! `);

        if (!this.eventListenerAttached) {
            document.addEventListener('keydown', this.onKeyDown);
            document.addEventListener('keyup', this.onKeyUp);
            this.eventListenerAttached = true;
        }

        if (!Array.isArray(options.type)) options.type = [options.type];

        options.type.forEach((type) => {
            const registeredKeys = IM$1.getKeys(options.keys);

            if (registeredKeys.length > 0 && registeredKeys.some(key => key.type === type)) {
                return console.error('You are trying to overwrite an existing key combination! To do that, first remove it with .off([keys]) then add it again');
            }

            if (type === 'lift' && options.keys.length > 1) return console.error('You can only have a single key trigger an action on lift');

            _IM.keyboardFunctions.push({ ...options, type });
        });
    }

    /**
     *
     * @param {string[]} keys - Key combination you want to remove from the listener
     * @returns {void}
     */
    off(keys) {
        keys = [
            ...new Set(
                keys.map((key) => {
                    key = typeof key === 'number' ? this.keyCodeToString(key) : key;
                    return key.toUpperCase();
                })
            ),
        ];

        const keyCombinationIndex = IM$1.getKeysIndex(keys);

        if (keyCombinationIndex === -1) return console.error('You are trying to remove a non-existent key combination!');

        _IM.keyboardFunctions.splice(keyCombinationIndex, 1);

        if (_IM.keyboardFunctions.length === 0) {
            document.removeEventListener('keydown', this.onKeyDown);
            document.removeEventListener('keyup', this.onKeyUp);
            this.eventListenerAttached = false;
        }
    }

    /**
     * Handles when key is pressed
     * @param {KeyboardEvent} event
     * @returns {void}
     * @private
     */
    onKeyDown(event) {
        const keyPressed = this.keyCodeToString(event.keyCode);
        this.keysPressed.add(keyPressed);

        const registeredKeys = IM$1.getKeys([...this.keysPressed]);
        if (registeredKeys.length === 0) return;

        registeredKeys.forEach((key) => {
            if (key.type === 'press' && event.repeat) return;

            if (key.type !== 'press' && key.type !== 'hold') return;

            if (key.type === 'hold' && !event.repeat) return;

            this.executeCallback(event, key);
        });
    }

    /**
     * Handles when key is released
     * @param {KeyboardEvent} event
     * @returns {void}
     * @private
     */
    onKeyUp(event) {
        const keyPressed = this.keyCodeToString(event.keyCode);
        this.keysPressed.delete(keyPressed);

        const registeredKeys = IM$1.getKeys(keyPressed);
        if (registeredKeys.length === 0) return;

        registeredKeys.forEach((key) => {
            if (key.type === 'lift' && key.keys.indexOf(keyPressed) !== -1) this.executeCallback(event, key);
        });
    }

    /**
     * Convert keyCode to string representing key
     * @param {number} code
     * @returns {string}
     * @private
     */
    keyCodeToString(code) {
        return Object.keys(this.mappings).find(key => this.mappings[key] === code);
    }

    /**
     * Executes the registered callbacks. Has to be invoked from the onKeyDown and onKeyUp functions
     * @param {KeyboardEvent} event
     * @param {Object} registeredKeys
     * @param {string[]} registeredKeys.keys - Array of keys you want to use, allows only combination of modifier and regular keys
     * @param {function | string} registeredKeys.callback - Function or action to be executed on the key combination
     * @param {('press'|'hold'|'lift')} registeredKeys.type - Type of key action you want to use.
     * @return {void}
     * @private
     */
    executeCallback(event, registeredKeys) {
        if (typeof registeredKeys.callback === 'string') return actions.execute(registeredKeys.callback, event);

        registeredKeys.callback(event);
    }
}

var keyboard = new Keyboard();

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var mappings = {
    FACE_BUTTON_DOWN: 0,
    FACE_BUTTON_RIGHT: 1,
    FACE_BUTTON_LEFT: 2,
    FACE_BUTTON_TOP: 3,
    LEFT_SHOULDER: 4,
    RIGHT_SHOULDER: 5,
    LEFT_SHOULDER_BOTTOM: 6,
    RIGHT_SHOULDER_BOTTOM: 7,
    SELECT: 8,
    START: 9,
    LEFT_ANALOGUE_STICK: 10,
    RIGHT_ANALOGUE_STICK: 11,
    PAD_UP: 12,
    PAD_DOWN: 13,
    PAD_LEFT: 14,
    PAD_RIGHT: 15,
    CENTER_BUTTON: 16,
    aliases: {
        'face-button-down': 'FACE_BUTTON_DOWN',
        'face-button-left': 'FACE_BUTTON_LEFT',
        'face-button-right': 'FACE_BUTTON_RIGHT',
        'face-button-top': 'FACE_BUTTON_TOP',
        'left-sholder': 'LEFT_SHOULDER',
        'right-sholder': 'RIGHT_SHOULDER',
        'left-sholder-bottom': 'LEFT_SHOULDER_BOTTOM',
        'right-sholder-bottom': 'RIGHT_SHOULDER_BOTTOM',
        select: 'SELECT',
        start: 'START',
        'left-analogue-stick': 'LEFT_ANALOGUE_STICK',
        'right-analogue-stick': 'RIGHT_ANALOGUE_STICK',
        'pad-up': 'PAD_UP',
        'pad-down': 'PAD_DOWN',
        'pad-left': 'PAD_LEFT',
        'pad-right': 'PAD_RIGHT',
        'center-button': 'CENTER_BUTTON',
        'playstation.x': 'FACE_BUTTON_DOWN',
        'playstation.square': 'FACE_BUTTON_LEFT',
        'playstation.circle': 'FACE_BUTTON_RIGHT',
        'playstation.triangle': 'FACE_BUTTON_TOP',
        'playstation.l1': 'LEFT_SHOULDER',
        'playstation.r1': 'RIGHT_SHOULDER',
        'playstation.l2': 'LEFT_SHOULDER_BOTTOM',
        'playstation.r2': 'RIGHT_SHOULDER_BOTTOM',
        'playstation.share': 'SELECT',
        'playstation.options': 'START',
        'playstation.l3': 'LEFT_ANALOGUE_STICK',
        'playstation.r3': 'RIGHT_ANALOGUE_STICK',
        'playstation.d-pad-up': 'PAD_UP',
        'playstation.d-pad-down': 'PAD_DOWN',
        'playstation.d-pad-left': 'PAD_LEFT',
        'playstation.d-pad-right': 'PAD_RIGHT',
        'playstation.center': 'CENTER_BUTTON',
        'xbox.a': 'FACE_BUTTON_DOWN',
        'xbox.x': 'FACE_BUTTON_LEFT',
        'xbox.b': 'FACE_BUTTON_RIGHT',
        'xbox.y': 'FACE_BUTTON_TOP',
        'xbox.lb': 'LEFT_SHOULDER',
        'xbox.rb': 'RIGHT_SHOULDER',
        'xbox.lt': 'LEFT_SHOULDER_BOTTOM',
        'xbox.rt': 'RIGHT_SHOULDER_BOTTOM',
        'xbox.view': 'SELECT',
        'xbox.menu': 'START',
        'xbox.left-thumbstick': 'LEFT_ANALOGUE_STICK',
        'xbox.right-thumbstick': 'RIGHT_ANALOGUE_STICK',
        'xbox.d-pad-up': 'PAD_UP',
        'xbox.d-pad-down': 'PAD_DOWN',
        'xbox.d-pad-left': 'PAD_LEFT',
        'xbox.d-pad-right': 'PAD_RIGHT',
        'xbox.center': 'CENTER_BUTTON',
    },
    axisAliases: [
        'right.joystick',
        'left.joystick',
        'left.joystick.down',
        'left.joystick.up',
        'left.joystick.left',
        'left.joystick.right',
        'right.joystick.down',
        'right.joystick.up',
        'right.joystick.left',
        'right.joystick.right',
    ],
};

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


const AXIS_THRESHOLD = 0.9;
/**
 * Gamepad class that handles all gamepad interactions
 */
class Gamepad {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        this.mappings = mappings;
        this.pollingStarted = false;
        this.gamepadEnabled = false;

        this.onGamepadConnected = this.onGamepadConnected.bind(this);
        this.sanitizeAction = this.sanitizeAction.bind(this);

        this.lessSensitive = false;
    }

    /**
     * Allow gamepads to be connected
     * @param {boolean} isEnabled
     */
    set enabled(isEnabled) {
        this.gamepadEnabled = isEnabled;
        this.gamepadEnabled ? this.init() : this.deinit();
    }

    /**
     * Attaches the event listeners for the gamepads
     * @private
     */
    init() {
        window.addEventListener('gamepadconnected', this.onGamepadConnected);
    }

    /**
     * Removes any attached event listeners for gamepads
     * @private
     */
    deinit() {
        window.removeEventListener('gamepadconnected', this.onGamepadConnected);
    }

    /**
     * Starts polling on the first connected
     * @returns {void}
     * @private
     */
    onGamepadConnected() {
        if (this.pollingStarted) return;

        this.pollingStarted = true;
        this.startPolling();
    }

    /**
     *
     * @param {Object} options
     * @param {string[] | number[]} options.actions - Action to trigger the callback. Can be name of button or joystick
     * @param {function} options.callback - Callback to trigger on the set action
     * @param {number} options.gamepadNumber - The number of the gamepad that you want to trigger the callback on. Use -1 for all gamepads
     * @returns {void}
     */
    on(options) {
        options.actions = options.actions.map(this.sanitizeAction);

        const isAxisAlias = this.mappings.axisAliases.some(alias => options.actions.includes(alias));

        if (options.actions.length > 1 && isAxisAlias) {
            return console.error(`You can't use an axis action in a combination with a button action`);
        }

        if (IM$1.getGamepadAction(options.actions)) {
            return console.error(
                'You have already registered a callback for this action. If you want to overwrite it, remove it first with .off([actions])'
            );
        }

        _IM.gamepadFunctions.push(options);
    }

    /**
     * Removes registered actions
     * @param {Array} actions - Array containing the action you want to remove
     * @returns {void}
     */
    off(actions) {
        const actionsIndex = IM$1.getGamepadActionIndex(actions.map(this.sanitizeAction));

        if (actionsIndex === -1) return console.error('You are trying to remove a non-existent action!');

        _IM.gamepadFunctions.splice(actionsIndex, 1);
    }

    /**
     * Loop that handles button presses and axis movement
     * @returns {void}
     * @private
     */
    startPolling() {
        const gamepads = navigator.getGamepads();

        if (gamepads.length === 0) {
            this.pollingStarted = false;
            return;
        }

        gamepads.forEach((gamepad, index) => {
            if (!gamepad) return;
            this.handleButtons(gamepad.buttons, index);
            this.handleJoysticks(gamepad.axes);
        });

        if (this.lessSensitive) {
            setTimeout(this.startPolling.bind(this), 100);
            return;
        }

        requestAnimationFrame(() => this.startPolling());
    }

    /**
     *
     * @param {Object[]} buttons
     * @private
     */
    handleButtons(buttons) {
        const pressedButtons = buttons.reduce(
            (acc, el, index) => {
                if (el.pressed) {
                    acc.buttonIndexes.push(index);
                    acc.buttons.push(el);
                }
                return acc;
            },
            { buttonIndexes: [], buttons: [] }
        );

        const gamepadAction = IM$1.getGamepadAction(pressedButtons.buttonIndexes);
        if (!gamepadAction) return;

        this.executeCallback(gamepadAction, pressedButtons.buttons);
    }

    /* eslint-disable max-lines-per-function */
    /**
     *
     * @param {number[]} axes
     * @private
     */
    handleJoysticks(axes) {
        const joystickActions = this.getJoystickActions();

        joystickActions.forEach((jAction) => {
            switch (jAction.actions[0]) {
                case 'left.joystick':
                    return this.executeCallback(jAction, [axes[0], axes[1]]);
                case 'right.joystick':
                    return this.executeCallback(jAction, [axes[2], axes[3]]);
                case 'left.joystick.down':
                    if (axes[1] > AXIS_THRESHOLD) return this.executeCallback(jAction, [axes[0], axes[1]]);
                    break;
                case 'left.joystick.up':
                    if (axes[1] < -AXIS_THRESHOLD) return this.executeCallback(jAction, [axes[0], axes[1]]);
                    break;
                case 'left.joystick.left':
                    if (axes[0] < -AXIS_THRESHOLD) return this.executeCallback(jAction, [axes[0], axes[1]]);
                    break;
                case 'left.joystick.right':
                    if (axes[0] > AXIS_THRESHOLD) return this.executeCallback(jAction, [axes[0], axes[1]]);
                    break;
                case 'right.joystick.down':
                    if (axes[3] > AXIS_THRESHOLD) return this.executeCallback(jAction, [axes[2], axes[3]]);
                    break;
                case 'right.joystick.up':
                    if (axes[3] < -AXIS_THRESHOLD) return this.executeCallback(jAction, [axes[2], axes[3]]);
                    break;
                case 'right.joystick.left':
                    if (axes[2] < -AXIS_THRESHOLD) return this.executeCallback(jAction, [axes[2], axes[3]]);
                    break;
                case 'right.joystick.right':
                    if (axes[2] > AXIS_THRESHOLD) return this.executeCallback(jAction, [axes[2], axes[3]]);
                    break;
            }
        });
    }
    /* eslint-enable max-lines-per-function */

    /**
     * Convert button aliases to indexes or keep joystick aliases
     * @param {string | number} action - Actions to convert
     * @returns {string | number} - Converted action strings
     * @private
     */
    sanitizeAction(action) {
        if (typeof action === 'number') return action;

        if (this.mappings.axisAliases.includes(action.toLowerCase())) return action.toLowerCase();

        if (typeof action === 'string') {
            const key = this.mappings.aliases[action.toLowerCase()];
            if (!key) return console.error(`You have entered a non-supported button alias ${action}`);
            return this.mappings[key];
        }

        return action;
    }

    /**
     * Gets all registered Joystick actions
     * @returns {Object[]} - Joystick actions
     * @private
     */
    getJoystickActions() {
        return _IM.gamepadFunctions.filter(gpFunc => this.mappings.axisAliases.includes(gpFunc.actions[0]));
    }

    /**
     * Executes the callback from the registered action
     * @param {Object} action
     * @param {any} value
     * @returns {void}
     * @private
     */
    executeCallback(action, value) {
        if (typeof action.callback === 'string') return actions.execute(action.callback, value);

        action.callback(value);
    }
}

var gamepad = new Gamepad();

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Converts radians to degrees
 * @param {number} rad
 * @returns {number}
 */
function toDeg(rad) {
    return (rad * 180) / Math.PI;
}

/**
 * Clamps a value in a range
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/**
 * Creates a random 5 character hash
 * @returns {string}
 */
function createHash() {
    return (Math.random() + 1).toString(36).substring(7);
}

/**
 * Get the distance between two points
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {number}
 */
function distanceBetweenTwoPoints(x1, y1, x2, y2) {
    const a = x1 - x2;
    const b = y1 - y2;

    return Math.hypot(a, b);
}

/**
 * Calculates the midpoint between two points
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {Object}
 */
function getMidPoint(x1, y1, x2, y2) {
    return {
        x: (x1 + x2) / 2,
        y: (y1 + y2) / 2,
    };
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


const directions = ['down', 'up', 'left', 'right'];
/**
 * Spatial Navigation for keyboard and controller
 */
class SpatialNavigation {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        this.enabled = false;
        this.navigatableElements = { default: [] };
    }

    /**
     * Initializes the spatial navigation
     * @param {string[]|Object[]} navigatableElements
     * @param {string} navigatableElements[].area
     * @param {string[]} navigatableElements[].elements
     * @returns {void}
     */
    init(navigatableElements = []) {
        if (this.enabled) return;
        this.enabled = true;

        this.add(navigatableElements);
        this.registerKeyActions();
    }

    /**
     * Deinitialize the spatial navigation
     * @returns {void}
     */
    deinit() {
        if (!this.enabled) return;
        this.enabled = false;

        this.navigatableElements = { default: [] };
        this.removeKeyActions();
    }
    /**
     * Add new elements to area or new area
     * @param {string[]|Object[]} navigatableElements
     * @param {string} navigatableElements[].area
     * @param {string[]} navigatableElements[].elements
     */
    add(navigatableElements) {
        if (!this.enabled) return;

        navigatableElements.forEach((navArea) => {
            typeof navArea === 'string' ? this.handleString(navArea) : this.handleObject(navArea);
        });
    }

    /**
     * Remove an area from the focusable groups
     * @param {string} area area to be removed
     * @returns {void}
     */
    remove(area = 'default') {
        if (!this.enabled) return;

        if (!this.navigatableElements[area]) return console.error(`The area '${area}' you are trying to remove doesn't exist`);

        this.navigatableElements[area].forEach(element => element.removeAttribute('tabindex'));

        this.navigatableElements[area].length = 0;
    }

    /**
     * Get elements from selector and save them to the default group
     * @param {string} navArea
     * @returns {void}
     */
    handleString(navArea) {
        const domElements = document.querySelectorAll(navArea);

        if (domElements.length === 0) return console.error(`${navArea} is either not a correct selector or the element is not present in the DOM.`);

        domElements.forEach(this.makeFocusable);

        this.navigatableElements.default.push(...domElements);
    }

    /**
     * Gets elements from object and saves them to a focusable group
     * @param {Object} navArea
     * @param {string} navArea.area
     * @param {string[]} navArea.elements
     * @returns {void}
     */
    handleObject(navArea) {
        const domElements = navArea.elements.reduce((acc, el) => {
            const elements = document.querySelectorAll(el);
            elements.forEach(this.makeFocusable);

            acc.push(...elements);
            return acc;
        }, []);

        if (domElements.length === 0) return console.error(`${navArea.elements.join(', ')} are either not a correct selectors or the elements are not present in the DOM.`);

        if (!this.navigatableElements[navArea.area]) this.navigatableElements[navArea.area] = [];

        this.navigatableElements[navArea.area].push(...domElements);
    }

    /**
     * Sets the tabindex of the element that needs to be focused
     * @param {HTMLElement} element
     */
    makeFocusable(element) {
        element.setAttribute('tabindex', 1);
    }

    /**
     * Checks if the current focused element is within a group and returns the rest of the elements in the group
     * @returns {NavigationObject[]}
     */
    getFocusableGroup() {
        const focusedElement = document.activeElement;

        return Object.values(this.navigatableElements).reduce((acc, el) => {
            if (el.includes(focusedElement)) {
                acc = el.reduce((accumulator, element) => {
                    if (element !== focusedElement && !element.hasAttribute('disabled')) {
                        const { x, y, height, width } = element.getBoundingClientRect();
                        accumulator.push({ element, x, y, height, width });
                    }
                    return accumulator;
                }, []);
            }
            return acc;
        }, []);
    }

    /**
     * Gets the element closest to the opposite edge of the navigation direction
     * @param {string} direction
     * @param {NavigationObject[]} elements
     * @param {Object} focusedElement
     * @param {number} focusedElement.x
     * @param {number} focusedElement.y
     * @returns {NavigationObject}
     */
    getClosestToEdge(direction, elements, focusedElement) {
        let newDistance, oldDistance;
        return elements.reduce((acc, el) => {
            switch (direction) {
                case 'down':
                    newDistance = Math.hypot(el.x - focusedElement.x, el.y);
                    oldDistance = Math.hypot(acc.x - focusedElement.x, acc.y);
                    break;
                case 'up':
                    newDistance = Math.hypot(el.x - focusedElement.x, window.innerHeight - el.y);
                    oldDistance = Math.hypot(acc.x - focusedElement.x, window.innerHeight - acc.y);
                    break;
                case 'right':
                    newDistance = Math.hypot(el.x, el.y - focusedElement.y);
                    oldDistance = Math.hypot(acc.x, acc.y - focusedElement.y);
                    break;
                case 'left':
                    newDistance = Math.hypot(window.innerWidth - el.x, el.y - focusedElement.y);
                    oldDistance = Math.hypot(window.innerWidth - acc.x, acc.y - focusedElement.y);
                    break;
            }
            acc = newDistance < oldDistance ? el : acc;

            return acc;
        });
    }

    /**
     * Moves the focus in the desired direction
     * @param {string} direction
     * @returns {void}
     */
    moveFocus(direction) {
        if (!this.enabled) return;

        const focusableGroup = this.getFocusableGroup();
        const { x, y } = document.activeElement.getBoundingClientRect();

        if (focusableGroup.length === 0) return;

        let nextFocusableElement = focusableGroup.reduce((acc, el) => {
            const deltaX = el.x - x;
            const deltaY = el.y - y;
            const angle = toDeg(Math.atan2(deltaY, deltaX));

            if (this.getDirectionAngle(direction, angle)) {
                if (!acc) acc = el;

                const newDistance = Math.hypot(deltaX, deltaY);
                const oldDistance = Math.hypot(acc.y - y, acc.x - x);
                acc = newDistance < oldDistance ? el : acc;
            }

            return acc;
        }, null);

        if (!nextFocusableElement) nextFocusableElement = this.getClosestToEdge(direction, focusableGroup, { x, y });

        nextFocusableElement.element.focus();
    }

    /**
     * Get the angle range for the direction
     * @param {string} direction
     * @param {number} angle
     * @returns {boolean}
     */
    getDirectionAngle(direction, angle) {
        switch (direction) {
            case 'down':
                return angle > 0 && angle < 180;
            case 'up':
                return angle > -180 && angle < 0;
            case 'left':
                return angle < -90 || angle > 90;
            case 'right':
                return angle > -90 && angle < 90;
        }
    }

    /**
     * Registers actions and adds them to the keyboard and gamepad objects
     */
    registerKeyActions() {
        directions.forEach((direction) => {
            const callback = () => {
                this.moveFocus(direction);
            };
            actions.register(`move-focus-${direction}`, callback);

            keyboard.on({
                keys: [`arrow_${direction}`],
                callback: `move-focus-${direction}`,
                type: 'press',
            });

            gamepad.on({
                actions: [`playstation.d-pad-${direction}`],
                callback: `move-focus-${direction}`,
            });
        });
    }

    /**
     * Removes the added actions
     */
    removeKeyActions() {
        directions.forEach((direction) => {
            actions.remove(`move-focus-${direction}`);
            keyboard.off([`arrow_${direction}`]);
            gamepad.off([`playstation.d-pad-${direction}`]);
        });
    }

    /**
     * Focuses on the first element in a focusable area
     * @param {string} area
     * @returns {void}
     */
    focusFirst(area = 'default') {
        const navigatableElements = this.navigatableElements[area];
        if (!navigatableElements || navigatableElements.length === 0) {
            return console.error(`The area '${area}' you are trying to focus doesn't exist or the spatial navigation hasn't been initialized`);
        }
        navigatableElements[0].focus();
    }

    /**
     * Focuses on the last element in a focusable area
     * @param {string} area
     * @returns {void}
     */
    focusLast(area = 'default') {
        if (!this.enabled) return;

        const navigatableElements = this.navigatableElements[area];
        if (!navigatableElements || navigatableElements.length === 0) {
            return console.error(`The area '${area}' you are trying to focus doesn't exist or the spatial navigation hasn't been initialized`);
        }
        navigatableElements.slice(-1)[0].focus();
    }

    /**
     * Changes focus to another area
     * @param {string} area
     */
    switchArea(area) {
        this.focusFirst(area);
    }

    /**
     * Checks if a given element is a focusable area
     * @returns {boolean}
     */
    isActiveElementInGroup() {
        return Object.values(this.navigatableElements).some(group => group.includes(document.activeElement));
    }

    /**
     * Removes the focus from a focused element in a group
     */
    clearFocus() {
        if (this.isActiveElementInGroup()) document.activeElement.blur();
    }
}

var spatialNavigation = new SpatialNavigation();

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Makes an element draggable
 */
class DragBase {
    /**
     *
     * @param {Object} options
     */
    constructor(options) {
        this.draggableElements = [];
        this.draggedElement = null;
        this.enabled = false;

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);

        this.options = options;
    }

    /**
     * Get the index of the dragged item in the draggableElements
     */
    get draggedItemIndex() {
        return [...this.draggableElements].indexOf(this.draggedElement);
    }

    /**
     * Gets the body scroll offset to calculate in the dragging
     */
    get bodyScrollOffset() {
        return {
            x: document.body.scrollLeft,
            y: document.body.scrollTop,
        };
    }

    /**
     *
     * @param {number} clientX
     * @param {number} clientY
     * @param {HTMLElement} target
     */
    setPointerOffset(clientX, clientY, target) {
        const { x, y } = target.getBoundingClientRect();
        this.offset = {
            x: clientX - x,
            y: clientY - y,
        };
    }
}

/**
 *
 * @param {number} diffX - Difference in X axis
 * @param {number} diffY - Difference in Y axis
 * @returns {string}
 */
function getDirection(diffX, diffY) {
    const MIN_SWIPE_OFFSET = 200;
    if (diffY < 0 && diffX > -MIN_SWIPE_OFFSET && diffX < MIN_SWIPE_OFFSET) return 'top';
    if (diffY > 0 && diffX > -MIN_SWIPE_OFFSET && diffX < MIN_SWIPE_OFFSET) return 'bottom';
    if (diffX < 0 && diffY > -MIN_SWIPE_OFFSET && diffY < MIN_SWIPE_OFFSET) return 'left';
    if (diffX > 0 && diffY > -MIN_SWIPE_OFFSET && diffY < MIN_SWIPE_OFFSET) return 'right';
    if (diffX <= -MIN_SWIPE_OFFSET && diffY <= -MIN_SWIPE_OFFSET) return 'top-left';
    if (diffX >= MIN_SWIPE_OFFSET && diffY <= -MIN_SWIPE_OFFSET) return 'top-right';
    if (diffX <= -MIN_SWIPE_OFFSET && diffY >= MIN_SWIPE_OFFSET) return 'bottom-left';
    if (diffX >= MIN_SWIPE_OFFSET && diffY >= MIN_SWIPE_OFFSET) return 'bottom-right';
}

/**
 * @param {HTMLElement|string} element
 * @returns {HTMLElement}
 */
function getElement(element) {
    return element instanceof HTMLElement ? element : document.querySelector(element);
}

/* eslint-disable max-lines-per-function */


const MULTIPLE_TOUCHES_MIN_NUMBER = 2;

/**
 * TouchGestures class that handles all of the touch interactions and gestures
 */
class TouchGestures {
    /**
     * @typedef {Object} gestureReturnObject
     * @property {function} gesture.remove - Removes the gesture and detaches the event listeners
     */

    /* eslint-disable-next-line require-jsdoc */
    constructor() {
        this.activeTouches = new Map();
    }

    /**
     *
     * @param {Object} options
     * @param {HTMLElement | string} options.element - Element you want to attach the touch event to
     * @param {function} options.callback - Function to be executed on touch
     * @param {number} [options.time=1000] - Time in milliseconds for the press
     * @returns {gestureReturnObject}
     */
    hold(options) {
        if (!options) return console.error('Options not provided for hold!');

        let holdTimer;

        const element = getElement(options.element);

        if (!element) return console.error('Element not found!');

        const onHold = ({ changedTouches }) => {
            this.activeTouches.set(changedTouches[0].identifier, changedTouches[0]);

            holdTimer = setTimeout(() => {
                if (!options.callback) return;
                options.callback();
            }, options.time || 1000);
        };

        const onHoldEnd = ({ changedTouches }) => {
            this.activeTouches.delete(changedTouches[0].identifier);
            clearTimeout(holdTimer);
        };

        element.addEventListener('touchstart', onHold);

        element.addEventListener('touchend', onHoldEnd);

        return {
            /**
             * Removes the event listeners
             */
            remove() {
                element.removeEventListener('touchstart', onHold);
                element.removeEventListener('touchend', onHoldEnd);
            },
        };
    }

    /**
     *
     * @param {Object} options
     * @param {HTMLElement | string} options.element - Element you want to attach the touch event to
     * @param {function} options.callback - Function to be executed on touch
     * @param {number} [options.tapsNumber=1] - Number of taps necessary for the callback to be executed
     * @param {number} [options.tapTime=200] - Time in milliseconds between putting down the finger and lifting it up
     * @param {number} [options.betweenTapsTime=500] - Time in milliseconds between two sequential taps
     * @returns {gestureReturnObject}
     */
    tap(options) {
        if (!options) return console.error('Options not provided for tap!');

        let tapTimer, betweenTapsTimer;
        let isTap = true;
        let tapCount = options.tapsNumber || 1;

        const element = getElement(options.element);

        if (!element) return console.error('Element not found!');

        const onTap = ({ changedTouches }) => {
            this.activeTouches.set(changedTouches[0].identifier, changedTouches[0]);

            clearTimeout(betweenTapsTimer);

            tapTimer = setTimeout(() => {
                isTap = false;
            }, options.tapTime || 200);
        };

        const onTapEnd = ({ changedTouches }) => {
            this.activeTouches.delete(changedTouches[0].identifier);
            clearTimeout(tapTimer);

            if (!isTap) return;

            tapCount--;
            betweenTapsTimer = setTimeout(() => {
                tapCount = options.tapsNumber || 1;
                clearTimeout(betweenTapsTimer);
            }, options.betweenTapsTime || 500);

            if (tapCount !== 0 || !options.callback) return;
            options.callback();

            isTap = true;
            clearTimeout(tapTimer);
            tapCount = options.tapsNumber || 1;
        };

        element.addEventListener('touchstart', onTap);

        element.addEventListener('touchend', onTapEnd);

        return {
            /**
             * Removes the event listeners
             */
            remove() {
                element.removeEventListener('touchstart', onTap);
                element.removeEventListener('touchend', onTapEnd);
            },
        };
    }

    /**
     *
     * @param {Object} options
     * @param {HTMLElement | string} options.element - Element you want to attach the touch event to
     * @param {function} options.onDragStart - Function to be executed on drag start
     * @param {function} options.onDrag - Function to be executed on drag
     * @param {function} options.onDragEnd - Function to be executed on drag end
     * @returns {gestureReturnObject}
     */
    drag(options) {
        if (!options) return console.error('Options not provided for drag!');

        const element = getElement(options.element);

        if (!element) return console.error('Element not found!');

        const onDragStart = ({ changedTouches, target, currentTarget }) => {
            this.activeTouches.set(changedTouches[0].identifier, changedTouches[0]);

            document.addEventListener('touchmove', onDrag);
            document.addEventListener('touchend', onDragEnd);

            if (!options.onDragStart) return;
            options.onDragStart({ x: changedTouches[0].clientX, y: changedTouches[0].clientY, target, currentTarget });
        };

        const onDrag = ({ changedTouches }) => {
            if (!this.activeTouches.has(changedTouches[0].identifier)) return;

            if (!options.onDrag) return;
            options.onDrag({ x: changedTouches[0].clientX, y: changedTouches[0].clientY });
        };

        const onDragEnd = ({ changedTouches }) => {
            this.activeTouches.delete(changedTouches[0].identifier);
            document.removeEventListener('touchmove', onDrag);
            document.removeEventListener('touchend', onDragEnd);

            if (!options.onDragEnd) return;
            options.onDragEnd({ x: changedTouches[0].clientX, y: changedTouches[0].clientY });
        };

        element.addEventListener('touchstart', onDragStart);

        return {
            /**
             * Removes the event listeners
             */
            remove() {
                element.removeEventListener('touchstart', onDragStart);
            },
        };
    }

    /**
     *
     * @param {Object} options
     * @param {HTMLElement | string} options.element - Element you want to attach the touch event to
     * @param {function} options.callback - Function to be executed on touch- Directions of the swipe
     * @param {number} options.touchNumber - Number of fingers necessary for the swipe
     * @returns {gestureReturnObject}
     */
    swipe(options) {
        if (!options) return console.error('Options not provided for swipe!');
        let swipeTimer, direction, distance;
        let isSwipe = true;
        const SWIPE_MIN_DISTANCE = 100;

        options.touchNumber ||= 1;

        const element = getElement(options.element);

        if (!element) return console.error('Element not found!');

        const onSwipeStart = ({ changedTouches }) => {
            this.activeTouches.set(changedTouches[0].identifier, changedTouches[0]);

            if (this.activeTouches.size > options.touchNumber) {
                // If the user has added two swipes with different fingers this way we can differentiate them
                document.removeEventListener('touchmove', onSwipe);
                document.removeEventListener('touchend', onSwipeEnd);
            }

            if (this.activeTouches.size !== options.touchNumber) return;

            swipeTimer = setTimeout(() => {
                isSwipe = false;
                clearTimeout(swipeTimer);
                swipeTimer = null;
            }, 1000);

            document.addEventListener('touchmove', onSwipe);
            document.addEventListener('touchend', onSwipeEnd);
        };

        const onSwipe = ({ changedTouches }) => {
            if (!this.activeTouches.has(changedTouches[0].identifier)) return;

            const { clientX: startX, clientY: startY } = this.activeTouches.get(changedTouches[0].identifier);

            const diffX = changedTouches[0].clientX - startX;
            const diffY = changedTouches[0].clientY - startY;

            direction = getDirection(diffX, diffY);
            distance = distanceBetweenTwoPoints(startX, startY, changedTouches[0].clientX, changedTouches[0].clientY); // To prevent slight taps to be considered as swipes
        };

        const onSwipeEnd = ({ changedTouches }) => {
            this.activeTouches.delete(changedTouches[0].identifier);

            if (this.activeTouches.size !== 0) return;

            document.removeEventListener('touchmove', onSwipe);
            document.removeEventListener('touchend', onSwipeEnd);

            if (isSwipeComplete()) {
                options.callback(direction);
            }

            clearTimeout(swipeTimer);
            isSwipe = true;
            swipeTimer = null;
        };

        const isSwipeComplete = () => {
            return isSwipe && options.callback && direction && distance > SWIPE_MIN_DISTANCE;
        };

        element.addEventListener('touchstart', onSwipeStart);

        return {
            /**
             * Removes the event listeners
             */
            remove() {
                element.removeEventListener('touchstart', onSwipeStart);
            },
        };
    }

    /**
     *
     * @param {Object} options
     * @param {HTMLElement | string} options.element - Element you want to attach the touch event to
     * @param {function} options.callback - Function to be executed on touch
     * @returns {gestureReturnObject}
     */
    pinch(options) {
        if (!options) return console.error('Options not provided for pinch!');
        let distance;
        const PINCH_DELTA_NUMBER = 40;

        const element = getElement(options.element);

        if (!element) return console.error('Element not found!');

        const onPinchStart = ({ changedTouches }) => {
            this.activeTouches.set(changedTouches[0].identifier, changedTouches[0]);

            if (this.activeTouches.size < MULTIPLE_TOUCHES_MIN_NUMBER) return;

            document.addEventListener('touchmove', onPinch);
            document.addEventListener('touchend', onPinchEnd);

            distance = distanceBetweenTwoPoints(
                this.activeTouches.get(0).clientX,
                this.activeTouches.get(0).clientY,
                this.activeTouches.get(1).clientX,
                this.activeTouches.get(1).clientY
            );
        };

        const onPinch = ({ changedTouches }) => {
            if (this.activeTouches.size !== MULTIPLE_TOUCHES_MIN_NUMBER) return;

            this.activeTouches.set(changedTouches[0].identifier, changedTouches[0]);

            const newDistance = distanceBetweenTwoPoints(
                this.activeTouches.get(0).clientX,
                this.activeTouches.get(0).clientY,
                this.activeTouches.get(1).clientX,
                this.activeTouches.get(1).clientY
            );

            const pinchDelta = Math.sign(newDistance - distance) * PINCH_DELTA_NUMBER;
            distance = newDistance;

            const midpoint = getMidPoint(
                this.activeTouches.get(0).clientX,
                this.activeTouches.get(0).clientY,
                this.activeTouches.get(1).clientX,
                this.activeTouches.get(1).clientY
            );

            if (options.callback) options.callback({ pinchDelta, midpoint });
        };
        const onPinchEnd = ({ changedTouches }) => {
            this.activeTouches.delete(changedTouches[0].identifier);

            if (this.activeTouches.size !== 0) return;

            document.removeEventListener('touchmove', onPinch);
            document.removeEventListener('touchend', onPinchEnd);
        };

        element.addEventListener('touchstart', onPinchStart);

        return {
            /**
             * Removes the event listeners
             */
            remove() {
                element.removeEventListener('touchstart', onPinchStart);
            },
        };
    }

    /**
     *
     * @param {Object} options
     * @param {HTMLElement | string} options.element - Element you want to attach the touch event to
     * @param {function} options.callback - Function to be executed on touch
     * @returns {gestureReturnObject}
     */
    rotate(options) {
        if (!options) return console.error('Options not provided for rotate!');
        let angle = 0;
        let initialAngle;

        const element = getElement(options.element);

        if (!element) return console.error('Element not found!');

        const onRotate = ({ changedTouches }) => {
            if (this.activeTouches.size !== MULTIPLE_TOUCHES_MIN_NUMBER) return;

            this.activeTouches.set(changedTouches[0].identifier, changedTouches[0]);

            angle = getAngle() - initialAngle;

            if (options.callback) options.callback(angle);
        };

        const onRotateStart = ({ changedTouches }) => {
            this.activeTouches.set(changedTouches[0].identifier, changedTouches[0]);

            if (this.activeTouches.size < MULTIPLE_TOUCHES_MIN_NUMBER) return;

            initialAngle = getAngle() - angle;

            document.addEventListener('touchmove', onRotate);
            document.addEventListener('touchend', onRotateEnd);
        };

        const onRotateEnd = ({ changedTouches }) => {
            this.activeTouches.delete(changedTouches[0].identifier);
            
            if (this.activeTouches.size !== 0) return;

            document.removeEventListener('touchmove', onRotate);
            document.removeEventListener('touchend', onRotateEnd);
        };

        element.addEventListener('touchstart', onRotateStart);

        const getAngle = () => {
            const fullRotation = 360;
            const rotationOffset = 90;

            const offsetY = this.activeTouches.get(0).clientY - this.activeTouches.get(1).clientY;
            const offsetX = this.activeTouches.get(0).clientX - this.activeTouches.get(1).clientX;

            return (toDeg(Math.atan2(offsetY, offsetX)) + fullRotation + rotationOffset) % fullRotation;
        };

        return {
            /**
             * Removes the event listeners
             */
            remove() {
                element.removeEventListener('touchstart', onRotateStart);
            },
        };
    }
}

var touchGestures = new TouchGestures();

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


const AXIS = ['x', 'y'];
/**
 * Makes an element draggable
 */
class Draggable extends DragBase {
    /**
     * @typedef {Object} DraggableOptions
     * @property {string} element
     * @property {string} restrictTo
     * @property {string} dragClass
     * @property {'x'|'y'} lockAxis
     * @property {function} onDragStart
     * @property {function} onDragMove
     * @property {function} onDragEnd
     */

    /**
     *
     * @param {DraggableOptions} options
     */
    constructor(options) {
        super(options);
        const hash = createHash();

        this.actionName = `drag-around-${hash}`;

        this.restrict = {
            top: 0,
            left: 0,
            right: Infinity,
            bottom: Infinity,
        };

        this._touchEnabled = false;
        this.touchEvents = [];

        this.init();
    }

    /**
     * Enables or disabled touch events
     * @param {boolean} enabled
     */
    set touchEnabled(enabled) {
        if (this._touchEnabled === enabled) return;
        this._touchEnabled = enabled;
        this._touchEnabled ? this.addTouchEvents() : this.removeTouchEvents();
    }

    /**
     * @returns {void}
     */
    init() {
        if (this.enabled) return;

        this.draggableElements = document.querySelectorAll(this.options.element);
        if (this.draggableElements.length === 0) {
            return console.error(`${this.options.element} is not a valid element selector.`);
        }

        this.draggableElements.forEach(element => element.addEventListener('mousedown', this.onMouseDown));

        this.registerDragActions();
        this.enabled = true;
    }

    /**
     * Removes the eventlisteners
     * @returns {void}
     */
    deinit() {
        if (!this.enabled) return;
        this.enabled = false;

        this.draggableElements.forEach(element => element.removeEventListener('mousedown', this.onMouseDown));
        this.removeDragActions();
    }

    /**
     * mousedown event handler
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        this.draggedElement = event.currentTarget;

        this.draggedElement.style.position = 'absolute';
        this.elementRect = this.draggedElement.getBoundingClientRect();

        this.setRestriction();
        this.setPointerOffset(event.clientX, event.clientY, this.draggedElement);

        actions.execute(this.actionName, {
            x: event.clientX + this.bodyScrollOffset.x - this.offset.x,
            y: event.clientY + this.bodyScrollOffset.y - this.offset.y,
            index: this.draggedItemIndex,
        });

        this.options.dragClass && this.draggedElement.classList.add(this.options.dragClass);
        this.options.onDragStart && this.options.onDragStart(this.draggedElement);

        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }

    /**
     * mousemove event handler
     * @param {MouseEvent} event
     */
    onMouseMove(event) {
        actions.execute(this.actionName, {
            x: event.clientX + this.bodyScrollOffset.x - this.offset.x,
            y: event.clientY + this.bodyScrollOffset.y - this.offset.y,
            index: this.draggedItemIndex,
        });
    }

    /**
     * mouseup event handler
     */
    onMouseUp() {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);

        this.options.onDragEnd && this.options.onDragEnd(this.draggedElement);
        this.options.dragClass && this.draggedElement.classList.remove(this.options.dragClass);

        this.draggedElement = null;
    }

    /**
     * Register dragging as an action to be able to use it externally
     */
    registerDragActions() {
        actions.register(this.actionName, ({ x, y, index }) => {
            if (!this.draggableElements[index]) return console.error(`There is no draggable element at index ${index}`);

            if (this.options.lockAxis && AXIS.includes(this.options.lockAxis)) {
                x = this.options.lockAxis === 'y' ? this.elementRect.x : x;
                y = this.options.lockAxis === 'x' ? this.elementRect.y : y;
            }

            this.draggableElements[index].style.left = `${clamp(x, this.restrict.left, this.restrict.right)}px`;
            this.draggableElements[index].style.top = `${clamp(y, this.restrict.top, this.restrict.bottom)}px`;

            this.options.onDragMove && this.options.onDragMove({ x, y });
        });
    }

    /**
     * Removes the registered action
     */
    removeDragActions() {
        actions.remove(this.actionName);
    }

    /**
     * Add touch gestures to drag the element
     */
    addTouchEvents() {
        this.draggableElements.forEach((element) => {
            this.touchEvents.push(
                touchGestures.drag({
                    element,
                    onDragStart: (event) => {
                        this.onMouseDown({ currentTarget: event.currentTarget, clientX: event.x, clientY: event.y });
                    },
                    onDrag: ({ x, y }) => {
                        this.onMouseMove({ clientX: x, clientY: y });
                    },
                    onDragEnd: () => {
                        this.onMouseUp();
                    },
                })
            );
        });
    }

    /**
     * Removes the touch gestures
     */
    removeTouchEvents() {
        this.touchEvents.forEach(event => event.remove());
        this.touchEvents = [];
    }

    /**
     * Sets the bounds if a dragged element has to be restricted
     * @returns {void}
     */
    setRestriction() {
        if (!this.options.restrictTo) return;

        const restrictTo = document.querySelector(this.options.restrictTo);
        if (!restrictTo) {
            return console.error(
                `The element ${this.options.restrictTo} you trying to restrict dragging to is not a valid element`
            );
        }

        const { x, y, height, width } = restrictTo.getBoundingClientRect();
        this.restrict = {
            top: y,
            left: x,
            right: width + x - this.elementRect.width,
            bottom: height + y - this.elementRect.height,
        };
    }
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/**
 * Makes an element draggable
 */
class Dropzone extends DragBase {
    /**
     *
     * @typedef {Object} DropzoneOptions
     * @property {string} element
     * @property {string[]} dropzones
     * @property {string} draggedClass
     * @property {string} dropzoneActiveClass
     * @property {'switch'|'add'|'shift'|'none'} dropType If there is already an element in the dropzone
     * @property {function} onDragStart
     * @property {function} onDragMove
     * @property {function} onDragEnd
     * @property {function} onDropZoneEnter
     * @property {function} onDropZoneLeave
     * @property {function} onDrop
     */

    /**
     *
     * @param {DropzoneOptions} options
     */
    constructor(options) {
        super(options);
        const hash = createHash();

        this.dropzones = [];
        this.draggedOver = null;

        this.actionName = `drag-and-drop-${hash}`;
        this.automaticAction = `move-to-${hash}`;

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

        this._touchEnabled = false;
        this.touchEvents = [];

        this.init();
    }

    /**
     * Enables or disabled touch events
     * @param {boolean} enabled
     */
    set touchEnabled(enabled) {
        if (this._touchEnabled === enabled) return;
        this._touchEnabled = enabled;
        this._touchEnabled ? this.addTouchEvents() : this.removeTouchEvents();
    }

    /**
     * @returns {void}
     */
    init() {
        if (this.enabled) return;

        this.draggableElements = document.querySelectorAll(this.options.element);
        if (this.draggableElements.length === 0) {
            return console.error(`${this.options.element} is not a valid element selector.`);
        }

        this.draggableElements.forEach(element => element.addEventListener('mousedown', this.onMouseDown));

        this.createDropzones();
        if (this.dropzones.length === 0) return;

        this.dropzones.forEach((dropzone) => {
            dropzone.addEventListener('mouseenter', this.onMouseEnter);
            dropzone.addEventListener('mouseleave', this.onMouseLeave);
        });

        this.registerDragActions();

        this.enabled = true;
    }

    /**
     * Deinitializes the dragging
     * @returns {void}
     */
    deinit() {
        if (!this.enabled) return;

        this.draggableElements.forEach(element => element.removeEventListener('mousedown', this.onMouseDown));
        this.dropzones.forEach((dropzone) => {
            dropzone.removeEventListener('mouseenter', this.onMouseEnter);
            dropzone.removeEventListener('mouseleave', this.onMouseLeave);
        });

        this.removeActions();

        this.enabled = false;
    }

    /**
     * mousedown event handler
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        this.draggedElement = event.currentTarget;

        this.draggedElement.style.position = 'absolute';
        this.draggedElement.style.pointerEvents = 'none';

        this.setPointerOffset(event.clientX, event.clientY, this.draggedElement);
        actions.execute(this.actionName, {
            x: event.clientX + this.bodyScrollOffset.x - this.offset.x,
            y: event.clientY + this.bodyScrollOffset.y - this.offset.y,
            index: this.draggedItemIndex,
        });

        this.options.dragStyle && this.draggedElement.classList.add(this.options.dragStyle);
        this.options.onDragStart && this.options.onDragStart(this.draggedElement);

        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }

    /**
     * mousemove event handler
     * @param {MouseEvent} event
     */
    onMouseMove(event) {
        actions.execute(this.actionName, {
            x: event.clientX + this.bodyScrollOffset.x - this.offset.x,
            y: event.clientY + this.bodyScrollOffset.y - this.offset.y,
            index: this.draggedItemIndex,
        });
    }

    /**
     * mouseup event handler
     */
    onMouseUp() {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);

        this.draggedElement.style.position = '';
        this.draggedElement.style.pointerEvents = '';
        this.draggedElement.style.left = '';
        this.draggedElement.style.top = '';

        this.options.onDragEnd && this.options.onDragEnd(this.draggedElement);
        this.options.dragStyle && this.draggedElement.classList.remove(this.options.dragStyle);

        this.draggedOver && this.handleDrop();

        this.draggedElement = null;
    }

    /**
     * Handler for the mouseenter event
     * @param {MouseEvent} event
     * @returns {void}
     */
    onMouseEnter(event) {
        if (!this.draggedElement) return;
        this.draggedOver = event.currentTarget;

        this.options.dropzoneActiveClass && this.draggedOver.classList.add(this.options.dropzoneActiveClass);
    }

    /**
     * Handler for the mouseleave event
     * @returns {void}
     */
    onMouseLeave() {
        if (!this.draggedElement) return;

        if (this.options.dropzoneActiveClass && this.draggedOver) {
            this.draggedOver.classList.remove(this.options.dropzoneActiveClass);
        }

        this.draggedOver = null;
    }

    /**
     * Register dragging as an action to be able to use it externally
     */
    registerDragActions() {
        actions.register(this.actionName, ({ x, y, index }) => {
            if (!this.draggableElements[index]) return console.error(`There is no draggable element at index ${index}`);

            this.draggableElements[index].style.left = `${x}px`;
            this.draggableElements[index].style.top = `${y}px`;

            this.options.onDragMove && this.options.onDragMove({ x, y });
        });

        actions.register(this.automaticAction, this.automaticMove.bind(this));

        this.actionsRegistered = true;
    }

    /**
     * Removes the registered actions
     */
    removeActions() {
        actions.remove(this.actionName);
        actions.remove(this.automaticAction);
    }

    /* eslint-disable max-lines-per-function*/

    /**
     * Adds touch events to the draggable elements
     */
    addTouchEvents() {
        this.draggableElements.forEach((element) => {
            this.touchEvents.push(
                touchGestures.drag({
                    element,
                    onDragStart: (event) => {
                        this.onMouseDown({ currentTarget: event.currentTarget, clientX: event.x, clientY: event.y });
                    },
                    onDrag: ({ x, y }) => {
                        this.onMouseMove({ clientX: x, clientY: y });
                        const elementOver = document.elementFromPoint(x, y);
                        let dropzone = this.options.dropzones.reduce((acc, dropzone) => {
                            if (acc) return acc;
                            return (acc = elementOver.closest(dropzone));
                        }, null);

                        if (!dropzone) {
                            dropzone = this.dropzones.includes(elementOver) ? elementOver : null;
                        }

                        if (dropzone) {
                            this.onMouseEnter({ currentTarget: dropzone });
                            return;
                        }

                        this.onMouseLeave();
                    },
                    onDragEnd: () => {
                        this.onMouseUp();
                    },
                })
            );
        });
    }

    /* eslint-enable max-lines-per-function */

    /**
     * Removes the touch gestures
     */
    removeTouchEvents() {
        this.touchEvents.forEach(event => event.remove());
        this.touchEvents = [];
    }

    /**
     * Automatically drags an element to a dropzone
     * @param {Object} options
     * @param {number} options.elementIndex The index of the element you want to move
     * @param {number} options.dropzoneIndex The index of the dropzone you want to move the element to
     */
    automaticMove({ elementIndex, dropzoneIndex }) {
        const { x, y } = this.dropzones[dropzoneIndex].getBoundingClientRect();
        const { x: elementX, y: elementY } = this.draggableElements[elementIndex].getBoundingClientRect();

        const direction = {
            x: Math.sign(x - elementX),
            y: Math.sign(y - elementY),
        };

        this.draggableElements[elementIndex].style.position = 'absolute';

        const loop = (newX, newY) => {
            if (newX === x && newY === y) {
                this.dropzones[dropzoneIndex].appendChild(this.draggableElements[elementIndex]);
                this.draggableElements[elementIndex].style.position = '';
                return;
            }

            newX = newX !== x ? direction.x + newX : newX;
            newY = newY !== y ? direction.y + newY : newY;

            this.draggableElements[elementIndex].style.left = `${newX}px`;
            this.draggableElements[elementIndex].style.top = `${newY}px`;

            if (newX !== x || newY !== y) requestAnimationFrame(() => loop(newX, newY));
        };

        loop(elementX, elementY);
    }

    /**
     * Saves the dropzones
     */
    createDropzones() {
        this.dropzones = this.options.dropzones.reduce((acc, dropzone) => {
            const dropzoneElements = [...document.querySelectorAll(dropzone)];
            if (dropzoneElements.length === 0) {
                console.error(`${dropzone} is not a valid html element to be used as a dropzone`);
            }

            return acc.concat(dropzoneElements);
        }, []);
    }

    /**
     * Handler when you drop the dragged item
     */
    handleDrop() {
        let dropType = this.options.dropType;

        const eventData = {
            preventDefault: () => {
                dropType = 'ignore';
            },
            target: this.draggedElement,
            dropzone: this.draggedOver,
        };

        this.options.onDrop && this.options.onDrop(eventData);

        if (dropType === 'ignore') return;

        if (this.draggedOver.children.length === 0) dropType = 'add';

        switch (dropType) {
            case 'add':
                this.draggedOver.appendChild(this.draggedElement);
                break;
            case 'shift':
                this.shiftElements();
                break;
            case 'switch':
                this.draggedElement.parentNode.appendChild(this.draggedOver.children[0]);
                this.draggedOver.appendChild(this.draggedElement);
                break;
        }

        this.onMouseLeave();
    }

    /**
     * Shifts the element to the nearest empty space
     */
    shiftElements() {
        const dropzoneIndex = this.dropzones.findIndex(dropzone => dropzone === this.draggedOver);
        const dropzoneChildren = this.dropzones.map((dropzone) => {
            if (dropzone.children[0] === this.draggedElement) return [];
            return [...dropzone.children];
        });

        const closestEmptyIndex = dropzoneChildren.reduce((acc, el, index) => {
            if (el.length === 0) acc = Math.abs(dropzoneIndex - index) < Math.abs(dropzoneIndex - acc) ? index : acc;
            return acc;
        }, 100000);

        const directionEmpty = Math.sign(dropzoneIndex - closestEmptyIndex) > 0 ? 0 : 1;
        const directionDropzone = Math.sign(dropzoneIndex - closestEmptyIndex) < 0 ? 0 : 1;

        dropzoneChildren.splice(dropzoneIndex + directionDropzone, 0, [this.draggedElement]);
        dropzoneChildren.splice(closestEmptyIndex + directionEmpty, 1);

        dropzoneChildren.forEach((children, index) => {
            children.forEach(child => this.dropzones[index].appendChild(child));
        });
    }
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


const fullRotation = 360;
const rotationOffset = 90;

/**
 * Allows for an element to be rotated
 */
class Rotate {
    /**
     *
     * @param {Object} options
     * @param {string} options.element
     * @param {number} options.snapAngle Snaps the rotating element to increments of that angle
     * @param {function} options.onRotation
     */
    constructor(options) {
        const hash = createHash();

        this.options = options;

        this.rotatingElement = null;
        this.elementPosition = { x: 0, y: 0 };
        this.angle = 0;
        this.enabled = false;
        this.actionName = `rotate-${hash}`;

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);

        this._touchEnabled = false;
        this.touchEvents = null;

        this.init();
    }

    /**
     * Enables or disabled touch events
     * @param {boolean} enabled
     */
    set touchEnabled(enabled) {
        if (this._touchEnabled === enabled) return;
        this._touchEnabled = enabled;
        this._touchEnabled ? this.addTouchEvents() : this.removeTouchEvents();
    }

    /**
     * Initializes the rotation
     * @returns {void}
     */
    init() {
        if (this.enabled) return;

        this.rotatingElement = this.rotatingElement || document.querySelector(this.options.element);

        if (!this.rotatingElement) return console.error(`${this.options.element} is not a valid element selector`);
        this.rotatingElement.addEventListener('mousedown', this.onMouseDown);

        this.registerAction();

        this.enabled = true;
    }

    /**
     * Deinitilizes the rotation
     * @returns {void}
     */
    deinit() {
        if (!this.enabled) return;

        this.rotatingElement.removeEventListener('mousedown', this.onMouseDown);
        this.removeActions();

        this.enabled = false;
    }

    /**
     * Handles the mousedown event
     * @param {MouseEvent} event
     */
    onMouseDown(event) {
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);

        const { x, y, height, width } = this.rotatingElement.getBoundingClientRect();
        this.elementPosition = { x: x + width / 2, y: y + height / 2 };

        const angle = this.getAngle(event.clientX, event.clientY);
        this.initalAngle = angle - this.angle;
    }

    /**
     * Handles the mousemove event
     * @param {MouseEvent} event
     */
    onMouseMove(event) {
        this.angle = this.getAngle(event.clientX, event.clientY) - this.initalAngle;

        if (this.options.snapAngle) {
            this.angle = Math.floor(this.angle / this.options.snapAngle) * this.options.snapAngle;
        }

        actions.execute(this.actionName, this.angle);
    }

    /**
     * Handles the mouseup event
     */
    onMouseUp() {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    }

    /**
     * Registers the actions
     */
    registerAction() {
        actions.register(this.actionName, (angle) => {
            this.rotatingElement.style.transform = `rotate(${angle}deg)`;
            this.options.onRotation && this.options.onRotation(angle < 0 ? fullRotation + angle : angle);
        });
    }

    /**
     * Removes the action
     */
    removeActions() {
        actions.remove(this.actionName);
    }

    /**
     * Add rotate touch events
     */
    addTouchEvents() {
        this.touchEvents = touchGestures.drag({
            element: this.rotatingElement,
            onDragStart: ({ x, y }) => {
                this.onMouseDown({ clientX: x, clientY: y });
            },
            onDrag: ({ x, y }) => {
                this.onMouseMove({ clientX: x, clientY: y });
            },
            onDragEnd: () => {
                this.onMouseUp();
            },
        });
    }

    /**
     * Removes the touch events
     */
    removeTouchEvents() {
        this.touchEvents.remove();
        this.touchEvents = null;
    }

    /**
     * Finds the angle from the mouse coordinates based on the center of the element that is rotating
     * @param {number} x
     * @param {number} y
     * @returns {number} Angle in degrees
     */
    getAngle(x, y) {
        const offsetX = x - this.elementPosition.x;
        const offsetY = y - this.elementPosition.y;
        return (toDeg(Math.atan2(offsetY, offsetX)) + fullRotation + rotationOffset) % fullRotation;
    }
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/**
 * Allows you to resize elements on the screen
 */
class Resize {
    /**
     *
     * @typedef {Object} ResizeOptions
     * @property {string} element
     * @property {number} edgeWidth
     * @property {function} onWidthChange
     * @property {function} onHeightChange
     * @property {number} widthMin
     * @property {number} widthMax
     * @property {number} heightMin
     * @property {number} heightMax
     */

    /**
     *
     * @param {ResizeOptions} options
     */
    constructor(options) {
        this.options = options;
        this.options.edgeWidth = options.edgeWidth || 5;
        this.options.heightMin = this.options.heightMin || 50;
        this.options.heightMax = this.options.heightMax || window.innerHeight;
        this.options.widthMin = this.options.widthMin || 50;
        this.options.widthMax = this.options.widthMax || window.innerWidth;

        this.resizableElement = null;
        this.enabled = false;
        this.activeEdge = null;
        this.edges = {
            bottom: null,
            right: null,
            bottomRight: null,
        };

        const hash = createHash();

        this.heightAction = `resize-height-${hash}`;
        this.widthAction = `resize-width-${hash}`;

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);

        this._touchEnabled = false;
        this.touchEvents = null;

        this.init();
    }

    /**
     * Enables or disabled touch events
     * @param {boolean} enabled
     */
    set touchEnabled(enabled) {
        if (this._touchEnabled === enabled) return;
        this._touchEnabled = enabled;
        this._touchEnabled ? this.addTouchEvents() : this.removeTouchEvents();
    }

    /**
     * Initializes the resizing
     * @returns {void}
     */
    init() {
        if (this.enabled) return;

        this.resizableElement = document.querySelector(this.options.element);

        if (!this.resizableElement) return console.error(`${this.options.element} is not a correct selector`);
        this.resizableElement.addEventListener('mousedown', this.onMouseDown);

        this.addEdges();
        this.registerActions();

        this.enabled = true;
    }

    /**
     * Deinitilazes the resizing
     * @returns {void}
     */
    deinit() {
        if (!this.enabled) return;

        this.resizableElement.removeEventListener('mousedown', this.onMouseDown);

        this.removeEdges();
        this.removeActions();

        this.enabled = false;
    }

    /**
     * Handles the mousedown event
     * @param {MouseEvent} event
     * @returns {void}
     */
    onMouseDown(event) {
        this.activeEdge = this.setEdge(event.target);

        if (!this.activeEdge) return;

        const { x, y } = this.resizableElement.getBoundingClientRect();
        this.elementRect = { x, y };

        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }

    /**
     * Handles the mousemove event
     * @param {MouseEvent} event
     */
    onMouseMove(event) {
        const offsetX = event.clientX - this.elementRect.x;
        const offsetY = event.clientY - this.elementRect.y;

        switch (this.activeEdge) {
            case 'bottom':
                actions.execute(this.heightAction, offsetY);
                this.options.onHeightChange && this.options.onHeightChange(offsetY);
                break;
            case 'right':
                actions.execute(this.widthAction, offsetX);
                this.options.onWidthChange && this.options.onWidthChange(offsetX);
                break;
            case 'bottomRight':
                actions.execute(this.heightAction, offsetY);
                actions.execute(this.widthAction, offsetX);
                this.options.onWidthChange && this.options.onWidthChange(offsetX);
                this.options.onHeightChange && this.options.onHeightChange(offsetY);
                break;
        }
    }

    /**
     * Handles the mouseup event
     */
    onMouseUp() {
        this.activeEdge = null;

        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    }

    /**
     * Adds the touch events to fire the actions
     */
    addTouchEvents() {
        this.touchEvents = touchGestures.drag({
            element: this.resizableElement,
            onDragStart: (event) => {
                this.onMouseDown(event);
            },
            onDrag: ({ x, y }) => {
                this.onMouseMove({ clientX: x, clientY: y });
            },
            onDragEnd: () => {
                this.onMouseUp();
            },
        });
    }

    /**
     * Removes the touch events
     */
    removeTouchEvents() {
        this.touchEvents.remove();
        this.touchEvents = null;
    }

    /**
     * Sets the active edge when resizing. If there is no edge it returns null
     * @param {HTMLElement} element
     * @returns {string|null}
     */
    setEdge(element) {
        if (element.dataset.edge) return element.dataset.edge;
        return null;
    }

    /**
     * Checks if the element you are trying to resize has already position relative or absolute set, so it doesn't overwrite them
     * @returns {void}
     */
    checkPosition() {
        const { position } = getComputedStyle(this.resizableElement);

        if (position === 'absolute' || position === 'relative') return;
        this.resizableElement.style.position = 'relative';
    }

    /**
     * Creates the edge elements and appends them to the resizable element
     */
    addEdges() {
        this.checkPosition();

        const { width, height } = this.resizableElement.getBoundingClientRect();

        Object.entries(this.edges).forEach(([edge, element]) => {
            element = document.createElement('DIV');
            element.dataset.edge = edge;
            element.style.position = 'absolute';

            switch (edge) {
                case 'bottom':
                    element.style.width = `${width - this.options.edgeWidth}px`;
                    element.style.height = `${this.options.edgeWidth}px`;
                    element.style.bottom = `-${this.options.edgeWidth}px`;
                    break;
                case 'bottomRight':
                    element.style.width = `${this.options.edgeWidth}px`;
                    element.style.height = `${this.options.edgeWidth}px`;
                    element.style.bottom = `-${this.options.edgeWidth}px`;
                    element.style.right = `-${this.options.edgeWidth}px`;
                    break;
                case 'right':
                    element.style.width = `${this.options.edgeWidth}px`;
                    element.style.height = `${height - this.options.edgeWidth}px`;
                    element.style.right = `-${this.options.edgeWidth}px`;
                    break;
            }

            this.edges[edge] = element;
            this.resizableElement.appendChild(element);
        });
    }

    /**
     * Removes the edge elements
     */
    removeEdges() {
        Object.values(this.edges).forEach((edge) => {
            this.resizableElement.removeChild(edge);
        });
    }

    /**
     * Registers actions
     */
    registerActions() {
        actions.register(this.heightAction, (height) => {
            this.resizableElement.style.height = `${clamp(height, this.options.heightMin, this.options.heightMax)}px`;
            this.edges.right.style.height = `${
                clamp(height, this.options.heightMin, this.options.heightMax) - this.options.edgeWidth
            }px`;
        });

        actions.register(this.widthAction, (width) => {
            this.resizableElement.style.width = `${clamp(width, this.options.widthMin, this.options.widthMax)}px`;
            this.edges.bottom.style.width = `${
                clamp(width, this.options.widthMin, this.options.widthMax) - this.options.edgeWidth
            }px`;
        });
    }

    /**
     * Removes the registered actions
     */
    removeActions() {
        actions.remove(this.heightAction);
        actions.remove(this.widthAction);
    }
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/**
 * Pan and zoom
 */
class Zoom {
    /**
     * @typedef {Object} ZoomOptionsObject
     * @property {string} options.element
     * @property {number} options.minZoom
     * @property {number} options.maxZoom
     * @property {number} options.zoomFactor
     * @property {function} options.onZoom
     */

    /**
     *
     * @param {ZoomOptionsObject} options
     */
    constructor(options) {
        const hash = (Math.random() + 1).toString(36).substring(7);

        this.options = options;
        this.options.maxZoom = this.options.maxZoom || Infinity;
        this.options.minZoom = this.options.minZoom || 0.1;
        this.options.zoomFactor = this.options.zoomFactor || 0.1;

        this.enabled = false;
        this.actionName = `pan-and-zoom-${hash}`;
        this.offset = { x: 0, y: 0 };
        this.transform = {
            x: 0,
            y: 0,
            scale: 1,
        };

        this.onWheel = this.onWheel.bind(this);

        this._touchEnabled = false;
        this.touchEvents = null;

        this.init();
    }

    /**
     * Enables or disabled touch events
     * @param {boolean} enabled
     */
    set touchEnabled(enabled) {
        if (this._touchEnabled === enabled) return;
        this._touchEnabled = enabled;
        this._touchEnabled ? this.addTouchEvents() : this.removeTouchEvents();
    }

    /**
     * Initialize the pan and zoom
     * @returns {void}
     */
    init() {
        if (this.enabled) return;

        this.zoomableElement = document.querySelector(this.options.element);
        if (!this.zoomableElement) return console.error(`${this.options.element} is not a correct element selector`);

        this.zoomableElement.addEventListener('wheel', this.onWheel);

        this.registerActions();

        this.zoomableElement.style.transformOrigin = 'top left';

        this.enabled = true;
    }

    /**
     * Deinitilize the pan and zoom
     * @returns {void}
     */
    deinit() {
        if (!this.enabled) return;

        this.zoomableElement.removeEventListener('wheel', this.onWheel);
        this.removeActions();

        this.enabled = false;
    }

    /**
     * Handles the wheel event
     * @param {MouseEvent} event
     */
    onWheel(event) {
        event.preventDefault();

        actions.execute(this.actionName, {
            x: event.clientX,
            y: event.clientY,
            zoomDirection: Math.sign(event.deltaY),
        });
    }

    /**
     * Registers the actions for the pan and zoom
     */
    registerActions() {
        actions.register(this.actionName, ({ x, y, zoomDirection }) => {
            const offset = this.calculateOffsets(x, y);

            this.options.onZoom && this.options.onZoom();

            const scale = (this.transform.scale - zoomDirection * this.options.zoomFactor).toFixed(5);
            if (scale < this.options.minZoom || scale > this.options.maxZoom) return;

            const zoomPoint = {
                x: offset.x / this.transform.scale,
                y: offset.y / this.transform.scale,
            };

            const transform = this.transform;

            transform.x += zoomPoint.x * (this.transform.scale - scale);
            transform.y += zoomPoint.y * (this.transform.scale - scale);
            transform.scale = scale;

            this.zoomableElement.style.transform = `matrix(${transform.scale}, 0, 0, ${transform.scale}, ${transform.x}, ${transform.y})`;

            this.transform = transform;
        });
    }

    /**
     * Removes the registered actions
     */
    removeActions() {
        actions.remove(this.actionName);
    }

    /**
     * Add pinch and stretch touch events
     */
    addTouchEvents() {
        this.touchEvents = touchGestures.pinch({
            element: this.zoomableElement,
            callback: ({ pinchDelta, midpoint }) => {
                actions.execute(this.actionName, {
                    x: midpoint.x,
                    y: midpoint.y,
                    zoomDirection: Math.sign(pinchDelta) * -1,
                });
            },
        });
    }

    /**
     * Removes the touch events
     */
    removeTouchEvents() {
        this.touchEvents.remove();
        this.touchEvents = null;
    }

    /**
     * Calculates the mouse coordinates inside the element
     * @param {number} x
     * @param {number} y
     * @returns {Object}
     */
    calculateOffsets(x, y) {
        const elementRect = this.zoomableElement.getBoundingClientRect();

        return {
            x: x - elementRect.x,
            y: y - elementRect.y,
        };
    }
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


IM$1.init();

export { Components, actions, Draggable as draggable, Dropzone as dropzone, gamepad, keyboard, Resize as resize, Rotate as rotate, spatialNavigation, touchGestures, Zoom as zoom };
