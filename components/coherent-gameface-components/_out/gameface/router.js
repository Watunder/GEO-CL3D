import { Components } from '../gameface.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Base class definition of the router history holding common functionality for BrowserHistory and HashHistory
 */
class History {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        this.currentRouteId = -1;
        this.onHistoryChange = null;
        this.onBeforeNavigation = null;
        this._onPopStateBound = this._onPopState.bind(this);
    }

    // eslint-disable-next-line require-jsdoc
    get currentState() {
        if (!window.history || !window.history.state || !window.history.state.current) return '';
        return window.history.state.current;
    }

    // eslint-disable-next-line require-jsdoc
    get nextRouteId() {
        return this.currentRouteId + 1;
    }

    /**
     * Will call the history change callback if there is one
     */
    _dispatchHistoryChange() {
        window.dispatchEvent(new CustomEvent('onHistoryChange', { detail: this.currentState }));

        if (!this.onBeforeNavigation) {
            if (this.onHistoryChange) this.onHistoryChange(this.currentState);
            return;
        }

        this.onBeforeNavigation(() => {
            if (this.onHistoryChange) this.onHistoryChange(this.currentState);
        });
    }

    /**
     * Handler when the history state is popped out
     * @param {Event} event
     * @returns {void}
     */
    _onPopState(event) {
        if (this.skipPopStateEvent) {
            this.skipPopStateEvent = false;
            return;
        }

        if (!window.history || !window.history.state) return;
        // onpopstate is triggered when back, go or forward is called and the event object
        // does not hold information about which one of these methods triggered the event
        // so we keep track of the currentRouteId, we set it to each pushState and we compare the
        // values on popstate to see if the user's going back or forward
        const navDirection = this._getNavigationDirection(this.currentRouteId, event.state.id);
        this.currentRouteId += navDirection;
        this._dispatchHistoryChange();
    }

    /**
     * Compares the currentRouteId of the current route and the previous one and
     * determines if the user's going back or forward.
     * @param {number} previous - the id of the history state before navigation
     * @param {number} current - the id of the history state after navigation attempt
     * @returns {number} - 0 if it's the same route, -1 if going back, 1 if going forward
     */
    _getNavigationDirection(previous, current) {
        if (previous === current) return 0; // same
        if (previous > current) return -1;  // back
        return 1;                           // forward
    }

    /**
     * Will add the popstate event
     */
    addPopStateListener() {
        window.addEventListener('popstate', this._onPopStateBound);
    }

    /**
     * Will remove the popstate event
     */
    removePopStateListener() {
        window.removeEventListener('popstate', this._onPopStateBound);
    }
}

/**
 * Class definition of the browser history
 */
class BrowserHistory extends History {
    /**
     * Calls history.pushState. Calls dispatch to notify listeners that the
     * history has changed.
     * @param {object} state - the new state object.
     * @param {string} title - the title of the state.
     * @param {string} url - the url of the the state.
     */
    pushState(state, title, url) {
        history.pushState(state, title, url);

        this.currentRouteId++;
        this._dispatchHistoryChange();
    }
}

/**
 * Class definition of the hash history
 */
class HashHistory extends History {
    /**
     * Calls history.replaceState. Calls dispatch to notify listeners that the
     * history has changed.
     * @param {object} state - the new state object.
     * @param {string} title - the title of the state.
     * @param {string} url - the url of the the state.
     */
    pushState(state, title, url) {
        // we need to skip the pop state here because changing the window.location.hash will trigger popstate event.
        this.skipPopStateEvent = true;

        // set url as hash. This will change the current history state as well and will prefix the url with #.
        window.location.hash = url;
        // we need to replace the state in order to save the state to the history. The state.id will be used when onPopState is executed
        history.replaceState(state, title, window.location.href);
        this.currentRouteId++;
        this._dispatchHistoryChange();
    }
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$1 = new Components();

/**
 * Creates the GamefaceRoute component class and registers it.
 * We pass the history here, so that we can attach the event listeners with the
 * correct history.
*/
class Route {
    // eslint-disable-next-line require-jsdoc
    static set history(value) {
        this._history = value;
    }

    // eslint-disable-next-line require-jsdoc
    static get history() {
        return this._history;
    }

