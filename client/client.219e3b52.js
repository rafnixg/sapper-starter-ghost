function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,a){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=c(e,n,r,a);t.p(o,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?d(e):h(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function _(t){return E(t," ")}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e=document.body){return Array.from(e.querySelectorAll(t))}let S;function A(t){S=t}function R(){if(!S)throw new Error("Function called outside component initialization");return S}function P(t){R().$$.on_mount.push(t)}const k=[],L=[],j=[],C=[],O=Promise.resolve();let N=!1;function q(t){j.push(t)}let U=!1;const T=new Set;function D(){if(!U){U=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];A(e),I(e.$$)}for(k.length=0;L.length;)L.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];T.has(e)||(T.add(e),e())}j.length=0}while(k.length);for(;C.length;)C.pop()();N=!1,U=!1,T.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const V=new Set;let B;function G(){B={r:0,c:[],p:B}}function F(){B.r||o(B.c),B=B.p}function H(t,e){t&&t.i&&(V.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(V.has(t))return;V.add(t),B.c.push(()=>{V.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const K="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function z(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function M(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function W(t,e){t&&t.l(e)}function X(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),q(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(q)}function Q(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(k.push(t),N||(N=!0,O.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,s,a,c,i,l=[-1]){const u=S;A(e);const p=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let d=!1;if(h.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),d&&Z(e,t)),n}):[],h.update(),d=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=b(n.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();n.intro&&H(e.$$.fragment),X(e,n.target,n.anchor),D()}A(u)}class et{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const nt=[];function rt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!nt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),nt.push(n,e)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const ot={};function st(t){let e,n,r,o,s,a,p,d,$,w,x,S,A,R,P,k,L,j,C,O,N,q;const U=t[1].default,T=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(U,t,t[0],null);return{c(){e=h("div"),T&&T.c(),n=g(),r=h("footer"),o=h("div"),s=h("section"),a=h("a"),p=m("Ghost"),d=m("\n        © 2020"),$=g(),w=h("nav"),x=h("a"),S=m("Latest Posts"),A=g(),R=h("a"),P=m("Facebook"),k=g(),L=h("a"),j=m("Twitter"),C=g(),O=h("a"),N=m("Ghost"),this.h()},l(t){e=v(t,"DIV",{class:!0});var c=b(e);T&&T.l(c),n=_(c),r=v(c,"FOOTER",{class:!0});var i=b(r);o=v(i,"DIV",{class:!0});var l=b(o);s=v(l,"SECTION",{class:!0});var u=b(s);a=v(u,"A",{href:!0});var h=b(a);p=E(h,"Ghost"),h.forEach(f),d=E(u,"\n        © 2020"),u.forEach(f),$=_(l),w=v(l,"NAV",{class:!0});var m=b(w);x=v(m,"A",{href:!0});var g=b(x);S=E(g,"Latest Posts"),g.forEach(f),A=_(m),R=v(m,"A",{href:!0,target:!0,rel:!0});var y=b(R);P=E(y,"Facebook"),y.forEach(f),k=_(m),L=v(m,"A",{href:!0,target:!0,rel:!0});var q=b(L);j=E(q,"Twitter"),q.forEach(f),C=_(m),O=v(m,"A",{href:!0,target:!0,rel:!0});var U=b(O);N=E(U,"Ghost"),U.forEach(f),m.forEach(f),l.forEach(f),i.forEach(f),c.forEach(f),this.h()},h(){y(a,"href","/"),y(s,"class","copyright"),y(x,"href","/"),y(R,"href","/"),y(R,"target","_blank"),y(R,"rel","noopener"),y(L,"href","/"),y(L,"target","_blank"),y(L,"rel","noopener"),y(O,"href","https://ghost.org"),y(O,"target","_blank"),y(O,"rel","noopener"),y(w,"class","site-footer-nav"),y(o,"class","site-footer-content inner"),y(r,"class","site-footer outer"),y(e,"class","site-wrapper")},m(t,c){u(t,e,c),T&&T.m(e,null),l(e,n),l(e,r),l(r,o),l(o,s),l(s,a),l(a,p),l(s,d),l(o,$),l(o,w),l(w,x),l(x,S),l(w,A),l(w,R),l(R,P),l(w,k),l(w,L),l(L,j),l(w,C),l(w,O),l(O,N),q=!0},p(t,[e]){T&&T.p&&1&e&&i(T,U,t,t[0],e,null,null)},i(t){q||(H(T,t),q=!0)},o(t){J(T,t),q=!1},d(t){t&&f(e),T&&T.d(t)}}}function at(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class ct extends et{constructor(t){super(),tt(this,t,at,st,a,{})}}function it(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=m(r)},l(t){e=v(t,"PRE",{});var o=b(e);n=E(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&w(n,r)},d(t){t&&f(e)}}}function lt(e){let n,r,o,s,a,c,i,p,d,S=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&it(e);return{c(){r=g(),o=h("h1"),s=m(e[0]),a=g(),c=h("p"),i=m(S),p=g(),A&&A.c(),d=$(),this.h()},l(t){x('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=_(t),o=v(t,"H1",{class:!0});var n=b(o);s=E(n,e[0]),n.forEach(f),a=_(t),c=v(t,"P",{class:!0});var l=b(c);i=E(l,S),l.forEach(f),p=_(t),A&&A.l(t),d=$(),this.h()},h(){y(o,"class","svelte-8od9u6"),y(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,a,e),u(t,c,e),l(c,i),u(t,p,e),A&&A.m(t,e),u(t,d,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&w(s,t[0]),2&e&&S!==(S=t[1].message+"")&&w(i,S),t[2]&&t[1].stack?A?A.p(t,e):(A=it(t),A.c(),A.m(d.parentNode,d)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(a),t&&f(c),t&&f(p),A&&A.d(t),t&&f(d)}}}function ut(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class ft extends et{constructor(t){super(),tt(this,t,ut,lt,a,{status:0,error:1})}}function pt(t){let n,r,o;const s=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&Y(n.$$.fragment),r=$()},l(t){n&&W(n.$$.fragment,t),r=$()},m(t,e){n&&X(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?z(s,[M(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){G();const t=n;J(t.$$.fragment,1,0,()=>{Q(t,1)}),F()}a?(n=new a(c()),Y(n.$$.fragment),H(n.$$.fragment,1),X(n,r.parentNode,r)):n=null}else a&&n.$set(o)},i(t){o||(n&&H(n.$$.fragment,t),o=!0)},o(t){n&&J(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&Q(n,t)}}}function ht(t){let e,n;return e=new ft({props:{error:t[0],status:t[1]}}),{c(){Y(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(H(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function dt(t){let e,n,r,o;const s=[ht,pt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){a[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(G(),J(a[i],1,1,()=>{a[i]=null}),F(),n=a[e],n||(n=a[e]=s[e](t),n.c()),H(n,1),n.m(r.parentNode,r))},i(t){o||(H(n),o=!0)},o(t){J(n),o=!1},d(t){a[e].d(t),t&&f(r)}}}function mt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[dt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ct({props:s}),{c(){Y(n.$$.fragment)},l(t){W(n.$$.fragment,t)},m(t,e){X(n,t,e),r=!0},p(t,[e]){const r=12&e?z(o,[4&e&&{segment:t[2][0]},8&e&&M(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(H(n.$$.fragment,t),r=!0)},o(t){J(n.$$.fragment,t),r=!1},d(t){Q(n,t)}}}function gt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,R().$$.after_update.push(u),f=ot,p=r,R().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class $t extends et{constructor(t){super(),tt(this,t,gt,mt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const yt=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],bt=[{js:()=>import("./index.1855a972.js"),css:["client.219e3b52.css"]},{js:()=>import("./index.443da42c.js"),css:["client.219e3b52.css"]},{js:()=>import("./[slug].7fa9b0a8.js"),css:["client.219e3b52.css"]}],vt=(Et=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/blog\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:2,params:t=>({slug:Et(t[1])})}]}]);var Et;const _t="undefined"!=typeof __SAPPER__&&__SAPPER__;let wt,xt,St,At=!1,Rt=[],Pt="{}";const kt={page:function(t){const e=rt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:rt(null),session:rt(_t&&_t.session)};let Lt,jt;kt.session.subscribe(async t=>{if(Lt=t,!At)return;jt=!0;const e=It(new URL(location.href)),n=xt={},{redirect:r,props:o,branch:s}=await Ft(e);n===xt&&await Gt(r,s,o,e.page)});let Ct,Ot=null;let Nt,qt=1;const Ut="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Tt={};function Dt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function It(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(_t.baseUrl))return null;let e=t.pathname.slice(_t.baseUrl.length);if(""===e&&(e="/"),!yt.some(t=>t.test(e)))for(let n=0;n<vt.length;n+=1){const r=vt[n],o=r.pattern.exec(e);if(o){const n=Dt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Vt(){return{x:pageXOffset,y:pageYOffset}}async function Bt(t,e,n,r){if(e)Nt=e;else{const t=Vt();Tt[Nt]=t,e=Nt=++qt,Tt[Nt]=n?t:{x:0,y:0}}Nt=e,wt&&kt.preloading.set(!0);const o=Ot&&Ot.href===t.href?Ot.promise:Ft(t);Ot=null;const s=xt={},{redirect:a,props:c,branch:i}=await o;if(s===xt&&(await Gt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Tt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Tt[Nt]=t,t&&scrollTo(t.x,t.y)}}async function Gt(t,e,n,r){if(t)return function(t,e={noscroll:!1,replaceState:!1}){const n=It(new URL(t,document.baseURI));return n?(Ut[e.replaceState?"replaceState":"pushState"]({id:Nt},"",t),Bt(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});kt.page.set(r),kt.preloading.set(!1),wt?wt.$set(n):(n.stores={page:{subscribe:kt.page.subscribe},preloading:{subscribe:kt.preloading.subscribe},session:kt.session},n.level0={props:await St},n.notify=kt.page.notify,wt=new $t({target:Ct,props:n,hydrate:!0})),Rt=e,Pt=JSON.stringify(r.query),At=!0,jt=!1}async function Ft(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!St){const t=()=>{};St=_t.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Lt)}let c,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Pt)return!0;const o=Rt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!jt&&!u&&Rt[c]&&Rt[c].part===e.i)return Rt[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Ht);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(bt[e.i]);let m;return m=At||!_t.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Lt):{}:_t.preloaded[c+1],s["level"+p]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Ht(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Jt(t){const e=It(new URL(t,document.baseURI));if(e)return Ot&&t===Ot.href||function(t,e){Ot={href:t,promise:e}}(t,Ft(e)),Ot.promise}let Kt;function zt(t){clearTimeout(Kt),Kt=setTimeout(()=>{Mt(t)},20)}function Mt(t){const e=Wt(t.target);e&&"prefetch"===e.rel&&Jt(e.href)}function Yt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Wt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=It(o);if(s){Bt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Ut.pushState({id:Nt},"",o.href)}}function Wt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Xt(t){if(Tt[Nt]=Vt(),t.state){const e=It(new URL(location.href));e?Bt(e,t.state.id):location.href=location.href}else qt=qt+1,function(t){Nt=t}(qt),Ut.replaceState({id:Nt},"",location.href)}var Qt;Qt={target:document.querySelector("#sapper")},"scrollRestoration"in Ut&&(Ut.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ut.scrollRestoration="auto"}),addEventListener("load",()=>{Ut.scrollRestoration="manual"}),function(t){Ct=t}(Qt.target),addEventListener("click",Yt),addEventListener("popstate",Xt),addEventListener("touchstart",Mt),addEventListener("mousemove",zt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ut.replaceState({id:qt},"",e);const n=new URL(location.href);if(_t.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=_t;St||(St=s&&s[0]),Gt(null,[],{error:c,status:a,session:o,level0:{props:St},level1:{props:{status:a,error:c},component:ft},segments:s},{host:e,path:n,query:Dt(r),params:{}})}();const r=It(n);return r?Bt(r,qt,!0,t):void 0});export{w as A,t as B,d as C,P as D,K as E,et as S,W as a,M as b,Y as c,J as d,Q as e,g as f,z as g,h,tt as i,f as j,_ as k,v as l,X as m,b as n,y as o,u as p,x as q,l as r,a as s,H as t,F as u,p as v,e as w,G as x,m as y,E as z};