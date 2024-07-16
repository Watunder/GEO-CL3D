declare class Components {
    imported: any[];
    KEYCODES: {
        DOWN: number;
        LEFT: number;
        RIGHT: number;
        UP: number;
        HOME: number;
        END: number;
        ENTER: number;
        ESCAPE: number;
        TAB: number;
        SHIFT: number;
        CTRL: number;
        SPACE: number;
        PAGE_UP: number;
        PAGE_DOWN: number;
        LETTER_A: number;
    };
    cachedComponents: {};
    CustomElementValidator: typeof CustomElementValidator;
    NativeElementValidator: typeof NativeElementValidator;
    TextFieldValidator: typeof TextFieldValidator;
    Validator: typeof Validator;
    BaseComponent: typeof BaseComponent;
    /**
     * Create and add a script tag with given url.
     * @param {string} url
    */
    importScript(url: string): void;
    /**
     * Loads an html by given url.
     * @param {string} url
     * @returns {promise} resolved with the html as text.
    */
    loadHTML(url: string): Promise<any>;
    /**
     * Creates a promise which resolves when a custom element was defined.
     * Saves the promise for each defined component.
     * @param {string} name - the name of the custom element
     * @returns {promise} - the previously saved promise it any or a new one
    */
    whenDefined(name: string): Promise<any>;
    /**
     * Defines a custom element.
     * @param {string} name - the name of the element.
     * @param {Object} element - the object which describes the element.
    */
    defineCustomElement(name: string, element: any): void;
    /**
     * Imports a component by given url.
     * It will automatically try to import style.css and script.js if these
     * files' names were not explicitly specified.
     * @param {string} url - the url of the component
    */
    importComponent(url: string): void;
    /**
     * Removes back and forward slashes from string
     * @param {string} path
     * @returns {string}
     */
    removeSlashes(path: string): string;
    /**
     * Remove new lines from the beginning of templates,
     * because template.firstChild.cloneNode will clone an empty
     * string and will return an empty template.
     * @param {string} template
     * @returns {string}
    */
    removeNewLines(template: string): string;
    /**
     * Removes the copyright notice from the template
     * @param {string} template
     * @returns {string} the template without the copyright notice
    */
    removeCopyrightNotice(template: string): string;
    /**
     * Used when the element has already been rendered.
     * Return the already rendered template instead of
     * loading and slotting its elements.
     *
     * @param {HTMLElement} component - the component that was rendered
     * @returns {Promise<HTMLElement>} - a promise that will resolve with the rendered template
    */
    resolveWithTemplate(component: HTMLElement): Promise<HTMLElement>;
    /**
     * Uses an XMLHttpRequest to load an external file.
     * @param {string} component - the url of the file.
     * @returns {promise} - a promise that is resolved with the file's text content.
    */
    loadResource(component: string): Promise<any>;
    /**
     * Execute an XMLHttpRequest to load a resource by url.
     * @param {string} url - the path to the resource
     * @returns {promise} - promise which resolves with the loaded resource
    */
    requestResource(url: string): Promise<any>;
    /**
     * Recursively finds the slot elements in a given element.
     * @param {HTMLElement} parent - the element which is searched for slots.
     * @param {string} parentElName
     * @param {object} result - a key:value object containing the slot elements
     * under their data-name as value:
     * { <my-slot-name>: HTMLElement }
     * @returns {Object} result
    */
    findSlots(parent: HTMLElement, parentElName: string, result?: object): any;
    /**
     * Will replace the slot element
     * @param {HTMLElement[]} source
     * @param {HTMLElement} target
     */
    replaceSlots(source: HTMLElement[], target: HTMLElement): void;
    /**
     * Transfers the slottable elements into their slots.
     * @param {HTMLElement} source - the element containing the slottable elements.
     * @param {HTMLElement} target - the element containing the slots elements.
    */
    transferContent(source: HTMLElement, target: HTMLElement): void;
    /**
     * Renderes an element only if it wasn't rendered before that
     * @param {HTMLElement} element
     * @returns {boolean} - true if it was rendered, false if not
    */
    renderOnce(element: HTMLElement): boolean;
    /**
    * Renders an element's content into its template.
    * @param {HTMLElement} element - the element into which to render the content
    */
    render(element: HTMLElement): void;
    /**
     * Used to render.
     * @param {HTMLElement} element - the element which will be rendered
     * @param {string} targetContainerSelector - the selector of the parent element
     * @param {Array<HTMLElement>} children - the child elements that need to go into the parent
     */
    transferChildren(element: HTMLElement, targetContainerSelector: string, children: Array<HTMLElement>): void;
    /**
     * Delay the execution of a callback function by n amount of frames.
     * Used to retrieve the computed styles of elements.
     * @param {Function} callback - the function that will be executed.
     * @param {number} count - the amount of frames that the callback execution
     * should be delayed by.
     * @returns {any}
    */
    waitForFrames(callback?: Function, count?: number): any;
    /**
     * Checks if the current user agent is Cohtml
     * @returns {boolean}
    */
    isBrowserGameface(): boolean;
    /**
     * Check if a value is a number and if not - log an error
     * @param {string} propName - the name of the property that needs to be validated
     * @param {any} value
     * @returns {boolean} - true if it is a number or a string that can be cast to number, false if not
     */
    isNumberPositiveValidation(propName: string, value: any): boolean;
}
/**
 * The CustomElementValidator is inherited by custom elements in order to gain the
 * validation function from the Validator class.
 * This class can not be used to wrap the native elements as it inherits the
 * HTMLElement which can not be instantiated using the new keyword.
*/
declare class CustomElementValidator extends BaseComponent {
    isFormElement(): boolean;
    tooLong(): boolean;
    tooShort(): boolean;
    valueMissing(): boolean;
    nameMissing(): boolean;
    customError(): boolean;
    isRequired(): boolean;
    rangeOverflow(): boolean;
    rangeUnderflow(): boolean;
    willSerialize(): boolean;
    isBadEmail(): boolean;
    isBadURL(): boolean;
}
/**
 * The NativeElementValidator uses the methods from the Validator class
 * All native elements tha don't support methods like isFormElement, tooLong, tooShort
 * etc.. will be wrapped in this class in order to enable us to validate native and
 * custom elements using the same methods.
 * */
