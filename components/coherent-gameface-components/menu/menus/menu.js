/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Components } from 'coherent-gameface-components';
const components = new Components();
import template from '../template.html';
import { TAG_NAMES } from '../constants';

const BaseComponent = components.BaseComponent;

/**
 * Helper function used to check if an element is a child of another element
 *
 * @param {HTMLElement} parent
 * @param {HTMLElement} child
 * @returns {boolean} - true if the child is actually a child of the parent and false if not
*/
function isDescendant(parent, child) {
    let node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

const KEYCODES = components.KEYCODES;

const KEY_MAPPING = {
    FORWARD: KEYCODES.RIGHT,
    BACK: KEYCODES.LEFT,
    OPEN_SUBMENU: KEYCODES.DOWN,
    CLOSE: KEYCODES.ESCAPE,
    SELECT: KEYCODES.ENTER,
};

/**
 * Class definition of the gameface menu custom element
 */
class GamefaceMenu extends BaseComponent {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();

        this.keyMapping = KEY_MAPPING;
        this.template = template;
        this.orientation = '';

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onFocusOut = this.onFocusOut.bind(this);

        this.url = '/components/menu/template.html';
        this.init = this.init.bind(this);
    }

    /**
 * Initialize the custom component.
 * Set template, attach event listeners, setup initial state etc.
 * @param {object} data
*/
    init(data) {
        this.setupTemplate(data, () => {
            this.orientation = this.getAttribute('orientation');
            components.renderOnce(this);

            this.attachEventListeners();

            // setup the initial position of the menu items
            this.setupMenuItems(true);
            this.setOrientation();
            this.setAttribute('tabindex', 0);
        });
    }

    // eslint-disable-next-line require-jsdoc
    connectedCallback() {
        // TODO: fix, this is a hack
        // we'll fix it in a task
        if (this.wasConnected) return;
        this.wasConnected = true;

        components.loadResource(this)
            .then(this.init)
            .catch(err => console.error(err));
    }

    /**
     * Attaches click event listeners to all menu-item elements in this menu
    */
    attachEventListeners() {
        this.addEventListener('keydown', this.onKeyDown);
        this.addEventListener('focusout', this.onFocusOut);

        const menuItems = this.querySelectorAll('menu-item');
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener('click', this.onClick);
        }
    }

    /**
     * Sets the positions of the nested menus; doesn't need to be recursive
     * because each menu calls it for itself
     * @param {boolean} hide - the nested menus need to be hidden, by default the
     * setup function won't hide them, but when the menus are rendered for the
     * first time they'll be hidden
    */
    setupMenuItems(hide = false) {
        const menuItems = this.getAllMenuItems();

        for (let i = 0; i < menuItems.length; i++) {
            const nested = menuItems[i].querySelector(TAG_NAMES);

            if (!nested) continue;

            const parentPosition = menuItems[i].getBoundingClientRect();

            this.setPosition(nested, parentPosition);

            if (hide) nested.hide();
        }
    }

    /**
     * Sets an inline style to properly position the element
     * Different menus have use different properties - top, left, right or bottom
     *
     * @param {HTMLElement} element - the element that needs to be positioned
     * @param {DOMRect} parentPosition - the bounding box of the parent element
    */
    setPosition(element, parentPosition) {
        element.style.left = '0px';
        element.style.top = parentPosition.height + 'px';
    }

    /**
     * Called when the menu looses focus.
     * @param {FocusEvent} event
    */
    onFocusOut(event) {
        // get the element which received focus
        const receivedFocus = event.relatedTarget;

        if (receivedFocus !== null && isDescendant(this, receivedFocus)) {
            return;
        }

        // if the newly focused element is not descendant of this menu
        // reset the current selection
        this.reset();
        // hide this menu if it has parent menu(is nested)
        if (this.getParentMenu()) this.hide();
    }

    /**
     * Sets all menu items in an inactive state.
    */
    reset() {
        const menuItems = this.getAllMenuItems();
        menuItems.forEach(menuItem => menuItem.selected = false);
    }

    /**
     * Gets all active MenuItem child elements of the current Menu component.
     * @returns {Array<MenuItem>} - the menu items of the menu component.
    */
    getAllMenuItems() {
        return Array.from(this.children).filter(child => child.hasAttribute('disabled') === false);
    }

    /**
     * Gets the previous MenuItem in the items list.
     * If the current menu item is the first one - returns the last one.
     * @returns {MenuItem} - the previous menu item.
    */
    getPrevMenuItem() {
        const menuItems = this.getAllMenuItems();

        const newIdx = menuItems.findIndex(menuItem => menuItem.selected) - 1;
        // Add `menuItems.length` to make sure the index is a positive number
        // and get the modulus to wrap around if necessary.
        return menuItems[(newIdx + menuItems.length) % menuItems.length];
    }

    /**
     * Gets the first menuItem in the menu items list.
     * @returns {MenuItem} - the first menu item.
    */
    getFirstMenuItem() {
        return this.getAllMenuItems()[0];
    }

    /**
     * Gets the next menu item in the menu items list.
     * If the current item is the last one - returns the first one.
     * @returns {MenuItem} - the next menu item.
    */
    getNextMenuItem() {
        const menuItems = this.getAllMenuItems();
        const newIdx = menuItems.findIndex(menuItems => menuItems.selected) + 1;
        return menuItems[newIdx % menuItems.length];
    }

    /**
     * Gets the last item.
     * @returns {MeuItem}
    */
    getLastMenuItem() {
        const menuItems = this.getAllMenuItems();
        return menuItems[menuItems.length - 1];
    }

    /**
    * Sets a menuItem in an active state.
    * The menuItem is highlighted.
    * @param {MenuItem} newMenuItem - the menuItem which has been clicked on.
    */
    selectMenuItem(newMenuItem) {
        // Deselect all menu items
        this.reset();
        newMenuItem.selected = true;
        newMenuItem.focus();
    }

    /**
     * Called on click
     * @param {MouseEvent} event
    */
    onClick(event) {
        event.stopPropagation();

        // avoid all cases except when the target is a menu item
        if (event.currentTarget.hasAttribute('disabled')) return;

        this.selectMenuItem(event.currentTarget);

        // if the click should open a submenu - open it and return
        if (this.openSubmenu(event)) return;
        // if the click should not open submenu - close the menu
        this.close(event);
    }

    /**
     * Gets the parent menu, if there is any
     * @returns {HTMLElement} - the parent menu
    */
    getParentMenu() {
        if (this.parentElement.tagName.toLowerCase() !== 'menu-item') return null;
        return this.parentElement.parentElement;
    }

    /**
     * Gets a nested menu
     * @param {MenuItem} menuItem - the item in which to look for a nested menu
     * @returns {HTMLElement} - the nested menu
    */
    getSubmenu(menuItem) {
        return menuItem.querySelector(TAG_NAMES);
    }

    /**
     * Opens a nested menu; practically shows itself if this is a nested menu
     * but the action that triggers this function is showing a nested menu.
     * @param {Event} event
     * @returns {boolean} - true, if a menu was opened and false if not
    */
    openSubmenu(event) {
        const submenu = this.getSubmenu(event.target);
        if (!submenu) return false;

        submenu.show();

        // update the position of the menu items now that its relative parent is also visible
        this.setupMenuItems();
        submenu.select();

        return true;
    }

    /**
     * Closes a nested menu; practically closes itself if this is a nested menu
     * but the action that triggers this function is closing a nested menu.
    */
    close() {
        const parentMenu = this.getParentMenu();
        if (!parentMenu) return;
        this.hide();
        parentMenu.selectMenuItem(this.parentElement);
    }

    /**
     * Gets the next menu item that should be selected
     * @param {KeyboardEvent} event
     * @returns {MenuItem | null}
    */
    getNextMenuItemFromKey(event) {
        // The switch-case will determine which menu item should be marked as active
        // depending on the key that was pressed.
        switch (event.keyCode) {
            case this.keyMapping.SELECT:
            case this.keyMapping.CLOSE:
                this.close();
                break;
            case this.keyMapping.FORWARD:
                return this.getNextMenuItem();
            case this.keyMapping.BACK:
                return this.getPrevMenuItem();
            case this.keyMapping.OPEN_SUBMENU:
                this.openSubmenu(event);
                break;
            default:
                return null;
        }
    }

    /**
     * Selects a menu item by an index;
     * @param {number} index
    */
    select(index = 0) {
        // do nothing if there are no menu items or there is no item at this index
        if (!this.getAllMenuItems().length || !this.getAllMenuItems()[index]) return;
        this.selectMenuItem(this.getAllMenuItems()[index]);
    }

    /**
     * Called on keydown
     * @param {KeyboardEvent} event
    */
    onKeyDown(event) {
        event.stopPropagation();
        event.preventDefault();

        if (event.target.tagName.toLowerCase() !== 'menu-item' || event.altKey) return;
        const nextItem = this.getNextMenuItemFromKey(event);
        if (nextItem) this.selectMenuItem(nextItem);
    }

    /**
     * Sets the display property of this menu to flex
    */
    show() {
        this.style.display = 'flex';
    }

    /**
    * Sets the display property of this menu to none
    */
    hide() {
        this.style.display = 'none';
    }

    /**
     * Adds a class name to this element depending on its orientation
     * Also sets the menu-wrapper class, which adds the display:flex style
    */
    setOrientation() {
        this.classList.add('menu-wrapper');

        if (this.orientation) {
            this.classList.add(`guic-menu-${this.orientation}`);
        }
    }
}

