(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1715:function(t,e,n){},"8+s/":function(t,e,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=t(s.map((function(t){return t.props}))),f.canUseDOM?e(u):n&&(u=n(u))}var f=function(t){var e,n;function a(){return t.apply(this,arguments)||this}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},CGcg:function(t,e,n){"use strict";var r=n("IRj2"),a=n("q1tI"),o=n.n(a),i=(n("kdQ0"),function(t){var e="navButton";t.tabType===t.curTab&&(e+=" active");return o.a.createElement("button",{className:e,onClick:function(){t.setTab(t.tabType)}},t.text)}),c=n("ltCo"),u=(n("E5po"),function(t){return o.a.createElement("div",{id:"navBar"},o.a.createElement(i,{curTab:t.curTab,setTab:t.setTab,tabType:c.a.ABOUT,text:"about me"}),o.a.createElement(i,{curTab:t.curTab,setTab:t.setTab,tabType:c.a.GAMES,text:"games portfolio"}),o.a.createElement(i,{curTab:t.curTab,setTab:t.setTab,tabType:c.a.THOUGHTS,text:"my opinions"}))}),s=function(t){return o.a.createElement("header",{style:{marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0,textAlign:"center"}},t.siteTitle),o.a.createElement(u,{curTab:t.curTab,setTab:t.setTab})))};s.defaultProps={siteTitle:""};var l=s;n("1715"),e.a=function(t){var e=r.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l,{siteTitle:e.site.siteMetadata.title,curTab:t.curTab,setTab:t.setTab}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},t.children))}},E5po:function(t,e,n){},EH9Q:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Sam Lee","description":"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.","author":"@gatsbyjs"}}}}')},"HAE/":function(t,e,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},IRj2:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Sam Lee"}}}}')},Oyvg:function(t,e,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,c=n("quPj"),u=n("C/va"),s=r.RegExp,l=s,f=s.prototype,p=/a/g,d=/a/g,h=new s(p)!==p;if(n("nh4g")&&(!h||n("eeVq")((function(){return d[n("K0xU")("match")]=!1,s(p)!=p||s(d)==d||"/a/i"!=s(p,"i")})))){s=function(t,e){var n=this instanceof s,r=c(t),o=void 0===e;return!n&&r&&t.constructor===s&&o?t:a(h?new l(r&&!o?t.source:t,e):l((r=t instanceof s)?t.source:t,r&&o?u.call(t):e),n?this:f,s)};for(var m=function(t){t in s||o(s,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},y=i(l),b=0;y.length>b;)m(y[b++]);f.constructor=s,s.prototype=f,n("KroJ")(r,"RegExp",s)}n("elZq")("RegExp")},bmMU:function(t,e,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var c,u,s,l=r(e),f=r(n);if(l&&f){if((u=e.length)!=n.length)return!1;for(c=u;0!=c--;)if(!t(e[c],n[c]))return!1;return!0}if(l!=f)return!1;var p=e instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return e.getTime()==n.getTime();var h=e instanceof RegExp,m=n instanceof RegExp;if(h!=m)return!1;if(h&&m)return e.toString()==n.toString();var y=a(e);if((u=y.length)!==a(n).length)return!1;for(c=u;0!=c--;)if(!o.call(n,y[c]))return!1;if(i&&e instanceof Element&&n instanceof Element)return e===n;for(c=u;0!=c--;)if(!("_owner"===(s=y[c])&&e.$$typeof||t(e[s],n[s])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},h7Nl:function(t,e,n){var r=Date.prototype,a=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var t=o.call(this);return t==t?a.call(this):"Invalid Date"}))},kdQ0:function(t,e,n){},ltCo:function(t,e,n){"use strict";e.a={ABOUT:1,GAMES:2,THOUGHTS:3}},qhky:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return mt}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,a,o,i,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("bmMU"),p=n.n(f),d=n("q1tI"),h=n.n(d),m=n("MgzW"),y=n.n(m),b="bodyAttributes",T="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(t){return v[t]})),"charset"),E="cssText",A="href",O="http-equiv",C="innerHTML",S="itemprop",j="name",x="property",P="rel",k="src",I="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",N="defer",R="encodeSpecialCharacters",H="onChangeClientState",q="titleTemplate",D=Object.keys(L).reduce((function(t,e){return t[L[e]]=e,t}),{}),F=[v.NOSCRIPT,v.SCRIPT,v.STYLE],U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},K=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},W=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},G=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(t){var e=Z(t,v.TITLE),n=Z(t,q);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=Z(t,M);return e||r||void 0},V=function(t){return Z(t,H)||function(){}},z=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return Y({},t,e)}),{})},Q=function(t,e){return e.filter((function(t){return void 0!==t[v.BASE]})).map((function(t){return t[v.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},X=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+U(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var a={};n.filter((function(t){for(var n=void 0,o=Object.keys(t),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===e.indexOf(u)||n===P&&"canonical"===t[n].toLowerCase()||u===P&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==C&&c!==E&&c!==S||(n=c)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=y()({},r[c],a[c]);r[c]=u}return t}),[]).reverse()},Z=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},$=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){$(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:t.requestAnimationFrame||$,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},at=null,ot=function(t,e){var n=t.baseTag,r=t.bodyAttributes,a=t.htmlAttributes,o=t.linkTags,i=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;ut(v.BODY,r),ut(v.HTML,a),ct(f,p);var d={baseTag:st(v.BASE,n),linkTags:st(v.LINK,o),metaTags:st(v.META,i),noscriptTags:st(v.NOSCRIPT,c),scriptTags:st(v.SCRIPT,s),styleTags:st(v.STYLE,l)},h={},m={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(m[t]=d[t].oldTags)})),e&&e(),u(t,h,m)},it=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=it(t)),ut(v.TITLE,e)},ut=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(e),c=0;c<i.length;c++){var u=i[c],s=e[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},st=function(t,e){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(t+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===C)n.innerHTML=e.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(t,e){return i=e,n.isEqualNode(t)}))?a.splice(i,1):o.push(n)})),a.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return n.appendChild(t)})),{oldTags:a,newTags:o}},lt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[L[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case v.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})["data-react-helmet"]=!0,a=ft(n,r),[h.a.createElement(v.TITLE,a,t)];var t,n,r,a},toString:function(){return function(t,e,n,r){var a=lt(n),o=it(e);return a?"<"+t+' data-react-helmet="true" '+a+">"+G(o,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+G(o,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case b:case T:return{toComponent:function(){return ft(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(e).forEach((function(t){var n=L[t]||t;if(n===C||n===E){var r=e.innerHTML||e.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=e[t]})),h.a.createElement(t,a)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var a=Object.keys(r).filter((function(t){return!(t===C||t===E)})).reduce((function(t,e){var a=void 0===r[e]?e:e+'="'+G(r[e],n)+'"';return t?t+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===F.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,a=t.htmlAttributes,o=t.linkTags,i=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:pt(v.BASE,e,r),bodyAttributes:pt(b,n,r),htmlAttributes:pt(T,a,r),link:pt(v.LINK,o,r),meta:pt(v.META,i,r),noscript:pt(v.NOSCRIPT,c,r),script:pt(v.SCRIPT,u,r),style:pt(v.STYLE,s,r),title:pt(v.TITLE,{title:f,titleAttributes:p},r)}},ht=l()((function(t){return{baseTag:Q([A,I],t),bodyAttributes:z(b,t),defer:Z(t,N),encode:Z(t,R),htmlAttributes:z(T,t),linkTags:X(v.LINK,[P,A],t),metaTags:X(v.META,[j,w,O,x,S],t),noscriptTags:X(v.NOSCRIPT,[C],t),onChangeClientState:V(t),scriptTags:X(v.SCRIPT,[k,C],t),styleTags:X(v.STYLE,[E],t),title:J(t),titleAttributes:z(g,t)}}),(function(t){at&&nt(at),t.defer?at=et((function(){ot(t,(function(){at=null}))})):(ot(t),at=null)}),dt)((function(){return null})),mt=(a=ht,i=o=function(t){function e(){return B(this,e),W(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:e};case v.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,a=t.newChildProps,o=t.nestedChildren;return Y({},r,((e={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,o))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,a=t.newProps,o=t.newChildProps,i=t.nestedChildren;switch(r.type){case v.TITLE:return Y({},a,((e={})[r.type]=i,e.titleAttributes=Y({},o),e));case v.BODY:return Y({},a,{bodyAttributes:Y({},o)});case v.HTML:return Y({},a,{htmlAttributes:Y({},o)})}return Y({},a,((n={})[r.type]=Y({},o),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=Y({},e);return Object.keys(t).forEach((function(e){var r;n=Y({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return h.a.Children.forEach(t,(function(t){if(t&&t.props){var a=t.props,o=a.children,i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[D[n]||n]=t[n],e}),e)}(_(a,["children"]));switch(n.warnOnInvalidChildren(t,o),t.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:i,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=_(t,["children"]),r=Y({},n);return e&&(r=this.mapChildrenToProps(e,r)),h.a.createElement(a,r)},K(e,null,[{key:"canUseDOM",set:function(t){a.canUseDOM=t}}]),e}(h.a.Component),o.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var t=a.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},i);mt.renderStatic=mt.rewind}).call(this,n("yLpj"))},vrFN:function(t,e,n){"use strict";var r=n("EH9Q"),a=n("q1tI"),o=n.n(a),i=n("qhky");function c(t){var e=t.description,n=t.lang,a=t.meta,c=t.title,u=r.data.site,s=e||u.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(a)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n}}]);
//# sourceMappingURL=bfc3b393f484e8017a4ce6b216c744361b202e15-1fbfdeda29514f50cf0d.js.map