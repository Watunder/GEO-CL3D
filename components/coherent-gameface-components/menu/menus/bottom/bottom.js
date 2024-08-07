/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import GamefaceMenu from '../menu';
import { Components } from 'coherent-gameface-components';
const components = new Components();

const KEYCODES = components.KEYCODES;

const KEY_MAPPING = {
    FORWARD: KEYCODES.RIGHT,
    BACK: KEYCODES.LEFT,
    OPEN_SUBMENU: KEYCODES.UP,
    CLOSE: KEYCODES.ESCAPE,
    SELECT: KEYCODES.ENTER,
};

/**
 * Class definition of the gameface bottom menu custom element
 */
class GamefaceBottomMenu extends GamefaceMenu {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();

        this.keyMapping = KEY_MAPPING;
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
        element.style.bottom = parentPosition.height + 'px';
    }
}

components.defineCustomElement('gameface-bottom-menu', GamefaceBottomMenu);

export default GamefaceBottomMenu;
