import { Components } from '../gameface.js';
import './tooltip.js';

var errorMessages = new Map([
    ['notAForm', () => 'This element is not part of a form.'],
    ['tooLong', element => `The value is too long. Maximum length is ${element.getAttribute('maxlength')}.`],
    ['tooShort', element => `The value is too short. Minimal length is ${element.getAttribute('minlength')}.`],
    ['rangeOverflow', element => `The value is too big. Maximum is ${element.getAttribute('max')}.`],
    ['rangeUnderflow', element => `The value is too small. Minimum is ${element.getAttribute('min')}.`],
    ['valueMissing', () => 'The value is required.'],
    ['nameMissing', () => 'The elements does not have a name attribute and will not be submitted'],
    ['badURL', element => `Please enter a valid URL. It should match the following pattern: /${element.pattern || element.getAttribute('pattern')}/.`],
    ['badEmail', () => `Please enter a valid email. It should contain a @ symbol.`],
    ['customError', error => `The following error has ocurred: ${error}.`],
]);

/**!
 * url-search-params-polyfill
 *
 * @author Jerry Bendy (https://github.com/jerrybendy)
 * @licence MIT
 */
(function(self) {

    var nativeURLSearchParams = (function() {
            // #41 Fix issue in RN
            try {
                if (self.URLSearchParams && (new self.URLSearchParams('foo=bar')).get('foo') === 'bar') {
                    return self.URLSearchParams;
                }
            } catch (e) {}
            return null;
        })(),
        isSupportObjectConstructor = nativeURLSearchParams && (new nativeURLSearchParams({a: 1})).toString() === 'a=1',
        // There is a bug in safari 10.1 (and earlier) that incorrectly decodes `%2B` as an empty space and not a plus.
        decodesPlusesCorrectly = nativeURLSearchParams && (new nativeURLSearchParams('s=%2B').get('s') === '+'),
        isSupportSize = nativeURLSearchParams && 'size' in nativeURLSearchParams.prototype,
        __URLSearchParams__ = "__URLSearchParams__",
        // Fix bug in Edge which cannot encode ' &' correctly
        encodesAmpersandsCorrectly = nativeURLSearchParams ? (function() {
            var ampersandTest = new nativeURLSearchParams();
            ampersandTest.append('s', ' &');
            return ampersandTest.toString() === 's=+%26';
        })() : true,
        prototype = URLSearchParamsPolyfill.prototype,
        iterable = !!(self.Symbol && self.Symbol.iterator);

    if (nativeURLSearchParams && isSupportObjectConstructor && decodesPlusesCorrectly && encodesAmpersandsCorrectly && isSupportSize) {
        return;
    }


    /**
     * Make a URLSearchParams instance
     *
     * @param {object|string|URLSearchParams} search
     * @constructor
     */
    function URLSearchParamsPolyfill(search) {
        search = search || "";

        // support construct object with another URLSearchParams instance
        if (search instanceof URLSearchParams || search instanceof URLSearchParamsPolyfill) {
            search = search.toString();
        }
        this [__URLSearchParams__] = parseToDict(search);
    }


    /**
     * Appends a specified key/value pair as a new search parameter.
     *
     * @param {string} name
     * @param {string} value
     */
    prototype.append = function(name, value) {
        appendTo(this [__URLSearchParams__], name, value);
    };

    /**
     * Deletes the given search parameter, and its associated value,
     * from the list of all search parameters.
     *
     * @param {string} name
     */
    prototype['delete'] = function(name) {
        delete this [__URLSearchParams__] [name];
    };

    /**
     * Returns the first value associated to the given search parameter.
     *
     * @param {string} name
     * @returns {string|null}
     */
    prototype.get = function(name) {
        var dict = this [__URLSearchParams__];
        return this.has(name) ? dict[name][0] : null;
    };

    /**
     * Returns all the values association with a given search parameter.
     *
     * @param {string} name
     * @returns {Array}
     */
    prototype.getAll = function(name) {
        var dict = this [__URLSearchParams__];
        return this.has(name) ? dict [name].slice(0) : [];
    };

    /**
     * Returns a Boolean indicating if such a search parameter exists.
     *
     * @param {string} name
     * @returns {boolean}
     */
    prototype.has = function(name) {
        return hasOwnProperty(this [__URLSearchParams__], name);
    };

    /**
     * Sets the value associated to a given search parameter to
     * the given value. If there were several values, delete the
     * others.
     *
     * @param {string} name
     * @param {string} value
     */
    prototype.set = function set(name, value) {
        this [__URLSearchParams__][name] = ['' + value];
    };

    /**
     * Returns a string containg a query string suitable for use in a URL.
     *
     * @returns {string}
     */
    prototype.toString = function() {
        var dict = this[__URLSearchParams__], query = [], i, key, name, value;
        for (key in dict) {
            name = encode(key);
            for (i = 0, value = dict[key]; i < value.length; i++) {
                query.push(name + '=' + encode(value[i]));
            }
        }
        return query.join('&');
    };

    // There is a bug in Safari 10.1 and `Proxy`ing it is not enough.
    var useProxy = self.Proxy && nativeURLSearchParams && (!decodesPlusesCorrectly || !encodesAmpersandsCorrectly || !isSupportObjectConstructor || !isSupportSize);
    var propValue;
    if (useProxy) {
        // Safari 10.0 doesn't support Proxy, so it won't extend URLSearchParams on safari 10.0
        propValue = new Proxy(nativeURLSearchParams, {
            construct: function (target, args) {
                return new target((new URLSearchParamsPolyfill(args[0]).toString()));
            }
        });
        // Chrome <=60 .toString() on a function proxy got error "Function.prototype.toString is not generic"
        propValue.toString = Function.prototype.toString.bind(URLSearchParamsPolyfill);
    } else {
        propValue = URLSearchParamsPolyfill;
    }

    /*
     * Apply polyfill to global object and append other prototype into it
     */
    Object.defineProperty(self, 'URLSearchParams', {
        value: propValue
    });

    var USPProto = self.URLSearchParams.prototype;

    USPProto.polyfill = true;

    // Fix #54, `toString.call(new URLSearchParams)` will return correct value when Proxy not used
    if (!useProxy && self.Symbol) {
        USPProto[self.Symbol.toStringTag] = 'URLSearchParams';
    }

    /**
     *
     * @param {function} callback
     * @param {object} thisArg
     */
    if (!('forEach' in USPProto)) {
        USPProto.forEach = function(callback, thisArg) {
            var dict = parseToDict(this.toString());
            Object.getOwnPropertyNames(dict).forEach(function(name) {
                dict[name].forEach(function(value) {
                    callback.call(thisArg, value, name, this);
                }, this);
            }, this);
        };
    }

    /**
     * Sort all name-value pairs
     */
    if (!('sort' in USPProto)) {
        USPProto.sort = function() {
            var dict = parseToDict(this.toString()), keys = [], k, i, j;
            for (k in dict) {
                keys.push(k);
            }
            keys.sort();

            for (i = 0; i < keys.length; i++) {
                this['delete'](keys[i]);
            }
            for (i = 0; i < keys.length; i++) {
                var key = keys[i], values = dict[key];
                for (j = 0; j < values.length; j++) {
                    this.append(key, values[j]);
                }
            }
        };
    }

    /**
     * Returns an iterator allowing to go through all keys of
     * the key/value pairs contained in this object.
     *
     * @returns {function}
     */
    if (!('keys' in USPProto)) {
        USPProto.keys = function() {
            var items = [];
            this.forEach(function(item, name) {
                items.push(name);
            });
            return makeIterator(items);
        };
    }

    /**
     * Returns an iterator allowing to go through all values of
     * the key/value pairs contained in this object.
     *
     * @returns {function}
     */
    if (!('values' in USPProto)) {
        USPProto.values = function() {
            var items = [];
            this.forEach(function(item) {
                items.push(item);
            });
            return makeIterator(items);
        };
    }

    /**
     * Returns an iterator allowing to go through all key/value
     * pairs contained in this object.
     *
     * @returns {function}
     */
    if (!('entries' in USPProto)) {
        USPProto.entries = function() {
            var items = [];
            this.forEach(function(item, name) {
                items.push([name, item]);
            });
            return makeIterator(items);
        };
    }

    if (iterable) {
        USPProto[self.Symbol.iterator] = USPProto[self.Symbol.iterator] || USPProto.entries;
    }

    if (!('size' in USPProto)) {
        Object.defineProperty(USPProto, 'size', {
            get: function () {
                var dict = parseToDict(this.toString());
                if (USPProto === this) {
                    throw new TypeError('Illegal invocation at URLSearchParams.invokeGetter')
                }
                return Object.keys(dict).reduce(function (prev, cur) {
                    return prev + dict[cur].length;
                }, 0);
            }
        });
    }

    function encode(str) {
        var replace = {
            '!': '%21',
            "'": '%27',
            '(': '%28',
            ')': '%29',
            '~': '%7E',
            '%20': '+',
            '%00': '\x00'
        };
        return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function(match) {
            return replace[match];
        });
    }

    function decode(str) {
        return str
            .replace(/[ +]/g, '%20')
            .replace(/(%[a-f0-9]{2})+/ig, function(match) {
                return decodeURIComponent(match);
            });
    }

    function makeIterator(arr) {
        var iterator = {
            next: function() {
                var value = arr.shift();
                return {done: value === undefined, value: value};
            }
        };

        if (iterable) {
            iterator[self.Symbol.iterator] = function() {
                return iterator;
            };
        }

        return iterator;
    }

    function parseToDict(search) {
        var dict = {};

        if (typeof search === "object") {
            // if `search` is an array, treat it as a sequence
            if (isArray(search)) {
                for (var i = 0; i < search.length; i++) {
                    var item = search[i];
                    if (isArray(item) && item.length === 2) {
                        appendTo(dict, item[0], item[1]);
                    } else {
                        throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");
                    }
                }

            } else {
                for (var key in search) {
                    if (search.hasOwnProperty(key)) {
                        appendTo(dict, key, search[key]);
                    }
                }
            }

        } else {
            // remove first '?'
            if (search.indexOf("?") === 0) {
                search = search.slice(1);
            }

            var pairs = search.split("&");
            for (var j = 0; j < pairs.length; j++) {
                var value = pairs [j],
                    index = value.indexOf('=');

                if (-1 < index) {
                    appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));

                } else {
                    if (value) {
                        appendTo(dict, decode(value), '');
                    }
                }
            }
        }

        return dict;
    }

    function appendTo(dict, name, value) {
        var val = typeof value === 'string' ? value : (
            value !== null && value !== undefined && typeof value.toString === 'function' ? value.toString() : JSON.stringify(value)
        );

        // #47 Prevent using `hasOwnProperty` as a property name
        if (hasOwnProperty(dict, name)) {
            dict[name].push(val);
        } else {
            dict[name] = [val];
        }
    }

    function isArray(val) {
        return !!val && '[object Array]' === Object.prototype.toString.call(val);
    }

    function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }

})(typeof global !== 'undefined' ? global : (typeof window !== 'undefined' ? window : globalThis));