/**
 * Class definition of the gameface menu item custom element
 */
class MenuItem extends HTMLElement {
    // eslint-disable-next-line require-jsdoc
    static get observedAttributes() {
        return ['selected', 'disabled'];
    }

    /**
     * Called when an attribute changes
    */
    attributeChangedCallback() {
        if (this.hasAttribute('disabled')) {
            // if the element is disabled, make it no longer selectable
            // by removing the tabindex
            this.removeAttribute('tabindex');
            // remove the mouseover and mouseout listeners so that it's
            // not possible to hover the element
            this.removeEventListener('mouseover', this.onMouseOver);
            this.removeEventListener('mouseout', this.onMouseOut);
        } else {
            this.attachEventListeners();
        }
    }

    // eslint-disable-next-line require-jsdoc
    connectedCallback() {
        if (!this.hasAttribute('disabled')) {
            this.setAttribute('tabindex', 0);
        }
    }

    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();
        this.attachEventListeners();
    }

    /**
     * Attaches mouseover and mouseout event listeners
    */
    attachEventListeners() {
        this.addEventListener('mouseover', this.onMouseOver);
        this.addEventListener('mouseout', this.onMouseOut);
    }

    /**
     * Returns the selected attribute
     * @returns {boolean} - the value of the selected attribute
    */
    get selected() {
        return this.getAttribute('selected');
    }

    /**
     * Sets the selected attribute
     * @param {boolean} value - the new value of the selected attribute
    */
    set selected(value) {
        if (value) {
            this.setAttribute('selected', value);
            this.classList.add('guic-menu-active-menu-item');
        } else {
            this.classList.remove('guic-menu-active-menu-item');
            this.removeAttribute('selected');
        }
    }

    /**
     * Called on mouseover. Adds class hover.
     * @param {MouseEvent} event
    */
    onMouseOver(event) {
        event.stopPropagation();
        const menuItem = event.target;

        menuItem.classList.add('guic-menu-hover');
    }

    /**
     * Called on mouseout. Removes class hover.
     * @param {MouseEvent} event
    */
    onMouseOut(event) {
        event.stopPropagation();
        const menuItem = event.target;

        if (!menuItem.classList.contains('guic-menu-hover')) return;
        menuItem.classList.remove('guic-menu-hover');
    }
}

components.defineCustomElement('gameface-menu', GamefaceMenu);
components.defineCustomElement('menu-item', MenuItem);

export default GamefaceMenu;
