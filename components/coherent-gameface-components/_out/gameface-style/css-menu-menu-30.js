var styleText = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/gameface-menu{position:absolute;}gameface-menu,gameface-right-menu,gameface-left-menu,gameface-bottom-menu{border-top-color:var(--default-color-blue);border-right-color:var(--default-color-blue);border-bottom-color:var(--default-color-blue);border-left-color:var(--default-color-blue);background-color:var(--default-color-white);}menu-item{position:relative;padding:10px;cursor:pointer;border-top-color:var(--default-color-blue);border-right-color:var(--default-color-blue);border-bottom-color:var(--default-color-blue);border-left-color:var(--default-color-blue);background-color:var(--default-color-white);}.guic-menu-active-menu-item{background-color:var(--default-color-blue);}menu-item[disabled]{color:var(--default-color-gray);pointer-events:none;}.guic-menu-hover{background-color:#cfcfcf;}.guic-menu-horizontal{display:flex;flex-direction:row;}.guic-menu-vertical{display:flex;flex-direction:column;}";

let style = document.createElement("style");style.innerHTML = styleText;document.head.appendChild(style);