    /**
     * Will set the passed history as preffered one for the router
     * @param {HashHistory|BrowserHistory} history
     */
    static use(history) {
        if (!(history instanceof BrowserHistory) && !(history instanceof HashHistory)) {
            console.error(`Type error: ${history} is not an instance of BrowserHistory or HashHistory.
             Make sure you pass an instance of BrowserHistory or HashHistory to Route.use()!`);
        }
        this.history = history;
    }
}

/**
 * Class definition of the gameface route custom element
 */
class GamefaceRoute extends HTMLElement {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.onHistoryChange = this.onHistoryChange.bind(this);
    }


    // eslint-disable-next-line require-jsdoc
    get activeClass() {
        return this.getAttribute('activeClass') ||
            this.parentElement.getAttribute('activeClass') ||
            'guic-route-active';
    }

    // eslint-disable-next-line require-jsdoc
    disconnectedCallback() {
        window.removeEventListener('onHistoryChange', this.onHistoryChange);
    }

    /**
     * Called when the custom onHistoryChange event is dispatched.
     * Checks if there is an activeClass and adds/removes it depending on
     * whether the current route matches the route element's to attribute.
     *
     * @param {Event} event
    */
    onHistoryChange(event) {
        const activeClass = this.activeClass;
        const url = this.getAttribute('to');

        if (!url) return;
        if (url === event.detail) {
            this.classList.add(activeClass);
        } else {
            this.classList.remove(activeClass);
        }
    }

    /**
     * Called on click of a route element. Pushes a new state to the
     * history and increments the currentRouteId of the history.
     * @param {MouseEvent} event - the event object
     */
    onClick(event) {
        const route = event.currentTarget;
        const url = route.getAttribute('to');

        const state = { current: url, id: Route.history.nextRouteId };
        const title = url;

        Route.history.pushState(state, title, url);
    }

    // eslint-disable-next-line require-jsdoc
    connectedCallback() {
        this.addEventListener('click', this.onClick);
        window.addEventListener('onHistoryChange', this.onHistoryChange);
    }
}

if (!window.GUIComponentsDefinedElements['gameface-route']) {
    components$1.defineCustomElement('gameface-route', GamefaceRoute);
}

/* eslint-disable linebreak-style */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components = new Components();

const WILDCARD = '**';
const HOME = '/';

/**
 * Class definition of the gameface router custom element
 */
class Router {
    /**
     * @typedef {Object<string, string|Router>} Routes
     */

    /**
     * @param {Routes} routes - The routes map
     * @param {HashHistory|BrowserHistory} history - The router history
     * @param {any} onBeforeNavigation - Method that can be used for code execution before the next history navigation
     */
    constructor(routes, history, onBeforeNavigation) {
        this.routes = routes;

        if (history) {
            this.history = history;
            if (onBeforeNavigation) this.history.onBeforeNavigation = onBeforeNavigation;

            this.history.addPopStateListener();
            this.history.onHistoryChange = curentPath => this.navigateTo(curentPath);
        }
    }

    /**
     * Will clear the router data and remove the history listeners
     */
    clear() {
        if (this.history) {
            this.history.removePopStateListener();
            this.history.onBeforeNavigation = null;
            this.history.onHistoryChange = null;
            this.history = null;
        }

        this.routes = null;
    }

    /**
     * Used to parse a url into named segments - host and pathname
     * @param {string} url - the url that needs to be parsed.
     * @returns {object} - the parsed url.
     * for url '/heroes/tanks/first' - { hostname: '/heroes', pathname: '/tanks/first' }
     */
    parseURL(url) {
        const parseUrlExp = new RegExp([
            '(.+?(?=\/))',                     // host
            '(/[^?#]*|)',                      // pathname
        ].join(''));

        const parseUrlMap = {
            host: 1,
            pathname: 2,
        };

        const match = url.match(parseUrlExp);

        if (!match || !match.length) return console.error(`The provided url - ${url} is not valid!`);

        // create a new object from the map
        const parsedURL = { ...{}, ...parseUrlMap };
        const parsedURLKeys = Object.keys(parsedURL);

        // assign the values of the parsed url to the map keys
        for (let i = 0; i < parsedURLKeys.length; i++) {
            const key = parsedURLKeys[i];
            if (match[parsedURL[key]]) parsedURL[key] = match[parsedURL[key]];
        }

        return parsedURL;
    }

