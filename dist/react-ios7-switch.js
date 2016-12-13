!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("react")):"function"==typeof define&&define.amd?define(["classnames","react"],t):"object"==typeof exports?exports.ReactIos7Switch=t(require("classnames"),require("react")):e.ReactIos7Switch=t(e.classnames,e.react)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=r(i);t.default=s.default},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(5);var c=n(6),u=r(c),l=function(t){function n(e){i(this,n);var t=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={checked:e.checked},t}return o(n,t),a(n,[{key:"_click",value:function(e){this.setState({checked:!this.state.checked}),e.preventDefault()}},{key:"render",value:function(){return e.createElement("label",{onClick:this._click.bind(this),"data-theme":this.props.theme,"data-disabled":this.props.disabled,style:{fontSize:this.props.size},className:(0,u.default)("react-ios7-switch",this.props.cssClass)},e.createElement("input",{type:"checkbox",checked:this.state.checked,disabled:this.props.disabled}),e.createElement("span",null))}}]),n}(e.Component);l.propTypes={theme:e.PropTypes.string,disabled:e.PropTypes.bool,size:e.PropTypes.string,cssClass:e.PropTypes.string,checked:e.PropTypes.bool},l.defaultProps={theme:"green",disabled:null,size:"30px",cssClass:"",checked:!1},t.default=l}).call(t,n(7))},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".react-ios7-switch{display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;tap-highlight-color:transparent}.react-ios7-switch input{opacity:0;position:absolute}.react-ios7-switch input+span{position:relative;display:inline-block;width:1.65em;height:1em;background:#fff;box-shadow:inset 0 0 0 .0625em #e9e9e9;border-radius:.5em;vertical-align:-.15em;-webkit-transition:all .4s cubic-bezier(.17,.67,.43,.98);transition:all .4s cubic-bezier(.17,.67,.43,.98)}.react-ios7-switch:active+span,.react-ios7-switch input+span:active{box-shadow:inset 0 0 0 .73em #e9e9e9}.react-ios7-switch input+span:after{position:absolute;display:block;content:'';width:.875em;height:.875em;border-radius:.4375em;top:.0625em;left:.0625em;background:#fff;box-shadow:inset 0 0 0 .03em rgba(0,0,0,.1),0 0 .05em rgba(0,0,0,.05),0 .1em .2em rgba(0,0,0,.2);-webkit-transition:all .25s ease-out;transition:all .25s ease-out}.react-ios7-switch:active input+span:after,.react-ios7-switch input+span:active:after{width:1.15em}.react-ios7-switch input:checked+span:after{left:.7125em}.react-ios7-switch:active input:checked+span:after,.react-ios7-switch input:checked+span:active:after{left:.4375em}.react-ios7-switch input:focus+span:after{box-shadow:inset 0 0 0 .03em rgba(0,0,0,.15),0 0 .05em rgba(0,0,0,.08),0 .1em .2em rgba(0,0,0,.3);background:#fff}.react-ios7-switch input:focus+span{box-shadow:inset 0 0 0 .0625em #dadada}.react-ios7-switch[data-disabled]{pointer-events:none;opacity:.6}.react-ios7-switch[data-theme=green] input:checked+span{box-shadow:inset 0 0 0 .73em #4cd964}.react-ios7-switch[data-theme=green] input:focus:checked+span{box-shadow:inset 0 0 0 .73em #2ac845}.react-ios7-switch[data-theme=blue] input:checked+span{box-shadow:inset 0 0 0 .73em #26a2ff}.react-ios7-switch[data-theme=blue] input:focus:checked+span{box-shadow:inset 0 0 0 .73em #008af2}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(r[s]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=d[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(u(r.parts[s],t))}else{for(var o=[],s=0;s<r.parts.length;s++)o.push(u(r.parts[s],t));d[r.id]={id:r.id,refs:1,parts:o}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],s=i[0],o=i[1],a=i[2],c=i[3],u={css:o,media:a,sourceMap:c};n[s]?n[s].parts.push(u):t.push(n[s]={id:s,parts:[u]})}return t}function s(e,t){var n=m(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",s(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",s(e,t),t}function u(e,t){var n,r,i;if(t.singleton){var s=y++;n=v||(v=a(t)),r=l.bind(null,n,s,!1),i=l.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=f.bind(null,n),i=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=p.bind(null,n),i=function(){o(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function l(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,i);else{var s=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var s=[],o=0;o<n.length;o++){var a=n[o],c=d[a.id];c.refs--,s.push(c)}if(e){var u=i(e);r(u,t)}for(var o=0;o<s.length;o++){var c=s[o];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete d[c.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t}])});
//# sourceMappingURL=react-ios7-switch.js.map