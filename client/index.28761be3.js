import{S as s,i as t,s as e,e as n,c as a,a as r,t as o,b as i,d as c,f as l,g as f,h,j as g,k as m,l as p,m as d,n as $,o as u,p as v,q as E,r as j,u as w,v as x,w as D,x as I,y as b,z as V}from"./client.e8bce6db.js";import{N as y,P as H}from"./Post-card.ff3303f1.js";function N(s){let t,e,w,x,D,I,b,V,H,N,k,q,z=s[1].title+"",A=s[1].description+"";return x=new y({props:{segment:s[0],settings:s[1]}}),{c(){t=n("header"),e=n("div"),w=n("div"),a(x.$$.fragment),D=r(),I=n("div"),b=n("h1"),V=o(z),H=r(),N=n("h2"),k=o(A),this.h()},l(s){t=i(s,"HEADER",{class:!0});var n=c(t);e=i(n,"DIV",{class:!0});var a=c(e);w=i(a,"DIV",{class:!0});var r=c(w);l(x.$$.fragment,r),D=f(r),I=i(r,"DIV",{class:!0});var o=c(I);b=i(o,"H1",{class:!0});var m=c(b);V=h(m,z),m.forEach(g),H=f(o),N=i(o,"H2",{class:!0});var p=c(N);k=h(p,A),p.forEach(g),o.forEach(g),r.forEach(g),a.forEach(g),n.forEach(g),this.h()},h(){m(b,"class","site-title"),m(N,"class","site-description"),m(I,"class","site-header-content"),m(w,"class","inner"),m(e,"class","outer site-header-background no-image"),m(t,"class","site-home-header")},m(s,n){p(s,t,n),d(t,e),d(e,w),$(x,w,null),d(w,D),d(w,I),d(I,b),d(b,V),d(I,H),d(I,N),d(N,k),q=!0},p(s,[t]){const e={};1&t&&(e.segment=s[0]),2&t&&(e.settings=s[1]),x.$set(e),(!q||2&t)&&z!==(z=s[1].title+"")&&u(V,z),(!q||2&t)&&A!==(A=s[1].description+"")&&u(k,A)},i(s){q||(v(x.$$.fragment,s),q=!0)},o(s){E(x.$$.fragment,s),q=!1},d(s){s&&g(t),j(x)}}}function k(s,t,e){let{segment:n}=t,{settings:a}=t;return s.$$set=s=>{"segment"in s&&e(0,n=s.segment),"settings"in s&&e(1,a=s.settings)},[n,a]}class q extends s{constructor(s){super(),t(this,s,k,N,e,{segment:0,settings:1})}}const{document:z}=b;function A(s,t,e){const n=s.slice();return n[2]=t[e],n}function B(s){let t,e;return t=new H({props:{post:s[2]}}),{c(){a(t.$$.fragment)},l(s){l(t.$$.fragment,s)},m(s,n){$(t,s,n),e=!0},p(s,e){const n={};1&e&&(n.post=s[2]),t.$set(n)},i(s){e||(v(t.$$.fragment,s),e=!0)},o(s){E(t.$$.fragment,s),e=!1},d(s){j(t,s)}}}function P(s){let t,e,o,h,u,I,b;e=new q({props:{settings:s[1]}});let y=s[0],H=[];for(let t=0;t<y.length;t+=1)H[t]=B(A(s,y,t));const N=s=>E(H[s],1,1,()=>{H[s]=null});return{c(){t=r(),a(e.$$.fragment),o=r(),h=n("main"),u=n("div"),I=n("div");for(let s=0;s<H.length;s+=1)H[s].c();this.h()},l(s){w('[data-svelte="svelte-p9dwzp"]',z.head).forEach(g),t=f(s),l(e.$$.fragment,s),o=f(s),h=i(s,"MAIN",{id:!0,class:!0});var n=c(h);u=i(n,"DIV",{class:!0});var a=c(u);I=i(a,"DIV",{class:!0});var r=c(I);for(let s=0;s<H.length;s+=1)H[s].l(r);r.forEach(g),a.forEach(g),n.forEach(g),this.h()},h(){z.title="Blog",m(I,"class","post-feed"),m(u,"class","inner posts"),m(h,"id","site-main"),m(h,"class","site-main outer")},m(s,n){p(s,t,n),$(e,s,n),p(s,o,n),p(s,h,n),d(h,u),d(u,I);for(let s=0;s<H.length;s+=1)H[s].m(I,null);b=!0},p(s,[t]){const n={};if(2&t&&(n.settings=s[1]),e.$set(n),1&t){let e;for(y=s[0],e=0;e<y.length;e+=1){const n=A(s,y,e);H[e]?(H[e].p(n,t),v(H[e],1)):(H[e]=B(n),H[e].c(),v(H[e],1),H[e].m(I,null))}for(V(),e=y.length;e<H.length;e+=1)N(e);x()}},i(s){if(!b){v(e.$$.fragment,s);for(let s=0;s<y.length;s+=1)v(H[s]);b=!0}},o(s){E(e.$$.fragment,s),H=H.filter(Boolean);for(let s=0;s<H.length;s+=1)E(H[s]);b=!1},d(s){s&&g(t),j(e,s),s&&g(o),s&&g(h),D(H,s)}}}async function M({params:s,query:t}){return{posts:await this.fetch("index.json").then(s=>s.json()).then(s=>s),settings:await this.fetch("settings.json").then(s=>s.json())}}function R(s,t,e){let{posts:n}=t,{settings:a}=t;return I(()=>{document.body.className="home-template"}),s.$$set=s=>{"posts"in s&&e(0,n=s.posts),"settings"in s&&e(1,a=s.settings)},[n,a]}export default class extends s{constructor(s){super(),t(this,s,R,P,e,{posts:0,settings:1})}}export{M as preload};
