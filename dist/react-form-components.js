!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames"),require("lodash"),require("react-select")):"function"==typeof define&&define.amd?define("react-form-components",["React","classnames","lodash","react-select"],t):"object"==typeof exports?exports["react-form-components"]=t(require("react"),require("classnames"),require("lodash"),require("react-select")):e["react-form-components"]=t(e.React,e.classnames,e._,e["react-select"])}(window,(function(e,t,r,n){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=11)}([function(e,t,r){e.exports=r(18)()},function(t,r){t.exports=e},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){var n=r(15),a=r(16),i=r(8),o=r(17);e.exports=function(e,t){return n(e)||a(e,t)||i(e,t)||o()}},function(e,r){e.exports=t},function(e,t,r){var n=r(12),a=r(13),i=r(8),o=r(14);e.exports=function(e){return n(e)||a(e)||i(e)||o()}},function(e,t){e.exports=r},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},function(e,t,r){var n=r(7);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,a.default)(e),t=t||{};var r=new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(t.locale?i.decimal[t.locale]:".","[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));if(""===e||"."===e||"-"===e||"+"===e)return!1;var n=parseFloat(e.replace(",","."));return r.test(e)&&(!t.hasOwnProperty("min")||n>=t.min)&&(!t.hasOwnProperty("max")||n<=t.max)&&(!t.hasOwnProperty("lt")||n<t.lt)&&(!t.hasOwnProperty("gt")||n>t.gt)},t.locales=void 0;var n,a=(n=r(20))&&n.__esModule?n:{default:n},i=r(21);var o=Object.keys(i.decimal);t.locales=o},function(e,t,r){e.exports=r(22)},function(e,t,r){var n=r(7);e.exports=function(e){if(Array.isArray(e))return n(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,r){"use strict";var n=r(19);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,i,o){if(o!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!("string"==typeof e||e instanceof String)){var t;throw t=null===e?"null":"object"===(t=n(e))&&e.constructor&&e.constructor.hasOwnProperty("name")?e.constructor.name:"a ".concat(t),new TypeError("Expected string but received ".concat(t,"."))}},e.exports=t.default,e.exports.default=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.commaDecimal=t.dotDecimal=t.arabicLocales=t.englishLocales=t.decimal=t.alphanumeric=t.alpha=void 0;var n={"en-US":/^[A-Z]+$/i,"bg-BG":/^[А-Я]+$/i,"cs-CZ":/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,"da-DK":/^[A-ZÆØÅ]+$/i,"de-DE":/^[A-ZÄÖÜß]+$/i,"el-GR":/^[Α-ώ]+$/i,"es-ES":/^[A-ZÁÉÍÑÓÚÜ]+$/i,"fr-FR":/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,"it-IT":/^[A-ZÀÉÈÌÎÓÒÙ]+$/i,"nb-NO":/^[A-ZÆØÅ]+$/i,"nl-NL":/^[A-ZÁÉËÏÓÖÜÚ]+$/i,"nn-NO":/^[A-ZÆØÅ]+$/i,"hu-HU":/^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,"pl-PL":/^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,"pt-PT":/^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,"ru-RU":/^[А-ЯЁ]+$/i,"sl-SI":/^[A-ZČĆĐŠŽ]+$/i,"sk-SK":/^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,"sr-RS@latin":/^[A-ZČĆŽŠĐ]+$/i,"sr-RS":/^[А-ЯЂЈЉЊЋЏ]+$/i,"sv-SE":/^[A-ZÅÄÖ]+$/i,"tr-TR":/^[A-ZÇĞİıÖŞÜ]+$/i,"uk-UA":/^[А-ЩЬЮЯЄIЇҐі]+$/i,"ku-IQ":/^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,he:/^[א-ת]+$/,"fa-IR":/^['آابپتثجچهخدذرزژسشصضطظعغفقکگلمنوهی']+$/i};t.alpha=n;var a={"en-US":/^[0-9A-Z]+$/i,"bg-BG":/^[0-9А-Я]+$/i,"cs-CZ":/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,"da-DK":/^[0-9A-ZÆØÅ]+$/i,"de-DE":/^[0-9A-ZÄÖÜß]+$/i,"el-GR":/^[0-9Α-ω]+$/i,"es-ES":/^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,"fr-FR":/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,"it-IT":/^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,"hu-HU":/^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,"nb-NO":/^[0-9A-ZÆØÅ]+$/i,"nl-NL":/^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,"nn-NO":/^[0-9A-ZÆØÅ]+$/i,"pl-PL":/^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,"pt-PT":/^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,"ru-RU":/^[0-9А-ЯЁ]+$/i,"sl-SI":/^[0-9A-ZČĆĐŠŽ]+$/i,"sk-SK":/^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,"sr-RS@latin":/^[0-9A-ZČĆŽŠĐ]+$/i,"sr-RS":/^[0-9А-ЯЂЈЉЊЋЏ]+$/i,"sv-SE":/^[0-9A-ZÅÄÖ]+$/i,"tr-TR":/^[0-9A-ZÇĞİıÖŞÜ]+$/i,"uk-UA":/^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,"ku-IQ":/^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,he:/^[0-9א-ת]+$/,"fa-IR":/^['0-9آابپتثجچهخدذرزژسشصضطظعغفقکگلمنوهی۱۲۳۴۵۶۷۸۹۰']+$/i};t.alphanumeric=a;var i={"en-US":".",ar:"٫"};t.decimal=i;var o=["AU","GB","HK","IN","NZ","ZA","ZM"];t.englishLocales=o;for(var l,u=0;u<o.length;u++)n[l="en-".concat(o[u])]=n["en-US"],a[l]=a["en-US"],i[l]=i["en-US"];var c=["AE","BH","DZ","EG","IQ","JO","KW","LB","LY","MA","QM","QA","SA","SD","SY","TN","YE"];t.arabicLocales=c;for(var s,f=0;f<c.length;f++)n[s="ar-".concat(c[f])]=n.ar,a[s]=a.ar,i[s]=i.ar;var p=["ar-EG","ar-LB","ar-LY"];t.dotDecimal=p;var d=["bg-BG","cs-CZ","da-DK","de-DE","el-GR","en-ZM","es-ES","fr-FR","it-IT","ku-IQ","hu-HU","nb-NO","nn-NO","nl-NL","pl-PL","pt-PT","ru-RU","sl-SI","sr-RS@latin","sr-RS","sv-SE","tr-TR","uk-UA"];t.commaDecimal=d;for(var b=0;b<p.length;b++)i[p[b]]=i["en-US"];for(var y=0;y<d.length;y++)i[d[y]]=",";n["pt-BR"]=n["pt-PT"],a["pt-BR"]=a["pt-PT"],i["pt-BR"]=i["pt-PT"],n["pl-Pl"]=n["pl-PL"],a["pl-Pl"]=a["pl-PL"],i["pl-Pl"]=i["pl-PL"]},function(e,t,r){"use strict";r.r(t),r.d(t,"Form",(function(){return F})),r.d(t,"ValidatingInput",(function(){return E})),r.d(t,"ValidatingMultiselect",(function(){return q})),r.d(t,"Validator",(function(){return P}));var n=r(5),a=r.n(n),i=r(2),o=r.n(i),l=r(3),u=r.n(l),c=r(6),s=r(0),f=r.n(s),p=r(1),d=r.n(p),b=r(10),y=r.n(b);var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=Object.keys(e).reduce((function(t,r){return Object.assign(t,o()({},r,e[r].value))}),{});return t?{id:t,attributes:r}:r},v=r(4),g=r.n(v),O=function(){return d.a.createElement("span",{className:"required-icon"},d.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},d.a.createElement("path",{d:"M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z"})))};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=function(e){var t=e.children,r=e.initialValue,n=e.isValid,a=e.onChange,i=e.type,o=e.validationFn,l=e.value,c=d.a.useState({isBlurred:!1,isValid:n,wasValid:o(l)}),s=u()(c,2),f=s[0],p=s[1];d.a.useEffect((function(){p({isBlurred:f.isBlurred,isValid:n,wasValid:!f.wasValid&&n})}),[n]);return d.a.createElement(d.a.Fragment,null,t({currentValue:l||r,errorFeedback:o(l),handleBlur:function(){f.isBlurred||p(j(j({},f),{},{isBlurred:!0}))},handleChange:function(e,t){a({isValid:!o(t),name:e,type:i,value:t})},isBlurred:f.isBlurred,isValid:f.isValid,showFeedback:f.isBlurred&&!f.isValid||f.wasValid&&!f.isValid,wasValid:f.wasValid}))};S.defaultProps={initialValue:null,isValid:!1,required:!1,value:null},S.propTypes={children:f.a.func.isRequired,initialValue:f.a.oneOfType([f.a.arrayOf(f.a.string),f.a.number,f.a.string]),isValid:f.a.bool,onChange:f.a.func.isRequired,required:f.a.bool,validationFn:f.a.func.isRequired,value:f.a.oneOfType([f.a.array,f.a.number,f.a.string])};var P=S,V=function(e){var t=e.initialValue,r=e.label,n=e.onChange,a=e.property,i=e.required,o=e.validationFn,l=a.isValid,u=a.name,c=a.type,s=a.value;return d.a.createElement(P,{initialValue:t,isValid:l,onChange:n,required:i,type:c,validationFn:o,value:s},(function(e){var t=e.currentValue,n=e.errorFeedback,a=e.handleBlur,o=e.handleChange,s=e.showFeedback;return d.a.createElement("div",{className:"form-control"},d.a.createElement("label",{htmlFor:u},r,i&&d.a.createElement(O,null)),d.a.createElement("input",{className:g()({"is-invalid":!l&&s}),name:u,onBlur:a,onChange:function(e){var t=e.target,r=t.name,n=t.value;return o(r,n)},type:c,value:t}),s&&d.a.createElement("div",{className:"error-feedback"},n))}))};V.defaultProps={initialValue:null,isValid:!1,required:!1,type:"text"},V.propTypes={initialValue:f.a.oneOfType([f.a.number,f.a.string]),label:f.a.string.isRequired,onChange:f.a.func.isRequired,property:f.a.shape({isValid:f.a.bool,name:f.a.string.isRequired,value:f.a.oneOfType([f.a.number,f.a.string]).isRequired}),required:f.a.bool,type:f.a.string,validationFn:f.a.func.isRequired};var E=V,A=r(9),$=r.n(A);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=function(e){var t=e.initialValue,r=e.label,n=e.onChange,a=e.options,i=e.placeholder,o=e.property,l=e.required,u=e.validationFn,c={control:function(e,t){var r=e.alignItems,n=e.display,a=e.flexWrap,i=e.justifyContent,o=e.position,l=e.transition,u=e.boxSizing;return{alignItems:r,borderBottom:t.isFocused?"2px solid blue":"2px solid black",borderRadius:"0",boxSizing:u,display:n,flexWrap:a,justifyContent:i,padding:"0.75em 0",position:o,transition:l}},multiValue:function(e){return w(w({},e),{},{fontSize:"1.5em",padding:"0.5em"})}},s=o.isValid,f=o.name,p=o.value,b=a.map((function(e){var t=e.id;return{label:e.label,value:t}}));return d.a.createElement(P,{initialValue:t,isValid:s,onChange:n,required:l,validationFn:u,value:p},(function(e){var t=e.currentValue,n=e.errorFeedback,a=e.handleBlur,o=e.handleChange,u=e.showFeedback,p=b.filter((function(e){var r=e.value;return t.includes(r)}));return d.a.createElement("div",{className:"form-control"},d.a.createElement("label",{htmlFor:f},r,l&&d.a.createElement(O,null)),d.a.createElement($.a,{className:g()({"is-invalid":!s&&u}),isMulti:!0,name:f,onBlur:a,onChange:function(e){return o(f,Array.isArray(e)?e.map((function(e){return e.value})):e)},options:b,placeholder:i,styles:c,value:p}),u&&d.a.createElement("div",{className:"error-feedback"},n))}))};x.defaultProps={initialValue:[],isValid:!1,options:[],required:!1,type:"text"},x.propTypes={initialValue:f.a.arrayOf(f.a.string),label:f.a.string.isRequired,onChange:f.a.func.isRequired,options:f.a.arrayOf(f.a.shape({id:f.a.string.isRequired,label:f.a.string.isRequired})).isRequired,placeholder:f.a.string.isRequired,property:f.a.shape({isValid:f.a.bool,name:f.a.string.isRequired,value:f.a.arrayOf(f.a.string)}),required:f.a.bool,validationFn:f.a.func.isRequired};var q=x,T=function(e){var t=e.icon,r=e.label,n=d.a.useState(e.isValid),a=u()(n,2),i=a[0],o=a[1];return d.a.useEffect((function(){o(e.isValid)}),[e.isValid]),d.a.createElement("div",{className:"form-control form-control--actions"},d.a.createElement("button",{className:"wph-button",disabled:!i,type:"submit"},t&&d.a.createElement("span",null,t),r))},Z=T;function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}T.defaultProps={icon:null,isValid:!1},T.propTypes={icon:f.a.node,isValid:f.a.bool,label:f.a.string.isRequired};var D=function(e){var t=e.config,r=e.initialValues,n=e.isDisabled,i=e.label,l=e.objectId,s=e.onSave,f=e.options,p=d.a.useState({isTouched:!1,isValid:!1}),b=u()(p,2),v=b[0],g=b[1],O=function(e){return Object.keys(e).length?Object.keys(e).reduce((function(t,r){return[].concat(a()(t),[{key:r,value:e[r]}])}),[]):t.reduce((function(e,t){return Object.assign(e,o()({},t.name,null))}),{})},h=d.a.useState(O(r)),j=u()(h,2),S=j[0],P=j[1],V=function(e){return t.reduce((function(t,r){var n=r.name,a=r.type,i=r.validationFn;return Object.assign({},t,o()({},n,{isValid:!i||!i(e[n]),name:n,type:a,value:e[n]}))}),{})},A=d.a.useState(V(r)),$=u()(A,2),R=$[0],w=$[1],x=function(e){var t=e.isValid,r=e.name,n=e.type,a=e.value;v.isTouched||g(I(I({},v),{},{isTouched:!0}));var i;w(I(I({},R),{},o()({},r,I(I({},e),{},{value:(i=a,t&&"number"===n?y()(i)?parseFloat(i):parseInt(i,10):i)}))))};return d.a.useEffect((function(){P(O(r)),w(V(r))}),[r]),d.a.useEffect((function(){var e=!Object.keys(R).find((function(e){return!R[e].isValid}));g({isTouched:function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(r||!t.length)return r;var n=t.shift(),i=function(){return Array.isArray(n.value)?[n.value.sort(),R[n.key].value.sort()]:[n.value,R[n.key].value]};return c.isEqual.apply(void 0,a()(i()))||(r=!0),e(t,r)}(a()(S)),isValid:e})}),[R]),R?d.a.createElement("form",{"aria-label":i,noValidate:!0,onSubmit:function(e){e.preventDefault();var t=Object.keys(R).reduce((function(e,t){return Object(c.isEqual)(R[t].value,r[t])?e:Object.assign({},e,o()({},t,R[t]))}),{}),n=m(t,l);s(n)}},d.a.createElement("fieldset",{disabled:n},t.map((function(e){return function(e){var t=e.label,n=e.name,a=e.type,i=e.validationFn;switch(a){case"multiselect":return d.a.createElement(q,{initialValue:null!==r[n]?r[n]:[],key:"multiselect:".concat(R[n].name),label:t,onChange:x,options:f[n],property:R[n],type:a,validationFn:i});default:return d.a.createElement(E,{initialValue:r[n],key:"input:".concat(R[n].name),label:t,onChange:x,property:R[n],type:a,validationFn:i})}}(e)})),d.a.createElement(Z,{isValid:v.isTouched&&v.isValid,label:"Save"}))):null};D.defaultProps={isDisabled:!1,initialValues:{},label:"",objectId:null},D.propTypes={config:f.a.arrayOf(f.a.shape({label:f.a.string.isRequired,name:f.a.string.isRequired,type:f.a.string.isRequired,validationFn:f.a.func.isRequired})).isRequired,initialValues:f.a.objectOf(f.a.oneOfType([f.a.arrayOf(f.a.string),f.a.number,f.a.string])),isDisabled:f.a.bool,label:f.a.string,objectId:f.a.oneOfType([f.a.number,f.a.string]),onSave:f.a.func.isRequired,options:f.a.object};var F=D}])}));