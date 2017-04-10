!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("react")):"function"==typeof define&&define.amd?define(["classnames","noop","react"],t):"object"==typeof exports?exports.ReactIos7Switch=t(require("classnames"),require("noop"),require("react")):e.ReactIos7Switch=t(e.classnames,e.noop,e.react)}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o);t.default=i.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,c,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(5);var p=n(8),f=r(p),d=n(6),h=r(d),b=n(7),v=r(b),m=(c=s=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=u({},e),n}return a(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e,t){this.setState(e)}},{key:"_onClick",value:function(e){var t=this;e.preventDefault(),this.setState({value:!this.state.value},function(){var e=t.state.value;t.props.onChange({target:{value:e}})})}},{key:"_onChange",value:function(e){}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.size,r=e.theme,o=e.disabled;return f.default.createElement("label",{onClick:this._onClick.bind(this),"data-theme":r,"data-disabled":o,style:{fontSize:n},className:(0,h.default)("react-ios7-switch",t)},f.default.createElement("input",{type:"checkbox",onChange:this._onChange.bind(this),checked:this.state.value,disabled:o}),f.default.createElement("span",null))}}]),t}(p.PureComponent),s.propTypes={theme:p.PropTypes.string,disabled:p.PropTypes.bool,size:p.PropTypes.string,className:p.PropTypes.string,value:p.PropTypes.bool,onChange:p.PropTypes.func},s.defaultProps={theme:"green",disabled:null,size:"30px",className:"",value:!1,onChange:v.default},c);t.default=m},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,'.react-ios7-switch{display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;tap-highlight-color:transparent}.react-ios7-switch input{opacity:0;position:absolute}.react-ios7-switch input+span{position:relative;display:inline-block;width:1.65em;height:1em;background:#fff;box-shadow:inset 0 0 0 .0625em #e9e9e9;border-radius:.5em;vertical-align:-.15em;-webkit-transition:all .4s cubic-bezier(.17,.67,.43,.98);transition:all .4s cubic-bezier(.17,.67,.43,.98)}.react-ios7-switch:active+span,.react-ios7-switch input+span:active{box-shadow:inset 0 0 0 .73em #e9e9e9}.react-ios7-switch input+span:after{position:absolute;display:block;content:"";width:.875em;height:.875em;border-radius:.4375em;top:.0625em;left:.0625em;background:#fff;box-shadow:inset 0 0 0 .03em rgba(0,0,0,.1),0 0 .05em rgba(0,0,0,.05),0 .1em .2em rgba(0,0,0,.2);-webkit-transition:all .25s ease-out;transition:all .25s ease-out}.react-ios7-switch:active input+span:after,.react-ios7-switch input+span:active:after{width:1.15em}.react-ios7-switch input:checked+span:after{left:.7125em}.react-ios7-switch:active input:checked+span:after,.react-ios7-switch input:checked+span:active:after{left:.4375em}.react-ios7-switch input:focus+span:after{box-shadow:inset 0 0 0 .03em rgba(0,0,0,.15),0 0 .05em rgba(0,0,0,.08),0 .1em .2em rgba(0,0,0,.3);background:#fff}.react-ios7-switch input:focus+span{box-shadow:inset 0 0 0 .0625em #dadada}.react-ios7-switch[data-disabled]{pointer-events:none;opacity:.6}.react-ios7-switch[data-theme=green] input:checked+span{box-shadow:inset 0 0 0 .73em #4cd964}.react-ios7-switch[data-theme=green] input:focus:checked+span{box-shadow:inset 0 0 0 .73em #2ac845}.react-ios7-switch[data-theme=blue] input:checked+span{box-shadow:inset 0 0 0 .73em #26a2ff}.react-ios7-switch[data-theme=blue] input:focus:checked+span{box-shadow:inset 0 0 0 .73em #008af2}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],c=o[3],u={css:a,media:s,sourceMap:c};n[i]?n[i].parts.push(u):t.push(n[i]={id:i,parts:[u]})}return t}function i(e,t){var n=v(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function u(e,t){var n,r,o;if(t.singleton){var i=y++;n=m||(m=s(t)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=f.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=p.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,y=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=d[s.id];c.refs--,i.push(c)}if(e){var u=o(e);r(u,t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete d[c.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n}])});
//# sourceMappingURL=react-ios7-switch.js.map