import{S as s,i as t,s as e,e as n,t as a,c as r,a as i,b as o,d as l,f as c,g as h,h as f,j as g,k as m,l as d,m as p,n as u,o as $,p as v,q as E,r as j,u as w,v as x,w as D,x as I,y as V,z as y}from"./client.070cdc8a.js";import{N as b,P as H}from"./Post-card.05235d42.js";function N(s){let t,e,m=s[1].description+"";return{c(){t=n("h2"),e=a(m),this.h()},l(s){t=r(s,"H2",{class:!0});var n=i(t);e=o(n,m),n.forEach(l),this.h()},h(){c(t,"class","site-description")},m(s,n){h(s,t,n),f(t,e)},p(s,t){2&t&&m!==(m=s[1].description+"")&&g(e,m)},d(s){s&&l(t)}}}function k(s){let t,e,w,x,D,I,V,y,H,k,q=s[1].title+"";x=new b({props:{segment:s[0],settings:s[1]}});let z=s[1].description&&N(s);return{c(){t=n("header"),e=n("div"),w=n("div"),m(x.$$.fragment),D=d(),I=n("div"),V=n("h1"),y=a(q),H=d(),z&&z.c(),this.h()},l(s){t=r(s,"HEADER",{class:!0});var n=i(t);e=r(n,"DIV",{class:!0});var a=i(e);w=r(a,"DIV",{class:!0});var c=i(w);p(x.$$.fragment,c),D=u(c),I=r(c,"DIV",{class:!0});var h=i(I);V=r(h,"H1",{class:!0});var f=i(V);y=o(f,q),f.forEach(l),H=u(h),z&&z.l(h),h.forEach(l),c.forEach(l),a.forEach(l),n.forEach(l),this.h()},h(){c(V,"class","site-title"),c(I,"class","site-header-content"),c(w,"class","inner"),c(e,"class","outer site-header-background no-image"),c(t,"class","site-home-header")},m(s,n){h(s,t,n),f(t,e),f(e,w),$(x,w,null),f(w,D),f(w,I),f(I,V),f(V,y),f(I,H),z&&z.m(I,null),k=!0},p(s,[t]){const e={};1&t&&(e.segment=s[0]),2&t&&(e.settings=s[1]),x.$set(e),(!k||2&t)&&q!==(q=s[1].title+"")&&g(y,q),s[1].description?z?z.p(s,t):(z=N(s),z.c(),z.m(I,null)):z&&(z.d(1),z=null)},i(s){k||(v(x.$$.fragment,s),k=!0)},o(s){E(x.$$.fragment,s),k=!1},d(s){s&&l(t),j(x),z&&z.d()}}}function q(s,t,e){let{segment:n}=t,{settings:a}=t;return s.$$set=s=>{"segment"in s&&e(0,n=s.segment),"settings"in s&&e(1,a=s.settings)},[n,a]}class z extends s{constructor(s){super(),t(this,s,q,k,e,{segment:0,settings:1})}}const{document:A}=V;function B(s,t,e){const n=s.slice();return n[2]=t[e],n}function P(s){let t,e;return t=new H({props:{post:s[2]}}),{c(){m(t.$$.fragment)},l(s){p(t.$$.fragment,s)},m(s,n){$(t,s,n),e=!0},p(s,e){const n={};1&e&&(n.post=s[2]),t.$set(n)},i(s){e||(v(t.$$.fragment,s),e=!0)},o(s){E(t.$$.fragment,s),e=!1},d(s){j(t,s)}}}function M(s){let t,e,a,o,g,I,V;e=new z({props:{settings:s[1]}});let b=s[0],H=[];for(let t=0;t<b.length;t+=1)H[t]=P(B(s,b,t));const N=s=>E(H[s],1,1,()=>{H[s]=null});return{c(){t=d(),m(e.$$.fragment),a=d(),o=n("main"),g=n("div"),I=n("div");for(let s=0;s<H.length;s+=1)H[s].c();this.h()},l(s){w('[data-svelte="svelte-p9dwzp"]',A.head).forEach(l),t=u(s),p(e.$$.fragment,s),a=u(s),o=r(s,"MAIN",{id:!0,class:!0});var n=i(o);g=r(n,"DIV",{class:!0});var c=i(g);I=r(c,"DIV",{class:!0});var h=i(I);for(let s=0;s<H.length;s+=1)H[s].l(h);h.forEach(l),c.forEach(l),n.forEach(l),this.h()},h(){A.title="Blog",c(I,"class","post-feed"),c(g,"class","inner posts"),c(o,"id","site-main"),c(o,"class","site-main outer")},m(s,n){h(s,t,n),$(e,s,n),h(s,a,n),h(s,o,n),f(o,g),f(g,I);for(let s=0;s<H.length;s+=1)H[s].m(I,null);V=!0},p(s,[t]){const n={};if(2&t&&(n.settings=s[1]),e.$set(n),1&t){let e;for(b=s[0],e=0;e<b.length;e+=1){const n=B(s,b,e);H[e]?(H[e].p(n,t),v(H[e],1)):(H[e]=P(n),H[e].c(),v(H[e],1),H[e].m(I,null))}for(y(),e=b.length;e<H.length;e+=1)N(e);x()}},i(s){if(!V){v(e.$$.fragment,s);for(let s=0;s<b.length;s+=1)v(H[s]);V=!0}},o(s){E(e.$$.fragment,s),H=H.filter(Boolean);for(let s=0;s<H.length;s+=1)E(H[s]);V=!1},d(s){s&&l(t),j(e,s),s&&l(a),s&&l(o),D(H,s)}}}async function R({params:s,query:t}){return{posts:await this.fetch("index.json").then(s=>s.json()).then(s=>s),settings:await this.fetch("settings.json").then(s=>s.json())}}function S(s,t,e){let{posts:n}=t,{settings:a}=t;return I(()=>{document.body.className="home-template"}),s.$$set=s=>{"posts"in s&&e(0,n=s.posts),"settings"in s&&e(1,a=s.settings)},[n,a]}export default class extends s{constructor(s){super(),t(this,s,S,M,e,{posts:0,settings:1})}}export{R as preload};
