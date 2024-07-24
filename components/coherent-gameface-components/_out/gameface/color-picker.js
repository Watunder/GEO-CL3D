import { Components } from '../gameface.js';
import './rangeslider.js';

var template = "<div class=\"guic-color-picker\">    <div class=\"guic-ls-picker\">        <div class=\"guic-horizontal-rangeslider-handle guic-ls-picker-handle\"></div>    </div>    <div class=\"guic-hue-picker\">        <gameface-rangeslider class=\"guic-hue-picker-slider\" min=\"0\" max=\"360\"></gameface-rangeslider>    </div>    <div class=\"guic-alpha-picker\">        <gameface-rangeslider class=\"guic-alpha-picker-slider\"></gameface-rangeslider>    </div>    <div class=\"guic-color-preview-container\">        <div class=\"guic-color-preview-tabs\">            <div class=\"guic-color-preview-tab guic-color-preview-tab-active\">HEX</div>            <div class=\"guic-color-preview-tab\">RGBA</div>        </div>        <div class=\"guic-color-preview\">            <div class=\"guic-color-preview-box\">                <div class=\"guic-color-preview-box-color\"></div>            </div>            <input class=\"guic-color-preview-input\" />        </div>    </div></div>";

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

const components = new Components();
const BaseComponent = components.BaseComponent;

/**
 * Class description
 */
class ColorPicker extends BaseComponent {
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
        this.template = template;
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
            components.renderOnce(this);

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
        components
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
components.defineCustomElement('gameface-color-picker', ColorPicker);

export { ColorPicker as default };
