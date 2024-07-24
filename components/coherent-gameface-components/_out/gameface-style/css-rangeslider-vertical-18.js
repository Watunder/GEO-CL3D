var styleText = "/*--------------------------------------------------------------------------------------------- *  Copyright (c) Coherent Labs AD. All rights reserved. *  Licensed under the MIT License. See License.txt in the project root for license information. *--------------------------------------------------------------------------------------------*/.guic-vertical-rangeslider-wrapper{width:5vh;display:flex;height:40vh;margin:10vh;display:flex;justify-content:center;user-select:none;}.guic-vertical-rangeslider{position:relative;width:5px;height:100%;background-color:rgba(0, 0, 0, 0.3);display:flex;align-items:center;flex-direction:column;}.guic-vertical-rangeslider-handle{position:absolute;transform:translateY(-50%);height:20px;width:20px;border-radius:50%;background-color:#00ccff;cursor:pointer;z-index:2;}.guic-vertical-rangeslider-bar{position:absolute;top:100%;left:0px;height:50%;width:100%;background-color:#0085a7;transform:translateY(-100%);}.guic-vertical-rangeslider-grid{display:flex;flex-direction:column-reverse;position:absolute;left:100%;height:100%;justify-content:space-between;}.guic-rangeslider-vertical-grid-pol-container{display:flex;flex-direction:row;align-items:center;height:2px;}.guic-rangeslider-vertical-grid-pol{width:10px;height:2px;background-color:black;}.guic-rangeslider-vertical-grid-text{color:black;font-size:0.8rem;}.guic-rangeslider-vertical-pol-without-text{width:5px;}.guic-vertical-rangeslider-thumb{position:absolute;right:300%;/* Since the percent of the left/right property is based on the width of the parent, to position the handle to the left we need 3x the width */    transform:translateY(-50%);background-color:#0085a7;padding:5px;border-radius:5px;color:white;}";

let style = document.createElement("style");style.innerHTML = styleText;document.head.appendChild(style);
