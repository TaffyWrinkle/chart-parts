(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(e,t,r){"use strict";var n,a=r("q1tI"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},IV1d:function(e){e.exports=JSON.parse('{"lerna":"2.11.0","useWorkspaces":true,"npmClient":"yarn","version":"0.1.3"}')},UJ91:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"chart-parts","githubUrl":"https://github.com/Microsoft/chart-parts"}}}}')},Wbzz:function(e,t,r){"use strict";r.d(t,"b",(function(){return s}));var n=r("q1tI"),a=r.n(n),o=r("+ZDr"),i=r.n(o);r.d(t,"a",(function(){return i.a})),r.d(t,"c",(function(){return o.withPrefix}));r("7hJ6"),r("lw3w"),r("emEt").default.enqueue;var c=a.a.createContext({});function l(e){var t=e.staticQueryData,r=e.data,n=e.query,o=e.render,i=r?r.data:t[n]&&t[n].data;return a.a.createElement(a.a.Fragment,null,i&&o(i),!i&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,r=e.query,n=e.render,o=e.children;return a.a.createElement(c.Consumer,null,(function(e){return a.a.createElement(l,{data:t,query:r,render:n||o,staticQueryData:e})}))}},YIIx:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r("UJ91"),a=r("q1tI"),o=r.n(a),i=r("Wbzz"),c=r("vOnD"),l=r("FM/7"),s=Object(a.memo)((function(e){var t=e.height;return o.a.createElement("svg",{version:"1.1",height:""+t,viewBox:"0 0 832.89957 205.18784",id:"svg-logo"},o.a.createElement("g",{transform:"translate(414.19 -42.183)",id:"logo-group"},o.a.createElement("g",{transform:"translate(-236.46 79.375)",id:"char-c-1"},o.a.createElement("path",{className:"char-c-1",d:"m-42.145 27.329a48.318 49.196 1.4538 0 0 -67.821 5.5295l36.61 32.055zm-31.212 37.584-31.458 37.361a48.318 49.196 1.4538 0 0 67.86 -5.0439zm-31.458 37.361a48.318 49.196 1.4538 0 1 -0.073 -0.0601 48.318 49.196 1.4538 0 0 0.0684 0.0657zm-0.073-0.0601a48.318 49.196 1.4538 0 1 -1.7792 -1.7188 48.318 49.196 1.4538 0 0 1.6601 1.6202 48.318 49.196 1.4538 0 0 0.12026 0.0972zm-1.7792-1.7188a48.318 49.196 1.4538 0 1 -1.7381 -1.6942 48.318 49.196 1.4538 0 0 1.7381 1.6942zm-1.7381-1.6942a48.318 49.196 1.4538 0 1 -1.5874 -1.8728 48.318 49.196 1.4538 0 0 1.5874 1.8728zm-1.5874-1.8728a48.318 49.196 1.4538 0 1 -1.5526 -1.8491 48.318 49.196 1.4538 0 0 1.5526 1.8491zm-1.5526-1.8491a48.318 49.196 1.4538 0 1 -1.4916 -2.1635 48.318 49.196 1.4538 0 0 1.4916 2.1635zm-1.4916-2.1635a48.318 49.196 1.4538 0 1 -1.268 -1.86 48.318 49.196 1.4538 0 0 1.268 1.86zm-1.268-1.86a48.318 49.196 1.4538 0 1 -1.3068 -2.3654 48.318 49.196 1.4538 0 0 1.3068 2.3654zm-1.3068-2.3654a48.318 49.196 1.4538 0 1 -1.0482 -1.9236 48.318 49.196 1.4538 0 0 1.0482 1.9236zm-1.0482-1.9236a48.318 49.196 1.4538 0 1 -1.0318 -2.4068 48.318 49.196 1.4538 0 0 1.0318 2.4068zm-1.0318-2.4068a48.318 49.196 1.4538 0 1 -0.89327 -2.113 48.318 49.196 1.4538 0 0 0.89327 2.113zm-0.89327-2.113a48.318 49.196 1.4538 0 1 -0.76801 -2.4213 48.318 49.196 1.4538 0 0 0.76801 2.4213zm-0.76801-2.4213a48.318 49.196 1.4538 0 1 -0.70194 -2.2579 48.318 49.196 1.4538 0 0 0.70194 2.2579zm-0.70194-2.2579a48.318 49.196 1.4538 0 1 -0.52124 -2.4633 48.318 49.196 1.4538 0 0 0.52124 2.4633zm-0.52124-2.4633a48.318 49.196 1.4538 0 1 -0.48296 -2.3489 48.318 49.196 1.4538 0 0 0.48296 2.3489zm-0.48296-2.3489a48.318 49.196 1.4538 0 1 -0.2563 -2.3256 48.318 49.196 1.4538 0 0 0.2563 2.3256zm-0.2563-2.3256a48.318 49.196 1.4538 0 1 -0.27186 -2.5811 48.318 49.196 1.4538 0 0 0.27186 2.5811zm-0.27186-2.5811a48.318 49.196 1.4538 0 1 -0.0254 -2.2622 48.318 49.196 1.4538 0 0 0.0254 2.2622zm-0.0254-2.2622a48.318 49.196 1.4538 0 1 -0.017 -2.6355 48.318 49.196 1.4538 0 0 0.017 2.6355zm-0.017-2.6355a48.318 49.196 1.4538 0 1 0.21592 -2.4824 48.318 49.196 1.4538 0 0 -0.21592 2.4824zm0.21592-2.4824a48.318 49.196 1.4538 0 1 0.22168 -2.4137 48.318 49.196 1.4538 0 0 -0.22168 2.4137zm0.22168-2.4137a48.318 49.196 1.4538 0 1 0.45648 -2.442 48.318 49.196 1.4538 0 0 -0.45648 2.442zm0.45648-2.442a48.318 49.196 1.4538 0 1 0.45984 -2.3901 48.318 49.196 1.4538 0 0 -0.45984 2.3901zm0.45984-2.3901a48.318 49.196 1.4538 0 1 0.67583 -2.3205 48.318 49.196 1.4538 0 0 -0.67583 2.3205zm0.67583-2.3205a48.318 49.196 1.4538 0 1 0.71046 -2.3946 48.318 49.196 1.4538 0 0 -0.71046 2.3946zm0.71046-2.3946a48.318 49.196 1.4538 0 1 0.88669 -2.2064 48.318 49.196 1.4538 0 0 -0.88669 2.2064zm0.88669-2.2064a48.318 49.196 1.4538 0 1 0.95337 -2.34 48.318 49.196 1.4538 0 0 -0.95337 2.34zm0.95337-2.34a48.318 49.196 1.4538 0 1 1.1017 -2.1108 48.318 49.196 1.4538 0 0 -1.1017 2.1108zm1.1017-2.1108a48.318 49.196 1.4538 0 1 1.1746 -2.2264 48.318 49.196 1.4538 0 0 -1.1746 2.2264zm1.1746-2.2264a48.318 49.196 1.4538 0 1 1.3831 -2.1122 48.318 49.196 1.4538 0 0 -1.3831 2.1122zm1.3831-2.1122a48.318 49.196 1.4538 0 1 1.3137 -1.9835 48.318 49.196 1.4538 0 0 -1.3137 1.9835zm1.3137-1.9835a48.318 49.196 1.4538 0 1 1.1445 -1.4676 48.318 49.196 1.4538 0 0 -1.1445 1.4676zm1.1445-1.4676a48.318 49.196 1.4538 0 1 0.852 -1.0784 48.318 49.196 1.4538 0 0 -0.0561 0.0601 48.318 49.196 1.4538 0 0 -0.79587 1.0183zm0.852-1.0784a48.318 49.196 1.4538 0 1 0.11431 -0.12298l-0.0101-9e-3a48.318 49.196 1.4538 0 0 -0.10359 0.13209z",fill:l.a.logoPalette.green}),o.a.createElement("path",{className:"char-c-1",d:"m-73.356 64.913-36.609-32.056a48.318 49.196 1.4538 0 0 -0.11456 0.12296 48.318 49.196 1.4538 0 0 -0.85196 1.0784 48.318 49.196 1.4538 0 0 -1.1445 1.4675 48.318 49.196 1.4538 0 0 -1.3021 1.9646 48.318 49.196 1.4538 0 0 -1.3971 2.1339 48.318 49.196 1.4538 0 0 -1.1745 2.2265 48.318 49.196 1.4538 0 0 -1.0971 2.1025 48.318 49.196 1.4538 0 0 -0.97763 2.3991 48.318 49.196 1.4538 0 0 -0.86478 2.1527 48.318 49.196 1.4538 0 0 -0.71045 2.3945 48.318 49.196 1.4538 0 0 -0.67582 2.3205 48.318 49.196 1.4538 0 0 -0.45998 2.3901 48.318 49.196 1.4538 0 0 -0.45644 2.442 48.318 49.196 1.4538 0 0 -0.22169 2.4138 48.318 49.196 1.4538 0 0 -0.21589 2.4824 48.318 49.196 1.4538 0 0 0.0158 2.4832 48.318 49.196 1.4538 0 0 0.0275 2.4276 48.318 49.196 1.4538 0 0 0.27054 2.58 48.318 49.196 1.4538 0 0 0.2546 2.3023 48.318 49.196 1.4538 0 0 0.51164 2.4913 48.318 49.196 1.4538 0 0 0.49165 2.3274 48.318 49.196 1.4538 0 0 0.72147 2.3191 48.318 49.196 1.4538 0 0 0.74888 2.3653 48.318 49.196 1.4538 0 0 0.95835 2.2634 48.318 49.196 1.4538 0 0 0.96061 2.2411 48.318 49.196 1.4538 0 0 1.2158 2.2284 48.318 49.196 1.4538 0 0 1.1354 2.0595 48.318 49.196 1.4538 0 0 1.387 2.0341 48.318 49.196 1.4538 0 0 1.3851 2.0056 48.318 49.196 1.4538 0 0 1.5403 1.8357 48.318 49.196 1.4538 0 0 1.5986 1.8876 48.318 49.196 1.4538 0 0 1.8777 1.8303 48.318 49.196 1.4538 0 0 1.623 1.5655 48.318 49.196 1.4538 0 0 0.0908 0.0761z",fill:l.a.logoPalette.blue})),o.a.createElement("g",{transform:"translate(-236.46 79.375)",id:"char-h-2"},o.a.createElement("rect",{className:"char-h-2",x:"-3.4229",y:"31.453",width:"28.276",height:"82.65",fill:l.a.logoPalette.blue}),o.a.createElement("rect",{className:"char-h-2",x:"-34.975",y:"31.453",width:"28.276",height:"82.65",fill:l.a.logoPalette.pink}),o.a.createElement("rect",{className:"char-h-2",x:"-34.995",y:"69.164",width:"61.56",height:"16.131",fill:l.a.logoPalette.green})),o.a.createElement("g",{transform:"translate(-236.46 79.375)",id:"char-r-4"},o.a.createElement("rect",{className:"char-r-4",x:"114.97",y:"31.453",width:"28.276",height:"82.65",fill:l.a.logoPalette.pink}),o.a.createElement("path",{className:"char-r-4",transform:"matrix(.0058489 .99998 .99998 -.0060008 0 0)",d:"m80.373 144.54a24.026 23.555 0 0 1 -23.944 23.555 24.026 23.555 0 0 1 -24.107 -23.394l24.025-0.16079z",fill:l.a.logoPalette.green}),o.a.createElement("path",{className:"char-r-4",d:"m115.33 55.467-0.36056 58.636h58.987z",fill:l.a.logoPalette.blue})),o.a.createElement("g",{transform:"translate(-236.46 79.375)",id:"char-a-3"},o.a.createElement("path",{className:"char-a-3",d:"m70.395 29.057-21.398 42.441 42.867 0.0818z",fill:l.a.logoPalette.blue}),o.a.createElement("path",{className:"char-a-3",d:"m48.997 71.499-21.398 42.441 42.867 0.0818z",fill:l.a.logoPalette.pink}),o.a.createElement("path",{className:"char-a-3",d:"m91.865 71.58-21.398 42.441 42.867 0.0818z",fill:l.a.logoPalette.orange})),o.a.createElement("g",{transform:"translate(-236.46 79.375)",id:"char-t-5"},o.a.createElement("rect",{className:"char-t-5",x:"187.43",y:"32.429",width:"28.276",height:"82.65",fill:l.a.logoPalette.pink}),o.a.createElement("rect",{className:"char-t-5",x:"172.66",y:"29.518",width:"58.117",height:"16.131",fill:l.a.logoPalette.blue})),o.a.createElement("g",{transform:"translate(57.452 -39.409)",id:"char-a-7"},o.a.createElement("path",{className:"char-a-7",d:"m69.332 148.06-21.398 42.441 42.867 0.0818z",fill:l.a.logoPalette.blue}),o.a.createElement("path",{className:"char-a-7",d:"m47.934 190.5-21.398 42.441 42.867 0.0818z",fill:l.a.logoPalette.pink}),o.a.createElement("path",{className:"char-a-7",d:"m90.801 190.58-21.398 42.441 42.867 0.0818z",fill:"#fab289"})),o.a.createElement("g",{transform:"translate(57.452 -39.409)",id:"char-r-8"},o.a.createElement("rect",{className:"char-r-8",x:"113.34",y:"150.45",width:"28.276",height:"82.65",fill:l.a.logoPalette.pink}),o.a.createElement("path",{className:"char-r-8",transform:"matrix(.0058489 .99998 .99998 -.0060008 0 0)",d:"m199.36 142.21a24.026 23.555 0 0 1 -23.944 23.555 24.026 23.555 0 0 1 -24.107 -23.394l24.025-0.16078z",fill:l.a.logoPalette.green}),o.a.createElement("path",{className:"char-r-8",d:"m113.7 174.47-0.36056 58.636h58.987z",fill:l.a.logoPalette.blue})),o.a.createElement("g",{transform:"translate(57.452 -39.409)",id:"char-p-6c"},o.a.createElement("rect",{className:"char-p-6",x:"-26.538",y:"150.45",width:"28.276",height:"82.65",fill:l.a.logoPalette.pink}),o.a.createElement("path",{className:"char-p-6",transform:"matrix(.0058489 .99998 .99998 -.0060008 0 0)",d:"m198.52 2.3358a24.026 23.555 0 0 1 -23.944 23.555 24.026 23.555 0 0 1 -24.107 -23.394l24.025-0.16078z",fill:l.a.logoPalette.green})),o.a.createElement("g",{transform:"translate(57.452 -39.409)",id:"char-t-9"},o.a.createElement("rect",{className:"char-t-9",x:"186.29",y:"150.45",width:"28.276",height:"82.65",fill:l.a.logoPalette.pink}),o.a.createElement("rect",{className:"char-t-9",x:"171.53",y:"147.54",width:"58.117",height:"16.131",fill:l.a.logoPalette.blue})),o.a.createElement("g",{transform:"translate(57.452 -39.409)",id:"char-s-10"},o.a.createElement("path",{className:"char-s-10",transform:"matrix(-.83636 .54817 -.563 -.82646 0 0)",d:"m-84.306-306.67a39.053 38.766 0 0 1 -38.92 38.766 39.053 38.766 0 0 1 -39.185 -38.501l39.052-0.2646z",fill:"#f2b490"}),o.a.createElement("path",{className:"char-s-10",transform:"matrix(.83636 -.54817 .563 .82646 0 0)",d:"m146.05 307.31a39.053 38.766 0 0 1 -38.92 38.766 39.053 38.766 0 0 1 -39.185 -38.501l39.052-0.26461z",fill:l.a.logoPalette.blue}))))})),u=r("IV1d").version,f=60,m=Object(a.memo)((function(e){var t=e.opacity,r=void 0===t?1:t,a=e.showLinks,c=void 0===a||a;return o.a.createElement(i.b,{query:"2075730424",render:function(e){var t=e.site.siteMetadata.githubUrl,n=c?o.a.createElement(o.a.Fragment,null,o.a.createElement(g,null,o.a.createElement(b,{to:"/"},"Home"),o.a.createElement(b,{to:"/documentation"},"Documentation"),o.a.createElement(b,{to:"/blog"},"Blog"),o.a.createElement(v,{href:t},"Github"))):o.a.createElement(o.a.Fragment,null," ");return o.a.createElement(p,{style:{opacity:r},className:"header"},o.a.createElement(h,null,o.a.createElement(d,null,o.a.createElement(s,{height:f}),o.a.createElement(y,null,"v",u)),n))},data:n})})),p=c.b.div.withConfig({displayName:"header__Container",componentId:"sc-2stej-0"})(["background:",";height:","px;display:flex;top:0px;width:100%;"],l.a.backgrounds.header,f),d=c.b.div.withConfig({displayName:"header__LogoContainer",componentId:"sc-2stej-1"})(["display:flex;width:400px;"]),h=c.b.div.withConfig({displayName:"header__InnerContainer",componentId:"sc-2stej-2"})(["flex:1;margin:0 auto;padding:1.45rem 1.0875rem;display:flex;justify-content:space-between;align-self:stretch;align-items:center;"]),y=c.b.div.withConfig({displayName:"header__VersionIdentifier",componentId:"sc-2stej-3"})(["color:white;text-decoration:none;font-family:",";font-weight:100;margin-left:4px;font-size:14px;display:inline-block;margin-top:","px;color:",";"],l.a.text.fontFamily,f/2,l.a.palette.highlight),g=c.b.div.withConfig({displayName:"header__Links",componentId:"sc-2stej-4"})(["display:flex;flex-direction:row;align-items:center;"]),b=Object(c.b)(i.a).withConfig({displayName:"header__InnerLink",componentId:"sc-2stej-5"})(["color:",";margin-left:8px;margin-right:8px;font-family:",";font-weight:",";font-weight:",";"],l.a.palette.whitish,l.a.text.fontFamily,l.a.header.linkFontSize,l.a.header.linkFontWeight),v=c.b.a.withConfig({displayName:"header__OuterLink",componentId:"sc-2stej-6"})(["color:",";margin-left:8px;margin-right:8px;font-family:",";font-weight:",";font-weight:",";"],l.a.palette.whitish,l.a.text.fontFamily,l.a.header.linkFontSize,l.a.header.linkFontWeight)},bmMU:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(n&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(r&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],i[s[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},lw3w:function(e,t,r){var n;e.exports=(n=r("rzlk"))&&n.default||n},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));var n,a,o,i,c=r("17x9"),l=r.n(c),s=r("8+s/"),u=r.n(s),f=r("bmMU"),m=r.n(f),p=r("q1tI"),d=r.n(p),h=r("6qGY"),y=r.n(h),g="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",C="href",O="http-equiv",A="innerHTML",x="itemprop",S="name",z="property",P="rel",k="src",j="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",L="defer",M="encodeSpecialCharacters",_="onChangeClientState",q="titleTemplate",R=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),F=[w.NOSCRIPT,w.SCRIPT,w.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Y=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},J=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=Z(e,w.TITLE),r=Z(e,q);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Z(e,I);return t||n||void 0},K=function(e){return Z(e,_)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},$=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===P&&"canonical"===e[r].toLowerCase()||l===P&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==A&&c!==E&&c!==x||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=y()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},Z=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;le(w.BODY,n),le(w.HTML,a),ce(f,m);var p={baseTag:se(w.BASE,r),linkTags:se(w.LINK,o),metaTags:se(w.META,i),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(w.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===A)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)},me=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[d.a.createElement(w.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+W(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=N[e]||e;if(r===A||r===E){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),d.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===A||e===E)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+W(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:me(w.BASE,t,n),bodyAttributes:me(g,r,n),htmlAttributes:me(b,a,n),link:me(w.LINK,o,n),meta:me(w.META,i,n),noscript:me(w.NOSCRIPT,c,n),script:me(w.SCRIPT,l,n),style:me(w.STYLE,s,n),title:me(w.TITLE,{title:f,titleAttributes:m},n)}},de=u()((function(e){return{baseTag:G([C,j],e),bodyAttributes:Q(g,e),defer:Z(e,L),encode:Z(e,M),htmlAttributes:Q(b,e),linkTags:$(w.LINK,[P,C],e),metaTags:$(w.META,[S,T,O,z,x],e),noscriptTags:$(w.NOSCRIPT,[A],e),onChangeClientState:K(e),scriptTags:$(w.SCRIPT,[k,A],e),styleTags:$(w.STYLE,[E],e),title:V(e),titleAttributes:Q(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),he=(a=de,i=o=function(e){function t(){return B(this,t),J(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return H({},n,((t={})[r.type]=[].concat(n[r.type]||[],[H({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case w.TITLE:return H({},a,((t={})[n.type]=i,t.titleAttributes=H({},o),t));case w.BODY:return H({},a,{bodyAttributes:H({},o)});case w.HTML:return H({},a,{htmlAttributes:H({},o)})}return H({},a,((r={})[n.type]=H({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=H({},t);return Object.keys(e).forEach((function(t){var n;r=H({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)}(Y(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=Y(e,["children"]),n=H({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.a.createElement(a,n)},U(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,r("yLpj"))},rzlk:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("IOVJ");t.default=function(e){var t=e.location,r=e.pageResources;return r?a.a.createElement(o.a,Object.assign({location:t,pageResources:r},r.json)):null}}}]);
//# sourceMappingURL=ab733b9c4c81bcef38857ecd9d93180ffd1ffdea-d350249456d8d74da789.js.map