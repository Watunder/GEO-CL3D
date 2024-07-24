var styleText$y = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/gameface-tooltip{position:absolute;visibility:hidden;background-color:var(--default-color-blue);/* width:150px;*/    padding:10px;border-radius:10px;overflow-wrap:break-word;}.guic-tooltip-show-animation{animation:guic-tooltip-fadein 1s;animation-fill-mode:forwards;}@keyframes guic-tooltip-fadein{from{opacity:0;}    to{opacity:1;}}";

let style$y = document.createElement("style");style$y.innerHTML = styleText$y;document.head.appendChild(style$y);

var styleText$x = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/:root{--text-field-number-arrow-size:8px;--text-field-number-arrow-color:black;--text-field-search-cross-size:8px;--text-field-search-cross-width:4px;--text-field-search-cross-color:black;--text-field-font-size:16px;--text-field-font-family:\"Droid Sans\";--text-field-padding-left:5px;--text-field-padding-right:5px;}.guic-text-field-container{display:flex;align-content:center;align-items:center;text-align:left;}.guic-text-field-label{margin-right:10px;}.guic-search-remove,.guic-number-control{position:relative;height:100%;display:flex;justify-content:center;flex-direction:column;}.guic-search-remove:hover{--text-field-search-cross-color:var(--default-color-blue);}.guic-search-remove-right-line,.guic-search-remove-left-line{position:relative;border-radius:20px;width:0px;border-left-width:var(--text-field-search-cross-size);border-left-color:var(--text-field-search-cross-color);border-left-style:solid;border-right-width:var(--text-field-search-cross-size);border-right-color:var(--text-field-search-cross-color);border-right-style:solid;border-bottom-width:var(--text-field-search-cross-width);border-bottom-color:var(--text-field-search-cross-color);border-bottom-style:solid;}.guic-search-remove-right-line{top:calc(var(--text-field-search-cross-width) /2);transform:rotate(45deg);}.guic-search-remove-left-line{top:calc(var(--text-field-search-cross-width) /-2);transform:rotate(-45deg);}.guic-text-field-with-controls{position:relative;flex:1;height:1.8em;display:flex;align-items:center;justify-content:space-between;border-style:solid;border-top-color:var(--default-color-blue);border-right-color:var(--default-color-blue);border-bottom-color:var(--default-color-blue);border-left-color:var(--default-color-blue);background-color:var(--default-color-white);overflow-y:hidden;overflow-x:hidden;}.guic-text-field,.guic-text-field-placeholder{font-size:var(--text-field-font-size);font-family:var(--text-field-font-family);padding-right:var(--text-field-padding-right);padding-left:var(--text-field-padding-left);border:none;background:transparent;padding-top:0;padding-bottom:0;}.guic-text-field{flex:1;width:100%;position:relative;-webkit-appearance:none;outline:none;}.guic-text-field-placeholder{position:absolute;opacity:0.5;width:98%;white-space:pre;cursor:text;overflow-x:hidden;}.guic-hidden{display:none;}.guic-text-field-disabled{pointer-events:none;opacity:0.5;}.guic-number-control{position:relative;}.guic-number-increase,.guic-number-decrease{position:relative;width:0;height:50%;}.guic-number-increase{border-left-width:var(--text-field-number-arrow-size);border-left-color:transparent;border-left-style:solid;border-right-width:var(--text-field-number-arrow-size);border-right-color:transparent;border-right-style:solid;border-bottom-width:var(--text-field-number-arrow-size);border-bottom-color:var(--text-field-number-arrow-color);border-bottom-style:solid;top:-0.1em;}.guic-number-increase:hover{border-bottom-color:var(--default-color-blue);}.guic-number-decrease{border-left-width:var(--text-field-number-arrow-size);border-left-color:transparent;border-left-style:solid;border-right-width:var(--text-field-number-arrow-size);border-right-color:transparent;border-right-style:solid;border-top-width:var(--text-field-number-arrow-size);border-top-color:var(--text-field-number-arrow-color);border-top-style:solid;bottom:-0.1em;}.guic-number-decrease:hover{border-top-color:var(--default-color-blue);}";

let style$x = document.createElement("style");style$x.innerHTML = styleText$x;document.head.appendChild(style$x);

var styleText$w = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/.guic-tabs-wrapper{display:flex;flex-direction:column;}.guic-tabs-header{display:flex;flex-direction:row;}tab-heading{margin-right :2px;padding:10px;border-width:3px;border-style:solid;cursor:pointer;box-sizing:border-box;border-top-color:var(--default-color-blue);border-right-color:var(--default-color-blue);border-bottom-color:var(--default-color-blue);border-left-color:var(--default-color-blue);background-color:var(--default-color-white);}.guic-tabs-active-tab{border-bottom:none;background-color:var(--default-color-gray);}.guic-tabs-active-panel{display:block;}tab-panel{position:relative;top:-3px;border-width:2px;border-style:solid;padding:10px;height:500px;display:none;box-sizing:border-box;border-top-color:var(--default-color-blue);border-right-color:var(--default-color-blue);border-bottom-color:var(--default-color-blue);border-left-color:var(--default-color-blue);background-color:var(--default-color-white);}gameface-tabs{display:flex;}";

let style$w = document.createElement("style");style$w.innerHTML = styleText$w;document.head.appendChild(style$w);

var styleText$v = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/body{background-color:#ebebeb;}gameface-switch{display:flex;}.guic-switch-toggle-container{display:flex;align-items:center;}.guic-switch-toggle-disabled{filter:grayscale(0.2);opacity:0.5;pointer-events:none;}.guic-switch-toggle-false{margin-right:10px;opacity:1;transition:opacity 0.2s;}.guic-switch-toggle-true{margin-left:10px;opacity:1;transition:opacity 0.2s;}.guic-switch-toggle{width:30px;height:16px;position:relative;display:flex;align-items:center;background-color:rgb(180, 180, 180);border-radius:15px;transition-property:background-color;transition-duration:0.4s;box-sizing:border-box;}.guic-switch-toggle-inset{height:20px;width:35px;border-radius:15px;border-right:3px solid transparent;}.guic-switch-toggle-text-inside{height:22px;border-radius:10px;width:auto;border-right:3px solid transparent;}.guic-switch-toggle-handle{width:16px;height:16px;border-radius:50%;background-color:white;position:absolute;left:6%;transition-property:left, background-color, transform;transition-duration:0.2s;}.guic-switch-toggle-handle-default{left:0%;box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.3);}.guic-switch-toggle-checked{background-color:rgba(36, 163, 214, 0.5);}.guic-switch-toggle-handle-checked{background-color:rgb(36, 163, 214);left:100%;transform:translateX(-100%);}.guic-switch-text-hidden{opacity:0;}";

let style$v = document.createElement("style");style$v.innerHTML = styleText$v;document.head.appendChild(style$v);

var styleText$u = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/gameface-stepper{display:flex;}.guic-stepper{display:flex;border-width:1px;border-style:solid;border-color:lightgray;font-size:16px;height:3vmax;overflow:hidden;}.guic-stepper-button{color:var(--default-color-blue);position:relative;font-size:1.2rem;width:3vmax;height:100%;display:flex;justify-content:center;align-items:center;}.guic-stepper-button:hover{background-color:var(--default-color-gray);}.guic-stepper-button:active{background-color:var(--default-color-blue);color:var(--default-color-white);}.guic-stepper-left::after{content:'<';position:absolute;}.guic-stepper-right::after{content:'>';position:absolute;}.guic-stepper-value{color:black;min-width:7vmax;height:100%;display:flex;justify-content:center;align-items:center;text-transform:uppercase;}";

let style$u = document.createElement("style");style$u.innerHTML = styleText$u;document.head.appendChild(style$u);

var styleText$t = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/body{background-color:#FFF;}.guic-vertical-slider-wrapper{height:90vh;display:flex;flex-direction:column;max-width:15px;}.guic-slider-vertical-arrow{height:15px;width:15px;display:flex;align-items:center;justify-content:center;background-color:#f1f1f1;}.guic-slider-vertical-arrow:hover{background-color:#c1c1c1;}.guic-slider-arrow-up{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #505050;}.guic-slider-arrow-down{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #505050;}.guic-slider-vertical-slider{background-color:#f1f1f1;flex:1;}.guic-slider-vertical-handle{position:relative;top:0px;left:0px;width:100%;height:50px;background-color:#c1c1c1;cursor:pointer;}.guic-slider-vertical-handle:hover{background-color:#787878;}";

let style$t = document.createElement("style");style$t.innerHTML = styleText$t;document.head.appendChild(style$t);

var styleText$s = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/body{background-color:#FFF;}.guic-horizontal-slider-wrapper{width:90vh;display:flex;flex-direction:row;max-height:15px;}.guic-slider-horizontal-arrow{height:15px;width:15px;display:flex;align-items:center;justify-content:center;background-color:#f1f1f1;}.guic-slider-arrow-right{width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #505050;}.guic-slider-arrow-left{width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #505050;}.guic-slider-horizontal-arrow:hover{background-color:#c1c1c1;}.guic-slider-horizontal-slider{width:90%;background-color:#f1f1f1;}.guic-slider-horizontal-handle{position:relative;top:0px;left:0px;height:100%;width:50px;background-color:#c1c1c1;cursor:pointer;}.guic-slider-horizontal-handle:hover{background-color:#787878;}";

let style$s = document.createElement("style");style$s.innerHTML = styleText$s;document.head.appendChild(style$s);

var styleText$r = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/body{background-color:#ebebeb;}.guic-slider-component,.guic-vertical-slider-component{width:10%;display:none;}.guic-scrollable-container-wrapper{position:relative;/* width:80vw;*/    /* height:100%;*/    display:flex;flex-direction:row;}.guic-scrollable-container{width:90%;overflow:scroll;background-color:#ebebeb;}gameface-scrollable-container{display:block;height:90vh;}[data-name=\"scrollable-content\"]{display:block;}";

let style$r = document.createElement("style");style$r.innerHTML = styleText$r;document.head.appendChild(style$r);

var styleText$q = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/gameface-route{cursor:pointer;margin-left:10px;}gameface-route:hover{color:var(--default-color-blue);}.guic-route-active{color:var(--default-color-blue);}";

let style$q = document.createElement("style");style$q.innerHTML = styleText$q;document.head.appendChild(style$q);

var styleText$p = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/.guic-vertical-rangeslider-wrapper{width:5vh;display:flex;height:40vh;margin:10vh;display:flex;justify-content:center;user-select:none;}.guic-vertical-rangeslider{position:relative;width:5px;height:100%;background-color:rgba(0, 0, 0, 0.3);display:flex;align-items:center;flex-direction:column;}.guic-vertical-rangeslider-handle{position:absolute;transform:translateY(-50%);height:20px;width:20px;border-radius:50%;background-color:#00ccff;cursor:pointer;z-index:2;}.guic-vertical-rangeslider-bar{position:absolute;top:100%;left:0px;height:50%;width:100%;background-color:#0085a7;transform:translateY(-100%);}.guic-vertical-rangeslider-grid{display:flex;flex-direction:column-reverse;position:absolute;left:100%;height:100%;justify-content:space-between;}.guic-rangeslider-vertical-grid-pol-container{display:flex;flex-direction:row;align-items:center;height:2px;}.guic-rangeslider-vertical-grid-pol{width:10px;height:2px;background-color:black;}.guic-rangeslider-vertical-grid-text{color:black;font-size:0.8rem;}.guic-rangeslider-vertical-pol-without-text{width:5px;}.guic-vertical-rangeslider-thumb{position:absolute;right:300%;/* Since the percent of the left/right property is based on the width of the parent, to position the handle to the left we need 3x the width */    transform:translateY(-50%);background-color:#0085a7;padding:5px;border-radius:5px;color:white;}";

let style$p = document.createElement("style");style$p.innerHTML = styleText$p;document.head.appendChild(style$p);

var styleText$o = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/.guic-horizontal-rangeslider-wrapper{width:40vh;display:flex;height:20px;display:flex;align-items:center;margin:10vh;user-select:none;}.guic-horizontal-rangeslider{position:relative;width:100%;height:5px;background-color:rgba(0, 0, 0, 0.3);display:flex;align-items:center;}.guic-horizontal-rangeslider-handle{position:absolute;left:50%;transform:translateX(-50%);height:20px;width:20px;border-radius:50%;background-color:#00ccff;cursor:pointer;z-index:2;}.guic-horizontal-rangeslider-bar{position:absolute;top:0px;left:0px;height:100%;width:50%;background-color:#0085a7;}.guic-horizontal-rangeslider-grid{display:flex;flex-direction:row;position:absolute;top:100%;width:100%;justify-content:space-between;}.guic-rangeslider-horizontal-grid-pol-container{display:flex;flex-direction:column;align-items:center;width:2px;}.guic-rangeslider-horizontal-grid-pol{height:10px;width:2px;background-color:black;}.guic-rangeslider-horizontal-grid-text{color:black;font-size:0.8rem;}.guic-rangeslider-horizontal-pol-without-text{height:5px;}.guic-horizontal-rangeslider-thumb{position:absolute;top:-800%;/* Since the percent of the top property is based on the height of the parent, to position the handle above we need 8x the height */    left:50%;transform:translateX(-50%);background-color:#0085a7;padding:5px;border-radius:5px;color:white;}";

let style$o = document.createElement("style");style$o.innerHTML = styleText$o;document.head.appendChild(style$o);

var styleText$n = ".handle-0[active],.handle-1[active]{border-style:solid;border-width:2px;border-color:#0085a7;z-index:10;}";

let style$n = document.createElement("style");style$n.innerHTML = styleText$n;document.head.appendChild(style$n);

var styleText$m = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/[role=\"radiogroup\"]{display:flex;padding:0;margin:0;list-style:none;height:20px;}[role=\"radiogroup\"]:focus{outline:none;}[role=\"radio\"]{position:relative;padding-left:20px;cursor:pointer;}[role=\"radio\"] + [role=\"radio\"]{margin-left:16px;}[role=\"radio\"] .before,[role=\"radio\"] .after{position:absolute;top:50%;left:7px;transform:translate(-50%, -50%);}[role=\"radio\"] .before{width:14px;height:14px;border:1px solid #25a5d6;border-radius:100%;background-image:linear-gradient(to bottom, #e6e6e6, #fff 60%);}[role=\"radio\"][aria-checked=\"true\"] .before{background:#fff;}[role=\"radio\"][aria-checked=\"true\"] .after{display:block;border:4px solid #25a5d6;border-radius:100%;}[role=\"radio\"][aria-checked=\"mixed\"]:active .before,[role=\"radio\"][aria-checked=\"true\"]:active .before{background-image:linear-gradient(to bottom, #3a80e9, #25a5d6 60%);}[role=\"radio\"]:hover .before{border-color:#25a5d6;}[role=\"radio\"]:focus{outline:none;}[role=\"radio\"]:focus .before{width:16px;height:16px;box-sizing:content-box;border-color:#25a5d6;border-width:2px;border-radius:100%;box-shadow:inset 0 0 0 1px #3a80e9;}.guic-radio-button-disabled{opacity:0.5;pointer-events:none;}radio-button[controls-disabled] .before,radio-button[controls-disabled] .after{display:none;}";

let style$m = document.createElement("style");style$m.innerHTML = styleText$m;document.head.appendChild(style$m);

var styleText$l = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/gameface-radial-menu{pointer-events:none;visibility:hidden;}.guic-radial-menu{position:relative;width:71.5vh;height:71.5vh;display:flex;justify-content:center;align-items:center;}.guic-radial-menu-open{pointer-events:auto;visibility:visible;}.guic-radial-menu-center{position:absolute;width:23.7vh;height:23.7vh;display:flex;justify-content:center;align-items:center;}.guic-radial-menu-center-bullseye{position:absolute;width:80%;height:80%;background-color:#fff;border-radius:50%;}.guic-radial-menu-center-text{position:absolute;width:80%;height:80%;display:flex;justify-content:center;align-items:center;font-family:'RC-Regular';font-size:3vh;text-align:center;}.guic-radial-menu-center-bullseye-outer{width:100%;height:100%;border:1.5vh solid #fff;border-radius:50%;box-sizing:border-box;}.guic-radial-menu-items{position:absolute;width:100%;height:100%;border-radius:50%;background-color:rgba(255, 255, 255, 0.25);display:flex;justify-content:center;align-items:center;}.guic-radial-menu-item{position:absolute;height:100%;display:flex;justify-content:center;align-items:center;z-index:1;}.guic-radial-menu-item-icon{position:absolute;width:10vh;height:10vh;top:5vh;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.guic-radial-menu-selector{position:absolute;width:100%;height:100%;}.guic-radial-menu-selector-bg-1,.guic-radial-menu-selector-bg-2{position:absolute;width:100%;height:100%;border-radius:50%;box-sizing:border-box;}.guic-radial-menu-selector-bg-1{border:16.5vh solid rgba(37, 165, 214, 0.85);}.guic-radial-menu-selector-bg-2{border:8.25vh solid rgba(255, 255, 255, 0.75);}";

let style$l = document.createElement("style");style$l.innerHTML = styleText$l;document.head.appendChild(style$l);

var styleText$k = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/.guic-progress-bar{border:2px solid;border-top-color:var(--default-color-gray);border-right-color:var(--default-color-gray);border-bottom-color:var(--default-color-gray);border-left-color:var(--default-color-gray);height:100%;width:100%;}.guic-progress-bar-filler{height:100%;background-color:var(--default-color-blue);}";

let style$k = document.createElement("style");style$k.innerHTML = styleText$k;document.head.appendChild(style$k);

var styleText$j = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/.guic-modal-backdrop{width:100vw;height:100vh;background-color:#000000;opacity:.4;user-select:none;z-index:1;position:absolute;top:0px;left:0px;}.guic-modal-close-x{width:30px;height:30px;position:absolute;right:0px;top:0px;cursor:pointer;text-align:center;z-index:2;line-height:30px;background-color:var(--default-color-blue);color:var(--default-color-gray);}.guic-modal-close-x:hover{background-color:var(--default-color-gray);color:var(--default-color-blue);}.guic-modal{width:500px;height:500px;z-index:2;position:absolute;border-width:3px;border-style:solid;box-sizing:border-box;border-top-color:var(--default-color-blue);border-right-color:var(--default-color-blue);border-bottom-color:var(--default-color-blue);border-left-color:var(--default-color-blue);background-color:var(--default-color-white);}.guic-modal-wrapper{position:absolute;top:0px;left:0px;justify-content:center;display:flex;align-items:center;width:100vw;height:100vh;}.guic-modal-header{position:relative;top:0px;height:50px;margin-bottom:20px;border-bottom-width:2px;border-bottom-style:solid;border-bottom-color:var(--default-color-blue);line-height:50px;padding:0px 10px;box-sizing:border-box;}.guic-modal-body, .guic-modal-footer{position:absolute;justify-content:center;display:flex;align-items:center;}.guic-modal-body{position:relative;height:100px;}.guic-modal-footer{height:100px;width:500px;position:absolute;bottom:0px;}";

let style$j = document.createElement("style");style$j.innerHTML = styleText$j;document.head.appendChild(style$j);

var styleText$i = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/gameface-right-menu{position:absolute;right:0px;display:flex;flex-direction:column;}";

let style$i = document.createElement("style");style$i.innerHTML = styleText$i;document.head.appendChild(style$i);

var styleText$h = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/gameface-menu{position:absolute;}gameface-menu,gameface-right-menu,gameface-left-menu,gameface-bottom-menu{border-top-color:var(--default-color-blue);border-right-color:var(--default-color-blue);border-bottom-color:var(--default-color-blue);border-left-color:var(--default-color-blue);background-color:var(--default-color-white);}menu-item{position:relative;padding:10px;cursor:pointer;border-top-color:var(--default-color-blue);border-right-color:var(--default-color-blue);border-bottom-color:var(--default-color-blue);border-left-color:var(--default-color-blue);background-color:var(--default-color-white);}.guic-menu-active-menu-item{background-color:var(--default-color-blue);}menu-item[disabled]{color:var(--default-color-gray);pointer-events:none;}.guic-menu-hover{background-color:#cfcfcf;}.guic-menu-horizontal{display:flex;flex-direction:row;}.guic-menu-vertical{display:flex;flex-direction:column;}";

let style$h = document.createElement("style");style$h.innerHTML = styleText$h;document.head.appendChild(style$h);

var styleText$g = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/gameface-left-menu{position:absolute;left:0px;display:flex;flex-direction:column;}";

let style$g = document.createElement("style");style$g.innerHTML = styleText$g;document.head.appendChild(style$g);

var styleText$f = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/gameface-bottom-menu{position:absolute;bottom:0px;display:flex;flex-direction:row;}";

let style$f = document.createElement("style");style$f.innerHTML = styleText$f;document.head.appendChild(style$f);

var styleText$e = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/body{font-size:16px;background-color:#ffffff;}.title{margin-bottom:3rem;}.selected{transform:scale(1.2);}.avatar{margin-bottom:2rem;min-height:21vw;background-size:contain;background-repeat:no-repeat no-repeat;}.avatar-container{z-index:1;}.avatar-container:hover{z-index:3;}.avatar:hover, .class:hover{cursor:pointer;transform:scale(1.2);}.avatar1{background-image:url(./images/avatar1.png);}.avatar2{background-image:url(./images/avatar2.png);}.avatar3{background-image:url(./images/avatar3.png);}.avatar4{background-image:url(./images/avatar4.png);}.avatar5{background-image:url(./images/avatar5.png);}.avatar6{background-image:url(./images/avatar6.png);}#avatar1-classes, #avatar2-classes, #avatar3-classes, #avatar4-classes, #avatar5-classes, #avatar6-classes{display:none;}.class{margin-bottom:1rem;min-height:10vw;background-size:contain;background-repeat:no-repeat no-repeat;}.class.active{filter:saturate(14);}.class1{background-image:url(./images/class1.png);}.class2{background-image:url(./images/class2.png);}.class3{background-image:url(./images/class3.png);}.class4{background-image:url(./images/class4.png);}.class5{background-image:url(./images/class5.png);}.class6{background-image:url(./images/class6.png);}.class7{background-image:url(./images/class7.png);}.class8{background-image:url(./images/class8.png);}.class9{background-image:url(./images/class9.png);}.class10{background-image:url(./images/class10.png);}.class11{background-image:url(./images/class11.png);}.class12{background-image:url(./images/class12.png);}.custom-static-col-300px{flex:0 0 auto;max-width:none;width:300px;}";

let style$e = document.createElement("style");style$e.innerHTML = styleText$e;document.head.appendChild(style$e);

var styleText$d = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/.guic-row{box-sizing:border-box;display:flex;flex:0 1 auto;flex-direction:row;/* flex-wrap:wrap;*/    /* margin-right:-0.5rem;*/    /* margin-left:-0.5rem;*/}.guic-col,.guic-col-1,.guic-col-2,.guic-col-3,.guic-col-4,.guic-col-5,.guic-col-6,.guic-col-7,.guic-col-8,.guic-col-9,.guic-col-10,.guic-col-11,.guic-col-12,.guic-col-offset-0,.guic-col-offset-1,.guic-col-offset-2,.guic-col-offset-3,.guic-col-offset-4,.guic-col-offset-5,.guic-col-offset-6,.guic-col-offset-7,.guic-col-offset-8,.guic-col-offset-9,.guic-col-offset-10,.guic-col-offset-11,.guic-col-offset-12{box-sizing:border-box;flex:0 0 auto;padding-right:0.5rem;padding-left:0.5rem;}.guic-col{flex-grow:1;flex:1 1 0;max-width:100%;}.guic-col-1{flex:1 1 8.33333333%;max-width:8.33333333%;}.guic-col-2{flex:1 1 16.66666667%;max-width:16.66666667%;}.guic-col-3{flex:1 1 25%;max-width:25%;}.guic-col-4{flex:1 1 33.33333333%;max-width:33.33333333%;}.guic-col-5{flex:1 1 41.66666667%;max-width:41.66666667%;}.guic-col-6{flex:1 1 50%;max-width:50%;}.guic-col-7{flex:1 1 58.33333333%;max-width:58.33333333%;}.guic-col-8{flex:1 1 66.66666667%;max-width:66.66666667%;}.guic-col-9{flex:1 1 75%;max-width:75%;}.guic-col-10{flex:1 1 83.33333333%;max-width:83.33333333%;}.guic-col-11{flex:1 1 91.66666667%;max-width:91.66666667%;}.guic-col-12{flex:1 1 100%;max-width:100%;}.guic-col-offset-0{margin-left:0;}.guic-col-offset-1{margin-left:8.33333333%;}.guic-col-offset-2{margin-left:16.66666667%;}.guic-col-offset-3{margin-left:25%;}.guic-col-offset-4{margin-left:33.33333333%;}.guic-col-offset-5{margin-left:41.66666667%;}.guic-col-offset-6{margin-left:50%;}.guic-col-offset-7{margin-left:58.33333333%;}.guic-col-offset-8{margin-left:66.66666667%;}.guic-col-offset-9{margin-left:75%;}.guic-col-offset-10{margin-left:83.33333333%;}.guic-col-offset-11{margin-left:91.66666667%;}";

let style$d = document.createElement("style");style$d.innerHTML = styleText$d;document.head.appendChild(style$d);

var styleText$c = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/dropdown-option{background-color:var(--default-color-white);}.guic-dropdown-disabled{filter:grayscale(0.2);opacity:0.5;pointer-events:none;}.guic-dropdown-options{display:flex;flex-direction:column;background-color:var(--default-color-white);width:150px;}.guic-dropdown{user-select:none;}.guic-dropdown-header{align-items:center;display:flex;}.guic-dropdown-selected-option{border:2px solid var(--default-color-gray);display:flex;align-items:center;height:30px;width:150px;background-color:var(--default-color-white);padding:0px 10px;}.guic-dropdown-selected-option:hover{border:2px solid;border-top-color:var(--default-color-blue);border-bottom-color:var(--default-color-blue);border-left-color:var(--default-color-blue);border-right-color:var(--default-color-blue);}.guic-dropdown-options-container{height:204px;width:150px;border:2px;border-style:solid;border-top-color:var(--default-color-blue);border-bottom-color:var(--default-color-blue);border-left-color:var(--default-color-blue);border-right-color:var(--default-color-blue);}gameface-dropdown{width:150px;position:relative;top:10px;left:10px;margin-left:20px;display:flex;align-items:center;}gameface-dropdown .guic-scrollable-container.full-width{width:100%;}gameface-dropdown *{box-sizing:border-box;}.guic-dropdown-custom-select-arrow{position:absolute;right:4px;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #000;}dropdown-option{padding:1px 4px;}.guic-dropdown-option-disabled{color:var(--default-color-gray);pointer-events:none;}.guic-dropdown-option-active{background-color:var(--default-color-blue);}.guic-dropdown-hidden{visibility:hidden;pointer-events:none;}.guic-dropdown-disable-hover{pointer-events:none;}";

let style$c = document.createElement("style");style$c.innerHTML = styleText$c;document.head.appendChild(style$c);

var styleText$b = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/dropdown-option{background-color:var(--default-color-white);}.guic-dropdown-disabled{filter:grayscale(0.2);opacity:0.5;pointer-events:none;}.guic-dropdown-options{display:flex;flex-direction:column;background-color:var(--default-color-white);width:150px;}.guic-dropdown{user-select:none;}.guic-dropdown-header{align-items:center;display:flex;}.guic-dropdown-selected-option{border:2px solid var(--default-color-gray);display:flex;align-items:center;height:30px;width:150px;background-color:var(--default-color-white);padding:0px 10px;}.guic-dropdown-selected-option:hover{border:2px solid;border-top-color:var(--default-color-blue);border-bottom-color:var(--default-color-blue);border-left-color:var(--default-color-blue);border-right-color:var(--default-color-blue);}.guic-dropdown-options-container{height:204px;width:150px;border:2px;border-style:solid;border-top-color:var(--default-color-blue);border-bottom-color:var(--default-color-blue);border-left-color:var(--default-color-blue);border-right-color:var(--default-color-blue);}gameface-dropdown{width:150px;position:relative;top:10px;left:10px;margin-left:20px;display:flex;align-items:center;}gameface-dropdown .guic-scrollable-container.full-width{width:100%;}gameface-dropdown *{box-sizing:border-box;}.guic-dropdown-custom-select-arrow{position:absolute;right:4px;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #000;}dropdown-option{padding:1px 4px;}.guic-dropdown-option-disabled{color:var(--default-color-gray);pointer-events:none;}.guic-dropdown-option-active{background-color:var(--default-color-blue);}.guic-dropdown-hidden{visibility:hidden;pointer-events:none;}.guic-dropdown-disable-hover{pointer-events:none;}";

let style$b = document.createElement("style");style$b.innerHTML = styleText$b;document.head.appendChild(style$b);

var styleText$a = ".guic-color-picker{width:30vh;background-color:var(--default-color-gray);}.guic-ls-picker{height:15vh;width:100%;position:relative;background-image:linear-gradient(to bottom, transparent, black), linear-gradient(to right, white, red 62%);}.guic-color-picker .guic-horizontal-rangeslider-handle{width:2vh;height:2vh;border:0.3vh solid white;background-color:transparent;border-radius:50%;position:absolute;}.guic-ls-picker .guic-horizontal-rangeslider-handle{transform:translate(-50%, -50%);}.guic-hue-picker,.guic-alpha-picker{height:2.5vh;width:100%;padding:0 2vh;display:flex;align-items:center;justify-content:center;box-sizing:border-box;}.guic-color-picker .guic-horizontal-rangeslider-wrapper{width:27vh;margin:0;}.guic-hue-picker .guic-horizontal-rangeslider{background-image:linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red);height:1.5vh;border-radius:1vh;}.guic-alpha-picker .guic-horizontal-rangeslider{background-image:linear-gradient(45deg, #ccc 25%, transparent 25%),        linear-gradient(135deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%),        linear-gradient(135deg, transparent 75%, #ccc 75%);background-size:1.5vh 1.5vh;/* Must be a square */    background-position:0 0, 0.75vh 0, 0.75vh -0.75vh, 0px 0.75vh;/* Must be half of one side of the square */    height:1.5vh;border-radius:1vh;position:relative;}.guic-alpha-picker-slider{--color:red;}.guic-alpha-picker .guic-horizontal-rangeslider::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-image:linear-gradient(to right, transparent, var(--color));border-radius:1vh;}.guic-color-picker .guic-horizontal-rangeslider-bar{background-color:transparent;}.guic-color-preview-tabs{width:100%;display:flex;justify-content:center;}.guic-color-preview-tab{width:5vh;height:3vh;color:rgb(97, 97, 97);border:0.3vh solid rgb(97, 97, 97);font-size:1.3vh;display:flex;align-items:center;justify-content:center;user-select:none;}.guic-color-preview-tab:first-child{border-radius:1.5vh 0 0 1.5vh;border-right:0;}.guic-color-preview-tab:last-child{border-radius:0 1.5vh 1.5vh 0;}.guic-color-preview-tab-active{background-color:rgb(97, 97, 97);color:white;}.guic-color-preview{width:100%;height:8vh;display:flex;justify-content:space-between;align-items:center;padding:0 2vh;box-sizing:border-box;}.guic-color-preview-box{width:5vh;height:5vh;border:0.3vh solid rgb(97, 97, 97);background-image:linear-gradient(45deg, #ccc 25%, transparent 25%),        linear-gradient(135deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%),        linear-gradient(135deg, transparent 75%, #ccc 75%);background-size:1.5vh 1.5vh;/* Must be a square */    background-position:0 0, 0.75vh 0, 0.75vh -0.75vh, 0px 0.75vh;/* Must be half of one side of the square */    border-radius:50%;position:relative;}.guic-color-preview-box-color{width:100%;height:100%;background-color:#00000001;border-radius:50%;}.guic-color-preview-input{height:5vh;width:20vh;background-color:transparent;border:0.3vh solid rgb(97, 97, 97);border-radius:4vh;display:flex;padding:1vh;font-size:1.7vh;text-align:center;box-sizing:border-box;}";

let style$a = document.createElement("style");style$a.innerHTML = styleText$a;document.head.appendChild(style$a);

var styleText$9 = ".guic-color-picker{width:30vh;background-color:var(--default-color-gray);}.guic-ls-picker{height:15vh;width:100%;position:relative;background-image:linear-gradient(to bottom, transparent, black), linear-gradient(to right, white, red 62%);}.guic-color-picker .guic-horizontal-rangeslider-handle{width:2vh;height:2vh;border:0.3vh solid white;background-color:transparent;border-radius:50%;position:absolute;}.guic-ls-picker .guic-horizontal-rangeslider-handle{transform:translate(-50%, -50%);}.guic-hue-picker,.guic-alpha-picker{height:2.5vh;width:100%;padding:0 2vh;display:flex;align-items:center;justify-content:center;box-sizing:border-box;}.guic-color-picker .guic-horizontal-rangeslider-wrapper{width:27vh;margin:0;}.guic-hue-picker .guic-horizontal-rangeslider{background-image:linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red);height:1.5vh;border-radius:1vh;}.guic-alpha-picker .guic-horizontal-rangeslider{background-image:linear-gradient(45deg, #ccc 25%, transparent 25%),        linear-gradient(135deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%),        linear-gradient(135deg, transparent 75%, #ccc 75%);background-size:1.5vh 1.5vh;/* Must be a square */    background-position:0 0, 0.75vh 0, 0.75vh -0.75vh, 0px 0.75vh;/* Must be half of one side of the square */    height:1.5vh;border-radius:1vh;position:relative;}.guic-alpha-picker-slider{--color:red;}.guic-alpha-picker .guic-horizontal-rangeslider::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-image:linear-gradient(to right, transparent, var(--color));border-radius:1vh;}.guic-color-picker .guic-horizontal-rangeslider-bar{background-color:transparent;}.guic-color-preview-tabs{width:100%;display:flex;justify-content:center;}.guic-color-preview-tab{width:5vh;height:3vh;color:rgb(97, 97, 97);border:0.3vh solid rgb(97, 97, 97);font-size:1.3vh;display:flex;align-items:center;justify-content:center;user-select:none;}.guic-color-preview-tab:first-child{border-radius:1.5vh 0 0 1.5vh;border-right:0;}.guic-color-preview-tab:last-child{border-radius:0 1.5vh 1.5vh 0;}.guic-color-preview-tab-active{background-color:rgb(97, 97, 97);color:white;}.guic-color-preview{width:100%;height:8vh;display:flex;justify-content:space-between;align-items:center;padding:0 2vh;box-sizing:border-box;}.guic-color-preview-box{width:5vh;height:5vh;border:0.3vh solid rgb(97, 97, 97);background-image:linear-gradient(45deg, #ccc 25%, transparent 25%),        linear-gradient(135deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%),        linear-gradient(135deg, transparent 75%, #ccc 75%);background-size:1.5vh 1.5vh;/* Must be a square */    background-position:0 0, 0.75vh 0, 0.75vh -0.75vh, 0px 0.75vh;/* Must be half of one side of the square */    border-radius:50%;position:relative;}.guic-color-preview-box-color{width:100%;height:100%;background-color:#00000001;border-radius:50%;}.guic-color-preview-input{height:5vh;width:20vh;background-color:transparent;border:0.3vh solid rgb(97, 97, 97);border-radius:4vh;display:flex;padding:1vh;font-size:1.7vh;text-align:center;box-sizing:border-box;}";

let style$9 = document.createElement("style");style$9.innerHTML = styleText$9;document.head.appendChild(style$9);

var styleText$8 = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/:root{--default-color-white:#fff;--default-color-blue:#25a5d6;--default-color-gray:#e6e6e6;}.guic-demo input,.guic-demo textarea,.guic-demo button{border-top-color:var(--default-color-blue);border-right-color:var(--default-color-blue);border-bottom-color:var(--default-color-blue);border-left-color:var(--default-color-blue);background-color:var(--default-color-white);}.guic-demo button,.guic-demo input[type=\"button\"]{background-color:var(--default-color-gray);}";

let style$8 = document.createElement("style");style$8.innerHTML = styleText$8;document.head.appendChild(style$8);

var styleText$7 = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/ .guic-checkbox-wrapper{position:relative;margin-top:10px;display:flex;flex-direction:row;}.guic-checkbox-wrapper-inner{background-color:var(--default-color-white);}.guic-checkbox-background{box-sizing:border-box;top:0px;width:30px;height:30px;border-width:5px;border-style:solid;border-top-color:var(--default-color-gray);border-right-color:var(--default-color-gray);border-bottom-color:var(--default-color-gray);border-left-color:var(--default-color-gray);}.guic-check-mark{position:absolute;top:5px;left:5px;width:20px;height:20px;background-color:var(--default-color-blue);}.guic-checkbox-label{position:relative;padding-left:10px;line-height:30px;user-select:none;}.guic-checkbox-disabled{filter:grayscale(0.2);opacity:0.5;pointer-events:none;}";

let style$7 = document.createElement("style");style$7.innerHTML = styleText$7;document.head.appendChild(style$7);

var styleText$6 = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/ .guic-checkbox-wrapper{position:relative;margin-top:10px;display:flex;flex-direction:row;}.guic-checkbox-wrapper-inner{background-color:var(--default-color-white);}.guic-checkbox-background{box-sizing:border-box;top:0px;width:30px;height:30px;border-width:5px;border-style:solid;border-top-color:var(--default-color-gray);border-right-color:var(--default-color-gray);border-bottom-color:var(--default-color-gray);border-left-color:var(--default-color-gray);}.guic-check-mark{position:absolute;top:5px;left:5px;width:20px;height:20px;background-color:var(--default-color-blue);}.guic-checkbox-label{position:relative;padding-left:10px;line-height:30px;user-select:none;}.guic-checkbox-disabled{filter:grayscale(0.2);opacity:0.5;pointer-events:none;}";

let style$6 = document.createElement("style");style$6.innerHTML = styleText$6;document.head.appendChild(style$6);

var styleText$5 = ":root{--guic-carousel-arrow-dimensions:10px;--guic-carousel-arrow-size:4px;}gameface-carousel{visibility:hidden;display:block;width:200px;height:150px;}.guic-carousel{position:relative;overflow:hidden;}.guic-carousel-content-wrapper{display:flex;position:absolute;left:0px;flex-direction:row;}.guic-carousel-dots{display:flex;flex-direction:row;justify-content:center;}.guic-carousel-dot{width:10px;height:10px;border-radius:10px;margin-top:10px;margin-left:5px;background-color:rgb(135, 199, 255);cursor:pointer;}.guic-carousel-transparent{opacity:0;}.guic-carousel-arrow{position:absolute;height:100%;width:var(--guic-carousel-arrow-dimensions);}.guic-carousel-left-arrow{left:0;}.guic-carousel-right-arrow{right:0;}.guic-carousel-arrow-slot{position:absolute;width:inherit;height:inherit;}.guic-carousel-inner-arrow{position:absolute;border:solid white;top:50%;width:var(--guic-carousel-arrow-dimensions);height:var(--guic-carousel-arrow-dimensions);}.guic-carousel-inner-arrow-left{left:0px;border-width:0;border-top-width:var(--guic-carousel-arrow-size);border-left-width:var(--guic-carousel-arrow-size);transform:rotate(-45deg);transform-origin:0% 0%;}.guic-carousel-inner-arrow-right{left:100%;border-width:0;border-top-width:var(--guic-carousel-arrow-size);border-left-width:var(--guic-carousel-arrow-size);transform:rotate(135deg);transform-origin:0% 0%;}.guic-carousel-hidden{display:none;}";

let style$5 = document.createElement("style");style$5.innerHTML = styleText$5;document.head.appendChild(style$5);

var styleText$4 = ":root{--guic-carousel-arrow-dimensions:10px;--guic-carousel-arrow-size:4px;}gameface-carousel{visibility:hidden;display:block;width:200px;height:150px;}.guic-carousel{position:relative;overflow:hidden;}.guic-carousel-content-wrapper{display:flex;position:absolute;left:0px;flex-direction:row;}.guic-carousel-dots{display:flex;flex-direction:row;justify-content:center;}.guic-carousel-dot{width:10px;height:10px;border-radius:10px;margin-top:10px;margin-left:5px;background-color:rgb(135, 199, 255);cursor:pointer;}.guic-carousel-transparent{opacity:0;}.guic-carousel-arrow{position:absolute;height:100%;width:var(--guic-carousel-arrow-dimensions);}.guic-carousel-left-arrow{left:0;}.guic-carousel-right-arrow{right:0;}.guic-carousel-arrow-slot{position:absolute;width:inherit;height:inherit;}.guic-carousel-inner-arrow{position:absolute;border:solid white;top:50%;width:var(--guic-carousel-arrow-dimensions);height:var(--guic-carousel-arrow-dimensions);}.guic-carousel-inner-arrow-left{left:0px;border-width:0;border-top-width:var(--guic-carousel-arrow-size);border-left-width:var(--guic-carousel-arrow-size);transform:rotate(-45deg);transform-origin:0% 0%;}.guic-carousel-inner-arrow-right{left:100%;border-width:0;border-top-width:var(--guic-carousel-arrow-size);border-left-width:var(--guic-carousel-arrow-size);transform:rotate(135deg);transform-origin:0% 0%;}.guic-carousel-hidden{display:none;}";

let style$4 = document.createElement("style");style$4.innerHTML = styleText$4;document.head.appendChild(style$4);

var styleText$3 = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/.guic-automatic-grid-cell{height:50px;user-select:none;}.guic-col-2_4{flex:1 1 20%;max-width:20%;}.guic-col-1_7{flex:1 1 14.285714%;max-width:14.285714%;}.guic-col-1_5{flex:1 1 12.5%;max-width:12.5%;}.guic-col-1_3{flex:1 1 11.111111%;max-width:11.111111%;}.guic-col-1_2{flex:1 1 10%;max-width:10%;}.guic-col-1_1{flex:1 1 9.090909%;max-width:9.090909%;}.guic-dragged{opacity:0.5;position:absolute;pointer-events:none;}";

let style$3 = document.createElement("style");style$3.innerHTML = styleText$3;document.head.appendChild(style$3);

var styleText$2 = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/.guic-automatic-grid-cell{height:50px;user-select:none;}.guic-col-2_4{flex:1 1 20%;max-width:20%;}.guic-col-1_7{flex:1 1 14.285714%;max-width:14.285714%;}.guic-col-1_5{flex:1 1 12.5%;max-width:12.5%;}.guic-col-1_3{flex:1 1 11.111111%;max-width:11.111111%;}.guic-col-1_2{flex:1 1 10%;max-width:10%;}.guic-col-1_1{flex:1 1 9.090909%;max-width:9.090909%;}.guic-dragged{opacity:0.5;position:absolute;pointer-events:none;}";

let style$2 = document.createElement("style");style$2.innerHTML = styleText$2;document.head.appendChild(style$2);

var styleText$1 = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/gameface-accordion-menu{background-color:white;box-shadow:0 2px 10px 0 rgba(0, 0, 0, 0.5);}gameface-accordion-panel{border-bottom:1px solid #dddddd;}.guic-accordion-last-panel{border-bottom:0;}gameface-accordion-header{padding:16px 24px;position:relative;}gameface-accordion-content{padding:0 24px;height:0;overflow:hidden;transition:height 0.2s;}gameface-accordion-menu, gameface-accordion-panel, gameface-accordion-header, gameface-accordion-content{display:block;}.guic-accordion-panel-disabled{color:#dddddd;}.guic-accordion-header-caret{position:absolute;transform:rotate(0deg);transition-property:transform;transition-duration:0.4s;border-top:6px solid #dddddd;border-left:6px solid transparent;border-right:6px solid transparent;right:24px;top:24px;pointer-events:none;}";

let style$1 = document.createElement("style");style$1.innerHTML = styleText$1;document.head.appendChild(style$1);

var styleText = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/gameface-accordion-menu{background-color:white;box-shadow:0 2px 10px 0 rgba(0, 0, 0, 0.5);}gameface-accordion-panel{border-bottom:1px solid #dddddd;}.guic-accordion-last-panel{border-bottom:0;}gameface-accordion-header{padding:16px 24px;position:relative;}gameface-accordion-content{padding:0 24px;height:0;overflow:hidden;transition:height 0.2s;}gameface-accordion-menu, gameface-accordion-panel, gameface-accordion-header, gameface-accordion-content{display:block;}.guic-accordion-panel-disabled{color:#dddddd;}.guic-accordion-header-caret{position:absolute;transform:rotate(0deg);transition-property:transform;transition-duration:0.4s;border-top:6px solid #dddddd;border-left:6px solid transparent;border-right:6px solid transparent;right:24px;top:24px;pointer-events:none;}";

let style = document.createElement("style");style.innerHTML = styleText;document.head.appendChild(style);

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
let BaseComponent$e = class BaseComponent extends HTMLElement {
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
};

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
let NativeElementValidator$1 = class NativeElementValidator {
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
        if (isNativeTextField(this.element)) return TextFieldValidator$1.tooLong(this.element);
        return Validator.tooLong();
    }

    tooShort() {
        if (isNativeTextField(this.element)) return TextFieldValidator$1.tooShort(this.element);
        return Validator.tooShort();
    }

    rangeOverflow() {
        if (isNativeTextField(this.element)) return TextFieldValidator$1.rangeOverflow(this.element);
        return Validator.rangeOverflow();
    }

    rangeUnderflow() {
        if (isNativeTextField(this.element)) return TextFieldValidator$1.rangeUnderflow(this.element);
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
        if (isNativeTextField(this.element)) return TextFieldValidator$1.isBadEmail(this.element);
        return false;
    }

    isBadURL() {
        if (isNativeTextField(this.element)) return TextFieldValidator$1.isBadURL(this.element);
        return false;
    }
    /* eslint-enable require-jsdoc */
};

/**
 * The CustomElementValidator is inherited by custom elements in order to gain the
 * validation function from the Validator class.
 * This class can not be used to wrap the native elements as it inherits the
 * HTMLElement which can not be instantiated using the new keyword.
*/
let CustomElementValidator$5 = class CustomElementValidator extends BaseComponent$e {
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
};

/**
 * Class that implements the commong validation methods for the text fields
 */
let TextFieldValidator$1 = class TextFieldValidator {
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
};

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

            this.CustomElementValidator = CustomElementValidator$5;
            this.NativeElementValidator = NativeElementValidator$1;
            this.TextFieldValidator = TextFieldValidator$1;
            this.Validator = Validator;
            this.BaseComponent = BaseComponent$e;
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

new Keyboard();

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

new Gamepad();

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


IM$1.init();

var template$e = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-tooltip\">    <component-slot data-name=\"message\"></component-slot></div>";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$k = new Components();
const TOOLTIP_MARGIN = 5;
const TOOLTIP_POSITIONS = ['top', 'bottom', 'left', 'right'];
const NOT_A_PROMISE_ERROR = 'The value in async mode must be a function that returns a promise.';
const BaseComponent$d = components$k.BaseComponent;

/**
 * Class definition of the gameface tooltip custom element
 */
class Tooltip extends BaseComponent$d {
    /* eslint-disable require-jsdoc */
    constructor() {
        super();
        this.template = template$e;
        this.visible = false;

        this.uncheckedOrientations = TOOLTIP_POSITIONS;
    }

    get message() {
        return this._messageSlot.textContent;
    }

    set targetElement(element) {
        this._targetElement = element;
    }

    get targetElement() {
        return this._targetElement;
    }

    get overflows() {
        const rect = this.getBoundingClientRect();
        const overflows = {};

        if (rect.top < 0) overflows.top = true;
        if (rect.left < 0) overflows.left = true;
        if (rect.right > (window.innerWidth || document.documentElement.clientWidth)) overflows.right = true;
        if (rect.bottom > (window.innerHeight || document.documentElement.clientHeight)) overflows.bottom = true;

        return overflows;
    }

    get async() {
        return this.hasAttribute('async');
    }

    debounce(callback, timeout = 10) {
        return (...args) => {
            clearTimeout(this.debounceTimer);
            this.debounceTimer = setTimeout(() => { callback.apply(this, args); }, timeout);
        };
    }

    /**
     * Initialize the custom component.
     * Set template, attach event listeners, setup initial state etc.
     * @param {object} data
    */
    init(data) {
        this.setupTemplate(data, () => {
            components$k.renderOnce(this);
            this.attachEventListeners();
            this._messageSlot = this.querySelector('.guic-tooltip').firstElementChild;
        });
    }

    connectedCallback() {
        this.position = this.getAttribute('position') || 'top';
        this.showOn = this.getAttribute('on');
        this.hideOn = this.getAttribute('off');
        this.elementSelector = this.getAttribute('target');
        this.init = this.init.bind(this);

        this.triggerElement = this.targetElement || document.querySelector(this.elementSelector);
        if (!this.triggerElement) {
            console.error(`An element with selector ${this.elementSelector} does not exit. Please make sure the selector is correct and the element exists.`);
            return;
        }

        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        this.resizeDebounced = this.debounce(this.onWindowResize);

        components$k.loadResource(this)
            .then(this.init)
            .catch(err => console.error(err));
    }

    onWindowResize() {
        this.setPosition(window.scrollX, window.scrollY);
        this.uncheckedOrientations = [...TOOLTIP_POSITIONS];
    }

    attachEventListeners() {
        if (this.showOn === this.hideOn) {
            this.triggerElement.addEventListener(this.showOn, () => this.toggle());
            return;
        }

        this.triggerElement.addEventListener(this.showOn, () => this.show());
        this.triggerElement.addEventListener(this.hideOn, () => this.hide());
    }

    attachGlobalEventListeners() {
        window.addEventListener('resize', this.resizeDebounced);
        document.addEventListener('click', this.handleDocumentClick);
    }

    removeGlobalEventListeners() {
        window.removeEventListener('resize', this.resizeDebounced);
        document.removeEventListener('click', this.handleDocumentClick);
    }

    /* eslint-enable require-jsdoc */

    /**
     * Sets the textContent of the message slot HTMLElement
     * @param {string | number} content
     * @returns {string}
    */
    setTooltipContent(content) {
        return this._messageSlot.textContent = content;
    }

    /**
     * Checks the validity of a synchronous message.
     * Allowed types are - string | number | Function<string | number>.
     * @param {any} value
     * @returns {boolean} - true if it is valid and false if not.
    */
    isSyncMessageValid(value) {
        const allowedSyncTypes = ['string', 'number', 'function'];
        const type = typeof value;

        if (!allowedSyncTypes.includes(type)) return false;
        if (type === 'function' && (value() instanceof Promise)) return console.error('Using Promise in sync mode is forbidden. Add "async" attribute to the gameface-tooltip element.');
        return true;
    }

    /**
     * Synchronously sets the value of the tooltip.
     * @param {string | number} value
    */
    setSyncMessage(value) {
        if (!this.isSyncMessageValid(value)) return;

        value = (typeof value === 'function') ? value() : value;
        this.setTooltipContent(value);
    }

    /**
     * Asynchronously sets the value of the tooltip.
     * @param {Function<Promise>} value
     * @returns {Promise} - a promise that will resolve with the value that was set.
    */
    setAsyncMessage(value) {
        if (typeof value !== 'function') return console.error(NOT_A_PROMISE_ERROR);
        const valueResult = value();
        if (!(valueResult instanceof Promise)) return console.error(NOT_A_PROMISE_ERROR);

        this.setTooltipContent('Loading...');

        return new Promise((resolve, reject) => {
            valueResult.then(response => resolve(this.setTooltipContent(response))).catch(reject);
        });
    }

    /**
     * Sets the value of the tooltip. Calls the sync/async methods depending on the current mode.
     * Calls the validation methods before setting to make sure the values are correct.
     * @param {any} value
     * @returns {Promise | undefined}
    */
    setMessage(value) {
        if (this.async) return this.setAsyncMessage(value);
        this.setSyncMessage(value);
    }

    /**
     * If the target doesn't contain the gameface-tooltip element
     * then it means the click is on some of its children.
     * @param {Event} event
     */
    handleDocumentClick(event) {
        if (event.target.contains(this)) this.hide();
    }

    /**
     * Displays/Hides the tooltip
     */
    toggle() {
        this.visible ? this.hide() : this.show();
    }

    /**
     * Hides the tooltip
     */
    hide() {
        this.style.display = 'none';
        this.removeGlobalEventListeners();
        this.visible = false;
        // reset the current positioning as the page might get
        // resized until the next time the tooltip is displayed
        this.uncheckedOrientations = TOOLTIP_POSITIONS;
        this.position = this.getAttribute('position') || 'top';
    }

    /**
     * Displays the tooltip
     */
    async show() {
        // use visibility before showing to calculate the size
        this.style.visibility = 'hidden';
        this.style.display = '';

        await this.setPosition(window.scrollX, window.scrollY);
        this.attachGlobalEventListeners();

        this.style.visibility = 'visible';
        this.visible = true;
        this.classList.add('guic-tooltip-show-animation');
    }

    /**
     * Calculates the new position of the tooltip based on the given orientation.
     * @param {string} orientation - top, left, right or bottom.
     * @param {object} elementSize - the bounding rect of the element that triggered the tooltip show.
     * @returns {Array<string|object>} - the orientation as a string and the position as an object in an array so that we can
     * easily deconstruct the value like this: let [orientation, position] = getPositionCoords(...).
    */
    getPositionCoords(orientation, elementSize) {
        const elementPosition = {
            top: (elementSize.top + elementSize.height / 2),
            left: elementSize.left + (elementSize.width / 2),
        };

        return this.getOrientationAndPosition(orientation, elementPosition, elementSize);
    }

    /**
     * Sets the position of the tooltip based on the given orientation and the element.
     * @param {string} orientation - top, left, right or bottom.
     * @param {object} elementPosition - the position of the tooltip.
     * @param {object} elementSize - the bounding rect of the element that triggered the tooltip show.
     * @returns {Array<string|object>} - the orientation as a string and the position as an object in an array so that we can
     * easily deconstruct the value like this: let [orientation, position] = getPositionCoords(...).
     */
    getOrientationAndPosition(orientation, elementPosition, elementSize) {
        let transform = '';
        switch (orientation) {
            case 'top':
                elementPosition.top = elementSize.top - TOOLTIP_MARGIN;
                transform = 'translate(-50%, -100%)';
                break;
            case 'bottom':
                elementPosition.top = elementSize.top + elementSize.height + TOOLTIP_MARGIN;
                transform = 'translate(-50%, 0)';
                break;
            case 'left':
                elementPosition.left = elementSize.left - TOOLTIP_MARGIN;
                transform = 'translate(-100%, -50%)';
                break;
            case 'right':
                elementPosition.left = elementSize.left + elementSize.width + TOOLTIP_MARGIN;
                transform = 'translate(0, -50%)';
                break;
            default:
                elementPosition.top = elementSize.top - TOOLTIP_MARGIN;
                transform = 'translate(-50%, -100%)';
                console.log(`The provided option for position ${orientation} is not valid - using top as a fallback. Possible options are top, bottom, left and right.`);
                orientation = 'top';
                break;
        }

        return [orientation, elementPosition, transform];
    }

    /**
     * Sets the new position of the tooltip. Waits 2 frames for the tooltip to be fully rendered
     * and checks if the tooltip is visible on the new position. If it is not - calls setPosition
     * recursively until a suitable position is found or we've ran out of possibilities.
     * @param {number} scrollOffsetX - the offset of the scroll on the X axis.
     * @param {number} scrollOffsetY - the offset of the scroll on the Y axis.
     * @param {string} orientation - the current position of the tooltip - top, left, right or bottom.
     * @returns {promise}
    */
    async setPosition(scrollOffsetX, scrollOffsetY, orientation = this.position) {
        const elementSize = this.triggerElement.getBoundingClientRect();

        const [updatedOrientation, elementPosition, transform] = this.getPositionCoords(orientation, elementSize);

        this.position = updatedOrientation;
        this.style.top = scrollOffsetY + elementPosition.top + 'px';
        this.style.left = scrollOffsetX + elementPosition.left + 'px';
        this.style.transform = transform;

        await this.waitForFrames(2);
        const overflowingSides = Object.keys(this.overflows);
        if (overflowingSides.length && this.uncheckedOrientations.length !== 0) {
            return await this.setPosition(scrollOffsetX, scrollOffsetY, this.getVisiblePosition(overflowingSides));
        }
    }

    /**
     * An asynchronous method that waits for given amount of frames before it resolves;
     * useful in cases where we need to wait for styles to be computed.
     * @param {number} count - the number of frames it should wait for before resolving.
     * @returns {promise}
     */
    async waitForFrames(count) {
        while (count--) {
            await new Promise(resolve => requestAnimationFrame(resolve));
        }
    }

    /**
     * Gets the next value of a list of possible positions for the tooltip.
     * The possible positions is the difference between the overflowing positions and the
     * positions that haven't been tried yet.
     * @param {Array<string>} overflowingSides - an array of the sides of which the tooltip is hidden.
     * @returns {string} position - the new position.
     */
    getVisiblePosition(overflowingSides) {
        this.uncheckedOrientations = this.uncheckedOrientations.filter(side => !overflowingSides.includes(side));
        // the new position is the first element if the uncheckedOrientations array
        // return the first element and remove it from the array because it is now
        // part of the "checked" positions
        return this.uncheckedOrientations.shift();
    }
}

components$k.defineCustomElement('gameface-tooltip', Tooltip);

var template$d = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-text-field-container\">    <span class=\"guic-text-field-label\"></span>    <div class=\"guic-text-field-with-controls\">        <input class=\"guic-text-field\" type=\"text\" />        <div class=\"guic-text-field-placeholder guic-hidden\"></div>        <div class=\"guic-search-remove guic-hidden\">            <div class=\"guic-search-remove-right-line\"></div>            <div class=\"guic-search-remove-left-line\"></div>        </div>        <div class=\"guic-number-control guic-hidden\">            <div class=\"guic-number-increase\"></div>            <div class=\"guic-number-decrease\"></div>        </div>    </div></div>";

/* eslint-disable linebreak-style */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$j = new Components();

const TextFieldValidator = components$j.TextFieldValidator;
const CustomElementValidator$4 = components$j.CustomElementValidator;

const supportedTextFieldTypes = {
    TEXT: 'text',
    PASSWORD: 'password',
    EMAIL: 'email',
    NUMBER: 'number',
    SEARCH: 'search',
    URL: 'url',
};

const DEFAULT_PLACEHOLDER_VALUE = '';
const TEXT_FIELD_ATTRIBUTES = [
    { name: 'type', defaultValue: supportedTextFieldTypes.TEXT, type: ['string'] },
    { name: 'label', defaultValue: '', type: ['string'] },
    { name: 'disabled', defaultValue: false, type: ['boolean'] },
    { name: 'readonly', defaultValue: false, type: ['boolean'] },
    { name: 'pattern', defaultValue: '', type: ['string'] },
    { name: 'control-disabled', defaultValue: false, type: ['boolean'] },
    { name: 'value', defaultValue: '', type: ['string', 'number'] },
    { name: 'name', defaultValue: '', type: ['string'] },
    { name: 'placeholder', defaultValue: DEFAULT_PLACEHOLDER_VALUE, type: ['string'] },
    { name: 'maxlength', defaultValue: undefined, parseMethod: parseInt, isAttrValueValidMethod: isNaN, type: ['string', 'number', 'undefined'] },
    { name: 'minlength', defaultValue: undefined, parseMethod: parseInt, isAttrValueValidMethod: isNaN, type: ['string', 'number', 'undefined'] },
    { name: 'max', defaultValue: undefined, parseMethod: parseFloat, isAttrValueValidMethod: isNaN, type: ['string', 'number', 'undefined'] },
    { name: 'min', defaultValue: undefined, parseMethod: parseFloat, isAttrValueValidMethod: isNaN, type: ['string', 'number', 'undefined'] },
    { name: 'step', defaultValue: 1, parseMethod: parseFloat, isAttrValueValidMethod: isNaN, type: ['string', 'number'] },
];

/**
 * @typedef {object} TextFieldState
 * @property {string} label
 * @property {boolean} disabled
 * @property {boolean} readonly
 * @property {string} pattern
 * @property {boolean} control-disabled
 * @property {string|number} value
 * @property {string} name
 * @property {'text'|'password'|'email'|'number'|'search'|'url'} type
 * @property {string} placeholder
 * @property {number|undefined} maxlength
 * @property {number|undefined} minlength
 * @property {number|undefined} max
 * @property {number|undefined} min
 * @property {number} step
 */
/**
 * Class definition of gameface text field custom element
 */
class TextField extends CustomElementValidator$4 {
    // eslint-disable-next-line require-jsdoc
    static get observedAttributes() { return TEXT_FIELD_ATTRIBUTES.map(attr => attr.name); }

    /* eslint-disable require-jsdoc */
    constructor() {
        super();
        this.template = template$d;
        this.showSearchRemoveIconBound = this.showSearchRemoveIcon.bind(this);
        this.hideSearchRemoveIconBound = this.hideSearchRemoveIcon.bind(this);
        this.showNumberControlBound = this.showNumberControl.bind(this);
        this.hideNumberControlBound = this.hideNumberControl.bind(this);
        this.onInputChangedBound = this.onInputChanged.bind(this);
        this.disableInputBound = this.disableInput.bind(this);
        this.stepUpBound = this.onStepUp.bind(this);
        this.stepDownBound = this.onStepDown.bind(this);
        this.clearMousedownIntervalBound = this.clearMousedownInterval.bind(this);
        this.init = this.init.bind(this);
        this.initTextField = this.initTextField.bind(this);

        this.stateSchema = TEXT_FIELD_ATTRIBUTES.reduce((acc, attribute) => {
            acc[attribute.name] = { type: [...attribute.type] };
            return acc;
        }, {});

        /** @type {TextFieldState} */
        this.state = TEXT_FIELD_ATTRIBUTES.reduce((acc, attribute) => {
            acc[attribute.name] = attribute.defaultValue;
            return acc;
        }, {});
    }

    get label() {
        return this.state.label;
    }

    set label(value) {
        value ? this.setAttribute('label', value) : this.removeAttribute('label');
    }

    get value() {
        return this.inputElement.value;
    }

    set value(value) {
        this.setAttribute('value', value);
    }

    get type() {
        return this.state.type;
    }

    set type(value) {
        this.setAttribute('type', value);
    }

    get placeholder() {
        return this.state.placeholder;
    }

    set placeholder(value) {
        this.setAttribute('placeholder', value);
    }

    get disabled() {
        return this.state.disabled;
    }

    set disabled(value) {
        value ? this.setAttribute('disabled', '') : this.removeAttribute('disabled');
    }

    get readonly() {
        return this.state.readonly;
    }

    set readonly(value) {
        value ? this.setAttribute('readonly', '') : this.removeAttribute('readonly');
    }

    get minlength() {
        return this.state.minlength;
    }

    set minlength(value) {
        this.setAttribute('minlength', value);
    }

    get maxlength() {
        return this.state.maxlength;
    }

    set maxlength(value) {
        this.setAttribute('maxlength', value);
    }

    set min(value) {
        this.setAttribute('min', value);
    }

    get min() {
        return this.state.min;
    }

    set max(value) {
        this.setAttribute('max', value);
    }

    get max() {
        return this.state.max;
    }

    get controlDisabled() {
        return this.state['control-disabled'];
    }

    set controlDisabled(value) {
        value ? this.setAttribute('control-disabled', '') : this.removeAttribute('control-disabled');
    }

    set pattern(value) {
        this.setAttribute('pattern', value);
    }

    get pattern() {
        return this.state.pattern;
    }

    set step(value) {
        this.setAttribute('step', value);
    }

    get step() {
        return this.state.step;
    }

    get name() {
        return this.state.name;
    }

    set name(value) {
        this.setAttribute('name', value);
    }

    /**
     * Custom element lifecycle method. Called when an attribute is changed.
     * @param {string} name
     * @param {string} oldValue
     * @param {string|boolean} newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isRendered) return;

        this.updateAttributeState(name, newValue);
    }

    /**
     * Will update the state properties linked with the text-field attributes
     * @param {string} name
     * @param {string|boolean} value
     */
    // eslint-disable-next-line max-lines-per-function
    updateAttributeState(name, value) {
        switch (name) {
            case 'label':
                this.updateLabelState(value);
                break;
            case 'disabled':
                this.updateDisabledState(value !== null);
                break;
            case 'value':
                this.updateValueState(value);
                break;
            case 'type':
                this.updateTypeState(value);
                break;
            case 'placeholder':
                this.updatePlaceholderState(value);
                break;
            case 'readonly':
                this.updateReadonlyState(value !== null);
                break;
            case 'control-disabled':
                this.updateState(name, value !== null);
                break;
            case 'pattern':
            case 'min':
            case 'max':
            case 'name':
                this.updateState(name, value);
                break;
            case 'step':
                this.updateStepState(value);
                break;
            case 'maxlength':
            case 'minlength':
                this.updateMinMaxLengthState(name, value);
                break;
        }
    }

    /**
     * Update the text field's state.
     * @param {string} name - the name of the prop
     * @param {string | boolean} value - the value of the the prop
     * @returns {void}
     */
    updateState(name, value) {
        if (!this.isStatePropValid(name, value)) return;
        this.state[name] = value;
    }

    /**
     * Will update the text field's step state
     * @param {number|string} value
     * @returns {void}
     */
    updateStepState(value) {
        if (typeof value !== 'number') value = parseFloat(value);
        if (isNaN(value)) return;

        this.updateState('step', value);
    }

    /**
     * Will update the text field readonly state
     * @param {string} name
     * @param {boolean} value
     */
    updateMinMaxLengthState(name, value) {
        const parsedValue = parseInt(value);

        if (isNaN(parsedValue)) return;
        this.state[name] = value;
        if (name === 'minlength') this.inputElement.minLength = value;
        else this.inputElement.maxLength = value;
    }

    /**
     * Will update the text field readonly state
     * @param {boolean} value
     */
    updateReadonlyState(value) {
        if (this.readonly === value) return;

        if (this.readonly && !value) {
            this.inputElement.removeEventListener('keypress', this.disableInputBound);
        } else {
            this.inputElement.addEventListener('keypress', this.disableInputBound);
        }

        // Set the value to the input property. Do not use this.readonly = newValue because it will end up in infinite recursion.
        this.state.readonly = this.inputElement.readOnly = value;
    }

    /**
     * Will update the text field placeholder state
     * @param {boolean} value
     */
    updatePlaceholderState(value) {
        this.state.placeholder = this.placeholderElement.textContent = value || DEFAULT_PLACEHOLDER_VALUE;
        this.togglePlaceholder(!this.value);
    }

    /**
     * Will update the text field type state
     * @param {boolean} value
     */
    updateTypeState(value) {
        this.clearInputType(value);

        switch (value) {
            case supportedTextFieldTypes.TEXT:
            case supportedTextFieldTypes.EMAIL:
            case supportedTextFieldTypes.URL:
                this.inputElement.type = supportedTextFieldTypes.TEXT;
                this.state.type = value;
                break;
            case supportedTextFieldTypes.PASSWORD:
                this.state.type = this.inputElement.type = supportedTextFieldTypes.PASSWORD;
                break;
            case supportedTextFieldTypes.SEARCH:
                this.inputElement.type = supportedTextFieldTypes.TEXT;
                this.state.type = supportedTextFieldTypes.SEARCH;
                this.setSearchInput();
                break;
            case supportedTextFieldTypes.NUMBER:
                this.inputElement.type = supportedTextFieldTypes.TEXT;
                this.state.type = supportedTextFieldTypes.NUMBER;
                this.setNumberInput();
                break;
            default: this.state.type = this.inputElement.type = supportedTextFieldTypes.TEXT;
        }
    }

    /**
     * Will process the value if it is set on text field with type number
     * @param {string} value
     * @returns {string}
     */
    getProcessedValue(value) {
        if (this.type === supportedTextFieldTypes.NUMBER) {
            const isNegative = value.length && value[0] === '-';
            const newValue = value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
            return isNegative ? '-' + newValue : newValue;
        }

        return value;
    }

    /**
     * Will update the text field value state
     * @param {string|number} value
     */
    updateValueState(value) {
        this.inputElement.value = this.getProcessedValue(value);

        this.togglePlaceholder(!this.value);
    }

    /**
     * Will update the text field label state
     * @param {boolean} value
     */
    updateLabelState(value) {
        this.labelElement.classList.toggle('guic-hidden', !value);
        this.state.label = this.labelElement.textContent = value;
    }

    /**
     * Will update the text field disabled state
     * @param {boolean} value
     */
    updateDisabledState(value) {
        this.componentContainer.classList.toggle('guic-text-field-disabled', value);
        this.state.disabled = this.inputElement.disabled = value;
    }

    tooLong() {
        return TextFieldValidator.tooLong(this);
    }

    tooShort() {
        return TextFieldValidator.tooShort(this);
    }

    rangeOverflow() {
        if (this.type === supportedTextFieldTypes.NUMBER) return TextFieldValidator.rangeOverflow(this);
        return false;
    }

    rangeUnderflow() {
        if (this.type === supportedTextFieldTypes.NUMBER) return TextFieldValidator.rangeUnderflow(this);
        return false;
    }

    isBadURL() {
        if (this.type !== supportedTextFieldTypes.URL) return false;
        return TextFieldValidator.isBadURL(this);
    }

    isBadEmail() {
        if (this.type !== supportedTextFieldTypes.EMAIL) return false;
        return TextFieldValidator.isBadEmail(this);
    }

    /**
     * Initialize the custom component.
     * Set template, attach event listeners, setup initial state etc.
     * @param {object} data
    */
    init(data) {
        this.setupTemplate(data, () => {
            components$j.renderOnce(this);
            this.initTextField();
        });
    }

    connectedCallback() {
        components$j.loadResource(this)
            .then(this.init)
            .catch(err => console.error(err));
    }

    /* eslint-enable require-jsdoc */

    /**
     * Prevent any keypress events when the input is read only
     * @param {Event} event
     */
    disableInput(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    /**
     * Clears the events and hides controls for the search and number type when the new type has no input control
     * @param {string} newInputType
     */
    clearInputType(newInputType) {
        if (this.type === supportedTextFieldTypes.SEARCH && newInputType !== supportedTextFieldTypes.SEARCH) {
            this.hideSearchRemoveIcon();
            this.inputElement.removeEventListener('focus', this.showSearchRemoveIconBound);
            this.inputElement.removeEventListener('blur', this.hideSearchRemoveIconBound);
        }

        if (this.type === supportedTextFieldTypes.NUMBER && newInputType !== supportedTextFieldTypes.NUMBER) {
            this.hideNumberControl();
            this.inputElement.removeEventListener('input', this.onInputChangedBound);
            this.inputElement.removeEventListener('focus', this.showNumberControlBound);
            this.inputElement.removeEventListener('blur', this.hideNumberControlBound);
        }
    }

    /**
     * Displays the remove search icon if input control is enabled
     */
    showSearchRemoveIcon() {
        if (this.controlDisabled || this.readonly) return;

        this.searchRemoveElement.classList.remove('guic-hidden');
    }

    /**
     * Hides the remove search icon
     */
    hideSearchRemoveIcon() {
        this.searchRemoveElement.classList.add('guic-hidden');
    }

    /**
     * Displays the arrow icons if input control is enabled
     */
    showNumberControl() {
        if (this.controlDisabled || this.readonly) return;

        this.numberControlElement.classList.remove('guic-hidden');
        this.increaseInputValueElement.addEventListener('mousedown', this.stepUpBound);
        this.decreaseInputValueElement.addEventListener('mousedown', this.stepDownBound);
    }

    /**
     * Hides the arrow icons
     */
    hideNumberControl() {
        this.numberControlElement.classList.add('guic-hidden');
        this.increaseInputValueElement.removeEventListener('mousedown', this.stepUpBound);
        this.decreaseInputValueElement.removeEventListener('mousedown', this.stepDownBound);
    }

    /**
     * Sets events related to the input with type search
     */
    setSearchInput() {
        this.inputElement.addEventListener('focus', this.showSearchRemoveIconBound);
        this.inputElement.addEventListener('blur', this.hideSearchRemoveIconBound);
        this.inputElement.addEventListener('input', this.onInputChangedBound);
    }

    /**
     * Will set the default number value
     * @returns {void}
     */
    setDefaultInputNumberValue() {
        if (this.value === '') return;

        const parsedValue = parseFloat(this.value);
        if (isNaN(parsedValue)) this.value = '';
    }

    /**
     * Sets events related to the input with type number
     */
    setNumberInput() {
        this.setDefaultInputNumberValue();
        this.inputElement.addEventListener('focus', this.showNumberControlBound);
        this.inputElement.addEventListener('blur', this.hideNumberControlBound);
        this.inputElement.addEventListener('input', this.onInputChangedBound);
    }

    /**
     * Filter the input value and replace all characters that are not number or '.'
     * @param {Event} event
     */
    onInputChanged(event) {
        this.updateValueState(event.target.value);
    }

    /**
     * Will show/hide the placeholder of the input
     * @param {boolean} visible
     */
    togglePlaceholder(visible) {
        if (!this.placeholder) return;
        this.placeholderElement.classList.toggle('guic-hidden', !visible);
    }

    /**
     * Will clear interval and timeout that are set when the arrow from input number control is pressed
     */
    clearMousedownInterval() {
        document.removeEventListener('mouseup', this.clearMousedownIntervalBound);

        if (this.mousedownTimeout) {
            clearTimeout(this.mousedownTimeout);
            this.mousedownTimeout = null;
        }

        if (this.mousedownInterval) {
            clearInterval(this.mousedownInterval);
            this.mousedownInterval = null;
        }
    }

    /**
     * Adds an interval after a small timeout that will constantly bump up or down the number input value until the mouse is released
     * from the arrow of the input control
     * @param {Function} stepCallback - Should be some of stepUp or stepDown functions.
     */
    addAutoStepInterval(stepCallback) {
        document.addEventListener('mouseup', this.clearMousedownIntervalBound);

        if (!this.mousedownTimeout) {
            this.mousedownTimeout = setTimeout(() => {
                if (!this.mousedownInterval) {
                    this.mousedownInterval = setInterval(stepCallback.bind(this), 50);
                }
            }, 200);
        }
    }

    /**
     * Will set the auto step interval and bump up the input value
     * @param {Event} event
     */
    onStepUp(event) {
        this.addAutoStepInterval(this.stepUp);
        this.stepUp();
        event.preventDefault();
    }

    /**
     * Will set the auto step interval and bump down the input value
     * @param {Event} event
     */
    onStepDown(event) {
        this.addAutoStepInterval(this.stepDown);
        this.stepDown();
        event.preventDefault();
    }

    /**
     * Will change the input value if it meets the conditions
     * @param {number} nextStep
     */
    setNewStep(nextStep) {
        if (this.max !== undefined && nextStep > this.max) nextStep = this.max;
        if (this.min !== undefined && nextStep < this.min) nextStep = this.min;

        this.value = nextStep;
    }

    /**
     * Will bump up the input value based on the min and max restrinctions
     */
    stepUp() {
        if (this.type !== supportedTextFieldTypes.NUMBER) return;

        const currentValue = this.value === '' ? 0 : parseFloat(this.value);

        if (isNaN(currentValue)) return;

        const nextStep = this.step + currentValue;

        this.setNewStep(nextStep);
    }

    /**
     * Will bump down the input value based on the min and max restrinctions
     */
    stepDown() {
        if (this.type !== supportedTextFieldTypes.NUMBER) return;

        const currentValue = this.value === '' ? 0 : parseFloat(this.value);

        if (isNaN(currentValue)) return;

        const nextStep = currentValue - this.step;

        this.setNewStep(nextStep);
    }

    /**
     * Will migrate the attributes from the component element to the this context
     * @param {string} attrName
     * @param {any} defaultValue
     * @param {Array<string>} type
     * @param {Function} parseValueMethod
     * @param {Function} isAttrValueValid
     */
    initTextFieldAttribute(attrName, defaultValue, type, parseValueMethod, isAttrValueValid) {
        if (type.includes('boolean')) {
            this.updateAttributeState(attrName, this.hasAttribute(attrName) ? true : null);
            return;
        }

        if (!this.hasAttribute(attrName)) {
            this.updateAttributeState(attrName, defaultValue);
            return;
        }

        const attrValue = parseValueMethod ?
            parseValueMethod(this.getAttribute(attrName)) :
            this.getAttribute(attrName);

        if (isAttrValueValid) {
            this.updateAttributeState(attrName, !isAttrValueValid(attrValue) ? attrValue : defaultValue);
        } else {
            this.updateAttributeState(attrName, attrValue !== undefined ? attrValue : defaultValue);
        }
    }

    /**
     * Will init the text field attributes and migrate their values to the this context
     */
    initTextFieldAttributes() {
        // we need to set default readOnly to the input element because the readonly getter here is working with it
        this.inputElement.readOnly = false;

        for (const attribute of TEXT_FIELD_ATTRIBUTES) {
            const { name, defaultValue, type, parseMethod, isAttrValueValidMethod } = attribute;
            this.initTextFieldAttribute(name, defaultValue, type, parseMethod, isAttrValueValidMethod);
        }
    }

    /**
     * Will propagate passed system event to the component element. For example blur and focus events from the
     * input inside the template are not propagated up so we do this trick.
     * @param {Event} event
     */
    propagateEventFromInputToTextField(event) {
        const newEvent = new Event(event.type, event);
        this.dispatchEvent(newEvent);
    }

    /**
     * Add listeners to the component elements
     */
    addTextFieldListeners() {
        this.searchRemoveElement.addEventListener('mousedown', (event) => {
            this.updateValueState('');
            event.preventDefault();
            event.stopPropagation();
        });

        this.inputElement.addEventListener('blur', (event) => {
            if (!this.value) this.togglePlaceholder(true);
            this.propagateEventFromInputToTextField(event);
        });

        this.inputElement.addEventListener('focus', (event) => {
            if (!this.readonly) this.togglePlaceholder(false);
            this.propagateEventFromInputToTextField(event);
        });

        this.placeholderElement.addEventListener('click', (event) => {
            this.inputElement.focus();
        });
    }

    /**
     * Cache the component elements
     */
    initTextFieldElements() {
        this.componentContainer = this.querySelector('.guic-text-field-container');
        this.inputElement = this.querySelector('.guic-text-field');
        this.labelElement = this.querySelector('.guic-text-field-label');
        this.searchRemoveElement = this.querySelector('.guic-search-remove');
        this.numberControlElement = this.querySelector('.guic-number-control');
        this.placeholderElement = this.querySelector('.guic-text-field-placeholder');
        this.increaseInputValueElement = this.querySelector('.guic-number-increase');
        this.decreaseInputValueElement = this.querySelector('.guic-number-decrease');
    }

    /**
     * Initialize the text field component
     */
    initTextField() {
        // this should be always first because we cache the textfield inner elements in this method!
        this.initTextFieldElements();
        this.addTextFieldListeners();
        this.initTextFieldAttributes();

        if (!this.value) {
            this.togglePlaceholder(true);
        }
    }
}
components$j.defineCustomElement('gameface-text-field', TextField);

var template$c = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-tabs-wrapper\">    <div class=\"guic-tabs-header\">        <component-slot data-name=\"tab\">            <tab-heading slot=\"tab\">First Tab</tab-heading>            <tab-heading slot=\"tab\">Second Tab</tab-heading>        </component-slot>    </div>    <div class=\"guic-tabs-panel\">        <component-slot data-name=\"panel\">            <tab-panel slot=\"panel\">First Tab Content</tab-panel>            <tab-panel slot=\"panel\">Second Tab Content</tab-panel>        </component-slot>    </div></div>";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$i = new Components();

let tabsCounter = 0;
let panelsCounter = 0;

const KEYCODES$6 = components$i.KEYCODES;
const BaseComponent$c = components$i.BaseComponent;

/**
 * Class definition of the gameface-tabs custom element
 */
class Tabs extends BaseComponent$c {
    /* eslint-disable require-jsdoc */
    constructor() {
        super();

        this.template = template$c;

        // bind the scope to this so that we can access the current instance
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onClick = this.onClick.bind(this);

        this.url = '/components/tabs/template.html';
        this.init = this.init.bind(this);
    }

    /**
     * Initialize the custom component.
     * Set template, attach event listeners, setup initial state etc.
     * @param {object} data
    */
    init(data) {
        this.setupTemplate(data, () => {
            // render the component
            components$i.renderOnce(this);

            this.tabSlot = this.querySelector('[data-name="tab"]');
            this.panelSlot = this.querySelector('[data-name="panel"]');

            this.attachEventListeners();
        });
    }

    connectedCallback() {
        this.tabs = this.getElementsByTagName('tab-heading');
        this.panels = this.getElementsByTagName('tab-panel');

        components$i.loadResource(this)
            .then(this.init)
            .catch(err => console.error(err));
    }

    /* eslint-enable require-jsdoc */

    /**
     * Called when the user clicks on the tab component.
     * @param {MouseEvent} event - the event object.
    */
    onClick(event) {
        this.selectTab(event.currentTarget);
    }

    /**
     * Gets a panel which should be opened by a specific tab.
     * @param {TabHeading} tab - a tab heading element.
     * @returns {HTMLElement} - the panel.
    */
    getPanelForTab(tab) {
        return this.querySelector(`tab-panel[index="${tab.getAttribute('index')}"]`);
    }

    /**
     * Gets all TabHeading child elements of the current Tab component.
     * @returns {Array<TabHeading>} - the tabs of the tab component.
    */
    getAllTabs() {
        return Array.from(this.querySelector('.guic-tabs-header').querySelectorAll('tab-heading'));
    }

    /**
     * Gets all TabPanel child element of the current Tab component.
     * @returns {Array<TabPanel>} - the panels of the tab component.
    */
    getAllPanels() {
        const panels = [];
        let tabsPanel = this.querySelector(`.guic-tabs-panel`);
        // If is used <gameface-tabs> without filling the slots we need to get the children of the component-slot element
        if (tabsPanel.children.length === 1 && tabsPanel.children[0].tagName === 'COMPONENT-SLOT') {
            tabsPanel = tabsPanel.children[0];
        }
        Array.from(tabsPanel.children).forEach((child) => {
            if (child instanceof TabPanel) panels.push(child);
        });
        return panels;
    }

    /**
     * Sets all tabs and panels in an inactive state.
     * No tab is selected and no panel is visible.
    */
    reset() {
        const tabs = this.getAllTabs();
        const panels = this.getAllPanels();

        tabs.forEach(tab => tab.selected = false);
        panels.forEach(panel => panel.selected = false);
    }

    /**
     * Attaches the keydown and click event listeners for keyboard and mouse
     * controls respectively.
    */
    attachEventListeners() {
        this.addEventListener('keydown', this.onKeyDown);

        const tabHeadings = this.getAllTabs();

        for (const tabHeading of tabHeadings) {
            tabHeading.addEventListener('click', this.onClick);
        }
    }
    /**
     * Sets a tab and its corresponding panel in an active state.
     * The tab is highlighted and the panel is visible.
     * @param {TabHeading} newTab - the tab which has been clicked on.
    */
    selectTab(newTab) {
        // Deselect all tabs and hide all panels.
        this.reset();
        // Get the panel that the `newTab` is associated with.
        const newPanel = this.getPanelForTab(newTab);
        // If that panel doesn’t exist, abort.
        if (!newPanel) {
            console.error(`Could not find tab panel corresponding to tab ${newPanel}`);
            return;
        }
        newTab.selected = true;
        newPanel.selected = true;
        // Show scrollbar inside the tabs panel because if the panel has been hidden then the scrollable container will be
        // hidden as well and that is why here we force it to recalculate if it should be visible or not.
        newPanel.querySelectorAll('gameface-scrollable-container').forEach(el => el.shouldShowScrollbar());
        newTab.focus();
    }

    /**
     * Gets the previous tab in the tabs list.
     * If the current tab is the first one - returns the last tab.
     * @returns {TabHeading} - the previous tab.
    */
    getPrevTab() {
        const tabs = this.getAllTabs();

        const newIdx = tabs.findIndex(tab => tab.selected) - 1;
        // Add `tabs.length` to make sure the index is a positive number
        // and get the modulus to wrap around if necessary.
        return tabs[(newIdx + tabs.length) % tabs.length];
    }

    /**
     * Gets the first tab in the tabs list.
     * @returns {TabHeading} - the first tab.
    */
    getFirstTab() {
        const tabs = this.getAllTabs();
        return tabs[0];
    }

    /**
     * Gets the next tab in the tabs list.
     * If the current tab is the last one - returns the first tab.
     * @returns {TabHeading} - the next tab.
    */
    getNextTab() {
        const tabs = this.getAllTabs();
        const newIdx = tabs.findIndex(tab => tab.selected) + 1;
        return tabs[newIdx % tabs.length];
    }

    /**
     * Gets the last tab.
     * @returns {TabHeading}
    */
    getLastTab() {
        const tabs = this.getAllTabs();
        return tabs[tabs.length - 1];
    }

    /**
     * Called on keydown.
     * Gets the currently pressed key from the event and calls a function based
     * on the key code.
     * @param {KeyboardEvent} event - the event object
    */
    onKeyDown(event) {
        if (event.target.tagName.toLowerCase() !== 'tab-heading' || event.altKey) return;

        // The switch-case will determine which tab should be marked as active
        // depending on the key that was pressed.
        let newTab;
        switch (event.keyCode) {
            case KEYCODES$6.LEFT:
            case KEYCODES$6.UP:
                newTab = this.getPrevTab();
                break;

            case KEYCODES$6.RIGHT:
            case KEYCODES$6.DOWN:
                newTab = this.getNextTab();
                break;

            case KEYCODES$6.HOME:
                newTab = this.getFirstTab();
                break;

            case KEYCODES$6.END:
                newTab = this.getLastTab();
                break;
            default:
                return;
        }

        event.preventDefault();
        this.selectTab(newTab);
    }
}

/**
 * Class definition of the tab heading custom element
 */
class TabHeading extends HTMLElement {
    /* eslint-disable require-jsdoc */
    static get observedAttributes() {
        return ['selected'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isRendered) return;

        if (name === 'selected') this.updateSelectedState(newValue !== null);
    }

    get selected() {
        return this._selected;
    }

    set selected(value) {
        if (value) {
            this.setAttribute('selected', '');
        } else {
            this.removeAttribute('selected');
        }
    }

    updateSelectedState(value) {
        this._selected = value;

        if (value) {
            this.classList.add('guic-tabs-active-tab');
        } else {
            this.classList.remove('guic-tabs-active-tab');
        }

        this.setAttribute('tabindex', value ? '0' : '-1');
    }

    get index() {
        return this._index;
    }

    set index(value) {
        this._index = value;
        this.setAttribute('index', value);
    }

    constructor() {
        super();

        this._selected = false;
    }

    connectedCallback() {
        if (!this.index) {
            this.index = `${tabsCounter++}`;
        }

        this.updateSelectedState(this.hasAttribute('selected'));
        this.isRendered = true;
    }
    /* eslint-enable require-jsdoc */
}

/**
 * Class definition of the tab panel custom element
 */
class TabPanel extends HTMLElement {
    /* eslint-disable require-jsdoc */

    static get observedAttributes() {
        return ['selected'];
    }

    get selected() {
        return this._selected;
    }

    set selected(value) {
        if (value) {
            this.setAttribute('selected', '');
        } else {
            this.removeAttribute('selected');
        }
    }

    updateSelectedState(value) {
        this._selected = value;

        if (value) {
            this.classList.add('guic-tabs-active-panel');
        } else {
            this.classList.remove('guic-tabs-active-panel');
        }

        this.style.display = value ? 'block' : 'none';
    }

    get index() {
        return this._index;
    }

    set index(value) {
        this._index = value;
        this.setAttribute('index', value);
    }

    constructor() {
        super();

        this._selected = false;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isRendered) return;

        if (name === 'selected') this.updateSelectedState(newValue !== null);
    }

    connectedCallback() {
        if (!this.index) {
            this.index = `${panelsCounter++}`;
        }

        this.updateSelectedState(this.hasAttribute('selected'));
        this.isRendered = true;
    }
    /* eslint-enable require-jsdoc */
}

components$i.defineCustomElement('gameface-tabs', Tabs);
components$i.defineCustomElement('tab-heading', TabHeading);
components$i.defineCustomElement('tab-panel', TabPanel);

var textInside = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-switch-toggle-container\">    <div class=\"guic-switch-toggle guic-switch-toggle-text-inside\">        <div class=\"guic-switch-toggle-true guic-switch-text-hidden\">            <component-slot data-name=\"switch-checked\"></component-slot>        </div>        <div class=\"guic-switch-toggle-false\">            <component-slot data-name=\"switch-unchecked\"></component-slot>        </div>        <div class=\"guic-switch-toggle-handle\"></div>    </div></div>";

var textOutside = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-switch-toggle-container\">    <div class=\"guic-switch-toggle-false\">        <component-slot data-name=\"switch-unchecked\"></component-slot>    </div>    <div class=\"guic-switch-toggle\">        <div class=\"guic-switch-toggle-handle\"></div>    </div>    <div class=\"guic-switch-toggle-true\">        <component-slot data-name=\"switch-checked\"></component-slot>    </div></div>";

/* eslint-disable linebreak-style */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$h = new Components();
const CustomElementValidator$3 = components$h.CustomElementValidator;

/**
 * Switch component, that allows you to switch between true and false
 */
class Switch extends CustomElementValidator$3 {
    // eslint-disable-next-line require-jsdoc
    static get observedAttributes() { return ['checked', 'disabled', 'type']; }

    // eslint-disable-next-line require-jsdoc
    get value() {
        const value = this.getAttribute('value');
        if (this.isFormElement(this)) return value || 'on';
        return value;
    }

    // eslint-disable-next-line require-jsdoc
    set value(value) {
        this.setAttribute('value', value);
    }

    // eslint-disable-next-line require-jsdoc
    get name() {
        return this.getAttribute('name');
    }

    // eslint-disable-next-line require-jsdoc
    set name(value) {
        this.setAttribute('name', value);
    }

    // eslint-disable-next-line require-jsdoc
    get type() {
        return this.state.type;
    }

    // eslint-disable-next-line require-jsdoc
    set type(value) {
        this.setAttribute('type', value);
    }

    // eslint-disable-next-line require-jsdoc
    get disabled() {
        return this.state.disabled;
    }

    // eslint-disable-next-line require-jsdoc
    set disabled(value) {
        value ? this.setAttribute('disabled', '') : this.removeAttribute('disabled');
    }

    // eslint-disable-next-line require-jsdoc
    get checked() {
        return this.state.checked;
    }

    // eslint-disable-next-line require-jsdoc
    set checked(value) {
        value ? this.setAttribute('checked', '') : this.removeAttribute('checked');
    }

    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
        this.init = this.init.bind(this);

        this.stateSchema = {
            checked: { type: ['boolean'] },
            disabled: { type: ['boolean'] },
            type: { type: ['string'] },
        };

        this.state = {
            type: '',
            checked: false,
            disabled: false,
        };
    }

    /**
     * Custom element lifecycle method. Called when an attribute is changed.
     * @param {string} name
     * @param {string} oldValue
     * @param {string|boolean} newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isRendered) return;

        this.updateAttributeState(name, newValue);
    }

    /**
     * Will update the state properties linked with the checkbox attributes
     * @param {string} name
     * @param {string|boolean} value
     */
    updateAttributeState(name, value) {
        switch (name) {
            case 'checked':
                this.updateCheckedState(value !== null);
                break;
            case 'disabled':
                this.updateDisabledState(value !== null);
                break;
            case 'type':
                this.reRender();
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
     * Update the switch's disabled state.
     * Set relevant styles and tabindex.
     * @param {boolean} value
     */
    updateDisabledState(value) {
        this.updateState('disabled', value);
        this.toggleDisabled(value);
    }

    /**
     * Update the state of the switch and its style
     * @param {boolean} value - whether the switch is checked or not
     */
    updateCheckedState(value) {
        this.updateState('checked', value);
        this.dispatchEvent(new CustomEvent('switch_toggle', { detail: value }));
        this.toggleClasses(value);
    }

    /**
     * Initialize the custom component.
     * Set template, attach event listeners, setup initial state etc.
     * @param {object} data
    */
    init(data) {
        this.setupTemplate(data, () => {
            // Render the template
            components$h.renderOnce(this);

            // Set the elements of the switch we'll be changing depending if it's checked or not
            this._switch = this.querySelector('.guic-switch-toggle');
            this._handle = this.querySelector('.guic-switch-toggle-handle');
            this._textChecked = this.querySelector('.guic-switch-toggle-true');
            this._textUnchecked = this.querySelector('.guic-switch-toggle-false');

            this.setup();
        });
    }

    /**
     * Called when the element is attached to the DOM
     */
    connectedCallback() {
        this.state.disabled = this.hasAttribute('disabled');
        this.state.checked = this.hasAttribute('checked');

        // The type of the switch. There are currently 3 possible - default, inset and text-inside
        this.state.type = this.getAttribute('type');

        // Helpers for easy readability
        this._isDefault = this.state.type !== 'inset' && this.state.type !== 'text-inside';
        this._isInset = this.state.type === 'inset';
        this._isTextInside = this.state.type === 'text-inside';

        // Set the template based if the text is inside or outside
        this.template = this._isTextInside ? textInside : textOutside;

        // Load the template
        components$h
            .loadResource(this)
            .then(this.init)
            .catch(err => console.error(err));
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
     * Checks if the switch value is missing
     * @returns {boolean}
     */
    valueMissing() {
        if (this.isRequired() && !this.checked) return true;
        return false;
    }

    /**
     * Checks if the switch should be serialized when it is set inside a gameface form control element
     * @returns {boolean}
     */
    willSerialize() {
        if (!this.checked || this.nameMissing()) return false;
        return true;
    }

    /**
     * Sets up the switch based on the attributes it has and attaches the event listeners
     */
    setup() {
        if (this._isDefault) this._handle.classList.add('guic-switch-toggle-handle-default');
        if (this._isInset) this._switch.classList.add('guic-switch-toggle-inset');
        this.toggleClasses(this.checked);
        this.toggleDisabled(this.disabled);

        this.attachEventListeners();
    }

    // eslint-disable-next-line require-jsdoc
    attachEventListeners() {
        this.firstChild.addEventListener('mousedown', this.onClick);
    }

    /**
     * Changes the styles of the switch and if it's checked
     */
    onClick() {
        this.checked = !this.checked;
    }

    /**
     * Changes the classes of the switch elements
     * @param {boolean} checked
     */
    toggleClasses(checked = false) {
        this._handle.classList.toggle('guic-switch-toggle-handle-checked', checked);
        this._switch.classList.toggle('guic-switch-toggle-checked', checked);

        if (this._isTextInside) {
            this._textChecked.classList.toggle('guic-switch-text-hidden', checked ? false : true);
            this._textUnchecked.classList.toggle('guic-switch-text-hidden', checked ? true : false);
        }
    }

    /**
     * Toggles the disabled state of the switch. Can be used externaly to enable or disabled the switch
     * @param {boolean} disabled
     */
    toggleDisabled(disabled = false) {
        this.firstChild.classList.toggle('guic-switch-toggle-disabled', disabled);
    }
}
components$h.defineCustomElement('gameface-switch', Switch);

var template$b = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-stepper\">    <div class=\"guic-stepper-button guic-stepper-left\"></div>    <div class=\"guic-stepper-value\"></div>    <div class=\"guic-stepper-button guic-stepper-right\"></div></div>";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$g = new Components();

const { BaseComponent: BaseComponent$b } = components$g;

/**
 * Class description
 */
class Stepper extends BaseComponent$b {
    // eslint-disable-next-line require-jsdoc
    static get observedAttributes() { return ['value']; }

    /* eslint-disable require-jsdoc */
    constructor() {
        super();

        this.itemElements = [];
        this._items = [];
        this.selectedIndex = 0;
        this.template = template$b;

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.init = this.init.bind(this);

        this.stateSchema = { value: { type: ['string'] } };
        this.state = { value: '' };
    }

    get value() {
        return this.state.value;
    }

    set value(value) {
        this.setAttribute('value', value);
    }

    /**
     * Will set new items array to the stepper component and will verify the array
     * After that will reset the value of the stepper if it does not exist in the new items array
     * @param {Array<string>} value
     */
    set items(value) {
        if (!Array.isArray(value)) {
            console.warn('Can\'t set non array value to gameface-stepper items');
            return;
        }
        if (!value.length) {
            console.warn('Can\'t set an empty array value to gameface-stepper items');
            return;
        }

        const nonStringItems = value.filter(el => typeof el !== 'string');
        if (nonStringItems.length) {
            console.warn(`Can't set an array values that are not strings to gameface-stepper items. [${nonStringItems.join(', ')}]`);
            return;
        }

        this._items = value;

        // If the value does not exists in the new items array then change it to default one
        // and warn the user for this change
        this.selectedIndex = this.getSelectedIndex(this.value);
        if (this.selectedIndex !== -1) return;

        console.warn(`The current value '${this.value}' is not a member of the items. Will set the first item from the items array as value - '${this.items[0]}'`);
        this.value = this.items[0];
    }

    get items() {
        return this._items;
    }

    /**
     * Custom element lifecycle method. Called when an attribute is changed.
     * @param {string} name
     * @param {string} oldValue
     * @param {string|boolean} newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isRendered) return;

        if (name === 'value') this.updateValueState(newValue);
    }

    /**
     * Update the stepper's state.
     * @param {string} name - the name of the prop
     * @param {string | boolean} value - the value of the the prop
     * @returns {void}
     */
    updateState(name, value) {
        if (!this.isStatePropValid(name, value)) return false;
        this.state[name] = value;
    }

    /**
     * Will update the value state of the stepper item
     * @param {boolean} value
     * @returns {boolean} - If the value state has been succesfully updated
     */
    updateValueState(value) {
        const newValueIndex = this.getSelectedIndex(value);
        if (newValueIndex === -1) {
            console.warn(`The '${value}' does not exists in the items array of the gameface-stepper component.`);
            return false;
        }

        this.updateState('value', value);
        this.selectedIndex = newValueIndex;
        this.valueElement.textContent = value;
        return true;
    }

    init(data) {
        this.setupTemplate(data, () => {
            components$g.renderOnce(this);

            this.leftButton = this.querySelector('.guic-stepper-left');
            this.rightButton = this.querySelector('.guic-stepper-right');
            this.valueElement = this.querySelector('.guic-stepper-value');
            const valueAttr = this.getAttribute('value');
            // If there is no `value` attribute then set the stepper value to default
            if (valueAttr === null) this.value = this.items[0];
            // Try to update the state with the passed value and if it is invalid set the stepper value to default
            else if (!this.updateValueState(valueAttr)) {
                console.warn(`Will set the first item from the items array as value - '${this.items[0]}'`);
                this.value = this.items[0];
            }
            this.attachListeners();
        });
    }

    connectedCallback() {
        this.itemElements = Array.from(this.querySelectorAll('gameface-stepper-item'));
        this._items = this.getItems();

        components$g
            .loadResource(this)
            .then(this.init)
            .catch(err => console.error(err));
    }

    disconnectedCallback() {
        this.detachListeners();
    }

    /* eslint-enable require-jsdoc */

    /**
     * Returns an array of stepper items
     * @returns {Array} Array of stepper items
     */
    getItems() {
        let items = this.itemElements.map(item => item.textContent);

        if (items.length === 0) {
            items = ['true', 'false'];
        }

        return items;
    }

    /**
     * Returns the index of the selected item
     * @param {string} value
     * @returns {Number} Returns the index of the selected item
     */
    valueExists(value) {
        if (!this.items.length) return false;

        const index = this.items.findIndex(item => item === value);

        return index === -1 ? false : true;
    }

    /**
     * Returns the index of the selected item
     * @param {string} value
     * @returns {Number} Returns the index of the selected item
     */
    getSelectedIndex(value) {
        return this.items.findIndex(item => item === value);
    }

    /**
     * Attaches event listeners to the buttons
     */
    attachListeners() {
        this.leftButton.addEventListener('click', this.prev);
        this.rightButton.addEventListener('click', this.next);
    }

    /**
     * Detaches event listeners from the buttons
     */
    detachListeners() {
        this.leftButton && this.leftButton.removeEventListener('click', this.prev);
        this.rightButton && this.rightButton.removeEventListener('click', this.next);
    }

    /**
     * Selects the previous item
     * @returns {void}
     */
    prev() {
        if (this.selectedIndex === 0) return;

        this.value = this.items[this.selectedIndex - 1];
    }

    /**
     * Selects the next item
     * @returns {void}
     */
    next() {
        if (this.selectedIndex === this.items.length - 1) return;

        this.value = this.items[this.selectedIndex + 1];
    }
}
components$g.defineCustomElement('gameface-stepper', Stepper);

var verticalTemplate$1 = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-vertical-slider-wrapper\">    <div class=\"guic-slider-vertical-arrow up\"><div class=\"guic-slider-arrow-up\"></div></div>    <div class=\"guic-slider-vertical-slider\">        <div class=\"guic-slider-vertical-handle handle\"></div>    </div>    <div class=\"guic-slider-vertical-arrow down\"><div class=\"guic-slider-arrow-down\"></div></div></div>";

var horizontalTemplate$1 = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-horizontal-slider-wrapper\">    <div class=\"guic-slider-horizontal-arrow up\"><div class=\"guic-slider-arrow-left\"></div></div>    <div class=\"guic-slider-horizontal-slider\">        <div class=\"guic-slider-horizontal-handle handle\"></div>    </div>    <div class=\"guic-slider-horizontal-arrow down\"><div class=\"guic-slider-arrow-right\"></div></div></div>";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const orientationUnitsNames$1 = new Map([
    ['vertical', {
        mouseAxisCoords: 'clientY',
        size: 'height',
        sizePX: 'heightPX',
        position: 'top',
        scroll: 'scrollHeight',
        offset: 'offsetHeight',
    }],
    ['horizontal', {
        mouseAxisCoords: 'clientX',
        size: 'width',
        sizePX: 'widthPX',
        position: 'left',
        scroll: 'scrollWidth',
        offset: 'offsetWidth',
    }],
]);

/* eslint-disable linebreak-style */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$f = new Components();

const BaseComponent$a = components$f.BaseComponent;

/**
 * Slider component; can be independently or as a building block of another
 * component - for example a scrollbar. This is a custom slider control, do not
 * confuse with the standard input type slider HTML element.
*/
class Slider extends BaseComponent$a {
    // eslint-disable-next-line require-jsdoc
    static get observedAttributes() { return ['step', 'orientation']; }

    /**
     * Set the position of the slider's handler.
     * @param {number} value - the new value in percents.
    */
    set handlePosition(value) {
        this._handlePosition = value;
        // The names of the units vary depending on the orientation
        // of the slider - width for horizontal, height for vertical etc.
        this.handle.style[this.units.position] = value + '%';
    }

    /**
     * Get the current position of the slider's handle in percents.
     * @returns {number} - the value of the position.
    */
    get handlePosition() {
        return this._handlePosition;
    }

    /**
     * Get the current position of the slider's handle in pixels.
     * @returns {number} - the value of the position.
    */
    get handlePositionPx() {
        const sliderSize = this.slider[this.units.offset];
        return this.handlePosition / 100 * sliderSize;
    }

    // eslint-disable-next-line require-jsdoc
    get step() { return this.state.step; }

    // eslint-disable-next-line require-jsdoc
    set step(value) { this.setAttribute('step', value); }

    // eslint-disable-next-line require-jsdoc
    get orientation() { return this.state.orientation; }

    // eslint-disable-next-line require-jsdoc
    set orientation(value) { this.setAttribute('orientation', value); }

    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();

        this.onSlideUp = (e) => { this.onSlideWithArrorws(-1); };
        this.onSlideDown = (e) => { this.onSlideWithArrorws(1); };
        this.onClick = this.onClick.bind(this);
        this.onWheel = this.onWheel.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.init = this.init.bind(this);

        this.state = {
            orientation: 'vertical',
            step: 10,
        };

        this.stateSchema = {
            orientation: { type: ['string'] },
            step: { type: ['number'] },
        };
    }

    /**
     * Custom element lifecycle method. Called when an attribute is changed.
     * @param {string} name
     * @param {string} oldValue
     * @param {string|boolean} newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isRendered) return;

        this.updateAttributeState(name, oldValue, newValue);
    }

    /**
     * Will update the state properties
     * @param {string} name
     * @param {string} oldValue
     * @param {string} value
     */
    updateAttributeState(name, oldValue, value) {
        // Prevent state updates if the value is the same especially when orientation is changed because then the whole component will be re-rendered
        if (oldValue === value) return;

        switch (name) {
            case 'step':
                this.updateState('step', parseFloat(value));
                break;
            case 'orientation':
                this.updateOrientationState(value);
                break;
        }
    }

    /**
     * Update the slider's state.
     * @param {string} name - the name of the prop
     * @param {string | boolean} value - the value of the the prop
     * @returns {void}
     */
    updateState(name, value) {
        if (!this.isStatePropValid(name, value)) return;
        this.state[name] = value;
    }

    /**
     * Will update the slider when orientation attribute is changed
     * @param {boolean} value
     */
    updateOrientationState(value) {
        this.checkOrientationValueValidity(value);
        this.reRender();
    }

    /**
     * Will verify that the orientation has valid value and will fallback if not
     * @param {string} value
     */
    checkOrientationValueValidity(value) {
        if (!['vertical', 'horizontal'].includes(value)) {
            console.warn(`'${value}' is not a valid orientation. It should be either 'horizontal' or 'vertical'. Will fallback to 'vertical'`);
        }
    }

    /**
     * Will re-render the component from scratch
     */
    reRender() {
        this.template = undefined;
        this.isRendered = false;
        this.connectedCallback();
    }

    /**
     * Initialize the custom component.
     * Set template, attach event listeners, setup initial state etc.
     * @param {object} data
    */
    init(data) {
        this.setupTemplate(data, () => {
            // render the template
            components$f.renderOnce(this);
            // do the initial setup - add event listeners, assign members
            this.setup();
        });
    }


    /**
     * Called when the element was attached to the DOM.
    */
    connectedCallback() {
        // the amount of units that the slider will be updated
        this.state.step = this.getAttribute('step') || 10;
        // the initial position of the handle
        this._handlePosition = 0;

        // vertical or horizontal
        this.state.orientation = this.getAttribute('orientation');
        if (!['vertical', 'horizontal'].includes(this.orientation)) this.state.orientation = 'vertical';
        // use the template for the current slider orientation
        this.template = (this.orientation === 'vertical') ? verticalTemplate$1 : horizontalTemplate$1;
        /**
         * The names of the units are different for the two slider types.
         * ['clientY', 'height', 'heightPX', 'top', 'scrollHeight] for vertical and
         * ['clientX', 'width', 'widthPX', 'left', 'scrollWidth] for horizontal
        */
        this.units = orientationUnitsNames$1.get(this.orientation);

        // Load the template
        components$f.loadResource(this)
            .then(this.init)
            .catch(err => console.error(err));
    }

    /**
     * Set the slider and handle members and add event listeners.
    */
    setup() {
        this.slider = this.getElementsByClassName(`guic-slider-${this.orientation}-slider`)[0];
        this.handle = this.getElementsByClassName(`guic-slider-${this.orientation}-handle`)[0];

        this.attachEventListeners();
    }

    // eslint-disable-next-line require-jsdoc
    disconnectedCallback() {
        this.removeEventListeners();
    }
    /**
     * Gets the size of an element in px.
     * @param {HTMLElement} element
     * @returns {number} - the size in pixels.
    */
    getElementSize(element) {
        const unitsName = this.units.offset;
        return element[unitsName];
    }

    /**
     * Update the size of the slider thumb.
     * This function is used from within the Scrollable Container Component only.
     * @param {HTMLElement} scrollableContainer
    */
    resize(scrollableContainer) {
        const sliderWrapper = this.querySelector(`.guic-${this.orientation}-slider-wrapper`);
        let scrollableContainerComponent = null;
        // We do it like that because in Gameface such syntax - scrollableContainer?.parentElement?.parentElement; is not woking
        if (scrollableContainer && scrollableContainer.parentElement) {
            scrollableContainerComponent = scrollableContainer.parentElement;
        }
        if (scrollableContainerComponent && scrollableContainerComponent.parentElement) {
            scrollableContainerComponent = scrollableContainerComponent.parentElement;
        }

        const scrollableContainerSize = this.getElementSize(scrollableContainer);
        if (scrollableContainerComponent.tagName === 'GAMEFACE-SCROLLABLE-CONTAINER' && !scrollableContainerComponent.hasAttribute('fixed-slider-height')) {
            // set the slider wrapper to be as big as the scrollable container
            sliderWrapper.style.height = `${scrollableContainerSize}px`;
        } else {
            // remove height property from the slider if the fixed-slider-height attribute is set dynamically
            sliderWrapper.style.height = '';
        }

        // Wait 1 layout frame so the the new slider height has taken effect set from the prev lines
        components$f.waitForFrames(() => {
            // get the size of the slider area
            const sliderSize = this.slider[this.units.offset];
            // get the size of the handle in percents relative to the current scroll(Height/Width)
            const handleSizePercent = (sliderSize / scrollableContainer[this.units.scroll]) * 100;
            // get the size of the handle in px;
            const handleSize = (scrollableContainerSize / 100) * handleSizePercent;
            // set the new size of the handle
            this.handle.style[this.units.size] = handleSize + 'px';

            this.scrollTo(this.handlePositionPx);
            if (this.style.visibility === 'hidden') this.style.visibility = 'visible';
        });
    }

    /**
     * Remove event listeners.
     */
    removeEventListeners() {
        // document listeners
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    }

    /**
     * Add event listeners to handle user interaction.
    */
    attachEventListeners() {
        // local listeners
        this.slider.addEventListener('click', this.onClick);
        this.slider.addEventListener('wheel', this.onWheel);
        this.handle.addEventListener('mousedown', this.onMouseDown);
        this.querySelector('.up').addEventListener('mousedown', this.onSlideUp);
        this.querySelector('.down').addEventListener('mousedown', this.onSlideDown);

        // document listeners
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }

    /**
     * Executed on mousedown. Moves the handle towards the position of the mouse
     * with one step.
     * @param {MouseEvent} event
    */
    onMouseDown(event) {
        // set a flag to help the detection of drag
        this.mousedown = true;
        // get the bounding rectangles of the slider area and the handle
        const handleRect = this.handle.getBoundingClientRect();
        const sliderRect = this.slider.getBoundingClientRect();

        // get the current position of the slider (top or left)
        const sliderY = sliderRect[this.units.position];
        // get the handle position within the slider's coordinates
        const handleY = handleRect[this.units.position] - sliderY;
        const mouseY = event[this.units.mouseAxisCoords] - sliderY;

        // set the difference between the mouse click and the handle position
        // used for better looking drag
        this.delta = mouseY - handleY;
    }

    /**
     * Called on mouseup.
     * Resets the mousedown, dragging and slidingWithArrows properties
     * and clears intervals.
    */
    onMouseUp() {
        this.mousedown = false;
        this.dragging = false;

        if (this.slidingWithArrows) {
            this.slidingWithArrows = false;
            clearInterval(this.interval);
        }
    }

    /**
     * Called on mousemove.
     * Detects dragging and scrolls to the current position of the mouse.
     * @param {MouseEvent} event
    */
    onMouseMove(event) {
        if (!this.mousedown) return;
        this.dragging = true;
        const sliderRect = this.slider.getBoundingClientRect();
        // get the mouse position within the slider coordinates
        const mouseY = event[this.units.mouseAxisCoords] - sliderRect[this.units.position];
        this.scrollTo(mouseY - this.delta);
    }

    /**
     * Called when the arrow controls are used for sliding.
     * Starts an interval and updates the slider position until mouseup occurs.
     * @param {number} direction - 1 for down, -1 for up
    */
    onSlideWithArrorws(direction) {
        this.slidingWithArrows = true;
        this.interval = setInterval(() => this.scrollTo(this.getNextScrollPosition(direction, this.step)), 10);
    }

    /**
     * Scrolls the a given position in percents.
     * Used from the scrollable container
     * @param {number} position
    */
    scrollToPercents(position) {
        const handleRect = this.handle.getBoundingClientRect();
        const sliderRect = this.slider.getBoundingClientRect();
        const handleSizePercent = (handleRect[this.units.size] / sliderRect[this.units.size]) * 100;

        // the slider range in percents is [0 - 100 - handleSizePercent]
        // if the new position is outside of this range - snap the handle and
        // scroll to the top or to the bottom
        if (position < 0) position = 0;
        if (position + handleSizePercent > 100) position = 100 - handleSizePercent;
        this.handlePosition = position;
    }

    /**
     * Scrolls the a given position.
     * @param {number} position
    */
    scrollTo(position) {
        const handleRect = this.handle.getBoundingClientRect();
        const sliderRect = this.slider.getBoundingClientRect();

        const handleSizePercent = (handleRect[this.units.size] / sliderRect[this.units.size]) * 100;
        // new position in %
        let newPosPercents = (position / sliderRect[this.units.size]) * 100;

        // the slider range in percents is [0 - 100 - handleSizePercent]
        // if the new position is outside of this range - snap the handle and
        // scroll to the top or to the bottom
        if (newPosPercents < 0) newPosPercents = 0;
        if (newPosPercents + handleSizePercent > 100) newPosPercents = 100 - handleSizePercent;
        this.handlePosition = newPosPercents;

        // dispatch an event in case something needs to be done on scroll
        this.dispatchEvent(new CustomEvent('slider-scroll', { detail: { handlePosition: newPosPercents } }));
    }

    /**
     * Called on wheel event of the mouse.
     * Scrolls the slider in the position of which the wheel is rotated
     * @param {WheelEvent} event
    */
    onWheel(event) {
        const direction = (event.deltaY < 0) ? -1 : 1;
        this.scrollTo(this.getNextScrollPosition(direction, this.step));
    }

    /**
     * Called on click of the mouse.
     * Updated the handle's position with one step towards the position of the
     * mouse click.
     * @param {MouseEvent} event
    */
    onClick(event) {
        if (event.target.classList.contains('handle')) return;
        let direction = -1;
        if (this.handle.getBoundingClientRect()[this.units.position] < event[this.units.mouseAxisCoords]) direction = 1;
        this.scrollTo(this.getNextScrollPosition(direction, this.step));
    }

    /**
     * Gets the next value of the scroll.
     * @param {number} direction
     * @param {number} step
     * @returns {number} - the new scroll position
    */
    getNextScrollPosition(direction, step = this.step) {
        // get the current scroll postition in px
        const scrollTop = this.handlePosition * this.slider.getBoundingClientRect()[this.units.size] / 100;
        return scrollTop + (direction * step);
    }
}

components$f.defineCustomElement('gameface-slider', Slider);

var template$a = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-scrollable-container-wrapper\">    <div class=\"guic-scrollable-container\">      <component-slot data-name=\"scrollable-content\"></component-slot>    </div>    <gameface-slider class=\"guic-slider-component\" orientation=\"vertical\"></gameface-slider></div>";

/**
 * Restricts a given value in a range
 * @param {number} val - the value to be restricted
 * @param {number} min - the minimum value of the range
 * @param {number} max - the maximum number of the range
 * @returns {number}
 */
function clamp$2(val, min, max) {
    return Math.min(Math.max(val, min), max);
}

/* eslint-disable linebreak-style */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$e = new Components();// eslint-disable-next-line no-unused-vars

const BaseComponent$9 = components$e.BaseComponent;
const fixedSliderHeightAttrString = 'fixed-slider-height';

/**
 * Scrollable container. If it's content overflows a scrollbar will appear.
*/
class ScrollableContainer extends BaseComponent$9 {
    // eslint-disable-next-line require-jsdoc
    static get observedAttributes() {
        return ['automatic', fixedSliderHeightAttrString];
    }

    // eslint-disable-next-line require-jsdoc
    get automatic() {
        return this.hasAttribute('automatic');
    }

    // eslint-disable-next-line require-jsdoc
    set automatic(value) {
        value ? this.setAttribute('automatic', 'automatic') : this.removeAttribute('automatic');
    }

    // eslint-disable-next-line require-jsdoc
    get scrollPos() {
        return this._scrollPos;
    }

    /**
     * Set the scroll position of the scrollable container.
     * @param {number} value - the new scroll position in percents
     */
    set scrollPos(value) {
        this._scrollPos = value;
        // set the position of the scrollbar handle
        components$e.waitForFrames(() => this.scrollbar.scrollToPercents(this._scrollPos));
    }

    /* eslint-disable max-len */
    /**
     * Will scroll the container to a passed percents
     * @param {string|number} value
     * @returns {undefined}
     */
    scrollToPercents(value) {
        value = parseFloat(value);
        if (isNaN(value)) return console.error('The passed value to the scrollToPercents method should be number!');

        this.scrollableContainer.scrollTop =
            ((this.scrollableContainer.scrollHeight - this.scrollableContainer.offsetHeight) * clamp$2(value, 0, 100)) / 100;
        this.onScroll();
    }

    /**
     * Will scroll to some element inside the scrollable container. Based on the alignment the container will scroll to the element by position it
     * on the top, bottom or centering it inside the visible area of the scrollable container.
     * @param {HTMLElement} element
     * @param {string} alignment
     * @returns {undefined}
     */
    scrollToElement(element, alignment = 'start') {
        if (!this.scrollableContainer.contains(element)) return console.error('The passed element should be inside the scrollable container\'s content added with the <component-slot data-name="scrollable-content">!');
        const elementOffSetHeight = element.offsetHeight;
        const elementOffSetTop = element.offsetTop;
        const containerOffsetHeight = this.scrollableContainer.offsetHeight;

        switch (alignment) {
            case 'start':
                this.scrollableContainer.scrollTop = elementOffSetTop;
                break;
            case 'center':
                this.scrollableContainer.scrollTop = elementOffSetHeight / 2 + elementOffSetTop - containerOffsetHeight / 2;
                break;
            case 'end':
                this.scrollableContainer.scrollTop = elementOffSetHeight + elementOffSetTop - containerOffsetHeight;
                break;
            default: {
                console.error('The passed alignment argument is not valid. Possible values are "start", "center", "end".');
                this.scrollableContainer.scrollTop = elementOffSetTop;
            }
        }

        this.onScroll();
    }

    /* eslint-enable max-len */

    // eslint-disable-next-line require-jsdoc
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isRendered) return;

        // boolean attributes' initial value is an empty string, so
        // we need to check if the old value was null
        if (name === fixedSliderHeightAttrString) return this.shouldShowScrollbar();
        if (oldValue !== null && !newValue) this.removeMutationObserver();
        if (oldValue === null && newValue) this.initMutationObserver();
    }

    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();
        this.template = template$a;
        this.url = '/components/scrollable-container/template.html';
    }

    /**
     * Initialize the custom component.
     * Set template, attach event listeners, setup initial state etc.
     * @param {object} data
    */
    init(data) {
        this.setupTemplate(data, () => {
            // render the component
            components$e.renderOnce(this);
            // do the initial setup - add event listeners, assign members

            this.setup();
            this.scrollbar.style.visibility = 'hidden';
            this.shouldShowScrollbar();
            if (this.automatic) this.initMutationObserver();
            this.isRendered = true;
        });
    }

    /**
     * Called when the element is attached to the DOM.
    */
    connectedCallback() {
        this.onScrollSlider = this.onScrollSlider.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.resize = this.resize.bind(this);
        this.init = this.init.bind(this);
        this.setup = this.setup.bind(this);
        this.shouldShowScrollbar = this.shouldShowScrollbar.bind(this);
        this.shouldShowScrollbarCallback = this.shouldShowScrollbarCallback.bind(this);

        // load the template
        components$e.loadResource(this)
            .then(this.init)
            .catch(err => console.error(err));
    }

    /**
     * Will initialize a mutation obeserver that will watch if the scrollbar should be visible or not
     */
    initMutationObserver() {
        if (this.observer) this.removeMutationObserver();

        this.observer = new ResizeObserver(this.shouldShowScrollbar);
        const scrollableContent = this.querySelector('[data-name="scrollable-content"]');

        this.observer.observe(scrollableContent);
        this.observer.observe(this);
    }

    /**
     * Will remove mutation observer
     */
    removeMutationObserver() {
        this.observer.disconnect();
        this.observer = null;
    }

    /**
     * Set the scrollableContainer  and scrollbar members and attach event listeners.
    */
    setup() {
        this.scrollableContainer = this.getElementsByClassName('guic-scrollable-container')[0];
        this.scrollbar = this.getElementsByClassName('guic-slider-component')[0];
        if (!components$e.isBrowserGameface()) this.scrollableContainer.classList.add('guic-native-scroll-disabled');
        this.addEventListeners();
    }

    // eslint-disable-next-line require-jsdoc
    disconnectedCallback() {
        this.removeEventListeners();
    }

    /**
     * Add event listeners to handle resize, slider scroll
     * and scroll of the scrollabe container.
    */
    addEventListeners() {
        window.addEventListener('resize', this.resize);
        this.scrollbar.addEventListener('slider-scroll', this.onScrollSlider);
        this.scrollableContainer.addEventListener('scroll', this.onScroll);
    }

    // eslint-disable-next-line require-jsdoc
    removeEventListeners() {
        window.removeEventListener('resize', this.resize);
    }

    /**
     * Called on scroll event of the slider.
     * @param {CustomEvent} event
    */
    onScrollSlider(event) {
        // get the new scroll position in pixels
        const scrollTop = event.detail.handlePosition * this.scrollableContainer.scrollHeight / 100;
        // set the new scroll position
        this.scrollableContainer.scrollTop = scrollTop;
        // force a scroll event as setting scrollTop doesn't automatically emit it
        this.scrollableContainer.dispatchEvent(new CustomEvent('scroll'));
    }

    /**
     * Called on scroll event of the scrollable container.
     */
    onScroll() {
        // get the scroll position in percents
        this.scrollPos = (this.scrollableContainer.scrollTop / this.scrollableContainer.scrollHeight) * 100;
    }

    /**
     * Shows a scrollbar.
     * @param {HTMLElement} scrollbar
    */
    showScrollBar(scrollbar) {
        scrollbar.style.display = 'block';
    }

    /**
     * Hides a scrollbar.
     * @param {HTMLElement} scrollbar
    */
    hideScrollBar(scrollbar) {
        scrollbar.style.display = 'none';
    }

    /**
     * Checks if a scrollbar should be visible.
     * @warning - Be careful! Any mutation to the scrollable container in this method will cause a memory leak!
     * For example this.scrollableContainer.classList.add('some-class').
    */
    shouldShowScrollbar() {
        components$e.waitForFrames(this.shouldShowScrollbarCallback);
    }

    /**
     * Called after we've waited for enough frames for the UI to be ready.
     * @returns {void}
     */
    shouldShowScrollbarCallback() {
        const scrollableContent = this.querySelector('[data-name="scrollable-content"]');
        const scrollableContentRect = scrollableContent.getBoundingClientRect();
        const boundingRect = this.getBoundingClientRect();
        if (scrollableContentRect.height <= boundingRect.height) {
            return this.hideScrollBar(this.scrollbar);
        }

        this.showScrollBar(this.scrollbar);
        this.scrollbar.resize(this.scrollableContainer);
    }

    /**
     * Resizes the scrollbar manually
     */
    resize() {
        this.shouldShowScrollbar();
    }
}

/**
 * Will add styles for the non Coherent browsers that are disabling the native scrollbar
 */
function addDisabledNativeScrollbarStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        .guic-native-scroll-disabled {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .guic-native-scroll-disabled::-webkit-scrollbar {
            display: none;
        }`;
    document.head.appendChild(style);
}

if (!components$e.isBrowserGameface() && !components$e.nativeScrollDisabledStylesAdded) {
    addDisabledNativeScrollbarStyles();
    // We are doing this to prevent readdition of the styles needed for the native scrollbar to not be visible.
    // This problem is produced when multiple components have the scrollable container bundled.
    components$e.nativeScrollDisabledStylesAdded = true;
}

components$e.defineCustomElement('gameface-scrollable-container', ScrollableContainer);

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

const components$1$3 = new Components();

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
    components$1$3.defineCustomElement('gameface-route', GamefaceRoute);
}

/* eslint-disable linebreak-style */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$d = new Components();

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
    components$d.defineCustomElement('router-view', class RouterView extends HTMLElement { });
}

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
function clamp$1(val, min, max) {
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

const components$3$2 = new Components();

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

        components$3$2
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
            components$3$2.renderOnce(this.rangeslider);
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

const components$2$2 = new Components();

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
        components$2$2.waitForFrames(() => {
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
        percent = clamp$1(Math.round(percent / percentStep) * percentStep, ...clampRange);

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
        percent = clamp$1(Math.round(percent / percentStep) * percentStep, ...clampRange);

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

const components$1$2 = new Components();

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
        components$1$2.waitForFrames(() => {
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
        percent = clamp$1(Math.round(percent / percentStep) * percentStep, ...clampRange);

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

const components$c = new Components();

const RANGE_SLIDERS_TYPES = {
    BASIC: 'basic',
    VALUES: 'values',
    BASIC_TWO_HANDLES: 'basic_two_handles',
};
const CustomElementValidator$2 = components$c.CustomElementValidator;
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
class Rangeslider extends CustomElementValidator$2 {
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

components$c.defineCustomElement('gameface-rangeslider', Rangeslider);

var template$9 = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"radio-button\"><component-slot data-name=\"radio-button-content\"></component-slot><div class=\"radio-button-text\"></div><div class=\"before\"></div><div class=\"after\"></div></div>";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$b = new Components();

const KEYCODES$5 = components$b.KEYCODES;
const BaseComponent$8 = components$b.BaseComponent;

/**
 * Class definition of the gameface radio group custom element
 */
class GamefaceRadioGroup extends HTMLElement {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();

        this.previouslyCheckedElement = null;
    }

    // eslint-disable-next-line require-jsdoc
    get allButtons() {
        return Array.from(this.querySelectorAll('radio-button'));
    }

    // eslint-disable-next-line require-jsdoc
    get value() {
        if (this.previouslyCheckedElement && !this.previouslyCheckedElement.disabled) {
            return this.previouslyCheckedElement.value;
        }
        // will return null if it is disabled
        return null;
    }

    /**
     * @param {string} value - the value of the radio button
     */
    set value(value) {
        let isFound = false;
        this.allButtons.forEach((button) => {
            if (button.value === value && !button.disabled) {
                isFound = true;
                this.checkButton(button);
            }
        });

        if (!isFound) console.warn(`No radio button with value ${value} found or the button is disabled.`);
    }

    // eslint-disable-next-line require-jsdoc
    get disabled() {
        return this.hasAttribute('disabled');
    }

    // eslint-disable-next-line require-jsdoc
    set disabled(value) {
        if (value) {
            this.classList.add('guic-radio-button-disabled');
            this.setAttribute('disabled', '');
        } else {
            this.classList.remove('guic-radio-button-disabled');
            this.removeAttribute('disabled');
        }
    }

    /**
     * Gets if the value is missing when radio group is used inside a gameface-form-control
     * @returns {boolean}
     */
    valueMissing() {
        const checkedButton = this.previouslyCheckedElement;
        if (!checkedButton || !this.hasAttribute('name')) return true;
        return false;
    }

    /**
     * Sets the currently checked button to the previous one if it exists
     * @param {HTMLElement} button
     * @returns {void}
     */
    setCheckedToPreviousItem(button) {
        if (this.disabled) return;

        const prevSibling = button.previousElementSibling;

        if (!prevSibling) return;

        if (prevSibling.disabled) return this.setCheckedToPreviousItem(prevSibling);
        prevSibling.checked = true;
        prevSibling.focus();
    }

    /**
     * Sets the currently checked button to the next one if it exists
     * @param {HTMLElement} button
     * @returns {void}
     */
    setCheckedToNextItem(button) {
        if (this.disabled) return;

        const nextSibling = button.nextElementSibling;

        if (!nextSibling) return;

        if (nextSibling.disabled) return this.setCheckedToPreviousItem(nextSibling);
        nextSibling.checked = true;
        nextSibling.focus();
    }

    /**
     * Will check the passed button inside the radio group
     * @param {HTMLElement} button
     * @returns {void}
     */
    checkButton(button) {
        if (this.previouslyCheckedElement === button) return;
        if (this.previouslyCheckedElement) {
            // If the button is not rendered yet then removing the 'checked' attribute will not trigger attributeChangedCallback of the radio button.
            // And it is not enough for updating the button state.
            // Here we are making sure the button state is updated correctly when the button is not rendered yet.
            if (!this.previouslyCheckedElement.isRendered) {
                this.previouslyCheckedElement.removeAttribute('checked');
                this.unCheckButtonState(this.previouslyCheckedElement);
            } else {
                // If the button is rendered we need just ot remove the checked attribute that will trigger attributeChangedCallback and
                // update the state of the button from there.
                this.previouslyCheckedElement.removeAttribute('checked');
            }
        }
        this.setButtonAttributes(button, true);
        this.previouslyCheckedElement = button;
    }

    /**
     * Will check the passed button inside the radio group
     * @param {HTMLElement} button
     * @returns {void}
    */
    unCheckButtonState(button) {
        if (button) this.setButtonAttributes(button, false);
        if (button === this.previouslyCheckedElement) this.previouslyCheckedElement = null;
    }

    /**
     * Will focus the group when it is clicked
     * @returns {void}
     */
    handleClick() {
        if (this.disabled) return;
        if (this.radioGroup && this.radioGroup.disabled) return;

        this.checked = true;
        this.focus();
    }

    /**
     * Handler for key down event
     * @param {HTMLEvent} event
     */
    handleKeydown(event) {
        switch (event.keyCode) {
            case KEYCODES$5.UP:
            case KEYCODES$5.LEFT:
                this.radioGroup.setCheckedToPreviousItem(this);
                break;
            case KEYCODES$5.DOWN:
            case KEYCODES$5.RIGHT:
                this.radioGroup.setCheckedToNextItem(this);
                break;
        }
    }

    /**
     * @param {HTMLElement} button
     */
    setButtonRoleAttribute(button) {
        button.setAttribute('role', 'radio');
    }

    /**
     * @param {HTMLElement} button
     */
    attachButtonEventListeners(button) {
        button.addEventListener('click', this.handleClick.bind(button));
        button.addEventListener('keydown', this.handleKeydown.bind(button));
    }

    /**
     * @param {HTMLElement} button
     * @param {boolean} checked
     */
    setButtonAttributes(button, checked) {
        button.setAttribute('tabindex', checked ? '0' : '-1');
        button.setAttribute('aria-checked', checked ? 'true' : 'false');
        button.updateState('checked', checked ? true : false);
    }

    /**
     * Initialize the buttons
     */
    setupButtons() {
        for (const button of this.allButtons) {
            this.setButtonRoleAttribute(button);
            this.attachButtonEventListeners(button);
            this.setButtonAttributes(button);

            if (button.hasAttribute('checked')) {
                this.checkButton(button);
            }
        }
    }

    // eslint-disable-next-line require-jsdoc
    connectedCallback() {
        // Handle some configuration here so the user doesn't have to manually
        // do it and possibly forget it.
        this.setAttribute('role', 'radiogroup');
        this.setupButtons();
        if (this.disabled) this.classList.add('guic-radio-button-disabled');
        this.previouslyCheckedElement = this.querySelector('[aria-checked="true"]');
    }
}

/**
 * Class definition of the gameface radio button custom element
 */
class RadioButton extends BaseComponent$8 {
    // eslint-disable-next-line require-jsdoc
    static get observedAttributes() { return ['checked', 'disabled', 'value', 'name']; }

    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();

        this.template = template$9;
        this.textElement = null;
        this.init = this.init.bind(this);

        this.stateSchema = {
            checked: { type: ['boolean'] },
            disabled: { type: ['boolean'] },
            value: { type: ['string'] },
            name: { type: ['string'] },
        };

        this.state = {
            checked: false,
            disabled: false,
            value: 'on',
            name: '',
        };
    }

    /**
     * Custom element lifecycle method. Called when an attribute is changed.
     * @param {string} name
     * @param {string} oldValue
     * @param {string|boolean} newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isRendered) return;

        this.updateAttributeState(name, newValue);
    }

    /**
     * Update the radio button's state.
     * @param {string} name - the name of the prop
     * @param {string | boolean} value - the value of the the prop
     * @returns {void}
     */
    updateState(name, value) {
        if (!this.isStatePropValid(name, value)) return;
        this.state[name] = value;
    }

    /**
     * Will update the state properties linked with the checkbox attributes
     * @param {string} name
     * @param {string|boolean} value
     */
    updateAttributeState(name, value) {
        switch (name) {
            case 'checked':
                if (value !== null) this.radioGroup.checkButton(this);
                else this.radioGroup.unCheckButtonState(this);
                break;
            case 'disabled':
                this.updateDisabledState(value !== null);
                break;
            case 'name':
            case 'value':
                this.updateState(name, value);
                break;
        }
    }

    /**
     * Update the radio buttons's disabled state.
     * Set relevant styles and tabindex.
     * @param {boolean} value
     */
    updateDisabledState(value) {
        this.updateState('disabled', value);

        if (value) {
            this.firstChild.classList.add('guic-radio-button-disabled');
            this.setAttribute('tabindex', '-1');
        } else {
            this.firstChild.classList.remove('guic-radio-button-disabled');
            this.setAttribute('tabindex', '0');
        }
    }

    // eslint-disable-next-line require-jsdoc
    get checked() {
        return this.state.checked;
    }

    // eslint-disable-next-line require-jsdoc
    set checked(value) {
        value ? this.setAttribute('checked', '') : this.removeAttribute('checked');
    }

    // eslint-disable-next-line require-jsdoc
    get value() {
        return this.state.value;
    }

    // eslint-disable-next-line require-jsdoc
    set value(value) {
        this.setAttribute('value', value);
    }

    // eslint-disable-next-line require-jsdoc
    get text() {
        return this.textElement.textContent;
    }

    // eslint-disable-next-line require-jsdoc
    set text(value) {
        this.textElement.textContent = value;
    }

    // eslint-disable-next-line require-jsdoc
    get disabled() {
        return this.state.disabled;
    }

    // eslint-disable-next-line require-jsdoc
    set disabled(value) {
        if (value) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
    }

    // eslint-disable-next-line require-jsdoc
    get name() {
        return this.state.name;
    }

    // eslint-disable-next-line require-jsdoc
    set name(value) {
        const trimmed = value.trim();
        trimmed ? this.setAttribute('name', trimmed) : this.removeAttribute('name');
    }

    /**
     * Initialize the custom component.
     * Set template, attach event listeners, setup initial state etc.
     * @param {object} data
    */
    init(data) {
        let radioButtonText;
        const hasSlots = this.querySelectorAll('[slot="radio-button-content"]').length;
        // use text content if there is no slot
        if (!hasSlots) radioButtonText = this.textContent;

        this.setupTemplate(data, () => {
            components$b.renderOnce(this);
            this.textElement = this.querySelector('.radio-button-text');
            if (!hasSlots) this.textElement.textContent = radioButtonText;
            // Apply the user set text
            if (this.hasAttribute('checked')) this.updateAttributeState('checked', true);
            if (this.hasAttribute('disabled')) this.updateAttributeState('disabled', true);
            if (this.hasAttribute('value')) this.updateAttributeState('value', this.getAttribute('value'));
        });
    }

    // eslint-disable-next-line require-jsdoc
    connectedCallback() {
        // Get the text set from the user before applying the template.
        this.radioGroup = this.parentElement;

        components$b.loadResource(this)
            .then(this.init)
            .catch(err => console.error(err));
    }
}

components$b.defineCustomElement('radio-button', RadioButton);
components$b.defineCustomElement('gameface-radio-group', GamefaceRadioGroup);

var template$8 = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-radial-menu\"><div class=\"guic-radial-menu-center\"><component-slot class=\"guic-radial-menu-center\" data-name=\"radial-menu-center\"><div class=\"guic-radial-menu-center-bullseye\"></div><div class=\"guic-radial-menu-center-text\">Radial Menu</div></component-slot><div class=\"guic-radial-menu-center-bullseye-outer\"></div></div><div class=\"guic-radial-menu-items\"><div class=\"guic-radial-menu-selector\"><div class=\"guic-radial-menu-selector-bg-1\"><div class=\"guic-radial-menu-selector-bg-2\"></div></div></div></div></div>";

/* eslint-disable linebreak-style */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$a = new Components();

const BaseComponent$7 = components$a.BaseComponent;

/**
 * Class definition of the gameface radial menu custom element
 */
class RadialMenu extends BaseComponent$7 {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();
        this.template = template$8;

        this._items = [];

        this.changeItemEvent = {};
        this.selectItemEvent = {};

        this.openKeyCode = 0;
        this.itemsCount = 0;

        this.radialMenuCenter = { x: 0, y: 0 };
        this.itemSelector = {};
        this.segmentDegrees = 0;
        this.currentSegmentId = 0;
        this.radialMenuTemplateWrapper = {};
        this.init = this.init.bind(this);
    }

    // eslint-disable-next-line require-jsdoc
    set items(value) {
        this._items = value;
        this.initRadialMenu();
    }

    // eslint-disable-next-line require-jsdoc
    get items() {
        return this._items;
    }

    /**
     * Initialize the custom component.
     * Set template, attach event listeners, setup initial state etc.
     * @param {object} data
    */
    init(data) {
        this.setupTemplate(data, () => {
            components$a.renderOnce(this);
        });
    }

    // eslint-disable-next-line require-jsdoc
    connectedCallback() {
        components$a.loadResource(this)
            .then(this.init)
            .catch(err => console.error(err));
    }

    // eslint-disable-next-line require-jsdoc
    disconnectedCallback() {
        this.removeOpenKeyEvent();
        this.closeAndRemoveEventListeners();
    }

    /**
     * Used to initialize the sector size of the radial menu
     * @returns {void}
     */
    setSelectorSize() {
        // When there are 2 segments, use a rectangle.
        if (this.itemsCount === 2) {
            this.itemSelector.style.clipPath = `polygon(0% 50%, 0% 0%, 100% 0%, 100% 50%)`;
            return;
        }

        const halfSegmentDegrees = this.segmentDegrees / 2;
        const halfSegmentTan = Math.tan(halfSegmentDegrees * Math.PI / 180);
        const halfSegmentProportion = halfSegmentTan / 2 * 100;

        const PolyPoint2XPos = 50 - halfSegmentProportion + 0.00001;
        const PolyPoint3XPos = 50 + halfSegmentProportion + 0.00001;

        this.itemSelector.style.clipPath = `polygon(50% 50%, ${PolyPoint2XPos}% 0%, ${PolyPoint3XPos}% 0%)`;
    }

    /**
     * @param {HTMLElement} element
     * @param {Number} deg
     */
    rotateElement(element, deg) {
        element.style.transform = `rotate(${deg}deg)`;
    }

    /**
     * Add the menu items
     */
    populateItems() {
        const itemsElement = this.getElementsByClassName('guic-radial-menu-items')[0];
        this.segmentDegrees = 360 / this.itemsCount;

        for (let i = 0; i < this.itemsCount; i++) {
            const itemArrayImagePath = this.items[i].imagePath;
            const segmentOffset = this.segmentDegrees * i;

            const itemEl = document.createElement('div');
            this.rotateElement(itemEl, segmentOffset);
            itemEl.className = 'guic-radial-menu-item';

            const itemImage = document.createElement('div');
            this.rotateElement(itemImage, (this.segmentDegrees * -1) * i);
            itemImage.className = 'guic-radial-menu-item-icon';
            itemImage.style.backgroundImage = `url('${itemArrayImagePath}')`;

            itemEl.appendChild(itemImage);
            itemsElement.appendChild(itemEl);
        }
    }

    /**
     * @param {Object} mousePosition
     * @param {Object} centerPosition
     * @param {number} segmentCount
     * @param {number} angleOffset
     * @returns {number}
     */
    getSegment(mousePosition, centerPosition, segmentCount, angleOffset) {
        const directionVector = { x: 0, y: 0 };
        directionVector.x = mousePosition.x - centerPosition.x;
        directionVector.y = mousePosition.y - centerPosition.y;

        let angle = Math.atan2(-directionVector.y, directionVector.x);
        const angleOffsetInRad = angleOffset / 180 * Math.PI;
        angle += angleOffsetInRad;

        if (angle < 0) {
            angle = 2 * Math.PI + angle;
        }

        const segmentAngle = 2 * Math.PI / segmentCount;
        return Math.floor(angle / segmentAngle);
    }

    /**
     * Pass if the highlighted segment has changed.
     * @param {number} offset
     * @returns {boolean}
     *
     * Condition 1: When the offset is 0 (the first segment) and the offset
     * subtracted from the cached segment id is 0.
     * Covers highlighting in case of uneven number of items or the first segment.
     *
     * Condition 2: Since the current segment id is calculated by subtracting
     * the offset from the items count check if they are equivalent.
     *
     * If any of the above conditions are met, the mouse position hasn't
     * entered on a new segment of the radial menu.
     */
    hasHighlightedSegmentChanged(offset) {
        return (offset !== 0 || this.currentSegmentId - offset !== 0) &&
            this.currentSegmentId !== this.itemsCount - offset;
    }

    /**
     * Handler for changing the active segment of the radial menu
     * @param {HTMLEvent} event
     * @returns {void}
     */
    updateSegmentPosition(event) {
        const mousePosition = { x: 0, y: 0 };
        mousePosition.x = event.clientX;
        mousePosition.y = event.clientY;

        // The offset is returned as a 'counterclockwise' value in respect to
        // the radial menu.
        const newOffset = this.getSegment(mousePosition,
            this.radialMenuCenter,
            this.itemsCount,
            this.segmentDegrees / 2 - 90);

        if (!this.hasHighlightedSegmentChanged(newOffset)) return;

        // Since the newOffset value increases 'counterclockwise', subtract from
        // the items count to mirror that. Now the segment id can be used to
        // access items from the array with the correct array element id.
        this.currentSegmentId = (newOffset === 0) ? 0 : this.itemsCount - newOffset;


        this.dispatchEvent(this.changeItemEvent);

        this.rotateElement(this.itemSelector, newOffset * -this.segmentDegrees);
    }

    /**
     * Will close the radial menu and dispatch custom event for selecting a menu item
     */
    selectAndClose() {
        this.classList.remove('guic-radial-menu-open');
        this.closeAndRemoveEventListeners();
        this.dispatchEvent(this.selectItemEvent);
    }

    /**
     * Handler when the window is resized
     */
    updateRadialMenuCenterXY() {
        const radialMenuBoundingRect = this.radialMenuTemplateWrapper.getBoundingClientRect();
        this.radialMenuCenter.x = radialMenuBoundingRect.left + (radialMenuBoundingRect.width / 2);
        this.radialMenuCenter.y = radialMenuBoundingRect.top + (radialMenuBoundingRect.height / 2);
    }

    /**
     * Remove listeners
     */
    closeAndRemoveEventListeners() {
        window.removeEventListener('mousemove', this.updateSegmentPosition);
        window.removeEventListener('click', this.selectAndClose);
        window.removeEventListener('resize', this.updateRadialMenuCenterXY);
        window.removeEventListener('keyup', this.selectAndClose);
    }

    /**
     * Opens the radial menu and add its related listeners
     */
    openAndAddEventListeners() {
        // Need to wait 2 frames to get the correct getBoundingClientRect() prop values.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.updateRadialMenuCenterXY();
                window.addEventListener('mousemove', this.updateSegmentPosition);
                window.addEventListener('click', this.selectAndClose);
                window.addEventListener('resize', this.updateRadialMenuCenterXY);
                window.addEventListener('keyup', this.selectAndClose);

                this.classList.add('guic-radial-menu-open');
            });
        });
    }

    /**
     * Will set a keycode that will be used to open the radial menu
     */
    assignOpenKey() {
        // Convert to uppercase because of the components.KEYCODES properties names.
        const datasetKeyCode = this.dataset.openKeyCode.toUpperCase();

        if (components$a.KEYCODES[datasetKeyCode]) {
            this.openKeyCode = components$a.KEYCODES[datasetKeyCode];
        } else if (Number(datasetKeyCode)) {
            this.openKeyCode = Number(datasetKeyCode);
        } else {
            console.log('Provided key value for opening ' + this.dataset.name +
                ' is not a number and doesn\'t exist in Components library\'s KEYCODES object.');
        }
    }

    /**
     * Handler for keypress that will open the radial menu
     * @param {HTMLEvent} event
     */
    onOpenKeyPressed(event) {
        if (!event.repeat && event.keyCode === this.openKeyCode) {
            this.openAndAddEventListeners();
        }
    }

    /**
     * Add event listener for opening the radial menu
     */
    addOpenKeyEvent() {
        window.addEventListener('keydown', this.onOpenKeyPressed);
    }

    /**
     * Removing the event listener for opening the radial menu
     */
    removeOpenKeyEvent() {
        window.removeEventListener('keydown', this.onOpenKeyPressed);
    }

    /**
     * Init the radial menu
     */
    initRadialMenu() {
        this.openKeyCode = parseInt(this.dataset.openKeyCode);
        // Evaluate the items array referenced in the data-items attribute.

        this.itemsCount = this.items.length;

        this.changeItemEvent = new CustomEvent(this.dataset.changeEventName);
        this.selectItemEvent = new CustomEvent(this.dataset.selectEventName);

        this.onOpenKeyPressed = this.onOpenKeyPressed.bind(this);
        this.updateSegmentPosition = this.updateSegmentPosition.bind(this);
        this.selectAndClose = this.selectAndClose.bind(this);
        this.updateRadialMenuCenterXY = this.updateRadialMenuCenterXY.bind(this);

        this.radialMenuTemplateWrapper = this.querySelector('.guic-radial-menu');
        this.itemSelector = this.querySelector('.guic-radial-menu-selector');

        const centerText = this.querySelector('.guic-radial-menu-center-text');
        if (centerText) centerText.textContent = this.dataset.name;

        this.populateItems();
        this.setSelectorSize();
        this.rotateElement(this.itemSelector, 0);

        this.assignOpenKey();
        this.addOpenKeyEvent();
    }
}

components$a.defineCustomElement('gameface-radial-menu', RadialMenu);

var template$7 = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-progress-bar\"><div class=\"guic-progress-bar-filler\"></div></div>";

/* eslint-disable linebreak-style */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$9 = new Components();

const BaseComponent$6 = components$9.BaseComponent;

/**
 * Class definition of the gameface progress bar custom element
 */
class ProgressBar extends BaseComponent$6 {
    // eslint-disable-next-line require-jsdoc
    static get observedAttributes() { return ['target-value', 'animation-duration']; }

    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();
        this.template = template$7;

        this.filler = {};

        this._targetValue = 0;
        this._animDuration = 0;

        this.currentRafInstanceId = 0;
        this.hasStarted = false;
        this.previousWidth = 0;
        this.init = this.init.bind(this);
    }

    /**
     * Get the target value of the progress bar
     */
    get targetValue() {
        if (this.hasAttribute('target-value')) {
            const targetValueAttribute = this.getAttribute('target-value');
            // return negative value to indicate that target value is not valid
            if (!components$9.isNumberPositiveValidation('target-value', targetValueAttribute)) return -1;
            return targetValueAttribute;
        }
        return this._targetValue;
    }

    /**
     * Set the target value that detirmines the length that the progress will reach
     * @param {number|string} value
     */
    set targetValue(value) {
        const validValue = components$9.isNumberPositiveValidation('targetValue', value) ? value : 0;
        this.setAttribute('target-value', validValue);
    }

    /**
     * Get the animDuration property
     */
    get animDuration() {
        if (this.hasAttribute('animation-duration')) {
            const animationDurationAttribute = parseInt(this.getAttribute('animation-duration'));
            if (!isNaN(animationDurationAttribute)) return animationDurationAttribute;
        }

        if (this._animDuration !== undefined) return this._animDuration;
        return 0;
    }

    /**
     * Set the animDuration
     * @param {number|string} value
     */
    set animDuration(value) {
        if (components$9.isNumberPositiveValidation('animDuration', value)) this._animDuration = value;
    }

    /**
     * Set the width of the progress bar in %
     * @param {number} value
     */
    set _fillerWidth(value) {
        this.filler.style.width = `${value}%`;
    }

    // eslint-disable-next-line require-jsdoc
    get _fillerWidth() {
        return this.filler.style.width;
    }

    /**
     * Initialize the custom component.
     * Set template, attach event listeners, setup initial state etc.
     * @param {object} data
    */
    init(data) {
        this.setupTemplate(data, () => {
            components$9.renderOnce(this);

            // Get the filler element when the component is rendered.
            this.filler = this.querySelector('.guic-progress-bar-filler');
            this.setProgress();
        });
    }

    // eslint-disable-next-line require-jsdoc
    connectedCallback() {
        components$9.loadResource(this)
            .then(this.init)
            .catch(err => console.error(err));
    }

    /**
     * Linear interpolation between two known points.
     * The previous width is x1 and the the target value is x2.
     * @param {number} decimalMidpoint The decimal midpoint.
     * @returns {number} Returns the value at the given decimal midpoint between the values.
     */
    interpolateBetweenWidths(decimalMidpoint) {
        return this.previousWidth * (1 - decimalMidpoint) + this.targetValue * decimalMidpoint;
    }

    /**
     * Callback for animating the progressbar fill
     */
    fill() {
        // Get the elapsed time from when the animation has been initiated.
        const runTime = new Date().getTime() - this.animStartTime; // milliseconds
        // Clip the current progress between 0 and 1.
        const currentProgress = Math.min(runTime / this.animDuration, 1);
        const targetWidth = this.interpolateBetweenWidths(currentProgress);

        this._fillerWidth = targetWidth;

        /* If the duration is not met yet, call raF again with the parameters. */
        if (runTime < this.animDuration) {
            this.currentRafInstanceId = requestAnimationFrame(() => {
                this.fill();
            });
        } else {
            this.hasStarted = false;
        }
    }

    /**
     * Initiating the animation while saving the initial width and the time the animation started.
     * @param {boolean} fromBeginning - specify if the progress should start from the beginning as if
     * the animation runs for the first time or from the current position(the default)
     */
    startAnimation(fromBeginning = false) {
        this.currentRafInstanceId = requestAnimationFrame(() => {
            // Or zero if no width has been set yey.
            this.previousWidth = parseFloat(this._fillerWidth) || 0;
            if (fromBeginning) this.previousWidth = 0;
            this.animStartTime = new Date().getTime();

            this.fill();
        });
    }

    /**
     * Start animating or directly set the width if no animation duration time is provided.
     * @param {boolean} fromBeginning - specify if the progress should start from the beginning as if
     * the animation runs for the first time or from the current position(the default)
     */
    setProgress(fromBeginning = false) {
        // invalid target value was passes
        if (this.targetValue < 0) {
            this._fillerWidth = 0;
            return;
        }

        this.previousWidth = 0;

        if (this.targetValue < 0) {
            this.targetValue = 0;
        } else if (this.targetValue > 100) {
            this.targetValue = 100;
        }

        if (this.animDuration !== 0) {
            // Cancel the currently running animation if a new one is started with another value.
            if (this.hasStarted) {
                cancelAnimationFrame(this.currentRafInstanceId);
            }

            this.hasStarted = true;
            this.startAnimation(fromBeginning);
        } else {
            this._fillerWidth = this.targetValue;
        }
    }

    /**
     * Custom element lifecycle method. Called when an attribute is changed.
     * @param {string} name
     * @param {string} oldValue
     * @param {string|boolean} newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isRendered) return;
        if (!components$9.isNumberPositiveValidation(name, newValue)) return;

        if (name === 'target-value') {
            this._targetValue = newValue;
            this.setProgress();
            return;
        }

        if (name === 'animation-duration') {
            this._animDuration = parseInt(newValue);
            this.setProgress(true);
        }
    }
}

components$9.defineCustomElement('gameface-progress-bar', ProgressBar);

var template$6 = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-modal-wrapper\">    <div class=\"guic-modal-backdrop\"></div>    <div class=\"guic-modal\">        <div class=\"close guic-modal-close-x\">x</div>        <div class=\"guic-modal-header\">            <component-slot data-name=\"header\">Put your title here.</component-slot>        </div>        <div class=\"guic-modal-body\">            <component-slot data-name=\"body\">Put the content here.</component-slot>        </div>        <div class=\"guic-modal-footer\">            <component-slot data-name=\"footer\">Put your actions here.</component-slot>        </div>    </div></div>";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$8 = new Components();

const BaseComponent$5 = components$8.BaseComponent;

/**
 * Class definition of the gameface modal custom element
 */
class Modal extends BaseComponent$5 {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();

        this.template = template$6;

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
            components$8.renderOnce(this);
            this.attachEventListeners();
        });
    }

    // eslint-disable-next-line require-jsdoc
    connectedCallback() {
        components$8.loadResource(this)
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

components$8.defineCustomElement('gameface-modal', Modal);

var template$5 = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><component-slot data-name=\"menu-item\">    <menu-item>First Item</menu-item>    <menu-item>Second Item</menu-item></component-slot>";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const TAG_NAMES = 'gameface-menu, gameface-left-menu, gameface-right-menu, gameface-bottom-menu';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$3$1 = new Components();

const BaseComponent$4 = components$3$1.BaseComponent;

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

const KEYCODES$3 = components$3$1.KEYCODES;

const KEY_MAPPING$3 = {
    FORWARD: KEYCODES$3.RIGHT,
    BACK: KEYCODES$3.LEFT,
    OPEN_SUBMENU: KEYCODES$3.DOWN,
    CLOSE: KEYCODES$3.ESCAPE,
    SELECT: KEYCODES$3.ENTER,
};

/**
 * Class definition of the gameface menu custom element
 */
class GamefaceMenu extends BaseComponent$4 {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();

        this.keyMapping = KEY_MAPPING$3;
        this.template = template$5;
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
            components$3$1.renderOnce(this);

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

        components$3$1.loadResource(this)
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

components$3$1.defineCustomElement('gameface-menu', GamefaceMenu);
components$3$1.defineCustomElement('menu-item', MenuItem);

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$2$1 = new Components();

const KEYCODES$2 = components$2$1.KEYCODES;

const KEY_MAPPING$2 = {
    FORWARD: KEYCODES$2.DOWN,
    BACK: KEYCODES$2.UP,
    OPEN_SUBMENU: KEYCODES$2.RIGHT,
    CLOSE: KEYCODES$2.ESCAPE,
    SELECT: KEYCODES$2.ENTER,
};

/**
 * Class definition of the gameface left menu custom element
 */
class GamefaceLeftMenu extends GamefaceMenu {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();

        this.keyMapping = KEY_MAPPING$2;
    }

    /**
     * Sets an inline style to properly position the element
     * Different menus have use different properties - top, left, right or bottom
     *
     * @param {HTMLElement} element - the element that needs to be positioned
     * @param {DOMRect} parentPosition - the bounding box of the parent element
    */
    setPosition(element, parentPosition) {
        element.style.left = parentPosition.width + 'px';
        element.style.top = '0px';
    }
}

components$2$1.defineCustomElement('gameface-left-menu', GamefaceLeftMenu);

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$1$1 = new Components();

const KEYCODES$1 = components$1$1.KEYCODES;

const KEY_MAPPING$1 = {
    FORWARD: KEYCODES$1.RIGHT,
    BACK: KEYCODES$1.LEFT,
    OPEN_SUBMENU: KEYCODES$1.UP,
    CLOSE: KEYCODES$1.ESCAPE,
    SELECT: KEYCODES$1.ENTER,
};

/**
 * Class definition of the gameface bottom menu custom element
 */
class GamefaceBottomMenu extends GamefaceMenu {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();

        this.keyMapping = KEY_MAPPING$1;
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

components$1$1.defineCustomElement('gameface-bottom-menu', GamefaceBottomMenu);

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$7 = new Components();

const KEYCODES$4 = components$7.KEYCODES;

const KEY_MAPPING = {
    FORWARD: KEYCODES$4.DOWN,
    BACK: KEYCODES$4.UP,
    OPEN_SUBMENU: KEYCODES$4.LEFT,
    CLOSE: KEYCODES$4.ESCAPE,
    SELECT: KEYCODES$4.ENTER,
};

/**
 * Class definition of the gameface right menu custom element
 */
class GamefaceRightMenu extends GamefaceMenu {
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
        element.style.right = parentPosition.width + 'px';
        element.style.top = '0px';
    }
}

components$7.defineCustomElement('gameface-right-menu', GamefaceRightMenu);

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

const components$6 = new Components();

const NativeElementValidator = components$6.NativeElementValidator;

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

components$6.defineCustomElement('gameface-form-control', GamefaceFormControl);

var template$4 = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-dropdown\">    <div class=\"guic-dropdown-header\">        <div class=\"guic-dropdown-selected-option\">Select an option</div>        <div class=\"guic-dropdown-custom-select-arrow\"></div>    </div>    <div class=\"guic-dropdown-options-container guic-dropdown-hidden\">        <gameface-scrollable-container class=\"scrollable-container-component\" automatic>            <div slot=\"scrollable-content\" data-name=\"scrollable-content\">                <div class=\"guic-dropdown-options\">                </div>            </div>        </gameface-scrollable-container>    </div></div>";

/* eslint-disable linebreak-style */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$5 = new Components();

const KEYCODES = components$5.KEYCODES;

/**
 * Used to get the option element from an event target.
 * @param {event} event
 * @returns {HTMLElement | undefined}
 */
function getOptionElFromTarget(event) {
    const target = event.target;

    if (target === event.currentTarget) return;
    if (target.tagName.toLowerCase() === 'dropdown-option') return target;

    return target.closest('dropdown-option');
}

/**
 * A factory that wraps an option event handler.
 * @param {function} callback - the function that will be wrapped.
 * @returns {function} - the wrapped function.
 */
function createOptionEventHandler(callback) {
    return (event) => {
        const option = getOptionElFromTarget(event);
        if (!option) return;

        callback(option, event);
    };
}

const CustomElementValidator$1 = components$5.CustomElementValidator;

/**
 * Class definition of the gameface dropdown custom element
 */
class GamefaceDropdown extends CustomElementValidator$1 {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();
        this._multiple = false;
        this._collapsable = false;

        this.selectedOption = null;
        this.isOpened = false;
        // the index of the currently selected option element
        // the selectedList is intended to hold the indexes as they are from the allOptions getter.
        this.selectedList = [];
        this._hovered = 0;
        this._pivotIndex = null;
        this.template = template$4;

        // save the built in array method so that we can use it for HTMLCollections
        // without creating a new array each time
        this.builtInIndexOf = [].indexOf;

        // bound handlers
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onClickOption = createOptionEventHandler(this.onClickOption.bind(this));
        this.onKeydown = this.onKeydown.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onMouseOverOption = createOptionEventHandler(this.onMouseOverOption.bind(this));
        this.onMouseOut = createOptionEventHandler(this.onMouseOut.bind(this));
        this.init = this.init.bind(this);

        this.emptyPlaceholderOption = this.createOption('');
        this.isPlaceholderSelected = false;
    }

    /** Returns if the dropdown is collapsable */
    get collapsable() { return this._collapsable; }

    /**
     * Will change the dropdown collapsable state
     * @param {boolean} value
     */
    set collapsable(value) {
        value ? this.setAttribute('collapsable', '') : this.removeAttribute('collapsable');
    }

    /** Returns if the dropdown is multiple */
    get multiple() { return this._multiple; }

    /**
     * Will change the dropdown multiple state
     * @param {boolean} value
     */
    set multiple(value) {
        value ? this.setAttribute('multiple', '') : this.removeAttribute('multiple');
    }

    /**
     * Returns the text content of the selected dropdown-option.
     * @returns {String}
    */
    get value() {
        if (this.isFormElement() && this.multiple) return this.selectedOptions.map(el => el.value);
        if (this.selected) return this.selected.value;

        return '';
    }

    /**
     * Returns the text content of the selected dropdown-option.
     * @param {string} value
    */
    set value(value) {
        const trimmedValue = value.trim();

        const option = Array.from(this.allOptions).find(option => option.value === trimmedValue);

        if (!option && trimmedValue === '') {
            this.updateSelectHeader(this.emptyPlaceholderOption);
            this.resetSelection();
            this.isPlaceholderSelected = true;
        } else if (option) {
            this.resetSelection();
            this.setSelectedAndScroll(option, this.isOpened);
        } else {
            console.warn(`There is no '${trimmedValue}' as an option to the dropdown. Will not set the new value`);
        }
    }

    /**
     * Returns all dropdown-option elements' indexes that don't have attribute disabled.
     * @returns {Array<number>}
    */
    get enabledOptions() {
        const enabled = [];
        const allOptions = this.allOptions;

        for (let i = 0; i < this.allOptions.length; i++) {
            const option = allOptions[i];
            if (!option.hasAttribute('disabled')) enabled.push(i);
        }

        return enabled;
    }

    /**
     * Returns only the selected options from the allOptions array.
     * @returns {Array<HTMLElement>}
    */
    get selectedOptions() {
        return this.selectedList.map(selected => this.allOptions[selected]);
    }

    /**
     * Returns the length of the selected options.
     * @returns {number}
    */
    get selectedLength() {
        return this.selectedList.length;
    }

    /**
     * Returns the index of the last selected option
     * @returns {number}
    */
    get lastSelectedIndex() {
        return this.selectedLength ? this.selectedList[this.selectedLength - 1] : 0;
    }

    /**
     * Returns the element from which a selection sequence has began.
     * @returns {HTMLElement}
    */
    get pivotElement() {
        return this.allOptions[this._pivotIndex] || this.allOptions[0];
    }

    /**
     * Returns a boolean value that indicates if the dropdown is disabled.
     * @returns {boolean}
    */
    get disabled() {
        return this.hasAttribute('disabled');
    }

    /**
     * Sets the disabled attribute of the dropdown.
     * Also adds/removes the tabindex attribute to include/exclude the element from the focusable elements.
     * @param {boolean} value - make disabled if true, make enabled if false.
    */
    set disabled(value) {
        if (value) {
            this.classList.add('guic-dropdown-disabled');
            this.setAttribute('disabled', '');
            this.setAttribute('tabindex', '-1');
        } else {
            this.classList.remove('guic-dropdown-disabled');
            this.removeAttribute('disabled');
            this.setAttribute('tabindex', '1');
        }
    }

    /**
     * Returns the currently selected option element.
     * @returns {HTMLElement}
    */
    get selected() {
        if (this.isPlaceholderSelected) return this.emptyPlaceholderOption;
        const allOptions = this.allOptions;
        return allOptions[this.lastSelectedIndex] || allOptions[0];
    }

    /**
     * Sets the currently selected option.
     * Updates the select header if the select is single.
     * Dispatches a change event to notify that the active option has been changed.
     * @param {HTMLElement} option
    */
    set selected(option) {
        this.setSelection(option);
    }

    /**
     * Create an option element
     * @param {string} value - the string value of the option
     * @returns {HTMLElement}
     */
    createOption(value) {
        const option = document.createElement('gameface-option');
        option.value = value;
        return option;
    }

    /**
     * Set the selection of the Dropdown
     * @param {HTMLElement} option - the current option that needs to be selected
     * @returns {void}
     */
    setSelection(option) {
        // reset
        // eslint-disable-next-line no-setter-return
        if (option === null) return this.resetSelection();

        if (!this.multiple) {
            this.resetSelection();
            this.updateSelectHeader(option);
        }

        this.select(option);
        this.dispatchChangeEvent(option);
    }

    /**
    * Returns the currently hovered element's index.
    * @returns {Number}
    */
    get hoveredElIndex() {
        return this._hovered;
    }

    /**
     * Sets the currently hovered element's index.
     * @param {Number} value
    */
    set hoveredElIndex(value) {
        if (!this.allOptions[value]) return;
        this._hovered = value;
    }

    /**
     * Call the built in Array.prototype.indexOf method.
     * This function allows the user to use the indexOf
     * function without needing to use .call.
     *
     * @argument {any} args
     * @returns {number}
    */
    indexOf(...args) {
        return this.builtInIndexOf.call(...args);
    }

    /**
     * Checks if an element is selected by index.
     * @param {number} index - the index of the element.
     * @returns {boolean}
    */
    isSelected(index) {
        if (typeof index === 'number') return this.selectedList.indexOf(index) > -1;
        console.warn(`Using Dropdown.isSelected with an unsupported argument type - make sure you passed an index of type number.`);
        return false;
    }

    /**
     * Validation method. Checks if there is a selected element by
     *  checking the length of the selectedOptions.
     * @returns {boolean} - true if the array is empty and false if not.
    */
    valueMissing() {
        return !this.selectedOptions.length;
    }

    /**
     * Get all options of the selected list and:
     * 1. remove their active class
     * 2. remove their selected attribute
     * 3. reset the values of the selectedList and the hoveredElIndex.
    */
    resetSelection() {
        this.isPlaceholderSelected = false;

        for (const index of this.selectedList) {
            const option = this.allOptions[index];
            this.removeActiveClass(option);
            option.removeAttribute('selected');
        }

        this.selectedList = [];
        this.hoveredElIndex = 0;
    }

    /**
     * Update the header of the select. Clone the content of the selected option
     * to the content of the header. If the option is falsy - do nothing.
     * @param {HTMLElement} option
    */
    updateSelectHeader(option) {
        // check if cloneNode exists in case the user has set the selected
        // to something that is not an HTMLElement instance
        if (!option || !option.cloneNode) return;
        components$5.transferContent(option.cloneNode(true), this.querySelector('.guic-dropdown-selected-option'));
    }

    /**
     * Select an option.
     * Add the active class and the selected attribute.
     * Add the option's index to the selectedList array.
     * @param {HTMLElement} option - the option that has to be selected.
     */
    select(option) {
        const index = this.indexOf(this.allOptions, option);
        if (!option || this.isSelected(index)) return;

        this.addActiveClass(option);
        this.selectedList.push(index);
    }

    /**
     * Deselect an option.
     * @param {HTMLElement} option - the option that has to be deselected.
     * Remove the active class and the selected attribute.
     * Remove the option's index from the selectedList array.
    */
    deselect(option) {
        const index = this.indexOf(this.allOptions, option);
        this.removeActiveClass(option);
        this.selectedList.splice(this.selectedList.indexOf(index), 1);
    }

    /**
     * Select the options that have the selected attribute.
     * This is executed when the dropdown is connected to the DOM.
     * @returns {void}
    */
    preselectOptions() {
        if (this.multiple) return this.setInitialMultipleSelection();
        this.setInitialSingleSelection();
    }

    /**
     * Select all options that have the selected attribute
    */
    setInitialMultipleSelection() {
        for (const option of this.allOptions) {
            if (!option.hasAttribute('selected')) continue;
            this.setSelectedAndScroll(option);
        }
    }

    /**
     * Select the last found option that has the selected attribute.
     * If none is found - selects the first element from the options list
    */
    setInitialSingleSelection() {
        const allSelected = this.querySelectorAll('[selected]');
        const selectedLength = allSelected.length;
        // use the last option that has the selected attribute or the first element in the options list
        const selectedDefault = selectedLength ? allSelected[selectedLength - 1] : this.selected;
        this.setSelectedAndScroll(selectedDefault);
    }

    /**
     * Setup the collapsable dropdown.
     * Show the header element.
     * @param {boolean} visible
    */
    toggleHeader(visible = true) {
        this.querySelector('.guic-dropdown-header').style.display = visible ? 'flex' : 'none';
    }

    /**
     * Remove the collapsable dropdown.
     * Hide the header element.
    */
    removeCollapsable() {
        if (!this.isOpened) {
            this.initScrollbar();
            this.openOptionsPanel();
        }
        this.toggleHeader(false);
    }

    /**
     * Setup the multiple dropdown.
     * Hide the header element.
     * Expand the options list by calling the click callback after 6 frames
     * because of the cohtml style resolver and the scrollable container initialization.
    */
    setupMultiple() {
        this.toggleHeader(false);
        components$5.waitForFrames(() => this.onClick(), 6);
    }

    /**
     * Stop "multiple" behavior
     */
    removeMultiple() {
        this.toggleHeader();
        // use the first element that is selected by the multiple selection
        this.setSelection(this.allOptions[this.selectedList[0]]);
        this.closeOptionsPanel();
    }

    /**
     * Initialize the custom component.
     * Set template, attach event listeners, setup initial state etc.
     * @param {object} data
    */
    init(data) {
        this.setupTemplate(data, () => {
            components$5.transferChildren(this, '.guic-dropdown-options', this.querySelectorAll('dropdown-option'));

            // Check the type after the component has rendered.
            this._multiple = this.hasAttribute('multiple');
            this._collapsable = this.hasAttribute('collapsable');
            // make this element focusable
            this.setAttribute('tabindex', '1');

            if (this.multiple && !this.collapsable) this.setupMultiple();
            if (this.disabled) this.disabled = true;

            // comment this out until we fix the bug with the broken live collections
            // this.allOptions = this.querySelector('.guic-dropdown-options').children;

            this.preselectOptions();
            this.attachEventListeners();
            this.isRendered = true;
        });
    }

    /**
     * Get an array of observed attributes
     * @returns {Array<string>}
     */
    static get observedAttributes() { return ['disabled', 'multiple', 'collapsable']; }

    /**
     * Custom element lifecycle method. Called when an attribute is changed.
     * @param {string} name
     * @param {string} oldValue
     * @param {string|boolean} newValue
     * @returns {void}
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isRendered) return;

        if (name === 'disabled') {
            const disabled = newValue !== null;

            if (disabled) {
                this.classList.add('guic-dropdown-disabled');
                this.setAttribute('tabindex', '-1');
            } else {
                this.classList.remove('guic-dropdown-disabled');
                this.setAttribute('tabindex', '1');
            }
        } else if (name === 'multiple') {
            const multiple = newValue !== null;
            this._multiple = multiple;
            if (multiple && !this.collapsable) this.setupMultiple();
            if (!multiple) this.removeMultiple();
        } else if (name === 'collapsable') {
            const collapsable = newValue !== null;
            this._collapsable = collapsable;
            if (collapsable) return this.toggleHeader();
            this.removeCollapsable();
        }
    }

    // eslint-disable-next-line require-jsdoc
    connectedCallback() {
        components$5.loadResource(this)
            .then(this.init)
            .catch(err => console.error(err));
    }

    /**
     * A temporary getter for the dropdown's children - until we fix the
     * live HTMLCollections.
    */
    get allOptions() {
        return this.querySelector('.guic-dropdown-options').children;
    }

    /**
     * Called whenever the element is removed from the DOM.
     */
    disconnectedCallback() {
        this.removeEventListeners();
        this.isRendered = false;
    }

    /**
     * Dispatch a custom event to notify listeners for selection change.
     * @param {HTMLElement} option - the newly selected option.
    */
    dispatchChangeEvent(option) {
        this.dispatchEvent(new CustomEvent('change', {
            detail: { target: option },
        }));
    }

    /**
     * Called on document click.
     * Closes the options panel if it's opened.
     * @param {MouseEvent} event - the current event object.
    */
    onDocumentClick(event) {
        if (this.contains(event.target)) return;
        if (this.multiple && !this.collapsable) return;
        this.closeOptionsPanel();
    }

    /**
     * Focuses an option by index. Updates the index of the hovered element.
     * @param {number} nextOptionIndex - the index of the option that has to be focused.
    */
    focusOption(nextOptionIndex) {
        this.setSelectedAndScroll(this.allOptions[nextOptionIndex], true);
        this.hoveredElIndex = nextOptionIndex;
    }

    /**
     * Check if a number is out of a given range.
     * @param {number} current - the current value of the number.
     * @param {number} limit - the limit that current must not exceed.
     * @param {number} direction - the direction specifies on which side of the limit the current must be.
     * @returns {boolean} - true if it is in range, false if it is not.
     */
    isOutOfRange(current, limit, direction) {
        return direction === 1 ? current > limit : current < limit;
    }

    /**
     * Select all enabled options from a given range defined by start and end indexes.
     * @param {number} start - the low limit of the range.
     * @param {number} end - the higher limit of the range.
     * @param {number} direction - the direction of the selection.
     * @param {boolean} reset - whether to reset the current selection or not:
     * @param {boolean} scroll - whether to scroll to the selected element or not; useful if
     * selecting using the keyboard, but disruptive if using the mouse
     * In a single selection we must reset the selected list, but in multiple we must not.
     */
    selectFromTo(start, end, direction = 1, reset = true, scroll = true) {
        const enabledOptions = this.enabledOptions;
        const allOptions = this.allOptions;

        if (!enabledOptions.length) return;
        if (reset) this.resetSelection();

        // loop all enabled indexes and select the corresponding
        // options from the full list
        do {
            this.selected = allOptions[enabledOptions[start]];
            start += direction;
        } while (!this.isOutOfRange(start, end, direction));

        if (scroll) this.scrollToSelectedElement();
    }

    /**
     * Select all options.
     * Used for keyboard selection when holding Ctrl + A.
     */
    selectAll() {
        this.selected = null;
        const allOptions = this.allOptions;

        this.enabledOptions.forEach(index => this.selected = allOptions[index]);
    }

    /**
     * Toggles the selection of an element by given index.
     * If the element is selected - deselect it.
     * @param {number} currentOptionIndex - the index of the currently selected option.
     * @param {number} direction - the direction in which the selection is going.
     * @param {number[]} enabledOptions
     */
    toggleSelection(currentOptionIndex, direction, enabledOptions) {
        const nextOptionIndex = currentOptionIndex + direction; // next enabled index
        const nextFullListIndex = enabledOptions[nextOptionIndex]; // corresponding index in the allOptions list

        if (this.isSelected(nextFullListIndex)) {
            const indexToBeRemoved = enabledOptions[currentOptionIndex];
            this.deselect(this.allOptions[indexToBeRemoved]);
        } else {
            this.selectFromTo(currentOptionIndex, nextOptionIndex, direction, 0);
        }

        this.scrollToSelectedElement();
    }

    /**
     * Handles the focus of the dropdown options
     * when the keyboard is used to navigate through the options.
     * @param {number} keyCode - the code of the current key that is being pressed.
    */
    handleKeyboardFocus(keyCode) {
        if (this.multiple) return;

        switch (keyCode) {
            case KEYCODES.ENTER:
                this.focusOption(this.hoveredElIndex);
                this.closeOptionsPanel();
                return;
            case KEYCODES.TAB:
            case KEYCODES.ESCAPE:
                this.closeOptionsPanel();
                return;
        }
    }

    /**
     * Handles the multiple selection of the dropdown options when the keyboard is used.
     * @param {number} keyCode - the code of the current key that is being pressed.
     * @param {Array<number>} enabledOptions - the list of the indexes of the enabled options.
     * @param {number} currentOptionIndex - the index of the currently selected option.
    */
    handleMultipleKeyboardSelection(keyCode, enabledOptions, currentOptionIndex) {
        switch (keyCode) {
            case KEYCODES.DOWN:
            case KEYCODES.RIGHT:
                this.toggleSelection(currentOptionIndex, 1, enabledOptions);
                break;
            case KEYCODES.UP:
            case KEYCODES.LEFT:
                this.toggleSelection(currentOptionIndex, -1, enabledOptions);
                break;
            case KEYCODES.HOME:
                this.selectFromTo(enabledOptions.indexOf(this._pivotIndex), 0, -1);
                break;
            case KEYCODES.END:
                this.selectFromTo(enabledOptions.indexOf(this._pivotIndex), this.allOptions.length - 1, 1);
                break;
        }
    }

    /**
     * Handles the single selection of the dropdown options when the keyboard is used.
     * @param {number} keyCode - the code of the current key that is being pressed.
     * @param {Array<number>} enabledOptions - the list of the indexes of the enabled options.
     * @param {number} currentOptionIndex - the index of the currently selected option.
    */
    handleSingleKeyboardSelection(keyCode, enabledOptions, currentOptionIndex) {
        let nextElement = currentOptionIndex;

        switch (keyCode) {
            case KEYCODES.HOME:
            case KEYCODES.PAGE_UP:
                // focus first
                nextElement = 0;
                break;
            case KEYCODES.END:
            case KEYCODES.PAGE_DOWN:
                // focus last
                nextElement = enabledOptions.length - 1;
                break;
            case KEYCODES.UP:
            case KEYCODES.LEFT:
                nextElement = currentOptionIndex - 1;
                if (this.isOutOfRange(nextElement, 0, -1)) return;
                break;
            case KEYCODES.DOWN:
            case KEYCODES.RIGHT:
                nextElement = currentOptionIndex + 1;
                if (this.isOutOfRange(nextElement, enabledOptions.length - 1, 1)) return;
                break;
        }

        this.resetSelection();
        this.setSelectedAndScroll(this.allOptions[enabledOptions[nextElement]], true);
    }

    /**
     * Called on keydown. Used to handle option selection via the keyboard.
     * @param {KeyboardEvent} event - the current event object
    */
    onKeydown(event) {
        const keyCode = event.keyCode;
        const ctrlKey = event.ctrlKey;
        const shiftKey = event.shiftKey;
        const enabledOptions = this.enabledOptions;
        const currentOptionIndex = enabledOptions.indexOf(this.lastSelectedIndex);

        if (shiftKey && this.multiple) {
            // pivotIndex is the LAST selected - last clicked or selected via key
            if (this._pivotIndex === null) this._pivotIndex = this.selectedList[this.selectedLength - 1];
            this.handleMultipleKeyboardSelection(keyCode, enabledOptions, currentOptionIndex);
        }

        if (ctrlKey && keyCode === KEYCODES.LETTER_A && this.multiple) {
            event.preventDefault();
            this.selectAll();
        }

        if (!ctrlKey && !shiftKey && !event.altKey) {
            this.handleKeyboardFocus(keyCode);
            this.handleSingleKeyboardSelection(keyCode, enabledOptions, currentOptionIndex);
        }
    }

    /**
     * Called on click on the select element.
     * Toggles the options panel, shows the scrollbar and scrolls to
     * the selected option element.
     * @param {Event} event
     * @returns {void}
    */
    onClick(event) {
        if (event) event.stopPropagation();
        if (this.disabled) return;
        if (this.isOpened) return this.closeOptionsPanel();

        this.initScrollbar();
        this.openOptionsPanel();
        this.scrollToSelectedElement();
    }

    /**
     * Method for initializing the scrollbar
     * @returns {void}
     */
    initScrollbar() {
        const scrollableContainer = this.querySelector('gameface-scrollable-container');

        if (!components$5.isBrowserGameface()) return scrollableContainer.querySelector('.guic-scrollable-container').classList.add('full-width');
        scrollableContainer.shouldShowScrollbar();
    }

    /**
     * Attaches event listeners.
    */
    attachEventListeners() {
        this.addEventListener('keydown', this.onKeydown);
        this.querySelector('.guic-dropdown-selected-option').addEventListener('click', this.onClick);
        this.toggleOptionsListeners('addEventListener');
    }

    /**
     * Removes event listeners.
    */
    removeEventListeners() {
        this.removeEventListener('keydown', this.onKeydown);
        this.querySelector('.guic-dropdown-selected-option').removeEventListener('click', this.onClick);
        this.toggleOptionsListeners('removeEventListener');
    }

    /**
     * Loop all options and add or remove event listeners.
     * @param {string} methodName - the name of the method that should be
     * executed on the option - addEventListener or removeEventListener.
    */
    toggleOptionsListeners(methodName) {
        const optionsContainer = this.querySelector('.guic-dropdown-options');

        optionsContainer[methodName]('click', this.onClickOption);
        optionsContainer[methodName]('mouseover', this.onMouseOverOption);
        optionsContainer[methodName]('mouseout', this.onMouseOut);
    }

    /**
     * Handler for mouse leave
     * @param {HTMLElement} option
     * @returns {void}
     */
    onMouseOut(option) {
        const index = this.indexOf(this.allOptions, option);
        if (this.multiple && this.selectedList.indexOf(index) > -1) return;
    }

    /**
     * Adding active class
     * @param {HTMLElement} element
     */
    addActiveClass(element) {
        element.classList.add('guic-dropdown-option-active');
    }

    /**
     * Removing active class
     * @param {HTMLElement} element
     */
    removeActiveClass(element) {
        element.classList.remove('guic-dropdown-option-active');
    }

    /**
     * Called on mouseover an option element.
     * @param {HTMLElement} option
    */
    onMouseOverOption(option) {
        const options = this.allOptions;
        if (!this.multiple) this.removeActiveClass(this.selected);

        if (!(this.multiple && option.isAlreadySelected(this, options[this.hoveredElIndex]))) {
            this.removeActiveClass(options[this.hoveredElIndex]);
        }
        this.addActiveClass(option);
        this.hoveredElIndex = this.indexOf(options, option);
    }

    /**
     * Called when the option of a multiple select is clicked.
     * Selects the target if it is unselected and deselects it if it is selected.
     * @param {HTMLElement} option - the option element.
     * @param {Event} event - the event object.
     * @returns {void}
    */
    onClickMultipleOptions(option, event) {
        // reset the selectedList if only one option is selected
        if (!event.ctrlKey) this.selected = null;
        if (option.isAlreadySelected(this, option)) return this.deselect(option);

        if (event.shiftKey) {
            const fromIdx = this.enabledOptions.indexOf(this._pivotIndex);
            const toIdx = this.enabledOptions.indexOf(Array.from(this.allOptions).indexOf(option));
            const direction = (fromIdx - toIdx) > 0 ? -1 : 1;
            this.selectFromTo(fromIdx, toIdx, direction, true, false);
        }

        this.setSelectedAndScroll(option, false);
        this.focus();
    }

    /**
     * Called on click of an option of a single select.
     * Selects the target and closes the options list.
     * @param {HTMLElement} option
    */
    onClickSingleOption(option) {
        this.setSelectedAndScroll(option);
        this.closeOptionsPanel();
    }

    /**
     * Called when an option element is clicked.
     * Updates the selected member and closes the options panel.
     * @param {HTMLElement} option - the option that was clicked.
     * @param {MouseEvent} event - the current event object.
     * @returns {void}
    */
    onClickOption(option, event) {
        event.stopPropagation();
        // handle multiple
        if (this.multiple) return this.onClickMultipleOptions(option, event);
        this.onClickSingleOption(option);
    }

    /**
     * Hides the options panel.
    */
    closeOptionsPanel() {
        const optionsPanel = this.querySelector('.guic-dropdown-options-container');
        this.isOpened = false;
        optionsPanel.classList.add('guic-dropdown-hidden');
        document.removeEventListener('click', this.onDocumentClick);
        this.toggleOptionsListeners('removeEventListener');
    }

    /**
     * Shows the options panel.
     * Adds the active class to the currently selected option.
     * Focuses the dropdown element.
    */
    openOptionsPanel() {
        const optionsPanel = this.querySelector('.guic-dropdown-options-container');
        this.isOpened = true;
        optionsPanel.classList.remove('guic-dropdown-hidden');
        this.focus();
        this.toggleOptionsListeners('addEventListener');
        document.addEventListener('click', this.onDocumentClick);
    }

    /**
     * Sets the selected element of the dropdown and scrolls to it.
     * @param {DropdownOption} element - the option element.
     * @param {boolean} [scroll=false]
    */
    setSelectedAndScroll(element, scroll = false) {
        this.setSelection(element);
        this._pivotIndex = this.lastSelectedIndex;
        this.hoveredElIndex = this.lastSelectedIndex;

        if (scroll) this.scrollToSelectedElement();
    }

    /**
     * Scrolls to the selected option element.
    */
    scrollToSelectedElement() {
        const scrollableContainer = this.querySelector('.guic-scrollable-container');
        const option = this.querySelector('dropdown-option');
        if (!option) return;
        const optionSize = option.getBoundingClientRect().height;

        // the scroll position in pixels is equal to the height of the selected
        // option multiplied by its index

        const scrollInPX = this.lastSelectedIndex * optionSize;
        scrollableContainer.scrollTop = scrollInPX;
        scrollableContainer.dispatchEvent(new CustomEvent('scroll'));
    }
}

/**
 * Class definition of the gameface dropdown option custom element
 */
class DropdownOption extends HTMLElement {
    // eslint-disable-next-line require-jsdoc
    static get observedAttributes() {
        return ['disabled', 'selected', 'value'];
    }

    // eslint-disable-next-line require-jsdoc
    get selected() {
        return this.isAlreadySelected(this.closest('gameface-dropdown'), this) ||
            this.hasAttribute('selected');
    }

    // eslint-disable-next-line require-jsdoc
    get value() {
        if (this.hasAttribute('value')) return this.getAttribute('value');
        return this._value || this.textContent;
    }

    /**
     * Checks if an option is already selected
     * @param {HTMLElement} parent
     * @param {HTMLElement} option
     * @returns {boolean}
     */
    isAlreadySelected(parent, option) {
        return (parent.selectedOptions.findIndex(selectedOption => selectedOption === option) !== -1);
    }

    /**
     * Called when an attribute changes
     * @param {string} name
     * @param {string} oldValue
     * @param {string} newValue
     * @returns {void}
    */
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'disabled') {
            return this.classList.toggle('guic-dropdown-option-disabled', this.hasAttribute('disabled'));
        }

        if (name === 'selected') {
            const parent = this.closest('gameface-dropdown');
            if (!parent || !parent.isRendered) return;
            const hasSelected = newValue !== null;

            // attributeChangedCallback is called before the parent is upgraded to custom element therefore has no custom methods
            if (hasSelected && parent.setSelectedAndScroll) return parent.setSelectedAndScroll(this);
            if (!hasSelected && parent.deselect) parent.deselect(this, false);
        }

        if (name === 'value') this._value = this.hasAttribute('value') ? this.getAttribute('value') : this.textContent;
    }

    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();
    }
}

components$5.defineCustomElement('dropdown-option', DropdownOption);
components$5.defineCustomElement('gameface-dropdown', GamefaceDropdown);

var template$3 = "<div class=\"guic-color-picker\">    <div class=\"guic-ls-picker\">        <div class=\"guic-horizontal-rangeslider-handle guic-ls-picker-handle\"></div>    </div>    <div class=\"guic-hue-picker\">        <gameface-rangeslider class=\"guic-hue-picker-slider\" min=\"0\" max=\"360\"></gameface-rangeslider>    </div>    <div class=\"guic-alpha-picker\">        <gameface-rangeslider class=\"guic-alpha-picker-slider\"></gameface-rangeslider>    </div>    <div class=\"guic-color-preview-container\">        <div class=\"guic-color-preview-tabs\">            <div class=\"guic-color-preview-tab guic-color-preview-tab-active\">HEX</div>            <div class=\"guic-color-preview-tab\">RGBA</div>        </div>        <div class=\"guic-color-preview\">            <div class=\"guic-color-preview-box\">                <div class=\"guic-color-preview-box-color\"></div>            </div>            <input class=\"guic-color-preview-input\" />        </div>    </div></div>";

var hexTransperancies = {
    100: 'FF',
    99: 'FC',
    98: 'FA',
    97: 'F7',
    96: 'F5',
    95: 'F2',
    94: 'F0',
    93: 'ED',
    92: 'EB',
    91: 'E8',
    90: 'E6',
    89: 'E3',
    88: 'E0',
    87: 'DE',
    86: 'DB',
    85: 'D9',
    84: 'D6',
    83: 'D4',
    82: 'D1',
    81: 'CF',
    80: 'CC',
    79: 'C9',
    78: 'C7',
    77: 'C4',
    76: 'C2',
    75: 'BF',
    74: 'BD',
    73: 'BA',
    72: 'B8',
    71: 'B5',
    70: 'B3',
    69: 'B0',
    68: 'AD',
    67: 'AB',
    66: 'A8',
    65: 'A6',
    64: 'A3',
    63: 'A1',
    62: '9E',
    61: '9C',
    60: '99',
    59: '96',
    58: '94',
    57: '91',
    56: '8F',
    55: '8C',
    54: '8A',
    53: '87',
    52: '85',
    51: '82',
    50: '80',
    49: '7D',
    48: '7A',
    47: '78',
    46: '75',
    45: '73',
    44: '70',
    43: '6E',
    42: '6B',
    41: '69',
    40: '66',
    39: '63',
    38: '61',
    37: '5E',
    36: '5C',
    35: '59',
    34: '57',
    33: '54',
    32: '52',
    31: '4F',
    30: '4D',
    29: '4A',
    28: '47',
    27: '45',
    26: '42',
    25: '40',
    24: '3D',
    23: '3B',
    22: '38',
    21: '36',
    20: '33',
    19: '30',
    18: '2E',
    17: '2B',
    16: '29',
    15: '26',
    14: '24',
    13: '21',
    12: '1F',
    11: '1C',
    10: '1A',
    9: '17',
    8: '14',
    7: '12',
    6: '0F',
    5: '0D',
    4: '0A',
    3: '08',
    2: '05',
    1: '03',
    0: '00',
};

/**
 * Clamp a value between a minimum and maximum value.
 * @param {number} val - the value to be restricted
 * @param {number} min - the minimum value of the range
 * @param {number} max - the maximum number of the range
 * @returns {number}
 */
function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
}

/* eslint-disable max-lines-per-function */
/**
 *
 * @param {Object} hsl - {h: number, s: number, l: number, a: number}
 * @returns {string} - Hex color
 */
function hslaToHexAndRGB({ H, S, L, A }) {
    H /= 360;
    S /= 100;
    L /= 100;

    let r, g, b;
    if (S === 0) {
        r = g = b = L; // achromatic
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = L < 0.5 ? L * (1 + S) : L + S - L * S;
        const p = 2 * L - q;
        r = hue2rgb(p, q, H + 1 / 3);
        g = hue2rgb(p, q, H);
        b = hue2rgb(p, q, H - 1 / 3);
    }

    const toHex = (x) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    return {
        rgba: `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${A})`,
        hex: `#${toHex(r)}${toHex(g)}${toHex(b)}${hexTransperancies[Math.round(A * 100)]}`.toUpperCase(),
    };
}

/* eslint-enable max-lines-per-function */

var t,e,s,i;!function(t){t.HEX="HEX",t.RGB="RGB",t.HSL="HSL",t.CIELab="CIELab",t.CMYK="CMYK";}(t||(t={})),function(t){t.ANALOGOUS="ANALOGOUS",t.COMPLEMENTARY="COMPLEMENTARY",t.SPLIT_COMPLEMENTARY="SPLIT_COMPLEMENTARY",t.TRIADIC="TRIADIC",t.TETRADIC="TETRADIC",t.SQUARE="SQUARE";}(e||(e={})),function(t){t.ADDITIVE="ADDITIVE",t.SUBTRACTIVE="SUBTRACTIVE";}(s||(s={})),function(t){t.black="#000000",t.silver="#C0C0C0",t.gray="#808080",t.white="#FFFFFF",t.maroon="#800000",t.red="#FF0000",t.purple="#800080",t.fuchsia="#FF00FF",t.green="#008000",t.lime="#00FF00",t.olive="#808000",t.yellow="#FFFF00",t.navy="#000080",t.blue="#0000FF",t.teal="#008080",t.aqua="#00FFFF",t.orange="#FFA500",t.aliceblue="#F0F8FF",t.antiquewhite="#FAEBD7",t.aquamarine="#7FFFD4",t.azure="#F0FFFF",t.beige="#F5F5DC",t.bisque="#FFE4C4",t.blanchedalmond="#FFEBCD",t.blueviolet="#8A2BE2",t.brown="#A52A2A",t.burlywood="#DEB887",t.cadetblue="#5F9EA0",t.chartreuse="#7FFF00",t.chocolate="#D2691E",t.coral="#FF7F50",t.cornflowerblue="#6495ED",t.cornsilk="#FFF8DC",t.crimson="#DC143C",t.cyan="#00FFFF",t.darkblue="#00008B",t.darkcyan="#008B8B",t.darkgoldenrod="#B8860B",t.darkgray="#A9A9A9",t.darkgreen="#006400",t.darkgrey="#A9A9A9",t.darkkhaki="#BDB76B",t.darkmagenta="#8B008B",t.darkolivegreen="#556B2F",t.darkorange="#FF8C00",t.darkorchid="#9932CC",t.darkred="#8B0000",t.darksalmon="#E9967A",t.darkseagreen="#8FBC8F",t.darkslateblue="#483D8B",t.darkslategray="#2F4F4F",t.darkslategrey="#2F4F4F",t.darkturquoise="#00CED1",t.darkviolet="#9400D3",t.deeppink="#FF1493",t.deepskyblue="#00BFFF",t.dimgray="#696969",t.dimgrey="#696969",t.dodgerblue="#1E90FF",t.firebrick="#B22222",t.floralwhite="#FFFAF0",t.forestgreen="#228B22",t.gainsboro="#DCDCDC",t.ghostwhite="#F8F8FF",t.gold="#FFD700",t.goldenrod="#DAA520",t.greenyellow="#ADFF2F",t.grey="#808080",t.honeydew="#F0FFF0",t.hotpink="#FF69B4",t.indianred="#CD5C5C",t.indigo="#4B0082",t.ivory="#FFFFF0",t.khaki="#F0E68C",t.lavender="#E6E6FA",t.lavenderblush="#FFF0F5",t.lawngreen="#7CFC00",t.lemonchiffon="#FFFACD",t.lightblue="#ADD8E6",t.lightcoral="#F08080",t.lightcyan="#E0FFFF",t.lightgoldenrodyellow="#FAFAD2",t.lightgray="#D3D3D3",t.lightgreen="#90EE90",t.lightgrey="#D3D3D3",t.lightpink="#FFB6C1",t.lightsalmon="#FFA07A",t.lightseagreen="#20B2AA",t.lightskyblue="#87CEFA",t.lightslategray="#778899",t.lightslategrey="#778899",t.lightsteelblue="#B0C4DE",t.lightyellow="#FFFFE0",t.limegreen="#32CD32",t.linen="#FAF0E6",t.magenta="#FF00FF",t.mediumaquamarine="#66CDAA",t.mediumblue="#0000CD",t.mediumorchid="#BA55D3",t.mediumpurple="#9370DB",t.mediumseagreen="#3CB371",t.mediumslateblue="#7B68EE",t.mediumspringgreen="#00FA9A",t.mediumturquoise="#48D1CC",t.mediumvioletred="#C71585",t.midnightblue="#191970",t.mintcream="#F5FFFA",t.mistyrose="#FFE4E1",t.moccasin="#FFE4B5",t.navajowhite="#FFDEAD",t.oldlace="#FDF5E6",t.olivedrab="#6B8E23",t.orangered="#FF4500",t.orchid="#DA70D6",t.palegoldenrod="#EEE8AA",t.palegreen="#98FB98",t.paleturquoise="#AFEEEE",t.palevioletred="#DB7093",t.papayawhip="#FFEFD5",t.peachpuff="#FFDAB9",t.peru="#CD853F",t.pink="#FFC0CB",t.plum="#DDA0DD",t.powderblue="#B0E0E6",t.rosybrown="#BC8F8F",t.royalblue="#4169E1",t.saddlebrown="#8B4513",t.salmon="#FA8072",t.sandybrown="#F4A460",t.seagreen="#2E8B57",t.seashell="#FFF5EE",t.sienna="#A0522D",t.skyblue="#87CEEB",t.slateblue="#6A5ACD",t.slategray="#708090",t.slategrey="#708090",t.snow="#FFFAFA",t.springgreen="#00FF7F",t.steelblue="#4682B4",t.tan="#D2B48C",t.thistle="#D8BFD8",t.tomato="#FF6347",t.turquoise="#40E0D0",t.violet="#EE82EE",t.wheat="#F5DEB3",t.whitesmoke="#F5F5F5",t.yellowgreen="#9ACD32",t.rebeccapurple="#663399";}(i||(i={}));const a=Object.keys(i),r={HEX:["R","G","B","A"],RGB:["R","G","B","A"],HSL:["H","S","L","A"],CIELab:["L","a","b","A"],CMYK:["C","M","Y","K","A"]},n={BGR:t.RGB,ABGR:t.RGB,HLS:t.HSL,AHLS:t.HSL,LAB:t.CIELab,ALAB:t.CIELab,CKMY:t.CMYK,ACKMY:t.CMYK};var c;!function(t){t.NUMBER="number",t.BOOLEAN="boolean";}(c||(c={}));const o={[t.HEX]:/^#(?:([a-f\d])([a-f\d])([a-f\d])([a-f\d])?|([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?)$/i,[t.RGB]:/^rgba?\s*\(\s*(?:((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)(?:\s*,\s*((?:\d*\.)?\d+))?|((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)(?:\s*\/\s*((?:\d*\.)?\d+%?))?)\s*\)$/,[t.HSL]:/^hsla?\s*\(\s*(?:(-?(?:\d*\.)?\d+(?:deg|grad|rad|turn)?)\s*,\s*((?:\d*\.)?\d+)%\s*,\s*((?:\d*\.)?\d+)%(?:\s*,\s*((?:\d*\.)?\d+))?|(-?(?:\d*\.)?\d+(?:deg|grad|rad|turn)?)\s*((?:\d*\.)?\d+)%\s*((?:\d*\.)?\d+)%(?:\s*\/\s*((?:\d*\.)?\d+%?))?)\s*\)$/,[t.CIELab]:/^lab\s*\(\s*(?:((?:\d*\.)?\d+%?)\s*(-?(?:\d*\.)?\d+%?)\s*(-?(?:\d*\.)?\d+%?)(?:\s*\/\s*((?:\d*\.)?\d+%?))?)\s*\)$/,[t.CMYK]:/^(?:device-cmyk|cmyk)\s*\(\s*(?:((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)(?:\s*,\s*((?:\d*\.)?\d+))?|((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)(?:\s*\/\s*((?:\d*\.)?\d+%?))?)\s*\)$/},A=/^(-?(?:\d*\.)?\d+)((?:deg|grad|rad|turn)?)$/,h=/^(-?\d+(?:\.\d+)?|-?\.\d+)%$/,u=/^0x([a-f\d]{1,2})$/i,d=/\{(\d+)\}/g,l=/,( +|\d+)/g,E=/ +/,m="The provided string color doesn't have a correct format",b="The provided color object doesn't have the proper keys or format";var C,L,g;!function(t){t.NONE="none",t.DEGREES="deg",t.GRADIANS="grad",t.RADIANS="rad",t.TURNS="turn";}(C||(C={})),function(t){t.NONE="none",t.PERCENT="percent";}(L||(L={})),function(t){t.DEVICE_CMYK="device-cmyk",t.CMYK="cmyk";}(g||(g={}));const B={decimals:6,legacyCSS:!1,spacesAfterCommas:!1,anglesUnit:C.NONE,rgbUnit:L.NONE,labUnit:L.NONE,cmykUnit:L.PERCENT,alphaUnit:L.NONE,cmykFunction:g.DEVICE_CMYK},p=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),H=t=>+`${t}`.replace(h,"$1"),F=t=>h.test(`${t}`)?H(t):Math.min(+t,100),R=t=>(1===t.length&&(t+=t),parseInt(t,16)),S=t=>{const e=D(t,0).toString(16).toUpperCase();return 1===e.length?`0x0${e}`:`0x${e}`},I=(t,e=!1)=>!e&&h.test(t)?Math.min(255*H(t)/100,255):u.test(t)?(3===t.length&&(t+=t.slice(-1)),e?D(t)/255:D(t)):Math.min(+t,e?1:255),G=t=>h.test(t)?f(125*H(t)/100,-125,125):f(+t,-125,125),M=t=>Math.min(h.test(t)?H(t)/100:+t,1),y=t=>[...t].sort().join("").toUpperCase(),D=(t,e=6)=>{const s=Math.pow(10,e);return Math.round(+t*s)/s},f=(t,e,s)=>Math.max(e,Math.min(t,s)),O=t=>{if("string"==typeof t){const e=t.match(A),s=+e[1];switch(e[2]){case C.RADIANS:t=D(180*s/Math.PI);break;case C.TURNS:t=D(360*s);break;case C.GRADIANS:t=D(.9*s);break;case C.DEGREES:default:t=s;}}return (t>360||t<0)&&(t-=360*Math.floor(t/360)),t},Y=(t,e)=>{let s;switch(e){case C.RADIANS:s=D((t=>t*Math.PI/180)(t));break;case C.TURNS:s=D(t/360);break;case C.GRADIANS:s=D(10/9*t);break;case C.DEGREES:case C.NONE:default:s=t;}return s},k=(t,...e)=>{const s=[],i=[],a=[],r=[],n=[],u=[],d=Object.values(C),m=Object.values(L),b=Object.values(g),p={legacyCSS:0,spacesAfterCommas:0,cmykFunction:0};for(const t of e)if("string"==typeof t){if(s.push(t),t.includes(",")){p.legacyCSS++;const e=t.match(l);1===new Set(e).size&&E.test(e[0].slice(1))&&p.spacesAfterCommas++;}if(t.match(o.HSL)){const e=t.match(o.HSL),s=e[1]||e[5],a=e[8],r=s.match(A)[2];i.push(""===r?C.NONE:r),u.push(h.test(a));continue}if(o.RGB.test(t)){const e=t.match(o.RGB),s=e[1]||e[5],i=e[2]||e[6],r=e[3]||e[7],n=e[8];a.push(h.test(s)&&h.test(i)&&h.test(r)),u.push(h.test(n));continue}if(o.CIELab.test(t)){const e=t.match(o.CIELab),s=e[1],i=e[2],a=e[3],n=e[4];r.push(h.test(s)&&h.test(i)&&h.test(a)),u.push(h.test(n));continue}if(t.match(o.CMYK)){const e=t.match(o.CMYK),s=e[1]||e[6],i=e[2]||e[7],a=e[3]||e[8],r=e[4]||e[9],c=e[10];n.push(h.test(s)&&h.test(i)&&h.test(a)&&h.test(r)),t.startsWith("cmyk")&&p.cmykFunction++,u.push(h.test(c));}}return {decimals:typeof t.decimals===c.NUMBER?t.decimals:B.decimals,legacyCSS:typeof t.legacyCSS===c.BOOLEAN?t.legacyCSS:Boolean(s.length&&p.legacyCSS===s.length)||B.legacyCSS,spacesAfterCommas:typeof t.spacesAfterCommas===c.BOOLEAN?t.spacesAfterCommas:Boolean(s.length&&p.spacesAfterCommas===s.length)||B.spacesAfterCommas,anglesUnit:t.anglesUnit&&d.includes(t.anglesUnit)?t.anglesUnit:1===new Set(i).size?i[0]:B.anglesUnit,rgbUnit:t.rgbUnit&&m.includes(t.rgbUnit)?t.rgbUnit:1===new Set(a).size&&a[0]?L.PERCENT:B.rgbUnit,labUnit:t.labUnit&&m.includes(t.labUnit)?t.labUnit:1===new Set(r).size&&r[0]?L.PERCENT:B.labUnit,cmykUnit:t.cmykUnit&&m.includes(t.cmykUnit)?t.cmykUnit:1!==new Set(n).size||n[0]?B.cmykUnit:L.NONE,alphaUnit:t.alphaUnit&&m.includes(t.alphaUnit)?t.alphaUnit:1===new Set(u).size&&u[0]?L.PERCENT:B.alphaUnit,cmykFunction:t.cmykFunction&&b.includes(t.cmykFunction)?t.cmykFunction:n.length&&n.length===p.cmykFunction?g.CMYK:B.cmykFunction}},K=t=>`${t}`in s,X=[[.4360747,.3850649,.1430804],[.2225045,.7168786,.0606169],[.0139322,.0971045,.7141733]],T=[[3.1338561,-1.6168667,-.4906146],[-.9787684,1.9161415,.033454],[.0719453,-.2289914,1.4052427]],N=X.map((t=>t.reduce(((t,e)=>t+e),0))),$=(t,e,s)=>(s<0&&(s+=6),s>=6&&(s-=6),D(s<1?255*((e-t)*s+t):s<3?255*e:s<4?255*((e-t)*(4-s)+t):255*t)),j=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4,U=t=>t<=.0031308?12.92*t:1.055*t**(1/2.4)-.055,w=(t,e,s,i)=>{const a=[0,0,0],r=[t,e,s];return i.forEach(((t,e)=>{t.forEach(((t,s)=>{a[e]+=t*r[s];}));})),a},x=(t,e,s)=>{e/=100;const i=(s/=100)<=.5?s*(e+1):s+e-s*e,a=2*s-i;return {R:$(a,i,(t/=60)+2),G:$(a,i,t),B:$(a,i,t-2)}},v=(t,e,s,i=1)=>{t/=255,e/=255,s/=255,i=Math.min(i,1);const a=Math.max(t,e,s),r=Math.min(t,e,s),n=a-r;let c=0,o=0;const A=(a+r)/2;if(0!==n){switch(a){case t:c=(e-s)/n%6;break;case e:c=(s-t)/n+2;break;case s:c=(t-e)/n+4;}c=D(60*c),c<0&&(c+=360),o=n/(1-Math.abs(2*A-1));}return {H:c,S:D(100*o),L:D(100*A),A:i}},V=(t,e,s)=>{const i=[t/255,e/255,s/255].map(j),a=w(i[0],i[1],i[2],X),r=((t,e,s)=>{const i=t=>t>(6/29)**3?Math.cbrt(t):t/(3*(6/29)**2)+4/29,a=i(t/N[0]),r=i(e/N[1]);return [116*r-16,500*(a-r),200*(r-i(s/N[2]))]})(a[0],a[1],a[2]);return {L:r[0],a:r[1],b:r[2]}},P=(t,e,s)=>{const i=((t,e,s)=>{const i=t=>t>6/29?t**3:3*(6/29)**2*(t-4/29),a=(t+16)/116,r=e/500,n=s/200;return [N[0]*i(a+r),N[1]*i(a),N[2]*i(a-n)]})(t,e,s),a=w(i[0],i[1],i[2],T).map(U);return {R:f(255*a[0],0,255),G:f(255*a[1],0,255),B:f(255*a[2],0,255)}},q=(t,e,s,i)=>({R:D(255*(1-t)*(i=1-i)),G:D(255*(1-e)*i),B:D(255*(1-s)*i)}),_=(t,e,s)=>{t/=255,e/=255,s/=255;const i=1-Math.max(t,e,s),a=1-i,r=a&&(a-e)/a,n=a&&(a-s)/a;return {C:D(100*(a&&(a-t)/a)),M:D(100*r),Y:D(100*n),K:D(100*i)}},z=(t,e)=>{if(t<0&&(t+=360),t>360&&(t-=360),360===t||0===t)return t;const s=[[0,120],[120,180],[180,240],[240,360]],i=[[0,60],[60,120],[120,240],[240,360]],a=e?i:s;let r=0,n=0,c=0,o=0;return (e?s:i).find(((e,s)=>t>=e[0]&&t<e[1]&&(r=e[0],n=e[1],c=a[s][0],o=a[s][1],!0))),c+(o-c)/(n-r)*(t-r)},Q=t=>t?", ":",",W=(t,e)=>{const s=y(Object.keys(t));return r[n[s]].reduce(((s,i,a)=>{const r=t[i];return void 0!==r&&s.push(e(r,a)),s}),[])},J=(t,e)=>t.replace(d,((t,s)=>`${e[+s-1]}`)),Z=(t,e,s=!1)=>{const{alphaUnit:i,legacyCSS:a,decimals:r}=e;return i!==L.PERCENT||a&&!s?D(t,r):`${D(100*t,r)}%`},tt={[t.HEX]:t=>{const e=W(t,(t=>(t=>{let e=D(t,0).toString(16).toUpperCase();return 1===e.length&&(e=`0${e}`),e})(D(t)))),s=4===e.length?"#{1}{2}{3}{4}":"#{1}{2}{3}";return J(s,e)},[t.RGB]:(t,e)=>{const{decimals:s,legacyCSS:i,spacesAfterCommas:a,rgbUnit:r}=e,n=Q(a),c=W(t,((t,i)=>r===L.PERCENT&&i<3?`${((t,e)=>D(t/255*100,e))(t,s)}%`:3===i?Z(t,e):D(t,s))),o=i?4===c.length?`rgba({1}${n}{2}${n}{3}${n}{4})`:`rgb({1}${n}{2}${n}{3})`:4===c.length?"rgb({1} {2} {3} / {4})":"rgb({1} {2} {3})";return J(o,c)},[t.HSL]:(t,e)=>{const{decimals:s,legacyCSS:i,spacesAfterCommas:a,anglesUnit:r}=e,n=Q(a),c=W(t,((t,i)=>{if(0===i&&r!==C.NONE){return `${D(Y(t,r),s)}${r}`}return 3===i?Z(t,e):D(t,s)})),o=i?4===c.length?`hsla({1}${n}{2}%${n}{3}%${n}{4})`:`hsl({1}${n}{2}%${n}{3}%)`:4===c.length?"hsl({1} {2}% {3}% / {4})":"hsl({1} {2}% {3}%)";return J(o,c)},[t.CIELab]:(t,e)=>{const{decimals:s,labUnit:i}=e,a=W(t,((t,a)=>{if(0===a){const e=D(F(t),s);return i===L.PERCENT?`${e}%`:`${e}`}return a<3?i===L.PERCENT?`${((t,e)=>D(t/125*100,e))(t,s)}%`:D(t,s):Z(t,e,!0)})),r=4===a.length?"lab({1} {2} {3} / {4})":"lab({1} {2} {3})";return J(r,a)},[t.CMYK]:(t,e)=>{const{decimals:s,legacyCSS:i,spacesAfterCommas:a,cmykUnit:r,cmykFunction:n}=e,c=Q(a),o=W(t,((t,i)=>r===L.PERCENT&&i<4?`${D(t,s)}%`:4===i?Z(t,e):D(t/100,s))),A=i?5===o.length?`${n}({1}${c}{2}${c}{3}${c}{4}${c}{5})`:`${n}({1}${c}{2}${c}{3}${c}{4})`:5===o.length?`${n}({1} {2} {3} {4} / {5})`:`${n}({1} {2} {3} {4})`;return J(A,o)}},et=t=>("string"==typeof t&&(t=h.test(t)?H(t)/100:+t),isNaN(+t)||t>1?1:D(t)),st=(t,e,i)=>e.reduce(((e,a)=>[...e,{...t,H:i===s.ADDITIVE?O(t.H+a):O(z(z(t.H,!1)+a,!0))}]),[{...t}]),it=(t,e)=>st(t,[30,-30],e),at=(t,e)=>st(t,[180],e),rt=(t,e)=>st(t,[150,-150],e),nt=(t,e)=>st(t,[120,-120],e),ct=(t,e)=>st(t,[60,-120,180],e),ot=(t,e)=>st(t,[90,-90,180],e),At=e=>"string"==typeof e?(e=>{let s;if(Object.keys(t).some((t=>{if(o[t].test(e))return s=t,!0})),!s&&~a.indexOf(e)&&(s=t.HEX),!s)throw new Error(m);return s})(e):(e=>{let s,i=!1;const a=y(Object.keys(e));if(n[a]&&(s=n[a]),s&&s===t.RGB){const a=Object.entries(e).some((t=>!u.test(`${t[1]}`))),r=Object.entries(e).some((t=>!(h.test(`${t[1]}`)||!u.test(`${t[1]}`)&&!isNaN(+t[1])&&+t[1]<=255)));a&&r&&(i=!0),a||(s=t.HEX);}if(!s||i)throw new Error(b);return s})(e),ht={[t.HEX](t){const e=(~a.indexOf(t)?i[t]:t).match(o.HEX),s={R:R(e[1]||e[5]),G:R(e[2]||e[6]),B:R(e[3]||e[7])},r=e[4]||e[8];return void 0!==r&&(s.A=R(r)/255),s},[t.RGB](t){const e=t.match(o.RGB),s=I(e[1]||e[5]),i=I(e[2]||e[6]),a=I(e[3]||e[7]),r=e[4]||e[8],n={R:Math.min(s,255),G:Math.min(i,255),B:Math.min(a,255)};return void 0!==r&&(n.A=et(r)),n},[t.HSL](t){const e=t.match(o.HSL),s=O(e[1]||e[5]),i=F(e[2]||e[6]),a=F(e[3]||e[7]),r=e[4]||e[8],n=x(s,i,a);return void 0!==r&&(n.A=et(r)),n},[t.CIELab](t){const e=t.match(o.CIELab),s=F(e[1]),i=G(e[2]),a=G(e[3]),r=e[4],n=P(s,i,a);return void 0!==r&&(n.A=et(r)),n},[t.CMYK](t){const e=t.match(o.CMYK),s=M(e[1]||e[6]),i=M(e[2]||e[7]),a=M(e[3]||e[8]),r=M(e[4]||e[9]),n=e[5]||e[10],c=q(s,i,a,r);return void 0!==n&&(c.A=et(n)),c}},ut={[t.HEX](t){const e={R:I(`${t.R}`),G:I(`${t.G}`),B:I(`${t.B}`)};return p(t,"A")&&(e.A=Math.min(I(`${t.A}`,!0),1)),e},[t.RGB](t){return this.HEX(t)},[t.HSL](t){const e=F(`${t.S}`),s=F(`${t.L}`),i=x(O(t.H),e,s);return p(t,"A")&&(i.A=et(t.A)),i},[t.CIELab](t){const e=F(`${t.L}`),s=G(`${t.a}`),i=G(`${t.b}`),a=P(e,s,i);return p(t,"A")&&(a.A=et(t.A)),a},[t.CMYK](t){const e=M(`${t.C}`),s=M(`${t.M}`),i=M(`${t.Y}`),a=M(`${t.K}`),r=q(e,s,i,a);return p(t,"A")&&(r.A=et(t.A)),r}},dt=(t,e=At(t))=>"string"==typeof t?ht[e](t):ut[e](t),lt={[t.HEX]:t=>({R:S(t.R),G:S(t.G),B:S(t.B)}),HEXA(t){const e=lt.HEX(t);return e.A=p(t,"A")?S(255*t.A):"0xFF",e},[t.RGB](t,e){const s=Ct(t,e);return p(s,"A")&&delete s.A,s},RGBA(t,e){const s=lt.RGB(t,e);return s.A=p(t,"A")?D(t.A):1,s},[t.HSL](t,e){const s=v(t.R,t.G,t.B);return delete s.A,Lt(s,e)},HSLA(t,e){const s=lt.HSL(t,e);return s.A=p(t,"A")?D(t.A,e):1,s},[t.CIELab](t,e){const s=V(t.R,t.G,t.B);return gt(s,e)},CIELabA(t,e){const s=lt.CIELab(t,e);return s.A=p(t,"A")?D(t.A,e):1,s},[t.CMYK]:(t,e)=>Bt(_(t.R,t.G,t.B),e),CMYKA(t,e){const s=lt.CMYK(t,e);return s.A=p(t,"A")?D(t.A,e):1,s}},Et=(e,s,i,a)=>{const r=At(e),n="string"==typeof e,c=dt(e,r),o="string"==typeof e&&p(c,"A")||"string"!=typeof e&&p(e,"A"),A=v(c.R,c.G,c.B,c.A);o||delete A.A;const h=i?A.L/(s+1):(100-A.L)/(s+1),u=Array(s).fill(null).map(((t,e)=>({...A,L:A.L+h*(e+1)*(1-2*+i)})));switch(r){case t.HEX:default:return u.map((t=>{const e=x(t.H,t.S,t.L);return o&&(e.A=t.A),n?o?tt.HEX({...e,A:D(255*e.A)}):tt.HEX(e):o?lt.HEXA(e):lt.HEX(e)}));case t.RGB:return u.map((t=>{const e=x(t.H,t.S,t.L);return o&&(e.A=t.A),n?tt.RGB(e,a):o?lt.RGBA(e,a.decimals):lt.RGB(e,a.decimals)}));case t.HSL:return u.map((t=>n?tt.HSL(t,a):o?lt.HSLA({...x(t.H,t.S,t.L),A:t.A},a.decimals):lt.HSL(x(t.H,t.S,t.L),a.decimals)));case t.CIELab:return u.map((t=>{const e=x(t.H,t.S,t.L);return n?tt.CIELab(o?lt.CIELabA(e,a.decimals):lt.CIELab(e,a.decimals),a):o?lt.CIELabA({...e,A:t.A},a.decimals):lt.CIELab(e,a.decimals)}))}},mt={buildHarmony(e,s,i,a){const r=At(e),n=dt(e,r),c=v(n.R,n.G,n.B,n.A),o="string"==typeof e&&p(n,"A")||"string"!=typeof e&&p(e,"A"),A="string"==typeof e;switch(r){case t.HEX:default:return o?this.HEXA(Lt(c,0),s,i,A):this.HEX(Lt(c,0),s,i,A);case t.HSL:return o?this.HSLA(c,s,i,A,a):this.HSL(c,s,i,A,a);case t.RGB:return o?this.RGBA(c,s,i,A,a):this.RGB(c,s,i,A,a);case t.CIELab:return o?this.CIELabA(c,s,i,A,a):this.CIELab(c,s,i,A,a)}},[t.HEX]:(t,e,s,i)=>e(t,s).map((t=>i?tt.HEX(x(t.H,t.S,t.L)):lt.HEX(x(t.H,t.S,t.L)))),HEXA:(t,e,s,i)=>e(t,s).map((t=>i?tt.HEX({...x(t.H,t.S,t.L),A:255*et(t.A)}):lt.HEXA({...x(t.H,t.S,t.L),A:et(t.A)}))),[t.RGB]:(t,e,s,i,a)=>e(t,s).map((t=>i?tt.RGB(x(t.H,t.S,t.L),a):lt.RGB(x(t.H,t.S,t.L),a.decimals))),RGBA:(t,e,s,i,a)=>e(t,s).map((t=>i?tt.RGB({...x(t.H,t.S,t.L),A:et(t.A)},a):lt.RGBA({...x(t.H,t.S,t.L),A:et(t.A)},a.decimals))),[t.HSL]:(t,e,s,i,a)=>e(t,s).map((t=>i?tt.HSL({H:t.H,S:t.S,L:t.L},a):lt.HSL(x(t.H,t.S,t.L),a.decimals))),HSLA:(t,e,s,i,a)=>e(t,s).map((t=>i?tt.HSL({...t,A:et(t.A)},a):lt.HSLA({...x(t.H,t.S,t.L),A:et(t.A)},a.decimals))),[t.CIELab]:(t,e,s,i,a)=>e(t,s).map((t=>{const e=x(t.H,t.S,t.L);return i?tt.CIELab(V(e.R,e.G,e.B),a):lt.CIELab(e,a.decimals)})),CIELabA:(t,e,s,i,a)=>e(t,s).map((t=>{const e=x(t.H,t.S,t.L);return i?tt.CIELab({...V(e.R,e.G,e.B),A:et(t.A)},a):lt.CIELabA({...e,A:et(t.A)},a.decimals)}))},bt={mix(t,e){const i=t.map((t=>{const e=At(t);return dt(t,e)})),a=e===s.SUBTRACTIVE?i.map((t=>{const e=((t,e,s)=>{const i=Math.min(t,e,s),a=Math.min(255-t,255-e,255-s),r=t-i,n=e-i,c=s-i,o=Math.min(r,n),A=r-o,h=(n+o)/2,u=(c+n-o)/2,d=Math.max(A,h,u)/Math.max(r,n,c),l=isNaN(d)||d===1/0||d<=0?1:d;return {R:A/l+a,Y:h/l+a,B:u/l+a}})(t.R,t.G,t.B);return p(t,"A")&&(e.A=t.A),e})):null;function r(t){const i=e===s.ADDITIVE?{R:0,G:0,B:0,A:0}:{R:0,Y:0,B:0,A:0};return t.reduce(((t,i)=>{const a=p(i,"A")?i.A:1,r={R:Math.min(t.R+i.R*a,255),B:Math.min(t.B+i.B*a,255),A:1-(1-a)*(1-t.A)},n="G"in t?t.G:t.Y,c="G"in i?i.G:i.Y;return {...r,...e===s.ADDITIVE?{G:Math.min(n+c*a,255)}:{Y:Math.min(n+c*a,255)}}}),i)}let n;if(e===s.ADDITIVE)n=r(i);else {const t=r(a);n=((t,e,s)=>{const i=Math.min(t,e,s),a=Math.min(255-t,255-e,255-s),r=t-i,n=e-i,c=s-i,o=Math.min(n,c),A=r+n-o,h=n+o,u=2*(c-o),d=Math.max(A,h,u)/Math.max(r,n,c),l=isNaN(d)||d===1/0||d<=0?1:d;return {R:A/l+a,G:h/l+a,B:u/l+a}})(t.R,t.Y,t.B),n.A=t.A;}return {R:D(n.R),G:D(n.G),B:D(n.B),A:f(n.A,0,1)}},[t.HEX](t,e,s){const i=this.mix(t,e);return delete i.A,s?tt.HEX(i):lt.HEX(i)},HEXA(t,e,s){const i=this.mix(t,e);return i.A=s?255*et(i.A):et(i.A),s?tt.HEX(i):lt.HEXA(i)},[t.RGB](t,e,s,i){const a=this.mix(t,e);return delete a.A,s?tt.RGB(a,i):lt.RGB(a,i.decimals)},RGBA(t,e,s,i){const a=this.mix(t,e);return s?tt.RGB(a,i):lt.RGBA(a,i.decimals)},[t.HSL](t,e,s,i){const a=this.mix(t,e),r=v(a.R,a.G,a.B);return delete a.A,delete r.A,s?tt.HSL(r,i):lt.HSL(a,i.decimals)},HSLA(t,e,s,i){const a=this.mix(t,e),r=v(a.R,a.G,a.B,a.A);return s?tt.HSL(r,i):lt.HSLA(a,i.decimals)},[t.CIELab](t,e,s,i){const a=this.mix(t,e),r=V(a.R,a.G,a.B);return delete a.A,s?tt.CIELab(r,i):lt.CIELabA(a,i.decimals)},CIELabA(t,e,s,i){const a=this.mix(t,e),r=V(a.R,a.G,a.B);return p(a,"A")&&(r.A=a.A),s?tt.CIELab(r,i):lt.CIELabA(a,i.decimals)}},Ct=(t,e)=>({R:D(t.R,e),G:D(t.G,e),B:D(t.B,e),...p(t,"A")?{A:D(t.A,e)}:{}}),Lt=(t,e)=>({H:D(t.H,e),S:D(t.S,e),L:D(t.L,e),...p(t,"A")?{A:D(t.A,e)}:{}}),gt=(t,e)=>({L:D(t.L,e),a:D(t.a,e),b:D(t.b,e)}),Bt=(t,e)=>({C:D(t.C,e),M:D(t.M,e),Y:D(t.Y,e),K:D(t.K,e)}),pt=(t,e,s,i)=>i(dt(t,e),s),Ht=(t,e,s,i,a)=>{s<1&&(s=5);const r=((t,e,s)=>{const i=s-1,a=(e.R-t.R)/i,r=(e.G-t.G)/i,n=(e.B-t.B)/i,c=et(t.A),o=(et(e.A)-c)/i;return Array(s).fill(null).map(((s,A)=>0===A?t:A===i?e:{R:D(t.R+a*A),G:D(t.G+r*A),B:D(t.B+n*A),A:D(c+o*A)}))})(dt(t),dt(e),s);return r.map((t=>a(t,i)))},Ft=(t,s,i,a)=>({[e.ANALOGOUS]:mt.buildHarmony(s,it,i,a),[e.COMPLEMENTARY]:mt.buildHarmony(s,at,i,a),[e.SPLIT_COMPLEMENTARY]:mt.buildHarmony(s,rt,i,a),[e.TRIADIC]:mt.buildHarmony(s,nt,i,a),[e.TETRADIC]:mt.buildHarmony(s,ct,i,a),[e.SQUARE]:mt.buildHarmony(s,ot,i,a)}[t]);class Rt{constructor(t,e={}){this._options=k(e,t),this.rgb=dt(t),this.updateHSL(),this.updateLab(),this.updateCMYK();}updateRGB(){this.rgb={...x(this.hsl.H,this.hsl.S,this.hsl.L),A:this.hsl.A};}updateRGBFromCMYK(){this.rgb={...q(this.cmyk.C,this.cmyk.M,this.cmyk.Y,this.cmyk.K),A:this.rgb.A};}updateRGBFromLab(){this.rgb={...P(this.lab.L,this.lab.a,this.lab.b),A:this.rgb.A};}updateHSL(){this.hsl=v(this.rgb.R,this.rgb.G,this.rgb.B,this.rgb.A);}updateLab(){this.lab={...V(this.rgb.R,this.rgb.G,this.rgb.B),A:this.rgb.A};}updateCMYK(){this.cmyk=_(this.rgb.R,this.rgb.G,this.rgb.B);}setOptions(t={}){return this._options={...this._options,...t},this}setH(t){return this.hsl.H=O(t),this.updateRGB(),this.updateLab(),this.updateCMYK(),this}setS(t){return this.hsl.S=f(t,0,100),this.updateRGB(),this.updateLab(),this.updateCMYK(),this}setL(t){return this.hsl.L=f(t,0,100),this.updateRGB(),this.updateLab(),this.updateCMYK(),this}setR(t){this.rgb.R=f(t,0,255),this.updateHSL(),this.updateLab(),this.updateCMYK();}setG(t){return this.rgb.G=f(t,0,255),this.updateHSL(),this.updateLab(),this.updateCMYK(),this}setB(t){return this.rgb.B=f(t,0,255),this.updateHSL(),this.updateLab(),this.updateCMYK(),this}setCIEL(t){return this.lab.L=f(t,0,100),this.updateRGBFromLab(),this.updateHSL(),this.updateCMYK(),this}setCIEa(t){return this.lab.a=f(t,-125,125),this.updateRGBFromLab(),this.updateHSL(),this.updateCMYK(),this}setCIEb(t){return this.lab.b=f(t,-125,125),this.updateRGBFromLab(),this.updateHSL(),this.updateCMYK(),this}setA(t){return this.hsl.A=this.rgb.A=f(t,0,1),this}setC(t){return this.cmyk.C=f(t,0,100),this.updateRGBFromCMYK(),this.updateHSL(),this.updateLab(),this}setM(t){return this.cmyk.M=f(t,0,100),this.updateRGBFromCMYK(),this.updateHSL(),this.updateLab(),this}setY(t){return this.cmyk.Y=f(t,0,100),this.updateRGBFromCMYK(),this.updateHSL(),this.updateLab(),this}setK(t){return this.cmyk.K=f(t,0,100),this.updateRGBFromCMYK(),this.updateHSL(),this.updateLab(),this}get options(){return this._options}get H(){return D(this.hsl.H,this.options.decimals)}get S(){return D(this.hsl.S,this.options.decimals)}get L(){return D(this.hsl.L,this.options.decimals)}get CIEL(){return D(this.lab.L,this.options.decimals)}get CIEa(){return D(this.lab.a,this.options.decimals)}get CIEb(){return D(this.lab.b,this.options.decimals)}get R(){return D(this.rgb.R,this.options.decimals)}get G(){return D(this.rgb.G,this.options.decimals)}get B(){return D(this.rgb.B,this.options.decimals)}get A(){return D(this.hsl.A,this.options.decimals)}get C(){return D(this.cmyk.C,this.options.decimals)}get M(){return D(this.cmyk.M,this.options.decimals)}get Y(){return D(this.cmyk.Y,this.options.decimals)}get K(){return D(this.cmyk.K,this.options.decimals)}get HEXObject(){return lt.HEX(this.rgb)}get HEXAObject(){return lt.HEXA(this.rgb)}get RGBObject(){return {R:this.R,G:this.G,B:this.B}}get RGBAObject(){return {...this.RGBObject,A:this.A}}get HSLObject(){return {H:this.H,S:this.S,L:this.L}}get HSLAObject(){return {...this.HSLObject,A:this.A}}get CIELabObject(){return {L:this.CIEL,a:this.CIEa,b:this.CIEb}}get CIELabAObject(){return {...this.CIELabObject,A:this.A}}get CMYKObject(){return {C:this.C,M:this.M,Y:this.Y,K:this.K}}get CMYKAObject(){return {...this.CMYKObject,A:this.A}}get HEX(){return tt.HEX({R:this.R,G:this.G,B:this.B})}get HEXA(){return tt.HEX({R:this.R,G:this.G,B:this.B,A:255*this.A})}get RGB(){return tt.RGB({R:this.R,G:this.G,B:this.B},this.options)}get RGBA(){return tt.RGB({R:this.R,G:this.G,B:this.B,A:this.A},this.options)}get HSL(){return tt.HSL({H:this.H,S:this.S,L:this.L},this.options)}get HSLA(){return tt.HSL({H:this.H,S:this.S,L:this.L,A:this.A},this.options)}get CIELab(){return tt.CIELab({L:this.CIEL,a:this.CIEa,b:this.CIEb},this.options)}get CIELabA(){return tt.CIELab({L:this.CIEL,a:this.CIEa,b:this.CIEb,A:this.A},this.options)}get CMYK(){return tt.CMYK({C:this.C,M:this.M,Y:this.Y,K:this.K},this.options)}get CMYKA(){return tt.CMYK({C:this.C,M:this.M,Y:this.Y,K:this.K,A:this.A},this.options)}static toHEXObject(t){const e=At(t);return pt(t,e,0,lt.HEX)}static toHEX(t){return tt.HEX(Rt.toHEXObject(t))}static toHEXAObject(t){const e=At(t);return pt(t,e,0,lt.HEXA)}static toHEXA(t){return tt.HEX(Rt.toHEXAObject(t))}static toRGBObject(t,e={}){const s=At(t);return pt(t,s,e.decimals,lt.RGB)}static toRGB(t,e={}){const s=At(t),i=k(e,t),a=pt(t,s,e.decimals,lt.RGB);return tt.RGB(a,i)}static toRGBAObject(t,e={}){const s=At(t);return pt(t,s,e.decimals,lt.RGBA)}static toRGBA(t,e={}){const s=At(t),i=k(e,t),a=pt(t,s,e.decimals,lt.RGBA);return tt.RGB(a,i)}static toHSLObject(t,e={}){const s=At(t);return pt(t,s,e.decimals,lt.HSL)}static toHSL(t,e={}){const s=At(t),i=k(e,t),a=pt(t,s,e.decimals,lt.HSL);return tt.HSL(a,i)}static toHSLAObject(t,e={}){const s=At(t);return pt(t,s,e.decimals,lt.HSLA)}static toHSLA(t,e={}){const s=At(t),i=k(e,t),a=pt(t,s,e.decimals,lt.HSLA);return tt.HSL(a,i)}static toCIELabObject(t,e={}){const s=At(t);return pt(t,s,e.decimals,lt.CIELab)}static toCIELab(t,e={}){const s=At(t),i=k(e,t),a=pt(t,s,e.decimals,lt.CIELab);return tt.CIELab(a,i)}static toCIELabAObject(t,e={}){const s=At(t);return pt(t,s,e.decimals,lt.CIELabA)}static toCIELabA(t,e={}){const s=At(t),i=k(e,t),a=pt(t,s,e.decimals,lt.CIELabA);return tt.CIELab(a,i)}static toCMYKObject(t,e={}){const s=At(t);return pt(t,s,e.decimals,lt.CMYK)}static toCMYK(t,e={}){const s=At(t),i=k(e,t),a=pt(t,s,e.decimals,lt.CMYK);return tt.CMYK(a,i)}static toCMYKAObject(t,e={}){const s=At(t);return pt(t,s,e.decimals,lt.CMYKA)}static toCMYKA(t,e={}){const s=At(t),i=k(e,t),a=pt(t,s,e.decimals,lt.CMYKA);return tt.CMYK(a,i)}static getBlendHEXObject(t,e,s=5){return Ht(t,e,s,0,lt.HEX)}static getBlendHEX(t,e,s=5){return Rt.getBlendHEXObject(t,e,s).map((t=>tt.HEX(t)))}static getBlendHEXAObject(t,e,s=5){return Ht(t,e,s,0,lt.HEXA)}static getBlendHEXA(t,e,s=5){return Rt.getBlendHEXAObject(t,e,s).map((t=>tt.HEX(t)))}static getBlendRGBObject(t,e,s,i){return "number"==typeof s?Ht(t,e,s,i?.decimals,lt.RGB):Ht(t,e,5,s?.decimals,lt.RGB)}static getBlendRGB(t,e,s,i){return "number"==typeof s?Ht(t,e,s,i?.decimals,lt.RGB).map((s=>tt.RGB(s,k(i||{},t,e)))):Ht(t,e,5,s?.decimals,lt.RGB).map((i=>tt.RGB(i,k(s||{},t,e))))}static getBlendRGBAObject(t,e,s,i){return "number"==typeof s?Ht(t,e,s,i?.decimals,lt.RGBA):Ht(t,e,5,s?.decimals,lt.RGBA)}static getBlendRGBA(t,e,s,i){return "number"==typeof s?Ht(t,e,s,i?.decimals,lt.RGBA).map((s=>tt.RGB(s,k(i||{},t,e)))):Ht(t,e,5,s?.decimals,lt.RGBA).map((i=>tt.RGB(i,k(s||{},t,e))))}static getBlendHSLObject(t,e,s,i){return Ht(t,e,"number"==typeof s?s:5,i?.decimals,lt.HSL)}static getBlendHSL(t,e,s,i){return "number"==typeof s?Ht(t,e,s,i?.decimals,lt.HSL).map((s=>tt.HSL(s,k(i||{},t,e)))):Ht(t,e,5,s?.decimals,lt.HSL).map((i=>tt.HSL(i,k(s||{},t,e))))}static getBlendHSLAObject(t,e,s,i){return "number"==typeof s?Ht(t,e,s,i?.decimals,lt.HSLA):Ht(t,e,5,s?.decimals,lt.HSLA)}static getBlendHSLA(t,e,s,i){return "number"==typeof s?Ht(t,e,s,i?.decimals,lt.HSLA).map((s=>tt.HSL(s,k(i||{},t,e)))):Ht(t,e,5,s?.decimals,lt.HSLA).map((i=>tt.HSL(i,k(s||{},t,e))))}static getBlendCIELabObject(t,e,s,i){return "number"==typeof s?Ht(t,e,s,i?.decimals,lt.CIELab):Ht(t,e,5,s?.decimals,lt.CIELab)}static getBlendCIELab(t,e,s,i){return "number"==typeof s?Ht(t,e,s,i?.decimals,lt.CIELab).map((s=>tt.CIELab(s,k(i||{},t,e)))):Ht(t,e,5,s?.decimals,lt.CIELab).map((i=>tt.CIELab(i,k(s||{},t,e))))}static getBlendCIELabAObject(t,e,s,i){return "number"==typeof s?Ht(t,e,s,i?.decimals,lt.CIELabA):Ht(t,e,5,s?.decimals,lt.CIELabA)}static getBlendCIELabA(t,e,s,i){return "number"==typeof s?Ht(t,e,s,i?.decimals,lt.CIELabA).map((s=>tt.CIELab(s,k(i||{},t,e)))):Ht(t,e,5,s?.decimals,lt.CIELabA).map((i=>tt.CIELab(i,k(s||{},t,e))))}static getMixHEXObject(t,e=s.ADDITIVE){return bt.HEX(t,e,!1)}static getMixHEX(t,e=s.ADDITIVE){return bt.HEX(t,e,!0)}static getMixHEXAObject(t,e=s.ADDITIVE){return bt.HEXA(t,e,!1)}static getMixHEXA(t,e=s.ADDITIVE){return bt.HEXA(t,e,!0)}static getMixRGBObject(t,e,i){return "string"==typeof e?bt.RGB(t,e,!1,k(i||{},...t)):bt.RGB(t,s.ADDITIVE,!1,k(e||{},...t))}static getMixRGB(t,e,i){return "string"==typeof e?bt.RGB(t,e,!0,k(i||{},...t)):bt.RGB(t,s.ADDITIVE,!0,k(e||{},...t))}static getMixRGBAObject(t,e,i){return "string"==typeof e?bt.RGBA(t,e,!1,k(i||{},...t)):bt.RGBA(t,s.ADDITIVE,!1,k(e||{},...t))}static getMixRGBA(t,e,i){return "string"==typeof e?bt.RGBA(t,e,!0,k(i||{},...t)):bt.RGBA(t,s.ADDITIVE,!0,k(e||{},...t))}static getMixHSLObject(t,e,i){return "string"==typeof e?bt.HSL(t,e,!1,k(i||{},...t)):bt.HSL(t,s.ADDITIVE,!1,k(e||{},...t))}static getMixHSL(t,e,i){return "string"==typeof e?bt.HSL(t,e,!0,k(i||{},...t)):bt.HSL(t,s.ADDITIVE,!0,k(e||{},...t))}static getMixHSLAObject(t,e,i){return "string"==typeof e?bt.HSLA(t,e,!1,k(i||{},...t)):bt.HSLA(t,s.ADDITIVE,!1,k(e||{},...t))}static getMixHSLA(t,e,i){return "string"==typeof e?bt.HSLA(t,e,!0,k(i||{},...t)):bt.HSLA(t,s.ADDITIVE,!0,k(e||{},...t))}static getMixCIELabObject(t,e,i){return "string"==typeof e?bt.CIELab(t,e,!1,k(i||{},...t)):bt.CIELab(t,s.ADDITIVE,!1,k(e||{},...t))}static getMixCIELab(t,e,i){return "string"==typeof e?bt.CIELab(t,e,!0,k(i||{},...t)):bt.CIELab(t,s.ADDITIVE,!0,k(e||{},...t))}static getMixCIELabAObject(t,e,i){return "string"==typeof e?bt.CIELabA(t,e,!1,k(i||{},...t)):bt.CIELabA(t,s.ADDITIVE,!1,k(e||{},...t))}static getMixCIELabA(t,e,i){return "string"==typeof e?bt.CIELabA(t,e,!0,k(i||{},...t)):bt.CIELabA(t,s.ADDITIVE,!0,k(e||{},...t))}static getShades(t,e,s){return "number"==typeof e?Et(t,e,!0,k(s||{},t)):Et(t,5,!0,k(e||{},t))}static getTints(t,e,s){return "number"==typeof e?Et(t,e,!1,k(s||{},t)):Et(t,5,!1,k(e||{},t))}static getHarmony(t,i,a,r){return `${i}`in e?Ft(i,t,K(a)?a:s.ADDITIVE,k(K(a)?r||{}:a||{},t)):K(i)?Ft(e.COMPLEMENTARY,t,i,k(a||{},t)):Ft(e.COMPLEMENTARY,t,s.ADDITIVE,k(i||{},t))}}

const components$4 = new Components();
const BaseComponent$3 = components$4.BaseComponent;

/**
 * Class description
 */
class ColorPicker extends BaseComponent$3 {
    /* eslint-disable require-jsdoc */
    static get observedAttributes() {
        return ['value'];
    }

    get value() {
        return hslaToHexAndRGB(this.hsla);
    }

    set value(value) {
        const checkedValue = this.processValue(value).HEX;
        this.setAttribute('value', checkedValue);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isRendered) return;

        if (name === 'value') {
            this.updateColorPickerState(newValue);
        }
    }

    constructor() {
        super();
        this.template = template$3;
        this.init = this.init.bind(this);

        this.lsPickerDragStart = this.lsPickerDragStart.bind(this);
        this.lsPickerDragMove = this.lsPickerDragMove.bind(this);
        this.lsPickerDragEnd = this.lsPickerDragEnd.bind(this);

        this.huePickerUpdate = this.huePickerUpdate.bind(this);
        this.alphaPickerUpdate = this.alphaPickerUpdate.bind(this);

        this.changeTabs = this.changeTabs.bind(this);
        this.inputColor = this.inputColor.bind(this);
    }

    init(data) {
        this.setupTemplate(data, () => {
            components$4.renderOnce(this);

            this.mode = 'HEX';

            this.lsPicker = this.querySelector('.guic-ls-picker');

            this.lsPickerHandle = this.querySelector('.guic-ls-picker-handle');
            this.lsPickerAttributeStyleMap = this.lsPickerHandle.attributeStyleMap;

            this.colorBox = this.querySelector('.guic-color-preview-box-color');

            this.huePicker = this.querySelector('.guic-hue-picker-slider');
            this.alphaPicker = this.querySelector('.guic-alpha-picker-slider');

            this.colorInput = this.querySelector('.guic-color-preview-input');
            this.tabs = this.querySelectorAll('.guic-color-preview-tab');

            this.value = this.getAttribute('value');


            this.attachEventListeners();
            this.isRendered = true;
        });
    }

    connectedCallback() {
        components$4
            .loadResource(this)
            .then(this.init)
            .catch(err => console.error(err));
    }

    disconnectedCallback() {
        this.detachEventListeners();
    }
    /* eslint-enable require-jsdoc */

    /**
     * Attaches the event listeners for the component
     */
    attachEventListeners() {
        this.lsPicker.addEventListener('mousedown', this.lsPickerDragStart);
        this.huePicker.addEventListener('sliderupdate', this.huePickerUpdate);
        this.alphaPicker.addEventListener('sliderupdate', this.alphaPickerUpdate);
        this.tabs.forEach((tab) => {
            tab.addEventListener('click', this.changeTabs);
        });
        this.colorInput.addEventListener('keyup', this.inputColor);
    }

    /**
     * Detaches the event listeners for the component
     */
    detachEventListeners() {
        if (!this.lsRendered) return;

        this.lsPicker.removeEventListener('mousedown', this.lsPickerDragStart);
        this.huePicker.removeEventListener('sliderupdate', this.huePickerUpdate);
        this.alphaPicker.removeEventListener('sliderupdate', this.alphaPickerUpdate);
        this.tabs.forEach((tab) => {
            tab.removeEventListener('click', this.changeTabs);
        });
    }

    /**
     * Validates the value attribute
     * @param {string} value - the color value to be validated
     * @returns {boolean}
     */
    processValue(value) {
        const defaultColor = new Rt('rgba(0, 0, 0, 1)');
        let color;

        try {
            color = new Rt(value);
        } catch (error) {
            return defaultColor;
        }

        return color;
    }

    /**
     * Handles the mouse down event on the color picker
     * @param {MouseEvent} e
     */
    lsPickerDragStart(e) {
        this.lsPickerRect = this.lsPicker.getBoundingClientRect();

        this.lsPickerDragMove(e);

        document.addEventListener('mousemove', this.lsPickerDragMove);
        document.addEventListener('mouseup', this.lsPickerDragEnd);
    }

    /**
     * Handles the mouse move event on the color picker
     * @param {MouseEvent} e
     */
    lsPickerDragMove(e) {
        this.setPickerCoordinates(e.clientX, e.clientY);
        this.updateSelectedColor();
        this.updateHandleStyle();
    }

    /**
     * Handles the mouse up event on the color picker
     */
    lsPickerDragEnd() {
        document.removeEventListener('mousemove', this.lsPickerDragMove);
        document.removeEventListener('mouseup', this.lsPickerDragEnd);
    }

    /**
     * Handles the mouse move event on the color picker
     * @param {number} clientX
     * @param {number} clientY
     */
    setPickerCoordinates(clientX, clientY) {
        this.pickerCoords = {
            x: clamp((clientX - this.lsPickerRect.left) / this.lsPickerRect.width, 0, 1) * 100,
            y: clamp((clientY - this.lsPickerRect.top) / this.lsPickerRect.height, 0, 1) * 100,
        };
    }

    /**
     * Updates the selected color based on the handle values
     */
    updateSelectedColor() {
        this.updateHSLAValues();
        this.dispatchColorChangeEvent();
        this.updateColorPreview();
        this.updateAlphaPickerColor();
    }

    /**
     * Updates the color preview box background color
     */
    updateColorPreview() {
        this.colorBox.style.backgroundColor = hslaToHexAndRGB(this.hsla).rgba;
        this.updateColorInput(this.mode === 'HEX' ? this.value.hex : this.value.rgba);
    }

    /**
     * Updates the HSLA values based on the handle values
     */
    updateHSLAValues() {
        const pickerY = 100 - this.pickerCoords.y;
        const lightness = pickerY - this.pickerCoords.x * (0.5 * (pickerY / 100));

        this.hsla = {
            H: this.hue,
            S: this.pickerCoords.x,
            L: lightness,
            A: this.alpha,
        };
    }

    /**
     * Updates the color picker state based on the value attribute
     * @param {string} value - the color value
     */
    updateColorPickerState(value) {
        const setValue = this.processValue(value).HSLAObject;

        this.hsla = setValue;

        this.hue = setValue.H;
        this.alpha = setValue.A;

        this.pickerCoords = { x: setValue.S, y: this.convertLigthnesToY(setValue.L, setValue.S) };

        this.dispatchColorChangeEvent();
        this.updateSliders();
        this.updateColorPreview();
        this.updateHandleStyle();
    }

    /**
     * Handles the hue picker update event
     * @param {CustomEvent} - {detail: number} the slider value
     */
    huePickerUpdate({ detail }) {
        this.hue = detail;
        const rgba = hslaToHexAndRGB({ H: detail, S: 100, L: 50, A: 1 }).rgba;

        this.lsPicker.style.backgroundImage = `linear-gradient(to bottom, transparent, black), linear-gradient(to right, white, ${rgba} 62%)`;
        this.alphaPicker.style.setProperty('--color', rgba);

        this.updateSelectedColor();
        this.updateHandleStyle();
    }

    /**
     * Handles the alpha picker update event
     * @param {CustomEvent} - {detail: number} the slider value
     */
    alphaPickerUpdate({ detail }) {
        this.alpha = detail / 100;
        this.updateSelectedColor();
    }

    /**
     * Updates the alpha picker color based on the current HSLA values
     */
    updateAlphaPickerColor() {
        const { H, S, L } = this.hsla;
        this.alphaPicker.style.setProperty('--color', hslaToHexAndRGB({ H, S, L, A: 1 }).rgba);
    }

    /**
     * Converts Ligthness to Y coordinate
     * @param {number} lightness
     * @param {number} saturation
     * @returns {number}
     */
    convertLigthnesToY(lightness, saturation) {
        return 100 - lightness / (1 - (0.5 * saturation) / 100);
    }

    /**
     * Dispatches the color change event
     */
    dispatchColorChangeEvent() {
        this.dispatchEvent(
            new CustomEvent('colorchange', {
                detail: this.value,
            })
        );
    }

    /**
     * Updates the handle position based on the handle values
     */
    updateHandleStyle() {
        this.lsPickerAttributeStyleMap.set('top', CSS.percent(this.pickerCoords.y));
        this.lsPickerAttributeStyleMap.set('left', CSS.percent(this.pickerCoords.x));

        this.lsPickerHandle.style.backgroundColor = hslaToHexAndRGB(this.hsla).rgba;
    }

    /**
     * Handles the tab change event
     * @param {MouseEvent} event
     */
    changeTabs(event) {
        this.mode = event.currentTarget.textContent;
        this.tabs.forEach((tab) => {
            tab.classList.remove('guic-color-preview-tab-active');
        });
        event.currentTarget.classList.add('guic-color-preview-tab-active');

        this.colorInput.value = this.mode === 'HEX' ? this.value.hex : this.value.rgba;
    }

    /**
     * Handles the color input event
     * @param {KeyboardEvent} event
     */
    inputColor(event) {
        if (event.keyCode !== 13) return;
        this.value = this.colorInput.value;
    }

    /**
     * Updates the color input value
     * @param {string} value
     */
    updateColorInput(value) {
        this.colorInput.value = value;
    }

    /**
     * Updates the sliders based on the current HSLA values
     */
    updateSliders() {
        this.huePicker.value = this.hue;
        this.alphaPicker.value = this.alpha * 100;
    }
}
components$4.defineCustomElement('gameface-color-picker', ColorPicker);

var template$2 = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-checkbox-wrapper\">    <div class=\"guic-checkbox-wrapper-inner\">        <component-slot data-name=\"checkbox-background\">            <div class=\"guic-checkbox-background\"></div>        </component-slot>        <component-slot data-name=\"check-mark\" style=\"display:none;\">            <div class=\"guic-check-mark\"></div>        </component-slot>    </div>    <component-slot data-name=\"checkbox-label\"><span class=\"guic-checkbox-label\">Click me!</span></component-slot></div>";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$3 = new Components();
const CustomElementValidator = components$3.CustomElementValidator;

/**
 * Class definition of the gameface checkbox custom element
 */
class Checkbox extends CustomElementValidator {
    // eslint-disable-next-line require-jsdoc
    static get observedAttributes() { return ['checked', 'disabled', 'value', 'name']; }

    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();
        this.template = template$2;

        this.stateSchema = {
            checked: { type: ['boolean'] },
            disabled: { type: ['boolean'] },
            value: { type: ['string'] },
            name: { type: ['string'] },
        };

        this.state = {
            checked: false,
            disabled: false,
            name: '',
            value: 'on',
        };

        this.toggleChecked = this.toggleChecked.bind(this);

        this.url = '/components/checkbox/template.html';
        this.init = this.init.bind(this);
    }

    /**
     * Custom element lifecycle method. Called when an attribute is changed.
     * @param {string} name
     * @param {string} oldValue
     * @param {string|boolean} newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isRendered) return;

        this.updateAttributeState(name, newValue);
    }

    /**
     * Will update the state properties linked with the checkbox attributes
     * @param {string} name
     * @param {string|boolean} value
     */
    updateAttributeState(name, value) {
        switch (name) {
            case 'checked':
                this.updateCheckedState(value !== null);
                break;
            case 'disabled':
                this.updateDisabledState(value !== null);
                break;
            case 'value':
            case 'name':
                this.updateState(name, value);
                break;
        }
    }

    /**
     * Update the state of the checkbox and its style
     * @param {boolean} value - whether the checkbox is checked or not
     */
    updateCheckedState(value) {
        this.updateState('checked', value);
        this.querySelector('[data-name="check-mark"]').style.display = value ? 'block' : 'none';
    }

    // eslint-disable-next-line require-jsdoc
    get value() {
        return this.state.value;
    }

    // eslint-disable-next-line require-jsdoc
    set value(value) {
        this.setAttribute('value', value);
    }

    // eslint-disable-next-line require-jsdoc
    get name() {
        return this.state.name;
    }

    // eslint-disable-next-line require-jsdoc
    set name(name) {
        this.setAttribute('name', name);
    }

    // eslint-disable-next-line require-jsdoc
    get checked() {
        return this.state.checked;
    }

    // eslint-disable-next-line require-jsdoc
    set checked(value) {
        value ? this.setAttribute('checked', '') : this.removeAttribute('checked');
    }

    // eslint-disable-next-line require-jsdoc
    get disabled() {
        return this.state.disabled;
    }

    // eslint-disable-next-line require-jsdoc
    set disabled(value) {
        if (value) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
    }

    /**
     * Update the checkbox's disabled state.
     * Set relevant styles and tabindex.
     * @param {boolean} value
     */
    updateDisabledState(value) {
        this.updateState('disabled', value);

        if (value) {
            this.firstChild.classList.add('guic-checkbox-disabled');
            this.setAttribute('tabindex', '-1');
        } else {
            this.firstChild.classList.remove('guic-checkbox-disabled');
            this.setAttribute('tabindex', '0');
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
     * Retrieves if the value is missing
     * @returns {boolean}
     */
    valueMissing() {
        return this.hasAttribute('required') && !this.state.checked;
    }

    /**
     * Method that checks if the data from the checkbox should be serialized
     * @returns {boolean}
     */
    willSerialize() {
        if (!this.state.checked || this.nameMissing()) return false;
        return true;
    }

    /**
     * Will set the checkbox initial state
     */
    initCheckboxState() {
        if (this.hasAttribute('checked')) this.updateAttributeState('checked', true);
        if (this.hasAttribute('disabled')) this.updateAttributeState('disabled', true);
        if (this.hasAttribute('value')) this.updateAttributeState('value', this.getAttribute('value'));
        if (this.hasAttribute('name')) this.updateAttributeState('name', this.getAttribute('name'));
    }

    /**
     * Initialize the custom component.
     * Set template, attach event listeners, setup initial state etc.
     * @param {object} data
    */
    init(data) {
        this.setupTemplate(data, () => {
            components$3.renderOnce(this);
            this.addEventListener('click', this.toggleChecked);
            this.initCheckboxState();
        });
    }

    // eslint-disable-next-line require-jsdoc
    connectedCallback() {
        components$3.loadResource(this)
            .then(this.init)
            .catch(err => console.error(err));
    }

    /**
     * Toggles the checkbox value. Called on click.
     * Updated the state and the visibility of the check mark.
    */
    toggleChecked() {
        if (this.disabled) return;

        this.checked = !this.state.checked;
    }
}

components$3.defineCustomElement('gameface-checkbox', Checkbox);

var template$1 = "<div>    <div class=\"guic-carousel\">        <div class=\"guic-carousel-content-wrapper\">            <component-slot data-name=\"carousel-content\"></component-slot>        </div>        <div class=\"guic-carousel-btn-next guic-carousel-arrow guic-carousel-right-arrow\">            <component-slot data-name=\"carousel-next\" class=\"guic-carousel-arrow-slot\">                <div class=\"guic-carousel-inner-arrow guic-carousel-inner-arrow-right\"></div>            </component-slot>        </div>        <div class=\"guic-carousel-btn-prev guic-carousel-arrow guic-carousel-left-arrow\">            <component-slot data-name=\"carousel-previous\" class=\"guic-carousel-arrow-slot\">                <div class=\"guic-carousel-inner-arrow guic-carousel-inner-arrow-left\"></div>            </component-slot>        </div>    </div>    <div class=\"guic-carousel-dots\"></div></div>";

const components$2 = new Components();
const BaseComponent$2 = components$2.BaseComponent;

const CONTENT_WRAPPER_SELECTOR = '.guic-carousel-content-wrapper';
const DOTS_CONTAINER_SELECTOR = '.guic-carousel-dots';
const DOT_SELECTOR = '.guic-carousel-dot';
const CAROUSEL_SELECTOR = '.guic-carousel';
const NEXT_BTN_SELECTOR = '.guic-carousel-btn-next';
const PREV_BTN_SELECTOR = '.guic-carousel-btn-prev';
const NEXT_ARROW_SELECTOR = '.guic-carousel-right-arrow';
const PREV_ARROW_SELECTOR = '.guic-carousel-left-arrow';

const DIRECTIONS = {
    LEFT: -1,
    RIGHT: 1,
};

/**
 * Class description
 */
class Carousel extends BaseComponent$2 {
    /* eslint-disable-next-line require-jsdoc */
    constructor() {
        super();
        this.template = template$1;
        this.init = this.init.bind(this);

        this._pageSize = 2;
        this._navArrowStepSize = 1;
        this._currentItemIndex = 0;
        this._currentPageIndex = 0;
        this.itemsDirection = 1;
    }

    /* eslint-disable-next-line require-jsdoc */
    connectedCallback() {
        components$2.loadResource(this)
            .then(this.init)
            .catch(err => console.error(err));
    }

    /* eslint-disable-next-line require-jsdoc */
    init(data) {
        this.setupTemplate(data, () => {
            components$2.renderOnce(this);

            this.contentWrapper = this.querySelector(CONTENT_WRAPPER_SELECTOR);
            components$2.waitForFrames(() => this.initSize());
            this.style.visibility = 'visible';

            this.createPaginationControls();
            this.attachControlButtonsListeners();

            this.shouldShowNavArrow(DIRECTIONS.RIGHT, this.nextStepIndex(this.navArrowStepSize));
            this.shouldShowNavArrow(DIRECTIONS.LEFT, this.prevStepIndex(this.navArrowStepSize));

            this.isRendered = true;
        });
    }

    /**
     * Setup the sized of the carouse based on the items
     * @returns {undefined}
     */
    initSize() {
        if (!this.items || !this.items[0]) return console.warn('No items were added to the carousel!');
        const { width, height } = this.items[0].getBoundingClientRect();
        this.itemWidth = width;
        this.itemHeight = height;

        this.resize();
        this.toggleActiveClass(this.items[0], true);
    }

    /**
     * Return the number of pages on the carousel.
     * Calculated runtime. Returns 0 if there are no items.
     */
    get pagesCount() {
        return (this.items?.length / this.pageSize) || 0;
    }

    /**
     * Return all carousel items.
     */
    get items() {
        return this.querySelector(CONTENT_WRAPPER_SELECTOR).children;
    }

    /**
     * Set the array of items to the carousel
     * @param {Array<HTMLElement>} value
     */
    set items(value) {
        this.contentWrapper.innerHTML = '';
        if (!(value instanceof Array)) {
            console.error(`Invalid type passed for items - it must be an array - received ${typeof value}`);
            return;
        }

        value.forEach((element) => {
            if (element instanceof HTMLElement) {
                this.contentWrapper.appendChild(element);
            } else {
                console.warn(`${element} is not an HTMLElement! It will not be added it to the carousel.`);
            }
        });

        components$2.waitForFrames(() => {
            this.initSize();
            this.createPaginationControls();
        });
    }

    /**
     * Return the length of all current items
     */
    get itemsLength() {
        return this.items.length;
    }

    /**
     * Return the indexes of all items that are currently visible on the carousel.
     * @returns {Array<string>}
     */
    get visibleItemsIndexes() {
        return Array.from({ length: this.pageSize }, (_, i) => i + this.currentItemIndex);
    }

    /**
     * Return an array of all currently visible HTMLElements on the carousel.
     * @returns {Array<HTMLElement>}
     */
    get visibleItems() {
        const items = this.items;
        return this.visibleItemsIndexes.map(idx => items[idx]);
    }

    /**
     * Return the left navigation arrow HTML Element.
     */
    get leftArrow() {
        return document.querySelector(PREV_ARROW_SELECTOR);
    }

    /**
     * Return the right navigation arrow HTML Element.
     */
    get rightArrow() {
        return document.querySelector(NEXT_ARROW_SELECTOR);
    }

    /**
     * Return the current step size of the carousel.
     */
    get navArrowStepSize() {
        return this._navArrowStepSize;
    }

    /**
     * Set the step size of the carousel.
     * @param {number} value
     */
    set navArrowStepSize(value) {
        this._navArrowStepSize = value;
    }

    /**
     * Return the currently active element on the carousel.
     * The counting starts from the element which is positioned at the leftmost side.
     */
    get currentItemIndex() {
        return this._currentItemIndex;
    }

    /**
     * Set the currently active item.
     * @param {number} value
     */
    set currentItemIndex(value) {
        const itemsElements = this.items;
        this.toggleActiveClass(itemsElements[this.currentItemIndex], false);
        this._currentItemIndex = value;
        this.moveTo(value);
        this.toggleActiveClass(itemsElements[this.currentItemIndex], true);
    }

    /**
     * Return the current page size.
     */
    get pageSize() {
        return this._pageSize;
    }

    /**
     * Set the current page size.
     * @param {number} value
     */
    set pageSize(value) {
        this._pageSize = value;
        this.resize();
        this.createPaginationControls();
    }

    /**
     * Returns the current page
     */
    get currentPage() {
        return Math.ceil(this.currentItemIndex / this.pageSize + 1);
    }

    /**
     * Set the current page index
     * Move the carousel to the specified page
     * @param {number} value
     */
    set currentPage(value) {
        if (value > this.pagesCount) value = this.pagesCount;
        if (value < 0) value = 1;
        this.moveTo(this.pageSize * value - this.pageSize);

        this.shouldShowNavArrow(DIRECTIONS.RIGHT, this.nextStepIndex(this.navArrowStepSize));
        this.shouldShowNavArrow(DIRECTIONS.LEFT, this.prevStepIndex(this.navArrowStepSize));
    }

    /**
     * Will set/remove active class for a carousel item
     * @param {HTMLElement} item
     * @param {boolean} active
     * @returns {undefined}
     */
    toggleActiveClass(item, active) {
        if (!item) {
            console.warn('Item argument is not valid for the "toggleActiveClass" method!');
            return;
        }

        item.classList.toggle('carousel-current-item', active);
    }

    /**
     * Hide one of the navigation arrows.
     * @param {number} direction - 1 for right arrow, -1 for left.
     * @returns {undefined}
     */
    hideArrow(direction) {
        if (direction === DIRECTIONS.RIGHT) return this.rightArrow.classList.add('guic-carousel-hidden');
        this.leftArrow.classList.add('guic-carousel-hidden');
    }

    /**
     * Show one of the navigation arrows.
     * @param {number} direction - 1 for right arrow, -1 for left.
     * @returns {undefined}
     */
    showArrow(direction) {
        if (direction === DIRECTIONS.RIGHT) return this.rightArrow.classList.remove('guic-carousel-hidden');
        this.leftArrow.classList.remove('guic-carousel-hidden');
    }

    /**
     * Check if the next item will overflow the carousel's boundaries.
     * @param {number} next - the index of the next element
     * @returns {boolean}
     */
    overflows(next) {
        return this.itemsLength - next < this.pageSize;
    }

    /**
     * Get the index of the next element based on the current step size.
     * @param {number} stepSize
     * @returns {number}
     */
    nextStepIndex(stepSize) {
        return (this.currentItemIndex + stepSize) % this.items.length;
    }

    /**
     * Get the index of the previous element based on the current step size.
     * @param {number} stepSize
     * @returns {number}
     */
    prevStepIndex(stepSize) {
        const itemsLength = this.items.length;
        return (this.currentItemIndex - stepSize + itemsLength) % itemsLength;
    }

    /**
     * Check if a nav arrow based on a given direction should be
     * visible - if navigating in that direction is possible
     * @param {number} direction - -1  for left and 1 for right
     * @param {number} nextIndex - the index of the next item
     * @returns {undefined}
     */
    shouldShowNavArrow(direction, nextIndex) {
        if (this.overflows(nextIndex)) return this.hideArrow(direction);
        this.showArrow(direction);
    }

    /**
     * Add an item to the carousel.
     * @param {HTMLElement} node
     * @param {index} index - the position at which to add it.
     */
    addItem(node, index) {
        if (index === undefined || index < 0) {
            this.contentWrapper.appendChild(node);
        } else {
            const referenceNode = this.items[index - 1];
            referenceNode.parentNode.insertBefore(node, referenceNode);
        }

        this.createPaginationControls();
    }

    /**
     * Remove an item from the carousel.
     * @param {number} index - the position from which to remove.
     */
    removeItem(index = 0) {
        const items = this.items;
        const itemsArr = Array.from(items);
        itemsArr[index].remove();
        this.createPaginationControls();
    }

    /**
     * Move the carousel to the previous element.
     * @param {number} pageSize
     */
    previous(pageSize = 1) {
        const itemsLength = this.items.length;
        let previous = (this.currentItemIndex - pageSize + itemsLength) % itemsLength;

        if (this.overflows(previous)) previous = 0;

        this.currentItemIndex = previous;
        this.moveTo(this.currentItemIndex);

        this.shouldShowNavArrow(DIRECTIONS.LEFT, this.prevStepIndex(this.navArrowStepSize));
        this.shouldShowNavArrow(DIRECTIONS.RIGHT, this.nextStepIndex(this.navArrowStepSize));
    }

    /**
     * Move the carousel to the next element.
     * @param {number} pageSize
     */
    next(pageSize = 1) {
        const next = (this.currentItemIndex + pageSize) % this.items.length;

        if (!this.overflows(next)) {
            this.currentItemIndex = next;
            this.moveTo(this.currentItemIndex);
        }

        this.shouldShowNavArrow(DIRECTIONS.LEFT, this.prevStepIndex(this.navArrowStepSize));
        this.shouldShowNavArrow(DIRECTIONS.RIGHT, this.nextStepIndex(this.navArrowStepSize));
    }

    /**
     * Move the carousel to a specific element based on given index.
     * @param {number} index
     */
    moveTo(index) {
        if (index < 0) index = 0;
        if (index > this.itemsLength) index = this.itemsLength - this.pageSize;

        this._currentItemIndex = index;
        this.contentWrapper.style.left = `${-index * this.itemWidth}px`;
    }

    /**
     * Create the pagination dots.
     * @param {number} page
     * @returns {HTMLElement}
     */
    createDot(page) {
        const dot = document.createElement('div');
        dot.classList.add('guic-carousel-dot');
        // do not use 0 as page number
        dot.dataset.page = page + 1;

        return dot;
    }

    /**
     * Create the pagination controls - the dots and attach click event handlers
     */
    createPaginationControls() {
        const container = this.querySelector(DOTS_CONTAINER_SELECTOR);
        container.innerHTML = '';

        for (let i = 0; i < this.pagesCount; i++) {
            container.appendChild(this.createDot(i));
        }

        const dots = container.querySelectorAll(DOT_SELECTOR);

        for (let i = 0; i < dots.length; i++) {
            dots[i].addEventListener('click', e => this.onClickOnNavDot(e));
        }
    }

    /**
     * Called when a navigation dot is clicked.
     * Navigates to the specific page.
     * @param {Event} e
     */
    onClickOnNavDot(e) {
        // page names start from 1 so we need to
        // detract 1 to get the page index
        const page = e.currentTarget.dataset.page - 1;
        this._currentPage = page;
        this.currentItemIndex = (Number(page) * this.pageSize);

        this.moveTo(this.currentItemIndex);
        this.shouldShowNavArrow(DIRECTIONS.RIGHT, this.nextStepIndex(this.navArrowStepSize));
        this.shouldShowNavArrow(DIRECTIONS.LEFT, this.prevStepIndex(this.navArrowStepSize));
    }

    /**
     * Resize the carousel based on the size of the elements.
     */
    resize() {
        this.querySelector(CAROUSEL_SELECTOR).style.width = this.pageSize * this.itemWidth + 'px';
        this.querySelector(CAROUSEL_SELECTOR).style.height = this.itemHeight + 'px';
        this.style.width = this.pageSize * this.itemWidth + 'px';
    }

    /**
     * Attach the event handlers of the control buttons - next, previous
     */
    attachControlButtonsListeners() {
        const singleNextButton = this.querySelector(NEXT_BTN_SELECTOR);
        const singlePreviousButton = this.querySelector(PREV_BTN_SELECTOR);

        singleNextButton.addEventListener('click', _ => this.next(1));
        singlePreviousButton.addEventListener('click', _ => this.previous(1));
    }

    /**
     * Rerender the carousel controls - dots and arrows
     */
    rerenderControls() {
        this.createPaginationControls();

        this.shouldShowNavArrow(DIRECTIONS.RIGHT, this.nextStepIndex(this.navArrowStepSize));
        this.shouldShowNavArrow(DIRECTIONS.LEFT, this.prevStepIndex(this.navArrowStepSize));
    }
}
components$2.defineCustomElement('gameface-carousel', Carousel);

var template = "<!--Copyright (c) Coherent Labs AD. All rights reserved. Licensed under the MIT License. See License.txt in the project root for license information. --><div class=\"guic-automatic-grid\">    <div class=\"guic-automatic-grid-container\"></div>    <component-slot data-name=\"item\"></component-slot></div>";

/* eslint-disable linebreak-style */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components$1 = new Components();

const maxColumns = 12; // Max number of columns as it's based on the grid component
const BaseComponent$1 = components$1.BaseComponent;

/**
 * Class definition of the gameface automatic grid custom element
 */
class AutomaticGrid extends BaseComponent$1 {
    /**
     * Formats floats to have only 1 decimal integer or if 0 to be parsed into an integer. Then replaces the decimal separator to "_" so it can be used as a css class
     * @param {number} number
     * @returns {string}
     */
    static formatFloat(number) {
        return `${parseFloat(number.toFixed(1))}`.replace('.', '_');
    }

    /**
     * Gets the first empty cell of the cells array
     * @returns {HTMLElement}
     */
    get firstEmptyCell() {
        return this._cells.find(cell => cell.childElementCount === 0);
    }

    /**
     * @constructor
     */
    constructor() {
        super();
        // use the template to create the base grid
        this.template = template;

        this.dragStart = this.dragStart.bind(this);
        this.dragMove = this.dragMove.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
        this.init = this.init.bind(this);
    }

    /**
    * Initialize the custom component.
    * Set template, attach event listeners, setup initial state etc.
    * @param {object} data
   */
    init(data) {
        this.setupTemplate(data, () => {
            // render the template
            components$1.renderOnce(this);

            // Get the grid container, where all of the cells will be
            this._gridContainer = this.querySelector('.guic-automatic-grid-container');

            this.buildGrid();
            this.addItemsToCells();
        });
    }

    /**
     * Called when the element was attached to the DOM.
     */
    connectedCallback() {
        // Get the number of columns. Max number of columns is 12
        this._columns = this.setColumns();
        // Get the number of rows. No max number of rows. If no row number is passed it defaults to 5
        this._rows = this.getAttribute('rows') || 5;

        // The number of cells in the grid
        this._numberOfCells = this._rows * this._columns;

        // If the items in the cells can be drag and dropped
        this._draggable = this.hasAttribute('draggable');

        // The array of cells
        this._cells = [];

        // Load the template
        components$1.loadResource(this)
            .then(this.init)
            .catch(err => console.error(err));
    }

    /**
     * Builds the grid, by adding rows and cells.
     */
    buildGrid() {
        // Loop through all of the cells
        for (let i = 0; i < this._numberOfCells; i++) {
            // Since we are using the grid component, we need to make a row element for each grid row. When the index of the cell is the begining of each column we create a new row.
            if (i % this._columns === 0) {
                const row = document.createElement('div');
                row.classList.add('guic-row');

                this._gridContainer.appendChild(row);
            }
            const element = document.createElement('div');

            element.classList.add('guic-automatic-grid-cell');
            element.classList.add(`guic-col-${AutomaticGrid.formatFloat(maxColumns / this._columns)}`); // We add the grid class to each cell based on the number of columns

            element.dataset.col = (i % this._columns) + 1; // We set the cell column so that it's available if we need it later. +1 so that columns don't start from 0
            element.dataset.row = Math.floor(i / this._columns) + 1; // We set the cell row so that it's available if we need it later. +1 so that rows don't start from 0

            this._cells.push(element);

            // Append the cell to the last created row
            this._gridContainer.lastChild.appendChild(element);
        }
    }

    /**
     * Adds the items to the cells. It's a separate function from the build grid, because if we have data-bind-for the grid will be built before the data-binding is applied.
     * This function can be used later after the engine is ready to add the data-bound items to the grid
     */
    addItemsToCells() {
        // The items we have added to the grid
        const items = Array.from(this.querySelectorAll('component-slot'));

        // We check if an item has data-bind-for and we skip adding the items before the data-binding. After data-binding the attribute is "data-bind-meta-for"
        if (items.findIndex(item => item.hasAttribute('data-bind-for')) >= 0) return;

        // The array of items that have a set position. If an item has only a row or col set, it won't be added here
        const itemsWithPositions = items.filter(item => item.hasAttribute('col') && item.hasAttribute('row'));

        // The array of items without a set position. Items with col or row only will also be added here
        const itemsWithoutPositions = items.filter(item => itemsWithPositions.indexOf(item) < 0);

        // We add the items with set position to their corresponding cell
        itemsWithPositions.forEach((item) => {
            // Get the corresponding cell for that item
            const matchingCell = this.getMatchingCell(item.getAttribute('col'), item.getAttribute('row'));

            // Check if there is already an item added to that cell. If there is move the item to the other array. This way we avoid items with duplicating col and row
            if (!matchingCell || matchingCell.childElementCount > 0) {
                itemsWithoutPositions.push(item);
                return;
            }

            matchingCell.appendChild(item);
        });

        // Append all of the other items to the first available free cell
        itemsWithoutPositions.forEach((item) => {
            this.firstEmptyCell.appendChild(item);
        });

        // If the grid is draggable here we attach the event listener to the items
        if (this._draggable) {
            items.forEach((item) => {
                item.addEventListener('mousedown', this.dragStart);
            });
        }
    }

    /**
     * Sets the number of columns. If we have more than the max number, the columns are set to the max number. If we don't have a column attribute set, the default is 6
     * @returns {number} - the number of columns for the grid
     */
    setColumns() {
        let columns = this.getAttribute('columns') || 6;

        if (columns > maxColumns) columns = maxColumns;

        return columns;
    }

    /**
     * Helper function to find the cell that is on the specified row and column
     * @param {Number} col
     * @param {Number} row
     * @returns {HTMLElement}
     */
    getMatchingCell(col, row) {
        return this._cells.find(cell => cell.dataset.col === col && cell.dataset.row === row);
    }

    /**
     * The function that triggers when we start to drag an item
     * @param {MouseEvent} event
     */
    dragStart(event) {
        // We set the draggedItem to the one we are dragging so it can be used in other functions.
        this._draggedItem = event.currentTarget;

        // Calculate offsetX and offsetY from the top left corner of the dragged item
        const offsetX = event.clientX - this._draggedItem.getBoundingClientRect().x;
        const offsetY = event.clientY - this._draggedItem.getBoundingClientRect().y;

        // Set the registry point for the drag to be the mouse cursor
        this._draggedItem.style.transform = `translateX(-${offsetX}px) translateY(-${offsetY}px)`;

        // Sets the position of the dragged element to be the same as the mouse
        this._draggedItem.style.left = `${event.clientX}px`;
        this._draggedItem.style.top = `${event.clientY}px`;

        // Add a class to make the element have a position absolute and become semi-transparent when dragging
        this._draggedItem.classList.add('guic-dragged');

        document.addEventListener('mousemove', this.dragMove);
        document.addEventListener('mouseup', this.dragEnd);
    }

    /**
     * Handler for dragging mouse
     * @param {HTMLEvent} event
     */
    dragMove(event) {
        // Sets the position of the dragged element to be the same as the mouse
        this._draggedItem.style.left = `${event.clientX}px`;
        this._draggedItem.style.top = `${event.clientY}px`;
    }

    /**
     * Handler when dragging mouse ends
     * @param {HTMLEvent} event
     */
    dragEnd(event) {
        // Removes the class that was added when the drag started
        this._draggedItem.classList.remove('guic-dragged');

        this.dropItem(event.target);

        // Reset the registry point to the top left
        this._draggedItem.style.transform = `translateX(0) translateY(0)`;

        // Removes the dragged item
        this._draggedItem = null;

        document.removeEventListener('mousemove', this.dragMove);
        document.removeEventListener('mouseup', this.dragEnd);
    }

    /**
     * When we stop the drag, we run this function to check if the drop target is a valid target.
     * @param {HTMLElement} target
     */
    dropItem(target) {
        // Check if the target is a cell
        const cell = target.classList.contains('guic-automatic-grid-cell') ?
            target :
            target.closest('.guic-automatic-grid-cell') || null;

        // If it's not, the function will end
        if (!cell) return;

        // Check if the drop target cell is not empty
        if (cell.childElementCount > 0) {
            const dropCellIndex = this._cells.indexOf(cell);

            // Get the closest empty cell distance so we can shift the elements in that direction
            let closestEmptyCellDistance = this._cells.reduce((acc, el, index) => {
                if (el.childElementCount === 0 || el === this._draggedItem.parentNode) {
                    const distance = dropCellIndex - index;
                    return Math.abs(distance) < acc ? distance : acc;
                }
                return acc;
            }, this._cells.length);

            // We set the direction to be the reverse so we can move the items in the correct position
            closestEmptyCellDistance *= -1;

            // Get the direction of which the for loop should go. It's either 1 or -1
            const direction = closestEmptyCellDistance / Math.abs(closestEmptyCellDistance);

            // Shift the cells to the nearest empty one
            for (let i = dropCellIndex; i !== dropCellIndex + closestEmptyCellDistance; i += direction) {
                this._cells[i + direction].appendChild(this._cells[i].firstChild);
            }
        }

        cell.appendChild(this._draggedItem);
    }
}

components$1.defineCustomElement('gameface-automatic-grid', AutomaticGrid);

/* eslint-disable linebreak-style */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Coherent Labs AD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const components = new Components();
const BaseComponent = components.BaseComponent;

const PADDING_BOTTOM = 16;

/**
 * AccordionMenu component, allows you to create a menu with drawers that can be expanded or shrunk on click
 */
class AccordionMenu extends BaseComponent {
    // eslint-disable-next-line require-jsdoc
    static get observedAttributes() { return ['multiple']; }

    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();

        this.panelClick = this.panelClick.bind(this);

        this.stateSchema = {
            multiple: { type: ['boolean'] },
        };

        this.state = {
            multiple: false,
        };
    }

    // eslint-disable-next-line require-jsdoc
    set multiple(value) {
        value ? this.setAttribute('multiple', '') : this.removeAttribute('multiple');
    }

    // eslint-disable-next-line require-jsdoc
    get multiple() {
        return this.state.multiple;
    }

    /**
     * Custom element lifecycle method. Called when an attribute is changed.
     * @param {string} name
     * @param {string} oldValue
     * @param {string|boolean} newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isRendered) return;

        if (name === 'multiple') this.updateMultipleState(newValue !== null);
    }


    /**
     * Will update the multiple state of the accordion menu
     * @param {boolean} value
     * @returns {undefined}
     */
    updateMultipleState(value) {
        this.updateState('multiple', value);
        if (this.multiple) return;

        // If there are multiple expanded menus leave the first one opened when the `multiple` option is disabled
        // If there are expanded elements that are disabled we need to skip them
        const expanded = [...this.querySelectorAll('[expanded]')].filter(el => !el.disabled);
        if (expanded.length > 1) {
            expanded.shift();
            this.closeExpanded(expanded);
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

    // eslint-disable-next-line require-jsdoc
    connectedCallback() {
        // Check if it has the multiple attribute
        this.state.multiple = this.hasAttribute('multiple');

        // Remove the border from the last panel
        this.lastElementChild.classList.add('guic-accordion-last-panel');

        this.addEventListener('click', this.panelClick);
        // In order for the attributeChangedCallback to work we need to set the isRendered method to true
        // Otherwise attributeChangedCallback will be triggered before the connectedCallback and produce problems
        this.isRendered = true;
    }

    /**
     * The function that fires when you click a header in the accordion menu. It makes the panels expand or shrink
     * @param {MouseEvent} event
     */
    panelClick(event) {
        // Using event propagation to make sure panels expand and shrink only when clicking the header. Also makes sure that clicking on disabled panels doesn't do anything.
        // Also using toLowerCase as in the browser tagNames are with capital letters whereas in Gameface they are with lowercase
        const isHeaderEnabled =
            event.target.tagName.toLowerCase() === 'gameface-accordion-header' &&
            !event.target.parentNode.disabled;

        if (isHeaderEnabled) {
            const isExpanded = event.target.parentNode.expanded;
            // If we have a single accordion menu we need to make sure we close the expanded panels before we expand a new one.
            // We also check if the clicked panel is already expanded, if it is we expect that other panels are already shrunk and we don't need to shrink them as well.
            if (!this.multiple && !isExpanded) this.closeExpanded();

            // Change the expanded value with its opposite
            event.target.parentNode.expanded = !isExpanded;
        }
    }

    /**
     * Close all panels that have the expanded attribute
     * @param {Array<HTMLElement>} elements - An array with elements that should be closed
     */
    closeExpanded(elements = []) {
        const expanded = !elements || !elements.length ? this.querySelectorAll('[expanded]') : elements;
        for (let i = 0; i < expanded.length; i++) {
            const panel = expanded[i];

            panel.togglePanel(false);
        }
    }
}

/**
 * The panel that contains the header and content and expands
 */
class AccordionPanel extends HTMLElement {
    // eslint-disable-next-line require-jsdoc
    static get observedAttributes() { return ['disabled', 'expanded']; }

    /**
     * We get the height of the content to make a smooth transition
     */
    get _contentHeight() {
        return this._content.scrollHeight;
    }

    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();

        this.stateSchema = {
            disabled: { type: ['boolean'] },
            expanded: { type: ['boolean'] },
        };

        this.state = {
            disabled: false,
            expanded: false,
        };
    }

    // eslint-disable-next-line require-jsdoc
    set expanded(value) {
        value ? this.setAttribute('expanded', '') : this.removeAttribute('expanded');
    }

    // eslint-disable-next-line require-jsdoc
    get expanded() {
        return this.state.expanded;
    }

    // eslint-disable-next-line require-jsdoc
    set disabled(value) {
        value ? this.setAttribute('disabled', '') : this.removeAttribute('disabled');
    }

    // eslint-disable-next-line require-jsdoc
    get disabled() {
        return this.state.disabled;
    }

    /**
    * Custom element lifecycle method. Called when an attribute is changed.
    * @param {string} name
    * @param {string} oldValue
    * @param {string|boolean} newValue
    */
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.isRendered) return;

        this.updateAttributeState(name, newValue);
    }

    /**
    * Will update the state properties linked with the accordion panel attributes
    * @param {string} name
    * @param {string|boolean} value
    */
    updateAttributeState(name, value) {
        switch (name) {
            case 'expanded':
                this.updateExpandedState(value !== null);
                break;
            case 'disabled':
                this.updateDisabledState(value !== null);
                break;
        }
    }

    /**
     * Will update the disabled state of the accordion panel
     * @param {boolean} value
     */
    updateDisabledState(value) {
        this.state.disabled = value;
        this.toggleDisabled();
    }

    /**
     * Will update the expanded state of the accordion panel
     * @param {boolean} value
     */
    updateExpandedState(value) {
        this.state.expanded = value;
        // If the panel is expanded we set the height to 0 and if it's not we set it to the height of the content + padding. We don't use padding in the CSS as we need to clear it as well when shrinking panels
        !this.expanded ?
            this._content.toggleContentExpansion(0) :
            this._content.toggleContentExpansion(this._contentHeight + PADDING_BOTTOM);

        // We rotate the caret of the header depending if it's expanded or not
        this._header.rotateCaret(!this.expanded);
    }

    // eslint-disable-next-line require-jsdoc
    connectedCallback() {
        this.state.expanded = this.hasAttribute('expanded');
        this.state.disabled = this.hasAttribute('disabled');

        this._content = this.querySelector('gameface-accordion-content');
        this._header = this.querySelector('gameface-accordion-header');

        this.toggleDisabled();

        // If a panel is expanded on load we wait 3 frames so that we have the correct content height and expand it
        if (this.expanded) {
            components.waitForFrames(() => {
                this.updateExpandedState(true);
            }, 3);
        }

        // In order for the attributeChangedCallback to work we need to set the isRendered method to true
        // Otherwise attributeChangedCallback will be triggered before the connectedCallback and produce problems
        this.isRendered = true;
    }

    /**
     * Will add disabled class if the accordion panel is disabled
     */
    toggleDisabled() {
        this.classList.toggle('guic-accordion-panel-disabled', this.disabled);
    }

    /**
     * Toggles the panel to either expand or shrink based if it has the expanded attribute
     * @param {boolean} visible - If the panel is visible or not
     * @param {boolean} toggleDisabled - If to force toggle the panel even if it is disabled
     */
    togglePanel(visible) {
        if (this.disabled) return;

        this.expanded = visible;
    }
}

/**
 * Class definition of the gameface accordion header custom element
 */
class AccordionHeader extends HTMLElement {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();
    }

    /**
     * We add the caret from the JS so users don't have to manually with slots.
     */
    connectedCallback() {
        this._caret = document.createElement('div');
        this._caret.classList.add('guic-accordion-header-caret');

        // Clear any carets on rerender
        // eslint-disable-next-line no-self-assign
        this.textContent = this.textContent;

        this.appendChild(this._caret);
    }

    /**
     * Rotating the caret depending on whether the panel is expanded or not
     * @param {Boolean} isExpanded
     */
    rotateCaret(isExpanded) {
        this._caret.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
    }
}

/**
 * Class definition of the gameface accordion content custom element
 */
class AccordionContent extends HTMLElement {
    // eslint-disable-next-line require-jsdoc
    constructor() {
        super();
    }

    /**
     * Sets the height of the panel to create the expanding and shrinking animations
     * @param {Number} number
     */
    toggleContentExpansion(number) {
        this.style.height = `${number}px`;
    }
}

components.defineCustomElement('gameface-accordion-menu', AccordionMenu);
components.defineCustomElement('gameface-accordion-panel', AccordionPanel);
components.defineCustomElement('gameface-accordion-header', AccordionHeader);
components.defineCustomElement('gameface-accordion-content', AccordionContent);

export { AccordionContent, AccordionHeader, AccordionMenu, AccordionPanel, BrowserHistory, GamefaceBottomMenu, GamefaceLeftMenu, GamefaceMenu, GamefaceRightMenu, HashHistory, Modal, Route, Router, TabHeading, TabPanel, Tabs };