/* eslint-disable linebreak-style */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components = new Components();

const NativeElementValidator = components.NativeElementValidator;

const formMethods = {
    GET: 'GET',
    POST: 'POST',
};

const tags = {
    BUTTON: 'button',
    INPUT: 'input',
    TEXTAREA: 'textarea',
    GAMEFACE_CHECKBOX: 'gameface-checkbox',
    GAMEFACE_DROPDOWN: 'gameface-dropdown',
    GAMEFACE_RADIO_GROUP: 'gameface-radio-group',
    GAMEFACE_RANGESLIDER: 'gameface-rangeslider',
    GAMEFACE_SWITCH: 'gameface-switch',
    TEXT_FIELD: 'gameface-text-field',
    // polyfill elements
    SELECT: 'custom-select',
};

const VALID_SUBMIT_ELEMENT_TAGS = new Set([tags.BUTTON, tags.INPUT]);
const VALID_FORM_CONTROL_ELEMENT_TAGS = new Set([tags.BUTTON, tags.INPUT, tags.TEXTAREA, tags.SELECT]);
const VALID_FORM_CONTROL_CUSTOM_ELEMENT_TAGS = new Set([
    tags.GAMEFACE_CHECKBOX,
    tags.GAMEFACE_DROPDOWN,
    tags.GAMEFACE_RADIO_GROUP,
    tags.GAMEFACE_RANGESLIDER,
    tags.GAMEFACE_SWITCH,
    tags.TEXT_FIELD,
]);