    /**
     * Navigates to a given url
     * @param {string} current - the current url.
     */
    navigateTo(current) {
        const matches = this.matches(current, this.routes);
        const bestMatchedRoute = matches.matchedConfig;
        const params = matches.routeParams;
        const component = this.routes[bestMatchedRoute];

        // if there is no component specified for this match, do nothing
        if (!component) return;
        // if the component is a Router, then the route is nested and we need
        // to pass it to the nested router to process it.
        if (component instanceof Router) {
            const url = this.parseURL(current);
            component.navigateTo(url.pathname);
            return;
        }

        // get the <router-view> element and replace its content with the
        // new component
        const view = document.querySelector('router-view');

        let el;
        if (window.GUIComponentsDefinedElements[component]) {
            el = document.createElement(component);
        } else {
            el = document.createElement('div');
            el.innerHTML = component;
        }
        // inject the params to the el
        // el is a custom element
        el.params = params;

        view.innerHTML = '';
        view.appendChild(el);
    }

    /**
     * Used to extract the route parameters from url
     * @param {string} url - The url that should be matched with the current url
     * @param {string} currentURL
     * @returns {[Object<string,string>,string[]]}
     */
    getRouteParamsAndConfiguration(url, currentURL) {
        // all value of the url preceded by : will be added here
        const routeParams = {};
        const configuration = url.split('/') // split url into segments by '/'
            .filter(value => value)      // remove the empty strings - '/path'.split('/') will return ['', 'path']
            .map((segment, index) => {     // loop all segments and generate regular expressions for them
                // if the current segment doesn't contain a param, return the segment
                if (segment.substr(0, 1) !== ':') return segment;

                // assign the param name to its value
                // the name is the value after the : - for path '/:id' it's id
                // the value is the part of the url at the same position
                routeParams[segment.substr(1)] = currentURL.split('/')[index + 1]; // + 1 to compensate for the empty string result from the split
                // match all letters and numbers one or more times
                return '([a-z0-9]+)';
            });

        return [routeParams, configuration];
    }

    /**
     * Matches the current url to the router configuration.
     * If no match is found fallbacks to the wildcard route or to home if
     * wildcard is not configured.
     * @param {string} currentURL - the current url that the user tries to navigate to.
     * @param {object} routes - the router configuration.
     * @returns {object} - an object with the matched path from the configuration,
     * the url that matched that config and the route params:
     * { matchedConfig: {string}, matchedURL: {string}, routeParams: {object} }
     */
    matches(currentURL, routes) {
        // if the current route is home, return the home config
        if (currentURL === HOME) return { matchedConfig: currentURL, params: {} };

        let isExact = true;

        // a url can match multiple routes, only the first one is used
        let matchedConfiguration = null;
        const routeKeys = Object.keys(routes);

        for (let i = 0; i < routeKeys.length; i++) {
            const url = routeKeys[i];

            // if the url is HOME or the WILDCARD, there's no need to use regExp
            if (url === HOME || url === WILDCARD) continue;

            // Nested routes should not be matched exactly as the parent router
            // might match part of the url and pass the pathname to the child
            // router. If we try to match the whole url neither the parent nor the
            // child router will match.
            const isNested = this.routes[url] instanceof Router;
            isExact = !isNested;

            const [routeParams, configuration] = this.getRouteParamsAndConfiguration(url, currentURL);
            const finalRegex = configuration.join('/');
            // match from the beginning ^ of the url to the end $ if the match is exact
            const urlRegex = new RegExp(`^(/${finalRegex})${isExact ? '$' : ''}`);
            const result = currentURL.match(urlRegex);

            if (result) {
                matchedConfiguration = { matchedConfig: url, matchedURL: result[0], routeParams };
                break;
            }
        }

        if (matchedConfiguration === null) {
            // 404 or home
            const fallbackRoute = this.routes[WILDCARD] ? WILDCARD : HOME;
            matchedConfiguration = { matchedConfig: fallbackRoute };
        }

        return matchedConfiguration;
    }
}

if (!window.GUIComponentsDefinedElements['router-view']) {
    components.defineCustomElement('router-view', class RouterView extends HTMLElement { });
}

export { BrowserHistory, HashHistory, Route, Router };