declare class NativeElementValidator {
    constructor(element: any);
    get instanceType(): string;
    element: any;
    isFormElement(): boolean;
    tooLong(): boolean;
    tooShort(): boolean;
    rangeOverflow(): boolean;
    rangeUnderflow(): boolean;
    valueMissing(): boolean;
    nameMissing(): boolean;
    customError(): boolean;
    isRequired(): boolean;
    willSerialize(): boolean;
    isBadEmail(): boolean;
    isBadURL(): boolean;
}
/**
 * Class that implements the commong validation methods for the text fields
 */
declare class TextFieldValidator {
    /**
     * Most of the custom elements will not need this check however,
     * we call all validation methods in order to determine if an element is valid.
     * Each element that needs this check implements it itself.
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    static tooLong(element: HTMLElement): boolean;
    /**
    * Most of the custom elements will not need this check however,
    * we call all validation methods in order to determine if an element is valid.
    * Each element that needs this check implements it itself.
    * @param {HTMLElement} element
    * @returns {boolean}
    */
    static tooShort(element: HTMLElement): boolean;
    /**
    * Most of the custom elements will not need this check however,
    * we call all validation methods in order to determine if an element is valid.
    * Each element that needs this check implements it itself.
    * @param {HTMLElement} element
    * @returns {boolean}
    */
    static rangeOverflow(element: HTMLElement): boolean;
    /**
     * Most of the custom elements will not need this check however,
     * we call all validation methods in order to determine if an element is valid.
     * Each element that needs this check implements it itself.
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    static rangeUnderflow(element: HTMLElement): boolean;
    /**
     * Checks if the text field with type url has a valid url by its pattern
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    static isBadURL(element: HTMLElement): boolean;
    /**
     * Checks if the text field element with type email is valid
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    static isBadEmail(element: HTMLElement): boolean;
    get instanceType(): string;
}
/**
 * This is the base class that holds all functionality shared between custom components
 * and native elements
 */
declare class Validator {
    /**
     * Check if element is child of a form
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    static isFormElement(element: HTMLElement): boolean;
    /**
     * Check if element value is bigger than element maxlength
     * @returns {boolean}
     */
    static tooLong(): boolean;
    /**
     * Check if element value is less than element minlength
     * @returns {boolean}
     */
    static tooShort(): boolean;
    /**
     * Checks if the value of an element is bigger than its max attribute
     * @returns {boolean}
    */
    static rangeOverflow(): boolean;
    /**
     * Checks if the value of an element is smaller than its min attribute
     * @returns {boolean}
    */
    static rangeUnderflow(): boolean;
    /**
     * Check if element is required and its value is missing
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    static valueMissing(element: HTMLElement): boolean;
    /**
     * Check if element name is missing
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    static nameMissing(element: HTMLElement): boolean;
    /**
     * Check if an element is required
     * @param {HTMLElement} element
     * @returns {boolean}
    */
    static isRequired(element: HTMLElement): boolean;
    /**
     * Checks if there is a custom error for the element
     * @returns {boolean}
     */
    static customError(): boolean;
    /**
     * Checks if element is going to be serialized.
     * If an element doesn't have a name it will not be serialized.
     * Used to determine if an element should be validated.
     * @param {HTMLElement} element
     * @returns {boolean}
    */
    static willSerialize(element: HTMLElement): boolean;
    static isBadURL(): boolean;
    static isBadEmail(): boolean;
    /**
     * Return the type of the class
     */
    get instanceType(): string;
}
/**
 * BaseComponent
 * The base class from which all other components inherit shared logic
 */
declare class BaseComponent extends HTMLElement {
    /**
     * Return the type of the class
     */
    get instanceType(): string;
    /**
     * Called when the template of a component was loaded.
     * @param {object} data
     * @param {function} callback
     * @returns {undefined}
    */
    setupTemplate(data: object, callback: Function): undefined;
    template: any;
    /**
     * Validate if a value can be set on the state.
     * @param {string} name - the name of the property.
     * @param {any} value - the value that has to be checked.
     * @returns {boolean}
     */
    isStatePropValid(name: string, value: any): boolean;
}

export { Components };
