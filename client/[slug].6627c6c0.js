import{S as t,i as s,s as e,e as n,c as a,a as r,t as o,b as i,d as l,f as c,j as g,g as f,h,k as m,l as p,m as u,n as d,o as $,p as v,q as E,r as j,u as D,v as I,w,x as V,y as b,z as x}from"./client.e8bce6db.js";import{N as y,P as A}from"./Post-card.ff3303f1.js";function H(t){let s,e,n,a,i=t[2].posts.length+"",l=t[2].posts.length<=1?"post":"posts";return{c(){s=o("A collection of "),e=o(i),n=r(),a=o(l)},l(t){s=h(t,"A collection of "),e=h(t,i),n=f(t),a=h(t,l)},m(t,r){p(t,s,r),p(t,e,r),p(t,n,r),p(t,a,r)},p(t,s){4&s&&i!==(i=t[2].posts.length+"")&&$(e,i),4&s&&l!==(l=t[2].posts.length<=1?"post":"posts")&&$(a,l)},d(t){t&&g(s),t&&g(e),t&&g(n),t&&g(a)}}}function N(t){let s,e=t[2].description+"";return{c(){s=o(e)},l(t){s=h(t,e)},m(t,e){p(t,s,e)},p(t,n){4&n&&e!==(e=t[2].description+"")&&$(s,e)},d(t){t&&g(s)}}}function k(t){let s,e,D,I,w,V,b,x,A,k,q,P,z=t[2].name+"";function B(t,s){return t[2].description?N:H}I=new y({props:{segment:t[0],settings:t[1]}});let M=B(t),R=M(t);return{c(){s=n("header"),e=n("div"),D=n("div"),a(I.$$.fragment),w=r(),V=n("div"),b=n("div"),x=n("h1"),A=o(z),k=r(),q=n("h2"),R.c(),this.h()},l(t){s=i(t,"HEADER",{class:!0});var n=l(s);e=i(n,"DIV",{class:!0});var a=l(e);D=i(a,"DIV",{class:!0});var r=l(D);c(I.$$.fragment,r),r.forEach(g),a.forEach(g),w=f(n),V=i(n,"DIV",{class:!0});var o=l(V);b=i(o,"DIV",{class:!0});var m=l(b);x=i(m,"H1",{class:!0});var p=l(x);A=h(p,z),p.forEach(g),k=f(m),q=i(m,"H2",{class:!0});var u=l(q);R.l(u),u.forEach(g),m.forEach(g),o.forEach(g),n.forEach(g),this.h()},h(){m(D,"class","inner"),m(e,"class","outer site-nav-main"),m(x,"class","site-title"),m(q,"class","site-description"),m(b,"class","inner site-header-content"),m(V,"class","outer site-header-background no-image"),m(s,"class","site-archive-header")},m(t,n){p(t,s,n),u(s,e),u(e,D),d(I,D,null),u(s,w),u(s,V),u(V,b),u(b,x),u(x,A),u(b,k),u(b,q),R.m(q,null),P=!0},p(t,[s]){const e={};1&s&&(e.segment=t[0]),2&s&&(e.settings=t[1]),I.$set(e),(!P||4&s)&&z!==(z=t[2].name+"")&&$(A,z),M===(M=B(t))&&R?R.p(t,s):(R.d(1),R=M(t),R&&(R.c(),R.m(q,null)))},i(t){P||(v(I.$$.fragment,t),P=!0)},o(t){E(I.$$.fragment,t),P=!1},d(t){t&&g(s),j(I),R.d()}}}function q(t,s,e){let{segment:n}=s,{settings:a}=s,{tag:r}=s;return t.$$set=t=>{"segment"in t&&e(0,n=t.segment),"settings"in t&&e(1,a=t.settings),"tag"in t&&e(2,r=t.tag)},[n,a,r]}class P extends t{constructor(t){super(),s(this,t,q,k,e,{segment:0,settings:1,tag:2})}}const{document:z}=b;function B(t,s,e){const n=t.slice();return n[2]=s[e],n}function M(t){let s,e;return s=new A({props:{post:t[2]}}),{c(){a(s.$$.fragment)},l(t){c(s.$$.fragment,t)},m(t,n){d(s,t,n),e=!0},p(t,e){const n={};1&e&&(n.post=t[2]),s.$set(n)},i(t){e||(v(s.$$.fragment,t),e=!0)},o(t){E(s.$$.fragment,t),e=!1},d(t){j(s,t)}}}function R(t){let s,e,o,h,$,V,b,y;z.title=s=t[0].name,o=new P({props:{tag:t[0],settings:t[1]}});let A=t[0].posts,H=[];for(let s=0;s<A.length;s+=1)H[s]=M(B(t,A,s));const N=t=>E(H[t],1,1,()=>{H[t]=null});return{c(){e=r(),a(o.$$.fragment),h=r(),$=n("main"),V=n("div"),b=n("div");for(let t=0;t<H.length;t+=1)H[t].c();this.h()},l(t){D('[data-svelte="svelte-197vyt0"]',z.head).forEach(g),e=f(t),c(o.$$.fragment,t),h=f(t),$=i(t,"MAIN",{id:!0,class:!0});var s=l($);V=i(s,"DIV",{class:!0});var n=l(V);b=i(n,"DIV",{class:!0});var a=l(b);for(let t=0;t<H.length;t+=1)H[t].l(a);a.forEach(g),n.forEach(g),s.forEach(g),this.h()},h(){m(b,"class","post-feed"),m(V,"class","inner posts"),m($,"id","site-main"),m($,"class","site-main outer")},m(t,s){p(t,e,s),d(o,t,s),p(t,h,s),p(t,$,s),u($,V),u(V,b);for(let t=0;t<H.length;t+=1)H[t].m(b,null);y=!0},p(t,[e]){(!y||1&e)&&s!==(s=t[0].name)&&(z.title=s);const n={};if(1&e&&(n.tag=t[0]),2&e&&(n.settings=t[1]),o.$set(n),1&e){let s;for(A=t[0].posts,s=0;s<A.length;s+=1){const n=B(t,A,s);H[s]?(H[s].p(n,e),v(H[s],1)):(H[s]=M(n),H[s].c(),v(H[s],1),H[s].m(b,null))}for(x(),s=A.length;s<H.length;s+=1)N(s);I()}},i(t){if(!y){v(o.$$.fragment,t);for(let t=0;t<A.length;t+=1)v(H[t]);y=!0}},o(t){E(o.$$.fragment,t),H=H.filter(Boolean);for(let t=0;t<H.length;t+=1)E(H[t]);y=!1},d(t){t&&g(e),j(o,t),t&&g(h),t&&g($),w(H,t)}}}async function S({params:t,query:s}){const e=await this.fetch("settings.json").then(t=>t.json());return{tag:await this.fetch(`tag/${t.slug}.json`).then(t=>t.json()),settings:e}}function C(t,s,e){let{tag:n}=s,{settings:a}=s;return V(()=>{document.body.className="tag-template"}),t.$$set=t=>{"tag"in t&&e(0,n=t.tag),"settings"in t&&e(1,a=t.settings)},[n,a]}export default class extends t{constructor(t){super(),s(this,t,C,R,e,{tag:0,settings:1})}}export{S as preload};
