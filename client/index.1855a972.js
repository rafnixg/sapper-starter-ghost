import{S as t,i as e,s,c as a,a as o,m as r,g as l,b as i,t as n,d as h,e as m,f as u,h as c,q as p,j as d,k as g,l as f,n as b,o as y,p as v,r as _,u as w,v as A,w as $,x as T}from"./client.219e3b52.js";import"./Avatar.28815b61.js";import{H as j,P as E}from"./Post-card.2e3bfd14.js";const x=[{title:"A Full and Comprehensive Style Test",url:"http://localhost:3000/",post_class:"post",feature_image:"https://demo.ghost.io/content/images/size/w2000/2018/10/testimg-cover.jpg",primary_tag:"Tag",excerpt:"Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.",date:"28/08/2020",reading_time:"5 min READ",authors:[{name:"Author name",url:"http://localhost:3000"}]},{title:"A Full and Comprehensive Style Test",url:"http://localhost:3000/",post_class:"post",feature_image:"https://demo.ghost.io/content/images/size/w2000/2018/10/testimg-cover.jpg",primary_tag:"Tag",excerpt:"Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.",date:"28/08/2020",reading_time:"5 min READ",authors:[{name:"Author name",url:"http://localhost:3000"}]},{title:"A Full and Comprehensive Style Test",url:"http://localhost:3000/",post_class:"post",feature_image:"https://demo.ghost.io/content/images/size/w2000/2018/10/testimg-cover.jpg",primary_tag:"Tag",excerpt:"Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.",date:"28/08/2020",reading_time:"5 min READ",authors:[{name:"Author name",url:"http://localhost:3000"}]},{title:"A Full and Comprehensive Style Test",url:"http://localhost:3000/",post_class:"post",feature_image:"https://demo.ghost.io/content/images/size/w2000/2018/10/testimg-cover.jpg",primary_tag:"Tag",excerpt:"Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.",date:"28/08/2020",reading_time:"5 min READ",authors:[{name:"Author name",url:"http://localhost:3000"}]},{title:"A Full and Comprehensive Style Test",url:"http://localhost:3000/",post_class:"post",feature_image:"https://demo.ghost.io/content/images/size/w2000/2018/10/testimg-cover.jpg",primary_tag:"Tag",excerpt:"Ghost comes with a beautiful default theme designed for publishers which can easily be adapted for most purposes, or you can build a custom theme to suit your needs.",date:"28/08/2020",reading_time:"5 min READ",authors:[{name:"Author name",url:"http://localhost:3000"}]}];function D(t,e,s){const a=t.slice();return a[0]=e[s],a}function C(t){let e,s;const u=[t[0]];let c={};for(let t=0;t<u.length;t+=1)c=$(c,u[t]);return e=new E({props:c}),{c(){a(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,a){r(e,t,a),s=!0},p(t,s){const a=0&s?l(u,[i(t[0])]):{};e.$set(a)},i(t){s||(n(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){m(e,t)}}}function S(t){let e,s,l,i,$,E,S;s=new j({props:{title:z,description:F}});let G=x,R=[];for(let e=0;e<G.length;e+=1)R[e]=C(D(t,G,e));const I=t=>h(R[t],1,1,()=>{R[t]=null});return{c(){e=u(),a(s.$$.fragment),l=u(),i=c("main"),$=c("div"),E=c("div");for(let t=0;t<R.length;t+=1)R[t].c();this.h()},l(t){p('[data-svelte="svelte-5drjar"]',document.head).forEach(d),e=g(t),o(s.$$.fragment,t),l=g(t),i=f(t,"MAIN",{id:!0,class:!0});var a=b(i);$=f(a,"DIV",{class:!0});var r=b($);E=f(r,"DIV",{class:!0});var n=b(E);for(let t=0;t<R.length;t+=1)R[t].l(n);n.forEach(d),r.forEach(d),a.forEach(d),this.h()},h(){document.title="Casper in svelte",y(E,"class","post-feed"),y($,"class","inner posts"),y(i,"id","site-main"),y(i,"class","site-main outer")},m(t,a){v(t,e,a),r(s,t,a),v(t,l,a),v(t,i,a),_(i,$),_($,E);for(let t=0;t<R.length;t+=1)R[t].m(E,null);S=!0},p(t,[e]){if(0&e){let s;for(G=x,s=0;s<G.length;s+=1){const a=D(t,G,s);R[s]?(R[s].p(a,e),n(R[s],1)):(R[s]=C(a),R[s].c(),n(R[s],1),R[s].m(E,null))}for(T(),s=G.length;s<R.length;s+=1)I(s);w()}},i(t){if(!S){n(s.$$.fragment,t);for(let t=0;t<G.length;t+=1)n(R[t]);S=!0}},o(t){h(s.$$.fragment,t),R=R.filter(Boolean);for(let t=0;t<R.length;t+=1)h(R[t]);S=!1},d(t){t&&d(e),m(s,t),t&&d(l),t&&d(i),A(R,t)}}}const z="ghost",F="The professional publishing platform.";export default class extends t{constructor(t){super(),e(this,t,null,S,s,{})}}