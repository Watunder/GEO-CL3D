import { Components } from '../gameface.js';

var template = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-modal-wrapper\">    <div class=\"guic-modal-backdrop\"></div>    <div class=\"guic-modal\">        <div class=\"close guic-modal-close-x\">x</div>        <div class=\"guic-modal-header\">            <component-slot data-name=\"header\">Put your title here.</component-slot>        </div>        <div class=\"guic-modal-body\">            <component-slot data-name=\"body\">Put the content here.</component-slot>        </div>        <div class=\"guic-modal-footer\">            <component-slot data-name=\"footer\">Put your actions here.</component-slot>        </div>    </div></div>";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components = new Components();

const BaseComponent = components.BaseComponent;

/**
 * Class definition of the gameface modal custom element
 */
class Modal extends BaseComponent {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();

        this.template = template;

        this.state = { display: 'none' };

        this.closeBound = e => this.close(e);
        this.url = '/components/modal/template.html';
        this.init = this.init.bind(this);
    }

    /**
     * Initialize the custom component.
     * Set template, attach event listeners, setup initial state etc.
     * @param {object} data
    */
    init(data) {
        this.setupTemplate(data, () => {
            components.renderOnce(this);
            this.attachEventListeners();
        });
    }

    // eslint-disable-next-line require-jsdoc
    connectedCallback() {
        components.loadResource(this)
            .then(this.init)
            .catch(err => console.error(err));
    }

    /**
     * Method that will attach click event listeners to all close buttons
     */
    attachEventListeners() {
        const closeButtons = this.querySelectorAll('.close');
        for (let i = 0; i < closeButtons.length; i++) {
            closeButtons[i].addEventListener('click', this.closeBound);
        }
    }

    /**
     * Handler for closing the modal
     */
    close() {
        this.style.display = 'none';
    }
}

components.defineCustomElement('gameface-modal', Modal);

export { Modal };
