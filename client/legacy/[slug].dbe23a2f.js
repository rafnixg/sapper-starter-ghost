import{_ as t,a as n,b as r,c as a,i as c,s as e,d as s,S as o,g as i,f,l as u,m as l,k as h,h as m,o as p,p as v,u as d,r as g,z as E,w as $,x as y,y as b,t as I,n as R,A as D,e as _,j as x,C as A,D as N,E as S,v as V,I as w,J as P,q as M,K as j,L as C}from"./client.1bbd2683.js";import{N as T}from"./Nav.7d3321b1.js";import{A as H}from"./Avatar.bc0d6e24.js";function G(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,e=n(t);if(a){var s=n(this).constructor;c=Reflect.construct(e,arguments,s)}else c=e.apply(this,arguments);return r(this,c)}}function L(t){var n,r,a,c,e;return c=new T({props:{segment:t[0]}}),{c:function(){n=i("header"),r=i("div"),a=i("div"),f(c.$$.fragment),this.h()},l:function(t){n=u(t,"HEADER",{class:!0});var e=l(n);r=u(e,"DIV",{class:!0});var s=l(r);a=u(s,"DIV",{class:!0});var o=l(a);h(c.$$.fragment,o),o.forEach(m),s.forEach(m),e.forEach(m),this.h()},h:function(){p(a,"class","inner"),p(r,"class","outer site-nav-main"),p(n,"class","site-header")},m:function(t,s){v(t,n,s),d(n,r),d(r,a),g(c,a,null),e=!0},p:function(t,n){var r={};1&E(n,1)[0]&&(r.segment=t[0]),c.$set(r)},i:function(t){e||($(c.$$.fragment,t),e=!0)},o:function(t){y(c.$$.fragment,t),e=!1},d:function(t){t&&m(n),b(c)}}}function O(t,n,r){var a=n.segment,c=void 0===a?"":a;return t.$$set=function(t){"segment"in t&&r(0,c=t.segment)},[c]}var k=function(n){t(i,o);var r=G(i);function i(t){var n;return a(this,i),n=r.call(this),c(s(n),t,O,L,e,{segment:0}),n}return i}();function q(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,e=n(t);if(a){var s=n(this).constructor;c=Reflect.construct(e,arguments,s)}else c=e.apply(this,arguments);return r(this,c)}}function U(t,n,r){var a=t.slice();return a[1]=n[r],a}function z(t){var n,r,a,c,e=t[0].primary_tag+"";return{c:function(){n=i("section"),r=i("a"),a=I(e),this.h()},l:function(t){n=u(t,"SECTION",{class:!0});var c=l(n);r=u(c,"A",{href:!0});var s=l(r);a=R(s,e),s.forEach(m),c.forEach(m),this.h()},h:function(){p(r,"href",c=t[0].url),p(n,"class","post-full-tags")},m:function(t,c){v(t,n,c),d(n,r),d(r,a)},p:function(t,n){1&n&&e!==(e=t[0].primary_tag+"")&&D(a,e),1&n&&c!==(c=t[0].url)&&p(r,"href",c)},d:function(t){t&&m(n)}}}function B(t){var n,r,a=t[0].excerpt+"";return{c:function(){n=i("p"),r=I(a),this.h()},l:function(t){n=u(t,"P",{class:!0});var c=l(n);r=R(c,a),c.forEach(m),this.h()},h:function(){p(n,"class","post-full-custom-excerpt")},m:function(t,a){v(t,n,a),d(n,r)},p:function(t,n){1&n&&a!==(a=t[0].excerpt+"")&&D(r,a)},d:function(t){t&&m(n)}}}function F(t){var n,r,a;return r=new H({}),{c:function(){n=i("div"),f(r.$$.fragment),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var a=l(n);h(r.$$.fragment,a),a.forEach(m),this.h()},h:function(){p(n,"class","author-profile-image")},m:function(t,c){v(t,n,c),g(r,n,null),a=!0},p:V,i:function(t){a||($(r.$$.fragment,t),a=!0)},o:function(t){y(r.$$.fragment,t),a=!1},d:function(t){t&&m(n),b(r)}}}function J(t){var n,r,a;return{c:function(){n=i("img"),this.h()},l:function(t){n=u(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){p(n,"class","author-profile-image"),n.src!==(r=t[1].profile_image)&&p(n,"src",r),p(n,"alt",a=t[1].name)},m:function(t,r){v(t,n,r)},p:function(t,c){1&c&&n.src!==(r=t[1].profile_image)&&p(n,"src",r),1&c&&a!==(a=t[1].name)&&p(n,"alt",a)},i:V,o:V,d:function(t){t&&m(n)}}}function K(t){var n,r,a,c,e,s,o,f,h,g=t[1].name+"";return{c:function(){n=i("h2"),r=I(g),a=_(),c=i("p"),e=I("Read\n                          "),s=i("a"),o=I("more posts"),h=I("\n                          by this author."),this.h()},l:function(t){n=u(t,"H2",{});var i=l(n);r=R(i,g),i.forEach(m),a=x(t),c=u(t,"P",{});var f=l(c);e=R(f,"Read\n                          "),s=u(f,"A",{href:!0});var p=l(s);o=R(p,"more posts"),p.forEach(m),h=R(f,"\n                          by this author."),f.forEach(m),this.h()},h:function(){p(s,"href",f=t[1].url)},m:function(t,i){v(t,n,i),d(n,r),v(t,a,i),v(t,c,i),d(c,e),d(c,s),d(s,o),d(c,h)},p:function(t,n){1&n&&g!==(g=t[1].name+"")&&D(r,g),1&n&&f!==(f=t[1].url)&&p(s,"href",f)},d:function(t){t&&m(n),t&&m(a),t&&m(c)}}}function Q(t){var n,r,a,c,e,s,o,f,h,g,E,$,y,b,A=t[1].name+"",N=t[1].bio+"",S=t[1].name+"";return{c:function(){n=i("div"),r=i("h2"),a=I(A),c=_(),e=i("p"),s=I(N),o=_(),f=i("p"),h=i("a"),g=I("More posts"),$=I("\n                            by "),y=I(S),b=I("."),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var i=l(n);r=u(i,"H2",{});var p=l(r);a=R(p,A),p.forEach(m),c=x(i),e=u(i,"P",{});var v=l(e);s=R(v,N),v.forEach(m),o=x(i),f=u(i,"P",{});var d=l(f);h=u(d,"A",{href:!0});var E=l(h);g=R(E,"More posts"),E.forEach(m),$=R(d,"\n                            by "),y=R(d,S),b=R(d,"."),d.forEach(m),i.forEach(m),this.h()},h:function(){p(h,"href",E=t[1].url),p(n,"class","bio")},m:function(t,i){v(t,n,i),d(n,r),d(r,a),d(n,c),d(n,e),d(e,s),d(n,o),d(n,f),d(f,h),d(h,g),d(f,$),d(f,y),d(f,b)},p:function(t,n){1&n&&A!==(A=t[1].name+"")&&D(a,A),1&n&&N!==(N=t[1].bio+"")&&D(s,N),1&n&&E!==(E=t[1].url)&&p(h,"href",E),1&n&&S!==(S=t[1].name+"")&&D(y,S)},d:function(t){t&&m(n)}}}function W(t){var n,r,a,c;return r=new H({}),{c:function(){n=i("a"),f(r.$$.fragment),this.h()},l:function(t){n=u(t,"A",{href:!0,class:!0});var a=l(n);h(r.$$.fragment,a),a.forEach(m),this.h()},h:function(){p(n,"href",a=t[1].url),p(n,"class","author-avatar author-profile-image")},m:function(t,a){v(t,n,a),g(r,n,null),c=!0},p:function(t,r){(!c||1&r&&a!==(a=t[1].url))&&p(n,"href",a)},i:function(t){c||($(r.$$.fragment,t),c=!0)},o:function(t){y(r.$$.fragment,t),c=!1},d:function(t){t&&m(n),b(r)}}}function X(t){var n,r,a,c,e;return{c:function(){n=i("a"),r=i("img"),this.h()},l:function(t){n=u(t,"A",{href:!0,class:!0});var a=l(n);r=u(a,"IMG",{class:!0,src:!0,alt:!0}),a.forEach(m),this.h()},h:function(){p(r,"class","author-profile-image"),r.src!==(a=t[1].profile_image)&&p(r,"src",a),p(r,"alt",c=t[1].name),p(n,"href",e=t[1].url),p(n,"class","author-avatar")},m:function(t,a){v(t,n,a),d(n,r)},p:function(t,s){1&s&&r.src!==(a=t[1].profile_image)&&p(r,"src",a),1&s&&c!==(c=t[1].name)&&p(r,"alt",c),1&s&&e!==(e=t[1].url)&&p(n,"href",e)},i:V,o:V,d:function(t){t&&m(n)}}}function Y(t){var n,r,a,c,e,s,o,f,h,g,E,b=[J,F],I=[];function R(t,n){return t[1].profile_image?0:1}function D(t,n){return t[1].bio?Q:K}a=R(t),c=I[a]=b[a](t);var S=D(t),V=S(t),w=[X,W],P=[];function M(t,n){return t[1].profile_image?0:1}return f=M(t),h=P[f]=w[f](t),{c:function(){n=i("li"),r=i("div"),c.c(),e=_(),s=i("div"),V.c(),o=_(),h.c(),g=_(),this.h()},l:function(t){n=u(t,"LI",{class:!0});var a=l(n);r=u(a,"DIV",{class:!0});var i=l(r);c.l(i),e=x(i),s=u(i,"DIV",{class:!0});var f=l(s);V.l(f),f.forEach(m),i.forEach(m),o=x(a),h.l(a),g=x(a),a.forEach(m),this.h()},h:function(){p(s,"class","author-info"),p(r,"class","author-card"),p(n,"class","author-list-item")},m:function(t,c){v(t,n,c),d(n,r),I[a].m(r,null),d(r,e),d(r,s),V.m(s,null),d(n,o),P[f].m(n,null),d(n,g),E=!0},p:function(t,o){var i=a;(a=R(t))===i?I[a].p(t,o):(A(),y(I[i],1,1,(function(){I[i]=null})),N(),(c=I[a])||(c=I[a]=b[a](t)).c(),$(c,1),c.m(r,e)),S===(S=D(t))&&V?V.p(t,o):(V.d(1),(V=S(t))&&(V.c(),V.m(s,null)));var u=f;(f=M(t))===u?P[f].p(t,o):(A(),y(P[u],1,1,(function(){P[u]=null})),N(),(h=P[f])||(h=P[f]=w[f](t)).c(),$(h,1),h.m(n,g))},i:function(t){E||($(c),$(h),E=!0)},o:function(t){y(c),y(h),E=!1},d:function(t){t&&m(n),I[a].d(),V.d(),P[f].d()}}}function Z(t){var n,r,a,c;return{c:function(){n=i("figure"),r=i("img"),this.h()},l:function(t){n=u(t,"FIGURE",{class:!0});var a=l(n);r=u(a,"IMG",{src:!0,alt:!0}),a.forEach(m),this.h()},h:function(){r.src!==(a=t[0].feature_image)&&p(r,"src",a),p(r,"alt",c=t[0].title),p(n,"class","post-full-image")},m:function(t,a){v(t,n,a),d(n,r)},p:function(t,n){1&n&&r.src!==(a=t[0].feature_image)&&p(r,"src",a),1&n&&c!==(c=t[0].title)&&p(r,"alt",c)},d:function(t){t&&m(n)}}}function tt(t){for(var n,r,a,c,e,s,o,f,h,g,b,V,w,P,M,j,C,T,H,G,L,O,k,q,F,J,K,Q,W,X=t[0].title+"",tt=t[0].date+"",nt=t[0].reading_time+"",rt=t[0].content+"",at=t[0].primary_tag&&z(t),ct=t[0].excerpt&&B(t),et=t[0].authors,st=[],ot=0;ot<et.length;ot+=1)st[ot]=Y(U(t,et,ot));var it=function(t){return y(st[t],1,1,(function(){st[t]=null}))},ft=t[0].feature_image&&Z(t);return{c:function(){n=i("article"),r=i("header"),at&&at.c(),a=_(),c=i("h1"),e=I(X),s=_(),ct&&ct.c(),o=_(),f=i("div"),h=i("section"),g=i("ul");for(var t=0;t<st.length;t+=1)st[t].c();b=_(),V=i("section"),w=i("div"),P=i("time"),M=I(tt),C=_(),T=i("span"),H=i("span"),G=I("•"),L=_(),O=I(nt),k=_(),ft&&ft.c(),q=_(),F=i("section"),J=i("div"),K=I(rt),this.h()},l:function(t){n=u(t,"ARTICLE",{class:!0});var i=l(n);r=u(i,"HEADER",{class:!0});var p=l(r);at&&at.l(p),a=x(p),c=u(p,"H1",{class:!0});var v=l(c);e=R(v,X),v.forEach(m),s=x(p),ct&&ct.l(p),o=x(p),f=u(p,"DIV",{class:!0});var d=l(f);h=u(d,"SECTION",{class:!0});var E=l(h);g=u(E,"UL",{class:!0});for(var $=l(g),y=0;y<st.length;y+=1)st[y].l($);$.forEach(m),b=x(E),V=u(E,"SECTION",{class:!0});var I=l(V);w=u(I,"DIV",{class:!0});var D=l(w);P=u(D,"TIME",{class:!0,datetime:!0});var _=l(P);M=R(_,tt),_.forEach(m),C=x(D),T=u(D,"SPAN",{class:!0});var A=l(T);H=u(A,"SPAN",{class:!0});var N=l(H);G=R(N,"•"),N.forEach(m),L=x(A),O=R(A,nt),A.forEach(m),D.forEach(m),I.forEach(m),E.forEach(m),d.forEach(m),p.forEach(m),k=x(i),ft&&ft.l(i),q=x(i),F=u(i,"SECTION",{class:!0});var S=l(F);J=u(S,"DIV",{class:!0});var j=l(J);K=R(j,rt),j.forEach(m),S.forEach(m),i.forEach(m),this.h()},h:function(){p(c,"class","post-full-title"),p(g,"class","author-list"),p(P,"class","byline-meta-date"),p(P,"datetime",j=t[0].date),p(H,"class","bull"),p(T,"class","byline-reading-time"),p(w,"class","byline-meta-content"),p(V,"class","post-full-byline-meta"),p(h,"class","post-full-byline-content"),p(f,"class","post-full-byline"),p(r,"class","post-full-header"),p(J,"class","post-content"),p(F,"class","post-full-content"),p(n,"class",Q="post-full "+t[0].post_class)},m:function(t,i){v(t,n,i),d(n,r),at&&at.m(r,null),d(r,a),d(r,c),d(c,e),d(r,s),ct&&ct.m(r,null),d(r,o),d(r,f),d(f,h),d(h,g);for(var u=0;u<st.length;u+=1)st[u].m(g,null);d(h,b),d(h,V),d(V,w),d(w,P),d(P,M),d(w,C),d(w,T),d(T,H),d(H,G),d(T,L),d(T,O),d(n,k),ft&&ft.m(n,null),d(n,q),d(n,F),d(F,J),d(J,K),W=!0},p:function(t,c){var s=E(c,1)[0];if(t[0].primary_tag?at?at.p(t,s):((at=z(t)).c(),at.m(r,a)):at&&(at.d(1),at=null),(!W||1&s)&&X!==(X=t[0].title+"")&&D(e,X),t[0].excerpt?ct?ct.p(t,s):((ct=B(t)).c(),ct.m(r,o)):ct&&(ct.d(1),ct=null),1&s){var i;for(et=t[0].authors,i=0;i<et.length;i+=1){var f=U(t,et,i);st[i]?(st[i].p(f,s),$(st[i],1)):(st[i]=Y(f),st[i].c(),$(st[i],1),st[i].m(g,null))}for(A(),i=et.length;i<st.length;i+=1)it(i);N()}(!W||1&s)&&tt!==(tt=t[0].date+"")&&D(M,tt),(!W||1&s&&j!==(j=t[0].date))&&p(P,"datetime",j),(!W||1&s)&&nt!==(nt=t[0].reading_time+"")&&D(O,nt),t[0].feature_image?ft?ft.p(t,s):((ft=Z(t)).c(),ft.m(n,q)):ft&&(ft.d(1),ft=null),(!W||1&s)&&rt!==(rt=t[0].content+"")&&D(K,rt),(!W||1&s&&Q!==(Q="post-full "+t[0].post_class))&&p(n,"class",Q)},i:function(t){if(!W){for(var n=0;n<et.length;n+=1)$(st[n]);W=!0}},o:function(t){st=st.filter(Boolean);for(var n=0;n<st.length;n+=1)y(st[n]);W=!1},d:function(t){t&&m(n),at&&at.d(),ct&&ct.d(),S(st,t),ft&&ft.d()}}}function nt(t,n,r){var a=n.post;return t.$$set=function(t){"post"in t&&r(0,a=t.post)},[a]}var rt=function(n){t(i,o);var r=q(i);function i(t){var n;return a(this,i),n=r.call(this),c(s(n),t,nt,tt,e,{post:0}),n}return i}();function at(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,e=n(t);if(a){var s=n(this).constructor;c=Reflect.construct(e,arguments,s)}else c=e.apply(this,arguments);return r(this,c)}}var ct=C.document;function et(t){var n,r,a,c,e,s,o,I;return ct.title=n=t[0].title,a=new k({}),o=new rt({props:{post:t[0]}}),{c:function(){r=_(),f(a.$$.fragment),c=_(),e=i("main"),s=i("div"),f(o.$$.fragment),this.h()},l:function(t){M('[data-svelte="svelte-iu3vwn"]',ct.head).forEach(m),r=x(t),h(a.$$.fragment,t),c=x(t),e=u(t,"MAIN",{id:!0,class:!0});var n=l(e);s=u(n,"DIV",{class:!0});var i=l(s);h(o.$$.fragment,i),i.forEach(m),n.forEach(m),this.h()},h:function(){p(s,"class","inner"),p(e,"id","site-main"),p(e,"class","site-main outer")},m:function(t,n){v(t,r,n),g(a,t,n),v(t,c,n),v(t,e,n),d(e,s),g(o,s,null),I=!0},p:function(t,r){var a=E(r,1)[0];(!I||1&a)&&n!==(n=t[0].title)&&(ct.title=n);var c={};1&a&&(c.post=t[0]),o.$set(c)},i:function(t){I||($(a.$$.fragment,t),$(o.$$.fragment,t),I=!0)},o:function(t){y(a.$$.fragment,t),y(o.$$.fragment,t),I=!1},d:function(t){t&&m(r),b(a,t),t&&m(c),t&&m(e),b(o)}}}function st(t){return ot.apply(this,arguments)}function ot(){return(ot=w(P.mark((function t(n){var r,a,c;return P.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.params,n.query,t.next=3,this.fetch("blog/".concat(r.slug,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(c=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{post:c});case 11:this.error(a.status,c.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function it(t,n,r){var a=n.post;return j((function(){document.body.className+=" post-template"})),t.$$set=function(t){"post"in t&&r(0,a=t.post)},[a]}var ft=function(n){t(i,o);var r=at(i);function i(t){var n;return a(this,i),n=r.call(this),c(s(n),t,it,et,e,{post:0}),n}return i}();export default ft;export{st as preload};