/**
* @callback ValidationMethod
* @param {HTMLElement} [element]
* @return {boolean}
*/

/**
 * @callback ErrorMessageMethod
 * @param {HTMLElement} [element]
 * @return {string}
 */

/**
 * @typedef {Object} Validator
 * @property {ValidationMethod} [method]
 * @property {ErrorMessageMethod} [errorMessage]
 */

/**
 * @typedef {Object<string,Validator>} Validators
 */

/**
 * Class definition of the gameface form control custom element
 */
class GamefaceFormControl extends HTMLElement {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();
        /**
         * @type {XMLHttpRequest}
         */
        this.xhr = new XMLHttpRequest();
        /**
         * @type {HTMLElement}
         */
        this.currentSubmitButton = null;
        /**
         * @type {Object<string,Validators>}
         */
        this.customValidators = {};
        /**
         * @type {Object<string,HTMLElement>}
         */
        this.errorDisplayElements = {};
    }

    // eslint-disable-next-line require-jsdoc
    get method() {
        return this.getAttribute('method') || formMethods.GET;
    }

    // eslint-disable-next-line require-jsdoc
    get action() {
        return this.getAttribute('action') || '';
    }

    /**
     * Get all the valid form elements that are inside the gameface-form-control element
     */
    get formElements() {
        const elements = [];

        this.traverseFormElements(this, (element, elements = []) => {
            if (!this.isValidFormElement(element) || this.isElementUsedToSubmit(element)) return;
            elements.push(element);
        }, [elements]);

        return elements;
    }

    /**
     * Checks if an some function argument is valid. It will check if there is an argument value passed and if the argument type
     * is the same as the expected passed with argType
     * @param {string} argName - The name of the argument
     * @param {string} argValue - The value of the argument
     * @param {string} [argType] - The expected type of the argument
     * @returns {boolean}
     */
    isArgumentValid(argName, argValue, argType = '') {
        if (!argValue) {
            console.warn(`The value of "${argName}" is "${argValue}". You must pass a valid "${argName}" that is of type "${argType}"`);
            return false;
        }

        // if there is not argType passed we will skip the type check
        if (argType && typeof argValue !== argType) {
            console.warn(`The type of "${argName}" argument is not valid. Please make sure it is of type "${argType}".`);
            return false;
        }

        return true;
    }

    /**
     * Will add an element where the errors about the form element with the passed name will be displayed
     * @param {string} name - The name attribute value of a form element
     * @param {string} selector - The selector of the element where the errors will be displayed
     */
    setCustomDisplayErrorElement(name, selector) {
        if (!this.isArgumentValid('name', name, 'string') ||
            !this.isArgumentValid('selector', selector, 'string')) return;

        const element = document.querySelector(selector);
        if (!element) {
            console.log(`Unable to find element with "${selector}" selector! Please pass a valid element selector!`);
            return;
        }

        this.errorDisplayElements[name] = element;
    }

    /**
     * Method for removing element where the errors related to the form element with the passed name should be displayed
     * @param {string} name - The name attribute value of a form element
     */
    removeCustomDisplayErrorElement(name) {
        if (!this.isArgumentValid('name', name, 'string')) return;

        delete this.errorDisplayElements[name];
    }

    /**
     * Method for removing elements where the errors related to the form elements with the passed names should be displayed
     * @param {Array<string>} names - Array with names related to the form elements
     */
    removeCustomDisplayErrorElements(names) {
        if (!this.isArgumentValid('names', names) || !(names instanceof Array)) return;

        for (const name of names) {
            if (typeof name !== 'string') {
                console.warn(`Found a "${name}" insthe array with "names" that is not a string. Will ignore it!`);
                continue;
            }

            delete this.errorDisplayElements[name];
        }
    }

    /**
     * Will set user defined custom validators about form element with the passed name
     * @param {string} name - The name attribute value of a form element
     * @param {Validators} validators - Custom validators configuration
     */
    setCustomValidators(name, validators) {
        if (!this.isArgumentValid('name', name, 'string') ||
            !this.isArgumentValid('validators', validators, 'object')) return;

        this.customValidators[name] = validators;
    }

    /**
     * Method for removing custom validator
     * @param {string} name - The name attribute value of a form element
     */
    removeCustomValidator(name) {
        if (!this.isArgumentValid('name', name, 'string')) return;

        delete this.customValidators[name];
    }

    /**
     * Method for removing multiple custom validators
     * @param {string} names - The name attribute value of a form element
     */
    removeCustomValidators(names) {
        if (!this.isArgumentValid('names', names) || !(names instanceof Array)) return;

        for (const name of names) {
            if (typeof name !== 'string') {
                console.warn(`Found a "${name}" insthe array with "names" that is not a string. Will ignore it!`);
                continue;
            }

            delete this.customValidators[name];
        }
    }

    /**
     * Will serialize the form data by traversing all the form element tree
     * @param {HTMLElement[]} formElements
     * @returns {string}
     */
    getFormSerializedData(formElements) {
        const params = new URLSearchParams();

        // Serialize the data if there is any set on the submit button
        this.serializeSubmitButtonElementData(params);

        for (const formElement of formElements) {
            if (!this.toCustomElement(formElement).willSerialize()) continue;
            this.serializeElementData(formElement, params);
        }

        return params.toString();
    }

    /**
     * Will serialize the data from the submit button if it has value attribute and it is <button> or <input type="submit"/>.
     * @param {URLSearchParams} params
     */
    serializeSubmitButtonElementData(params) {
        if (!this.currentSubmitButton) return;

        const tagName = this.currentSubmitButton.tagName.toLowerCase();
        if (VALID_SUBMIT_ELEMENT_TAGS.has(tagName)) return;

        if (this.currentSubmitButton.hasAttribute('name') && this.currentSubmitButton.hasAttribute('value')) {
            params.append(this.currentSubmitButton.getAttribute('name'), this.currentSubmitButton.getAttribute('value'));
        }
    }

    /**
     * Will serialize data from a simple form element like input or textarea
     * @param {HTMLElement} element
     * @param {URLSearchParams} params
     * @return {void}
     */
    serializeSimpleElementData(element, params) {
        const value = element.value;
        if (!element.hasAttribute('name') || value === undefined) return;

        const name = element.getAttribute('name');

        if (!(value instanceof Array)) return params.append(name, element.value);
        for (const option of element.value) {
            params.append(name, option);
        }
    }

    /**
     * Will construct an object that has the same structure as the one on the hasErrors method
     * including the custom validators
     * @param {string} name - The name attribute value of a form element
     * @param {HTMLElement|NativeElementValidator} element - The form element that will be passed as an argument to the custom validator method.
     * @returns {Object<string,boolean>}
     */
    async getCustomErrorTypes(name, element) {
        const customElementValidators = this.customValidators[name];
        if (!customElementValidators || typeof customElementValidators !== 'object') return {};

        const customErrorTypes = {};
        for (const type in customElementValidators) {
            if (!this.hasValidMethodProperty(customElementValidators[type])) continue;

            if (element.instanceType && element.instanceType === 'NativeElementValidator') {
                customErrorTypes[type] = await customElementValidators[type].method(element.element);
            } else {
                customErrorTypes[type] = await customElementValidators[type].method(element);
            }
        }

        return customErrorTypes;
    }

    /**
     * Checks if an element has validation errors and returns the error types.
     * @param {HTMLElement} element
     * @param {string} name
     * @returns {object}
    */
    async hasErrors(element, name) {
        const customErrorTypes = await this.getCustomErrorTypes(name, element);

        const errorTypes = {
            notAForm: !element.isFormElement(),
            tooLong: element.tooLong(),
            tooShort: element.tooShort(),
            rangeOverflow: element.rangeOverflow(),
            rangeUnderflow: element.rangeUnderflow(),
            valueMissing: element.valueMissing(),
            nameMissing: element.nameMissing(),
            badURL: element.isBadURL(),
            badEmail: element.isBadEmail(),
            customError: element.customError(),
            ...customErrorTypes,
        };

        const errors = Object.keys(errorTypes).filter((name) => {
            if (errorTypes[name]) return name;
        });

        return { hasError: !!errors.length, errors: errors };
    }

    /**
     * Creates an instance of a NativeElementValidator to wrap a native HTMLElement
     * @param {HTMLElement} element
     * @returns {NativeElementValidator | HTMLElement}
    */
    toCustomElement(element) {
        if (!(element.instanceType && element.instanceType === 'CustomElementValidator')) element = new NativeElementValidator(element);
        return element;
    }

    /**
     * Will serialize the data from form element
     * @param {HTMLElement} element
     * @param {URLSearchParams} params
     * @returns {void}
     */
    serializeElementData(element, params) {
        if (element.hasAttribute('disabled')) return;
        return this.serializeSimpleElementData(element, params);
    }

    /**
     * Method for hiding the error tooltip
     */
    hideTooltip() {
        if (this.tooltip && this.tooltip.parentElement) {
            this.tooltip.parentElement.removeChild(this.tooltip);
        }
    }

    /**
     * Creates a <gameface-tooltip> element, sets its message and shows it on top
     * of given element.
     *
     * @param {string} errorMessage
     * @param {HTMLElement} element
     * @param {HTMLElement} errorDisplayElement
    */
    showError(errorMessage, element, errorDisplayElement) {
        if (!errorMessage) return;

        if (errorDisplayElement) {
            errorDisplayElement.textContent = errorMessage;
            return;
        }

        this.tooltip = document.createElement('gameface-tooltip');
        this.tooltip.targetElement = element;
        this.tooltip.setAttribute('off', 'click');
        const tooltipContent = document.createElement('div');
        tooltipContent.setAttribute('slot', 'message');
        tooltipContent.textContent = errorMessage;
        this.tooltip.appendChild(tooltipContent);

        document.body.appendChild(this.tooltip);

        requestAnimationFrame(() => {
            this.tooltip.show();
        });
    }

    /**
     * Checks whether the element is valid gameface-form-control element
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    isValidFormElement(element) {
        const tagName = element.tagName.toLowerCase();

        return VALID_FORM_CONTROL_ELEMENT_TAGS.has(tagName) || VALID_FORM_CONTROL_CUSTOM_ELEMENT_TAGS.has(tagName);
    }

    /**
     * Checks whether the element is submit button
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    isElementUsedToSubmit(element) {
        return element.getAttribute('type') === 'submit';
    }

    /**
     * Will dispatch a custom event from the gameface-form-control element about request loadend holding the response event.
     * We need custom event here in order to send response event to the user.
     * @param {ProgressEvent} event - The event from the XMLHttpRequest
     */
    onRequestLoadEnd(event) {
        const loadEndEvent = new CustomEvent('loadend', { detail: event });
        this.dispatchEvent(loadEndEvent);
        if (this.onload) this.onload(loadEndEvent);
        // prepare the xhr for a next request
        this.xhr = new XMLHttpRequest();
    }

    /**
     * Will create a XMLHttpRequest to the server
     * @param {string} type - The request type. Either 'GET' or 'POST'
     * @param {string} body - The body of the request that will be send
     * @param {string} action - The url where that will be requested
     */
    makeRequest(type, body, action) {
        this.xhr.open(type, action);
        this.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        this.xhr.onloadend = this.onRequestLoadEnd.bind(this);
        if (body) {
            this.xhr.send(body);
        } else {
            this.xhr.send();
        }
    }

    /**
     * Checks the validator method
     * @param {Validator} validator
     * @returns {boolean}
     */
    hasValidMethodProperty(validator) {
        return validator !== undefined && validator.method && typeof validator.method === 'function';
    }

    /**
     * Checks the validator error message
     * @param {Validator} validator
     * @returns {boolean}
     */
    hasValidMessageProperty(validator) {
        return validator !== undefined && validator.errorMessage && typeof validator.errorMessage === 'function';
    }

    /**
     * Will return the validator object by the error type
     * @param {Validators} elementCustomValidators
     * @param {string} errorType
     * @returns {Validator}
     */
    getCustomValidatorObject(elementCustomValidators, errorType) {
        if (!elementCustomValidators ||
            !elementCustomValidators[errorType] ||
            typeof elementCustomValidators[errorType] !== 'object') return;

        return elementCustomValidators[errorType];
    }

    /**
     * Will get the error message related to the validator
     * @param {string} errorType
     * @param {HTMLElement|NativeElementValidator} element
     * @param {Validators} customValidators
     * @returns {string}
     */
    getErrorMessage(errorType, element, customValidators) {
        const customValidator = this.getCustomValidatorObject(customValidators, errorType);
        const getErrorMessageCallback = this.hasValidMessageProperty(customValidator) ?
            customValidator.errorMessage :
            errorMessages.get(errorType);

        if (typeof getErrorMessageCallback !== 'function') return '';

        if (element.instanceType && element.instanceType === 'NativeElementValidator') {
            return getErrorMessageCallback(element.element);
        }

        return getErrorMessageCallback(element);
    }

    /**
     * Will hide the tooltip and reset the elements set for displaying errors
     */
    resetErrors() {
        this.hideTooltip();

        for (const name in this.errorDisplayElements) {
            const element = this.errorDisplayElements[name];
            if (!element) continue;

            element.textContent = '';
        }
    }

    /**
     * Will check if all the elements are valid
     * @param {HTMLElement[]} formElements - All the elements of the form component
     * @returns {boolean}
     */
    async isFormValid(formElements) {
        for (const element of formElements) {
            if (!this.toCustomElement(element).willSerialize()) continue;

            const name = element.name || element.getAttribute('name');
            const validation = await this.hasErrors(this.toCustomElement(element), name);
            if (!validation.hasError) continue;

            let errorMessage = '';
            const customElementValidators = this.customValidators[name];

            for (const errorType of validation.errors) {
                errorMessage += this.getErrorMessage(errorType, element, customElementValidators);
            }

            this.showError(errorMessage, element, this.errorDisplayElements[name]);
            return false;
        }

        return true;
    }

    /**
     * Will handle submit of the form control
     * @param {MouseEvent} event
     */
    async submit(event) {
        this.resetErrors();

        // Dispatch submit event to the form as it is by standard
        const submitEvent = new Event('submit', { cancelable: true });
        if (!this.dispatchEvent(submitEvent)) return;
        if (this.onsubmit && typeof this.onsubmit === 'function') {
            this.onsubmit(submitEvent);
            if (submitEvent.defaultPrevented) return;
        }

        const formElementsCache = this.formElements;

        if (!await this.isFormValid(formElementsCache)) return;

        this.currentSubmitButton = event.currentTarget;
        switch (this.method.toLowerCase()) {
            case formMethods.GET.toLowerCase():
                return this.makeRequest(formMethods.GET, null, `${this.action}?${this.getFormSerializedData(formElementsCache)}`);
            case formMethods.POST.toLowerCase():
                return this.makeRequest(formMethods.POST, this.getFormSerializedData(formElementsCache), this.action);
            default:
                console.warn('Unable to submit form. The form method is not "GET" or "POST"!');
        }
    }

    /**
     * Will traverse the gameface-form-control element tree and execute a callback when element is found.
     * This method is used to prevent performance issues when used querySelector multiple times.
     * @param {HTMLElement} root
     * @param {Function} elementCallback - Callback that will be executed for each child element of the root
     * @param {any[]} [args = []] - Additional arguments for the elementCallback
     */
    traverseFormElements(root, elementCallback, args = []) {
        if (!root.children) return;

        // Consider iterating the tree with queue if there are stack issues with the recursion
        for (let i = 0, len = root.children.length; i < len; i++) {
            const element = root.children[i];

            elementCallback(element, ...args);

            this.traverseFormElements(element, elementCallback, args);
        }
    }

    /**
     * Callback that will add click event to the gameface-form-control elements that are having submit type attribute
     * @param {HTMLElement} element
     */
    addSubmitElementListener(element) {
        if (VALID_SUBMIT_ELEMENT_TAGS.has(element.tagName.toLowerCase()) && element.getAttribute('type') === 'submit') {
            element.addEventListener('click', this.submit.bind(this));
        }
    }

    /**
     * Will add click events to all the submit elements inside the form control
     */
    initSubmitElements() {
        this.traverseFormElements(this, (formElement) => {
            this.addSubmitElementListener(formElement);
        });
    }

    // eslint-disable-next-line require-jsdoc
    connectedCallback() {
        this.initSubmitElements();
    }
}

components.defineCustomElement('gameface-form-control', GamefaceFormControl);

export { GamefaceFormControl as default };
